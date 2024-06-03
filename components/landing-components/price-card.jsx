"use client"

import { useSidebarState } from "@/hooks/use-sidebar-state"
import { request } from "@/services/apiClient"

// const url = process.env.NEXT_PUBLIC_BASE_URL

const PriceCard = ({ planId, planName, price, planFeature, user }) => {
  const { togglePrice } = useSidebarState()
  const handlePayment = async (planId) => {
    if (!user) {
      alert("You must be logged in to purchase")
    }
    const data = {
      name: user.email,
      amount: price,
      number: "9999999999",
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now() + planId,
    }
    const responseData = await request("POST", "/api/payments/initiate", data)
    console.log("responseData: ", responseData)
    if (responseData.success === true) {
      window.location.href =
        responseData.data.instrumentResponse.redirectInfo.url
    } else alert("something went wrong")
  }
  return (
    <div className="card relative h-auto w-auto">
      <div
        id="card_1_front"
        className={`px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full transition all duration-400 ease-in-out
              ${togglePrice ? "backface-hidden rotate-y-180" : ""}
              `}
      >
        <div className="relative">
          <p className="text-6xl pl-2 font-bold before:content-['₹'] before:absolute before:text-sm before:top-0 before:left-0">
            {price}
            <span className="text-sm font-normal tracking-widest">
              /per month
            </span>
          </p>
        </div>

        <div className="py-10">
          <h3 className="text-xl font-bold pb-3">{planName}</h3>
          {/* <p className="leading-relaxed">
            For Beginner Who Want To Scale Business Globally
          </p> */}
        </div>

        <ul className="space-y-4 pb-10">
          {planFeature.map((item) => (
            <li key={item.id}>
              {/* <BiAnchor className="w-4 h-4" /> */}
              <span className="pl-4">{item.featureName}</span>
            </li>
          ))}
        </ul>
        {planName !== "Free" && (
          <button className="card_btn" onClick={() => handlePayment(planId)}>
            Get Started
          </button>
        )}
      </div>

      <div
        id="card_1_back"
        className={`px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0 transition all duration-400 ease-in-out ${
          togglePrice ? "" : "backface-hidden rotate-y-180"
        }`}
      >
        <div className="relative">
          <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
            120
            <span className="text-sm font-normal tracking-widest">
              /per month
            </span>
          </p>
        </div>

        <div className="py-10">
          <h3 className="text-xl font-bold pb-3">Basic</h3>
          <p className="leading-relaxed">
            For Beginner Who Want To Scale Business Globally
          </p>
        </div>

        <ul className="space-y-4 pb-10">
          <li>
            <i className="fa-solid fa-bookmark text-color-secondary"></i>
            <span className="pl-4">Expense Management</span>
          </li>
          <li>
            <i className="fa-solid fa-bookmark text-color-secondary"></i>
            <span className="pl-4">Card Management</span>
          </li>
          <li>
            <i className="fa-solid fa-bookmark text-color-gray"></i>
            <span className="pl-4">Instant Statistics</span>
          </li>
          <li>
            <i className="fa-solid fa-bookmark text-color-gray"></i>
            <span className="pl-4">Bookmark Function</span>
          </li>
          <li>
            <i className="fa-solid fa-bookmark text-color-gray"></i>
            <span className="pl-4">Accounting System</span>
          </li>
        </ul>

        <button className="card_btn">Get Started</button>
      </div>
    </div>
  )
}

export default PriceCard

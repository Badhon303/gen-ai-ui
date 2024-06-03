"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { request } from "@/services/apiClient"
import { useSidebarState } from "@/hooks/use-sidebar-state"

const Page = ({ params }) => {
  const router = useRouter()
  let str = params.slug
  let digits = str.match(/\d+/g)

  let lastNumber = digits[digits.length - 1]
  let lastDigit = lastNumber[lastNumber.length - 1]
  useEffect(() => {
    const handlePayment = async () => {
      const data = {
        subscriptionPlanId: lastDigit,
      }
      const responseData = await request(
        "POST",
        `/api/payments/status/${params.slug}`,
        data
      )
      console.log("responseData: ", responseData)
      if (responseData.success === true) {
        router.push("/")
        alert("Payment successful")
      } else alert("something went wrong")
    }
    handlePayment()
  }, [lastDigit, params.slug, router])
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>Payment Status for {params.slug}</div>
    </div>
  )
}

export default Page

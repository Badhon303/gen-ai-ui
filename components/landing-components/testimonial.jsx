"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const userPics = document.querySelectorAll(".user-pic")
    const handleClick = (index) => {
      setActiveIndex(index)
    }
    userPics.forEach((pic, index) => {
      pic.addEventListener("click", () => handleClick(index))
    })
    return () => {
      userPics.forEach((pic, index) => {
        pic.removeEventListener("click", () => handleClick(index))
      })
    }
  }, [])

  return (
    <section id="testimonial">
      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-color-secondary mb-4">User Review</h4>
          <h1 className="title">
            What Clients Say About Our App After Using It
          </h1>
        </div>

        {/* Review container */}
        <div className="mt-8">
          <div className="flex items-center justify-center flex-wrap">
            {["user6.jpg", "user7.webp", "user6.jpg", "user7.webp"].map(
              (user, index) => (
                <Image
                  key={index}
                  src={`/img/${user}`}
                  alt=""
                  width={80}
                  height={80}
                  className={`h-20 w-20 rounded-full p-1 m-3 duration-200 cursor-pointer user-pic ${
                    index === activeIndex ? "active-pic" : ""
                  }`}
                />
              )
            )}
          </div>

          <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
            {[
              {
                text: "As a law student, LawKey has been an invaluable resource for me. The section mapping feature has saved me countless hours of work, allowing me to focus more on understanding the law",
                name: "Anuj Bansal",
                title: "Law Student",
              },
              {
                text: "I highly recommend LawKey to anyone looking to stay ahead in the legal profession. The depth of insights provided by the platform is unmatched, making it an indispensable tool for legal professionals",
                name: "Abhijit Chatterjee",
                title: "Judge",
              },
              {
                text: "LawKey has been instrumental in helping our police department understand the legal nuances of filing charge sheets based on FIRs. The platform's comprehensive resources have empowered us to navigate complex legal processes with confidence and accuracy.",
                name: "Ritam Kundu",
                title: "Police Officer",
              },
              {
                text: "LawKey has completely transformed the way I conduct legal research. The platform is intuitive, efficient, and incredibly powerful.",
                name: "Gaitri Tripathi",
                title: "Lawyer",
              },
            ].map((review, index) => (
              <div
                key={index}
                className={`user-text ${
                  index === activeIndex ? "active-text" : ""
                }`}
              >
                <p className="md:text-2xl mb-6">{review.text}</p>
                <h4 className="font-bold text-color-secondary mb-1">
                  {review.name}
                </h4>
                <p>{review.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

import React from "react"
import Image from "next/image"
import hero4 from "@/public/img/hero4.webp"

const LandingHome = () => {
  return (
    <section id="home" className="relative">
      <div className="blob1"></div>

      <div className="blob2"></div>

      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
            <h1 className="title mb-4">Our mission is</h1>
            <p className="leading-relaxed mb-10">
              To empower legal professionals, judges, and law students with the
              tools they need to thrive in today&apos;s fast-paced legal
              landscape.
            </p>
            <p className="leading-relaxed mb-10">
              Founded by a team of passionate legal experts and AI enthusiasts,
              LawKey is the result of extensive research and software
              development aimed at integrating technology seamlessly into the
              legal field.
            </p>
            <button className="btn">Get Started</button>
          </div>

          <div className="md:w-1/2 py-24">
            <Image src={hero4} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHome

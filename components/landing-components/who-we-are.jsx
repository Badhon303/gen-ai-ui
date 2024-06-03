import React from "react"
import Image from "next/image"
import about from "@/public/img/about.webp"

const WhoWeAre = () => {
  return (
    <section id="about-us" className="relative">
      <div className="blob1"></div>

      <div className="blob2"></div>

      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
            <h1 className="title mb-4">Who We Are</h1>
            <p className="leading-relaxed mb-10">
              Driven by our commitment to excellence and innovation, we are
              dedicated to providing our clients with unparalleled access to
              legal information and insights. With LawKey, you can trust that
              you&apos;re receiving accurate, up-to-date information right at
              your fingertips, enabling you to make informed decisions to ahead
              of the curve.
            </p>
            <p className="leading-relaxed mb-10">
              Join us on our journey to reshape the future of legal research.
              Explore LawKey today and experience the transformative power of
              innovation for yourself.
            </p>
            <button className="btn">Get Started</button>
          </div>

          <div className="md:w-1/2 py-24">
            <Image src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

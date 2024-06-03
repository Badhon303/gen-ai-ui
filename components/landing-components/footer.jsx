import React from "react"
import Image from "next/image"
import logo from "@/public/img/lawkey_logo.webp"

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-color-primary-dark relative">
        <div className="container py-10">
          <div className="grid gap-10 md:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Law Key</h4>
              <p className="leading-relaxed">
                At LawKey, we understand that every legal professional has
                unique needs and objectives. That&apos;s why we offer a variety
                of tailored services designed to empower you in your legal
                practice or studies. Here&apos;s how LawKey can help unlock your
                full potential
              </p>
              <Image src={logo} alt="logo" className="w-20 h-20" />
              <div className="flex gap-5 items-center">
                {/* <p>Follow Us</p> */}
                {/* <i className="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                <i className="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i>
                <i className="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i>
                <i className="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i> */}
              </div>
            </div>
            <div className="flex justify-between md:justify-around">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">Home</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#services">Services</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#features">Features</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#about-us">About Us</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              {/* 
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Help</h4>
                <ul className="space-y-3">
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#">About Us</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#features">Partners</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#testimonial">Career</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#pricing">Reviews</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#blog">Terms & Conditions</a>
                  </li>
                  <li className="underline hover:no-underline hover:text-color-secondary">
                    <a href="#contact">Help</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Contact Us</h4>
              <p className="leading-relaxed">
                CD 271, CD Block, Sector 1, Bidhannagar, Kolkata - 700 064,
                INDIA.
              </p>
              <div>
                <div>
                  <span className="font-bold">Phone: </span>+91 87774 08524
                </div>
                <div>
                  <span className="font-bold">Email: </span>shalini@lawkey.co.in
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10 border-t border-color-gray">
            <p>2024 &copy; LawKey. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

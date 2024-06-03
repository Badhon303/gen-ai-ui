import Image from "next/image"

import ios from "@/public/img/ios-store-dark.png"
import gplay from "@/public/img/g-play-dark.png"

const Download = () => {
  return (
    <section id="download-app" className="bg-color-primary-light">
      <div className="container h-[80vh] grid place-items-center">
        <div className="text-center md:w-2/3 m-auto">
          <h1 className="title">Download App Now And Save Your Money</h1>
          <p className="leading-relaxed pt-5">
            Serving an impressive list of long-term money with experience and
            expertise in multiple industries.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
            <a
              href="#"
              className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
            >
              <Image src={ios} alt="" />
            </a>
            <a
              href="#"
              className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70"
            >
              <Image src={gplay} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download

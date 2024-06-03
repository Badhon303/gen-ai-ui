import React from "react"

const Works = () => {
  return (
    <section id="how-it-works" className="bg-color-primary-light">
      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-color-secondary mb-4">How It Works</h4>
          <h1 className="title">Save Time with our App</h1>
        </div>

        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          {/* <!-- card 1  --> */}
          <div className="text-center cursor-pointer">
            <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
              <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line.png')] lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                1
              </p>
            </div>
            <h3 className="text-xl font-bold py-4">Install The App</h3>
            {/* <p className="leading-relaxed">
              We use an application designed a testing gnose to keep away
            </p> */}
          </div>

          {/* <!-- card 2  --> */}
          <div className="text-center cursor-pointer">
            <div className="relative inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-secondary">
              <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/img/line-bottom.png')] lg:after:absolute lg:after:top-10 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">
                2
              </p>
            </div>
            <h3 className="text-xl font-bold py-4">Setup Your Profile</h3>
            {/* <p className="leading-relaxed">
              We use an application designed a testing gnose to keep away
            </p> */}
          </div>
          {/* <!-- card 3  --> */}
          <div className="text-center cursor-pointer">
            <div className="relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
              <p className="text-6xl">3</p>
            </div>
            <h3 className="text-xl font-bold py-4">Enjoy The Features!</h3>
            {/* <p className="leading-relaxed">
              We use an application designed a testing gnose to keep away
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works

import PrelineScript from "@/components/PrelineScript"
import Header from "@/components/landing-components/header"
import HeroSection from "@/components/landing-components/hero-section"
import About from "@/components/landing-components/about"
import LandingHome from "@/components/landing-components/landing-home"
import Services from "@/components/landing-components/services"
import Features from "@/components/landing-components/features"
import Works from "@/components/landing-components/works"
import Testimonial from "@/components/landing-components/testimonial"
import Price from "@/components/landing-components/price"
import Values from "@/components/landing-components/values"
import Download from "@/components/landing-components/download"
import Contact from "@/components/landing-components/contact"
import Footer from "@/components/landing-components/footer"
import WhoWeAre from "@/components/landing-components/who-we-are"
import { getSession } from "@/utils/get-session"

import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

export default async function Home() {
  const session = await getSession()
  return (
    <div className="bg-color-primary text-color-white tracking-wider">
      <Header isLoggedIn={session.isLoggedIn} />
      <div>
        <LandingHome />
        <Services />
        <Features />
        <Works />
        <WhoWeAre />
        <ErrorBoundary
          fallback={
            <div className="flex w-full items-center justify-center">
              Something went wrong 😥🙃
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="flex w-full items-center justify-center">
                <span>Loading...</span>
              </div>
            }
          >
            <Price user={session.user} />
          </Suspense>
        </ErrorBoundary>

        <Testimonial />
        {/* <Values /> */}
        <Download />
        <Contact />
        <Footer />
      </div>
      {/* <HeroSection />
      <About /> */}
      <PrelineScript />
    </div>
  )
}

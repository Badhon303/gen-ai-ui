"use client"

import React, { useEffect, useState } from "react"
import { FiAlignJustify } from "react-icons/fi"
// import { getSession } from "@/utils/get-session"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Header = ({ isLoggedIn }) => {
  const [mail, setMail] = useState("")
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [err, setErr] = useState("")
  const [register, setRegister] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [chat, setChat] = useState(false)

  const router = useRouter()

  function validateEmailRegex(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function checkPasswordLength(password) {
    const passwordString = String(password)
    return passwordString.length >= 6
  }

  function checkNameLength(name) {
    const nameString = String(name)
    return nameString.length >= 3
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Submit data: ", { mail, name, pass })
    const validMail = validateEmailRegex(mail)
    const validPass = checkPasswordLength(pass)
    const validName = checkNameLength(name)
    if (register) {
      if (!validName) {
        setErr("Name Should be at least 3 characters")
      }
      if (!validPass) {
        setErr("Pass Should be at least 6 characters")
      }
      if (!validMail) {
        setErr("Invalid email address")
      }
      if (validName && validPass && validMail) {
        setErr("")
      }
    } else {
      if (!validPass) {
        setErr("Pass Should be at least 6 characters")
      }
      if (!validMail) {
        setErr("Invalid email address")
      }
      if (validMail && validPass) {
        setErr("")
      }
    }
    try {
      const registerValues = {
        email: mail,
        username: name,
        password: pass,
      }
      const loginValues = {
        identifier: mail,
        password: pass,
      }
      const url = register ? "/api/register" : "/api/login"
      setLoading(true)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register ? registerValues : loginValues),
      })
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error?.message)
      } else {
        // const session = await getSession()
        // setChat(true)
        HSOverlay.close("#hs-slide-down-animation-modal")
        router.refresh()
        // router.refresh()
      }
    } catch (error) {
      alert("Uh oh! Something went wrong.")
      // toast({
      //   variant: "destructive",
      //   title: "Uh oh! Something went wrong.",
      //   description: `There was a problem with your Login request. (${error})`,
      // })
    } finally {
      setLoading(false)
    }
  }

  const handleLogOut = async () => {
    await fetch("/api/logout")
    // router.push("/")
    window.location.reload()
    // router.refresh()
    // setChat(false)
  }

  useEffect(() => {
    const navbar = document.querySelector("header")
    const sections = document.querySelectorAll("section")
    const navlinks = document.querySelectorAll("nav ul li a")

    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add(
          "bg-color-primary-dark",
          "border-b",
          "border-color-gray"
        )
      } else {
        navbar.classList.remove(
          "bg-color-primary-dark",
          "border-b",
          "border-color-gray"
        )
      }

      let current = "home"
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id")
        }
      })

      navlinks.forEach((item) => {
        item.classList.remove("text-color-secondary")
        if (item.href.includes(current)) {
          item.classList.add("text-color-secondary")
        }
      })
    }

    const hamburger = document.querySelector("#hamburger")
    const menu = document.querySelector("#menu")
    const hLinks = document.querySelectorAll("#hLink")
    const faSolid = document.querySelector(".fa-solid")

    const toggleMenu = () => {
      menu.classList.toggle("hidden")
      faSolid.classList.toggle("fa-xmark")
    }

    window.addEventListener("scroll", handleScroll)
    hamburger.addEventListener("click", toggleMenu)
    hLinks.forEach((link) => link.addEventListener("click", toggleMenu))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      hamburger.removeEventListener("click", toggleMenu)
      hLinks.forEach((link) => link.removeEventListener("click", toggleMenu))
    }
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <nav className="container flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-color-white">Law</span>Key
            {/* <Image src={logo} alt="logo" className="h-8 w-8" /> */}
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:text-color-secondary ease-in duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact
              </a>
            </li>
            {isLoggedIn && (
              <li>
                <Link
                  href="/chat"
                  className="hover:text-color-secondary ease-in duration-200"
                >
                  Chat
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button
                  type="button"
                  className="bg-color-secondary px-9 py-3 rounded-md font-bold"
                  onClick={() => handleLogOut()}
                >
                  Log Out
                </button>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <button
                  data-hs-overlay="#hs-slide-down-animation-modal"
                  type="button"
                  className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {register ? "Register" : "Log In"}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* modal */}
        <div
          id="hs-slide-down-animation-modal"
          className="hs-overlay hidden size-full fixed top-10 start-96 overflow-x-hidden overflow-y-auto pointer-events-none"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-[#0f1638] border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 border-[#090e23] dark:shadow-neutral-700/70">
              <div className="flex justify-between items-center py-3 px-4 border-b border-[#090e23]">
                <h3 className="font-bold text-white">
                  {register ? "Register" : "Log In"} to LawKey
                </h3>
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  data-hs-overlay="#hs-slide-down-animation-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="space-y-3">
                  {register && (
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-floating-input-email-value"
                        className="peer p-4 block w-full text-black border-2 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                        placeholder="John"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                      />
                      <label
                        htmlFor="hs-floating-input-email-value"
                        className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                      >
                        Name
                      </label>
                    </div>
                  )}
                  <div className="relative">
                    <input
                      type="email"
                      className="peer p-4 block w-full text-black border-2 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                      placeholder="you@email.com"
                      required
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      autoFocus
                    />
                    <label
                      htmlFor="hs-floating-input-email-value"
                      className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      className="peer p-4 block w-full border-2 border-gray-200 rounded-lg text-black text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                      placeholder="********"
                      value={pass}
                      required
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <label
                      htmlFor="hs-floating-input-passowrd-value"
                      className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                    >
                      Password
                    </label>
                  </div>
                  <p
                    className="text-sm text-red-600 mt-2"
                    id="hs-validation-name-error-helper"
                  >
                    {err}
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center border-t border-[#090e23]">
                  <div className="ps-4 text-sm">
                    {register ? "Have" : "Don't have"} an account,{" "}
                    <span
                      className="text-orange-600 hover:cursor-pointer hover:text-green-600 duration-300"
                      onClick={() => setRegister(!register)}
                    >
                      {loading ? "Loading..." : register ? "Login" : "Register"}
                    </span>
                  </div>
                  <div className="gap-x-2 py-3 px-4  dark:border-neutral-700">
                    <button
                      type="button"
                      className="py-2 me-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      data-hs-overlay="#hs-slide-down-animation-modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {register ? "Register" : "Login"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile screen */}
        <div id="hamburger" className="lg:hidden cursor-pointer z-50">
          <FiAlignJustify className="w-6 h-6" />
        </div>

        <div
          id="menu"
          className="hidden bg-color-primary-dark h-[100vh] absolute inset-0"
        >
          <ul className="h-full grid place-items-center py-20">
            <li>
              <a
                id="hLink"
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="hLink"
                href="#features"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                id="hLink"
                href="#testimonial"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                id="hLink"
                href="#pricing"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                id="hLink"
                href="#blog"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                id="hLink"
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <button className="btn">free trial</button>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

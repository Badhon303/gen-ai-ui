"use client"

import { useSidebarState } from "@/hooks/use-sidebar-state"

const PriceButton = () => {
  const { setTogglePrice } = useSidebarState()
  return (
    <label className="cursor-pointer relative inline-block w-20 h-8 rounded-full">
      <input
        type="checkbox"
        id="toggleBtn"
        className="peer opacity-0 w-0 h-0"
        onChange={() => setTogglePrice()}
      />
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
    </label>
  )
}

export default PriceButton

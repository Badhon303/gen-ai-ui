import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Content from "@/components/content"
import { ToastContainer } from "react-toastify"
import PrelineScript from "@/components/PrelineScript"

export default function Chat() {
  return (
    <div className="relative">
      <Header />
      <Sidebar />
      <Content />
      <ToastContainer />
      <PrelineScript />
    </div>
  )
}

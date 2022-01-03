import * as React from "react"
import Header from "./pages/header"
import Footer from "./pages/footer"

export default function Layout({ styles, children }) {
  return (
    <>
      <Header />
      <div class="bg-gray-900" />
      <div
        class={`max-w-2xl min-h-screen m-auto bg-gray-800 justify-center rounded-lg my-9 shadow-xl
        ${styles}`}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

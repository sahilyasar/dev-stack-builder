import { Suspense } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Technologies from "./components/Technologies/Technologies"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className="text-center">Technologies Loading...</div>}>
        <Technologies></Technologies>
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="top-right" />

    </>
  )
}

export default App

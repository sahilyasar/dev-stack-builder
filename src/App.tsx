import { Suspense } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Technologies from "./components/Technologies/Technologies"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div>Technologies Loading...</div>}>
        <Technologies></Technologies>
      </Suspense>
    </>
  )
}

export default App

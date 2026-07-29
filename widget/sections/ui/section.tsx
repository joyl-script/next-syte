import { FaPhoneVolume } from "react-icons/fa6";
import style from './../../../app/globals.css'
import { Nav } from "./nav"

export const Section = () => {
  return (
    <section className="bg-[#333333] p-4">
      <div className="container flex justify-between items-center">
        <Nav />
        <div className="flex items-center gap-3">
          <FaPhoneVolume className="img" />
          <span className="text-white">(219) 555-0114</span>
        </div>
      </div>
    </section>
  )
}
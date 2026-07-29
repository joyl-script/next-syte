import Image from "next/image"
import { FooterColumns } from "./footerColumns"

export const Footer = () => {
  return (
    <footer className="mt-15 bg-[#1A1A1A] p-15">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/plant 1.svg" alt="Ecobazar logo" width={24} height={24} />
          <span className="text-white text-lg font-bold">Ecobazar</span>
        </div>
        <FooterColumns />
      </div>
    </footer>
  )
}
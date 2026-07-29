import Link from "next/link"


const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Pages', href: '/pages' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]
export const Nav = () => {

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <Link className="text-[#999999] hover:text-white transition-colors duration-300 ease-in-out" key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
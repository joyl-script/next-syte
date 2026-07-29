const columns = [
  {
    title: 'My Account',
    links: ['My Account', 'Order History', 'Shoping Cart', 'Wishlist']
  },
  {
    title: 'Helps',
    links: ['Contact', 'Faqs', 'Terms & Condition', 'Privacy Policy']
  },
  {
    title: 'Proxy',
    links: ['About', 'Shop', 'Product', 'Track Order']
  },
  {
    title: 'Categories',
    links: ['Fruit & Vegetables', 'Meat & Fish', 'Bread & Bakery', 'Beauty & Health']
  },
]

export const FooterColumns = () => {
  return (
    <>
      {columns.map((column) => (
        <div key={column.title}>
          <h4 className="text-[white]">{column.title}</h4>
          <ul className="mt-5">
            {column.links.map((link) => (
              <li className="mt-3" key={link}>
                <a className="text-[#999999] hover:text-white transition-colors duration-300 ease-in-out" href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
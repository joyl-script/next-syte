import { CiSearch } from "react-icons/ci";

interface DearchProps {
  value: string,
  onChange: (value: string) => void,
  onSubmit: () => void
}

export const Search = ({ value, onChange, onSubmit }: DearchProps) => {
  return (
    <div className="flex items-center">
      <div className="border border-[#E6E6E6] rounded-l-2xl flex items-center p-2 ">
        <CiSearch />
        <input type="text" placeholder="Search" className="ml-2 focus: outline-none w-100"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSubmit()}
        />
      </div>
      <button
        onClick={onSubmit}
        className="text-white cursor-pointer bg-[#00B207] p-2 pl-5 pr-5 rounded-r-2xl ">Search</button>
    </div>
  )
}
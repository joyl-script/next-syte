import { Logo } from "./logo"
import { Search } from "./search"
import { Action } from "./actions"

interface HeaderProps {
  searchValue: string,
  onSearchChange: (valuer: string) => void,
  onSearchSubmit: () => void
}


export const Header = ({ searchValue, onSearchChange, onSearchSubmit }: HeaderProps) => {
  return (
    <header className="pt-5 pb-5">
      <div className="container flex justify-between items-center">
        <Logo />
        <Search value={searchValue} onChange={onSearchChange} onSubmit={onSearchSubmit} />
        <Action />
      </div>
    </header>

  )
}
import { Searchbar } from "./style";
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';

export const SearchBar = () => {
  return (
    <Searchbar>
      <form className="search-bar">
        <input type="text" placeholder="O que está procurando?" />
        <SearchIcon />
      </form>
    </Searchbar>
  )
}
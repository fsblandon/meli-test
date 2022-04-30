import Link from "next/link";
import Image from'next/image';
import { useState, useEffect } from "react";
import { SearchFrom, SearchInput, SearchLink } from "../style";
import Router from 'next/router'
import SearchSchema from "../../schema/search-schema/index";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [windows, setWindows] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleEnter = (event: any) => {
    const { key } = event;
    const { value } = event.target;
    if (key === "Enter") {
      Router.push({ pathname: '/items', query: { search: value } })
      setSearch(value);
    }
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("search");
    setWindows(window.location.href);
    myParam ? setSearch(myParam) : setSearch("");
  }, []);

  return (
    <SearchFrom>
        {!!windows ? <SearchSchema query={search} window={windows} /> : null}
        <SearchInput
            type="search"
            placeholder="Buscar articulo"
            aria-label="Ingresa lo que quieras encontrar"
            value={search}
            onChange={handleSearch}
            onKeyPress={handleEnter}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            role="search"
            id="search"
            name="search"
        />

        <Link href={`/items?search=${search}`} passHref>
            <SearchLink role="button" >
                <img 
                    src={"/ic_Search@2x.png"}
                    alt="search button"
                    arial-label="search button"
                    width="25"
                    height="25"/>
            </SearchLink>
        </Link>
    </SearchFrom>
  );
};

export default SearchBar;
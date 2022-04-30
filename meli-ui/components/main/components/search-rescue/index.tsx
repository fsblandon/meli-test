import {
    SearchRescueContaiuner,
    SearchRescueInfo,
} from "../../style";

import Image from "next/image";

const SearchRescue = () => {
  return (
      <SearchRescueContaiuner>
        <Image 
            src="/not_found.svg"
            alt="Search Rescue"/>
        <SearchRescueInfo>
          <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
          <ul>
            <li>
              <strong>Revisa la ortografía</strong> de la palabra.
            </li>
            <li>
              Utiliza <strong>palabras más genéricas</strong> o menos palabras.
            </li>
            <li>
              <a href="https://www.mercadolibre.com.co/categories.html">
                {" "}
                Navega por las categorías
              </a>{" "}
              para encontrar un producto similar
            </li>
          </ul>
        </SearchRescueInfo>
      </SearchRescueContaiuner>
  );
};
  
export default SearchRescue;
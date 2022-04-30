import Header from "../../components/header/index";
import Main from "../../components/main/index";
import { getData } from "../api/search";
import Head from "next/head";

function Search({query, data}: any) {
  const metaDescription = () => {
    const { categories } = data;
    if (categories.length) {
      const [principalCategory] = categories;
      return `Encuentra ${query}  ${principalCategory} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`;
    } else {
      return `Encuentra ${query} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`;
    }
  };
  const setCanonical = () => {
    return `https://listado.mercadolibre.com.co/${query}`;
  };

  const setAlternante = (platform: any) => {
    const link =
      platform === "android"
        ? `android-app://com.mercadolibre/meli/search?go=https://listado.mercadolibre.com.co/${query}`
        : `ios-app://463624852/meli/search?go=https://listado.mercadolibre.com.co/${query}`;
    return link;
  };

    return (
        <div>
            <Head>
                <title>{query} | MercadoLibre.com</title>
                <meta
                    name="description"
                    content={metaDescription()}
                
                />
                <link rel="canonical" href={setCanonical()}  />
                <link
                    rel="alternate"
                    href={setAlternante("ios")}
                
                />
                <link
                    rel="alternate"
                    href={setAlternante("android")}
                
                />
            </Head>
            <Header />
            <Main search={data} />
        </div>
    );
}

export default Search;

export async function getServerSideProps(context: any) {
    const { search } = context.query;
    const jsonData = await getData(search);

    return {
        props: {
            query: search || null,
            data: jsonData,
        },
    };
}
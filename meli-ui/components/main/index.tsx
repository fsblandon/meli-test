import Breadcrumbs from "./components/breadcrumb/index";
import { ResultsWrapper, ResultsContainer } from "./style";
import ItemList from "./components/item-list/index";
import SearchRescue from "./components/search-rescue/index";

const Main = ({search}: any) => {
  return (
    <ResultsWrapper>
      <Breadcrumbs categories={search.categories} />
      <ResultsContainer>
        {!!search.items.length ? <ItemList items={search.items} /> : <SearchRescue />}
      </ResultsContainer>
    </ResultsWrapper>
  );
};

export default Main;
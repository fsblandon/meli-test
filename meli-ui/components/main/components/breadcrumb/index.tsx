import BreadcrumbSchema from "../../../schema/breadcrumb-schema/index";
import { BreadCrumbContainer, BreadCrumbList } from "../../../header/style";

const Breadcrumbs = ({categories}: any) => {
  return (
    <div>
      <BreadcrumbSchema categories={categories} />
      <BreadCrumbContainer aria-label="Breadcrumb">
        <BreadCrumbList>
          {categories.map((breadCrumItem: any, idx: any) => (
            <li key={breadCrumItem.id}>
              {categories.length === idx + 1 ? (
                <a 
                    href={`/${breadCrumItem.id}`}
                    aria-current="page">
                  {breadCrumItem.name}
                </a>
              ) : (
                <a href={`/${breadCrumItem.id}`}>{breadCrumItem.name}</a>
              )}
            </li>
          ))}
        </BreadCrumbList>
      </BreadCrumbContainer>
    </div>
  );
};

export default Breadcrumbs;
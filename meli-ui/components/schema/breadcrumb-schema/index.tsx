import Schema from "../index";

const BreadcrumbSchema = ({ categories }: any) => {
    const itemListElement = categories.map((item: any, idx: any) => {
        return {
            "@type": "ListItem",
            position: idx,
            name: item.name,
            item: `https://api.mercadolibre.com/categories/${item.id}`,
        };
    });
    const buildBreadcrumbSchema = () => {
        return {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: itemListElement,
        };
    };
    return <Schema schema={buildBreadcrumbSchema()} />;
};

export default BreadcrumbSchema;
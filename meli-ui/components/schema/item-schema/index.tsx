import Schema from "../index";

const ItemSchema = ({ item }: any) => {
    const buildItemSchema = () => {
        return {
            "@context": "https://schema.org/",
            "@type": "Product",
            name: item.title,
            image: [
                item.picture
            ],
            description: item.description,
            sku: item.id,
            mpn: item.id,
            offers: {
                "@type": "Offer",
                url: item.permalink,
                priceCurrency: item.price.currency,
                price: item.price.amount,
                itemCondition: `https://schema.org/${item.condition}`,
                availability: "https://schema.org/InStock",
            },
        };
    };
    return <Schema schema={buildItemSchema()} />;
};

export default ItemSchema;
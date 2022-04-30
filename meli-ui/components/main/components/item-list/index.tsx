import Item from "../item/index";

const ItemList = ({items}: any) => {
    return (
        <div>
            {items && (
                <ul>
                    {items.map((element: any, idx: any) => (
                        <Item key={element.id} item={element} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
import Link from "next/link";
import { ItemWrapper, ItemInfo, ItemTitle } from "../../style";
import ItemPrice from "../item-price/index";
import Image from "next/image";

const Item = ({item}: any) => {
    return (
        <ItemWrapper>
        <Link href={`/items/${item.id}`} >
            <a >
            <Image
                src= {item.picture}
                alt={item.title}
                width={180}
                height={180}
                data-testid="item-image"
            />
            </a>
        </Link>
        <ItemInfo>
            <ItemPrice priceInfo={item.price} showDecimals={false}/>
            {item.free_shipping ? <img src="/ic_shipping.png" alt="Free shipping" width="18" height="18"/>  : null}
            <br />
            <Link href={`/items/${item.id}`} passHref>
                <ItemTitle>{item.title}</ItemTitle>
            </Link>
        </ItemInfo>
        </ItemWrapper>
    );
};

export default Item;
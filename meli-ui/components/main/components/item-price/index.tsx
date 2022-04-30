// @ts-ignore
import numberFormatter from "number-formatter";
import {
  getIntegerNumber,
  getDecimalNumber,
} from "../../../../utils/formatter";
import { ItemSpanPrice } from "../../style";

function ItemPrice({priceInfo, showDecimals}: any) {
    const price = parseFloat(priceInfo.amount);
    const priceRounded = getIntegerNumber(price);
    const priceDecimals = getDecimalNumber(price, parseInt(priceInfo.decimal));

    return (
        <ItemSpanPrice>
            <span>{priceInfo.symbol}</span>
            {numberFormatter("#.##0,#", priceRounded)}
            {(showDecimals || priceDecimals > 0) && (
                <span>{priceDecimals.toString().slice(2)}</span>
            )}
        </ItemSpanPrice>
    );
}

export default ItemPrice;
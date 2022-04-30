import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import CURRENCY_DATA from '../constants/currencies.mock.json';
import fetch from 'cross-fetch';

const author = {
    name: 'Fredy',
    lastname: 'Blandon'
};

class SearchController {

    public async searchByQueryParams(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q='${req.query.q}&offset=0&limit=4`)
        .then(
            response => {
                const { data } = response;
                const categories =
                data.filters.length && data.filters[0].values
                ? data.filters[0].values[0].path_from_root
                : [
                    {
                        id: '',
                        name: 'Sin categoria',
                        path_from_root: []
                    }
                ];

                const items = data.results
                .map(
                    (item: any) => {
                        const [, , , url] = item.thumbnail.split('/');
                        const currencyId = item.currency_id.toLowerCase();
                        const currency = CURRENCY_DATA[currencyId]
                        return {
                            id: item.id,
                            title: item.title,
                            price: {
                                currency: currency.id,
                                amount: item.price,
                                decimals: currency.decimal_places
                            },
                            picture: url,
                            condition: item.condition,
                            free_shipping: item.shipping.free_shipping
                        };
                    }
                );
                res.send({ author, categories, items});
            }
        )
        .catch(
            error => {
                res.status(404).send({
                    author,
                    item: 0,
                    message: error.message
                });
            }
        );
    }

    public async getItemDetail(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        const requestOne = axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);
        const requestTwo = axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);

        let categoryList: any[] = [];

        axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread(
                (async (...responses) => {
                    const [item, description] = responses;
                    const { data: itemData } = item;
                    const { data: descriptionData } = description;
                    const currencyId = itemData.currency_id.toLowerCase();
                    const currency = CURRENCY_DATA[currencyId];
                    const fetchCategories = await fetch(`https://api.mercadolibre.com/categories/${itemData.category_id}`);
                    const categories: any = await fetchCategories.json();
                    const { path_from_root } = categories;
                    try {
                        categoryList = path_from_root;
                    } catch {
                        categoryList.push('Sin Categoría');
                    }
                    const [, , , url] = itemData.thumbnail.split('/');
                    res.send({
                        author,
                        item: {
                            id: itemData.id,
                            title: itemData.title,
                            price: {
                                currency: currency.id,
                                amount: itemData.price,
                                decimal: currency.decimal_places,
                            },
                            picture: url,
                            condition: itemData.condition,
                            free_shipping: itemData.shipping.free_shipping,
                            sold_quantity: itemData.sold_quantity,
                            description: descriptionData.plain_text
                        },
                        categories: categoryList,
                    });
                })
            )
        )
        .catch(
            error => {
                res.status(404).send({
                    author,
                    item: 0,
                    message: error.message
                })
            }
        )
    }
}

export default SearchController;
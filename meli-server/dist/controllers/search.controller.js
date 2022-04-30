"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const currencies_mock_json_1 = tslib_1.__importDefault(require("../constants/currencies.mock.json"));
const cross_fetch_1 = tslib_1.__importDefault(require("cross-fetch"));
const author = {
    name: 'Fredy',
    lastname: 'Blandon'
};
class SearchController {
    searchByQueryParams(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q='${req.query.q}&offset=0&limit=4`)
                .then(response => {
                const { data } = response;
                const categories = data.filters.length && data.filters[0].values
                    ? data.filters[0].values[0].path_from_root
                    : [
                        {
                            id: '',
                            name: 'Sin categoria',
                            path_from_root: []
                        }
                    ];
                const items = data.results
                    .map((item) => {
                    const [, , , url] = item.thumbnail.split('/');
                    const currencyId = item.currency_id.toLowerCase();
                    const currency = currencies_mock_json_1.default[currencyId];
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
                });
                res.send({ author, categories, items });
            })
                .catch(error => {
                res.status(404).send({
                    author,
                    item: 0,
                    message: error.message
                });
            });
        });
    }
    getItemDetail(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const requestOne = axios_1.default.get(`https://api.mercadolibre.com/items/${req.params.id}`);
            const requestTwo = axios_1.default.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);
            let categoryList = [];
            axios_1.default
                .all([requestOne, requestTwo])
                .then(axios_1.default.spread(((...responses) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const [item, description] = responses;
                const { data: itemData } = item;
                const { data: descriptionData } = description;
                const currencyId = itemData.currency_id.toLowerCase();
                const currency = currencies_mock_json_1.default[currencyId];
                const fetchCategories = yield (0, cross_fetch_1.default)(`https://api.mercadolibre.com/categories/${itemData.category_id}`);
                const categories = yield fetchCategories.json();
                const { path_from_root } = categories;
                try {
                    categoryList = path_from_root;
                }
                catch (_a) {
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
            }))))
                .catch(error => {
                res.status(404).send({
                    author,
                    item: 0,
                    message: error.message
                });
            });
        });
    }
}
exports.default = SearchController;
//# sourceMappingURL=search.controller.js.map
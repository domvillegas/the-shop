import axios from 'axios';

const fakeStoreProductsURL = 'https://fakestoreapi.com/products';

export const fetchData = (props) => {
    axios.get(fakeStoreProductsURL)
    .then(results => props({items: results.data}))
}
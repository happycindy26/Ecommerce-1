import ProductsData from './productsData';

const INITIAL_STATE = {
    productsData: ProductsData
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
}

export default productsReducer;
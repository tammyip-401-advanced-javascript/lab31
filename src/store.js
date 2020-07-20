import { createStore } from 'redux';

const initState = {
    categories: [
        { name: 'Electronics', displayName: 'Electronics' },
        { name: 'Clothing', displayName: 'Clothing' },
        { name: 'Supplements', displayName: 'Supplements' },
    ],
    products: [
        { name: 'Facial Steamer', category: 'Electronics', price: 199.0, inStock: 5 },
        { name: 'Hairdryer', category: 'Electronics', price: 79.0, inStock: 15 },
        { name: 'Shirt', category: 'Clothing', price: 30.0, inStock: 25 },
        { name: 'Dress', category: 'Clothing', price: 50.0, inStock: 10 },
        { name: 'Clear Skin Formula', category: 'Supplements', price: 20.99, inStock: 500 },
        { name: 'Collagen Powder', category: 'Supplements', price: 29.99, inStock: 12 },
        { name: 'Beauty Gummies', category: 'Supplements', price: 11.99, inStock: 90 },
    ],
    currentCategory: '',
    cart: [],
    cartCount: 0,
};

const reducer = (state = initState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'SET_CURRENT_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        case 'ADD_TO_CART':
            console.log(action.payload)
            newState.cart.push(action.payload);
            newState.cartCount++;
            break;
        case 'REMOVE_FROM_CART':
            newState.cartCount--;
            newState.cart = newState.cart.filter((val) => {
                return val.name !== action.payload;
            });
            break;
        case 'ADD_PRODUCT':
            newState.products.push(action.payload);
            break;
        case 'RESET_STORE':
            newState = { ...initState };
            break;
        default:
            break;
    }
    return newState;
};

const addtoCart = (product) => {
    return { type: 'ADD_TO_CART', payload: product };
};

const removeFromCart = (product) => {
    return { type: 'REMOVE_FROM_CART', payload: product };
};

export default createStore(reducer);
export { reducer };
export { addtoCart, removeFromCart };

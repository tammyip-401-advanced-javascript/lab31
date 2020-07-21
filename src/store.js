import { createStore } from 'redux';

const initState = {
    categories: [
        { name: 'Electronics', display_name: 'Electronics' },
        { name: 'Clothing', display_name: 'Clothing' },
        { name: 'Supplements', display_name: 'Supplements' },
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
    drawer: false,
};

const reducer = (state = initState, action) => {
    const { payload, type } = action

    let newState = { ...state };

    switch (type) {
        case 'SET_CURRENT_CATEGORY':
            newState.currentCategory = payload;
            break;
        case 'ADD_TO_CART':
            // console.log(payload)
            newState.cart.push(payload);
            newState.cartCount++;
            break;
        case 'REMOVE_FROM_CART':
            newState.cartCount--;
            //show the cart without the content that got removed
            newState.cart = newState.cart.filter((val) => {
                return val.name !== payload.name;
            });
            break;
        case 'TOGGLE_DRAWER':
            newState.drawer = payload;
            break;
        case 'ADD_PRODUCT':
            newState.products.push(payload);
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

import React, { useState } from 'react';
import { connect } from 'react-redux';

function Header(props) {

    const [item, setItem] = useState([])

    let cartMenu = false;
    let cartHTML = [];

    props.cart.forEach((element) => {
        cartHTML.push(
            <div class='content'>
                <button id='remove'
                    onClick={(e) => {
                        props.dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item
                        })
                    }}
                > Remove
           </button>
                <li>
                    {element.name}
                </li>
            </div>
        )
    })

    return (
        <>

            <header>
                <h1>~ ❀ My Beauty Store ❀ ~</h1>
            </header>
            <button id='cart' onClick={(e) => {
                cartMenu = !cartMenu
                // console.log(cartMenu)
                if (item.length === 0) {
                    setItem(cartHTML)
                } else {
                    setItem([]);
                }
            }}
            >Your Cart {props.cartCount}</button>
            {/* {cartMenu ? cartHTML : null} */}
            {/* {cartHTML} */}
            {cartHTML}

        </>
    );
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    cart: state.cart,
});

// export default Header;
export default connect(mapStateToProps)(Header);

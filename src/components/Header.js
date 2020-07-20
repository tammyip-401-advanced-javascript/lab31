import React, { useState } from 'react';
import { connect } from 'react-redux';

function Header(props) {

    const [item, setItem] = useState([])

    let cartMenu = false;
    let cartHTML = [];

    props.cart.forEach((element) => {
        cartHTML.push(
            <li>
                {element.name}
            </li>
        )

    })

    return (
        <>
            <button id='cart' onClick={(e) => {
                cartMenu = !cartMenu
                // console.log(cartMenu)
                if (item.length === 0) {
                    setItem(cartHTML)
                } else {
                    setItem([]);
                }
            }}
            >Cart {props.cartCount}</button>
            {/* {cartMenu ? cartHTML : null} */}
            {/* {cartHTML} */}
            {item}

            <header>
                <h1>~ ❀ My Beauty Store ❀ ~</h1>
            </header>

        </>
    );
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    cart: state.cart,
});

// export default Header;
export default connect(mapStateToProps)(Header);

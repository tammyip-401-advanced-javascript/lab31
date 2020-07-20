import React from 'react';
import store, { addtoCart } from '../store';
import { connect } from 'react-redux';


function SingleProduct(props) {
    return (
        <div class='product'>
            <img src={props.img} alt={props.alt} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <div class='img'>
                <img width="200" height="200" src="https://image.freepik.com/free-vector/new-product-coming-soon-poster-background-design_7102-179.jpg"></img>
                <br />
                <button onClick={() => {
                    let display = addtoCart(props.product)
                    // store(display)
                    props.dispatch(display)
                }}

                >Add To Cart</button>
                <button onClick={props.view}>View Details</button>
            </div>
        </div>
    );
}


// export default SingleProduct;
export default connect()(SingleProduct);


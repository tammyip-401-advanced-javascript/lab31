import React from 'react';

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
                <button onClick={props.add}>Add To Cart</button>
                <button onClick={props.view}>View Details</button>
            </div>
        </div>
    );
}

export default SingleProduct;

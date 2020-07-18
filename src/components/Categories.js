import React from 'react';
import { connect } from 'react-redux';

function Categories(props) {
    let categoryHTML = [];

    for (let i = 0; i < props.categories.length; i++) {
        let category = props.categories[i];
        categoryHTML.push(
            <button
                key={i}
                onClick={() => {
                    props.dispatch({
                        type: 'SET_CURRENT_CATEGORY',
                        payload: props.categories[i].name,
                    });
                }}
            >
                {category.displayName || category.name}
            </button>,
        );
    }

    return (
        <div>
            <h3>Browse our Categories:</h3>
            {categoryHTML}
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(Categories);

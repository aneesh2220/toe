import React from 'react';
import "../App.css";

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className='square'>
            {value}
        </button>
    );
}



export default Square;
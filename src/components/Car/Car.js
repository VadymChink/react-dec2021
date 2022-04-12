import React from 'react';

export const Car = ({car}) => {
    const {id, model, price, year} = car
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>prise: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};
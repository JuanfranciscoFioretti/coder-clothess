import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [quantity, setQuantity] = useState(0);

    // AGREGAR PRODUCTOS AL CARRITO
    const moreQuantity = () => {
        if (quantity < stock) {
            const addQuantity = quantity + 1
            setQuantity(addQuantity)
            console.log(quantity)
        } else {
            alert('You surpased the limit stock')
        }
    }

    // ELIMINAR PRODUCTOS DEL CARRITO
    const lessQuantity = () => {
        if (((quantity < stock) || (quantity >= 2)) && (quantity != 0)) {
            const removeQuantity = quantity - 1
            setQuantity(removeQuantity)
            console.log(quantity)
        } else {
            alert('Can´t take more products off the cart')
        }
    }

    // const addToCart = () => {
    //     alert('You added ' + quantity + ' product to the cart.')
    // }

    return (
        <>
            <div className='col col-md-2 col-sm-3' id='divItemCount'>
                <div id="divHandleQuantity">
                    <button className='btn btn-outline-secondary quantityButtons' onClick={lessQuantity}>-</button>
                    <div id='divQuantity'>{quantity}</div>
                    <button className='btn btn-outline-secondary quantityButtons' onClick={moreQuantity}>+</button>
                </div>
                <div className="addToCart">
                    <button className='btn btn-outline-primary' id='btnAddToCart' onClick={onAdd}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {

    const [quantity, setQuantity] = useState(0);

    // AGREGAR PRODUCTOS AL CARRITO
    const moreQuantity = () => {
        if (quantity < props.stock) {
            const addQuantity = quantity + 1
            setQuantity(addQuantity)
        } else {
            alert('You surpased the limit stock')
        }
        console.log(quantity)
    }

    // ELIMINAR PRODUCTOS DEL CARRITO
    const lessQuantity = () => {
        if (((quantity < props.stock) || (quantity >= 2)) && (quantity != 0)) {
            const removeQuantity = quantity - 1
            setQuantity(removeQuantity)
        } else {
            alert('Can´t take more products off the cart')
        }
    }

    const addToCart = () => {
        alert('You added ' + quantity + ' product to the cart.')
    }
    return (
        <>
            <div className='col col-md-2 col-sm-3' id='divItemCount'>
                <div id="divHandleQuantity">
                    <button className='btn btn-outline-secondary quantityButtons' onClick={lessQuantity}>-</button>
                    <div id='divQuantity'>{quantity}</div>
                    <button className='btn btn-outline-secondary quantityButtons' onClick={moreQuantity}>+</button>
                </div>
                <div className="addToCart">
                    <button className='btn btn-outline-primary' id='btnAddToCart' onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
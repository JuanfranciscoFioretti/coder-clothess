import React from 'react'
import { useState } from 'react'
import Item from './Item'
import { getItems, items } from './Products'
// import { products } from './Products'


const ItemList = () => {

    const [ data, setData ] = useState();

    return (
        <>
            <div className="row divItemList">
                {
                    items.map((item) => {
                        console.log(item)
                        // setData(item)
                        // <Item/>
                        return <Item
                            stock={item.stock}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            />
                    })
                }
            </div>
        </>
    )
}

export default ItemList
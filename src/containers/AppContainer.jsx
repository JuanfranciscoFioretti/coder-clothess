import React from 'react'
import NavBar from '../components/NavBar'
import HeaderBar from '../components/HeaderBar'
import ItemListContainer from './ItemListContainer'
import ItemCount from '../components/ItemCount'

const AppContainer = () => {

    // const addToCart = () => {
    //     alert('You added ' + quantity + ' product to the cart.')
    // }

    return (
        <>
            <div id='divAppContainer'>
                <NavBar/>
                <HeaderBar/>
                <ItemListContainer/>
                <ItemCount 
                    // onAdd={addToCart}
                    stock={10}/>
            </div>
        </>
    )
}

export default AppContainer
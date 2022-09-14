import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" id='cookIt' href="#">Cookit</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='NavUl'>
                            <li className="nav-item">
                            <a className="nav-link active navLi" id='HomeNav' aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item navLi">
                                <a className="nav-link active" href="#">Cooking</a>
                            </li>
                            <li className="nav-item navLi">
                                <a className="nav-link active" href="#">Utensils</a>
                            </li>
                            <li className="nav-item navLi">
                                <a className="nav-link active" href="#">Holders</a>
                            </li>
                        </ul>
                        <div id='divCartWidgetComp'>
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
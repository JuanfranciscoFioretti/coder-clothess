import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = () => {
    return (
        <>
            <div className='row divItemDetail'>
                <div className="col divIMGSDetail">
                    <div className="divDetailImg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZLz3UhR24KlF3pH51EBXnJ8q9QGb8Qimkw&usqp=CAU" className='imgDetailBig' alt="" />
                        <div className="divImgsSmall">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yDex93cv-JI25UPaLkJpaYFC9RfKI0-SHw&usqp=CAU" className='imgSmallDetail' alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XWQ_RO61_NJv-uydkMQdg2MVb-VsPeAjCQ&usqp=CAU" className='imgSmallDetail' alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomUuILJ3b-vTaRRdrlNTzUho_DHkouuiYdQ&usqp=CAU" className='imgSmallDetail' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="col divProdDetails">
                        <h4 className='hDetail'>Product name</h4>
                        <h5 className='hDetail'>$ 2.756</h5>
                        <h6 className='hDetail'>Description dsggsgsdfdsfs</h6>
                        <h6 className='hDetail'>Details ; dsgdsg gdsgsd hdssdsf</h6>
                    </div>
                    <div className="col">
                        <h6 className='hDetail'></h6>
                        <h6 className='hDetail'></h6>
                        <div className="row divItemCountDetail">
                            <ItemCount className="itemCountDetail"/>
                        </div>
                        <div className="divBuyNowDetail">
                            <button className='btn btn-outline-primary btnBuyNowDetail'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
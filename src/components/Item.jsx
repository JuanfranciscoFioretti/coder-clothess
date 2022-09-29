import React from 'react'

const Item = (props) => {

    let { title, price, image, description } = props;
    
    return (
        <>
            <div className="col col-md-2 divItemCard">
                <div className="divItemFlex">
                    <div className="row" id='divItemImg'>
                        <img className='ItemImg' src={image} alt="" />
                    </div>
                    <div className="divItemNamePrice">
                        <div className="col">
                            <h5>{title}</h5>
                        </div>
                        <div className="col">
                            <h5 className='h5ItemPrice'>${price}</h5>
                        </div>
                    </div>
                    <div className="divItemDescription">
                        <h6>{description}</h6>
                    </div>
                    <div className="divItemBuyNow">
                        <button type='button' className='btn btn-outline-secondary btnBuyNow'>Buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
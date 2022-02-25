import React, {Fragment} from 'react'

const ImageProduct = ({products, setHeight, setWidth}) => {

    const imgHeight = setHeight
    const imgWidth = setWidth

    return (
        <Fragment>
            <img src={`${products.webLink}`}
                 className="asd"
                 alt={`${products.description}`}
                 style={{height: `${imgHeight}px`, width: `${imgWidth}px`}}
            />
        </Fragment>
    )
}
export default ImageProduct;
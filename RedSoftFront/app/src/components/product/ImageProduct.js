import React from 'react'

const ImageProduct = ({products, setHeight, setWidth}) => {

    const imgHeight = setHeight
    const imgWidth = setWidth

    return (
        <div>
            <img src={`http://164.68.101.162:8093/img/${products.code}.jpg`}
                 className="asd"
                 alt={`/img/${products.code}.jpg`}
                 style={{height: `${imgHeight}px`, width: `${imgWidth}px`}}
            />
        </div>
    )
}
export default ImageProduct;
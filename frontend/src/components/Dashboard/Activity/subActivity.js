import React from 'react'


const SubActivity = ({title,img,desc,price}) => {
    return (
        <div className="fi_ac__">
            <div className="icon">
                <img src={img} alt={title} height="20" />
            </div>
            <div className="title">
                <p>{title}<p className="p">{desc}</p> </p>
            </div>
            <div className="status">{price}$</div>
        </div>
    )
}

export default SubActivity

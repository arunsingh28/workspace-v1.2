import React from 'react'

const Card = ({img,title,desc}) => {
    return (
        <div className="card-in">
            <img src={img} alt="cloud"/>
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default Card

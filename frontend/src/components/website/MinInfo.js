import React from 'react'


const MinInfo = ({pic,desc}) => {
    return (
        <div>
                <div className="moreWrapper">

<div className="moreContent">
    <p>{desc}</p>
    <button>MORE</button>
</div>
<div className="moreCR">
    <img src={pic} height="200"/>
</div>
</div>
        </div>
    )
}

export default MinInfo

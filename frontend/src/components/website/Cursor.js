import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
    return (
        <div className="cursor">
            <AnimatedCursor 
            innerSize={15}
            outerSize={18}
            color='149,163,216'
            outerAlpha={0.2}
            innerScale={.7}
            outerScale={5}
            />
        </div>
    )
}

export default Cursor

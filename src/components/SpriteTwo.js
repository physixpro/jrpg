import React from 'react'

const SpriteTwo = ({image,data,position}) => {
    const{y,x,h,w} = data;
    return (
        <div
        style={{
        position: "absolute",
        top: position.y,
        right: position.x,
        height:`${h}px`,
        width:`${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:`-${x}px -${y}px`,
        }}
        >
            
        </div>
    )
}

export default SpriteTwo
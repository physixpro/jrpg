import React from 'react'
import Actor from '../actor/Actor'

const Player = ({skin}) => {

    const data = {
        h:32,
        w:32,
      }
    return (
        <div>
             <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
        </div>
    )
}

export default Player

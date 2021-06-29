import React from 'react'
import Actor from '../actor/Actor'
import Usekeypress from '../../hooks/use-key-press/Usekeypress'

const Player = ({skin}) => {

    const data = {
        h:32,
        w:32,
      }

      const directions = {
          down: 0,
          left: 1,
          right: 2,
          up: 3,
      };

      Usekeypress((e) => {
          const dir = e.key.replace("Arrow", "").toLowerCase();
          if(directions.hasOwnProperty(dir)) console.dir(dir);
          
          e.preventDefault();
      })
    return (
        <div>
             <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
        </div>
    )
}

export default Player

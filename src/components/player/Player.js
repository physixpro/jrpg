import React from 'react'
import Actor from '../actor/Actor'
import Usewalk from '../../hooks/use-key-press/Usewalk'
import Usekeypress from '../../hooks/use-key-press/Usekeypress'

const Player = ({skin}) => {
const {dir, step, walk } = Usewalk(3)
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
          walk(dir)
          
          e.preventDefault();
      })
    return (
        <div>
             <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
        </div>
    )
}

export default Player

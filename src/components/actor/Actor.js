import React from 'react';
import Sprite from "../Sprite";

const Actor = ({sprite, data, step = 0, dir = 0}) => {
    const { h, w} = data;
    return (
        <div>
<Sprite
        image={sprite}
        data={{
          x: step * w,
          y: dir * h,
          w,
          h,
        }}
      />
        </div>
    )
}

export default Actor

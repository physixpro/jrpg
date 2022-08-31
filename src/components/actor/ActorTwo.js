import React from "react";
import SpriteTwo from "../SpriteTwo";

const ActorTwo = ({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
}) => {
  const { h, w } = data;
  return (
    <div>
      <SpriteTwo
        image={sprite}
        position={position}
        data={{
          x: step * w,
          y: dir * h,
          w,
          h,
        }}
      />
    </div>
  );
};

export default ActorTwo;

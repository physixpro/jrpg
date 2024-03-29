import React from "react";
import ActorTwo from "../actor/ActorTwo"
import Usewalk from "../../hooks/use-key-press/Usewalk";
import Usekeypress from "../../hooks/use-key-press/Usekeypress";

const PlayerTwo = ({ skin }) => {
    const { dir, step, walk, position } = Usewalk(3);
    const data = {
        h: 32,
        w: 32,
    };

    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    };

    Usekeypress((e) => {
        walk(e.key.replace("Arrow", "").toLowerCase());

        e.preventDefault();
    });
    return (
        <div>
            <ActorTwo
            sprite = {`/sprites/skins/${skin}.png`}
            data={data}
            step={step}
            dir={dir}
            position={position}
            />
        </div>
    );
};

export default PlayerTwo;
// https://github.com/catalinmiron/react-typical/blob/master/src/index.js
import React, { useRef, useEffect, memo } from "react";
import { type, type as loopedType } from "./typical";


interface Props {
    steps: any[]
    loop?: number
    wrapper?: string
    className?: string
}


const Typical: React.FC<Props> = ({ steps, loop, className, wrapper = "p" }) => {
    const typicalRef = useRef(null);
    const Component = wrapper;
    const classNames = ['typical-wrapper'];

    if (className) {
        classNames.unshift(className);
    }

    useEffect(() => {
        if (loop === Infinity) {
            type(typicalRef.current, ...steps, loopedType);
        } else if (typeof loop === "number") {
            type(
                typicalRef.current,
                ...Array(loop)
                    .fill(steps)
                    .flat()
            );
        } else {
            type(typicalRef.current, ...steps);
        }
    });
    // @ts-ignore
    return <Component ref={typicalRef} className={classNames.join(' ')} />;
}

export default memo(Typical)
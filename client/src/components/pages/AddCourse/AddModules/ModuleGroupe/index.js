import React, { useState, useEffect } from "react";
import Module from "./Module";

export default function ModuleGroupe({ num = 1, onInfAdd }) {
    const arr = [];

    const [modules, setModules] = useState([]);

    const onModuleChange = (module, id) => {
        setModules([...modules.slice(0, id), module, ...modules.slice(id + 1)]);
    };

    useEffect(() => {
        onInfAdd("modules", modules);
    }, [modules]);

    num = +num ? num : 1;

    for (let i = 0; i < num; i++) {
        arr.push(<Module onModuleChange={onModuleChange} num={i} key={i} />);
    }

    return arr;
}

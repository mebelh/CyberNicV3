import React, { useState } from "react";
import "./style.scss";
import ModuleGroupe from "./ModuleGroupe";
export default function AddModules({ onInfAdd }) {
    const [modulesNumber, setModulesNumber] = useState(1);

    return (
        <div className="AddModules">
            <div>
                <span>Количество модулей: </span>
                <input
                    type="text"
                    value={modulesNumber}
                    onChange={(n) => setModulesNumber(n.target.value)}
                />
            </div>

            <ModuleGroupe num={modulesNumber} onInfAdd={onInfAdd} />
        </div>
    );
}

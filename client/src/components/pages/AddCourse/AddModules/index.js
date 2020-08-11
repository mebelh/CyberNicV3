import React, { useState } from "react";
import "./style.scss";
import ModuleGroupe from "./ModuleGroupe";
export default function AddModules({ onInfAdd }) {
    const [modulesNumber, setModulesNumber] = useState(1);

    return (
        <div className="addModules">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        Количество модулей
                    </span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={modulesNumber}
                    onChange={(n) => setModulesNumber(n.target.value)}
                />
            </div>

            <ModuleGroupe num={modulesNumber} onInfAdd={onInfAdd} />
        </div>
    );
}

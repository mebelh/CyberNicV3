import React, {/* useState */ } from "react";
import Iframe from "react-iframe";

// import Ansi from "ansi-to-react";

// import elbipPath from "../../../../public/ElBiblio/index.html";

// const elbipPath = require("/ElBiblio");

import "./style.scss";

const ElBibl = () => {
    // const [bibl, setBibl] = useState("");

    // fetch("/elbiblio/index.html", {
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "content-type": "application/json",
    //         charset: "ansi",
    //     },
    // }).then(async (e) => {
    //     const read = await e.body.getReader().read();

    //     console.log(new Uint8Array(read));
    // });

    return (
        <div className="elBibl">
            {/* <Ansi> */}
            <Iframe
                src="/ElBiblio/"
                // charset="ansi"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                // display="initial"
                position="relative"
            />
            {/* {bibl} */}
            {/* </Ansi> */}
            {/* <iframe src="./../ElBibl/index.html" frameborder="0"></iframe> */}
        </div>
    );
};

export default ElBibl;

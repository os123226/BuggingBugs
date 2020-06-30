import React from "react";
import { Redirect } from "react-router-dom";
import { ErrorBox } from "responseBoxes";

function ResRender(props) {
    const res = props.res;
    const resText = res[1].message;
    switch (res[0]) {
        case -1:
            return <></>;
        case 300:
            return <Redirect to={"/login"} />;
        default:
            const errorText =
                resText !== "" ? resText : "An unknown error has occured.";
            return <ErrorBox text={errorText} />;
    }
}

export { ResRender };

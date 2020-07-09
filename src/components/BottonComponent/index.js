import {Botton} from "../../styles/Home";
import React from "react";
import logoImage from "../../assets/images/logo_black.png"

export const BottonComponent = () => {

    return (
        <Botton>
            <img alt="RPC" src={logoImage}/>
        </Botton>
    );
};
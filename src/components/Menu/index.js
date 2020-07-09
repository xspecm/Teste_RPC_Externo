import {ActiveLink, MenuBar, NonActiveLink, TitleProgramacao, Ul} from "../../styles/Home";
import * as timeFunctions from "../../custom_functions/Time";
import {getDayInPtBr} from "../../custom_functions/Time";
import React from "react";

const MenuComponent = ({setDateStoredInYYYYMMDD, dateStoredInYYYYMMDD}) => {

    return (
    <MenuBar>
        <TitleProgramacao>Guia de Programação</TitleProgramacao>
        <Ul>
            <li><NonActiveLink
                onClick={(e) => setDateStoredInYYYYMMDD(timeFunctions.getNowDateInYYYYMMDDWithParam(dateStoredInYYYYMMDD, -1))}>{getDayInPtBr(dateStoredInYYYYMMDD, -1)}</NonActiveLink>
            </li>
            <li><ActiveLink>{getDayInPtBr(dateStoredInYYYYMMDD)}</ActiveLink></li>
            <li><NonActiveLink
                onClick={(e) => setDateStoredInYYYYMMDD(timeFunctions.getNowDateInYYYYMMDDWithParam(dateStoredInYYYYMMDD, 1))}>{getDayInPtBr(dateStoredInYYYYMMDD, 1)}</NonActiveLink>
            </li>
        </Ul>
    </MenuBar>
    )
};

export default MenuComponent;
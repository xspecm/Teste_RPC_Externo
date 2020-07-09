import React from "react";
import {Link} from "react-router-dom";

import logoImage from '../../assets/images/logo.png';
import {BugerImage, MainHeader, MenuBar, Nav, SearchImage, TopBar, Ul} from "../../styles/Home";

const HeaderComponent = () => {
    return (
        <Nav>
            <MainHeader>
                <TopBar>
                    <BugerImage/>
                    <Link to={"/"}>
                        <img alt="RPC" src={logoImage}/>
                    </Link>
                    <SearchImage/>
                </TopBar>
                <MenuBar>
                    <Ul>
                        <li><a>Conheça a RPC</a></li>
                        <li><a>Programação</a></li>
                        <li><a>Contato</a></li>
                    </Ul>
                </MenuBar>
            </MainHeader>
        </Nav>
    )
}

export default HeaderComponent;
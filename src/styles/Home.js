import styled from 'styled-components';

import BIcon from '../assets/icons/burger_icon.svg';
import SIcon from '../assets/icons/search_icon.svg';

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    flex-wrap: wrap;
    
    img {
        width: 75px;
    }
`;

export const MenuBar = styled.div`
    margin: 20px;
    height: auto;
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const GridComplete = styled.div`
    background: #000;
    overflow: hidden;
    height: auto !important;
    width: 100%
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Botton = styled.div`
    background: #FFF;
    overflow: hidden;
    height: 100px;
    width: 100%
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    
    img {
    padding-top: 20px;
        width: 130px;
    }
`;

export const CardNow = styled.div`
    background-color: #FFF;
    display: flex;
    cursor: pointer;
    height: 250px;
    width: 100vw !important;
    margin-bottom: 5px;
    margin-top: 5px;
    overflow: hidden;
`;

export const CardNowImage = styled.div`
    width:100%;
    display: flex;
    background: url(${props => props.backImg});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.9;
    align-items: flex-end;
    }
`;

export const CardNowContent = styled.div`
    padding-left: 10px;
    padding-right: 20px;
    width: 100%;
    display: flex;
    padding-bottom: 10px;
`;

export const CardNowInternalContentHour = styled.div`
    width: 10%;
    text-align: left;
`;

export const CardNowInternalContentText = styled.div`
    padding-left: 20px;
    width: 90%;
    text-align: left;
`;

export const CardNext = styled.div`
    background-color: #232324;
    display: flex;
    cursor: pointer;
    height: 120px;
    width: 100vw !important;
    margin-bottom: 5px;
    margin-top: 5px;
    overflow: hidden;
`;

export const CardNextContent = styled.div`
    align-items: center;
    padding-left: 10px;
    padding-right: 20px;
    width: 100%;
    display: flex;
`;

export const CardNextInternalContentHour = styled.div`
    width: 10%;
    text-align: left;
`;

export const CardNextInternalContentText = styled.div`
    padding-left: 20px;
    width: 90%;
    text-align: left;
`;

export const Ul = styled.ul`
        overflow-x: auto;
        list-style: none;
        white-space: nowrap;
        
            li {
        display: inline;
        text-align: -webkit-match-parent;
    }
        
        a {
        -webkit-font-smoothing: antialiased !important;
        color: #0;
        text-decoration: none;
        cursor: pointer;
        padding-right: 10px;
        padding-left: 10px;
        font-color: #4e4e4d;
    }

`;

export const MainHeader = styled.div`
    min-width: 100%;
    max-width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    right: 0;
    left: 0
    z-index: 4;
`;
export const Nav = styled.div`
    position: relative;
`;

export const Title = styled.h2`
  color: #949495;
  font-size: 15px;
  font-weight: bold;
`

export const TitleForCardNow = styled.h2`
  color: #FF;
  font-size: 17px;
  text-shadow: 2px 2px 4px #000000;
  font-weight: bold;
`

export const Date = styled.h3`
  color: #737374;
  font-weight: 600;
  margin: 6px 0;
`

export const DateForCardNow = styled.h3`
  color: #FF;
  text-shadow: 2px 2px 4px #000000;
  font-weight: 600;
  margin: 6px 0;
`

export const Description = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: #949495;
`

export const DescriptionForCardNow = styled.p`
  margin-top: 10px;
  text-shadow: 2px 2px 4px #000000;
  font-size: 18px;
  color: #FF;
`

export const BugerImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${BIcon});
`;

export const SearchImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${SIcon});
`;

export const ActiveLink = styled.a`
    padding-top: 5px;
    color: #03b2ff;
    font-size: 20px;
    font-weight: bold;
`;

export const NonActiveLink = styled.a`
    font-size: 12px;
`;

export const TitleProgramacao = styled.h1`
    padding: 20px;
`;
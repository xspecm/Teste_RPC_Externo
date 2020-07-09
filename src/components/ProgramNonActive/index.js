import {
    CardNext,
    CardNextContent,
    CardNextInternalContentHour,
    CardNextInternalContentText,
    Date, Description,
    Title
} from "../../styles/Home";
import React from "react";

const ProgramNonActiveComponent = ({lista}) => {
    return (
        <CardNext Id={lista.media_id}>
            <CardNextContent>
                <CardNextInternalContentHour><Date>{lista.human_start_time}<br/>
                    {lista.human_end_time} </Date></CardNextInternalContentHour>
                <CardNextInternalContentText><Title>{lista.title}</Title>
                    <Description>{lista.description}</Description></CardNextInternalContentText>
            </CardNextContent>
        </CardNext>
    )
}

export default ProgramNonActiveComponent;
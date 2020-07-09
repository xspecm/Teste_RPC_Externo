import {
    CardNow,
    CardNowContent,
    CardNowImage,
    CardNowInternalContentHour,
    CardNowInternalContentText,
    DateForCardNow, DescriptionForCardNow, TitleForCardNow
} from "../../styles/Home";
import React from "react";

const ProgramActiveComponent = ({lista}) => {

    return (
        <CardNow Id={lista.media_id}>
            <CardNowImage backImg={lista.custom_info.Graficos.ImagemURL}>
                <CardNowContent>
                    <CardNowInternalContentHour>
                        <DateForCardNow>{lista.human_start_time}<br/>
                            {lista.human_end_time} </DateForCardNow>
                    </CardNowInternalContentHour>
                    <CardNowInternalContentText>
                        <TitleForCardNow>{lista.title}</TitleForCardNow>
                        <DescriptionForCardNow>{lista.description}</DescriptionForCardNow>
                    </CardNowInternalContentText>
                </CardNowContent>
            </CardNowImage>
        </CardNow>
    )

}

export default ProgramActiveComponent;
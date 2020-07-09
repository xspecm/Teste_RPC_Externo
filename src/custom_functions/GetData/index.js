import * as treatDataFunctions from "../TreatData";

const idOfTv = 1337;
const CorsAnywhere = 'https://cors-anywhere.herokuapp.com/';

export async function getEPG(YYYYMMDD) {

    try {
        let url = `${CorsAnywhere}https://epg-api.video.globo.com/programmes/${idOfTv}?date=${YYYYMMDD}`;
        const data = await fetch(url)
            .then((res) => res.json())
            .then((json) => treatDataFunctions.treatDataReceivedFromApi(json))
            .then((treatedData) => (treatedData));

        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
}
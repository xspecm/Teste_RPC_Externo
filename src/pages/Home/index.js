// React Libs
import React, {useEffect, useState} from "react";
import {GridComplete} from "../../styles/Home";

// Components
import {Loading} from "../../components/Loading";
import MenuComponent from "../../components/Menu";
import ProgramNonActiveComponent from "../../components/ProgramNonActive";
import ProgramActiveComponent from "../../components/ProgramActive";

// Functions
import * as timeFunctions from "../../custom_functions/Time";
import * as GetDataFunctions from "../../custom_functions/GetData";
import Header from "../../components/Header";
import {
    doTheScheduleNeedToBeActive, doTheScheduleNeedToBeOnTheList,
} from "../../custom_functions/Validations";
import {BottonComponent} from "../../components/BottonComponent";

const Home = () => {

    const [programacao, setProgramacao] = useState({});
    const [loading, setLoading] = useState(true);
    const [dayProgressUntilNow] = useState(timeFunctions.convertHourToProgressOfADay());
    const [dateStoredInYYYYMMDD, setDateStoredInYYYYMMDD] = useState(timeFunctions.getNowDateInYYYYMMDD());
    const [errorOnFetch, setErrorOnFetch] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        async function fetchData() {
            if (loading !== true) {
                setLoading(true);
            }
            try {
                const response = await GetDataFunctions.getEPG(dateStoredInYYYYMMDD);
                if (response) {
                    setProgramacao(response);
                } else {
                    setErrorOnFetch(true);
                }
            } catch (error) {
                console.log(error)
            } finally {
                await delay(1500);
                setLoading(false);
            }
        }

        fetchData();
    }, [dateStoredInYYYYMMDD])

    return (
        <div>
            {loading ? (
                    <Loading/>
                )
                : (
                    <div>
                    {errorOnFetch ? (
                    <div><h1>Erro ao buscar dados, por favor, recarregue a página</h1></div>
                    )
                        : (
                    <div>
                        <Header/>
                        <MenuComponent dateStoredInYYYYMMDD={dateStoredInYYYYMMDD}
                                       setDateStoredInYYYYMMDD={setDateStoredInYYYYMMDD}/>
                        <GridComplete>
                            {programacao.map((lista, index) => {
                                    if (doTheScheduleNeedToBeActive(dayProgressUntilNow, lista.progress_start_time, lista.progress_end_time, dateStoredInYYYYMMDD, programacao.length, index)) {
                                        return (
                                            <ProgramActiveComponent lista={lista}/>
                                        );
                                    } else if (doTheScheduleNeedToBeOnTheList(dayProgressUntilNow, lista.progress_start_time, dateStoredInYYYYMMDD)) {
                                        return (
                                            <ProgramNonActiveComponent lista={lista}/>
                                        );
                                    }
                            })}
                        </GridComplete>
                        <BottonComponent/>
                    </div>
                )}
                    </div>
                )}
        </div>
    )
}

export default Home;
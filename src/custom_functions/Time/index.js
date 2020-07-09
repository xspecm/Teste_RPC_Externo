// Arquivo de funções personalizadas para tratar o tempo recebido na API.

export function getNowDateInYYYYMMDD() {
    let d = new Date();

    let dateInYYYYMMDD = new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000))
        .toISOString()
        .split("T")[0];

    return dateInYYYYMMDD;
}

export function getNowDateInYYYYMMDDWithParam(dateNowInYYYYMMDD, daysToAdvance) {
    let d = new Date(dateNowInYYYYMMDD);

    let dateInYYYYMMDD = new Date(d.getTime() + (daysToAdvance * 24 * 60 * 60 * 1000))
        .toISOString()
        .split("T")[0];

    return dateInYYYYMMDD;
}

export function passUTCHourToHHmm(hour, offset) {
    let beforeMinutes = hour.slice(2, 5);
    let newHourWithOffSet = parseFloat(hour) + parseInt(offset);

    if (newHourWithOffSet < 0) {
        newHourWithOffSet += 24;
    }

    let newHour = newHourWithOffSet.toString().concat(beforeMinutes);

    return newHour;
}

export function convertHourToProgressOfADay(timeHHmm) {

    if (timeHHmm) {
        let minutesOfProgram;
        let hoursOfProgram = parseFloat(timeHHmm.slice(0, 2));

        if (hoursOfProgram < 10) {
            minutesOfProgram = parseFloat(timeHHmm.slice(2, 4));
        } else {
            minutesOfProgram = parseFloat(timeHHmm.slice(3, 5));
        }

        let totalMinutes = (hoursOfProgram * 60) + minutesOfProgram;
        let progressOfAProgramInADay = parseFloat(((totalMinutes / (60 * 24)) * 100).toFixed(2));

        return progressOfAProgramInADay;
    } else {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();

        let minutesOfADayUntilNow = (hours * 60) + minutes;
        let progressOfADayUntilNow = parseFloat(((minutesOfADayUntilNow / (60 * 24)) * 100).toFixed(2));

        return progressOfADayUntilNow;
    }
}

export function getDayInPtBr (dateNowInYYYYMMDD, daysToAdvance) {
    let dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
    let monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    let dayNameShort = new Array ("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");
    let monShortName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");

    let year = parseInt(dateNowInYYYYMMDD.substring(0,4));
    let month = parseInt(dateNowInYYYYMMDD.substring(5,7));
    let day = parseInt(dateNowInYYYYMMDD.substring(8,10));
    let d;
    let dateInPtBr;

    if (daysToAdvance !== undefined) {
       d = new Date(year, month - 1, day + daysToAdvance);
       dateInPtBr = (dayNameShort[d.getDay()] + ', ' +d.getDate() + '/' + month);
    } else {
        d = new Date(year, month - 1, day);
        dateInPtBr = (dayName[d.getDay()] + ', ' +d.getDate() + ' de ' + monName[d.getMonth()]);
    }

    return dateInPtBr;
}
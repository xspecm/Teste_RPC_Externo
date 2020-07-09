import * as timeFunctions from "../Time";

export function treatDataReceivedFromApi(data) {
    let needAPop = 0;
    let almostTreatedData = data.programme.entries.map((items) => {

        items.human_start_time = timeFunctions.passUTCHourToHHmm(items.human_start_time, items.custom_info.BaseUTCOffset);
        items.human_end_time = timeFunctions.passUTCHourToHHmm(items.human_end_time, items.custom_info.BaseUTCOffset);

        items.progress_start_time = timeFunctions.convertHourToProgressOfADay(items.human_start_time);
        items.progress_end_time = timeFunctions.convertHourToProgressOfADay(items.human_end_time);

        if (items.title === "Encerramento") {
            needAPop = +1;
            return 'toberemoved';
        }
        return items;
    });

    almostTreatedData.sort(function (a, b) {
        return parseFloat(a.human_start_time) - parseFloat(b.human_start_time);
    });

    let treatedData = almostTreatedData;

    for (; needAPop > 0; needAPop--) {
        treatedData.pop();
    }

    return treatedData;
}
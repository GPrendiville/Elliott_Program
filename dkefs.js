
function dkefsToString(percent) {
    if((percent < 1) || (percent > 99)) {
        return "ERROR"
    }

    switch(!isNaN(percent)) {
        case percent < 5:
            return "very poor performance";
        case percent < 10:
            return "poor performance";
        case percent < 17:
            return "below average performance";
        case percent < 26:
            return "poor low average performance";
        case percent < 70:
            return "average performance";
        case percent < 85:
            return "strong performance";
        case percent < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}

export function dkefsOnLoad() {

    document.querySelectorAll(".letterfluency").forEach(element => element.textContent =  sessionStorage.getItem("letterfluency"));
    document.querySelectorAll(".letterFluencyString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("letterfluency")));

    document.querySelectorAll(".categoryfluency").forEach(element => element.textContent =  sessionStorage.getItem("categoryfluency"));
    document.querySelectorAll(".categoryFluencyString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("categoryfluency")));

    document.querySelectorAll(".categoryswitching").forEach(element => element.textContent =  sessionStorage.getItem("categoryswitching"));
    document.querySelectorAll(".categorySwitchingString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("categoryswitching")));

    document.querySelectorAll(".colornaming").forEach(element => element.textContent =  sessionStorage.getItem("colornaming"));
    document.querySelectorAll(".colorNamingString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("colornaming")));

    document.querySelectorAll(".wordreading").forEach(element => element.textContent =  sessionStorage.getItem("wordreading"));
    document.querySelectorAll(".wordReadingString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("wordreading")));

    document.querySelectorAll(".inhibition").forEach(element => element.textContent =  sessionStorage.getItem("inhibition"));
    document.querySelectorAll(".inhibitionString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("inhibition")));

    document.querySelectorAll(".inhibswitch").forEach(element => element.textContent =  sessionStorage.getItem("inhibswitch"));
    document.querySelectorAll(".switchString").forEach(element => element.textContent =  dkefsToString(sessionStorage.getItem("inhibswitch")));
}

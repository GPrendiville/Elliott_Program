
function lateralizationToString(field) {
    switch (!isNaN(field)) {
        case field < 70:
            return "extremely low range";
        case field < 80:
            return "borderline range";
        case field < 90:
            return "low average range";
        case field < 111:
            return "average range";
        case field < 121:
            return "high average range";
        case field < 130:
            return "superior range";
        default:
            return "very superior range";
    }
}

export function lateralizationOnLoad() {

    document.querySelectorAll(".vocab").forEach(element => element.innerText = sessionStorage.getItem("vocab"));
    document.querySelectorAll(".vocabString").forEach(element => element.innerText = lateralizationToString(sessionStorage.getItem("vocab")));


    document.querySelectorAll(".blockpatterns").forEach(element => element.innerText = sessionStorage.getItem("blockpatterns"));
    document.querySelectorAll(".blockString").forEach(element => element.innerText = lateralizationToString(sessionStorage.getItem("blockpatterns")));


    document.querySelectorAll(".absreasoning").forEach(element => element.innerText = sessionStorage.getItem("absreasoning"));
    document.querySelectorAll(".absString").forEach(element => element.innerText = lateralizationToString(sessionStorage.getItem("absreasoning")));


    document.querySelectorAll(".aqimpair").forEach(element => element.innerText = sessionStorage.getItem("aqimpair"));
    document.querySelectorAll(".aqString").forEach(element => element.innerText = lateralizationToString(sessionStorage.getItem("aqimpair")));


    document.querySelectorAll(".bqimpair").forEach(element => element.innerText = sessionStorage.getItem("bqimpair"));
    document.querySelectorAll(".bqString").forEach(element => element.innerText = lateralizationToString(sessionStorage.getItem("bqimpair")));


}


function lateralizationToString(field) {
    switch (!isNaN(field)) {
        case field < 70:
            return "extremely low range.";
        case field < 80:
            return "borderline range.";
        case field < 90:
            return "low average range.";
        case field < 111:
            return "average range.";
        case field < 121:
            return "high average range.";
        case field < 130:
            return "superior range.";
        default:
            return "very superior range.";
    }
}

export function lateralizationOnLoad() {

    document.getElementsByClassName('vocab')[0].innerText = sessionStorage.getItem("vocab");
    document.getElementsByClassName('vocabString')[0].innerText = lateralizationToString(sessionStorage.getItem("vocab"));

    document.getElementsByClassName('blockpatterns')[0].innerText = sessionStorage.getItem("blockpatterns");
    document.getElementsByClassName('blockString')[0].innerText = lateralizationToString(sessionStorage.getItem("blockpatterns"));

    document.getElementsByClassName('absreasoning')[0].innerText = sessionStorage.getItem("absreasoning");
    document.getElementsByClassName('absString')[0].innerText = lateralizationToString(sessionStorage.getItem("absreasoning"));

    document.getElementsByClassName('aqimpair')[0].innerText = sessionStorage.getItem("aqimpair");
    document.getElementsByClassName('aqString')[0].innerText = lateralizationToString(sessionStorage.getItem("aqimpair"));

    document.getElementsByClassName('bqimpair')[0].innerText = sessionStorage.getItem("bqimpair");
    document.getElementsByClassName('bqString')[0].innerText = lateralizationToString(sessionStorage.getItem("bqimpair"));

}

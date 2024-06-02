
import { ordinal } from "./textConfirm.js";

function fingersToString(fingers) {
    switch (!isNaN(fingers)) {
        case fingers < 2:
            return "extremely low range";
        case fingers < 4:
            return "borderline range";
        case fingers < 8:
            return "low average range";
        case fingers < 11:
            return "average range";
        case fingers < 14:
            return "high average range";
        default:
            return "very superior range";
    }
}

function wramlToString(percent) {
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

export function wramlOnLoad() {

    // document.getElementsByClassName('fingers')[0].textContent = ordinal(sessionStorage.getItem("fingers"));
    // document.getElementsByClassName('fingersString')[0].textContent = fingersToString(sessionStorage.getItem("fingers"));
    document.querySelectorAll(".fingers").forEach(element => element.textContent = ordinal(sessionStorage.getItem("fingers")));
    document.querySelectorAll(".fingersString").forEach(element => element.textContent = fingersToString(sessionStorage.getItem("fingers")));

    // document.getElementsByClassName('trialscore')[0].textContent = ordinal(sessionStorage.getItem("trialscore"));
    // document.getElementsByClassName('trialString')[0].textContent = wramlToString(sessionStorage.getItem("trialscore"));
    document.querySelectorAll(".trialscore").forEach(element => element.textContent = ordinal(sessionStorage.getItem("trialscore")));
    document.querySelectorAll(".trialString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("trialscore")));
    
    // document.getElementsByClassName('recall')[0].textContent = ordinal(sessionStorage.getItem("recall"));
    // document.getElementsByClassName('recallString')[0].textContent = wramlToString(sessionStorage.getItem("recall"));
    document.querySelectorAll(".recall").forEach(element => element.textContent = ordinal(sessionStorage.getItem("recall")));
    document.querySelectorAll(".recallString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("recall")));

    // document.getElementsByClassName('recognitionString')[0].textContent = wramlToString(sessionStorage.getItem("recognition"));
    document.querySelectorAll(".recognitionString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("recognition")));

}

// export function trialScoreString(trialscore) {
//     switch(!isNaN(trialscore)) {
//         case trialscore < 5:
//             return "very poor performance";
//         case trialscore < 10:
//             return "poor performance";
//         case trialscore < 17:
//             return "below average performance";
//         case trialscore < 26:
//             return "poor low average performance";
//         case trialscore < 70:
//             return "average performance";
//         case trialscore < 85:
//             return "strong performance";
//         case trialscore < 90:
//             return "very strong performance";
//         default:
//             return "excellent performance";
//     }
// }

// export function recallString(recall) {
//     switch(!isNaN(recall)) {
//         case recall < 5:
//             return "very poor performance";
//         case recall < 10:
//             return "poor performance";
//         case recall < 17:
//             return "below average performance";
//         case recall < 26:
//             return "poor low average performance";
//         case recall < 70:
//             return "average performance";
//         case recall < 85:
//             return "strong performance";
//         case recall < 90:
//             return "very strong performance";
//         default:
//             return "excellent performance";
//     }
// }

// export function recognitionString(recognition) {
//     switch(!isNaN(recognition)) {
//         case recognition < 5:
//             return "very poor performance";
//         case recognition < 10:
//             return "poor performance";
//         case recognition < 17:
//             return "below average performance";
//         case recognition < 26:
//             return "poor low average performance";
//         case recognition < 70:
//             return "average performance";
//         case recognition < 85:
//             return "strong performance";
//         case recognition < 90:
//             return "very strong performance";
//         default:
//             return "excellent performance";
//     }
// }
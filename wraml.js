
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

    document.querySelectorAll(".fingers").forEach(element => element.textContent = ordinal(sessionStorage.getItem("fingers")));
    document.querySelectorAll(".fingersString").forEach(element => element.textContent = fingersToString(sessionStorage.getItem("fingers")));

    document.querySelectorAll(".trialscore").forEach(element => element.textContent = ordinal(sessionStorage.getItem("trialscore")));
    document.querySelectorAll(".trialString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("trialscore")));
    
    document.querySelectorAll(".recall").forEach(element => element.textContent = ordinal(sessionStorage.getItem("recall")));
    document.querySelectorAll(".recallString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("recall")));
    
    document.querySelectorAll(".recognitionString").forEach(element => element.textContent = wramlToString(sessionStorage.getItem("recognition")));

}


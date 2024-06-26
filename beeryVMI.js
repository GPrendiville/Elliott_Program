
import { ordinal } from "./textConfirm.js";

function motorCoordToString(motorcoord) {
    if((motorcoord < 1) || (motorcoord > 99)) {
        return "ERROR"
    }

    switch(!isNaN(motorcoord)) {
        case motorcoord < 5:
            return "very poor performance";
        case motorcoord < 10:
            return "poor performance";
        case motorcoord < 17:
            return "below average performance";
        case motorcoord < 26:
            return "poor low average performance";
        case motorcoord < 70:
            return "average performance";
        case motorcoord < 85:
            return "strong performance";
        case motorcoord < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}

export function beeryOnLoad() {

    document.querySelectorAll(".motorcoord").forEach(element => element.textContent =  ordinal(sessionStorage.getItem("motorcoord")));
    document.querySelectorAll(".motorCoordString").forEach(element => element.textContent = motorCoordToString(sessionStorage.getItem("motorcoord")));

}
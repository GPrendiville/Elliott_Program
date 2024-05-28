
export function sdmtToString(score) {
    switch (!isNaN(score)) {
        case score === 0:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "2.5 to 3.0 standard deviations above the mean indicating the very strong range");
            break;
        case score === 1:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "2.0 to 2.5 standard deviations above the mean indicating the very high range");
            break;
        case score === 2:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "1.5 to 2.0 standard deviations above the mean indicating the moderately high range");
            break;
        case score === 3:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "1.0 to 1.5 standard deviations above the mean indicating the high average range");
            break;
        case score === 4:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "0.5 to 1.0 standard deviations");
            break;
        case score === 5:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "0.0 to 0.5 standard deviations");
            break;
        case score === 6:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-0.5 to 0.0 standard deviations");
            break;
        case score === 7:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-1.0 to -0.5 standard deviations");
            break;
        case score === 8:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-1.5 to -1.0 standard deviations");
            break;
        case score === 9:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-2.0 to -1.5 standard deviations");
            break;
        case score === 10:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-2.5 to -2.0 standard deviations");
            break;
        default:
            document.querySelectorAll(".deviationString").forEach(element => element.innerText = "-3.0 to -2.5 standard deviations");
            break;
    }

}

export function sdmtToString(score) {
    switch (!isNaN(score)) {
        case score === "0":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "2.0 to 3.0 standard deviations above the mean indicating the extremely high range");
            break;
        case score === "1":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "1.0 to 2.0 standard deviations above the mean indicating the very high range");
            break;
        case score === "2":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "0.5 to 1.0 standard deviations above the mean indicating the moderately high range");
            break;
        case score === "3":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "0.0 to 0.5 standard deviations above the mean indicating the average range");
            break;
        case score === "4":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "0.0 to -0.5 standard deviations below the mean indicating the average range");
            break;
        case score === "5":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "-0.5 to -1.0 standard deviations below the mean indicating the moderately low range");
            break;
        case score === "6":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "-1.0 to -2.0 standard deviations below the mean indicating very low range");
            break;
        case score === "7":
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "-2.0 to -3.0 standard deviations below the mean indicating very poor range");
            break;
        default:
            document.querySelectorAll(".deviationString").forEach(element => element.textContent = "ERROR");
            break;
    }

}
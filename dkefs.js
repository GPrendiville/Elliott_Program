
let letterfluency = document.getElementById('letterfluency').value;
let categoryfluency = document.getElementById('categoryfluency').value;
let categoryswitching = document.getElementById('categoryswitching').value;
let colornaming = document.getElementById('colornaming').value;
let wordreading = document.getElementById('wordreading').value;
let inhibition = document.getElementById('inhibition').value;
let inhibswitch = document.getElementById('inhib-switch').value;

export function letterFluencyString(letterfluency) {
    switch(!isNaN(letterfluency)) {
        case letterfluency < 5:
            return "very poor performance";
        case letterfluency < 10:
            return "poor performance";
        case letterfluency < 17:
            return "below average performance";
        case letterfluency < 26:
            return "poor low average performance";
        case letterfluency < 70:
            return "average performance";
        case letterfluency < 85:
            return "strong performance";
        case letterfluency < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}
export function categoryFluencyString(categoryfluency) {
    switch(!isNaN(categoryfluency)) {
        case categoryfluency < 5:
            return "very poor performance";
        case categoryfluency < 10:
            return "poor performance";
        case categoryfluency < 17:
            return "below average performance";
        case categoryfluency < 26:
            return "poor low average performance";
        case categoryfluency < 70:
            return "average performance";
        case categoryfluency < 85:
            return "strong performance";
        case categoryfluency < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}

export function categorySwitchingString(categoryswitching) {
    switch(!isNaN(categoryswitching)) {
        case categoryswitching < 5:
            return "very poor performance";
        case categoryswitching < 10:
            return "poor performance";
        case categoryswitching < 17:
            return "below average performance";
        case categoryswitching < 26:
            return "poor low average performance";
        case categoryswitching < 70:
            return "average performance";
        case categoryswitching < 85:
            return "strong performance";
        case categoryswitching < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}

export function colorNamingString(colornaming) {
    switch(!isNaN(colornaming)) {
        case colornaming < 5:
            return "very poor performance";
        case colornaming < 10:
            return "poor performance";
        case colornaming < 17:
            return "below average performance";
        case colornaming < 26:
            return "poor low average performance";
        case colornaming < 70:
            return "average performance";
        case colornaming < 85:
            return "strong performance";
        case colornaming < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}
export function wordReadingString(wordreading) {
    switch(!isNaN(wordreading)) {
        case wordreading < 5:
            return "very poor performance";
        case wordreading < 10:
            return "poor performance";
        case wordreading < 17:
            return "below average performance";
        case wordreading < 26:
            return "poor low average performance";
        case wordreading < 70:
            return "average performance";
        case wordreading < 85:
            return "strong performance";
        case wordreading < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}
export function inhibitionString(inhibition) {
    switch(!isNaN(inhibition)) {
        case inhibition < 5:
            return "very poor performance";
        case inhibition < 10:
            return "poor performance";
        case inhibition < 17:
            return "below average performance";
        case inhibition < 26:
            return "poor low average performance";
        case inhibition < 70:
            return "average performance";
        case inhibition < 85:
            return "strong performance";
        case inhibition < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}
export function inhibSwitchString(inhibswitch) {
    switch(!isNaN(inhibswitch)) {
        case inhibswitch < 5:
            return "very poor performance";
        case inhibswitch < 10:
            return "poor performance";
        case inhibswitch < 17:
            return "below average performance";
        case inhibswitch < 26:
            return "poor low average performance";
        case inhibswitch < 70:
            return "average performance";
        case inhibswitch < 85:
            return "strong performance";
        case inhibswitch < 90:
            return "very strong performance";
        default:
            return "excellent performance";
    }
}

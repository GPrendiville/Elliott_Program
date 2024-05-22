
export function fingersToString(fingers) {
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

export function scaledFingersToString(fingers) {
    switch (!isNaN(fingers)) {
        case fingers === 4:
            return "4, which is the 2nd%, indicating a very poor performance";
        case fingers === 5:
            return "5, which is the 5th%, indicating a very poor performance";
        case fingers === 6:
            return "6, which is the 9th%, indicating a very poor performance";
        case fingers === 7:
            return "7, which is the 16th%, indicating a very poor performance";
        case fingers === 8:
            return "8, which is the 25th%, indicating a very poor performance";
        case fingers === 9:
            return "9, which is the 37th%, indicating a very poor performance";
        case fingers === 10:
            return "10, which is the 50th%, indicating a very poor performance";
        case fingers === 11:
            return "11, which is the 63rd%, indicating a very poor performance";
        case fingers === 12:
            return "12, which is the 75th%, indicating a very poor performance";
        case fingers === 13:
            return "13, which is the 84th%, indicating a very poor performance";
        case fingers === 14:
            return "14, which is the 91th%, indicating a very poor performance";
        case fingers === 15:
            return "15, which is the 95th%, indicating a very poor performance";
        default:
            return "16, which is the 98th%, indication excellent performance";

    }
}

export function wramlToString(percent) {
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
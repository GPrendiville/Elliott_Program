
export function lateralizationToString(field) {
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

// export function vocabString(vocab) {
//     switch (!isNaN(vocab)) {
//         case vocab < 70:
//             return "extremely low range.";
//         case vocab < 80:
//             return "borderline range.";
//         case vocab < 90:
//             return "low average range.";
//         case vocab < 111:
//             return "average range.";
//         case vocab < 121:
//             return "high average range.";
//         case vocab < 130:
//             return "superior range.";
//         default:
//             return "very superior range.";
//     }

// }

// export function blockString(blockpatterns) {
//     switch (!isNaN(blockpatterns)) {
//         case blockpatterns < 70:
//             return "extremely low range.";
//         case blockpatterns < 80:
//             return "borderline range.";
//         case blockpatterns < 90:
//             return "low average range.";
//         case blockpatterns < 111:
//             return "average range.";
//         case blockpatterns < 121:
//             return "high average range.";
//         case blockpatterns < 130:
//             return "superior range.";
//         default:
//             return "very superior range.";
//     }
// }

// export function absString(absreasoning) {
//     switch (!isNaN(absreasoning)) {
//         case absreasoning < 70:
//             return "extremely low range.";
//         case absreasoning < 80:
//             return "borderline range.";
//         case absreasoning < 90:
//             return "low average range.";
//         case absreasoning < 111:
//             return "average range.";
//         case absreasoning < 121:
//             return "high average range.";
//         case absreasoning < 130:
//             return "superior range.";
//         default:
//             return "very superior range.";
//     }

// }

// export function aqString(aqimpair) {
//     switch (!isNaN(aqimpair)) {
//         case aqimpair < 70:
//             return "extremely low range.";
//         case aqimpair < 80:
//             return "borderline range.";
//         case aqimpair < 90:
//             return "low average range.";
//         case aqimpair < 111:
//             return "average range.";
//         case aqimpair < 121:
//             return "high average range.";
//         case aqimpair < 130:
//             return "superior range.";
//         default:
//             return "very superior range.";
//     }
// }

// export function bqString(bqimpair) {
//     switch (!isNaN(bqimpair)) {
//         case bqimpair < 70:
//             return "extremely low range.";
//         case bqimpair < 80:
//             return "borderline range.";
//         case bqimpair < 90:
//             return "low average range.";
//         case bqimpair < 111:
//             return "average range.";
//         case bqimpair < 121:
//             return "high average range.";
//         case bqimpair < 130:
//             return "superior range.";
//         default:
//             return "very superior range.";
//     }
// }
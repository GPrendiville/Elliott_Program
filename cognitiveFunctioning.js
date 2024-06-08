
function totalScoreString(totalscore) {
    if((totalscore < 0) || (totalscore > 99)) {
        return "ERROR";
    }

    switch(!isNaN(totalscore)) {
        case totalscore < 10:
            return "severe cognitive impairment";
        case totalscore < 22:
            return "moderate cognitive impairment";
        case totalscore < 28:
            return "mild cognitive impairment";
        default:
            return "no cognitive impairment";
    }
}

function subsetScoreToString(score) {
    switch(!isNaN(score)) {
        case score === "0":
            return "severe impairment";
        case score === "1":
            return "moderate impairment";
        case score === "2":
            return "mild impairment";
        case score === "3":
            return "no impairment";
        default:
            return "ERROR";
    }
}

export function cogFunctionOnLoad() {

    document.querySelectorAll(".totalscore").forEach(element => element.textContent = sessionStorage.getItem("totalscore"));
    document.querySelectorAll(".totalScoreString").forEach(element => element.textContent = totalScoreString(sessionStorage.getItem("totalscore")));

    document.querySelectorAll(".orientation").forEach(element => element.textContent = sessionStorage.getItem("orientation"));
    document.querySelectorAll(".orientationString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("orientation")));

    document.querySelectorAll(".presidential").forEach(element => element.textContent = sessionStorage.getItem("presidential"));
    document.querySelectorAll(".presidentialString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("presidential")));

    document.querySelectorAll(".naming").forEach(element => element.textContent = sessionStorage.getItem("naming"));
    document.querySelectorAll(".namingString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("naming")));

    document.querySelectorAll(".comprehension").forEach(element => element.textContent = sessionStorage.getItem("comprehension"));
    document.querySelectorAll(".comprehensionString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("comprehension")));

    document.querySelectorAll(".praxis").forEach(element => element.textContent = sessionStorage.getItem("praxis"));
    document.querySelectorAll(".praxisString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("praxis")));

    document.querySelectorAll(".shiftingset").forEach(element => element.textContent = sessionStorage.getItem("shiftingset"));
    document.querySelectorAll(".shiftingSetString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("shiftingset")));

    document.querySelectorAll(".incompletepics").forEach(element => element.textContent = sessionStorage.getItem("incompletepics"));
    document.querySelectorAll(".incompletePicsString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("incompletepics")));

    document.querySelectorAll(".similarities").forEach(element => element.textContent = sessionStorage.getItem("similarities"));
    document.querySelectorAll(".similaritiesString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("similarities")));

    document.querySelectorAll(".attention").forEach(element => element.textContent = sessionStorage.getItem("attention"));
    document.querySelectorAll(".attentionString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("attention")));

    document.querySelectorAll(".memory").forEach(element => element.textContent = sessionStorage.getItem("memory"));
    document.querySelectorAll(".memoryString").forEach(element => element.textContent = subsetScoreToString(sessionStorage.getItem("memory")));

}

// export function orientationString(orientation) {
//     switch(!isNaN(orientation)) {
//         case orientation === 0:
//             return "severe impairment.";
//         case orientation === 1:
//             return "moderate impairment.";
//         case orientation === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function presidentialString(presidential) {
//     switch(!isNaN(presidential)) {
//         case presidential === 0:
//             return "severe impairment.";
//         case presidential === 1:
//             return "moderate impairment.";
//         case presidential === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function namingString(naming) {
//     switch(!isNaN(naming)) {
//         case naming === 0:
//             return "severe impairment.";
//         case naming === 1:
//             return "moderate impairment.";
//         case naming === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function comprehensionString(comprehension) {
//     switch(!isNaN(comprehension)) {
//         case comprehension === 0:
//             return "severe impairment.";
//         case comprehension === 1:
//             return "moderate impairment.";
//         case comprehension === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function praxisString(praxis) {
//     switch(!isNaN(praxis)) {
//         case praxis === 0:
//             return "severe impairment.";
//         case praxis === 1:
//             return "moderate impairment.";
//         case praxis === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function shiftingSetString(shiftingset) {
//     switch(!isNaN(shiftingset)) {
//         case shiftingset === 0:
//             return "severe impairment.";
//         case shiftingset === 1:
//             return "moderate impairment.";
//         case shiftingset === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function incompletePicsString(incompletepics) {
//     switch(!isNaN(incompletepics)) {
//         case incompletepics === 0:
//             return "severe impairment.";
//         case incompletepics === 1:
//             return "moderate impairment.";
//         case incompletepics === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function similaritiesString(similarities) {
//     switch(!isNaN(similarities)) {
//         case similarities === 0:
//             return "severe impairment.";
//         case similarities === 1:
//             return "moderate impairment.";
//         case similarities === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function attentionString(attention) {
//     switch(!isNaN(attention)) {
//         case attention === 0:
//             return "severe impairment.";
//         case attention === 1:
//             return "moderate impairment.";
//         case attention === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

// export function memoryString(memory) {
//     switch(!isNaN(memory)) {
//         case memory === 0:
//             return "severe impairment.";
//         case memory === 1:
//             return "moderate impairment.";
//         case memory === 2:
//             return "mild impairment";
//         default:
//             return "no impairment.";
//     }
// }

export function totalScoreString(totalscore) {
    switch(!isNaN(totalscore)) {
        case totalscore < 10:
            return "severe cognitive impairment.";
        case totalscore < 22:
            return "moderate cognitive impairment.";
        case totalscore < 28:
            return "mild cognitive impairment.";
        default:
            return "no cognitive impairment.";
    }
}

export function orientationString(orientation) {
    switch(!isNaN(orientation)) {
        case orientation === 0:
            return "severe impairment.";
        case orientation === 1:
            return "moderate impairment.";
        case orientation === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function presidentialString(presidential) {
    switch(!isNaN(presidential)) {
        case presidential === 0:
            return "severe impairment.";
        case presidential === 1:
            return "moderate impairment.";
        case presidential === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function namingString(naming) {
    switch(!isNaN(naming)) {
        case naming === 0:
            return "severe impairment.";
        case naming === 1:
            return "moderate impairment.";
        case naming === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function comprehensionString(comprehension) {
    switch(!isNaN(comprehension)) {
        case comprehension === 0:
            return "severe impairment.";
        case comprehension === 1:
            return "moderate impairment.";
        case comprehension === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function praxisString(praxis) {
    switch(!isNaN(praxis)) {
        case praxis === 0:
            return "severe impairment.";
        case praxis === 1:
            return "moderate impairment.";
        case praxis === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function shiftingSetString(shiftingset) {
    switch(!isNaN(shiftingset)) {
        case shiftingset === 0:
            return "severe impairment.";
        case shiftingset === 1:
            return "moderate impairment.";
        case shiftingset === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function incompletePicsString(incompletepics) {
    switch(!isNaN(incompletepics)) {
        case incompletepics === 0:
            return "severe impairment.";
        case incompletepics === 1:
            return "moderate impairment.";
        case incompletepics === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function similaritiesString(similarities) {
    switch(!isNaN(similarities)) {
        case similarities === 0:
            return "severe impairment.";
        case similarities === 1:
            return "moderate impairment.";
        case similarities === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function attentionString(attention) {
    switch(!isNaN(attention)) {
        case attention === 0:
            return "severe impairment.";
        case attention === 1:
            return "moderate impairment.";
        case attention === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}

export function memoryString(memory) {
    switch(!isNaN(memory)) {
        case memory === 0:
            return "severe impairment.";
        case memory === 1:
            return "moderate impairment.";
        case memory === 2:
            return "mild impairment";
        default:
            return "no impairment.";
    }
}
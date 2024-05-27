
export function sdmtToString() {
    switch(!isNaN(score)) {
        case score === 0:
            return "severe impairment";
        case score === 1:
            return "moderate impairment";
        case score === 2:
            return "mild impairment";
        default:
            return "no impairment";
    }
}
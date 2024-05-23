
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

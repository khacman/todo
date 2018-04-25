export function isNotEmptyOrThrowError(...values) {
    values.forEach(value => {
        if (value !== 0 && value !== false && !value) {
            throw new Error("Missing mandatory params!");
        }
    });

    return true;
}

export const capitalizeWords = (str: string): string => {
    if (str.includes("-")) {
        return str
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }
    return  str.charAt(0).toUpperCase() + str.slice(1)
}
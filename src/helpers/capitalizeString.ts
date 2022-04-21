export const capitalizeString = (str: string) => {
    const firstLetterToUpperCase = str[0].toUpperCase();
    return firstLetterToUpperCase + str.substring(1);
}
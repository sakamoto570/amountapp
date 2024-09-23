export const conversionDate = (date: string) => {
    let result = date
    result = result.replace(/年/g, '/');
    result = result.replace(/月/g, '/');
    result = result.replace(/日/g, '');
    result = result.substring(0, date.indexOf(" "))
    return result
}
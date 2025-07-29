export function firstLetterUpperCase(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstLetterLowerCase(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export function isEmptyArray(arr: any[]): boolean {
    return arr.length === 0;
}
export function isEmptyString(str: string): boolean {
    return str.trim().length === 0;
}
export function isEmptyValue(value: any): boolean {
    return value === null || value === undefined || isEmptyString(value) || isEmptyArray(value) || isEmptyObject(value);
}
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export function isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneNumberRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return phoneNumberRegex.test(phoneNumber);
}
export function isValidUrl(url: string): boolean {
    const urlRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
    return urlRegex.test(url);
}
export function isValidDate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}
export function isValidTime(time: string): boolean {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
}
export function isValidDateTime(dateTime: string): boolean {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(\.\d+)?Z$/;
    return dateTimeRegex.test(dateTime);
}
export function isValidUUID(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}
export function isValidIP(ip: string): boolean {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
}
export function isValidCreditCard(cardNumber: string): boolean {
    const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|7[0-9]{15}|(?:2131|1800|35\d{3})\d{11})$/;
    return cardNumberRegex.test(cardNumber);
}
export function isValidPostalCode(postalCode: string): boolean {
    const postalCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return postalCodeRegex.test(postalCode);
}
export function isValidUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    return usernameRegex.test(username);
}
export function isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

export function isValidJWT(jwt: string): boolean {
    const jwtRegex = /^[A-Za-z0-9-_.]+?\.[A-Za-z0-9-_.]+?\.[A-Za-z0-9-_.]+?$/;
    return jwtRegex.test(jwt);
}



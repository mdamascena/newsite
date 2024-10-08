export function validateCPF(value) {
    const cleanedValue = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cleanedValue.length !== 11) {
        return false;
    }

    const digits = Array.from(cleanedValue, Number);
    const [a, b, c, d, e, f, g, h, i, j, k] = digits;
    const sum1 = 10 * a + 9 * b + 8 * c + 7 * d + 6 * e + 5 * f + 4 * g + 3 * h + 2 * i;
    const remainder1 = sum1 % 11;
    const firstDigit = remainder1 < 2 ? 0 : 11 - remainder1;

    const sum2 = 11 * a + 10 * b + 9 * c + 8 * d + 7 * e + 6 * f + 5 * g + 4 * h + 3 * i + 2 * firstDigit;
    const remainder2 = sum2 % 11;
    const secondDigit = remainder2 < 2 ? 0 : 11 - remainder2;

    return firstDigit === j && secondDigit === k;
}

export function validateFullName(value) {
    if (!value) return false;

    // Quebra o nome em partes usando espaços como delimitadores
    const parts = value.trim().split(' ');

    // Verifica se há pelo menos um nome e um sobrenome
    if (parts.length < 2) return false;

    // Verifica se o primeiro nome tem mais de 2 caracteres
    return parts[0].length > 2;
}

export function validatePhoneNumber(value) {
    if (!value) return false;

    // Remove todos os caracteres não numéricos
    const cleanNumber = value.replace(/\D/g, '');

    // Verifica se o número tem pelo menos 10 dígitos (contando o DDD)
    if (cleanNumber.length < 11) return false;

    // Se o número tiver 11 dígitos (incluindo o DDD), verifica se o primeiro dígito é 9
    if (cleanNumber.length === 11) {
        return cleanNumber[2] === '9';
    }

    return true;
}
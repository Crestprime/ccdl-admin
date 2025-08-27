export const formatNumberWithK = (
    number: number | any,
    symbol = false,
    prefix = "₦"
): string => {
    if (!number || number === 0) return "0";

    const absNumber = Math.abs(number); // handle negatives safely
    let formatted = "";

    if (absNumber >= 1_000_000_000_000) {
        formatted = (number / 1_000_000_000_000).toFixed(2) + "T"; // Trillion
    } else if (absNumber >= 1_000_000_000) {
        formatted = (number / 1_000_000_000).toFixed(2) + "B"; // Billion
    } else if (absNumber >= 1_000_000) {
        formatted = (number / 1_000_000).toFixed(2) + "M"; // Million
    } else if (absNumber >= 1_000) {
        formatted = (number / 1_000).toFixed(2) + "K"; // Thousand
    } else {
        formatted = number.toFixed(2); // Less than 1k → show 2 decimals
    }

    return (symbol ? prefix : "") + formatted;
};

export const numberFormatNaire = (x: any) => {
    return "₦" + Number(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

export const numberFormatDollar = (x: any) => {
    return "$" + Number(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

export const numberFormat = (x: any) => {
    return Number(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};
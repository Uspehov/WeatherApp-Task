export const formateData = (data) => {
    const formatted = {};
    for (let key in data) {
        if (key === 'weather' || key === 'wind' || key === 'main') {
            formatted[key] = data[key];
        }
    }
    return formatted;
}
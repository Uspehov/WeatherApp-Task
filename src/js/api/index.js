export async function fetchWeather(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&APPID=043be895a8380057a1557b2b734ffbb1`, {
            method: "GET",
        });
        if (response.status !== 200) { throw new Error("Not 200 response") } else {
            const result = await response.json();
            return result;
        }
    } catch (e) { return false }

};
export default async function hello() {
    try {
        const response = await fetch('https://localhost:443/api/hello/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

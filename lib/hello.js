export default async function hello() {
    try {
        const response = await fetch('http://localhost:3000/api/hello/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

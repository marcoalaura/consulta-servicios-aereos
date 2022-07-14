
export async function getServicios() {

    try{
        const response = await fetch('/api/services');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

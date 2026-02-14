export async function fetchTrails() {
    try {
        const response = await fetch("data/trails.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        console.log("Trails fetched successfully");
        return await response.json();
        

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
    
}
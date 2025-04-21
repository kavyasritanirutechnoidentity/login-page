
export async function picSumApi() {
    const api = import.meta.env.VITE_PIC_SUM_API 
   try {
    const response = await fetch(api)
    const data = await response.json()
    // console.log("PIC SUM API", data)
    return data
   } catch (error) {
    console.log(error, "erro while fetching the data in utils ")
   }
}


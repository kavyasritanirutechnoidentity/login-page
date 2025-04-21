
import { picSumApi } from "./picSumApi"

export const getImageById = async (id) => {
    try {
        const response = await picSumApi()
        const image = await response.find((image) => parseInt(image.id) === parseInt(id))
        return image
    } catch (error) {
        console.log(error, "error while fetching image by id") 
    }
}
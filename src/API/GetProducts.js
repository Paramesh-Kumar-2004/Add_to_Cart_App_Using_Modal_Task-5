import axios from "axios";

const GetProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default GetProducts;

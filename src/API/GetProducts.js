import axios from "axios";

const GetProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default GetProducts;

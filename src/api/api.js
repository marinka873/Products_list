import axios from "axios";
import { TEST_SEARCH_PRODUCTS } from "./const";

export const instance = axios.create({
    headers:{
        Authorization: "Bearer Vdhgor7ChDlFoNm7JezbOpwicH2RRT2s"
    }
})

export const getTestProducts = (values) => {
    try {
        const body =  { 
            searchArticles : values
        }
        const res = instance.post(TEST_SEARCH_PRODUCTS, body)
        return res

    } catch (e) {
        console.log(e)
    }
}

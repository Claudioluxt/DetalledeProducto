import { useEffect, useState } from "react";
import promiseDetail from "../utils/promiseDetail";
import {data} from "../utils/data"
import ItemDetail from "./ItemDetail";


const ItemDetailConteiner = () => {
    const [dato, setDato] = useState({});
    

    useEffect(() => {
        promiseDetail(500, data[1])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
        )
}

export default ItemDetailConteiner
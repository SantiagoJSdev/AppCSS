import { useState } from "react";

const initialPage = 1;

export const usePage = () => {

    const [page, setpage] = useState(initialPage);
    const maximo = (14);
    
    return {
        setpage,
        maximo, 
        page
    }
};

import {useCallback} from "react";

export const useStorage = ()=>{
    let prevData
    const storage = useCallback((selector, data) => {
        prevData = JSON.parse(localStorage.getItem(selector))
        if(data){
            localStorage.setItem(selector, JSON.stringify(data))
        }
        return prevData
    }, [])
    return { storage }
}

import {useState} from 'react';

export const useStateSelection = () => {
    const[st,setSt] = useState<string>("");

    const setSelect = (select: string) =>
        select == st ? setSt("all") : setSt(select)

    return {st,setSelect}; 
}
import axios from "axios";
const ROOT_URL = `http://demo2365662.mockable.io/`

export const FETCH_MANDATA = 'FETCH_MANDATA'

export function fetchManData(){
    const url = `${ROOT_URL}managers`;
    console.log(url);
    const request= axios.get(url);

    return{
        type: FETCH_MANDATA,
        payload: request
    }
}
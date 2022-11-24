import axios from "axios";



export function getUserdtls(payload){

    return axios({

        method: 'GET',

        params: payload,

        url:'https://jsonplaceholder.typicode.com/posts'

    })

}
export function abc(payload){

    return axios({

        method: 'GET',

        params: payload,

        url:'https://jsonplaceholder.typicode.com/posts'

    })

}
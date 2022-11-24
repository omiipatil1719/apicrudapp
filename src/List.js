import React, { useEffect, useState } from 'react'
import axios from "axios"
import { getUserdtls } from './Actions/User';
const List = (props) => {

    const [username, setUsername]=useState();


    const getLIst=async()=>{
        try{
            const resp = await getUserdtls();
            setUsername(resp.data)
        }
        catch(e){}
    }

    useEffect(()=>{
    
        getLIst()   
            // axios.get("https://jsonplaceholder.typicode.com/posts")
            // .then((resp)=>{
            //     setUsername(resp.data) // eith fkt resp.data taka (data.title,data.id) takl tr error yeil
            // })   
    },[])
    const filteredData = username?.filter((el) => {
        if (props.input === "") {
            return el;
        }
        else {
            return (
                el.title.toLowerCase().includes(props.input) //he title data madhl title ahe
            )
        }
    })
 
    return (
        <>
            {
                filteredData?.map((item) => {
                    return (
                    <>
                    <div className='listData' >
                    <p key={item.id}>{item.title}</p>

                    </div>
                    </>
                    )
                })

            }


        </>)
}

export default List;
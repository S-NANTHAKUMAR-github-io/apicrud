 import { useState, useEffect } from "react"

//'https://jsonplaceholder.typicode.com/posts'



export const Usefetch = (url) => {
    

    const [posts, setposts] = useState("")
    const [error, seterror] = useState(null)


    useEffect(() => {
        const fetchpost = async () =>{
            const response = await fetch(url)

            const jsonresponse = await response.json()
            if(response.ok){
                setposts(jsonresponse)
                seterror("")
                //console.log(jsonresponse);
            }
            if(!response.ok){
                seterror(jsonresponse.error)
                //console.log(error);
            }


        }

        fetchpost()

    },[url])

  return (
   {posts,error}
  )
}

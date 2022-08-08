import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'



export default function MoreInfo() {
  let params = useParams()
  const [mbs4, setMbs4] = useState([])
  
    // const fetchDetails = async () => {
    //     const data = await fetch(`https://surprise-5-api.vercel.app/api/minibrand/4/itemno/${params.itemNo}`)
    //     const detailData = await data.json()
    //     setDetails(detailData)
    //   }

      useEffect(()=>{
        fetch(`https://surprise-5-api.vercel.app/api/minibrand/4/itemno/${params.itemNo}`)
        .then(response => response.json())
        .then(data => setMbs4(data))
    }, [params.itemNo])
  
    return (
        <div>
          <div>
            <h2>{mbs4.itemName}</h2>
          </div>
        
        </div>
      )
  }


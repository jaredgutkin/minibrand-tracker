import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function MoreInfo() {
  const { seriesNo, itemNo } = useParams()
  const [mbs4, setMbs4] = useState([{}])
  
    // const fetchDetails = async () => {
    //     const data = await fetch(`https://surprise-5-api.vercel.app/api/minibrand/4/itemno/${itemNo}`)
    //     const detailData = await data.json()
    //     setDetails(detailData)
    //   }

      useEffect(()=>{
        fetch(`https://surprise-5-api.vercel.app/api/minibrand/${seriesNo}/itemno/${itemNo}`)
        .then(response => response.json())
        .then(data => setMbs4(data))
    }, [seriesNo, itemNo])

    console.log(mbs4)
  
    return (
      <div className="detail-wrapper">
      <div>
        <h2>{mbs4[0].itemName}</h2>
        <img src={mbs4[0].image} alt={mbs4[0].itemName} />
      </div>
      </div>
      )
  }


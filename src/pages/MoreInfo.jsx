import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function MoreInfo() {
  const { seriesNo, itemNo } = useParams()
  const [mbs4, setMbs4] = useState([{}])
  
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
        <div className="info">
          <h3>Item Number: {mbs4[0].itemNo}</h3>
          <h3>Brand Name: {mbs4[0].brandName}</h3>
          <h3>Item Name: {mbs4[0].itemName}</h3>
          <h3>Rarity: {mbs4[0].rarity}</h3>
          <h3>Special Feature: {mbs4[0].specialFeature}</h3>
        </div>
      </div>
      )
  }


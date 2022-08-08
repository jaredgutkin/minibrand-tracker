import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(mbsgr) {
  return mbsgr.map((currMbsgr, index) => {
    return (
      <tr key={`${index+currMbsgr.number+currMbsgr.itemName}`}>
        <td>{currMbsgr.itemNo}</td>
        <td className="text-center">

          <br />
          {currMbsgr.itemName}
        </td>
        <td className='text-center'>
        <img
            width={50}
            height={50}
            className="mr-3"
            src={currMbsgr.image}
            alt={`${currMbsgr.itemName}+`}
          />
        </td>
        <td>
            {currMbsgr.brandName}
        </td>
        <td>
        {currMbsgr.rarity}
        </td>
        {/* <td>{currMbsgr.location}</td>
        <td>{currMbsgr.weather}</td> */}
        <td>
          {/* <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          /> */}
{currMbsgr.specialFeature}
        </td>

      </tr>
    );
  });
}

export default function MbsgrTable() {
  const [mbsgr, setMbsgr] = useState([]);

  useEffect(() => {
    fetch('https://surprise-5-api.vercel.app/api/minibrand/seriesno/gr')
      .then(response => response.json())
      .then(data => setMbsgr(data))
  }, []);

  return (
    <>
      <Table striped bordered responsive hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th width={1}>#</th>
            <th width={220}>Name</th>
            <th width={100}>Image</th>
            <th width={160}>Brand Name</th>
            <th width={1}>Rarity</th>
            <th width={100}>Special Features</th>
          </tr>
        </thead>
        <tbody>
          {buildRows(mbsgr)}
        </tbody>
      </Table>
    </>
  );
}
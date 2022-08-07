import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(mbs4) {
  return mbs4.map((currMbs4, index) => {
    return (
      <tr key={`${index+currMbs4.number+currMbs4.itemName}`}>
        <td>{currMbs4.itemNo}</td>
        <td className="text-center">
          <img
            width={50}
            height={50}
            className="mr-3"
            src={currMbs4.image}
            alt={`${currMbs4.itemName}+`}
          />
          <br />
          {currMbs4.brandName}
        </td>
        <td></td>
        <td></td>
        {/* <td>{currMbs4.location}</td>
        <td>{currMbs4.weather}</td> */}
        <td>
          <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          />
          {currMbs4.rarity}
        </td>
        <td>{currMbs4.specialFeatures}</td>
      </tr>
    );
  });
}

export default function Mbs4Table() {
  const [mbs4, setMbs4] = useState([]);

  useEffect(() => {
    fetch('/data/mbs4.json')
      .then(response => response.json())
      .then(data => setMbs4(data))
  }, []);

  return (
    <>
      <Table striped bordered responsive hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th width={1}>#</th>
            <th width={220}>Name</th>
            <th width={160}>Status</th>
            <th>Months</th>
            <th width={1}>Location</th>
            <th width={1}>Weather</th>
            <th width={100}>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {buildRows(mbs4)}
        </tbody>
      </Table>
    </>
  );
}
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(mbs3) {
  return mbs3.map((currMbs3, index) => {
    return (
      <tr key={`${index+currMbs3.number+currMbs3.itemName}`}>
        <td>{currMbs3.itemNo}</td>
        <td className="text-center">
          <img
            width={50}
            height={50}
            className="mr-3"
            src={currMbs3.image}
            alt={`${currMbs3.itemName}+`}
          />
          <br />
          {currMbs3.itemName}
        </td>
        <td>
            {currMbs3.brandName}
        </td>
        <td>
        {currMbs3.rarity}
        </td>
        {/* <td>{currMbs3.location}</td>
        <td>{currMbs3.weather}</td> */}
        <td>
          {/* <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          /> */}
{currMbs3.specialFeature}
        </td>

      </tr>
    );
  });
}

export default function Mbs3Table() {
  const [mbs3, setMbs3] = useState([]);

  useEffect(() => {
    fetch('/data/mbs3.json')
      .then(response => response.json())
      .then(data => setMbs3(data))
  }, []);

  return (
    <>
      <Table striped bordered responsive hover size="sm">
        <thead className="thead-dark">
          <tr>
            <th width={1}>#</th>
            <th width={220}>Name</th>
            <th width={160}>Brand Name</th>
            <th width={1}>Rarity</th>
            <th width={100}>Special Features</th>
          </tr>
        </thead>
        <tbody>
          {buildRows(mbs3)}
        </tbody>
      </Table>
    </>
  );
}
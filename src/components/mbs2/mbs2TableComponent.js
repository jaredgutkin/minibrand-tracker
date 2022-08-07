import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(mbs2) {
  return mbs2.map((currMbs2, index) => {
    return (
      <tr key={`${index+currMbs2.number+currMbs2.itemName}`}>
        <td>{currMbs2.itemNo}</td>
        <td className="text-center">
          {/* <img
            width={50}
            height={50}
            className="mr-3"
            src={currMbs2.image}
            alt={`${currMbs2.itemName}+`}
          /> */}
          <br />
          {currMbs2.itemName}
        </td>
        <td>
            {currMbs2.brandName}
        </td>
        <td>
        {currMbs2.rarity}
        </td>
        {/* <td>{currMbs2.location}</td>
        <td>{currMbs2.weather}</td> */}
        <td>
          {/* <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          /> */}
{currMbs2.specialFeature}
        </td>

      </tr>
    );
  });
}

export default function Mbs2Table() {
  const [mbs2, setMbs2] = useState([]);

  useEffect(() => {
    fetch('/data/mbs2.json')
      .then(response => response.json())
      .then(data => setMbs2(data))
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
          {buildRows(mbs2)}
        </tbody>
      </Table>
    </>
  );
}
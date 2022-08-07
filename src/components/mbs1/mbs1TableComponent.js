import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function buildRows(mbs1) {
  return mbs1.map((currMbs1, index) => {
    return (
      <tr key={`${index+currMbs1.number+currMbs1.itemName}`}>
        <td>{currMbs1.itemNo}</td>
        <td className="text-center">
          {/* <img
            width={50}
            height={50}
            className="mr-3"
            src={currMbs1.image}
            alt={`${currMbs1.itemName}+`}
          /> */}
          <br />
          {currMbs1.itemName}
        </td>
        <td>
            {currMbs1.brandName}
        </td>
        <td>
        {currMbs1.rarity}
        </td>
        {/* <td>{currMbs1.location}</td>
        <td>{currMbs1.weather}</td> */}
        <td>
          {/* <img
            width={25}
            height={25}
            className="mr-3"
            src={'/image/bell_bag.png'}
            alt="bell_bag"
          /> */}
{currMbs1.specialFeature}
        </td>

      </tr>
    );
  });
}

export default function Mbs1Table() {
  const [mbs1, setMbs1] = useState([]);

  useEffect(() => {
    fetch('/data/mbs1.json')
      .then(response => response.json())
      .then(data => setMbs1(data))
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
          {buildRows(mbs1)}
        </tbody>
      </Table>
    </>
  );
}
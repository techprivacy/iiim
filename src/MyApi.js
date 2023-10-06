import React, { useState } from "react";

export default function MyApi() {
  const [data, setData] = useState([]);

  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => setData(data));
  return (
    <table>
    {data.map((item) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td><img src={item.image} width={50}></img></td>
        <td>{item.price}</td>
      </tr>
    ))}
  </table>
  );
}

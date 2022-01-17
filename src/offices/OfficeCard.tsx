import React from "react";
type office = {
  city: string;
  address: string;
  type: string;
  telephone: string;
};
interface iProp {
  item: office;
}
export default function OfficeCard({ item }: iProp) {
  const { city, address, type, telephone } = item;
  return (
    <div className="office-card">
      <h3>{city}</h3>
      <h3>
        <small>{type}</small>
      </h3>
      <p>{address}</p>
      <p>{telephone}</p>
      <button className="button-link">Read more</button>
    </div>
  );
}

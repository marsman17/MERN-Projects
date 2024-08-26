import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <br />
      <hr />
      <div className="space-y-4 text-gray-800 font-normal">
        <p className="text-xl pt-6">
          {address?.firstname + " " + address?.lastName}
        </p>
        <p>
          {address?.state}, {address?.streetAddress}, {address?.zipCode}
        </p>
        <div className="space-y-1">{address?.mobile}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddressCard;

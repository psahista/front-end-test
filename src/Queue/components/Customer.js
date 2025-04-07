import React from "react";
import CustomerCard from "./CustomerCard";
import ProfilePicture from "./ProfilePicture";
import Name from "./Name";
import Content from "./Content";

export default function Customer({ customers }) {
  console.log("test", customers);
  return (
    <div style={{ display: "flex" }}>
      {customers.map(({ id, customer }) => (
        <CustomerCard>
          <ProfilePicture email={customer.emailAddress} />
          <Content>
            <Name name={customer.name}></Name>
            <div></div>
          </Content>
        </CustomerCard>
      ))}
    </div>
  );
}

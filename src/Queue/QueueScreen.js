import React, { useEffect, useState, useCallback } from "react";
import { fetchQueueData } from "../mockApi";
import Customer from "././components/Customer";

export default function QueueScreen() {
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    const intervalCall = setInterval(async () => {
      fetchQueueData()
        .then((response) => response.json())
        .then((json) => {
          setcustomers(json.queueData.queue.customersToday);
        });
    }, 3000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  const onSearch = useCallback(
    (name) => {
      if (name !== "") {
        setcustomers(
          customers.filter((item) =>
            item.customer.name.toUpperCase().includes(name.toUpperCase())
          )
        );
      } else {
        setcustomers(customers);
      }
    },
    [name]
  );
  return (
    <>
      <input
        placeholder="search..."
        onChange={(event) => onSearch(event.target.value)}
      />
      {customers?.map(({ id, customer }) => (
        <div key={id}>
          <div>{customer.name}</div>
        </div>
      ))}
      <Customer customers={customers} />
    </>
  );
}

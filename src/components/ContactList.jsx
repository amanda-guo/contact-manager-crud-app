import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts/")
      .then((data) => {
        setContacts(data?.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      {!error &&
        contacts.map((item, i) => {
          return (
            <div key={i}>
              <p>{item?.firstName}</p>
            </div>
          );
        })}
    </>
  );
}

export default ContactList;

import React from "react";
import ContactList from "./ContactList";
import PrimaryButton from "./PrimaryButton";
import AddContact from "./AddContact";

function Home() {
  return (
    <>
      <h1>Contacts</h1>
      <ContactList />
      <PrimaryButton text="Add Contact" />
      <AddContact />
    </>
  );
}

export default Home;

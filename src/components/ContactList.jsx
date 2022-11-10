import React, { useEffect, useState } from "react";
import Contact from './Contact';
import axios from "axios";

const ContactList = () => {

  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    await axios.get("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
      .then(res => {
        if (res.data) {
          setContacts(res.data);
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return <Contact contact={contact} />
        })}
      </ul>
    </div>
  )
}

export default ContactList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { USERS_URL } from "../constants/urls";
import Contact from './Contact';

const ContactList = () => {

  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [ids, setIds] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');

  const sortByLastName = (a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  }

  const fetchData = async () => {
    await axios.get(USERS_URL)
      .then(res => {
        if (res.data) {
          setContacts(res.data.sort((a, b) => sortByLastName(a, b)));
          setFiltered(res.data.sort((a, b) => sortByLastName(a, b)));
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('ids : ', ids);
  }, [ids]);

  useEffect(() => {
    const newContacts = contacts.filter(contact => contact.first_name.toLowerCase().includes(nameToSearch.toLowerCase())
                          || contact.last_name.toLowerCase().includes(nameToSearch.toLowerCase()))
    setFiltered(newContacts);
  }, [nameToSearch])

  return (
    <div>
      Search : <input type='text' value={nameToSearch} onChange={(event) => setNameToSearch(event.target.value)} />
      <ul>
        {filtered.map((contact) => {
          return <Contact key={contact.id} ids={ids} setIds={setIds} contact={contact} />
        })}
      </ul>
    </div>
  )
}

export default ContactList;

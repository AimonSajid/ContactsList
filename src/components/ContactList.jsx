import React, { useEffect, useState } from "react";
import axios from "axios";
import { USERS_URL } from "../constants/urls";
import Contact from './Contact';
import { Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";

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
      <Container>
        <Form.Group className="m-3">
          <Form.Control
            type="text"
            value={nameToSearch}
            placeholder="Search here..."
            onChange={(event) => setNameToSearch(event.target.value)}
          />
        </Form.Group>
        <ListGroup>
          {filtered.map((contact) => {
            return (
              <ListGroupItem key={contact.id}>
                <Contact ids={ids} setIds={setIds} contact={contact} />
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Container>
    </div>
  )
}

export default ContactList;

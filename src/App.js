import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { ContactList } from './components';
import CardHeader from "react-bootstrap/esm/CardHeader";

function App() {
  return (
    <Container>
      <Card>
        <CardHeader align='center'><h2> Contacts List </h2></CardHeader>
        <ContactList />
      </Card>
    </Container>
  );
}

export default App;

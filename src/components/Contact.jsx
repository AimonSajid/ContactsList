import React, { useEffect, useState } from "react";
import { Col, Row, Form, Image } from 'react-bootstrap';

const Contact = ({ contact, ids, setIds }) => {

  const [checked, setChecked] = useState(false);

  const addToIds = (id) => {
    let idsArr = [...ids];
    idsArr.push(id);
    setIds(idsArr);
  }

  const removeFromIds = (id) => {
    let idsArr = [...ids];
    const index = idsArr.indexOf(id);
    idsArr.splice(index, 1);
    setIds(idsArr);
  }

  const onToggleCheckbox = (event, id) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      addToIds(id);
    } else {
      removeFromIds(id);
    }
  }

  useEffect(() => {
    ids.some((id) => id == contact.id) && setChecked(true);
  })

  return (
    <div>
      <Row>
        <Col md={2}>
          <Image
            roundedCircle
            height={50}
            width={50}
            src={contact.avatar ? contact.avatar : `${process.env.PUBLIC_URL}/avatar.png`}
          />
        </Col>
        <Col md={8}>
          <div align="start">
            {contact.first_name} {contact.last_name}
          </div>
        </Col>
        <Col md={2}>
          <Form.Check
            type="checkbox"
            checked={checked}
            onChange={(event) => onToggleCheckbox(event, contact.id)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Contact;

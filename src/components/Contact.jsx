import React, { useEffect, useState } from "react";

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
    <li>
      <div>
        <img src={contact.avatar} />
        {contact.first_name} {contact.last_name}
        <input type="checkbox" checked={checked} onChange={(event) => onToggleCheckbox(event, contact.id)}/>
      </div>
    </li>
  )
}

export default Contact;

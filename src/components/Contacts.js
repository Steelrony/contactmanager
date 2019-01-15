import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "karen@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "222-222-2222"
      }
    ]
  };

  render() {
    const { contacts } = this.state; //Destructuring
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

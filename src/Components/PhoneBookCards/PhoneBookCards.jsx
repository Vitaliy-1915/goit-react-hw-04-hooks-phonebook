import React, { Component } from "react";
import PhoneBookCardsTitles from "../PhoneBookCardsTitles/PhoneBookCardsTitles";
import Forms from "../Forms/Forms";
import Filter from "../Filter/Filter";
import ContactLists from "../ContactLists/ContactLists";
import { PhoneBookCard } from "./PhoneBookCards.styles";
import { v4 as unId } from "uuid";

export default class PhoneBookCards extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmit = (e) => {
    const { contacts } = this.state;
    const contact = {
      id: unId(),
      name: e.name,
      number: e.number,
    };
    // this.setState((prevState) => ({
    //   contacts: [...prevState.contacts, contacts],
    // }));

    contacts.find((cont) =>
      cont.name.toLowerCase().includes(contact.name.toLowerCase())
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  onDeleteContact = (contactId) => {
    console.log(contactId);
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizeContacts = filter.toLocaleLowerCase();

    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeContacts)
    );

    return (
      <PhoneBookCard>
        <PhoneBookCardsTitles title="Phonebook" />
        <Forms onSubmit={this.formSubmit} />

        <PhoneBookCardsTitles title="Contacts" />

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactLists
          contacts={filterContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </PhoneBookCard>
    );
  }
}

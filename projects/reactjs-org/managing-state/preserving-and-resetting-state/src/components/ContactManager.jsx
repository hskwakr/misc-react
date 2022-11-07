import { useState } from "react";
import ContactList from "./ContactManager.ContactList";
import EditContact from "./EditContact";

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function updateContacts(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }
  function handleSave(updatedData) {
    updateContacts(updatedData);
  }
  function handleReset(id) {
    const updatedData = initialContacts.find((c) => c.id === id);
    if (updatedData !== undefined) {
      updateContacts(updatedData);
    }
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedContact.id}
        initialData={selectedContact}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

import React from "react";
import { useSelector } from "react-redux";
import s from "./ContactList.module.scss";
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/contactsSlice";
import { getFilter } from "../../redux/contacts-selector";

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { data, error } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();

  const getFilteredContacts = (contacts) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = data ? getFilteredContacts(data) : [];

  return (
    <>
      {error || (filteredContacts && filteredContacts.length === 0) ? (
        <div>You have no contacts!</div>
      ) : (
        <ul className={s.list}>
          {data &&
            filteredContacts.map(({ id, name, phone }) => (
              <li className={s.item} key={id}>
                <span>{name}: </span>
                <span>{phone}</span>
                <button className={s.btn} onClick={() => deleteContact(id)}>
                  delete
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

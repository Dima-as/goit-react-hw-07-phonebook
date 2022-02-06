import { createSelector } from "@reduxjs/toolkit";
export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  }
);

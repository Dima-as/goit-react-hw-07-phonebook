export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normFilter));
};

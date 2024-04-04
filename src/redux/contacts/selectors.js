import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selecError = (state) => state.contacts.error;

export const selectFilteredByNameContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilteredByNumberContacts = createSelector(
  [selectContacts, selectNumberFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

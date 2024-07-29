import { configureStore } from "@reduxjs/toolkit";

import filtersSlice from "./filters/filtersSlice";

import contactsReducer from "./contacts/contactsSlice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice,
    auth: authSlice,
  },
});

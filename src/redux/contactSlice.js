import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6277a2db2f94a1d706108e50.mockapi.io/api/v1/' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact']
    }),
    createContact: builder.mutation({
      query: contactContent => ({
        url: '/contacts',
        method: 'POST',
        body: contactContent
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});


export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactApi;








// import { createSlice } from '@reduxjs/toolkit';
// import data from '../contacts/contacts.json';


// export const contactSlice = createSlice({
//   name: 'items',
//   initialState:  data,
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     onDeleteContact: (state, action) => {
//       const filteredContacts = state.filter(
//         contact => contact.id !== action.payload
//       );
//       return filteredContacts;
//     },
//   },
// });

// export const { addContact, onDeleteContact } = contactSlice.actions;

// export default contactSlice.reducer;
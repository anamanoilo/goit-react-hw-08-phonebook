import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const phonebookApi = createApi({
  reducerPath: 'contacts',

  // baseUrl: 'https://626febe1f7d739495bdeffa6.mockapi.io',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user', 'contacts'],
  endpoints: builder => ({
    // registerUser: builder.mutation({
    //   query: data => ({
    //     url: '/users/signup',
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: ['user', 'contacts'],
    // }),
    // loginUser: builder.mutation({
    //   query: data => ({
    //     url: '/users/login',
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: ['user', 'contacts'],
    // }),
    // logoutUser: builder.mutation({
    //   query: () => ({
    //     url: `/users/logout`,
    //     method: 'POST',
    //   }),
    //   invalidatesTags: ['user', 'contacts'],
    // }),
    // refreshUser: builder.query({
    //   query: () => ({
    //     url: `/users/current`,
    //   }),
    //   providesTags: ['user'],
    // }),
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;

export default phonebookApi;

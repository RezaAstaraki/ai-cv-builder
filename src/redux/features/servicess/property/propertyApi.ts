import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const propertyApi = createApi({
  reducerPath: 'property',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getPropertiesList: builder.query({
      query: () => `properties/`,
    }),
  }),
})


export const { useGetPropertiesListQuery } = propertyApi
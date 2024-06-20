import { api } from "./api"

export const tableApi = api.injectEndpoints({
  endpoints: builder => ({
    table: builder.query<
      {
        data: {
          metering_devices: {
            data: [{ id: number; name: string; last_active: any }]
          }
        }
      },
      {
        page: number
        last_page: number
        sort_field: string
        sort: string
        search_string: null
        device_state: string
        is_archived: boolean
        paginate: boolean
        append_fields: string[]
        per_page: number
      }
    >({
      query: tableData => ({
        url: "/device/metering_devices",
        method: "POST",
        body: tableData,
      }),
    }),
  }),
})

export const { useLazyTableQuery, useTableQuery } = tableApi

export const {
  endpoints: { table },
} = tableApi

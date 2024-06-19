import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { Login } from "./app/components/login"
import { Table } from "./app/components/table"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: "/table",
      element: <Table />,
    },
    {
      path: "/",
      element:  <Login />
    },
  ])

  root.render(
    <React.StrictMode>
      <Provider store={store}>
       <RouterProvider router ={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

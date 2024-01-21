import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction } from './routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page.jsx'
import Contact, { loader as contactLoader } from './routes/contact.jsx'
import EditContact, { loader as editContactLoader } from './routes/edit.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact></Contact>,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact></EditContact>,
        loader: editContactLoader,
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

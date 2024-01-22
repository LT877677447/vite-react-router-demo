import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction } from './routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page.jsx'
import Contact, { loader as contactLoader } from './routes/contact.jsx'
import EditContact, { loader as editContactLoader, action as editAction } from './routes/edit.jsx'
import { action as deleteAction } from './routes/destory.jsx'
import Index from './routes/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index: true, element: <Index></Index>},
      {
        path: 'contacts/:contactId',
        element: <Contact></Contact>,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact></EditContact>,
        loader: editContactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: deleteAction,
        errorElement: <div>error!</div>,
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

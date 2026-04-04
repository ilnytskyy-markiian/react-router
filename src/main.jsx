import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import Contact, {
  loader as contactLoader,
  action as destroyAction,
} from "./routes/contacts.jsx";
import EditContact, {
  action as editAction
} from "./routes/edit.jsx";
import Index from "./routes/index.jsx";
import ErrorPage from "./error-page.jsx";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/", // Route
    element: <Root />, // Root page
    errorElement: <ErrorPage />, // Error message page

    loader: rootLoader, // Needed for fetching data
    action: rootAction, // Needing for sending request (to update, create, delete etc)
    children: [ // Nested routes rendered via <Outlet />
      {
        index: true,
        element: <Index />
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        loader: rootLoader,
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
import { createContext, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from "./pages/home/Home";
import FullInfo from "./pages/full-info/FullInfo";
import ErrorPage from "./pages/error-page/ErrorPage";
import CountryService from './components/country-item/CountryItem.service'

export const CountryContext = createContext({})

function App() {
  const [value, setValue] = useState(null)
  const countryValue = {
    value, setValue
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'country/:name',
      element: <FullInfo />,
      loader: async ({ params }) => {
        const data = await CountryService.getByName(params.name)
        if (data.status === 404) {
          throw new Error("Could not fetch country");
        }
        return data.json()
      },
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <>
      <CountryContext.Provider value={countryValue}>
        <RouterProvider router={router} />
      </CountryContext.Provider>
    </>
  )
}

export default App

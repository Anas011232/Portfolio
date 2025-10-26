import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home.jsx';
import ServiceSummary from './Components/ServiceSummary/ServiceSummary.jsx';
import EmployeeSummary from './Components/EmployeeSummary/EmployeeSummary.jsx';
import RoommateSummary from './RoommateSummary/RoommateSummary.jsx';
import BillManagementSummary from './BillManagementSummary/BillManagementSummary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path:"/projects/service-sharing",
    Component: ServiceSummary
  },
  {
    path:"/projects/employee-management",
    Component: EmployeeSummary
  },
  {
    path:"/projects/roommate-finder",
    Component:RoommateSummary
  },
  {
    path:"/projects/bill-management",
    Component: BillManagementSummary
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

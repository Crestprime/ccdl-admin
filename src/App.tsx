// import { createRouter, RouterProvider } from '@tanstack/react-router'
// import { routeTree } from './routeTree.gen';
// import { Component, ReactNode } from 'react';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

// export const Router = createRouter({ routeTree });
// const queryClient = new QueryClient();

// class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
//   constructor(props: { children: ReactNode }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     // You can log the error to an error reporting service here
//     console.error('Error:', error);
//     console.error('Error Info:', errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="error-boundary">
//           <h1>Something went wrong.</h1>
//           <button onClick={() => window.location.reload()}>Refresh Page</button>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// function App() {
//   return (
//     <ErrorBoundary>
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={Router} />
//       </QueryClientProvider>
//     </ErrorBoundary>
//   );
// }

// export default App

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { LoginPage, VerificationPage } from "./components/authComponents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout } from "./components/sidebarComponents";
import { ClientDetailsPage, ClientPage, HomePage, InvestmentPage, ListingDetailsPage, ListingPage, RealtorDetailsPage, RealtorPage, SaleAndReservation, SaleDetails } from "./components/dashboardPage";
import TransactionTab from "./components/walletComponents/TransactionTab";

function App() {
  const router = createBrowserRouter(


    // navMain: [
    //   {
    //     title: "Home",
    //     url: "/dashboard",
    //     icon: RiHome4Fill,
    //     isActive: false,
    //     items: []
    //   },
    //   {
    //     title: "Property",
    //     url: "property",
    //     icon: RiBuilding2Fill,
    //     items: [
    //       {
    //         title: "Listings",
    //         url: "/dashboard/property/listings?type=BUILDING",
    //       },
    //       {
    //         title: "Investments",
    //         url: "/dashboard/property/investments",
    //       },
    //       {
    //         title: "Sales & Reservations",
    //         url: "/dashboard/property/sales",
    //       }
    //     ],
    //   },
    //   {
    //     title: "Users",
    //     url: "users",
    //     icon: RiAccountCircleFill,
    //     items: [
    //       {
    //         title: "Clients",
    //         url: "/dashboard/users/clients",
    //       },
    //       {
    //         title: "Realtors",
    //         url: "/dashboard/users/realtor",
    //       },
    //       {
    //         title: "Staff",
    //         url: "#",
    //       }
    //     ],
    //   }, 
    //   {
    //     title: "Construction",
    //     url: "construction",
    //     icon: RiFolderOpenFill,
    //     items: [
    //       {
    //         title: "Proposals",
    //         url: "/dashboard/constructions/proposals",
    //       },
    //       {
    //         title: "Projects",
    //         url: "/dashboard/constructions/projects",
    //       }
    //     ],
    //   },
    //   {
    //     title: "Wallet",
    //     url: "/dashboard/wallet/alltransaction",
    //     icon: RiWalletFill, 
    //   }
    // ],

    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />
        <Route path="/auth/verify" element={<VerificationPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<HomePage />} />
          <Route path="property" >
            <Route path="listings">
              <Route index element={<ListingPage />} />
              <Route path="details" element={<ListingDetailsPage />} />
            </Route>
            <Route path="investments" element={<InvestmentPage />} />
            <Route path="sales" >
              <Route index element={<SaleAndReservation />} />
              <Route path="details" element={<SaleDetails />} />
            </Route>
          </Route>
          <Route path="users" >
            <Route path="clients"  >
              <Route index element={<ClientPage />} />
              <Route path="details" element={<ClientDetailsPage />} />
            </Route>
            <Route path="realtor"  >
              <Route index element={<RealtorPage />} />
              <Route path="details" element={<RealtorDetailsPage />} />
            </Route>
          </Route>
          <Route path="wallet" >
            <Route path="alltransaction" element={<TransactionTab />} />
          </Route>
        </Route>
      </Route>
    )
  );
  const queryClient = new QueryClient();
  return (
    <div className=" w-full " style={{ fontFamily: "OpenRunde-Regular" }} >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
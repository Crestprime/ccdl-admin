
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { LoginPage, VerificationPage } from "./components/authComponents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout } from "./components/sidebarComponents";
import { ClientDetailsPage, ClientPage, HomePage, InvestmentDetailPage, InvestmentPage, ListingDetailsPage, ListingPage, ProposalCreateTaskPage, ProposalDetailsPage, ProposalListingDetailPage, ProposalPage, RealtorDetailsPage, RealtorPage, SaleAndReservation, SaleDetails } from "./components/dashboardPage";
import TransactionTab from "./components/walletComponents/TransactionTab";

function App() {
  const router = createBrowserRouter(

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

            <Route path="investments">
              <Route index element={<InvestmentPage />} />
              <Route path="details" element={<InvestmentDetailPage />} />
            </Route>
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
          <Route path="constructions" >
            <Route path="proposals" >
              <Route index element={<ProposalPage />} />
              <Route path="details" element={<ProposalDetailsPage />} />
              <Route path="listingdetails" element={<ProposalListingDetailPage />} />
              <Route path="create" element={<ProposalCreateTaskPage />} />  
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
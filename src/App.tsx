import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen';
import { Component, ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const Router = createRouter({ routeTree });
const queryClient = new QueryClient();

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
// import { InvitePage, LoginPage, VerificationPage } from "./components/authComponents";
 


// function App() {
//   const router = createBrowserRouter(
    
//     createRoutesFromElements(
//       <Route path="/">
        
//         <Route index element={<LoginPage />} />  
//         <Route path="/auth/verify" element={<VerificationPage />} /> 
//         <Route path="auth/invite" element={<InvitePage />} /> 
//       </Route>
//     )
//   );
//   return (
//     <div className=" w-full "  style={{ fontFamily: "Axiforma-Medium" }} >
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App
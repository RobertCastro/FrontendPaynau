import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home";
import CreatePerson from "@/pages/people/CreatePerson";
import PersonDetail from "@/pages/people/PersonDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/create" element={<CreatePerson />} />
            <Route path="/people/:id" element={<PersonDetail />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
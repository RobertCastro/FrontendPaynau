import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";
import Hero from "../components/sections/Hero";
import PeopleGrid from "../components/sections/PeopleGrid";

export default function Home() {
  const { data: people = [], isLoading, error } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const { data } = await api.get("/api/v1/people/");
      return data;
    },
  });

  if (error) {
    console.error('Error fetching people:', error);
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {error ? (
        <div className="container mx-auto px-4 py-12 text-center text-red-600">
          Error loading data. Please try again later 🙁
        </div>
      ) : isLoading ? (
        <div className="container mx-auto px-4 py-12 text-center">
          Loading...
        </div>
      ) : (
        <PeopleGrid people={people} />
      )}
    </div>
  );
}
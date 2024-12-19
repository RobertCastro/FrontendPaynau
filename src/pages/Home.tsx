import { useQuery } from "@tanstack/react-query";
import Hero from "../components/sections/Hero";
import PeopleGrid from "../components/sections/PeopleGrid";
import { getAllPeople, deletePerson } from "../api/peopleApi";

export default function Home() {
  const {
    data: people = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["people"],
    queryFn: getAllPeople,
  });

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this person?")) {
      try {
        await deletePerson(id);
        refetch();
      } catch (error) {
        console.error("Error deleting person:", error);
        alert("Failed to delete the person. Please try again.");
      }
    }
  };

  if (error) {
    console.error("Error fetching people:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      {error ? (
        <div className="container mx-auto px-4 py-12 text-center text-red-600">
          Error loading data. Please try again later ☹️
        </div>
      ) : isLoading ? (
        <div className="container mx-auto px-4 py-12 text-center">
          Loading...
        </div>
      ) : (
        <PeopleGrid people={people} onDelete={handleDelete} />
      )}
    </div>
  );
}

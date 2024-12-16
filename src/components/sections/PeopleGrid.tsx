import { Link } from "react-router-dom";
import { Person } from "@/types/people";

interface PeopleGridProps {
  people: Person[];
  onDelete: (id: number) => void;
}

export default function PeopleGrid({ people, onDelete }: PeopleGridProps) {
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this person?")) {
      onDelete(id);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person: Person) => (
            <div key={person.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">
                  {person.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{person.email}</p>
              <div className="flex justify-between items-center">
              <button
                onClick={() => handleDelete(person.id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Delete
              </button>
              <Link
                to={`/people/${person.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Details →
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

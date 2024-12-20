import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Person } from '@/types/people';
import { getPersonById } from '@/api/peopleApi';

const formatDateTime = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleString();
}

const formatTimestampToDate = (timestamp: string | undefined): string => {
  if (!timestamp) return 'N/A';
  return new Date(Number(timestamp) * 1000).toLocaleDateString();
}

export default function PersonDetail() {
  const { id } = useParams();
  
  const { data: person, isLoading, error } = useQuery<Person>({
    queryKey: ['person', id],
    queryFn: () => getPersonById(id!),
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          Error loading person details.
          <Link to="/" className="text-blue-600 hover:text-blue-800 ml-2">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to List
          </Link>
        </div>

        <div className="mb-8">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl text-gray-400">
              {person?.name?.charAt(0)}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{person?.name}</h1>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Email</h2>
            <p className="mt-1">{person?.email}</p>
          </div>

          {person?.phone_number && (
            <div>
              <h2 className="text-sm font-medium text-gray-500">Phone Number</h2>
              <p className="mt-1">{person.phone_number}</p>
            </div>
          )}

          {person?.birth_date && (
            <div>
              <h2 className="text-sm font-medium text-gray-500">Birth Date</h2>
              <p className="mt-1">{formatTimestampToDate(person.birth_date)}</p>
            </div>
          )}

          <div>
            <h2 className="text-sm font-medium text-gray-500">Created At</h2>
            <p className="mt-1">{formatDateTime(person?.created_at)}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500">Updated At</h2>
            <p className="mt-1">{formatDateTime(person?.updated_at)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
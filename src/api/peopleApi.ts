import httpClient from '@/lib/httpClient';
import { CreatePersonInput, Person } from '@/types/people';

export async function getAllPeople(): Promise<Person[]> {
  const { data } = await httpClient.get("/api/v1/people/");
  return data;
}

export async function getPersonById(id: string | number): Promise<Person> {
  const { data } = await httpClient.get(`/api/v1/people/${id}`);
  return data;
};

export async function createPerson(data: CreatePersonInput): Promise<Person> {
  const response = await httpClient.post('/api/v1/people/', data, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }
  });
  return response.data;
}

export async function deletePerson(id: number) {
  await httpClient.delete(`/api/v1/people/${id}`);
}
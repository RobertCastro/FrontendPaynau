import api from '@/lib/api';

export const deletePerson = async (id: number) => {
  await api.delete(`/api/v1/people/${id}`);
};

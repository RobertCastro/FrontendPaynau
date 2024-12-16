export interface Person {
    id: number;
    name: string;
    email: string;
    phone_number?: string;
    birth_date?: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface CreatePersonInput {
    name: string;
    email: string;
    phone_number?: string;
    birth_date?: string;
  }
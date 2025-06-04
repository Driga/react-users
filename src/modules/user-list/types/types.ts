export interface User {
    id: number;
    username: string;
    firstName: string;
    university: string;
    lastName: string;
    email: string;
    image: string;
    phone: string;
    website: string;
    company?: {
        name: string;
    };
    address?: {
        street: string;
        address: string;
        city: string;
        zipcode: string;
    };
}

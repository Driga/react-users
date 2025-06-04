/**
 * api/users.ts
 *
 * This file defines functions to interact with a placeholder users API.
 * It uses axios for HTTP requests and provides typed responses.
 *
 * Available functions:
 * - fetchUsers: fetches a list of all users
 * - fetchUserById: fetches a single user by ID
 */

import axios from 'axios';
import { User } from "@/modules/user-list/types";

const USERS_API = 'https://dummyjson.com';

/**
 * Fetch all users from the API.
 *
 * @returns Promise resolving to an array of User objects.
 */
export async function fetchUsers(): Promise<User[]> {
    const response = await axios.get<{users: User[]}>(`${USERS_API}/users`);
    return response.data.users;
}

/**
 * Fetch a single user by ID from the API.
 *
 * @param userId - The ID of the user to fetch
 * @returns Promise resolving to a single User object.
 */
export async function fetchUserById(userId: number): Promise<User> {
    const response = await axios.get<User>(`${USERS_API}/users/${userId}`);
    return response.data;
}
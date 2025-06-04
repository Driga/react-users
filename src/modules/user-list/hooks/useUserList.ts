import { useEffect, useState } from 'react';
import { User } from "@/modules/user-list/types";
import { fetchUsers } from "@/modules/user-list/services";

/**
 * Custom hook to fetch and manage a list of users.
 *
 * Fetches users on component mount and tracks loading and error states.
 *
 * @returns Object containing the user list, loading status, and any error message.
 */
export function useUserList() {
    // Stores the list of users
    const [users, setUsers] = useState<User[]>([]);

    // Indicates whether the fetch is currently in progress
    const [loading, setLoading] = useState(false);

    // Holds any error message that occurred during fetching
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        setError('');

        fetchUsers()
            .then(setUsers)
            .catch(() => setError('Failed to fetch users'))
            .finally(() => setLoading(false));
    }, []); // Run only once on component mount

    return { users, loading, error };
}

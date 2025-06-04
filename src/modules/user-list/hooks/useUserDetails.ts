import { useEffect, useState } from 'react';
import { fetchUserById } from '../services/userService';
import { User } from "@/modules/user-list/types/types";

/**
 * Custom hook to fetch and manage the state of a user's details by ID.
 *
 * @param userId - ID of the user to fetch
 * @returns Object containing the fetched user data, loading state, and error message
 */
export function useUserDetails(userId: number) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // Prevent setting state if the component is unmounted before fetch completes
        let isMounted = true;

        setLoading(true);
        setError('');

        // Fetch user details by ID
        fetchUserById(userId)
            .then((data) => {
                if (isMounted) setUser(data); // Only update state if still mounted
            })
            .catch(() => {
                if (isMounted) setError('Failed to load user details');
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        // Cleanup function to avoid memory leaks
        return () => {
            isMounted = false;
        };
    }, [userId]); // Re-run when the userId changes

    return { user, loading, error };
}

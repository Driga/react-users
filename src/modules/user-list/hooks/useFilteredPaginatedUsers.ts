import { useMemo } from 'react';
import useDebouncedValue from "@/shared/hooks/useDebouncedValue";
import { SortDirection, User } from "@/modules/user-list/types";

/**
 * Custom React hook for filtering, sorting, and paginating a list of users.
 *
 * @param users - The full list of users
 * @param search - The raw search input string
 * @param sortBy - The field to sort by (currently only 'name' is supported)
 * @param sortDirection - Sort direction: 'asc' or 'desc'
 * @param page - The current page number
 * @param perPage - Number of users per page
 *
 * @returns An object with `filtered` (all matching results) and `paginated` (current page slice)
 */
export function useFilteredPaginatedUsers(
    users: User[],
    search: string,
    sortBy: 'name' | null,
    sortDirection: SortDirection.Asc | SortDirection.Desc,
    page: number,
    perPage: number
) {
    // Apply a debounce to the search term to prevent filtering on every keystroke
    const debouncedSearch = useDebouncedValue(search, 300);

    // Memoized filtering and sorting logic
    const filtered = useMemo(() => {
        // Filter users by debounced search term
        let result = users.filter(user =>
            user.firstName.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

        // Optionally sort by name
        if (sortBy === 'name') {
            result = result.sort((a, b) =>
                sortDirection === SortDirection.Asc
                    ? a.firstName.localeCompare(b.firstName)
                    : b.firstName.localeCompare(a.firstName)
            );
        }

        return result;
    }, [users, debouncedSearch, sortBy, sortDirection]);

    // Memoized pagination logic
    const paginated = useMemo(() => {
        const start = (page - 1) * perPage;
        return filtered.slice(start, start + perPage); // Return only the items for the current page
    }, [filtered, page, perPage]);

    return { filtered, paginated };
}

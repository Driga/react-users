import { useFilteredPaginatedUsers } from './useFilteredPaginatedUsers';
import { SortDirection, User } from '@/modules/user-list/types';
import { renderHook } from "@testing-library/react";

// Mock debounce hook to return input immediately (без задержек)
jest.mock('@/shared/hooks/useDebouncedValue', () => ({
    __esModule: true,
    default: (value: string) => value,
}));

const mockUsers: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Alice', email: '', phone: '', website: '', username: ''} ,
    { id: 2, firstName: 'Bob', lastName: 'Bob', email: '', phone: '', website: '', username: '' },
    { id: 3, firstName: 'Charlie', lastName: 'Charlie', email: '', phone: '', website: '', username: '' },
];

describe('useFilteredPaginatedUsers', () => {
    it('filters users by name (case-insensitive)', () => {
        const { result } = renderHook(() =>
            useFilteredPaginatedUsers(mockUsers, 'al', 'name', SortDirection.Asc, 1, 10)
        );

        expect(result.current.filtered).toHaveLength(1);
        expect(result.current.filtered[0].firstName).toBe('Alice');
    });

    it('sorts users in descending order', () => {
        const { result } = renderHook(() =>
            useFilteredPaginatedUsers(mockUsers, '', 'name', SortDirection.Desc, 1, 10)
        );

        const names = result.current.filtered.map(u => u.firstName);
        expect(names).toEqual(['Charlie', 'Bob', 'Alice']);
    });

    it('paginates users', () => {
        const { result } = renderHook(() =>
            useFilteredPaginatedUsers(mockUsers, '', 'name', SortDirection.Asc, 2, 2)
        );

        const names = result.current.paginated.map(u => u.firstName);
        expect(names).toEqual(['Charlie']);
    });
});

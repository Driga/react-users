'use client';

import { useCallback, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { User } from '../types/types';
import { SortDirection } from "@/modules/user-list/types/enum";
import { useFilteredPaginatedUsers, useUserList } from "@/modules/user-list/hooks";
import { ModalProvider, useModal } from "@/shared/providers";
import { DynamicModal } from "@/shared/components/DynamicModal";
import { TableView, UserSearch } from "@/modules/user-list/components";
import { FullScreenLoader } from "@/shared/components/FullScreenLoader";
import { Pagination } from "@/shared/components/Papgination";
import UserDetails from "../components/UserDetails/UserDetails";


export default function UserDirectory() {
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [page, setPage] = useState(1);
    const {users, loading, error} = useUserList();
    const [sortBy] = useState<'name' | null>('name');
    const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Asc);
    const {showModal, hideModal} = useModal();

    const usersPerPage = 10;

    const {filtered: filteredUsers, paginated: paginatedUsers} = useFilteredPaginatedUsers(
        users,
        search,
        sortBy,
        sortDirection,
        page,
        usersPerPage
    );

    const handleSort = () => {
        setSortDirection(prev => (prev === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc));
    };

    const handleUserClick = (user: User) => {
        showModal(
            <DynamicModal title={user.firstName} onClose={hideModal}>
                <UserDetails userId={user.id}/>
            </DynamicModal>
        );
    };


    // preventing UserSearch from redundant rerender.
    const handleSearchChange = useCallback((val: string) => {
        setSearch(val);
        setHasSearched(true);
        setPage(1);
    }, []);

    return (
        <ModalProvider>
            <Container className="pt-4">
                <h1 className="text-center mb-4">User List</h1>
                <UserSearch
                    value={search}
                    onChange={handleSearchChange}
                />

                {error && <Alert variant="danger">{error}</Alert>}
                {filteredUsers.length === 0 && hasSearched && !loading && (
                    <div className="text-center text-muted mb-4" role="status">
                        No users found matching your search.
                    </div>
                )}

                <div style={{position: 'relative', minHeight: 200}}>
                    {loading && <FullScreenLoader/>}
                    {filteredUsers.length > 0 && (
                        <TableView
                            users={paginatedUsers}
                            onUserClick={handleUserClick}
                            sortDirection={sortDirection}
                            onSortClick={handleSort}
                        />
                    )}
                </div>

                <Pagination
                    total={filteredUsers.length}
                    perPage={usersPerPage}
                    current={page}
                    onPageChange={setPage}
                />
            </Container>
        </ModalProvider>
    );
}

import { User } from '../types/types';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { SortDirection } from "@/modules/user-list/types";

interface Props {
    users: User[];
    onUserClick: (user: User) => void;
    sortDirection: 'asc' | 'desc';
    onSortClick: () => void;
}

export default function TableView({ users, onUserClick, sortDirection, onSortClick }: Props) {
    // Render the sorting icon based on current direction
    const renderSortIcon = () => (
        <span className="ms-1" aria-hidden="true">
            {sortDirection === 'asc' ? <CaretUpFill /> : <CaretDownFill />}
        </span>
    );

    return (
        <div className="table-responsive  w-500">
            <table className="table table-hover align-middle" role="table" aria-label="User list table">
                <thead className="table-light">
                <tr>
                    <th
                        scope="col"
                        style={{ cursor: 'pointer' }}
                        onClick={onSortClick}
                        aria-sort={sortDirection === SortDirection.Asc ? 'ascending' : 'descending'}
                    >
                        Name {renderSortIcon()}
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">University</th>
                    <th scope="col" >Company</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr
                        key={user.id}
                        role="button"
                        tabIndex={0}
                        className="table-row-hover"
                        onClick={() => onUserClick(user)}
                        aria-label={`Open details for ${user.firstName}`}
                    >
                        <td>{user.firstName}</td>
                        <td className="d-none d-md-table-cell">{user.university}</td>
                        <td>{user.company?.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

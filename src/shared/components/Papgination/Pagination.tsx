import React from "react";

interface Props {
    total: number;
    perPage: number;
    current: number;
    onPageChange: (page: number) => void;
}

function Pagination({ total, perPage, current, onPageChange }: Props) {
    const pages = Math.ceil(total / perPage);

    const pageItems = React.useMemo(() => {
        if (pages <= 1) return null;

        return Array.from({ length: pages }, (_, i) => {
            const pageNumber = i + 1;
            const isActive = pageNumber === current;
            const handleClick = () => onPageChange(pageNumber);

            return (
                <li key={i} className={`page-item ${isActive ? 'active' : ''}`}>
                    <button
                        className="page-link"
                        onClick={handleClick}
                        aria-label={`Go to page ${pageNumber}`}
                    >
                        {pageNumber}
                    </button>
                </li>
            );
        });
    }, [pages, current, onPageChange]);

    if (!pageItems) return null;

    return (
        <nav className="mt-3" aria-label="User pagination">
            <ul className="pagination justify-content-center">{pageItems}</ul>
        </nav>
    );
}

export default React.memo(Pagination);

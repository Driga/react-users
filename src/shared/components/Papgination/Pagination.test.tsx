import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from "@/shared/components/Papgination";

describe('Pagination', () => {
    it('highlights the active page', () => {
        render(<Pagination total={30} perPage={10} current={2} onPageChange={jest.fn()}/>);
        const activePage = screen.getByText('2').closest('li');
        expect(activePage).toHaveClass('active');
    });

    it('calls onPageChange with correct page when clicked', () => {
        const onPageChange = jest.fn();
        render(<Pagination total={30} perPage={10} current={1} onPageChange={onPageChange} />);
        const page3Button = screen.getByLabelText('Go to page 3');
        fireEvent.click(page3Button);
        expect(onPageChange).toHaveBeenCalledWith(3);
    });
});
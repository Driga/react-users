import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DynamicModal from "./DynamicModal";

describe('GenericModal', () => {
    const mockOnClose = jest.fn();

    beforeEach(() => {
        mockOnClose.mockClear();
    });

    it('renders the modal with title and children', () => {
        render(
            <DynamicModal title="Test Title" onClose={mockOnClose}>
                <div data-testid="modal-content">Test Content</div>
            </DynamicModal>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByTestId('modal-content')).toHaveTextContent('Test Content');
    });

    it('calls onClose when close button is clicked', async () => {
        render(
            <DynamicModal title="Close Test" onClose={mockOnClose}>
                Content
            </DynamicModal>
        );

        // Find the close button (has aria-label="Close")
        const closeButton = screen.getByRole('button', { name: /close/i });
        await userEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});

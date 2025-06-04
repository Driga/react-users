import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {ModalProvider, useModal} from "@/shared/providers/ModalProvider";

// Test component that uses the modal context
const TestComponent = () => {
    const { showModal, hideModal } = useModal();

    return (
        <>
            <button onClick={() => showModal(<div data-testid="modal-content">Hello Modal</div>)}>
                Open Modal
            </button>
            <button onClick={hideModal}>Close Modal</button>
        </>
    );
};

describe('ModalProvider', () => {
    beforeEach(() => {
        let root = document.getElementById('modal-root');
        if (!root) {
            root = document.createElement('div');
            root.setAttribute('id', 'modal-root');
            document.body.appendChild(root);
        }
    });

    it('renders modal content via showModal()', async () => {
        render(
            <ModalProvider>
                <TestComponent />
            </ModalProvider>
        );

        expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();

        await userEvent.click(screen.getByText('Open Modal'));
        expect(screen.getByTestId('modal-content')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Close Modal'));
        expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
    });

    it('throws error if useModal() is used outside of ModalProvider', () => {
        const originalError = console.error;
        console.error = jest.fn();

        const renderWithError = () => {
            const Component = () => {
                useModal();
                return null;
            };
            render(<Component />);
        };

        expect(renderWithError).toThrow('useModal must be used within ModalProvider');

        console.error = originalError;
    });
});

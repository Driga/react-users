/**
 * ModalProvider.tsx
 *
 * This file provides a global modal context for the application using React Context API.
 * It allows any component in the app to open and close modal windows dynamically by injecting
 * arbitrary ReactNode content into a React Portal.
 *
 * Key features:
 * - Dynamically creates a #modal-root div in the DOM if it doesn't exist
 * - Uses ReactDOM.createPortal to render modals outside the main component tree
 * - Makes modal control accessible via useModal() hook
 *
 * Usage:
 * 1. Wrap your app with <ModalProvider> (usually in layout.tsx or _app.tsx)
 * 2. Use `useModal()` hook inside any component to call `showModal(...)` or `hideModal()`
 * 3. Content passed to `showModal()` will be rendered in a top-level portal
 */

'use client';

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import ReactDOM from 'react-dom';

// Define context interface with modal control methods
interface ModalContextType {
    showModal: (node: ReactNode) => void;
    hideModal: () => void;
}

// Create React context for modal
const ModalContext = createContext<ModalContextType | null>(null);

// ModalProvider wraps the app and provides modal functionality
export function ModalProvider({ children }: { children: ReactNode }) {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Ensure a #modal-root element exists in the DOM
        // (used as a portal target for rendering modals)
        let root = document.getElementById('modal-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'modal-root';
            document.body.appendChild(root); // Append it to <body> dynamically
        }
        setModalRoot(root); // Store the reference for portal usage
    }, []);

    // Show modal by setting its content
    const showModal = (content: ReactNode) => {
        setModalContent(content);
    };

    // Hide modal by clearing the content
    const hideModal = () => {
        setModalContent(null);
    };

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        let root = document.getElementById('modal-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'modal-root';
            document.body.appendChild(root);
        }
        setModalRoot(root);
        setIsClient(true); // ✅ теперь мы уверены, что всё в DOM
    }, []);

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}

            {/* Render modal content into a separate DOM node using React Portal */}
            {isClient && modalRoot && modalContent && ReactDOM.createPortal(modalContent, modalRoot)}
        </ModalContext.Provider>
    );
}

// Custom hook to access modal methods
export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within ModalProvider');
    return ctx;
}
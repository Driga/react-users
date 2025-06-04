import { Modal } from 'react-bootstrap';
import { ReactNode } from 'react';

interface Props {
    title: string;
    onClose: () => void;
    children: ReactNode;
}

export default function DynamicModal({ title, onClose, children }: Props) {
    return (
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}

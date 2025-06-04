import { Form } from 'react-bootstrap';
import React from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

function UserSearch({ value, onChange }: Props) {
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
        },
        [onChange]
    );

    return (
        <Form.Control
            type="search"
            placeholder="Search users by name..."
            className="mb-4"
            value={value}
            onChange={handleChange}
            aria-label="Search users"
        />
    );
}


export default React.memo(UserSearch);
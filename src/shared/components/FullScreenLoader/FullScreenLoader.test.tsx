import { render, screen } from '@testing-library/react';
import FullScreenLoader from "@/shared/components/FullScreenLoader/FullScreenLoader";

describe('FullScreenLoader', () => {
    it('renders a loading spinner', () => {
        render(<FullScreenLoader />);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import { useUserDetails } from '@/modules/user-list/hooks';
import { UserDetails } from "@/modules/user-list/components";

// Mock hook useUserDetails
jest.mock('@/modules/user-list/hooks', () => ({
    useUserDetails: jest.fn()
}));

const mockedUseUserDetails = useUserDetails as jest.Mock;

describe('UserDetails', () => {
    it('renders loader when loading', () => {
        mockedUseUserDetails.mockReturnValue({
            user: null,
            loading: true,
            error: null
        });

        render(<UserDetails userId={1} />);
        expect(screen.getByTestId('loaderStatus')).toBeInTheDocument();
    });

    it('renders error when error occurs', () => {
        mockedUseUserDetails.mockReturnValue({
            user: null,
            loading: false,
            error: 'Failed to fetch user'
        });

        render(<UserDetails userId={1} />);
        expect(screen.getByRole('alert')).toHaveTextContent('Failed to fetch user');
    });

    it('renders user details correctly', () => {
        mockedUseUserDetails.mockReturnValue({
            loading: false,
            error: null,
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '+123456789',
                image: 'https://example.com/photo.jpg',
                company: { name: 'ACME Corp' },
                address: {
                    address: '123 Main St',
                    city: 'Springfield'
                }
            }
        });

        render(<UserDetails userId={1} />);

        expect(screen.getByRole('region')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Photo of John Doe');
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone')).toBeInTheDocument();
        expect(screen.getByText('+123456789')).toBeInTheDocument();
        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('ACME Corp')).toBeInTheDocument();
        expect(screen.getByText('Address')).toBeInTheDocument();
        expect(screen.getByText('123 Main St, Springfield')).toBeInTheDocument();
    });

    it('renders nothing when no user is returned', () => {
        mockedUseUserDetails.mockReturnValue({
            user: null,
            loading: false,
            error: null
        });

        const { container } = render(<UserDetails userId={1} />);
        expect(container.firstChild).toBeNull();
    });
});

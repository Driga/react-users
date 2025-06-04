import { redirect } from 'next/navigation';

// To demonstrate an extensible application structure, I created a dedicated route for the user-list feature.
// For now, the home page redirects to this feature. In a real application, this would typically be a proper home page.
export default function Home() {
    redirect('/user-list');
}
import styles from './UserDetails.module.scss';
import { useUserDetails } from "@/modules/user-list/hooks";
import { FullScreenLoader } from "@/shared/components/FullScreenLoader";

export default function UserDetails({ userId }: { userId: number }) {
    const { user, loading, error } = useUserDetails(userId);

    if (loading) {
        return (
            <div className={styles.loaderContainer} role="status" aria-live="polite" aria-busy="true">
                <FullScreenLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-danger text-center p-4" role="alert">
                {error}
            </div>
        );
    }

    if (!user) return null;

    return (
        <div>
            <section className="card" aria-labelledby="user-name" role="region">
                <img
                    className="card-img-top w-75 mx-auto"
                    src={user.image}
                    alt={`Photo of ${user.firstName} ${user.lastName}`}
                />
                <div className="card-body">
                    <h2 id="user-name" className="card-title">{user.firstName} {user.lastName}</h2>
                    <dl>
                        <div>
                            <dt>Email</dt>
                            <dd><a href={`mailto:${user.email}`}>{user.email}</a></dd>
                        </div>
                        <div>
                            <dt>Phone</dt>
                            <dd><a href={`tel:${user.phone}`}>{user.phone}</a></dd>
                        </div>
                        {user.company?.name && (
                            <div>
                                <dt>Company</dt>
                                <dd>{user.company.name}</dd>
                            </div>
                        )}
                        {user.address && (
                            <div>
                                <dt>Address</dt>
                                <dd>{user.address.address}, {user.address.city}</dd>
                            </div>
                        )}
                    </dl>
                </div>
            </section>
        </div>
    );
}

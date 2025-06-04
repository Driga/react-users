import styles from './UserDetails.module.scss';
import { useUserDetails } from "@/modules/user-list/hooks";
import { FullScreenLoader } from "@/shared/components/FullScreenLoader";

export default function UserDetails({userId}: { userId: number }) {
    const {user, loading, error} = useUserDetails(userId);

    if (loading) return (
        <div className={styles.loaderContainer}>
            <FullScreenLoader/>
        </div>
    );
    if (error) return <div className="text-danger text-center p-4">{error}</div>;
    if (!user) return null;

    return (
        <div>
            <div className="card" >
                <img className="card-img-top w-75 mx-auto" src={user.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                    <br/>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    {user.company?.name && <p><strong>Company:</strong> {user.company.name}</p>}
                    {user.address && (
                        <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
                    )}
                </div>
            </div>

        </div>
    );
}


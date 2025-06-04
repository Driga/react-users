import { Spinner } from 'react-bootstrap';
import styles from './FullScreenLoader.module.scss';

const FullScreenLoader = () => (
    <div className={styles.wrapper}>
        <Spinner animation="border" variant="primary" role="status" className="mb-3">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
);

export default FullScreenLoader;

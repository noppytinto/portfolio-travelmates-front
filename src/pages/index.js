
import styles from '../styles/HomePage.module.scss';
import TimelinePage from './timeline/TimelinePage';

function HomePage() {
    return (
        <div className={styles['home-page']}>
            <TimelinePage />
        </div>
    );
}

export default HomePage;
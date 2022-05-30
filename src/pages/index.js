
import styles from '../styles/HomePage.module.scss';
import Timeline from './timeline/Timeline';

function HomePage() {
    return (
        <div className={styles['home-page']}>
            <Timeline />
        </div>
    );
}

export default HomePage;
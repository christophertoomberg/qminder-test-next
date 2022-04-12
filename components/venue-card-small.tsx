import Link from "next/link";
import styles from '../styles/VenueCardSmall.module.css';

export default function VenueCardSmall({ venue }: any) {

    return (
        <Link href={`/${venue.id}`}>
            <a>
                <div className={styles.card}>
                    <p>{venue.name}</p>
                    <p>{venue.location}</p>
                </div>
            </a>
        </Link>
    );
}
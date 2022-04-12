import Link from 'next/link';
import styles from '../styles/VenueCardLarge.module.css';
import Image from 'next/image';

export default function VenueCardLarge({ venue }: any) {
    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <a>{'<'}Back to main</a>
            </Link>
            <h5>{venue.name}</h5>
            <p>Location: {venue.location}</p>
            {venue.hamburgerPictureUrl.startsWith('https')
                ? <Image src={venue.hamburgerPictureUrl} alt={'Burger picture'} width={800} height={800} />
                : <p>{venue.hamburgerPictureUrl}</p>}
        </div>
    );
}
import VenueCardSmall from '../components/venue-card-small';
import { IVenue } from '../models/venue.model'
import styles from '../styles/Home.module.css'

function Home({ venues }: any) {

  return (
    <div className={styles.grid}>
      {venues.map((venue: IVenue) => (
        <VenueCardSmall key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const URL = 'https://java-spring-qminder-test-task.herokuapp.com/venues';

  const response = await fetch(URL);
  const venues = await response.json();

  return {
    props: {
      venues,
    },
  };
}
export default Home

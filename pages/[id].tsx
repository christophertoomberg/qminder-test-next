import VenueCardLarge from "../components/venue-card-large";

export default function PostingDetails({ venue }: any) {

  return (
    <VenueCardLarge venue={venue}/>
  );
}


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: any) {

  const URL = `https://java-spring-qminder-test-task.herokuapp.com/venues/${params.id}`;

  const response = await fetch(URL);
  const venue = await response.json();


  return {
    props: {
      venue,
    },
  };
}

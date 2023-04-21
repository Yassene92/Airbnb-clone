import getCurrentUser from './actions/getCurrentUser';
import getListings from './actions/getListings';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showRrset />;
  }
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => {
          return (
            <ListingCard
              currentUser={currentUser}
              data={listing}
              key={listing.id}
            />
          );
        })}
      </div>
    </Container>
  );
}

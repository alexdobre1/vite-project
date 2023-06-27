import EventCard from '../event-cards/EventCard';
import { useUserContext } from '../../context/UserContext';

const CurrentEvent = () => {
  const { subscribedEvents } = useUserContext();

  const lowestStartDate = subscribedEvents.reduce((min: any, current: any) => {
    if (!min || new Date(current.startDate) < new Date(min.startDate)) {
      return current;
    }
    return min;
  }, null);

  return (
    <>
      {subscribedEvents.length ? (
        <div>
          Your next event:
          <EventCard size="l" event={lowestStartDate}></EventCard>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CurrentEvent;

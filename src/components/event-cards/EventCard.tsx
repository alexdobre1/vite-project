import './event-card.css';
import { useUserContext } from '../../context/UserContext';
const EventCard = ({ size, event }: { size: 's' | 'l'; event: any }) => {
  const { toggleEvent, subscribedEvents } = useUserContext();

  if (size === 's') {
    return (
      <div className="event-card small" key={event.id}>
        <img src={event.image} className="small-img" />
        <p>{event.title}</p>
        <button
          onClick={() => toggleEvent(event)}
          className={
            subscribedEvents?.find((item: any) => item.id === event.id)
              ? 'toggled'
              : ''
          }
        >
          ★
        </button>
      </div>
    );
  }
  if (size === 'l') {
    return (
      <div className="event-card large">
        <div className="details">
          <img src={event.image} className="large-img" />
          <div className="text-box">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        </div>
        <div className="date">
          {new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'short',
          }).format(new Date(event.startDate))}
        </div>
      </div>
    );
  }
};

export default EventCard;

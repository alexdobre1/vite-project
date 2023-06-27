import { useState } from 'react';
import EventCard from '../event-cards/EventCard';
import './events-list.css';

console.log(new Date());
const events = [
  {
    id: 1,
    title: 'Redux',
    description: 'a simple guide for redux',
    startDate: '2023-06-29T09:00:00+0000',
    endDate: '2023-06-29T09:30:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['coding'],
  },
  {
    id: 2,
    title: 'Office Party',
    description: 'party time',
    startDate: '2023-06-29T10:00:00+0000',
    endDate: '2023-06-29T16:00:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['social'],
  },
  {
    id: 3,
    title: 'Security 101',
    description: 'dont click on dodgy links',
    startDate: '2023-06-30T09:00:00+0000',
    endDate: '2023-06-30T10:00:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['coding'],
  },
  {
    id: 4,
    title: 'Teambuilding',
    description: 'more party time',
    startDate: '2023-06-30T10:00:00+0000',
    endDate: '2023-06-30T18:00:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['social'],
  },
  {
    id: 5,
    title: 'Debugging',
    description: 'debugging description ',
    startDate: '2023-06-30T12:00:00+0000',
    endDate: '2023-06-30T13:00:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['coding'],
  },
  {
    id: 6,
    title: 'Poker Night',
    description: 'Poker',
    startDate: '2023-06-30T14:00:00+0000',
    endDate: '2023-06-30T15:00:00+0000',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    categories: ['social'],
  },
];

const categories = ['coding', 'social'];

const EventsList = () => {
  const [toggledCategories, setToggledCategories] = useState([...categories]);

  const toggleCategory = (cat: string) => {
    const array = [...toggledCategories];
    const index = array.findIndex((item) => item === cat);
    if (index > -1 && array.length > 1) {
      array.splice(index, 1);
    } else {
      array.push(cat);
    }
    setToggledCategories(array);
  };
  return (
    <>
      <div className="categories">
        <p>Sort by</p>
        {categories.map((category) => (
          <div
            className={
              'category ' +
              (toggledCategories.includes(category) ? 'active' : '')
            }
            onClick={() => toggleCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="events-container">
        {events.map((event) => {
          if (
            event.categories.some((item) => toggledCategories.includes(item))
          ) {
            return <EventCard size="s" event={event} />;
          }
        })}
      </div>
    </>
  );
};

export default EventsList;

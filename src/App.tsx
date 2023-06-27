import './App.css';

import UserContextProvider from './context/UserContext';
import EventsList from './components/events-list/EventsList';
import CurrentEvent from './components/current-event/CurrentEvent';

function App() {
  return (
    <UserContextProvider>
      <div>
        <section>
          <CurrentEvent />
        </section>
        <section>
          <EventsList />
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;

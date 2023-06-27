import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const UserContext = createContext<any>({});
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [subscribedEvents, setSubscribedEvents] = useState<any[]>(
    JSON.parse(localStorage.getItem('events') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(subscribedEvents));
  }, [subscribedEvents]);

  const toggleEvent = (newItem: any) => {
    const array = [...subscribedEvents];
    const index = array.findIndex((item) => item.id === newItem.id);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(newItem);
    }
    setSubscribedEvents(array);
  };
  return (
    <UserContext.Provider value={{ subscribedEvents, toggleEvent }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};

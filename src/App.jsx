import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
const EventsBoardPage = lazy(() => import('./pages/EventsBoardPage.jsx'));
const EventsRegistrationPage = lazy(() =>
  import('./pages/EventRegistrationPage.jsx'),
);
const EventsParticipantsPage = lazy(() =>
  import('./pages/EventParticipantsPage.jsx'),
);

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route
          path='/'
          element={<EventsBoardPage />}
        />
        <Route
          path='/registrationPage/:id'
          element={<EventsRegistrationPage />}
        />
        <Route
          path='/participantsPage/:id'
          element={<EventsParticipantsPage />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </SharedLayout>
  );
};

export default App;

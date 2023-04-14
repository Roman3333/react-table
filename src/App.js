import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import TotalContacts from './pages/TotalContacts/TotalContacts';
import Login from './pages/Login/Login';
import { Layout } from './components';

const CalendarPage = lazy(() => import('./pages/Calendar/Calendar'));
const ProjectReportPage = lazy(() => import('./pages/ProjectReport/ProjectReport'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth ? (
        <>
          <Routes>
            <Route path="/" element={<Layout setIsAuth={setIsAuth} />}>
              <Route index element={<TotalContacts />} />
              <Route
                path="calendar"
                element={
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <CalendarPage />
                  </Suspense>
                }
              />
              <Route
                path="project-report"
                element={
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <ProjectReportPage />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Route>
            ы
          </Routes>
        </>
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </>
  );
}

export default App;

import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import TotalContacts from './pages/TotalContacts/TotalContacts';
import { Layout } from './components';

const CalendarPage = lazy(() => import('./pages/Calendar/Calendar'));
const ProjectReportPage = lazy(() => import('./pages/ProjectReport/ProjectReport'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const [login, setLogin] = useState({
    login: 'vdcom@mail.com',
    password: 12345,
  });
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth ? (
        <main className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
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
        </main>
      ) : (
        <div>Логин</div>
      )}
    </>
  );
}

export default App;

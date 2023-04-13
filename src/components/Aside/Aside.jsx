import { Link } from 'react-router-dom';

import Contacts from '../../assets/Contacts.svg';
import Calendar from '../../assets/Calendar.svg';
import Project from '../../assets/Project.svg';

export const Aside = () => {
  const pages = [
    { title: 'Total Contacts', svg: Contacts, path: '/' },
    { title: 'Calendar', svg: Calendar, path: '/calendar' },
    { title: 'Project Report', svg: Project, path: '/project-report' },
  ];

  return (
    <aside>
      <ul>
        {pages.map((page) => (
          <li key={page.title}>
            <Link to={page.path}>
              <img src={page.svg} alt="img" /> <span>{page.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import cn from './aside.module.scss';
import Contacts from '../../../assets/Contacts.svg';
import Calendar from '../../../assets/Calendar.svg';
import Project from '../../../assets/Project.svg';
import Exit from '../../../assets/exit.svg';

export const Aside = ({ setIsAuth }) => {
  const pages = [
    { title: 'Total Contacts', svg: Contacts, path: '/' },
    { title: 'Calendar', svg: Calendar, path: '/calendar' },
    { title: 'Project Report', svg: Project, path: '/project-report' },
  ];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logOut = () => {
    setIsAuth(false);
    navigate('/');
  };

  return (
    <aside className={cn.aside}>
      <nav className={cn.asideNav}>
        <ul>
          {pages.map((page) => (
            <li
              className={classNames(cn.asideLi, {
                [cn.asideLiActive]: pathname === page.path,
              })}
              key={page.title}>
              <Link className={cn.asideLink} to={page.path}>
                <img className={cn.asideImg} src={page.svg} alt="img" /> <span>{page.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn.asideBottom} onClick={logOut}>
          <div>
            <img src={Exit} alt="exit" loading="lazy" />
          </div>
          <div>Log out</div>
        </div>
      </nav>
    </aside>
  );
};

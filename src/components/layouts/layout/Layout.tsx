import  { FC, ReactNode } from 'react';
import s from './Layout.module.scss';
import UserNavBar from './header/Header';
import Footer from './footer/Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {


  const location = useLocation()
  const isHomePage = location.pathname ==='/'

  return (
    <div className={s.authLayout}>
      <div className={s.header}>
        <UserNavBar  />
      </div>
      <div className={s.container}>
        {children}
      </div>
      <div className={s.footer}>
        {isHomePage &&
          <Footer/>
        }
      </div>
    </div>

  );
};

export default Layout;

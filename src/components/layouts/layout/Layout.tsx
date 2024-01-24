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
      <header className={s.header}>
        <UserNavBar  />
      </header>
      <main className={s.container}>
        {children}
      </main>
      <footer className={s.footer}>
        {isHomePage &&
          <Footer/>
        }
      </footer>
    </div>

  );
};

export default Layout;

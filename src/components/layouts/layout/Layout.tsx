import  { FC, ReactNode } from 'react';
import s from './Layout.module.scss';
import UserNavBar from './header/Header';
import Footer from './footer/Footer';

interface LayoutAuthProps {
  children: ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({ children }) => {




  return (
    <>
    <div className={s.authLayout}>
      <div className={s.header}>
        <UserNavBar/>
      </div>
      <div className={s.container}>
        {children}
      </div>
      <div className={s.footer}>
        <Footer/>
      </div>
    </div>
    </>

  );
};

export default LayoutAuth;

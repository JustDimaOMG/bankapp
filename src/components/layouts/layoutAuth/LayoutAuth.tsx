import { FC, ReactNode } from 'react';
import styles from './LayoutAuth.module.scss';

interface LayoutAuthProps {
  children: ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({ children }) => {
  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;

import s from './IconSelect.module.scss'
import React from 'react';

type IconSelectProps = {
  icons: { id: string; icon: string }[];
  onSelect: (id: string) => void;
  selectedIcon: string;
};

const IconSelect: React.FC<IconSelectProps> = ({ icons, onSelect, selectedIcon }) => {
  return (
    <ul className={s.container}>
      {icons.map((icon) => (
        <li key={icon.id} className={selectedIcon === icon.id ? s.iconActive : ''}>
          <img
            src={icon.icon}
            alt='icon'
            onClick={() => onSelect(icon.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default IconSelect;

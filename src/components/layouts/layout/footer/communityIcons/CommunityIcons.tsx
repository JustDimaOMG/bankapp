import React from 'react';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaWeibo,
  FaYoutube
} from 'react-icons/fa';

import { CommunityIconsData } from './CommunityIcons.data';
import s from './CommunityIcons.module.scss';

interface IconData {
  name: string;
  link: string;
}

const iconComponents: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaWeibo,
  FaYoutube
};

const CommunityIcons: React.FC = () => {
  return (
    <div className={s.container}>
      <ul className={s.iconList}>
        {CommunityIconsData.map((icon: IconData) => {
          const IconComponent = iconComponents[icon.name]; 
          return (
            <li key={icon.name}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                {IconComponent && <IconComponent />} 
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommunityIcons;

import s from './GoalComp.module.scss';
import { IGoal } from 'interfaces/IGoal';
import { icons } from 'data/icons.data';

const GoalComp = (props: IGoal) => {
  const icon = icons.find((icon) => icon.id === props.icon);

  return (
    <div className={s.container}>
      <div className={s.up}>
        <span>${props.amount}</span>
        <span>{props.date}</span>
      </div>
      <div className={s.low}>
        {icon && <img src={icon.icon} alt='icon' className={s.icon} draggable={false}/>}
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default GoalComp;

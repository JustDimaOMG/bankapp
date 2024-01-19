import s from './CoinsStat.module.scss';
import { Coins } from 'data/Coins.data';
import CoinElement from './coinElement/CoinElement';




const CoinsStat = () => {

  


  return (
    <>
      <div className={s.coinsStatBlock}>
        <ul>
          {Coins.map(coin => (
            <li key={coin.name} className={s.liImage}>
              <a href='' >
                <CoinElement image={`${coin.image}${coin.name}.png`} name={coin.name} tiket={coin.tiket} price={coin.price} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CoinsStat;

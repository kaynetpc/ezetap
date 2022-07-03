import './Card.css';
import {trimText} from '../../utils/utils';
import {IHero} from '../heroes/interface/hero.types';
import {paragraphLen} from '../../configs';

type Props = {
    data: IHero,
    onClick: (arg: IHero) => void;
}


export const Card = ({data, onClick}: Props) => {
  return (
    <div className='card' onClick={() => {
      onClick && onClick(data);
    }}>
      <div className='card-item-flex-row'>
        <img className='profile-img-sm' src={data.avatarUrl} alt='avatar'/>
        <div className='card-item-flex-column'>
          <h2>{data.fullName}</h2>
          <p>{data.type.name? data.type.name: ''}</p>
        </div>
      </div>
      <div>{trimText(data.description, paragraphLen)}</div>
    </div>
  );
};


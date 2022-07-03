import {FaTimes} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {IHero} from '../interface/hero.types';
import './HeroDetail.css';
import {useEffect} from 'react';

type Props = {
    view?: 'mobile' | 'desktop';
    data: IHero;
    onCloseModal: () => void;
    status: boolean
    onDelete: (data: IHero) => void;
}

export const HeroDetail = ({data, onCloseModal, onDelete, status}: Props) => {
  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        if (status) {
          return handleClose();
        }
      }
    });
  }, []);

  const handleClose = () => {
    onCloseModal && onCloseModal();
  };

  return (
    <div className='hero-detail'>
      <div className='hero-detail-title'>
        <FaTimes onClick={() => handleClose()} className='close-icon' />
      </div>
      <img src={data.avatarUrl} alt='avatar' />
      <div className='hero-detail-content'>
        <div className='hero-detail-content-name'>
          <h3>{data.fullName}</h3>
          <h5>{data.type.name}</h5>
        </div>
        <p>{data.description}</p>
      </div>
      <div className='hero-details-del-wrapper'>
        <div className='hero-details-del' onClick={() => onDelete && onDelete(data)}>
          <AiFillDelete />
          <span>Delete Hero</span>
        </div>
      </div>
    </div>
  );
};

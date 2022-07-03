import './AddHeroes.css';
import {FaTimes} from 'react-icons/fa';
import {HeroesSchema} from '../schema/Heroes.schema';
import {Form} from '../../../dependencies/form/Form';
import {useEffect} from 'react';

type Props = {
  triggerModal: () => void;
  status: boolean;
  onSave: (arg: any) => void;
}

export const AddHeroes = ({triggerModal, onSave, status}: Props) => {
  const storage = localStorage.getItem('heroTypes') || '[]';
  const heroType = JSON.parse(storage) as {id: any, name: string}[];


  const handleSubmit = async (data: any) => {
    onSave && onSave(data);
  };


  const handleAddHero = () => {
    triggerModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        if (status) {
          return handleAddHero();
        }
      }
    });
  }, []);


  return (
    <div className='add-heroes-form'>
      <div className='add-heroes-form-title'>
        <h3>Add heroes</h3>
        <FaTimes className='clickable-icon' onClick={() => handleAddHero()}/>
      </div>
      <img className='add-heroes-form-image' src='/avater.png' alt='avatar' />
      <Form
        onSubmit={handleSubmit}
        label="save"
        allFieldRequired
        schema={HeroesSchema(heroType)} />
    </div>
  );
};

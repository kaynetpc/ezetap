import './register.css';
import {FaTimes} from 'react-icons/fa';
import {Form} from '../../dependencies/form/Form';
import {useEffect} from 'react';
import {RegisterSchema} from './schema/reg.schema';

type Props = {
  triggerModal: () => void;
  status: boolean;
  onSave: (arg: any) => void;
}

export const Register = ({triggerModal, onSave, status}: Props) => {
  const storage = localStorage.getItem('heroTypes') || '[]';
  const heroType = JSON.parse(storage) as {id: any, name: string}[];


  const handleSubmit = async (data: any) => {
    onSave && onSave(data);
  };


  const handlerReg = () => {
    triggerModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        if (status) {
          return handlerReg();
        }
      }
    });
  }, []);


  return (
    <div className='add-user-form'>
      <div className='add-user-form-title'>
        <h3>Register</h3>
        <FaTimes className='clickable-icon' onClick={() => handlerReg()}/>
      </div>
      <Form
        onSubmit={handleSubmit}
        label="save"
        allFieldRequired
        schema={RegisterSchema(heroType)} />

      <div style={{
        padding: '20px',
        float: 'right',
      }}>
        <i>already have and account? <strong className=' cursor-pointer text-red' onClick={() => handlerReg()}>Login</strong></i>
      </div>
    </div>
  );
};

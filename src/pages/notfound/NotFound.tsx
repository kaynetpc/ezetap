import {useNavigate} from 'react-router-dom';
import {Button} from '../../dependencies/button/Button';

type Props = {};

export const NotFound = (props: Props) => {
  const navigate = useNavigate();

  const color = 'blue';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1
        style={{
          color,
          fontSize: '90px',
          fontWeight: 'bolder',
          fontStyle: 'normal',
        }}
      >
        OOPS!
      </h1>
      <p style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '60px'}}>
        We can't find the page you are looking for
      </p>
      <Button
        outline={{color: color}}
        onClick={() => {
          navigate('/');
        }}
        label="Visit Homepage"
      />
    </div>
  );
};

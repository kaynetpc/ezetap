import {useState} from 'react';
import {validateField} from '../../utils/utils';
import {Button} from '../button/Button';
import {InputField} from '../InputFIeld/InputField';
import './Form.css';
import {IForm, IFormSchema} from './Form.types';

export const Form = ({
  schema,
  label,
  onChange,
  onSubmit,
  userButton,
  style,
  allFieldRequired,
}: IForm) => {
  const [state, setState] = useState({});

  const handleChange = (e: any) => {
    e.preventDefault();
    const {name, value} = e.target;

    setState((pr) => ({...pr, [name]: value}));

    onChange && onChange(e);
  };

  const handleSelect = (res: any) => {
    const {name, value} = res.target;
    setState((pr) => ({...pr, [name]: value}));
    onChange && onChange(res);
  };

  const handleSubmit = (data: any, schema: IFormSchema[]) => {
    const schemaKeys = schema.map((x) => x.name);
    const stateKeys = Object.keys(data);
    const include = schemaKeys.every((value) => {
      return stateKeys.includes(value);
    });
    // eslint-disable-next-line no-console
    !include && console.error('all field are required');
    if (allFieldRequired) {
      if (include) {
        validateField(
            data,
            (field) => {
              alert(`${field} is required`);
            },
            () => {
              onSubmit && onSubmit(state);
              return;
            },
        );
      }
      !include && alert(`all field are required!`);
    } else {
      onSubmit && onSubmit(state);
      return;
    }
  };

  return (
    <div style={{width: '100%', ...style}}>
      <div className="form">
        {schema.map((x, i: number) =>
          x.type === 'select' ? (
            x.control.type === 'select' ? (
              <InputField
                typeRender="renderSelect"
                values={x.values}
                {...x.control}
                name={x.name}
                label={x.control.label}
                placeholder={x.control.placeholder}
                onChange={handleChange}
              />
            ) : x.control.type === 'tileSelect' ? (
              <InputField
                typeRender="renderTileSelect"
                values={x.values}
                {...x.control}
                name={x.name}
                label={x.control.label}
                placeholder={x.control.placeholder}
                onChange={handleSelect}
              />
            ) : (
              <InputField
                typeRender="renderRadio"
                values={x.values}
                {...x.control}
                name={x.name}
                label={x.control.label}
                placeholder={x.control.placeholder}
                onChange={handleChange}
              />
            )
          ) : x.type === 'textarea' ? (
            <InputField
              typeRender="renderTextarea"
              name={x.name}
              {...x.control}
              label={x.control.label}
              placeholder={x.control.placeholder}
              onChange={handleChange}
            />
          ) : (
            <InputField
              name={x.name}
              {...x.control}
              label={x.control.label}
              placeholder={x.control.placeholder}
              onChange={handleChange}
            />
          ),
        )}
      </div>
      {userButton ? (
        userButton(state)
      ) : (
        <div style={{marginTop: '15px', padding: '10px 20px'}}>
          <Button
            label={label || 'Submit'}
            type="lg"
            onClick={() => handleSubmit(state, schema)}
          />
        </div>
      )}
    </div>
  );
};

/** Schema sample below */

export const schemaSample = [
  {
    name: 'firstName',
    type: 'input',
    control: {
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter First Name',
    },
  },
  {
    name: 'lastName',
    type: 'input',
    control: {
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter Last Name',
    },
  },
  {
    name: 'gender',
    type: 'select',
    values: ['Male', 'Female'],
    control: {
      type: 'checkbox',
      label: 'Gender',
      placeholder: 'Gender',
    },
  },
  {
    name: 'email',
    type: 'input',
    control: {
      type: 'text',
      label: 'Email',
      placeholder: 'Supply Email',
    },
  },
  {
    name: 'phoneNumber',
    type: 'input',
    control: {
      type: 'number',
      label: 'Phone Number',
      placeholder: 'Phone Number',
    },
  },
  {
    name: 'addressOne',
    type: 'input',
    control: {
      type: 'text',
      label: 'Address',
      placeholder: 'Address',
    },
  },
  {
    name: 'password',
    type: 'password',
    control: {
      type: 'input',
      label: 'Choose A Password',
      placeholder: 'Password',
    },
  },
];

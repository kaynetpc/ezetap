import {ReactNode} from 'react';

export interface IFormSchema {
    name: string
    type: 'input' | 'select' | 'textarea',
    values?: any[]
    control: {
        type?: 'input' | 'select' | 'textarea' | 'tileSelect' | 'password';
        label: string;
        placeholder?: string;
        renderKey?:string;
        valueKey?: string;
        [key: string]: any | undefined;
    }
}

export interface IForm {
schema: IFormSchema[];
onSubmit?: (re: object) => void;
onChange?: (e: Event) => void;
onUpdate?: (e: Event) => void;
label?: string;
userButton?: (k: any) => ReactNode;
style?: {};
allFieldRequired?: boolean;
}

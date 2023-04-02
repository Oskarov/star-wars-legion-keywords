import {TextField}      from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';
import CN               from 'classnames';
import React            from 'react';
import styles           from './index.module.scss';

interface IInputProps {
    className?: string,
    showErrorMessage?: boolean,
}

const UiInput: React.FC<TextFieldProps & IInputProps> = ({
                                                             label,
                                                             className,
                                                             showErrorMessage = true,
                                                             ...props
                                                         }) => {
    return <div className={`tms-input ${styles.formControl}`}>
        {label &&
        <label>{label}</label>
        }

        <TextField
            className={CN(styles.input, className)}
            variant="outlined"
            {...props}
        />
    </div>;
}

export default UiInput;

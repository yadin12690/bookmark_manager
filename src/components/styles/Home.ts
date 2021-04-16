import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    wrapperDiv: {
        width: '100%',
        minHeight: '94%',
        backgroundPositionX: 'center',
        backgroundSize: '100% 100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '6%',

        '& $h1': {
            marginTop: '3rem',
        },
    },

    inputsWrapperDiv: {
        bottom: '55%',
        left: '39%',
        right: '0',
        margin: '0 auto',
        width: '70%',
        position: 'absolute',
    },

    secondTitle: {
        fontFamily: 'Amatic SC',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: 700,
        color: 'rgb(94, 53, 97)',
        marginTop: '4.5rem'
    },

    datePickerDialog: {
        right: '30%',
        marginTop: '2rem',
    },

    '& $div .MuiFormControl-root': {
        display: 'unset !important',
    },

    explainLabel: {
        fontFamily: 'Bellefair',
        fontSize: '1.1rem',
    },
}));


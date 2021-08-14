import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    containerDiv: {
        position: 'absolute',
        top: '20%',
        left: '36%',
    },

    formElement: {
        position: 'relative',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


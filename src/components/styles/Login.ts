import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({

    loginWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
    },

    loginForm: {
        display: 'flex',
        flexDirection: 'column',

        '& $h1': {
            fontSize: '35px',
            marginBottom: '15px',
            paddingBottom: '10px',
            letterSpacing: '-1px'
        },

        '& $input': {
            minWidth: '380px',
            padding: '20px 0',
            paddingLeft: '15px',
            marginBottom: '10px',
            outline: 'none',
            border: '1px solid rgba(0,0,0,0.24)',
            fontFamily: 'Inter, sans-serif',
            borderRadius: '2px',
            fontSize: '15px',
        },
    },

    submitButton: {
        padding: '17px 30px',
        marginTop: '10px',
        background: 'black',
        border: 'none',
        color: 'white',
        fontSize: '15px',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '3px'
    },
}));


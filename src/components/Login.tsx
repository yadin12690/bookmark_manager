import { useStyles } from './styles/Login';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login(): JSX.Element {
    const classes = useStyles();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useDispatch(); // This is for that we can use the reducer that we created.

    const handleLoginSubmit = (e: React.ChangeEvent<any>): void => {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }));
    }


    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.loginWrapper} >
                    <form className={classes.loginForm} onSubmit={(e) => handleLoginSubmit(e)}>
                        <h1>Login Here</h1>
                        <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className={classes.submitButton} type="submit">Login</button>
                    </form>
                </div>


            </Container>
        </>
    );
}

export { Login };
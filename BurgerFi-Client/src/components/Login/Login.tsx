
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const secretUser: string = 'Lomito'
    const secretPassword: string = '7456'

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        if (username === secretUser) {
            if (password === secretPassword) {
                navigate('/menu');
            } else {
                setError('Wrong password')
            }
        }
        else {
            setError('The user doesnt exist')
        }
    }

    return (
        <>
            <h2>Login to BurgerFi</h2>
            <input

                placeholder='Write your user'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            >  </input>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            >  </input>



            <button onClick={handleLogin}>Login</button>
            <p>{error}</p>
        </>
    );
}

export default Login;
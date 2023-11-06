
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import mascot from '../../assets/burgerFiQueen.png'

function Login() {

    const secretUser: string = 'Lomito'
    const secretPassword: string = '7456'
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
        <main className='login-page'>
            <header>
                <h1>Burger <span>Queen</span></h1>
            </header>
            <section className='login-container'>
                <figure>
                    <img src={mascot} alt="" />
                </figure>
                <form className='login-Form' onSubmit={handleLogin}>
                    <h2>Login to BurgerFi</h2>
                    <input
                        type='text'
                        placeholder='Write your user'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >  </input>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >  </input>
                    <button type='submit' >Login</button>
                    <p>{error}</p>
                </form>
            </section>
        </main>
    );
}

export default Login;
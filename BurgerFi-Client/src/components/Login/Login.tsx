
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('https://burger-queen-api-mock-production-1724.up.railway.app/login',{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password})
            })
            console.log(response);
            
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                localStorage.setItem('accessToken',data.accessToken)
                navigate('/menu')
            } else {
                setError("Wrong email or Password")
            }
        } catch (error) {
            setError("An error ocurred while login in")
        }
    }

    return (
        <main className='login-page'>
            <header>
                <h1>Burger <span>Queen</span></h1>
            </header>
            <section className='login-container'>
                <form className='login-Form' onSubmit={handleLogin}>
                    <h2>Login to BurgerFi</h2>
                    <input
                        type='email'
                        placeholder='Write your user'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
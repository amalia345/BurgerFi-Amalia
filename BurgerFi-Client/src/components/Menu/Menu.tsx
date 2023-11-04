import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigateTo = useNavigate();
    const handleBack= () => {
            navigateTo('/');
        
    }
    return (
        <>
            <h1>
                Congratulations !!!
            </h1>
            <button onClick={handleBack}>Return</button>
        </>
    )
}

export default Menu

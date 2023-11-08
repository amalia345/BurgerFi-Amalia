import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function Menu() {
    const navigateTo = useNavigate();
    const [order, setOrder] = useState({ items: [], total: 0 });
    const [products, setProducts] = useState([]);
    const [menuType, setMenuType] = useState('breakfast');
    const [error, setError] = useState<string | null>(null);
    const [clientName, setClientName] = useState(''); // Added state to track client name

    // Function to fetch products
    const fetchProducts = async () => {
        setError(null);
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            setError('No access token provided');
            return;
        }
        try {
            const response = await fetch('https://burger-queen-api-mock-production-1724.up.railway.app/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            // We check if the error is an instance of Error and has a message property
            if (error instanceof Error) {
                setError(`Fetching failed: ${error.message}`);
            } else {
                // If it's not an Error instance or doesn't have a message property, we handle it differently
                setError('Fetching failed: An unexpected error occurred');
            }
        }
    };
    // useEffect to call the fetchProducts on component mount
    useEffect(() => {
        fetchProducts();
    }, []);
    // Function to save client name to localStorage
    const saveClientName = () => {
        localStorage.setItem('clientName', clientName);
        // Optionally do something after saving
    };
    const handleBack = () => {
        navigateTo('/');
    };

    return (
        <>
            <h1>Menu de Pedidos</h1>
            <div>
                <input
                    type="text"
                    id="menu-text-client"
                    placeholder='Nombre del Cliente'
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                />
                <button onClick={saveClientName}>Guardar Cliente</button>
            </div>
            {error && <p>Error: {error}</p>}
            <div>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id}>
                            {product.name} - ${product.price}
                        </div>
                    ))
                ) : (
                    <p>No products found. Try refreshing the page.</p>
                )}
            </div>
            <button onClick={handleBack}>Return</button>
        </>
    );
}

export default Menu;
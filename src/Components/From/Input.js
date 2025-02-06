import { useState } from 'react';
import styles from './Input.module.css';

function Input() {
    const [formData, setFormData] = useState({
        walletAddress: '',
        username: '',
        email: ''
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success' ou 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                wallet_address: formData.walletAddress, // Alterado para corresponder ao backend
                username: formData.username,
                email: formData.email
            };

            const response = await fetch('http://localhost:5000/wallets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const responseData = await response.json();

            if (response.ok) {
                setStatusMessage('Carteira conectada com sucesso!');
                setStatusType('success');
                setFormData({ walletAddress: '', username: '', email: '' }); // Resetando os campos
            } else {
                setStatusMessage(responseData.message || 'Erro ao conectar a carteira.');
                setStatusType('error');
            }
        } catch (error) {
            setStatusMessage('Erro ao enviar requisição. Verifique sua conexão.');
            setStatusType('error');
        }
    };

    return (
        <div className={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="walletAddress">Endereço da Carteira</label>
                    <input
                        type="text"
                        id="walletAddress"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleInputChange}
                        placeholder="Digite o endereço da carteira"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="username">Nome de Usuário</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome de usuário"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Digite seu email"
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Conectar</button>
            </form>

            {statusMessage && (
                <div className={`${styles.statusMessage} ${statusType === 'success' ? styles.success : styles.error}`}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
}

export default Input;




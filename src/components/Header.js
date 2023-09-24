import React from 'react';
import estiloProd from '../styles/Product.module.css';

const Header = () => {
return (<header className="App-header">
    <nav className={estiloProd.myNav}>
        <img src='amazon.png' alt="logotipo amazon" />
    </nav>
</header>
)
}
export default Header
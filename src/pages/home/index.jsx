import {Link} from "react-router";

import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Aula React com VITE JS</h1>            
            <div className={styles.containerItens}>
                <h2>Exemplos</h2>
 
            <Link to="/exemplo/1">Exemplo 1 - Componente básico </Link>
            <Link to="/exemplo/2">Exemplo 2 - Uso de estilização com module </Link>
            <Link to="/exemplo/3">Exemplo 3 - botão Contador</Link>
            <Link to="/exemplo/4">Exemplo 4 - botão de cor</Link>
            <Link to="/exemplo/5">Exemplo 5 - questionário </Link>
            </div>
            <div className={styles.containerItens}>
                <h2>Atividades</h2>

         <Link to="/Atividade/1">Atividade 1 - Uso de CSS </Link>
         <Link to="/Atividade/2">Atividade 2 - Botão</Link>
         <Link to="/Atividade/3">Atividade 3 - Botão colorido </Link>
         <Link to="/Atividade/4">Atividade 4 - lista de compra </Link>

            </div>
        </div>
    )
}

export default Home;
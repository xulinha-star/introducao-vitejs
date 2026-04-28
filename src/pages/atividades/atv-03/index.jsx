import { useState } from 'react';
import styles from './index.module.css';

 function Atividade03() {
  const [acao, setAcao] = useState('');

  return (
    <div className={styles.container}>
      <h1 >Atividade 3</h1>

      <p>
        Ação selecionada: <strong>{acao}</strong>
      </p>

      <div className={styles.botoes}>
        <button
          className={`${styles.botao} ${styles.cadastrar}`}
          onClick={() => setAcao('Cadastrar')}
        >
          Cadastrar
        </button>

        <button
          className={`${styles.botao} ${styles.editar}`}
          onClick={() => setAcao('Editar')}
        >
          Editar
        </button>

        <button
          className={`${styles.botao} ${styles.listar}`}
          onClick={() => setAcao('Listar')}
        >
          Listar
        </button>

        <button
          className={`${styles.botao} ${styles.excluir}`}
          onClick={() => setAcao('Excluir')}
        >
          Excluir
        </button>

        <button
          className={`${styles.botao} ${styles.cancelar}`}
          onClick={() => setAcao('cancelar')}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
export default Atividade03
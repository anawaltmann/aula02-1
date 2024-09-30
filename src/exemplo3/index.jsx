import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setFotos(dados); 
    }
    buscarUsuario(); 
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      {lista.map(produto => (
            <li key={usuario.results}>
              <h2>{fotos.title}</h2>
              <p>{fotos.gender}</p>
              <img src={produto.image} alt={produto.title} width={100} />
            </li>
          ))}
        </ul>
      </>
    );
}

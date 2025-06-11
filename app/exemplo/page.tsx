'use client'

import { useEffect, useState } from "react";

export default function Exemplo(){

    const [pessoas, setPessoas] = useState([
        { id: 1, nome: 'João' },
        { id: 2, nome: 'Maria' }
    ]);

    useEffect(() => {
        alert("teste");
    }, [pessoas]);

    function adicionarPessoa() {
        const id = document.getElementById('id') as HTMLInputElement;
        const nome = document.getElementById('nome') as HTMLInputElement;
        setPessoas([...pessoas, { id: parseInt(id.value), nome: nome.value }]);
        console.log(pessoas);
    }

    return(
        <div>
            <input type="text" id="id" placeholder="Id" />
            <input type="text" id="nome" placeholder="Nome" /><br />
            <button onClick={adicionarPessoa}>Adicionar</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>    
                <tbody>
                    {pessoas.map((pessoa) => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
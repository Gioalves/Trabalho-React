import './FilmeTabela.css';

function FilmeTabela({ filmes, editarFilme, excluirFilme }) {
  return (
    <div className="tabela-container">
      <h2>Filmes Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Classificação</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.length > 0 ? (
            filmes.map((filme) => (
              <tr key={filme.id}>
                <td>{filme.nome}</td>
                <td>{filme.classificacao}</td>
                <td>{filme.genero}</td>
                <td>{filme.ano}</td>
                <td>{filme.autor}</td>
                <td>
                  <button className="editar" onClick={() => editarFilme(filme)}>Editar</button>
                  <button className="excluir" onClick={() => excluirFilme(filme.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum filme cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FilmeTabela;

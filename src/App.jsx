import { useEffect, useState } from 'react';
import './App.css';
import FilmeForm from './components/FilmeForm';
import FilmeTabela from './components/FilmeTabela';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nome: '',
    classificacao: '',
    genero: '',
    ano: '',
    autor: ''
  });

  const carregarFilmes = async () => {
    const res = await fetch('http://127.0.0.1:2222/filmes');
    const data = await res.json();
    setFilmes(data);
  };

  useEffect(() => {
    carregarFilmes();
  }, []);

  const salvarFilme = async () => {
    const metodo = form.id ? 'PUT' : 'POST';
    const url = form.id
      ? `http://127.0.0.1:2222/filmes/${form.id}`
      : 'http://127.0.0.1:2222/filmes';

    await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setForm({ id: null, nome: '', classificacao: '', genero: '', ano: '', autor: '' });
    carregarFilmes();
  };

  const editarFilme = (filme) => {
    setForm(filme);
    window.scrollTo(0, 0); 
  };

  const excluirFilme = async (id) => {
    await fetch(`http://127.0.0.1:2222/filmes/${id}`, { method: 'DELETE' });
    carregarFilmes();
  };

  return (
    <>
      <div className="left-panel">
        <h1 className="titulo">🎬 Cadastro de Filmes</h1>
        <FilmeForm form={form} setForm={setForm} salvarFilme={salvarFilme} />
        <FilmeTabela filmes={filmes} editarFilme={editarFilme} excluirFilme={excluirFilme} />
      </div>
      <div className="right-panel"></div>
      
      
    </>
  );
}

export default App;

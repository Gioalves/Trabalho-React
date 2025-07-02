import './FilmeForm.css';

function FilmeForm({ form, setForm, salvarFilme }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card">
      <h2>{form.id ? 'Editar Filme' : 'Novo Filme'}</h2>
      <div className="form-grid">
        {['nome', 'classificacao', 'genero', 'ano', 'autor'].map((campo) => (
          <input
            key={campo}
            name={campo}
            value={form[campo]}
            onChange={handleChange}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
          />
        ))}
      </div>
      <button className="botao-salvar" onClick={salvarFilme}>
        {form.id ? 'Atualizar' : 'Cadastrar'}
      </button>
    </div>
  );
}

export default FilmeForm;

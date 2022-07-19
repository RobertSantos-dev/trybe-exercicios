import './App.css';

const Task = (value, key) => {
  return (
    <li key={key}>{value}</li>
  );
}

function App() {
  const compromissos = ['Oração pela manhã', 'Treino', 'Estudos', 'Praticar o que foi estudado', 'Ler a Biblia'];

  return (
    <div className="App">
      {Task('Robert Gabriel Costa dos Santos')}
      <br/>
      <h2>Compromissos</h2>
      <ol>
        {compromissos.map((e, i) => Task(e, i))}
      </ol>
    </div>
  );
}

export default App;

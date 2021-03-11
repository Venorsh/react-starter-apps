import './App.css';
import Voting from './Voting'
import languageList from './languageList';


function App() {
  return (
    <div className="App">
      <h1>Vote for a language</h1>
      <div className="languages">
        {languageList.map(language => <Voting languageName={language.name} key={language.id}/>)}
      </div>
    </div>
  );
}

export default App;

import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <LinkCounter />
      <LinkSearch />

      <LinkList>
        <LinkItem />
        
      </LinkList>
      <CreateLink />
    </div>
  );
}

function LinkItem() {
  return(
    <div>
    <h1>This is the tittle Link</h1>
    <a
      className="App-link"
      href="https://platzi.com/reactjs"
      target="_blank"
      rel="noopener noreferrer" 
    >
      Aprende React
    </a>
    <h3>Things to learn</h3>
    <ul>
      <li>
        <span>V</span>
        <p> useEffect</p>
      </li>
      <li>
        <span>V</span>
        <p> useState</p>
      </li>
      <li>
        <span>V</span>
        <p> useContext</p>
      </li>
    </ul>
  </div>
  )
}
export default App;

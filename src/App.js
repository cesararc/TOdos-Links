import { LinksToVisit } from './LinksToVisit';
import { LinkSearch } from './LinkSearch';
import { LinkList } from './LinkList';
import { CreateLink } from './CreateLink';
import { LinkItem } from './LinkItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <LinksToVisit />
      <LinkSearch />

      <LinkList>
        <LinkItem />
        
      </LinkList>
      <CreateLink />
    </div>
  );
}


export default App;

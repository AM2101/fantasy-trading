import './App.css';
import Graph from './Main/Graph/Graph';
import List from './Main/List/List';
import Header from './header/Header';

function App() {
  return (
    <>
    
      <Header/>
        <div className="row">
          <div className="col-lg-4">
            <List/>
          </div>
          <div className="col-lg-8">
            <Graph/>
          </div>

        </div>
      
    </>
  );
}

export default App;
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widegets from './Widgets'
import './App.css';

function App() {
  return (
    //BEM 
    <div className="app">
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widegets />
    </div>
  );
}

export default App;

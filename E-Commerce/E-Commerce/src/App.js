import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './component/mynavbar';

import context from './context/context.jsx';

function App() {
  return (
    <context.Provider value={{}}>
      <Mynavbar/>
   </context.Provider>
     
    
  );
}

export default App;

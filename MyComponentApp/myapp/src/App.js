import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myform from './components/myform';
import Formshow from './components/formshow';


function App() {
  
  const propa=null,propb=null;
 const myformprops=[propa,propb];
  return (
    <div>
      <Myform  myprops={myformprops} />
      <Formshow myformprops={myformprops}  />
    </div>
  );
}

export default App;

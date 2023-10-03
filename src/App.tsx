import { Router } from './router'
import {FormProvaider} from './contexts/FormContext'
 
const App = () => {
  return(
    <FormProvaider>
      <Router/>
    </FormProvaider>
  );
}

export default App;
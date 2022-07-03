import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Views from './Views';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Reducers} from './services/reducer/Reducers';

const store = createStore(Reducers);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Views />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

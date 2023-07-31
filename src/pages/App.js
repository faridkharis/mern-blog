import './App.css';
import { AppRoutes, store } from '../config';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default App;

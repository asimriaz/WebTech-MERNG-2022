import './App.css';
import HkStudentList from './components/HkStudentList';
import store from './store'
import { Provider } from 'react-redux'

function App() {
    return (
        <div>
            <HkStudentList />
        </div>
    );
}

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)

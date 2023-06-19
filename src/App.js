import './App.scss';
import 'boxicons';
import 'swiper/swiper.min.css';
import Switch from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App(props) {
    return (
        <div>
            <Header {...props} />
            <Switch />
            <Footer />
        </div>
    );
}

export default App;
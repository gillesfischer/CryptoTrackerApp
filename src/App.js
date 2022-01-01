import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';
import { makeStyles } from '@material-ui/core';
import LivePage from './Pages/LivePage';
import Performance from './Pages/Performance';
import Binance from './Pages/Binance';
import Login from './Pages/Login';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header></Header>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/performance' exact element={<Performance />} />
        <Route path='/binance' exact element={<Binance />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/livecoins/:id' exact element={<LivePage />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;

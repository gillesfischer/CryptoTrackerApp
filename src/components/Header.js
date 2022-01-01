import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cryptoContext from '../CryptoContext';
import { FaUserAstronaut } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  perf: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    textDecoration: 'underline',
    marginLeft: '50px',
    cursor: 'pointer',
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = useContext(cryptoContext);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Link to='/'>
              <Typography className={classes.title}>Crypto Tracker</Typography>
            </Link>
            <Link to='/performance'>
              <Typography className={classes.perf}>Performance</Typography>
            </Link>
            <Link to='/binance'>
              <Typography className={classes.perf}>Binance</Typography>
            </Link>
            <Link to='/login'>
              <div style={{ display: 'flex' }}>
                <FaUserAstronaut
                  style={{
                    display: 'block',
                    marginLeft: '50px',
                    marginRight: '10px',
                  }}
                />
                <Typography className={classes.perf} style={{ margin: '0' }}>
                  login
                </Typography>
              </div>
            </Link>
            <Select
              variant='outlined'
              style={{ width: 100, height: 40, marginLeft: 'auto' }}
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'GBP'}>GBP</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Route, Switch } from 'react-router-dom';
import UsageContainer from './components/UsageContainer';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Switch>
          <Route exact path="/" component={UsageContainer} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

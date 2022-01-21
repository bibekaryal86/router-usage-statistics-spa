import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import UsageContainer from './components/UsageContainer';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Routes>
                    <Route path="/" element={<UsageContainer/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;

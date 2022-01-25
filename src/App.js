import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header'
import Footer from './components/Footer';
import Card from './components/Card'
import GlobalStyles from './components/styles/Global';
import content from './content.js'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#ffffff',
    footer: '#003333'
  },
  mobile: '769px'

}

function App () {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
            {content.map((item, index) => (
              <Card key={index} item={item}></Card>
            ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

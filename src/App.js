import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import LatestRelease from './components/LatestRelease';
import Jumbotron from './components/Jumbotron';
import './App.css';

function App() {
  return (
    <>
      <MyNavbar />
      <Jumbotron />
      <LatestRelease />

      <MyFooter />
    </>
  );
}

export default App;

import './App.css';
import TopPanel from './components/TopPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function App() {
  return (
    <div class="body">
      <div class="header">
        <TopPanel/>
      </div>
      <div class="main-content">
        Main content
      </div>
      <div class="footer">
        Image
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'
import FQA from './components/QuestionAns/FQA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='bg-color'>
      <Navbar></Navbar>
     <Products></Products>
     <FQA></FQA>
     <Footer></Footer>
    </div>
  );
}

export default App;

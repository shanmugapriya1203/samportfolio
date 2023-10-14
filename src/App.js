import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';


function App(){
  return(
 <div className="App">
<NavigationBar/>
<Banner/>
<About/>
 </div>
  )


}
export default App;
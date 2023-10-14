import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';



function App(){
  return(
 <div className="App">
<NavigationBar/>
<Banner/>
<About/>

<Skills/>

 </div>
  )


}
export default App;
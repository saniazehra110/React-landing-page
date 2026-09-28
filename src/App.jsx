/*import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Header/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import Navbar from './components/Navbar';
import './App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import ConditionBadge from './components/ConditionBadge';
import './components/css/ConditionBadge.css';
import Category from './components/Category';
import ladies from "./assets/ladies-image.jpg";
import mens from "./assets/men-image.jpg";
import kids from "./assets/kids-image.jpg";
import Bags from "./assets/bags-image.png";
import Shoes from "./assets/shoes-image.jpg";
import Crockery from "./assets/crockery-image.jpg";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AnnouncementBar/>
      <Navbar/>
  <Hero/>
  <div className='ConditionBadge'>
  <ConditionBadge condition = {"likeNew"}/>
  <ConditionBadge condition = {"gentlyUsed"}/>
  <ConditionBadge condition = {"vintage"}/>
  </div>

<div className="category-section">

 <h1>Explore Our Collection</h1>
 
<div className='categories'>
<Category category="Ladies" image={ladies}   description="Women's Collection"/>
<Category category="Men" image ={mens}  description="Men's Collection"/>
<Category category="Kids" image ={kids}   description="Kids' Collection" />
<Category category="Bags" image={Bags}   description="Elegant Bags" />
<Category category="Shoes" image={Shoes}   description="Footwear Collection" />
<Category category="Crockery" image={Crockery}  description="Home & Dining" />


</div>
</div>
<Contact />
<Footer />
</div> 
 );
};

export default App;
import './App.css'
import { NavbarSimple } from './components/NavBar';
import { SimpleCard } from './components/cards';
import { ListWithBadge } from './components/category';
import { SimpleFooter } from './components/footer';


function App() {
  return (
  <div>
    <div>
        <header className="">
         <NavbarSimple className=""/>
        </header>
    </div>

    <div className='container' >
            <div className='item'>
                     <p className=" head ">
                     Browsing Category
                     </p>
                     <h4 className='text-title text-uppercase text-black mt-3 mb-2'> 
                     Courses 
                     </h4>     
                      <SimpleCard/> 
            </div> 

            <div className='item'>   
                      <ListWithBadge/>
            </div>
    </div> 
    
    <div>
       <footer className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <SimpleFooter/>
       </footer>
    </div>
  </div>
  );
}

export default App;

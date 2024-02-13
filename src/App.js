import './App.css'
import { NavbarSimple } from './components/NavBar';
import { SimpleCard } from './components/cards';
import { SimpleFooter } from './components/footer';


function App() {
  return (
  <div>
    <div>
        <header className="">
         <NavbarSimple className=""/>
        </header>
    </div>
    <span>
      
    </span>
    <div className='containerinline grid items-center justify-around px-6 py-7'>
      <div className='inline flex-col items-center justify-around px-6 py-7'>
      <div  className='items-center justify-around'>
        <p className="mb-2">Browsing Category</p>
        <h4 className='text-title text-uppercase text-black mt-3 mb-2'> Courses </h4>
      </div>
      <div className='flex flex-wrap items-center justify-around'>
      <span>
      </span>
            <SimpleCard/>
      </div>
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

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
    <div className='px-6 py-7'>
    <p className="mb-2">Browsing Category</p>
    <h4 className='text-title text-uppercase text-black mt-3 mb-2'> Courses </h4>
    </div>
    <div className='cs-main-content'> 
          <SimpleCard/>
    </div>
    <div>
       <footer className=' flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between'>
          <SimpleFooter className=''/>
       </footer>
    </div>
  </div>
  );
}

export default App;

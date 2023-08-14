import './App.css';
import { Menu } from './component/Menu';
import { HeaderTop } from './component/Header-Top';
import { HeaderCenter } from './component/Header-Center';
import { HeaderFooter } from './component/Header-Footer';
import { MainTop } from './component/Main-Top';
import { MainCenter } from './component/Main-Center';
import { MainFooter } from './component/Main-Footer';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <HeaderTop />
      <HeaderCenter />
      <HeaderFooter />
      <MainTop />
      <MainCenter />
      <MainFooter />
      <Footer />
      <div className='Footer-Footer'>
        <p>Copyright © 2022 Avi Yansah</p>
      </div>
    </div>
  );
}

export default App;

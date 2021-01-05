import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import {NavigationBar} from './components/NavigationBar';
import {HomeBody} from './components/HomeBody';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import FocusLock from 'react-focus-lock';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      
      <>
        <GlobalStyles />
        <Header />
        <NavigationBar/>
        <HomeBody />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>

        </div>
        <Footer />

        
         
        
        
      </>
    </ThemeProvider>
  );
}

export default App;

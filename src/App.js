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
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const [chosenItem, setItem] = useState('pagina_inicial') 

  const changeItem = (item) => {
    console.log(item)
    setItem(item)
  }


  const StickyHeader = styled.div`

  position: sticky;
  top: 0;
  


`;

  return (
    <ThemeProvider theme={theme}>
      
      <>
        <GlobalStyles />
        <StickyHeader >
        <Header />
        <NavigationBar item={chosenItem} changeItem={changeItem}/>
        </StickyHeader>
        <HomeBody />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>

        </div>
        

        
         
        
        
      </>
    </ThemeProvider>
  );
}

export default App;

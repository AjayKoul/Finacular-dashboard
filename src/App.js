import React,{useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import LeftSideBar from './components/LeftSideBar';
import Main from './components/Main';
import RightSideBar from "./components/RightSideBar";
import  MediaQuery, { useMediaQuery } from 'react-responsive';

function App() {
  
  const isLarge = useMediaQuery({minWidth:870}, undefined);

  const [wid,setWid] = useState(isLarge?'200px':'0');
  useEffect(()=>{
    isLarge?setWid('200px'):setWid('0')
  },[isLarge]);

  return (
      <Container>
        <LeftSideBar width={wid} setWid={setWid} isLarge={isLarge}/>
        
      <Content>
          <Header>
            <Left> 
              <MediaQuery maxWidth={870}>
          <i class="fas fa-bars" onClick={()=>setWid("200px")}></i>
              </MediaQuery>
            </Left>
            <Right>
            <i class="fas fa-cog"></i>
            <i class="fas fa-bell"></i>
            </Right>
          </Header>
        <Main isLarge={isLarge}/>
      </Content>
      <RightSideBar />
    </Container>
    
  );
}

export default App;

const Container=styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`
const Header=styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  border: 1px solid lightgrey;
  
  i{
    border-left:1px solid lightgrey;
    border-right:1px solid lightgrey;
    padding:20px;
  }

  i:hover{
    cursor:pointer;
  }
`
const Content=styled.div`
  background: white;
  flex: 1;
  display: grid;
  grid-template-rows: 48px auto;
`
const Left = styled.div`

`
const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
import React from 'react';
import styled from 'styled-components';

function LowerComponents({isLarge,title, desc, detail, extra, src}) {
    return (
        <Container style={isLarge?{width:"20vw"}:{width:"60vw"}}>
            <Header>
                {title}
                <i class="fas fa-ellipsis-h"></i>
            </Header>
            <hr/>
            <Main>
                <Left>
                <span>{desc}</span>
                 <input />
                <span>{detail}  {extra}</span>
                
                </Left>
                <Right>
                    <img src={src}/>
                </Right>
            </Main>
        </Container>
    )
}
export default LowerComponents

const Container = styled.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 7px;
    padding: 5px;
    width: 20vw;

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    i{
        cursor: pointer;
    }
`
const Main = styled.div`
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    span{
        padding: 5px;
    }
    input{
        background: #b5b6fb;
        border: none;
        border-radius: 5px;
        height: 35px;
        width: 12vw;
        color: rgba(14,7,78,1);
        font-weight: 700;
        font-size: larger;
        text-align: center;
        outline: none;
        
    }
`
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 4vw;

    }
`
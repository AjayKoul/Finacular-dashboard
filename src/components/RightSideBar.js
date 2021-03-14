import React from 'react';
import styled from 'styled-components';
import pic from './cardOne.png';
import pics from './CardTwo.png';

function RightSideBar() {
    return (
        <Container>
            <Top>
                <button><i class="fas fa-bolt"></i>Actions</button>
            </Top>
            <hr/>
            <CardOne>
                <img src={pic}/>
                <button>Learn Now</button>
            </CardOne>
            <CardTwo>
                <img src={pics} />
                <button>Track Now</button>
            </CardTwo>
        </Container>
    )
}

export default RightSideBar

const Container = styled.div`
    border: 1px solid lightgrey;
    width: 12%;
`
const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;

    button{
        background: rgb(35 23 150);
        color: white;
        border: none;
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
        outline: none;
        font-size: 1vw;
        width: 7vw;
        height: 5vh;
    }
`
const CardOne = styled.div`
    background: #f3f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 5px 5px 5px;
    padding: 5px;
    button{
        background: rgb(35 23 150);
        color: white;
        border: none;
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 5px;
        outline: none;
        font-size: 1vw;
        width: 7vw;
        height: 5vh;
    }

    img{
        width: 10vw;
        height: 130px;
    }
`
const CardTwo = styled.div`
    background: #f3f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 5px 5px 5px;
    padding: 5px;
    
    button{
        background: rgb(35 23 150);
        color: white;
        border: none;
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 5px;
        outline: none;
        font-size: 1vw;
        width: 7vw;
        height: 5vh;
    }
    img{
        width: 10vw;
        height: 130px;
    }
`
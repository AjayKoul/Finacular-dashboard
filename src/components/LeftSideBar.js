import React,{useEffect} from 'react';
import styled from 'styled-components';
import data from './LeftSideBarData';

function LeftSideBar({width,setWid,isLarge}) {
    

    return (
        <Container style={{width:`${width}`}}>
           
            <Top>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUAAID///8AAHt9fb2MjMQAAHibm8yrq9T29vkAAHy4uNoAAHXIyOLX1+r5+fzn5/EAAIO9vd3v7/ja2uwAAIfg4O6pqdOSksfl5fEgIJRZWaYAAIszM5tVVamZmcj09PoNDYltba0uLpF5ebVLS6FmZqh/f7glJZPLy+BGRqMKCo6ios+IiMMmJo49PZxzc681NZNhYapFJaIcAAAEKklEQVR4nO3deW/aTBDA4d0Nxl58rG1ssLkMIaTkaNp8/y/XsSGEK+37ql2tZpjfn5Eiz6P1hUC2kFdLoOBQY4wp4ziO2gZd/qGXfte4d9rd/+3s//uHXkaHbXWbzmCILUwzrIzJDzPCwNcp4vJPTVW+TN5m9fO0SFOhvXCX90XKel9teT+XFmkxXdaz+SKumv8gzKPem/C0FtjS2tOzXmT+IMz9H0uFT3dILVe++Z0wWhXK9ZB/mU432ZfCYPET8fId0veL5rowf0xdD/ePStfmmrB8x76DfqYm5aWwnHiu5/qHqYfhubCc0FnBNvVQngpzQrvoLjUxx8LgkRoQiOvmSLigchY9Ll18CqOfrqex0n32IcxXFC70l+mN2Qv9wvUslkr9ndD8oHea2aU3VSeMlq4nsVYRtcKmR3UJ4Yrx2IDQkPhA8UXfKhDGhIFCbUH4QumO+zw1TkQyp7yG+gmEM8pCUSciqF0PYbXnQATProewWgFCqrds+0BI8YPTZ/omhKRPpSK8CSHlWxoQNiIIXQ9htdCInLiwFIa20ItvQFiRF8a0z6VexELsgXBLXJiJiLhwwELsgTAjLvTFgIW4YyH+vJHwaQtVn4XYYyH+QDgiLyT9FXD7JbDo0/0lRpvqsRB7LMQfC/HHQvyBcExc+CoI/7q0Td2xEHssxN9NCF/JC+9YiDsW4o+F+GMh/liIPxbij4X4YyH+WIg/FuKPhfhjIf5YiD8W4o+F+GMh/liIPxbij4X4YyH+WIg/FuKPhfhjIf5YiD8W4o+F+GMh/liIPxbij4X4YyH+WIg/FuKPhfhjIf5YiD8W4o+F+LsJIf3n09B/xhALkcdC/N2EkP6zL+k/v5SFyGMh/liIPxbiD4T031FC/z0z9N8VxELksRB/IKT//kPqQvrvsLwFIf33AdN/pzMLkQfCLXFhJmLiwoiF2ANhFboewmpeLAwLcQfCnLYwLEVAXGhEQPtcGjYi0K6HsFoY3IIwdT2E1RR5oQZh4XoIu4Hw2fUMVisCkdSuh7DaFIQz0ifTOhHJnLJQPyVCLijf1KgeCGPKa6i2Ushq5noMi9UlCBvCvzBV6waEMlq6HsRaRSZboVlRPRL1e9UJpU/21nQkd0KzobmI3RJ2Qpndux7GSt8H8kMoFyT307H8FDZrelcMtcqPhNJMqBHVvJLHQlk+0CKqt6E8FcohKaJ6i+W5UJaEdlQ1H8pLoTRrMmfUVSWvCWWzuKdw6dffx7m8LoRL/ybFbtTifXBiOhVKM9oUmA9HVbyPKvk7oZRV9PhNKYwrqZWq11l1DroQwuFYbcdP9bQQWodt3mnKbWfTdBPCghTT+qm3LZtLzhUhlCTBvsaUcRxHUZQNBgMfGvW7xr2PXu9s9nrYzni34VE7BMySwUwwWWma/aRJkly1/AJ9Ejly4V7gHQAAAABJRU5ErkJggg=="/>
                Finacular
                <i class="fas fa-chevron-left" onClick={()=>isLarge?'':setWid("0")}></i>
            </Top>
            <Bottom>
                {
                    data.map(item=>(
                        <BottomContainer>
                            {item.icon}
                            {item.text}
                        </BottomContainer>
                    ))
                }
            </Bottom>
        </Container>
    )
}

export default LeftSideBar

const Container = styled.div`
    background: white;
    height: 100vh;
`
const Top = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;

    img{
        width: 30px;
    }

`
const Bottom = styled.div`
    margin-top: 50px;

`
const BottomContainer = styled.div`
    margin-top: 10px;
    padding: 5px;
    margin-right: 7px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: grid;
    grid-template-columns: 20px auto;

    i{
        color: rgba(14,7,78,1);
    }
    
    :hover{
        background: rgba(14,7,78,1);
        color: white;
        cursor: pointer;
        i{
            color: white;
        }
    }
`
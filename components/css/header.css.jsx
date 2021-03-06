import styled from 'styled-components';

export const Navbar = styled.nav`
    transition: all .3s ease-out 0s;
    padding: 12px 20px;
    background: #ffffff14;
    border-radius: 10px;
    margin: auto;
    width: 93%;
    top:10px;
    align-content: center;
    display: flex;
`;

export const toggle = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    /*background: #fec12d;*/
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
  
  span {
    position: absolute;
    width: 25px;
    height: 3px;
    background: #fff;
    /*background: #1863ff;*/
    border-radius: 8px;
    transition: 0.5s;
  }
  
  span:nth-child(1){
    transform: translateY(-7px);
    width: 18px;
    left: 2px;
  }
  
  #toggle.active span:nth-child(1){
    width: 20px;
    transform: translateY(0px) rotate(45deg);
  }
  
  span:nth-child(2){
    transform: translateY(7px);
    width: 12px;
    left: 2px;
  }
  
  #toggle.active span:nth-child(2){
    width: 20px;
    transform: translateY(0px) rotate(315deg);
  }
  
  #toggle.active span:nth-child(3){
    transform: translateX(30px);
  }
  
`;
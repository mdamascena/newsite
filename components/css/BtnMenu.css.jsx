import styled from "styled-components";

export const toggle = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    background: #fec12d;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    
    span{
        position: absolute;
        width: 20px;
        height: 1.8px;
        background: #fff;
        //background: #1863ff;
        border-radius: 6px;
        transition: 0.5s;
    }

    span:nth-child(1){
        transform: translateY(-6px);
        width: 15px;
        left: 5px;
    }

    span:nth-child(2){
        transform: translateY(6px);
        width: 10px;
        left: 5px;
    }

    .toggle.active span:nth-child(3){
        transform: translateX(30px);
    }

`;


import Styled from "styled-components";

export const Container = Styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
min-height: 100vh;
justify-content: center;
text-align: center;
align-items: center;
display: flex;
`;

export const HomePageContainer = Styled.div`
min-height: 498px;
width: 541px;
border-radius: 5px;
background-color: white;
`;

export const InputAdd = Styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
height: 40px;
width: 342px;
border-radius: 5px;
outline: 0;
margin-top: 41px;

::placeholder{
font-size: 15px;
font-weight: 400;
letter-spacing: 0px;
text-align: left;
padding-left: 20px;
}
`;

export const Button = Styled.button`
background: #8052EC;
height: 40px;
width: 130px;
border-radius: 5px;
border:0;
color: white;
margin-left: 40px;
font-weight: bold;
cursor: pointer;
`;

export const ListAddUl = Styled.div`
margin-top: 50px;
display: flex;
justify-content: space-around;
padding: 20px;
margin-right: 35px;
border-radius: 5px;
background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);
cursor: pointer;

li{
    list-style: none;
    font-weight: bold;
}
`;


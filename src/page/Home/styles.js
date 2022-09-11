import Styled from "styled-components";

import ToDoList from '../../assets/list.jpg'
import { BsTrash } from 'react-icons/bs'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export const Container = Styled.div`
background: url("${ToDoList}");
width: 100vw;
height: 100vh;
background-size: cover; 
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
padding-left: 5px;
::placeholder{
font-size: 15px;
font-weight: 400;
letter-spacing: 0px;
text-align: left;

}
`;

export const Button = Styled.button`
margin-bottom: 20px;
background: #efa335;
height: 40px;
width: 130px;
border-radius: 5px;
border:0;
color: white;
margin-left: 40px;
font-weight: bold;
cursor: pointer;
`;

export const DivToDolist = Styled.ul`
overflow-y: scroll;
height: 498px;

::-webkit-scrollbar{
    background: white; 
    border-radius: 5px;
} 

::-webkit-scrollbar-thumb {
  background-color: #EFA335;    /* color of the scroll thumb */
  border-radius: 3px;       /* roundness of the scroll thumb */
  border: 1px solid black;  /* creates padding around scroll thumb */
}
` 
export const ListAddUl = Styled.div`
margin-top: 50px;
margin-bottom: 50px;
display: flex;
justify-content: space-around;
padding: 20px;
margin-right: 35px;
border-radius: 5px;
background: ${props => props.isFinished ? '#efa335' : '#E4E4E4'};
box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19);


li{
    list-style: none;
    font-weight: bold;
}
`;

export const EmptyTaskList = Styled.p`
padding: 100px;
`

export const Check = Styled(AiOutlineCheckCircle)`
cursor: pointer;
height: 20px;
width: 20px;

`

export const Trash = Styled(BsTrash)`
cursor: pointer;
height: 20px;
width: 20px;
`
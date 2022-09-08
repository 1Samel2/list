import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import {
  Container,
  HomePageContainer,
  InputAdd,
  Button,
  ListAddUl,
} from "./styles";

import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [list, setList] = useState([
    { id: uuidv4(), task: "lavar o banheiro", finished: true },
  ]);

  const [inputTask, setInputTask] = useState("");

  function enterInput(event) {
    setInputTask(event.target.value);
  }

  function submitInput() {
    if(inputTask){
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deleteItems(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <HomePageContainer>
        <InputAdd onChange={enterInput} placeholder="o que tenho que fazer" />
        <Button type="button" onClick={submitInput}>Adicionar</Button>
        {
          list.length > 0 ? (
            <ul>
              {list.map((item) => (
                <ListAddUl isFinished={item.finished} key={item.id} >
                  <MdVerified onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <BsTrash onClick={() => deleteItems(item.id)} />
                </ListAddUl>
              ))}
            </ul>
          ) : (
            <h1>test</h1>
          )}    
      </HomePageContainer>
    </Container>
  );
}

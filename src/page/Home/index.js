import React, { useState } from "react";

import {
  Container,
  HomePageContainer,
  InputAdd,
  Button,
  DivToDolist,
  ListAddUl,
  EmptyTaskList,
  Check,
  Trash
} from "./styles";

import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [list, setList] = useState([]);

  const [inputTask, setInputTask] = useState("");

  function enterInput(event) {
    setInputTask(event.target.value);
  }

  function submitInput() {
    if (inputTask) {
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
        <InputAdd onChange={enterInput} placeholder="Digita a sua tarefa para não esquecer" />
        <Button type="button" onClick={submitInput}>Adicionar</Button>
          {
            list.length > 0 ? (
              <DivToDolist>
                {list.map((item) => (
                  <ListAddUl isFinished={item.finished} key={item.id} >
                    <Check onClick={() => finalizarTarefa(item.id)} />
                    <li>{item.task}</li>
                    <Trash onClick={() => deleteItems(item.id)} />
                  </ListAddUl>
                ))}
              </DivToDolist>
            ) : (
              <EmptyTaskList>Lista de tarefa vazia</EmptyTaskList>
            )}
      </HomePageContainer>
    </Container>
  );
}

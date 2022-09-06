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
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
  }

  return (
    <Container>
      <HomePageContainer>
        <InputAdd onChange={enterInput} placeholder="o que tenho que fazer" />
        <Button type="button" onClick={submitInput}>Adicionar</Button>
        <ul>
          {list.map((item) => (
            <ListAddUl isFinished={item.finished} key={item.id}>
              <MdVerified />
              <li>{item.task}</li>
              <BsTrash />
            </ListAddUl>
          ))}
        </ul>
      </HomePageContainer>
    </Container>
  );
}

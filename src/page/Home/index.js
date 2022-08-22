import { HomePageContainer } from "./styles";

export default function Home() {
  const list = [
    "lavar o banheiro",
    "lavar o carro",
    "lavar o cama",
    "lavar o geladeira",
    "lavar o gelo",
  ];

  function enterInput() {}

  function submitInput() {}

  return (
    <HomePageContainer>
      <input onChange={enterInput} placeholder="o que tenho que fazer" />
      <button type="button" onClick={submitInput}>
        Adicionar
      </button>

      <ul>
        {list.map((item => (
          <li key={item}>{item}</li>
        )))}
      </ul>
    </HomePageContainer>
  );
}

import Button from "./components/Button.tsx";

function Lobby() {
  return (
    <>
      <h1>Lobby</h1>
      <Button label={"Study Timer"} url={"/timer"}/>
    </>
  );
}

export default Lobby;

import Sky from "./components/Sky.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <>
      <body className="flex min-h-screen bg-fixed bg-linear-to-b from-blue-950 to-blue-800 items-center justify-center-safe">
        <div>
          <Sky numberOfStars={150} />
          <h1 className="relative text-4xl text-[#FBF4F1] drop-shadow-xl-black">
            moonapp
          </h1>
          <div className="flex flex-col items-center mt-2">
            <Button label={"Enter"} url={"/lobby"}/>

          </div>
        </div>
      </body>
    </>
  );
}

export default App;

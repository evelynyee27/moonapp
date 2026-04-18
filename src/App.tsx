import Sky from "./components/Sky.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <>
      <body className="min-h-screen bg-fixed bg-linear-to-b from-blue-950 to-blue-800">
        <div>
          <Sky numberOfStars={150} />
          <h1 className="relative text-4xl text-[#FBF4F1] font-varela text-center align-middle pt-50">
            moonapp
          </h1>
          <div className="flex flex-col items-center mt-5">
            <Button label={"Enter"} />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;

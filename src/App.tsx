import { Sidebar, Main } from "./components";

function App() {
  return (
    <div className="h-screen w-full  overflow-hidden">
      <div className="flex h-screen w-full bg-[#ededed]">
        <div className=" w-[350px] m-2">
          <Sidebar />
        </div>
        <div className=" w-full mx-1 ">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;

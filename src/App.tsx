import LampSwitches from "./Toggles";

const App: React.FC = () => {
  return (
    <body className="dark">
      <div className="flex flex-col justify-center items-center h-[100dvh] space-y-4">
        {/* <h1 className="text-4xl font-bold">Lamp Switches</h1> */}

        <div className="">
          <LampSwitches />
        </div>
      </div>
    </body>
  );
};

export default App;

import { useEffect } from "react";
import LampSwitches from "./Toggles";

const App: React.FC = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <body>
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

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const ApiUrl = "https://iot.necrosskull.ru";

interface Lamp {
  name: string;
  status: "on" | "off";
}

const LampSwitches: React.FC = () => {
  const [lamps, setLamps] = useState<Lamp[]>([]);

  useEffect(() => {
    fetchLamps();
    const intervalId = setInterval(fetchLamps, 500);
    return () => clearInterval(intervalId);
  }, []);

  const fetchLamps = async () => {
    try {
      const response = await fetch(`${ApiUrl}/lamps`);
      if (!response.ok) {
        throw new Error("Failed to fetch lamps");
      }
      const lampsData: Lamp[] = await response.json();
      setLamps(lampsData);
    } catch (error) {
      console.error("Error fetching lamps:", error);
    }
  };

  const toggleLamp = async (name: string, status: "on" | "off") => {
    try {
      const response = await fetch(`${ApiUrl}/lamp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, status }),
      });
      if (!response.ok) {
        throw new Error("Failed to toggle lamp");
      }

      await fetchLamps();
    } catch (error) {
      console.error("Error toggling lamp:", error);
    }
  };

  return (
    <div className="bg-neutral-800 scale-150 p-4 rounded-lg space-y-2">
      {lamps.map((lamp) => (
        <div
          key={lamp.name}
          className="flex items-center bg-neutral-900 p-2 space-x-2 rounded-lg"
        >
          <p className="font-bold text-2xl">{lamp.name}</p>
          <Switch
            checked={lamp.status === "on"}
            onCheckedChange={() =>
              toggleLamp(lamp.name, lamp.status === "on" ? "off" : "on")
            }
          />
        </div>
      ))}
    </div>
  );
};

export default LampSwitches;

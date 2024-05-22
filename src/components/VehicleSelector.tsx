import { useEffect, useState } from "react";
import { loadMakes, loadModels } from "../lib/vehicles";
import Select from "./Select";

interface Option {
  value: string;
  label: string;
}

export default function VehicleSelector() {
  const [year, setYear] = useState("");
  const [makes, setMakes] = useState<Option[]>([]);
  const [make, setMake] = useState("");
  const [models, setModels] = useState<Option[]>([]);
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  useEffect(() => {
    if (year && makes.length === 0) {
      loadMakes().then((makes) => {
        setMakes(
          makes.map((make) => ({
            value: make.Make_ID.toString(),
            label: make.Make_Name,
          }))
        );
      });
    }
  }, [year, makes]);

  useEffect(() => {
    if (make && models.length === 0) {
      loadModels(make).then((models) => {
        setModels(
          models.map((model) => ({
            value: model.Model_ID.toString(),
            label: model.Model_Name,
          }))
        );
      });
    }
  }, [make, models]);

  return (
    <div className="grid grid-cols-5 w-full gap-4 p-4 bg-slate-200 border-orange-500 border-t-2">
      <div>
        <h1 className="text-xl uppercase">Set your vehicle</h1>
        <p>Get an exact fit for you vehicle.</p>
      </div>

      <Select value={year} onChange={setYear}>
        <option>1 | Year</option>
        {Array.from({ length: 29 }, (_, index) => (
          <option key={index + 1995}>{index + 1995}</option>
        ))}
      </Select>

      <Select disabled={!year} value={make} onChange={setMake}>
        <option>2 | Make</option>
        {makes.map((make) => (
          <option key={make.value} value={make.value}>
            {make.label}
          </option>
        ))}
      </Select>

      <Select disabled={!make} value={model} onChange={setModel}>
        <option>3 | Model</option>
        {models.map((model) => (
          <option key={model.value} value={model.value}>
            {model.label}
          </option>
        ))}
      </Select>

      <Select disabled={!model} value={engine} onChange={setEngine}>
        <option>4 | Engine</option>
        <option>4.0L</option>
        <option>3.6L</option>
        <option>5.7L</option>
        <option>2.0L</option>
      </Select>
    </div>
  );
}

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const loadAll = async () => {
    const { data } = await axios("http://jsonplaceholder.typicode.com/photos");
    setData(data);
  };
  const loadTen = async () => {
    const { data } = await axios(
      "http://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    setData(data);
  };
  const loadFif = async () => {
    const { data } = await axios(
      "http://jsonplaceholder.typicode.com/photos?_limit=50"
    );
    setData(data);
  };
  const deletePic = async (id) => {
    await axios.delete("http://jsonplaceholder.typicode.com/photos/{id}");
  };
  const loadHund = async () => {
    const { data } = await axios(
      "http://jsonplaceholder.typicode.com/photos?_limit=100"
    );
    setData(data);
  };
  useEffect(async () => {
    const { data } = await axios("http://jsonplaceholder.typicode.com/photos");
    setData(data);
  }, []);
  return (
    <div className="App">
      <div className="flex mx-auto w-9/12 my-4">
        <button
          onClick={loadTen}
          className="px-6 py-2 bg-blue-400 mx-4 rounded"
        >
          10
        </button>
        <button
          onClick={loadFif}
          className="px-6 py-2 bg-blue-400 mx-4 rounded"
        >
          50
        </button>
        <button
          onClick={loadHund}
          className="px-6 py-2 bg-blue-400 mx-4 rounded"
        >
          100
        </button>
        <button
          onClick={loadAll}
          className="px-6 py-2 bg-blue-400 mx-4 rounded"
        >
          All
        </button>
      </div>
      {data && (
        <div>
          {data.map((element) => (
            <div
              className="flex p-4 border shadow w-9/12 mx-auto rounded"
              key={element.id}
            >
              <img src={element.thumbnailUrl} />
              <div className="">
                <h1 className="text-justify p-2 font-semibold text-xl">
                  {element.title}
                </h1>
                <a
                  href="{element.url}"
                  className="text-justify underline text-blue-600"
                >
                  {element.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

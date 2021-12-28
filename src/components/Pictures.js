import React from "react";
import { useEffect, useState } from "react";
import { usePaginateQuery } from "react-query";
import axios from "axios";

const Pictures = () => {
  const [data, setData] = useState([]);
  const { resolvedData, latestData, status } = usePaginateQuery(
    resolvedData,
    latestData,
    status
  );
  useEffect(async () => {
    const { data } = await axios("http://jsonplaceholder.typicode.com/photos");
    setData(data);
  }, []);
  return (
    <div className="App">
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
};
export default Pictures;

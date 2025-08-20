// Custom hook
import { useState, useEffect } from "react";

const useData = (type) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cars = [
      {
        id: 1,
        name: "Tesla",
        year: "2020",
      },
      { id: 2, name: "Ford", year: "2019" },
      {
        id: 3,
        name: "BMW",
        year: "2021",
      },
    ];

    const books = [
      {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling",
        year: "1997",
      },
      {
        id: 2,
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: "1937",
      },
    ];

    if (type === "cars") {
      setData(cars);
    } else if (type === "books") {
      setData(books);
    }
  }, [type]);

  return [data];
};

export default useData;

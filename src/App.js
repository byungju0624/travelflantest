import "./App.css";
import { useState, useEffect } from "react";
import PageData from "./components/pageData/pageData.jsx";
import Pagination from "./components/pagination/pagination.jsx";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;

  const currentData = (tmp) => {
    let currentData = 0;
    currentData = tmp?.slice(indexOfFirst, indexOfLast);
    return currentData;
  };
  useEffect(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setData(response?.data);

    setLoading(false);
  }, []);

  return (
    <div className="App">
      <PageData data={currentData(data)} loading={loading} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data?.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default App;

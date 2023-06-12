import DataGrid, {
  Column
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import "./Grid.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { FiSearch } from "react-icons/fi";
import { HiFilter } from "react-icons/hi";

function Grid() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(data.length || 10); // Örneğin başlangıçta 10 satır gösterilsin.

  const handleRowChange = (event) => {
    setRowsToShow(Number(event.target.value));
  };


  // Verileri filtrelemek için bir işlev
  const filteredData = data.filter((item) => {
    // İlgili alanlarda (link, name, description) arama yap
    const linkMatch = item.link
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(searchText.toLowerCase());
    // Herhangi bir alanda eşleşme varsa, bu öğeyi filtrelenmiş veriye dahil et
    return linkMatch || nameMatch || descriptionMatch;
  });

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    setRowsToShow(data.length);
  }, [data]);
  


  return (
    <div className="datagrid">
      <div className="container">
        <div className="input-container">
          <div className="input-section">
            <input
              type="text"
              placeholder="Search objects..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="icon-section">
            <FiSearch className="search-icon" />
          </div>
          <button>
            <HiFilter className="icon" />
          </button>
        </div>
        <Button setData={setData} />
      </div>
      <DataGrid
        dataSource={filteredData.slice(0, rowsToShow)}
        showBorders={true}
        rowAlternationEnabled={true}
      >
        <Column dataField="link" caption="Sosyal Medya Linki" />
        <Column dataField="name" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />


      </DataGrid>
      <div className="rows-input-area">
            <span className="rows-input-text">Show:</span> 
            <input type="number" min="1" max={filteredData.length} value={rowsToShow} onChange={handleRowChange} className="rows-input"
/>
        </div>
    </div>
  );
}

export default Grid;

import DataGrid, { Column, Summary, TotalItem, Pager, Paging } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import "./Grid.css";
import { useState } from "react";
import Button from "../Button/Button"
import { FiSearch } from 'react-icons/fi';
import { HiFilter } from 'react-icons/hi';


function Grid() {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10); // varsayılan satır sayısı


    // Verileri filtrelemek için bir işlev
  const filteredData = data.filter(item => {
    // İlgili alanlarda (link, name, description) arama yap
    const linkMatch = item.link.toLowerCase().includes(searchText.toLowerCase());
    const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const descriptionMatch = item.description.toLowerCase().includes(searchText.toLowerCase());
    // Herhangi bir alanda eşleşme varsa, bu öğeyi filtrelenmiş veriye dahil et
    return linkMatch || nameMatch || descriptionMatch;
  });


  return (
    <div className="datagrid">
    <div className="container">


      <div className="input-container">
        <div className="input-section">
          <input 
            type="text"
            placeholder="Search objects..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
        <div className="icon-section">
          <FiSearch className="search-icon" />
        </div>
        <button>
          <HiFilter className="icon"/>
        </button>
      </div>
      <Button setData={setData}/>
    </div>
    <DataGrid dataSource={filteredData} showBorders={true} rowAlternationEnabled={true}>
      <Column dataField="link" caption="Sosyal Medya Linki" />
      <Column dataField="name" caption="Sosyal Medya Adı" />
      <Column dataField="description" caption="Açıklama" />
      <label>Rows: </label>
    <input 
          type="number"
          min="1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        />
     <Summary>
          <TotalItem 
            column="link"
            summaryType="count"
            displayFormat={'{0} rows'}
          />
        </Summary>
        <Paging defaultPageSize={pageSize} />
        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
    </DataGrid>
  </div>
  );
}

export default Grid;

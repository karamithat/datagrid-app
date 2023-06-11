import DataGrid, { Column } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import "./Grid.css";
import { useState } from "react";
import Button from "../Button/Button"

function Grid() {
    const [searchText, setSearchText] = useState('');

  return (
    <div className="datagrid">
         <div className="container">
        <div>
          <input 
            type="text"
            placeholder="Arama..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button>Filtrele</button>
        </div>
          <Button/>

      </div>
      <DataGrid showBorders={true} rowAlternationEnabled={true}>
        <Column dataField="link" caption="Sosyal Medya Linki" />
        <Column dataField="name" caption="Sosyal Medya Adı" />
        <Column dataField="description" caption="Açıklama" />
      </DataGrid>
    </div>
  );
}

export default Grid;

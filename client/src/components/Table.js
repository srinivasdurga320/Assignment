import React from 'react';
import './Table.css';

function Table({ Tabledata ,name}) {
  if (name){
    const filtereddata = Tabledata.filter(entry =>entry.Manufacturer.includes(name));
    Tabledata=filtereddata
  }
  return (
    <div>
      <div className="table-container">
        {Tabledata.length > 0 ? (
          <table>
            <thead>
              <tr>
                {Object.keys(Tabledata[0]).slice(0, 5).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Tabledata.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).slice(0, 5).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Table;

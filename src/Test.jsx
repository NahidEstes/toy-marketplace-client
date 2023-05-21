import React, { useEffect, useState } from "react";

const TableWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [toysData, setToysData] = useState([]);
  const [filteredData, setFilteredData] = useState(toysData);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysData(data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterData(searchTerm);
  };

  const filterData = (searchTerm) => {
    const filtered = toysData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.sellerName}</td>
                <td>{item.subCategory}</td>
                {/* Render additional table data fields */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No results found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSearch;

// import React, { useEffect, useState } from "react";

// const TableWithSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [toysData, setToysData] = useState([]);
//   const [filteredData, setFilteredData] = useState(toysData);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     filterData(event.target.value);
//   };

//   useEffect(() => {
//     fetch(`http://localhost:5000/toys`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setToysData(data);
//       });
//   }, []);

//   const filterData = (searchTerm) => {
//     const filtered = toysData.filter((item) =>
//       //   item.name.includes(searchTerm.toLowerCase())
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };
//   console.log(filteredData);

//   return (
//     <div className="my-52 custom-container">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <input type="submit" name="" id="" />
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>

//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>

//               {/* Render additional table data fields */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableWithSearch;

// import React, { useEffect, useState } from "react";

// const TableWithSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [toysData, setToysData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/toys`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setToysData(data);
//       });
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredData = toysData.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.column1}</td>
//               <td>{item.column2}</td>
//               <td>{item.column3}</td>
//               {/* Render additional table data fields */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableWithSearch;

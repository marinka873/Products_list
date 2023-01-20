import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React from "react";

  import "./productsList.css";
  
  export const ProdictsList = ({ products }) => {
    
    function createData(id, article, name, brand, price, quantity) {
      return { id, article, name, brand, price, quantity };
    }
  
    const headCell = [
      { id: "0", label: "ID" },
      { id: "1", label: "Артикул" },
      { id: "2", label: "Название" },
      { id: "3", label: "Бренд" },
      { id: "4", label: "Цена, RUB" },
      { id: "5", label: "Количество" },
    ];
  
    const rows = products.map((product) => createData(product));

    return (
      <div className="table__wrapper">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headCell.map((item) => (
                  <TableCell key={item.id}
                  sx={{textTransform: "upperCase"}}>{item.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id.id}>
                  <TableCell align="left">{row.id.id}</TableCell>
                  <TableCell align="left">{row.id.article}</TableCell>
                  <TableCell align="left">{row.id.name}</TableCell>
                  <TableCell align="left">{row.id.brand.name}</TableCell>
                  <TableCell align="left">{row.id.price}</TableCell>
                  <TableCell align="left">{row.id.quantity}</TableCell>
                </TableRow>
              ))}
          
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

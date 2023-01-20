import React from "react";
import { Button, TextField } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "./searchButton.css";

export const SearchButton = ({handleChange, searchProducts, values, error}) => {
    
  return (
    <div className="search__wrapper">
      <div className={`error ${error ? 'active' : ''}`}> 
        <ErrorOutlineIcon  sx={{ width: 20, height: 20, color: '#FF2828', padding: 3}}/>
        <span className="attention__text">Внутренняя ошибка сервера. Попробуйте снова.</span>
      </div>
      <div className="search__input">
        <TextField
          id="standard-textarea"
          className="search_input"
          multiline
          maxRows={100}
          variant="standard"
          placeholder="Для поиска введите один или несколько артикулов"
          onChange={(e) => handleChange(e.target.value)}
          sx={{
            width: 500,
            backgroundColor: '#fff',
          }}
        />
      </div>

      <Button variant="contained"
       className="search__button" 
       onClick={() => searchProducts(values)}
       sx={{
        width: 150,
        backgroundColor:' #4F37AF'
       }}
       >
        Поиск
      </Button>
    </div>
  );
};
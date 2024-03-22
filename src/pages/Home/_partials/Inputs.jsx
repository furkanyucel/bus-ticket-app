import { Autocomplete, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { busData } from "../../../data/busData.js";
import { useState } from "react";
import "./Inputs.scss";

const Inputs = () => {
  const [selectedDateDeparture, setSelectedDateDeparture] = useState(null);
  const [selectedDateReturn, setselectedDateReturn] = useState(null);
  const [startCity, setStartCity] = useState("");
  const [endCity, setEndCity] = useState("");
  

  const searchTickets = () => {
    const filteredTickets = busData.filter((ticket) => {
      return (
        ticket.startcity === startCity &&
        ticket.endcity === endCity
      );
    });
    console.log(filteredTickets);
  };


  const uniqueStartCities = Array.from(
    new Set(busData.map((option) => option.startcity))
  );
  const uniqueEndCities = Array.from(
    new Set(busData.map((option) => option.endcity))
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="inputField">
        <Autocomplete
          id="from"
          freeSolo
          options={uniqueStartCities}
          value={startCity}
          onChange={(event, newValue) => setStartCity(newValue)}
          renderInput={(params) => <TextField {...params} label="Nereden" />}
        />

        <Autocomplete
          id="to"
          freeSolo
          options={uniqueEndCities}
          value={endCity}
          onChange={(event, newValue) => setEndCity(newValue)}
          renderInput={(params) => <TextField {...params} label="Nereye" />}
        />

        <DatePicker
          label="Ne Zaman"
          inputFormat="dd/MM/yyyy"
          value={selectedDateDeparture}
          onChange={(newValue) => setSelectedDateDeparture(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="Dönüş Tarihi"
          inputFormat="dd/MM/yyyy"
          value={selectedDateReturn}
          onChange={(newValue) => setselectedDateReturn(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField type="number" label="Yolcu Sayısı" id="passengerCount" />

        <Button id="searchTicket" variant="contained" onClick={searchTickets}>
          Bilet Ara
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default Inputs;

import { Autocomplete, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { busData } from "../../../data/busData.js";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Inputs.scss";
import { searchTickets } from '../../../redux-toolkit/slices/ticketSlice.js';

const Inputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDateDeparture, setSelectedDateDeparture] = useState(null);
  const [selectedDateReturn, setselectedDateReturn] = useState(null);
  const [startCity, setStartCity] = useState("");
  const [endCity, setEndCity] = useState("");

  const searchTicketsHandler = () => {
    const filteredTickets = busData.filter((ticket) => {
      return ticket.startcity === startCity && ticket.endcity === endCity;
    });
    dispatch(searchTickets(filteredTickets));
    navigate('/bus-schedules-results');
  };

  const uniqueStartCities = Array.from(
    new Set(busData.map((option) => option.startcity))
  );
  const uniqueEndCities = Array.from(
    new Set(busData.map((option) => option.endcity))
  );

  return (
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
      </LocalizationProvider>
      <TextField type="number" label="Yolcu Sayısı" id="passengerCount" />
      <div>
        <Button id="searchTicket" variant="contained" onClick={searchTicketsHandler}>
          Bilet Ara
        </Button>
      </div>
    </div>
  );
};

export default Inputs;

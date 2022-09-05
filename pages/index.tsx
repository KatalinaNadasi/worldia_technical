import type { NextPage } from "next";
import React from "react";
import styled from "styled-components"
import { InputLabel, Autocomplete, TextField, Button } from "@mui/material";


const Wrapper = styled.div`
  padding: 3rem;
`

const Title = styled.h1 `
  font-size: 2rem;
  margin: 2rem 0;
`

const Box = styled.div`
  margin: 1rem 0;
`

const StyledLabel = styled(InputLabel) `
  margin: 1rem 0;
`

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3000/api/flights`)
  const data = await res.json()

  return { props: { data } }
}


const Home: NextPage = ({ data }) => {
  const roundTrip = ['One-Way', 'Multi-Cities'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const economy = ['Premium Economy', 'Business', 'First']
  const dataToArray = Object.values(data)
  const departureAirport = dataToArray.map((departure) => {
    return departure.map((d) => {
      return d.departureAirport.toString()
    })
  })

  const arrivalAirport = dataToArray.map((arrival) => {
    return arrival.map((a) => {
      return a.arrivalAirport.toString()
    })
  })

  return (
    <Wrapper>
      <Title>Please select a flight to book</Title>
      <Box>
        <Autocomplete
          disablePortal
          id="roundTrip"
          options={roundTrip}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="RoundTrip" />}
        />
      </Box>
      <StyledLabel htmlFor="passengers">Passengers</StyledLabel>
      <Box>
        <Autocomplete
          disablePortal
          id="adults"
          options={numbers}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="Adults" />}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="children"
          options={numbers}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="Children" />}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="Economy"
          options={economy}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="Economy" />}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="departure_airport"
          options={departureAirport}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="departure-airport" />}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="country-arrival"
          options={arrivalAirport}
          sx={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} label="country-arrival" />}
        />
      </Box>
      <Box>
        <Button variant="contained">Search</Button>
      </Box>
    </Wrapper>
  );
};

export default Home;

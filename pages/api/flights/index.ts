import type { NextApiRequest, NextApiResponse } from "next";
import { getFlightData } from "./__data__/flights";

type flightData = {
  id: string;
  flightNumber: string;
  airline: string;
  takeoff: string;
  landing: string;
  duration: number;
  price: number;
  currencyCode: string;
  departureAirport: string;
  arrivalAirport: string;
};

export type apiResponseType = { data: flightData[] };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<apiResponseType>
) {
  res.status(200).json(getFlightData());
}

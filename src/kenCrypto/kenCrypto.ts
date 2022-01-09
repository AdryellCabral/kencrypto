import axios, { AxiosInstance } from "axios";
import * as dotenv from "dotenv";
import { Quote, Error, Convert } from "../types/Response.types";
import { ApiKey } from "../types/Request.types";

dotenv.config();

export class KenCrypto {
  baseURL: string = "https://pro-api.coinmarketcap.com/v1";
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async quotes(symbol: string): Promise<Quote | Error> {
    let output;
    try {
      const response = await this.axiosInstance.get(
        `cryptocurrency/quotes/latest?symbol=${symbol}`,
        {
          headers: <ApiKey>{
            "X-CMC_PRO_API_KEY": process.env.KEY_VALUE, // Estou assumindo que a chave da api key é a mesma e o que muda é só o valor
          },
        }
      );
      delete response.data.status;
      output = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        output = error.response?.data.status;
      }
    }
    return output;
  }

  async conversion(symbol: string, convert: string): Promise<Convert | Error> {
    let output;

    try {
      const response = await this.axiosInstance.get(
        `/tools/price-conversion?amount=1&symbol=${symbol}&convert=${convert}`,
        {
          headers: <ApiKey>{
            "X-CMC_PRO_API_KEY": process.env.KEY_VALUE,
          },
        }
      );
      delete response.data.status;
      output = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        output = error.response?.data.status;
      }
    }
    return output;
  }
}

export interface Quote {
  data: {
    BTC: {
      id: string;
      name: string;
      symbol: string;
      slug: string;
      num_market_pairs: number;
      date_added: string;
      tags: Array<string>;
      max_supply: number;
      circulating_supply: number;
      total_supply: number;
      is_active: number;
      platform: any;
      cmc_rank: number;
      is_fiat: number;
      last_updated: string;
      quote: {
        USD: {
          price: number;
          volume_24h: number;
          volume_change_24h: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          percent_change_30d: number;
          percent_change_60d: number;
          percent_change_90d: number;
          market_cap: number;
          market_cap_dominance: number;
          fully_diluted_market_cap: number;
          last_updated: string;
        };
      };
    };
  };
}

export interface Convert {
  data: {
    id: number;
    symbol: string;
    name: string;
    amount: number;
    last_updated: string;
    quote: {
      [mimeType: string]: {
        price: number;
        last_updated: string;
      };
    };
  };
}

export interface Error {
  status: string;
}

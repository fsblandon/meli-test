import { NextApiRequest, NextApiResponse } from "next";

export async function getData(query?: any): Promise<any> {
    const response = await fetch(`http://localhost:9000/api/items?q=${query}`);
    const jsonData = await response.json();
    return jsonData;
}
  
export async function handler(req: NextApiRequest, res: NextApiResponse, context: any): Promise<any> {
    debugger;
   // const { search } = context.query;
    const jsonData = await getData();
    return jsonData;
}
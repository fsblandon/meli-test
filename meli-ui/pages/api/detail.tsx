import { NextApiRequest, NextApiResponse } from "next";

export async function getData(id?: any): Promise<any> {
    const response = await fetch(`http://localhost:9000/api/items/${id}`);
    const jsonData = await response.json();
    return jsonData;
}

export async function handler(req: NextApiRequest, res: NextApiResponse, context: any): Promise<void> {
    const jsonData = await getData();
    res.status(200).json(jsonData)
}
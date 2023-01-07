// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';


// Groq gives us syntax highlighting
const query = groq`*[_type == "device"] {
    _id,
    ...
}`;



type Data = {
  devices: Device[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
 const devices = await sanityClient.fetch(query) 
 console.log(devices);
 res.status(200).json({devices});
}

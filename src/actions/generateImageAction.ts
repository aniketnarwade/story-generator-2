"use server";

import axios from "axios";


export async function generateImage(prompt:string) {
  const resData = await axios.get(
    `https://image.pollinations.ai/prompt/${prompt}`,
    {
      responseType: "arraybuffer",
    }
  );
  let imageUrl :any
  const base64Image = Buffer.from(resData.data, "binary").toString("base64");

  // Format the base64 string with the proper data URI prefix
  const imageDataUri = `data:image/png;base64,${base64Image}`;
  imageUrl = imageDataUri
 return imageUrl
  
};



// export async function generateImage(prompt: string) {
//   const output = (await replicate.run(
//     "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
//     {
//       input: {
//         width: 768,
//         height: 768,
//         prompt: prompt,
//         scheduler: "K_EULER",
//         num_outputs: 1,
//         guidance_scale: 7.5,
//         num_inference_steps: 50,
//       },
//     }
//   )) as any;

//   const imageUrl = output[0];
//   return imageUrl;
// }

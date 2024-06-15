// const express = require("express");
// const axios = require("axios");
// const app = express();
// const port = 3000;

// require("dotenv").config();
// const authHeader = process.env.AUTH_HEADER;
// console.log(authHeader);
// const postUrl = "https://api.d-id.com/talks";
// // const imageUrl =
// //   "https://m.media-amazon.com/images/S/amzn-author-media-prod/7i4p455hk67skr4ksvj1gmui05.jpg";

// const scriptText = "Invest in Stock Market";

// // Helper function to poll the API until the status is 'done'
// const pollForCompletion = async (
//   url,
//   headers,
//   interval = 5000,
//   timeout = 60000
// ) => {
//   const endTime = Date.now() + timeout;
//   while (Date.now() < endTime) {
//     const response = await axios.get(url, { headers });
//     if (response.data.status === "done") {
//       return response.data;
//     }
//     await new Promise((resolve) => setTimeout(resolve, interval));
//   }
//   throw new Error("Polling timed out");
// };

// app.get("/", async (req, res) => {
//   try {
//     // Send POST request to create a video
//     const postResponse = await axios.post(
//       postUrl,
//       {
//         source_url: imageUrl,
//         script: {
//           type: "text",
//           input: scriptText,
//         },
//       },
//       {
//         headers: {
//           Authorization: authHeader,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const videoId = postResponse.data.id;
//     console.log(`Video ID: ${videoId}`);

//     // Poll for completion
//     const getUrl = `${postUrl}/${videoId}`;
//     const finalResponse = await pollForCompletion(getUrl, {
//       Authorization: authHeader,
//     });

//     console.log("Final Response:", finalResponse);

//     // Extract the video URL from the final response
//     const videoUrl = finalResponse.result_url;

//     // Serve the HTML page with the video
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Video Player</title>
//       </head>
//       <body>
//         <h1>Your Video</h1>
//         <video width="640" height="480" controls>
//           <source src="${videoUrl}" type="video/mp4">
//           Your browser does not support the video tag.
//         </video>
//       </body>
//       </html>
//     `;
//     res.send(htmlContent);
//   } catch (error) {
//     console.error(
//       "Error:",
//       error.response ? error.response.data : error.message
//     );
//     res.status(500).send(error.response ? error.response.data : error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
require("dotenv").config();

const app = express();
const port = 4000;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

const authHeader = process.env.AUTH_HEADER;
const postUrl = "https://api.d-id.com/talks";
const imageUrl =
  "https://pbs.twimg.com/profile_images/1559546761450258437/d3Af4cGF_400x400.jpg";

const pollForCompletion = async (
  url,
  headers,
  interval = 5000,
  timeout = 60000
) => {
  const endTime = Date.now() + timeout;
  while (Date.now() < endTime) {
    const response = await axios.get(url, { headers });
    if (response.data.status === "done") {
      return response.data;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error("Polling timed out");
};

app.post("/generate-video", async (req, res) => {
  const scriptText = req.body.scriptText;

  if (!scriptText) {
    return res.status(400).send({ error: "scriptText is required" });
  }

  try {
    const postResponse = await axios.post(
      postUrl,
      {
        source_url: imageUrl,
        script: {
          type: "text",
          input: scriptText,
        },
      },
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );

    const videoId = postResponse.data.id;
    console.log(`Video ID: ${videoId}`);

    const getUrl = `${postUrl}/${videoId}`;
    const finalResponse = await pollForCompletion(getUrl, {
      Authorization: authHeader,
    });

    // console.log("Final Response:", finalResponse);

    const videoUrl = finalResponse.result_url;
    res.json({ videoUrl });
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

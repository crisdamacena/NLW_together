import express from "express";

const app = express();

app.get("/test", (request, response) =>{
  return response.send("OI");
})

app.post("/test-post", (request, response) =>{
  return response.send("TCHAU");
})

app.listen(3000, () => console.log("Server is running"));
import express from 'express'

const app = express();

app.get("/",(req,res) => {
   //  res.send("Hello Express");
  // res.send("<h1>Hello Express</h1>")
res.send(`
    <h1>Hello Server</h1>
    <h2> i am responding from express framework</h2>
    <h3> the code is minimal and easy to return </h3>
    `);
});


// this line must be last line
app.listen(4444,() => console.log("prg1 is runnit at 4444"));

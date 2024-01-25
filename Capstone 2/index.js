import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var todayTaskList = [];
var workTaskList = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.render("index.ejs" , {listType: "/", title: new Date().getDate()+"-"+new Date().getMonth() + "-"+ new Date().getFullYear(), tasks: todayTaskList});
    console.log("get");
});


app.post("/",(req,res) =>{
    todayTaskList.push(req.body["task"]);
    console.log(todayTaskList);
    res.render("index.ejs", {listType: "/", title: new Date().getDate()+"-"+new Date().getMonth() + "-"+ new Date().getFullYear(), tasks: todayTaskList});
});

app.get("/work", (req,res) =>{
    res.render("index.ejs", {listType: "/work", title: "Work", tasks: workTaskList });
});

app.post("/work", (req,res)=>{
    workTaskList.push(req.body["task"]);
    console.log(workTaskList);
    res.render("index.ejs", {listType: "/work", title: "Work", tasks: workTaskList });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
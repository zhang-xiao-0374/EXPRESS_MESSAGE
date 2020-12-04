//module获取
const express=require("express")
const products=require("./src/product")

//创建express服务器
const app=express()

//json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//request处理
app.use((req,res,next)=>{
    console.log("`middleware: all. url: ${req.url}");
     //CROS設定: 全てのドメインに対して許可 
     res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 
     //次の処理
     next();
});
app.post("/",(req,res)=>{
    console.log("post successed");//发送信息成功后表示信息
    let message=req.body.message;
   
    //result 作成
    let result={
        "message":message,
    };
    res.send(result)
});
app.get("/",(req,res)=>{
    
    let id=req.query.id;
    console.log(id);
    //result 作成
    let result={
        "id":id
    };
    res.send(result)
});
//服务器等待
app.listen(3000)
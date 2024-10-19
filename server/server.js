const expresss = require('express')

// 方式1：简单配置cors解决复杂请求的跨域问题，这种写法够用，但是不安全，会默认允许所有额外的请求头，允许所有的http请求方法: GET HEAD PUT PATCH POST DELETE、允许所有的origin不安全
// const cors = require('cors') 

const app = expresss()
const students = [
    {id:'001',name:'张三',age:18},
    {id:'002',name:'李四',age:19},
    {id:'003',name:'王五',age:20}
]

// 方式2： cors中间件配置，解决复杂请求的跨域问题
const cors = require('cors')
const corsOptions = {
    // 允许的源
    origin:'http://127.0.0.1:5500',         
    // 允许的方法
    methods:['GET','POST','PUT','DELETE','HEAD','OPTIONS'],
    // 允许的自定义请求头
    allowedHeaders:['school','city'],
    // 要暴露的响应头( 可选，默认情况下所有的响应头都被保护起来啦导致js获取不到  )
    exposedHeaders:['name'],
    // 预检请求成功的状态码 
    optionsSuccessStatus:222
};
// 使用cors中间件
app.use(cors(corsOptions))  

app.get('/students',(req,res) => {
    // 要暴露的响应头( 默认情况下所有的响应头都被保护起来啦 )
    res.setHeader('name','vicky')
    res.send(students)
})
app.listen(8081,()=>{
    console.log('服务器启动成功!')
})
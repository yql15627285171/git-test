var uname:string = "Runoob"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("名字: "+uname) 
console.log("第一个科目成绩: "+score1) 
console.log("第二个科目成绩: "+score2) 
console.log("总成绩: "+sum)

var sites = { 
   site1:"Runoob", 
    site2: "Google",
   sayHello: function () { } // 类型模板
};

sites.sayHello = function () { return "hello"; }

console.log(sites.sayHello()) 
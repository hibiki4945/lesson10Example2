

// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// 後執行
setTimeout(()=>{
    console.log("3秒後");
}, 3000);

// 後執行
setTimeout(()=>{
    console.log("1秒後");
}, 1000);

// 後執行
setTimeout(()=>{
    console.log("5秒後");
}, 5000);


// 先執行 // 10000行程式碼 要跑6秒
for(let i = 0; i<300000; i++){
    console.log(i);
}

//////////////////////////////////////////////

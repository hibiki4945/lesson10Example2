

// // checkbox
const brunchEl = document.getElementById("brunch");
const riceEl = document.getElementById("rice");
const noodleEl = document.getElementById("noodle");
const buffetEl = document.getElementById("buffet");
const othersEl = document.getElementById("others");

// // 組成 DOM List
const checklist = [brunchEl, riceEl, noodleEl, buffetEl, othersEl];

// // button
const btnEl = document.querySelector("#roll");

// // order
const orderEl = document.getElementById("order");

////////////////////非同步//////////////////////
// 原寫法
// fetch("mealList.json")
//     .then(function(response){
//         //     將json格式資料 轉成 js物件
//         return response.json;
//     })
//     // 確保 .then裡的程式碼 一定是在 資料確定抓回來之後 才執行
//     .then(function(data){
//         // 要做的事 都放在 這個.then 的裡面
//         console.log(data);
//         // 賦值
//         mealList = data;
//     })
    

let mealList = [];
// console.log("抓資料前");
// 簡易寫法
fetch("mealList.json")
    // 當.then內 只有一個變數時(可將 '()' 省略)
    // 當方法(例 res)內 只有 一行程式碼時(可將 '{}' 省略)
    .then(res => res.json())
    .then(data => {
        console.log("fetch 抓完資料了!");
        // console.log(data);
        mealList = data;
        console.log(mealList);
    })
// console.log("抓資料後");
// console.log(mealList);

////////////////////非同步//////////////////////

// // 抓到 空陣列(因 fetch會先進 WebAPIs(因此 此時fetch 未被執行))
// console.log(mealList);

// btnEl.addEventListener("click", ()=>{
//     console.log("EventListener Click");
// })



//////////////////////////////////////////

btnEl.addEventListener("click", ()=>{
  // console.log(checklist);
  // console.dir(brunchEl);
  // console.dir(brunchEl.checked); 

  let checkedList = [];
  checklist.forEach((item) =>{
    if(item.checked){
      checkedList.push(item.value);
    }
    // console.log(item.value, item.checked);
  })
    // console.log(checkedList);
    if(checkedList.length === 0){
        checklist.forEach((item) =>{
              checkedList.push(item.value);
          })
    }


    let filterList = [];

    checkedList.forEach((category) => {
      mealList.forEach((store) => {
        if(store.category.includes(category)){
            if(filterList.includes(store) === false){
              filterList.push(store);
            };
        }
      });
    });

    // console.log(filterList);
    
    const randomNum = Math.floor(Math.random()*filterList.length);
    // console.log(randomNum);
    
    const result = filterList[randomNum].name;
    // console.log(result);
    orderEl.innerText = result;

})
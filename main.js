

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
// // 監聽
btnEl.addEventListener("click", ()=>{
  // console.log(checklist);
  // console.dir(brunchEl);
  // console.dir(brunchEl.checked);

  // 有打勾的類型字串名稱的陣列
  let checkedList = [];
  //            例 ["noodle", ...]
  checklist.forEach((item) =>{
    if(item.checked){
      checkedList.push(item.value);
    }
    // console.log(item.value, item.checked);
  })
    // console.log(checkedList);


    let filterList = [];

    // 此方法 有bug(當有複數Tag時 該物件元素將被 重複存入 filterList)(需用 判斷式(確認 該物件元素 是否已經存在))
    // 勾選的類別名稱字串 類別名稱
    //                   "noodle"
    checkedList.forEach((category) => {
    // 餐廳資料  篩選  店面資料
      mealList.forEach((store) => {
        // [陣列].includes(陣列方法(確認是否有包含))
        // 例 ["noodle", ...]
        if(store.category.includes(category)){
          //             物件裡的一個元素(陣列)
          filterList.push(store);
        }
      });
    });

    // console.log(filterList);
    
    // 利用 filterList 做隨機
    const randomNum = Math.floor(Math.random()*filterList.length);
    // console.log(randomNum);
    
    const result = filterList[randomNum].name;
    // console.log(result);
    orderEl.innerText = result;

})
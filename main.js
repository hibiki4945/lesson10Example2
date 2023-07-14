const mealList = [
  {
      "name": "食在一方",
      "category": ["brunch"],
      "filter": false
  },
  {
      "name": "日十",
      "category": ["brunch"],
      "filter": false
  },
  {
      "name": "鹽行站",
      "category": ["buffet", "rice"],
      "filter": false
  },
  {
      "name": "鍋燒意麵",
      "category": ["noodle"],
      "filter": false
  },
  {
      "name": "炒飯",
      "category": ["rice"],
      "filter": false
  },
  {
      "name": "八方雲集",
      "category": ["others"],
      "filter": false
  },
  {
      "name": "火鍋",
      "category": ["others"],
      "filter": false
  },
  {
      "name": "韓式料理",
      "category": ["rice", "noodle"],
      "filter": false
  },
  {
      "name": "小飯糰大飯糰",
      "category": ["rice"],
      "filter": false
  },
  {
      "name": "後校門滷肉飯",
      "category": ["rice", "noodle"],
      "filter": false
  },
  {
      "name": "魚耶",
      "category": ["brunch", "rice", "noodle"],
      "filter": false
  },
  {
      "name": "吳家鴨香飯",
      "category": ["rice", "noodle"],
      "filter": false
  },
  {
      "name": "施家雞肉飯",
      "category": ["rice"],
      "filter": false
  },
  {
      "name": "黑盤",
      "category": ["rice", "noodle"],
      "filter": false
  },
  {
      "name": "神武拉麵",
      "category": ["noodle"],
      "filter": false
  },
  {
      "name": "森井丼飯",
      "category": ["rice"],
      "filter": false
  },
  {
      "name": "雙醬咖哩",
      "category": ["rice"],
      "filter": false
  },
  {
      "name": "麺や青鈴",
      "category": ["noodle"],
      "filter": false
  },
  {
      "name": "金拱門",
      "category": ["noodle", "rice"],
      "filter": false
  }
]

// checkbox
const brunchEl = document.getElementById("brunch");
const riceEl = document.getElementById("rice");
const noodleEl = document.getElementById("noodle");
const buffetEl = document.getElementById("buffet");
const othersEl = document.getElementById("others");

// 組成 DOM List
const checklist = [brunchEl, riceEl, noodleEl, buffetEl, othersEl];

// button
const btnEl = document.querySelector("#roll");

// order
const orderEl = document.getElementById("order");

// 監聽
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
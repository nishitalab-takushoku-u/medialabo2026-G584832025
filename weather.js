
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log("世界の天気（検索結果1件)")
console.log("経度:"+data.coord.lon);
console.log("緯度:"+data.coord.lat);
console.log("天気:"+data.weather[0].description);
console.log("最低気温:"+data.main.temp_min);
console.log("最高気温:"+data.main.temp_max);
console.log("湿度:"+data.main.humidity);
console.log("風速:"+data.wind.speed);
console.log("風向:"+data.wind.deg);
console.log("都市名:"+data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  div =document.createElement('div#result'); 
  body =document.querySelector('body');
  body.insertAdjacentElement('beforeend',div); 
  

  h1=document.createElement('h1');
  h1.textContent="世界の天気(検索結果は1件)";
  div.insertAdjacentElement('beforeend',h1);




  u =document.createElement('ul'); 
  div.insertAdjacentElement('beforeend',u); 







  l=document.createElement('li'); 
  l.id='kdo';
  l.textContent="経度:"+data.coord.lon; 
  u.insertAdjacentElement('beforeend',l); 


    l=document.createElement('li'); 
  l.id='ido';
  l.textContent="緯度:"+data.coord.lat; 
  u.insertAdjacentElement('beforeend',l); 

  l=document.createElement('li'); 
  l.id='Tnk';
  l.textContent="天気:"+data.weather[0].description; 
  u.insertAdjacentElement('beforeend',l); 


  l=document.createElement('li'); 
  l.id='Im1';
  img=document.createElement('img'); 
  img.setAttribute('src','天気記号8.png'); 
  l.insertAdjacentElement('beforeend',img);
  u.insertAdjacentElement('beforeend',l);

  l=document.createElement('li'); 
  l.id='min';
  l.textContent="最低気温:"+data.main.temp_min; 
  u.insertAdjacentElement('beforeend',l); 

  l=document.createElement('li'); 
  l.id='max'; 
  l.textContent="最高気温:"+data.main.temp_max; 
  u.insertAdjacentElement('beforeend',l); 

  l=document.createElement('li'); 
  l.id='sit'; 
  l.textContent="湿度:"+data.main.humidity; 
  u.insertAdjacentElement('beforeend',l); 

  l=document.createElement('li'); 
  l.id='hus';
  l.textContent="風速:"+data.wind.speed; 
  u.insertAdjacentElement('beforeend',l);

  l=document.createElement('li'); 
  l.id='huk'; 
  l.textContent="風向:"+data.wind.deg; 
  u.insertAdjacentElement('beforeend',l);

  l=document.createElement('li'); 
  l.id='tos'; 
  l.textContent="都市名:"+data.name; 
  u.insertAdjacentElement('beforeend',l);










}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}





////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};


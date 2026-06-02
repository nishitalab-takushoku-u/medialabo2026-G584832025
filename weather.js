
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
 
let Kaisuu=0;
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
  if(data.weather[0].description=="晴天"){
    img.setAttribute('src','太陽アイコン.png');
  }else if(data.weather[0].description=="厚い雲"){
    img.setAttribute('src','天気記号8.png'); 
  }else if(data.weather[0].description=="雲"){
    img.setAttribute('src','天気記号8.png'); 
  }else if(data.weather[0].description=="曇りがち"){
    img.setAttribute('src','天気記号8.png'); 
  }else if(data.weather[0].description=="小雨"){
    img.setAttribute('src','天気の無料アイコン14.png'); 
  }else if(data.weather[0].description=="霧"){
    img.setAttribute('src','天気アイコン霧.png'); 
  }else{

  }


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

    let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {

  if(Kaisuu>0){ 
    div.remove();
  }




  
  let s = document.querySelector('select#Toshimei');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  console.log('ID ' + o.getAttribute('value'));  // id 属性を表示
  sendRequest(o.getAttribute('value'));
  Kaisuu++;
}


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest(value) {
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+value+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
   printDom(data)
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}




/* 小白小雞毛旅行社｜GitHub Pages 靜態網站
   修改每日時刻請直接編輯下面的 DAYS。時間為行程規劃，官方時刻請到連結核對。 */
'use strict';

const LINKS = {
  hsr: 'https://irs.thsrc.com.tw/IMINT/',
  hsrStudent: 'https://www.thsrc.com.tw/ArticleContent/530e869c-479d-441a-a4b4-61a8166827e9',
  bus6739: 'https://beta.taiwantrip.tad.gov.tw/Route/Schedule?routeId=R0099',
  busReserve: 'https://ylbus.fontour.com/',
  bus7329: 'https://beta.taiwantrip.tad.gov.tw/Route/Schedule?routeId=R0007',
  railway: 'https://afrch.forest.gov.tw/0000300',
  railReserve: 'https://afrts.forest.gov.tw/OT01_1.aspx',
  hotel: 'https://33333.com.tw/',
  park: 'https://recreation.forest.gov.tw/Forest/RA?typ=0&typ_id=0500001',
  forestPermit: 'https://pa.forest.gov.tw/',
  hotelMap: 'https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%B1%B1%E9%9D%92%E5%A4%A7%E9%A3%AF%E5%BA%97',
  busStop: 'https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E6%9D%B1%E5%9F%94%E5%85%AC%E8%BB%8A%E7%AB%99',
};

const DAYS = [
  {
    id: 0, date: '11.29', weekday: 'SUN', jp: '星空への旅', english: 'HOSHIZORA NO TABI',
    coverText: '從台北的考場一路南行。當山路漸漸安靜，晚上的星空，就是今天最溫柔的獎勵。',
    icon: '✧', stay: '鹿林天文台・星空過夜', alert: '今日 14:30 已約好嘉義高鐵站包車；高鐵車次須倒推考試結束時間並留足轉乘緩衝。',
    items: [
      {time:'上午',title:'師大附中・多益考試',desc:'先把重要的考試完成，再正式放假。',tag:'考試'},
      {time:'考試後',title:'前往台北車站・搭高鐵南下',desc:'高鐵台北站 → 嘉義站，車次依考試結束時間安排。',tag:'高鐵',link:LINKS.hsr,linkText:'查看高鐵時刻'},
      {time:'14:30',title:'高鐵嘉義站・專車接送',desc:'已約定包車時間，前往鹿林山登山口。',tag:'已約定'},
      {time:'午後',title:'鹿林登山口・徒步上山',desc:'沿山徑前往鹿林天文台。留意天色、路況與保暖。',tag:'健行'},
      {time:'夜晚',title:'鹿林天文台・入住星空',desc:'整理裝備、吃點熱食，若天氣晴朗就一起看星星。',tag:'第一晚'},
    ],
  },
  {
    id: 1, date: '11.30', weekday: 'MON', jp: '森のデート', english: 'MORI NO DEETO',
    coverText: '山裡的第二個早晨，用森林小火車、湖水與慢慢走的午後，換一場不用趕路的約會。',
    icon: '❀', stay: '高山青大飯店・第二晚', alert: '預計 17:30 返回高山青大飯店，最晚以 18:00 為緩衝上限；19:00 要上家教，下午景點採彈性刪減。',
    items: [
      {time:'上午',title:'鹿林天文台・早餐與下山',desc:'步行往東埔停車場附近，確認「上東埔」正式公車站牌。',tag:'下山',link:LINKS.busStop,linkText:'查站牌位置'},
      {time:'約 11:00',title:'東埔停車場附近・候車',desc:'抵達時間為估計；上東埔的班車預定 12:08，避免錯過。',tag:'預估'},
      {time:'12:08',title:'員林客運 6739・上東埔上車',desc:'前往阿里山轉運站，官方平日逐站時刻預定 12:40 抵達。',tag:'客運',link:LINKS.bus6739,linkText:'核對 6739'},
      {time:'12:40',title:'抵達阿里山・前往高山青大飯店',desc:'先寄放行李、吃午餐，並確認晚上家教的網路。',tag:'入住'},
      {time:'14:10',title:'紅色森林小火車・神木線',desc:'若銜接順利，阿里山站 14:10 → 神木站 14:17；另有後續班次。',tag:'可調整',link:LINKS.railway,linkText:'林鐵班表'},
      {time:'午後',title:'巨木群 → 姊妹潭・雙人散策',desc:'欣賞檜木森林、湖畔相思亭，拍兩個人的合照。累了就停下來。',tag:'約會'},
      {time:'17:30',title:'回到高山青大飯店',desc:'以 18:00 前為絕對緩衝，晚餐可外帶或在旅館區解決。',tag:'重要'},
      {time:'19:00',title:'老婆上家教・夜晚休息',desc:'準備電腦、充電與備援網路；早點休息迎接隔天眠月線。',tag:'固定'},
    ],
  },
  {
    id: 2, date: '12.01', weekday: 'TUE', jp: '眠月の約束', english: 'MIANYUE NO YAKUSOKU',
    coverText: '在清晨的森林中前行。沿著老鐵道與隧道尋找石猴，也記得在安全的時間一起回家。',
    icon: '🚂', stay: '夜晚・回到溫暖的家', alert: '重大時間衝突：07:00 起登、11:30 到石猴，若去程 4.5 小時，原路返回也可能需要近 4.5 小時；再加上領行李及轉運站接駁，16:40 公車恐無法兼顧。請按實際進度設定更早折返點，必要時放棄抵達石猴或調整交通；不可為趕車冒險。',
    items: [
      {time:'07:00',title:'高山青大飯店・徒步出發',desc:'帶妥許可、頭燈、雨具、飲水及離線地圖，前往眠月線方向。',tag:'起登'},
      {time:'上午',title:'塔山車站方向・眠月線',desc:'留意現地管制、隧道、鐵橋與崩塌路段，依合法核准範圍通行。',tag:'健行'},
      {time:'11:30 前',title:'石猴車站・目標時間',desc:'這是希望抵達的時間，不是必達要求；依安全折返時間調整。',tag:'目標'},
      {time:'中午後',title:'原路折返・視情況搭沼平線',desc:'如果時間充裕且抵達沼平站，才考慮搭小火車回阿里山站。',tag:'彈性',link:LINKS.railway,linkText:'回程列車時刻'},
      {time:'下午',title:'回高山青・領行李',desc:'預留從飯店步行至轉運站的時間，不能卡到末刻。',tag:'重要',link:LINKS.hotelMap,linkText:'飯店位置'},
      {time:'16:40',title:'台灣好行 7329・阿里山出發',desc:'由阿里山轉運站搭往高鐵嘉義站；使用 7329 主線。',tag:'預定公車',link:LINKS.bus7329,linkText:'核對 7329'},
      {time:'晚間',title:'高鐵嘉義站 → 台北',desc:'視客運實際抵達時間，選擇合適的北上高鐵班次。',tag:'高鐵',link:LINKS.hsr,linkText:'查高鐵車次'},
    ],
  },
];

const RESOURCES = [
  {icon:'🚌',title:'6739 員林客運',desc:'11/30 上東埔 12:08 → 阿里山 12:40，出發前再核對。',url:LINKS.bus6739},
  {icon:'🎟️',title:'員林客運訂位',desc:'確認預約搭車規則與實際座位安排。',url:LINKS.busReserve},
  {icon:'🚍',title:'7329 台灣好行',desc:'12/01 阿里山 16:40 主線回高鐵嘉義站。',url:LINKS.bus7329},
  {icon:'🚂',title:'森林鐵路時刻',desc:'神木線／沼平線最新列車班表。',url:LINKS.railway},
  {icon:'🎫',title:'森林鐵路訂票',desc:'查詢支線車次，依規定購票或現場候車。',url:LINKS.railReserve},
  {icon:'🎓',title:'高鐵大學生優惠',desc:'指定班次 5 折起；需符合在學資格，實際車次依官網。',url:LINKS.hsrStudent},
  {icon:'🏨',title:'高山青大飯店',desc:'已確定入住的園區旅館。',url:LINKS.hotel},
  {icon:'🌲',title:'阿里山園區資訊',desc:'景點、開放情況與官方公告。',url:LINKS.park},
];

const CHECKLIST = [
  '合法入區許可／身分證明',
  '保暖外套與備用乾衣',
  '防滑登山鞋與雨具',
  '頭燈、備用電池',
  '充足飲水與行動糧',
  '離線地圖與行動電源',
  '車票、訂位及包車資訊',
  '兩人住宿／聯絡方式',
  '家教筆電、充電器、熱點',
  '相機／手機、愉快的心情 ♡',
];
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const escapeHTML = s => String(s).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let currentDay = 0;
let toastTimer;
function toast(message){const box=$('#toast'); box.textContent=message; box.classList.add('show');clearTimeout(toastTimer); toastTimer=setTimeout(()=>box.classList.remove('show'),3400)}
function renderDay(index){
  if(!Number.isInteger(index)||index<0||index>=DAYS.length)return;
  currentDay=index;
  $$('.day-tab').forEach((b,i)=>{const chosen=i===index; b.classList.toggle('is-active',chosen);b.setAttribute('aria-selected',String(chosen));b.tabIndex=chosen?0:-1});
  const d=DAYS[index];
  $('#dayPanel').setAttribute('aria-labelledby',`tab-${index}`);
  const timeRows=d.items.map(item=>`<div class="timeline-item"><span class="timeline-time">${escapeHTML(item.time)}</span><span class="timeline-dot" aria-hidden="true"></span><div class="timeline-info"><h4>${escapeHTML(item.title)}<small class="timeline-tag">${escapeHTML(item.tag)}</small></h4><p>${escapeHTML(item.desc)}</p>${item.link?`<a href="${item.link}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.linkText||'查看連結')} ↗</a>`:''}</div></div>`).join('');
  $('#dayPanel').innerHTML=`<div class="day-cover day-theme-${d.id}"><div class="cover-top"><span>SHIRO & HIYOKO TRAVEL</span><b>DAY 0${d.id+1}</b></div><div class="day-cover-ornament" aria-hidden="true">${d.icon}</div><span class="cover-kicker">${escapeHTML(d.english)}</span><h3>${escapeHTML(d.jp)}</h3><p class="cover-desc">${escapeHTML(d.coverText)}</p><div class="cover-stay"><small>今夜の宿 / STAY</small><strong>${escapeHTML(d.stay)}</strong></div></div><div class="timeline"><div class="timeline-head"><strong>${d.date}（${['日','一','二'][d.id]}）時刻表</strong><span>依實際狀況調整</span></div><div class="timeline-list">${timeRows}</div><div class="timeline-alert">${escapeHTML(d.alert)}</div></div>`;
}
function updateCountdown(){
  const now=Date.now();const start=Date.parse('2026-11-29T07:00:00+08:00');const end=Date.parse('2026-12-02T00:00:00+08:00');
  let txt;
  if(now<start){const days=Math.floor((start-now)/86400000);const hours=Math.floor((start-now)%86400000/3600000);txt=`距離我們的阿里山之旅，還有 ${days} 天 ${hours} 小時`}
  else if(now<end)txt='旅程進行中！今天也要一起收藏美好風景 ♡';
  else txt='旅程已成為回憶。下一趟，我們也一起出發 ♡';
  $('#countdownText').textContent=txt;
}
function readChecks(){try{return JSON.parse(localStorage.getItem('hiyoko-alishan-checks-v1')||'[]')}catch{return []}}
function saveChecks(value){try{localStorage.setItem('hiyoko-alishan-checks-v1',JSON.stringify(value))}catch{}}
function updateChecks(){const inputs=$$('#checklistItems input');const done=inputs.filter(i=>i.checked).length;$('#checkCount').textContent=`${done} / ${inputs.length}`;$('#checkProgressBar').style.width=`${(done/inputs.length)*100}%`;saveChecks(inputs.map(i=>i.checked));}
function initChecks(){const data=readChecks();$('#checklistItems').innerHTML=CHECKLIST.map((text,i)=>`<label class="check-item"><input type="checkbox" data-index="${i}" ${data[i]?'checked':''}/><span>${escapeHTML(text)}</span></label>`).join('');$$('#checklistItems input').forEach(i=>i.addEventListener('change',updateChecks));updateChecks();$('#resetChecks').addEventListener('click',()=>{$$('#checklistItems input').forEach(i=>i.checked=false);updateChecks();toast('清單已重置，重新準備出發！')})}
function initLinks(){$('#linksGrid').innerHTML=RESOURCES.map(l=>`<a href="${l.url}" class="link-card reveal" target="_blank" rel="noopener noreferrer"><span class="link-icon" aria-hidden="true">${l.icon}</span><b>${escapeHTML(l.title)}</b><span class="link-description">${escapeHTML(l.desc)}</span><small>開啟官方網站 ↗</small></a>`).join('')}
async function copyText(value){try{await navigator.clipboard.writeText(value);return true}catch{const area=document.createElement('textarea');area.value=value;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();return ok}}
const SUMMARY=`小白小雞毛旅行社｜阿里山・森の物語\n2026/11/29（日）—12/1（二）｜兩人三天兩夜\n\nDAY 1｜11/29 鹿林星空\n上午 多益考試 → 台北搭高鐵 → 嘉義\n14:30 高鐵嘉義站包車 → 鹿林登山口 → 步行鹿林天文台過夜\n\nDAY 2｜11/30 森林約會\n上午 鹿林下山至東埔停車場附近／核對上東埔站\n12:08 6739 上東埔 → 12:40 阿里山\n高山青大飯店寄行李、午餐\n14:10 神木線小火車（可調整）→ 巨木群 → 姊妹潭\n17:30 目標回飯店；19:00 家教\n\nDAY 3｜12/01 眠月之約\n07:00 飯店徒步出發 → 眠月線 → 石猴車站（11:30 前為目標，須依安全折返時間調整）\n折返／有機會再搭沼平線 → 飯店領行李\n16:40 7329 阿里山轉運站 → 高鐵嘉義 → 台北\n※ 眠月線往返時間與 16:40 公車銜接很緊，必須以安全為優先並規劃備案。\n\n官方 6739：https://beta.taiwantrip.tad.gov.tw/Route/Schedule?routeId=R0099\n官方 7329：https://beta.taiwantrip.tad.gov.tw/Route/Schedule?routeId=R0007\n森林鐵路：https://afrch.forest.gov.tw/0000300`;
function makeCalendar(){const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//SHIRO HIYOKO//ALISHAN 2026//ZH-TW','CALSCALE:GREGORIAN','BEGIN:VEVENT','UID:hiyoko-alishan-trip-20261129@shiro-hiyoko','DTSTAMP:20261106T000000Z','DTSTART;VALUE=DATE:20261129','DTEND;VALUE=DATE:20261202','SUMMARY:小白小雞毛旅行社｜阿里山・森の物語','LOCATION:阿里山國家森林遊樂區','DESCRIPTION:11/29 鹿林天文台；11/30 高山青大飯店／19:00 家教；12/1 眠月線／16:40 公車。請確認各交通班次。','END:VEVENT','END:VCALENDAR'];const blob=new Blob([lines.join('\r\n')+'\r\n'],{type:'text/calendar;charset=utf-8'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='小白小雞毛_阿里山之旅_2026.ics';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);toast('已建立行事曆檔案，可以匯入手機行事曆')}
function init(){
  renderDay(0); initChecks(); initLinks(); updateCountdown();setInterval(updateCountdown,60000);
  $$('.day-tab').forEach((b,i)=>b.addEventListener('click',()=>renderDay(i)));
  const tabs=$('.day-tabs');tabs.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const i=(currentDay+(e.key==='ArrowRight'?1:2))%3;renderDay(i);$(`#tab-${i}`).focus()}});
  $$('[data-selectday]').forEach(el=>el.addEventListener('click',()=>renderDay(Number(el.dataset.selectday))));
  $('#addCalendarBtn').addEventListener('click',makeCalendar);
  $('#copySummary').addEventListener('click',async()=>toast(await copyText(SUMMARY)?'三日行程已複製，可以直接傳給老婆 ♡':'無法自動複製，請直接選取行程文字'));
  $('#shareBtn').addEventListener('click',async()=>{if(navigator.share&&location.protocol==='https:'){try{await navigator.share({title:document.title,text:'小白小雞毛旅行社｜阿里山・森の物語',url:location.href})}catch{}}else{toast(await copyText(location.href)?'連結已複製，分享給另一位團員吧 ♡':'複製連結未成功')}});
  $('#printBtn').addEventListener('click',()=>window.print());
  const dialog=$('#mapDialog');const open=()=>{if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','')};
  $('#mapOpenBtn').addEventListener('click',open);$('#mapImageOpenBtn').addEventListener('click',open);$('#closeMapBtn').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close()});
  const updateScroll=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;$('#scrollProgress').style.width=`${h>0?100*window.scrollY/h:0}%`};window.addEventListener('scroll',updateScroll,{passive:true});updateScroll();
  if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>{entries.forEach(item=>{if(item.isIntersecting){item.target.classList.add('is-visible');obs.unobserve(item.target)}})},{threshold:.06,rootMargin:'0px 0px 20px 0px'});$$('.reveal').forEach(el=>obs.observe(el))}else{$$('.reveal').forEach(el=>el.classList.add('is-visible'))}
}
document.addEventListener('DOMContentLoaded',init);

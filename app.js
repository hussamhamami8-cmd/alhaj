const places=[
{name:"المسجد الحرام",tag:"مكة",image:"images/haram.jpg",text:"أقدس مساجد المسلمين، وفيه الكعبة المشرفة.",details:"هنا ستكون صفحة متكاملة للمسجد الحرام: صور متعددة، نبذة، الأعمال المرتبطة بالمكان، ومعلومات يحتاجها الحاج."},
{name:"منى",tag:"مشاعر الحج",image:"images/mina.jpg",text:"من مشاعر الحج، وفيها يقيم الحجاج أيام التشريق.",details:"شرح منى وأيام المبيت ورمي الجمرات مع صور المكان."},
{name:"عرفات",tag:"مشاعر الحج",image:"images/arafat.jpg",text:"المشعر الذي يقف فيه الحجاج يوم عرفة.",details:"شرح يوم عرفة وأعمال الحاج في هذا اليوم مع معرض صور."},
{name:"مزدلفة",tag:"مشاعر الحج",image:"images/muzdalifah.jpg",text:"المشعر الواقع بين عرفات ومنى.",details:"شرح الإفاضة من عرفات والمبيت في مزدلفة والإرشادات العملية."},
{name:"جسر الجمرات",tag:"منى",image:"images/jamarat.jpg",text:"الموقع المخصص لرمي الجمرات.",details:"شرح الجمرات وأيام الرمي والتنبيهات المهمة للحاج."},
{name:"الصفا والمروة",tag:"المسعى",image:"images/safa-marwa.jpg",text:"موضع السعي بين الصفا والمروة.",details:"شرح السعي وعد الأشواط وإرشادات المسعى."}];
const rituals=["الإحرام","الطواف","السعي بين الصفا والمروة","يوم عرفة","المبيت بمزدلفة","رمي الجمرات","طواف الإفاضة","طواف الوداع"];
const duas=["دعاء الإحرام","التلبية","أذكار عامة","دعاء السفر","أدعية مختارة"];
let history=[], favorites=JSON.parse(localStorage.getItem("hajjFav")||"[]");
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

function cards(list=places){$("#placeGrid").innerHTML=list.map((p,i)=>`<article class="card" onclick="openPlace(${i})"><img src="${p.image}" onerror="this.src='images/placeholder.svg'"><div class="card-body"><span class="pill">${p.tag}</span><h3>${p.name}</h3><p>${p.text}</p></div></article>`).join("")}
function showPage(name,push=true){
 if(push)history.pushState({page:name},"","#"+name);
 $("#page").hidden=false;$("#main").style.display="none";$("#pageTitle").textContent={places:"أماكن الحج",rituals:"مناسك الحج",duas:"الأدعية والأذكار",guide:"إرشادات الحاج",favorites:"المفضلة",settings:"الإعدادات"}[name]||"دليل الحاج";
 let html="";
 if(name==="places") html=places.map((p,i)=>`<div class="list-item" onclick="openPlace(${i})"><img src="${p.image}" style="width:62px;height:52px;object-fit:cover;border-radius:12px"><b>${p.name}</b><span class="pill">${p.tag}</span></div>`).join("");
 if(name==="rituals") html=rituals.map((x,i)=>`<div class="list-item"><strong>${i+1}</strong><b>${x}</b><span class="pill">شرح</span></div>`).join("");
 if(name==="duas") html=duas.map(x=>`<div class="list-item"><b>${x}</b><span class="pill">فتح</span></div>`).join("");
 if(name==="guide") html=["الاستعداد للحج","أهم المستلزمات","إرشادات التنقل","إرشادات السلامة","أسئلة شائعة"].map(x=>`<div class="list-item"><b>${x}</b><span>›</span></div>`).join("");
 if(name==="favorites") html=favorites.length?favorites.map(i=>`<div class="list-item" onclick="openPlace(${i})"><b>${places[i].name}</b><span>♥</span></div>`).join(""):"<div class='info'>لا توجد أماكن في المفضلة بعد.</div>";
 if(name==="settings") html=`<div class="list-item"><b>الوضع الداكن</b><button onclick="toggleTheme()">تبديل</button></div><div class="list-item"><b>العمل دون إنترنت</b><span class="pill">مدعوم</span></div><div class="list-item"><b>الإصدار</b><span>1.0</span></div>`;
 $("#pageContent").innerHTML=html;
}
function openPlace(i){
 history.pushState({detail:i},"","#place-"+i);$("#main").style.display="none";$("#page").hidden=true;$("#detail").hidden=false;
 const p=places[i];$("#detailTitle").textContent=p.name;$("#detailContent").innerHTML=`<img class="detail-hero" src="${p.image}" onerror="this.src='images/placeholder.svg'"><div class="info"><span class="pill">${p.tag}</span><h2>${p.name}</h2><p>${p.text}</p><p>${p.details}</p><button class="link" onclick="toggleFavorite(${i})">${favorites.includes(i)?"♥ إزالة من المفضلة":"♡ إضافة إلى المفضلة"}</button></div><div class="info"><b>معرض الصور</b><p>سيُضاف هنا معرض صور المكان عند تجهيز الصور المرخّصة.</p></div>`;
}
function goHome(){history.pushState({page:"home"},"","#home");$("#page").hidden=true;$("#detail").hidden=true;$("#main").style.display="block"}
function back(){if(history.length>1)history.back();else goHome()}
function toggleFavorite(i){favorites=favorites.includes(i)?favorites.filter(x=>x!==i):[...favorites,i];localStorage.setItem("hajjFav",JSON.stringify(favorites));openPlace(i)}
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark"))}
function closeDrawer(){$("#drawer").classList.remove("open");$("#shade").classList.remove("show")}
$$("[data-page]").forEach(b=>b.onclick=()=>{closeDrawer();let p=b.dataset.page;p==="home"?goHome():showPage(p)});
$("#backBtn").onclick=back;$("#detailBack").onclick=back;$("#menuBtn").onclick=()=>{$("#drawer").classList.add("open");$("#shade").classList.add("show")};$("#closeDrawer").onclick=closeDrawer;$("#shade").onclick=closeDrawer;$("#themeBtn").onclick=toggleTheme;
$("#search").oninput=e=>{let q=e.target.value.trim();cards(q?places.filter(p=>(p.name+p.text).includes(q)):places)}
window.onpopstate=()=>{let h=location.hash;if(h.startsWith("#place-")){openPlace(Number(h.split("-")[1]));return}if(h==="#home"||!h){goHome();return}showPage(h.slice(1),false)}
if(localStorage.getItem("dark")==="true")document.body.classList.add("dark");cards();

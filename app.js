const places = [

{
name:"المسجد الحرام",
tag:"مكة المكرمة",
image:"images/haram.jpg",
text:"أعظم مساجد المسلمين، وفيه الكعبة المشرفة.",
details:[
"الطواف حول الكعبة سبعة أشواط.",
"اتبع تعليمات إدارة الحشود والجهات المنظمة.",
"يمكن إضافة معرض صور ومعلومات الخدمات في النسخ القادمة."
]
},

{
name:"منى",
tag:"المشاعر المقدسة",
image:"images/mina.jpg",
text:"من مشاعر الحج، وفيها المبيت خلال أيام التشريق ورمي الجمرات.",
details:[
"الالتزام بمواعيد التفويج.",
"اتباع مسارات المجموعة.",
"الحرص على الراحة وشرب الماء."
]
},

{
name:"عرفات",
tag:"المشاعر المقدسة",
image:"images/arafat.jpg",
text:"المشعر الذي يقف فيه الحجاج يوم عرفة، والوقوف بعرفة ركن الحج الأعظم.",
details:[
"الإكثار من الدعاء والذكر.",
"عرفة كلها موقف.",
"اتباع برنامج التفويج المعتمد."
]
},

{
name:"مزدلفة",
tag:"المشاعر المقدسة",
image:"images/muzdalifah.jpg",
text:"تقع بين عرفات ومنى، وينتقل إليها الحجاج بعد الإفاضة من عرفات.",
details:[
"الالتزام ببرنامج المجموعة.",
"المحافظة على المتعلقات الشخصية.",
"الراحة والاستعداد للانتقال إلى منى."
]
},

{
name:"جسر الجمرات",
tag:"منى",
image:"images/jamarat.jpg",
text:"منشأة حديثة لتنظيم رمي الجمرات في منى.",
details:[
"الرمي في الأوقات الشرعية.",
"اتباع مواعيد التفويج.",
"تجنب الازدحام والمزاحمة."
]
},

{
name:"الصفا والمروة",
tag:"المسجد الحرام",
image:"images/safa-marwa.jpg",
text:"المسعى الذي يكون فيه السعي بين الصفا والمروة.",
details:[
"السعي سبعة أشواط.",
"يبدأ الشوط من الصفا وينتهي بالمروة.",
"احرص على متابعة عدد الأشواط."
]
}

];


const rituals = [

[
"الإحرام",
"النية والدخول في النسك والالتزام بأحكام الإحرام."
],

[
"يوم التروية",
"التوجه إلى منى وفق النسك والبرنامج المعتمد، مع الذكر والتلبية."
],

[
"يوم عرفة",
"الوقوف بعرفة والإكثار من الدعاء والذكر."
],

[
"مزدلفة",
"الإفاضة من عرفة إلى مزدلفة وفق تنظيم المجموعة."
],

[
"يوم النحر",
"رمي جمرة العقبة، ثم بقية أعمال يوم النحر بحسب النسك."
],

[
"طواف الإفاضة",
"الطواف بالبيت سبعة أشواط وفق أحكام الطواف."
],

[
"السعي",
"السعي بين الصفا والمروة سبعة أشواط لمن كان السعي مطلوبًا منه."
],

[
"أيام التشريق",
"رمي الجمرات في أوقاتها وفق الأحكام ومواعيد التفويج."
],

[
"طواف الوداع",
"يكون عند مغادرة مكة وفق أحكامه والاستثناءات الشرعية."
]

];


const duas = [

[
"التلبية",
"لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."
],

[
"دعاء جامع",
"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار."
],

[
"الذكر",
"أكثر من ذكر الله والدعاء بما تيسر من الأدعية المشروعة."
]

];


const guides = [

[
"قبل السفر",
"راجع الوثائق والتصاريح وتعليمات الجهة المنظمة، وجهز احتياجاتك الشخصية."
],

[
"في المشاعر",
"التزم بمواعيد التفويج ولا تنفصل عن مجموعتك دون معرفة نقطة التجمع."
],

[
"الحرارة",
"احرص على الماء والظل وتجنب التعرض الطويل للشمس."
],

[
"الازدحام",
"اتبع المسارات ولا تدفع أو تزاحم الآخرين."
],

[
"الطوارئ",
"عند الحاجة اطلب مساعدة الجهات المختصة أو مقدم الخدمة."
]

];


let favorites =
JSON.parse(localStorage.getItem("hajjFav") || "[]");


const $ = selector =>
document.querySelector(selector);


const $$ = selector =>
document.querySelectorAll(selector);


function cards(list = places){

const element = $("#placeGrid");

if(!element) return;

element.innerHTML = list.map((place,index)=>`

<article class="card" onclick="openPlace(${index})">

<img
src="${place.image}"
onerror="this.src='images/placeholder.svg'"
>

<div class="card-body">

<span class="pill">
${place.tag}
</span>

<h3>
${place.name}
</h3>

<p>
${place.text}
</p>

</div>

</article>

`).join("");

}


function home(){

$("#main").style.display = "block";

$("#page").hidden = true;

$("#detail").hidden = true;

}


function showPage(name,push=true){

if(push){

window.history.pushState(
{type:"page",name:name},
"",
"#"+name
);

}

$("#main").style.display = "none";

$("#detail").hidden = true;

$("#page").hidden = false;


const titles = {

places:"أماكن الحج",

rituals:"مناسك الحج",

duas:"الأدعية والأذكار",

guide:"إرشادات الحاج",

favorites:"المفضلة",

settings:"الإعدادات"

};


$("#pageTitle").textContent =
titles[name] || "دليل الحاج";


let html = "";


if(name === "places"){

html = places.map((place,index)=>`

<div
class="list-item"
onclick="openPlace(${index})"
>

<img
src="${place.image}"
onerror="this.src='images/placeholder.svg'"
style="
width:62px;
height:52px;
object-fit:cover;
border-radius:12px;
"
>

<b>
${place.name}
</b>

<span class="pill">
${place.tag}
</span>

</div>

`).join("");

}


if(name === "rituals"){

html = rituals.map((item,index)=>`

<div class="list-item">

<strong>
${index+1}
</strong>

<b>

${item[0]}

<small
style="
display:block;
color:var(--muted);
font-weight:400;
line-height:1.8;
"
>

${item[1]}

</small>

</b>

</div>

`).join("");

}


if(name === "duas"){

html = duas.map(item=>`

<div class="info">

<span class="pill">
دعاء
</span>

<h3>
${item[0]}
</h3>

<p style="line-height:2">
${item[1]}
</p>

</div>

`).join("");

}


if(name === "guide"){

html = guides.map(item=>`

<div class="info">

<h3>
${item[0]}
</h3>

<p style="line-height:2">
${item[1]}
</p>

</div>

`).join("");

}


if(name === "favorites"){

if(!favorites.length){

html = `
<div class="info">
لا توجد أماكن في المفضلة بعد.
</div>
`;

}else{

html = favorites.map(index=>`

<div
class="list-item"
onclick="openPlace(${index})"
>

<b>
${places[index].name}
</b>

<span>
♥
</span>

</div>

`).join("");

}

}


if(name === "settings"){

html = `

<div class="list-item">

<b>
الوضع الداكن
</b>

<button onclick="toggleTheme()">
تبديل
</button>

</div>


<div class="list-item">

<b>
العمل دون إنترنت
</b>

<span class="pill">
PWA
</span>

</div>


<div class="info">

<h3>
عن التطبيق
</h3>

<p>
دليل الحاج هو تطبيق إرشادي يجمع أهم المعلومات عن المناسك والمشاعر المقدسة والأدعية والإرشادات في واجهة بسيطة.
</p>

<p>
المعلومات التفصيلية في المسائل الشرعية يُستحسن مراجعتها مع عالم أو مرشد حج موثوق.
</p>

</div>

`;

}


$("#pageContent").innerHTML = html;

}


function openPlace(index,push=true){

if(push){

window.history.pushState(
{type:"detail",index:index},
"",
"#place-"+index
);

}


$("#main").style.display = "none";

$("#page").hidden = true;

$("#detail").hidden = false;


const place = places[index];


$("#detailTitle").textContent =
place.name;


$("#favBtn").textContent =
favorites.includes(index) ? "♥" : "♡";


$("#detailContent").innerHTML = `

<img
class="detail-hero"
src="${place.image}"
onerror="this.src='images/placeholder.svg'"
>


<div class="info">

<span class="pill">
${place.tag}
</span>

<h2>
${place.name}
</h2>

<p>
${place.text}
</p>


<h3>
معلومات مهمة
</h3>


<ul>

${place.details.map(detail=>`

<li style="
margin:8px 0;
line-height:1.8;
">

${detail}

</li>

`).join("")}

</ul>


<button
class="link"
onclick="toggleFavorite(${index})"
>

${favorites.includes(index)
?"♥ إزالة من المفضلة"
:"♡ إضافة إلى المفضلة"}

</button>

</div>


<div class="info">

<h3>
الصور
</h3>

<p>
سيتم إضافة معرض صور حقيقي لكل مكان في المرحلة التالية.
</p>

</div>

`;

}


function toggleFavorite(index){

if(favorites.includes(index)){

favorites =
favorites.filter(item=>item !== index);

}else{

favorites.push(index);

}


localStorage.setItem(
"hajjFav",
JSON.stringify(favorites)
);


openPlace(index,false);

}


function toggleTheme(){

document.body.classList.toggle("dark");

localStorage.setItem(
"dark",
document.body.classList.contains("dark")
);

}


function closeDrawer(){

$("#drawer").classList.remove("open");

$("#shade").classList.remove("show");

}


function back(){

window.history.back();

}


$("#backBtn").onclick = back;

$("#detailBack").onclick = back;


$("#menuBtn").onclick = ()=>{

$("#drawer").classList.add("open");

$("#shade").classList.add("show");

};


$("#closeDrawer").onclick =
closeDrawer;


$("#shade").onclick =
closeDrawer;


$("#themeBtn").onclick =
toggleTheme;


$$("[data-page]").forEach(button=>{

button.onclick = ()=>{

closeDrawer();

const page =
button.dataset.page;


if(page === "home"){

window.history.pushState(
{type:"home"},
"",
"#home"
);

home();

}else{

showPage(page);

}

};

});


$("#search").oninput = event=>{

const query =
event.target.value.trim();


if(!query){

cards();

return;

}


const results =
places.filter(place=>

(place.name +
place.text +
place.tag)
.includes(query)

);


cards(results);

};


window.addEventListener("popstate",()=>{

const hash =
location.hash;


if(hash.startsWith("#place-")){

const index =
Number(hash.slice(7));

openPlace(index,false);

}

else if(hash && hash !== "#home"){

showPage(
hash.slice(1),
false
);

}

else{

home();

}

});


if(
localStorage.getItem("dark") === "true"
){

document.body.classList.add("dark");

}


cards();


if("serviceWorker" in navigator){

navigator.serviceWorker
.register("sw.js")
.catch(()=>{});

          }

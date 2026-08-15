/* =========================================================
   دليل الحاج — app.js v7 FINAL
   متوافق مع index.html الحالي
   ========================================================= */


/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
  "https://tmmspfxkmqsivpxchfkk.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_e_UeWsqQTEk0GUhdpMDHYg_nAC3b7vZ";


/* =========================================================
   البيانات الأساسية
   ========================================================= */

const places = [
  {
    name:"المسجد الحرام",
    tag:"مكة المكرمة",
    image:"images/haram.jpg",
    text:"أعظم مساجد المسلمين، وفيه الكعبة المشرفة.",
    details:[
      "الطواف حول الكعبة سبعة أشواط.",
      "اتبع تعليمات إدارة الحشود والجهات المنظمة.",
      "حافظ على هدوئك ولا تزاحم الآخرين."
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
    text:"المشعر الذي يقف فيه الحجاج يوم عرفة.",
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
      "الاستعداد للانتقال إلى منى."
    ]
  },
  {
    name:"جسر الجمرات",
    tag:"منى",
    image:"images/jamarat.jpg",
    text:"منشأة حديثة لتنظيم رمي الجمرات في منى.",
    details:[
      "الرمي في أوقاته الشرعية.",
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


const journey = [
  {
    id:"preparation",
    title:"الاستعداد للحج",
    location:"قبل الانطلاق",
    image:"images/haram.jpg",
    description:"استعد لرحلتك قبل الانطلاق وتأكد من الوثائق والتصاريح وترتيبات السكن والنقل.",
    steps:[
      "تأكد من الوثائق والتصاريح المطلوبة.",
      "جهز حقيبتك ومستلزماتك الشخصية.",
      "احتفظ بمعلومات المجموعة ونقطة التجمع.",
      "راجع التعليمات الرسمية الخاصة بموسم الحج."
    ]
  },
  {
    id:"ihram",
    title:"الإحرام",
    location:"الميقات",
    image:"images/ihram.jpg",
    description:"يتهيأ الحاج للإحرام ويدخل في النسك بالنية وفق نوع الحج الذي يؤديه.",
    steps:[
      "الاغتسال والتنظف لمن تيسر له ذلك.",
      "لبس ملابس الإحرام للرجل حسب الأحكام المعروفة.",
      "النية والدخول في النسك.",
      "الإكثار من التلبية."
    ]
  },
  {
    id:"mina",
    title:"يوم التروية",
    location:"منى",
    image:"images/mina.jpg",
    description:"يتوجه الحاج إلى منى وفق النسك والبرنامج التنظيمي المعتمد.",
    steps:[
      "التوجه إلى منى وفق برنامج المجموعة.",
      "الإكثار من التلبية والذكر.",
      "الالتزام بمواعيد التفويج.",
      "الراحة والاستعداد ليوم عرفة."
    ]
  },
  {
    id:"arafat",
    title:"يوم عرفة",
    location:"عرفات",
    image:"images/arafat.jpg",
    description:"الوقوف بعرفة هو ركن الحج الأعظم، ويكثر الحاج فيه من الدعاء والذكر.",
    steps:[
      "الوصول إلى عرفات وفق برنامج التفويج.",
      "الوقوف بعرفة.",
      "الإكثار من الدعاء والذكر.",
      "الاستعداد للإفاضة إلى مزدلفة."
    ]
  },
  {
    id:"muzdalifah",
    title:"مزدلفة",
    location:"مزدلفة",
    image:"images/muzdalifah.jpg",
    description:"بعد الإفاضة من عرفات يتوجه الحجاج إلى مزدلفة وفق التنظيم المعتمد.",
    steps:[
      "الإفاضة من عرفات إلى مزدلفة.",
      "الالتزام بتعليمات المجموعة.",
      "المبيت بحسب الأحكام الشرعية والبرنامج.",
      "الاستعداد للانتقال إلى منى."
    ]
  },
  {
    id:"sacrifice",
    title:"يوم النحر",
    location:"منى",
    image:"images/day-sacrifice.jpg",
    description:"يوم عظيم من أيام الحج، وله أعمال متعددة تختلف تفاصيل ترتيبها بحسب نوع النسك.",
    steps:[
      "رمي جمرة العقبة.",
      "الذبح لمن كان عليه هدي.",
      "الحلق أو التقصير.",
      "طواف الإفاضة والسعي بحسب النسك."
    ]
  },
  {
    id:"tawaf",
    title:"طواف الإفاضة",
    location:"المسجد الحرام",
    image:"images/haram.jpg",
    description:"يطوف الحاج بالبيت سبعة أشواط وفق أحكام الطواف.",
    steps:[
      "الاستعداد للطواف.",
      "الطواف سبعة أشواط.",
      "الدعاء والذكر بما تيسر.",
      "الانتقال إلى السعي إذا كان مطلوبًا."
    ]
  },
  {
    id:"sai",
    title:"السعي",
    location:"الصفا والمروة",
    image:"images/safa-marwa.jpg",
    description:"السعي بين الصفا والمروة سبعة أشواط لمن كان السعي مطلوبًا منه.",
    steps:[
      "البدء من الصفا.",
      "إكمال سبعة أشواط.",
      "ينتهي الشوط السابع عند المروة.",
      "المحافظة على الهدوء وعدم إيذاء الآخرين."
    ]
  },
  {
    id:"jamarat",
    title:"أيام التشريق",
    location:"منى",
    image:"images/jamarat.jpg",
    description:"من أعمال أيام التشريق رمي الجمرات وفق الأحكام والمواعيد التنظيمية.",
    steps:[
      "الالتزام بمواعيد التفويج.",
      "رمي الجمرات في أوقاتها.",
      "اتباع المسارات المحددة.",
      "العودة إلى السكن أو المخيم وفق البرنامج."
    ]
  },
  {
    id:"farewell",
    title:"طواف الوداع",
    location:"المسجد الحرام",
    image:"images/farewell-tawaf.jpg",
    description:"يكون طواف الوداع عند إرادة مغادرة مكة وفق أحكامه والاستثناءات الشرعية.",
    steps:[
      "التأكد من موعد المغادرة.",
      "أداء طواف الوداع وفق الحكم الشرعي.",
      "الاستعداد للعودة.",
      "الالتزام بتعليمات النقل والمغادرة."
    ]
  }
];


const duas = [
  {
    title:"التلبية",
    text:"لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."
  },
  {
    title:"دعاء جامع",
    text:"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار."
  },
  {
    title:"الدعاء والذكر",
    text:"يكثر الحاج من ذكر الله والدعاء بما تيسر من الأدعية المشروعة."
  }
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
    "احرص على شرب الماء واستخدام وسائل الوقاية من الشمس وتجنب التعرض الطويل للحرارة."
  ],
  [
    "الازدحام",
    "اتبع المسارات ولا تدفع أو تزاحم الآخرين."
  ],
  [
    "الطوارئ",
    "عند الحاجة اطلب المساعدة من الجهات المختصة أو مقدم الخدمة."
  ]
];


/* =========================================================
   التخزين المحلي
   ========================================================= */

function readStorage(key,fallback){

  try{

    const value =
      JSON.parse(localStorage.getItem(key));

    return Array.isArray(value)
      ? value
      : fallback;

  }catch{

    return fallback;

  }

}


let favorites =
  readStorage("hajjFav",[]);

let completed =
  readStorage("hajjCompleted",[]);


let currentPilgrim =
  JSON.parse(
    localStorage.getItem("hajjPilgrim") || "null"
  );


let currentLocation = null;


/* =========================================================
   DOM
   ========================================================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);


/* =========================================================
   الحفظ
   ========================================================= */

function saveData(){

  localStorage.setItem(
    "hajjFav",
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    "hajjCompleted",
    JSON.stringify(completed)
  );

}


/* =========================================================
   حماية النص
   ========================================================= */

function escapeHTML(value){

  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


/* =========================================================
   التقدم
   ========================================================= */

function progressData(){

  const done =
    journey.filter(
      item => completed.includes(item.id)
    ).length;

  return {
    done,
    total:journey.length,
    percent:
      journey.length
      ? Math.round(
          done / journey.length * 100
        )
      : 0
  };

}


/* =========================================================
   Supabase RPC
   ========================================================= */

async function supabaseRPC(functionName,body){

  const response =
    await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/${functionName}`,
      {
        method:"POST",
        headers:{
          "apikey":SUPABASE_KEY,
          "Authorization":`Bearer ${SUPABASE_KEY}`,
          "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
      }
    );


  let data = null;

  try{

    data = await response.json();

  }catch{

    data = null;

  }


  if(!response.ok){

    console.error(
      "Supabase RPC Error:",
      response.status,
      data
    );

    throw new Error(
      data?.message ||
      data?.error_description ||
      "تعذر الاتصال بقاعدة البيانات"
    );

  }


  return data;

}


/* =========================================================
   موقع الحاج
   ========================================================= */

async function loadPilgrimLocation(){

  if(
    !currentPilgrim?.name ||
    !currentPilgrim?.code
  ){

    currentLocation = null;
    return null;

  }


  try{

    const result =
      await supabaseRPC(
        "get_pilgrim_locations",
        {
          p_name:currentPilgrim.name,
          p_code:currentPilgrim.code
        }
      );


    currentLocation =
      Array.isArray(result) && result.length
      ? result[0]
      : null;


    return currentLocation;

  }catch(error){

    console.error(
      "Location error:",
      error
    );

    currentLocation = null;

    return null;

  }

}


/* =========================================================
   خريطة الحاج
   ========================================================= */

function openPilgrimMap(){

  if(!currentLocation)
    return;


  const lat =
    Number(currentLocation.latitude);

  const lng =
    Number(currentLocation.longitude);


  if(
    !Number.isFinite(lat) ||
    !Number.isFinite(lng)
  ){

    alert(
      "إحداثيات الموقع غير متوفرة حاليًا."
    );

    return;

  }


  const url =
    `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   تحديث واجهة الحاج
   ========================================================= */

function updatePilgrimUI(){

  const name =
    currentPilgrim?.name || "زائر";


  $$(".pilgrim-name").forEach(
    element => {
      element.textContent = name;
    }
  );


  const mainName =
    $("#pilgrimName");

  if(mainName)
    mainName.textContent =
      currentPilgrim?.name || "الحاج";


  const drawerName =
    $("#drawerUserName");

  if(drawerName)
    drawerName.textContent = name;


  const drawerStatus =
    $("#drawerUserStatus");

  if(drawerStatus)
    drawerStatus.textContent =
      currentPilgrim
      ? "بطاقة الحاج"
      : "وضع الزائر";

}


/* =========================================================
   بطاقة الحاج
   ========================================================= */

function renderPilgrimPage(){

  if(!currentPilgrim){

    return `

      <div class="info empty-state visitor-card">

        <div class="empty-icon">👤</div>

        <span class="pill">
          وضع الزائر
        </span>

        <h3>
          أنت تتصفح كزائر
        </h3>

        <p>
          يمكنك استخدام جميع ميزات دليل الحاج
          واستكشاف الأماكن والمناسك والأدعية والإرشادات.
        </p>

        <button
          class="primary-btn"
          onclick="openPilgrimLogin()"
        >
          👤 دخول بطاقة الحاج
        </button>

      </div>

    `;

  }


  let locationHTML = "";


  if(currentLocation){

    const lat =
      currentLocation.latitude;

    const lng =
      currentLocation.longitude;


    const validCoordinates =
      Number.isFinite(Number(lat)) &&
      Number.isFinite(Number(lng));


    locationHTML = `

      <div class="info pilgrim-location-card">

        <div class="pilgrim-location-head">

          <div>

            <span class="pill">
              📍 موقع الحاج
            </span>

            <h3>
              ${escapeHTML(
                currentLocation.name ||
                "الموقع الحالي"
              )}
            </h3>

          </div>

          <span class="location-status">
            ● متاح
          </span>

        </div>


        <div class="location-coordinates">

          <div>
            <small>خط العرض</small>
            <b>${lat ?? "—"}</b>
          </div>

          <div>
            <small>خط الطول</small>
            <b>${lng ?? "—"}</b>
          </div>

        </div>


        <p class="muted-note">
          آخر تحديث:
          ${
            currentLocation.updated_at
            ? formatDate(currentLocation.updated_at)
            : "غير معروف"
          }
        </p>


        ${
          validCoordinates
          ?
          `
            <button
              class="primary-btn"
              onclick="openPilgrimMap()"
            >
              🗺️ فتح الموقع على الخريطة
            </button>
          `
          :
          ""
        }


        <button
          class="primary-btn"
          onclick="refreshPilgrimLocation()"
        >
          🔄 تحديث الموقع
        </button>

      </div>

    `;

  }else{

    locationHTML = `

      <div class="info pilgrim-location-card">

        <span class="pill">
          📍 موقع الحاج
        </span>

        <h3>
          لا يوجد موقع متاح حاليًا
        </h3>

        <p>
          لم يتم العثور على موقع مشارك لهذا الحاج حتى الآن.
        </p>

        <button
          class="primary-btn"
          onclick="refreshPilgrimLocation()"
        >
          🔄 تحديث البيانات
        </button>

      </div>

    `;

  }


  return `

    <div class="pilgrim-profile">

      <div class="pilgrim-profile-icon">
        👤
      </div>

      <div>

        <span class="pill">
          بطاقة الحاج
        </span>

        <h2>
          ${escapeHTML(currentPilgrim.name)}
        </h2>

        <p>
          تم التحقق من بيانات الحاج.
        </p>

      </div>

    </div>


    <div class="info">

      <h3>
        معلومات الحساب
      </h3>

      <div class="pilgrim-info-row">

        <span>
          اسم الحاج
        </span>

        <b>
          ${escapeHTML(currentPilgrim.name)}
        </b>

      </div>


      <div class="pilgrim-info-row">

        <span>
          معرف المستخدم
        </span>

        <b class="small-code">
          ${escapeHTML(currentPilgrim.user_id)}
        </b>

      </div>

    </div>


    ${locationHTML}


    <div class="info">

      <h3>
        خصوصية الموقع
      </h3>

      <p>
        يعرض التطبيق الموقع المرتبط ببطاقة هذا الحاج فقط.
      </p>

    </div>


    <div class="info">

      <button
        class="danger-btn"
        onclick="logoutPilgrim()"
      >
        تسجيل الخروج
      </button>

    </div>

  `;

}


/* =========================================================
   نافذة الدخول الداخلية
   ========================================================= */

function createLoginModal(){

  if($("#pilgrimLoginModal"))
    return;


  const modal =
    document.createElement("div");


  modal.id =
    "pilgrimLoginModal";


  modal.innerHTML = `

    <div class="pilgrim-login-overlay">

      <div class="pilgrim-login-box">

        <button
          class="pilgrim-close"
          onclick="closePilgrimLogin()"
        >
          ×
        </button>


        <div class="pilgrim-login-icon">
          👤
        </div>


        <span class="pill">
          بطاقة الحاج
        </span>


        <h2>
          تسجيل دخول الحاج
        </h2>


        <p>
          أدخل اسم الحاج والشفرة الخاصة بك.
        </p>


        <label>
          اسم الحاج
        </label>


        <input
          id="pilgrimName"
          type="text"
          autocomplete="name"
          placeholder="مثال: اسم الحاج"
        >


        <label>
          الشفرة الخاصة
        </label>


        <input
          id="pilgrimCode"
          type="password"
          autocomplete="off"
          placeholder="أدخل الشفرة"
        >


        <button
          class="primary-btn"
          onclick="submitPilgrimLogin()"
        >
          دخول بطاقة الحاج
        </button>


        <div
          id="pilgrimLoginMessage"
          class="pilgrim-login-message"
        ></div>

      </div>

    </div>

  `;


  document.body.appendChild(modal);

}


function openPilgrimLogin(){

  createLoginModal();


  $("#pilgrimLoginModal")
    ?.classList.add("show");


  $("#pilgrimName")?.focus();

}


function closePilgrimLogin(){

  $("#pilgrimLoginModal")
    ?.classList.remove("show");

}


function showLoginMessage(message,error){

  const element =
    $("#pilgrimLoginMessage");

  if(!element)
    return;


  element.textContent =
    message;


  element.className =
    "pilgrim-login-message " +
    (error ? "error" : "success");

}


async function submitPilgrimLogin(){

  const name =
    $("#pilgrimName")?.value || "";


  const code =
    $("#pilgrimCode")?.value || "";


  await loginPilgrim(
    name,
    code
  );

}


/* =========================================================
   تسجيل الدخول من داخل التطبيق
   ========================================================= */

async function loginPilgrim(name,code){

  name =
    String(name || "").trim();

  code =
    String(code || "").trim();


  if(!name){

    showLoginMessage(
      "اكتب اسم الحاج أولًا.",
      true
    );

    return;

  }


  if(!code){

    showLoginMessage(
      "اكتب الشفرة الخاصة.",
      true
    );

    return;

  }


  showLoginMessage(
    "جارٍ التحقق من بيانات الحاج...",
    false
  );


  try{

    const result =
      await supabaseRPC(
        "check_pilgrim",
        {
          p_name:name,
          p_code:code
        }
      );


    if(
      !Array.isArray(result) ||
      !result.length
    ){

      showLoginMessage(
        "اسم الحاج أو الشفرة غير صحيحة.",
        true
      );

      return;

    }


    const pilgrim =
      result[0];


    currentPilgrim = {
      id:pilgrim.id,
      user_id:pilgrim.user_id,
      name:pilgrim.name,
      code:pilgrim.code
    };


    localStorage.setItem(
      "hajjPilgrim",
      JSON.stringify(currentPilgrim)
    );


    localStorage.removeItem(
      "hajjGuest"
    );


    closePilgrimLogin();


    await loadPilgrimLocation();


    updatePilgrimUI();


    showPage(
      "pilgrim",
      true
    );


  }catch(error){

    console.error(error);


    showLoginMessage(
      "حدث خطأ أثناء الاتصال. تأكد من اتصال الإنترنت ثم حاول مرة أخرى.",
      true
    );

  }

}


/* =========================================================
   تسجيل الخروج
   ========================================================= */

function logoutPilgrim(){

  if(
    !confirm(
      "هل تريد تسجيل الخروج من بطاقة الحاج؟"
    )
  )
    return;


  currentPilgrim = null;
  currentLocation = null;


  localStorage.removeItem(
    "hajjPilgrim"
  );


  showPage(
    "settings",
    true
  );


  updatePilgrimUI();

}


/* =========================================================
   الرئيسية
   ========================================================= */

function home(push=false){

  if(push){

    history.pushState(
      {page:"home"},
      "",
      "#home"
    );

  }


  const main =
    $("#main");

  const page =
    $("#page");

  const detail =
    $("#detail");


  if(main){

    main.style.display =
      "block";

  }


  if(page)
    page.hidden = true;


  if(detail)
    detail.hidden = true;


  updateBottomNav("home");


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* =========================================================
   البطاقات
   ========================================================= */

function cards(list=places){

  const element =
    $("#placeGrid");


  if(!element)
    return;


  if(!list.length){

    element.innerHTML = `

      <div class="info empty-state">

        <div class="empty-icon">
          ⌕
        </div>

        <h3>
          لا توجد نتائج
        </h3>

        <p>
          جرّب البحث باسم المكان أو المشعر.
        </p>

      </div>

    `;

    return;

  }


  element.innerHTML =
    list.map(place => {

      const index =
        places.indexOf(place);


      const fav =
        favorites.includes(index);


      return `

        <article
          class="card"
          onclick="openPlace(${index})"
        >

          <div class="card-image-wrap">

            <img
              src="${place.image}"
              alt="${escapeHTML(place.name)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
            >


            <button
              class="card-fav ${fav ? "active" : ""}"
              aria-label="المفضلة"
              onclick="
                event.stopPropagation();
                toggleFavorite(${index})
              "
            >
              ${fav ? "♥" : "♡"}
            </button>

          </div>


          <div class="card-body">

            <span class="pill">
              ${escapeHTML(place.tag)}
            </span>


            <h3>
              ${escapeHTML(place.name)}
            </h3>


            <p>
              ${escapeHTML(place.text)}
            </p>


            <span class="card-more">
              عرض التفاصيل ←
            </span>

          </div>

        </article>

      `;

    }).join("");

}


/* =========================================================
   الصفحات
   ========================================================= */

function showPage(name,push=true){

  if(push){

    history.pushState(
      {type:"page",name:name},
      "",
      "#"+name
    );

  }


  const main =
    $("#main");

  const page =
    $("#page");

  const detail =
    $("#detail");


  if(main)
    main.style.display = "none";


  if(detail)
    detail.hidden = true;


  if(page)
    page.hidden = false;


  const titles = {

    places:"أماكن الحج",
    rituals:"رحلة الحج",
    duas:"الأدعية والأذكار",
    guide:"إرشادات الحاج",
    favorites:"المفضلة",
    settings:"الإعدادات",
    pilgrim:"بطاقة الحاج"

  };


  const title =
    $("#pageTitle");


  if(title){

    title.textContent =
      titles[name] || "دليل الحاج";

  }


  const content =
    $("#pageContent");


  if(!content)
    return;


  let html = "";


  /* =====================================================
     الأماكن
     ===================================================== */

  if(name === "places"){

    html = `

      <div class="page-intro">

        <span class="pill">
          استكشف
        </span>

        <h2>
          أماكن ومشاعر الحج
        </h2>

        <p>
          تعرف على أبرز الأماكن المرتبطة برحلة الحج.
        </p>

      </div>


      <div class="list-stack">

        ${places.map((p,i) => `

          <div
            class="list-item clickable"
            onclick="openPlace(${i})"
          >

            <img
              src="${p.image}"
              alt="${escapeHTML(p.name)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
            >


            <div>

              <b>
                ${escapeHTML(p.name)}
              </b>

              <small>
                ${escapeHTML(p.tag)}
              </small>

            </div>


            <span>
              ‹
            </span>

          </div>

        `).join("")}

      </div>

    `;

  }


  /* =====================================================
     المناسك
     ===================================================== */

  else if(name === "rituals"){

    const p =
      progressData();


    html = `

      <div class="progress-hero">

        <div>

          <span>
            رحلة الحج
          </span>

          <h2>
            ${p.percent}% مكتمل
          </h2>

          <p>
            أنجزت ${p.done} من ${p.total} مراحل
          </p>

        </div>


        <div
          class="progress-ring"
          style="--progress:${p.percent}%"
        >

          <b>
            ${p.percent}%
          </b>

        </div>

      </div>


      <div class="journey-list">

        ${journey.map((item,i) => {

          const done =
            completed.includes(item.id);


          return `

            <div
              class="journey-row ${done ? "done" : ""}"
              onclick="openJourney(${i})"
            >

              <div class="journey-num">
                ${done ? "✓" : i+1}
              </div>


              <img
                src="${item.image}"
                alt="${escapeHTML(item.title)}"
                loading="lazy"
                onerror="this.onerror=null;this.src='images/placeholder.svg'"
              >


              <div class="journey-text">

                <b>
                  ${escapeHTML(item.title)}
                </b>

                <small>
                  ${escapeHTML(item.location)}
                </small>

              </div>


              <span>
                ›
              </span>

            </div>

          `;

        }).join("")}

      </div>

    `;

  }


  /* =====================================================
     الأدعية
     ===================================================== */

  else if(name === "duas"){

    html = `

      <div class="page-intro">

        <span class="pill">
          ذكر ودعاء
        </span>

        <h2>
          أدعية مختارة
        </h2>

        <p>
          اقرأ وكرر ما تيسر من الذكر والدعاء.
        </p>

      </div>

      ${duas.map((item,i) => `

        <div class="info dua-card">

          <div class="dua-number">
            ${i+1}
          </div>

          <div>

            <span class="pill">
              دعاء
            </span>

            <h3>
              ${escapeHTML(item.title)}
            </h3>

            <p>
              ${escapeHTML(item.text)}
            </p>

          </div>

        </div>

      `).join("")}

    `;

  }


  /* =====================================================
     الإرشادات
     ===================================================== */

  else if(name === "guide"){

    html = `

      <div class="page-intro">

        <span class="pill">
          رفيقك في الرحلة
        </span>

        <h2>
          إرشادات مهمة
        </h2>

        <p>
          نصائح عامة تساعدك على رحلة أكثر تنظيمًا وأمانًا.
        </p>

      </div>

      ${guides.map(item => `

        <div class="info guide-card">

          <div class="guide-icon">
            ✓
          </div>

          <div>

            <h3>
              ${escapeHTML(item[0])}
            </h3>

            <p>
              ${escapeHTML(item[1])}
            </p>

          </div>

        </div>

      `).join("")}

    `;

  }


  /* =====================================================
     المفضلة
     ===================================================== */

  else if(name === "favorites"){

    const valid =
      favorites.filter(
        index => places[index]
      );


    if(valid.length){

      html = `

        <div class="page-intro">

          <span class="pill">
            محفوظاتك
          </span>

          <h2>
            الأماكن المفضلة
          </h2>

          <p>
            كل الأماكن التي حفظتها للوصول السريع.
          </p>

        </div>


        ${valid.map(index => `

          <div
            class="list-item clickable"
            onclick="openPlace(${index})"
          >

            <img
              src="${places[index].image}"
              alt="${escapeHTML(places[index].name)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
            >


            <div>

              <b>
                ${escapeHTML(places[index].name)}
              </b>

              <small>
                ${escapeHTML(places[index].tag)}
              </small>

            </div>


            <button
              class="mini-remove"
              onclick="
                event.stopPropagation();
                toggleFavorite(${index})
              "
            >
              ♥
            </button>

          </div>

        `).join("")}

      `;

    }else{

      html = `

        <div class="info empty-state">

          <div class="empty-icon">
            ♡
          </div>

          <h3>
            المفضلة فارغة
          </h3>

          <p>
            افتح أي مكان واضغط على القلب لإضافته هنا.
          </p>

          <button
            class="primary-btn"
            onclick="showPage('places')"
          >
            استكشاف الأماكن
          </button>

        </div>

      `;

    }

  }


  /* =====================================================
     بطاقة الحاج
     ===================================================== */

  else if(name === "pilgrim"){

    html =
      renderPilgrimPage();

  }


  /* =====================================================
     الإعدادات
     ===================================================== */

  else if(name === "settings"){

    const dark =
      document.body.classList.contains("dark");


    const p =
      progressData();


    html = `

      <div
        class="info pilgrim-settings-card"
        onclick="${
          currentPilgrim
          ? "showPage('pilgrim')"
          : "openPilgrimLogin()"
        }"
      >

        <div class="pilgrim-settings-icon">
          👤
        </div>

        <div>

          <span class="pill">
            بطاقة الحاج
          </span>

          <h3 class="pilgrim-name">
            ${
              currentPilgrim
              ? escapeHTML(currentPilgrim.name)
              : "تسجيل دخول الحاج"
            }
          </h3>

          <p>
            ${
              currentPilgrim
              ? "عرض بيانات الحاج والموقع"
              : "أدخل اسم الحاج والشفرة الخاصة"
            }
          </p>

        </div>

      </div>


      <div class="settings-card">

        <div>

          <b>
            الوضع الداكن
          </b>

          <small>
            ${dark ? "مفعّل" : "غير مفعّل"}
          </small>

        </div>


        <button
          class="theme-switch ${dark ? "on" : ""}"
          onclick="toggleTheme()"
        >

          <span></span>

        </button>

      </div>


      <div class="info">

        <h3>
          تقدم الرحلة
        </h3>

        <p>
          أنجزت ${p.done} من ${p.total}
          مراحل (${p.percent}%).
        </p>

        <button
          class="danger-btn"
          onclick="resetProgress()"
        >
          إعادة ضبط تقدم الرحلة
        </button>

      </div>


      <div class="info">

        <h3>
          حول التطبيق
        </h3>

        <p>
          دليل الحاج رفيق رقمي للمعلومات الأساسية
          المتعلقة بالمناسك والأماكن والأدعية والإرشادات.
        </p>

        <p class="muted-note">
          في المسائل الشرعية التفصيلية يُرجع إلى عالم
          أو مرشد حج موثوق.
        </p>

      </div>

    `;

  }


  content.innerHTML =
    html;


  updateBottomNav(name);


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* =========================================================
   فتح مكان
   ========================================================= */

function openPlace(index,push=true){

  const place =
    places[index];


  if(!place)
    return;


  if(push){

    history.pushState(
      {type:"place",index:index},
      "",
      "#place-"+index
    );

  }


  const main =
    $("#main");

  const page =
    $("#page");

  const detail =
    $("#detail");


  if(main)
    main.style.display = "none";


  if(page)
    page.hidden = true;


  if(detail)
    detail.hidden = false;


  $("#detailTitle").textContent =
    place.name;


  $("#favBtn").textContent =
    favorites.includes(index)
    ? "♥"
    : "♡";


  $("#detailContent").innerHTML = `

    <img
      class="detail-hero"
      src="${place.image}"
      alt="${escapeHTML(place.name)}"
      onerror="this.onerror=null;this.src='images/placeholder.svg'"
    >


    <div class="info detail-info">

      <span class="pill">
        ${escapeHTML(place.tag)}
      </span>


      <h2>
        ${escapeHTML(place.name)}
      </h2>


      <p>
        ${escapeHTML(place.text)}
      </p>


      <h3>
        معلومات مهمة
      </h3>


      <ul>

        ${place.details.map(item => `
          <li>
            ${escapeHTML(item)}
          </li>
        `).join("")}

      </ul>


      <button
        class="primary-btn"
        onclick="toggleFavorite(${index})"
      >
        ${
          favorites.includes(index)
          ? "♥ إزالة من المفضلة"
          : "♡ إضافة إلى المفضلة"
        }
      </button>

    </div>

  `;


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* =========================================================
   فتح مرحلة
   ========================================================= */

function openJourney(index,push=true){

  const item =
    journey[index];


  if(!item)
    return;


  if(push){

    history.pushState(
      {type:"journey",index:index},
      "",
      "#journey-"+index
    );

  }


  const main =
    $("#main");

  const page =
    $("#page");

  const detail =
    $("#detail");


  if(main)
    main.style.display = "none";


  if(page)
    page.hidden = true;


  if(detail)
    detail.hidden = false;


  $("#detailTitle").textContent =
    item.title;


  const done =
    completed.includes(item.id);


  $("#favBtn").textContent =
    done ? "✓" : "○";


  $("#detailContent").innerHTML = `

    <img
      class="detail-hero"
      src="${item.image}"
      alt="${escapeHTML(item.title)}"
      onerror="this.onerror=null;this.src='images/placeholder.svg'"
    >


    <div class="info detail-info">

      <span class="pill">
        ${escapeHTML(item.location)}
      </span>


      <h2>
        ${escapeHTML(item.title)}
      </h2>


      <p>
        ${escapeHTML(item.description)}
      </p>

    </div>


    <div class="info">

      <h3>
        ماذا تفعل؟
      </h3>


      <ol class="steps">

        ${item.steps.map(step => `
          <li>
            ${escapeHTML(step)}
          </li>
        `).join("")}

      </ol>

    </div>


    <div class="info">

      <button
        class="complete-btn ${done ? "completed" : ""}"
        onclick="toggleJourney('${item.id}',${index})"
      >
        ${
          done
          ? "✓ تمت هذه المرحلة"
          : "إتمام هذه المرحلة"
        }
      </button>

    </div>

  `;


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* =========================================================
   إتمام مرحلة
   ========================================================= */

function toggleJourney(id,index){

  if(completed.includes(id)){

    completed =
      completed.filter(
        item => item !== id
      );

  }else{

    completed =
      [...completed,id];

  }


  saveData();


  openJourney(
    index,
    false
  );

}


/* =========================================================
   المفضلة
   ========================================================= */

function toggleFavorite(index){

  if(!places[index])
    return;


  if(favorites.includes(index)){

    favorites =
      favorites.filter(
        item => item !== index
      );

  }else{

    favorites =
      [...favorites,index];

  }


  saveData();


  const hash =
    location.hash || "";


  if(hash.startsWith("#place-")){

    openPlace(
      index,
      false
    );

  }


  else if(hash === "#favorites"){

    showPage(
      "favorites",
      false
    );

  }


  else{

    cards();

  }

}


/* =========================================================
   الوضع الداكن
   ========================================================= */

function toggleTheme(){

  document.body.classList.toggle(
    "dark"
  );


  localStorage.setItem(
    "hajjDark",
    document.body.classList.contains("dark")
  );


  if(location.hash === "#settings"){

    showPage(
      "settings",
      false
    );

  }

}


/* =========================================================
   إعادة التقدم
   ========================================================= */

function resetProgress(){

  if(
    !confirm(
      "هل تريد إعادة ضبط جميع مراحل رحلة الحج؟"
    )
  )
    return;


  completed = [];


  saveData();


  showPage(
    "rituals",
    false
  );

}


/* =========================================================
   القائمة الجانبية
   ========================================================= */

function openDrawer(){

  $("#drawer")?.classList.add(
    "open"
  );


  $("#shade")?.classList.add(
    "show"
  );

}


function closeDrawer(){

  $("#drawer")?.classList.remove(
    "open"
  );


  $("#shade")?.classList.remove(
    "show"
  );

}


/* =========================================================
   الرجوع
   ========================================================= */

function back(){

  if(
    history.length > 1
  ){

    history.back();

  }else{

    home(false);

  }

}


/* =========================================================
   القائمة السفلية
   ========================================================= */

function updateBottomNav(active){

  $$("[data-page]").forEach(
    button => {

      if(
        button.closest(".bottom")
      ){

        button.classList.toggle(
          "active",
          button.dataset.page === active
        );

      }

    }
  );

}


/* =========================================================
   البحث
   ========================================================= */

function searchPlaces(value){

  const query =
    String(value || "")
      .trim()
      .toLowerCase();


  if(!query){

    cards();

    return;

  }


  const results =
    places.filter(place => {

      return [

        place.name,
        place.tag,
        place.text,
        ...place.details

      ]
      .join(" ")
      .toLowerCase()
      .includes(query);

    });


  cards(results);

}


/* =========================================================
   التاريخ
   ========================================================= */

function formatDate(value){

  try{

    return new Date(value)
      .toLocaleString(
        "ar-SA",
        {
          dateStyle:"medium",
          timeStyle:"short"
        }
      );

  }catch{

    return String(value);

  }

}


/* =========================================================
   تحديث موقع الحاج
   ========================================================= */

async function refreshPilgrimLocation(){

  if(!currentPilgrim){

    openPilgrimLogin();

    return;

  }


  await loadPilgrimLocation();


  showPage(
    "pilgrim",
    false
  );

}


/* =========================================================
   مسارات التطبيق
   ========================================================= */

function handleRoute(){

  const hash =
    location.hash || "#home";


  /* الرئيسية */

  if(
    hash === "#home" ||
    hash === "#"
  ){

    home(false);

    return;

  }


  /* مكان */

  if(
    hash.startsWith("#place-")
  ){

    const index =
      Number(
        hash.replace(
          "#place-",
          ""
        )
      );


    if(
      Number.isInteger(index) &&
      places[index]
    ){

      openPlace(
        index,
        false
      );

    }else{

      home(false);

    }

    return;

  }


  /* مرحلة */

  if(
    hash.startsWith("#journey-")
  ){

    const index =
      Number(
        hash.replace(
          "#journey-",
          ""
        )
      );


    if(
      Number.isInteger(index) &&
      journey[index]
    ){

      openJourney(
        index,
        false
      );

    }else{

      home(false);

    }

    return;

  }


  /* الصفحات */

  const page =
    hash.substring(1);


  const validPages = [

    "places",
    "rituals",
    "duas",
    "guide",
    "favorites",
    "settings",
    "pilgrim"

  ];


  if(
    validPages.includes(page)
  ){

    showPage(
      page,
      false
    );

  }else{

    home(false);

  }

}


/* =========================================================
   تهيئة التطبيق
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* الوضع الداكن */

    if(
      localStorage.getItem(
        "hajjDark"
      ) === "true"
    ){

      document.body.classList.add(
        "dark"
      );

    }


    /* البطاقات */

    cards();


    /* نافذة الدخول الداخلية */

    createLoginModal();


    /* القائمة */

    $("#menuBtn")?.addEventListener(
      "click",
      openDrawer
    );


    $("#closeDrawer")?.addEventListener(
      "click",
      closeDrawer
    );


    $("#shade")?.addEventListener(
      "click",
      closeDrawer
    );


    /* الرجوع */

    $("#backBtn")?.addEventListener(
      "click",
      back
    );


    $("#detailBack")?.addEventListener(
      "click",
      back
    );


    /* الوضع الداكن */

    $("#themeBtn")?.addEventListener(
      "click",
      toggleTheme
    );


    /* =====================================================
       جميع أزرار الأقسام
       ===================================================== */

    $$("[data-page]").forEach(
      button => {

        button.addEventListener(
          "click",
          event => {

            event.preventDefault();
            event.stopPropagation();


            const page =
              button.dataset.page;


            if(!page)
              return;


            closeDrawer();


            if(page === "home"){

              home(true);

            }else{

              showPage(
                page,
                true
              );

            }

          }
        );

      }
    );


    /* البحث */

    $("#search")?.addEventListener(
      "input",
      event => {

        searchPlaces(
          event.target.value
        );

      }
    );


    /* زر المفضلة */

    $("#favBtn")?.addEventListener(
      "click",
      () => {

        const hash =
          location.hash || "";


        if(
          hash.startsWith("#place-")
        ){

          const index =
            Number(
              hash.replace(
                "#place-",
                ""
              )
            );


          toggleFavorite(index);

        }

      }
    );


    /* Enter */

    document.addEventListener(
      "keydown",
      event => {

        if(
          event.key === "Enter" &&
          $("#pilgrimLoginModal")
            ?.classList
            .contains("show")
        ){

          submitPilgrimLogin();

        }

      }
    );


    /* موقع الحاج المحفوظ */

    if(currentPilgrim){

      loadPilgrimLocation()
        .then(
          () => updatePilgrimUI()
        )
        .catch(
          console.error
        );

    }


    /* فتح المسار الحالي */

    handleRoute();

  }
);


/* =========================================================
   التنقل بالمتصفح والهاتف
   ========================================================= */

window.addEventListener(
  "popstate",
  handleRoute
);


window.addEventListener(
  "hashchange",
  handleRoute
);


/* =========================================================
   Service Worker
   ========================================================= */

if(
  "serviceWorker" in navigator
){

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .catch(
          error => {

            console.log(
              "Service Worker:",
              error
            );

          }
        );

    }
  );

}


/* =========================================================
   جاهز
   ========================================================= */

console.log(
  "HAJJ APP v7 FINAL — READY"
);

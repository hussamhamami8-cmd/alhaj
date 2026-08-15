/* =========================================================
   دليل الحاج — app.js v9
   متوافق مع index.html الحالي
   ---------------------------------------------------------
   - لا يعيد إنشاء نظام تسجيل الدخول الموجود في index.html
   - يعتمد على hajjPilgrim المحفوظ من index.html
   - جلب موقع الحاج من Supabase RPC
   - الأماكن
   - المناسك
   - الأدعية
   - الإرشادات
   - المفضلة
   - تقدم رحلة الحج
   - الوضع الداكن
   - البحث
   - القائمة الجانبية
   - الرجوع
   - الخريطة
   - Service Worker
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const APP_SUPABASE_URL =
  "https://tmmspfxkmqsivpxchfkk.supabase.co";

const APP_SUPABASE_KEY =
  "sb_publishable_e_UeWsqQTEk0GUhdpMDHYg_nAC3b7vZ";


/* =========================================================
   البيانات الأساسية — الأماكن
========================================================= */

const places = [

  {
    name: "المسجد الحرام",
    tag: "مكة المكرمة",
    image: "images/haram.jpg",
    text: "أعظم مساجد المسلمين، وفيه الكعبة المشرفة.",
    details: [
      "الطواف حول الكعبة سبعة أشواط.",
      "اتبع تعليمات إدارة الحشود والجهات المنظمة.",
      "حافظ على هدوئك ولا تزاحم الآخرين."
    ]
  },

  {
    name: "منى",
    tag: "المشاعر المقدسة",
    image: "images/mina.jpg",
    text: "من مشاعر الحج، وفيها المبيت خلال أيام التشريق ورمي الجمرات.",
    details: [
      "الالتزام بمواعيد التفويج.",
      "اتباع مسارات المجموعة.",
      "الحرص على الراحة وشرب الماء."
    ]
  },

  {
    name: "عرفات",
    tag: "المشاعر المقدسة",
    image: "images/arafat.jpg",
    text: "المشعر الذي يقف فيه الحجاج يوم عرفة.",
    details: [
      "الإكثار من الدعاء والذكر.",
      "عرفة كلها موقف.",
      "اتباع برنامج التفويج المعتمد."
    ]
  },

  {
    name: "مزدلفة",
    tag: "المشاعر المقدسة",
    image: "images/muzdalifah.jpg",
    text: "تقع بين عرفات ومنى، وينتقل إليها الحجاج بعد الإفاضة من عرفات.",
    details: [
      "الالتزام ببرنامج المجموعة.",
      "المحافظة على المتعلقات الشخصية.",
      "الاستعداد للانتقال إلى منى."
    ]
  },

  {
    name: "جسر الجمرات",
    tag: "منى",
    image: "images/jamarat.jpg",
    text: "منشأة حديثة لتنظيم رمي الجمرات في منى.",
    details: [
      "الرمي في أوقاته الشرعية.",
      "اتباع مواعيد التفويج.",
      "تجنب الازدحام والمزاحمة."
    ]
  },

  {
    name: "الصفا والمروة",
    tag: "المسجد الحرام",
    image: "images/safa-marwa.jpg",
    text: "المسعى الذي يكون فيه السعي بين الصفا والمروة.",
    details: [
      "السعي سبعة أشواط.",
      "يبدأ الشوط من الصفا وينتهي بالمروة.",
      "احرص على متابعة عدد الأشواط."
    ]
  }

];


/* =========================================================
   مراحل رحلة الحج
========================================================= */

const journey = [

  {
    id: "preparation",
    title: "الاستعداد للحج",
    location: "قبل الانطلاق",
    image: "images/haram.jpg",
    description:
      "استعد لرحلتك قبل الانطلاق وتأكد من الوثائق والتصاريح وترتيبات السكن والنقل.",
    steps: [
      "تأكد من الوثائق والتصاريح المطلوبة.",
      "جهز حقيبتك ومستلزماتك الشخصية.",
      "احتفظ بمعلومات المجموعة ونقطة التجمع.",
      "راجع التعليمات الرسمية الخاصة بموسم الحج."
    ]
  },

  {
    id: "ihram",
    title: "الإحرام",
    location: "الميقات",
    image: "images/ihram.jpg",
    description:
      "يتهيأ الحاج للإحرام ويدخل في النسك بالنية وفق نوع الحج الذي يؤديه.",
    steps: [
      "الاغتسال والتنظف لمن تيسر له ذلك.",
      "لبس ملابس الإحرام للرجل حسب الأحكام المعروفة.",
      "النية والدخول في النسك.",
      "الإكثار من التلبية."
    ]
  },

  {
    id: "mina",
    title: "يوم التروية",
    location: "منى",
    image: "images/mina.jpg",
    description:
      "يتوجه الحاج إلى منى وفق النسك والبرنامج التنظيمي المعتمد.",
    steps: [
      "التوجه إلى منى وفق برنامج المجموعة.",
      "الإكثار من التلبية والذكر.",
      "الالتزام بمواعيد التفويج.",
      "الراحة والاستعداد ليوم عرفة."
    ]
  },

  {
    id: "arafat",
    title: "يوم عرفة",
    location: "عرفات",
    image: "images/arafat.jpg",
    description:
      "الوقوف بعرفة هو ركن الحج الأعظم، ويكثر الحاج فيه من الدعاء والذكر.",
    steps: [
      "الوصول إلى عرفات وفق برنامج التفويج.",
      "الوقوف بعرفة.",
      "الإكثار من الدعاء والذكر.",
      "الاستعداد للإفاضة إلى مزدلفة."
    ]
  },

  {
    id: "muzdalifah",
    title: "مزدلفة",
    location: "مزدلفة",
    image: "images/muzdalifah.jpg",
    description:
      "بعد الإفاضة من عرفات يتوجه الحجاج إلى مزدلفة وفق التنظيم المعتمد.",
    steps: [
      "الإفاضة من عرفات إلى مزدلفة.",
      "الالتزام بتعليمات المجموعة.",
      "المبيت بحسب الأحكام الشرعية والبرنامج.",
      "الاستعداد للانتقال إلى منى."
    ]
  },

  {
    id: "sacrifice",
    title: "يوم النحر",
    location: "منى",
    image: "images/day-sacrifice.jpg",
    description:
      "يوم عظيم من أيام الحج، وله أعمال متعددة تختلف تفاصيل ترتيبها بحسب نوع النسك.",
    steps: [
      "رمي جمرة العقبة.",
      "الذبح لمن كان عليه هدي.",
      "الحلق أو التقصير.",
      "طواف الإفاضة والسعي بحسب النسك."
    ]
  },

  {
    id: "tawaf",
    title: "طواف الإفاضة",
    location: "المسجد الحرام",
    image: "images/haram.jpg",
    description:
      "يطوف الحاج بالبيت سبعة أشواط وفق أحكام الطواف.",
    steps: [
      "الاستعداد للطواف.",
      "الطواف سبعة أشواط.",
      "الدعاء والذكر بما تيسر.",
      "الانتقال إلى السعي إذا كان مطلوبًا."
    ]
  },

  {
    id: "sai",
    title: "السعي",
    location: "الصفا والمروة",
    image: "images/safa-marwa.jpg",
    description:
      "السعي بين الصفا والمروة سبعة أشواط لمن كان السعي مطلوبًا منه.",
    steps: [
      "البدء من الصفا.",
      "إكمال سبعة أشواط.",
      "ينتهي الشوط السابع عند المروة.",
      "المحافظة على الهدوء وعدم إيذاء الآخرين."
    ]
  },

  {
    id: "jamarat",
    title: "أيام التشريق",
    location: "منى",
    image: "images/jamarat.jpg",
    description:
      "من أعمال أيام التشريق رمي الجمرات وفق الأحكام والمواعيد التنظيمية.",
    steps: [
      "الالتزام بمواعيد التفويج.",
      "رمي الجمرات في أوقاتها.",
      "اتباع المسارات المحددة.",
      "العودة إلى السكن أو المخيم وفق البرنامج."
    ]
  },

  {
    id: "farewell",
    title: "طواف الوداع",
    location: "المسجد الحرام",
    image: "images/farewell-tawaf.jpg",
    description:
      "يكون طواف الوداع عند إرادة مغادرة مكة وفق أحكامه والاستثناءات الشرعية.",
    steps: [
      "التأكد من موعد المغادرة.",
      "أداء طواف الوداع وفق الحكم الشرعي.",
      "الاستعداد للعودة.",
      "الالتزام بتعليمات النقل والمغادرة."
    ]
  }

];


/* =========================================================
   الأدعية
========================================================= */

const duas = [

  {
    title: "التلبية",
    text:
      "لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."
  },

  {
    title: "دعاء جامع",
    text:
      "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار."
  },

  {
    title: "الدعاء والذكر",
    text:
      "يكثر الحاج من ذكر الله والدعاء بما تيسر من الأدعية المشروعة."
  }

];


/* =========================================================
   الإرشادات
========================================================= */

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

function readStorage(key, fallback) {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(key)
      );

    return Array.isArray(value)
      ? value
      : fallback;

  } catch {

    return fallback;

  }

}


let favorites =
  readStorage("hajjFav", []);


let completed =
  readStorage("hajjCompleted", []);


let currentPilgrim = null;

let currentLocation = null;


/* =========================================================
   أدوات DOM
========================================================= */

const $ = selector =>
  document.querySelector(selector);


const $$ = selector =>
  document.querySelectorAll(selector);


/* =========================================================
   حماية النصوص
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   مزامنة بيانات الحاج
   مصدرها الأساسي index.html
========================================================= */

function syncPilgrim() {

  try {

    const saved =
      localStorage.getItem(
        "hajjPilgrim"
      );

    currentPilgrim =
      saved
        ? JSON.parse(saved)
        : null;

  } catch {

    currentPilgrim = null;

  }

}


/* =========================================================
   حفظ البيانات
========================================================= */

function saveData() {

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
   تقدم الرحلة
========================================================= */

function progressData() {

  const done =
    journey.filter(
      item =>
        completed.includes(item.id)
    ).length;


  const total =
    journey.length;


  const percent =
    total
      ? Math.round(
          done / total * 100
        )
      : 0;


  return {
    done,
    total,
    percent
  };

}


/* =========================================================
   Supabase REST
========================================================= */

async function supabaseRPC(
  functionName,
  body = {}
) {

  const response =
    await fetch(
      `${APP_SUPABASE_URL}/rest/v1/rpc/${functionName}`,
      {
        method: "POST",

        headers: {
          "apikey": APP_SUPABASE_KEY,
          "Authorization":
            `Bearer ${APP_SUPABASE_KEY}`,
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(body)
      }
    );


  let data = null;


  try {

    data =
      await response.json();

  } catch {

    data = null;

  }


  if (!response.ok) {

    console.error(
      "Supabase RPC Error:",
      response.status,
      data
    );

    throw new Error(
      data?.message ||
      data?.error_description ||
      "تعذر الاتصال بقاعدة البيانات."
    );

  }


  return data;

}


/* =========================================================
   تحميل موقع الحاج
========================================================= */

async function loadPilgrimLocation() {

  syncPilgrim();


  if (
    !currentPilgrim?.name ||
    !currentPilgrim?.code
  ) {

    currentLocation = null;

    return null;

  }


  try {

    const result =
      await supabaseRPC(
        "get_pilgrim_locations",
        {
          p_name:
            currentPilgrim.name,

          p_code:
            currentPilgrim.code
        }
      );


    if (
      Array.isArray(result) &&
      result.length > 0
    ) {

      currentLocation =
        result[0];

    } else {

      currentLocation = null;

    }


    return currentLocation;

  } catch (error) {

    console.error(
      "Pilgrim location error:",
      error
    );

    currentLocation = null;

    return null;

  }

}


/* =========================================================
   تحديث واجهة الحاج
========================================================= */

function updatePilgrimUI() {

  syncPilgrim();


  const name =
    currentPilgrim?.name ||
    "الحاج";


  const barName =
    $("#pilgrimName");


  if (barName) {

    barName.textContent =
      name;

  }


  const drawerName =
    $("#drawerUserName");


  if (drawerName) {

    drawerName.textContent =
      currentPilgrim
        ? currentPilgrim.name
        : "زائر";

  }


  const drawerStatus =
    $("#drawerUserStatus");


  if (drawerStatus) {

    drawerStatus.textContent =
      currentPilgrim
        ? "بطاقة الحاج"
        : "وضع الزائر";

  }

}


/* =========================================================
   فتح الموقع على الخريطة
========================================================= */

function openPilgrimMap() {

  if (!currentLocation) {

    alert(
      "لا يوجد موقع متاح حاليًا."
    );

    return;

  }


  const lat =
    Number(
      currentLocation.latitude
    );


  const lng =
    Number(
      currentLocation.longitude
    );


  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lng)
  ) {

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
   التاريخ
========================================================= */

function formatDate(value) {

  if (!value)
    return "غير معروف";


  try {

    return new Date(value)
      .toLocaleString(
        "ar-SA",
        {
          dateStyle: "medium",
          timeStyle: "short"
        }
      );

  } catch {

    return String(value);

  }

}


/* =========================================================
   الصفحة الرئيسية
========================================================= */

function home(push = false) {

  if (push) {

    history.pushState(
      {
        page: "home"
      },
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


  if (main) {

    main.style.display =
      "block";

  }


  if (page) {

    page.hidden = true;

  }


  if (detail) {

    detail.hidden = true;

  }


  updateBottomNav("home");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   بطاقات الأماكن في الرئيسية
========================================================= */

function cards(list = places) {

  const element =
    $("#placeGrid");


  if (!element)
    return;


  if (!list.length) {

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
              src="${escapeHTML(place.image)}"
              alt="${escapeHTML(place.name)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
            >


            <button
              class="card-fav ${fav ? "active" : ""}"
              aria-label="المفضلة"
              type="button"
              onclick="event.stopPropagation();toggleFavorite(${index})"
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
   عرض صفحة داخلية
========================================================= */

function showPage(
  name,
  push = true
) {

  if (push) {

    history.pushState(
      {
        type: "page",
        name
      },
      "",
      "#" + name
    );

  }


  const main =
    $("#main");


  const page =
    $("#page");


  const detail =
    $("#detail");


  if (main)
    main.style.display = "none";


  if (detail)
    detail.hidden = true;


  if (page)
    page.hidden = false;


  const titles = {

    places: "أماكن الحج",

    rituals: "رحلة الحج",

    duas: "الأدعية والأذكار",

    guide: "إرشادات الحاج",

    favorites: "المفضلة",

    settings: "الإعدادات",

    pilgrim: "بطاقة الحاج"

  };


  const title =
    $("#pageTitle");


  if (title) {

    title.textContent =
      titles[name] ||
      "دليل الحاج";

  }


  const content =
    $("#pageContent");


  if (!content)
    return;


  let html = "";


  /* =====================================================
     الأماكن
  ===================================================== */

  if (name === "places") {

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

        ${places.map((place, index) => `

          <div
            class="list-item clickable"
            onclick="openPlace(${index})"
          >

            <img
              src="${escapeHTML(place.image)}"
              alt="${escapeHTML(place.name)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
            >


            <div>

              <b>
                ${escapeHTML(place.name)}
              </b>

              <small>
                ${escapeHTML(place.tag)}
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

  else if (name === "rituals") {

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

        ${journey.map((item, index) => {

          const done =
            completed.includes(
              item.id
            );


          return `

            <div
              class="journey-row ${done ? "done" : ""}"
              onclick="openJourney(${index})"
            >

              <div class="journey-num">
                ${done ? "✓" : index + 1}
              </div>


              <img
                src="${escapeHTML(item.image)}"
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

  else if (name === "duas") {

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

    `;


    html +=
      duas.map((item, index) => `

        <div class="info dua-card">

          <div class="dua-number">
            ${index + 1}
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

      `).join("");

  }


  /* =====================================================
     الإرشادات
  ===================================================== */

  else if (name === "guide") {

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

    `;


    html +=
      guides.map(item => `

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

      `).join("");

  }


  /* =====================================================
     المفضلة
  ===================================================== */

  else if (name === "favorites") {

    const valid =
      favorites.filter(
        index =>
          places[index]
      );


    if (valid.length) {

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

      `;


      html +=
        valid.map(index => `

          <div
            class="list-item clickable"
            onclick="openPlace(${index})"
          >

            <img
              src="${escapeHTML(places[index].image)}"
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
              type="button"
              onclick="event.stopPropagation();toggleFavorite(${index})"
            >
              ♥
            </button>

          </div>

        `).join("");

    } else {

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
            type="button"
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

  else if (name === "pilgrim") {

    html =
      renderPilgrimPage();

  }


  /* =====================================================
     الإعدادات
  ===================================================== */

  else if (name === "settings") {

    const dark =
      document.body.classList.contains(
        "dark"
      );


    const p =
      progressData();


    html = `

      <div
        class="info pilgrim-settings-card"
        onclick="showPage('pilgrim')"
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
                ? escapeHTML(
                    currentPilgrim.name
                  )
                : "تسجيل دخول الحاج"
            }

          </h3>


          <p>

            ${
              currentPilgrim
                ? "عرض بيانات الحاج والموقع"
                : "افتح بطاقة الحاج من شاشة الدخول"
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
          type="button"
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
          type="button"
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
          دليل الحاج رفيق رقمي للمعلومات الأساسية المتعلقة
          بالمناسك والأماكن والأدعية والإرشادات.
        </p>

        <p class="muted-note">
          في المسائل الشرعية التفصيلية يُرجع إلى عالم أو مرشد حج موثوق.
        </p>

      </div>

    `;

  }


  content.innerHTML =
    html;


  updateBottomNav(name);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   بطاقة الحاج
========================================================= */

function renderPilgrimPage() {

  syncPilgrim();


  if (!currentPilgrim) {

    return `

      <div class="info empty-state visitor-card">

        <div class="empty-icon">
          👤
        </div>

        <span class="pill">
          وضع الزائر
        </span>

        <h3>
          أنت تتصفح كزائر
        </h3>

        <p>
          يمكنك استخدام ميزات دليل الحاج
          واستكشاف الأماكن والمناسك والأدعية والإرشادات.
        </p>

        <p class="muted-note">
          سجّل الدخول للوصول إلى بطاقة الحاج
          وبياناتك وموقعك المرتبط بالحساب.
        </p>

      </div>

    `;

  }


  let locationHTML = "";


  if (currentLocation) {

    const updated =
      currentLocation.updated_at
        ? formatDate(
            currentLocation.updated_at
          )
        : "غير معروف";


    const hasCoordinates =
      Number.isFinite(
        Number(
          currentLocation.latitude
        )
      ) &&
      Number.isFinite(
        Number(
          currentLocation.longitude
        )
      );


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

            <small>
              خط العرض
            </small>

            <b>
              ${escapeHTML(
                currentLocation.latitude ??
                "—"
              )}
            </b>

          </div>


          <div>

            <small>
              خط الطول
            </small>

            <b>
              ${escapeHTML(
                currentLocation.longitude ??
                "—"
              )}
            </b>

          </div>

        </div>


        <p class="muted-note">
          آخر تحديث: ${escapeHTML(updated)}
        </p>


        ${
          hasCoordinates
            ? `
              <button
                class="primary-btn"
                type="button"
                onclick="openPilgrimMap()"
              >
                🗺️ فتح الموقع على الخريطة
              </button>
            `
            : ""
        }


        <button
          class="primary-btn"
          type="button"
          onclick="refreshPilgrimLocation()"
        >
          🔄 تحديث الموقع
        </button>

      </div>

    `;

  } else {

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
          type="button"
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
          ${escapeHTML(
            currentPilgrim.name
          )}
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
          ${escapeHTML(
            currentPilgrim.name
          )}
        </b>

      </div>


      <div class="pilgrim-info-row">

        <span>
          معرف المستخدم
        </span>

        <b class="small-code">
          ${escapeHTML(
            currentPilgrim.user_id ||
            "—"
          )}
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
        لا يتيح للحاج اختيار معرف مستخدم آخر.
      </p>

    </div>

  `;

}


/* =========================================================
   تحديث موقع الحاج
========================================================= */

async function refreshPilgrimLocation() {

  syncPilgrim();


  if (!currentPilgrim) {

    alert(
      "يجب تسجيل الدخول أولًا."
    );

    return;

  }


  await loadPilgrimLocation();


  showPage(
    "pilgrim",
    false
  );

}


/* =========================================================
   فتح المكان
========================================================= */

function openPlace(
  index,
  push = true
) {

  const place =
    places[index];


  if (!place)
    return;


  if (push) {

    history.pushState(
      {
        type: "place",
        index
      },
      "",
      "#place-" + index
    );

  }


  const main =
    $("#main");


  const page =
    $("#page");


  const detail =
    $("#detail");


  if (main)
    main.style.display = "none";


  if (page)
    page.hidden = true;


  if (detail)
    detail.hidden = false;


  const title =
    $("#detailTitle");


  if (title) {

    title.textContent =
      place.name;

  }


  const favBtn =
    $("#favBtn");


  if (favBtn) {

    favBtn.textContent =
      favorites.includes(index)
        ? "♥"
        : "♡";

  }


  const content =
    $("#detailContent");


  if (!content)
    return;


  content.innerHTML = `

    <img
      class="detail-hero"
      src="${escapeHTML(place.image)}"
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

        ${place.details.map(detail => `
          <li>
            ${escapeHTML(detail)}
          </li>
        `).join("")}

      </ul>


      <button
        class="primary-btn"
        type="button"
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
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   فتح مرحلة
========================================================= */

function openJourney(
  index,
  push = true
) {

  const item =
    journey[index];


  if (!item)
    return;


  if (push) {

    history.pushState(
      {
        type: "journey",
        index
      },
      "",
      "#journey-" + index
    );

  }


  const main =
    $("#main");


  const page =
    $("#page");


  const detail =
    $("#detail");


  if (main)
    main.style.display = "none";


  if (page)
    page.hidden = true;


  if (detail)
    detail.hidden = false;


  const title =
    $("#detailTitle");


  if (title) {

    title.textContent =
      item.title;

  }


  const done =
    completed.includes(
      item.id
    );


  const favBtn =
    $("#favBtn");


  if (favBtn) {

    favBtn.textContent =
      done ? "✓" : "○";

  }


  const content =
    $("#detailContent");


  if (!content)
    return;


  content.innerHTML = `

    <img
      class="detail-hero"
      src="${escapeHTML(item.image)}"
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
        type="button"
        onclick="toggleJourney('${escapeHTML(item.id)}',${index})"
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
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   إتمام مرحلة
========================================================= */

function toggleJourney(
  id,
  index
) {

  if (
    completed.includes(id)
  ) {

    completed =
      completed.filter(
        item =>
          item !== id
      );

  } else {

    completed = [
      ...completed,
      id
    ];

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

function toggleFavorite(index) {

  if (
    favorites.includes(index)
  ) {

    favorites =
      favorites.filter(
        item =>
          item !== index
      );

  } else {

    favorites = [
      ...favorites,
      index
    ];

  }


  saveData();


  if (
    location.hash.startsWith(
      "#place-"
    )
  ) {

    openPlace(
      index,
      false
    );

    return;

  }


  if (
    location.hash ===
    "#favorites"
  ) {

    showPage(
      "favorites",
      false
    );

    return;

  }


  cards();

}


/* =========================================================
   الوضع الداكن
========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "dark"
  );


  localStorage.setItem(
    "hajjDark",
    document.body.classList.contains(
      "dark"
    )
      ? "true"
      : "false"
  );


  const themeBtn =
    $("#themeBtn");


  if (themeBtn) {

    themeBtn.textContent =
      document.body.classList.contains(
        "dark"
      )
        ? "☀"
        : "☾";

  }


  if (
    location.hash ===
    "#settings"
  ) {

    showPage(
      "settings",
      false
    );

  }

}


/* =========================================================
   إعادة ضبط التقدم
========================================================= */

function resetProgress() {

  if (
    !confirm(
      "هل تريد إعادة ضبط جميع مراحل رحلة الحج؟"
    )
  ) {

    return;

  }


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

function openDrawer() {

  $("#drawer")
    ?.classList.add("open");


  $("#shade")
    ?.classList.add("show");

}


function closeDrawer() {

  $("#drawer")
    ?.classList.remove("open");


  $("#shade")
    ?.classList.remove("show");

}


/* =========================================================
   الرجوع
========================================================= */

function back() {

  if (
    location.hash &&
    location.hash !== "#home"
  ) {

    history.back();

  } else {

    home();

  }

}


/* =========================================================
   القائمة السفلية
========================================================= */

function updateBottomNav(
  active
) {

  $$("[data-page]")
    .forEach(button => {

      if (
        button.closest(".bottom")
      ) {

        button.classList.toggle(
          "active",
          button.dataset.page === active
        );

      }

    });

}


/* =========================================================
   البحث
========================================================= */

function searchPlaces(value) {

  const query =
    String(value || "")
      .trim()
      .toLowerCase();


  if (!query) {

    cards();

    return;

  }


  const results =
    places.filter(place => {

      const content = [

        place.name,

        place.tag,

        place.text,

        ...place.details

      ]
        .join(" ")
        .toLowerCase();


      return content.includes(
        query
      );

    });


  cards(results);

}


/* =========================================================
   المسار
========================================================= */

function handleRoute() {

  const hash =
    location.hash;


  if (
    !hash ||
    hash === "#home"
  ) {

    home(false);

    return;

  }


  if (
    hash.startsWith(
      "#place-"
    )
  ) {

    const index =
      Number(
        hash.replace(
          "#place-",
          ""
        )
      );


    openPlace(
      index,
      false
    );

    return;

  }


  if (
    hash.startsWith(
      "#journey-"
    )
  ) {

    const index =
      Number(
        hash.replace(
          "#journey-",
          ""
        )
      );


    openJourney(
      index,
      false
    );

    return;

  }


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


  if (
    validPages.includes(page)
  ) {

    showPage(
      page,
      false
    );

  } else {

    home(false);

  }

}


/* =========================================================
   تحديث الصفحة بعد تغير بيانات الدخول
========================================================= */

function refreshApplicationState() {

  syncPilgrim();

  updatePilgrimUI();


  if (
    location.hash ===
    "#pilgrim"
  ) {

    showPage(
      "pilgrim",
      false
    );

  }

}


/* =========================================================
   مراقبة localStorage
   مهم جدًا مع index.html
========================================================= */

window.addEventListener(
  "storage",
  event => {

    if (
      event.key ===
      "hajjPilgrim"
    ) {

      refreshApplicationState();

    }

  }
);


/* =========================================================
   تهيئة التطبيق
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    /* -----------------------------------------------
       الوضع الداكن
    ------------------------------------------------ */

    if (
      localStorage.getItem(
        "hajjDark"
      ) === "true"
    ) {

      document.body.classList.add(
        "dark"
      );

    }


    const themeBtn =
      $("#themeBtn");


    if (themeBtn) {

      themeBtn.textContent =
        document.body.classList.contains(
          "dark"
        )
          ? "☀"
          : "☾";

    }


    /* -----------------------------------------------
       تحميل البيانات
    ------------------------------------------------ */

    syncPilgrim();

    updatePilgrimUI();

    cards();


    /* -----------------------------------------------
       القائمة الجانبية
    ------------------------------------------------ */

    $("#menuBtn")
      ?.addEventListener(
        "click",
        openDrawer
      );


    $("#closeDrawer")
      ?.addEventListener(
        "click",
        closeDrawer
      );


    $("#shade")
      ?.addEventListener(
        "click",
        closeDrawer
      );


    /* -----------------------------------------------
       أزرار الرجوع
    ------------------------------------------------ */

    $("#backBtn")
      ?.addEventListener(
        "click",
        back
      );


    $("#detailBack")
      ?.addEventListener(
        "click",
        back
      );


    /* -----------------------------------------------
       الوضع الداكن
    ------------------------------------------------ */

    $("#themeBtn")
      ?.addEventListener(
        "click",
        toggleTheme
      );


    /* -----------------------------------------------
       روابط الصفحات
    ------------------------------------------------ */

    $$("[data-page]")
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.preventDefault();

            closeDrawer();


            const page =
              button.dataset.page;


            if (!page)
              return;


            if (
              page ===
              "home"
            ) {

              home(true);

            } else {

              showPage(
                page,
                true
              );

            }

          }
        );

      });


    /* -----------------------------------------------
       البحث
    ------------------------------------------------ */

    $("#search")
      ?.addEventListener(
        "input",
        event => {

          searchPlaces(
            event.target.value
          );

        }
      );


    /* -----------------------------------------------
       زر المفضلة في التفاصيل
    ------------------------------------------------ */

    $("#favBtn")
      ?.addEventListener(
        "click",
        () => {

          const hash =
            location.hash;


          if (
            hash.startsWith(
              "#place-"
            )
          ) {

            toggleFavorite(
              Number(
                hash.replace(
                  "#place-",
                  ""
                )
              )
            );

          }

        }
      );


    /* -----------------------------------------------
       تحميل موقع الحاج
    ------------------------------------------------ */

    if (currentPilgrim) {

      await loadPilgrimLocation();

    }


    /* -----------------------------------------------
       فتح المسار الحالي
    ------------------------------------------------ */

    handleRoute();

  }
);


/* =========================================================
   زر الرجوع في المتصفح / الهاتف
========================================================= */

window.addEventListener(
  "popstate",
  () => {

    syncPilgrim();

    updatePilgrimUI();

    handleRoute();

  }
);


/* =========================================================
   دعم hashchange
========================================================= */

window.addEventListener(
  "hashchange",
  () => {

    syncPilgrim();

    updatePilgrimUI();

    handleRoute();

  }
);


/* =========================================================
   Service Worker
========================================================= */

if (
  "serviceWorker" in navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .then(() => {

          console.log(
            "Service Worker registered."
          );

        })
        .catch(error => {

          console.log(
            "Service Worker:",
            error
          );

        });

    }
  );

}


/* =========================================================
   مراقبة تغير بطاقة الحاج داخل نفس الصفحة
   لأن index.html يغيّر localStorage مباشرة
========================================================= */

setInterval(
  () => {

    const before =
      currentPilgrim?.id ||
      null;


    syncPilgrim();


    const after =
      currentPilgrim?.id ||
      null;


    if (before !== after)
    {
      updatePilgrimUI();

      if (currentPilgrim) {
        loadPilgrimLocation().catch(console.error);
      }
    }

  },
  2000
);


/* =========================================================
   بدء التطبيق
========================================================= */

console.log(
  "HAJJ APP v10 — LOGIN + PILGRIM + LOCATIONS + SUPABASE READY"
);

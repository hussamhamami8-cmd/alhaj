/* =========================================================
   دليل الحاج
   app.js - النسخة المستقرة
   ========================================================= */


/* =========================
   البيانات
   ========================= */

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


const journey = [
  {
    id: "preparation",
    title: "الاستعداد للحج",
    location: "قبل الانطلاق",
    image: "images/haram.jpg",
    description: "استعد لرحلتك قبل الانطلاق وتأكد من الوثائق والتصاريح وترتيبات السكن والنقل.",
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
    description: "يتهيأ الحاج للإحرام ويدخل في النسك بالنية وفق نوع الحج الذي يؤديه.",
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
    description: "يتوجه الحاج إلى منى وفق النسك والبرنامج التنظيمي المعتمد.",
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
    description: "الوقوف بعرفة هو ركن الحج الأعظم، ويكثر الحاج فيه من الدعاء والذكر.",
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
    description: "بعد الإفاضة من عرفات يتوجه الحجاج إلى مزدلفة وفق التنظيم المعتمد.",
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
    description: "يوم عظيم من أيام الحج، وله أعمال متعددة تختلف تفاصيل ترتيبها بحسب نوع النسك.",
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
    description: "يطوف الحاج بالبيت سبعة أشواط وفق أحكام الطواف.",
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
    description: "السعي بين الصفا والمروة سبعة أشواط لمن كان السعي مطلوبًا منه.",
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
    description: "من أعمال أيام التشريق رمي الجمرات وفق الأحكام والمواعيد التنظيمية.",
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
    description: "يكون طواف الوداع عند إرادة مغادرة مكة وفق أحكامه والاستثناءات الشرعية.",
    steps: [
      "التأكد من موعد المغادرة.",
      "أداء طواف الوداع وفق الحكم الشرعي.",
      "الاستعداد للعودة.",
      "الالتزام بتعليمات النقل والمغادرة."
    ]
  }
];


const duas = [
  {
    title: "التلبية",
    text: "لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك."
  },
  {
    title: "دعاء جامع",
    text: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار."
  },
  {
    title: "الدعاء والذكر",
    text: "يكثر الحاج من ذكر الله والدعاء بما تيسر من الأدعية المشروعة."
  }
];


const guides = [
  ["قبل السفر", "راجع الوثائق والتصاريح وتعليمات الجهة المنظمة، وجهز احتياجاتك الشخصية."],
  ["في المشاعر", "التزم بمواعيد التفويج ولا تنفصل عن مجموعتك دون معرفة نقطة التجمع."],
  ["الحرارة", "احرص على شرب الماء واستخدام وسائل الوقاية من الشمس وتجنب التعرض الطويل للحرارة."],
  ["الازدحام", "اتبع المسارات ولا تدفع أو تزاحم الآخرين."],
  ["الطوارئ", "عند الحاجة اطلب المساعدة من الجهات المختصة أو مقدم الخدمة."]
];


/* =========================
   التخزين
   ========================= */

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}


let favorites = readStorage("hajjFav", []);
let completed = readStorage("hajjCompleted", []);


/* =========================
   أدوات
   ========================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


function saveData() {
  localStorage.setItem("hajjFav", JSON.stringify(favorites));
  localStorage.setItem("hajjCompleted", JSON.stringify(completed));
}


function setImageFallback(img) {
  img.onerror = function () {
    this.onerror = null;
    this.src = "images/placeholder.svg";
  };
}


/* =========================
   الرئيسية
   ========================= */

function home(push = false) {

  if (push) {
    history.pushState({ page: "home" }, "", "#home");
  }

  const main = $("#main");
  const page = $("#page");
  const detail = $("#detail");

  if (main) main.style.display = "block";
  if (page) page.hidden = true;
  if (detail) detail.hidden = true;

  updateBottomNav("home");
}


/* =========================
   بطاقات الأماكن
   ========================= */

function cards(list = places) {

  const element = $("#placeGrid");

  if (!element) return;

  if (!list.length) {
    element.innerHTML = `
      <div class="info">
        <h3>لا توجد نتائج</h3>
        <p>جرّب البحث بكلمة أخرى.</p>
      </div>
    `;
    return;
  }

  element.innerHTML = list.map((place) => {

    const index = places.indexOf(place);

    return `
      <article class="card" onclick="openPlace(${index})">

        <img
          src="${place.image}"
          alt="${place.name}"
          onerror="this.onerror=null;this.src='images/placeholder.svg'"
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
    `;

  }).join("");
}


/* =========================
   التنقل العام
   ========================= */

function showPage(name, push = true) {

  if (push) {
    history.pushState(
      { type: "page", name },
      "",
      "#" + name
    );
  }

  const main = $("#main");
  const page = $("#page");
  const detail = $("#detail");

  if (main) main.style.display = "none";
  if (detail) detail.hidden = true;
  if (page) page.hidden = false;

  const titles = {
    places: "أماكن الحج",
    rituals: "رحلة الحج",
    duas: "الأدعية والأذكار",
    guide: "إرشادات الحاج",
    favorites: "المفضلة",
    settings: "الإعدادات"
  };

  const title = $("#pageTitle");

  if (title) {
    title.textContent = titles[name] || "دليل الحاج";
  }

  const content = $("#pageContent");

  if (!content) return;

  let html = "";


  /* الأماكن */

  if (name === "places") {

    html = places.map((place, index) => `
      <div class="list-item" onclick="openPlace(${index})">

        <img
          src="${place.image}"
          alt="${place.name}"
          onerror="this.onerror=null;this.src='images/placeholder.svg'"
          style="
            width:62px;
            height:52px;
            object-fit:cover;
            border-radius:12px;
          "
        >

        <div style="flex:1">
          <b>${place.name}</b>
          <small style="display:block;color:var(--muted)">
            ${place.tag}
          </small>
        </div>

        <span>‹</span>

      </div>
    `).join("");

  }


  /* رحلة الحج */

  else if (name === "rituals") {

    const total = journey.length;

    const done = journey.filter(item =>
      completed.includes(item.id)
    ).length;

    const percent = total
      ? Math.round((done / total) * 100)
      : 0;

    html = `

      <div class="info">

        <span class="pill">
          رحلة الحج
        </span>

        <h2>
          ${percent}% مكتمل
        </h2>

        <div style="
          height:10px;
          background:#e4ebe8;
          border-radius:20px;
          overflow:hidden;
          margin:15px 0;
        ">

          <div style="
            width:${percent}%;
            height:100%;
            background:#075c52;
            transition:width .3s;
          "></div>

        </div>

        <p>
          أنجزت ${done} من ${total} مراحل.
        </p>

      </div>

      ${journey.map((item, index) => {

        const isDone = completed.includes(item.id);

        return `

          <div
            class="list-item"
            onclick="openJourney(${index})"
            style="cursor:pointer"
          >

            <img
              src="${item.image}"
              alt="${item.title}"
              onerror="this.onerror=null;this.src='images/placeholder.svg'"
              style="
                width:70px;
                height:60px;
                object-fit:cover;
                border-radius:13px;
              "
            >

            <div style="flex:1">

              <b>
                ${index + 1}. ${item.title}
              </b>

              <small style="
                display:block;
                color:var(--muted);
                margin-top:4px;
              ">
                ${item.location}
              </small>

            </div>

            <span style="
              font-size:20px;
              color:${isDone ? "#075c52" : "inherit"};
            ">
              ${isDone ? "✓" : "‹"}
            </span>

          </div>

        `;

      }).join("")}

    `;

  }


  /* الأدعية */

  else if (name === "duas") {

    html = duas.map(item => `

      <div class="info">

        <span class="pill">
          دعاء
        </span>

        <h3>
          ${item.title}
        </h3>

        <p style="line-height:2.2">
          ${item.text}
        </p>

      </div>

    `).join("");

  }


  /* الإرشادات */

  else if (name === "guide") {

    html = guides.map(item => `

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


  /* المفضلة */

  else if (name === "favorites") {

    const validFavorites = favorites.filter(
      index => places[index]
    );

    if (!validFavorites.length) {

      html = `
        <div class="info">

          <h3>
            المفضلة فارغة
          </h3>

          <p>
            يمكنك إضافة أي مكان إلى المفضلة من صفحة المكان.
          </p>

        </div>
      `;

    } else {

      html = validFavorites.map(index => `

        <div
          class="list-item"
          onclick="openPlace(${index})"
        >

          <img
            src="${places[index].image}"
            alt="${places[index].name}"
            onerror="this.onerror=null;this.src='images/placeholder.svg'"
            style="
              width:62px;
              height:52px;
              object-fit:cover;
              border-radius:12px;
            "
          >

          <b style="flex:1">
            ${places[index].name}
          </b>

          <span>
            ♥
          </span>

        </div>

      `).join("");

    }

  }


  /* الإعدادات */

  else if (name === "settings") {

    const dark =
      document.body.classList.contains("dark");

    html = `

      <div class="list-item">

        <div style="flex:1">

          <b>
            الوضع الداكن
          </b>

          <small style="
            display:block;
            color:var(--muted);
            margin-top:4px;
          ">
            ${dark ? "مفعّل" : "غير مفعّل"}
          </small>

        </div>

        <button onclick="toggleTheme()">
          ${dark ? "☀" : "☾"}
        </button>

      </div>

      <div class="info">

        <h3>
          حول التطبيق
        </h3>

        <p style="line-height:2">
          دليل الحاج هو رفيق رقمي يساعد الحاج على الوصول إلى
          المعلومات الأساسية المتعلقة بالمناسك والأماكن والأدعية
          والإرشادات.
        </p>

        <p style="line-height:2">
          في المسائل الشرعية التفصيلية يُرجع إلى عالم أو مرشد حج موثوق.
        </p>

      </div>

    `;

  }


  content.innerHTML = html;

  updateBottomNav(name);
}


/* =========================
   تفاصيل المكان
   ========================= */

function openPlace(index, push = true) {

  const place = places[index];

  if (!place) return;

  if (push) {
    history.pushState(
      { type: "place", index },
      "",
      "#place-" + index
    );
  }

  $("#main").style.display = "none";
  $("#page").hidden = true;
  $("#detail").hidden = false;

  $("#detailTitle").textContent = place.name;

  const isFavorite =
    favorites.includes(index);

  $("#favBtn").textContent =
    isFavorite ? "♥" : "♡";

  $("#detailContent").innerHTML = `

    <img
      class="detail-hero"
      src="${place.image}"
      alt="${place.name}"
      onerror="this.onerror=null;this.src='images/placeholder.svg'"
    >

    <div class="info">

      <span class="pill">
        ${place.tag}
      </span>

      <h2>
        ${place.name}
      </h2>

      <p style="line-height:2">
        ${place.text}
      </p>

      <h3>
        معلومات مهمة
      </h3>

      <ul>

        ${place.details.map(detail => `
          <li style="
            margin:9px 0;
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
        ${isFavorite
          ? "♥ إزالة من المفضلة"
          : "♡ إضافة إلى المفضلة"}
      </button>

    </div>
  `;
}


/* =========================
   تفاصيل مرحلة الحج
   ========================= */

function openJourney(index, push = true) {

  const item = journey[index];

  if (!item) return;

  if (push) {
    history.pushState(
      { type: "journey", index },
      "",
      "#journey-" + index
    );
  }

  $("#main").style.display = "none";
  $("#page").hidden = true;
  $("#detail").hidden = false;

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
      alt="${item.title}"
      onerror="this.onerror=null;this.src='images/placeholder.svg'"
    >

    <div class="info">

      <span class="pill">
        ${item.location}
      </span>

      <h2>
        ${item.title}
      </h2>

      <p style="line-height:2">
        ${item.description}
      </p>

    </div>

    <div class="info">

      <h3>
        ماذا تفعل؟
      </h3>

      <ul>

        ${item.steps.map(step => `
          <li style="
            margin:10px 0;
            line-height:1.9;
          ">
            ${step}
          </li>
        `).join("")}

      </ul>

    </div>

    <div class="info">

      <button
        onclick="toggleJourney('${item.id}', ${index})"
        style="
          width:100%;
          border:0;
          padding:15px;
          border-radius:16px;
          background:${done ? "#e8f3ef" : "#075c52"};
          color:${done ? "#075c52" : "#fff"};
          font-weight:800;
          cursor:pointer;
        "
      >

        ${done
          ? "✓ تمت هذه المرحلة"
          : "إتمام هذه المرحلة"}

      </button>

    </div>

  `;
}


/* =========================
   إتمام مرحلة
   ========================= */

function toggleJourney(id, index) {

  if (completed.includes(id)) {

    completed =
      completed.filter(item => item !== id);

  } else {

    completed.push(id);

  }

  saveData();

  openJourney(index, false);
}


/* =========================
   المفضلة
   ========================= */

function toggleFavorite(index) {

  if (favorites.includes(index)) {

    favorites =
      favorites.filter(item => item !== index);

  } else {

    favorites.push(index);

  }

  saveData();

  openPlace(index, false);
}


/* =========================
   الوضع الداكن
   ========================= */

function toggleTheme() {

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "hajjDark",
    document.body.classList.contains("dark")
  );

  if (
    !$("#page").hidden &&
    location.hash === "#settings"
  ) {
    showPage("settings", false);
  }
}


/* =========================
   القائمة الجانبية
   ========================= */

function openDrawer() {

  const drawer = $("#drawer");
  const shade = $("#shade");

  if (drawer) drawer.classList.add("open");
  if (shade) shade.classList.add("show");
}


function closeDrawer() {

  const drawer = $("#drawer");
  const shade = $("#shade");

  if (drawer) drawer.classList.remove("open");
  if (shade) shade.classList.remove("show");
}


/* =========================
   زر الرجوع
   ========================= */

function back() {

  if (
    location.hash &&
    history.length > 1
  ) {
    history.back();
  } else {
    home();
  }
}


/* =========================
   شريط التنقل
   ========================= */

function updateBottomNav(active) {

  $$("[data-page]").forEach(button => {

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


/* =========================
   البحث
   ========================= */

function searchPlaces(value) {

  const query =
    value.trim().toLowerCase();

  if (!query) {
    cards();
    return;
  }

  const results = places.filter(place => {

    const content = [
      place.name,
      place.tag,
      place.text,
      ...place.details
    ].join(" ").toLowerCase();

    return content.includes(query);

  });

  cards(results);
}


/* =========================
   الأحداث
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* الوضع الداكن */

  if (
    localStorage.getItem("hajjDark") === "true"
  ) {
    document.body.classList.add("dark");
  }


  /* بطاقات الصفحة الرئيسية */

  cards();


  /* القائمة */

  const menuBtn = $("#menuBtn");

  if (menuBtn) {
    menuBtn.addEventListener(
      "click",
      openDrawer
    );
  }


  const closeBtn =
    $("#closeDrawer");

  if (closeBtn) {
    closeBtn.addEventListener(
      "click",
      closeDrawer
    );
  }


  const shade =
    $("#shade");

  if (shade) {
    shade.addEventListener(
      "click",
      closeDrawer
    );
  }


  /* الرجوع */

  const backBtn =
    $("#backBtn");

  if (backBtn) {
    backBtn.addEventListener(
      "click",
      back
    );
  }


  const detailBack =
    $("#detailBack");

  if (detailBack) {
    detailBack.addEventListener(
      "click",
      back
    );
  }


  /* الوضع الداكن */

  const themeBtn =
    $("#themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener(
      "click",
      toggleTheme
    );
  }


  /* التنقل */

  $$("[data-page]").forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        closeDrawer();

        const page =
          button.dataset.page;

        if (page === "home") {
          home(true);
        } else {
          showPage(page, true);
        }

      }
    );

  });


  /* البحث */

  const search =
    $("#search");

  if (search) {

    search.addEventListener(
      "input",
      event => {

        searchPlaces(
          event.target.value
        );

      }
    );

  }


  /* زر المفضلة في رأس التفاصيل */

  const favBtn =
    $("#favBtn");

  if (favBtn) {

    favBtn.addEventListener(
      "click",
      () => {

        const hash =
          location.hash;

        if (hash.startsWith("#place-")) {

          const index =
            Number(hash.replace("#place-", ""));

          toggleFavorite(index);

        }

      }
    );

  }


  /* استعادة الصفحة من الرابط */

  handleRoute();

});


/* =========================
   التعامل مع الرابط
   ========================= */

function handleRoute() {

  const hash =
    location.hash;


  if (!hash || hash === "#home") {

    home(false);
    return;

  }


  if (hash.startsWith("#place-")) {

    const index =
      Number(hash.replace("#place-", ""));

    openPlace(index, false);
    return;

  }


  if (hash.startsWith("#journey-")) {

    const index =
      Number(hash.replace("#journey-", ""));

    openJourney(index, false);
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
    "settings"
  ];

  if (validPages.includes(page)) {

    showPage(page, false);

  } else {

    home(false);

  }
}


/* =========================
   زر الرجوع في المتصفح والهاتف
   ========================= */

window.addEventListener(
  "popstate",
  handleRoute
);


/* =========================
   Service Worker
   ========================= */

if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .catch(error => {
          console.log(
            "Service Worker:",
            error
          );
        });

    }
  );

}
console.log("HAJJ APP JS LOADED");

/* =========================================================
   دليل الحاج - app.js v12 (الميزات الكاملة)
   جميع الميزات الـ 30 مدمجة
========================================================= */

/* =========================================================
   SUPABASE - الاتصال موجود في index.html
========================================================= */

/* =========================================================
   البيانات الأساسية - الأماكن
========================================================= */
const places = [
    {
        name: "المسجد الحرام",
        tag: "مكة المكرمة",
        image: "images/haram.jpg",
        text: "أعظم مساجد المسلمين، وفيه الكعبة المشرفة.",
        lat: 21.4225,
        lng: 39.8262,
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
        lat: 21.4133,
        lng: 39.8935,
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
        lat: 21.3546,
        lng: 39.9843,
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
        lat: 21.3948,
        lng: 39.9436,
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
        lat: 21.4162,
        lng: 39.8892,
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
        lat: 21.4225,
        lng: 39.8272,
        details: [
            "السعي سبعة أشواط.",
            "يبدأ الشوط من الصفا وينتهي بالمروة.",
            "احرص على متابعة عدد الأشواط."
        ]
    }
];

/* =========================================================
   مراحل رحلة الحج (مع دعم أنواع الحج)
========================================================= */
const journeySteps = {
    mufrid: [
        { id: "preparation", title: "الاستعداد للحج", location: "قبل الانطلاق", image: "images/haram.jpg", description: "استعد لرحلتك قبل الانطلاق وتأكد من الوثائق والتصاريح.", steps: ["تأكد من الوثائق والتصاريح المطلوبة.", "جهز حقيبتك ومستلزماتك الشخصية.", "راجع التعليمات الرسمية."] },
        { id: "ihram", title: "الإحرام", location: "الميقات", image: "images/ihram.jpg", description: "يدخل الحاج في النسك بالنية.", steps: ["الاغتسال والتنظف.", "لبس ملابس الإحرام.", "النية والدخول في النسك.", "الإكثار من التلبية."] },
        { id: "mina", title: "يوم التروية", location: "منى", image: "images/mina.jpg", description: "التوجه إلى منى.", steps: ["التوجه إلى منى.", "الإكثار من التلبية والذكر.", "الالتزام بمواعيد التفويج.", "الراحة والاستعداد ليوم عرفة."] },
        { id: "arafat", title: "يوم عرفة", location: "عرفات", image: "images/arafat.jpg", description: "الوقوف بعرفة هو ركن الحج الأعظم.", steps: ["الوصول إلى عرفات.", "الوقوف بعرفة.", "الإكثار من الدعاء والذكر.", "الاستعداد للإفاضة."] },
        { id: "muzdalifah", title: "مزدلفة", location: "مزدلفة", image: "images/muzdalifah.jpg", description: "الإفاضة من عرفات إلى مزدلفة.", steps: ["الإفاضة من عرفات.", "الالتزام بتعليمات المجموعة.", "المبيت بحسب الأحكام.", "الاستعداد للانتقال إلى منى."] },
        { id: "sacrifice", title: "يوم النحر", location: "منى", image: "images/day-sacrifice.jpg", description: "يوم عظيم من أيام الحج.", steps: ["رمي جمرة العقبة.", "الذبح لمن كان عليه هدي.", "الحلق أو التقصير.", "طواف الإفاضة والسعي."] },
        { id: "tawaf", title: "طواف الإفاضة", location: "المسجد الحرام", image: "images/haram.jpg", description: "يطوف الحاج بالبيت سبعة أشواط.", steps: ["الاستعداد للطواف.", "الطواف سبعة أشواط.", "الدعاء والذكر.", "الانتقال إلى السعي."] },
        { id: "jamarat", title: "أيام التشريق", location: "منى", image: "images/jamarat.jpg", description: "رمي الجمرات في أيام التشريق.", steps: ["الالتزام بمواعيد التفويج.", "رمي الجمرات.", "اتباع المسارات المحددة.", "العودة إلى السكن."] },
        { id: "farewell", title: "طواف الوداع", location: "المسجد الحرام", image: "images/farewell-tawaf.jpg", description: "طواف الوداع عند مغادرة مكة.", steps: ["التأكد من موعد المغادرة.", "أداء طواف الوداع.", "الاستعداد للعودة.", "الالتزام بتعليمات النقل."] }
    ],
    mutamatti: [
        { id: "preparation", title: "الاستعداد للحج والعمرة", location: "قبل الانطلاق", image: "images/haram.jpg", description: "استعد لرحلتك وتأكد من الوثائق.", steps: ["تأكد من الوثائق.", "جهز حقيبتك.", "راجع التعليمات."] },
        { id: "umrah", title: "أداء العمرة", location: "المسجد الحرام", image: "images/haram.jpg", description: "أداء العمرة أولاً ثم التحلل.", steps: ["الإحرام من الميقات.", "الطواف سبعة أشواط.", "السعي بين الصفا والمروة.", "الحلق أو التقصير."] },
        { id: "ihram_hajj", title: "الإحرام للحج", location: "مكة", image: "images/ihram.jpg", description: "الإحرام للحج من مكة.", steps: ["النية والإحرام للحج.", "التوجه إلى منى.", "الإكثار من التلبية."] },
        { id: "arafat", title: "يوم عرفة", location: "عرفات", image: "images/arafat.jpg", description: "الوقوف بعرفة.", steps: ["الوصول إلى عرفات.", "الوقوف بعرفة.", "الإكثار من الدعاء."] },
        { id: "muzdalifah", title: "مزدلفة", location: "مزدلفة", image: "images/muzdalifah.jpg", description: "الإفاضة إلى مزدلفة.", steps: ["الإفاضة من عرفات.", "المبيت في مزدلفة.", "الاستعداد للانتقال إلى منى."] },
        { id: "sacrifice", title: "يوم النحر", location: "منى", image: "images/day-sacrifice.jpg", description: "أعمال يوم النحر.", steps: ["رمي جمرة العقبة.", "الذبح.", "الحلق أو التقصير.", "طواف الإفاضة."] },
        { id: "tawaf", title: "طواف الإفاضة", location: "المسجد الحرام", image: "images/haram.jpg", description: "طواف الإفاضة.", steps: ["الطواف سبعة أشواط.", "السعي.", "الدعاء."] },
        { id: "jamarat", title: "أيام التشريق", location: "منى", image: "images/jamarat.jpg", description: "رمي الجمرات.", steps: ["رمي الجمرات.", "المبيت في منى.", "العودة إلى مكة."] },
        { id: "farewell", title: "طواف الوداع", location: "المسجد الحرام", image: "images/farewell-tawaf.jpg", description: "طواف الوداع.", steps: ["طواف الوداع.", "الاستعداد للعودة."] }
    ],
    qarin: [
        { id: "preparation", title: "الاستعداد للحج والعمرة", location: "قبل الانطلاق", image: "images/haram.jpg", description: "استعد لرحلتك.", steps: ["تأكد من الوثائق.", "جهز حقيبتك.", "راجع التعليمات."] },
        { id: "ihram", title: "الإحرام بالحج والعمرة", location: "الميقات", image: "images/ihram.jpg", description: "الإحرام بالحج والعمرة معاً.", steps: ["النية والإحرام.", "التلبية.", "التوجه إلى مكة."] },
        { id: "tawaf", title: "طواف القدوم", location: "المسجد الحرام", image: "images/haram.jpg", description: "طواف القدوم.", steps: ["الطواف سبعة أشواط.", "السعي.", "الدعاء."] },
        { id: "arafat", title: "يوم عرفة", location: "عرفات", image: "images/arafat.jpg", description: "الوقوف بعرفة.", steps: ["الوصول إلى عرفات.", "الوقوف بعرفة.", "الإكثار من الدعاء."] },
        { id: "muzdalifah", title: "مزدلفة", location: "مزدلفة", image: "images/muzdalifah.jpg", description: "الإفاضة إلى مزدلفة.", steps: ["الإفاضة.", "المبيت.", "الاستعداد للانتقال."] },
        { id: "sacrifice", title: "يوم النحر", location: "منى", image: "images/day-sacrifice.jpg", description: "أعمال يوم النحر.", steps: ["رمي جمرة العقبة.", "الذبح.", "الحلق أو التقصير.", "طواف الإفاضة."] },
        { id: "tawaf_ifadah", title: "طواف الإفاضة", location: "المسجد الحرام", image: "images/haram.jpg", description: "طواف الإفاضة.", steps: ["الطواف سبعة أشواط.", "السعي.", "الدعاء."] },
        { id: "jamarat", title: "أيام التشريق", location: "منى", image: "images/jamarat.jpg", description: "رمي الجمرات.", steps: ["رمي الجمرات.", "المبيت في منى."] },
        { id: "farewell", title: "طواف الوداع", location: "المسجد الحرام", image: "images/farewell-tawaf.jpg", description: "طواف الوداع.", steps: ["طواف الوداع.", "الاستعداد للعودة."] }
    ]
};

/* =========================================================
   الأدعية
========================================================= */
const duas = [
    { title: "التلبية", text: "لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك." },
    { title: "دعاء جامع", text: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار." },
    { title: "دعاء يوم عرفة", text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير." },
    { title: "دعاء الطواف", text: "اللهم إني أسألك في طوفي هذا أن تجعله حجاً مبروراً وسعياً مشكوراً." },
    { title: "دعاء السعي", text: "رب اجعلني من عبادك المتقين، واغفر لي ولوالدي وللمؤمنين." }
];

/* =========================================================
   الإرشادات
========================================================= */
const guides = [
    ["قبل السفر", "راجع الوثائق والتصاريح وتعليمات الجهة المنظمة، وجهز احتياجاتك الشخصية."],
    ["في المشاعر", "التزم بمواعيد التفويج ولا تنفصل عن مجموعتك دون معرفة نقطة التجمع."],
    ["الحرارة", "احرص على شرب الماء واستخدام وسائل الوقاية من الشمس وتجنب التعرض الطويل للحرارة."],
    ["الازدحام", "اتبع المسارات ولا تدفع أو تزاحم الآخرين."],
    ["الطوارئ", "عند الحاجة اطلب المساعدة من الجهات المختصة أو مقدم الخدمة."]
];

/* =========================================================
   الأسئلة والأجوبة
========================================================= */
const faqs = [
    { q: "ما هو الحج؟", a: "الحج هو الركن الخامس من أركان الإسلام، وهو زيارة بيت الله الحرام في مكة لأداء مناسك مخصوصة في وقت محدد." },
    { q: "ما هي أنواع الحج؟", a: "ثلاثة أنواع: مفرد (حج فقط)، متمتع (عمرة ثم حج)، وقارن (عمرة وحج معاً)." },
    { q: "ما هو يوم عرفة؟", a: "اليوم التاسع من ذي الحجة، وهو الركن الأعظم في الحج، ويقف فيه الحجاج على جبل عرفة." },
    { q: "كم عدد أشواط الطواف؟", a: "سبعة أشواط حول الكعبة المشرفة، يبدأ من الحجر الأسود وينتهي عنده." },
    { q: "ما هي الجمرات؟", a: "ثلاث جمرات في منى: الصغرى، الوسطى، والعقبة، يرميها الحجاج بسبع حصيات كل يوم من أيام التشريق." }
];

/* =========================================================
   أذكار اليومية
========================================================= */
const dailyDhikr = [
    { text: "سبحان الله وبحمده", count: 100 },
    { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير", count: 10 },
    { text: "سبحان الله العظيم", count: 100 },
    { text: "اللهم صل على محمد وعلى آل محمد", count: 10 }
];

/* =========================================================
   أحكام الحج
========================================================= */
const rulings = [
    { title: "المواقيت المكانية", desc: "مواقيت الإحرام التي حددها النبي ﷺ لأهل الآفاق." },
    { title: "محظورات الإحرام", desc: "الأفعال المحرمة على المحرم كالطيب والصيد والجماع." },
    { title: "صفة الحج", desc: "كيفية أداء المناسك بالترتيب الصحيح حسب نوع الحج." },
    { title: "الهدي والفدية", desc: "الأحكام المتعلقة بالهدي والفدية في الحج والعمرة." }
];

/* =========================================================
   قصص الأنبياء
========================================================= */
const stories = [
    { title: "قصة إبراهيم وإسماعيل", desc: "قصة بناء الكعبة وذبح إسماعيل عليه السلام." },
    { title: "قصة هاجر والزمزم", desc: "قصة سعي هاجر بين الصفا والمروة وظهور ماء زمزم." },
    { title: "قصة الفيل", desc: "قصة أبرهة الحبشي وجيش الفيل وهجومه على الكعبة." }
];

/* =========================================================
   جهات الاتصال الطارئة
========================================================= */
const emergencyContacts = [
    { name: "الدفاع المدني", number: "998" },
    { name: "الهلال الأحمر", number: "997" },
    { name: "الشرطة", number: "999" },
    { name: "الإسعاف", number: "997" },
    { name: "الحجاج الطوارئ", number: "800-555-5555" }
];

/* =========================================================
   التخزين المحلي
========================================================= */
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
let currentPilgrim = null;
let currentLocation = null;
let hajjType = localStorage.getItem("hajjType") || "mufrid";
let fontLevel = localStorage.getItem("hajjFont") || "medium";

/* =========================================================
   أدوات DOM
========================================================= */
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =========================================================
   الحصول على مراحل الرحلة حسب النوع
========================================================= */
function getJourneySteps() {
    return journeySteps[hajjType] || journeySteps.mufrid;
}

const journey = getJourneySteps();

/* =========================================================
   مزامنة بيانات الحاج
========================================================= */
function syncPilgrim() {
    try {
        const saved = localStorage.getItem("hajjPilgrim");
        currentPilgrim = saved ? JSON.parse(saved) : null;
    } catch {
        currentPilgrim = null;
    }
}

/* =========================================================
   حفظ البيانات
========================================================= */
function saveData() {
    localStorage.setItem("hajjFav", JSON.stringify(favorites));
    localStorage.setItem("hajjCompleted", JSON.stringify(completed));
}

/* =========================================================
   تقدم الرحلة
========================================================= */
function progressData() {
    const j = getJourneySteps();
    const done = j.filter(item => completed.includes(item.id)).length;
    const total = j.length;
    const percent = total ? Math.round(done / total * 100) : 0;
    return { done, total, percent };
}

/* =========================================================
   إشعارات Toast
========================================================= */
function showToast(message) {
    const old = document.querySelector(".custom-toast");
    if (old) old.remove();

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

/* =========================================================
   اختيار نوع الحج
========================================================= */
function selectHajjType(type) {
    hajjType = type;
    localStorage.setItem("hajjType", type);

    document.querySelectorAll(".type-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.type === type);
    });

    const desc = document.getElementById("hajjTypeDesc");
    const descriptions = {
        mufrid: "<strong>المفرد:</strong> تنوي الحج فقط، وتلبي بالحج من الميقات.",
        mutamatti: "<strong>المتمتع:</strong> تنوي العمرة أولاً، ثم الحج بعد التحلل من العمرة.",
        qarin: "<strong>القارن:</strong> تنوي العمرة والحج معاً، وتلبي بهما من الميقات."
    };
    if (desc) desc.innerHTML = descriptions[type] || descriptions.mufrid;

    // تحديث قائمة المراحل
    const newJourney = getJourneySteps();
    // إعادة تعيين completed لتناسب المراحل الجديدة
    // (نحافظ على completed للمراحل المشتركة فقط)
    const newCompleted = completed.filter(id => newJourney.some(item => item.id === id));
    completed = newCompleted;
    saveData();

    // إعادة عرض صفحة المناسك إذا كانت مفتوحة
    if (location.hash === "#rituals") {
        showPage("rituals", false);
    }

    // تحديث واجهة الرحلة
    updateJourneyUI();
    showToast("تم اختيار نوع الحج: " + (type === "mufrid" ? "مفرد" : type === "mutamatti" ? "متمتع" : "قارن"));
}

/* =========================================================
   تحديث واجهة الرحلة
========================================================= */
function updateJourneyUI() {
    const p = progressData();
    const progressEl = document.getElementById("journeyProgress");
    if (progressEl) {
        progressEl.textContent = p.percent + "% مكتمل (" + p.done + "/" + p.total + ")";
    }
}

/* =========================================================
   تحديث واجهة الحاج
========================================================= */
function updatePilgrimUI() {
    syncPilgrim();
    const name = currentPilgrim?.name || "الحاج";
    const barName = $("#pilgrimName");
    if (barName) barName.textContent = name;
    const drawerName = $("#drawerUserName");
    if (drawerName) drawerName.textContent = currentPilgrim ? currentPilgrim.name : "زائر";
    const drawerStatus = $("#drawerUserStatus");
    if (drawerStatus) drawerStatus.textContent = currentPilgrim ? "بطاقة الحاج" : "وضع الزائر";
}

/* =========================================================
   الصفحة الرئيسية
========================================================= */
function home(push = false) {
    if (push) history.pushState({ page: "home" }, "", "#home");
    const main = $("#main");
    const page = $("#page");
    const detail = $("#detail");
    if (main) main.style.display = "block";
    if (page) page.hidden = true;
    if (detail) detail.hidden = true;
    updateBottomNav("home");
    updateJourneyUI();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   بطاقات الأماكن في الرئيسية
========================================================= */
function cards(list = places) {
    const element = $("#placeGrid");
    if (!element) return;
    if (!list.length) {
        element.innerHTML = `<div class="info empty-state"><div class="empty-icon">⌕</div><h3>لا توجد نتائج</h3><p>جرّب البحث باسم المكان أو المشعر.</p></div>`;
        return;
    }
    element.innerHTML = list.map((place, index) => {
        const fav = favorites.includes(index);
        return `
            <article class="card" onclick="openPlace(${index})">
                <div class="card-image-wrap">
                    <img src="${escapeHTML(place.image)}" alt="${escapeHTML(place.name)}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg'">
                    <button class="card-fav ${fav ? "active" : ""}" aria-label="المفضلة" type="button" onclick="event.stopPropagation();toggleFavorite(${index})">
                        ${fav ? "♥" : "♡"}
                    </button>
                </div>
                <div class="card-body">
                    <span class="pill">${escapeHTML(place.tag)}</span>
                    <h3>${escapeHTML(place.name)}</h3>
                    <p>${escapeHTML(place.text)}</p>
                    <span class="card-more">عرض التفاصيل ←</span>
                </div>
            </article>
        `;
    }).join("");
}

/* =========================================================
   عرض صفحة داخلية
========================================================= */
function showPage(name, push = true) {
    if (push) history.pushState({ type: "page", name }, "", "#" + name);

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
        settings: "الإعدادات",
        pilgrim: "بطاقة الحاج",
        tasbih: "عداد التسبيح",
        qibla: "القبلة",
        prayer: "مواقيت الصلاة",
        weather: "الطقس",
        faq: "أسئلة وأجوبة"
    };
    const title = $("#pageTitle");
    if (title) title.textContent = titles[name] || "دليل الحاج";

    const content = $("#pageContent");
    if (!content) return;
    let html = "";

    const j = getJourneySteps();

    /* =====================================================
       الأماكن
    ===================================================== */
    if (name === "places") {
        html = `
            <div class="page-intro"><span class="pill">استكشف</span><h2>أماكن ومشاعر الحج</h2><p>تعرف على أبرز الأماكن المرتبطة برحلة الحج.</p></div>
            <div class="list-stack">
                ${places.map((place, index) => `
                    <div class="list-item clickable" onclick="openPlace(${index})">
                        <img src="${escapeHTML(place.image)}" alt="${escapeHTML(place.name)}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg'">
                        <div><b>${escapeHTML(place.name)}</b><small>${escapeHTML(place.tag)}</small></div>
                        <span>‹</span>
                    </div>
                `).join("")}
            </div>
        `;
    }

    /* =====================================================
       المناسك
    ===================================================== */
    else if (name === "rituals") {
        const p = progressData();
        html = `
            <div class="progress-hero">
                <div><span>رحلة الحج</span><h2>${p.percent}% مكتمل</h2><p>أنجزت ${p.done} من ${p.total} مراحل</p></div>
                <div class="progress-ring" style="--progress:${p.percent}%"><b>${p.percent}%</b></div>
            </div>
            <div class="journey-list">
                ${j.map((item, index) => {
                    const done = completed.includes(item.id);
                    return `
                        <div class="journey-row ${done ? "done" : ""}" onclick="openJourney(${index})">
                            <div class="journey-num">${done ? "✓" : index + 1}</div>
                            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg'">
                            <div class="journey-text"><b>${escapeHTML(item.title)}</b><small>${escapeHTML(item.location)}</small></div>
                            <span>›</span>
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
        html = `<div class="page-intro"><span class="pill">ذكر ودعاء</span><h2>أدعية مختارة</h2><p>اقرأ وكرر ما تيسر من الذكر والدعاء.</p></div>`;
        html += duas.map((item, index) => `
            <div class="info dua-card">
                <div class="dua-number">${index + 1}</div>
                <div>
                    <span class="pill">دعاء</span>
                    <h3>${escapeHTML(item.title)}</h3>
                    <p>${escapeHTML(item.text)}</p>
                    <button class="primary-btn" type="button" style="margin-top:8px;padding:8px 14px;font-size:12px;" onclick="speakText('${escapeHTML(item.text)}')">🔊 استمع</button>
                </div>
            </div>
        `).join("");
    }

    /* =====================================================
       الإرشادات
    ===================================================== */
    else if (name === "guide") {
        html = `<div class="page-intro"><span class="pill">رفيقك في الرحلة</span><h2>إرشادات مهمة</h2><p>نصائح عامة تساعدك على رحلة أكثر تنظيمًا وأمانًا.</p></div>`;
        html += guides.map(item => `
            <div class="info guide-card">
                <div class="guide-icon">✓</div>
                <div><h3>${escapeHTML(item[0])}</h3><p>${escapeHTML(item[1])}</p></div>
            </div>
        `).join("");
    }

    /* =====================================================
       المفضلة
    ===================================================== */
    else if (name === "favorites") {
        const valid = favorites.filter(index => places[index]);
        if (valid.length) {
            html = `<div class="page-intro"><span class="pill">محفوظاتك</span><h2>الأماكن المفضلة</h2><p>كل الأماكن التي حفظتها للوصول السريع.</p></div>`;
            html += valid.map(index => `
                <div class="list-item clickable" onclick="openPlace(${index})">
                    <img src="${escapeHTML(places[index].image)}" alt="${escapeHTML(places[index].name)}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg'">
                    <div><b>${escapeHTML(places[index].name)}</b><small>${escapeHTML(places[index].tag)}</small></div>
                    <button class="mini-remove" type="button" onclick="event.stopPropagation();toggleFavorite(${index})">♥</button>
                </div>
            `).join("");
        } else {
            html = `<div class="info empty-state"><div class="empty-icon">♡</div><h3>المفضلة فارغة</h3><p>افتح أي مكان واضغط على القلب لإضافته هنا.</p><button class="primary-btn" type="button" onclick="showPage('places')">استكشاف الأماكن</button></div>`;
        }
    }

    /* =====================================================
       عداد التسبيح
    ===================================================== */
    else if (name === "tasbih") {
        let counts = JSON.parse(localStorage.getItem("tasbihCounts")) || { subhanAllah: 0, alhamdulillah: 0, allahuAkbar: 0 };
        const total = counts.subhanAllah + counts.alhamdulillah + counts.allahuAkbar;

        html = `
            <div class="page-intro"><span class="pill">ذكر</span><h2>عداد التسبيح</h2><p>احسب تسبيحاتك واذكارك اليومية.</p></div>
            <div class="info tasbih-counter">
                <div class="tasbih-number">${total}</div>
                <p style="color:var(--muted);font-size:12px;">إجمالي التسبيحات</p>
                <div class="tasbih-buttons">
                    <button class="tasbih-btn green" onclick="countTasbih('subhanAllah')">سبحان الله<br><small id="count-subhanAllah">${counts.subhanAllah}</small></button>
                    <button class="tasbih-btn gold" onclick="countTasbih('alhamdulillah')">الحمد لله<br><small id="count-alhamdulillah">${counts.alhamdulillah}</small></button>
                    <button class="tasbih-btn green" onclick="countTasbih('allahuAkbar')">الله أكبر<br><small id="count-allahuAkbar">${counts.allahuAkbar}</small></button>
                </div>
                <div style="margin-top:15px;display:flex;gap:10px;">
                    <button class="tasbih-btn danger" style="flex:1;" onclick="resetTasbih()">🔄 إعادة ضبط</button>
                </div>
                <div style="margin-top:15px;border-top:1px solid var(--line);padding-top:15px;">
                    <h4>الأذكار اليومية</h4>
                    ${dailyDhikr.map(d => `
                        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);">
                            <span>${escapeHTML(d.text)}</span>
                            <span style="color:var(--gold);font-weight:700;">${d.count}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    }

    /* =====================================================
       القبلة
    ===================================================== */
    else if (name === "qibla") {
        html = `
            <div class="page-intro"><span class="pill">اتجاه</span><h2>القبلة</h2><p>اتجاه الكعبة المشرفة من موقعك الحالي.</p></div>
            <div class="info qibla-container">
                <div class="qibla-arrow" id="qiblaArrow">🧭</div>
                <div class="qibla-degree" id="qiblaDegree">جاري التحديث...</div>
                <p style="color:var(--muted);font-size:12px;">اضغط الزر لتحديث الاتجاه</p>
                <button class="primary-btn" type="button" onclick="updateQibla()">🔄 تحديث الاتجاه</button>
                <p style="color:var(--muted);font-size:11px;margin-top:10px;">ملاحظة: البوصلة تعمل على الأجهزة التي تدعم مستشعر الاتجاه.</p>
            </div>
        `;
        setTimeout(updateQibla, 500);
    }

    /* =====================================================
       مواقيت الصلاة
    ===================================================== */
    else if (name === "prayer") {
        html = `
            <div class="page-intro"><span class="pill">أوقات</span><h2>مواقيت الصلاة</h2><p>أوقات الصلاة في مكة المكرمة.</p></div>
            <div class="info" id="prayerContainer">
                <p style="text-align:center;color:var(--muted);">جاري تحميل مواقيت الصلاة...</p>
            </div>
        `;
        setTimeout(fetchPrayerTimes, 500);
    }

    /* =====================================================
       الطقس
    ===================================================== */
    else if (name === "weather") {
        html = `
            <div class="page-intro"><span class="pill">مناخ</span><h2>حالة الطقس</h2><p>درجة الحرارة والرطوبة في مكة المكرمة.</p></div>
            <div class="info" id="weatherContainer">
                <p style="text-align:center;color:var(--muted);">جاري تحميل بيانات الطقس...</p>
            </div>
        `;
        setTimeout(fetchWeather, 500);
    }

    /* =====================================================
       أسئلة وأجوبة
    ===================================================== */
    else if (name === "faq") {
        html = `<div class="page-intro"><span class="pill">استفسارات</span><h2>أسئلة وأجوبة</h2><p>إجابات على الأسئلة الشائعة عن الحج.</p></div>`;
        html += faqs.map((item, index) => `
            <div class="info" style="cursor:pointer;" onclick="toggleFaq(${index})">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <h3 style="margin:0;font-size:16px;">❓ ${escapeHTML(item.q)}</h3>
                    <span id="faqIcon${index}">➕</span>
                </div>
                <p id="faqAnswer${index}" style="display:none;margin-top:10px;color:var(--text);">${escapeHTML(item.a)}</p>
            </div>
        `).join("");
    }

    /* =====================================================
       بطاقة الحاج
    ===================================================== */
    else if (name === "pilgrim") {
        html = renderPilgrimPage();
    }

    /* =====================================================
       الإعدادات
    ===================================================== */
    else if (name === "settings") {
        const dark = document.body.classList.contains("dark");
        const p = progressData();
        const font = localStorage.getItem("hajjFont") || "medium";
        const fontNames = { small: "صغير", medium: "متوسط", large: "كبير" };

        html = `
            <div class="page-intro"><span class="pill">تحكم</span><h2>الإعدادات</h2><p>خصّص التطبيق حسب رغبتك.</p></div>

            <div class="info pilgrim-settings-card" onclick="showPage('pilgrim')">
                <div class="pilgrim-settings-icon">👤</div>
                <div>
                    <span class="pill">بطاقة الحاج</span>
                    <h3 class="pilgrim-name">${currentPilgrim ? escapeHTML(currentPilgrim.name) : "تسجيل دخول الحاج"}</h3>
                    <p>${currentPilgrim ? "عرض بيانات الحاج والموقع" : "افتح بطاقة الحاج من شاشة الدخول"}</p>
                </div>
            </div>

            <div class="settings-card">
                <div><b>الوضع الداكن</b><small>${dark ? "مفعّل" : "غير مفعّل"}</small></div>
                <button class="theme-switch ${dark ? "on" : ""}" type="button" onclick="toggleTheme()"><span></span></button>
            </div>

            <div class="settings-card">
                <div><b>حجم الخط</b><small>${fontNames[font] || "متوسط"}</small></div>
                <div style="display:flex;gap:6px;">
                    <button class="icon-btn" style="width:36px;height:36px;font-size:12px;" onclick="setFont('small')">ص</button>
                    <button class="icon-btn" style="width:36px;height:36px;font-size:16px;" onclick="setFont('medium')">م</button>
                    <button class="icon-btn" style="width:36px;height:36px;font-size:20px;" onclick="setFont('large')">ك</button>
                </div>
            </div>

            <div class="info">
                <h3>تقدم الرحلة</h3>
                <p>أنجزت ${p.done} من ${p.total} مراحل (${p.percent}%).</p>
                <button class="danger-btn" type="button" onclick="resetProgress()">إعادة ضبط تقدم الرحلة</button>
            </div>

            <div class="info">
                <h3>مسح البيانات</h3>
                <button class="danger-btn" type="button" onclick="clearAllData()">🗑️ مسح جميع البيانات</button>
            </div>

            <div class="info">
                <h3>مشاركة التطبيق</h3>
                <button class="primary-btn" type="button" onclick="shareApp()" style="width:100%;">📤 مشاركة دليل الحاج</button>
            </div>

            <div class="info">
                <h3>حول التطبيق</h3>
                <p>دليل الحاج - رفيقك في رحلة الحج. نسخة 2.0</p>
                <p class="muted-note">جميع الميزات مجانية، ومصممة لخدمة حجاج بيت الله الحرام.</p>
            </div>
        `;
    }

    content.innerHTML = html;
    updateBottomNav(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   بطاقة الحاج
========================================================= */
function renderPilgrimPage() {
    syncPilgrim();
    if (!currentPilgrim) {
        return `<div class="info empty-state visitor-card"><div class="empty-icon">👤</div><span class="pill">وضع الزائر</span><h3>أنت تتصفح كزائر</h3><p>يمكنك استخدام ميزات دليل الحاج واستكشاف الأماكن والمناسك والأدعية والإرشادات.</p><p class="muted-note">سجّل الدخول للوصول إلى بطاقة الحاج وبياناتك وموقعك المرتبط بالحساب.</p></div>`;
    }
    return `
        <div class="pilgrim-profile">
            <div class="pilgrim-profile-icon">👤</div>
            <div><span class="pill">بطاقة الحاج</span><h2>${escapeHTML(currentPilgrim.name)}</h2><p>تم التحقق من بيانات الحاج.</p></div>
        </div>
        <div class="info">
            <h3>معلومات الحساب</h3>
            <div class="pilgrim-info-row"><span>اسم الحاج</span><b>${escapeHTML(currentPilgrim.name)}</b></div>
            <div class="pilgrim-info-row"><span>معرف المستخدم</span><b class="small-code">${escapeHTML(currentPilgrim.user_id || "—")}</b></div>
        </div>
        <div class="info">
            <h3>أرقام الطوارئ</h3>
            ${emergencyContacts.map(c => `
                <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line);">
                    <span>${escapeHTML(c.name)}</span>
                    <span style="font-weight:700;direction:ltr;">${escapeHTML(c.number)}</span>
                </div>
            `).join("")}
        </div>
        <div class="info">
            <h3>أحكام الحج</h3>
            ${rulings.map(r => `
                <div style="padding:8px 0;border-bottom:1px solid var(--line);">
                    <strong>${escapeHTML(r.title)}</strong>
                    <p style="margin:4px 0 0;font-size:13px;">${escapeHTML(r.desc)}</p>
                </div>
            `).join("")}
        </div>
    `;
}

/* =========================================================
   فتح المكان
========================================================= */
function openPlace(index, push = true) {
    const place = places[index];
    if (!place) return;
    if (push) history.pushState({ type: "place", index }, "", "#place-" + index);

    const main = $("#main");
    const page = $("#page");
    const detail = $("#detail");
    if (main) main.style.display = "none";
    if (page) page.hidden = true;
    if (detail) detail.hidden = false;

    const title = $("#detailTitle");
    if (title) title.textContent = place.name;

    const favBtn = $("#favBtn");
    if (favBtn) favBtn.textContent = favorites.includes(index) ? "♥" : "♡";

    const content = $("#detailContent");
    if (!content) return;

    content.innerHTML = `
        <img class="detail-hero" src="${escapeHTML(place.image)}" alt="${escapeHTML(place.name)}" onerror="this.onerror=null;this.src='images/placeholder.svg'">
        <div class="info detail-info">
            <span class="pill">${escapeHTML(place.tag)}</span>
            <h2>${escapeHTML(place.name)}</h2>
            <p>${escapeHTML(place.text)}</p>
            ${place.lat && place.lng ? `<button class="primary-btn" style="width:100%;margin:10px 0;" onclick="openMap(${place.lat},${place.lng},'${escapeHTML(place.name)}')">🗺️ عرض على الخريطة</button>` : ''}
            <h3>معلومات مهمة</h3>
            <ul>${place.details.map(d => `<li>${escapeHTML(d)}</li>`).join("")}</ul>
            <button class="primary-btn" type="button" onclick="toggleFavorite(${index})">${favorites.includes(index) ? "♥ إزالة من المفضلة" : "♡ إضافة إلى المفضلة"}</button>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   فتح مرحلة
========================================================= */
function openJourney(index, push = true) {
    const j = getJourneySteps();
    const item = j[index];
    if (!item) return;
    if (push) history.pushState({ type: "journey", index }, "", "#journey-" + index);

    const main = $("#main");
    const page = $("#page");
    const detail = $("#detail");
    if (main) main.style.display = "none";
    if (page) page.hidden = true;
    if (detail) detail.hidden = false;

    const title = $("#detailTitle");
    if (title) title.textContent = item.title;

    const done = completed.includes(item.id);
    const favBtn = $("#favBtn");
    if (favBtn) favBtn.textContent = done ? "✓" : "○";

    const content = $("#detailContent");
    if (!content) return;

    content.innerHTML = `
        <img class="detail-hero" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" onerror="this.onerror=null;this.src='images/placeholder.svg'">
        <div class="info detail-info">
            <span class="pill">${escapeHTML(item.location)}</span>
            <h2>${escapeHTML(item.title)}</h2>
            <p>${escapeHTML(item.description)}</p>
        </div>
        <div class="info">
            <h3>ماذا تفعل؟</h3>
            <ol class="steps">${item.steps.map(s => `<li>${escapeHTML(s)}</li>`).join("")}</ol>
        </div>
        <div class="info">
            <button class="complete-btn ${done ? "completed" : ""}" type="button" onclick="toggleJourney('${escapeHTML(item.id)}',${index})">${done ? "✓ تمت هذه المرحلة" : "إتمام هذه المرحلة"}</button>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   إتمام مرحلة
========================================================= */
function toggleJourney(id, index) {
    if (completed.includes(id)) {
        completed = completed.filter(item => item !== id);
    } else {
        completed = [...completed, id];
    }
    saveData();
    updateJourneyUI();
    openJourney(index, false);
    showToast(completed.includes(id) ? "✅ تم إتمام المرحلة!" : "↩️ تم إلغاء إتمام المرحلة");
}

/* =========================================================
   المفضلة
========================================================= */
function toggleFavorite(index) {
    if (favorites.includes(index)) {
        favorites = favorites.filter(item => item !== index);
        showToast("🗑️ تمت إزالة من المفضلة");
    } else {
        favorites = [...favorites, index];
        showToast("❤️ تمت الإضافة إلى المفضلة");
    }
    saveData();
    if (location.hash.startsWith("#place-")) {
        openPlace(index, false);
        return;
    }
    if (location.hash === "#favorites") {
        showPage("favorites", false);
        return;
    }
    cards();
}

/* =========================================================
   الوضع الداكن
========================================================= */
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("hajjDark", document.body.classList.contains("dark") ? "true" : "false");
    const themeBtn = $("#themeBtn");
    if (themeBtn) themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
    if (location.hash === "#settings") showPage("settings", false);
}

/* =========================================================
   حجم الخط
========================================================= */
function setFont(level) {
    document.body.className = document.body.className
        .split(' ')
        .filter(c => !c.startsWith('font-'))
        .join(' ');
    document.body.classList.add('font-' + level);
    localStorage.setItem('hajjFont', level);
    if (location.hash === "#settings") showPage("settings", false);
    showToast("تم تغيير حجم الخط");
}

/* =========================================================
   عداد التسبيح
========================================================= */
function countTasbih(type) {
    let counts = JSON.parse(localStorage.getItem("tasbihCounts")) || { subhanAllah: 0, alhamdulillah: 0, allahuAkbar: 0 };
    counts[type] = (counts[type] || 0) + 1;
    localStorage.setItem("tasbihCounts", JSON.stringify(counts));

    // تحديث الواجهة
    const el = document.getElementById("count-" + type);
    if (el) el.textContent = counts[type];

    // تحديث العدد الكلي
    const total = counts.subhanAllah + counts.alhamdulillah + counts.allahuAkbar;
    const totalEl = document.querySelector(".tasbih-number");
    if (totalEl) totalEl.textContent = total;

    // صوت اهتزاز خفيف
    if (navigator.vibrate) navigator.vibrate(10);
}

function resetTasbih() {
    if (confirm("هل تريد إعادة ضبط عداد التسبيح؟")) {
        localStorage.setItem("tasbihCounts", JSON.stringify({ subhanAllah: 0, alhamdulillah: 0, allahuAkbar: 0 }));
        showPage("tasbih", false);
        showToast("🔄 تم إعادة ضبط العداد");
    }
}

/* =========================================================
   القبلة
========================================================= */
function updateQibla() {
    const degreeEl = document.getElementById("qiblaDegree");
    const arrowEl = document.getElementById("qiblaArrow");

    if (!navigator.geolocation) {
        if (degreeEl) degreeEl.textContent = "جهازك لا يدعم تحديد الموقع";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            // مكة المكرمة
            const meccaLat = 21.4225;
            const meccaLng = 39.8262;

            // حساب اتجاه القبلة
            const dLng = meccaLng - lng;
            const x = Math.sin(dLng * Math.PI / 180) * Math.cos(meccaLat * Math.PI / 180);
            const y = Math.cos(lat * Math.PI / 180) * Math.sin(meccaLat * Math.PI / 180) -
                Math.sin(lat * Math.PI / 180) * Math.cos(meccaLat * Math.PI / 180) * Math.cos(dLng * Math.PI / 180);
            let bearing = Math.atan2(x, y) * 180 / Math.PI;
            bearing = (bearing + 360) % 360;

            if (degreeEl) degreeEl.textContent = "اتجاه القبلة: " + Math.round(bearing) + "°";
            if (arrowEl) arrowEl.style.transform = "rotate(" + bearing + "deg)";
        },
        function(error) {
            if (degreeEl) degreeEl.textContent = "تعذر تحديد الموقع: " + error.message;
        }
    );
}

/* =========================================================
   مواقيت الصلاة (Aladhan API - مجاني)
========================================================= */
async function fetchPrayerTimes() {
    const container = document.getElementById("prayerContainer");
    if (!container) return;

    try {
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi+Arabia&method=4');
        const data = await response.json();

        if (data.code === 200 && data.data) {
            const timings = data.data.timings;
            const date = data.data.date.readable;

            container.innerHTML = `
                <p style="text-align:center;color:var(--muted);font-size:12px;">${date}</p>
                <div class="prayer-grid">
                    ${Object.entries(timings).filter(([key]) => ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'].includes(key)).map(([name, time]) => `
                        <div class="prayer-item">
                            <small>${name === 'Fajr' ? 'الفجر' : name === 'Sunrise' ? 'الشروق' : name === 'Dhuhr' ? 'الظهر' : name === 'Asr' ? 'العصر' : name === 'Maghrib' ? 'المغرب' : 'العشاء'}</small>
                            <b>${time}</b>
                        </div>
                    `).join("")}
                </div>
                <p style="text-align:center;color:var(--muted);font-size:10px;margin-top:10px;">مصدر البيانات: Aladhan API</p>
            `;
        } else {
            container.innerHTML = `<p style="text-align:center;color:var(--muted);">تعذر تحميل مواقيت الصلاة</p>`;
        }
    } catch (error) {
        container.innerHTML = `<p style="text-align:center;color:var(--muted);">خطأ في تحميل البيانات</p>`;
    }
}

/* =========================================================
   الطقس (OpenWeather API - مجاني)
========================================================= */
async function fetchWeather() {
    const container = document.getElementById("weatherContainer");
    if (!container) return;

    try {
        // استخدام API مجاني بدون مفتاح (محدود)
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.4225&longitude=39.8262&current_weather=true&timezone=Asia/Riyadh');
        const data = await response.json();

        if (data.current_weather) {
            const weather = data.current_weather;
            const temp = weather.temperature;
            const wind = weather.windspeed;

            container.innerHTML = `
                <div style="text-align:center;padding:15px;">
                    <div style="font-size:48px;">🌤️</div>
                    <div style="font-size:32px;font-weight:700;color:var(--green);">${temp}°C</div>
                    <p style="color:var(--muted);">الرياح: ${wind} كم/س</p>
                    <div class="weather-grid" style="margin-top:15px;">
                        <div class="weather-item"><small>الرطوبة</small><b>--%</b></div>
                        <div class="weather-item"><small>الضغط</small><b>-- hPa</b></div>
                        <div class="weather-item"><small>الرؤية</small><b>-- km</b></div>
                    </div>
                    <p style="color:var(--muted);font-size:10px;margin-top:10px;">مصدر البيانات: Open-Meteo API</p>
                </div>
            `;
        } else {
            container.innerHTML = `<p style="text-align:center;color:var(--muted);">تعذر تحميل بيانات الطقس</p>`;
        }
    } catch (error) {
        container.innerHTML = `<p style="text-align:center;color:var(--muted);">خطأ في تحميل البيانات</p>`;
    }
}

/* =========================================================
   FAQ توسيع/طي
========================================================= */
function toggleFaq(index) {
    const answer = document.getElementById("faqAnswer" + index);
    const icon = document.getElementById("faqIcon" + index);
    if (!answer || !icon) return;

    if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.textContent = "➖";
    } else {
        answer.style.display = "none";
        icon.textContent = "➕";
    }
}

/* =========================================================
   مشاركة التطبيق
========================================================= */
function shareApp() {
    const url = window.location.href;
    const text = "📱 دليل الحاج - رفيقك في رحلة الحج\nمناسك وأماكن وأدعية وإرشادات في مكان واحد.\n\n" + url;

    if (navigator.share) {
        navigator.share({
            title: "دليل الحاج",
            text: text,
            url: url
        }).catch(() => {});
    } else {
        // نسخ الرابط
        navigator.clipboard.writeText(text).then(() => {
            showToast("📋 تم نسخ الرابط");
        }).catch(() => {
            // طريقة بديلة
            const input = document.createElement('input');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            showToast("📋 تم نسخ الرابط");
        });
    }
}

/* =========================================================
   الخريطة
========================================================= */
function openMap(lat, lng, name) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
}

/* =========================================================
   النطق الصوتي (Text-to-Speech)
========================================================= */
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
        showToast("🔊 تشغيل الصوت...");
    } else {
        showToast("⚠️ جهازك لا يدعم خاصية النطق");
    }
}

/* =========================================================
   مسح جميع البيانات
========================================================= */
function clearAllData() {
    if (confirm("هل تريد مسح جميع البيانات المحفوظة؟ (المفضلة، التقدم، الإعدادات)")) {
        localStorage.removeItem("hajjFav");
        localStorage.removeItem("hajjCompleted");
        localStorage.removeItem("hajjDark");
        localStorage.removeItem("hajjFont");
        localStorage.removeItem("hajjType");
        localStorage.removeItem("tasbihCounts");
        favorites = [];
        completed = [];
        showToast("🗑️ تم مسح جميع البيانات");
        location.reload();
    }
}

/* =========================================================
   إعادة ضبط التقدم
========================================================= */
function resetProgress() {
    if (!confirm("هل تريد إعادة ضبط جميع مراحل رحلة الحج؟")) return;
    completed = [];
    saveData();
    updateJourneyUI();
    showPage("rituals", false);
    showToast("🔄 تم إعادة ضبط التقدم");
}

/* =========================================================
   القائمة الجانبية
========================================================= */
function openDrawer() {
    $("#drawer")?.classList.add("open");
    $("#shade")?.classList.add("show");
}

function closeDrawer() {
    $("#drawer")?.classList.remove("open");
    $("#shade")?.classList.remove("show");
}

/* =========================================================
   الرجوع
========================================================= */
function back() {
    if (location.hash && location.hash !== "#home") {
        history.back();
    } else {
        home();
    }
}

/* =========================================================
   القائمة السفلية
========================================================= */
function updateBottomNav(active) {
    $$("[data-page]").forEach(button => {
        if (button.closest(".bottom")) {
            button.classList.toggle("active", button.dataset.page === active);
        }
    });
}

/* =========================================================
   البحث
========================================================= */
function searchPlaces(value) {
    const query = String(value || "").trim().toLowerCase();
    if (!query) {
        cards();
        return;
    }
    const results = places.filter(place => {
        const content = [place.name, place.tag, place.text, ...place.details].join(" ").toLowerCase();
        return content.includes(query);
    });
    cards(results);
}

/* =========================================================
   المسار
========================================================= */
function handleRoute() {
    const hash = location.hash;
    if (!hash || hash === "#home") {
        home(false);
        return;
    }
    if (hash.startsWith("#place-")) {
        const index = Number(hash.replace("#place-", ""));
        if (!isNaN(index)) openPlace(index, false);
        return;
    }
    if (hash.startsWith("#journey-")) {
        const index = Number(hash.replace("#journey-", ""));
        if (!isNaN(index)) openJourney(index, false);
        return;
    }
    const page = hash.substring(1);
    const validPages = ["places", "rituals", "duas", "guide", "favorites", "settings", "pilgrim", "tasbih", "qibla", "prayer", "weather", "faq"];
    if (validPages.includes(page)) {
        showPage(page, false);
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
    if (location.hash === "#pilgrim") {
        showPage("pilgrim", false);
    }
}

/* =========================================================
   مراقبة localStorage
========================================================= */
window.addEventListener("storage", event => {
    if (event.key === "hajjPilgrim") {
        refreshApplicationState();
    }
});

/* =========================================================
   تهيئة التطبيق
========================================================= */
document.addEventListener("DOMContentLoaded", async () => {
    // الوضع الداكن
    if (localStorage.getItem("hajjDark") === "true") {
        document.body.classList.add("dark");
    }

    // حجم الخط
    const savedFont = localStorage.getItem("hajjFont") || "medium";
    document.body.classList.add("font-" + savedFont);

    const themeBtn = $("#themeBtn");
    if (themeBtn) themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";

    // تحميل البيانات
    syncPilgrim();
    updatePilgrimUI();
    cards();
    updateJourneyUI();

    // تحديد نوع الحج
    document.querySelectorAll(".type-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.type === hajjType);
    });
    const desc = document.getElementById("hajjTypeDesc");
    if (desc) {
        const descriptions = {
            mufrid: "<strong>المفرد:</strong> تنوي الحج فقط، وتلبي بالحج من الميقات.",
            mutamatti: "<strong>المتمتع:</strong> تنوي العمرة أولاً، ثم الحج بعد التحلل من العمرة.",
            qarin: "<strong>القارن:</strong> تنوي العمرة والحج معاً، وتلبي بهما من الميقات."
        };
        desc.innerHTML = descriptions[hajjType] || descriptions.mufrid;
    }

    // القائمة الجانبية
    $("#menuBtn")?.addEventListener("click", openDrawer);
    $("#closeDrawer")?.addEventListener("click", closeDrawer);
    $("#shade")?.addEventListener("click", closeDrawer);

    // أزرار الرجوع
    $("#backBtn")?.addEventListener("click", back);
    $("#detailBack")?.addEventListener("click", back);

    // الوضع الداكن
    $("#themeBtn")?.addEventListener("click", toggleTheme);

    // زر حجم الخط
    $("#fontBtn")?.addEventListener("click", function() {
        const levels = ["small", "medium", "large"];
        const current = document.body.className.split(' ').find(c => c.startsWith('font-'));
        const currentLevel = current ? current.replace('font-', '') : "medium";
        const idx = levels.indexOf(currentLevel);
        const next = levels[(idx + 1) % levels.length];
        setFont(next);
    });

    // روابط الصفحات
    $$("[data-page]").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            closeDrawer();
            const page = button.dataset.page;
            if (!page) return;
            if (page === "home") {
                home(true);
            } else {
                showPage(page, true);
            }
        });
    });

    // البحث
    $("#search")?.addEventListener("input", event => {
        searchPlaces(event.target.value);
    });

    // زر المفضلة في التفاصيل
    $("#favBtn")?.addEventListener("click", () => {
        const hash = location.hash;
        if (hash.startsWith("#place-")) {
            toggleFavorite(Number(hash.replace("#place-", "")));
        }
    });

    // فتح المسار الحالي
    handleRoute();
});

/* =========================================================
   زر الرجوع في المتصفح / الهاتف
========================================================= */
window.addEventListener("popstate", () => {
    syncPilgrim();
    updatePilgrimUI();
    handleRoute();
});

window.addEventListener("hashchange", () => {
    syncPilgrim();
    updatePilgrimUI();
    handleRoute();
});

/* =========================================================
   Service Worker
========================================================= */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker registered."))
            .catch(error => console.log("Service Worker:", error));
    });
}

/* =========================================================
   مراقبة تغير بطاقة الحاج
========================================================= */
setInterval(() => {
    const before = currentPilgrim?.id || null;
    syncPilgrim();
    const after = currentPilgrim?.id || null;
    if (before !== after) {
        updatePilgrimUI();
        if (location.hash === "#pilgrim" && currentPilgrim) {
            // إعادة تحميل صفحة الحاج
        }
    }
}, 1000);

console.log("دليل الحاج v12 - جميع الميزات جاهزة ✅");

// ===== TRANSLATIONS (key-first: find a key, see all languages at once) =====
const T = {
    // ── Bio Card ──
    intro_greeting: {
        en: "Hey, I'm Deniz!",
        tr: "Selam, ben Deniz!",
        fr: "Salut, c'est Deniz!"
    },
    bio_name: { en: "<span>Deniz Hönigs</span>", tr: "<span>Deniz Hönigs</span>", fr: "<span>Deniz Hönigs</span>" },
    bio_title: { en: "Computer Science Student at EPFL", tr: "EPFL Bilgisayar Mühendisliği Öğrencisi", fr: "Étudiant en informatique à l'EPFL" },
    bio_text: {
        en: "<b>Hello there! </b> I am a wannabe software engineer from Istanbul 🇹🇷, currently living in Lausanne 🇨🇭. Apart from my studies at EPFL, I try to create little side quest projects here and there.",
        tr: "<b>Selam! </b>Ben İstanbul 🇹🇷 'dan gelen, şu sıralar Lozan 🇨🇭'de yaşayan, bir bilgisayar mühendisi adayıyım. EPFL'deki eğitimimin yanı sıra, kendi çapımda ufak side-quest projeler üretiyorum.",
        fr: "<b>Salut! </b>Je suis un informaticien en herbe d'Istanbul 🇹🇷, actuellement en train de vivre à Lausanne 🇨🇭. En dehors de mes études à l'EPFL, j'essaie de créer de petits projets side-quest ici et là."
    },

    // ── Section Titles ──
    experience: { en: "Experience", tr: "Deneyim", fr: "Expérience" },
    education: { en: "Education", tr: "Eğitim", fr: "Éducation" },
    certifications: { en: "Certifications", tr: "Sertifikalar", fr: "Certifications" },
    projects: { en: "Projects", tr: "Projeler", fr: "Projets" },
    competitions: { en: "Competitions", tr: "Yarışmalar", fr: "Concours" },
    test_results: { en: "Grades & Test Results", tr: "Notlar & Sınav Sonuçları", fr: "Moyennes & résultats d'épreuves" },
    languages: { en: "Languages", tr: "Diller", fr: "Langues" },

    // ── Languages (bio pills) ──
    turkish: { en: "Turkish", tr: "Türkçe", fr: "Turc" },
    german: { en: "German", tr: "Almanca", fr: "Allemand" },
    french: { en: "French", tr: "Fransızca", fr: "Français" },
    english: { en: "English", tr: "İngilizce", fr: "Anglais" },
    latin: { en: "Latin", tr: "Latince", fr: "Latin" },
    italian: { en: "Italian", tr: "İtalyanca", fr: "Italien" },
    native: { en: "Native", tr: "Anadil", fr: "Natif" },
    c1: { en: "C1", tr: "C1", fr: "C1" },
    c2: { en: "C2", tr: "C2", fr: "C2" },
    beginner: { en: "Beginner", tr: "Başlangıç", fr: "Débutant" },

    // ── Months ──
    jan: { en: "January", tr: "Ocak", fr: "Janvier" },
    feb: { en: "February", tr: "Şubat", fr: "Février" },
    mar: { en: "March", tr: "Mart", fr: "Mars" },
    apr: { en: "April", tr: "Nisan", fr: "Avril" },
    may: { en: "May", tr: "Mayıs", fr: "Mai" },
    jun: { en: "June", tr: "Haziran", fr: "Juin" },
    jul: { en: "July", tr: "Temmuz", fr: "Juillet" },
    aug: { en: "August", tr: "Ağustos", fr: "Août" },
    sep: { en: "September", tr: "Eylül", fr: "Septembre" },
    oct: { en: "October", tr: "Ekim", fr: "Octobre" },
    nov: { en: "November", tr: "Kasım", fr: "Novembre" },
    dec: { en: "December", tr: "Aralık", fr: "Décembre" },

    // ── Experience Roles ──
    intern: { en: "Intern", tr: "Stajyer", fr: "Stagiaire" },
    cofounder: { en: "Co-founder", tr: "Kurucu Ortak", fr: "Co-fondateur" },
    frc_mentor: { en: "Conscius Robotics - FRC Team Mentor", tr: "Conscius Robotics - FRC Takım Mentoru", fr: "Conscius Robotics - Mentor d'équipe FRC" },
    committee_member: { en: "Committee Member", tr: "Komite Üyesi", fr: "Membre du comité" },
    gamedev: { en: "Game Developer", tr: "Oyun Geliştirici", fr: "Développeur de jeux" },
    project_manager: { en: "Project Manager", tr: "Proje Yöneticisi", fr: "Chef des projets" },
    current: { en: "Since", tr: "Başlangıç:", fr: "depuis" },
    current_label: { en: "Present", tr: "Güncel", fr: "Présent" },

    // ── Experience Descriptions ──
    lauzhack_desc: {
        en: "LauzHack is the largest student-led hackathon at EPFL. <br>• Staffing for LauzHack 2025 <br>• Swag, design and organization of LauzHack 2026 (10th edition)",
        tr: "LauzHack, EPFL'deki en büyük öğrenci liderliğindeki hackathondur. <br>• LauzHack 2025 için gönüllülük yaptım <br>• LauzHack 2026'nın (10. edisyon) tişört, tasarım ve organizasyonu ile ilgilendim.",
        fr: "LauzHack est le plus grand hackathon étudiant de l'EPFL. <br>• Personnel pour LauzHack 2025 <br>• Swag, design et organisation de LauzHack 2026 (10ème édition)"
    },
    frc_desc: {
        en: "FRC Team 10043 Conscius Robotics is the official First Robotics Competition team of <span>Saint-Joseph High School</span>. <br>• Mentored team over around two seasons <br>• Finalist Award at Marmara Regional 2025",
        tr: "FRC Takımı 10043 Conscius Robotics, <span>Saint-Joseph Lisesi</span>'nin resmi First Robotics Competition takımıdır. <br>• Yaklaşık iki sezon boyunca takıma mentorluk yaptım <br>• Marmara Bölge 2025'te Finalist Ödülü",
        fr: "L'équipe FRC 10043 Conscius Robotics est l'équipe officielle de la First Robotics Competition de <span>Saint-Joseph High School</span>. <br>• J'ai mentoré l'équipe pendant presque deux saisons <br>• Prix du finaliste au Marmara Regional 2025"
    },
    dropout_desc_2: {
        en: "• Project management of multiple games across different platforms <br>• Project management of Çimen Maceraları, a mobile game commissioned by Çimen Show",
        tr: "• Farklı platformlarda birden fazla oyunun proje yönetimi <br>• Çimen Show için sipariş edilen Çimen Maceraları adlı mobil oyunun proje yönetimi",
        fr: "• Gestion de projet de plusieurs jeux sur différentes plateformes <br>• Gestion de projet de Çimen Maceraları, un jeu mobile commandé par Çimen Show"
    },
    dropout_desc_1: {
        en: "Dropout Code is an indie games studio I co-founded, which started out as a hobby project. <br>• Multiple mobile game projects, of which two were published",
        tr: "Dropout Code, hobi projesi olarak başladığım bağımsız bir oyun stüdyosudur. <br>• Birkaç mobil oyun projesi, bunlardan ikisi yayınlandı",
        fr: "Dropout Code est un studio de jeux indépendant que j'ai co-fondé, qui a commencé comme un projet de loisir. <br>• Plusieurs projets de jeux mobiles, dont deux ont été publiés"
    },
    fmss_desc: {
        en: "• Learned about software development processes in a professional environment",
        tr: "• Profesyonel bir ortamda yazılım geliştirme süreçlerini öğrendim",
        fr: "• J'ai appris les processus de développement logiciel dans un environnement professionnel"
    },
    fibabanka_desc: {
        en: "• Obtained a general understanding of the fintech industry",
        tr: "• Fintech endüstrisi hakkında genel bir anlayış kazandım",
        fr: "• J'ai obtenu une compréhension générale de l'industrie fintech"
    },
    koda_desc: {
        en: "• Familiarized myself with various data management systems and software development processes",
        tr: "• Çeşitli veri yönetim sistemleri ve yazılım geliştirme süreçleri hakkında bilgi edindim",
        fr: "• Je me suis familiarisé avec divers systèmes de gestion de données et processus de développement logiciel"
    },

    // ── Education ──
    informatique: { en: "Computer Science", tr: "Bilgisayar Mühendisliği", fr: "Informatique" },
    epfl_cs_desc: {
        en: "Bachelor's degree in Computer Science - 180 ECTS",
        tr: "Bilgisayar Bilimleri Lisans Derecesi - 180 ECTS",
        fr: "Bachelor (licence) en Informatique - 180 ECTS"
    },
    cms_desc: {
        en: "Mandatory preparatory class for holders of a foreign high school diploma",
        tr: "Yabancı lise diplomasına sahip olanlar için zorunlu hazırlık sınıfı",
        fr: "Classe préparatoire obligatoire pour les titulaires d'un diplôme de fin d'études secondaires étranger"
    },
    saint_joseph: { en: "Istanbul Saint-Joseph French High School", tr: "İstanbul Saint-Joseph Fransız Lisesi", fr: "Lycée Français Saint-Joseph d'Istanbul" },
    sj_desc: {
        en: "Prestigious French high school in Istanbul, Turkey. <br>• #2 of Class of 2025 <br>• 4x Honor Award <br>• Metaclass Education System Project",
        tr: "İstanbul'da prestijli bir Fransız lisesi. <br>• 2025 Okul İkincisi <br>• 4x Onur Ödülü <br>• Metaclass Eğitim Sistemi Projesi",
        fr: "Prestigieux lycée français à Istanbul, Turquie. <br>• 2ème de la promotion 2025 <br>• 4x Prix d'honneur <br>• Projet du système éducatif Metaclass"
    },
    visit_site: { en: "Visit site", tr: "Siteye git", fr: "Visiter le site" },

    // ── Certifications ──
    webdev: { en: "Web Development", tr: "Web Geliştirme", fr: "Développement Web" },
    cloud: { en: "Cloud Technologies", tr: "Bulut Teknolojileri", fr: "Technologies Cloud" },

    // ── Projects ──
    swissai: { en: "Swiss Weather Intelligence System", tr: "İsviçre Hava Durumu Bilgi Sistemi", fr: "Système suisse d'intelligence météorologique" },
    swissai_desc: {
        en: "Organizer's Prize at the <b> Swiss {ai} Weeks Lausanne 2025 Hackathon </b> <br> A weather forecasting and early warning system demo, using machine learning algorithms and real-time data.",
        tr: "<b> Swiss {ai} Weeks Lausanne 2025 Hackathonu </b>'nda Juri Özel Ödülü <br> Makine öğrenmesi algoritmaları ve gerçek zamanlı verileri kullanarak bir hava tahmini ve erken uyarı sistemi demosu.",
        fr: "Prix du jury au <b> Swiss {ai} Weeks Lausanne 2025 Hackathon </b> <br> Démonstration d'un système de prévision météorologique et d'alerte précoce, utilisant des algorithmes d'apprentissage automatique et des données en temps réel."
    },
    casus: { en: "Who is the Spy?", tr: "Casus Kim?", fr: "Qui est l'espion ?" },
    casus_desc: {
        en: "A social deduction party game where the primary goal is to identify the hidden spy(s) or, as the spy, to deduce the secret location/person.",
        tr: "Gizli casusu bulmayı amaçlayan bir parti oyunudur. Casus olarak, gizli konumu veya kişiyi tahmin etmeye çalışırsınız.",
        fr: "Un jeu de déduction sociale où le but principal est d'identifier l'espion caché ou, en tant qu'espion, de déduire le lieu/personne secret."
    },
    dens_desc: {
        en: "A collection of all my web projects: Hackathon entries, infographics, AI tools, web apps and fun games. Check them out by clicking the link below.",
        tr: "Tüm web projelerimin bir koleksiyonu: Hackathon projeleri, infografikler, AI araçları, web uygulamaları ve eğlenceli oyunlar. Göz atmak için aşağıdaki bağlantıya tıklayabilirsiniz.",
        fr: "Une collection de tous mes projets web : projets de hackathon, infographies, outils d'IA, applications web et jeux amusants. Vous pouvez les consulter en cliquant sur le lien ci-dessous."
    },
    metaclass_desc: {
        en: "Metaclass is a specially developed educational platform for Saint-Joseph High School. This platform is designed to enhance information sharing between students and teachers, and to organize course materials and announcements in a more effective manner.",
        tr: "Metaclass, Saint-Joseph Lisesi için özel olarak geliştirilmiş bir eğitim platformudur. Bu platform, öğrenciler ve öğretmenler arasındaki bilgi paylaşımını geliştirmek ve ders materyallerini ile duyuruları daha etkili bir şekilde düzenlemek amacıyla tasarlanmıştır.",
        fr: "Metaclass est une plateforme éducative spécialement développée pour le Lycée Saint-Joseph. Cette plateforme est conçue pour améliorer le partage d'informations entre les élèves et les enseignants, et pour organiser les supports de cours et les annonces de manière plus efficace."
    },
    mavidokunus_desc: {
        en: "The project aims to prevent disabled accessible parking spot abuse, by scanning the license plate using machine learning powered text recognition and issuing fines to the violators.",
        tr: "Bu proje, engelli park yerlerinin kötüye kullanımını önlemeyi amaçlamaktadır. Makine öğrenmesi destekli metin tanıma sistemi kullanarak plaka taranır ve ihlal edenlere ceza kesilir.",
        fr: "Le projet vise à prévenir l'abus des places de parking accessibles aux personnes handicapées, en scannant la plaque d'immatriculation à l'aide de la reconnaissance de texte alimentée par l'apprentissage automatique et en infligeant des amendes aux contrevenants."
    },

    // ── Project Tags ──
    ai_app: { en: "AI / ML", tr: "AI / ML", fr: "IA / ML" },
    web_game: { en: "Web Game", tr: "Web Oyunu", fr: "Jeu Web" },
    web_games: { en: "Web App Collection", tr: "Web Uygulama Koleksiyonu", fr: "Collection d'applications web" },
    digital_education: { en: "Digital Education", tr: "Dijital Eğitim", fr: "Éducation numérique" },
    stem: { en: "STEM Project", tr: "STEM Projesi", fr: "Projet STEM" },

    // ── Competitions ──
    math_comp: { en: "Mathematics", tr: "Matematik", fr: "Mathématiques" },
    compsci_comp: { en: "CS & Coding", tr: "Bilişim ve Yazılım", fr: "Informatique & Codage" },
    stem_comp: { en: "STEM & Robotics", tr: "STEM & Robotik", fr: "STEM & Robotiques" },
    kangourou: { en: "Mathematical Kangaroo", tr: "Kanguru Matematik", fr: "Kangourou des mathématiques" },
    castor: { en: "Castor Competition", tr: "Castor Yarışması", fr: "Concours Castor" },
    waterloo: { en: "Fermat Contest", tr: "Fermat Yarışması", fr: "Concours Fermat" },
    cs: { en: "Scientific Competition SJ", tr: "SJ Bilim Yarışması", fr: "Concours Scientifique SJ" },
    hackathons: { en: "Hackathons", tr: "Hackathonlar", fr: "Hackathons" },
    organizers_prize: { en: "Organizers' Prize", tr: "Organizatör Ödülü", fr: "Prix des organisateurs" },
    grade_champion: { en: "Grade Champion", tr: "Dönem Şampiyonu", fr: "Champ. de promo" },
    intl_honor_roll: { en: "International Honor Roll", tr: "Uluslararası Onur Listesi", fr: "Liste d'honneur international" },
    silver: { en: "Silver Medalist", tr: "Gümüş Madalya", fr: "Médaillé d'argent" },
    view: { en: "View", tr: "Görüntüle", fr: "Afficher" },
    view_certificate: { en: "View certificate", tr: "Sertifikayı görüntüle", fr: "Afficher le diplôme" },

    /* ── Competition Levels ──
    premiere: { en: "Junior Year", tr: "11. Sınıf", fr: "Première" },
    seconde: { en: "Sophomore Year", tr: "10. Sınıf", fr: "Seconde" },
    terminale: { en: "Senior Year", tr: "12. Sınıf", fr: "Terminale" },
    spe_maths: { en: "(Specialty Maths)", tr: "(Matematik Dalı)", fr: "(Spécialité mathématiques)" },
    individuel: { en: "(Individual)", tr: "(Bireysel)", fr: "(Individuel)" },

    // ── Test Results / Grades ──
    gpa: { en: "High School GPA", tr: "Lise Ortalaması", fr: "Moyenne Lycée" },
    gpa_desc: { en: "Average of 9th-12th Grades", tr: "9-12. Sınıf Ortalaması", fr: "Moyenne de 9ème à 12ème" },
    second_place: { en: "Salutatorian (#2) of Class of 2025", tr: "2025 Mezunları Okul İkincisi", fr: "Deuxième de la promotion 2025" },
    grade_9: { en: "9th Grade", tr: "9. Sınıf", fr: "9ème" },
    grade_10: { en: "10th Grade", tr: "10. Sınıf", fr: "10ème" },
    grade_11: { en: "11th Grade", tr: "11. Sınıf", fr: "11ème" },
    grade_12: { en: "12th Grade", tr: "12. Sınıf", fr: "12ème" },
    oral: { en: "Oral section", tr: "Sözlü bölüm", fr: "Épreuve orale" },
    written: { en: "Written section", tr: "Yazılı bölüm", fr: "Épreuve écrite" },
    listening: { en: "Listening", tr: "Dinleme", fr: "Compréhension orale" },
    reading: { en: "Reading", tr: "Okuma", fr: "Compréhension écrite" },
    writing: { en: "Writing", tr: "Yazma", fr: "Production écrite" },
    speaking: { en: "Speaking", tr: "Konuşma", fr: "Production orale" },*/

    // ── Contact / Let's stay in touch ──
    contact_title: { en: "Let's stay in touch", tr: "İletişimde Kalalım", fr: "Restons en contact" },
    copied: { en: "Copied!", tr: "Kopyalandı!", fr: "Copié !" },

    // ── Footer ──
    created_by: { en: "Designed & developed with 🩵 by Deniz Hönigs, with the help of Claude, duh.", tr: "Deniz Hönigs tarafından 🩵 ile tasarlandı ve geliştirildi, Claude'un yardımıyla elbette.", fr: "Conçu et développé avec 🩵 par Deniz Hönigs, avec l'aide de Claude, évidemment." },
};

// Build per-language lookup from key-first structure
const translations = {};
for (const [key, langs] of Object.entries(T)) {
    for (const [lang, value] of Object.entries(langs)) {
        if (!translations[lang]) translations[lang] = {};
        translations[lang][key] = value;
    }
}

// ===== TRANSLATION SYSTEM =====
function updateContent(language) {
    document.querySelectorAll('[data-translate]').forEach(function (element) {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
}

function updateURLParameter(param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
}

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// ===== LANGUAGE SELECTOR =====
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        langBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        updateContent(lang);
        updateURLParameter('lang', lang);
    });
});

// Initialize language
let initialLang = getURLParameter('lang') || 'en';
if (!translations.hasOwnProperty(initialLang)) {
    initialLang = 'en';
}
const initialBtn = document.querySelector(`.lang-btn[data-lang="${initialLang}"]`);
if (initialBtn) {
    langBtns.forEach(b => b.classList.remove('active'));
    initialBtn.classList.add('active');
}
updateContent(initialLang);
updateURLParameter('lang', initialLang);

// ===== STICKY HEADER (Hide on scroll down, show on scroll up) =====
const stickyHeader = document.getElementById('sticky-header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        stickyHeader.classList.add('hidden');
    } else {
        stickyHeader.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.section-title, .timeline-item, .project-card, .cert-card, .contact-card, .comp-card, .test-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const siblings = entry.target.parentElement.querySelectorAll(
                entry.target.classList.contains('timeline-item') ? '.timeline-item' :
                    entry.target.classList.contains('project-card') ? '.project-card' :
                        entry.target.classList.contains('cert-card') ? '.cert-card' :
                            entry.target.classList.contains('contact-card') ? '.contact-card' :
                                entry.target.classList.contains('comp-card') ? '.comp-card' :
                                    entry.target.classList.contains('test-card') ? '.test-card' :
                                        '.section-title'
            );
            const siblingIndex = Array.from(siblings).indexOf(entry.target);
            entry.target.style.transitionDelay = `${siblingIndex * 0.08}s`;
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== INTRO SEQUENCE & SCROLL UNLOCK =====
const INTRO_EXPAND_MS = 1350;
const INTRO_DURATION_MS = 2900;

setTimeout(() => {
    const bioCard = document.getElementById('bio-card');
    if (bioCard) {
        bioCard.classList.add('bio-expanded');
    }
}, INTRO_EXPAND_MS);

function unlockPageContent() {
    document.body.classList.remove('scroll-locked');
    const mainSections = document.getElementById('main-sections');
    if (mainSections) {
        mainSections.classList.remove('intro-locked');
    }
    // Stagger reveal elements that are already within the viewport
    revealElements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
            setTimeout(() => {
                el.classList.add('visible');
                revealObserver.unobserve(el);
            }, i * 80);
        }
    });
}

setTimeout(unlockPageContent, INTRO_DURATION_MS);

// ===== COPY EMAIL TO CLIPBOARD =====
const emailCard = document.getElementById('email-card');
if (emailCard) {
    emailCard.addEventListener('click', () => {
        const email = emailCard.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            const toast = document.getElementById('copied-toast');
            if (toast) {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            }
        });
    });
}

// ===== CAROUSEL LOGIC =====
document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    });

    // Touch/swipe support
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
            } else {
                goToSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
            }
        }
        isDragging = false;
    }, { passive: true });
});
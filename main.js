// Load translations
const translations = {
    "en": {
        greeting: "👋 Hey there!",
        name: "I'm <span>Deniz Hönigs</span>",
        name_title: "CMS student @EPFL, Saint-Joseph '25, Developer",
        grades: "📑 School Grades",
        first_term: "First Term",
        second_term: "Second Term",
        grade_prep: "Prep Grade",
        grade_9: "9th Grade",
        grade_10: "10th Grade",
        grade_11: "11th Grade",
        grade_12: "12th Grade",
        class_1st: "#1 in class",
        class_3rd: "#3 in class",
        grade_1st: "#1 in grade",
        grade_3rd: "#3 in grade",
        grade_top10: "Top 10 in grade",
        test_results: "📊 Grades & Test Results",
        jan: "January",
        feb: "February",
        mar: "March",
        apr:  "April",
        may: "May",
        jun: "June",
        jul: "July",
        aug: "August",
        sep: "September",
        oct: "October",
        nov: "November",
        dec: "December",
        listening: "Listening",
        reading: "Reading",
        writing: "Writing",
        speaking: "Speaking",
        use_of_english: "Use of English",
        maths: "Maths",
        english: "English",
        oral: "Oral section",
        written: "Written section",
        competitions: "🏅 Competitions",
        french: "French",
        turkish: "Turkish",
        german: "German",
        latin: "Latin",
        italian: "Italian",
        kangourou: "Mathematical Kangaroo",
        castor: "Castor Competition",
        waterloo: "Fermat Contest",
        cs: "Scientific Competition SJ",
        coder: "Coder of the Year",
        view_certificate: "View certificate",
        certificate_pending: "Certificate pending",
        covid_disclaimer: "Second term grades nullified due to the COVID-19 pandemic.",
        pending_desc: "Results were officially published, but the certificate has not arrived yet.",
        view: "View",
        school_champion: "School Champion",
        grade_champion: "Grade Champion",
        intl_honor_roll: "International Honor Roll",
        participation: "Participation",
        silver: "Silver Medalist",
        languages: "🌐 Languages",
        mother_tongue: "Mother Tongue",
        father_tongue: "Father Tongue",
        c1: "C1 Proficiency",
        c2: "C2 Mastery",
        learning: "Learning",
        beginner: "Beginner Level",
        honor_certificate: "Certificate of Honor",
        experience: "🏢 Experience",
        extracurriculars: "💡 Extracurriculars (High School)",
        intern: "Internship",
        cofounder: "Co-founder",
        frc_mentor: "FRC Team Mentor",
        committee_member: "Committee Member",
        gamedev: "Game Developer",
        project_manager: "Project Manager",
        dropout_desc_1: "Dropout Code is an indie games studio I co-founded, which started out as a hobby project. <br> • Multiple mobile game projects, of which two were published",
        dropout_desc_2: "• Project management of multiple games across different platforms <br> • Project management of Çimen Maceraları, a mobile game commissioned by Çimen Show",
        koda_desc: "Kod-A develops document-based technologies and solutions since 2006. <br> • Familiarized myself with various data management systems and software development processes",
        fibabanka_desc: "Fibabanka is a leading banking firm in digital banking services. <br> • Obtained a general understanding of the fintech industry",
        fmss_desc: "FMSS is a software company providing outsourcing services for app and web development. <br> • Learned about software development processes in a professional environment",
        gunce_desc: "İstanbul Günceleri is a student newspaper initiative that aims to provide a platform for student voices. <br> • Redesigned social media content entirely. <br> • Managed all social media accounts",
        mfinue_desc: "MFINUE is an international French-speaking MUN conference. <br> • Managed the conference's website <br> • Contributed to the MFINUE Connect portal <br> • Mitigated technical issues on the fly during the conference",
        coding_desc: "• Contributed to the creation of an alumni portal for Saint-Joseph <br> • Developed various new software for the school's needs",
        innovation_desc: "• Won a project hackathon with 25 participating teams <br> • Contributed to the creation of Erasmus+ projects, including Oku-Paylaş",
        yillik_desc: "• Developed an online platform where seniors write yearbook notes <br> • Edited and corrected all yearbook notes",
        frc_desc: "FRC Team 10043 Conscius Robotics is the official First Robotics Competition team of Saint-Joseph. <br> • Mentored team over two seasons <br> • Finalist Award at Marmara Regional 2025",
        lauzhack_desc: "LauzHack is a hackathon organized by a student association at EPFL, where I was a committee member. <br> • Staffing for LauzHack 2025 (9th edition)",
        social_media: "Social Media Manager",
        it_team: "IT Team",
        coding_team: "Software Development Team",
        innovation_team: "Innovation Team",
        yillik_team: "SJ'25 Yearbook Committee",
        current: "Since",
        education: "🎓 Education and Certifications",
        primary_school: "Primary & Middle School",
        high_school: "High School",
        saint_joseph: "Istanbul Saint-Joseph French High School",
        visit_site: "Visit site",
        projects: "🛠️ Projects",
        digital_education: "Digital Education",
        metaclass_desc: "Metaclass is a specially developed educational platform for the school. This platform is designed to enhance information sharing between students and teachers, and to organize course materials and announcements in a more effective manner.",
        stem: "STEM Project",
        mavidokunus_desc: "The project aims to prevent disabled accesible parking spot abuse, by scanning the license plate using machine learning powered text recognition and issuing fines to the violators.",
        created_by: "Designed & developed with 🩵 by Deniz Hönigs",
        web_games: "Web App Collection",
        dens_desc: "dens.dev is a collection of all my web projects: Hackathon entries, infographics, AI tools, web apps and fun games. Check them out by clicking the link below.",
        second_place: "Salutatorian (#2) of Class of 2025",
        gpa: "High School GPA",
        gpa_desc: "Average of 9th-12th Grades",
        cms: "Engineering Preparatory Year",
        sj_desc: "Saint-Joseph is a prestigious French high school in Istanbul, Turkey. <br> • #2 of Class of 2025 <br> • 4x Honor Award (2022, 2023, 2024, 2025) <br> • Metaclass Education System Project",
        cms_desc: "EPFL is among the top 25 universities globally, ranking top 10 in Europe. <br> • Currently studying in the CMS preparatory year <br> • Plan to pursue a Bachelor's degree in Computer Science here.",
        webdev: "Web Development",
        cloud: "Cloud Technologies",
        math_comp: "Mathematics",
        compsci_comp: "CS & Coding",
        stem_comp: "STEM & Robotics",
        hackathons: "Hackathons",
        organizers_prize: "Organizers' Prize",
        casus: "Who is the Spy?",
        web_game: "Web Game",
        ai_app: "AI / ML App",
        casus_desc: "A social deduction party game where the primary goal is to identify the hidden spy(s) or, as the spy, to deduce the secret location/person.",
        swissai: "Swiss Weather Intelligence System",
        swissai_desc: "An AI-powered weather forecasting web application that provides accurate weather predictions and personalized recommendations using machine learning algorithms and real-time data.",
        premiere: "Junior Year",
        seconde: "Sophomore Year",
        terminale: "Senior Year",
        spe_maths: "(Specialty Maths)",
        individuel: "(Individual)",
    },
    "tr": {
        greeting: "👋 Merhaba!",
        name: "Ben, <span>Deniz Hönigs</span>",
        name_title: "EPFL'de CMS öğrencisi, Saint-Joseph '25, Geliştirici",
        grades: "📑 Okul Notları",
        first_term: "Birinci Dönem",
        second_term: "İkinci Dönem",
        grade_prep: "Hazırlık Sınıfı",
        grade_9: "9. Sınıf",
        grade_10: "10. Sınıf",
        grade_11: "11. Sınıf",
        grade_12: "12. Sınıf",
        class_1st: "Sınıf 1.si",
        class_3rd: "Sınıf 3.sü",
        grade_1st: "Dönem 1.si",
        grade_3rd: "Dönem 3.sü",
        grade_top10: "Dönemde ilk 10",
        test_results: "📊 Notlar & Sınav Sonuçları",
        jan: "Ocak",
        feb: "Şubat",
        mar: "Mart",
        apr:  "Nisan",
        may: "Mayıs",
        jun: "Haziran",
        jul: "Temmuz",
        aug: "Ağustos",
        sep: "Eylül",
        oct: "Ekim",
        nov: "Kasım",
        dec: "Aralık",
        listening: "Dinleme",
        reading: "Okuma",
        writing: "Yazma",
        speaking: "Konuşma",
        use_of_english: "Dil Yetkinliği",
        maths: "Matematik",
        english: "İngilizce",
        oral: "Sözlü bölüm",
        written: "Yazılı bölüm",
        competitions: "🏅 Yarışmalar",
        french: "Fransızca",
        turkish: "Türkçe",
        german: "Almanca",
        latin: "Latince",
        italian: "İtalyanca",
        kangourou: "Kanguru Matematik",
        castor: "Castor Yarışması",
        waterloo: "Fermat Yarışması",
        cs: "SJ Bilim Yarışması",
        coder: "Yılın Kodcusu",
        view_certificate: "Sertifikayı görüntüle",
        certificate_pending: "Sertifika bekleniyor",
        covid_disclaimer: "İkinci dönem notları, COVID-19 pandemisi nedeniyle silindi.",
        pending_desc: "Sonuçlar resmi olarak yayınlandı, ancak sertifika henüz ulaşmadı.",
        view: "Görüntüle",
        school_champion: "Okul Şampiyonu",
        grade_champion: "Dönem Şampiyonu",
        intl_honor_roll: "Uluslararası Onur Listesi",
        participation: "Katılım",
        silver: "Gümüş Madalya",
        languages: "🌐 Diller",
        mother_tongue: "Ana Dil",
        father_tongue: "Baba Dili",
        c1: "C1 Yetkinlik",
        c2: "C2 Uzmanlık",
        learning: "Öğreniyorum",
        beginner: "Başlangıç Düzeyi",
        honor_certificate: "Onur Belgesi",
        experience: "🏢 Deneyim",
        extracurriculars: "💡 Okul Dışı Etkinlikler (Lise)",
        intern: "Staj",
        cofounder: "Kurucu Ortak",
        frc_mentor: "FRC Takım Mentoru",
        committee_member: "Komite Üyesi",
        gamedev: "Oyun Geliştirici",
        project_manager: "Proje Yöneticisi",
        game: "Oyun Geliştirme",
        project_management: "Proje Yönetimi",
        dropout_desc_1: "Dropout Code, hobi projesi olarak başladığım bağımsız bir oyun stüdyosudur. <br> • Birkaç mobil oyun projesi, bunlardan ikisi yayınlandı",
        dropout_desc_2: "• Farklı platformlarda birden fazla oyunun proje yönetimi <br> • Çimen Show için sipariş edilen Çimen Maceraları adlı mobil oyunun proje yönetimi",
        koda_desc: "Kod-A, 2006'dan beri belge tabanlı teknolojiler ve çözümler geliştirmektedir. <br> • Çeşitli veri yönetim sistemleri ve yazılım geliştirme süreçleri hakkında bilgi edindim",
        fibabanka_desc: "Fibabanka, dijital bankacılık hizmetlerinde önde gelen bir bankadır. <br> • Fintech endüstrisi hakkında genel bir anlayış kazandım",
        fmss_desc: "FMSS, uygulama ve web geliştirme için dış kaynak sağlama hizmetleri sunan bir yazılım şirketidir. <br> • Profesyonel bir ortamda yazılım geliştirme süreçlerini öğrendim",
        gunce_desc: "İstanbul Günceleri, öğrenci seslerine platform sağlamak amacıyla kurulmuş bir öğrenci gazetesidir. <br> • Sosyal medya içeriğini tamamen yeniden tasarladım. <br> • Tüm sosyal medya hesaplarını yönettim",
        mfinue_desc: "MFINUE, uluslararası Fransızca konuşan bir MUN konferansıdır. <br> • Konferansın web sitesini yönettim <br> • MFINUE Connect portalına katkıda bulundum <br> • Konferans sırasında teknik sorunları anında çözdüm",
        coding_desc: "• Saint-Joseph için bir mezun portalının oluşturulmasına katkıda bulundum <br> • Okulun ihtiyaçları için çeşitli yeni yazılımlar geliştirdim",
        innovation_desc: "• 25 katılımcı takım arasından bir proje hackathonunu kazandık <br> • Oku-Paylaş dahil olmak üzere Erasmus+ projelerinin oluşturulmasına katkıda bulundum",
        yillik_desc: "• Mezunların yıl sonu notlarını yazdığı çevrimiçi bir platform geliştirdik <br> • Tüm yıl sonu notlarını düzenledik ve düzelttik",
        frc_desc: "FRC Takımı 10043 Conscius Robotics, Saint-Joseph'in resmi First Robotics Competition takımıdır. <br> • İki sezon boyunca takıma mentorluk yaptım <br> • Marmara Bölge 2025'te Finalist Ödülü",
        lauzhack_desc: "LauzHack, EPFL'deki bir öğrenci kulübü tarafından düzenlenen bir hackathondur. <br> • LauzHack 2025 (9. edisyon) için gönüllülük yaptım",
        social_media: "Sosyal Medya Sorumlusu",
        it_team: "IT Ekibi",
        coding_team: "Yazılım Geliştirme Takımı",
        innovation_team: "İnovasyon Takımı",
        yillik_team: "SJ'25 Yıllık Komitesi",
        current: "Başlangıç:",
        education: "🎓 Eğitim ve Sertifikalar",
        primary_school: "İlkokul & Ortaokul",
        high_school: "Lise",
        saint_joseph: "İstanbul Saint-Joseph Fransız Lisesi",
        visit_site: "Siteye git",
        projects: "🛠️ Projeler",
        digital_education: "Dijital Eğitim",
        metaclass_desc: "Metaclass, okul içim özel geliştirilen bir eğitim platformudur. Bu platform, öğrenciler ve öğretmenler arasındaki bilgi paylaşımını geliştirmek, ders materyallerini ve duyurularını düzenlemekte daha etkili bir yöntem olarak tasarlanmıştır.",
        stem: "STEM Projesi",
        mavidokunus_desc: "Bu proje, engelli park yerlerinin kötüye kullanımını önlemeyi amaçlamaktadır. Makine öğrenmesi destekli metin tanıma sistemi kullanarak plaka taranır ve ihlal edenlere ceza kesilir.",
        created_by: "Deniz Hönigs tarafından 🩵 ile tasarlandı ve geliştirildi",
        web_games: "Web Uygulama Koleksiyonu",
        dens_desc: "dens.dev, tüm web projelerimin bir koleksiyonudur: Hackathon projeleri, infografikler, AI araçları, web uygulamaları ve eğlenceli oyunlar. Göz atmak için aşağıdaki bağlantıya tıklayabilirsiniz.",
        second_place: "2025 Mezunları Okul İkincisi",
        gpa: "Lise Ortalaması",
        gpa_desc: "9-12. Sınıf Ortalaması",
        cms: "Mühendislik Hazırlık Sınıfı",
        sj_desc: "Saint-Joseph, İstanbul, Türkiye'de prestijli bir Fransız lisesidir. <br> • 2025 Mezunları Okul İkincisi <br> • 4x Onur Belgesi (2022, 2023, 2024, 2025) <br> • Metaclass Eğitim Sistemi Projesi",
        cms_desc: "EPFL, dünya genelinde ilk 25 üniversite arasında yer almakta olup, Avrupa'da ilk 10'da bulunmaktadır. <br> • Şu anda CMS hazırlık sınıfında eğitim görmekteyim <br> • Burada Bilgisayar Bilimleri alanında Lisans eğitimi almayı planlıyorum.",
        webdev: "Web Geliştirme",
        cloud: "Bulut Teknolojileri",
        math_comp: "Matematik",
        compsci_comp: "Bilişim ve Yazılım",
        stem_comp: "STEM & Robotik",
        hackathons: "Hackathonlar",
        organizers_prize: "Organizatör Ödülü",
        casus: "Casus Kim?",
        web_game: "Web Oyunu",
        ai_app: "AI / ML Uygulaması",
        casus_desc: "Gizli casusu bulmayı amaçlayan bir parti oyunudur. Casus olarak, gizli konumu veya kişiyi tahmin etmeye çalışırsınız.",
        swissai: "İsviçre Hava Durumu Bilgi Sistemi",
        swissai_desc: "Makine öğrenimi algoritmaları ve gerçek zamanlı veriler kullanarak doğru hava tahminleri ve kişiselleştirilmiş öneriler sunan AI destekli bir hava durumu tahmin web uygulaması.",
        premiere: "11. Sınıf",
        seconde: "10. Sınıf",
        terminale: "12. Sınıf",
        spe_maths: "(Matematik Dalı)",
        individuel: "(Bireysel)",
    },
    "fr": {
        greeting: "👋 Bonjour!",
        name: "Je suis <span>Deniz Hönigs</span>",
        name_title: "Étudiant CMS à l'EPFL, Saint-Joseph '25, Développeur",
        grades: "📑 Notes d'école",
        first_term: "Premier Semestre",
        second_term: "Deuxième Semestre",
        grade_prep: "Préparatoire",
        grade_9: "9ème",
        grade_10: "10ème",
        grade_11: "11ème",
        grade_12: "12ème",
        class_1st: "#1 de la classe",
        class_3rd: "#3 de la classe",
        grade_1st: "#1 de la promotion",
        grade_3rd: "#3 de la promotion",
        grade_top10: "Top 10 de la promotion",
        test_results: "📊 Moyennes & résultats d'épreuves",
        jan: "Janvier",
        feb: "Février",
        mar: "Mars",
        apr:  "Avril",
        may: "Mai",
        jun: "Juin",
        jul: "Juillet",
        aug: "Août",
        sep: "Septembre",
        oct: "Octobre",
        nov: "Novembre",
        dec: "Décembre",
        listening: "Compréhension orale",
        reading: "Compréhension écrite",
        writing: "Production écrite",
        speaking: "Production orale",
        use_of_english: "Usage de la langue",
        maths: "Mathématiques",
        english: "Anglais",
        oral: "Épreuve orale",
        written: "Épreuve écrite",
        competitions: "🏅 Concours",
        french: "Français",
        turkish: "Turc",
        german: "Allemand",
        latin: "Latin",
        italian: "Italien",
        kangourou: "Kangourou des mathématiques",
        castor: "Concours Castor",
        waterloo: "Concours Fermat",
        cs: "Concours Scientifique SJ",
        coder: "Codeur de l'année",
        view_certificate: "Afficher le diplôme",
        certificate_pending: "Diplôme en attente",
        covid_disclaimer: "Les notes du second semestre ont été supprimées en raison de la pandemie de COVID-19",
        pending_desc: "Les résultats ont été officiellement publiés, mais le certificat n'est pas encore arrivé.",
        view: "Afficher",
        school_champion: "Champion d'école",
        grade_champion: "Champ. de promo",
        intl_honor_roll: "Liste d'honneur international",
        participation: "Participation",
        silver: "Médaillé d'argent",
        languages: "🌐 Langues",
        mother_tongue: "Langue maternelle",
        father_tongue: "Langue paternelle",
        c1: "C1 Maîtrise",
        c2: "C2 Expertise",
        learning: "En train d'apprendre",
        beginner: "Niveau débutant",
        honor_certificate: "Prix d'honneur",
        experience: "🏢 Expérience",
        extracurriculars: "💡 Activités périscolaires (lycée)",
        intern: "Stage",
        cofounder: "Co-fondateur",
        frc_mentor: "Mentor d'équipe FRC",
        gamedev: "Développeur de jeux",
        project_manager: "Chef des projets",
        dropout_desc_1: "Dropout Code est un studio de jeux indépendant que j'ai co-fondé, qui a commencé comme un projet de loisir. <br> • Plusieurs projets de jeux mobiles, dont deux ont été publiés",
        dropout_desc_2: "• Gestion de projet de plusieurs jeux sur différentes plateformes <br> • Gestion de projet de Çimen Maceraları, un jeu mobile commandé par Çimen Show",
        koda_desc: "Kod-A développe des technologies et des solutions basées sur les documents depuis 2006. <br> • Je me suis familiarisé avec divers systèmes de gestion de données et processus de développement logiciel",
        fibabanka_desc: "Fibabanka est une banque leader dans les services bancaires numériques. <br> • J'ai obtenu une compréhension générale de l'industrie fintech",
        fmss_desc: "FMSS est une entreprise de logiciels fournissant des services d'externalisation pour le développement d'applications et de sites web. <br> • J'ai appris les processus de développement logiciel dans un environnement professionnel",
        gunce_desc: "İstanbul Günceleri est une initiative de journal étudiant qui vise à fournir une plateforme pour les voix étudiantes. <br> • J'ai entièrement repensé le contenu des réseaux sociaux. <br> • J'ai géré tous les comptes de réseaux sociaux",
        mfinue_desc: "MFINUE est une conférence MUN francophone internationale. <br> • J'ai géré le site web de la conférence <br> • J'ai contribué au portail MFINUE Connect <br> • J'ai résolu des problèmes techniques en temps réel pendant la conférence",
        coding_desc: "• J'ai contribué à la création d'un portail pour les anciens élèves de Saint-Joseph <br> • J'ai développé divers nouveaux logiciels pour les besoins de l'école",
        innovation_desc: "• J'ai remporté un hackathon de projets avec 25 équipes participantes <br> • J'ai contribué à la création de projets Erasmus+, y compris Oku-Paylaş",
        yillik_desc: "• J'ai développé une plateforme en ligne où les seniors écrivent des notes d'annuaire <br> • J'ai édité et corrigé toutes les notes d'annuaire",
        frc_desc: "L'équipe FRC 10043 Conscius Robotics est l'équipe officielle de la First Robotics Competition de Saint-Joseph. <br> • J'ai mentoré l'équipe pendant deux saisons <br> • Prix du finaliste au Marmara Regional 2025",
        lauzhack_desc: "LauzHack est un hackathon organisé par une association étudiante de l'EPFL, où j'étais membre du comité. <br> • Personnel pour LauzHack 2025 (9ème édition)",
        social_media: "Chef des réseaux sociaux",
        it_team: "Équipe TI",
        coding_team: "Équipe de dév. de logiciels",
        innovation_team: "Équipe d'innovation",
        yillik_team: "Comité de Palmarès SJ'25",
        current: "depuis",
        education: "🎓 Éducation et certifications",
        primary_school: "École primaire & collège",
        high_school: "Lycée",
        saint_joseph: "Lycée Français Saint-Joseph d'Istanbul",
        visit_site: "Visiter le site",
        projects: "🛠️ Projets",
        digital_education: "Éducation numérique",
        metaclass_desc: "Metaclass est une plateforme éducative spécialement développée pour l'école. Cette plateforme est conçue pour améliorer le partage d'informations entre les élèves et les enseignants, et pour organiser les supports de cours et les annonces de manière plus efficace.",
        stem: "Projet STEM",
        mavidokunus_desc: "Le projet vise à prévenir l'abus des places de parking accessibles aux personnes handicapées, en scannant la plaque d'immatriculation à l'aide de la reconnaissance de texte alimentée par l'apprentissage automatique et en infligeant des amendes aux contrevenants.",
        created_by: "Conçu et développé avec 🩵 par Deniz Hönigs",
        web_games: "Collection d'applications web",
        dens_desc: "dens.dev est une collection de tous mes projets web : projets de hackathon, infographies, outils d'IA, applications web et jeux amusants. Vous pouvez les consulter en cliquant sur le lien ci-dessous.",
        second_place: "Deuxième de la promotion 2025",
        gpa: "Moyenne Lycée",
        gpa_desc: "Moyenne de 9ème à 12ème",
        cms: "Année préparatoire en ingénierie",
        sj_desc: "Saint-Joseph est un prestigieux lycée français à Istanbul, en Turquie. <br> • Deuxième de la promotion 2025 <br> • 4x Prix d'honneur (2022, 2023, 2024, 2025) <br> • Projet du système éducatif Metaclass",
        cms_desc: "L'EPFL est parmi les 25 meilleures universités au monde, se classant dans le top 10 en Europe. <br> • Actuellement étudiant en année préparatoire CMS <br> • Prévoit de poursuivre un baccalauréat en informatique ici.",
        webdev: "Développement Web",
        cloud: "Technologies Cloud",
        math_comp: "Mathématiques",
        compsci_comp: "Informatique & Codage",
        stem_comp: "STEM & Robotiques",
        hackathons: "Hackathons",
        organizers_prize: "Prix des organisateurs",
        casus: "Qui est l'espion ?",
        web_game: "Jeu Web",
        ai_app: "Application IA / ML",
        casus_desc: "Un jeu de déduction sociale où le but principal est d'identifier l'espion caché ou, en tant qu'espion, de déduire le lieu/personne secret.",
        swissai: "Système suisse d'intelligence météorologique",
        swissai_desc: "Une application web de prévision météorologique alimentée par l'IA qui fournit des prévisions météorologiques précises et des recommandations personnalisées en utilisant des algorithmes d'apprentissage automatique et des données en temps réel.",
        premiere: "Première",
        seconde: "Seconde",
        terminale: "Terminale",
        spe_maths: "(Spécialité mathématiques)",
        individuel: "(Individuel)",       
    }
};

function updateContent(language) {
    document.querySelectorAll('[data-translate]').forEach(function (element) {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[language][key];
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

document.querySelectorAll('input[name="language"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        const selectedLang = this.value;
        updateContent(selectedLang);
        updateURLParameter('lang', selectedLang);
    });
});

let initialLang = getURLParameter('lang') || 'en';
if (!translations.hasOwnProperty(initialLang)) {
    initialLang = 'en';
}
document.querySelector(`input[name="language"][value="${initialLang}"]`).checked = true;
updateContent(initialLang);
updateURLParameter('lang', initialLang);

document.querySelectorAll('.section-title').forEach(function (sectionTitle) {
    sectionTitle.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-target');
        const sectionContent = document.getElementById(sectionId);
        const chevron = this.querySelector('.chevron');

        if (sectionContent.style.maxHeight) {
            sectionContent.style.maxHeight = null;
        } else {
            sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
        }

        sectionContent.classList.toggle('active');

        chevron.classList.toggle('rotate');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.querySelector('.tooltip');
    const tooltipText = tooltip.querySelector('.tooltip-text');

    tooltip.addEventListener('mouseenter', function () {
        const rect = tooltipText.getBoundingClientRect();
        const overflowRight = rect.right > window.innerWidth;
        const overflowLeft = rect.left < 0;

        if (overflowRight) {
            tooltipText.style.left = 'auto';
            tooltipText.style.right = '0';
            tooltipText.style.transform = 'none';
        } else if (overflowLeft) {
            tooltipText.style.left = '0';
            tooltipText.style.right = 'auto';
            tooltipText.style.transform = 'none';
        } else {
            tooltipText.style.left = '50%';
            tooltipText.style.right = 'auto';
            tooltipText.style.transform = 'translateX(-50%)';
        }
    });

    tooltip.addEventListener('mouseleave', function () {
        tooltipText.style.left = '50%';
        tooltipText.style.right = 'auto';
        tooltipText.style.transform = 'translateX(-50%)';
    });
});

const sections = document.querySelectorAll('.section-title');

sections.forEach((section, index) => {
    section.style.setProperty('--index', index);
    section.style.setProperty('--animation-delay', '0.2s');
});

// Warning Banner Logic
const bannerExpirationDate = new Date('2026-01-31T23:59:59');
const now = new Date();

if (now < bannerExpirationDate) {
    const banner = document.getElementById('warning-banner');
    const modal = document.getElementById('banner-modal');
    const closeBtn = document.querySelector('.close-modal');

    // Ensure elements exist before adding listeners
    if (banner && modal && closeBtn) {
        banner.style.display = 'flex';

        banner.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage =
  localStorage.getItem('spaceRelicsLanguage') || 'en';

const resources = {
  // ========================================
  // ENGLISH
  // ========================================
  en: {
    translation: {
      selectLanguage: 'Select Language',
      aboutMission: 'About the Mission',
      title: 'Space Relics',
      subtitle:
        'Discover the stories of the equipment that came before us on the journey to infinity',
      beginMission: 'Begin Mission',

      explore: 'Explore',
      exploreDescription:
        'Navigate between the Earth, the Moon, and Mars',
      discover: 'Discover',
      discoverDescription: 'Find abandoned equipment',
      learn: 'Learn',
      learnDescription: 'Learn their stories',

      launchDestination: 'Destination: The Moon',
      preparingLaunch: 'Preparing for blast off...',
      spaceshipAlt: 'Spaceship travelling through space',
      arrivalTitle: 'Journey Complete',

      // Moon Arrival
      moonWelcome: 'Welcome To The Moon',
      moonIntroTitle: 'Your lunar exploration begins',
      moonIntroDescription:
        'Look around, find the marked objects and scan them to discover their stories',
      startExploring: 'Start Exploring',

      // Moon Exploration
      moonSelectMarker:
        'Select a discovery marker to investigate an object',
      moonDiscoveredCount: '{{count}} of {{total}} discovered',
      moonDiscoveryProgress: 'Moon discovery progress',
      moonClose: 'Close',
      moonLocationTitle: 'Discovery Location {{number}}',
      moonLocationComingSoon:
        'The equipment story for this location is coming soon.',

      // Moon Scanning
      moonScanning: 'Scanning...',
      moonScanningInstruction:
        'Please wait while we scan this object',

      // Equipment Information Card
      moonWhatIsIt: 'What is it?',
      moonMissionDetails: 'Mission details',
      moonMission: 'Mission',
      moonDate: 'Date',
      moonLocation: 'Location',
      moonStatus: 'Status',
      moonItsStory: 'Its story',
      moonFunFact: 'Fun fact',
      moonImageCredit: 'Image credit',
      moonViewNasaSource: 'View NASA source',
      moonFinishExploring: 'Finish Exploring',
    },
  },

  // ========================================
  // SPANISH
  // ========================================
  es: {
    translation: {
      selectLanguage: 'Seleccionar idioma',
      aboutMission: 'Sobre la misión',
      title: 'Space Relics',
      subtitle:
        'Descubre las historias de los equipos que nos precedieron en el viaje hacia el infinito',
      beginMission: 'Comenzar misión',

      explore: 'Explorar',
      exploreDescription:
        'Navega entre la Tierra, la Luna y Marte',
      discover: 'Descubrir',
      discoverDescription: 'Encuentra equipos abandonados',
      learn: 'Aprender',
      learnDescription: 'Conoce sus historias',

      launchDestination: 'Destino: La Luna',
      preparingLaunch: 'Preparando el despegue...',
      spaceshipAlt: 'Nave espacial viajando por el espacio',
      arrivalTitle: 'Viaje completado',

      // Moon Arrival
      moonWelcome: 'Bienvenido a la Luna',
      moonIntroTitle: 'Tu exploración lunar comienza',
      moonIntroDescription:
        'Mira a tu alrededor, encuentra los objetos marcados y escanéalos para descubrir sus historias',
      startExploring: 'Comenzar a explorar',

      // Moon Exploration
      moonSelectMarker:
        'Selecciona un marcador para investigar un objeto',
      moonDiscoveredCount: '{{count}} de {{total}} descubiertos',
      moonDiscoveryProgress: 'Progreso de exploración lunar',
      moonClose: 'Cerrar',
      moonLocationTitle: 'Lugar de descubrimiento {{number}}',
      moonLocationComingSoon:
        'La historia del equipo de este lugar estará disponible pronto.',

      // Moon Scanning
      moonScanning: 'Escaneando...',
      moonScanningInstruction:
        'Espera mientras escaneamos este objeto',

      // Equipment Information Card
      moonWhatIsIt: '¿Qué es?',
      moonMissionDetails: 'Detalles de la misión',
      moonMission: 'Misión',
      moonDate: 'Fecha',
      moonLocation: 'Ubicación',
      moonStatus: 'Estado',
      moonItsStory: 'Su historia',
      moonFunFact: 'Dato curioso',
      moonImageCredit: 'Crédito de imagen',
      moonViewNasaSource: 'Ver fuente de la NASA',
      moonFinishExploring: 'Terminar exploración',
    },
  },

  // ========================================
  // FRENCH
  // ========================================
  fr: {
    translation: {
      selectLanguage: 'Choisir la langue',
      aboutMission: 'À propos de la mission',
      title: 'Space Relics',
      subtitle:
        'Découvrez les histoires des équipements qui nous ont précédés dans le voyage vers l’infini',
      beginMission: 'Commencer la mission',

      explore: 'Explorer',
      exploreDescription:
        'Naviguez entre la Terre, la Lune et Mars',
      discover: 'Découvrir',
      discoverDescription: 'Trouvez les équipements abandonnés',
      learn: 'Apprendre',
      learnDescription: 'Découvrez leurs histoires',

      launchDestination: 'Destination : La Lune',
      preparingLaunch: 'Préparation du décollage...',
      spaceshipAlt: 'Vaisseau spatial voyageant dans l’espace',
      arrivalTitle: 'Voyage terminé',

      // Moon Arrival
      moonWelcome: 'Bienvenue sur la Lune',
      moonIntroTitle: 'Votre exploration lunaire commence',
      moonIntroDescription:
        'Regardez autour de vous, trouvez les objets marqués et scannez-les pour découvrir leurs histoires',
      startExploring: 'Commencer à explorer',

      // Moon Exploration
      moonSelectMarker:
        'Sélectionnez un marqueur pour examiner un objet',
      moonDiscoveredCount: '{{count}} sur {{total}} découverts',
      moonDiscoveryProgress:
        'Progression de l’exploration lunaire',
      moonClose: 'Fermer',
      moonLocationTitle: 'Lieu de découverte {{number}}',
      moonLocationComingSoon:
        'L’histoire de cet équipement sera bientôt disponible.',

      // Moon Scanning
      moonScanning: 'Analyse en cours...',
      moonScanningInstruction:
        'Veuillez patienter pendant l’analyse de cet objet',

      // Equipment Information Card
      moonWhatIsIt: 'Qu’est-ce que c’est ?',
      moonMissionDetails: 'Détails de la mission',
      moonMission: 'Mission',
      moonDate: 'Date',
      moonLocation: 'Emplacement',
      moonStatus: 'Statut',
      moonItsStory: 'Son histoire',
      moonFunFact: 'Le saviez-vous ?',
      moonImageCredit: 'Crédit image',
      moonViewNasaSource: 'Voir la source NASA',
      moonFinishExploring: 'Terminer l’exploration',
    },
  },

  // ========================================
  // ARABIC
  // ========================================
  ar: {
    translation: {
      selectLanguage: 'اختر اللغة',
      aboutMission: 'عن المهمة',
      title: 'آثار الفضاء',
      subtitle:
        'اكتشف قصص المعدات التي سبقتنا في الرحلة نحو اللانهاية',
      beginMission: 'ابدأ المهمة',

      explore: 'استكشف',
      exploreDescription: 'تنقّل بين الأرض والقمر والمريخ',
      discover: 'اكتشف',
      discoverDescription: 'اعثر على المعدات المهجورة',
      learn: 'تعلّم',
      learnDescription: 'تعرّف على قصصها',

      launchDestination: 'الوجهة: القمر',
      preparingLaunch: 'الاستعداد للإقلاع...',
      spaceshipAlt: 'مركبة فضائية تسافر عبر الفضاء',
      arrivalTitle: 'اكتملت الرحلة',

      // Moon Arrival
      moonWelcome: 'مرحبًا بك على القمر',
      moonIntroTitle: 'تبدأ رحلتك لاستكشاف القمر',
      moonIntroDescription:
        'انظر حولك، وابحث عن الأجسام المحددة وامسحها ضوئيًا لاكتشاف قصصها',
      startExploring: 'ابدأ الاستكشاف',

      // Moon Exploration
      moonSelectMarker:
        'اختر علامة اكتشاف لاستكشاف أحد الأجسام',
      moonDiscoveredCount:
        'تم اكتشاف {{count}} من {{total}}',
      moonDiscoveryProgress: 'تقدم استكشاف القمر',
      moonClose: 'إغلاق',
      moonLocationTitle: 'موقع الاكتشاف {{number}}',
      moonLocationComingSoon:
        'ستتوفر قصة المعدات في هذا الموقع قريبًا.',

      // Moon Scanning
      moonScanning: 'جارٍ المسح...',
      moonScanningInstruction:
        'يرجى الانتظار بينما نفحص هذا الجسم',

      // Equipment Information Card
      moonWhatIsIt: 'ما هذا؟',
      moonMissionDetails: 'تفاصيل المهمة',
      moonMission: 'المهمة',
      moonDate: 'التاريخ',
      moonLocation: 'الموقع',
      moonStatus: 'الحالة',
      moonItsStory: 'قصته',
      moonFunFact: 'معلومة ممتعة',
      moonImageCredit: 'مصدر الصورة',
      moonViewNasaSource: 'عرض مصدر ناسا',
      moonFinishExploring: 'إنهاء الاستكشاف',
    },
  },

  // ========================================
  // HINDI
  // ========================================
  hi: {
    translation: {
      selectLanguage: 'भाषा चुनें',
      aboutMission: 'मिशन के बारे में',
      title: 'Space Relics',
      subtitle:
        'अनंत की यात्रा में हमसे पहले आए उपकरणों की कहानियाँ जानें',
      beginMission: 'मिशन शुरू करें',

      explore: 'अन्वेषण करें',
      exploreDescription:
        'पृथ्वी, चंद्रमा और मंगल के बीच जाएँ',
      discover: 'खोजें',
      discoverDescription: 'छोड़े गए उपकरण खोजें',
      learn: 'जानें',
      learnDescription: 'उनकी कहानियाँ जानें',

      launchDestination: 'गंतव्य: चंद्रमा',
      preparingLaunch: 'उड़ान की तैयारी...',
      spaceshipAlt:
        'अंतरिक्ष में यात्रा करता अंतरिक्ष यान',
      arrivalTitle: 'यात्रा पूरी हुई',

      // Moon Arrival
      moonWelcome: 'चंद्रमा पर आपका स्वागत है',
      moonIntroTitle:
        'आपकी चंद्र अन्वेषण यात्रा शुरू होती है',
      moonIntroDescription:
        'चारों ओर देखें, चिह्नित वस्तुओं को खोजें और उनकी कहानियाँ जानने के लिए उन्हें स्कैन करें',
      startExploring: 'खोजना शुरू करें',

      // Moon Exploration
      moonSelectMarker:
        'किसी वस्तु की जाँच के लिए खोज चिह्न चुनें',
      moonDiscoveredCount:
        '{{total}} में से {{count}} खोजे गए',
      moonDiscoveryProgress: 'चंद्रमा खोज प्रगति',
      moonClose: 'बंद करें',
      moonLocationTitle: 'खोज स्थान {{number}}',
      moonLocationComingSoon:
        'इस स्थान के उपकरण की कहानी जल्द उपलब्ध होगी।',

      // Moon Scanning
      moonScanning: 'स्कैन किया जा रहा है...',
      moonScanningInstruction:
        'कृपया इस वस्तु के स्कैन होने तक प्रतीक्षा करें',

      // Equipment Information Card
      moonWhatIsIt: 'यह क्या है?',
      moonMissionDetails: 'मिशन विवरण',
      moonMission: 'मिशन',
      moonDate: 'तारीख',
      moonLocation: 'स्थान',
      moonStatus: 'स्थिति',
      moonItsStory: 'इसकी कहानी',
      moonFunFact: 'रोचक तथ्य',
      moonImageCredit: 'चित्र स्रोत',
      moonViewNasaSource: 'NASA स्रोत देखें',
      moonFinishExploring: 'खोज पूरी करें',
    },
  },

  // ========================================
  // ITALIAN
  // ========================================
  it: {
    translation: {
      selectLanguage: 'Seleziona lingua',
      aboutMission: 'Informazioni sulla missione',
      title: 'Space Relics',
      subtitle:
        'Scopri le storie delle attrezzature che ci hanno preceduto nel viaggio verso l’infinito',
      beginMission: 'Inizia la missione',

      explore: 'Esplora',
      exploreDescription:
        'Naviga tra la Terra, la Luna e Marte',
      discover: 'Scopri',
      discoverDescription:
        'Trova le attrezzature abbandonate',
      learn: 'Impara',
      learnDescription: 'Scopri le loro storie',

      launchDestination: 'Destinazione: La Luna',
      preparingLaunch: 'Preparazione al decollo...',
      spaceshipAlt: 'Astronave in viaggio nello spazio',
      arrivalTitle: 'Viaggio completato',

      // Moon Arrival
      moonWelcome: 'Benvenuto sulla Luna',
      moonIntroTitle:
        'La tua esplorazione lunare inizia',
      moonIntroDescription:
        'Guardati intorno, trova gli oggetti contrassegnati e scansionali per scoprire le loro storie',
      startExploring: 'Inizia a esplorare',

      // Moon Exploration
      moonSelectMarker:
        'Seleziona un indicatore per esaminare un oggetto',
      moonDiscoveredCount:
        '{{count}} su {{total}} scoperti',
      moonDiscoveryProgress:
        'Progresso dell’esplorazione lunare',
      moonClose: 'Chiudi',
      moonLocationTitle: 'Luogo di scoperta {{number}}',
      moonLocationComingSoon:
        'La storia dell’attrezzatura di questo luogo sarà presto disponibile.',

      // Moon Scanning
      moonScanning: 'Scansione in corso...',
      moonScanningInstruction:
        'Attendi mentre esaminiamo questo oggetto',

      // Equipment Information Card
      moonWhatIsIt: 'Che cos’è?',
      moonMissionDetails: 'Dettagli della missione',
      moonMission: 'Missione',
      moonDate: 'Data',
      moonLocation: 'Posizione',
      moonStatus: 'Stato',
      moonItsStory: 'La sua storia',
      moonFunFact: 'Curiosità',
      moonImageCredit: 'Credito immagine',
      moonViewNasaSource: 'Visualizza fonte NASA',
      moonFinishExploring: 'Termina esplorazione',
    },
  },

  // ========================================
  // JAPANESE
  // ========================================
  ja: {
    translation: {
      selectLanguage: '言語を選択',
      aboutMission: 'ミッションについて',
      title: 'Space Relics',
      subtitle:
        '無限への旅の前に残された機器の物語を発見しましょう',
      beginMission: 'ミッションを開始',

      explore: '探索',
      exploreDescription:
        '地球、月、火星を巡りましょう',
      discover: '発見',
      discoverDescription:
        '放置された機器を見つけましょう',
      learn: '学ぶ',
      learnDescription: 'その物語を知りましょう',

      launchDestination: '目的地：月',
      preparingLaunch: '発射準備中...',
      spaceshipAlt: '宇宙を旅する宇宙船',
      arrivalTitle: '旅が完了しました',

      // Moon Arrival
      moonWelcome: '月へようこそ',
      moonIntroTitle: '月の探検が始まります',
      moonIntroDescription:
        '周囲を見渡し、マークされた物体を見つけてスキャンし、その物語を発見しましょう',
      startExploring: '探索を始める',

      // Moon Exploration
      moonSelectMarker:
        '発見マーカーを選んで物体を調べましょう',
      moonDiscoveredCount:
        '{{total}} 件中 {{count}} 件発見',
      moonDiscoveryProgress: '月面探索の進捗',
      moonClose: '閉じる',
      moonLocationTitle: '発見地点 {{number}}',
      moonLocationComingSoon:
        'この場所の機器の物語は近日公開予定です。',

      // Moon Scanning
      moonScanning: 'スキャン中...',
      moonScanningInstruction:
        'この物体をスキャンしています。お待ちください',

      // Equipment Information Card
      moonWhatIsIt: 'これは何？',
      moonMissionDetails: 'ミッション詳細',
      moonMission: 'ミッション',
      moonDate: '日付',
      moonLocation: '場所',
      moonStatus: '状態',
      moonItsStory: 'その物語',
      moonFunFact: '豆知識',
      moonImageCredit: '画像提供',
      moonViewNasaSource: 'NASAの資料を見る',
      moonFinishExploring: '探索を完了する',
    },
  },

  // ========================================
  // PORTUGUESE
  // ========================================
  pt: {
    translation: {
      selectLanguage: 'Selecionar idioma',
      aboutMission: 'Sobre a missão',
      title: 'Space Relics',
      subtitle:
        'Descubra as histórias dos equipamentos que vieram antes de nós na jornada rumo ao infinito',
      beginMission: 'Iniciar missão',

      explore: 'Explorar',
      exploreDescription:
        'Navegue entre a Terra, a Lua e Marte',
      discover: 'Descobrir',
      discoverDescription:
        'Encontre equipamentos abandonados',
      learn: 'Aprender',
      learnDescription: 'Conheça suas histórias',

      launchDestination: 'Destino: A Lua',
      preparingLaunch: 'Preparando a decolagem...',
      spaceshipAlt:
        'Nave espacial viajando pelo espaço',
      arrivalTitle: 'Viagem concluída',

      // Moon Arrival
      moonWelcome: 'Bem-vindo à Lua',
      moonIntroTitle:
        'Sua exploração lunar começa agora',
      moonIntroDescription:
        'Olhe ao redor, encontre os objetos marcados e escaneie-os para descobrir suas histórias',
      startExploring: 'Começar a explorar',

      // Moon Exploration
      moonSelectMarker:
        'Selecione um marcador para investigar um objeto',
      moonDiscoveredCount:
        '{{count}} de {{total}} descobertos',
      moonDiscoveryProgress:
        'Progresso da exploração lunar',
      moonClose: 'Fechar',
      moonLocationTitle: 'Local de descoberta {{number}}',
      moonLocationComingSoon:
        'A história do equipamento deste local estará disponível em breve.',

      // Moon Scanning
      moonScanning: 'Escaneando...',
      moonScanningInstruction:
        'Aguarde enquanto escaneamos este objeto',

      // Equipment Information Card
      moonWhatIsIt: 'O que é?',
      moonMissionDetails: 'Detalhes da missão',
      moonMission: 'Missão',
      moonDate: 'Data',
      moonLocation: 'Localização',
      moonStatus: 'Estado',
      moonItsStory: 'Sua história',
      moonFunFact: 'Curiosidade',
      moonImageCredit: 'Crédito da imagem',
      moonViewNasaSource: 'Ver fonte da NASA',
      moonFinishExploring: 'Concluir exploração',
    },
  },
};

/* ========================================
   EQUIPMENT STORY TRANSLATIONS
======================================== */

const relicTranslations = {
  en: {
    surveyor3: {
      name: 'Surveyor 3 Spacecraft',
      mission: 'Surveyor 3 / Apollo 12',
      date: 'April 1967',
      location: 'Oceanus Procellarum, Moon',
      status: 'Inactive — left on the Moon',
      description:
        'Surveyor 3 was a robotic spacecraft that landed on the Moon to study its surface before astronauts arrived.',
      story:
        'In April 1967, Surveyor 3 landed on the Moon and photographed its surroundings. In November 1969, Apollo 12 astronauts visited the spacecraft and brought some of its components back to Earth for examination.',
      fact:
        'Surveyor 3 became the first spacecraft on another celestial body to be visited by astronauts.',
    },
    lunarRover: {
      name: 'Apollo 15 Lunar Roving Vehicle',
      mission: 'Apollo 15',
      date: 'July–August 1971',
      location: 'Hadley–Apennine region, Moon',
      status: 'Inactive — left on the Moon',
      description:
        'The Lunar Roving Vehicle was an electric vehicle that allowed astronauts to travel farther across the lunar surface.',
      story:
        'Apollo 15 astronauts David Scott and James Irwin used the first Lunar Roving Vehicle on the Moon. It helped them explore the landscape, collect rock samples, and carry scientific equipment. The rover remained on the Moon when the mission ended.',
      fact:
        'The Apollo 15 rover was the first car driven by humans on another world.',
    },
    alsep: {
      name: 'Apollo 14 ALSEP',
      mission: 'Apollo 14',
      date: 'February 1971',
      location: 'Fra Mauro formation, Moon',
      status: 'Inactive — experiments ended',
      description:
        'The Apollo Lunar Surface Experiments Package (ALSEP) was a collection of scientific instruments placed on the Moon.',
      story:
        'Apollo 14 astronauts deployed instruments to study the lunar environment. These experiments helped scientists investigate moonquakes, charged particles, and other conditions on the Moon. The equipment remained on the lunar surface after the astronauts returned home.',
      fact:
        'Some Apollo scientific instruments continued sending measurements long after the astronauts left the Moon.',
    },
  },

  es: {
    surveyor3: {
      name: 'Sonda espacial Surveyor 3',
      mission: 'Surveyor 3 / Apolo 12',
      date: 'Abril de 1967',
      location: 'Oceanus Procellarum, Luna',
      status: 'Inactiva — permanece en la Luna',
      description:
        'Surveyor 3 fue una sonda espacial robótica que aterrizó en la Luna para estudiar su superficie antes de la llegada de los astronautas.',
      story:
        'En abril de 1967, Surveyor 3 aterrizó en la Luna y fotografió sus alrededores. En noviembre de 1969, los astronautas del Apolo 12 visitaron la sonda y llevaron algunos de sus componentes a la Tierra para examinarlos.',
      fact:
        'Surveyor 3 se convirtió en la primera nave espacial situada en otro cuerpo celeste que recibió la visita de astronautas.',
    },
    lunarRover: {
      name: 'Vehículo lunar del Apolo 15',
      mission: 'Apolo 15',
      date: 'Julio–agosto de 1971',
      location: 'Región Hadley–Apeninos, Luna',
      status: 'Inactivo — permanece en la Luna',
      description:
        'El vehículo lunar era un automóvil eléctrico que permitía a los astronautas recorrer mayores distancias sobre la superficie lunar.',
      story:
        'Los astronautas David Scott y James Irwin del Apolo 15 utilizaron el primer vehículo lunar. Les permitió explorar el paisaje, recoger muestras de rocas y transportar instrumentos científicos. El vehículo permaneció en la Luna al finalizar la misión.',
      fact:
        'El vehículo del Apolo 15 fue el primer automóvil conducido por seres humanos en otro mundo.',
    },
    alsep: {
      name: 'ALSEP del Apolo 14',
      mission: 'Apolo 14',
      date: 'Febrero de 1971',
      location: 'Formación Fra Mauro, Luna',
      status: 'Inactivo — experimentos finalizados',
      description:
        'El Paquete de Experimentos de la Superficie Lunar del Apolo (ALSEP) era un conjunto de instrumentos científicos instalados en la Luna.',
      story:
        'Los astronautas del Apolo 14 instalaron instrumentos para estudiar el entorno lunar. Estos experimentos ayudaron a investigar los terremotos lunares, las partículas cargadas y otras condiciones de la Luna. Los equipos permanecieron allí después del regreso de los astronautas a la Tierra.',
      fact:
        'Algunos instrumentos científicos de las misiones Apolo continuaron enviando mediciones mucho después de que los astronautas abandonaran la Luna.',
    },
  },

  fr: {
    surveyor3: {
      name: 'Sonde spatiale Surveyor 3',
      mission: 'Surveyor 3 / Apollo 12',
      date: 'Avril 1967',
      location: 'Oceanus Procellarum, Lune',
      status: 'Inactive — laissée sur la Lune',
      description:
        'Surveyor 3 était une sonde spatiale robotisée qui s’est posée sur la Lune pour étudier sa surface avant l’arrivée des astronautes.',
      story:
        'En avril 1967, Surveyor 3 s’est posée sur la Lune et a photographié ses environs. En novembre 1969, les astronautes d’Apollo 12 ont visité la sonde et rapporté certains de ses composants sur Terre pour les examiner.',
      fact:
        'Surveyor 3 est devenue la première sonde spatiale située sur un autre corps céleste à recevoir la visite d’astronautes.',
    },
    lunarRover: {
      name: 'Véhicule lunaire d’Apollo 15',
      mission: 'Apollo 15',
      date: 'Juillet–août 1971',
      location: 'Région Hadley–Apennins, Lune',
      status: 'Inactif — laissé sur la Lune',
      description:
        'Le véhicule lunaire était un véhicule électrique permettant aux astronautes de parcourir de plus grandes distances à la surface de la Lune.',
      story:
        'Les astronautes David Scott et James Irwin d’Apollo 15 ont utilisé le premier véhicule lunaire. Il leur a permis d’explorer le paysage, de recueillir des échantillons de roches et de transporter du matériel scientifique. Le véhicule est resté sur la Lune à la fin de la mission.',
      fact:
        'Le véhicule d’Apollo 15 fut la première voiture conduite par des humains sur un autre monde.',
    },
    alsep: {
      name: 'ALSEP d’Apollo 14',
      mission: 'Apollo 14',
      date: 'Février 1971',
      location: 'Formation de Fra Mauro, Lune',
      status: 'Inactif — expériences terminées',
      description:
        'L’Apollo Lunar Surface Experiments Package (ALSEP) était un ensemble d’instruments scientifiques installés sur la Lune.',
      story:
        'Les astronautes d’Apollo 14 ont déployé des instruments pour étudier l’environnement lunaire. Ces expériences ont aidé les scientifiques à examiner les séismes lunaires, les particules chargées et d’autres conditions sur la Lune. Le matériel est resté sur place après le retour des astronautes sur Terre.',
      fact:
        'Certains instruments scientifiques Apollo ont continué à transmettre des mesures longtemps après le départ des astronautes.',
    },
  },

  ar: {
    surveyor3: {
      name: 'المركبة الفضائية سيرفيور 3',
      mission: 'سيرفيور 3 / أبولو 12',
      date: 'أبريل 1967',
      location: 'محيط العواصف، القمر',
      status: 'غير نشطة — تُركت على القمر',
      description:
        'كانت سيرفيور 3 مركبة فضائية روبوتية هبطت على القمر لدراسة سطحه قبل وصول رواد الفضاء.',
      story:
        'في أبريل 1967، هبطت سيرفيور 3 على القمر والتقطت صورًا للمنطقة المحيطة بها. وفي نوفمبر 1969، زار رواد فضاء أبولو 12 المركبة وأعادوا بعض مكوناتها إلى الأرض لفحصها.',
      fact:
        'أصبحت سيرفيور 3 أول مركبة فضائية على جرم سماوي آخر يزورها رواد فضاء.',
    },
    lunarRover: {
      name: 'المركبة الجوالة القمرية لأبولو 15',
      mission: 'أبولو 15',
      date: 'يوليو–أغسطس 1971',
      location: 'منطقة هادلي–أبينين، القمر',
      status: 'غير نشطة — تُركت على القمر',
      description:
        'كانت المركبة الجوالة القمرية مركبة كهربائية أتاحت لرواد الفضاء السفر لمسافات أبعد على سطح القمر.',
      story:
        'استخدم رائدا فضاء أبولو 15 ديفيد سكوت وجيمس إيروين أول مركبة جوالة قمرية. وساعدتهما على استكشاف التضاريس وجمع عينات الصخور ونقل المعدات العلمية. وبقيت المركبة على القمر بعد انتهاء المهمة.',
      fact:
        'كانت مركبة أبولو 15 أول سيارة يقودها البشر على عالم آخر.',
    },
    alsep: {
      name: 'حزمة تجارب أبولو 14 القمرية',
      mission: 'أبولو 14',
      date: 'فبراير 1971',
      location: 'تكوين فرا ماورو، القمر',
      status: 'غير نشطة — انتهت التجارب',
      description:
        'كانت حزمة تجارب سطح القمر التابعة لبرنامج أبولو (ALSEP) مجموعة من الأجهزة العلمية التي وُضعت على القمر.',
      story:
        'نشر رواد فضاء أبولو 14 أجهزة لدراسة البيئة القمرية. وساعدت هذه التجارب العلماء على دراسة الزلازل القمرية والجسيمات المشحونة وظروف أخرى على القمر. وبقيت المعدات على سطح القمر بعد عودة رواد الفضاء إلى الأرض.',
      fact:
        'استمرت بعض الأجهزة العلمية التابعة لبرنامج أبولو في إرسال القياسات لفترة طويلة بعد مغادرة رواد الفضاء للقمر.',
    },
  },

  hi: {
    surveyor3: {
      name: 'सर्वेयर 3 अंतरिक्ष यान',
      mission: 'सर्वेयर 3 / अपोलो 12',
      date: 'अप्रैल 1967',
      location: 'ओशनस प्रोसेलारम, चंद्रमा',
      status: 'निष्क्रिय — चंद्रमा पर छोड़ा गया',
      description:
        'सर्वेयर 3 एक रोबोटिक अंतरिक्ष यान था जो अंतरिक्ष यात्रियों के पहुँचने से पहले चंद्रमा की सतह का अध्ययन करने के लिए वहाँ उतरा था।',
      story:
        'अप्रैल 1967 में सर्वेयर 3 चंद्रमा पर उतरा और आसपास की तस्वीरें लीं। नवंबर 1969 में अपोलो 12 के अंतरिक्ष यात्रियों ने इस यान का दौरा किया और जाँच के लिए इसके कुछ हिस्से पृथ्वी पर वापस लाए।',
      fact:
        'सर्वेयर 3 किसी अन्य खगोलीय पिंड पर मौजूद पहला अंतरिक्ष यान बना जिसे अंतरिक्ष यात्रियों ने जाकर देखा।',
    },
    lunarRover: {
      name: 'अपोलो 15 चंद्र रोविंग वाहन',
      mission: 'अपोलो 15',
      date: 'जुलाई–अगस्त 1971',
      location: 'हैडली–एपेनाइन क्षेत्र, चंद्रमा',
      status: 'निष्क्रिय — चंद्रमा पर छोड़ा गया',
      description:
        'चंद्र रोविंग वाहन एक विद्युत वाहन था जिसने अंतरिक्ष यात्रियों को चंद्रमा की सतह पर अधिक दूरी तय करने में मदद की।',
      story:
        'अपोलो 15 के अंतरिक्ष यात्रियों डेविड स्कॉट और जेम्स इरविन ने चंद्रमा पर पहले रोविंग वाहन का उपयोग किया। इससे उन्हें क्षेत्र का अन्वेषण करने, चट्टानों के नमूने एकत्र करने और वैज्ञानिक उपकरण ले जाने में मदद मिली। मिशन समाप्त होने के बाद वाहन चंद्रमा पर ही रह गया।',
      fact:
        'अपोलो 15 का रोवर किसी दूसरे संसार पर मनुष्यों द्वारा चलाई गई पहली कार थी।',
    },
    alsep: {
      name: 'अपोलो 14 ALSEP',
      mission: 'अपोलो 14',
      date: 'फ़रवरी 1971',
      location: 'फ़्रा मौरो संरचना, चंद्रमा',
      status: 'निष्क्रिय — प्रयोग समाप्त',
      description:
        'अपोलो लूनर सरफ़ेस एक्सपेरिमेंट्स पैकेज (ALSEP) चंद्रमा पर स्थापित किए गए वैज्ञानिक उपकरणों का एक समूह था।',
      story:
        'अपोलो 14 के अंतरिक्ष यात्रियों ने चंद्रमा के वातावरण का अध्ययन करने के लिए उपकरण स्थापित किए। इन प्रयोगों से वैज्ञानिकों को चंद्र भूकंपों, आवेशित कणों और चंद्रमा की अन्य स्थितियों का अध्ययन करने में मदद मिली। अंतरिक्ष यात्रियों के पृथ्वी लौटने के बाद भी उपकरण चंद्रमा पर बने रहे।',
      fact:
        'अपोलो के कुछ वैज्ञानिक उपकरण अंतरिक्ष यात्रियों के चंद्रमा छोड़ने के बहुत समय बाद तक माप भेजते रहे।',
    },
  },

  it: {
    surveyor3: {
      name: 'Sonda spaziale Surveyor 3',
      mission: 'Surveyor 3 / Apollo 12',
      date: 'Aprile 1967',
      location: 'Oceanus Procellarum, Luna',
      status: 'Inattiva — lasciata sulla Luna',
      description:
        'Surveyor 3 era una sonda spaziale robotica atterrata sulla Luna per studiarne la superficie prima dell’arrivo degli astronauti.',
      story:
        'Nell’aprile 1967, Surveyor 3 atterrò sulla Luna e fotografò l’area circostante. Nel novembre 1969, gli astronauti dell’Apollo 12 visitarono la sonda e riportarono sulla Terra alcuni suoi componenti per esaminarli.',
      fact:
        'Surveyor 3 divenne la prima sonda spaziale su un altro corpo celeste a essere visitata dagli astronauti.',
    },
    lunarRover: {
      name: 'Veicolo lunare dell’Apollo 15',
      mission: 'Apollo 15',
      date: 'Luglio–agosto 1971',
      location: 'Regione Hadley–Appennini, Luna',
      status: 'Inattivo — lasciato sulla Luna',
      description:
        'Il veicolo lunare era un mezzo elettrico che permetteva agli astronauti di percorrere distanze maggiori sulla superficie lunare.',
      story:
        'Gli astronauti David Scott e James Irwin dell’Apollo 15 utilizzarono il primo veicolo lunare. Li aiutò a esplorare il paesaggio, raccogliere campioni di roccia e trasportare strumenti scientifici. Il veicolo rimase sulla Luna al termine della missione.',
      fact:
        'Il rover dell’Apollo 15 fu la prima automobile guidata da esseri umani su un altro mondo.',
    },
    alsep: {
      name: 'ALSEP dell’Apollo 14',
      mission: 'Apollo 14',
      date: 'Febbraio 1971',
      location: 'Formazione Fra Mauro, Luna',
      status: 'Inattivo — esperimenti conclusi',
      description:
        'L’Apollo Lunar Surface Experiments Package (ALSEP) era un insieme di strumenti scientifici installati sulla Luna.',
      story:
        'Gli astronauti dell’Apollo 14 installarono strumenti per studiare l’ambiente lunare. Questi esperimenti aiutarono gli scienziati a esaminare i terremoti lunari, le particelle cariche e altre condizioni sulla Luna. Le attrezzature rimasero sulla superficie lunare dopo il ritorno degli astronauti sulla Terra.',
      fact:
        'Alcuni strumenti scientifici delle missioni Apollo continuarono a inviare misurazioni molto tempo dopo la partenza degli astronauti.',
    },
  },

  ja: {
    surveyor3: {
      name: 'サーベイヤー3号探査機',
      mission: 'サーベイヤー3号 / アポロ12号',
      date: '1967年4月',
      location: '嵐の大洋、月',
      status: '運用終了 — 月面に残存',
      description:
        'サーベイヤー3号は、宇宙飛行士が到着する前に月面を調査するため、月に着陸した無人探査機です。',
      story:
        '1967年4月、サーベイヤー3号は月に着陸し、周囲の写真を撮影しました。1969年11月には、アポロ12号の宇宙飛行士が探査機を訪れ、調査のために一部の部品を地球へ持ち帰りました。',
      fact:
        'サーベイヤー3号は、別の天体上で宇宙飛行士が訪問した最初の宇宙探査機となりました。',
    },
    lunarRover: {
      name: 'アポロ15号月面車',
      mission: 'アポロ15号',
      date: '1971年7月〜8月',
      location: 'ハドリー・アペニン地域、月',
      status: '運用終了 — 月面に残存',
      description:
        '月面車は、宇宙飛行士が月面でより遠くまで移動できるように設計された電動車両です。',
      story:
        'アポロ15号の宇宙飛行士デイヴィッド・スコットとジェームズ・アーウィンは、月面で初めて月面車を使用しました。月面車は地形の探査、岩石試料の採取、科学機器の運搬に役立ちました。ミッション終了後、月面車は月に残されました。',
      fact:
        'アポロ15号の月面車は、人類が地球以外の世界で初めて運転した自動車です。',
    },
    alsep: {
      name: 'アポロ14号 ALSEP',
      mission: 'アポロ14号',
      date: '1971年2月',
      location: 'フラ・マウロ地域、月',
      status: '運用終了 — 実験終了',
      description:
        'アポロ月面実験装置（ALSEP）は、月面に設置された複数の科学観測機器からなる装置群です。',
      story:
        'アポロ14号の宇宙飛行士は、月の環境を調査するために観測機器を設置しました。これらの実験は、月震、荷電粒子、その他の月面環境の研究に役立ちました。宇宙飛行士が地球へ帰還した後も、機器は月面に残されました。',
      fact:
        'アポロ計画の一部の科学機器は、宇宙飛行士が月を離れた後も長期間にわたり観測データを送信し続けました。',
    },
  },

  pt: {
    surveyor3: {
      name: 'Sonda espacial Surveyor 3',
      mission: 'Surveyor 3 / Apollo 12',
      date: 'Abril de 1967',
      location: 'Oceanus Procellarum, Lua',
      status: 'Inativa — deixada na Lua',
      description:
        'A Surveyor 3 foi uma sonda espacial robótica que pousou na Lua para estudar sua superfície antes da chegada dos astronautas.',
      story:
        'Em abril de 1967, a Surveyor 3 pousou na Lua e fotografou seus arredores. Em novembro de 1969, os astronautas da Apollo 12 visitaram a sonda e trouxeram alguns de seus componentes de volta à Terra para análise.',
      fact:
        'A Surveyor 3 tornou-se a primeira nave espacial em outro corpo celeste a ser visitada por astronautas.',
    },
    lunarRover: {
      name: 'Veículo lunar da Apollo 15',
      mission: 'Apollo 15',
      date: 'Julho–agosto de 1971',
      location: 'Região Hadley–Apeninos, Lua',
      status: 'Inativo — deixado na Lua',
      description:
        'O veículo lunar era um veículo elétrico que permitia aos astronautas percorrer distâncias maiores na superfície da Lua.',
      story:
        'Os astronautas David Scott e James Irwin, da Apollo 15, utilizaram o primeiro veículo lunar. Ele ajudou na exploração da paisagem, na coleta de amostras de rochas e no transporte de equipamentos científicos. O veículo permaneceu na Lua após o fim da missão.',
      fact:
        'O veículo da Apollo 15 foi o primeiro carro dirigido por seres humanos em outro mundo.',
    },
    alsep: {
      name: 'ALSEP da Apollo 14',
      mission: 'Apollo 14',
      date: 'Fevereiro de 1971',
      location: 'Formação Fra Mauro, Lua',
      status: 'Inativo — experimentos encerrados',
      description:
        'O Pacote de Experimentos da Superfície Lunar da Apollo (ALSEP) era um conjunto de instrumentos científicos instalados na Lua.',
      story:
        'Os astronautas da Apollo 14 instalaram instrumentos para estudar o ambiente lunar. Esses experimentos ajudaram os cientistas a investigar terremotos lunares, partículas carregadas e outras condições na Lua. Os equipamentos permaneceram na superfície lunar após o retorno dos astronautas à Terra.',
      fact:
        'Alguns instrumentos científicos das missões Apollo continuaram enviando medições muito depois de os astronautas deixarem a Lua.',
    },
  },
};

// Merge equipment translations with existing translations.
Object.entries(relicTranslations).forEach(
  ([language, equipment]) => {
    resources[language].translation.relics = equipment;
  }
);



/* ========================================
   MOON EXPLORATION COMPLETE TRANSLATIONS
======================================== */

const moonCompletionTranslations = {
  // ENGLISH
  en: {
    moonAllDiscovered:
      'All objects have been discovered',
    moonExplorationComplete:
      'Moon Exploration Complete',
    moonContinueToMars:
      'Continue To Mars',
  },

  // SPANISH
  es: {
    moonAllDiscovered:
      'Se han descubierto todos los objetos',
    moonExplorationComplete:
      'Exploración lunar completada',
    moonContinueToMars:
      'Continuar a Marte',
  },

  // FRENCH
  fr: {
    moonAllDiscovered:
      'Tous les objets ont été découverts',
    moonExplorationComplete:
      'Exploration lunaire terminée',
    moonContinueToMars:
      'Continuer vers Mars',
  },

  // ARABIC
  ar: {
    moonAllDiscovered:
      'تم اكتشاف جميع الأجسام',
    moonExplorationComplete:
      'اكتمل استكشاف القمر',
    moonContinueToMars:
      'المتابعة إلى المريخ',
  },

  // HINDI
  hi: {
    moonAllDiscovered:
      'सभी वस्तुओं की खोज हो चुकी है',
    moonExplorationComplete:
      'चंद्रमा की खोज पूरी हुई',
    moonContinueToMars:
      'मंगल ग्रह की ओर बढ़ें',
  },

  // ITALIAN
  it: {
    moonAllDiscovered:
      'Tutti gli oggetti sono stati scoperti',
    moonExplorationComplete:
      'Esplorazione lunare completata',
    moonContinueToMars:
      'Continua verso Marte',
  },

  // JAPANESE
  ja: {
    moonAllDiscovered:
      'すべての機器を発見しました',
    moonExplorationComplete:
      '月の探査が完了しました',
    moonContinueToMars:
      '火星へ進む',
  },

  // PORTUGUESE
  pt: {
    moonAllDiscovered:
      'Todos os objetos foram descobertos',
    moonExplorationComplete:
      'Exploração lunar concluída',
    moonContinueToMars:
      'Continuar para Marte',
  },
};

// Add completion translations to existing languages
Object.entries(moonCompletionTranslations).forEach(
  ([language, messages]) => {
    Object.assign(
      resources[language].translation,
      messages
    );
  }
);



/* ========================================
   MARS LAUNCH TRANSLATIONS
======================================== */

const marsLaunchTranslations = {
  en: {
    marsLaunchDestination: 'Destination: Mars',
    marsPreparingLaunch: 'Preparing for blast off ..........',
  },

  es: {
    marsLaunchDestination: 'Destino: Marte',
    marsPreparingLaunch: 'Preparando el despegue ..........',
  },

  fr: {
    marsLaunchDestination: 'Destination : Mars',
    marsPreparingLaunch: 'Préparation au décollage ..........',
  },

  ar: {
    marsLaunchDestination: 'الوجهة: المريخ',
    marsPreparingLaunch: 'الاستعداد للإقلاع ..........',
  },

  hi: {
    marsLaunchDestination: 'गंतव्य: मंगल ग्रह',
    marsPreparingLaunch: 'उड़ान की तैयारी जारी है ..........',
  },

  it: {
    marsLaunchDestination: 'Destinazione: Marte',
    marsPreparingLaunch: 'Preparazione al decollo ..........',
  },

  ja: {
    marsLaunchDestination: '目的地：火星',
    marsPreparingLaunch: '打ち上げ準備中 ..........',
  },

  pt: {
    marsLaunchDestination: 'Destino: Marte',
    marsPreparingLaunch: 'Preparando a decolagem ..........',
  },
};

Object.entries(marsLaunchTranslations).forEach(
  ([language, messages]) => {
    Object.assign(
      resources[language].translation,
      messages
    );
  }
);


/* ========================================
   MARS ARRIVAL TRANSLATIONS
======================================== */

const marsArrivalTranslations = {
  // ENGLISH
  en: {
    marsWelcome: 'Welcome To Mars',
    marsIntroTitle: 'Your Martian exploration begins',
    marsIntroDescription:
      'Look around, find the marked objects and scan them to discover their stories',
    marsStartExploring: 'Begin Mission',
  },

  // SPANISH
  es: {
    marsWelcome: 'Bienvenido a Marte',
    marsIntroTitle: 'Tu exploración marciana comienza',
    marsIntroDescription:
      'Mira a tu alrededor, encuentra los objetos marcados y escanéalos para descubrir sus historias',
    marsStartExploring: 'Comenzar misión',
  },

  // FRENCH
  fr: {
    marsWelcome: 'Bienvenue sur Mars',
    marsIntroTitle: 'Votre exploration martienne commence',
    marsIntroDescription:
      'Regardez autour de vous, trouvez les objets marqués et scannez-les pour découvrir leurs histoires',
    marsStartExploring: 'Commencer la mission',
  },

  // ARABIC
  ar: {
    marsWelcome: 'مرحبًا بك على المريخ',
    marsIntroTitle: 'تبدأ رحلتك لاستكشاف المريخ',
    marsIntroDescription:
      'انظر حولك، وابحث عن الأجسام المحددة وامسحها ضوئيًا لاكتشاف قصصها',
    marsStartExploring: 'ابدأ المهمة',
  },

  // HINDI
  hi: {
    marsWelcome: 'मंगल ग्रह पर आपका स्वागत है',
    marsIntroTitle: 'आपकी मंगल अन्वेषण यात्रा शुरू होती है',
    marsIntroDescription:
      'चारों ओर देखें, चिह्नित वस्तुओं को खोजें और उनकी कहानियाँ जानने के लिए उन्हें स्कैन करें',
    marsStartExploring: 'मिशन शुरू करें',
  },

  // ITALIAN
  it: {
    marsWelcome: 'Benvenuto su Marte',
    marsIntroTitle: 'La tua esplorazione marziana inizia',
    marsIntroDescription:
      'Guardati intorno, trova gli oggetti contrassegnati e scansionali per scoprire le loro storie',
    marsStartExploring: 'Inizia la missione',
  },

  // JAPANESE
  ja: {
    marsWelcome: '火星へようこそ',
    marsIntroTitle: '火星の探検が始まります',
    marsIntroDescription:
      '周囲を見渡し、マークされた物体を見つけてスキャンし、その物語を発見しましょう',
    marsStartExploring: 'ミッションを開始',
  },

  // PORTUGUESE
  pt: {
    marsWelcome: 'Bem-vindo a Marte',
    marsIntroTitle: 'Sua exploração marciana começa agora',
    marsIntroDescription:
      'Olhe ao redor, encontre os objetos marcados e escaneie-os para descobrir suas histórias',
    marsStartExploring: 'Iniciar missão',
  },
};

// Add Mars Arrival translations to existing languages
Object.entries(marsArrivalTranslations).forEach(
  ([language, messages]) => {
    Object.assign(
      resources[language].translation,
      messages
    );
  }
);


/* ========================================
   MARS EXPLORATION TRANSLATIONS
======================================== */

const marsExplorationTranslations = {
  en: {
    marsSelectMarker: 'Select a discovery marker to investigate an object',
    marsDiscoveredCount: '{{count}} of {{total}} discovered',
    marsDiscoveryProgress: 'Mars discovery progress',
    marsClose: 'Close',
    marsLocationTitle: 'Discovery Location {{number}}',
    marsLocationComingSoon:
      'The equipment story for this location is coming soon.',
    marsScanning: 'Scanning...',
    marsScanningInstruction:
      'Please wait while we scan this object',
    marsWhatIsIt: 'What is it?',
    marsMissionDetails: 'Mission details',
    marsMission: 'Mission',
    marsDate: 'Date',
    marsLocation: 'Location',
    marsStatus: 'Status',
    marsItsStory: 'Its story',
    marsFunFact: 'Fun fact',
    marsImageCredit: 'Image credit',
    marsViewNasaSource: 'View NASA source',
    marsFinishExploring: 'Finish Exploring',
    marsAllDiscovered: 'All objects have been discovered',
    marsExplorationComplete: 'Mars Exploration Complete',
    marsBackToEarth: 'Return To Earth',
  },

  es: {
    marsSelectMarker: 'Selecciona un marcador para investigar un objeto',
    marsDiscoveredCount: '{{count}} de {{total}} descubiertos',
    marsDiscoveryProgress: 'Progreso de exploración marciana',
    marsClose: 'Cerrar',
    marsLocationTitle: 'Lugar de descubrimiento {{number}}',
    marsLocationComingSoon:
      'La historia del equipo de este lugar estará disponible pronto.',
    marsScanning: 'Escaneando...',
    marsScanningInstruction:
      'Espera mientras escaneamos este objeto',
    marsWhatIsIt: '¿Qué es?',
    marsMissionDetails: 'Detalles de la misión',
    marsMission: 'Misión',
    marsDate: 'Fecha',
    marsLocation: 'Ubicación',
    marsStatus: 'Estado',
    marsItsStory: 'Su historia',
    marsFunFact: 'Dato curioso',
    marsImageCredit: 'Crédito de imagen',
    marsViewNasaSource: 'Ver fuente de la NASA',
    marsFinishExploring: 'Terminar exploración',
    marsAllDiscovered: 'Se han descubierto todos los objetos',
    marsExplorationComplete: 'Exploración marciana completada',
    marsBackToEarth: 'Regresar a la Tierra',
  },

  fr: {
    marsSelectMarker: 'Sélectionnez un marqueur pour examiner un objet',
    marsDiscoveredCount: '{{count}} sur {{total}} découverts',
    marsDiscoveryProgress: 'Progression de l’exploration martienne',
    marsClose: 'Fermer',
    marsLocationTitle: 'Lieu de découverte {{number}}',
    marsLocationComingSoon:
      'L’histoire de cet équipement sera bientôt disponible.',
    marsScanning: 'Analyse en cours...',
    marsScanningInstruction:
      'Veuillez patienter pendant l’analyse de cet objet',
    marsWhatIsIt: 'Qu’est-ce que c’est ?',
    marsMissionDetails: 'Détails de la mission',
    marsMission: 'Mission',
    marsDate: 'Date',
    marsLocation: 'Emplacement',
    marsStatus: 'Statut',
    marsItsStory: 'Son histoire',
    marsFunFact: 'Le saviez-vous ?',
    marsImageCredit: 'Crédit image',
    marsViewNasaSource: 'Voir la source NASA',
    marsFinishExploring: 'Terminer l’exploration',
    marsAllDiscovered: 'Tous les objets ont été découverts',
    marsExplorationComplete: 'Exploration martienne terminée',
    marsBackToEarth: 'Retour sur Terre',
  },

  ar: {
    marsSelectMarker: 'اختر علامة اكتشاف لاستكشاف أحد الأجسام',
    marsDiscoveredCount: 'تم اكتشاف {{count}} من {{total}}',
    marsDiscoveryProgress: 'تقدم استكشاف المريخ',
    marsClose: 'إغلاق',
    marsLocationTitle: 'موقع الاكتشاف {{number}}',
    marsLocationComingSoon:
      'ستتوفر قصة المعدات في هذا الموقع قريبًا.',
    marsScanning: 'جارٍ المسح...',
    marsScanningInstruction:
      'يرجى الانتظار بينما نفحص هذا الجسم',
    marsWhatIsIt: 'ما هذا؟',
    marsMissionDetails: 'تفاصيل المهمة',
    marsMission: 'المهمة',
    marsDate: 'التاريخ',
    marsLocation: 'الموقع',
    marsStatus: 'الحالة',
    marsItsStory: 'قصته',
    marsFunFact: 'معلومة ممتعة',
    marsImageCredit: 'مصدر الصورة',
    marsViewNasaSource: 'عرض مصدر ناسا',
    marsFinishExploring: 'إنهاء الاستكشاف',
    marsAllDiscovered: 'تم اكتشاف جميع الأجسام',
    marsExplorationComplete: 'اكتمل استكشاف المريخ',
    marsBackToEarth: 'العودة إلى الأرض',
  },

  hi: {
    marsSelectMarker: 'किसी वस्तु की जाँच के लिए खोज चिह्न चुनें',
    marsDiscoveredCount: '{{total}} में से {{count}} खोजे गए',
    marsDiscoveryProgress: 'मंगल ग्रह खोज प्रगति',
    marsClose: 'बंद करें',
    marsLocationTitle: 'खोज स्थान {{number}}',
    marsLocationComingSoon:
      'इस स्थान के उपकरण की कहानी जल्द उपलब्ध होगी।',
    marsScanning: 'स्कैन किया जा रहा है...',
    marsScanningInstruction:
      'कृपया इस वस्तु के स्कैन होने तक प्रतीक्षा करें',
    marsWhatIsIt: 'यह क्या है?',
    marsMissionDetails: 'मिशन विवरण',
    marsMission: 'मिशन',
    marsDate: 'तारीख',
    marsLocation: 'स्थान',
    marsStatus: 'स्थिति',
    marsItsStory: 'इसकी कहानी',
    marsFunFact: 'रोचक तथ्य',
    marsImageCredit: 'चित्र स्रोत',
    marsViewNasaSource: 'NASA स्रोत देखें',
    marsFinishExploring: 'खोज पूरी करें',
    marsAllDiscovered: 'सभी वस्तुओं की खोज हो चुकी है',
    marsExplorationComplete: 'मंगल ग्रह की खोज पूरी हुई',
    marsBackToEarth: 'पृथ्वी पर लौटें',
  },

  it: {
    marsSelectMarker: 'Seleziona un indicatore per esaminare un oggetto',
    marsDiscoveredCount: '{{count}} su {{total}} scoperti',
    marsDiscoveryProgress: 'Progresso dell’esplorazione marziana',
    marsClose: 'Chiudi',
    marsLocationTitle: 'Luogo di scoperta {{number}}',
    marsLocationComingSoon:
      'La storia dell’attrezzatura di questo luogo sarà presto disponibile.',
    marsScanning: 'Scansione in corso...',
    marsScanningInstruction:
      'Attendi mentre esaminiamo questo oggetto',
    marsWhatIsIt: 'Che cos’è?',
    marsMissionDetails: 'Dettagli della missione',
    marsMission: 'Missione',
    marsDate: 'Data',
    marsLocation: 'Posizione',
    marsStatus: 'Stato',
    marsItsStory: 'La sua storia',
    marsFunFact: 'Curiosità',
    marsImageCredit: 'Credito immagine',
    marsViewNasaSource: 'Visualizza fonte NASA',
    marsFinishExploring: 'Termina esplorazione',
    marsAllDiscovered: 'Tutti gli oggetti sono stati scoperti',
    marsExplorationComplete: 'Esplorazione marziana completata',
    marsBackToEarth: 'Ritorna sulla Terra',
  },

  ja: {
    marsSelectMarker: '発見マーカーを選んで物体を調べましょう',
    marsDiscoveredCount: '{{total}} 件中 {{count}} 件発見',
    marsDiscoveryProgress: '火星探査の進捗',
    marsClose: '閉じる',
    marsLocationTitle: '発見地点 {{number}}',
    marsLocationComingSoon:
      'この場所の機器の物語は近日公開予定です。',
    marsScanning: 'スキャン中...',
    marsScanningInstruction:
      'この物体をスキャンしています。お待ちください',
    marsWhatIsIt: 'これは何？',
    marsMissionDetails: 'ミッション詳細',
    marsMission: 'ミッション',
    marsDate: '日付',
    marsLocation: '場所',
    marsStatus: '状態',
    marsItsStory: 'その物語',
    marsFunFact: '豆知識',
    marsImageCredit: '画像提供',
    marsViewNasaSource: 'NASAの資料を見る',
    marsFinishExploring: '探索を完了する',
    marsAllDiscovered: 'すべての機器を発見しました',
    marsExplorationComplete: '火星の探査が完了しました',
    marsBackToEarth: '地球へ帰還',
  },

  pt: {
    marsSelectMarker: 'Selecione um marcador para investigar um objeto',
    marsDiscoveredCount: '{{count}} de {{total}} descobertos',
    marsDiscoveryProgress: 'Progresso da exploração marciana',
    marsClose: 'Fechar',
    marsLocationTitle: 'Local de descoberta {{number}}',
    marsLocationComingSoon:
      'A história do equipamento deste local estará disponível em breve.',
    marsScanning: 'Escaneando...',
    marsScanningInstruction:
      'Aguarde enquanto escaneamos este objeto',
    marsWhatIsIt: 'O que é?',
    marsMissionDetails: 'Detalhes da missão',
    marsMission: 'Missão',
    marsDate: 'Data',
    marsLocation: 'Localização',
    marsStatus: 'Estado',
    marsItsStory: 'Sua história',
    marsFunFact: 'Curiosidade',
    marsImageCredit: 'Crédito da imagem',
    marsViewNasaSource: 'Ver fonte da NASA',
    marsFinishExploring: 'Concluir exploração',
    marsAllDiscovered: 'Todos os objetos foram descobertos',
    marsExplorationComplete: 'Exploração marciana concluída',
    marsBackToEarth: 'Voltar à Terra',
  },
};

Object.entries(marsExplorationTranslations).forEach(
  ([language, messages]) => {
    Object.assign(resources[language].translation, messages);
  }
);



/* ========================================
   RETURN TO EARTH TRANSLATIONS
======================================== */

const returnToEarthTranslations = {
  en: {
    returnDestination: 'Destination: Earth',
    returnPreparingLaunch: 'Preparing for the journey home...',
    returnJourney: 'Returning To Earth',
    returnDescription:
      'Our exploration is complete. It is time to return home.',
  },

  es: {
    returnDestination: 'Destino: La Tierra',
    returnPreparingLaunch: 'Preparando el viaje de regreso...',
    returnJourney: 'Regresando a la Tierra',
    returnDescription:
      'Nuestra exploración ha terminado. Es hora de volver a casa.',
  },

  fr: {
    returnDestination: 'Destination : La Terre',
    returnPreparingLaunch: 'Préparation du voyage de retour...',
    returnJourney: 'Retour sur Terre',
    returnDescription:
      'Notre exploration est terminée. Il est temps de rentrer.',
  },

  ar: {
    returnDestination: 'الوجهة: الأرض',
    returnPreparingLaunch: 'الاستعداد لرحلة العودة...',
    returnJourney: 'العودة إلى الأرض',
    returnDescription:
      'اكتمل استكشافنا. حان وقت العودة إلى الوطن.',
  },

  hi: {
    returnDestination: 'गंतव्य: पृथ्वी',
    returnPreparingLaunch: 'वापसी की यात्रा की तैयारी...',
    returnJourney: 'पृथ्वी पर वापसी',
    returnDescription:
      'हमारा अन्वेषण पूरा हो गया है। अब घर लौटने का समय है।',
  },

  it: {
    returnDestination: 'Destinazione: Terra',
    returnPreparingLaunch: 'Preparazione del viaggio di ritorno...',
    returnJourney: 'Ritorno sulla Terra',
    returnDescription:
      'La nostra esplorazione è completa. È ora di tornare a casa.',
  },

  ja: {
    returnDestination: '目的地：地球',
    returnPreparingLaunch: '帰還の準備中...',
    returnJourney: '地球へ帰還中',
    returnDescription:
      '探査が完了しました。地球へ帰る時間です。',
  },

  pt: {
    returnDestination: 'Destino: Terra',
    returnPreparingLaunch: 'Preparando a viagem de volta...',
    returnJourney: 'Retornando à Terra',
    returnDescription:
      'Nossa exploração está concluída. É hora de voltar para casa.',
  },
};

Object.entries(returnToEarthTranslations).forEach(
  ([language, messages]) => {
    Object.assign(resources[language].translation, messages);
  }
);



/* ========================================
   EARTH ARRIVAL — MISSION COMPLETE
======================================== */

const earthArrivalTranslations = {
  en: {
    earthArrivalTitle: 'Welcome Back, Explorer!',
    missionAccomplished: 'Mission Accomplished!',
    earthArrivalMessage:
      "You've successfully explored the Moon and Mars, uncovered the stories of six remarkable pieces of space equipment, and returned safely to Earth.",
    relicsDiscovered: 'Relics Discovered',
    worldsExplored: 'Worlds Explored',
    anotherAdventure: 'Ready for another adventure?',
    exploreAgain: 'Explore Again',
  },

  es: {
    earthArrivalTitle: '¡Bienvenido de nuevo, explorador!',
    missionAccomplished: '¡Misión cumplida!',
    earthArrivalMessage:
      'Has explorado con éxito la Luna y Marte, descubierto las historias de seis increíbles equipos espaciales y regresado a salvo a la Tierra.',
    relicsDiscovered: 'Reliquias descubiertas',
    worldsExplored: 'Mundos explorados',
    anotherAdventure: '¿Listo para otra aventura?',
    exploreAgain: 'Explorar de nuevo',
  },

  fr: {
    earthArrivalTitle: 'Bon retour, explorateur !',
    missionAccomplished: 'Mission accomplie !',
    earthArrivalMessage:
      'Vous avez exploré la Lune et Mars, découvert les histoires de six équipements spatiaux remarquables et êtes revenu sur Terre en toute sécurité.',
    relicsDiscovered: 'Vestiges découverts',
    worldsExplored: 'Mondes explorés',
    anotherAdventure: 'Prêt pour une nouvelle aventure ?',
    exploreAgain: 'Explorer à nouveau',
  },

  ar: {
    earthArrivalTitle: 'مرحبًا بعودتك أيها المستكشف!',
    missionAccomplished: 'تم إنجاز المهمة!',
    earthArrivalMessage:
      'لقد استكشفت القمر والمريخ بنجاح، واكتشفت قصص ست قطع مذهلة من المعدات الفضائية، وعدت سالمًا إلى الأرض.',
    relicsDiscovered: 'الآثار المكتشفة',
    worldsExplored: 'العوالم المستكشفة',
    anotherAdventure: 'هل أنت مستعد لمغامرة أخرى؟',
    exploreAgain: 'استكشف مجددًا',
  },

  hi: {
    earthArrivalTitle: 'वापसी पर स्वागत है, खोजकर्ता!',
    missionAccomplished: 'मिशन पूरा हुआ!',
    earthArrivalMessage:
      'आपने सफलतापूर्वक चंद्रमा और मंगल ग्रह का अन्वेषण किया, अंतरिक्ष उपकरणों की छह अद्भुत कहानियाँ खोजीं और सुरक्षित पृथ्वी पर लौट आए।',
    relicsDiscovered: 'खोजे गए अवशेष',
    worldsExplored: 'खोजे गए संसार',
    anotherAdventure: 'एक और रोमांच के लिए तैयार हैं?',
    exploreAgain: 'फिर से अन्वेषण करें',
  },

  it: {
    earthArrivalTitle: 'Bentornato, esploratore!',
    missionAccomplished: 'Missione compiuta!',
    earthArrivalMessage:
      'Hai esplorato con successo la Luna e Marte, scoperto le storie di sei straordinarie attrezzature spaziali e sei tornato sano e salvo sulla Terra.',
    relicsDiscovered: 'Reperti scoperti',
    worldsExplored: 'Mondi esplorati',
    anotherAdventure: 'Pronto per un’altra avventura?',
    exploreAgain: 'Esplora di nuovo',
  },

  ja: {
    earthArrivalTitle: 'おかえりなさい、探検家！',
    missionAccomplished: 'ミッション達成！',
    earthArrivalMessage:
      '月と火星の探査に成功し、6つの貴重な宇宙機器の物語を発見して、無事に地球へ帰還しました。',
    relicsDiscovered: '発見した遺物',
    worldsExplored: '探査した天体',
    anotherAdventure: 'もう一度冒険に出かけますか？',
    exploreAgain: 'もう一度探検する',
  },

  pt: {
    earthArrivalTitle: 'Bem-vindo de volta, explorador!',
    missionAccomplished: 'Missão cumprida!',
    earthArrivalMessage:
      'Você explorou com sucesso a Lua e Marte, descobriu as histórias de seis equipamentos espaciais extraordinários e retornou em segurança à Terra.',
    relicsDiscovered: 'Relíquias descobertas',
    worldsExplored: 'Mundos explorados',
    anotherAdventure: 'Pronto para outra aventura?',
    exploreAgain: 'Explorar novamente',
  },
};

Object.entries(earthArrivalTranslations).forEach(
  ([language, messages]) => {
    Object.assign(resources[language].translation, messages);
  }
);

// ========================================
// INITIALIZE TRANSLATIONS
// ========================================

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

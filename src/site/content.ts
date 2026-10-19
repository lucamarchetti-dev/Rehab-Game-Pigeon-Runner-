/**
 * Facts about the project come from the archive supplied with the brief
 * (README.md, package.json, package-lock.json and the game sources).
 * Anything that could not be verified is marked as not documented instead of
 * being invented.
 */
export type Lang = 'it' | 'en'

export type Metadata = {
  title: string
  description: string
}

const it = {
  metadata: {
    home: {
      title: 'Rehab Game Pigeon Runner',
      description:
        'Due minigiochi di riabilitazione controllati con il corpo. La postura viene riconosciuta nel browser con TensorFlow.js e MoveNet.',
    },
    game1: {
      title: 'Outlaw Run — Rehab Game Pigeon Runner',
      description:
        'Un runner pixelato nel Far West: sposta il peso del corpo per cambiare corsia e schivare gli ostacoli.',
    },
    game2: {
      title: 'Pigeon Blaster — Rehab Game Pigeon Runner',
      description:
        'Punta i piccioni con i polsi, evita le pigne e cattura i piccioni dorati in questo minigioco di riabilitazione.',
    },
    about: {
      title: 'Il progetto — Rehab Game Pigeon Runner',
      description:
        'Come funziona Rehab Game Pigeon Runner: due minigiochi, una webcam e il riconoscimento della postura interamente nel browser.',
    },
    technologies: {
      title: 'Tecnologie — Rehab Game Pigeon Runner',
      description:
        'Le tecnologie realmente utilizzate dal progetto: React, TypeScript, Vite, TensorFlow.js, MoveNet, Canvas API e WebRTC.',
    },
    credits: {
      title: 'Crediti — Rehab Game Pigeon Runner',
      description:
        'Contributi, librerie, font, asset e licenze del progetto Rehab Game Pigeon Runner.',
    },
    notFound: {
      title: 'Pagina non trovata — Rehab Game Pigeon Runner',
      description: 'La pagina richiesta non esiste.',
    },
  },

  nav: {
    home: 'Home',
    game1: 'Outlaw Run',
    game2: 'Pigeon Blaster',
    about: 'Il progetto',
    technologies: 'Tecnologie',
    credits: 'Crediti',
    navigation: 'Navigazione principale',
    skip: 'Salta al contenuto',
    menu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    language: 'Lingua',
    languageSwitch: 'Passa all’inglese',
    themeToDark: 'Attiva il tema scuro',
    themeToLight: 'Attiva il tema chiaro',
  },

  ui: {
    play: 'Gioca',
    playGame: 'Apri il gioco',
    discover: 'Scopri il progetto',
    seeGames: 'Vedi i giochi',
    backHome: 'Torna alla home',
    allGames: 'Tutti i giochi',
    otherGame: 'Prova l’altro gioco',
    gameLabel: 'Gioco',
    controls: 'Comandi',
    objective: 'Obiettivo',
    facts: 'In breve',
    cameraTitle: 'Serve una webcam',
    cameraText:
      'Concedi al browser l’accesso alla fotocamera. Il video viene elaborato sul tuo dispositivo e non viene caricato su un server.',
    browserNote:
      'Per giocare serve un browser moderno con WebGL e accesso alla fotocamera.',
    externalLink: 'Si apre in una nuova scheda',
    onThisPage: 'In questa pagina',
    previous: 'Precedente',
    next: 'Successivo',
    comingSoon: 'In arrivo',
    gateTitle: 'Pronto a muoverti?',
    gateText:
      'Il gioco userà la webcam per riconoscere la posizione del corpo. Il video viene elaborato solo sul tuo dispositivo.',
    gateCta: 'Attiva la webcam e gioca',
    gateHint:
      'Se la webcam non parte, controlla i permessi della fotocamera nel browser e ricarica la pagina.',
    playArea: 'Area di gioco',
    loading: 'Caricamento del gioco…',
    reload: 'Ricarica',
  },

  footer: {
    tagline:
      'Un progetto open source che usa il gioco per rimettere in movimento il corpo.',
    exploreTitle: 'Esplora',
    projectTitle: 'Progetto',
    resourcesTitle: 'Risorse',
    repository: 'Repository',
    license: 'Licenza',
    licenseName: 'GPL-3.0',
    builtWith: 'Costruito con React, TypeScript e TensorFlow.js.',
    sourceNote: 'Codice sorgente distribuito con licenza GPL-3.0.',
    repoNameLabel: 'Nome del repository',
  },

  home: {
    eyebrow: 'Un gioco di riabilitazione.',
    titleLead: 'La riabilitazione,',
    titleAccent: 'rimessa in gioco.',
    intro:
      'Rehab Game Pigeon Runner trasforma esercizi di mobilità in due minigiochi. Basta una webcam: il corpo diventa il controller.',
    body:
      'Niente visori e niente sensori da indossare. Il riconoscimento della postura avviene interamente nel browser con TensorFlow.js e MoveNet, e i movimenti diventano input di gioco in tempo reale.',
    ctaGames: 'Scegli una sfida',
    ctaAbout: 'Come funziona',
    stats: [
      { value: '2', label: 'minigiochi' },
      { value: '17', label: 'punti del corpo rilevati' },
      { value: '100%', label: 'nel browser' },
    ],
    stamp: 'webcam · no sensori',
    gamesEyebrow: 'Le due sfide',
    gamesTitle: 'Scegli come muoverti.',
    gamesIntro:
      'Stessa webcam, due modi di giocare. Ogni gioco allena gesti diversi e mantiene il proprio carattere visivo.',
    cards: {
      outlaw: {
        number: '01',
        setting: 'Il Far West',
        tag: 'Schiva & corri',
        title: 'Outlaw Run',
        description:
          'Un runner pixelato tra cactus e barili. Sposta il peso del corpo per cambiare corsia e resistere il più possibile.',
        cta: 'Entra nel Far West',
        meta: '3 corsie · 3 vite',
        accent: 'west',
      },
      pigeon: {
        number: '02',
        setting: 'Il cielo',
        tag: 'Punta & colpisci',
        title: 'Pigeon Blaster',
        description:
          'Un cielo invaso dai piccioni. Usa i polsi come mirino, evita le pigne e cattura i piccioni dorati.',
        cta: 'Alza le braccia',
        meta: '3 difficoltà · calibrazione',
        accent: 'sky',
      },
    },
    howEyebrow: 'Come si gioca',
    howTitle: 'Tre passi, zero sensori.',
    howText:
      'La telecamera del computer è l’unico hardware necessario. Il resto lo fa il modello di pose detection.',
    steps: [
      {
        number: '01',
        title: 'Apri la webcam',
        text: 'Concedi il permesso al browser. Il video resta sul tuo dispositivo.',
      },
      {
        number: '02',
        title: 'Il corpo diventa input',
        text: 'MoveNet individua 17 punti del corpo e li traduce in movimenti di gioco.',
      },
      {
        number: '03',
        title: 'Entra in partita',
        text: 'Scegli una sfida e usa polsi, spalle e peso del corpo per giocare.',
      },
    ],
    privacyTitle: 'Privacy per impostazione predefinita',
    privacyText:
      'L’inferenza gira nel browser tramite il backend WebGL di TensorFlow.js. Il progetto non ha un backend che riceve o conserva il video della webcam.',
    techEyebrow: 'Sotto il cofano',
    techTitle: 'Tecnologia leggibile, non magia.',
    techText:
      'Il sito e i giochi condividono lo stesso stack: React e TypeScript, compilati da Vite, con TensorFlow.js per il riconoscimento della posa.',
    techCta: 'Tutte le tecnologie',
    quote:
      'La fisioterapia non deve per forza sembrare fisioterapia.',
    quoteLabel: 'La filosofia del progetto',
    closingEyebrow: 'Pronto a muoverti?',
    closingTitle: 'Il prossimo esercizio può essere una partita.',
    closingText:
      'Apri uno dei due giochi, concedi l’accesso alla webcam e scopri quanto può essere diverso un esercizio di mobilità.',
    closingCta: 'Apri Outlaw Run',
  },

  gamesPage: {
    outlaw: {
      eyebrow: 'Gioco 01 · Il Far West',
      title: 'Outlaw Run',
      tagline: 'Schiva, corri, resta in piedi.',
      description:
        'Un runner laterale ispirato al Far West. Il giocatore sposta il peso del corpo per cambiare corsia e schivare cactus, barili e cespugli che scorrono da destra a sinistra.',
      controlTitle: 'Come si gioca',
      controls: [
        'Sposta il peso del corpo a sinistra o a destra per cambiare corsia.',
        'Schiva cactus, barili e cespugli: la corsia attiva è evidenziata.',
        'Premi Spazio per iniziare o riprovare.',
        'Ogni ostacolo superato vale punti; la difficoltà cresce con il punteggio.',
      ],
      objectiveTitle: 'Obiettivo',
      objectiveText:
        'Resistere il più possibile, accumulare punti e non perdere le tre vite a disposizione.',
      facts: [
        { label: 'Corsie', value: '3' },
        { label: 'Vite', value: '3' },
        { label: 'Avvio', value: 'Spazio' },
        { label: 'Input', value: 'Webcam' },
      ],
      accent: 'west',
      character: 'Un cowboy pixelato, un deserto caldo e ostacoli che arrivano da destra.',
      nextLabel: 'Vuoi mirare invece di correre?',
      nextGame: 'Scopri Pigeon Blaster',
    },
    pigeon: {
      eyebrow: 'Gioco 02 · Il cielo',
      title: 'Pigeon Blaster',
      tagline: 'Alza le braccia, difendi il cielo.',
      description:
        'I polsi diventano un mirino. I piccioni compaiono in punti casuali dello schermo: colpiscili prima che scadano. Ogni piccione mancato costa una vita.',
      controlTitle: 'Come si gioca',
      controls: [
        'Tieni entrambi i polsi fermi nel riquadro centrale per 3 secondi per calibrare.',
        'Muovi un polso sul piccione per colpirlo.',
        'Evita le pigne: tolgono una vita.',
        'Cattura i piccioni dorati: valgono 5 punti e restituiscono una vita.',
        'Scegli tra Facile, Media e Difficile prima di iniziare.',
      ],
      objectiveTitle: 'Obiettivo',
      objectiveText:
        'Colpire più piccioni possibili entro il tempo della partita, gestendo vite e piccioni mancati.',
      facts: [
        { label: 'Difficoltà', value: '3 livelli' },
        { label: 'Durata', value: '60–180 s' },
        { label: 'Input', value: 'Webcam' },
        { label: 'Keypoint', value: 'Polsi' },
      ],
      accent: 'sky',
      character:
        'Un cielo azzurro, piccioni in pixel art e un pizzico di suspense dorata.',
      nextLabel: 'Vuoi tornare a correre?',
      nextGame: 'Scopri Outlaw Run',
    },
  },

  about: {
    eyebrow: 'Rehab Game Pigeon Runner',
    title: 'Un modo diverso di mettere in moto il corpo giocando.',
    intro:
      'Rehab Game Pigeon Runner è una web app pensata per contesti di fisioterapia e riabilitazione motoria. Il paziente usa una webcam: un modello di intelligenza artificiale rileva la postura in tempo reale e la traduce in input di gioco.',
    sections: [
      {
        title: 'Perché due giochi',
        text: 'I due minigiochi propongono gesti diversi e complementari. Outlaw Run lavora sullo spostamento del peso e sulla coordinazione per cambiare corsia; Pigeon Blaster coinvolge braccia e polsi per mirare e colpire. Insieme mostrano come lo stesso impianto tecnico possa sostenere esercizi differenti senza cambiare hardware.',
      },
      {
        title: 'Tutto nel browser',
        text: 'Il riconoscimento della posa avviene sul dispositivo tramite TensorFlow.js e il modello MoveNet. Non esiste un backend, un database o un servizio che riceva il video della webcam. Questo semplifica la distribuzione e riduce i dati che lasciano il computer.',
      },
      {
        title: 'Un progetto aperto',
        text: 'Il codice è distribuito con licenza GNU GPL v3.0. Il repository contiene due giochi, gli asset grafici e la documentazione tecnica; questa vetrina aggiunge una presentazione editoriale e una navigazione unica per entrambi.',
      },
    ],
    relationTitle: 'Due giochi, due gesti',
    relation: [
      {
        title: 'Outlaw Run',
        text: 'Spostamento del peso e coordinazione: il corpo sceglie la corsia, gli occhi leggono gli ostacoli.',
      },
      {
        title: 'Pigeon Blaster',
        text: 'Mobilità di braccia e polsi: il corpo diventa un mirino, il ritmo scandisce la partita.',
      },
    ],
    teamTitle: 'Team e contributi',
    teamText:
      'Potete trovare i collaboratori di questo progetto su GitHub con i seguenti nomi: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
    repoTitle: 'Repository',
    repoText:
      'Il progetto è open source. Il nome del repository è indicato qui sotto',
    url:
      'https://github.com/lucamarchetti-dev/Rehab-Game-Pigeon-Runner-',
    licenseTitle: 'Licenza',
    licenseText:
      'Il progetto è distribuito con GNU General Public License v3.0. Chi ridistribuisce una versione modificata deve renderla disponibile con la stessa licenza.',
    disclaimer:
      'Questa è una presentazione del progetto e della sua implementazione tecnica. Non contiene indicazioni cliniche e non sostituisce il parere di un professionista sanitario.',
  },

  technologies: {
    eyebrow: 'Tecnologie',
    title: 'Tutto ciò che serve, niente di più.',
    intro:
      'L’elenco è ricavato da package.json, package-lock.json e dal codice sorgente. Le versioni sono quelle installate nel repository.',
    categories: [
      {
        title: 'Linguaggi',
        items: [
          {
            name: 'TypeScript',
            version: '~6.0.2',
            role: 'Linguaggio principale per UI, hook e logica di gioco. I tipi mantengono leggibili le strutture di pose, ostacoli e stato della partita.',
            href: 'https://www.typescriptlang.org/',
          },
          {
            name: 'HTML5',
            version: '—',
            role: 'Struttura del documento e punto di montaggio dell’app React.',
            href: 'https://developer.mozilla.org/docs/Web/HTML',
          },
          {
            name: 'CSS3',
            version: '—',
            role: 'Layout responsive, temi chiaro/scuro e animazioni leggere, con custom properties e media query.',
            href: 'https://developer.mozilla.org/docs/Web/CSS',
          },
        ],
      },
      {
        title: 'Framework e librerie',
        items: [
          {
            name: 'React',
            version: '^19.2.6',
            role: 'Costruisce l’interfaccia e gestisce lo stato dei giochi e delle pagine del sito.',
            href: 'https://react.dev/',
            license: 'MIT',
          },
          {
            name: 'TensorFlow.js',
            version: '^4.22.0',
            role: 'Esegue l’inferenza del modello direttamente nel browser, con backend WebGL.',
            href: 'https://www.tensorflow.org/js',
            license: 'Apache-2.0',
          },
          {
            name: 'TensorFlow Pose Detection',
            version: '^2.1.3',
            role: 'API di pose detection; il progetto usa MoveNet SINGLEPOSE_LIGHTNING per rilevare 17 keypoint.',
            href: 'https://github.com/tensorflow/tfjs-models/tree/master/pose-detection',
            license: 'Apache-2.0',
          },
          {
            name: 'gifler',
            version: '^0.1.0',
            role: 'Estrae i fotogrammi delle GIF usate per i piccioni, così il canvas può disegnarli come frame indipendenti.',
            href: 'https://github.com/benjamminf/gifler',
            license: 'Apache-2.0',
          },
        ],
      },
      {
        title: 'API del browser',
        items: [
          {
            name: 'Canvas API',
            version: '—',
            role: 'Disegna video, keypoint, ostacoli, piccioni, HUD e schermate di fine partita a ogni frame.',
            href: 'https://developer.mozilla.org/docs/Web/API/Canvas_API',
          },
          {
            name: 'WebRTC / getUserMedia',
            version: '—',
            role: 'Chiede accesso alla webcam e fornisce il flusso video usato dalla pose detection.',
            href: 'https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia',
          },
          {
            name: 'WebGL',
            version: '—',
            role: 'Backend di TensorFlow.js usato per eseguire il modello con accelerazione hardware.',
            href: 'https://developer.mozilla.org/docs/Web/API/WebGL_API',
          },
          {
            name: 'requestAnimationFrame',
            version: '—',
            role: 'Sincronizza il game loop con la frequenza di aggiornamento del browser.',
            href: 'https://developer.mozilla.org/docs/Web/API/Window/requestAnimationFrame',
          },
        ],
      },
      {
        title: 'Build e ambiente di sviluppo',
        items: [
          {
            name: 'Vite',
            version: '^5.4.21',
            role: 'Dev server, bundling di produzione e gestione degli asset con base path configurabile.',
            href: 'https://vite.dev/',
            license: 'MIT',
          },
          {
            name: '@vitejs/plugin-react',
            version: '^4.7.0',
            role: 'Abilita Fast Refresh e la trasformazione JSX durante lo sviluppo.',
            href: 'https://github.com/vitejs/vite-plugin-react',
            license: 'MIT',
          },
          {
            name: 'Node.js',
            version: '18+',
            role: 'Ambiente richiesto per installare le dipendenze ed eseguire Vite.',
            href: 'https://nodejs.org/',
          },
          {
            name: 'npm',
            version: '—',
            role: 'Installa le dipendenze e fornisce gli script dev, build, preview e lint.',
            href: 'https://www.npmjs.com/',
          },
          {
            name: 'ESLint',
            version: '^10.3.0',
            role: 'Analisi statica del codice. La configurazione del sito è in eslint.config.js e viene eseguita con npm run lint.',
            href: 'https://eslint.org/',
            license: 'MIT',
          },
        ],
      },
      {
        title: 'Version control e hosting',
        items: [
          {
            name: 'Git',
            version: '—',
            role: 'Controllo di versione del codice sorgente.',
            href: 'https://git-scm.com/',
          },
          {
            name: 'GitHub',
            version: '—',
            role: 'Ospita il repository e il codice del progetto.',
            href: 'https://github.com/',
          },
          {
            name: 'GitHub Pages',
            version: '—',
            role: 'Hosting statico gratuito del sito compilato nella cartella dist/.',
            href: 'https://pages.github.com/',
          },
          {
            name: 'GitHub Actions',
            version: '—',
            role: 'Workflow incluso nel progetto per installare, compilare e pubblicare automaticamente il sito.',
            href: 'https://github.com/features/actions',
          },
        ],
      },
      {
        title: 'Risorse esterne',
        items: [
          {
            name: 'MoveNet (model weights)',
            version: 'singlepose/lightning/4',
            role: 'Il modello viene scaricato da TensorFlow Hub alla prima esecuzione; serve una connessione a internet.',
            href: 'https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4',
            license: 'Apache-2.0',
          },
          {
            name: 'Google Fonts',
            version: '—',
            role: 'Fornisce i font tipografici del sito e dei giochi tramite CDN.',
            href: 'https://fonts.google.com/',
          },
        ],
      },
    ],
    noteTitle: 'Nota sulle versioni',
    note:
      'Le versioni con il prefisso ^ o ~ riflettono i range dichiarati in package.json; l’installazione del repository ha risolto versioni leggermente più recenti. Per riprodurre esattamente la build usata qui, installa con npm ci.',
  },

  credits: {
    eyebrow: 'Crediti',
    title: 'Chi ha fatto cosa.',
    intro:
      'Potete trovare i collaboratori di questo progetto su GitHub con i seguenti nomi: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
    sections: [
      {
        title: 'Progetto',
        items: [
          {
            name: 'Rehab Game Pigeon Runner',
            detail:
              'Web app di riabilitazione con due minigiochi controllati dal corpo. Codice distribuito con GNU GPL v3.0.',
          },
          {
            name: 'Team e contributi',
            detail:
              'Potete trovare i collaboratori di questo progetto su GitHub con i seguenti nomi: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
          },
          {
            name: 'Repository',
            detail:
              'Rehab-Game-Pigeon-Runner.',
            url:
              'https://github.com/lucamarchetti-dev/Rehab-Game-Pigeon-Runner-',
          },
        ],
      },
      {
        title: 'Grafica e asset',
        items: [
          {
            name: 'Illustrazioni pixel art',
            detail:
              'Piccioni, cowboy, cactus, barili, cespugli, cieli e sfondi western inclusi nel repository. Gli autori non sono documentati nell’archivio.',
          },
          {
            name: 'Font PPNeueBit',
            detail:
              'PPNeueBit-Bold.otf è incluso nel repository e usato dai giochi. La licenza del font non è specificata nell’archivio: verificarla prima di ridistribuire il progetto.',
          },
          {
            name: 'Font del sito',
            detail:
              'Fraunces, Instrument Sans e Press Start 2P sono caricati da Google Fonts con licenza SIL Open Font License. I giochi usano anche Bungee.',
          },
        ],
      },
      {
        title: 'Librerie e strumenti',
        items: [
          { name: 'React · React DOM', detail: 'MIT License' },
          { name: 'Vite · @vitejs/plugin-react', detail: 'MIT License' },
          { name: 'TypeScript', detail: 'Apache License 2.0' },
          {
            name: 'TensorFlow.js · Pose Detection · gifler',
            detail: 'Apache License 2.0',
          },
          { name: 'ESLint', detail: 'MIT License' },
        ],
      },
      {
        title: 'Servizi esterni',
        items: [
          {
            name: 'TensorFlow Hub',
            detail:
              'Distribuisce i pesi del modello MoveNet usati dal riconoscimento della posa.',
            href: 'https://tfhub.dev/',
          },
          {
            name: 'Google Fonts',
            detail: 'Distribuisce i font tipografici usati dal sito e dai giochi.',
            href: 'https://fonts.google.com/',
          },
        ],
      },
    ],
    licenseTitle: 'Licenza del progetto',
    licenseText:
      'Il progetto è distribuito con GNU General Public License v3.0. Puoi usare, studiare, modificare e distribuire il software; le versioni modificate devono essere distribuite con la stessa licenza. Il software è fornito senza garanzie.',
    licenseCta: 'Leggi il testo della licenza',
  },

  notFound: {
    eyebrow: 'Errore 404',
    title: 'Ohoh! Questo piccione ha preso un ostacolo.',
    text: 'La pagina che cerchi non esiste o è stata spostata.',
    cta: 'Torna alla home',
  },
}

const en: typeof it = {
  metadata: {
    home: {
      title: 'Rehab Game Pigeon Runner',
      description:
        'Two rehabilitation mini-games controlled with your body. Posture is recognised in the browser with TensorFlow.js and MoveNet.',
    },
    game1: {
      title: 'Outlaw Run — Rehab Game Pigeon Runner',
      description:
        'A pixel-art western runner: shift your body weight to change lanes and dodge obstacles.',
    },
    game2: {
      title: 'Pigeon Blaster — Rehab Game Pigeon Runner',
      description:
        'Aim at pigeons with your wrists, dodge pinecones and catch golden pigeons in this rehabilitation mini-game.',
    },
    about: {
      title: 'About the project — Rehab Game Pigeon Runner',
      description:
        'How Rehab Game Pigeon Runner works: two mini-games, one webcam and posture recognition entirely in the browser.',
    },
    technologies: {
      title: 'Technologies — Rehab Game Pigeon Runner',
      description:
        'The technologies actually used by the project: React, TypeScript, Vite, TensorFlow.js, MoveNet, Canvas API and WebRTC.',
    },
    credits: {
      title: 'Credits — Rehab Game Pigeon Runner',
      description:
        'Contributors, libraries, fonts, assets and licences for the Rehab Game Pigeon Runner project.',
    },
    notFound: {
      title: 'Page not found — Rehab Game Pigeon Runner',
      description: 'The requested page does not exist.',
    },
  },

  nav: {
    home: 'Home',
    game1: 'Outlaw Run',
    game2: 'Pigeon Blaster',
    about: 'About',
    technologies: 'Technologies',
    credits: 'Credits',
    navigation: 'Main navigation',
    skip: 'Skip to content',
    menu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    languageSwitch: 'Switch to Italian',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
  },

  ui: {
    play: 'Play',
    playGame: 'Open the game',
    discover: 'About the project',
    seeGames: 'See the games',
    backHome: 'Back home',
    allGames: 'All games',
    otherGame: 'Try the other game',
    gameLabel: 'Game',
    controls: 'Controls',
    objective: 'Objective',
    facts: 'At a glance',
    cameraTitle: 'A webcam is required',
    cameraText:
      'Allow the browser to access your camera. The video is processed on your device and is never uploaded to a server.',
    browserNote:
      'A modern browser with WebGL and camera access is required to play.',
    externalLink: 'Opens in a new tab',
    onThisPage: 'On this page',
    previous: 'Previous',
    next: 'Next',
    comingSoon: 'Coming soon',
    gateTitle: 'Ready to move?',
    gateText:
      'The game will use your webcam to recognise body position. The video is processed only on your device.',
    gateCta: 'Enable the webcam and play',
    gateHint:
      'If the webcam does not start, check your browser camera permissions and reload the page.',
    playArea: 'Play area',
    loading: 'Loading the game…',
    reload: 'Reload',
  },

  footer: {
    tagline:
      'An open-source project that uses play to get the body moving again.',
    exploreTitle: 'Explore',
    projectTitle: 'Project',
    resourcesTitle: 'Resources',
    repository: 'Repository',
    license: 'Licence',
    licenseName: 'GPL-3.0',
    builtWith: 'Built with React, TypeScript and TensorFlow.js.',
    sourceNote: 'Source code released under the GPL-3.0 licence.',
    repoNameLabel: 'Repository name',
  },

  home: {
    eyebrow: 'A rehabilitation project, played',
    titleLead: 'Rehabilitation,',
    titleAccent: 'put back in play.',
    intro:
      'Rehab Game Pigeon Runner turns mobility exercises into two mini-games. All you need is a webcam: your body becomes the controller.',
    body:
      'No headsets and no wearables. Posture recognition happens entirely in the browser with TensorFlow.js and MoveNet, and your movements become game input in real time.',
    ctaGames: 'Choose a challenge',
    ctaAbout: 'How it works',
    stats: [
      { value: '2', label: 'mini-games' },
      { value: '17', label: 'body keypoints detected' },
      { value: '100%', label: 'in the browser' },
    ],
    stamp: 'webcam · no sensors',
    gamesEyebrow: 'The two challenges',
    gamesTitle: 'Choose how you move.',
    gamesIntro:
      'One webcam, two ways to play. Each game trains different gestures and keeps its own visual character.',
    cards: {
      outlaw: {
        number: '01',
        setting: 'The Wild West',
        tag: 'Dodge & run',
        title: 'Outlaw Run',
        description:
          'A pixel-art runner among cacti and barrels. Shift your body weight to change lanes and survive for as long as you can.',
        cta: 'Enter the Wild West',
        meta: '3 lanes · 3 lives',
        accent: 'west',
      },
      pigeon: {
        number: '02',
        setting: 'The sky',
        tag: 'Aim & hit',
        title: 'Pigeon Blaster',
        description:
          'A sky invaded by pigeons. Use your wrists as a sight, dodge pinecones and catch the golden pigeons.',
        cta: 'Raise your arms',
        meta: '3 difficulties · calibration',
        accent: 'sky',
      },
    },
    howEyebrow: 'How to play',
    howTitle: 'Three steps, zero sensors.',
    howText:
      'Your computer camera is the only hardware you need. The pose-detection model does the rest.',
    steps: [
      {
        number: '01',
        title: 'Open the webcam',
        text: 'Allow the browser permission. The video stays on your device.',
      },
      {
        number: '02',
        title: 'Your body becomes input',
        text: 'MoveNet detects 17 body keypoints and turns them into game movements.',
      },
      {
        number: '03',
        title: 'Start playing',
        text: 'Pick a challenge and use your wrists, shoulders and body weight to play.',
      },
    ],
    privacyTitle: 'Private by default',
    privacyText:
      'Inference runs in the browser through TensorFlow.js and its WebGL backend. The project has no backend that receives or stores your webcam video.',
    techEyebrow: 'Under the hood',
    techTitle: 'Readable technology, not magic.',
    techText:
      'The website and the games share the same stack: React and TypeScript, built with Vite, with TensorFlow.js for pose recognition.',
    techCta: 'All technologies',
    quote: 'Physiotherapy does not have to feel like physiotherapy.',
    quoteLabel: 'The project’s philosophy',
    closingEyebrow: 'Ready to move?',
    closingTitle: 'The next exercise can be a game.',
    closingText:
      'Open one of the two games, allow camera access and find out how different a mobility exercise can feel.',
    closingCta: 'Open Outlaw Run',
  },

  gamesPage: {
    outlaw: {
      eyebrow: 'Game 01 · The Wild West',
      title: 'Outlaw Run',
      tagline: 'Dodge, run, stay on your feet.',
      description:
        'A side-scrolling runner inspired by the Wild West. The player shifts body weight to change lanes and dodge cacti, barrels and bushes scrolling in from the right.',
      controlTitle: 'How to play',
      controls: [
        'Shift your body weight left or right to change lane.',
        'Dodge cacti, barrels and bushes: the active lane is highlighted.',
        'Press Space to start or retry.',
        'Every obstacle you pass scores points; difficulty grows with your score.',
      ],
      objectiveTitle: 'Objective',
      objectiveText:
        'Survive for as long as possible, collect points and keep your three lives.',
      facts: [
        { label: 'Lanes', value: '3' },
        { label: 'Lives', value: '3' },
        { label: 'Start', value: 'Space' },
        { label: 'Input', value: 'Webcam' },
      ],
      accent: 'west',
      character:
        'A pixel-art cowboy, a warm desert and obstacles arriving from the right.',
      nextLabel: 'Would you rather aim than run?',
      nextGame: 'Discover Pigeon Blaster',
    },
    pigeon: {
      eyebrow: 'Game 02 · The sky',
      title: 'Pigeon Blaster',
      tagline: 'Raise your arms, defend the sky.',
      description:
        'Your wrists become a sight. Pigeons appear at random points on screen: hit them before they expire. Every missed pigeon costs a life.',
      controlTitle: 'How to play',
      controls: [
        'Hold both wrists still inside the central box for 3 seconds to calibrate.',
        'Move a wrist over a pigeon to hit it.',
        'Avoid pinecones: they cost a life.',
        'Catch golden pigeons: they are worth 5 points and restore one life.',
        'Choose Easy, Medium or Hard before starting.',
      ],
      objectiveTitle: 'Objective',
      objectiveText:
        'Hit as many pigeons as possible within the match time while managing lives and missed pigeons.',
      facts: [
        { label: 'Difficulty', value: '3 levels' },
        { label: 'Duration', value: '60–180 s' },
        { label: 'Input', value: 'Webcam' },
        { label: 'Keypoints', value: 'Wrists' },
      ],
      accent: 'sky',
      character:
        'A blue sky, pixel-art pigeons and a little golden suspense.',
      nextLabel: 'Want to run again?',
      nextGame: 'Discover Outlaw Run',
    },
  },

  about: {
    eyebrow: 'About the project',
    title: 'A different way to put the body into play.',
    intro:
      'Rehab Game Pigeon Runner is a web app designed for physiotherapy and motor rehabilitation contexts. The patient uses a webcam: an AI model detects posture in real time and translates it into game input.',
    sections: [
      {
        title: 'Why two games',
        text: 'The two mini-games propose different, complementary gestures. Outlaw Run works on weight shifting and coordination to change lanes; Pigeon Blaster involves arms and wrists to aim and hit. Together they show how the same technical foundation can support different exercises without changing hardware.',
      },
      {
        title: 'Everything in the browser',
        text: 'Pose recognition runs on the device through TensorFlow.js and the MoveNet model. There is no backend, database or service receiving the webcam video. This simplifies deployment and reduces the data leaving the computer.',
      },
      {
        title: 'An open project',
        text: 'The code is released under the GNU GPL v3.0 licence. The repository contains two games, the graphic assets and technical documentation; this website adds an editorial presentation and a single navigation for both.',
      },
    ],
    relationTitle: 'Two games, two gestures',
    relation: [
      {
        title: 'Outlaw Run',
        text: 'Weight shifting and coordination: the body chooses the lane, the eyes read the obstacles.',
      },
      {
        title: 'Pigeon Blaster',
        text: 'Arm and wrist mobility: the body becomes a sight, the rhythm sets the pace.',
      },
    ],
    teamTitle: 'Team and contributions',
    teamText:
      'You can find the contributors of this project on GitHub by the names: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
    repoTitle: 'Repository',
    repoText:
      'The project is open source. The repository name is shown below; add the repository URL when it is available.',
    url:
      'https://github.com/lucamarchetti-dev/Rehab-Game-Pigeon-Runner-',
    licenseTitle: 'Licence',
    licenseText:
      'The project is released under the GNU General Public License v3.0. Anyone distributing a modified version must make it available under the same licence.',
    disclaimer:
      'This is a presentation of the project and its technical implementation. It contains no clinical guidance and does not replace advice from a healthcare professional.',
  },

  technologies: {
    eyebrow: 'Technologies',
    title: 'Everything you need, nothing more.',
    intro:
      'This list is derived from package.json, package-lock.json and the source code. Versions are those installed in the repository.',
    categories: [
      {
        title: 'Languages',
        items: [
          {
            name: 'TypeScript',
            version: '~6.0.2',
            role: 'Main language for the UI, hooks and game logic. Types keep pose, obstacle and match-state structures readable.',
            href: 'https://www.typescriptlang.org/',
          },
          {
            name: 'HTML5',
            version: '—',
            role: 'Document structure and the mount point for the React app.',
            href: 'https://developer.mozilla.org/docs/Web/HTML',
          },
          {
            name: 'CSS3',
            version: '—',
            role: 'Responsive layout, light/dark themes and light animations using custom properties and media queries.',
            href: 'https://developer.mozilla.org/docs/Web/CSS',
          },
        ],
      },
      {
        title: 'Frameworks and libraries',
        items: [
          {
            name: 'React',
            version: '^19.2.6',
            role: 'Builds the interface and manages the state of the games and website pages.',
            href: 'https://react.dev/',
            license: 'MIT',
          },
          {
            name: 'TensorFlow.js',
            version: '^4.22.0',
            role: 'Runs model inference directly in the browser with the WebGL backend.',
            href: 'https://www.tensorflow.org/js',
            license: 'Apache-2.0',
          },
          {
            name: 'TensorFlow Pose Detection',
            version: '^2.1.3',
            role: 'Pose-detection API; the project uses MoveNet SINGLEPOSE_LIGHTNING to detect 17 keypoints.',
            href: 'https://github.com/tensorflow/tfjs-models/tree/master/pose-detection',
            license: 'Apache-2.0',
          },
          {
            name: 'gifler',
            version: '^0.1.0',
            role: 'Extracts frames from the GIFs used for pigeons so the canvas can draw them as independent frames.',
            href: 'https://github.com/benjamminf/gifler',
            license: 'Apache-2.0',
          },
        ],
      },
      {
        title: 'Browser APIs',
        items: [
          {
            name: 'Canvas API',
            version: '—',
            role: 'Draws video, keypoints, obstacles, pigeons, HUD and end screens every frame.',
            href: 'https://developer.mozilla.org/docs/Web/API/Canvas_API',
          },
          {
            name: 'WebRTC / getUserMedia',
            version: '—',
            role: 'Requests webcam access and provides the video stream used by pose detection.',
            href: 'https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia',
          },
          {
            name: 'WebGL',
            version: '—',
            role: 'TensorFlow.js backend used to run the model with hardware acceleration.',
            href: 'https://developer.mozilla.org/docs/Web/API/WebGL_API',
          },
          {
            name: 'requestAnimationFrame',
            version: '—',
            role: 'Synchronises the game loop with the browser refresh rate.',
            href: 'https://developer.mozilla.org/docs/Web/API/Window/requestAnimationFrame',
          },
        ],
      },
      {
        title: 'Build and development environment',
        items: [
          {
            name: 'Vite',
            version: '^5.4.21',
            role: 'Dev server, production bundling and asset handling with a configurable base path.',
            href: 'https://vite.dev/',
            license: 'MIT',
          },
          {
            name: '@vitejs/plugin-react',
            version: '^4.7.0',
            role: 'Enables Fast Refresh and JSX transformation during development.',
            href: 'https://github.com/vitejs/vite-plugin-react',
            license: 'MIT',
          },
          {
            name: 'Node.js',
            version: '18+',
            role: 'Environment required to install dependencies and run Vite.',
            href: 'https://nodejs.org/',
          },
          {
            name: 'npm',
            version: '—',
            role: 'Installs dependencies and provides the dev, build, preview and lint scripts.',
            href: 'https://www.npmjs.com/',
          },
          {
            name: 'ESLint',
            version: '^10.3.0',
            role: 'Static analysis for the code. The website configuration lives in eslint.config.js and runs with npm run lint.',
            href: 'https://eslint.org/',
            license: 'MIT',
          },
        ],
      },
      {
        title: 'Version control and hosting',
        items: [
          {
            name: 'Git',
            version: '—',
            role: 'Version control for the source code.',
            href: 'https://git-scm.com/',
          },
          {
            name: 'GitHub',
            version: '—',
            role: 'Hosts the repository and project code.',
            href: 'https://github.com/',
          },
          {
            name: 'GitHub Pages',
            version: '—',
            role: 'Free static hosting for the compiled site in dist/.',
            href: 'https://pages.github.com/',
          },
          {
            name: 'GitHub Actions',
            version: '—',
            role: 'Workflow included in the project to install, build and deploy the website automatically.',
            href: 'https://github.com/features/actions',
          },
        ],
      },
      {
        title: 'External resources',
        items: [
          {
            name: 'MoveNet (model weights)',
            version: 'singlepose/lightning/4',
            role: 'The model is downloaded from TensorFlow Hub on first run; an internet connection is required.',
            href: 'https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4',
            license: 'Apache-2.0',
          },
          {
            name: 'Google Fonts',
            version: '—',
            role: 'Provides the website and game typefaces through a CDN.',
            href: 'https://fonts.google.com/',
          },
        ],
      },
    ],
    noteTitle: 'A note on versions',
    note:
      'Versions prefixed with ^ or ~ reflect the ranges declared in package.json; installing the repository resolved slightly newer versions. To reproduce exactly the build used here, install with npm ci.',
  },

  credits: {
    eyebrow: 'Credits',
    title: 'Who made what.',
    intro:
      'You can find the contributors of this project on GitHub by the names: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
    sections: [
      {
        title: 'Project',
        items: [
          {
            name: 'Rehab Game Pigeon Runner',
            detail:
              'A rehabilitation web app with two body-controlled mini-games. Code released under GNU GPL v3.0.',
          },
          {
            name: 'Team and contributions',
            detail:
              'You can find the contributors of this project on GitHub by the names: @lucamarchetti-dev ; @Teoldino ; @verdoora ; @Valentina16-hb',
          },
          {
            name: 'Repository',
            detail:
              'Rehab-Game-Pigeon-Runner.',
            url:
             'https://github.com/lucamarchetti-dev/Rehab-Game-Pigeon-Runner-',
          },
        ],
      },
      {
        title: 'Graphics and assets',
        items: [
          {
            name: 'Pixel-art illustrations',
            detail:
              'Pigeons, cowboy, cacti, barrels, bushes, skies and western backdrops included in the repository. Their authors are not documented in the archive.',
          },
          {
            name: 'PPNeueBit font',
            detail:
              'PPNeueBit-Bold.otf is included in the repository and used by the games. The font licence is not specified in the archive: verify it before redistributing the project.',
          },
          {
            name: 'Website fonts',
            detail:
              'Fraunces, Instrument Sans and Press Start 2P are loaded from Google Fonts under the SIL Open Font License. The games also use Bungee.',
          },
        ],
      },
      {
        title: 'Libraries and tools',
        items: [
          { name: 'React · React DOM', detail: 'MIT License' },
          { name: 'Vite · @vitejs/plugin-react', detail: 'MIT License' },
          { name: 'TypeScript', detail: 'Apache License 2.0' },
          {
            name: 'TensorFlow.js · Pose Detection · gifler',
            detail: 'Apache License 2.0',
          },
          { name: 'ESLint', detail: 'MIT License' },
        ],
      },
      {
        title: 'External services',
        items: [
          {
            name: 'TensorFlow Hub',
            detail:
              'Distributes the MoveNet model weights used by pose recognition.',
            href: 'https://tfhub.dev/',
          },
          {
            name: 'Google Fonts',
            detail: 'Distributes the typefaces used by the website and games.',
            href: 'https://fonts.google.com/',
          },
        ],
      },
    ],
    licenseTitle: 'Project licence',
    licenseText:
      'The project is released under the GNU General Public License v3.0. You may use, study, modify and distribute the software; modified versions must be distributed under the same licence. The software comes with no warranty.',
    licenseCta: 'Read the licence text',
  },

  notFound: {
    eyebrow: '404 error',
    title: 'This pigeon landed in the wrong nest.',
    text: 'The page you are looking for does not exist or has moved.',
    cta: 'Back to home',
  },
}

export const content = { it, en }
export type Content = typeof it

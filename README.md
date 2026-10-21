# Circolo dei Piccioni — Rehab Games

Piattaforma web per la riabilitazione fisica che trasforma gli esercizi terapeutici in due minigiochi divertenti e interattivi. Il riconoscimento della posa corporea avviene interamente nel browser, senza backend, tramite TensorFlow.js e il modello MoveNet.

Il repository contiene i due giochi originali e il sito editoriale che li presenta, li documenta e li rende accessibili da un'unica navigazione.

---

## Indice

- [Il sito](#il-sito)
- [Rotte](#rotte)
- [Lingua, tema e accessibilità](#lingua-tema-e-accessibilità)
- [Stack tecnologico](#stack-tecnologico)
- [Struttura del codice](#struttura-del-codice)
- [Pigeon Blaster](#pigeon-blaster)
- [Outlaw Run](#outlaw-run)
- [Installazione e sviluppo](#installazione-e-sviluppo)
- [Build, type-check e lint](#build-type-check-e-lint)
- [Deploy su GitHub Pages](#deploy-su-github-pages)
- [Personalizzare il progetto](#personalizzare-il-progetto)
- [Note tecniche](#note-tecniche)
- [Crediti e licenza](#crediti-e-licenza)

---

## Il sito

Il sito è costruito sopra il progetto Vite + React esistente, senza introdurre un nuovo framework né dipendenze di routing. Include:

- una homepage editoriale con introduzione, due card dei giochi e panoramica tecnica;
- una pagina dedicata per ciascun gioco, con il gioco originale integrato e una descrizione dei comandi;
- pagine About, Technologies e Credits;
- navigazione condivisa, footer e menu mobile accessibile;
- selettore di lingua italiano/inglese per tutti i contenuti informativi;
- tema chiaro/scuro con preferenza salvata e rispetto del tema di sistema;
- URL puliti con supporto a refresh e accesso diretto anche su GitHub Pages.

I giochi non sono stati riscritti: logica, controlli, rendering e asset sono quelli originali. Il sito aggiunge solo il contenitore, la navigazione e gli stili condivisi.

### Integrazione dei giochi

Le pagine Gioco mostrano prima un riepilogo e un pulsante per attivare la webcam. Solo dopo il click il componente del gioco viene montato (tramite `React.lazy`), così la richiesta di accesso alla fotocamera non parte automaticamente all'apertura della pagina.

Il CSS dei giochi è rimasto separato. Le regole in `src/site/styles/game-embed.css` adattano i giochi al layout del sito e nascondono solo le intestazioni e i footer duplicati; le meccaniche non sono state modificate.

## Rotte

| Percorso | Contenuto |
| --- | --- |
| `/` | Home |
| `/games/game1` | Outlaw Run |
| `/games/game2` | Pigeon Blaster |
| `/about` | Il progetto |
| `/technologies` | Tecnologie |
| `/credits` | Crediti |

Il routing è implementato con un piccolo router basato su History API (`src/site/router.tsx`), senza dipendenze aggiuntive. Per GitHub Pages il build genera anche un `dist/404.html` che conserva l'URL richiesto e lo ripristina dopo il redirect alla shell dell'app: in questo modo refresh e link diretti funzionano anche con hosting statico.

## Lingua, tema e accessibilità

- **Lingua**: italiano (predefinito) e inglese. La scelta è salvata in `localStorage` e applicata a `<html lang>`, titoli, descrizioni e testi informativi. I contenuti interni ai giochi restano in italiano, come richiesto.
- **Tema**: chiaro e scuro, con palette crema/terracotta nel chiaro e marrone profondo nel scuro. La preferenza è salvata; se non esiste, viene usato il tema del sistema.
- **Accessibilità**: skip link, focus visibile, navigazione mobile con `aria-expanded`, stato corrente con `aria-current`, testi alternativi, contrasto verificato e rispetto di `prefers-reduced-motion`.
- **SEO**: titolo e meta description aggiornati per ogni pagina e lingua, Open Graph, HTML semantico e gerarchia dei titoli corretta.

## Stack tecnologico

| Tecnologia | Ruolo |
| --- | --- |
| **React 19 + TypeScript** | UI, pagine del sito, hook e logica dei giochi |
| **Vite 5** | Dev server, build di produzione e gestione degli asset |
| **TensorFlow.js** (backend WebGL) | Inferenza del modello pose sul client |
| **@tensorflow-models/pose-detection** | API MoveNet per il rilevamento di 17 keypoint |
| **Canvas API** | Rendering in tempo reale di video, keypoint e oggetti di gioco |
| **WebRTC `getUserMedia`** | Accesso alla webcam con selezione del device |
| **gifler** | Estrazione dei frame delle GIF dei piccioni |
| **GitHub Actions + Pages** | Build e pubblicazione statica gratuita |

Le versioni esatte sono in `package.json` e `package-lock.json`. La pagina `/technologies` riporta il ruolo e i link di documentazione di ogni tecnologia realmente usata.

## Struttura del codice

```text
src/
├── App.tsx                      # Router, metadati delle pagine
├── main.tsx                     # Bootstrap React
├── pose-utils.ts                # Utility canvas/keypoint
│
├── site/                        # Sito editoriale
│   ├── router.tsx               # Router History API + Link
│   ├── i18n.tsx                 # Provider lingua IT/EN
│   ├── theme.tsx                # Provider tema chiaro/scuro
│   ├── content.ts               # Tutti i testi IT/EN
│   ├── config.ts                # Repository, team, licenza
│   ├── assets.ts                # URL asset compatibili con il base path
│   ├── components/              # Header, footer, layout, icone
│   ├── pages/                   # Home, giochi, About, Tech, Credits, 404
│   └── styles/                  # Design system, pagine, embed dei giochi
│
├── components/
│   ├── PigeonBlaster.tsx        # Gioco 2 — camera + AI + canvas
│   ├── PigeonBlaster.css
│   ├── OutlawRun.tsx            # Gioco 1 — orchestrazione loop e stato
│   ├── OutlawRun.css
│   └── GameCanvas.tsx           # Renderer canvas per OutlawRun
│
├── hooks/
│   ├── usePoseDetector.ts       # Webcam + pose detection (OutlawRun)
│   ├── useGameLoop.ts           # requestAnimationFrame con deltaTime
│   └── useGameState.ts          # Stato partita con reducer
│
├── game/
│   ├── lane-detector.ts         # Corsia dal centro spalle/fianchi
│   ├── obstacle-spawner.ts      # Spawn e difficoltà progressiva
│   └── collision.ts             # Collisioni ostacoli/corsia
│
├── mocks/
│   └── mediapipe-pose.js        # Stub per il bundle di pose-detection
│
└── assets/                      # Font, immagini, sfondi dei giochi
```

---

## Pigeon Blaster

### Concept

Il giocatore usa i **polsi** come puntatori. Piccioni compaiono casualmente sulla canvas; il giocatore deve colpirli, muovendo le braccia, prima che scadano. Ogni piccione mancato costa una vita.

### Come funziona

1. **Inizializzazione** — TensorFlow.js carica il backend WebGL e inizializza MoveNet (`SINGLEPOSE_LIGHTNING`). Viene enumerata la lista delle webcam disponibili.
2. **Calibrazione** — Il giocatore deve tenere entrambi i polsi fermi all'interno di un riquadro centrale per 3 secondi.
3. **Game loop** — `requestAnimationFrame` esegue il loop: disegna il frame webcam, stima la posa, aggiorna l'età dei piccioni, verifica i colpi e aggiorna punteggio, vite e timer.
4. **Difficoltà** — Tre preset (`Facile / Media / Difficile`) controllano durata partita, tempo vita piccione, numero massimo contemporaneo e vite iniziali.
5. **Game over / Vittoria** — La partita finisce per azzeramento vite o scadenza del timer. Il record viene mantenuto in memoria per la sessione.

### Struttura interna

Tutto il codice risiede in `PigeonBlaster.tsx`. Lo stato React gestisce la UI; i `useRef` portano i valori nel loop di animazione senza causare re-render. La canvas è internamente 640×480 e viene specchiata via CSS per l'effetto webcam.

---

## Outlaw Run

### Concept

Un runner laterale ispirato al Far West. Il giocatore **sposta il peso del corpo** per cambiare corsia e schivare ostacoli (cactus, barili, cespugli) che scorrono da destra a sinistra.

### Come funziona

1. **usePoseDetector** — inizializza webcam e modello ed espone `detectPose()`.
2. **useGameLoop** — esegue la callback di gioco a ogni frame con `deltaMs`.
3. **useGameState** — gestisce le transizioni `idle → playing → gameover`.
4. **detectLane** — calcola la corsia dalla posizione orizzontale del centro spalle/fianchi.
5. **updateObstacles** — genera ostacoli con difficoltà progressiva e li muove verso il basso.
6. **checkCollisions** — confronta la corsia degli ostacoli con quella del giocatore.
7. **GameCanvas** — renderer puro che disegna sfondo, video, corsie, ostacoli e HUD.

Il tasto **Spazio** avvia o riavvia la partita.

---

## Installazione e sviluppo

**Requisiti**: Node.js 18+, browser moderno con supporto WebGL e webcam.

```bash
npm install
npm run dev
```

Aprire `http://localhost:5173`. Concedere il permesso alla webcam dopo aver premuto il pulsante nella pagina del gioco.

## Build, type-check e lint

```bash
npm run typecheck   # tsc -b
npm run build       # type-check + build in dist/
npm run preview     # anteprima della build di produzione
npm run lint        # ESLint (config in eslint.config.js)
```

La build verifica TypeScript e produce:

```text
dist/
├── index.html
├── 404.html          # fallback SPA per GitHub Pages
├── assets/
├── images/
├── obstacles/
└── ...
```

## Deploy su GitHub Pages

Il workflow `.github/workflows/deploy.yml` esegue `npm ci`, `npm run build`, carica `dist/` e pubblica su GitHub Pages a ogni push sul branch `main`.

### Base path automatico

`vite.config.ts` calcola il `base` in questo modo:

- su GitHub Actions usa `GITHUB_REPOSITORY` e imposta `/<nome-repository>/`;
- per un repository `USERNAME.github.io` usa `/`;
- in locale usa `/`;
- `VITE_BASE` può forzare un valore diverso.

Quindi il sito funziona sia su `https://USERNAME.github.io/REPOSITORY/` sia su un dominio personalizzato, senza modifiche manuali al codice.

Per provare una build sotto un sottopercorso:

```bash
VITE_BASE=/Rehab-Game-Pigeon-Runner/ npm run build
VITE_BASE=/Rehab-Game-Pigeon-Runner/ npm run preview
```

### Attivazione

1. Creare il repository e impostare `main` come branch predefinito.
2. In **Settings → Pages → Build and deployment**, scegliere **GitHub Actions**.
3. Eseguire il push: il workflow pubblica il sito.
4. Il primo deploy può richiedere l'approvazione dell'environment `github-pages`.

### URL diretti e refresh

Su hosting statico una richiesta diretta a `/games/game1` restituisce `404.html`. Il file generato salva il percorso in `sessionStorage`, reindirizza alla base del sito e la shell dell'app ripristina l'URL prima del rendering. Il risultato è un URL pulito che sopravvive a refresh e link condivisi.

## Personalizzare il progetto

- **Repository e team**: modificare `src/site/config.ts`. Il nome del repository è già impostato; l'URL e i nomi del team non erano documentati nell'archivio e restano placeholder espliciti finché non vengono compilati.
- **Testi**: tutte le stringhe informative IT/EN sono in `src/site/content.ts`.
- **Palette e tipografia**: i token sono in `src/site/styles/base.css`.
- **Asset dei giochi**: gli asset pubblici sono referenziati tramite `src/site/assets.ts`, che applica `BASE_URL`; non usare percorsi assoluti tipo `/player.png` per nuovi asset destinati a GitHub Pages.
- **Base path**: usare la variabile `VITE_BASE` solo se serve un valore diverso da quello automatico.

## Note tecniche

### Keypoint e specchiamento canvas

La canvas di Pigeon Blaster è specchiata via CSS (`transform: scaleX(-1)`) per l'effetto "specchio" della webcam. Le coordinate dei keypoint sono nello spazio del video originale, quindi le funzioni di rendering applicano una trasformazione inversa prima di disegnare testi e immagini non simmetriche.

### Mock MediaPipe

Per evitare l'errore di build Vite:

```text
"Pose" is not exported by "@mediapipe/pose"
```

`src/mocks/mediapipe-pose.js` fornisce un modulo stub, aliasato in `vite.config.ts`. Il progetto usa esclusivamente il runtime TensorFlow.js (WebGL), senza dipendere direttamente da MediaPipe.

### Performance

MoveNet `SINGLEPOSE_LIGHTNING` è ottimizzato per bassa latenza. In Pigeon Blaster il rilevamento è limitato a circa 30 fps (`now - lastPoseRef.current > 33ms`) per non saturare la GPU. I giochi sono caricati con `React.lazy`, quindi TensorFlow.js viene scaricato solo quando si apre una pagina di gioco.

### Modello MoveNet

I pesi del modello vengono scaricati da TensorFlow Hub alla prima esecuzione: è necessaria una connessione a internet. L'inferenza successiva avviene sul dispositivo.

## Crediti e licenza

I crediti completi sono nella pagina `/credits`. Le informazioni non presenti nell'archivio originale (nomi del team, URL del repository, licenza del font PPNeueBit) sono indicate esplicitamente come placeholder e non sono state inventate.

Questo progetto è distribuito sotto la licenza **GNU General Public License v3.0 (GPL-3.0)**. Il testo completo è nel file `LICENSE`.

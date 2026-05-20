"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type Day = {
  day: string;
  time: string;
  title: string;
  note: string;
  load: "high" | "medium" | "calm";
};

type Homework = {
  course: string;
  title: string;
  deadline: string;
  status: string;
  progress: number;
  span?: "wide";
};

type Platform = {
  name: string;
  purpose: string;
  usage: string;
};

type CommuteStep = {
  time: string;
  title: string;
  desc: string;
};

type Hobby = {
  title: string;
  desc: string;
  tag: string;
  big?: boolean;
};

const navItems: NavItem[] = [
  { id: "sakums", label: "Sākums" },
  { id: "lekcijas", label: "Lekcijas" },
  { id: "majasdarbi", label: "Mājasdarbi" },
  { id: "platformas", label: "Platformas" },
  { id: "cels", label: "Ceļš" },
  { id: "brivais-laiks", label: "Brīvais laiks" },
];

const week: Day[] = [
  {
    day: "Pirmdiena",
    time: "08:30 - 14:00",
    title: "Programmēšana klātienē",
    note: "Nedēļas plāna pārbaude, lekcija auditorijā un kodēšanas uzdevumi.",
    load: "high",
  },
  {
    day: "Otrdiena",
    time: "10:15 - 15:40",
    title: "Datubāzes un vaicājumi",
    note: "SQL piemēri, praktiskais darbs un īsa konsultācija Teams vidē.",
    load: "medium",
  },
  {
    day: "Trešdiena",
    time: "09:00 - 16:00",
    title: "Algoritmi",
    note: "Grūtākā diena, jo daudz jādomā par uzdevumu loģiku un kļūdām.",
    load: "high",
  },
  {
    day: "Ceturtdiena",
    time: "12:30 - 17:10",
    title: "Web tehnoloģijas",
    note: "HTML, CSS, JavaScript un lapas pielāgošana dažādiem ekrāniem.",
    load: "medium",
  },
  {
    day: "Piektdiena",
    time: "11:00 - 13:20",
    title: "Projekta labojumi",
    note: "Mierīgāka diena: pārbaudu iesniegumus un sakārtoju nākamās nedēļas darbus.",
    load: "calm",
  },
];

const homework: Homework[] = [
  {
    course: "Programmēšana",
    title: "Funkciju tests un kļūdu labošana",
    deadline: "Otrdiena, 23:59",
    status: "Procesā",
    progress: 68,
    span: "wide",
  },
  {
    course: "Datubāzes",
    title: "SQL vaicājumu kopa",
    deadline: "Trešdiena, 20:00",
    status: "Pabeigts",
    progress: 100,
  },
  {
    course: "Web tehnoloģijas",
    title: "Responsīva vienas lapas mājaslapa",
    deadline: "Piektdiena, 23:59",
    status: "Jāpārbauda",
    progress: 84,
  },
  {
    course: "Algoritmi",
    title: "Rekursijas uzdevumi",
    deadline: "Svētdiena, 18:00",
    status: "Procesā",
    progress: 46,
  },
  {
    course: "Grupas projekts",
    title: "Sadalīt uzdevumus un apvienot kodu",
    deadline: "Nākamā pirmdiena",
    status: "Plānots",
    progress: 25,
  },
];

const platforms: Platform[] = [
  {
    name: "LU e-studijas",
    purpose: "Lekciju materiāli, mājasdarbu apraksti, termiņi un vērtējumi.",
    usage: "Katru dienu",
  },
  {
    name: "Microsoft Teams",
    purpose: "Saziņa ar pasniedzējiem, grupas darbs un tiešsaistes nodarbības.",
    usage: "Bieži",
  },
  {
    name: "Zoom",
    purpose: "Lekcijas un konsultācijas, kad nodarbība notiek attālināti.",
    usage: "Dažas reizes nedēļā",
  },
  {
    name: "GitHub",
    purpose: "Koda glabāšana, projekta versijas un komandas darba pārskatīšana.",
    usage: "Projektu laikā",
  },
];

const commute: CommuteStep[] = [
  {
    time: "06:45",
    title: "Rīta pārbaude",
    desc: "Paskatos grafiku, ielieku somā datoru, lādētāju un pierakstus.",
  },
  {
    time: "07:30",
    title: "Ceļš līdz transportam",
    desc: "Īsa pastaiga un ziņu pārskatīšana Teams, kamēr vēl mēģinu pamosties.",
  },
  {
    time: "08:10",
    title: "Brauciens uz universitāti",
    desc: "Transportā klausos mūziku vai pārlasu mājasdarba noteikumus.",
  },
  {
    time: "08:55",
    title: "Ierašanās fakultātē",
    desc: "Satieku kursabiedrus un pirms lekcijas salīdzinu, kas kuram sanācis.",
  },
];

const hobbies: Hobby[] = [
  {
    title: "Sports un pastaigas",
    desc: "Pēc vairākām stundām pie datora palīdz kustība: sporta zāle, pastaiga vai vienkārši svaigs gaiss.",
    tag: "3x nedēļā",
    big: true,
  },
  {
    title: "Spēles",
    desc: "Vakaros ar draugiem uzspēlēju kooperatīvas spēles, lai pārslēgtos no mācībām.",
    tag: "Vakaros",
  },
  {
    title: "Filmas",
    desc: "Kad nav steidzamu termiņu, paskatos filmu vai seriālu un atlieku datoru malā.",
    tag: "Brīvdienās",
  },
  {
    title: "Draugi",
    desc: "Sarunas ar kursabiedriem bieži palīdz saprast uzdevumu labāk nekā vēl viena dokumentācijas lapa.",
    tag: "Pēc lekcijām",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="app-shell">
      <header className="site-header">
        <a className="brand" href="#sakums" aria-label="Uz sākumu">
          <span className="brand-mark">LU</span>
          <span>
            Datorikas nedēļa
            <small>studenta dienasgrāmata</small>
          </span>
        </a>

        <nav className="nav" aria-label="Galvenā navigācija">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          aria-label={dark ? "Ieslēgt gaišo režīmu" : "Ieslēgt tumšo režīmu"}
          onClick={() => setDark((value) => !value)}
        >
          <span aria-hidden="true">{dark ? "☀" : "●"}</span>
          <span>{dark ? "Gaišais" : "Tumšais"}</span>
        </button>
      </header>

      <section className="hero section-pad" id="sakums">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="overline">Latvijas Universitāte / Datorikas fakultāte</p>
            <h1>Viena darba nedēļa datorikas studenta dzīvē</h1>
            <p className="lead">
              Lapa parāda studenta ikdienu: lekcijas, mājasdarbus, platformas,
              ceļu uz universitāti un brīvo laiku. Dizains ir sakārtots kā
              dienasgrāmata ar īsiem blokiem, lai nedēļu var ātri pārskatīt.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#lekcijas">
                Skatīt nedēļu
              </a>
              <span className="byline">Autors: Staņislavs Students</span>
            </div>
          </div>

          <div className="hero-panel" aria-label="Nedēļas kopsavilkums">
            <div className="panel-top">
              <span>03. kurss</span>
              <strong>DF</strong>
            </div>
            <div className="focus-card">
              <p className="overline">Šonedēļ fokusā</p>
              <h2>Termiņi, kods un normāls miegs</h2>
            </div>
            <div className="metric-grid">
              <div>
                <strong>5</strong>
                <span>studiju dienas</span>
              </div>
              <div>
                <strong>4</strong>
                <span>platformas</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>ceļa minūtes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad band" id="lekcijas">
        <SectionIntro
          number="01"
          title="Lekciju grafiks"
          text="Nedēļa mainās atkarībā no termiņiem, bet ritms parasti ir līdzīgs: klātienes lekcijas, praktiskie darbi un daļa nodarbību tiešsaistē."
        />
        <div className="week-grid">
          {week.map((item) => (
            <article className={`day-card ${item.load}`} key={item.day}>
              <div className="card-head">
                <span>{item.time}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{item.day}</h3>
              <strong>{item.title}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="majasdarbi">
        <SectionIntro
          number="02"
          title="Mājasdarbi un projekti"
          text="Pēc lekcijām sākas patstāvīgais darbs. Visvairāk laika aizņem kļūdu meklēšana, dokumentācijas lasīšana un projektu salikšana kopā."
        />
        <div className="homework-grid">
          {homework.map((item) => (
            <article className={`homework-card ${item.span ?? ""}`} key={item.title}>
              <div className="card-head">
                <span>{item.course}</span>
                <em>{item.status}</em>
              </div>
              <h3>{item.title}</h3>
              <p>Termiņš: {item.deadline}</p>
              <div
                className="progress"
                style={{ "--progress": `${item.progress}%` } as React.CSSProperties}
                aria-label={`Izpilde ${item.progress}%`}
              >
                <span />
              </div>
              <div className="progress-meta">
                <span>Izpilde</span>
                <strong>{item.progress}%</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad band" id="platformas">
        <SectionIntro
          number="03"
          title="Studiju platformas"
          text="Ikdienā viena platforma reti atrisina visu. Materiāli, sarunas, lekcijas un kods sadalās pa vairākām vietām."
        />
        <div className="platform-grid">
          {platforms.map((item, index) => (
            <article className="platform-card" key={item.name}>
              <div className="platform-number">0{index + 1}</div>
              <h3>{item.name}</h3>
              <p>{item.purpose}</p>
              <div>
                <span>Lietojums</span>
                <strong>{item.usage}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="cels">
        <SectionIntro
          number="04"
          title="Ceļš uz universitāti"
          text="Klātienes dienās rīta rutīna ir gandrīz mehāniska, bet tieši tā palīdz nepazaudēt ritmu."
        />
        <div className="timeline">
          {commute.map((item) => (
            <article className="timeline-step" key={item.time}>
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad band" id="brivais-laiks">
        <SectionIntro
          number="05"
          title="Brīvais laiks"
          text="Atpūta nav tikai balva pēc darba. Tā ir daļa no nedēļas, lai nākamajā dienā vispār būtu spēks klausīties lekcijās."
        />
        <div className="hobby-grid">
          {hobbies.map((item) => (
            <article className={`hobby-card ${item.big ? "big" : ""}`} key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Staņislavs Students</strong>
          <span>LU Datorika / darba nedēļas apraksts</span>
        </div>
        <p>Vienas lapas mājaslapa par lekcijām, platformām, mājasdarbiem un atelpas brīžiem.</p>
        <small>© 2026</small>
      </footer>
    </main>
  );
}

function SectionIntro({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <div>
        <p className="overline">{number} / Sadaļa</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

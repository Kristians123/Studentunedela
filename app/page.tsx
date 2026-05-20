"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
  title: string;
  kicker: string;
  illustration: "schedule" | "tasks" | "platforms" | "route" | "free";
  text: string;
};

const sections: Section[] = [
  {
    id: "lekcijas",
    label: "Lekcijas",
    title: "Lekciju grafiks",
    kicker: "No rīta auditorijā, pēcpusdienā tiešsaistē",
    illustration: "schedule",
    text:
      "Mana darba nedēļa parasti sākas ar nelielu plāna pārbaudi e-studijās. Pirmdienās man ir programmēšana klātienē, tāpēc uz universitāti dodos agrāk un pirms lekcijas vēl pārskatu iepriekšējo kodu. Otrdienās bieži ir datubāzes, kur vairāk strādājam ar vaicājumiem un piemēriem. Trešdienās parasti ir algoritmi, un tā ir viena no grūtākajām dienām, jo jākoncentrējas uz uzdevumu loģiku. Ceturtdienās notiek web tehnoloģijas, kur praktiski veidojam lapas un runājam par HTML, CSS un JavaScript. Piektdiena mēdz būt mierīgāka, bet ne vienmēr brīva. Daļa nodarbību ir Microsoft Teams vai Zoom vidē, tāpēc reizēm mācos no mājām. Tas ir ērti, bet klātienē man parasti ir vieglāk pajautāt pasniedzējam un saprast, ko tieši darām.",
  },
  {
    id: "majasdarbi",
    label: "Mājasdarbi",
    title: "Mājasdarbi un projekti",
    kicker: "Termiņi, mazi labojumi un darbs vakarā",
    illustration: "tasks",
    text:
      "Mājasdarbi datorikas studentam nav tikai kaut kas, ko ātri izpilda pirms gulētiešanas. Bieži vien uzdevums sākumā izskatās vienkāršs, bet pēc tam atklājas, ka jāmeklē kļūda, jālasa dokumentācija vai jāpārtaisa puse risinājuma. Programmēšanā man parasti ir jāuzraksta funkcijas, jātestē rezultāts un jāiesniedz darbs laikā. Web tehnoloģijās ir jāveido nelielas lapas, piemēram, ar navigāciju, sadaļām un pielāgošanos telefona ekrānam. Vēl ir grupas projekti, kuros svarīgi sarunāt, kurš ko dara, lai beigās viss sader kopā. Visvairāk mācos vakaros, jo pa dienu ir lekcijas un ceļš. Dažreiz pietiek ar vienu stundu, bet pirms termiņiem var sanākt sēdēt daudz ilgāk. Man palīdz vienkāršs saraksts ar darāmajiem darbiem, lai galvā nav pilnīgs haoss.",
  },
  {
    id: "platformas",
    label: "Platformas",
    title: "Studiju platformas",
    kicker: "Vieta materiāliem, sarunām, lekcijām un kodam",
    illustration: "platforms",
    text:
      "Ikdienā izmantoju vairākas platformas, un katrai ir sava nozīme. Moodle jeb e-studijas ir galvenā vieta, kur skatos lekciju materiālus, mājasdarbu aprakstus, termiņus un vērtējumus. Ja kaut kas nav skaidrs, vispirms pārbaudu tieši tur. Microsoft Teams vairāk izmantojam saziņai ar pasniedzējiem un kursabiedriem. Tur var būt arī paziņojumi, faili un tiešsaistes nodarbības. Zoom parasti vajadzīgs lekcijām vai konsultācijām, kad nodarbība notiek attālināti. GitHub ir noderīgs, kad jāglabā kods vai jāstrādā pie projekta kopā ar citiem. Sākumā visas šīs vietas var šķist par daudz, bet ar laiku pierod. Galvenais ir regulāri pārbaudīt paziņojumus un nepazaudēt termiņus. Ja visu atstāj uz pēdējo brīdi, platformas vairs nepalīdz, jo problēma ir pašā plānošanā.",
  },
  {
    id: "cels",
    label: "Ceļš",
    title: "Ceļš uz universitāti",
    kicker: "Rīta rutīna un mazliet laika sev",
    illustration: "route",
    text:
      "Dienās, kad lekcijas ir klātienē, rīts sākas diezgan vienkārši. Pieceļos, pārbaudu telefonu, ātri paskatos lekciju grafiku un pārliecinos, ka somā ir dators un lādētājs. Bez lādētāja datorikas studentam diena var ātri kļūt sarežģīta. Uz universitāti parasti braucu ar sabiedrisko transportu. Ceļš aizņem apmēram trīsdesmit līdz četrdesmit minūtes, atkarībā no satiksmes un tā, cik veiksmīgi sanāk pārsēsties. Pa ceļam klausos mūziku, pārskatu ziņas Teams vai vienkārši mēģinu pamosties. Reizēm autobusā vēlreiz izlasu mājasdarba noteikumus, ja vakarā kaut kas palicis neskaidrs. Klātienes dienās man patīk tas, ka var satikt kursabiedrus un pēc lekcijas aprunāties par uzdevumiem. Tas palīdz justies vairāk iesaistītam, nevis tikai sēdēt vienam pie ekrāna.",
  },
  {
    id: "brivais-laiks",
    label: "Brīvais laiks",
    title: "Brīvais laiks",
    kicker: "Atpūta arī ir daļa no normālas nedēļas",
    illustration: "free",
    text:
      "Brīvais laiks nedēļas laikā nav vienmērīgs. Dažās dienās pēc lekcijām vēl ir daudz darbu, bet citās var paspēt arī atpūsties. Man patīk aiziet uz sporta zāli vai vienkārši iziet pastaigā, jo pēc vairākām stundām pie datora galva kļūst nogurusi. Reizēm satieku draugus, uzspēlēju spēles vai paskatos filmu. Tas palīdz pārslēgties un pēc tam atgriezties pie mācībām ar svaigāku prātu. Protams, ir arī vakari, kad brīvais laiks pārvēršas par papildu mācīšanos, īpaši pirms iesniegšanas termiņiem. Tomēr cenšos neatstāt visu tikai uz nakti, jo tad nākamajā dienā ir grūtāk klausīties lekcijās. Man šķiet, ka datorikas studentam svarīgi iemācīties ne tikai programmēt, bet arī normāli sadalīt spēkus visas nedēļas garumā.",
  },
];

const navItems = [{ id: "sakums", label: "Sākums" }, ...sections.map(({ id, label }) => ({ id, label }))];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#sakums" aria-label="Uz sākumu">
          <span className="brand-mark">DS</span>
          <span>Datorikas nedēļa</span>
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
          <span aria-hidden="true">{dark ? "☀" : "◐"}</span>
          <span>{dark ? "Gaišais" : "Tumšais"}</span>
        </button>
      </header>

      <section className="hero" id="sakums">
        <div className="hero-copy">
          <p className="eyebrow">Latvijas Universitāte · datorikas students</p>
          <h1>Viena darba nedēļa datorikas studenta dzīvē</h1>
          <p className="hero-text">
            Šī mājaslapa parāda vienu parastu, bet diezgan pilnu studiju nedēļu:
            lekcijas, mājasdarbus, platformas, ceļu uz universitāti un brīvo laiku.
            Viss aprakstīts vienkārši, tā, kā students pats varētu pastāstīt par savu ikdienu.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#lekcijas">
              Skatīt nedēļu
            </a>
            <span className="author">Autors: Staņislavs Students</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustrācija ar studenta nedēļas plānu">
          <div className="laptop">
            <div className="screen-top">
              <span />
              <span />
              <span />
            </div>
            <div className="calendar-grid">
              {["P", "O", "T", "C", "P"].map((day, index) => (
                <div className="day-card" key={day}>
                  <strong>{day}</strong>
                  <span style={{ height: `${44 + index * 8}px` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overview" aria-label="Nedēļas īsais pārskats">
        <div>
          <strong>Pirmdiena</strong>
          <span>programmēšana klātienē un nedēļas plāna pārbaude</span>
        </div>
        <div>
          <strong>Trešdiena</strong>
          <span>algoritmi, praktiski uzdevumi un darbs ar kļūdām</span>
        </div>
        <div>
          <strong>Piektdiena</strong>
          <span>projekta labojumi un mazliet vairāk laika atelpai</span>
        </div>
      </section>

      <div className="content">
        {sections.map((section, index) => (
          <article className="student-section" id={section.id} key={section.id}>
            <div className="section-visual">
              <Illustration type={section.illustration} />
            </div>
            <div className="section-copy">
              <p className="section-number">0{index + 1}</p>
              <h2>{section.title}</h2>
              <p className="kicker">{section.kicker}</p>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function Illustration({ type }: { type: Section["illustration"] }) {
  if (type === "schedule") {
    return (
      <div className="illustration schedule-art" aria-hidden="true">
        <span className="bar long" />
        <span className="bar mid" />
        <span className="bar short" />
        <span className="clock">9:00</span>
      </div>
    );
  }

  if (type === "tasks") {
    return (
      <div className="illustration task-art" aria-hidden="true">
        <span className="check done" />
        <span className="check" />
        <span className="code-line" />
        <span className="deadline">23:59</span>
      </div>
    );
  }

  if (type === "platforms") {
    return (
      <div className="illustration platform-art" aria-hidden="true">
        <span>Moodle</span>
        <span>Teams</span>
        <span>Zoom</span>
        <span>GitHub</span>
      </div>
    );
  }

  if (type === "route") {
    return (
      <div className="illustration route-art" aria-hidden="true">
        <span className="stop start" />
        <span className="route-line" />
        <span className="bus">LU</span>
        <span className="stop end" />
      </div>
    );
  }

  return (
    <div className="illustration free-art" aria-hidden="true">
      <span className="moon" />
      <span className="play" />
      <span className="dumbbell" />
      <span className="small-note" />
    </div>
  );
}

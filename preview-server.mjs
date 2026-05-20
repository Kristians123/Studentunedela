import http from "node:http";

const port = Number(process.env.PORT || 3000);

const html = String.raw`<!doctype html>
<html lang="lv" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Viena darba nedēļa datorikas studenta dzīvē</title>
  <meta name="description" content="Vienas lapas mājaslapa par datorikas studenta ikdienu Latvijas Universitātē." />
  <style>
${await import("node:fs").then((fs) => fs.readFileSync(new URL("./app/globals.css", import.meta.url), "utf8"))}
  </style>
</head>
<body>
  <main>
    <header class="site-header">
      <a class="brand" href="#sakums" aria-label="Uz sākumu"><span class="brand-mark">DS</span><span>Datorikas nedēļa</span></a>
      <nav class="nav" aria-label="Galvenā navigācija">
        <a href="#sakums">Sākums</a><a href="#lekcijas">Lekcijas</a><a href="#majasdarbi">Mājasdarbi</a><a href="#platformas">Platformas</a><a href="#cels">Ceļš</a><a href="#brivais-laiks">Brīvais laiks</a>
      </nav>
      <button class="theme-toggle" type="button" aria-label="Pārslēgt krāsu režīmu"><span aria-hidden="true">◐</span><span>Tumšais</span></button>
    </header>
    <section class="hero" id="sakums">
      <div class="hero-copy">
        <p class="eyebrow">Latvijas Universitāte · datorikas students</p>
        <h1>Viena darba nedēļa datorikas studenta dzīvē</h1>
        <p class="hero-text">Šī mājaslapa parāda vienu parastu, bet diezgan pilnu studiju nedēļu: lekcijas, mājasdarbus, platformas, ceļu uz universitāti un brīvo laiku. Viss aprakstīts vienkārši, tā, kā students pats varētu pastāstīt par savu ikdienu.</p>
        <div class="hero-actions"><a class="primary-link" href="#lekcijas">Skatīt nedēļu</a><span class="author">Autors: Staņislavs Students</span></div>
      </div>
      <div class="hero-visual" aria-label="Ilustrācija ar studenta nedēļas plānu">
        <div class="laptop">
          <div class="screen-top"><span></span><span></span><span></span></div>
          <div class="calendar-grid">
            <div class="day-card"><strong>P</strong><span style="height:44px"></span></div>
            <div class="day-card"><strong>O</strong><span style="height:52px"></span></div>
            <div class="day-card"><strong>T</strong><span style="height:60px"></span></div>
            <div class="day-card"><strong>C</strong><span style="height:68px"></span></div>
            <div class="day-card"><strong>P</strong><span style="height:76px"></span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="overview" aria-label="Nedēļas īsais pārskats">
      <div><strong>Pirmdiena</strong><span>programmēšana klātienē un nedēļas plāna pārbaude</span></div>
      <div><strong>Trešdiena</strong><span>algoritmi, praktiski uzdevumi un darbs ar kļūdām</span></div>
      <div><strong>Piektdiena</strong><span>projekta labojumi un mazliet vairāk laika atelpai</span></div>
    </section>
    <div class="content">
      ${[
        ["lekcijas", "schedule-art", "01", "Lekciju grafiks", "No rīta auditorijā, pēcpusdienā tiešsaistē", "Mana darba nedēļa parasti sākas ar nelielu plāna pārbaudi e-studijās. Pirmdienās man ir programmēšana klātienē, tāpēc uz universitāti dodos agrāk un pirms lekcijas vēl pārskatu iepriekšējo kodu. Otrdienās bieži ir datubāzes, kur vairāk strādājam ar vaicājumiem un piemēriem. Trešdienās parasti ir algoritmi, un tā ir viena no grūtākajām dienām, jo jākoncentrējas uz uzdevumu loģiku. Ceturtdienās notiek web tehnoloģijas, kur praktiski veidojam lapas un runājam par HTML, CSS un JavaScript. Piektdiena mēdz būt mierīgāka, bet ne vienmēr brīva. Daļa nodarbību ir Microsoft Teams vai Zoom vidē, tāpēc reizēm mācos no mājām. Tas ir ērti, bet klātienē man parasti ir vieglāk pajautāt pasniedzējam un saprast, ko tieši darām."],
        ["majasdarbi", "task-art", "02", "Mājasdarbi un projekti", "Termiņi, mazi labojumi un darbs vakarā", "Mājasdarbi datorikas studentam nav tikai kaut kas, ko ātri izpilda pirms gulētiešanas. Bieži vien uzdevums sākumā izskatās vienkāršs, bet pēc tam atklājas, ka jāmeklē kļūda, jālasa dokumentācija vai jāpārtaisa puse risinājuma. Programmēšanā man parasti ir jāuzraksta funkcijas, jātestē rezultāts un jāiesniedz darbs laikā. Web tehnoloģijās ir jāveido nelielas lapas, piemēram, ar navigāciju, sadaļām un pielāgošanos telefona ekrānam. Vēl ir grupas projekti, kuros svarīgi sarunāt, kurš ko dara, lai beigās viss sader kopā. Visvairāk mācos vakaros, jo pa dienu ir lekcijas un ceļš. Dažreiz pietiek ar vienu stundu, bet pirms termiņiem var sanākt sēdēt daudz ilgāk. Man palīdz vienkāršs saraksts ar darāmajiem darbiem, lai galvā nav pilnīgs haoss."],
        ["platformas", "platform-art", "03", "Studiju platformas", "Vieta materiāliem, sarunām, lekcijām un kodam", "Ikdienā izmantoju vairākas platformas, un katrai ir sava nozīme. Moodle jeb e-studijas ir galvenā vieta, kur skatos lekciju materiālus, mājasdarbu aprakstus, termiņus un vērtējumus. Ja kaut kas nav skaidrs, vispirms pārbaudu tieši tur. Microsoft Teams vairāk izmantojam saziņai ar pasniedzējiem un kursabiedriem. Tur var būt arī paziņojumi, faili un tiešsaistes nodarbības. Zoom parasti vajadzīgs lekcijām vai konsultācijām, kad nodarbība notiek attālināti. GitHub ir noderīgs, kad jāglabā kods vai jāstrādā pie projekta kopā ar citiem. Sākumā visas šīs vietas var šķist par daudz, bet ar laiku pierod. Galvenais ir regulāri pārbaudīt paziņojumus un nepazaudēt termiņus. Ja visu atstāj uz pēdējo brīdi, platformas vairs nepalīdz, jo problēma ir pašā plānošanā."],
        ["cels", "route-art", "04", "Ceļš uz universitāti", "Rīta rutīna un mazliet laika sev", "Dienās, kad lekcijas ir klātienē, rīts sākas diezgan vienkārši. Pieceļos, pārbaudu telefonu, ātri paskatos lekciju grafiku un pārliecinos, ka somā ir dators un lādētājs. Bez lādētāja datorikas studentam diena var ātri kļūt sarežģīta. Uz universitāti parasti braucu ar sabiedrisko transportu. Ceļš aizņem apmēram trīsdesmit līdz četrdesmit minūtes, atkarībā no satiksmes un tā, cik veiksmīgi sanāk pārsēsties. Pa ceļam klausos mūziku, pārskatu ziņas Teams vai vienkārši mēģinu pamosties. Reizēm autobusā vēlreiz izlasu mājasdarba noteikumus, ja vakarā kaut kas palicis neskaidrs. Klātienes dienās man patīk tas, ka var satikt kursabiedrus un pēc lekcijas aprunāties par uzdevumiem. Tas palīdz justies vairāk iesaistītam, nevis tikai sēdēt vienam pie ekrāna."],
        ["brivais-laiks", "free-art", "05", "Brīvais laiks", "Atpūta arī ir daļa no normālas nedēļas", "Brīvais laiks nedēļas laikā nav vienmērīgs. Dažās dienās pēc lekcijām vēl ir daudz darbu, bet citās var paspēt arī atpūsties. Man patīk aiziet uz sporta zāli vai vienkārši iziet pastaigā, jo pēc vairākām stundām pie datora galva kļūst nogurusi. Reizēm satieku draugus, uzspēlēju spēles vai paskatos filmu. Tas palīdz pārslēgties un pēc tam atgriezties pie mācībām ar svaigāku prātu. Protams, ir arī vakari, kad brīvais laiks pārvēršas par papildu mācīšanos, īpaši pirms iesniegšanas termiņiem. Tomēr cenšos neatstāt visu tikai uz nakti, jo tad nākamajā dienā ir grūtāk klausīties lekcijās. Man šķiet, ka datorikas studentam svarīgi iemācīties ne tikai programmēt, bet arī normāli sadalīt spēkus visas nedēļas garumā."]
      ].map(([id, art, nr, title, kicker, text]) => `<article class="student-section" id="${id}"><div class="section-visual"><div class="illustration ${art}" aria-hidden="true">${art === "schedule-art" ? '<span class="bar long"></span><span class="bar mid"></span><span class="bar short"></span><span class="clock">9:00</span>' : art === "task-art" ? '<span class="check done"></span><span class="check"></span><span class="code-line"></span><span class="deadline">23:59</span>' : art === "platform-art" ? '<span>Moodle</span><span>Teams</span><span>Zoom</span><span>GitHub</span>' : art === "route-art" ? '<span class="stop start"></span><span class="route-line"></span><span class="bus">LU</span><span class="stop end"></span>' : '<span class="moon"></span><span class="play"></span><span class="dumbbell"></span><span class="small-note"></span>'}</div></div><div class="section-copy"><p class="section-number">${nr}</p><h2>${title}</h2><p class="kicker">${kicker}</p><p>${text}</p></div></article>`).join("")}
    </div>
  </main>
  <script>
    const button = document.querySelector(".theme-toggle");
    button.addEventListener("click", () => {
      const dark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      button.innerHTML = dark ? '<span aria-hidden="true">☀</span><span>Gaišais</span>' : '<span aria-hidden="true">◐</span><span>Tumšais</span>';
      button.setAttribute("aria-label", dark ? "Ieslēgt gaišo režīmu" : "Ieslēgt tumšo režīmu");
    });
  </script>
</body>
</html>`;

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(html);
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Preview running at http://localhost:${port}`);
  });

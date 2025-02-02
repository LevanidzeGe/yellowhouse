// Event Interface
export interface EventTranslation {
  title: string;
  description: string;
}

export interface EventProps {
  id: string;
  timestamp: number;
  translations: {
    [locale: string]: EventTranslation;
  };
  images: string[];
}
export const events: EventProps[] = [
  {
    id: "event0",
    timestamp: 1735776000000, // 2025-01-02
    translations: {
      en: {
        title: "International Judo Grand Prix in Lyon",
        description:
          "The International Judo Grand Prix in Lyon brings together elite judokas from over 30 countries. Witness intense battles of strength, technique, and mental resilience as competitors vie for international glory. This prestigious event sets the stage for future world champions and Olympic hopefuls.",
      },
      fr: {
        title: "Grand Prix International de Judo à Lyon",
        description:
          "Le Grand Prix International de Judo à Lyon réunit des judokas d'élite de plus de 30 pays. Assistez à des combats intenses où s'affrontent force, technique et résilience mentale. Un événement prestigieux qui prépare la voie aux futurs champions du monde et espoirs olympiques.",
      },
      de: {
        title: "Internationaler Judo-Grand-Prix in Lyon",
        description:
          "Der Internationale Judo-Grand-Prix in Lyon vereint Spitzensportler aus über 30 Ländern. Erleben Sie packende Kämpfe voller Kraft, Technik und mentaler Stärke, wenn die Athleten um internationalen Ruhm kämpfen.",
      },
      it: {
        title: "Gran Premio Internazionale di Judo a Lione",
        description:
          "Il Gran Premio Internazionale di Judo a Lione riunisce judoka d'élite provenienti da oltre 30 paesi. Vivi la tensione dei combattimenti più intensi, dove la forza fisica e la strategia mentale si fondono per la vittoria.",
      },
      ge: {
        title: "ძიუდოს საერთაშორისო გრან-პრი ლიონში",
        description:
          "ძიუდოს საერთაშორისო გრან-პრი ლიონში აერთიანებს 30-ზე მეტი ქვეყნის ელიტარულ სპორტსმენებს. დააკვირდით დაძაბულ ბრძოლებს, სადაც ძალა, ტექნიკა და მენტალური სიმტკიცე ერთმანეთს ეჯახება.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/2.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/1.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/3.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/4.png?raw=true",
    ],
  },
  {
    id: "event1",
    timestamp: 1735776000000, // 2025-01-02
    translations: {
      en: {
        title: "International Judo Grand Prix in Lyon",
        description:
          "The International Judo Grand Prix in Lyon brings together elite judokas from over 30 countries. Witness intense battles of strength, technique, and mental resilience as competitors vie for international glory. This prestigious event sets the stage for future world champions and Olympic hopefuls.",
      },
      fr: {
        title: "Grand Prix International de Judo à Lyon",
        description:
          "Le Grand Prix International de Judo à Lyon réunit des judokas d'élite de plus de 30 pays. Assistez à des combats intenses où s'affrontent force, technique et résilience mentale. Un événement prestigieux qui prépare la voie aux futurs champions du monde et espoirs olympiques.",
      },
      de: {
        title: "Internationaler Judo-Grand-Prix in Lyon",
        description:
          "Der Internationale Judo-Grand-Prix in Lyon vereint Spitzensportler aus über 30 Ländern. Erleben Sie packende Kämpfe voller Kraft, Technik und mentaler Stärke, wenn die Athleten um internationalen Ruhm kämpfen.",
      },
      it: {
        title: "Gran Premio Internazionale di Judo a Lione",
        description:
          "Il Gran Premio Internazionale di Judo a Lione riunisce judoka d'élite provenienti da oltre 30 paesi. Vivi la tensione dei combattimenti più intensi, dove la forza fisica e la strategia mentale si fondono per la vittoria.",
      },
      ge: {
        title: "ძიუდოს საერთაშორისო გრან-პრი ლიონში",
        description:
          "ძიუდოს საერთაშორისო გრან-პრი ლიონში აერთიანებს 30-ზე მეტი ქვეყნის ელიტარულ სპორტსმენებს. დააკვირდით დაძაბულ ბრძოლებს, სადაც ძალა, ტექნიკა და მენტალური სიმტკიცე ერთმანეთს ეჯახება.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/1.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/2.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/3.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/4.png?raw=true",
    ],
  },
  {
    id: "event2",
    timestamp: 1739577600000, // 2025-02-15
    translations: {
      en: {
        title: "Elite Judo Training Camp in Geneva",
        description:
          "This elite training camp in Geneva is designed for advanced judokas seeking to refine their technical skills, tactical awareness, and mental focus. Led by world-renowned coaches, the program includes intensive drills, sparring sessions, and strategic workshops to prepare athletes for international competitions.",
      },
      fr: {
        title: "Camp d'Entraînement de Judo Élite à Genève",
        description:
          "Ce camp d'entraînement d'élite à Genève est destiné aux judokas avancés souhaitant perfectionner leurs compétences techniques et leur stratégie. Encadré par des entraîneurs de renommée mondiale, le programme comprend des séances intensives et des ateliers tactiques.",
      },
      de: {
        title: "Elite-Judo-Trainingslager in Genf",
        description:
          "Dieses Elite-Trainingslager in Genf richtet sich an fortgeschrittene Judokas, die ihre technischen Fähigkeiten, taktisches Verständnis und mentale Stärke verbessern möchten.",
      },
      it: {
        title: "Campo di Allenamento Elite di Judo a Ginevra",
        description:
          "Questo campo di allenamento d'élite a Ginevra è progettato per judoka esperti che vogliono perfezionare le loro abilità tecniche e tattiche sotto la guida di allenatori di fama mondiale.",
      },
      ge: {
        title: "ძიუდოს ელიტარული სასწავლო ბანაკი ჟენევაში",
        description:
          "ჟენევაში მდებარე ეს ელიტარული სასწავლო ბანაკი განკუთვნილია გამოცდილი ძიუდოს სპორტსმენებისთვის, რომლებიც ისწრაფვიან ტექნიკური და ტაქტიკური უნარების გაუმჯობესებისკენ.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/5.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/6.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/7.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/8.png?raw=true",
    ],
  },
  {
    id: "event3",
    timestamp: 1742428800000, // 2025-03-20
    translations: {
      en: {
        title: "European Judo Masters in Berlin",
        description:
          "The European Judo Masters in Berlin is a high-stakes tournament showcasing Europe’s finest judokas. Competitors face rigorous matches under the spotlight, demonstrating exceptional skill, endurance, and strategic mastery. This event is critical for athletes aiming to secure their ranking on the continental stage.",
      },
      fr: {
        title: "Masters Européens de Judo à Berlin",
        description:
          "Les Masters Européens de Judo à Berlin sont un tournoi de haut niveau mettant en valeur les meilleurs judokas d'Europe. Les compétiteurs s'affrontent lors de combats intenses pour améliorer leur classement.",
      },
      de: {
        title: "Europäische Judo-Meisterschaft in Berlin",
        description:
          "Die Europäischen Judo-Meisterschaften in Berlin sind ein prestigeträchtiges Turnier, das Europas beste Judokas präsentiert. Ein entscheidendes Event für die kontinentalen Ranglisten.",
      },
      it: {
        title: "Masters Europei di Judo a Berlino",
        description:
          "I Masters Europei di Judo a Berlino rappresentano una competizione d'élite che mette in mostra i migliori judoka del continente, con incontri intensi e tatticamente impegnativi.",
      },
      ge: {
        title: "ძიუდოს ევროპის მასტერსი ბერლინში",
        description:
          "ძიუდოს ევროპის მასტერსი ბერლინში არის პრესტიჟული ტურნირი, რომელიც აერთიანებს ევროპის წამყვან სპორტსმენებს რეიტინგების გასაუმჯობესებლად.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/9.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/10.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/3.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/6.png?raw=true",
    ],
  },
  {
    id: "event4",
    timestamp: 1746038400000, // 2025-04-30
    translations: {
      en: {
        title: "Youth Judo Development Program in Milan",
        description:
          "A specialized program for young judokas aged 10-18, focusing on technical development, sportsmanship, and competitive readiness. Participants will engage in hands-on workshops, conditioning exercises, and skill-building activities led by top coaches from around Europe.",
      },
      fr: {
        title: "Programme de Développement de Judo pour Jeunes à Milan",
        description:
          "Un programme spécialisé pour les jeunes judokas axé sur le développement technique, l'esprit sportif et la préparation à la compétition, encadré par des entraîneurs européens renommés.",
      },
      de: {
        title: "Judo-Nachwuchsförderprogramm in Mailand",
        description:
          "Ein spezielles Programm für junge Judokas zur Förderung technischer Fähigkeiten, sportlichen Verhaltens und Wettkampfbereitschaft unter der Leitung europäischer Top-Trainer.",
      },
      it: {
        title: "Programma di Sviluppo Judo per Giovani a Milano",
        description:
          "Un programma dedicato ai giovani judoka, finalizzato allo sviluppo tecnico e alla preparazione competitiva con il supporto dei migliori allenatori europei.",
      },
      ge: {
        title: "ძიუდოს ახალგაზრდული განვითარების პროგრამა მილანში",
        description:
          "სპეციალური პროგრამა ახალგაზრდა ძიუდოკაებისთვის ტექნიკური უნარების გაუმჯობესებისა და სპორტული განვითარების მიზნით.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/8.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/9.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/10.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/4.png?raw=true",
    ],
  },
  {
    id: "event5",
    timestamp: 1749849600000, // 2025-06-15
    translations: {
      en: {
        title: "World Judo Championships in Paris",
        description:
          "The World Judo Championships in Paris is the ultimate battleground where the best judokas from across the globe compete for the prestigious world title. Experience breathtaking throws, masterful groundwork, and unmatched competitive spirit in one of the biggest judo events of the year.",
      },
      fr: {
        title: "Championnats du Monde de Judo à Paris",
        description:
          "Les Championnats du Monde de Judo à Paris réunissent les meilleurs judokas du monde entier. Assistez à des combats spectaculaires et à une démonstration d'excellence technique.",
      },
      de: {
        title: "Judo-Weltmeisterschaft in Paris",
        description:
          "Die Judo-Weltmeisterschaft in Paris ist das ultimative Event, bei dem die besten Judokas der Welt um den Titel kämpfen. Erleben Sie spektakuläre Würfe und taktische Finesse.",
      },
      it: {
        title: "Campionati Mondiali di Judo a Parigi",
        description:
          "I Campionati Mondiali di Judo a Parigi vedono protagonisti i migliori atleti del mondo. Vivi l'emozione di combattimenti di altissimo livello e tecnica straordinaria.",
      },
      ge: {
        title: "ძიუდოს მსოფლიო ჩემპიონატი პარიზში",
        description:
          "ძიუდოს მსოფლიო ჩემპიონატი პარიზში აერთიანებს მსოფლიოს საუკეთესო სპორტსმენებს, რომლებიც იბრძვიან მსოფლიო ტიტულის მოსაპოვებლად.",
      },
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/judo/7.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/3.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/1.png?raw=true",
      "https://github.com/levanydze/SUP/blob/main/judo/9.png?raw=true",
    ],
  },
];

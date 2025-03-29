"use client";

import { useLocale } from "next-intl";
import styles from "./SayHi.module.css";
import ContactForm from "./cotactForm/ContactForm";
import { MdOutlineClose } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import { PlanProps } from "../priceData";

const sayHiData = {
  en: {
    title1: "Say hi to",
    title2: "levani",
    sub: "If you need a designer for your project send me an email.",
    head1: "Get in Touch",
    head2: "Request a Quote",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    date: "Date",
    time: "Time",
    quantity: "Rooms Needed",
    message: "Your request here",
    button: "Submit",
    send: "Send Inquiry",
    thankYou: "Thanks for reaching out!",
    comfirmation: "We'll respond as soon as possible.",
  },
  fr: {
    title1: "Dites bonjour à",
    title2: "levani",
    sub: "Si vous avez besoin d’un designer pour votre projet, envoyez-moi un message.",
    head1: "Contactez-moi",
    head2: "Demandez un devis",
    name: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    date: "Date",
    time: "Heure",
    quantity: "Nombre de pièces",
    message: "Votre demande ici",
    button: "Envoyer",
    send: "Envoyer la demande",
    thankYou: "Merci pour votre message !",
    comfirmation: "Je vous répondrai dès que possible.",
  },
  de: {
    title1: "Sag hallo zu",
    title2: "levani",
    sub: "Wenn du einen Designer für dein Projekt brauchst, schick mir eine Nachricht.",
    head1: "Kontakt aufnehmen",
    head2: "Angebot anfordern",
    name: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    date: "Datum",
    time: "Uhrzeit",
    quantity: "Anzahl der Räume",
    message: "Deine Anfrage hier",
    button: "Absenden",
    send: "Anfrage senden",
    thankYou: "Danke für deine Nachricht!",
    comfirmation: "Ich melde mich so schnell wie möglich bei dir.",
  },
  it: {
    title1: "Saluta",
    title2: "levani",
    sub: "Se hai bisogno di un designer per il tuo progetto, scrivimi.",
    head1: "Contattami",
    head2: "Richiedi un preventivo",
    name: "Nome completo",
    email: "Email",
    phone: "Telefono",
    date: "Data",
    time: "Orario",
    quantity: "Numero di stanze",
    message: "La tua richiesta qui",
    button: "Invia",
    send: "Invia richiesta",
    thankYou: "Grazie per il tuo messaggio!",
    comfirmation: "Ti risponderò al più presto.",
  },
};

export default function SayHi({
  plan,
  setModal,
  index,
}: {
  plan: PlanProps;
  setModal: Dispatch<SetStateAction<boolean>>;
  index: number;
}) {
  const locale = useLocale();
  const translates = sayHiData[locale as keyof typeof sayHiData];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.sayHiWrapper}>
        <MdOutlineClose onClick={() => setModal(false)} />

        <h3
          className={`heading2 font2 ${styles.title} ${
            plan.name.en === "Starter"
              ? styles.blue
              : plan.name.en === "Pro"
              ? styles.yellow
              : styles.red
          }`}
        >
          {plan.name[locale]}
        </h3>

        <ContactForm
          plan={plan.name[locale] || ""}
          budget={plan.salePrice || plan.price || ""}
          head1={translates.head1}
          head2={translates.head2}
          name={translates.name}
          email={translates.email}
          phone={translates.phone}
          date={translates.date}
          time={translates.time}
          quantity={translates.quantity}
          message={translates.message}
          button={translates.button}
          send={translates.send}
          thankYou={translates.thankYou}
          comfirmation={translates.comfirmation}
        />
      </div>
    </div>
  );
}

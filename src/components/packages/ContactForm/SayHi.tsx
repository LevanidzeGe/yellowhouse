import styles from "./SayHi.module.css";
import ContactForm from "./cotactForm/ContactForm";
import { getLocale, getTranslations } from "next-intl/server";

const sayHiData = {
  en: {
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

export default async function SayHi() {
  const locale = await getLocale();
  const translates = sayHiData[locale as keyof typeof sayHiData];
  const t = await getTranslations("contactForm");

  return (
    <section className="section">
      <div className="container">
        <div className={styles.sayHiWrapper}>
          <div className={styles.sayHiLeo}>
            <span className={`heading2 font2 gray5`}>{t("title1")}</span>
            <span className={`heading2 font2 ${styles.levani}`}>
              {t("title2")}
            </span>
          </div>
          <p className="heading6">{t("title3")}</p>
        </div>
      </div>

      <ContactForm
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
    </section>
  );
}

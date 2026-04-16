export default function ContactMap() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "";

  return (
    <iframe
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: "0px" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(
        "Ecole Mosaic",
      )}&maptype=satellite`}
    />
  );
}

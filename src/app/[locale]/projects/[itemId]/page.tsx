import EventDetails from "./eachItemPage/EventDetails";
import { projects } from "../projectsData";
import { Metadata } from "next";
import { defaultLocale } from "@/Manager/navigation";
import { companyDomain } from "@/Manager/info";

type Props = {
  params: {
    lang: string;
    itemId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const event = projects.find((e) => e.id === params.itemId); // Use itemId here

  if (!event) {
    return {
      title: "Not Found",
      description: "The event you are looking for does not exist",
    };
  }

  const translation =
    event.translations[params.lang] || event.translations[defaultLocale];

  return {
    title: translation.title,
    description: translation.description,
    alternates: {
      canonical: `/${params.lang}/events/${params.itemId}`, // Correct URL
    },
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `${companyDomain}/${params.lang}/events/${params.itemId}`,
      images: [
        {
          url:
            event.images[0] ||
            `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: translation.title,
        },
      ],
    },
  };
};

interface EventDetailsPageProps {
  params: {
    itemId: string; // Use itemId here
    lang: string;
  };
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const event = projects.find((e) => e.id === params.itemId); // Use itemId here

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="fadeOut ">
      <EventDetails event={event} />
    </div>
  );
}

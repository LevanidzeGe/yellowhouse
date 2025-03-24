"use client";

import styles from "./Projects.module.css";
import ServerCard from "./card/ServerCard";
import { projects, ProjectProps } from "../projectsData";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Pagination from "@/src/components/packages/Pagination/Pagination";
import Link from "next/link";
import { useLocale } from "next-intl";

export const revalidate = 86400; // Revalidate once a day
const ITEMS_PER_PAGE = 9; // Number of projects per page

export default function Projects({
  mini,
  title1,
  title2,
  readMore,
  seeAll,
}: {
  mini?: boolean;
  title1: string;
  title2: string;
  readMore: string;
  seeAll?: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Get the current page from URL or default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  // Sort and slice projects for pagination
  const sortedProjects = projects.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="section section-medium no-padding-y">
      <div className={`container ${!mini && styles.container}`}>
        <div className={`${!mini && styles.paddingBottom}`}>
          <div className="sideLineWrap">
            <div className="sideLine"></div>
            <h2 className="heading4">{title1}</h2>
          </div>
          <h3 className={`heading2 color4 ${styles.title}`}>{title2}</h3>
          <div className={styles.eventsWrapper}>
            {(mini ? paginatedProjects.slice(0, 3) : paginatedProjects).map(
              (event: ProjectProps) => (
                <ServerCard key={event.id} {...event} readMore={readMore} />
              )
            )}
          </div>
          {mini && (
            <Link
              className={` button button-reverse button-small ${styles.button} `}
              href={`/${locale}/projects`}
            >
              {seeAll}
            </Link>
          )}
          {/* Pagination Controls */}
          {!mini && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}

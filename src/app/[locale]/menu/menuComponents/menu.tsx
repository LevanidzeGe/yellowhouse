import styles from "./menu.module.css";
import ServerCard from "./card/ServerCard";
import { fetchCategories } from "../fetchingData";
import { useLocale } from "next-intl";
import { MenuItemProps } from "./menuTypes";
import { defaultLocale } from "@/Manager/navigation";
import { getTranslations } from "next-intl/server";

export const revalidate = 86400; // Revalidate once a day

export default async function Menu() {
  const locale = useLocale(); // Get current locale
  const categories = await fetchCategories(); // Fetch categories
  const t = await getTranslations("menuPage.menu");

  if (!categories) {
    return (
      <div>
        <p>Error fetching menu data or categories missing</p>
      </div>
    );
  }
  // Sort and filter categories based on priority and availability of enabled items
  const sortedCategories = categories
    .map((category) => {
      // Check if category.items exists and has values
      if (!category.items) return null;

      // Filter out disabled items for each category
      const sortedItems = Object.values(category.items)
        .filter((item: MenuItemProps) => !item.disable)
        .sort((a: MenuItemProps, b: MenuItemProps) =>
          a && b ? a.priority - b.priority : 0
        );

      // Only return categories that have at least one enabled item
      return sortedItems.length > 0 ? { ...category, sortedItems } : null;
    })
    .filter(
      (category): category is NonNullable<typeof category> => category !== null
    ) // Filter out null values
    .sort((a, b) => (a && b ? a.priority - b.priority : 0)); // Added null check

  // Rendering the sorted categories
  return (
    <div className={styles.cardWrapper}>
      <section className="section section-medium">
        <div className={`container ${styles.container}`}>
          {sortedCategories.map((category, index) => {
            if (!category) return null; // Check if category is not null

            // Access category translations for the current locale, fallback to 'en'
            const categoryName =
              category.translations?.[locale] ||
              category.translations?.[defaultLocale] ||
              "Unnamed Category";

            return (
              <div key={index} className={styles.menuWrapper}>
                <div className={styles.menuTitles}>
                  <span className="font2 heading4 color2 ">
                    {t("underCategory")}
                  </span>
                  <p className="twoLines"></p>
                  <h3 className="font2 color4 heading2">{categoryName}</h3>
                </div>
                <div className={styles.itemContainer}>
                  {category.sortedItems.map((item: MenuItemProps) => (
                    <ServerCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      names={item.names}
                      descriptions={item.descriptions}
                      price={item.price}
                      option1={item.option1 || false}
                      option2={item.option2 || false}
                      option3={item.option3 || false}
                      priority={item.priority}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

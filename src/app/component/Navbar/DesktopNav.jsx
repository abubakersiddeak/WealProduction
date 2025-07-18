import Link from "next/link";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const DropdownMenu = ({ label, items }) => (
  <div className="dropdown dropdown-hover">
    <div
      tabIndex={0}
      role="button"
      className="btn p-0 m-0 bg-white border-0 shadow-none hover:bg-transparent focus:outline-none"
    >
      {label}
    </div>
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-white rounded-box z-50 w-52 p-3 shadow-md border border-gray-100"
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href || "#"}>
            <p className={item.isOffer ? "text-red-500" : ""}>{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function DesktopNav() {
  return (
    <div
      className={`hidden relative w-[35%] md:flex lg:flex flex-grow gap-4 lg:gap-8 font-semibold text-lg justify-start ${oxygen.className}`}
    >
      <DropdownMenu
        label="Man"
        items={[
          {
            text: "Half Sleeve Jersey",
            href: "/daynamicShowproduct/Men-Half-Sleeve-Jersey",
          },
          {
            text: "Full Sleeve Jersey",
            href: "/daynamicShowproduct/Men-Full-Sleeve-Jersey",
          },
          { text: "Shorts", href: "/daynamicShowproduct/Men-Shorts" },
          { text: "Trouser", href: "/daynamicShowproduct/Men-Trouser" },
          { text: "Others", href: "/daynamicShowproduct/Men-Others" },
        ]}
      />
      <DropdownMenu
        label="Kids"
        items={[
          {
            text: "Half Sleeve Jersey",
            href: "/daynamicShowproduct/Kids-Half-Sleeve-Jersey",
          },
          {
            text: "Full Sleeve Jersey",
            href: "/daynamicShowproduct/Kids-Full-Sleeve-Jersey",
          },
          { text: "Shorts", href: "/daynamicShowproduct/Kids-Shorts" },
          { text: "Trouser", href: "/daynamicShowproduct/Kids-Trouser" },
          { text: "Others", href: "/daynamicShowproduct/Kids-Others" },
        ]}
      />
      <DropdownMenu
        label="Accessories"
        items={[
          {
            text: "Cricket",
            href: "/daynamicShowproduct/Accessories-Cricket",
          },
          {
            text: "Football",
            href: "/daynamicShowproduct/Accessories-Football",
          },
          {
            text: "Badminton",
            href: "/daynamicShowproduct/Accessories-Badminton",
          },
          {
            text: "Volleyball",
            href: "/daynamicShowproduct/Accessories-Volleyball",
          },
          {
            text: "Others",
            href: "/daynamicShowproduct/Accessories-Others",
          },
        ]}
      />
      <DropdownMenu
        label="Offer"
        items={[{ text: "No Offer Available Now", href: "#", isOffer: true }]}
      />
    </div>
  );
}

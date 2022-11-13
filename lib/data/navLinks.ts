import NavLink from "@lib/types/NavLink";

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Team",
    href: "/team",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Research",
    href: "/research",
  },
  {
    name: "PVSA",
    href: "/pvsa",
    customProps: {
      target: "_blank",
    },
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    dropdown: [
      {
        name: "Donate",
        href: "/get-involved/donate",
      },
      {
        name: "Apply or Volunteer",
        href: "/get-involved/apply",
        customProps: {
          target: "_blank",
        },
      },
    ],
  },
];

export default navLinks;

import NavLink from "@lib/types/NavLink";

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Team",
    href: "/about/team",
  },
  // {
  //   name: "About",
  //   href: "/about",
  //   dropdown: [
  //     {
  //       name: "Our Organization",
  //       href: "/about/organization",
  //     },
  //     {
  //       name: "Our Team",
  //       href: "/about/team",
  //     },
  //   ],
  // },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Research",
    href: "/research",
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

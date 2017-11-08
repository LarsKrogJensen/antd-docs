export default [
  {
    type: "section",
    title: "Introduction",
    path: "/intro",
    icon: "laptop",
    children: [
      {
        type: "doc",
        title: "Overview",
        path: "/overview",
        md: require("docs/intro/overview.md")
      },
      {
        type: "doc",
        title: "Contact",
        path: "/contact",
        md: require("docs/intro/contact.md")
      },
      {
        type: "doc",
        title: "Changelog",
        path: "/changelog",
        md: require("docs/intro/changelog.md")
      }
    ]
  },
  {
    type: "section",
    title: "Developer guide",
    path: "/dev",
    icon: "laptop",
    children: [
      {
        type: "doc",
        title: "Overview",
        path: "/overview",
        md: require("docs/dev/overview.md")
      },
      {
        type: "doc",
        title: "Domain Model",
        path: "/domain",
        md: require("docs/dev/domain.md")
      },
      {
        type: "doc",
        title: "Reference",
        path: "/ref",
        md: require("docs/dev/ref.md")
      }
    ]
  }
];

export default [
    {
        type: "section",
        title: "Introduction",
        path: "/intro",
        icon: "info-circle-o",
        children: [
            {
                type: "doc",
                title: "Overview",
                path: "/introduction",
                md: require("docs/intro/overview.md")
            },
            {
                type: "doc",
                title: "Statistics API",
                path: "/statistics",
                md: require("docs/intro/statistics.md")
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
        title: "GraphQL",
        path: "/graphql",
        icon: "laptop",
        children: [
            {
                type: "doc",
                title: "Introduction to GraphQL",
                path: "/intro",
                md: require("docs/graphql/intro.md")
            },
            {
                type: "doc",
                title: "Making requests",
                path: "/making_requests",
                md: require("docs/graphql/making_requests.md")
            },
            {
                type: "doc",
                title: "Handle errors",
                path: "/errors",
                md: require("docs/graphql/errors.md")
            },
            {
                type: "doc",
                title: "Working with variables",
                path: "/variables",
                md: require("docs/graphql/variables.md")
            },
            {
                type: "doc",
                title: "Localization",
                path: "/localization",
                md: require("docs/graphql/localization.md")
            },
            {
                type: "doc",
                title: "Pagination",
                path: "/pagination",
                md: require("docs/graphql/pagination.md")
            },
            {
                type: "doc",
                title: "Resource limitations",
                path: "/limits",
                md: require("docs/graphql/limits.md")
            },
            {
                type: "doc",
                title: "Reference",
                path: "/ref",
                md: require("docs/graphql/ref.md")
            }

        ]
    }
];

import HomePage from "../../pages/HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full marketing homepage. Renders static layout when Sanity has no site blocks; otherwise uses CMS content.",
      },
    },
  },
};

export const FullPage = {
  render: () => <HomePage />,
};

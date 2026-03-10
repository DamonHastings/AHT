import HomePageV3 from "../../pages/HomePageV3";

export default {
  title: "Pages/HomePageV3",
  component: HomePageV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete V3 therapist homepage layout. Implements therapist-homepage-v3.html design. Renders static layout by default; uses Sanity data when home page has v3 components.",
      },
    },
  },
};

export const FullPage = {
  render: () => <HomePageV3 />,
};

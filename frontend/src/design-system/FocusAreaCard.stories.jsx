import FocusAreaCard from "./FocusAreaCard";

export default {
  title: "Design System/FocusAreaCard",
  component: FocusAreaCard,
  parameters: {
    docs: {
      description: {
        component:
          "Focus area card component for displaying therapeutic specialties or areas of practice.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    icon: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    title: "Anxiety & Stress",
    description:
      "Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.",
    icon: "wave",
  },
};

export const WithoutIcon = {
  args: {
    title: "Depression",
    description:
      "Navigate through depression with evidence-based therapeutic approaches tailored to your unique needs.",
  },
};

export const ThreeCardLayout = {
  render: () => (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
      <FocusAreaCard
        title="Anxiety & Stress"
        description="Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms."
        icon="wave"
      />
      <FocusAreaCard
        title="Trauma & PTSD"
        description="Heal from traumatic experiences through compassionate, trauma-informed therapeutic approaches."
        icon="shield"
      />
      <FocusAreaCard
        title="Relationship Issues"
        description="Improve communication, build healthier connections, and navigate relationship challenges."
        icon="people"
      />
    </div>
  ),
};

export const TwoCardLayout = {
  render: () => (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
      <FocusAreaCard
        title="Life Transitions"
        description="Navigate major life changes with support and guidance during challenging transitions."
        icon="plant"
      />
      <FocusAreaCard
        title="Self-Esteem"
        description="Build confidence and develop a healthier relationship with yourself."
        icon="sparkles"
      />
    </div>
  ),
};

export const AllExamples = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Three Column Grid</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <FocusAreaCard
            title="Anxiety"
            description="Manage anxiety with proven therapeutic techniques."
            icon="brain"
          />
          <FocusAreaCard
            title="Depression"
            description="Find hope and healing through compassionate care."
            icon="sun"
          />
          <FocusAreaCard
            title="Trauma"
            description="Process and heal from past traumatic experiences."
            icon="shield"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Without Icons</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <FocusAreaCard
            title="Grief & Loss"
            description="Navigate the grieving process with understanding and support."
          />
          <FocusAreaCard
            title="Career Stress"
            description="Balance work-life demands and manage professional challenges."
          />
          <FocusAreaCard
            title="Family Issues"
            description="Strengthen family bonds and resolve conflicts effectively."
          />
        </div>
      </div>
    </div>
  ),
};

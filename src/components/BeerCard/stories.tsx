import { Story, Meta } from "@storybook/react/types-6-0";
import BeerCard from ".";

export default {
  title: "BeerCard",
  component: BeerCard,
  args: {
    name: "Trashy Blonde",
    description:
      "Japanese citrus fruit intensifies the sour nature of this German classic.",
    firstBrewed: "04/2008",
    imageUrl: "https://images.punkapi.com/v2/2.png"
  }
} as Meta<Beer>;

export const Default: Story<Beer> = (args) => (
  <div style={{ width: "30rem" }}>
    <BeerCard {...args} />
  </div>
);

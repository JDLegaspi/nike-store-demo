import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from './index';
import ExampleImageNike from 'assets/images/ExampleProductNike.png';

export default {
  title: 'Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <div style={{ width: 264 }}>
    <Product {...args} />
  </div>
);

export const Nike = Template.bind({});
Nike.args = {
  imageUrl: ExampleImageNike,
  currency: 'USD',
  productName: 'Nike Pegasus Trail 2 GORE-TEX',
  retailerUrl: 'https://www.nike.com/blablabla',
  retailerPrice: 170,
};

export const PantsOnSale = Template.bind({});
PantsOnSale.args = {
  imageUrl:
    'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.jpg',
  currency: 'USD',
  productName: 'Nike Pegasus Trail 2 GORE-TEX',
  retailerUrl: 'https://www.nikepants.com/dfsd/fs/df/sdf/sdf',
  retailerPrice: 170,
  salePrice: 85,
};

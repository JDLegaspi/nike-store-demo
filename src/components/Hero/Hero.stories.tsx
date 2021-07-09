import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from './index';

export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const NoChildren = Template.bind({});
NoChildren.args = {
  children: undefined,
};

export const FullHeader = Template.bind({});
FullHeader.args = {
  children: (
    <div>
      <h1>Nike React Sneakers</h1>
      <h2>Pay in 4 interest-free installments.</h2>
      <Flex style={{ paddingTop: 8 }}>
        <div style={{ paddingRight: 16 }}>
          <Button>Men</Button>
        </div>
        <Button>Women</Button>
      </Flex>
    </div>
  ),
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import { Header } from './index';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

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

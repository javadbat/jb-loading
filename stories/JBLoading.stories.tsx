import React from 'react';
import SpinLoading from './samples/SpinLoading';
import { JBLoading, Props } from 'jb-loading/react';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<Props> = {
  title: "Components/JBLoading",
  component: JBLoading,
};
export default meta;
type Story = StoryObj<typeof JBLoading>;

export const Normal: Story = {
  args: {

  }
};
export const Collection:Story = {
  render:()=><SpinLoading></SpinLoading>
}



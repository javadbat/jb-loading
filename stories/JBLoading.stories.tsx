import React, { type CSSProperties } from 'react';
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
    style:{width:'5rem', height:'5rem'}
  }
};
export const CustomColor: Story = {
  args: {
    style:{width:'5rem', height:'5rem', "--jb-loading-color":"var(--jb-primary)"} as CSSProperties
  }
};
export const CustomSize:Story = {
  render:()=>{
  return (
    <div className="spin-loading-page">
      <div style={{ width: '24px', height: '24px' }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{ width: '40px', height: '40px' }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{ width: '64px', height: '64px' }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{ width: '128px', height: '128px' }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{ width: '256px', height: '256px' }}>
        <JBLoading></JBLoading>
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <JBLoading></JBLoading>
      </div>
    </div>
  );
}
}



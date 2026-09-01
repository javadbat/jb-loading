import type { CSSProperties } from 'react';
import { JBLoading } from 'jb-loading/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, waitFor } from 'storybook/test';


const meta = {
  title: "Components/JBLoading",
  component: JBLoading,
} satisfies Meta<typeof JBLoading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    style:{width:'5rem', height:'5rem'}
  }
};

export const LifecycleEvents: Story = {
  args: {
    onLoad: fn(),
    onInit: fn(),
    style: { width: '5rem', height: '5rem' },
  } as unknown as Story['args'],
  play: async ({ args }) => {
    const lifecycleArgs = args as unknown as { onInit: ReturnType<typeof fn> };
    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(lifecycleArgs.onInit).toHaveBeenCalled();
    });
  },
};
export const CustomColor: Story = {
  args: {
    style:{width:'5rem', height:'5rem', "color":"#ff0000"} as CSSProperties
  }
};
export const CustomVariableColor: Story = {
  args: {
    style:{width:'5rem', height:'5rem', "--jb-loading-color":"var(--jb-primary)"} as CSSProperties
  }
};
export const CustomSize:Story = {
  render:()=>{
  return (
    <div className="spin-loading-page">
      <div >
        <JBLoading style={{ width: '1.5rem', height: '1.5rem' }}></JBLoading>
      </div>
      <div >
        <JBLoading style={{ width: '2.5rem', height: '2.5rem' }}></JBLoading>
      </div>
      <div >
        <JBLoading style={{ width: '4rem', height: '4rem' }}></JBLoading>
      </div>
      <div >
        <JBLoading style={{ width: '8rem', height: '8rem' }}></JBLoading>
      </div>
      <div >
        <JBLoading style={{ width: '16rem', height: '16rem' }}></JBLoading>
      </div>
      <div >
        <JBLoading style={{ width: '25rem', height: '25rem' }}></JBLoading>
      </div>
    </div>
  );
}
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <JBLoading size="xs" />
      <JBLoading size="sm" />
      <JBLoading size="md" />
      <JBLoading size="lg" />
      <JBLoading size="xl" />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <JBLoading color="primary" />
      <JBLoading color="secondary" />
      <JBLoading color="neutral" />
      <JBLoading color="content-inverse" />
      <JBLoading color="content-primary" />
      <JBLoading color="content-secondary" />
    </div>
  ),
};



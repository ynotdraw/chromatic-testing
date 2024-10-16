import '@crowdstrike/glide-core/button.js';
import { html, nothing } from 'lit';

export default {
  title: 'Button',
  tags: ['autodocs'],
  args: {
    disabled: false,
    variant: 'primary',
    size: 'large',
  },
  render: (args) =>
    html` <glide-core-button
      label="Label"
      size=${args.size}
      variant=${args.variant}
      ?disabled=${args.disabled || nothing}
    >
    </glide-core-button>`,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        defaultValue: {
          summary: '"primary"',
        },
        type: { summary: '"primary" | "secondary" | "tertiary"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small'],
      table: {
        defaultValue: {
          summary: '"large"',
        },
        type: { summary: '"large" | "small"' },
      },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
  },
};

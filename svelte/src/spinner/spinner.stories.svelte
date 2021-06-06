<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Spinner from "./spinner.svelte";
</script>

<Meta
  title="spinner"
  component={Spinner}
	argTypes={{
    color: {
      control: {type: 'color'}
    },
    size: {
      control: { type: "text" },
    },
    timing: {
      options: ['linear', 'bezier'],
      control: {type: 'select'}
    },
    format: {
      options: ['no-border', 'border'],
      control: {type: 'select'}
    }
	}}
/>

<Template let:args>
  <Spinner {...args}/>
</Template>

<Story
  name="spinner"
	args={{
		color: "inherit",
		size: "inherit",
		timing: "linear",
		format: "no-border",
	}}
/>

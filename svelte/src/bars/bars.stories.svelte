<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Bars from "./bars.svelte";
</script>

<Meta
  title="bars"
  component={Bars}
	argTypes={{
    color: {
      control: {type: 'color'}
    },
    size: {
      control: { type: "text" },
    },
	}}
/>

<Template let:args>
  <Bars {...args}/>
</Template>

<Story
  name="bars"
	args={{
		color: "inherit",
		size: "inherit",
	}}
/>

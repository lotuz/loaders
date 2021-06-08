<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Bubbles from "./bubbles.svelte";
</script>

<Meta
  title="bubbles"
  component={Bubbles}
	argTypes={{
    color: {
      control: {type: 'color'}
    },
    size: {
      control: { type: "text" },
    }
	}}
/>

<Template let:args>
  <Bubbles {...args}/>
</Template>

<Story
  name="bubbles"
	args={{
		color: "inherit",
		size: "inherit"
	}}
/>

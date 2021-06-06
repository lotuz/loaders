# Loading indicators (progress bar)

A minimalist library that exposes loader indicator components. The library is
first written as vanilla HTML and CSS, and then exported as framework
components.

It uses CSS variables for customization, CSS animations for progression and 
aria attributes for accessibility.

The components are written to play nice along text. It scales to `font-size: 1em`
and uses the same `color: currentColor` by default. The `--size` and `--color`
properties(CSS variables) are there to enable overriding the defaults.

## Framework table

| Components | HTML | React | Vue | Svelte |
|------------|------|-------|-----|--------|
| Spinner    | x    | x     | x   | x      |
| Bars       | x    | x     | x   | x      |

# Properties 

Not all properies apply to all components. If you are using HTML, you should
use classes.

- progress: optional value from 0 to 1 (if not present it is assumed the progress is undetermined)
- color: CSS color value
- size: CSS size value (each component scales accordingly to this prop)
- time: changes the timing for the animation
- format: subtly change the component visual

## Properties table

| Components | color   | size    | time           | format            |
|------------|---------|---------|----------------|-------------------|
| Spinner    | inherit | inherit | linear, bezier | no-border, border |
| Bars       | inherit | inherit |                |                   |

# Accessibility

This component library follows the instructions by [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
related to the "progress bar" role.

# Priorities

- Accessible
- Minimal size
- HTML first 
- Customizable

# License

Not licensed yet

# Motivation to create this

- Creating a small dependency that renders a beautiful loader indicator
- Experiment writing the same component in multiple frameworks
- Experimenting with storybook composition 


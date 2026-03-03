---
layout: 'layouts/default.njk'
title: 11ty + Twind
---

{%- from 'macro.button.njk' import button -%}
{%- from 'macro.dialog.njk' import dialog -%}

<p class="mb-12 text-center">{{ button({
  href: 'https://github.com/craigerskine/11ty-twind/',
  outline: true,
  slot: 'Source',
  icon: 'mdi:github'
}) }}</p>

<article class="{{ site.prose }}">

***

## Intro heading

Twind is Tailwind but without the build step. It also comes with a ton of cool options for stuff like auto-dark, grouping, arbitrary one-offs, and much much more. And since it's live, you can do stuff like partial class assembly `:class="'bg-'+ color +'-500/'+ opacity"` { .lead }

**Included in this kit are examples of [parameterized components/macros](https://github.com/craigerskine/11ty-twind/blob/main/_site/_includes/macro.button.njk):**

```twig{% raw %}
{# _includes/macro.button.njk #}
{%- macro button(param) -%}
  <button{{ param.props | safe }} class="py-1.5 px-3 bg-{{ param.color }}-500 text-black/90 inline-flex ...youGetTheIdea">
    {{ param.slot | safe }}
    {%- if param.icon %}<iconify-icon icon="{{ param.icon }}" noobserver></iconify-icon>{%- endif %}
  </button>
{%- endmacro -%}

{# _site/some-page.njk #}
{%- from 'macro.button.njk' import button -%}
{{ button({
  color: 'orange',
  icon: 'mdi:check',
  props: ' aria-label="check"'
}) }}
{% endraw %}```

## Button component with a bunch of different prop option examples

{{ button({
  color: 'pri',
  slot: 'Contained'
}) }} {{ button({
  outline: true,
  color: 'sec',
  slot: 'Outline'
}) }} {{ button({
  ghost: true,
  color: 'neutral',
  slot: 'Ghost'
}) }} {{ button({
  color: 'green',
  outline: true,
  sharp: true,
  slot: 'Sharp'
}) }} {{ button({
  color: 'fuchsia',
  icon: 'mdi:login',
  reverse: true,
  slot: 'w/Icon'
}) }} {{ button({
  color: 'orange',
  icon: 'mdi:tailwind',
  circle: true,
  props: ' x-tooltip="\'Circle\'" aria-label="Tailwind CSS"'
}) }} {{ button({
  color: 'emerald',
  icon: 'mdi:tailwind',
  props: ' x-tooltip="\'Square\'" aria-label="Tailwind CSS"'
}) }} {{ button({
  color: 'neutral',
  slot: 'Truncate super long button labels like this'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: 'XS',
  size: 'xs'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: 'SM',
  size: 'sm'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: 'Base'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: 'LG',
  size: 'lg'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: 'XL',
  size: 'xl'
}) }} {{ button({
  color: 'zinc',
  outline: true,
  slot: '2XL',
  size: '2xl'
}) }} { .p-8 .flex .flex-wrap .items-center .justify-center .gap-3 }

## Alpine.js Modal/Dialog

<div class="text-center">
{{ button({
  color: 'yellow',
  outline: true,
  slot: 'Open Dialog',
  props: ' @click="$refs.myDialog.showModal()"'
}) }}
{{ dialog({
  ref: 'myDialog',
  title: 'Dialog title',
  slot: 'This uses the HTML `dialog` tag so it automatically comes with full accessibility. Press `ESC` to close, click the backdrop to close, default browser focus trap, no scrolling on background when open, etc.'
}) }}
</div>

## Alpine.js Anchor

<div class="mx-auto w-fit" x-data="{ open: false }" @click.outside="open = false" @keyup.escape.window="open = false">
{{ button({
  color: 'sky',
  outline: true,
  slot: 'Toggle',
  icon: 'mdi:chevron-down',
  props: ' x-ref="toggle" @click="open = !open" :aria-expanded="open" :class="\'[&[aria-expanded=true]_.icon]:(rotate-180)\'"'
}) }}
<div x-show="open" x-transition x-anchor.bottom-start.offset.10="$refs.toggle">
  <ul class="m-0 p-2 border-(1 gray-500/20) w-52 bg-gray-100 flex-(& col) gap-2 list-none rounded-xl [&>li]:(m-0 p-0)">
    <li><a href="#" @click.prevent="open = false" class="p-2 block no-underline rounded-lg transition hover:(bg-gray-500/10)">Click outside</a></li>
    <li><a href="#" @click.prevent="open = false" class="p-2 block no-underline rounded-lg transition hover:(bg-gray-500/10)">Press escape</a></li>
    <li><a href="#" @click.prevent="open = false" class="p-2 block no-underline rounded-lg transition hover:(bg-gray-500/10)">Select item</a></li>
  </ul>
</div>
</div>

***

### Some Typography

> Commodo irure laboris incididunt anim veniam non ea et nisi ea. Nostrud pariatur ipsum aliqua sit consequat occaecat velit enim enim ex consectetur anim sunt id.

Non pariatur excepteur ut laboris ut. Consectetur reprehenderit id aute et eu et est deserunt ipsum laborum cillum cupidatat. Ad aliqua et pariatur pariatur consectetur magna non eiusmod commodo veniam fugiat. Mollit commodo commodo adipisicing culpa officia veniam proident ut sint reprehenderit culpa culpa est mollit. Nisi incididunt ipsum qui in amet enim sint dolore elit eiusmod est.

* List item
* List item
  * Nested item
  * Nested item
* List item

Aute excepteur officia sunt veniam tempor consequat do do nisi ullamco laboris. Nisi irure laboris sint veniam. Deserunt aute irure in sit.

</article>

---
layout: 'layouts/default.njk'
title: 11ty + Twind
---

{%- from 'macro.button.njk' import button -%}

<article class="{{ site.prose }}">

## Intro heading

Twind is Tailwind but without the build step. It also comes with a ton of cool options for stuff like auto-dark, grouping, arbitrary one-offs, and much much more. And since it's live, you can do stuff like partial class assembly `:class="'bg-'+ color +'-500/'+ opacity"` { .lead }

**Included in this kit is also an example of a [parameterized component](https://github.com/craigerskine/11ty-twind/blob/main/_site/_includes/macro.button.njk):**

```twig{% raw %}
{# _includes/macro.button.njk #}
{%- macro button(param) -%}
  <button{{ param.props | safe }} class="py-1.5 px-3 bg-{{ param.color }}-500 text-black/90 inline-flex ...youGetTheIdea">
    {{ param.slot | safe }}
    {%- if param.icon %}<iconify-icon icon="{{ param.icon }}"></iconify-icon>{%- endif %}
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
  color: 'fuchsia',
  icon: 'mdi:login',
  reverse: true,
  circle: true,
  slot: 'Icon + Label'
}) }} {{ button({
  color: 'orange',
  icon: 'mdi:check',
  circle: true,
  props: ' aria-label="check"'
}) }} {{ button({
  color: 'neutral',
  slot: 'Truncate super long button labels like this'
}) }} { .p-8 .flex .flex-wrap .items-center .justify-center .gap-3 }

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
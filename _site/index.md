---
layout: 'layouts/default.njk'
title: 11ty + Twind
---

{%- from 'macro.button.njk' import button -%}

<article class="prose prose-a:(text-pri-500) prose-headings:(text-wrap-balance) prose-pre:(bg-gray-800 dark:bg-gray-800) mx-auto max-w-4xl">

## Intro heading

Incididunt exercitation excepteur eu laboris qui et velit exercitation fugiat ut esse. Proident officia deserunt deserunt dolore eu excepteur id sit ex in adipisicing minim. Nisi consectetur est elit consectetur anim in elit quis esse. { .lead }

**Here's an example of a [parameterized component](https://github.com/craigerskine/11ty-twind/blob/main/_site/_includes/macro.button.njk):**

{{ button({
  color: 'pri',
  slot: 'Primary'
}) }} {{ button({
  outline: true,
  color: 'sec',
  slot: 'Secondary'
}) }} {{ button({
  ghost: true,
  color: 'neutral',
  slot: 'Ghost'
}) }} {{ button({
  color: 'orange',
  icon: 'mdi:check',
  circle: true,
  reverse: true,
  props: ' aria-label="check"'
}) }} {{ button({
  color: 'neutral',
  slot: 'Truncate super long button labels like this'
}) }} { .p-8 .flex .flex-wrap .items-center .justify-center .gap-3 }

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

***

### Another heading

> Commodo irure laboris incididunt anim veniam non ea et nisi ea. Nostrud pariatur ipsum aliqua sit consequat occaecat velit enim enim ex consectetur anim sunt id.

Non pariatur excepteur ut laboris ut. Consectetur reprehenderit id aute et eu et est deserunt ipsum laborum cillum cupidatat. Ad aliqua et pariatur pariatur consectetur magna non eiusmod commodo veniam fugiat. Mollit commodo commodo adipisicing culpa officia veniam proident ut sint reprehenderit culpa culpa est mollit. Nisi incididunt ipsum qui in amet enim sint dolore elit eiusmod est.

* List item
* List item
  * Nested item
  * Nested item
* List item

Aute excepteur officia sunt veniam tempor consequat do do nisi ullamco laboris. Nisi irure laboris sint veniam. Deserunt aute irure in sit.

</article>
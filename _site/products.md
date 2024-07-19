---
layout: 'layouts/default.njk'
title: Products
eleventyNavigation:
  title: Shop
  order: 1
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
---

{%- from 'macro.list.njk' import list, listItem -%}

{%- set products -%}
{%- for item in collections.product -%}
{%- set i -%}
<div class="group w-full h-full bg-white relative rounded-lg shadow-lg dark:(bg-pri-500/5)">
  <figure>
    <img src="https://picsum.photos/id/{{ item.data.img }}/400/300" alt="{{ item.data.title }} photo" class="w-full h-48 object-(cover center) rounded-t-lg motion-safe:(transition-all) group-hover:(object-bottom)" />
    <figcaption class="p-6 space-y-1">
      <a href="{{ item.url | url }}" class="text-(lg pri-600) leading-tight font-semibold inline-block [&:after]:(w-full h-0.5 bg-current block opacity-50 scale-0 motion-safe:(transition) content-['']) [&:hover:after,&:focus:after]:(scale-100)">
        {{ item.data.title }}
        <span class="absolute inset-0 rounded-lg motion-safe:(transition) group-hover:(ring-(& pri-600/50))" aria-hidden="true"></span>
      </a>
      <div class="line-clamp-2 text-sm">{{ item.content | safe }}</div>
      <div class="pt-3 flex items-end justify-between">
        <strong class="text-xl">${{ item.data.price }}</strong>
        <ul class="flex items-center justify-end">
          {%- for i in range(0, 5) %}
          {%- if item.data.rating >= loop.index %}
          <li><iconify-icon icon="mdi:star" inline width="20px" height="20px" class="iconify text-yellow-500"></iconify-icon></li>
          {%- else %}
          <li class="opacity-30"><iconify-icon icon="mdi:star-outline" inline width="20px" height="20px" class="iconify"></iconify-icon></li>
          {%- endif %}
          {%- endfor %}
        </ul>
      </div>
    </figcaption>
  </figure>
</div>
{%- endset -%}
{{ listItem({slot: i}) }}
{%- endfor -%}
{%- endset -%}

{{- list({slot: products}) -}}
---
title: HTML
---

# HTML разметка

## Теги в HEAD
- [MDN](https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta)
- [https://gethead.info/](https://gethead.info/)
- [Habr](https://habr.com/post/72141/)

## Навигация сайта
Список ссылок сайта обязан быть тегом `ul|ol` а все ссылки должны вложены в пункты списка `li`. Для семантичности верстки и большего веса в SEO главная навигация сайта должна быть тегом `nav`.
 
```html
<nav>
    <ul>
        <li><a href="#">Ссылка 1</a></li>
        <li><a href="#">Ссылка 1</a></li>
        <li><a href="#">Ссылка N</a></li>
    </ul>
</nav>

<!-- C микроразметкой -->
<nav>
    <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
        <li itemprop="name"><a itemprop="url" href="#">Ссылка 1</a></li>
        <li itemprop="name"><a itemprop="url" href="#">Ссылка 1</a></li>
        <li itemprop="name"><a itemprop="url" href="#">Ссылка N</a></li>
    </ul>
</nav>
```
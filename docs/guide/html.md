---
title: HTML
---

# HTML

## Статьи

- [WebP сегодня: зачем и как?](https://medium.com/web-standards/webp-%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F-%D0%B4%D0%BB%D1%8F-%D1%87%D0%B5%D0%B3%D0%BE-%D0%B8-%D0%BA%D0%B0%D0%BA-4f64d4330f8d)
- [Optimising the Fonts on My Website](https://gregives.co.uk/blog/optimising-the-fonts-on-my-website/)

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
---
title: Нюансы
---

# Нюансы

## CSS

### -webkit-overflow-scrolling: touch

Это css-свойство добавит плавный скролл в блоках с overflow: scroll. Рекомендую добавлять это свойство везде, где внутри блока может возникать прокрутка, к примеру, в мобильном меню.

```css
.ov-scroll {
	overflow-y: auto;
	-webkit-overflow-scrolling:touch;
}
```

### -webkit-text-size-adjust: none

Отключает масштабирование текста в горизонтальной ориентации.

```css
body {
	-webkit-text-size-adjust: none;
}
```

### -webkit-tap-highlight-color: #ccc

Устанавливает цвет выделения активного элемента при тапе на нем (a, label). По умолчанию это серый цвет, и часто может быть ни к чему, или выбиваться из общего дизайна.

```css
a, label {
	-webkit-tap-highlight-color: transparent;
}
```

### -webkit-appearance: none

Отключает наложение на элементы стилей системы: тени, border-radius и т.д. Применяется для input (но не всех), textarea, и т.д. Удобно, когда надо задать единый вид элементов на всех устройствах. Применяется не только в верстке для Safari.

```css
input[type=text], input[type=submit], textarea {
	-webkit-appearance: none;
} 
```

### -webkit-touch-callout

Это свойство позволяет вам диктовать поведение браузера в момент тапа и удержания пальца на ссылке. По умолчанию в браузерах всплывает окно, содержащее информацию о ссылке. По умолчанию у этого свойства выставлено значение default, но установив значение none окошко с информацией всплывать не будет.

```css
a.js-only {
  -webkit-touch-callout: none;
}
```

Это свойство полезно применять в тех случаях когда на ссылку повешен какой-либо JavaScript/AJAX.

### background-attachment: fixed

**Проблема:** background-attachment: fixed не работает в iOS Safari. \
**Решение:** Фиксировать не фон, а блок или псевдоэлемент.

```css
body:before {
    content: '';
    background-image: url(...);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
}
```

### Блок с position: fixed при скролле

**Проблема:** При скролле в браузере изменяется высота экрана. Отсюда, если при раскрытом меню или модальном окне не блокировать скролл, возникает подобный эффект \
**Решение:** Нужно сделать следующий «трюк», используя transform.

```css
.element {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: -70px;
	padding-bottom: 70px;
	transform: translateY(70px);
}
```

Величина в 70px покрывает разницу в изменении высоты окна. И только transform позволяет прорисовывать фон элемента за пределами экрана в данной ситуации.
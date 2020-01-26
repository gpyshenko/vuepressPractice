---
title: Git
---

# Git

Для установки гита на компьютер если у вас `Mac` достаточно написать в консоли

```shell
brew install git
```

Под линуксом с `Ubuntu` вы должны написать

```bash
sudo apt-get install git
```
Если у вас `Windows`, то качаете гит отсюда [http://msysgit.github.io](http://msysgit.github.io)

## Команды

#### *Инициализация*

```bash
git init
```
эта команда инициализирует гит в этой папке и дает возможность использовать в ней гит. Так же вы можете увидеть, что в этой папке появилась папка .git, где собственно и находятся все файлы гита этого проекта.

#### *Просмотр статуса*

```bash
git status
```

Команда позволяет увидеть изменения в нашем гит репозитории.

#### *Добавление и слежение за файлами*

```bash
git add
```

Команда добавляет файлы в гит и указывает следить гит за их изменениями.

#### *Добавление и слежение за файлами*

```bash
git remote add origin https://github.com/monsterlessons/learning_git.git
```

#### *Добавление и слежение за файлами*

```bash
git remote -v
```

#### *Добавление и слежение за файлами*

```bash
git push -u origin master
```

#### *Добавление и слежение за файлами*

```bash
git pull
```

#### *Добавление и слежение за файлами*

```bash
git push
```

[https://monsterlessons.com/project/lessons/zalivaem-git-repozitorij-na-githab](https://monsterlessons.com/project/lessons/zalivaem-git-repozitorij-na-githab)

## Статьи

- [10 Git-команд, которые стоит знать разработчику](https://m.habr.com/ru/company/skillbox/blog/442260/)
- [Как генерировать осмысленные коммиты. Применяем стандарт Conventional Commits](https://m.habr.com/ru/company/yandex/blog/431432/)
- [Create a new branch with git and manage branches](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
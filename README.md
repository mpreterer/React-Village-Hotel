# Toxin

Цель данного проекта: Изучить React, Redux, Mobx

Описание проекта Toxin: сайт отеля с возможностью выбора и бронирования определенного номера.

Проект состоит из 3 модулей(страниц):

1. Модуль Main. В нем всего 1 страница - главная. Адрес - /
2. Модуль Rooms. Состоит из 3 страниц. Страница с выбором номера и фильтрами и страница конкретного номера, страница мои номера
3. Модуль Auth. Состоит из 3 страниц: вход, регистрация, забыли пароль.

# Про тех. реализацию проекта

Приложение сделано на базе [react](https://reactjs.org/) в качестве базовой архитектуры использовали [react create app c typescript](https://create-react-app.dev/docs/adding-typescript/). Для статической типизации использовать typescript.  

Для управления данными приложения использовалась библиотека [redux](https://redux.js.org/)

В качестве сервера использовали сервис firebase.

При разработке проекта следовали стандартам metalamp https://github.com/fullstack-development/front-end-best-practices

# Запуск проекта

### Распаковка
Клонировать
>```git clone https://github.com/mpreterer/React-Village-Hotel```

Установить
>```npm i```
---

Запустить проект
>```npm run start```
---

Запустить eslint
>```npm run eslint```
---

Запустить eslint фикс
>```npm run eslint:fix```
---

Запустить stylelint
>```npm run stylelint```
---

Запустить фикс для стилей
>```npm run stylelint:fix```
---

Запустить e2e тесты
>```npm run e2e```
---

Запустить unit тесты
>```npm run test```

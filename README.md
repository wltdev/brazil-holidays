<p align="center">
  <img src="https://media.tenor.com/bN3aaQKCbV8AAAAC/bulldog-riding.gif">
</p>

<br />

<h2 align="center">Brazil Holidays lib</h2>

<br />

### This Lib return all Brazil holidays

<br />

### Instalation

#### npm

```
$ npm install --save brazil-holidays
```

#### yarn

```
$ yarn add brazil-holidays
```

#### Get all national holidays

```js
import { getNationalHolidaysByYear } from 'brazil-holidays';

getNationalHolidaysByYear(2023).then(console.log);

// [
//   {
//     "date": "2023-01-01",
//     "name": "Confraternização mundial",
//     "type": "national"
//   },
//   {
//     "date": "2023-02-21",
//     "name": "Carnaval",
//     "type": "national"
//   },
//   ...
// ]
```

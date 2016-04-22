# javascript-racer-tutorial
build a two player racing game with HTML, CSS and Javascript.

1. create index.html:
```
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <title>Javascript Racer</title>
    <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/3.0.2/normalize.css">
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="index.js"></script>
  </head>
  <body>
    <table class="racer_table">
      <tr id="player1_strip">
        <td class="active"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr id="player2_strip">
        <td class="active"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
```

1. create index.css:
```
.racer_table td {
  background-color: LightGrey;
  height: 100px;
  width: 100px;
}

.racer_table td.active {
  background-color: black;
}
```

1. create index.js:
```
document.addEventListener('DOMContentLoaded',     function() {
}
  ```

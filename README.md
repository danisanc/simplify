# Simplify

A simple css lib for build css structures usiging flexbox.

## Features

- Grid
- Form
- Table
- Responsive

## Grid system

![Grid](https://i.imgur.com/u8bmqnw.png)

```html
<div class="container">
      <h1>Grid example</h1>

      <div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
      </div>

      <div class="row">
          <div class="col">col</div>
      </div>

      <div class="row">
          <div class="col-4">col-4</div>
          <div class="col-4">col-4</div>
          <div class="col-4">col-4</div>
          <div class="col-4">col-4</div>
      </div>

      <div class="row">
          <div class="col-2">col-2</div>
          <div class="col-2">col-2</div>
      </div>
  </div>
```

## Forms

![Form](https://i.imgur.com/JeNV6mN.png)

```html
<div class="container">
    <h1>Form Example</h1>
    <form action="" class="form form--bordered">
        <div class="form-group-2">
            <label for="name">Full name</label>
            <input type="text" name="name">
        </div>

        <div class="form-group-2">
            <label for="email">Email</label>
            <input type="text" name="email">
        </div>

        <div class="form-group-1">
            <label for="select">Select</label>
            <select name="select">
                <option value="1">1</option>
            </select>
        </div>

        <div class="form-group-1">
            <label for="description">Description</label>
            <textarea name="description"></textarea>
        </div>

        <div class="form-actions">
            <button class="form-button form-button--normal">Voltar</button>
            <button class="form-button form-button--no">Cancelar</button>
            <button class="form-button form-button--yes">Enviar</button>
        </div>
    </form>
</div>
```

## Tables

![Table](https://i.imgur.com/eKcVpY2.png)

```html
<div class="container">
    <h1>Table example</h1>
    <table class="table table--striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Base Tech</th>
                <th>Launch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Vue.js</td>
                <td>Community</td>
                <td>2014</td>
            </tr>
            <tr>
                <td>React.js</td>
                <td>Facebook</td>
                <td>2013</td>
            </tr>
            <tr>
                <td>AngularJS</td>
                <td>Google</td>
                <td>2010</td>
            </tr>
        </tbody>
    </table>
</div>
```

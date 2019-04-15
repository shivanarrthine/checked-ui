# checked
#### A collection of styles for checkbox and radio inputs made purely with CSS.

### How to use?
Add `checked.min.css` to your project.

Add relevant classes based on the checkbox style you want.

#### Classic
```html
<div class=“checked-boxes”>
  <input name="desserts" id="dessert1" type=“checkbox” value=“yes”>
  <label for="dessert1">Ice Cream</label>
</div>
```

#### Boxes
```html
<div class=“checked-boxes”>
  <input name="awesome" id="awesomeY" type=“radio” value=“yes”>
  <label for="awesomeY">Yes!</label>
</div>
```

#### Circle
```html
<div class=“checked-circle”>
  <input name="theme" id="theme-dark" type=“radio” value=“dark”>
  <label for="theme-dark"><i class="fa fa-moon"><i></label>
</div>
```

#### Tiles
```html
<div class=“checked-tiles”>
  <input name="awesome" id="awesomeY" type=“radio” value=“yes”>
  <label for="awesomeY">Yes!</label>
</div>
```

#### Bubbles
Use `checked-bubble` to display options as bubbles with the sizes calculated either automatically (by adding `wrapper-bubbles--auto` to wrapper div) or defined (by adding `md` or `lg` to bubble div).

Bubbles have a default filled style, to get unselected bubbles to appear as outlines use `checked-bubble--outline`.
```html
<div class=“wrapper-bubbles wrapper-bubbles--auto”> 
  <div class=“checked-bubble”> 
    <input name="icecream" id="d-icecream" type=“checkbox” value="icecream">
    <label for="d-icecream">Ice cream</label>
  </div>
  ...
</div>
```


#### Rating
Add `checked-rating--scale` to get a scale of colours
```html
<div class=“checked-rating”> 
  <input name="L" id="size-large" type=“radio” value=“L”> 
  <label for="size-large">L</label> 

  <input name="M" id="size-medium" type=“radio” value=“M”> 
  <label for="size-medium">L</label> 

  <input name="S" id="size-small" type=“radio” value="S"> 
  <label for="size-small">L</label> 
</div>
```


### How to contribute?
Run `npm build` to watch scss file changes

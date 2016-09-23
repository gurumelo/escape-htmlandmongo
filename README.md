##English version
This module escapes mongo injections: $ and .

In the other hand, also escapes for prevent xss injections: & " ' > < / `

And converts to ascii code

### Installing

```
npm install escape-htmlandmongo --save
```

### Using

```
var escape = require('escape-htmlandmongo');

var limpito = escape.esc('$ne: <script>alert(1)</script> juanker');

console.log(limpito);
```


##Castillan version
Este módulo escapa inyecciones mongo, de cadenas que comiencen con: $ y .

Por otra parte, también escapa caracteres usuales en html, usados para hacer inyecciones xss:  & " ' > < / `

Y los convierte, en vez de descartarlos, a notación ascii html.

### Installing

```
npm install escape-htmlandmongo --save
```

### Using

```
var escape = require('escape-htmlandmongo');

var limpito = escape.esc('$ne: <script>alert(1)</script> juanker');

console.log(limpito);
```


Basado en validator js, mongo-sanitize y express-mongo-sanitize e intento de aunarlos

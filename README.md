# AppTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Algunas funciones básicas para pruebas con Jasmine y Karma
* `describe()` = Definir un conjunto de pruebas
* `it()` = Definir una prueba personalizada
`expect` =  permite comaparar las respuestas esperadas con las respuestas definidas junto con otras funciones como `toBe`, `contains` entre otras
* `toBe()` = Permite comprobar el tipo de dato
* `toContain()` = Permite comprobar si un valor forma parte de la respuesta
* `toBeTruthy()` = permite comprobar expresiones booleanas (TRUE)
* `toBeFalse()` = permite comprobar expresiones booleanas (FALSE) 
* `.not.toBeTruthy()` = tiene la misma función que `toBeFalse()`
* `toBeGreaterThanOrEqual(num)` = permite saber si dentro de un arreglo hay num o mas en ese arreglo, por ejemplo si en num = 3, entonces le digo que si tiene el arreglo mas de tres valores pase la prueba
* `beforeAll()` = se ejecuta antes de todas las pruebas una sola vez
* `beforeEach()` = se ejecuta antes de cada prueba definida, se ejecuta tantas veces se acuerdo al número de pruebas
* `afterAll()` = se ejecuta al final de todas las puedas una sola vez
* `afterEach()` = se ejecuta al final de cada prueba.

### Comando para crear el coverage de las pruebas y visualizar los Statements, branchs, functions, lines
`ng test --code-coverage`
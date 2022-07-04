Entrega final

1 - instalar python https://www.python.org/

2 - abrir la terminal en la carpeta del proyecto y crear el entorno virtual (python -m venv .env)

3 - Activar el entorno virtual  => .env\Scripts\activate.bat

4 - instalar django y djangorestframework => pip install Django djangorestframework

5- instalar => pip install django-cors-headers

6 - correr el servidor de desarrollo local=> python Backend-Django\manage.py runserver (el servidor correra en http://localhost:8000 o http://127.0.0.1:8000)

7 - abrir postman y probar los diferentes endpoints

8 - login y registro de usuario (http://localhost:8000/api/auth/login/, http://localhost:8000/api/auth/register/ ambos son peticiones POST)

funciones de admin disponibles mediante prueba en postman 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

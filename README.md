# DESAFÍO BSALE – Luis Martin Labato

## Introducción
La arquitectura de la aplicación posee tres capas:
-	Base de datos: MySQL (provista por BSale)
-	Back End: Escrito en JavaScript, utiliza Express para el ruteo y montado del servidor y Sequelize para conectarse con la database.
-	Front End: Escrito en HTML y vanilla JavaScript. El estilado se ha realizado con el framework de CSS “Tailwind.css”.

## Funcionalidades

### Back End

Se encuentra desarrollado con Express.js, con el archivo app.js como “entry point”, un router y dos controladores que contienen los endpoints. Se ha utilizado Sequelize como ORM para efectuar las consultas en la database. Para ello se crearon dos modelos, uno por cada tabla (“product” y “category”).

Ofrece dos endpoints:

GET Lista de Productos

GET “/” retorna el listado total de productos ordenados por categoría. No recibe parámetros.

Tras efectuarse la consulta en la database mediante el método findAll() de Sequelize, retorna un array de objetos, el cual luego es ordenado por categoría para ser incluido en la respuesta a la llamada.

RESPUESTA:

![response](https://i.ibb.co/F35f7Sb/products.jpg)



POST Búsqueda de productos

POST “/search” retorna el listado de productos que coinciden con el término de búsqueda ingresado. Recibe un “body”, en el cual se incluye el mencionado término.

Tras efectuarse la consulta en la database mediante el método findAll() y el operador Or de Sequelize, retorna un array de objetos, uno por cada producto que cumple con la condición dispuesta en el operador Or (en este caso la coincidencia con el campo “name” del producto).

RESPUESTA:

![response](https://i.ibb.co/87drzFv/search.jpg)


### Front End
Para el montado de la página web se ha utilizado HTML y para el manejo de eventos y del DOM se ha optado por vanilla JavaScript. 
Ofrece dos vistas: la “home” y la de resultados de la búsqueda. 
La navegación entre las mismas se ha realizado a través del método “href” de la interfaz “location” (window.location.href). 
Para mantener la información de búsqueda al navegar se ha almacenado la respuesta del back end en la propiedad sessionStorage.
Las consultas al back end se efectúan mediante peticiones GET y POST con la api fetch().

En el caso de la consulta efectuada a partir de la utilización de la barra de búsqueda, se “captura” la búsqueda a partir del “value” ingresado en el “input” y luego se incluye el mismo en el “body” de la petición POST.

Finalmente, el estilado de la página se ha efectuado con Tailwind.css, un framework de CSS.

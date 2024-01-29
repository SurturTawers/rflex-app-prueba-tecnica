# rFlex.io-Fluctuación del dólar APP
```shell
git clone https://github.com/SurturTawers/rflex-app-prueba-tecnica.git app
cd app && cp .env.example .env
```
## Tecnologías
* Node 20.9.0
* React 18.2
* Vite 5.0.8
* React Redux 5 (latest)
* Material UI 5.15

## Ejecución
```shell
npm i
npm run dev
```
* http://localhost:5173

## Implementación

![Interfaz gráfica](./Screenshot%20from%202024-01-29%2013-39-41.png   "Intefaz Gráfica")

* Se ha optado por utilizar material UI como design system acorde a lo utilizado en rFlex
* Se ha optado por utilizar Redux por sobre Context, esto por:
  * La estructura de componentes definida dificulta el uso de context
  * Redux entrega la posibilidad de modificar el estado y que esto se vea reflejado en multiples componentes
  * Por la forma en que se entregan los datos desde la API, es necesario realizar operaciones de formato sobre las fechas
  * El requerimiento de editar y eliminar un registro desde la tabla y que se vea reflejado en el gráfico es más simple
* Se ha utilizado rechartsjs para el gráfico por su simplicidad, interfaz gráfica y personalización necesaria para cumplir con los requerimientos

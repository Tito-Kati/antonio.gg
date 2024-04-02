# Tetris en 40 minutos

## Introducción

Inspirada en un reto compartido en el post viral de Gabriel Benmergui, que resalta la complejidad de desarrollar un
Tetris en tan solo 40 minutos, esta kata propone un enfoque más acotado con la idea de practicar TDD.

![
Post de @Conanbatt: La entrevista mas dura de frontend que jamás me hicieron fue hacer un Tetris en 40 minutos.
](/katas/40-minute-tetris/gabriel-post.png){class=mx-auto}

Aunque la tarea original parece una montaña insuperable, vamos a centrarnos en cómo, con un entendimiento claro de los
requisitos y una aplicación meticulosa del TDD, podemos abordar con éxito desafíos complejos.

## Instrucciones

Queremos una función o método que dado un [tetrominó][tetromino-wiki], sea capaz de obtener su forma rotada 90 grados.

- Serán dos funciones o métodos, una nos permitirá rotar el tetrominó hacia la derecha (dirección a las agujas del
  reloj) y la otra nos permitirá rotarlo hacia la izquierda (dirección opuesta a las agujas del reloj).
- Las funciónes o métodos recibirán un tetrominó como argumento y devolverán el tetrominó rotado como respuesta.
- Puedes representar un tetrominó de la forma que quieras, por ejemplo con un string, una matriz de booleanos, un VO...
- Necesitaremos alguna forma sencilla para crear cualquiera de los distintos tetrominós que existen.

## Tetrominós

Tetris utiliza siete tetrominós, de los cuales dos de ellos son la forma reflejada de otros dos. Estos están compuestos
por cuatro cuadrados iguales, conectados entre sí de forma ortogonal.

A cada tetrominó se le conoce con una letra, que es la que más recuerda a su forma, puedes utilizar estos nombres en tu
código.

|            I             |            O             |            T             |            J             |            L             |            S             |            Z             |
| :----------------------: | :----------------------: | :----------------------: | :----------------------: | :----------------------: | :----------------------: | :----------------------: |
| ![][i-img]{class=m-auto} | ![][o-img]{class=m-auto} | ![][t-img]{class=m-auto} | ![][j-img]{class=m-auto} | ![][l-img]{class=m-auto} | ![][s-img]{class=m-auto} | ![][z-img]{class=m-auto} |

## Ejemplos

- Rotamos el tetrominó T a la izquierda:
  ```
  Input:        Output:
   #             #
  ###           ##
                 #
  ```
- Rotamos el tetrominó Z a la derecha
  ```
  Input:        Output:
  ##             #
   ##           ##
                #
  ```
- Rotamos el tetrominó L dos veces a la izquierda
  ```
  Input:        Output:
  #             ##
  #              #
  ##             #
  ```
- Rotamos el tetrominó O a la derecha
  ```
  Input:        Output:
  ##            ##
  ##            ##
  ```

[tetromino-wiki]: https://es.wikipedia.org/wiki/Tetrominó
[i-img]: /katas/40-minute-tetris/tetromino-i.svg
[o-img]: /katas/40-minute-tetris/tetromino-o.svg
[t-img]: /katas/40-minute-tetris/tetromino-t.svg
[j-img]: /katas/40-minute-tetris/tetromino-j.svg
[l-img]: /katas/40-minute-tetris/tetromino-l.svg
[s-img]: /katas/40-minute-tetris/tetromino-s.svg
[z-img]: /katas/40-minute-tetris/tetromino-z.svg

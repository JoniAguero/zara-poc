# Aplicación Marvel

## Descripción

La Aplicación Marvel es una plataforma donde se muestran los héroes de Marvel utilizando la API proporcionada por Marvel Developer Portal. Esta aplicación permite a los usuarios explorar una amplia gama de personajes icónicos del universo Marvel, obteniendo información detallada sobre cada héroe y sus comics.

## Ejecución de la Aplicación

Para ejecutar la aplicación Marvel en tu entorno local, sigue estos pasos:

1. Clona este repositorio a tu máquina local utilizando el siguiente comando:

- git clone https://github.com/JoniAguero/zara-poc.git

2. Accede al directorio del proyecto:

- cd zara-poc

3. Instala las dependencias del proyecto utilizando npm o yarn:

- npm install

4. Inicia la aplicación:

- npm start

5. La aplicación estará disponible en tu navegador en la dirección [http://localhost:3000](http://localhost:3000)

## Obtención de las API Keys de Marvel

Para utilizar la API de Marvel en esta aplicación, necesitarás obtener las API keys proporcionadas por Marvel Developer Portal. Sigue estos pasos para obtener tus propias API keys:

1. Visita el [Marvel Developer Portal](https://developer.marvel.com/) y crea una cuenta o inicia sesión si ya tienes una.

2. Después de iniciar sesión, ve a la sección "Get A Key" en el menú de la izquierda.

3. Haz clic en el botón "Get Started" para crear un nuevo perfil de desarrollador.

4. Completa el formulario de registro con la información requerida y acepta los términos y condiciones.

5. Una vez que hayas completado el registro, recibirás un correo electrónico de confirmación. Haz clic en el enlace de confirmación para verificar tu dirección de correo electrónico.

6. Después de confirmar tu correo electrónico, podrás acceder a tu panel de desarrollador en el portal de Marvel.

7. En tu panel de desarrollador, encontrarás tus API keys en la sección "My Applications". Verás dos claves: una clave pública y una clave privada. Estas son tus API keys que necesitarás utilizar para acceder a la API de Marvel desde tu aplicación.

8. Copia y guarda tus API keys en un lugar seguro. No compartas estas claves públicamente para evitar su uso indebido.

Una vez que hayas obtenido tus API keys, puedes configurar tu aplicación para utilizarlas y comenzar a acceder a la API de Marvel para obtener información sobre los héroes, cómics y más.

## Arquitectura y Estructura

La Aplicación Marvel está construida utilizando Next.js como biblioteca de interfaz de usuario y consume la API proporcionada por Marvel Developer Portal para obtener información sobre los héroes de Marvel. La aplicación sigue una arquitectura hexagonal, que permite una separación clara entre la lógica de negocio y la infraestructura. Esto facilita la escalabilidad y el mantenimiento del código a largo plazo.

Además de Next.js, se utilizan servicios de blur de imagen para mejorar la experiencia visual de la aplicación al cargar imágenes de manera progresiva. También se implementa un sistema de mapping de datos para transformar y adaptar la información obtenida de la API de Marvel a las necesidades específicas de la interfaz de usuario.

La aplicación sigue una arquitectura de componentes, donde cada componente está diseñado para manejar una parte específica de la interfaz de usuario. Además, se emplea CSS para el diseño y estilo de la aplicación, permitiendo una apariencia atractiva y coherente en todos los dispositivos y navegadores.

Se emplea React.Context para la gestión del estado global, según las necesidades específicas del proyecto y los requisitos de escalabilidad y rendimiento.

## Características Principales

- Exploración de una amplia variedad de héroes del universo Marvel.
- Visualización detallada de la información de cada héroe, incluyendo biografía, poderes, afiliaciones y más.
- Interfaz de usuario intuitiva y fácil de usar.
- Integración con la API de Marvel Developer Portal para obtener datos en tiempo real sobre los héroes.

## Contribución

¡Contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Añade nueva funcionalidad'`).
4. Haz push de la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## Estado del Proyecto

Actualmente en desarrollo.

## Soporte

Para obtener soporte, por favor abre un issue en el repositorio del proyecto: [enlace al repositorio](https://github.com/JoniAguero/zara-poc)

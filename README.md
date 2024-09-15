<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo

1. Clonar el repositorio
2. Ejecutar

   ```bash
   npm install
   ```

3. Tener instalando _Nest CLI_ instalado

   ```bash
   npm i -g @nestjs/cli
   ```

4. Levantar la base de datos

   ```bash
   docker-compose up -d
   ```

5. Clonar el archivo **.env.template** y ronombrar la copia a **.env**

6. Llenar las variables de entorno definidias en el **.env**

7. Ejecutar la aplicación en de:

   ```bash
   npm run start:dev
   ```

8. Reconstruir la base de datos con la semilla

   ```http
   http://localhost:3000/api/v2/seed
   ```

# Production Build

1. Crear el archivo **.env/prod**
2. Llenar las variables de entorno de producción
3. Crear la nueva imágen

   ```bash
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```

## Stack Tecnológico

- NongoDB
- Nest

FROM node:18-alpine AS base

WORKDIR /app

# Copiar los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos al contenedor
COPY . .

# Exponer el puerto utilizado por la aplicación en desarrollo
EXPOSE 3000

# Ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]

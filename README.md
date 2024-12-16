# PayNau Frontend

Frontend de la aplicación PayNau, construido con React, Vite y TypeScript.

## Requisitos Previos

- Node.js (v18 o superior)
- npm (incluido con Node.js)
- Docker (opcional)
- AWS CLI
- Amplify CLI

## Instalación Local

1. Clonar el repositorio:
```bash
git clone https://github.com/RobertCastro/FrontendPaynau
cd FrontendPaynau
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env`:
```env
VITE_API_URL=https://tu-api-gateway-url/dev
```

## Ejecución Local

### Método 1: Directo con npm
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Método 2: Usando Docker

1. Usando Dockerfile:
```bash
# Construir la imagen
docker build -f Dockerfile.dev -t frontend-dev .

# Ejecutar el contenedor
docker run -p 5173:5173 -v $(pwd):/app frontend-dev
```

2. Usando Docker Compose:
```bash
# Iniciar la aplicación
docker-compose up

# Detener la aplicación
docker-compose down
```

## Despliegue en AWS Amplify

### 1. Inicialización

```bash
# Instalar Amplify CLI si no está instalado
npm install -g @aws-amplify/cli

# Inicializar Amplify en el proyecto
amplify init
```
Seleccionar las siguientes opciones:
- Enter a name for the project: `paynau-frontend`
- Choose your default editor: `Visual Studio Code`
- Choose the type of app that you're building: `javascript`
- What javascript framework are you using: `react`
- Source Directory Path: `src`
- Distribution Directory Path: `dist`
- Build Command: `npm run build`
- Start Command: `npm run dev`

### 2. Configurar el Proyecto
```bash
amplify configure project
```

### 3. Agregar Hosting
```bash
amplify add hosting
```
Seleccionar:
- Select the plugin module to execute: `Hosting with Amplify Console`
- Choose a type: `Manual deployment`

### 4. Publicar
```bash
amplify publish
```

## Estructura del Proyecto
```
src/
├── api/                # Configuración de endpoints
├── assets/            # Recursos estáticos
├── components/        # Componentes reutilizables
│   ├── layout/       # Componentes de diseño
│   ├── sections/     # Secciones de página
│   └── ui/           # Componentes de UI
├── lib/              # Utilidades y configuraciones
├── pages/            # Páginas de la aplicación
├── types/            # Definiciones de tipos
└── utils/            # Funciones utilitarias
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción

## Configuración Docker

### Desarrollo
Archivo `Dockerfile.dev`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### Docker Compose
Archivo `docker-compose.yml`:
```yaml
version: '3.8'
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
```

## Notas de Desarrollo

- La aplicación usa React Router para el enrutamiento
- Tailwind CSS para los estilos
- React Query para el manejo de estado y peticiones
- TypeScript para el tipado estático

## Solución de Problemas

### Error CORS
Si encuentras errores CORS, verifica:
1. La URL de la API en el archivo `.env`
2. La configuración CORS en el backend
3. Los headers en las peticiones API

### Problemas con Docker
Si los cambios no se reflejan en desarrollo:
1. Verifica que los volúmenes estén montados correctamente
2. Reinicia el contenedor
3. Limpia la caché de Docker

## Enlaces Útiles

- [Documentación de Amplify](https://docs.amplify.aws/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React Router](https://reactrouter.com/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
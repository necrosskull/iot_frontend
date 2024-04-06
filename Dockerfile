# Используем официальный образ Node.js для сборки приложения
FROM node:latest AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем приложение
RUN npm run build

# Используем официальный образ Nginx для создания контейнера с веб-сервером
FROM nginx:latest

# Копируем статические файлы из сборочного этапа в рабочую директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx
# COPY nginx.conf /etc/nginx/nginx.conf

# Опционально: можно перенаправить порт (если нужно)
EXPOSE 80

# Команда для запуска Nginx внутри контейнера
CMD ["nginx", "-g", "daemon off;"]

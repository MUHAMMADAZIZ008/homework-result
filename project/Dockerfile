FROM node:22-alpine

# Ishchi katalogni sozlash
WORKDIR /usr/src/app

# package.json fayllarini nusxalash va bog‘lamalarni o‘rnatish
COPY package*.json ./
RUN npm install

# NestJS CLI'ni global o‘rnatish
RUN npm install -g @nestjs/cli

# Qolgan barcha fayllarni nusxalash
COPY . .

# Loyihani build qilish
RUN npm run build

# Portni ochish
EXPOSE 3000

# Ilovani ishga tushirish
CMD ["node", "dist/main"]

Tozalash Xizmati Backend

Loyihaning Maqsadi

Tozalash xizmatlari uchun backend tizimini yaratish. Bu tizim foydalanuvchilar va administratorlar uchun quyidagi funksiyalarni ta'minlaydi:

Foydalanuvchi ro'yxatdan o'tishi (SIGNUP)

Tizimga kirish (SIGNIN) va chiqish (SIGNOUT)

ACCESS va REFRESH tokenlar orqali autentifikatsiya

EMAIL orqali shaxsni tasdiqlash

Foydalanuvchi profiliga avatar qo'shish

Parolni tiklash (forget password)

RBAC (Role-Based Access Control) orqali avtorizatsiya

Texnologiya Stack

Framework: NestJS

Database: PostgreSQL

ORM: Sequelize

Authentication: JWT, Passport

Email: Nodemailer

Environment Variables: @nestjs/config

Security: bcrypt

Modullar va Komponentlar

AppModule: Asosiy modul, barcha boshqa modullarni birlashtiradi.

AuthModule: Foydalanuvchi autentifikatsiyasi va avtorizatsiyasini boshqaradi.

UsersModule: Foydalanuvchilarni boshqarish (CRUD operatsiyalari).

MailModule: Email tasdiqlash va boshqa email xabarlarini yuborish.

AvatarModule: Foydalanuvchi profiliga avatar yuklash va yangilash.

PasswordResetModule: Parolni tiklash jarayonlarini boshqarish.

API Endpointlar

AuthController

POST /auth/signup: Foydalanuvchini ro'yxatdan o'tkazish.

POST /auth/login: Foydalanuvchini tizimga kirish.

POST /auth/verify: Email tasdiqlash.

POST /auth/forget-password: Parolni tiklash uchun token yuborish.

POST /auth/reset-password: Parolni tiklash.

UsersController

GET /users: Barcha foydalanuvchilarni olish.

GET /users/:id: Foydalanuvchini ID bo'yicha olish.

PUT /users/:id: Foydalanuvchini yangilash.

DELETE /users/:id: Foydalanuvchini o'chirish.

POST /users/:id/avatar: Foydalanuvchi profiliga avatar yuklash.

GET /users/:id/avatar: Foydalanuvchi avatarini olish.

RoleController

GET /roles: Barcha rollarni olish.

POST /roles: Yangi rol yaratish.

PUT /roles/:id: Rolni yangilash.

DELETE /roles/:id: Rolni o'chirish.

Xavfsizlik

Parolni bcrypt yordamida hash qilish.

JWT tokenlar yordamida sessiyalar boshqariladi.

Fayl yuklashda fayl turi va hajmi tekshiriladi.

HTTPS orqali API'ni himoya qilish.

Postman Folder Strukturasi

Auth:

Signup

Login

Verify Email

Forget Password

Reset Password

Users:

Get All Users

Get User by ID

Update User

Delete User

Avatar:

Upload Avatar

Get Avatar

Middleware

Authentication Middleware:

JWT tokenlarini tekshirish va foydalanuvchini autentifikatsiya qilish.

JWT token muddati tugaganini tekshirish va yangi token yaratish.

Role Middleware:

RBAC orqali foydalanuvchi rolini tekshirish va kerakli ruxsatlarni ta'minlash.

Administrator va oddiy foydalanuvchi uchun maxsus ruxsatlar.

Exception Handling

Global Exception Filter:

Standart va maxsus xatolarni boshqarish.

Har xil HTTP status kodlari bilan xatolarni qaytarish.

Custom Exceptions:

InvalidCredentialException: Noto'g'ri kirish ma'lumotlari.

UserNotFoundException: Foydalanuvchi topilmadi.

TokenExpiredException: Token muddati tugagan.

Talablar

Har kunlik yangilanishlarni GitHub'ga push qilib borish.

Postman uchun yuqoridagi endpointlar bo'yicha alohida requestlar yaratish.


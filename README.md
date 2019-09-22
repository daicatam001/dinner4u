# Dinner4u

This is project about search menu for dinner using MEAN STACK

## Third package used

- express
- nodemon
- dotenv
- mongoose
- body-parser
- express-validator
- cors

## Front-end

- [x] add bootstrap css, font-awesome
- [x] create menu-create component
- [x] create menu-service
- [x] create loading-button
- [x] create Welcome Module
  - [x] create WelcomeHero component
    - [x] set layout + input search
  - [x] create WelcomeContent component
    - [x] add menu-list layout
- [x] create MenuList Module
  - [x] create MenuList Component
    - [x] set layout add dish, add tag, remove menu, create menu
    - [x] setup dishForm, tagForm
    - [ ] drag, drop, remove dish in review menu
    - [x] alert message service
    - [ ] show suggest tags,
    - [ ] autocomplete insert dish
- [x] create AuthModule
  - [x] create LoginComponent
    - [x] create register form
    - [x] validate form field
  - [x] create RegisterComponent
    - [x] create register api
    - [x] create login form
  - [x] create AuthService
    - [x] register,login api
    - [x] save token when login
    - [x] add auth guard
    - [x] add expired token time out
  - [x] create ModalModule
    - [x] create ModalService
  - [x] create HeaderLayoutComponent
    - [x] set layout
      - [x] link to create menu
      - [x] show user infor
      - [x] register,login,logout button,
      - [x] show trend tag

## Back-end

- [x] install express,nodemon,dotenv,mongoose
- [x] setup server
- [x] create Dish model
- [x] create Tag model
- [x] create Menu model
- [x] create menu route
  - [x] create-menu api
  - [x] get-menu api
  - [x] add validator data middleware
  - [x] add getAuth middleware
- [x] create User Model
- [x] create auth route
  - [x] register api,
  - [x] login api
  - [x] create register api validate
  - [x] install bcryptjs, jsonwebtoken
  - [x] create login api validate

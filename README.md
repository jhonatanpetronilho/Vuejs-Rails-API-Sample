# Simple Vuejs client and Rails backend API.

> An simple start kit client for my minimalist rails API projects with Vuejs 2.

## Vuejs setup:

### Approaches

- Requests, responses interceptors (axios)
- Auth Token with localStorage
- Vuex to store current user

#### Libs

- [Axios](https://github.com/axios/axios)
- [Vuex](https://vuex.vuejs.org/en/)
- [VueRouter](https://router.vuejs.org/en/)

##### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Rails setup:

### Approaches

- API versioning (api/v1)
- Auth Token with expiration pediod (knock)
- Cors control (rack-cors)
- Protect for attacks (rack-attack)

#### Libs

- [knock](https://github.com/nsarno/knock)
- [rack-cors](https://github.com/cyu/rack-cors)
- [rack-attack](https://github.com/kickstarter/rack-attack)


##### Build Setup

```bash
# Configure in config/initializers
rack-attack.rb, cors.rb, knock.rb

# Create database
rake db:craete

# Migrate database
rake db:migrate

# Start server
rails server
```

```bash
meteor create meteor-bookmarks
cd meteor-bookmarks
meteor npm install
meteor

mkdir -p imports/ui/{components,containers,layouts} \
         imports/ui/components/Bookmarks \
         imports/api/bookmarks/server \
         imports/startup/{server,client} \
         imports/lib

touch imports/api/collections.js \
      imports/api/bookmarks/{bookmarks,methods}.{js,html} \
      imports/api/bookmarks/server/publications.js \
      imports/startup/client/index.js \
      imports/startup/server/index.js \
      imports/ui/components/Bookmarks/{Bookmark,Bookmarks}.{js,html} \
      imports/ui/layouts/AppLayout.{js,html} \
      imports/ui/containers/AppContainer.{js,html} \
      imports/startup/routes.js \
      imports/startup/style.js \
      imports/startup/style.css \
      imports/lib/blaze_layout.js

meteor remove autopublish insecure

meteor add aldeed:simple-schema \
           aldeed:collection2 \
           dburles:collection-helpers \
           kadira:flow-router \
           kadira:blaze-layout \
           arillo:flow-router-helpers \
           zimme:active-route \
           reactive-var \
           http \
           accounts-ui \
           accounts-password \
           nimble:restivus
```

# Code Style

```bash
meteor npm install --save-dev eslint@^2.9.0 eslint-config-airbnb eslint-plugin-import eslint-plugin-meteor eslint-plugin-react eslint-plugin-jsx-a11y
```

# Customize CSS

```bash
npm install -S bulma font-awesome
```

# Swagger UI

```bash
meteor npm install -D swagger-ui node-static
```

```js
{
  // ...
  "scripts": {
    // ...
    "swagger-ui": "static node_modules/swagger-ui/dist"
  },
  // ...
}
```

```bash
sed -i.bak -e 's/http:\/\/petstore.swagger.io\/v2\/swagger.json/http:\/\/localhost:3000\/api\/swagger.json/' node_modules/swagger-ui/dist/index.html
```

```bash
meteor npm run swagger-ui
```
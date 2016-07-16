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

# curl

```bash
curl -X POST http://localhost:3000/api/login -d 'email=<EMAIL>&password=<PASSWORD>'
```

```bash
curl -H "X-Auth-Token: bVUqYbQlqVFNeUYIDIAWj" -H "X-User-Id: thQN4vg7LeudeQjxP" http://localhost:3000/api/bookmarks
```

# Swagger UI

```bash
meteor npm install -D swagger-ui node-static
```

```bash
cp -R node_modules/swagger-ui/dist .swagger-ui
sed -i -e 's/http:\/\/petstore.swagger.io\/v2\/swagger.json/http:\/\/localhost:3000\/api\/swagger.json/' .swagger-ui/index.html
```

```js
{
  // ...
  "scripts": {
    // ...
    "swagger-ui": "static .swagger-ui"
  },
  // ...
}
```

```bash
meteor npm run swagger-ui
```
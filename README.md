```bash
meteor create meteor-rest-example
cd meteor-rest-example
meteor npm install
meteor

mkdir -p imports/ui/{components,containers,layouts} \
         imports/ui/components/Bookmarks \
         imports/api/bookmarks/server \
         imports/startup \
         imports/lib

touch imports/api/collections.js \
      imports/api/bookmarks/{bookmarks,methods}.{js,html} \
      imports/api/bookmarks/server/publications.js \
      imports/startup/client.js \
      imports/startup/server.js \
      imports/ui/components/Bookmarks/{Bookmark,Bookmarks}.{js,html} \
      imports/ui/layouts/AppLayout.{js,html} \
      imports/ui/containers/AppContainer.{js,html} \
      imports/startup/routes.js \
      imports/lib/blaze_layout.js

meteor remove autopublish insecure

meteor add aldeed:simple-schema \
           aldeed:collection2 \
           dburles:collection-helpers \
           kadira:flow-router \
           kadira:blaze-layout \
           arillo:flow-router-helpers \
           zimme:active-route \
           reactive-var
```

# Code Style

```bash
meteor npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-meteor eslint-plugin-react eslint-plugin-jsx-a11y eslint
```
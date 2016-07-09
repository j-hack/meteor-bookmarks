import { Restivus } from 'meteor/nimble:restivus';
import { Bookmarks } from '../../api/collections';

console.log(Restivus);

// Global API Configuration
const Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Restivus Swagger
Api.swagger = {
  meta: {
    swagger: '2.0',
    info: {
      version: '1.0.0',
      title: 'My API',
      description: 'My REST API',
      termsOfService: 'http://localhost:3000/terms/',
      contact: {
        name: 'Example Team'
      },
      license: {
        name: 'MIT'
      }
    }
  },
  definitions: {
    Bookmark: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
        }
      },
    }
  },
  params: {
    bookmarkId: {
      name: '_id',
      in: 'path',
      description: 'Bookmark ID',
      required: true,
      type: 'string'
    },
    bookmarkUrl: {
      name: 'url',
      in: 'formData',
      description: 'Bookmark Url',
      require: true,
      type: 'string',
    },
    bookmarkTitle: {
      name: 'title',
      in: 'formData',
      description: 'Bookmark Title',
      require: true,
      type: 'string',
    },
  },
  tags: {
    bookmark: 'Bookmarks'
  },
};

// Add routes
Api.addRoute('bookmarks', {
  get: {
    action: function() {
      return {
        status: 'success',
        data: Bookmarks.find().fetch()
      }
    },
    swagger: {
      tags: [
        Api.swagger.tags.bookmark
      ],
      description: 'Returns bookmarks list',
      parameters: [
      ],
      response: {
        '200': {
          description: 'Successful bookmarks list'
        }
      }
    }
  },
  post: {
    action: function() {
      console.log(this.bodyParams)
      const doc = { url, title } = this.bodyParams;
      Bookmarks.schema.validate(doc);
      const docId = Bookmarks.insert(doc);

      return {
        status: 'success',
        data: Bookmarks.findOne(docId),
      };
    },
    swagger: {
      tags: [
        Api.swagger.tags.bookmark
      ],
      description: 'Create a new bookmark',
      parameters: [
        Api.swagger.params.bookmarkUrl,
        Api.swagger.params.bookmarkTitle,
      ],
      response: {
        200: {
          description: 'Successful creating a new bookmark'
        }
      }
    }
  }
});



Api.addSwagger('swagger.json');

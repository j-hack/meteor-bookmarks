import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/nimble:restivus';
import { Bookmarks } from './collections';

// Global API Configuration
export const Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

global.RestApi = Api; // for debug

// Restivus Swagger
Api.swagger = {
  meta: {
    swagger: '2.0',
    info: {
      version: '1.0.0',
      title: 'My API',
      description: 'My REST API',
      termsOfService: 'http://example.com/terms/',
      contact: {
        name: 'Example Team'
      },
      license: {
        name: 'MIT'
      }
    },
  },
  // securityDefinitions: {
  //   authToken: {
  //     type: 'apiKey',
  //     description: 'Auth Token',
  //     name: 'x-auth-token',
  //     in: 'header',
  //   },
  //   authUserId: {
  //     type: 'apiKey',
  //     description: 'Auth UserId',
  //     name: 'x-user-id',
  //     in: 'header',
  //   },
  // },
  // security: [
  //   { authToken: [] },
  //   { authUserId: [] },
  // ],
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
    // authToken: {
    //   name: 'X-Auth-Token',
    //   description: 'Meteor.users AuthToken',
    //   in: 'header',
    //   required: true,
    //   type: 'string',
    //   default: '',
    // },
    // authUserId: {
    //   name: 'X-User-Id',
    //   description: 'Meteor.usersId',
    //   in: 'header',
    //   required: true,
    //   type: 'string',
    //   default: '',
    // },
    limit: {
      name: 'limit',
      in: 'query',
      description: 'Limit',
      required: false,
      type: 'number'
    },
    skip: {
      name: 'skip',
      in: 'query',
      description: 'Skip',
      required: false,
      type: 'number'
    },
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
Api.addRoute('bookmarks', {authRequired: true}, {
  get: {
    action: function() {
      const selector = {userId: this.userId};

      const options = {};
      const {limit, skip} = this.queryParams;

      options.limit = parseInt(limit, 10) || 100;
      options.skip  = parseInt(skip, 10)  || 0;

      return {
        status: 'success',
        data: Bookmarks.find(selector, options).fetch()
      }
    },
    swagger: {
      tags: [
        Api.swagger.tags.bookmark
      ],
      description: 'Returns bookmarks list',
      parameters: [
        Api.swagger.params.limit,
        Api.swagger.params.skip,
      ],
      responses: {
        '200': {
          description: 'Successful bookmarks list'
        }
      },
    }
  },
  post: {
    action: function() {
      console.log(this.bodyParams)
      const { url, title } = this.bodyParams;
      const userId = this.userId;
      const doc = {url, title, userId};

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
      responses: {
        200: {
          description: 'Successful creating a new bookmark'
        }
      }
    }
  }
});

Api.addSwagger('swagger.json');

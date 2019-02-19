define({ "api": [
  {
    "type": "delete",
    "url": "/api/clubs/:id",
    "title": "Delete a Club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message and id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "DeleteApiClubsId"
  },
  {
    "type": "get",
    "url": "/api/clubs",
    "title": "Request List of Clubs",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of Club objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubs"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id",
    "title": "get member list of a club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>of members objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubsId"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id",
    "title": "Request Club by ID",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "single",
            "description": "<p>club object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubsId"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id/sections",
    "title": "Request Sections of a Club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of section objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubsIdSections"
  },
  {
    "type": "patch",
    "url": "/api/clubs/:id",
    "title": "Update a Club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "updated",
            "description": "<p>club object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "PatchApiClubsId"
  },
  {
    "type": "post",
    "url": "/api/clubs",
    "title": "Create a new Club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "single",
            "description": "<p>club object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "PostApiClubs"
  },
  {
    "type": "get",
    "url": "/api/images/upload",
    "title": "Post an image",
    "group": "images",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>url to image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/imagesRoute.js",
    "groupTitle": "images",
    "name": "GetApiImagesUpload"
  },
  {
    "type": "post",
    "url": "/api/users/addMember",
    "title": "Edit a Club Member",
    "group": "members",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>message and user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "PostApiUsersAddmember"
  },
  {
    "type": "post",
    "url": "/api/users/addMember/:id",
    "title": "Edit a Club Member",
    "group": "members",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>message and updated user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "PostApiUsersAddmemberId"
  },
  {
    "type": "post",
    "url": "/api/users/addMember/:id",
    "title": "Delete a Club Member",
    "group": "members",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>message and id of deleted user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "PostApiUsersAddmemberId"
  },
  {
    "type": "delete",
    "url": "/api/clubs/:id/sections",
    "title": "Delete ALL sections of a club",
    "group": "sections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "DeleteApiClubsIdSections"
  },
  {
    "type": "delete",
    "url": "/api/clubs/:id/sections/:sectionId",
    "title": "Delete a section by sectionId",
    "group": "sections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message and id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "DeleteApiClubsIdSectionsSectionid"
  },
  {
    "type": "patch",
    "url": "/api/clubs/:id/sections/:sectionId",
    "title": "Update info of a Section",
    "group": "sections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message and updated section object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "PatchApiClubsIdSectionsSectionid"
  },
  {
    "type": "post",
    "url": "/api/clubs/:id/sections",
    "title": "Add Sections to a Club",
    "group": "sections",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message and created section object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "PostApiClubsIdSections"
  },
  {
    "type": "get",
    "url": "/api/settings",
    "title": "Get list of Settings",
    "group": "settings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "lists",
            "description": "<p>of colors, fonts, and img_placements</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/settingsRoute.js",
    "groupTitle": "settings",
    "name": "GetApiSettings"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete User by ID",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message and id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "DeleteApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get User by ID",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/register",
    "title": "Get a List of Users",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of user objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "GetApiUsersRegister"
  },
  {
    "type": "patch",
    "url": "/api/users/:id",
    "title": "Update User by ID",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "updated",
            "description": "<p>user info</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "PatchApiUsersId"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Add a User",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>message and user ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "PostApiUsersRegister"
  }
] });

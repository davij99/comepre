migrate((db) => {
  const collection = new Collection({
    "id": "r0a17u24gralekm",
    "created": "2023-05-17 08:40:05.352Z",
    "updated": "2023-05-17 08:40:05.352Z",
    "name": "employees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jfx7uoaj",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3rbdpjml",
        "name": "surname",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mwlz2wes",
        "name": "avatar",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r0a17u24gralekm");

  return dao.deleteCollection(collection);
})

migrate((db) => {
  const collection = new Collection({
    "id": "flec1vctmmng87k",
    "created": "2023-05-17 12:57:59.909Z",
    "updated": "2023-05-17 12:57:59.909Z",
    "name": "materials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jwbyfi4i",
        "name": "material_name",
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
        "id": "y3wsbxmv",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "values": [
            "tubo",
            "lastra",
            "foglio"
          ]
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
  const collection = dao.findCollectionByNameOrId("flec1vctmmng87k");

  return dao.deleteCollection(collection);
})

migrate((db) => {
  const collection = new Collection({
    "id": "o8msz6dl74hqkuz",
    "created": "2023-05-17 09:16:30.773Z",
    "updated": "2023-05-17 09:16:30.773Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ypp6dmig",
        "name": "progettoTest1",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "r0a17u24gralekm",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
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
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz");

  return dao.deleteCollection(collection);
})

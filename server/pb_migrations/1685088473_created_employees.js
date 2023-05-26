migrate((db) => {
  const collection = new Collection({
    "id": "4p5vm31qq2lv83r",
    "created": "2023-05-26 08:07:53.336Z",
    "updated": "2023-05-26 08:07:53.336Z",
    "name": "employees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jsjowppz",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("4p5vm31qq2lv83r");

  return dao.deleteCollection(collection);
})

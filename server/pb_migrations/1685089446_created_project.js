migrate((db) => {
  const collection = new Collection({
    "id": "tsgm68lrrwtveys",
    "created": "2023-05-26 08:24:06.929Z",
    "updated": "2023-05-26 08:24:06.929Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "niskitsr",
        "name": "project_name",
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
        "id": "jyqcrd5n",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yfxnpnu2",
        "name": "materials_used",
        "type": "select",
        "required": true,
        "unique": true,
        "options": {
          "maxSelect": 5,
          "values": [
            "rame",
            "titanio",
            "alluminio",
            "tungsteno",
            "zinco"
          ]
        }
      },
      {
        "system": false,
        "id": "ixskdh5s",
        "name": "assigned_to",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "4p5vm31qq2lv83r",
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
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys");

  return dao.deleteCollection(collection);
})

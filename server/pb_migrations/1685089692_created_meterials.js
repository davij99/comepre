migrate((db) => {
  const collection = new Collection({
    "id": "4hr047zqas724fv",
    "created": "2023-05-26 08:28:12.899Z",
    "updated": "2023-05-26 08:28:12.899Z",
    "name": "meterials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wwomforx",
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
        "id": "e9igod1x",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "values": [
            "tubolare",
            "lasta spessa",
            "lasta sottile"
          ]
        }
      },
      {
        "system": false,
        "id": "bwffnks2",
        "name": "stored_qty",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("4hr047zqas724fv");

  return dao.deleteCollection(collection);
})

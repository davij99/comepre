migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // remove
  collection.schema.removeField("ypp6dmig")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmfovh12",
    "name": "project_name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("tmfovh12")

  return dao.saveCollection(collection)
})

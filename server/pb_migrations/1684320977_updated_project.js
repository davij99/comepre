migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tn9nbcxj",
    "name": "assigned_to",
    "type": "relation",
    "required": true,
    "unique": false,
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tn9nbcxj",
    "name": "assigned_to",
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

  return dao.saveCollection(collection)
})

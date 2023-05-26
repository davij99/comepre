migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "keurocuw",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhrmkjf3",
    "name": "materials",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "titanio",
        "ferro",
        "allumino",
        "acciaio",
        "rame",
        "tungsteno"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // remove
  collection.schema.removeField("tn9nbcxj")

  // remove
  collection.schema.removeField("keurocuw")

  // remove
  collection.schema.removeField("nhrmkjf3")

  return dao.saveCollection(collection)
})

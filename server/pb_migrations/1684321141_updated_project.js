migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8msz6dl74hqkuz")

  // update
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
        "alluminio",
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

  // update
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
})

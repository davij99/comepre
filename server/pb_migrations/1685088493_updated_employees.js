migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4p5vm31qq2lv83r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4x0gbvge",
    "name": "surname",
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
  const collection = dao.findCollectionByNameOrId("4p5vm31qq2lv83r")

  // remove
  collection.schema.removeField("4x0gbvge")

  return dao.saveCollection(collection)
})

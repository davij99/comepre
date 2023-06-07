migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4p5vm31qq2lv83r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ho6e2ecg",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4p5vm31qq2lv83r")

  // remove
  collection.schema.removeField("ho6e2ecg")

  return dao.saveCollection(collection)
})

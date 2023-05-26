migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jy0wp7wf",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // remove
  collection.schema.removeField("jy0wp7wf")

  return dao.saveCollection(collection)
})

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h26uovsq",
    "name": "hour_per_project",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // remove
  collection.schema.removeField("h26uovsq")

  return dao.saveCollection(collection)
})

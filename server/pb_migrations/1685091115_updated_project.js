migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h26uovsq",
    "name": "hour_per_project",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h26uovsq",
    "name": "hour_per_project",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})

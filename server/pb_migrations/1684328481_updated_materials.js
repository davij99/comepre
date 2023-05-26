migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("flec1vctmmng87k")

  // remove
  collection.schema.removeField("ahh53xxg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("flec1vctmmng87k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahh53xxg",
    "name": "stored_materials",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "o8msz6dl74hqkuz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "materials"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

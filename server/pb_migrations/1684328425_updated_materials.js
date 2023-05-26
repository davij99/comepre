migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("flec1vctmmng87k")

  // remove
  collection.schema.removeField("xyq4ug6d")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("flec1vctmmng87k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xyq4ug6d",
    "name": "materil_used",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "r0a17u24gralekm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})

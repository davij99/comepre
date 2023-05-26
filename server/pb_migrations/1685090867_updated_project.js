migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esegk0f5",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "4hr047zqas724fv",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": 5,
      "displayFields": [
        "material_name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // remove
  collection.schema.removeField("esegk0f5")

  return dao.saveCollection(collection)
})

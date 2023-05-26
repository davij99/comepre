migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esegk0f5",
    "name": "materials_used",
    "type": "relation",
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esegk0f5",
    "name": "materials_used",
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
})

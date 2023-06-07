migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hr047zqas724fv")

  // remove
  collection.schema.removeField("9qbeip6m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "devidyif",
    "name": "material_name",
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
  const collection = dao.findCollectionByNameOrId("4hr047zqas724fv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9qbeip6m",
    "name": "material",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "tsgm68lrrwtveys",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "materials_used"
      ]
    }
  }))

  // remove
  collection.schema.removeField("devidyif")

  return dao.saveCollection(collection)
})

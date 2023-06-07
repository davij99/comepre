migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // remove
  collection.schema.removeField("luwdf83g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rtlzsndx",
    "name": "material_used_qty",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "luwdf83g",
    "name": "used_qty",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "4hr047zqas724fv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "stored_qty"
      ]
    }
  }))

  // remove
  collection.schema.removeField("rtlzsndx")

  return dao.saveCollection(collection)
})

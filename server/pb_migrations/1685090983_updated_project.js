migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // remove
  collection.schema.removeField("yfxnpnu2")

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tsgm68lrrwtveys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfxnpnu2",
    "name": "materials_used",
    "type": "select",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 5,
      "values": [
        "rame",
        "titanio",
        "alluminio",
        "tungsteno",
        "zinco"
      ]
    }
  }))

  // update
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

  // update
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
})

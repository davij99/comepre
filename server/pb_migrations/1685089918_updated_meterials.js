migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hr047zqas724fv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9igod1x",
    "name": "category",
    "type": "select",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "values": [
        "tubolare",
        "lasta spessa",
        "lasta sottile"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hr047zqas724fv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9igod1x",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "values": [
        "tubolare",
        "lasta spessa",
        "lasta sottile"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

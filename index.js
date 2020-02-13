function updateObjectWithKeyAndValue(object, key, value)
{
 return  Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key)
{
  return Object.assign(delete object.key)
  
}
function  destructivelyDeleteFromObjectByKey(object, key)
{
  var recipe ={ foo: 'bar' };
 Object.assign({}, object,recipe)
 return object
}
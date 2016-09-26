function forEach (arr, cb)
{
  var len = arr.length;
  for (var i = 0; i < len; i++)
  {
    cb(arr[i]);
  }
}
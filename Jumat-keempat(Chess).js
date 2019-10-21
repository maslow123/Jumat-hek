var chessBoard = function(size){
  var hash = '#'
  var space = '_'
  for (var i = 0; i < size; i++) 
  {        

      hash += '\n'

      for (var j = 0; j < size; j++) 
      {
      if((i +j) % 2 == 0)
      {
      hash  += space
      }
      else
      {
      hash  += "#"
      }
  };

};

console.log(hash)
}(8)
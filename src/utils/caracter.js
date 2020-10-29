  
module.exports = {
  levenshteinDistance(source, target) {
    var result = []; 
    var i, j;

    
    for (i = 0; i <= source.length; i++) { //Loop pra colocar o i na array result
      result.push([i]);
    }
  
    for (j = 1; j <= target.length; j++) { //Mesma coisa so que com o j, mas compara com o target
      result[0].push(j);
    }
  
    for (i = 1; i <= source.length; i++) {
      for (j = 1; j <= target.length; j++) {
  
        result[i].push(0);
  
        if (source[i - 1] == target[j - 1]) {
        
          result[i][j] = result[i - 1][j - 1];
        } else {
  
          var minimum = Math.min(
            result[i - 1][j] + 1, 
            result[i][j - 1] + 1  
          );
  
          minimum = Math.min(
            minimum,
            result[i - 1][j - 1] + 1 
          );
          result[i][j] = minimum;
        }
      }
    }
  
    
    return result[source.length][target.length];
  }
}
console.log("Advanced debugging example running.");
debugger;

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // gameKey is "home"
    //gameKey is "away"
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      //teamObj is an object which has properties which are teamname, colors, and players
      //teamKey is teamName
      //teamKey is colors
      //teamKey is players
      //teamObj is an object which has properties which are teamname, colors, and players
      //teamKey is teamName
      //teamKey is colors
      //teamKey is players
      debugger;

      let data = teamObj.player;
      // data is undefined at this point
      // teamObj.player is undefined
      for (let key in data) {
        // key is undefined
        debugger;
      }
    }
  }
}

// then, call the function so it runs!
goodPractices();

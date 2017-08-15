let firstPlayer;
let secondPlayer;
let round1;
let arr;
let randNum;
let winArr = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let winner;
let index;
let player1Arr;
let player2Arr;
let count;
let playMode;
let togglePlay;
let aiChoice;
let aiDecision;
let player1;
let player2;
let P1;
let P2;
let aiArr = [1,3,5,7,9];

  var checkWin1 = function(data){
   if( data.length >= 3){
     for( var i=0; i < winArr.length; i++){
       count = 0;
      for(var j=0; j < data.length; j++){
        if(winArr[i].indexOf(data[j]) !== -1){
          count+=1;
        } else{
          count+=0;
        }
      }
    if(count === 3){
      break;
    }   
     } 
   }
    
   if(count >= 3){
     arr=[];
     P1+=1;
      setTimeout(function(){
         $("#game-box").hide();
         $("#winner h3").text(player1 + " WIN THIS ROUND!!!");
         $("#winner").show();
         }, 2000);
     setTimeout( function(){
         $("#winner").hide();
         $("td").css("background-color","orange");
         $("td").children().text("");
         $("#P1").text(player1 + ": " + P1)
         $("#P2").text(player2 + ": " + P2)
         $("#game-box").show();
         player1Arr = [];
         player2Arr = [];
         arr = [1,2,3,4,5,6,7,8,9];
         count = 0;
     }, 5000);
   } else if ( arr.length == 0 && player1Arr.length >= 4 && player2Arr.length >= 4){
        setTimeout(function(){
         $("#game-box").hide();
         $("#winner h3").text("IT WAS A DRAW!!!");
         $("#winner").show();
         }, 2000);
        setTimeout( function(){
         $("#winner").hide();
         $("td").css("background-color","orange");
         $("td").children().text("");
         $("#P1").text(player1 + ": " + P1)
        $("#P2").text(player2 + ": " + P2)
        $("#game-box").show();
         player1Arr = [];
         player2Arr = [];
         arr = [1,2,3,4,5,6,7,8,9];
         count=0;
     }, 5000);
   }
  }

  
    var checkWin2 = function(data){
   if( data.length >= 3){
     for( var i=0; i < winArr.length; i++){
       count = 0;
      for(var j=0; j < data.length; j++){
        if(winArr[i].indexOf(data[j]) !== -1){
          count+=1;
        } else{
          count+=0;
        }
      }
    if(count == 3){
      break;
    }   
     } 
   }
    
   if(count >= 3){
     arr=[];
     P2+=1;
     setTimeout( function(){
     $("#game-box").hide();
     $("#winner h3").text(player2 + " WIN THIS ROUND!!!");
     $("#winner").show();
     }, 2000)
     setTimeout( function(){
         $("#winner").hide();
         $("td").css("background-color","orange");
         $("td").children().text("");
         $("#P1").text(player1 + ": " + P1)
         $("#P2").text(player2 + ": " + P2)
         $("#game-box").show();
         player1Arr = [];
         player2Arr = [];
         count = 0;
     }, 5000);
     
   } else if ( arr.length == 0 && player1Arr.length >= 4 && player2Arr.length >= 4){
     setTimeout( function(){
         $("#game-box").hide();
         $("#winner h3").text("IT WAS A DRAW!!!");
         $("#winner").show();
         }, 2000)
        setTimeout( function(){
         $("#winner").hide();
         $("td").css("background-color","orange");
         $("td").children().text("");
         $("#P1").text(player1 + ": " + P1)
         $("#P2").text(player2 + ": " + P2)
         $("#game-box").show();
         player1Arr = [];
         player2Arr = [];
         count=0;
     }, 5000);
   }
  }

  var gameAction = function(box){
    var numIndex = arr.indexOf(parseInt(box));
    arr.splice(numIndex, 1);
    $("#"+box+"").css("background-color","white");
    $("#"+box+"").children().text(firstPlayer);
  }
  var gameAction2 = function(box){
    var numIndex = arr.indexOf(parseInt(box));
    arr.splice(numIndex, 1);
    $("#"+box+"").css("background-color","red");
    $("#"+box+"").children().text(secondPlayer);
  }

   
var aiAction = function(){
    var rIndex = Math.floor(Math.random()*arr.length); 
    aiDecision = arr[rIndex];
    arr.splice(rIndex, 1);
    $("#"+aiDecision+"").css("background-color","red");
    $("#"+aiDecision+"").children().text(secondPlayer);
    }

  
 var onePlayer = function(cell){
  var actionData = parseInt($(cell).prop("id"));
  if( arr.indexOf(actionData) !== -1){
    gameAction($(cell).prop("id"));
    player1Arr.push(actionData);
    checkWin1(player1Arr);
    if( count < 3){
      aiAction();
      player2Arr.push(aiDecision);
      checkWin2(player2Arr);
    }
  }
 }

  
   
 var twoPlayers = function(twoP){
    if( togglePlay % 2 == 0){
      var actionData = parseInt($(twoP).prop("id"));
      if( arr.indexOf(actionData) !== -1){
        gameAction($(twoP).prop("id"));
        player1Arr.push(actionData);
        checkWin1(player1Arr);
        togglePlay+=1;
  } else if( arr.length == 0){
     $("#game-box").hide();
     $("td").css("background-color","orange");
     $("td").children().text("");
     $("#entry").show();
     arr=[1,2,3,4,5,6,7,8,9];
     count=0;
     togglePlay = 0;
    }
       } else if ( togglePlay % 2 !== 0 ){
       var actionData = parseInt($(twoP).prop("id"));
        if( arr.indexOf(actionData) !== -1){
        gameAction2($(twoP).prop("id"));
        player2Arr.push(actionData);
        checkWin2(player2Arr);
        togglePlay+=1;        
                  } else if( arr.length == 0){
     $("#game-box").hide();
     $("td").css("background-color","orange");
     $("td").children().text("");
     $("#entry").show();
     arr=[1,2,3,4,5,6,7,8,9];
     count=0;
     togglePlay = 0;
    }
    }
 }
  
  
$(document).ready(function(){
  
  $("button.eng").click(function(){
    $(".fr").hide();
    $("#lang").hide();
    $("#game-info").show();
  })
  
  $("button.fr").click(function(){
    $(".eng").hide();
    $("#lang").hide();
    $("#game-info").show();
  })
  
  $(".start").click(function(){
   $("#game-info").hide(); 
   $("#players-mode").show();
  })
  
  $("button#back-info").click(function(){
   $("#game-info").hide();
   $("#lang").show();
   $(".fr").show();
   $(".eng").show();
  })
  
  $(".one-player").click(function(){
   $("#players-mode").hide();
   $("#entry").show();
   playMode = 1;
   player1 = "YOU";
   player2 = "COMPUTER";
   P1 = 0;
   P2 = 0;
  })
  
   $(".two-players").click(function(){
   $("#players-mode").hide();
   $("#entry").show();
   playMode = 2;
   togglePlay = 0;
   player1 = "PLAYER1";
   player2 = "PLAYER2";
   P1 = 0;
   P2 = 0;
  })
  
  $("button#back-players").click(function(){
    $("#players-mode").hide();
    $("#game-info").show();
  })
  
  $(".O").click(function(){
   arr = [1,2,3,4,5,6,7,8,9];
   //winArr = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
   player1Arr = [];
   player2Arr = [];
   count = 0;
   aiChoice = Math.round(Math.random());
    if(playMode == 2){
    $("#entry").hide();
    $("#game-box").show();
    firstPlayer = "O";
    secondPlayer = "X"; 
    } else{
    $("#entry").hide();
    $("#game-box").show();
    firstPlayer = "O";
    secondPlayer = "X";
     if(aiChoice == 0){
       aiAction();
       player2Arr.push(aiDecision);
     }
    }
  })
  
  $(".X").click(function(){
  arr = [1,2,3,4,5,6,7,8,9];
  //winArr = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  player1Arr = [];
  player2Arr = [];
  count = 0;
  aiChoice = Math.round(Math.random());
  $("#P1").text(player1 + ": " + P1)
  $("#P2").text(player2 + ": " + P2)
  if(playMode == 2){
    $("#entry").hide();
    $("#game-box").show();
    firstPlayer = "X"
    secondPlayer = "O";
  } else {
    $("#entry").hide();
    $("#game-box").show();
    firstPlayer = "X"
    secondPlayer = "O";
     if(aiChoice == 0){
       aiAction();
       player2Arr.push(aiDecision);
     }
  }
  })
  
  $("button#back-entry").click(function(){
    $("#entry").hide();
    $("#players-mode").show();
  })
  

 
  $("#1,#2,#3,#4,#5,#6,#7,#8,#9").click(function(){
    if( playMode === 1){
      onePlayer(this);
    } else if( playMode === 2){
      twoPlayers(this);
    }
    console.log(aiDecision);
    console.log(player2Arr);
  })
 
  
  
  
})
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (i=0;i<pronoun.length;i++){
//     console.log(pronoun[i])
    for (j=0; j<adj.length; j++){
//       console.log(pronoun[i]+adj[j])
      for (k=0; k<noun.length;k++){
        console.log(pronoun[i]+adj[j]+noun[k])
      }
    }
}
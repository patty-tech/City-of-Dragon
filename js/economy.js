window.Economy = {
  buildings:{
    fire:{name:'Fire Habitat',cost:150,gold:40,art:'◆'},
    water:{name:'Water Habitat',cost:150,gold:40,art:'◈'},
    nature:{name:'Nature Habitat',cost:150,gold:40,art:'✦'},
    earth:{name:'Earth Habitat',cost:150,gold:40,art:'⬢'},
    farm:{name:'Food Farm',cost:100,food:55,art:'▦'}
  },
  levelNeed(level){return level*100},
  gainXP(state,amount){state.xp+=amount;while(state.xp>=this.levelNeed(state.level)){state.xp-=this.levelNeed(state.level);state.level++;state.gems+=3}}
};

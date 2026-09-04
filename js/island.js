window.IslandSystem = {
  place(state,index,type){
    const b=Economy.buildings[type];
    if(!b)return {ok:false,msg:'Unknown building.'};
    if(state.tiles[index])return {ok:false,msg:'That tile is occupied.'};
    if(state.gold<b.cost)return {ok:false,msg:`You need ${b.cost} gold.`};
    state.gold-=b.cost;state.tiles[index]=type;Economy.gainXP(state,20);
    return {ok:true,msg:`${b.name} constructed.`};
  },
  collectGold(state){
    let total=0;state.tiles.forEach(t=>{if(t&&Economy.buildings[t].gold)total+=Economy.buildings[t].gold});
    total+=state.dragons.length*8;
    if(total===0)return {ok:false,msg:'Build a habitat first.'};
    state.gold+=total;Economy.gainXP(state,5);return {ok:true,msg:`Collected ${total} gold.`};
  },
  harvest(state){
    const farms=state.tiles.filter(t=>t==='farm').length;
    if(!farms)return {ok:false,msg:'Build a food farm first.'};
    const food=farms*55;state.food+=food;Economy.gainXP(state,5);return {ok:true,msg:`Harvested ${food} food.`};
  }
};

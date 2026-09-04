window.DRAGON_DATA = [
  {id:'pyron',name:'Pyron',elements:['Fire'],basePower:17,mark:'P',rarity:'Common'},
  {id:'tidera',name:'Tidera',elements:['Water'],basePower:15,mark:'T',rarity:'Common'},
  {id:'mossfang',name:'Mossfang',elements:['Nature'],basePower:14,mark:'M',rarity:'Common'},
  {id:'gravorn',name:'Gravorn',elements:['Earth'],basePower:18,mark:'G',rarity:'Common'},
  {id:'steamwing',name:'Steamwing',elements:['Fire','Water'],basePower:24,mark:'S',rarity:'Rare'},
  {id:'bloomscale',name:'Bloomscale',elements:['Nature','Earth'],basePower:23,mark:'B',rarity:'Rare'},
  {id:'cinderroot',name:'Cinderroot',elements:['Fire','Nature'],basePower:22,mark:'C',rarity:'Rare'},
  {id:'mudfin',name:'Mudfin',elements:['Water','Earth'],basePower:22,mark:'U',rarity:'Rare'}
];

window.BREEDING_RECIPES = {
  'pyron+tidera':'steamwing','tidera+pyron':'steamwing',
  'mossfang+gravorn':'bloomscale','gravorn+mossfang':'bloomscale',
  'pyron+mossfang':'cinderroot','mossfang+pyron':'cinderroot',
  'tidera+gravorn':'mudfin','gravorn+tidera':'mudfin'
};

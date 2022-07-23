var restricteds, normal, move1, move2, move3, move4,item,ability,x,y,a,b,c,d,e,item1,item2,item3,item4,item5,item6,stats,rmove1,rmove2,rmove3,rmove4
restricteds=['Lugia','Ho-oh','Kyogre','Groudon','Palkia','Dialga','Giratina','Reshiram', 'Zekrom','Kyurem-white','Xerneas','Yveltal','Zygarde','Solgaleo','Lunala','Necrozma-dusk','Zacian-Crowned','Zamazenta-Crowned','Eternatus','Calyrex-Shadow','Calyrex-Ice']
rmove4=['Recover','Protect','Protect','Protect','Protect','Protect',"Protect",'Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Protect']
rmove3=['Calm Mind','Recover','Ice Beam','Fire Punch','Earth Power','Earth Power','Breaking Swipe','Earth Power','Dual Wingbeat','Earth Power','Dazzling Gleam','Heat Wave','Coil','Stone Edge','Trick Room','Trick Room','Play Rough','Coaching','Flamethrower','Nasy Plot','Trick Room']
rmove2=['Earth Power','Brave Bird','Origin Pulse','Rock Slide','Hydro Pump','Flash Cannon','Shadow Sneak','Draco Meteor','Dragon Claw','Draco Meteor','Moonblast','Dark Pulse','Thousand Waves','Earthquake','Meteor Beam','Earthquake','Sacred Sword','Close Combat','Sludge Bomb','Psyshock','High Horespower']
rmove1=['Aeroblast','Sacred Fire','Water Spout','Precipice Blades','Spacial Rend','Roar of Time','Shadow Force','Blue Flare','Bolt Strike','Blizzard','Geomancy','Oblivion Wing',"Thousand Arrows",'Sunsteel Strike','Moongeist Beam','Sunsteel Strike','Behemoth Blad','Behemoth Bash','Dynamax Cannon','Astral Barrage','Glacial Lance']
item=['Sitrus Berry','Assault Vest','Focus Sash','Life Orb','Leftovers','Power Herb','Mental Herb','Rocky Helmet','Weakness Policy','Safety Goggles','White Herb']
normal=['Incineroar','Grimmsnarl','Rillaboom','Thundurus','Regieleki','Landorus-Therian' ,'Tornadus' ,'Charizard','Amoonguss','Gastrodon','Kartana','Whimsicott','Venusaur','Porygon2','Zapdos','Indeedee-F','Blastoise','Shedinja','Tapu Fini','Umbreon','Mimikyu','Bronzong','Urshifu','Ditto','Slowbro','Coalossal','Rotom-Heat','Raichu']
move1=['Fake Out','Reflect','Grassy Glide','Fly','Thunderbolt','Fly','Tailwind','Blast Burn','Spore','Yawn','Leaf Blade','Tailwind','Sleep Powder','Trick Room','Thunder','Follow Me','Hydro Cannon','Shadow Sneak',"Nature's Madness",'Yawn','Trick Room','Trick Room','Wicked Blow','Transform','Iron Defense','Heat Wave','Overheat','Fake Out']
move2=['Parting Shot','Light Screen','Fake Out','Wild Charge','Electroweb','Earthquake','Hurricane','Hurricane','Rage Powder','Earth Power','Smart Strike','Helping Hand','Leaf Storm','Foul Play','Hurricane','Helping Hand','Ice Beam','Endure','Heal Pulse','Foul Play','Play Rough','Iron Defense','Sucker Punch','','Body Press','Meteor Beam','Thunderbolt','Nuzzle']
move3=['Flare Blitz','Thunder Wave','Knock Off','Brick Break','Volt Switch','Rock Slide','Icy Wind','Ancient Power','Sludge Bomb','Ice Beam','Sacred Sword','Moonblast','Sludge Bomb','Recover','Heat Wave','Expanding Force','Yawn','Poltergeist','Moonblast','Snarl','Shadow Sneak','Body Press','Close Combat','','Trick Room','Solar Beam','Will-O-Wisp','Electroweb']
move4=['Darkest Lariat','Spirit Break','Wood Hammer','Foul Play','Protect','Protect','Protect','Protect','Protect','Protect','Aerial Ace','Taunt','Protect','Ice Beam','Detect','Protect','Protect','Protect','Protect','Protect','Protect','Protect','Detect','','Protect','Protect','Protect','Protect']
stats=['HP','ATK','DEF','SPATK','SPDEF','SPD']
function Randomize(){
  x=Math.floor(21*Math.random());
  y=Math.floor(21*Math.random());
  a=Math.floor(28*Math.random());
  b=Math.floor(28*Math.random());
  c=Math.floor(28*Math.random());
  d=Math.floor(28*Math.random());
  while ((y==x)||((restricteds[x]=='Calyrex-Shadow')&&(restricteds[y]=='Calyrex-Ice'))||((restricteds[y]=='Calyrex-Shadow')&&(restricteds[x]=='Calyrex-Ice'))){
    y=Math.floor(21*Math.random());
  }
  while ((b==a)){
    b=Math.floor(28*Math.random());
  }
  while ((c==a)||(c==b)){
    c=Math.floor(28*Math.random());
  }
  while ((d==a)||(d==b)||(d==c)){
    d=Math.floor(28*Math.random());
  }
  item1=item[Math.floor(10*Math.random())]
  item2=item[Math.floor(10*Math.random())]
  if (restricteds[x]=='Zacian-Crowned'){
    item1='Rusted Sword'
  }
    if (restricteds[x]=='Zamazenta-Crowned'){
    item1='Rusted Shield'
  }
  if (restricteds[y]=='Zacian-Crowned'){
    item2='Rusted Sword'
  }
    if (restricteds[y]=='Zamazenta-Crowned'){
    item2='Rusted Shield'
  }
  item3=item[Math.floor(11*Math.random())]
  item4=item[Math.floor(11*Math.random())]
  item5=item[Math.floor(11*Math.random())]
  item6=item[Math.floor(11*Math.random())]
  e=Math.floor(2*Math.random())
    if ((normal[a]=='Incineroar')&&(e==0)){
        item3='Shuca Berry'
      }
    if ((normal[b]=='Incineroar')&&(e==0)){
        item4='Shuca Berry'
      }
    if ((normal[c]=='Incineroar')&& (e==0)){
        item5='Shuca Berry'
      }
    if ((normal[d]=='Incineroar')&& (e==0)){
        item6='Shuca Berry'
      }
  while (item2==item1){
    item2=item[Math.floor(11*Math.random())]
  }
  while ((item2==item3)||(item3==item1)){
    item3=item[Math.floor(11*Math.random())]
  }
  while ((item4==item3)||(item4==item1)||(item4==item2)){
    item4=item[Math.floor(11*Math.random())]
  }
  while ((item5==item3)||(item5==item1)||(item5==item2)||(item5==item4)){
    item5=item[Math.floor(11*Math.random())]
  }
  while ((item6==item3)||(item6==item1)||(item6==item2)||(item6==item4)||(item6==item5)){
    item6=item[Math.floor(11*Math.random())]
  }
  document.getElementById("pokemon1").innerHTML=restricteds[x] +' @ '+item1+ '<br>'+rmove1[x]+'<br>'+rmove2[x]+'<br>'+rmove3[x]+'<br>'+rmove4[x]
    document.getElementById('pokemon2').innerHTML=restricteds[y]+' @ '+item2+ '<br>'+rmove1[y]+'<br>'+rmove2[y]+'<br>'+rmove3[y]+'<br>'+rmove4[y]
  document.getElementById("pokemon3").innerHTML=normal[a]+' @ '+item3+ '<br>'+move1[a]+'<br>'+move2[a]+'<br>'+move3[a]+'<br>'+move4[a]
    document.getElementById('pokemon4').innerHTML=normal[b]+' @ '+item4+'<br>'+move1[b]+'<br>'+move2[b]+'<br>'+move3[b]+'<br>'+move4[b]
    document.getElementById("pokemon5").innerHTML=normal[c]+' @ '+item5+'<br>'+move1[c]+'<br>'+move2[c]+'<br>'+move3[c]+'<br>'+move4[c]
    document.getElementById('pokemon6').innerHTML=normal[d]+' @ '+item6+'<br>'+move1[d]+'<br>'+move2[d]+'<br>'+move3[d]+'<br>'+move4[d]

  }

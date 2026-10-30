(function(root){
  'use strict';
  const key = title => title.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();
  const compare = (a,b) => key(a.title)<key(b.title)?-1:key(a.title)>key(b.title)?1:0;
  function shuffle(list,rng=Math.random){const out=[...list];for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
  function grouped(items,fn){const groups={};items.forEach(x=>(groups[fn(x)]??=[]).push(x));return Object.values(groups);}
  function selectCards(catalog,rank,count,theme,rng=Math.random){
    const pool=rank<2?catalog[theme]:theme==='ice'?catalog.ice:catalog.books;
    let chosen=[];
    if(rank===0){chosen=shuffle(grouped(pool,x=>key(x.title)[0]),rng).slice(0,count).map(g=>shuffle(g,rng)[0]);}
    if(rank===1||rank===2){
      const depth=rank===1?2:3;
      const options=grouped(pool,x=>key(x.title).slice(0,depth)).map(g=>shuffle(g,rng)[0]);
      const pairs=grouped(options,x=>key(x.title).slice(0,depth-1)).filter(g=>g.length>1);
      if(!pairs.length)throw Error('This collection needs a matching prefix.');
      const pair=shuffle(shuffle(pairs,rng)[0],rng).slice(0,2);
      chosen=[...pair,...shuffle(options.filter(x=>!pair.includes(x)),rng).slice(0,count-2)];
    }
    if(rank===3){
      const families=grouped(pool,x=>key(x.title).split(' ')[0]).filter(g=>g.length>1).flat();
      const pairs=grouped(families,x=>key(x.title).split(' ').slice(0,2).join(' ')).filter(g=>g.length>1);
      const pair=shuffle(shuffle(pairs,rng)[0],rng).slice(0,2);
      chosen=[...pair,...shuffle(families.filter(x=>!pair.includes(x)),rng).slice(0,count-2)];
    }
    if(chosen.length!==count)throw Error('This collection does not contain enough cards.');
    return shuffle(chosen,rng);
  }
  function correct(items){return items.every((x,i)=>i===0||compare(items[i-1],x)<=0);}
  function insert(placed,id,index){const next=placed.filter(x=>x!==id);let dest=index;if(placed.indexOf(id)>=0&&placed.indexOf(id)<index)dest--;next.splice(Math.max(0,Math.min(dest,next.length)),0,id);return next;}
  const api={key,compare,shuffle,grouped,selectCards,correct,insert};
  root.SortEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);

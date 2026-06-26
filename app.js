
const DATA = {
days: [
  {name:"Montag", focus:"Unterkörper", info:"Training 70–75 Min. · Protein 120–150 g · Wasser 2–3 L", meals:["07:00 Proteinbrot mit Tilsiter & Gemüse","10:00 Skyr mit TK-Beeren & Walnüssen","12:30 Linsen-Feta-Salat","15:30 150 g Hüttenkäse mit Paprikastreifen","17:30 Familien-Linsen-Bolognese","21:00 Proteinshake optional"]},
  {name:"Dienstag", focus:"Regeneration & Mobility", info:"10–15 Min. Mobility · Protein 120–150 g", meals:["07:00 Protein-Porridge","10:00 Skyr mit TK-Beeren","12:30 Linsen-Feta-Salat","15:30 Edamame mit Meersalz","17:30 Familien-Linsen-Bolognese","20:30 Naturjoghurt optional"]},
  {name:"Mittwoch", focus:"Alltagsbewegung", info:"30–45 Min. Spaziergang · Abendessen außer Haus", meals:["07:00 Overnight Oats","10:00 Hüttenkäse mit Gurkenscheiben","12:30 Couscous-Feta-Salat","15:30 Apfel mit Mandelmus","17:30 Abendessen außer Haus","20:30 Proteinshake optional bei proteinarmem Abendessen"]},
  {name:"Donnerstag", focus:"Oberkörper", info:"Training 70–75 Min. · Protein 120–150 g", meals:["07:00 Proteinbrot mit Tilsiter & Gemüse","10:00 Skyr mit TK-Beeren","12:30 Couscous-Feta-Salat","15:30 150 g Hüttenkäse mit Paprikastreifen","17:30 Mildes Kichererbsencurry","21:00 Proteinshake optional"]},
  {name:"Freitag", focus:"Regeneration & Mobility", info:"10–15 Min. Mobility · Vorbereitung auf Samstag", meals:["07:00 Overnight Oats","10:00 Skyr mit TK-Beeren","12:30 Burrito Bowl","15:30 150 g Hüttenkäse mit Gurkensticks","17:30 Mildes Kichererbsencurry","20:30 Naturjoghurt optional"]},
  {name:"Samstag", focus:"Ganzkörper", info:"Training 75 Min. · Schritte 8.000+", meals:["08:00 Protein-Porridge","10:30 Skyr mit TK-Beeren","13:00 Tofu-Reispfanne (2 Portionen – Eva + Janis)","16:00 Edamame mit Meersalz","18:00 Tofu-Reispfanne (4 Portionen – Familie)","20:30 Proteinshake optional"]},
  {name:"Sonntag", focus:"Meal Prep & Wochenreview", info:"Vorbereitung auf Woche 2", meals:["08:00 Proteinbrot mit Tilsiter & Gemüse","10:30 Skyr mit TK-Beeren","13:00 Kartoffel-Brokkoli-Auflauf (2 Portionen – Eva + Janis)","16:00 Apfel mit Mandelmus","18:00 Kartoffel-Brokkoli-Auflauf (4 Portionen – Familie)"]}
],
workouts: [
 {title:"Montag · Unterkörper", cues:"Rumpf aktiv anspannen · Knie folgen der Fußrichtung · volle Bewegungsamplitude", exercises:[["Kniebeuge","4","8","90–120 Sek.","3–1–1","7"],["Hip Thrust","4","10","90 Sek.","2–1–2","7"],["Rumänisches Kreuzheben","3","10","90 Sek.","3–1–1","7"],["Bulgarian Split Squat","3","10 je Seite","60–90 Sek.","2–1–2","8"],["Abduktion","3","15","45–60 Sek.","2–1–2","8"],["Wadenheben","3","15","45–60 Sek.","2–1–2","8"],["Dead Bug","3","10 je Seite","30 Sek.","kontrolliert","–"],["Pallof Press","3","12 je Seite","30 Sek.","kontrolliert","–"]]},
 {title:"Donnerstag · Oberkörper", cues:"Schulterblätter aktiv · Brustkorb aufrichten · Rumpf stabil", exercises:[["Latzug","4","10","90 Sek.","2–1–2","7"],["Sitzendes Rudern","4","10","90 Sek.","2–1–2","7"],["Schulterdrücken","3","10","90 Sek.","2–1–2","7"],["Seitheben","3","15","60 Sek.","2–1–2","8"],["Face Pull","3","15","60 Sek.","2–1–2","8"],["Bizepscurls","3","12","60 Sek.","2–1–2","8"],["Trizepsdrücken","3","12","60 Sek.","2–1–2","8"],["Bird Dog","3","10 je Seite","30 Sek.","kontrolliert","–"]]},
 {title:"Samstag · Ganzkörper", cues:"Qualität vor Gewicht · Rumpf stabil · kontrollierte Bewegung", exercises:[["Kreuzheben","4","6","120 Sek.","3–1–1","7"],["Beinpresse","3","10","90 Sek.","2–1–2","7"],["Schrägbankdrücken","3","10","90 Sek.","2–1–2","7"],["Latzug enger Griff","3","10","90 Sek.","2–1–2","7"],["Hip Thrust","3","12","90 Sek.","2–1–2","8"],["Face Pull","3","15","60 Sek.","2–1–2","8"],["Farmer Carry","3","30 m","60 Sek.","kontrolliert","7"],["Pallof Press","3","12 je Seite","30 Sek.","kontrolliert","–"]]}
],
recipes: [
 ["Proteinbrot mit Tilsiter & Gemüse","5 Minuten","1 Portion","Montag, Donnerstag, Sonntag Frühstück",["2 Scheiben Proteinbrot","60 g Tilsiter","½ rote Paprika","⅓ Gurke","6–8 Cherrytomaten"],"Gemüse waschen, Brot mit Tilsiter belegen und frisch servieren.","430 kcal · 31 g Protein · 29 g KH · 18 g Fett"],
 ["Protein-Porridge","10 Minuten","1 Portion","Dienstag, Samstag",["60 g Haferflocken","250 ml Milch","30 g Proteinpulver","100 g TK-Beeren","10 g Chiasamen"],"Haferflocken mit Milch aufkochen, Proteinpulver einrühren, Beeren und Chiasamen ergänzen.","500 kcal · 40 g Protein · 49 g KH · 11 g Fett"],
 ["Linsen-Feta-Salat","20 Minuten","4 Portionen","Montag & Dienstag Mittag",["300 g rote Linsen","200 g Feta","1 Gurke","2 Paprika","250 g Cherrytomaten","1 rote Zwiebel","3 EL Olivenöl","Petersilie","Zitronensaft"],"Linsen garen, Gemüse würfeln, Feta zerbröseln, alles vermengen.","510 kcal · 28 g Protein · 46 g KH · 21 g Fett"],
 ["Familien-Linsen-Bolognese","35 Minuten","8 Portionen","Montag & Dienstag Abend",["500 g rote Linsen","800 g Vollkornnudeln","2 Packungen passierte Tomaten","2 Zwiebeln","3 Möhren","2 Zucchini","3 Knoblauchzehen","2 EL Tomatenmark"],"Gemüse würfeln, anschwitzen, Linsen und Tomaten zugeben, köcheln lassen, Nudeln separat kochen.","620 kcal · 31 g Protein · 82 g KH · 14 g Fett"],
 ["Couscous-Feta-Salat","15 Minuten","4 Portionen","Mittwoch & Donnerstag Mittag",["250 g Couscous","200 g Feta","1 Gurke","2 Paprika","250 g Cherrytomaten","Petersilie","Zitronensaft","2 EL Olivenöl"],"Couscous quellen lassen, Gemüse schneiden, Feta ergänzen, abschmecken.","490 kcal · 24 g Protein · 47 g KH · 20 g Fett"],
 ["Mildes Kichererbsencurry","30 Minuten","8 Portionen","Donnerstag & Freitag Abend",["4 Dosen Kichererbsen","2 Dosen Kokosmilch","2 Brokkoli","2 Paprika","2 Zwiebeln","2 EL milde Currypaste","500 g Basmatireis"],"Reis kochen. Gemüse anbraten, Currypaste, Kokosmilch und Kichererbsen zugeben, köcheln lassen.","610 kcal · 22 g Protein · 72 g KH · 21 g Fett"],
 ["Burrito Bowl","20 Minuten","2 Portionen","Freitag Mittag",["200 g Basmatireis","200 g Räuchertofu","1 Paprika","1 Dose Kidneybohnen","1 kleine Dose Mais","½ Avocado","Limettensaft"],"Reis kochen, Tofu anbraten, alles als Bowl anrichten. Avocado frisch ergänzen.","670 kcal · 33 g Protein · 67 g KH · 24 g Fett"],
 ["Tofu-Reispfanne","25 Minuten","6 Portionen","Samstag Mittag Eva + Janis, Samstag Abend Familie",["400 g Räuchertofu","450 g Basmatireis","2 Brokkoli","2 Paprika","2 Zucchini","2 Knoblauchzehen","3 EL Sojasauce","1 EL Sesam"],"Reis kochen, Tofu anbraten, Gemüse garen, alles mit Sojasauce vermengen.","560 kcal · 27 g Protein · 59 g KH · 17 g Fett"],
 ["Kartoffel-Brokkoli-Auflauf","40 Minuten","6 Portionen","Sonntag Mittag Eva + Janis, Sonntag Abend Familie",["1,5 kg Kartoffeln","2 Brokkoli","300 ml Kochsahne","250 g geriebener Tilsiter","Muskat","Salz","Pfeffer"],"Kartoffeln schneiden, Brokkoli vorgaren, schichten, Sahne und Käse ergänzen, 35–40 Min. bei 180 °C backen.","540 kcal · 24 g Protein · 49 g KH · 22 g Fett"]
],
shopCats:{
"Gemüse":["10 Paprika","4 Gurken","700 g Cherrytomaten","4 Brokkoli","4 Zucchini","1 Beutel Möhren","1 Netz Zwiebeln","1 Knolle Knoblauch","2 kg Kartoffeln","1 Bund Petersilie","1 Zitrone","1 Limette","1 Avocado"],
"Obst":["1 Beutel Äpfel","1 Bund Bananen","750 g TK-Beeren"],
"Milchprodukte":["1 Packung Tilsiter (500–600 g)","2 Packungen Feta","2 Becher Skyr","2 Becher Hüttenkäse","1 Liter Milch","1 Becher Kochsahne"],
"Vorrat & Protein":["1 kg rote Linsen","4 Dosen Kichererbsen","1 Dose Kidneybohnen","1 kleine Dose Mais","Proteinbrot","Vollkornnudeln","1,5 kg Basmatireis","Couscous","Haferflocken","Linsenwaffeln","3 Packungen Räuchertofu","Proteinpulver"],
"Sonstiges":["Passierte Tomaten","Tomatenmark","Olivenöl","Kokosmilch","milde Currypaste","Sojasauce","Chiasamen","Walnüsse","Mandelmus","Sesam","Italienische Kräuter","Muskat","Salz","Pfeffer"]
}
};

function $(id){return document.getElementById(id)}
function renderDays(){
 $("daysContainer").innerHTML = DATA.days.map((d,i)=>`
 <div class="card">
   <div><h2>${d.name}</h2><span class="badge">${d.focus}</span></div>
   <p class="small">${d.info}</p><h3>Ernährung</h3>
   ${d.meals.map((m,j)=>`<label class="item"><input type="checkbox" data-id="meal_${i}_${j}"><span>${m}</span></label>`).join("")}
   <h3>Tagesziele</h3>
   <label class="item"><input type="checkbox" data-id="day_${i}_protein">Proteinziel erreicht</label>
   <label class="item"><input type="checkbox" data-id="day_${i}_water">Wasserziel erreicht</label>
   <label class="item"><input type="checkbox" data-id="day_${i}_steps">Schritte erreicht</label>
   <h3>Notizen</h3><textarea rows="3" data-id="day_note_${i}"></textarea>
 </div>`).join("");
}
function renderWorkouts(){
 $("workoutContainer").innerHTML = DATA.workouts.map((w,wi)=>`
 <div class="card">
   <h2>${w.title}</h2><div class="note"><b>Technik-Cues:</b> ${w.cues}</div>
   ${w.exercises.map((e,ei)=>`
   <div class="exercise-card">
     <div class="exercise-head"><span>${e[0]}</span><label><input type="checkbox" data-id="ex_done_${wi}_${ei}"> erledigt</label></div>
     <div class="exercise-meta"><div><b>${e[1]}</b>Sätze</div><div><b>${e[2]}</b>Wdh.</div><div><b>${e[3]}</b>Pause</div><div><b>${e[5]}</b>RPE</div></div>
     <div class="grid" style="margin-top:10px"><input type="text" data-id="ex_weight_${wi}_${ei}" placeholder="Gewicht"><input type="text" data-id="ex_rpe_${wi}_${ei}" placeholder="RPE tatsächlich"></div>
     <textarea rows="2" data-id="ex_note_${wi}_${ei}" placeholder="Notizen"></textarea>
   </div>`).join("")}
   <h3>Training heute</h3><div class="grid"><input type="text" data-id="duration_${wi}" placeholder="Trainingsdauer"><input type="text" data-id="avg_rpe_${wi}" placeholder="Durchschnittliche RPE"></div>
 </div>`).join("");
}
function renderRecipes(){
 $("recipeContainer").innerHTML = DATA.recipes.map((r,i)=>`
 <div class="card recipe"><div class="row"><h2>Rezept ${i+1}</h2><span class="badge">${r[2]}</span></div><h3>${r[0]}</h3>
 <div class="grid"><div class="pill">${r[1]}</div><div class="pill">${r[3]}</div></div>
 <h4>Zutaten</h4><ul>${r[4].map(z=>`<li>${z}</li>`).join("")}</ul>
 <h4>Zubereitung</h4><p>${r[5]}</p><h4>Nährwerte</h4><p class="pill">${r[6]}</p>
 <h4>Kinderfreundlich</h4><p class="small">Mild würzen, Komponenten bei Bedarf getrennt servieren.</p></div>`).join("");
}
function renderShop(){
 $("shopContainer").innerHTML = Object.entries(DATA.shopCats).map(([cat,items],ci)=>`
 <h3>${cat}</h3>${items.map((it,ii)=>`<label class="item"><input type="checkbox" data-id="shop_${ci}_${ii}"><span>${it}</span></label>`).join("")}`).join("");
}
function updateProgress(){
 const checks = [...document.querySelectorAll('input[type="checkbox"][data-id]')];
 const done = checks.filter(c=>c.checked).length;
 const pct = checks.length ? Math.round(done/checks.length*100) : 0;
 const bar = $("progressbar"); if(bar) bar.style.width = pct + "%";
 const txt = $("progressText"); if(txt) txt.textContent = pct + "% erledigt";
}
function save(el){
 if(!el.dataset.id) return;
 localStorage.setItem(el.dataset.id, el.type==="checkbox" ? String(el.checked) : el.value);
 updateProgress();
}
function restore(){
 document.querySelectorAll("[data-id]").forEach(el=>{
  const v=localStorage.getItem(el.dataset.id);
  if(v!==null){ if(el.type==="checkbox") el.checked=(v==="true"); else el.value=v; }
 });
 updateProgress();
}
function showSection(id){
 document.querySelectorAll("section").forEach(s=>s.classList.remove("visible"));
 const sec=$(id); if(sec) sec.classList.add("visible");
 document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active", a.dataset.target===id));
 window.scrollTo({top:0, behavior:"smooth"});
}
document.addEventListener("DOMContentLoaded",()=>{
 renderDays(); renderWorkouts(); renderRecipes(); renderShop(); restore();
 document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();showSection(a.dataset.target)}));
 document.addEventListener("input",e=>save(e.target));
 document.addEventListener("change",e=>save(e.target));
 if("serviceWorker" in navigator){ navigator.serviceWorker.register("./service-worker.js").catch(()=>{}); }
});

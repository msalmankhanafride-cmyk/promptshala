const P=[
["Website","Landing page","Build a responsive landing page for {business} in HTML, CSS and JS. Style: {style}. Include hero, services, testimonials, pricing, FAQ and a clear call to action. Mobile-first, SEO-ready, accessible.",{business:"coffee shop",style:"minimal"}],
["Website","Pre-launch checklist","Act as a web product lead. For a {business} website, list everything needed before launch: pages, SEO, speed, security, analytics, legal pages. Order by priority.",{business:"online store"}],
["Website","Admin dashboard","Code an admin dashboard for {business}: sidebar, stat cards, charts, searchable tables, dark/light toggle. Style: {style}.",{business:"gym",style:"clean"}],
["Social Media","Viral reel script","Write a 30-second {platform} script about {topic}. Hook: \"{hook}\". Add text overlays, music vibe and fast cuts.",{platform:"Instagram Reel",topic:"AI tools",hook:"Yeh tool free hai, aur kaafi kam log jaante hain"}],
["Social Media","Caption pack","Write 10 {platform} captions with hashtags about {topic}. Tone: {tone}.",{platform:"Instagram",topic:"fitness",tone:"friendly"}],
["Social Media","30-day content calendar","Create a 30-day content calendar for a {niche} creator on {platform}: post idea, format, hook and CTA for each day.",{niche:"tech",platform:"YouTube Shorts"}],
["AI Images","Photo prompt","35mm photo of {subject}, {light}, {mood} mood, highly detailed, sharp focus, professional composition --ar 16:9",{subject:"a lone astronaut",light:"golden hour",mood:"calm"}],
["AI Images","Product shot","Product photo of {product} on a clean surface, {light}, premium look, soft shadows, ad-ready.",{product:"a ceramic mug",light:"soft window light"}],
["AI Images","Poster prompt","Minimal poster for {brand} with bold typography, {palette} palette, lots of negative space.",{brand:"a music festival",palette:"saffron and teal"}],
["AI Video","Cinematic clip","Cinematic video: {subject}, slow dolly-in, {light}, 24fps, 5 seconds, smooth realistic motion, no text.",{subject:"a fisherman at dawn",light:"misty morning light"}],
["AI Video","Video ad script","Write a 30-second ad script and shot list for {business}. Tone: {tone}. Vertical 9:16, hook in first 3 seconds.",{business:"a bakery",tone:"warm"}],
["Coding","Build a project","Write clean, commented {language} code for {project}. Include setup steps, folder structure and basic tests. Explain for beginners.",{language:"Python",project:"a REST API with login"}],
["Coding","Code review","Review this {language} code for bugs, security and performance. Give fixes with short explanations.\n\n{code}",{language:"JavaScript",code:"[paste code here]"}],
["Coding","Learn by building","Teach me {topic} step by step as a beginner, then give a mini project and 5 practice questions.",{topic:"SQL joins"}],
["YouTube","Titles and thumbnails","Give 15 high-CTR video titles and thumbnail concepts for a {niche} channel aimed at {audience}.",{niche:"AI tools",audience:"beginners"}],
["YouTube","Full script","Write a YouTube script on {topic}: hook, intro, 5 key points, CTA. Tone: {tone}. Length: {mins} minutes.",{topic:"free AI tools",tone:"friendly",mins:"8"}],
["Business","Idea validation","Act as a startup advisor. Validate this idea: {idea}. Cover market size, competitors, revenue model, risks and a 30-day launch plan.",{idea:"tiffin delivery for students"}],
["Business","Cold email","Write a cold email and 2 follow-ups for {business} to win {goal}. Under 120 words each. Tone: {tone}.",{business:"a web design studio",goal:"more clients",tone:"friendly"}],
["Business","Marketing plan","Plan a 4-week marketing campaign for {business}: channels, content calendar, budget split, KPIs.",{business:"a local salon"}],
["Writing","Blog post","Write a {words}-word blog post on {topic} for {audience}. SEO headings, strong hook, clear conclusion.",{words:"1000",topic:"AI tools",audience:"beginners"}],
["Writing","Rewrite","Rewrite my text to be clearer and more {tone}. Keep the meaning, cut filler.\n\n{text}",{tone:"friendly",text:"[paste text here]"}],
["AI Tools","Prompt improver","Act as a prompt engineer. Improve this prompt by adding role, context, format and examples. Topic: {topic}.\n\n{prompt}",{topic:"marketing",prompt:"[paste prompt here]"}],
["AI Tools","Daily AI workflow","Build a daily AI workflow for a {role}: tools, exact prompts and time saved.",{role:"freelance designer"}],
["Study","30-day learning plan","Create a 30-day plan to learn {skill} as a beginner: daily tasks, free resources and a final project.",{skill:"video editing"}]];
const $=s=>document.querySelector(s),cats=["All","Saved",...new Set(P.map(p=>p[0]))];
let cat="All",q="",saved=JSON.parse(localStorage.getItem("ps_saved")||"[]"),cur;
function render(){const l=P.map((p,i)=>({p,i})).filter(({p,i})=>(cat=="All"||(cat=="Saved"?saved.includes(i):p[0]==cat))&&(p[1]+p[2]+p[0]).toLowerCase().includes(q));
$("#grid").innerHTML=l.length?l.map(({p,i})=>`<button class="card" data-i="${i}"><small>${p[0]}</small><h3>${p[1]}</h3><span>${p[2].slice(0,95)}…</span></button>`).join(""):'<p class="empty">Kuch nahi mila. Doosra shabd try karo.</p>';
$("#count").textContent=l.length+" prompt templates"}
$("#chips").innerHTML=cats.map(c=>`<button class="chip${c==cat?" on":""}">${c}</button>`).join("");
$("#chips").onclick=e=>{if(!e.target.matches(".chip"))return;cat=e.target.textContent;document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c==e.target));render()};
$("#q").oninput=e=>{q=e.target.value.toLowerCase();render()};
function build(){let t=P[cur][2];document.querySelectorAll("#fields input").forEach(i=>t=t.split("{"+i.name+"}").join(i.value||"{"+i.name+"}"));$("#out").textContent=t}
$("#grid").onclick=e=>{const c=e.target.closest(".card");if(!c)return;cur=+c.dataset.i;const p=P[cur];$("#dt").textContent=p[1];
$("#fields").innerHTML=Object.entries(p[3]).map(([k,v])=>`<label>${k}</label><input name="${k}" value="${v.replace(/"/g,"&quot;")}">`).join("");
$("#save").textContent=saved.includes(cur)?"Saved ✓":"Save";build();$("#dlg").showModal()};
$("#fields").oninput=build;
$("#copy").onclick=async e=>{await navigator.clipboard.writeText($("#out").textContent);e.target.textContent="Copied ✓";setTimeout(()=>e.target.textContent="Copy prompt",1500)};
$("#save").onclick=e=>{saved=saved.includes(cur)?saved.filter(x=>x!=cur):[...saved,cur];localStorage.setItem("ps_saved",JSON.stringify(saved));e.target.textContent=saved.includes(cur)?"Saved ✓":"Save";render()};
$("#close").onclick=()=>$("#dlg").close();render();

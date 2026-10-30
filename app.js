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
["Study","30-day learning plan","Create a 30-day plan to learn {skill} as a beginner: daily tasks, free resources and a final project.",{skill:"video editing"}],
["Website","Portfolio site","Design a personal portfolio website for a {role}. Sections: about, projects, skills, contact. Style: {style}. Give full HTML and CSS.",{role:"photographer",style:"minimal"}],
["Website","SEO audit","Audit this website idea for SEO: {site}. List keywords, page titles, meta descriptions and 5 blog topics.",{site:"online tutoring"}],
["Website","FAQ writer","Write 10 FAQs with clear answers for a {business} website. Tone: {tone}.",{business:"yoga studio",tone:"friendly"}],
["Website","Product page copy","Write conversion-focused product page copy for {product}: headline, 5 benefits, objections, CTA.",{product:"a water bottle"}],
["Social Media","Hashtag set","Give 30 relevant {platform} hashtags for {topic}, grouped by reach: big, medium, niche.",{platform:"Instagram",topic:"home workouts"}],
["Social Media","Carousel outline","Plan an 8-slide {platform} carousel on {topic}. Slide 1 is a hook, the last slide is a CTA.",{platform:"Instagram",topic:"budget travel"}],
["Social Media","Comment replies","Write 10 friendly replies to comments on a post about {topic}, each under 20 words.",{topic:"a new product launch"}],
["Social Media","Bio writer","Write 5 {platform} bios for a {niche} creator. Max 150 characters each.",{platform:"Instagram",niche:"tech"}],
["AI Images","Logo brief","Minimal vector logo for {brand}, {style} style, simple shapes, {palette} colors, white background.",{brand:"a coffee brand",style:"modern",palette:"brown and cream"}],
["AI Images","Portrait","Studio portrait of {subject}, {light}, shallow depth of field, 85mm lens, natural skin texture.",{subject:"a smiling chef",light:"soft window light"}],
["AI Images","Food photo","Overhead photo of {dish} on a rustic table, {light}, steam rising, editorial food photography.",{dish:"butter chicken",light:"warm natural light"}],
["AI Images","Interior design","Photo of a {room}, {style} interior, {light}, realistic materials, wide angle.",{room:"living room",style:"modern Indian",light:"warm evening light"}],
["AI Video","Product reveal","Cinematic product reveal of {product}, slow rotation, {light}, dark background, 5 seconds, no text.",{product:"a smartwatch",light:"rim light"}],
["AI Video","Nature timelapse","Timelapse of {scene}, {light}, smooth camera, 5 seconds, no text.",{scene:"clouds over mountains",light:"sunrise light"}],
["AI Video","Talking presenter","A friendly presenter talks to camera about {topic} in a bright room, vertical 9:16, natural gestures, 10 seconds.",{topic:"saving money"}],
["AI Video","Story scene","Short film scene: {scene}. Camera: {camera}. Mood: {mood}. 5 seconds, no text.",{scene:"a girl walking in the rain with an umbrella",camera:"slow tracking shot",mood:"calm"}],
["Coding","Bug fixer","Here is my error: {error}. Explain the cause in simple words and give the fixed {language} code.",{error:"[paste error]",language:"Python"}],
["Coding","SQL helper","Write a SQL query to {task}. Tables: {tables}. Explain each part.",{task:"find the top 5 customers by spend",tables:"customers, orders"}],
["Coding","Explain code","Explain this {language} code line by line for a beginner, then suggest 3 improvements.\n\n{code}",{language:"JavaScript",code:"[paste code]"}],
["Coding","API design","Design a REST API for {app}: endpoints, request and response JSON, auth and error codes.",{app:"a todo app"}],
["Coding","Unit tests","Write unit tests in {language} for this function and cover edge cases.\n\n{code}",{language:"Python",code:"[paste function]"}],
["YouTube","Shorts script","Write a 45-second YouTube Shorts script on {topic}. Hook in 2 seconds, 3 facts, CTA.",{topic:"a daily habit"}],
["YouTube","Description and tags","Write an SEO description and 15 tags for a YouTube video titled \"{title}\".",{title:"5 Free AI Tools"}],
["YouTube","Channel ideas","Give 20 video ideas for a {niche} channel for {audience}, with a title for each.",{niche:"study tips",audience:"college students"}],
["YouTube","Thumbnail text","Suggest 10 short thumbnail texts (max 4 words) for a video about {topic}.",{topic:"AI tools"}],
["Business","Brand name ideas","Suggest 20 short brand names for {business}. Add a tagline for the top 5.",{business:"a tiffin service"}],
["Business","Pricing plan","Suggest 3 pricing tiers for {product} aimed at {audience}, with features per tier.",{product:"an online course",audience:"beginners"}],
["Business","WhatsApp pitch","Write a short WhatsApp message offering {service} to a local {customer}. Polite, under 80 words.",{service:"website design",customer:"shop owner"}],
["Business","SWOT analysis","Do a SWOT analysis of {business} in {city}, then give 3 actions.",{business:"a small gym",city:"Lucknow"}],
["Business","Customer reply","Write a polite reply to this customer complaint and offer a fix.\n\n{complaint}",{complaint:"[paste complaint]"}],
["Writing","Email writer","Write a {tone} email to {person} about {topic}. Keep it under 120 words.",{tone:"polite",person:"my manager",topic:"a leave request"}],
["Writing","Story starter","Write the first 200 words of a {genre} story set in {place}. End on a cliffhanger.",{genre:"mystery",place:"an old library"}],
["Writing","Proofread","Fix grammar and spelling in this text and show what you changed.\n\n{text}",{text:"[paste text]"}],
["Writing","Summarizer","Summarize this in {points} bullet points and one line of key takeaway.\n\n{text}",{points:"5",text:"[paste text]"}],
["AI Tools","Role prompt","You are an expert {role}. Ask me 5 questions first, then help me with {goal}.",{role:"career coach",goal:"a job switch"}],
["AI Tools","Compare tools","Compare {a} and {b} for {use}: pros, cons, price and a verdict.",{a:"ChatGPT",b:"Gemini",use:"students"}],
["AI Tools","Step-by-step guide","Explain how to {task} using AI, step by step, with exact prompts I can paste.",{task:"make a YouTube video"}],
["Study","Quiz maker","Make a {n}-question quiz on {topic} for {level} students with answers and explanations.",{n:"10",topic:"photosynthesis",level:"Class 8"}],
["Study","Exam notes","Make short revision notes on {topic} with key terms, formulas and 5 likely exam questions.",{topic:"Newton's laws"}],
["Study","Explain simply","Explain {topic} like I am 12, using one everyday example and a 3-line summary.",{topic:"inflation"}],
["Study","Study timetable","Create a {weeks}-week study timetable for {exam}. I can study {hours} hours a day.",{weeks:"6",exam:"board exams",hours:"4"}],
["Study","Interview prep","Ask me 10 {role} interview questions one by one and give feedback on each answer.",{role:"fresher software"}]];
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
$("#close").onclick=()=>$("#dlg").close();$("#stats").textContent=P.length+" templates · "+(cats.length-2)+" categories · 100% free";render();

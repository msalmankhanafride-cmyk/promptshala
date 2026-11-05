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
["Study","Interview prep","Ask me 10 {role} interview questions one by one and give feedback on each answer.",{role:"fresher software"}],
["Website","Coming soon page","Write copy and HTML for a coming-soon page for {business}: headline, subtext, email signup, countdown.",{business:"a bakery"}],
["Website","Blog outline","Create a detailed blog outline on {topic} for {audience} with H2/H3 headings and target keywords.",{topic:"AI tools",audience:"students"}],
["Website","Pricing page","Write a pricing page for {product} with 3 plans, feature list, FAQ and a strong CTA.",{product:"a photo editing app"}],
["Social Media","Story ideas","Give 15 {platform} story ideas for a {niche} page that drive replies and saves.",{platform:"Instagram",niche:"fitness"}],
["Social Media","Trend caption","Write 5 captions that connect {trend} to my {niche} content, each with a hook and CTA.",{trend:"a viral audio",niche:"food"}],
["Social Media","Giveaway post","Write a giveaway post for {brand} with simple rules, deadline and hashtags. Platform: {platform}.",{brand:"a skincare shop",platform:"Instagram"}],
["AI Images","App icon","App icon for {app}, {style} style, bold simple shape, {palette} colors, rounded square, no text.",{app:"a habit tracker",style:"flat",palette:"purple and mint"}],
["AI Images","Anime character","Anime style character: {subject}, {mood} mood, detailed eyes, clean line art, soft shading, full body.",{subject:"a student with a backpack",mood:"cheerful"}],
["AI Images","Fantasy landscape","Wide fantasy landscape: {scene}, {light}, epic scale, matte painting, highly detailed.",{scene:"floating islands over a sea of clouds",light:"golden sunset"}],
["AI Video","Drone shot","Aerial drone shot of {scene}, {light}, slow forward glide, cinematic, 5 seconds, no text.",{scene:"a coastal village",light:"early morning light"}],
["AI Video","Food ad","Close-up food ad of {dish}, steam rising, {light}, slow motion, 5 seconds, vertical 9:16, no text.",{dish:"hot jalebi",light:"warm light"}],
["AI Video","Explainer scenes","Break a 30-second explainer about {topic} into 6 scenes with visuals, narration and on-screen text.",{topic:"how UPI works"}],
["Coding","Refactor","Refactor this {language} code for readability and performance. Explain every change.\n\n{code}",{language:"Python",code:"[paste code]"}],
["Coding","Regex helper","Write a regex to {task}. Give 5 test cases and explain each part.",{task:"validate an Indian phone number"}],
["Coding","Landing page code","Build a one-page {niche} landing page in HTML and Tailwind, mobile-first, with sections and a contact form.",{niche:"tuition center"}],
["Coding","Git help","Explain how to {task} in Git step by step with commands and what each does.",{task:"undo my last commit"}],
["YouTube","Hook ideas","Write 10 opening hooks (under 15 words) for a YouTube video about {topic}.",{topic:"free AI tools"}],
["YouTube","Video outline","Outline a {mins}-minute YouTube video on {topic}: hook, sections with timestamps, CTA.",{mins:"8",topic:"prompt engineering"}],
["Business","Business plan","Write a one-page business plan for {business} in {city}: problem, customers, offer, costs, revenue, first 30 days.",{business:"a tiffin service",city:"Delhi"}],
["Business","Ad copy","Write 5 Facebook and Instagram ad copies for {product} aimed at {audience}. Include headline and CTA.",{product:"an online course",audience:"college students"}],
["Business","Meeting summary","Turn these meeting notes into a summary, decisions and an action list with owners.\n\n{notes}",{notes:"[paste notes]"}],
["Business","LinkedIn post","Write a LinkedIn post about {topic} with a hook, 3 lessons and a question at the end. Tone: {tone}.",{topic:"my first client",tone:"humble"}],
["Writing","Product description","Write 3 product descriptions for {product}, each under 60 words, highlighting {benefit}.",{product:"a leather wallet",benefit:"durability"}],
["Writing","Speech writer","Write a {mins}-minute speech for {occasion}. Tone: {tone}. Include a personal story.",{mins:"3",occasion:"a farewell",tone:"warm"}],
["Writing","Poem","Write a short poem about {topic} in a {mood} mood, 8 lines, simple words.",{topic:"monsoon",mood:"nostalgic"}],
["AI Tools","Custom GPT brief","Write instructions for a custom AI assistant that helps with {task}. Include role, tone, rules and 3 sample chats.",{task:"resume writing"}],
["AI Tools","Prompt tester","Here is my prompt: {prompt}. Find its weaknesses and give 3 improved versions.",{prompt:"[paste prompt]"}],
["AI Tools","Automate a task","Suggest a free way to automate {task} using AI tools, with exact steps.",{task:"replying to customer queries"}],
["Study","Flashcards","Make {n} flashcards (question and answer) on {topic} for {level}.",{n:"15",topic:"the French Revolution",level:"Class 9"}],
["Study","Essay outline","Create an essay outline on {topic} with thesis, 4 arguments, counterargument and conclusion.",{topic:"social media and teenagers"}],
["Study","Math steps","Solve this problem step by step and explain each step simply: {problem}",{problem:"[type problem]"}],
["Study","Language practice","Be my {language} practice partner at {level} level. Start a conversation about {topic} and correct my mistakes.",{language:"English",level:"beginner",topic:"daily routine"}],
["Study","Mock interview","Run a mock interview for a {role} position. Ask 8 questions one at a time and score my answers out of 10.",{role:"digital marketing"}]];
const slug=i=>(P[i][0]+"-"+P[i][1]).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
function toast(m){let t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.style.cssText="position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#12202A;color:#fff;padding:12px 20px;border-radius:99px;z-index:99;font:600 15px Hind,sans-serif;box-shadow:0 6px 24px #0006;transition:opacity .2s;max-width:90vw;text-align:center"}(document.querySelector("dialog[open]")||document.body).appendChild(t);t.textContent=m;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,2000)}
document.addEventListener("focusin",e=>{if(e.target.matches("input"))setTimeout(()=>e.target.scrollIntoView({block:"center",behavior:"smooth"}),300)});
if(document.getElementById("grid")){
const $=s=>document.querySelector(s),cats=["All","Saved",...new Set(P.map(p=>p[0]))];
let cat="All",q="",saved=JSON.parse(localStorage.getItem("ps_saved")||"[]"),cur;
function render(){const l=P.map((p,i)=>({p,i})).filter(({p,i})=>(cat=="All"||(cat=="Saved"?saved.includes(i):p[0]==cat))&&(p[1]+p[2]+p[0]).toLowerCase().includes(q));
$("#grid").innerHTML=l.length?l.map(({p,i})=>`<button class="card" data-i="${i}"><small>${p[0]}</small><h3>${p[1]}</h3><span>${p[2].slice(0,95)}…</span></button>`).join(""):'<p class="empty">Kuch nahi mila. Doosra shabd try karo.</p>';
$("#count").textContent=l.length+" prompt templates"}
$("#chips").innerHTML=cats.map(c=>`<button class="chip${c==cat?" on":""}">${c}</button>`).join("");
$("#chips").onclick=e=>{if(!e.target.matches(".chip"))return;cat=e.target.textContent;document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c==e.target));render()};
$("#q").oninput=e=>{q=e.target.value.toLowerCase();render()};
function build(){$("#page").href="/p/"+slug(cur);{const x=typeof EX!="undefined"&&EX[slug(cur)];$("#exd").hidden=!x;if(x)$("#ext").textContent=x}let t=P[cur][2];document.querySelectorAll("#fields input").forEach(i=>t=t.split("{"+i.name+"}").join(i.value||"{"+i.name+"}"));$("#out").textContent=t}
$("#grid").onclick=e=>{const c=e.target.closest(".card");if(!c)return;cur=+c.dataset.i;const p=P[cur];$("#dt").textContent=p[1];
$("#fields").innerHTML=Object.entries(p[3]).map(([k,v])=>`<label>${k}</label><input name="${k}" value="${v.replace(/"/g,"&quot;")}">`).join("");
$("#save").textContent=saved.includes(cur)?"Saved ✓":"Save";$("#exd").open=false;build();$("#dlg").showModal()};
$("#fields").oninput=build;
$("#copy").onclick=async e=>{await navigator.clipboard.writeText($("#out").textContent);e.target.textContent="Copied ✓";toast("Prompt copy ho gaya ✓ Ab AI tool mein paste karo");setTimeout(()=>e.target.textContent="Copy prompt",1500)};
$("#save").onclick=e=>{saved=saved.includes(cur)?saved.filter(x=>x!=cur):[...saved,cur];localStorage.setItem("ps_saved",JSON.stringify(saved));e.target.textContent=saved.includes(cur)?"Saved ✓":"Save";render()};
$("#close").onclick=()=>$("#dlg").close();$("#stats").textContent=P.length+" templates · "+(cats.length-2)+" categories · 100% free";render();

$("#share").onclick=async()=>{const u=location.origin+"/p/"+slug(cur);try{if(navigator.share)await navigator.share({title:P[cur][1]+" — PromptPitara",url:u});else{await navigator.clipboard.writeText(u);$("#share").textContent="Link copied ✓"}}catch(e){}};
}

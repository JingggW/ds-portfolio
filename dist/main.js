(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("top-nav"),e.appendChild(t);const n=document.createElement("p");n.textContent="Jinggg",t.appendChild(n);const a=document.createElement("div");a.classList.add("top-btn-groups");const o=document.createElement("button");o.textContent="Home",a.appendChild(o);const d=document.createElement("button");d.textContent="About",a.appendChild(d);const c=document.createElement("button");c.textContent="Contact",a.appendChild(c),t.appendChild(a),e.appendChild(t);const s=document.createElement("div");s.classList.add("sec-nav");const i=document.createElement("div");i.classList.add("sec-btn-groups");const l=document.createElement("button");l.textContent="Data Projects",i.appendChild(l);const r=document.createElement("button");r.textContent="Web Dev",i.appendChild(r);const p=document.createElement("button");p.textContent="Hardware Dev",i.appendChild(p);const m=document.createElement("button");m.textContent="Publications",i.appendChild(m);const h=document.createElement("button");h.textContent="Misc.",i.appendChild(h),s.appendChild(i),e.appendChild(s);const u=document.createElement("div");u.classList.add("main-content");const g=document.createElement("div");g.classList.add("left-intro"),u.appendChild(g);const C=document.createElement("p");C.textContent="Jing Wei - A Tech All-rounder",g.appendChild(C);const v=document.createElement("p");v.textContent="PhD Candidate @ University of Melbourne",g.appendChild(v);const E=document.createElement("p");E.textContent="Over the past 7 years, my research has focused on areas such as wearable technology, contactless sensing, voice assistants, and most recently - ChatGPT. With a diverse skill set in software, hardware, and data analysis, I am dedicated to designing intuitive and user-friendly solutions that enhance the way we interact with technology.",g.appendChild(E);const b=document.createElement("button");b.textContent="Download my CV",g.appendChild(b),b.addEventListener("click",(()=>{window.location.href="./images/speaker_vis.png"})),e.appendChild(u);const w=document.createElement("div");w.classList.add("right-img"),u.appendChild(w);const y=["./images/chatbot.png","./images/speaker.png","./images/delay.png","./images/wearable.png","./images/respiration.png","./images/web.png"],x=["GPT-3 Chatbot","Proactive Smart Speaker","Speaker Network Delay Analysis","Sleep Monitoring Through Wearable","Wireless Respiration Tracking","Web Development Projects"];for(let e=0;e<6;e++){const t=document.createElement("div"),n=document.createElement("img");n.src=y[e];const a=document.createElement("div"),o=document.createElement("p");o.textContent=x[e],a.appendChild(o),a.classList.add("overlay"),t.appendChild(n),t.appendChild(a),w.appendChild(t)}const f=document.querySelector(".footer"),k=["./images/github.svg","./images/linkedin.svg","./images/school.svg","./images/twitter.svg"],L=["https://github.com/JingWei-S","https://www.linkedin.com/in/jing-wei-3a846b13b/","https://scholar.google.com.au/citations?user=z45wQDYAAAAJ&hl=en","https://twitter.com/JingggWei"];for(let e=0;e<4;e++){const t=document.createElement("a");t.href=L[e];const n=document.createElement("img");n.src=k[e],t.appendChild(n),f.appendChild(t)}})();
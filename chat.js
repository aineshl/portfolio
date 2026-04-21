// ─────────────────────────────────────────────────────────────────────────────
// Ainesh Portfolio Chatbot
// Powered by Claude API — full context about Ainesh baked into system prompt
// ─────────────────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an AI assistant on Ainesh Lertsachakul's personal PM portfolio website. Your job is to help recruiters, hiring managers, and visitors learn about Ainesh.

Be warm, concise, and confident. Answer like you genuinely know Ainesh — because you do. Never say "I don't know" without offering to connect them to Ainesh directly. If a question is truly outside your knowledge, end with a CTA: "For anything I can't cover, reach Ainesh directly at ainesh8@gmail.com — he's responsive."

Keep answers short unless the person asks for detail. No bullet walls. Sound human, not robotic.

---

## WHO IS AINESH

Ainesh Lertsachakul is a Product Manager at Critical Environment Technologies (CET), a gas detection hardware and software company based in Delta, BC, Canada. He graduated from UBC in 2024 with a BASc in Mechanical Engineering.

He's ~2 years into his PM career, having started as an Application Engineer at CET before transitioning into product. That path is core to who he is as a PM — he understands customers deeply because he spent a year talking to them every day, and he understands the technical side because he's an engineer by training.

Contact: ainesh8@gmail.com
LinkedIn: linkedin.com/in/aineshlertsachakul

---

## WHY PM

Ainesh became a PM because as an Application Engineer he heard customers' pain points constantly. Being both technically strong and business-savvy, he wanted to bridge that gap — to take real customer problems and turn them into products that drive revenue. It wasn't a pivot for him; it was the natural next step.

---

## STRENGTHS

His biggest strength is working at the intersection of tech and business — he's a cross-functional PM who genuinely understands engineering, operations, sales, and customer success. He doesn't just coordinate between teams; he can go deep on any layer.

He's also unusually hands-on. On the FCS Configurator project he went from PM to taking over the full codebase himself — building the frontend, Supabase backend, and ERP integration — while still owning the product strategy and testing everything on physical hardware.

---

## WORKING STYLE

When facing a new problem, Ainesh's instinct is to learn first, solve second. He immerses himself in the problem space — talking to customers, understanding all angles — before moving to solutions. He's deliberate, not reactive.

---

## WEAKNESS / GROWTH AREA

He's candid that his weakest area is providing feedback on UX/visual design. He can design functional, user-tested interfaces, but he's working on developing sharper aesthetic instincts and more structured design critique skills.

---

## CAREER GOAL

His goal is to grow into a strong product leader. He's not chasing a title — he wants to genuinely master the craft of product management and lead products that matter.

---

## PROJECTS

### 1. Product Innovation & Delivery System (CIS)
- Built the company's first product operating system from zero
- Centralized intake, impact/effort prioritization, lifecycle governance (SOP from NEW IDEA to RELEASED TO MARKET), sprint KPIs
- Result: ~19% engineering throughput improvement over 17 consecutive sprints
- 130+ ideas and 40+ bugs managed across 5 product lines
- System runs independently and is still in active use

### 2. CGAS-XP — Explosion-Proof Gas Detector
- Replaced a failing white-label with a fully owned Class I Division 1 explosion-proof gas detector
- Ran 10–15 structured customer interviews across 3 market segments before defining a single feature
- Key discovery: customers spec explosion-proof for "industrial look" as much as hazard classification
- Designed a platform (not a SKU): 3-sensor support, EC/IR/CAT/PID coverage, native BACnet/Modbus, remote calibration
- Cut ATEX from V1 deliberately — saved significant cost and 14+ weeks for minimal demand uplift
- Built full NPV model — program NPV-positive within 2 years at conservative volume
- Achieved ~71% per-unit cost reduction vs. white-label
- Led full GTM: trade show launch (AHR Expo), dealer briefings, sales training, technical docs

### 3. Gas Detection System Configurator (FCS)
- Replaced a brittle Excel macro workbook (2-hour manual config process) with a production web platform
- Phase 1 (PM): Scoped product, modeled ERP architecture, managed external developer, deprecated Excel on launch day
- Phase 2 (PM + Dev + QA): Took over the codebase, rebuilt UI for 3 personas (production team, application engineers, customers), built Supabase backend, Business Central integration
- Wrote 20 structured test cases, ran AI-assisted regression after every change
- Validated every release on physical FCS controllers — not staging, real hardware
- Result: 75%+ config time reduction, full internal adoption, platform now expanding

### 4. Amazon ShopSmart (Personal Project)
- Identified gap in Amazon's comparison UX through 100+ user surveys
- 72% of users spent too much time comparing; 54% couldn't interpret rating vs. review volume
- Built solo: Figma prototype → full-stack Flask/Python/JavaScript app with BART AI model
- Features: ShopSmart Score (weighted price/rating/volume algorithm), AI feature summary, AI review summary, recommended pick with rationale
- Iterated 4 times based on user testing with 15+ testers
- Key iterations: parallel scraping (speed), score explanation (trust), verdict feature (UX), visual redesign (trust)

---

## SKILLS

Product: Strategy, Roadmapping, OKR Development, Customer Discovery, VOC Synthesis, Prioritization Frameworks, PRDs, Go-to-Market, Financial Modeling (NPV), Pricing Strategy, Agile/Scrum, Sprint Management, Backlog Management, Cross-Functional Leadership, Process Design

Technical: Python, Flask, JavaScript, HTML/CSS, Lovable, Supabase, Microsoft Business Central (ERP), Jira Product Discovery, Confluence, Figma, MagicPatterns, AutoCAD, PowerBI, Excel

Domain: Gas detection hardware & software, industrial IoT, B2B hardware/software products, ERP integration, CSA/UL certification process

---

## BACKGROUND & EDUCATION

- BASc Mechanical Engineering, University of British Columbia, 2024
- Engineering background shapes how Ainesh thinks about products — he approaches product problems like engineering problems: understand the system, identify constraints, design for reliability, validate against real-world conditions
- Application Engineer at CET (Aug 2024 – Jul 2025): delivered 1,700+ system quotations, 200+ technical calls, designed 100+ system layouts, facilitated 15+ technical demos with engineers and distribution partners
- PM at CET (Jul 2025 – present)
- Semi-finalist, National Strategy Consulting Competition, Nov 2022

---

## PERSONAL

- Based in Delta/Vancouver, BC, Canada
- Open to relocation and remote opportunities
- Hobbies: football (soccer), FIFA, running, weightlifting, cooking
- Personality: direct, curious, genuinely enjoys the technical side of products — not just the strategy layer

---

## WHAT MAKES AINESH DIFFERENT

1. He came through the customer-facing side — 1,700+ quotations and 200+ technical calls as an AE. He has real VOC instincts, not just frameworks.
2. He's unusually technical for a PM. He took over a production codebase, built a backend, and validated releases on physical hardware.
3. He owns things end to end. Discovery → strategy → execution → launch — no hand-offs.
4. He's built products in hardware AND software AND systems. Most PMs specialize in one. He's done all three.

---

## COMMON RECRUITER QUESTIONS

Q: Is Ainesh open to new opportunities?
A: Yes. He's actively looking to grow and is open to PM roles across industries.

Q: What industries is he interested in?
A: Ainesh is open to a range of industries. His background is in industrial hardware/software, but his PM skills — discovery, strategy, delivery, GTM — transfer broadly. He's particularly interested in roles where technical depth matters.

Q: Where is he located / will he relocate?
A: Based in Vancouver, BC. Open to relocation and remote.

Q: What level is he targeting?
A: PM or Senior PM. He's ~2 years in but has operated with a scope most PMs don't see until senior level — owning hardware programs, building software, leading GTM.

Q: Does he have experience with B2C products?
A: Yes — ShopSmart was a consumer product he built solo. His CET work is B2B/industrial.

Q: Can he work with engineering teams?
A: Deeply. He has an engineering degree, has written production code, and has validated hardware in the field. Engineers take him seriously because he can go deep.

Q: What's his management/leadership experience?
A: He managed an external developer for Phase 1 of the FCS Configurator. He's led cross-functional alignment across engineering, sales, ops, and leadership at CET.

---

If you can't answer something, say: "That's a great question for Ainesh directly — reach him at ainesh8@gmail.com and he'll get back to you."`;

// ─────────────────────────────────────────────────────────────────────────────
// Chat state
// ─────────────────────────────────────────────────────────────────────────────
let messages = [];
let isOpen = false;
let isTyping = false;

// ─────────────────────────────────────────────────────────────────────────────
// Render the chat UI into the page
// ─────────────────────────────────────────────────────────────────────────────
function initChat() {
  const style = document.createElement('style');
  style.textContent = `
    #chat-btn {
      position:fixed; bottom:1.5rem; right:1.5rem; z-index:1000;
      width:56px; height:56px; border-radius:50%;
      background:#2a5bd7; color:#fff; border:none;
      box-shadow:0 4px 16px rgba(42,91,215,.4);
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      transition:transform .2s, box-shadow .2s;
    }
    #chat-btn:hover { transform:scale(1.08); box-shadow:0 6px 20px rgba(42,91,215,.5); }
    #chat-btn svg { width:24px; height:24px; }

    #chat-badge {
      position:absolute; top:-2px; right:-2px;
      width:14px; height:14px; border-radius:50%;
      background:#ef4444; border:2px solid #fff;
      display:none;
    }

    #chat-window {
      position:fixed; bottom:5rem; right:1.5rem; z-index:1000;
      width:360px; max-width:calc(100vw - 2rem);
      height:520px; max-height:calc(100vh - 8rem);
      background:#fff; border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,.16);
      display:flex; flex-direction:column;
      overflow:hidden; opacity:0; pointer-events:none;
      transform:translateY(12px) scale(.97);
      transition:opacity .22s ease, transform .22s ease;
    }
    #chat-window.open {
      opacity:1; pointer-events:all;
      transform:translateY(0) scale(1);
    }

    #chat-header {
      background:#2a5bd7; color:#fff;
      padding:1rem 1.125rem;
      display:flex; align-items:center; justify-content:space-between;
      flex-shrink:0;
    }
    #chat-header-left { display:flex; align-items:center; gap:.625rem; }
    #chat-avatar {
      width:32px; height:32px; border-radius:50%;
      background:#fff; overflow:hidden; flex-shrink:0;
    }
    #chat-avatar img { width:100%; height:100%; object-fit:cover; }
    #chat-header-info { display:flex; flex-direction:column; gap:.1rem; }
    #chat-header-name { font-size:.875rem; font-weight:700; line-height:1; }
    #chat-header-status { font-size:.7rem; opacity:.8; display:flex; align-items:center; gap:.3rem; }
    #chat-header-status::before {
      content:''; width:6px; height:6px; border-radius:50%; background:#4ade80; display:block;
    }
    #chat-close {
      background:rgba(255,255,255,.2); border:none; color:#fff;
      width:28px; height:28px; border-radius:50%; cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      font-size:1.1rem; line-height:1; transition:background .15s;
    }
    #chat-close:hover { background:rgba(255,255,255,.35); }

    #chat-messages {
      flex:1; overflow-y:auto; padding:.875rem;
      display:flex; flex-direction:column; gap:.625rem;
      scroll-behavior:smooth;
    }
    #chat-messages::-webkit-scrollbar { width:4px; }
    #chat-messages::-webkit-scrollbar-track { background:transparent; }
    #chat-messages::-webkit-scrollbar-thumb { background:#e2e5f0; border-radius:2px; }

    .msg { display:flex; gap:.5rem; max-width:88%; }
    .msg.user { align-self:flex-end; flex-direction:row-reverse; }
    .msg.bot  { align-self:flex-start; }
    .msg-bubble {
      padding:.625rem .875rem; border-radius:14px;
      font-size:.8125rem; line-height:1.55; word-break:break-word;
    }
    .msg.bot .msg-bubble {
      background:#f0f4ff; color:#0f1117; border-bottom-left-radius:4px;
    }
    .msg.user .msg-bubble {
      background:#2a5bd7; color:#fff; border-bottom-right-radius:4px;
    }
    .msg-bubble a { color:inherit; text-decoration:underline; }
    .msg.user .msg-bubble a { color:#bdd1ff; }

    .typing-bubble {
      background:#f0f4ff; border-radius:14px; border-bottom-left-radius:4px;
      padding:.625rem .875rem; display:flex; gap:.3rem; align-items:center;
    }
    .typing-dot {
      width:7px; height:7px; border-radius:50%; background:#9ca3c8;
      animation:typing-bounce .9s infinite;
    }
    .typing-dot:nth-child(2) { animation-delay:.15s; }
    .typing-dot:nth-child(3) { animation-delay:.3s; }
    @keyframes typing-bounce {
      0%,60%,100% { transform:translateY(0); }
      30% { transform:translateY(-5px); }
    }

    #chat-suggestions {
      padding:.5rem .875rem; display:flex; flex-wrap:wrap; gap:.375rem;
      flex-shrink:0; border-top:1px solid #f0f2f8;
    }
    .suggestion-chip {
      font-size:.7rem; padding:.3rem .625rem; border-radius:20px;
      border:1px solid #c8d3f0; background:#fff; color:#2a5bd7;
      cursor:pointer; transition:background .15s, border-color .15s;
      white-space:nowrap;
    }
    .suggestion-chip:hover { background:#eef2ff; border-color:#2a5bd7; }

    #chat-input-row {
      padding:.75rem .875rem; display:flex; gap:.5rem; align-items:flex-end;
      border-top:1px solid #edf0f8; flex-shrink:0;
    }
    #chat-input {
      flex:1; border:1px solid #dde1ef; border-radius:10px;
      padding:.5rem .75rem; font-size:.8125rem; font-family:inherit;
      resize:none; max-height:80px; outline:none; color:#0f1117;
      transition:border-color .15s; line-height:1.45;
    }
    #chat-input:focus { border-color:#2a5bd7; }
    #chat-input::placeholder { color:#aab; }
    #chat-send {
      width:34px; height:34px; border-radius:8px; border:none;
      background:#2a5bd7; color:#fff; cursor:pointer; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      transition:background .15s; margin-bottom:1px;
    }
    #chat-send:hover { background:#1f47b0; }
    #chat-send:disabled { background:#c8d3f0; cursor:not-allowed; }
    #chat-send svg { width:16px; height:16px; }

    @media(max-width:480px){
      #chat-window { right:.75rem; bottom:5rem; width:calc(100vw - 1.5rem); }
      #chat-btn { bottom:1.25rem; right:1rem; }
    }
  `;
  document.head.appendChild(style);

  // Detect avatar path (root vs work subfolder)
  const isSubpage = window.location.pathname.includes('/work/');
  const avatarSrc = isSubpage ? '../assets/avatar.png' : 'assets/avatar.png';

  document.body.insertAdjacentHTML('beforeend', `
    <button id="chat-btn" aria-label="Chat with Ainesh's AI assistant">
      <span id="chat-badge"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>

    <div id="chat-window" role="dialog" aria-label="Chat with Ainesh's AI assistant">
      <div id="chat-header">
        <div id="chat-header-left">
          <div id="chat-avatar"><img src="${avatarSrc}" alt="Ainesh"/></div>
          <div id="chat-header-info">
            <span id="chat-header-name">Ask about Ainesh</span>
            <span id="chat-header-status">AI assistant · always on</span>
          </div>
        </div>
        <button id="chat-close" aria-label="Close chat">×</button>
      </div>

      <div id="chat-messages"></div>

      <div id="chat-suggestions">
        <button class="suggestion-chip">What's his background?</button>
        <button class="suggestion-chip">Is he open to roles?</button>
        <button class="suggestion-chip">Best project?</button>
        <button class="suggestion-chip">What makes him different?</button>
      </div>

      <div id="chat-input-row">
        <textarea id="chat-input" rows="1" placeholder="Ask anything about Ainesh…"></textarea>
        <button id="chat-send" aria-label="Send message">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  `);

  // ── Show a greeting after a short delay ──────────────────────────────────
  setTimeout(() => {
    addMessage('bot', "Hi! I'm an AI that knows everything about Ainesh — his projects, background, skills, and what makes him tick. Ask me anything, or reach him directly at ainesh8@gmail.com.");
    document.getElementById('chat-badge').style.display = 'block';
  }, 1200);

  // ── Wire up events ───────────────────────────────────────────────────────
  document.getElementById('chat-btn').addEventListener('click', toggleChat);
  document.getElementById('chat-close').addEventListener('click', closeChat);

  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  });
  sendBtn.addEventListener('click', sendMessage);

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.textContent;
      sendMessage();
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// UI helpers
// ─────────────────────────────────────────────────────────────────────────────
function toggleChat() {
  isOpen ? closeChat() : openChat();
}
function openChat() {
  isOpen = true;
  document.getElementById('chat-window').classList.add('open');
  document.getElementById('chat-badge').style.display = 'none';
  document.getElementById('chat-btn').innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`;
  setTimeout(() => document.getElementById('chat-input').focus(), 250);
}
function closeChat() {
  isOpen = false;
  document.getElementById('chat-window').classList.remove('open');
  document.getElementById('chat-btn').innerHTML = `
    <span id="chat-badge" style="display:none"></span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`;
}

function addMessage(role, text) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.innerHTML = `<div class="msg-bubble">${formatText(text)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div;
}

function formatText(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/(ainesh8@gmail\.com)/gi, '<a href="mailto:$1">$1</a>')
    .replace(/\n/g, '<br>');
}

function showTyping() {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing-indicator';
  div.innerHTML = `<div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
function hideTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

function hideSuggestions() {
  const s = document.getElementById('chat-suggestions');
  if (s) s.style.display = 'none';
}

// ─────────────────────────────────────────────────────────────────────────────
// Send message + call API
// ─────────────────────────────────────────────────────────────────────────────
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || isTyping) return;

  hideSuggestions();
  input.value = '';
  input.style.height = 'auto';
  addMessage('user', text);

  messages.push({ role: 'user', content: text });
  if (messages.length > 20) messages = messages.slice(-20);

  isTyping = true;
  document.getElementById('chat-send').disabled = true;
  showTyping();

  // Get API key from localStorage
  const apiKey = localStorage.getItem('ainesh_chat_key');
  if (!apiKey) {
    hideTyping();
    addMessage('bot', 'The chat is not yet configured. If you\'re Ainesh, please add your API key via the browser console: <code>localStorage.setItem(\'ainesh_chat_key\', \'your-key\')</code>');
    isTyping = false;
    document.getElementById('chat-send').disabled = false;
    return;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    hideTyping();

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response. Reach Ainesh directly at ainesh8@gmail.com!";

    messages.push({ role: 'assistant', content: reply });
    addMessage('bot', reply);

  } catch (err) {
    hideTyping();
    console.error('Chat error:', err);
    addMessage('bot', "I'm having trouble connecting right now. Reach Ainesh directly at ainesh8@gmail.com — he's responsive and happy to chat.");
  }

  isTyping = false;
  document.getElementById('chat-send').disabled = false;
  document.getElementById('chat-input').focus();
}

// ─────────────────────────────────────────────────────────────────────────────
// Init on DOM ready
// ─────────────────────────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChat);
} else {
  initChat();
}

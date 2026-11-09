'use strict';
// Project details are carried forward from the previous Japanese portfolio.
    const data={
      zero:{category:'MODEL R&D / RESEARCH IN PROGRESS',title:'ZeroTrainAI',intro:'AIモデルの設計・構築・評価を、自然言語の目標から支援できる仕組みについて研究しています。',tech:['Python','PyTorch','Model Generation','Evaluation'],sections:[
        ['研究背景','AIモデルを開発する際、目標の定義から設計、データ準備、実験、評価まで、多くの作業を人が個別に組み立てる必要があります。'],
        ['研究したいこと','人が自然言語で目的を伝え、システムが適切なモデル構造と評価手順を提案・試行し、結果を踏まえて改善する一連の流れを研究しています。'],
        ['主なアプローチ','小規模なモデル構築、既存モデルとの比較、失敗事例の分類、評価条件の明確化などを通じて、改善の判断を検証しています。'],
        ['現在の位置づけ','研究開発中です。特定用途での実験結果が、任意のAIモデルの自動開発能力を示すわけではありません。'],
        ['公開に向けて','評価方法と再現可能な成果が整理できた段階で、使用したデータ、ベースライン、制約を追加する予定です。']
      ],evidence:'研究内容を公開できる段階で、再現手順、比較実験、評価条件、公開可能なコードや図を追加予定。'},
      memory:{category:'LONG-TERM MEMORY / RESEARCH IN PROGRESS',title:'Local AI Memory System (Aria)',intro:'LLMの長期記憶とパーソナライズを、情報の正確さと安全性の両面から検討しています。',tech:['Local LLM','Memory Architecture','NLP','Safety'],sections:[
        ['研究背景','対話が長期間にわたると、過去の情報をどのように保持し、必要な場面で再利用するかが課題になります。'],
        ['研究したいこと','会話から残すべき情報を選び、過去・現在、本人・第三者、同意の有無などを区別して、誤った記憶を残さない方法を研究しています。'],
        ['関連するアプローチ','ローカルLLMと外部モデルの役割分担、保存前の判定、記憶の検索・更新などを検討しています。また、NeuralMemoryEngineでは潜在表現による記憶保持を探索しています。'],
        ['現在の位置づけ','研究開発中です。記憶の正確性、安全性、長期安定性は今後も検証が必要です。'],
        ['今後の展望','独立した評価データを用いて誤記憶や不適切な保存を分析し、手法間の比較を進めたいと考えています。']
      ],evidence:'研究内容を公開できる段階で、システム構成図、記憶更新の流れ、評価設計、匿名化した事例を追加予定。'},
      earth:{category:'AI AGENT / HACKATHON',title:'Tokyo Earthquake Replay',intro:'72時間のハッカソンで、AI Agentと外部APIを連携させた災害情報の可視化プロトタイプ。',tech:['Gemini','Google ADK','Google Cloud','Ekispert API'],sections:[
        ['背景・課題','地震発生時には、災害情報、交通状況、移動に関する情報などが分散し、判断までの確認負担が大きくなります。'],
        ['アプローチ','生成AIと外部情報を扱うプロセスを組み合わせ、状況把握を助けるダッシュボード形式のプロトタイプを実装。'],
        ['設計のポイント','Agentの出力と外部APIの取得結果を分けて扱う構成、時間制限内の機能優先度、実際に表示できる情報と仮定の情報の区別が重要。'],
        ['評価・制約','デモでの一連の操作、データの整合性、応答失敗時の表示など、公開可能な試験結果を追加する予定です。災害時の実用性は未検証です。']
      ],evidence:'画面のスクリーンショット、データフロー図、デモ動画、API障害時の挙動、チーム内の担当区分。'},
      iikata:{category:'JAPANESE NLP / WEB PRODUCT',title:'iikata AI',intro:'入力文を適切な敬語表現へ言い換える日本語支援サービス。',tech:['LLM API','Japanese Text','Web','Rate Limiting'],sections:[
        ['背景・課題','敬語の適切さは相手・場面・意図に左右され、単純な言い換えではニュアンスが変わってしまうことがあります。'],
        ['アプローチ','LLMによる文の変換結果をWeb UIで提示し、入力と出力を比較できる体験を目指しました。'],
        ['設計・品質','敬意の程度だけでなく、意味の保持、不自然な過剰敬語、不要な情報追加などを評価すべき品質軸として扱います。利用制限やエラー時の対応も考慮。'],
        ['次の検証','入力文のタイプ別の評価例、正確さと自然さの人手評価、モデルによる差異と失敗パターンを整理する予定です。']
      ],evidence:'実際の変換例、評価用の文章セット、画面画像、レスポンス時間の実測、公開中URLの再確認。'},
      atlas:{category:'AUTOMATION / SYSTEM ARCHITECTURE',title:'Atlas Automation Studio',intro:'RustとPythonによるモジュラーな自動化基盤。AI開発を支える周辺エンジニアリング能力を示す事例。',tech:['Rust','Python','Workflow','Plugin','Testing'],sections:[
        ['背景・課題','自動化機能が増えるほど実行・プラグイン・保存・ワークフローの境界が曖昧になり、保守が難しくなります。'],
        ['アプローチ','Runtime / Plugin / Storage / Workflow の責務を分離し、差し替え・拡張・テストを進めやすい構成を検討。'],
        ['AI/MLとの関係','学習パイプラインそのものの事例ではありませんが、長時間処理やツール実行、プラグイン拡張に必要なシステム設計の経験として掲載。'],
        ['評価・制約','設計文書・テスト・運用ログで裏付ける必要があります。公開リポジトリのアクセス状態は、この版の作成時点で確認できていません。']
      ],evidence:'設計図、ADR/RFC、公開可能なソース、テストログ、実行可能な最小構成。'},
      travel:{category:'OCR / DATA EXTRACTION',title:'TravelEasy',intro:'旅行書類の画像・文章から旅程を取り込むFlutterアプリ。文書処理と構造化データ抽出の事例。',tech:['OCR','Flutter / Dart','Parsing','Localization'],sections:[
        ['背景・課題','予約情報が複数の形式で届くため、旅行者が日付・場所・便名などを再入力する負担があります。'],
        ['アプローチ','OCRによる情報取込み、抽出結果の整理、多言語表示を統合したアプリを開発。'],
        ['技術的な論点','日付や時刻の解釈、OCRの誤認識、重複データ、入力が欠けている場合の扱いを考慮する必要があります。'],
        ['次の検証','文書種類別の抽出成功率、項目単位の正確率、手修正が必要なケースの集計を追加。']
      ],evidence:'サンプル文書、正解ラベル、抽出結果、失敗例、アプリの実機画面。'},
      city:{category:'INTERACTIVE / SOFTWARE',title:'バーチャル御茶ノ水',intro:'地理的な構造を意識した2.5Dのインタラクティブな街並み展示。',tech:['2.5D','Web Game','UI / UX','Spatial Logic'],sections:[
        ['背景・課題','実在する街を再現する際、地形や建物の前後関係が誤っていると、キャラクターが建物上を移動して見えてしまいます。'],
        ['アプローチ','御茶ノ水の橋・川・鉄道・道路を調べ、視覚レイヤーと移動可能領域を分けるシーン設計を進めています。'],
        ['エンジニアリングの視点','見た目の再現だけでなく、論理的な位置関係と操作時の矛盾を減らすことを重視。'],
        ['位置づけ','AI/MLの直接的な成果ではなく、ユーザー向け体験設計と実装の補助的な事例です。']
      ],evidence:'操作デモ、移動可能レイヤーの図、実際のゲーム画面、展示時の成果。'}
    };

const quests=[...document.querySelectorAll('.quest-card')];
const questButtons=[...document.querySelectorAll('[data-quest]')];
const dlg=document.getElementById('questDialog');
const modalId=document.getElementById('modalId');
const modalCategory=document.getElementById('modalCategory');
const modalTitle=document.getElementById('modalTitle');
const modalSummary=document.getElementById('modalSummary');
const modalTags=document.getElementById('modalTags');
const modalSections=document.getElementById('modalSections');
const modalNote=document.getElementById('modalNote');
const modalClose=document.getElementById('modalClose');
let lastQuestTrigger=null;

function textElement(tag,text,cls=''){
  const el=document.createElement(tag);
  el.textContent=text;
  if(cls)el.className=cls;
  return el;
}
function openQuest(button){
  const questId=button.dataset.quest;
  const quest=data[questId];
  if(!quest||!dlg||typeof dlg.showModal!=='function')return;
  lastQuestTrigger=button;
  const card=button.closest('.quest-card');
  modalId.textContent=card?.querySelector('.quest-number')?.textContent ?? 'QUEST';
  modalCategory.textContent=quest.category;
  modalTitle.textContent=quest.title;
  modalSummary.textContent=quest.intro;
  modalTags.replaceChildren();
  quest.tech.forEach(t=>modalTags.append(textElement('span',t)));
  modalSections.replaceChildren();
  quest.sections
    .filter(([title,body])=>title!=='担当範囲'&&!String(body).includes('［'))
    .forEach(([title,body])=>{
      const sec=document.createElement('section');
      sec.className='modal-section';
      sec.append(textElement('strong',title),textElement('p',body));
      modalSections.append(sec);
    });
  modalNote.textContent=questId==='zero'||questId==='memory'
    ? '研究開発中のため、現段階ではテーマと取り組み方を中心に紹介しています。性能保証・本番運用の主張ではありません。'
    : '技術資料・スクリーンショット・検証結果は、公開できる内容を確認したうえで順次追加する予定です。';
  dlg.showModal();
  markQuestViewed(questId);
}
questButtons.forEach(button=>button.addEventListener('click',()=>openQuest(button)));
modalClose.addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',event=>{
  if(event.target===dlg)dlg.close();
});
dlg.addEventListener('close',()=>lastQuestTrigger?.focus());

const filterBtns=[...document.querySelectorAll('.filter')];
filterBtns.forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;
  filterBtns.forEach(b=>{
    const active=b===button;
    b.classList.toggle('active',active);
    b.setAttribute('aria-pressed',String(active));
  });
  let count=0;
  quests.forEach(card=>{
    const match=category==='all'||card.dataset.category.split(' ').includes(category);
    card.hidden=!match;
    if(match)count++;
  });
  document.getElementById('questCount').textContent=String(count).padStart(2,'0');
  // Preserve revealed state when changing a filter.
  quests.filter(card=>!card.hidden).forEach(card=>card.classList.add('revealed'));
}));

const researchTopics={
  model:{
    num:'01 / 04',glyph:'◇',sub:'MODEL DEVELOPMENT',
    title:'AIモデル開発の自動化',
    intro:'自然言語で与えた目標を、モデル構造・データ・評価条件に落とし込み、試作から改善までを繰り返せる仕組みを研究しています。',
    focuses:['モデル構築','重み・構造の検討','ベースライン比較','再現性'],
    next:'独立した評価データや比較実験を通じて、評価可能な成果を整理していきます。関連プロジェクト：ZeroTrainAI。'
  },
  memory:{
    num:'02 / 04',glyph:'◎',sub:'LONG-TERM MEMORY',
    title:'LLMの長期記憶と個人化',
    intro:'対話履歴を単に長く渡すのではなく、継続的な記憶と個人への適応を実現する方法を模索しています。保存基準や潜在表現による情報保持も研究対象です。',
    focuses:['記憶の選別','潜在表現','想起と更新','本人同意'],
    next:'保存すべき内容の識別、誤記憶の抑制、時間の経過に伴う更新を検証します。関連プロジェクト：Aria / NeuralMemoryEngine。'
  },
  reliability:{
    num:'03 / 04',glyph:'✳',sub:'TRUSTWORTHY AI',
    title:'AIの信頼性と評価設計',
    intro:'日本語の否定・時制・話者の違いや、未知の質問に対する応答を適切に扱うため、誤りの種類を分けた評価と、根拠不足時の回答保留を検討しています。',
    focuses:['頑健性','未知情報の判定','誤記憶の防止','安全な失敗動作'],
    next:'独立したテストデータ、失敗事例の分類、安全性と回答率の両立を比較します。関連プロジェクト：Aria / ZeroTrainAI。'
  },
  ariaos:{
    num:'04 / 04',glyph:'▲',sub:'GRADUATION RESEARCH / AriaOS',
    title:'卒業研究：自律型AIエージェント基盤「Aria」',
    intro:'Windows上のエッジ環境で動作するマルチモーダルAIエージェントを卒業研究として開発しています。小規模モデルの役割分担、信頼できる長期記憶、限られた計算資源のスケジューリングを一つの基盤に統合することがテーマです。',
    focuses:['小モデルの役割分担','信頼できる記憶','資源スケジューリング（AARM）','エッジ／マルチモーダル'],
    next:'デジタルハリウッド大学の卒業研究として進行中です。各テーマの検証結果は、評価方法を整理できた段階で順次追加します。関連プロジェクト：Aria / AriaOS。'
  }
};
const topicButtons=[...document.querySelectorAll('.tech-node')];
function switchTopic(topicId){
  const topic=researchTopics[topicId];if(!topic)return;
  topicButtons.forEach(b=>{
    const selected=b.dataset.topic===topicId;
    b.classList.toggle('active',selected);
    b.setAttribute('aria-pressed',String(selected));
  });
  document.getElementById('topicNum').textContent=topic.num;
  document.getElementById('topicGlyph').textContent=topic.glyph;
  document.getElementById('topicSub').textContent=topic.sub;
  document.getElementById('topicTitle').textContent=topic.title;
  document.getElementById('topicIntro').textContent=topic.intro;
  const chips=document.getElementById('topicFocus');chips.replaceChildren();
  topic.focuses.forEach(value=>chips.append(textElement('span',value)));
  document.getElementById('topicNext').textContent=topic.next;
}
topicButtons.forEach(b=>b.addEventListener('click',()=>switchTopic(b.dataset.topic)));

const navToggle=document.getElementById('navToggle');
const navItems=document.getElementById('navItems');
function closeNav(){
  navToggle.setAttribute('aria-expanded','false');
  navToggle.setAttribute('aria-label','メニューを開く');
  navItems.classList.remove('open');
}
navToggle.addEventListener('click',()=>{
  const open=navToggle.getAttribute('aria-expanded')!=='true';
  navToggle.setAttribute('aria-expanded',String(open));
  navToggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
  navItems.classList.toggle('open',open);
});
navItems.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));

const quickView=document.getElementById('quickView');
quickView.addEventListener('click',()=>{
  const enabled=document.body.classList.toggle('recruiter-mode');
  quickView.setAttribute('aria-pressed',String(enabled));
  quickView.textContent=enabled?'▤ GAME VIEW':'▤ QUICK VIEW';
  showToast(enabled?'QUICK VIEW ENABLED':'GAME VIEW ENABLED');
});

// Browsing progress is local-only, not a claim of skill level or research success.
const progressKey='pixel-ai-lab-visit-progress-v2';
const allowedAreas=['projects','research','about'];
const allowedQuests=Object.keys(data);
function readSavedProgress(){
  try{
    const value=JSON.parse(localStorage.getItem(progressKey)||'{}');
    return {
      areas:Array.isArray(value.areas)?value.areas.filter(x=>allowedAreas.includes(x)):[],
      quests:Array.isArray(value.quests)?value.quests.filter(x=>allowedQuests.includes(x)):[]
    };
  }catch(_error){return {areas:[],quests:[]}}
}
const savedProgress=readSavedProgress();
const visitedAreas=new Set(savedProgress.areas);
const viewedQuests=new Set(savedProgress.quests);
function persistProgress(){
  try{localStorage.setItem(progressKey,JSON.stringify({areas:[...visitedAreas],quests:[...viewedQuests]}))}catch(_error){/* private mode / disabled storage */}
}
function updateProgress(){
  document.getElementById('zoneProgressText').textContent=visitedAreas.size+' / 3';
  document.getElementById('zoneProgress').value=visitedAreas.size;
  document.getElementById('questProgressText').textContent=viewedQuests.size+' / 7';
  document.getElementById('questProgress').value=viewedQuests.size;
  document.querySelectorAll('.scene-portal').forEach(btn=>btn.classList.toggle('visited',visitedAreas.has(btn.dataset.zone)));
  quests.forEach(card=>{
    const btn=card.querySelector('[data-quest]');
    const opened=btn&&viewedQuests.has(btn.dataset.quest);
    card.classList.toggle('viewed',!!opened);
    const existing=card.querySelector('.viewed-flag');
    if(opened&&!existing)card.querySelector('.quest-top')?.append(textElement('span','✓ VIEWED','viewed-flag'));
    if(!opened&&existing)existing.remove();
  });
}
function markAreaVisited(zone){
  if(!allowedAreas.includes(zone))return;
  if(!visitedAreas.has(zone)){visitedAreas.add(zone);persistProgress();updateProgress()}
}
function markQuestViewed(questId){
  if(!allowedQuests.includes(questId))return;
  if(!viewedQuests.has(questId)){viewedQuests.add(questId);persistProgress();updateProgress()}
}
document.getElementById('resetProgress').addEventListener('click',()=>{
  visitedAreas.clear();viewedQuests.clear();persistProgress();updateProgress();
  try{history.replaceState(null,'',location.pathname+location.search)}catch(_error){}
  showToast('EXPLORATION LOG RESET');
});
window.addEventListener('hashchange',()=>{
  const hash=decodeURIComponent(location.hash.slice(1));
  markAreaVisited(hash);
});
markAreaVisited(decodeURIComponent(location.hash.slice(1)));
updateProgress();

const avatar=document.getElementById('avatar');
const scene=document.getElementById('pixelScene');
const enterButton=document.getElementById('enterZone');
const nearestLabel=document.getElementById('nearestZone');
const sceneTitle=document.getElementById('sceneHintTitle');
const sceneSubtitle=document.getElementById('sceneHintSubtitle');
const portalButtons=[...document.querySelectorAll('.scene-portal')];
const portals=[
  {id:'projects',x:18,title:'QUESTS PORTAL',label:'QUESTS'},
  {id:'research',x:50,title:'RESEARCH LAB',label:'LAB'},
  {id:'about',x:82,title:'PLAYER PROFILE',label:'PLAYER'}
];
let avatarX=48;
let nearestPortal=null;
function updateScene(){
  avatar.style.left=avatarX+'%';
  const nearest=portals.reduce((a,b)=>Math.abs(avatarX-a.x)<=Math.abs(avatarX-b.x)?a:b);
  nearestPortal=(Math.abs(avatarX-nearest.x)<=10)?nearest:null;
  enterButton.disabled=!nearestPortal;
  nearestLabel.textContent=nearestPortal?'NEAR: '+nearestPortal.label:'NO PORTAL';
  sceneTitle.textContent=nearestPortal?nearestPortal.title:'EXPLORE THE WORLD';
  sceneSubtitle.textContent=nearestPortal?'PRESS E / TAP TO ENTER':'MOVE TO A PORTAL';
  portalButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.zone===nearestPortal?.id));
}
let slimeMotionTimer;
function bounceSlime(movingDirection=0){
  if(movingDirection)avatar.style.setProperty('--facing',movingDirection<0?'-1':'1');
  avatar.classList.remove('walking','hopping');
  void avatar.offsetWidth; // replay squash → stretch → jump → land
  avatar.classList.add(movingDirection?'walking':'hopping');
  clearTimeout(slimeMotionTimer);
  slimeMotionTimer=setTimeout(()=>avatar.classList.remove('walking','hopping'),450);
}
function moveAvatar(delta){
  avatarX=Math.min(87,Math.max(8,avatarX+delta));
  bounceSlime(delta);
  updateScene();
}
function hopAvatar(){bounceSlime(0)}
function enterPortal(){
  if(!nearestPortal)return false;
  const target=document.getElementById(nearestPortal.id);
  if(!target)return false;
  markAreaVisited(nearestPortal.id);
  target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  // Scroll to the destination without adding an extra history item.
  try{history.replaceState(null,'','#'+nearestPortal.id)}catch(_error){}
  showToast('AREA DISCOVERED: '+nearestPortal.label);
  return true;
}
document.getElementById('moveLeft').addEventListener('click',()=>moveAvatar(-7));
document.getElementById('moveRight').addEventListener('click',()=>moveAvatar(7));
document.getElementById('hopButton').addEventListener('click',hopAvatar);
enterButton.addEventListener('click',enterPortal);
portalButtons.forEach(btn=>btn.addEventListener('click',()=>{
  const portal=portals.find(p=>p.id===btn.dataset.zone);
  if(!portal)return;
  avatarX=portal.x;
  bounceSlime(0);
  updateScene();
  enterPortal();
}));
scene.addEventListener('click',event=>{
  if(event.target.closest('button'))return;
  enterPortal();
});
scene.addEventListener('keydown',event=>{
  const key=event.key.toLowerCase();
  if(event.key==='ArrowLeft'||key==='a'){event.preventDefault();moveAvatar(-7)}
  else if(event.key==='ArrowRight'||key==='d'){event.preventDefault();moveAvatar(7)}
  else if((key===' '||key==='spacebar')&&!event.target.closest('button')){event.preventDefault();hopAvatar()}
  else if((key==='e'||event.key==='Enter')&&!event.target.closest('button')){event.preventDefault();enterPortal()}
});
updateScene();

const toast=document.getElementById('toast');
let toastTimeout=0;
function showToast(msg){
  toast.textContent='✦ '+msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout=setTimeout(()=>toast.classList.remove('show'),2400);
}
document.getElementById('startButton').addEventListener('click',()=>showToast('NEW AREA DISCOVERED: PROJECT QUESTS'));

const motionReduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches??false;
const revealElements=[...document.querySelectorAll('.reveal')];
if(motionReduced||!('IntersectionObserver' in window)){
  revealElements.forEach(x=>x.classList.add('revealed'));
}else{
  // Avoid hiding content forever if browser does not deliver observations.
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.07,rootMargin:'0px 0px 35px 0px'});
  revealElements.forEach(el=>observer.observe(el));
  document.documentElement.classList.add('js-ready');
}
document.getElementById('year').textContent=new Date().getFullYear();

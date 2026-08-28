import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1851–1900. Primary POS is the high-frequency use, not every sense in the book. */
export const list38: Word[] = [
  freq(adj('känslig', '敏感的；易受伤的', 'sensitive', 'känsligt', 'känsliga', [
    ['Han är känslig för kritik.', '他对批评很敏感。'],
    ['Ett känsligt ämne.', '一个敏感话题。'],
    ['Den känsliga huden blev röd.', '那块敏感的皮肤变红了。'],
    ['Hon är känsligare än du tror.', '她比你以为的更敏感。'],
  ], { comparative: 'känsligare', superlative: 'känsligast' }), 1851, c(
    [
      ['känsla', '感觉'],
      ['-ig', '带这种性质的'],
    ],
    '“容易有感觉的”，就是敏感的。',
  )),
  freq(verb('rulla', '滚动', 'to roll', 'rullar', 'rullade', 'rullat', 'rulla', [
    ['Bollen rullar under stolen.', '球滚到椅子底下。'],
    ['Barnen rullade nerför kullen.', '孩子们滚下了小山。'],
    ['Har ni rullat undan mattan?', '你们把地毯卷到一边了吗？'],
    ['Rulla stenen hit.', '把石头滚过来。'],
  ]), 1852),
  freq(adj('medveten', '意识到的；清醒的', 'aware / conscious', 'medvetet', 'medvetna', [
    ['Är du medveten om risken?', '你意识到风险了吗？'],
    ['Ett medvetet val.', '一个有意识的选择。'],
    ['De medvetna patienterna nickade.', '那些清醒的病人点了头。'],
    ['Hon är medveten om felet.', '她意识到了那个错误。'],
  ]), 1853, c(
    [
      ['med', '带着'],
      ['veten', '知道的（veta 知道）'],
    ],
    '“心里带着知道”，就是意识到的、清醒的。',
  )),
  freq(noun('data', null, '数据；资料；（口）电脑', 'data / (informal) computer', 'datan', null, null, [
    ['Vi samlar data om vädret.', '我们在收集天气数据。'],
    ['Datan räcker inte än.', '这些资料还不够。'],
    ['Lägg upp det på data.', '把这个放到电脑上。'],
    ['Skicka data före mötet.', '开会前把数据发过来。'],
  ]), 1854),
  freq(other('halvt', 'adv', '一半地；部分地', 'half / partly', [
    ['Hon var halvt klar med texten.', '她课文写了一半。'],
    ['Glaset är halvt fullt.', '杯子是半满的。'],
    ['Han lyssnade bara halvt.', '他只听进去一半。'],
    ['Det är halvt om halvt sant.', '这半真半假。'],
  ]), 1855, c([['halv', '一半的'], ['-t', '副词词尾']], '以一半的程度，合起来就是一半地、部分地。')),
  freq(noun('tröja', 'en', '毛衣；针织衫', 'sweater', 'tröjan', 'tröjor', null, [
    ['Hon har en röd tröja.', '她穿着一件红毛衣。'],
    ['Tröjan är för stor.', '这件毛衣太大了。'],
    ['Två tröjor torkar där.', '两件针织衫在那儿晾着。'],
    ['Ta på tröjan, det är kallt.', '穿上毛衣，天冷。'],
  ]), 1856),
  freq(noun('personal', 'en', '员工；人员', 'staff / personnel', 'personalen', null, null, [
    ['Personalen äter i köket.', '员工在厨房吃饭。'],
    ['Vi behöver mer personal.', '我们需要更多人手。'],
    ['Brist på personal märks i dag.', '今天人手不够很明显。'],
    ['Tacka personalen före stängning.', '关门前谢谢员工。'],
  ]), 1857),
  freq(noun('kaka', 'en', '蛋糕；饼干；圆面包', 'cake / biscuit / round loaf', 'kakan', 'kakor', null, [
    ['Vi äter kaka till kaffet.', '我们配咖啡吃蛋糕。'],
    ['Kakan är fortfarande varm.', '这块蛋糕还热着。'],
    ['Hon bakade tre kakor i går.', '她昨天烤了三块蛋糕。'],
    ['Ta en kaka till, tack.', '请再拿一块饼干。'],
  ]), 1858),
  freq(noun('skugga', 'en', '影子；阴影', 'shadow', 'skuggan', 'skuggor', 'skuggorna', [
    ['En skugga föll över golvet.', '一道影子落在地板上。'],
    ['Skuggan följde efter oss.', '那个影子跟着我们。'],
    ['Träden ger flera skuggor.', '树投下好几片阴影。'],
    ['Skuggorna blev längre mot kvällen.', '那些影子临近傍晚变长了。'],
  ]), 1859),
  freq(adj('imponerad', '感到佩服的', 'impressed', 'imponerat', 'imponerade', [
    ['Jag är imponerad av henne.', '我对她很佩服。'],
    ['Ett imponerat leende syntes.', '露出一丝佩服的笑。'],
    ['De imponerade gästerna klappade.', '那些感到佩服的客人在鼓掌。'],
    ['Bli inte för imponerad.', '别佩服过头。'],
  ]), 1860, c([['imponera', '使人佩服'], ['-d', '被……的']], '被人做出来的佩服之感，合起来就是感到佩服的。')),
  freq(verb('rösta', '投票', 'to vote', 'röstar', 'röstade', 'röstat', 'rösta', [
    ['Vi röstar klockan nio.', '我们九点投票。'],
    ['Hon röstade på det förslaget.', '她给那个提案投了票。'],
    ['Har du röstat än?', '你投票了吗？'],
    ['Rösta inte blankt.', '别投空白票。'],
  ]), 1861),
  freq(noun('hud', 'en', '皮肤', 'skin / hide', 'huden', 'hudar', null, [
    ['Huden är torr i kyla.', '皮肤在冷天发干。'],
    ['Hon smörjer huden varje kväll.', '她每晚给皮肤抹油。'],
    ['Djurets hudar torkar i solen.', '那些兽皮在太阳下晾着。'],
    ['Skydda huden mot solen.', '保护皮肤别晒伤。'],
  ]), 1862),
  freq(adj('fattig', '贫穷的', 'poor', 'fattigt', 'fattiga', [
    ['Det är ett fattigt land.', '那是一个贫穷的国家。'],
    ['Ett fattigt kvarter ligger där.', '那里有一个穷街区。'],
    ['De fattiga familjerna fick hjälp.', '那些贫穷的家庭得到了帮助。'],
    ['Hon är fattig på tid.', '她缺少时间。'],
  ]), 1863),
  freq(noun('sekreterare', 'en', '秘书', 'secretary', 'sekreteraren', 'sekreterare', 'sekreterarna', [
    ['Hon är sekreterare på kontoret.', '她是办公室的秘书。'],
    ['Sekreteraren bokade tiden.', '秘书把时间订好了。'],
    ['Två sekreterare sitter där.', '两位秘书坐在那里。'],
    ['Sekreterarna går hem klockan fem.', '那些秘书五点回家。'],
  ]), 1864),
  freq(verb('pissa', '撒尿（口语）', 'to pee (informal)', 'pissar', 'pissade', 'pissat', 'pissa', [
    ['Hunden pissar mot trädet.', '狗对着树撒尿。'],
    ['Han pissade bakom huset.', '他在房子后面撒了尿。'],
    ['Någon har pissat här.', '有人在这里撒过尿。'],
    ['Pissa inte på golvet.', '别在地板上撒尿。'],
  ]), 1865),
  freq(adj('japansk', '日本的', 'Japanese', 'japanskt', 'japanska', [
    ['Det är en japansk bil.', '那是一辆日本车。'],
    ['Ett japanskt te serveras här.', '这里供应一种日本茶。'],
    ['De japanska gästerna kom sent.', '那些日本客人来晚了。'],
    ['Hon lagar japansk mat.', '她做日本菜。'],
  ]), 1866, c([['Japan', '日本'], ['-sk', '……的']], '来自日本的，合起来就是日本的。')),
  freq(adj('hal', '滑的', 'slippery', 'halt', 'hala', [
    ['Golvet är halt efter regnet.', '雨后地板很滑。'],
    ['Ett halt underlag är farligt.', '湿滑的地面很危险。'],
    ['De hala stenarna ligger vid ån.', '那些滑石头在河边。'],
    ['Gå inte på den hala isen.', '别走那块滑冰。'],
  ]), 1867),
  freq(noun('knapp', 'en', '纽扣；按钮', 'button', 'knappen', 'knappar', null, [
    ['En knapp lossnade från skjortan.', '衬衫上掉了一颗纽扣。'],
    ['Knappen sitter löst.', '这颗纽扣松了。'],
    ['Hon sydde i tre knappar.', '她缝上了三颗纽扣。'],
    ['Tryck på knappen där.', '按那边那个按钮。'],
  ]), 1868),
  freq(adj('stängd', '关闭的', 'closed / shut', 'stängt', 'stängda', [
    ['Butiken är stängd i dag.', '店今天关门。'],
    ['Ett stängt fönster släpper inte in luft.', '关着的窗不进风。'],
    ['De stängda dörrarna måste öppnas.', '那些关着的门得打开。'],
    ['Vägen är stängd efter rasen.', '塌方之后路封闭了。'],
  ]), 1869, c([['stänga', '关上'], ['-d', '被……的']], '被关上的，合起来就是关闭的。')),
  freq(noun('lillebror', 'en', '弟弟', 'little brother', 'lillebrodern', 'lillebröder', null, [
    ['Min lillebror sover.', '我弟弟在睡觉。'],
    ['Lillebrodern följer efter oss.', '弟弟跟着我们。'],
    ['Hon har två lillebröder.', '她有两个弟弟。'],
    ['Ring lillebror i kväll.', '今晚给弟弟打电话。'],
  ]), 1870, c([['lille', '小的'], ['bror', '兄弟']], '小的那个兄弟，合起来就是弟弟。')),
  freq(noun('förlåtelse', 'en', '原谅；宽恕', 'forgiveness', 'förlåtelsen', 'förlåtelser', 'förlåtelserna', [
    ['Hon bad om förlåtelse.', '她请求原谅。'],
    ['Förlåtelsen kom sent.', '那份宽恕来得很晚。'],
    ['Vi behöver förlåtelse.', '我们需要原谅。'],
    ['Förlåtelserna var uppriktiga.', '那些原谅是真诚的。'],
  ]), 1871, c(
    [
      ['förlåta', '原谅'],
      ['-else', '行为名词后缀'],
    ],
    '由“原谅”这个动作变成名词，就是一次原谅、宽恕。',
  )),
  freq(other('kring', 'adv', '围绕；大约', 'around', [
    ['De satt kring bordet.', '他们围坐在桌边。'],
    ['Kring tre började det regna.', '大约三点开始下雨。'],
    ['Skogen kring sjön är tät.', '湖周围的树林很密。'],
    ['Hon hade en sjal kring halsen.', '她脖子上围着一条围巾。'],
  ]), 1872),
  freq(noun('enhet', 'en', '单位；单元', 'unit', 'enheten', 'enheter', 'enheterna', [
    ['Priset anges per enhet.', '价格按单位标。'],
    ['Enheten flyttades till stan.', '这个单位搬到了城里。'],
    ['Boken har tio enheter.', '这本书有十个单元。'],
    ['Enheterna samarbetar.', '那些单位在合作。'],
  ]), 1873, c(
    [
      ['en', '一'],
      ['-het', '性质、状态'],
    ],
    '“作为一的状态”，就是一个单位、单元。',
  )),
  freq(noun('uniform', 'en', '制服', 'uniform', 'uniformen', 'uniformer', null, [
    ['Hon har uniform på jobbet.', '她上班穿制服。'],
    ['Uniformen hänger i skåpet.', '制服挂在柜子里。'],
    ['Två uniformer behöver tvättas.', '两套制服需要洗。'],
    ['Ta på uniformen före skiftet.', '上班前穿上制服。'],
  ]), 1874),
  freq(noun('snygging', 'en', '长得好看的人（口）', 'looker (informal)', 'snyggingen', 'snyggingar', null, [
    ['Han är en snygging, visst.', '他长得挺好看的，没错。'],
    ['Snyggingen vid baren vinkade.', '吧台边那个好看的人在招手。'],
    ['Två snyggingar gick förbi.', '两个长得好看的人走了过去。'],
    ['Kalla henne inte snygging så där.', '别那样叫她帅哥美女。'],
  ]), 1875),
  freq(adj('likadan', '同样的', 'similar / of the same kind', 'likadant', 'likadana', [
    ['Vi har likadana jackor.', '我们有同样的外套。'],
    ['Ett likadant hus står där.', '那里立着一座同样的房子。'],
    ['Hon vill ha en likadan.', '她想要一件一样的。'],
    ['De ser likadana ut.', '他们看起来一个样。'],
  ]), 1876, c([['lika', '同样'], ['dan', '那样的']], '同样那样的，合起来就是同样的。')),
  freq(other('et', 'other', '（拉丁／法语）和', 'and (Latin/French, as in et cetera)', [
    ['Et cetera betyder och så vidare.', 'et cetera 表示等等。'],
    ['Et al. betyder och andra.', 'Et al. 表示以及其他人。'],
    ['Hon skrev et cetera i slutet.', '她在结尾写了 et cetera。'],
    ['Et används i latin för och.', '拉丁语里 et 表示“和”。'],
  ]), 1877),
  freq(noun('universitet', 'ett', '大学', 'university', 'universitetet', 'universitet', 'universiteten', [
    ['Hon studerar vid universitetet.', '她在大学读书。'],
    ['Universitetet ligger i Lund.', '这所大学在隆德。'],
    ['Två universitet samarbetar nu.', '两所大学现在在合作。'],
    ['Universiteten öppnar i augusti.', '那些大学八月开学。'],
  ]), 1878),
  freq(noun('sovrum', 'ett', '卧室', 'bedroom', 'sovrummet', 'sovrum', 'sovrummen', [
    ['Lampan i sovrummet är släckt.', '卧室里的灯关了。'],
    ['Vi har ett litet sovrum.', '我们有一间小卧室。'],
    ['Huset har tre sovrum.', '这房子有三间卧室。'],
    ['Sovrummen vetter mot gården.', '那些卧室朝院子。'],
  ]), 1879, c([['sov', '睡（sova）'], ['rum', '房间']], '睡觉的房间，合起来就是卧室。')),
  freq(noun('relation', 'en', '关系', 'relation / relationship', 'relationen', 'relationer', null, [
    ['De har en god relation.', '他们关系很好。'],
    ['Relationen mellan länderna är kall.', '两国之间的关系很冷。'],
    ['Hon har flera relationer på jobbet.', '她在工作上有好几层关系。'],
    ['Sätt priset i relation till lönen.', '把价格和工资放在一起看。'],
  ]), 1880),
  freq(noun('knipa', 'en', '困境；窘境', 'predicament / pinch', 'knipan', 'knipor', 'kniporna', [
    ['Han är i knipa.', '他陷入了困境。'],
    ['Knipan blev värre.', '那个窘境更糟了。'],
    ['Vi har varit i liknande knipor.', '我们遇到过类似的困境。'],
    ['Kniporna löste sig till slut.', '那些窘境最后解开了。'],
  ]), 1881),
  freq(noun('bekymmer', 'ett', '烦恼；忧虑', 'worry / concern', 'bekymret', 'bekymmer', 'bekymren', [
    ['Det är inget bekymmer.', '这不是什么烦恼。'],
    ['Bekymret höll henne vaken.', '那个忧虑让她睡不着。'],
    ['Hon har många bekymmer.', '她有很多烦恼。'],
    ['Bekymren släppte till sist.', '那些忧虑终于放下了。'],
  ]), 1882, c(
    [
      ['be-', '使役前缀'],
      ['kymmer', '操心、烦忧（旧词根）'],
    ],
    '“被弄得操心”，就是烦恼、忧虑。',
  )),
  freq(noun('syfte', 'ett', '目的；意图', 'purpose / aim', 'syftet', 'syften', 'syftena', [
    ['Vad är syftet med mötet?', '会议的目的是什么？'],
    ['Syftet var att hjälpa.', '意图是提供帮助。'],
    ['Planen har två syften.', '这个计划有两个目的。'],
    ['Syftena är tydliga.', '那些目的很清楚。'],
  ]), 1883),
  freq(noun('modell', 'en', '模型；模式；款式', 'model / design', 'modellen', 'modeller', null, [
    ['Hon bygger en modell av huset.', '她在做这房子的模型。'],
    ['Modellen är gammal redan.', '这个款式已经旧了。'],
    ['Det finns flera modeller att välja.', '有好几种款式可选。'],
    ['Följ den här modellen.', '照这个模式做。'],
  ]), 1884),
  freq(verb('beställa', '预订；订购', 'to order / to book', 'beställer', 'beställde', 'beställt', 'beställ', [
    ['Jag beställer mat till oss.', '我给我们点餐。'],
    ['Hon beställde tid hos läkaren.', '她向医生预约了时间。'],
    ['Har ni beställt biljetterna?', '你们把票订了吗？'],
    ['Beställ kaffe till bordet.', '给这桌点咖啡。'],
  ]), 1885),
  freq(noun('skjorta', 'en', '衬衫', 'shirt', 'skjortan', 'skjortor', null, [
    ['Han har en vit skjorta.', '他穿着一件白衬衫。'],
    ['Skjortan behöver strykas.', '这件衬衫需要熨。'],
    ['Två skjortor hänger där.', '两件衬衫挂在那儿。'],
    ['Knyt slipsen till skjortan.', '把领带打在衬衫上。'],
  ]), 1886),
  freq(noun('plånbok', 'en', '钱包', 'wallet', 'plånboken', 'plånböcker', null, [
    ['Han glömde plånboken hemma.', '他把钱包忘在家里了。'],
    ['Plånboken ligger i jackan.', '钱包在外套里。'],
    ['Två plånböcker hittades på bussen.', '公交上找到了两个钱包。'],
    ['Ta fram plånboken vid kassan.', '到收银台把钱包拿出来。'],
  ]), 1887, c([['plån', '钱夹（旧）'], ['bok', '本子']], '夹钱的本子，合起来就是钱包。')),
  freq(noun('kamp', 'en', '斗争；战役', 'struggle / fight', 'kampen', 'kamper', 'kamperna', [
    ['Det blev en hård kamp.', '那是一场艰苦的斗争。'],
    ['Kampen är inte över.', '这场斗争还没有结束。'],
    ['De vann tre kamper.', '他们赢了三场。'],
    ['Kamperna var jämna.', '那些比赛打得很均势。'],
  ]), 1888),
  freq(verb('blogga', '写博客', 'to blog', 'bloggar', 'bloggade', 'bloggat', 'blogga', [
    ['Hon bloggar varje vecka.', '她每周写博客。'],
    ['Han bloggade om resan.', '他写了这次旅行的博客。'],
    ['De har bloggat i åratal.', '他们写博客已经很多年了。'],
    ['Blogga inte om det än.', '先别把这事写进博客。'],
  ]), 1889, c(
    [
      ['blogg', '博客'],
      ['-a', '动词词尾'],
    ],
    '“做一个博客”，就是写博客。',
  )),
  freq(noun('terrorism', 'en', '恐怖主义', 'terrorism', 'terrorismen', null, null, [
    ['Terrorismen hotar freden.', '恐怖主义威胁和平。'],
    ['De talar om terrorism i nyheterna.', '新闻里在谈恐怖主义。'],
    ['Kampen mot terrorismen fortsätter.', '打击恐怖主义的斗争还在继续。'],
    ['Vi fördömer all terrorism.', '我们谴责一切恐怖主义。'],
  ]), 1890),
  freq(verb('innehålla', '包含；容纳', 'to contain', 'innehåller', 'innehöll', 'innehållit', 'innehåll', [
    ['Boken innehåller korta sagor.', '这本书里有短篇故事。'],
    ['Kartongen innehöll glas.', '这个纸箱里装着玻璃。'],
    ['Soppan har innehållit för mycket salt.', '这汤里盐已经太多了。'],
    ['Innehåll inte lönen.', '别扣着工资不发。'],
  ]), 1891, c([['inne', '在里面'], ['hålla', '持有／容纳']], '在里面持有，合起来就是包含、容纳。')),
  freq(other('ordentligt', 'adv', '好好地；彻底地', 'properly / thoroughly', [
    ['Städa köket ordentligt.', '好好把厨房打扫干净。'],
    ['Hon sov ordentligt i natt.', '她昨晚睡得很踏实。'],
    ['Vi åt ordentligt före resan.', '我们出发前好好吃了一顿。'],
    ['Läs texten ordentligt först.', '先把课文好好读一遍。'],
  ]), 1892, c([['ordentlig', '认真的；像样的'], ['-t', '副词词尾']], '以认真像样的方式，合起来就是好好地、彻底地。')),
  freq(noun('juli', 'en', '七月', 'July', null, null, null, [
    ['Vi åker i juli.', '我们七月走。'],
    ['Juli är varm här.', '这儿的七月很热。'],
    ['Hon fyller år i juli.', '她七月过生日。'],
    ['Boka resan till juli.', '把旅行订在七月。'],
  ]), 1893),
  freq(noun('sajt', 'en', '网站', 'website', 'sajten', 'sajter', null, [
    ['Sajten ligger nere i dag.', '这个网站今天打不开。'],
    ['Hon har en sajt om resor.', '她有一个旅行网站。'],
    ['Två sajter länkar till oss.', '两个网站链到我们。'],
    ['Uppdatera sajten i kväll.', '今晚更新这个网站。'],
  ]), 1894),
  freq(noun('befäl', 'ett', '指挥；长官', 'command / officer', 'befälet', 'befäl', 'befälen', [
    ['Hon tog befälet.', '她接管了指挥。'],
    ['Befälet gav en order.', '长官下了一道命令。'],
    ['Flera befäl kom till platsen.', '好几位长官到了现场。'],
    ['Befälen samlades i tältet.', '那些长官在帐篷里集合。'],
  ]), 1895, c(
    [
      ['be-', '构词前缀'],
      ['falla', '下令（befalla）'],
    ],
    '由“下令”而来，指指挥权，也指长官。',
  )),
  freq(noun('mask', 'en', '蠕虫；面具', 'worm / mask', 'masken', 'maskar', null, [
    ['En mask ligger i jorden.', '一条蠕虫在土里。'],
    ['Masken krälar över stenen.', '这条虫子爬过石头。'],
    ['Efter regnet syns många maskar.', '雨后能看见很多蠕虫。'],
    ['Hon bar en mask på festen.', '她聚会上戴了面具。'],
  ]), 1896),
  freq(noun('antal', 'ett', '数量；数目', 'number / quantity', 'antalet', 'antal', 'antalen', [
    ['Ett stort antal gäster kom.', '来了数量很多的客人。'],
    ['Antalet ökade i år.', '这个数目今年增加了。'],
    ['Vi räknade antalet platser.', '我们数了座位数。'],
    ['Hur stort är antalet?', '这个数目有多大？'],
  ]), 1897),
  freq(noun('kamrat', 'en', '同伴；同学', 'friend / comrade / companion', 'kamraten', 'kamrater', null, [
    ['Hon är min kamrat från skolan.', '她是我学校里的同伴。'],
    ['Kamraten väntar vid porten.', '同伴在门口等。'],
    ['Vi är gamla kamrater.', '我们是老同学。'],
    ['Hjälp kamraten med väskan.', '帮同伴拿一下包。'],
  ]), 1898),
  freq(verb('besegra', '击败；战胜', 'to defeat / to conquer', 'besegrar', 'besegrade', 'besegrat', 'besegra', [
    ['De ska besegra fienden.', '他们要击败敌人。'],
    ['Hon besegrade motståndaren.', '她战胜了对手。'],
    ['Laget har besegrat alla.', '这支队击败了所有人。'],
    ['Besegra rädslan.', '战胜恐惧。'],
  ]), 1899, c(
    [
      ['be-', '使役前缀'],
      ['segra', '获胜'],
    ],
    '“使对方被战胜”，就是击败。',
  )),
  freq(other('tvärtom', 'adv', '相反；恰恰相反', 'on the contrary / the other way around', [
    ['Tvärtom, det var lätt.', '恰恰相反，这很容易。'],
    ['Jag tror tvärtom.', '我的看法正相反。'],
    ['Det gick tvärtom mot planen.', '事情和计划正好相反。'],
    ['Gör tvärtom i stället.', '改成反过来做。'],
  ]), 1900, c(
    [
      ['tvär', '横着的；截然的'],
      ['om', '转过来'],
    ],
    '“横过来、反过来”，就是相反。',
  )),
]

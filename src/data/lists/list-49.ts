import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2401–2450. Primary POS is the high-frequency use, not every sense in the book. */
export const list49: Word[] = [
  freq(adj('kunglig', '王室的；皇家的；气派的', 'royal / splendid', 'kungligt', 'kungliga', [
    ['Det var en kunglig middag.', '那是一场王室晚宴。'],
    ['Ett kungligt besök väntas i maj.', '五月预计有一次王室访问。'],
    ['De kungliga slotten är öppna.', '那些王室城堡开放参观。'],
    ['Hon bar en kunglig krona.', '她戴着一顶皇家王冠。'],
  ]), 2401, c([['kung', '国王'], ['-lig', '带这种性质的']], '跟国王有关的，就是王室的、皇家的。')),
  freq(noun('undersökning', 'en', '调查；检查；体检', 'investigation / examination', 'undersökningen', 'undersökningar', null, [
    ['Läkaren gör en undersökning.', '医生在做检查。'],
    ['Undersökningen tar en timme.', '这次检查要一个小时。'],
    ['Två undersökningar visade samma sak.', '两次调查结果一样。'],
    ['Vänta på undersökningen i rum tre.', '在三号房间等检查。'],
  ]), 2402, c(
    [
      ['undersöka', '调查；检查'],
      ['-ning', '行为／结果'],
    ],
    '调查、检查这件事，合起来就是调查、体检。',
  )),
  freq(noun('riksdagsledamot', 'en', '国会议员', 'member of parliament', 'riksdagsledamoten', 'riksdagsledamöter', 'riksdagsledamöterna', [
    ['En riksdagsledamot talade i tv.', '一位国会议员在电视上讲话。'],
    ['Riksdagsledamoten röstade nej.', '那位国会议员投了反对票。'],
    ['Flera riksdagsledamöter var frånvarande.', '好几位国会议员缺席。'],
    ['Riksdagsledamöterna samlades i kammaren.', '那些国会议员在议院集合。'],
  ]), 2403, c(
    [
      ['riksdag', '议会'],
      ['ledamot', '成员'],
    ],
    '“议会里的成员”，就是国会议员。',
  )),
  freq(other('förhoppningsvis', 'adv', '但愿；希望能', 'hopefully', [
    ['Förhoppningsvis kommer bussen snart.', '但愿公交车马上到。'],
    ['Vi ses förhoppningsvis i morgon.', '但愿明天能见。'],
    ['Förhoppningsvis regnar det inte.', '但愿别下雨。'],
    ['Det går förhoppningsvis bra.', '但愿会顺利。'],
  ]), 2404, c(
    [
      ['förhoppning', '希望'],
      ['-s-', '连接音'],
      ['-vis', '以……的方式'],
    ],
    '“带着希望的方式”，就是但愿、希望能。',
  )),
  freq(adj('tråkig', '无聊的；乏味的；可惜的', 'boring / tedious / unfortunate', 'tråkigt', 'tråkiga', [
    ['Filmen var tråkig.', '这部电影很无聊。'],
    ['Ett tråkigt jobb väntar.', '一份乏味的工作在等着。'],
    ['De tråkiga mötena tar slut nu.', '那些无聊的会议现在结束了。'],
    ['Vad tråkigt att du inte kan komma.', '你来不了，真可惜。'],
  ]), 2405),
  freq(noun('lejon', 'ett', '狮子', 'lion', 'lejonet', 'lejon', 'lejonen', [
    ['Ett lejon sover i skuggan.', '一头狮子在阴影里睡觉。'],
    ['Lejonet vrålade högt.', '那头狮子大声吼。'],
    ['Tre lejon gick över savannen.', '三头狮子走过草原。'],
    ['Lejonen åt på eftermiddagen.', '那些狮子下午吃了东西。'],
  ]), 2406),
  freq(verb('segla', '航行；扬帆', 'to sail', 'seglar', 'seglade', 'seglat', 'segla', [
    ['Vi seglar till Gotland.', '我们航行去哥得兰。'],
    ['De seglade över sjön.', '他们驶过湖面。'],
    ['Båten har seglat i natt.', '船夜里已经开了。'],
    ['Segla inte i stormen.', '别在风暴里航行。'],
  ]), 2407, c(
    [
      ['segel', '帆'],
      ['-a', '动词词尾'],
    ],
    '由“帆”变成动词，就是扬帆航行。',
  )),
  freq(noun('bakgrund', 'en', '背景；出身', 'background', 'bakgrunden', null, null, [
    ['Berget syns i bakgrunden.', '山在背景里看得见。'],
    ['Bakgrunden till beslutet är enkel.', '这项决定的背景很简单。'],
    ['Hon har en annan bakgrund än jag.', '她的出身跟我不一样。'],
    ['Berätta din bakgrund kort.', '简短说说你的背景。'],
  ]), 2408, c(
    [
      ['bak', '后面'],
      ['grund', '底；基础'],
    ],
    '后面的底子，就是背景，也可指出身。',
  )),
  freq(verb('lysa', '发光；宣布', 'to shine / to announce', 'lyser', 'lyste', 'lyst', 'lys', [
    ['Lampan lyser svagt.', '灯微微发光。'],
    ['Månen lyste i natt.', '月亮夜里发光了。'],
    ['Tjänsten har lysts ut.', '这个职位已经公布了。'],
    ['Lys upp rummet.', '把房间照亮。'],
  ]), 2409),
  freq(noun('blogginlägg', 'ett', '博客文章', 'blog post', 'blogginlägget', 'blogginlägg', 'blogginläggen', [
    ['Hon skrev ett blogginlägg i går.', '她昨天写了一篇博客。'],
    ['Blogginlägget blev läst av många.', '那篇博客很多人看了。'],
    ['Han har tre blogginlägg klara.', '他已经写好三篇博客。'],
    ['Blogginläggen handlar om mat.', '那些博客是关于食物的。'],
  ]), 2410, c(
    [
      ['blogg', '博客'],
      ['inlägg', '帖子；投入'],
    ],
    '“博客上的帖子”，就是博客文章。',
  )),
  freq(adj('fransk', '法国的；法语的', 'French', 'franskt', 'franska', [
    ['Hon köpte fransk ost.', '她买了法国奶酪。'],
    ['Ett franskt vin stod på bordet.', '桌上放着一瓶法国葡萄酒。'],
    ['De franska gästerna kom sent.', '那些法国客人来晚了。'],
    ['Hon läser en fransk roman.', '她在读一本法国小说。'],
  ]), 2411),
  freq(adj('östra', '东边的；东部的', 'eastern / east', 'östra', 'östra', [
    ['Vi bor i östra delen av stan.', '我们住在城东。'],
    ['Den östra bron är stängd.', '东边那座桥关了。'],
    ['Östra sidan av sjön är grund.', '湖的东岸很浅。'],
    ['Tåget går mot östra stationen.', '火车开往东站。'],
  ]), 2412),
  freq(noun('släkting', 'en', '亲戚', 'relative', 'släktingen', 'släktingar', null, [
    ['En släkting kommer på besök.', '一位亲戚要来做客。'],
    ['Släktingen bor i Malmö.', '那位亲戚住在马尔默。'],
    ['Hon har släktingar i Norge.', '她在挪威有亲戚。'],
    ['Ring släktingen i kväll.', '今晚给那位亲戚打电话。'],
  ]), 2413, c([['släkt', '亲戚；家族'], ['-ing', '……的人']], '属于家族的人，就是亲戚。')),
  freq(noun('centrum', 'ett', '中心；市中心', 'centre / downtown', 'centrumet', 'centrum', 'centrumen', [
    ['Vi möts i centrum.', '我们在市中心见面。'],
    ['Centrumet är fullt av folk.', '市中心挤满了人。'],
    ['Två centrum ligger längs ån.', '河边有两个中心。'],
    ['Centrumen stänger tidigt på söndagar.', '那些中心星期天关门早。'],
  ]), 2414),
  freq(noun('grotta', 'en', '洞穴', 'cave', 'grottan', 'grottor', 'grottorna', [
    ['Vi gick in i en grotta.', '我们走进一个洞穴。'],
    ['Grottan var mörk och fuktig.', '那个洞穴又暗又潮。'],
    ['Det finns två grottor vid havet.', '海边有两个洞穴。'],
    ['Grottorna är stängda på vintern.', '那些洞穴冬天关闭。'],
  ]), 2415),
  freq(verb('slicka', '舔', 'to lick', 'slickar', 'slickade', 'slickat', 'slicka', [
    ['Hunden slickar tassen.', '狗在舔爪子。'],
    ['Barnet slickade glassen.', '孩子舔了冰淇淋。'],
    ['Katten har slickat skålen.', '猫把碗舔过了。'],
    ['Slicka inte på kniven.', '别舔刀。'],
  ]), 2416),
  freq(noun('ratt', 'en', '方向盘', 'steering wheel', 'ratten', 'rattar', 'rattarna', [
    ['Håll båda händerna på ratten.', '双手握着方向盘。'],
    ['Ratten är kall på morgonen.', '早上方向盘是冰的。'],
    ['Bilarna har olika rattar.', '这些车的方向盘不一样。'],
    ['Rattarna ska sitta fast.', '那些方向盘必须装牢。'],
  ]), 2417),
  freq(other('till dess', 'phrase', '到那时；直到', 'until then / until', [
    ['Vänta till dess.', '等到那时候。'],
    ['Till dess får du vila.', '在那之前你先休息。'],
    ['Vi stannar till dess att bussen kommer.', '我们等到公交车来。'],
    ['Till dess är allt oklart.', '在那之前一切都不清楚。'],
  ]), 2418, c(
    [
      ['till', '到'],
      ['dess', '那时；那一点'],
    ],
    '“到那个时候”，就是到那时、直到。',
  )),
  freq(adj('låg', '低的；矮的', 'low / short (height)', 'lågt', 'låga', [
    ['Stolen har en låg rygg.', '这椅子靠背很低。'],
    ['Ett lågt staket räcker inte.', '一道矮篱笆不够。'],
    ['De låga molnen täcker dalen.', '那些低云盖着山谷。'],
    ['Håll rösten låg här inne.', '在这儿把声音放低。'],
  ]), 2419),
  freq(noun('tårta', 'en', '蛋糕（多层／裱花）', 'cake (layered / decorated)', 'tårtan', 'tårtor', null, [
    ['Vi bakade en tårta till festen.', '我们为聚会烤了蛋糕。'],
    ['Tårtan smakar citron.', '这个蛋糕是柠檬味的。'],
    ['Hon köpte två tårtor.', '她买了两个蛋糕。'],
    ['Skär tårtan i åtta bitar.', '把蛋糕切成八块。'],
  ]), 2420),
  freq(adj('vettig', '明智的；讲理的', 'sensible / reasonable', 'vettigt', 'vettiga', [
    ['Det var ett vettigt förslag.', '那是个明智的提议。'],
    ['Ett vettigt svar kom till slut.', '终于来了一个讲理的答复。'],
    ['De vettiga argumenten vann.', '那些讲理的论点赢了。'],
    ['Var lite vettig nu.', '现在讲点道理。'],
  ]), 2421, c(
    [
      ['vett', '理智；常识'],
      ['-ig', '带有……性质的'],
    ],
    '“带有理智的”，就是明智的、讲理的。',
  )),
  freq(noun('fordon', 'ett', '车辆', 'vehicle', 'fordonet', 'fordon', 'fordonen', [
    ['Ett fordon stannade vid rödljus.', '一辆车在红灯前停了。'],
    ['Fordonet är för brett här.', '这辆车在这儿太宽了。'],
    ['Flera fordon väntar i kön.', '好几辆车在排队等。'],
    ['Fordonen måste besiktigas.', '那些车辆必须年检。'],
  ]), 2422),
  freq(adj('mäktig', '强大的；撑人的', 'powerful / filling (of food)', 'mäktigt', 'mäktiga', [
    ['Kungen var en mäktig man.', '国王是个强大的人。'],
    ['Ett mäktigt slott låg på kullen.', '山上有一座雄伟的城堡。'],
    ['De mäktiga företagen styr mycket.', '那些强大的公司管着很多事。'],
    ['Middagen var för mäktig.', '这顿晚饭太撑人了。'],
  ], { comparative: 'mäktigare', superlative: 'mäktigast' }), 2423),
  freq(noun('tillit', 'en', '信任', 'trust / confidence', 'tilliten', null, null, [
    ['Vi har tillit till varandra.', '我们彼此信任。'],
    ['Tilliten skadades av lögnen.', '那句谎言伤害了信任。'],
    ['Hon visade stor tillit.', '她表现出很大的信任。'],
    ['Utan tillit går det inte.', '没有信任就行不通。'],
  ]), 2424, c(
    [
      ['till', '向；对'],
      ['lit', '信赖（lita 信赖）'],
    ],
    '“向某人信赖”，合起来就是信任。',
  )),
  freq(noun('brand', 'en', '火灾；火', 'fire (blaze)', 'branden', 'bränder', 'bränderna', [
    ['En brand bröt ut i huset.', '房子里起火了。'],
    ['Branden släcktes snabbt.', '那场火灾很快被扑灭。'],
    ['Flera bränder rasade i somras.', '夏天有好几场火灾在烧。'],
    ['Bränderna syntes långt bort.', '那些火从很远就能看见。'],
  ]), 2425),
  freq(noun('kors', 'ett', '十字架；十字', 'cross', 'korset', 'kors', 'korsen', [
    ['Ett kors står vid vägen.', '路边立着一个十字架。'],
    ['Korset är av trä.', '那个十字架是木头的。'],
    ['Hon ritade två kors på kartan.', '她在地图上画了两个十字。'],
    ['Korsen på kyrkogården är gamla.', '墓园里那些十字架很旧。'],
  ]), 2426),
  freq(adj('meningslös', '无意义的；徒劳的', 'meaningless / pointless', 'meningslöst', 'meningslösa', [
    ['Det känns meningslöst att vänta.', '等下去感觉没意义。'],
    ['Ett meningslöst bråk startade.', '一场毫无意义的争吵开始了。'],
    ['De meningslösa mötena slopades.', '那些没用的会议取消了。'],
    ['Grälet var helt meningslöst.', '那场争吵完全没意义。'],
  ]), 2427, c(
    [
      ['mening', '意义；句子'],
      ['-s-', '连接音'],
      ['lös', '没有的'],
    ],
    '“没有意义的”，就是无意义的、徒劳的。',
  )),
  freq(noun('folkomröstning', 'en', '全民公投', 'referendum', 'folkomröstningen', 'folkomröstningar', 'folkomröstningarna', [
    ['Det blir en folkomröstning i höst.', '秋天会举行全民公投。'],
    ['Folkomröstningen gällde euron.', '那次公投是关于欧元的。'],
    ['Landet har haft tre folkomröstningar.', '这个国家举行过三次公投。'],
    ['Folkomröstningarna samlade många väljare.', '那些公投聚集了很多选民。'],
  ]), 2428, c(
    [
      ['folk', '人民'],
      ['omröstning', '表决'],
    ],
    '“由人民来表决”，就是全民公投。',
  )),
  freq(noun('metod', 'en', '方法', 'method', 'metoden', 'metoder', null, [
    ['Hon har en ny metod.', '她有一种新方法。'],
    ['Metoden fungerar bra.', '这个方法很好用。'],
    ['Vi testade tre metoder.', '我们试了三种方法。'],
    ['Byt metod om det inte går.', '不行就换方法。'],
  ]), 2429),
  freq(verb('anlända', '到达', 'to arrive', 'anländer', 'anlände', 'anlänt', 'anländ', [
    ['Tåget anländer klockan tre.', '火车三点到达。'],
    ['De anlände sent i går.', '他们昨天到晚了。'],
    ['Har ni anlänt till hotellet?', '你们到酒店了吗？'],
    ['Anländ i tid till mötet.', '准时赶到会议。'],
  ]), 2430, c(
    [
      ['an-', '向着／到达'],
      ['landa', '着陆；靠岸'],
    ],
    '向着目的地靠过去，合起来就是到达。',
  )),
  freq(other('därnere', 'adv', '在下面那边', 'down there', [
    ['Nyckeln ligger därnere.', '钥匙在下面那边。'],
    ['De väntar därnere i hallen.', '他们在下面门厅等。'],
    ['Titta därnere vid sjön.', '看下面湖边那边。'],
    ['Vi ses därnere.', '我们在下面那边见。'],
  ]), 2431, c(
    [
      ['där', '那里'],
      ['nere', '在下面'],
    ],
    '“在那里的下面”，就是在下面那边。',
  )),
  freq(noun('ställning', 'en', '立场；姿势；排名；架子', 'position / stance / ranking / stand', 'ställningen', 'ställningar', 'ställningarna', [
    ['Vad är din ställning i frågan?', '你在这个问题上的立场是什么？'],
    ['Ställningen i matchen är 2–1.', '比赛比分是 2–1。'],
    ['Bygget har flera ställningar.', '工地上有好几座脚手架。'],
    ['Ställningarna ska monteras ner.', '那些架子要拆掉。'],
  ]), 2432, c(
    [
      ['ställa', '放置；使处于'],
      ['-ning', '行为/结果名词后缀'],
    ],
    '“被放成的样子”，可以是姿势、立场、排名，也可以是架子。',
  )),
  freq(verb('heja', '加油；欢呼', 'to cheer', 'hejar', 'hejade', 'hejat', 'heja', [
    ['Vi hejar på laget.', '我们给这队加油。'],
    ['Publiken hejade högt.', '观众大声加油。'],
    ['De har hejat i nittio minuter.', '他们加了九十分钟油。'],
    ['Heja på henne!', '给她加油！'],
  ]), 2433),
  freq(noun('övning', 'en', '练习；训练', 'exercise / practice / drill', 'övningen', 'övningar', null, [
    ['Gör övningen på sidan tre.', '做第三页的练习。'],
    ['Övningen tar tjugo minuter.', '这项练习要二十分钟。'],
    ['Vi har tre övningar kvar.', '我们还剩三道练习。'],
    ['Gör övningen tyst, tack.', '请安静做这道练习。'],
  ]), 2434, c([['öva', '练习'], ['-ning', '行为／结果']], '练习这件事，合起来就是练习、训练。')),
  freq(other('samt', 'other', '以及；和（列举末项）', 'and / as well as', [
    ['Ta med penna, papper samt sudd.', '带上笔、纸以及橡皮。'],
    ['Hon talar svenska samt engelska.', '她说瑞典语以及英语。'],
    ['Barn samt vuxna är välkomna.', '儿童以及成人都欢迎。'],
    ['Kaffe, te samt kaka serveras.', '供应咖啡、茶以及蛋糕。'],
  ]), 2435),
  freq(adj('nuvarande', '现在的；现任的', 'current / present', 'nuvarande', 'nuvarande', [
    ['Hon är nuvarande chef.', '她是现任老板。'],
    ['Ett nuvarande problem är hyran.', '当前的一个问题是房租。'],
    ['De nuvarande reglerna gäller fortfarande.', '现在这些规定仍然有效。'],
    ['Min nuvarande adress står på kortet.', '我现在的地址写在卡片上。'],
  ]), 2436, c(
    [
      ['nu', '现在'],
      ['varande', '存在着的（vara 是）'],
    ],
    '“现在存在着的”，就是现在的、现任的。',
  )),
  freq(noun('demon', 'en', '恶魔；魔鬼', 'demon', 'demonen', 'demoner', null, [
    ['Sagan handlar om en demon.', '这个故事讲的是一个恶魔。'],
    ['Demonen skrämde barnen.', '那个魔鬼把孩子们吓坏了。'],
    ['Hon kämpar mot sina demoner.', '她在跟内心的魔鬼搏斗。'],
    ['Tro inte på demonen i filmen.', '别把电影里的恶魔当真。'],
  ]), 2437),
  freq(other('automatiskt', 'adv', '自动地', 'automatically', [
    ['Dörren öppnas automatiskt.', '门会自动打开。'],
    ['Pengarna dras automatiskt.', '钱会自动扣掉。'],
    ['Hon svarade automatiskt ja.', '她不假思索地答应了。'],
    ['Spara filen automatiskt varje timme.', '每小时自动保存文件。'],
  ]), 2438, c(
    [
      ['automatisk', '自动的'],
      ['-t', '副词词尾'],
    ],
    '以自动的方式，就是自动地。',
  )),
  freq(noun('användning', 'en', '使用；用途', 'use / usage', 'användningen', 'användningar', 'användningarna', [
    ['Mobilen har många användningar.', '手机有很多用途。'],
    ['Användningen av plast ska minska.', '塑料的使用要减少。'],
    ['Det finns flera användningar för resterna.', '剩料有好几种用途。'],
    ['Användningarna skiljer sig åt.', '那些用途各不相同。'],
  ]), 2439, c(
    [
      ['använda', '使用'],
      ['-ning', '行为/结果名词后缀'],
    ],
    '由“使用”这个动作变成名词，就是使用、用途。',
  )),
  freq(noun('väninna', 'en', '女朋友（女性友人）', 'female friend', 'väninnan', 'väninnor', 'väninnorna', [
    ['Hon träffade en gammal väninna.', '她见了一个老朋友。'],
    ['Väninnan bor i Lund.', '那位女友住在隆德。'],
    ['Två väninnor kom på fika.', '两位女友来喝咖啡。'],
    ['Väninnorna skrattade högt.', '那些女友大声笑。'],
  ]), 2440, c(
    [
      ['vän', '朋友'],
      ['-inna', '女性后缀'],
    ],
    '“女性的朋友”，就是女朋友（指女性友人，不是恋爱对象）。',
  )),
  freq(verb('tina', '解冻；融化', 'to thaw', 'tinar', 'tinade', 'tinat', 'tina', [
    ['Snön tinar i solen.', '雪在太阳下化。'],
    ['Hon tinade köttet.', '她把肉解冻了。'],
    ['Isen har tinat bort.', '冰已经化掉了。'],
    ['Tina maten i kylen.', '在冰箱里把食物解冻。'],
  ]), 2441),
  freq(noun('serie', 'en', '系列；连续剧；连环画', 'series / TV series / comic', 'serien', 'serier', null, [
    ['Vi tittar på en ny serie.', '我们在看一部新连续剧。'],
    ['Serien har åtta avsnitt.', '这部剧有八集。'],
    ['Hon läser serier på bussen.', '她在公交上看连环画。'],
    ['Börja serien från avsnitt ett.', '从第一集开始看这部剧。'],
  ]), 2442),
  freq(noun('religion', 'en', '宗教', 'religion', 'religionen', 'religioner', null, [
    ['Religion är viktigt för henne.', '宗教对她很重要。'],
    ['Religionen präglar högtiderna.', '宗教影响着这些节日。'],
    ['Olika religioner möts här.', '不同宗教在这儿相遇。'],
    ['Respektera hennes religion.', '尊重她的宗教。'],
  ]), 2443),
  freq(noun('stånd', 'ett', '摊位；状态；立场', 'stall / state / stand', 'ståndet', 'stånd', 'stånden', [
    ['De säljer korv i ett stånd.', '他们在一个摊位卖香肠。'],
    ['Ståndet stängde klockan fem.', '那个摊位五点关了。'],
    ['Hon är i stånd att hjälpa.', '她有能力帮忙。'],
    ['Stånden på torget var fulla.', '广场上那些摊位都满了。'],
  ]), 2444, c(
    [
      ['stå', '站'],
      ['-nd', '名词词尾'],
    ],
    '“站着形成的位置”，可以是摊位、状态，也可以是站住的立场。',
  )),
  freq(adj('angenäm', '愉快的；惬意的', 'pleasant / agreeable', 'angenämt', 'angenäma', [
    ['Det var en angenäm kväll.', '那是个愉快的晚上。'],
    ['Ett angenämt samtal följde.', '接着是一次愉快的谈话。'],
    ['De angenäma dofterna spred sig.', '那些好闻的气味散开了。'],
    ['Vistelsen var mycket angenäm.', '这段逗留非常惬意。'],
  ]), 2445),
  freq(verb('rinna', '流；淌', 'to flow / to run (of liquid)', 'rinner', 'rann', 'runnit', 'rinn', [
    ['Vattnet rinner ur kranen.', '水从水龙头流出来。'],
    ['Bäcken rann genom skogen.', '小溪流过森林。'],
    ['Mjölken har runnit ut.', '牛奶已经流出来了。'],
    ['Låt det rinna en stund.', '让它流一会儿。'],
  ]), 2446),
  freq(adj('flytande', '流动的；流利的；漂着的', 'liquid / fluent / floating', 'flytande', 'flytande', [
    ['Hon skriver flytande engelska.', '她英文写得很流畅。'],
    ['Köp flytande tvål i stället.', '改买液体皂。'],
    ['De flytande isflaken driver söderut.', '那些浮冰向南漂。'],
    ['Håll båten flytande.', '让船漂着别沉。'],
  ]), 2447),
  freq(noun('hamburgare', 'en', '汉堡包', 'hamburger', 'hamburgaren', 'hamburgare', 'hamburgarna', [
    ['Jag tar en hamburgare, tack.', '我要一个汉堡，谢谢。'],
    ['Hamburgaren är för salt.', '这个汉堡太咸了。'],
    ['Vi köpte tre hamburgare.', '我们买了三个汉堡。'],
    ['Hamburgarna är klara nu.', '那些汉堡好了。'],
  ]), 2448),
  freq(noun('arbetare', 'en', '工人', 'worker / labourer', 'arbetaren', 'arbetare', 'arbetarna', [
    ['En arbetare bar en stege.', '一名工人扛着梯子。'],
    ['Arbetaren gick hem klockan fyra.', '那名工人四点回家了。'],
    ['Flera arbetare väntar vid grinden.', '好几名工人在大门等。'],
    ['Arbetarna tar rast nu.', '那些工人现在休息。'],
  ]), 2449, c([['arbeta', '工作'], ['-are', '做这事的人']], '做工的人，就是工人。')),
  freq(noun('vetenskap', 'en', '科学', 'science', 'vetenskapen', 'vetenskaper', 'vetenskaperna', [
    ['Hon läser naturvetenskap.', '她在学自然科学。'],
    ['Vetenskapen går framåt.', '科学在前进。'],
    ['Olika vetenskaper samarbetar.', '不同科学在合作。'],
    ['Vetenskaperna kräver evidens.', '那些科学都需要证据。'],
  ]), 2450, c(
    [
      ['veta', '知道'],
      ['-skap', '状态/领域后缀'],
    ],
    '“知道所形成的领域”，就是科学。',
  )),
]

import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1401–1450. Primary POS is the high-frequency use, not every sense in the book. */
export const list29: Word[] = [
  freq(noun('tomt', 'en', '地块；宅基地', 'plot / site', 'tomten', 'tomter', null, [
    ['De köpte en tomt vid sjön.', '他们买了湖边一块地。'],
    ['Tomten är stor nog.', '这块地够大。'],
    ['Två tomter ligger tomma.', '两块地空着。'],
    ['Bygg huset på tomten.', '在这块地上盖房子。'],
  ]), 1401),
  freq(verb('hantera', '处理；操作；应付', 'to handle / to manage', 'hanterar', 'hanterade', 'hanterat', 'hantera', [
    ['Hon hanterar krisen bra.', '她把这场危机处理得很好。'],
    ['Han hanterade lådan försiktigt.', '他小心地搬了那个箱子。'],
    ['Har ni hanterat det än?', '你们处理这件事了吗？'],
    ['Hantera nyckeln försiktigt.', '小心拿这把钥匙。'],
  ]), 1402),
  freq(noun('klubb', 'en', '俱乐部', 'club', 'klubben', 'klubbar', null, [
    ['Hon är med i en klubb.', '她参加了一个俱乐部。'],
    ['Klubben möts på måndag.', '俱乐部星期一开会。'],
    ['Det finns två klubbar i stan.', '城里有两个俱乐部。'],
    ['Gå med i klubben.', '加入这个俱乐部。'],
  ]), 1403),
  freq(verb('krossa', '打碎；粉碎', 'to crush / to smash', 'krossar', 'krossade', 'krossat', 'krossa', [
    ['Han krossar isen med hammaren.', '他用锤子砸碎冰。'],
    ['Glaset krossades på golvet.', '玻璃杯在地板上摔碎了。'],
    ['De har krossat motståndet.', '他们粉碎了抵抗。'],
    ['Krossa inte drömmen.', '别把梦想打碎。'],
  ]), 1404),
  freq(noun('begravning', 'en', '葬礼', 'funeral', 'begravningen', 'begravningar', 'begravningarna', [
    ['Begravningen är på fredag.', '葬礼在星期五。'],
    ['Många kom till begravningen.', '很多人来参加了葬礼。'],
    ['Det var tre begravningar den veckan.', '那一周有三场葬礼。'],
    ['Efter begravningarna var det tyst.', '葬礼之后一片安静。'],
  ]), 1405, c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['grav', '坟墓'],
      ['-ning', '行为名词后缀'],
    ],
    '“把人放进坟墓的行为”，合起来就是葬礼。',
  )),
  freq(noun('stöd', 'ett', '支撑；支持', 'support', 'stödet', 'stöd', 'stöden', [
    ['Hon behöver stöd i dag.', '她今天需要支持。'],
    ['Stödet från vännerna räcker.', '朋友们的支持够了。'],
    ['Vi ger dem vårt stöd.', '我们给他们支持。'],
    ['De två stöden är för korta.', '那两个支架太短了。'],
  ]), 1406),
  freq(noun('webbplats', 'en', '网站', 'website', 'webbplatsen', 'webbplatser', null, [
    ['Vi har en ny webbplats.', '我们有一个新网站。'],
    ['Webbplatsen ligger nere.', '网站挂了。'],
    ['Hon jämför tre webbplatser.', '她在比较三个网站。'],
    ['Öppna webbplatsen i datorn.', '在电脑上打开这个网站。'],
  ]), 1407, c([['webb', '网络'], ['plats', '地方']], '网上的地方，合起来就是网站。')),
  freq(noun('glass', 'en', '冰淇淋', 'ice cream', 'glassen', 'glassar', null, [
    ['Ett barn äter glass.', '一个孩子在吃冰淇淋。'],
    ['Glassen smälter i solen.', '冰淇淋在太阳下化了。'],
    ['Vi köpte två glassar.', '我们买了两个冰淇淋。'],
    ['Vill du ha en glass?', '你想要一个冰淇淋吗？'],
  ]), 1408),
  freq(adj('andra', '第二的；其他的', 'second / other', 'andra', 'andra', [
    ['Ta den andra dörren.', '走第二扇门。'],
    ['Det andra glaset är rent.', '第二个杯子是干净的。'],
    ['De andra har gått hem.', '其他人已经回家了。'],
    ['Andra dagen var bättre.', '第二天更好了。'],
  ]), 1409),
  freq(noun('låda', 'en', '盒子；抽屉', 'box / drawer', 'lådan', 'lådor', null, [
    ['Nyckeln ligger i en låda.', '钥匙在一个盒子里。'],
    ['Lådan går inte att öppna.', '这个抽屉打不开。'],
    ['Hon har tre lådor i byrån.', '她柜子里有三个抽屉。'],
    ['Lägg breven i lådan.', '把信放进这个盒子里。'],
  ]), 1410),
  freq(other('nyligen', 'adv', '最近', 'recently', [
    ['Jag såg henne nyligen.', '我最近见过她。'],
    ['Han har nyligen flyttat hit.', '他最近刚搬到这里。'],
    ['Det hände nyligen.', '那是最近发生的。'],
    ['Nyligen läste jag den boken.', '我最近读了那本书。'],
  ]), 1411, c(
    [
      ['ny', '新的'],
      ['-ligen', '……地'],
    ],
    '“新近地”，合起来就是最近。',
  )),
  freq(other('personligen', 'adv', '亲自；就个人而言', 'personally', [
    ['Jag vill prata med henne personligen.', '我想亲自跟她谈。'],
    ['Personligen tycker jag det är fel.', '就我个人而言，我觉得这不对。'],
    ['Han kom personligen till mötet.', '他亲自来开会了。'],
    ['Tacka henne personligen.', '亲自谢谢她。'],
  ]), 1412, c([['person', '人'], ['-ligen', '……地']], '就人本身而言，合起来就是亲自、就我个人而言。')),
  freq(noun('hämnd', 'en', '报复', 'revenge', 'hämnden', null, null, [
    ['Han vill ha hämnd.', '他想报复。'],
    ['Hämnden gör ingen glad.', '报复不会让任何人快乐。'],
    ['Det var inte hämnd, det var rättvisa.', '那不是报复，那是公正。'],
    ['Glöm hämnden.', '忘掉报复吧。'],
  ]), 1413),
  freq(verb('stinka', '发臭', 'to stink', 'stinker', 'stank', 'stunkit', 'stink', [
    ['Soptunnan stinker.', '垃圾桶发臭。'],
    ['Det stank i rummet.', '房间里当时很臭。'],
    ['Fisken har stunkit länge.', '这条鱼已经臭了很久。'],
    ['Stink inte upp hela huset.', '别把整栋房子熏臭了。'],
  ]), 1414),
  freq(noun('skönhet', 'en', '美；美人', 'beauty', 'skönheten', null, null, [
    ['Hon älskar stadens skönhet.', '她爱这座城市的美。'],
    ['Skönheten i musiken rörde oss.', '音乐之美打动了我们。'],
    ['Filmen visar naturens skönhet.', '电影展现了自然之美。'],
    ['De talade om hennes skönhet.', '他们谈到了她的美。'],
  ]), 1415, c([['skön', '美的'], ['-het', '性质、状态']], '美的性质，合起来就是美、美人。')),
  freq(noun('kontrakt', 'ett', '合同；契约', 'contract', 'kontraktet', 'kontrakt', 'kontrakten', [
    ['Vi har ett kontrakt på lägenheten.', '我们有这份公寓的合同。'],
    ['Kontraktet gäller tre år.', '这份合同有效三年。'],
    ['De har två kontrakt igång.', '他们有两份合同在执行。'],
    ['Läs kontrakten noga.', '仔细读那些合同。'],
  ]), 1416),
  freq(noun('bröd', 'ett', '面包', 'bread', 'brödet', 'bröd', 'bröden', [
    ['Vi köper bröd varje morgon.', '我们每天早上买面包。'],
    ['Brödet är färskt.', '这面包很新鲜。'],
    ['Hon bakade tre bröd.', '她烤了三个面包。'],
    ['Bröden svalnar på bordet.', '那些面包在桌上冷却。'],
  ]), 1417),
  freq(noun('post', 'en', '邮件；邮局', 'mail / post office', 'posten', null, null, [
    ['Har posten kommit än?', '邮件到了吗？'],
    ['Det ligger post i hallen.', '门厅里有邮件。'],
    ['Gå till posten efter jobbet.', '下班后去邮局。'],
    ['Vi väntar på posten.', '我们在等邮件。'],
  ]), 1418),
  freq(noun('planet', 'en', '行星', 'planet', 'planeten', 'planeter', null, [
    ['Jorden är en planet.', '地球是一颗行星。'],
    ['Planeten är kall där ute.', '那颗行星在外面很冷。'],
    ['Det finns åtta planeter.', '有八颗行星。'],
    ['Titta på planeten i kikaren.', '用望远镜看那颗行星。'],
  ]), 1419),
  freq(adj('mörk', '暗的；深色的；阴沉的', 'dark / gloomy', 'mörkt', 'mörka', [
    ['Hon har en mörk jacka.', '她有一件深色外套。'],
    ['Ett mörkt rum väntar.', '一间暗房间等着。'],
    ['De mörka molnen kom snabbt.', '那些乌云来得很快。'],
    ['Det är mörkt i källaren.', '地下室里很暗。'],
  ]), 1420),
  freq(noun('rättvisa', 'en', '公正；正义', 'justice / fairness', 'rättvisan', null, null, [
    ['Vi vill ha rättvisa.', '我们要公正。'],
    ['Rättvisan kom sent.', '正义来得很晚。'],
    ['Hon kämpar för rättvisa.', '她为正义奋斗。'],
    ['Det är ingen rättvisa i det.', '这里面没有公正。'],
  ]), 1421, c([['rättvis', '公正的'], ['-a', '（名词）']], '公正的性质，合起来就是公正、正义。')),
  freq(noun('straff', 'ett', '惩罚；刑罚', 'punishment / sentence', 'straffet', 'straff', 'straffen', [
    ['Han fick ett hårt straff.', '他受到了重罚。'],
    ['Straffet var två år.', '刑期是两年。'],
    ['Domstolen ger sällan långa straff.', '法院很少判长期刑罚。'],
    ['Straffen ska vara rättvisa.', '那些刑罚应当公正。'],
  ]), 1422),
  freq(verb('ryka', '冒烟；冒气', 'to smoke / to steam', 'ryker', 'rykte', 'rykt', 'ryk', [
    ['Det ryker från skorstenen.', '烟囱在冒烟。'],
    ['Gröten rykte på bordet.', '粥在桌上冒着热气。'],
    ['Det har rykt här hela dan.', '这里冒了一整天烟。'],
    ['Huvudet ryker av alla frågor.', '问题太多，脑子都冒烟了。'],
  ]), 1423),
  freq(noun('paus', 'en', '休息；暂停', 'pause / break', 'pausen', 'pauser', null, [
    ['Vi tar en paus nu.', '我们现在休息一下。'],
    ['Pausen varar i tio minuter.', '这段休息持续十分钟。'],
    ['Det blir två pauser i pjäsen.', '戏里有两次中场休息。'],
    ['Kom tillbaka efter pausen.', '休息后来。'],
  ]), 1424),
  freq(noun('röv', 'en', '屁股（粗俗）', 'ass (vulgar)', 'röven', 'rövar', 'rövarna', [
    ['Sitt inte på röven hela dan.', '别整天坐着屁股不挪。'],
    ['Han föll på röven.', '他一屁股摔了下去。'],
    ['Ordet är vulgärt, använd det sällan.', '这个词很粗俗，少用。'],
    ['De skrattade åt röven på byxorna.', '他们笑裤子后面那一块。'],
  ], ['vulgar']), 1425),
  freq(noun('stat', 'en', '国家；政府', 'state / government', 'staten', 'stater', null, [
    ['Staten betalar för skolan.', '国家给学校出钱。'],
    ['Det är en liten stat i norr.', '那是北方一个小国家。'],
    ['Flera stater skrev på avtalet.', '好几个国家签了协议。'],
    ['Hon jobbar för staten.', '她为国家工作。'],
  ]), 1426),
  freq(noun('öken', 'en', '沙漠', 'desert', 'öknen', 'öknar', 'öknarna', [
    ['Kamelen går genom öknen.', '骆驼穿过沙漠。'],
    ['Öknen är het på dan.', '沙漠白天很热。'],
    ['Det finns flera öknar i Afrika.', '非洲有好几片沙漠。'],
    ['Öknarna är torra.', '那些沙漠很干燥。'],
  ]), 1427),
  freq(noun('kostym', 'en', '西装；戏服', 'suit / costume', 'kostymen', 'kostymer', null, [
    ['Han har en svart kostym.', '他有一套黑西装。'],
    ['Kostymen sitter bra.', '这套西装很合身。'],
    ['Skådespelarna byter kostymer.', '演员们在换衣服。'],
    ['Häng upp kostymen.', '把西装挂起来。'],
  ]), 1428),
  freq(verb('skaka', '摇；发抖', 'to shake', 'skakar', 'skakade', 'skakat', 'skaka', [
    ['Skaka flaskan före användning.', '使用前摇匀瓶子。'],
    ['Hon skakade av kyla.', '她冷得发抖。'],
    ['Huset har skakat i stormen.', '房子在风暴里晃过。'],
    ['Skaka inte så hårt.', '别摇那么猛。'],
  ]), 1429),
  freq(noun('madame', 'en', '夫人；女士（称呼）', 'Madame', null, null, null, [
    ['God dag, madame.', '日安，夫人。'],
    ['Madame väntar vid dörren.', '夫人在门口等。'],
    ['Hon tilltalades madame.', '她被称作夫人。'],
    ['Säg till madame att vi är klara.', '告诉夫人我们已经好了。'],
  ]), 1430),
  freq(adj('ovanlig', '不寻常的；少见的', 'unusual / rare', 'ovanligt', 'ovanliga', [
    ['Det är en ovanlig färg.', '这是少见的颜色。'],
    ['Ett ovanligt namn, tycker jag.', '我觉得这是个少见的名字。'],
    ['De ovanliga fåglarna flyger söderut.', '那些少见的鸟往南飞。'],
    ['Vädret är ovanligt varmt.', '天气出奇地暖和。'],
  ]), 1431, c([['o-', '不'], ['vanlig', '平常的']], '不是平常的，合起来就是不寻常的、少见的。')),
  freq(noun('choklad', 'en', '巧克力', 'chocolate', 'chokladen', null, null, [
    ['Vill du ha choklad?', '你想吃巧克力吗？'],
    ['Chokladen är mörk.', '这巧克力是黑的。'],
    ['Hon dricker varm choklad.', '她在喝热巧克力。'],
    ['Köp choklad till kaffet.', '买点巧克力配咖啡。'],
  ]), 1432),
  freq(adj('rysk', '俄罗斯的；俄语的', 'Russian', 'ryskt', 'ryska', [
    ['En rysk vän bor här.', '一位俄罗斯朋友住在这儿。'],
    ['Ett ryskt namn står på dörren.', '门上写着一个俄语名字。'],
    ['De ryska gästerna kommer i kväll.', '那些俄罗斯客人今晚来。'],
    ['Maten är rysk.', '这是俄罗斯菜。'],
  ]), 1433),
  freq(noun('glädje', 'en', '喜悦；快乐', 'joy / delight / pleasure', 'glädjen', null, null, [
    ['Nyheten gav oss glädje.', '这消息给我们带来喜悦。'],
    ['Glädjen syntes i hennes ansikte.', '喜悦写在她脸上。'],
    ['Barnen skrattar av glädje.', '孩子们高兴地笑。'],
    ['Dela glädjen med oss.', '和我们分享这份快乐。'],
  ]), 1434),
  freq(noun('avstånd', 'ett', '距离', 'distance', 'avståndet', 'avstånd', 'avstånden', [
    ['Det är ett kort avstånd till skolan.', '到学校距离很短。'],
    ['Avståndet är två kilometer.', '这段距离是两公里。'],
    ['Håll avstånd i kön.', '排队时保持距离。'],
    ['Avstånden mellan husen är stora.', '房子之间的那些距离很大。'],
  ]), 1435, c([['av', '离开'], ['stånd', '站立／位置']], '离开所站的位置，合起来就是距离。')),
  freq(noun('spelare', 'en', '选手；玩家', 'player', 'spelaren', 'spelare', 'spelarna', [
    ['En spelare väntar på bänken.', '一名选手在板凳上等待。'],
    ['Spelaren gör mål.', '这名选手进球了。'],
    ['Laget har elva spelare.', '这支队伍有十一名选手。'],
    ['Spelarna vilar nu.', '那些选手现在在休息。'],
  ]), 1436, c([['spela', '玩／比赛'], ['-are', '……的人']], '参加比赛或游戏的人，合起来就是选手、玩家。')),
  freq(noun('erfarenhet', 'en', '经验；经历', 'experience', 'erfarenheten', 'erfarenheter', null, [
    ['Hon har lång erfarenhet.', '她经验很丰富。'],
    ['Erfarenheten hjälpte oss.', '这次经历帮了我们。'],
    ['Vi delar våra erfarenheter.', '我们分享各自的经验。'],
    ['Ta vara på erfarenheten.', '珍惜这次经验。'],
  ]), 1437, c([['erfara', '经历'], ['-het', '性质、状态']], '经历过的东西，合起来就是经验、经历。')),
  freq(noun('galning', 'en', '疯子', 'madman / lunatic', 'galningen', 'galningar', 'galningarna', [
    ['Han kör som en galning.', '他开车像疯了一样。'],
    ['Galningen skrek i parken.', '那个疯子在公园里喊。'],
    ['Bara galningar går ut i den kylan.', '只有疯子才会在那种冷天出门。'],
    ['Galningarna sprang mot dörren.', '那些疯子朝门跑去。'],
  ]), 1438, c(
    [
      ['galen', '疯的'],
      ['-ing', '某种人'],
    ],
    '“疯的那种人”，合起来就是疯子。',
  )),
  freq(adj('oskadd', '未受伤的；完好的', 'unhurt / undamaged', 'oskatt', 'oskadda', [
    ['Alla kom oskadda hem.', '大家都毫发无损地回了家。'],
    ['Ett oskatt äpple låg i korgen.', '篮子里有一个完好的苹果。'],
    ['De oskadda bilarna körde vidare.', '那些没损坏的车继续开。'],
    ['Barnet var oskatt efter fallet.', '孩子摔倒后没受伤。'],
  ]), 1439, c([['o-', '不'], ['skadd', '受伤的']], '没有受伤的，合起来就是未受伤的、完好的。')),
  freq(noun('publik', 'en', '观众；听众', 'audience', 'publiken', null, null, [
    ['Publiken skrattade högt.', '观众大声笑了。'],
    ['Det var en stor publik i kväll.', '今晚观众很多。'],
    ['Hon hälsade på publiken.', '她向观众打招呼。'],
    ['Publiken gick hem tyst.', '观众安静地回家了。'],
  ]), 1440),
  freq(adj('imponerande', '令人印象深刻的', 'impressive', 'imponerande', 'imponerande', [
    ['Det var en imponerande insats.', '那是一次令人印象深刻的表现。'],
    ['Ett imponerande hus.', '一栋很气派的房子。'],
    ['De imponerande resultaten kom sent.', '那些出色的结果来得很晚。'],
    ['Hon är imponerande lugn.', '她出奇地冷静。'],
  ]), 1441),
  freq(noun('byxa', 'en', '裤子', 'trousers / pants', 'byxan', 'byxor', null, [
    ['Byxan är för lång.', '这条裤子太长。'],
    ['Hon köpte nya byxor.', '她买了新裤子。'],
    ['Mina byxor är blå.', '我的裤子是蓝色的。'],
    ['Köp en ny byxa till honom.', '给他买一条新裤子。'],
  ]), 1442),
  freq(noun('djävul', 'en', '魔鬼；恶魔', 'devil', 'djävulen', null, null, [
    ['Hon tror inte på djävulen.', '她不信魔鬼。'],
    ['Han skämtar om djävulen.', '他拿魔鬼开玩笑。'],
    ['I sagan vinner djävulen aldrig.', '故事里魔鬼从来赢不了。'],
    ['Ropa inte på djävulen.', '别把魔鬼招来。'],
  ]), 1443),
  freq(noun('klient', 'en', '客户；委托人', 'client', 'klienten', 'klienter', null, [
    ['Advokaten ringer sin klient.', '律师在给委托人打电话。'],
    ['Klienten väntar i rummet.', '客户在房间里等。'],
    ['Hon har tre klienter i dag.', '她今天有三个客户。'],
    ['Hjälp klienten först.', '先帮这位客户。'],
  ]), 1444),
  freq(noun('fotboll', 'en', '足球；足球运动', 'football / soccer', 'fotbollen', 'fotbollar', null, [
    ['Barnen sparkar fotboll.', '孩子们在踢足球。'],
    ['Fotbollen är ny.', '这个足球是新的。'],
    ['Vi har två fotbollar i lådan.', '盒子里有两个足球。'],
    ['Titta på fotboll i kväll.', '今晚看足球。'],
  ]), 1445, c([['fot', '脚'], ['boll', '球']], '用脚踢的球，合起来就是足球。')),
  freq(noun('oskuld', 'en', '无辜；清白（也常指童贞）', 'innocence; also virginity', 'oskulden', 'oskulder', 'oskulderna', [
    ['Han svor på sin oskuld.', '他发誓自己是无辜的。'],
    ['Hon hävdade sin oskuld.', '她坚称自己是无辜的。'],
    ['Bevisa din oskuld.', '证明你的清白。'],
    ['Jag tror på hennes oskuld.', '我相信她是清白的。'],
  ]), 1446, c(
    [
      ['o-', '不；没有'],
      ['skuld', '罪责；过错'],
    ],
    '“没有罪责”，合起来就是无辜、清白；也常用来指童贞。',
  )),
  freq(verb('lyda', '服从', 'to obey', 'lyder', 'lydde', 'lytt', 'lyd', [
    ['Barnen lyder inte alltid.', '孩子们并不总是听话。'],
    ['Soldaten lydde ordern.', '士兵服从了命令。'],
    ['Har du lytt ordern?', '你服从命令了吗？'],
    ['Lyd nu!', '现在听话！'],
  ]), 1447),
  freq(verb('tillåta', '允许；准许', 'to allow', 'tillåter', 'tillät', 'tillåtit', 'tillåt', [
    ['Mamma tillåter inte det.', '妈妈不允许这样。'],
    ['Han tillät oss att gå.', '他允许我们走了。'],
    ['Har de tillåtit hundar här?', '他们允许狗进来吗？'],
    ['Tillåt oss att hjälpa.', '允许我们帮忙吧。'],
  ]), 1448, c([['till', '向／给'], ['åta', '让']], '向着去让，合起来就是允许。')),
  freq(other('högt', 'adv', '大声地；高高地', 'loudly / high', [
    ['Hon talar högt.', '她说话很大声。'],
    ['Fågeln flyger högt.', '鸟飞得很高。'],
    ['Sjung inte så högt.', '别唱那么大声。'],
    ['Priset ligger högt i år.', '今年价格偏高。'],
  ]), 1449),
  freq(adj('döende', '垂死的；快结束的', 'dying', 'döende', 'döende', [
    ['Den döende mannen bad om vatten.', '那个垂死的男人要水。'],
    ['Ett döende träd står där.', '那里有一棵快死的树。'],
    ['De döende blommorna måste vattnas.', '那些快枯的花必须浇水。'],
    ['Elden är döende.', '火快灭了。'],
  ]), 1450, c(
    [
      ['dö', '死'],
      ['-ende', '正在……的'],
    ],
    '“正在死去的”，合起来就是垂死的、快结束的。',
  )),
]

import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1551–1600. Primary POS is the high-frequency use, not every sense in the book. */
export const list32: Word[] = [
  freq(noun('vittne', 'ett', '证人；目击者', 'witness', 'vittnet', 'vittnen', 'vittnena', [
    ['Det fanns ett vittne till olyckan.', '这起事故有一名目击者。'],
    ['Vittnet berättade vad hen såg.', '证人讲述了自己看到的。'],
    ['Flera vittnen hördes i rätten.', '法庭上传唤了几名证人。'],
    ['Vittnena var överens.', '那些证人说法一致。'],
  ]), 1551),
  freq(verb('lida', '受苦；患病；度过（时间）', 'to suffer / (of time) to pass', 'lider', 'led', 'lidit', 'lid', [
    ['Hon lider av huvudvärk.', '她受头痛折磨。'],
    ['Han led i tysthet.', '他默默忍受着。'],
    ['De har lidit länge.', '他们已经受苦很久了。'],
    ['Lid inte i onödan.', '别无谓地受苦。'],
  ]), 1552),
  freq(verb('täcka', '覆盖；遮住；支付', 'to cover', 'täcker', 'täckte', 'täckt', 'täck', [
    ['Snön täcker marken.', '雪覆盖着地面。'],
    ['Hon täckte ansiktet med händerna.', '她用手遮住脸。'],
    ['Försäkringen har täckt skadan.', '保险已经赔付了损失。'],
    ['Täck kastrullen med ett lock.', '用盖子把锅盖上。'],
  ]), 1553),
  freq(adj('bäst', '最好的', 'best', 'bäst', 'bäst', [
    ['Hon är bäst i laget.', '她是队里最好的。'],
    ['Det är bäst att stanna.', '最好留下来。'],
    ['Vilken färg är bäst?', '哪种颜色最好？'],
    ['Gör så bäst du kan.', '尽你所能去做。'],
  ]), 1554),
  freq(other('tack vare', 'phrase', '多亏；由于', 'thanks to', [
    ['Vi kom i tid tack vare bussen.', '多亏公交车我们准时到了。'],
    ['Tack vare dig klarade vi det.', '多亏你我们做成了。'],
    ['Hon sover tack vare medicinen.', '多亏药她睡着了。'],
    ['Tack vare vädret gick vi ut.', '多亏天气好我们出门了。'],
  ]), 1555, c([['tack', '感谢'], ['vare', '是（虚拟）']], '多亏是这样，合起来就是多亏、由于。')),
  freq(noun('rättighet', 'en', '权利', 'right (entitlement)', 'rättigheten', 'rättigheter', 'rättigheterna', [
    ['Det är en grundläggande rättighet.', '这是一项基本权利。'],
    ['Rättigheten gäller alla.', '这项权利适用于所有人。'],
    ['Barn har egna rättigheter.', '儿童有自己的权利。'],
    ['Rättigheterna måste respekteras.', '这些权利必须得到尊重。'],
  ]), 1556, c(
    [
      ['rätt', '公正；权利'],
      ['-ighet', '抽象名词后缀'],
    ],
    '把“公正/权利”变成抽象名词，就是一项权利。',
  )),
  freq(noun('fånge', 'en', '囚犯', 'prisoner', 'fången', 'fångar', 'fångarna', [
    ['Fången släpptes fri.', '那名囚犯被释放了。'],
    ['Han satt som fånge i två år.', '他坐了两年牢。'],
    ['Det fanns tre fångar i cellen.', '牢房里有三名囚犯。'],
    ['Fångarna fick gå ut på gården.', '那些囚犯可以到院子里去。'],
  ]), 1557),
  freq(other('uppenbarligen', 'adv', '显然；看样子', 'apparently / obviously', [
    ['Han är uppenbarligen trött.', '他显然累了。'],
    ['Uppenbarligen har tåget gått.', '看样子火车已经走了。'],
    ['Hon ljög uppenbarligen.', '她显然在说谎。'],
    ['Det var uppenbarligen ett misstag.', '那显然是个失误。'],
  ]), 1558, c(
    [
      ['uppenbar', '明显的'],
      ['-ligen', '……地'],
    ],
    '“明显地”，合起来就是显然、看样子。',
  )),
  freq(other('bakåt', 'adv', '往后；向后', 'backwards / to the rear', [
    ['Gå bakåt lite.', '往后走一点。'],
    ['Hon tittade bakåt i bussen.', '她在公交车里往后看。'],
    ['Bilen rullade bakåt.', '车往后滑了。'],
    ['Lutade du dig bakåt?', '你往后靠了吗？'],
  ]), 1559, c([['bak', '后面'], ['åt', '向']], '向后面，合起来就是往后。')),
  freq(verb('ana', '察觉；隐约感到', 'to sense / to suspect', 'anar', 'anade', 'anat', 'ana', [
    ['Jag anar att något är fel.', '我隐约觉得有什么不对。'],
    ['Hon anade sanningen.', '她隐约感到了真相。'],
    ['Vi har anat det länge.', '我们早就隐约感觉到了。'],
    ['Ana inte det värsta direkt.', '别一上来就往最坏处想。'],
  ]), 1560),
  freq(noun('kar', 'ett', '大盆；缸', 'tub / vat', 'karet', 'kar', 'karen', [
    ['Vattnet står i ett kar.', '水盛在一个大盆里。'],
    ['Karet är fullt.', '这个盆满了。'],
    ['Två kar står i källaren.', '地下室放着两个大盆。'],
    ['Karen måste tömmas.', '那些盆得倒空。'],
  ]), 1561),
  freq(noun('patient', 'en', '病人；患者', 'patient', 'patienten', 'patienter', 'patienterna', [
    ['En patient väntar där.', '一位病人在那儿等。'],
    ['Patienten sover nu.', '病人现在在睡觉。'],
    ['Två patienter kom i dag.', '今天来了两位病人。'],
    ['Prata med patienten först.', '先跟那位病人谈。'],
  ]), 1562),
  freq(noun('godis', 'ett', '糖果；零食（口）', 'sweets / candy (informal)', 'godiset', null, null, [
    ['Barnen äter godis på lördag.', '孩子们星期六吃糖。'],
    ['Godiset är slut.', '糖果吃完了。'],
    ['Köp godis till festen.', '给聚会买点糖。'],
    ['Hon tar inte godis i veckan.', '她工作日不吃糖。'],
  ]), 1563),
  freq(noun('nivå', 'en', '水平；层级；高度', 'level', 'nivån', 'nivåer', 'nivåerna', [
    ['Nivån på vattnet steg.', '水位涨了。'],
    ['Vi pratar på samma nivå.', '我们在同一层次上谈。'],
    ['Två nivåer finns i huset.', '房子里有两层。'],
    ['Höj nivån lite.', '把水平提高一点。'],
  ]), 1564),
  freq(verb('angå', '关系到；与……有关', 'to concern / to regard', 'angår', 'angick', 'angått', 'angå', [
    ['Det angår inte dig.', '这不关你的事。'],
    ['Frågan angick hela klassen.', '这个问题关系到全班。'],
    ['Saken har aldrig angått mig.', '这件事从来就与我无关。'],
    ['Vad angår det henne?', '这关她什么事？'],
  ]), 1565, c(
    [
      ['an-', '朝向；关涉'],
      ['gå', '走'],
    ],
    '“走到跟前、关涉到”，合起来就是关系到、与……有关。',
  )),
  freq(noun('löfte', 'ett', '承诺；诺言', 'promise', 'löftet', 'löften', 'löftena', [
    ['Hon gav ett löfte.', '她许了一个诺。'],
    ['Löftet höll hon.', '那个诺言她守住了。'],
    ['Han bröt flera löften.', '他违背了好几个诺言。'],
    ['Löftena var tomma.', '那些诺言是空的。'],
  ]), 1566),
  freq(verb('dölja', '隐瞒；遮住', 'to hide / to conceal', 'döljer', 'dolde', 'dolt', 'dölj', [
    ['Hon döljer nyckeln i boken.', '她把钥匙藏在书里。'],
    ['Han dolde sanningen för oss.', '他对我们隐瞒了真相。'],
    ['Molnen har dolt månen.', '云已经遮住了月亮。'],
    ['Dölj ingenting nu.', '现在什么都别隐瞒。'],
  ]), 1567),
  freq(noun('nacke', 'en', '后颈；后脖颈', 'nape / back of the neck', 'nacken', 'nackar', 'nackarna', [
    ['Hon har ont i nacken.', '她后颈疼。'],
    ['Nacken blev stel efter resan.', '旅行之后后颈发僵。'],
    ['Håret täcker nacken.', '头发盖住了后颈。'],
    ['Massera nacken försiktigt.', '轻轻按摩后颈。'],
  ]), 1568),
  freq(noun('intresse', 'ett', '兴趣；利益', 'interest', 'intresset', 'intressen', 'intressena', [
    ['Hon har ett stort intresse för språk.', '她对语言有很大兴趣。'],
    ['Intresset växte fort.', '兴趣很快增长。'],
    ['Vi har olika intressen.', '我们兴趣不同。'],
    ['Intressena krockar ibland.', '那些利益有时会冲突。'],
  ]), 1569),
  freq(verb('upptäcka', '发现；察觉', 'to discover', 'upptäcker', 'upptäckte', 'upptäckt', 'upptäck', [
    ['Hon upptäcker felet nu.', '她现在发现了那个错误。'],
    ['Vi upptäckte en väg bakom huset.', '我们发现房子后面有一条路。'],
    ['Han har upptäckt sanningen.', '他已经发现了真相。'],
    ['Upptäck felet innan i morgon.', '明天之前把错误找出来。'],
  ]), 1570, c([['upp', '向上／开'], ['täcka', '盖']], '把盖子揭开，合起来就是发现。')),
  freq(verb('tvivla', '怀疑', 'to doubt', 'tvivlar', 'tvivlade', 'tvivlat', 'tvivla', [
    ['Jag tvivlar på den förklaringen.', '我怀疑那个解释。'],
    ['Hon tvivlade aldrig på dig.', '她从未怀疑过你。'],
    ['Vi har tvivlat för länge.', '我们怀疑得太久了。'],
    ['Tvivla inte på dig själv.', '别怀疑你自己。'],
  ]), 1571),
  freq(noun('ryss', 'en', '俄罗斯人', 'Russian (person)', 'ryssen', 'ryssar', 'ryssarna', [
    ['En ryss sitter där.', '一位俄罗斯人坐在那里。'],
    ['Ryssen talar svenska.', '那位俄罗斯人说瑞典语。'],
    ['Två ryssar väntar i hallen.', '两位俄罗斯人在门厅等。'],
    ['Fråga ryssarna vid dörren.', '问问门口那些俄罗斯人。'],
  ]), 1572),
  freq(noun('trubbel', 'ett', '麻烦（口语）', 'trouble (informal)', 'trubblet', null, null, [
    ['Han är i trubbel igen.', '他又有麻烦了。'],
    ['Trubblet började sent i går.', '麻烦从昨晚很晚才开始。'],
    ['Jag vill inte ha mer trubbel.', '我不要再有麻烦了。'],
    ['Håll dig undan från trubbel.', '离麻烦远一点。'],
  ]), 1573),
  freq(noun('kod', 'en', '密码；代码；暗号', 'code', 'koden', 'koder', 'koderna', [
    ['Jag glömde koden.', '我忘了密码。'],
    ['Koden till dörren är 1234.', '门的密码是1234。'],
    ['Hon har flera koder.', '她有好几个密码。'],
    ['Skriv koden här.', '把密码写在这儿。'],
  ]), 1574),
  freq(noun('check', 'en', '支票', 'cheque / check', 'checken', 'checkar', 'checkarna', [
    ['Hon betalade med check.', '她用支票付了款。'],
    ['Checken är ogiltig.', '这张支票无效。'],
    ['Två checkar låg i kuvertet.', '信封里有两张支票。'],
    ['Skriv under checken.', '在支票上签名。'],
  ]), 1575),
  freq(other('typiskt', 'adv', '典型地；果然', 'typically', [
    ['Vädret är typiskt för maj.', '这天气是五月的典型。'],
    ['Hon kom typiskt sent.', '她照例来晚了。'],
    ['Han svarade typiskt kort.', '他回答得照例很短。'],
    ['Typiskt, bussen gick just.', '果然，公交车刚走。'],
  ]), 1576),
  freq(other('i första hand', 'phrase', '首先；优先', 'in the first place / primarily', [
    ['Ring mig i första hand.', '首先给我打电话。'],
    ['I första hand behöver vi tid.', '首先我们需要时间。'],
    ['Prata med chefen i första hand.', '首先跟上司谈。'],
    ['I första hand: kom i tid.', '首先：要准时到。'],
  ]), 1577, c(
    [
      ['i', '在'],
      ['första', '第一的'],
      ['hand', '手'],
    ],
    '放在第一手里，合起来就是首先、优先。',
  )),
  freq(noun('baksida', 'en', '背面；不好的一面', 'back / reverse / downside', 'baksidan', null, null, [
    ['Läs texten på baksidan.', '读背面的文字。'],
    ['Baksidan är smutsig.', '背面脏了。'],
    ['Varje sak har en baksida.', '每件事都有不好的一面。'],
    ['Titta på baksidan först.', '先看背面。'],
  ]), 1578, c([['bak', '后面'], ['sida', '面']], '后面那一面，合起来就是背面，也可指不好的一面。')),
  freq(verb('befinna sig', '处于；位于', 'to be located / to find oneself', 'befinner sig', 'befann sig', 'befunnit sig', null, [
    ['Var befinner du dig nu?', '你现在在哪里？'],
    ['De befann sig i skogen.', '他们当时在森林里。'],
    ['Hon har befunnit sig utomlands länge.', '她已经在国外很久了。'],
    ['Vi befinner oss i en svår situation.', '我们正处于困境。'],
  ]), 1579, c(
    [
      ['be-', '构词前缀'],
      ['finna', '找到'],
      ['sig', '自己'],
    ],
    '“发现自己在某处”，合起来就是处于、位于。',
  )),
  freq(adj('lös', '松的；松开的；散的', 'loose', 'löst', 'lösa', [
    ['Knappen är lös.', '扣子松了。'],
    ['Ett löst papper låg där.', '那里有一张散着的纸。'],
    ['De lösa skruvarna måste dras åt.', '那些松的螺丝得拧紧。'],
    ['Hunden sprang lös i parken.', '狗在公园里没拴着跑。'],
  ]), 1580),
  freq(other('ty', 'other', '因为；由于（书）', 'for / because (formal)', [
    ['Vi stannar, ty det regnar.', '我们留下，因为下雨了。'],
    ['Hon tystnade, ty hon var trött.', '她不说话了，因为她累了。'],
    ['Gå nu, ty tiden är knapp.', '现在走吧，因为时间紧。'],
    ['Ty natten föll, tände vi ljus.', '因为夜幕降临，我们点了灯。'],
  ]), 1581),
  freq(noun('torsdag', 'en', '星期四', 'Thursday', 'torsdagen', 'torsdagar', 'torsdagarna', [
    ['Vi ses på torsdag.', '我们星期四见。'],
    ['Torsdagen blev solig.', '这个星期四出了太阳。'],
    ['Hon jobbar tre torsdagar i rad.', '她连续三个星期四上班。'],
    ['Kom tillbaka på torsdagen.', '星期四再来。'],
  ]), 1582),
  freq(noun('läger', 'ett', '营地；阵营', 'camp', 'lägret', 'läger', 'lägren', [
    ['Barnen åker till ett sommarläger.', '孩子们要去夏令营。'],
    ['Lägret ligger vid sjön.', '营地在湖边。'],
    ['Det fanns tre läger i dalen.', '山谷里有三个营地。'],
    ['Lägren stängdes efter stormen.', '那些营地在风暴后关闭了。'],
  ]), 1583),
  freq(noun('magi', 'en', '魔法；魔力', 'magic', 'magin', null, null, [
    ['Barnen tror på magi.', '孩子们相信魔法。'],
    ['Magin i sagorna fascinerar henne.', '故事里的魔法让她着迷。'],
    ['Det är inte magi, det är vetenskap.', '那不是魔法，那是科学。'],
    ['Hon kände magin i musiken.', '她感受到了音乐里的魔力。'],
  ]), 1584),
  freq(other('tydligt', 'adv', '清楚地；明显地', 'clearly', [
    ['Hon talar tydligt.', '她说话很清楚。'],
    ['Skriv tydligt i rutan.', '在框里写清楚。'],
    ['Det syns tydligt från här.', '从这儿看得很清楚。'],
    ['Förklara tydligt nu.', '现在解释清楚。'],
  ]), 1585),
  freq(adj('lat', '懒的', 'lazy', 'lat', 'lata', [
    ['Han är en lat student.', '他是个懒学生。'],
    ['Var inte så lat i dag.', '今天别这么懒。'],
    ['De lata katterna sover.', '那些懒猫在睡觉。'],
    ['Jag känner mig lat i värmen.', '天热我觉得懒。'],
  ]), 1586),
  freq(verb('ångra', '后悔；反悔', 'to regret', 'ångrar', 'ångrade', 'ångrat', 'ångra', [
    ['Jag ångrar orden nu.', '我现在后悔说了那些话。'],
    ['Hon ångrade köpet i går.', '她昨天后悔买了。'],
    ['Har du ångrat dig?', '你改主意了吗？'],
    ['Ångra inte det här.', '别为这事后悔。'],
  ]), 1587),
  freq(noun('knark', 'ett', '毒品（口语）', 'drugs (slang)', 'knarket', null, null, [
    ['Han fastnade för knark.', '他沾上了毒品。'],
    ['Knarket hittades i väskan.', '毒品是在包里找到的。'],
    ['Håll dig borta från knark.', '离毒品远一点。'],
    ['Polisen slog mot knarket i området.', '警察打击了这一带的毒品。'],
  ], ['slang']), 1588),
  freq(verb('pröva', '试验；尝试', 'to try (out)', 'prövar', 'prövade', 'prövat', 'pröva', [
    ['Vi prövar den nya ugnen.', '我们在试那台新烤箱。'],
    ['Hon prövade skorna i butiken.', '她在店里试过那双鞋。'],
    ['Har ni prövat receptet?', '你们试过这个食谱了吗？'],
    ['Pröva själv först.', '先自己试一试。'],
  ]), 1589),
  freq(noun('vagn', 'en', '车子；车厢；手推车', 'wagon / carriage / cart', 'vagnen', 'vagnar', 'vagnarna', [
    ['En vagn står vid dörren.', '门口停着一辆车。'],
    ['Vagnen är full med mat.', '这辆车装满了食物。'],
    ['Två vagnar rullade förbi.', '两辆车滚了过去。'],
    ['Sätt barnet i vagnen.', '把孩子放进推车。'],
  ]), 1590),
  freq(verb('klättra', '爬；攀登', 'to climb', 'klättrar', 'klättrade', 'klättrat', 'klättra', [
    ['Katten klättrar i trädet.', '猫在树上爬。'],
    ['Han klättrade upp i stolen.', '他爬上了椅子。'],
    ['Hon har klättrat högst i dag.', '她今天爬得最高。'],
    ['Klättra inte där!', '别在那儿爬！'],
  ]), 1591),
  freq(verb('läcka', '泄漏；漏', 'to leak', 'läcker', 'läckte', 'läckt', 'läck', [
    ['Taket läcker när det regnar.', '下雨时屋顶会漏。'],
    ['Nyheten läckte till pressen.', '消息泄漏给了媒体。'],
    ['Röret har läckt i en vecka.', '管子已经漏了一周。'],
    ['Låt inte informationen läcka ut.', '别让信息漏出去。'],
  ]), 1592),
  freq(adj('olaglig', '非法的；违法的', 'illegal / unlawful', 'olagligt', 'olagliga', [
    ['Det är en olaglig handling.', '这是非法行为。'],
    ['Ett olagligt avtal undertecknades.', '签了一份违法的协议。'],
    ['De olagliga kopiorna brändes.', '那些非法复制品被销毁了。'],
    ['Det är olagligt att parkera här.', '在这儿停车是违法的。'],
  ]), 1593, c([['o-', '不'], ['laglig', '合法的']], '不是合法的，合起来就是非法的、违法的。')),
  freq(verb('torka', '擦干；弄干；变干', 'to dry / to wipe', 'torkar', 'torkade', 'torkat', 'torka', [
    ['Hon torkar händerna på handduken.', '她在用毛巾擦手。'],
    ['Han torkade fönstret i morse.', '他今早擦了窗户。'],
    ['Skorna har torkat i hallen.', '鞋在门厅里已经干了。'],
    ['Torka av bordet, tack.', '请把桌子擦一下。'],
  ]), 1594),
  freq(noun('drag', 'ett', '特征；一步（棋）；一阵', 'trait / move / draught', 'draget', 'drag', 'dragen', [
    ['Det är ett typiskt drag hos henne.', '那是她典型的一个特点。'],
    ['Draget kom från fönstret.', '一阵风从窗户进来。'],
    ['Han gjorde tre smarta drag.', '他走了三步漂亮的棋。'],
    ['Dragen i hans ansikte är mjuka.', '他脸上的轮廓很柔和。'],
  ]), 1595),
  freq(noun('socker', 'ett', '糖', 'sugar', 'sockret', null, null, [
    ['Hon tar socker på gröten.', '她往粥上放糖。'],
    ['Sockret är slut.', '糖用完了。'],
    ['Köp socker i butiken.', '去店里买糖。'],
    ['För mycket socker är inte bra.', '糖太多不好。'],
  ]), 1596),
  freq(noun('flygplan', 'ett', '飞机', 'aeroplane / aircraft', 'flygplanet', 'flygplan', 'flygplanen', [
    ['Ett flygplan lyfter nu.', '一架飞机正在起飞。'],
    ['Flygplanet är försenat.', '这架飞机晚点了。'],
    ['Två flygplan väntar på banan.', '两架飞机在跑道上等。'],
    ['Flygplanen står stilla i natt.', '那些飞机夜里停着。'],
  ]), 1597, c([['flyg', '飞行'], ['plan', '机器／平面']], '用来飞行的机器，合起来就是飞机。')),
  freq(noun('kollega', 'en', '同事', 'colleague', 'kollegan', 'kollegor', 'kollegorna', [
    ['Min kollega kommer snart.', '我的同事马上到。'],
    ['Kollegan sitter där borta.', '那位同事坐在那边。'],
    ['Två kollegor väntar i rummet.', '两位同事在房间里等。'],
    ['Prata med kollegan först.', '先跟那位同事谈。'],
  ]), 1598),
  freq(noun('jude', 'en', '犹太人', 'Jew', 'juden', 'judar', 'judarna', [
    ['Min vän är jude.', '我的朋友是犹太人。'],
    ['Judarna firar pesach på våren.', '犹太人在春天过逾越节。'],
    ['Han läser om judarnas historia.', '他在读犹太人的历史。'],
    ['Det finns en synagoga för judarna i staden.', '城里有一座犹太会堂。'],
  ]), 1599),
  freq(noun('vinnare', 'en', '获胜者；赢家', 'winner', 'vinnaren', 'vinnare', 'vinnarna', [
    ['En vinnare klev fram.', '一位赢家走上前来。'],
    ['Vinnaren får ett pris.', '获胜者会得到一份奖。'],
    ['Tre vinnare stod på scenen.', '三位获胜者站在台上。'],
    ['Vinnarna tackade publiken.', '那些获胜者向观众致谢。'],
  ]), 1600, c([['vinna', '赢'], ['-are', '……的人']], '赢的人，合起来就是获胜者、赢家。')),
]

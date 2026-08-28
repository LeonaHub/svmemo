import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1651–1700. Primary POS is the high-frequency use, not every sense in the book. */
export const list34: Word[] = [
  freq(noun('test', 'ett', '测验；测试', 'test', 'testet', 'test', 'testen', [
    ['Vi gör ett test i morgon.', '我们明天做一次测验。'],
    ['Testet var kort.', '这次测验很短。'],
    ['Hon skrev två test i veckan.', '她这周写了两份测验。'],
    ['Testen rättas i kväll.', '那些测验今晚批改。'],
  ]), 1651),
  freq(verb('respektera', '尊重；顾及', 'to respect', 'respekterar', 'respekterade', 'respekterat', 'respektera', [
    ['Vi respekterar hennes val.', '我们尊重她的选择。'],
    ['Han respekterade tiden.', '他顾及了时间。'],
    ['Har ni respekterat reglerna?', '你们遵守这些规则了吗？'],
    ['Respektera tystnaden här.', '请尊重这里的安静。'],
  ]), 1652),
  freq(noun('kvart', 'en', '一刻钟；四分之一', 'quarter (hour)', 'kvarten', null, null, [
    ['Vi ses om en kvart.', '我们一刻钟后见。'],
    ['Kvarten gick fort.', '这一刻钟过得很快。'],
    ['Klockan är kvart över tre.', '现在是三点过一刻。'],
    ['Vänta en kvart till.', '再等一刻钟。'],
  ]), 1653),
  freq(verb('vakta', '看守；照看；守卫', 'to watch / to guard', 'vaktar', 'vaktade', 'vaktat', 'vakta', [
    ['Hon vaktar grinden.', '她在看守大门。'],
    ['Han vaktade barnen i parken.', '他在公园里照看孩子们。'],
    ['Har ni vaktat huset länge?', '你们看这房子很久了吗？'],
    ['Vakta väskan en stund.', '帮我看一会儿包。'],
  ]), 1654),
  freq(noun('ordförande', 'en', '主席', 'chairperson / chair', 'ordföranden', 'ordförande', 'ordförandena', [
    ['En ordförande leder mötet.', '主席主持会议。'],
    ['Ordföranden gav henne ordet.', '主席让她发言。'],
    ['Föreningen har två ordförande.', '协会有两位主席。'],
    ['Ordförandena träffades i går.', '那些主席昨天见了面。'],
  ]), 1655, c(
    [
      ['ord', '话；发言权'],
      ['förande', '引领着的'],
    ],
    '“引领发言的人”，就是主持会议的主席。',
  )),
  freq(noun('fingeravtryck', 'ett', '指纹', 'fingerprint', 'fingeravtrycket', 'fingeravtryck', 'fingeravtrycken', [
    ['Polisen hittade ett fingeravtryck.', '警察发现了一枚指纹。'],
    ['Fingeravtrycket matchade inte.', '这枚指纹对不上。'],
    ['De tog flera fingeravtryck.', '他们取了好几枚指纹。'],
    ['Fingeravtrycken fanns på glaset.', '那些指纹在玻璃杯上。'],
  ]), 1656, c(
    [
      ['finger', '手指'],
      ['avtryck', '压痕；印记'],
    ],
    '手指按下去留下的印，就是指纹。',
  )),
  freq(noun('tomte', 'en', '小精灵；圣诞老人（jultomte）', 'gnome / Santa', 'tomten', 'tomtar', 'tomtarna', [
    ['En tomte bodde i stallet.', '一个小精灵住在马厩里。'],
    ['Tomten kom med paket.', '圣诞老人带来了包裹。'],
    ['Barnen ritade tre tomtar.', '孩子们画了三个小精灵。'],
    ['Tomtarna dansade i snön.', '那些小精灵在雪地里跳舞。'],
  ]), 1657),
  freq(noun('snack', 'ett', '闲聊；空话（口）', 'chat / talk (informal)', 'snacket', null, null, [
    ['Vi tar ett snack efter jobbet.', '我们下班后聊一聊。'],
    ['Snacket gick fort i rummet.', '屋里闲聊进行得很快。'],
    ['Det var bara snack.', '那不过是空话。'],
    ['Sluta med snacket nu.', '别再闲聊了。'],
  ]), 1658),
  freq(noun('stolthet', 'en', '自豪；骄傲', 'pride', 'stoltheten', null, null, [
    ['Hon kände stolthet över sonen.', '她为儿子感到自豪。'],
    ['Stoltheten syntes i leendet.', '那份自豪写在笑容里。'],
    ['Det är en stolthet för skolan.', '这对学校是一份骄傲。'],
    ['Visa stolthet, men var snäll.', '可以自豪，但要友善。'],
  ]), 1659, c([['stolt', '自豪的'], ['-het', '性质、状态']], '感到自豪的状态，合起来就是自豪、骄傲。')),
  freq(other('i allmänhet', 'phrase', '一般来说；通常', 'in general / generally', [
    ['I allmänhet kommer hon i tid.', '一般来说她会准时到。'],
    ['Det stämmer i allmänhet.', '这通常是对的。'],
    ['Vi äter hemma i allmänhet.', '我们一般来说在家吃饭。'],
    ['I allmänhet är vintern kall här.', '一般来说这里的冬天很冷。'],
  ]), 1660, c(
    [
      ['i', '在'],
      ['allmän', '普遍的'],
      ['-het', '性质、状态'],
    ],
    'allmänhet 是“普遍的情况”，加上 i 就是一般来说。',
  )),
  freq(noun('farsa', 'en', '爸（口）', 'dad / old man (informal)', 'farsan', 'farsor', null, [
    ['Min farsa jobbar sent.', '我爸下班很晚。'],
    ['Farsan väntar i bilen.', '老爸在车里等。'],
    ['Två farsor stod vid planen.', '两位老爸站在球场边。'],
    ['Ring farsan nu.', '现在给老爸打电话。'],
  ]), 1661),
  freq(adj('förste', '第一的（阳性定式）', 'first (masculine definite)', 'första', 'första', [
    ['Han var den förste på plats.', '他是第一个到场的。'],
    ['Förste officer gick i land.', '大副上了岸。'],
    ['Det första tåget har gått.', '第一班火车已经开了。'],
    ['De första gästerna kom tidigt.', '第一批客人来得很早。'],
  ]), 1662),
  freq(noun('motor', 'en', '发动机；马达', 'engine / motor', 'motorn', 'motorer', null, [
    ['Bilen har en ny motor.', '这车有一台新发动机。'],
    ['Motorn startade direkt.', '发动机马上就着了。'],
    ['Två motorer gick varma.', '两台发动机发烫了。'],
    ['Stäng av motorn här.', '在这儿把发动机关掉。'],
  ]), 1663),
  freq(noun('badrum', 'ett', '浴室；卫生间', 'bathroom', 'badrummet', 'badrum', 'badrummen', [
    ['Lägenheten har ett badrum.', '这套公寓有一间浴室。'],
    ['Badrummet är litet.', '这间浴室很小。'],
    ['Huset har två badrum.', '这房子有两间卫生间。'],
    ['Badrummen behöver städas.', '那些浴室需要打扫。'],
  ]), 1664, c([['bad', '洗浴'], ['rum', '房间']], '洗澡的房间，就是浴室。')),
  freq(adj('sårad', '受伤的；受伤害的', 'wounded / hurt', 'sårat', 'sårade', [
    ['En sårad soldat låg där.', '一名受伤的士兵躺在那里。'],
    ['Ett sårat djur sprang in i skogen.', '一只受伤的动物跑进了树林。'],
    ['De sårade fördes till tältet.', '那些伤员被送到帐篷。'],
    ['Hon kände sig sårad.', '她觉得受了伤害。'],
  ]), 1665, c([['såra', '伤害'], ['-d', '被……的']], '被伤害过的，合起来就是受伤的。')),
  freq(adj('gjord', '做成的；制成的', 'made / done', 'gjort', 'gjorda', [
    ['Kakan är gjord av nötter.', '这蛋糕是用坚果做的。'],
    ['Ett gjort val går inte att ångra.', '一个已经做出的选择无法反悔。'],
    ['De gjorda lådorna står där.', '那些做好的箱子放在那里。'],
    ['Är maten gjord än?', '饭做好了吗？'],
  ]), 1666),
  freq(noun('prov', 'ett', '测验；试验；样本', 'test / trial / sample', 'provet', 'prov', 'proven', [
    ['Vi har prov i svenska i morgon.', '我们明天有瑞典语测验。'],
    ['Provet var svårt.', '这次测验很难。'],
    ['Hon tog tre prov på labbet.', '她在实验室取了三份样本。'],
    ['Proven rättas i veckan.', '那些测验这周批改。'],
  ]), 1667),
  freq(noun('evighet', 'en', '永恒；极长时间', 'eternity', 'evigheten', 'evigheter', null, [
    ['Det kändes som en evighet.', '感觉像过了很久很久。'],
    ['Evigheten skrämde honom inte.', '永恒并不让他害怕。'],
    ['Hon kan prata i evigheter.', '她能说上老半天。'],
    ['Vänta inte en evighet.', '别等个没完。'],
  ]), 1668, c([['evig', '永恒的'], ['-het', '性质、状态']], '永恒的状态，合起来就是永恒、极长时间。')),
  freq(noun('gosse', 'en', '男孩（较旧）', 'boy / lad (somewhat dated)', 'gossen', 'gossar', 'gossarna', [
    ['En gosse lekte på gården.', '一个男孩在院子里玩。'],
    ['Gossen bar en röd mössa.', '那个男孩戴着红帽子。'],
    ['Två gossar sprang förbi.', '两个男孩跑过去了。'],
    ['Gossarna skrattade högt.', '那些男孩大声笑。'],
  ]), 1669),
  freq(noun('penna', 'en', '笔', 'pen', 'pennan', 'pennor', null, [
    ['Kan jag låna en penna?', '我能借一支笔吗？'],
    ['Pennan är slut.', '这支笔没水了。'],
    ['Hon har tre pennor i väskan.', '她包里有三支笔。'],
    ['Skriv med pennan här.', '用这支笔在这儿写。'],
  ]), 1670),
  freq(other('bortom', 'other', '在……那边；超越', 'beyond', [
    ['Huset ligger bortom kullen.', '房子在小山那边。'],
    ['Bortom skogen finns en sjö.', '树林那边有一片湖。'],
    ['Det är bortom allt förnuft.', '这完全不讲道理。'],
    ['Gå inte bortom skylten.', '别走到牌子那边去。'],
  ]), 1671),
  freq(verb('tåla', '忍受；耐受', 'to endure / to tolerate', 'tål', 'tålde', 'tålt', 'tåla', [
    ['Hon tål inte värmen.', '她受不了这热。'],
    ['Han tålde skämtet dåligt.', '他当时受不了这个玩笑。'],
    ['Har du tålt smärtan länge?', '这疼你忍很久了吗？'],
    ['Tåla lite kö, tack.', '请稍微忍一下排队。'],
  ]), 1672),
  freq(other('emellan', 'other', '在……之间', 'between', [
    ['Vi bor mitt emellan två städer.', '我们住在两座城中间。'],
    ['Oss emellan sagt är det dyrt.', '咱们私下说，这很贵。'],
    ['Stolarna står tätt emellan.', '椅子之间摆得很紧。'],
    ['Lägg kudden emellan dem.', '把枕头放在他们中间。'],
  ]), 1673),
  freq(noun('vansinne', 'ett', '疯狂；荒唐', 'madness / insanity', 'vansinnet', null, null, [
    ['Det vore vansinne att ge upp nu.', '现在放弃会是荒唐的。'],
    ['Vansinnet måste få ett slut.', '这种疯狂必须结束。'],
    ['Hon kallade planen för vansinne.', '她说这个计划是疯了。'],
    ['Rent vansinne, sa han.', '纯粹是疯狂，他说。'],
  ]), 1674, c(
    [
      ['van-', '乱的；不正常的'],
      ['sinne', '心智；头脑'],
    ],
    '“不正常的心智”，合起来就是疯狂、荒唐。',
  )),
  freq(noun('grav', 'en', '坟墓；墓穴', 'grave', 'graven', 'gravar', null, [
    ['De stod vid en grav.', '他们站在一座坟墓旁。'],
    ['Graven var täckt med blommor.', '这座墓上铺满了花。'],
    ['Två gravar ligger sida vid sida.', '两座墓并排着。'],
    ['Lägg blommorna på graven.', '把花放在这座墓上。'],
  ]), 1675),
  freq(noun('träning', 'en', '训练；锻炼', 'training / practice', 'träningen', 'träningar', null, [
    ['Hon har träning efter skolan.', '她放学后有训练。'],
    ['Träningen varade en timme.', '这次训练持续了一小时。'],
    ['Två träningar i veckan räcker.', '一周两次训练就够了。'],
    ['Kom i tid till träningen.', '训练要准时到。'],
  ]), 1676, c([['träna', '训练'], ['-ing', '行为、过程']], '训练这个行为，合起来就是训练、锻炼。')),
  freq(other('åter', 'adv', '再；回来（较书面）', 'again / back (somewhat formal)', [
    ['Hon kom åter till byn.', '她回到了村子。'],
    ['Vi ses åter i morgon.', '我们明天再见。'],
    ['Problemet dök åter upp.', '问题再次出现。'],
    ['Kom åter hit.', '回到这里来。'],
  ]), 1677),
  freq(noun('inspektör', 'en', '督察；检查员', 'inspector', 'inspektören', 'inspektörer', null, [
    ['En inspektör kommer i morgon.', '一位检查员明天来。'],
    ['Inspektören tittade i pärmen.', '督察看了文件夹。'],
    ['Två inspektörer gick genom hallen.', '两位检查员穿过大厅。'],
    ['Visa inspektören vägen.', '给这位督察带路。'],
  ]), 1678),
  freq(noun('däck', 'ett', '轮胎；甲板', 'tyre / deck', 'däcket', 'däck', 'däcken', [
    ['Bilen behöver ett nytt däck.', '这车需要一条新轮胎。'],
    ['Däcket är slitet.', '这条轮胎磨损了。'],
    ['Vi gick upp på däck.', '我们上到甲板。'],
    ['Däcken måste bytas i höst.', '那些轮胎秋天得换。'],
  ]), 1679),
  freq(adj('värdelös', '毫无价值的；没用的', 'worthless', 'värdelöst', 'värdelösa', [
    ['Biljetten blev värdelös.', '这张票变得毫无价值。'],
    ['Ett värdelöst råd hjälper ingen.', '一条没用的建议帮不了任何人。'],
    ['De värdelösa sakerna slängdes.', '那些没用的东西被扔掉了。'],
    ['Kalla inte hennes arbete värdelöst.', '别说她的工作毫无价值。'],
  ]), 1680, c([['värde', '价值'], ['lös', '没有……的']], '没有价值的，合起来就是毫无价值的。')),
  freq(noun('gråt', 'en', '哭；眼泪', 'crying / tears', 'gråten', null, null, [
    ['Barnet brast i gråt.', '孩子突然哭了起来。'],
    ['Gråten tystnade efter en stund.', '哭声过了一会儿停了。'],
    ['Hon höll tillbaka gråten.', '她忍住了哭。'],
    ['Det hördes gråt bakom dörren.', '门后传来哭声。'],
  ]), 1681),
  freq(noun('skatt', 'en', '税；财宝', 'tax / treasure', 'skatten', 'skatter', null, [
    ['Vad betalar du i skatt?', '你交多少税？'],
    ['Skatten höjs i år.', '今年税额上调。'],
    ['Nya skatter träder i kraft.', '新的税种要生效。'],
    ['De hittade en skatt i sanden.', '他们在沙子里发现了一笔财宝。'],
  ]), 1682),
  freq(noun('skam', 'en', '耻辱；羞愧', 'shame / disgrace', 'skammen', null, null, [
    ['Hon rodnade av skam.', '她羞愧得脸红了。'],
    ['Skammen satt kvar länge.', '那份羞愧很久还在。'],
    ['Det är en skam att ljuga så.', '这样撒谎是一种耻辱。'],
    ['Känn ingen skam för det.', '别为这件事感到羞愧。'],
  ]), 1683),
  freq(noun('nolla', 'en', '零；无足轻重的人', 'zero / nought / nobody', 'nollan', 'nollor', null, [
    ['Skriv en nolla efter trean.', '在三后面写一个零。'],
    ['Nollan saknas i rutan.', '格子里少了那个零。'],
    ['Det står två nollor i talet.', '这个数里有两个零。'],
    ['Kalla inte henne en nolla.', '别说她是个无名小卒。'],
  ]), 1684),
  freq(adj('grym', '残酷的；极棒的（口语）', 'cruel / (colloquial) awesome', 'grymt', 'grymma', [
    ['Det var en grym diktator.', '那是一个残酷的独裁者。'],
    ['Ett grymt brott.', '一起残酷的罪行。'],
    ['De grymma orden sårade henne.', '那些残酷的话伤害了她。'],
    ['Filmen var grym!', '这部电影太棒了！'],
  ], { comparative: 'grymmare', superlative: 'grymmast' }), 1685),
  freq(other('gott', 'adv', '好地；可口地；充足地', 'well / nicely / plenty', [
    ['Maten smakar gott.', '这饭很好吃。'],
    ['Det finns gott om tid.', '时间很充裕。'],
    ['Hon sover gott här.', '她在这儿睡得很好。'],
    ['Sov gott i natt.', '今晚睡个好觉。'],
  ]), 1686),
  freq(noun('björn', 'en', '熊', 'bear', 'björnen', 'björnar', null, [
    ['En björn gick över vägen.', '一头熊走过马路。'],
    ['Björnen sover på vintern.', '这头熊冬天睡觉。'],
    ['Två björnar syntes vid ån.', '两头熊出现在河边。'],
    ['Mata inte björnen.', '别喂这头熊。'],
  ]), 1687),
  freq(noun('äventyr', 'ett', '冒险；奇遇', 'adventure', 'äventyret', 'äventyr', 'äventyren', [
    ['Resan blev ett äventyr.', '这次旅行成了一场冒险。'],
    ['Äventyret började i hamnen.', '这场奇遇从港口开始。'],
    ['Hon har varit med om flera äventyr.', '她经历过好几次冒险。'],
    ['Äventyren i boken är korta.', '书里那些冒险很短。'],
  ]), 1688),
  freq(noun('lösning', 'en', '解决办法；溶液', 'solution', 'lösningen', 'lösningar', null, [
    ['Vi behöver en enkel lösning.', '我们需要一个简单的办法。'],
    ['Lösningen kom sent.', '这个解决办法来得很晚。'],
    ['De testade tre lösningar.', '他们试了三种办法。'],
    ['Blanda lösningen försiktigt.', '小心地把溶液混匀。'],
  ]), 1689, c([['lösa', '解决／溶解'], ['-ning', '行为、结果']], '解决或溶解的结果，合起来就是办法、溶液。')),
  freq(noun('cigarett', 'en', '香烟', 'cigarette', 'cigaretten', 'cigaretter', null, [
    ['Han tände en cigarett ute.', '他在外面点了一支烟。'],
    ['Cigaretten slocknade i vinden.', '这支烟被风吹灭了。'],
    ['Två cigaretter låg i askkoppen.', '烟灰缸里有两支烟。'],
    ['Fimpa cigaretten här.', '在这儿把烟掐了。'],
  ]), 1690),
  freq(other('beroende på', 'phrase', '取决于；视……而定', 'depending on', [
    ['Vi åker beroende på vädret.', '我们去不去取决于天气。'],
    ['Priset ändras beroende på storleken.', '价格视尺寸而定。'],
    ['Beroende på tiden stannar vi.', '视时间而定我们再留下。'],
    ['Hon svarar beroende på frågan.', '她怎么答取决于问题。'],
  ]), 1691, c([['beroende', '取决于的'], ['på', '于']], '取决于某事，合起来就是视……而定。')),
  freq(noun('bensin', 'en', '汽油', 'petrol / gasoline', 'bensinen', null, null, [
    ['Bilen behöver bensin.', '这车需要汽油。'],
    ['Bensinen är dyr i dag.', '今天汽油很贵。'],
    ['Fyll på bensin före resan.', '出发前加好油。'],
    ['Det luktar bensin här.', '这儿有汽油味。'],
  ]), 1692),
  freq(noun('oliv', 'en', '橄榄', 'olive', 'oliven', 'oliver', null, [
    ['Hon tar en oliv till osten.', '她就着奶酪吃一颗橄榄。'],
    ['Oliven är salt.', '这颗橄榄很咸。'],
    ['Skålen har svarta oliver.', '碗里有黑色橄榄。'],
    ['Lägg oliven på pizzan.', '把这颗橄榄放到披萨上。'],
  ]), 1693),
  freq(verb('glo', '盯着看（口语）', 'to stare (colloquial)', 'glor', 'glodde', 'glott', 'glo', [
    ['Varför glor du på mig?', '你为什么盯着我看？'],
    ['Barnen glodde på skärmen.', '孩子们盯着屏幕。'],
    ['Vi har glott för länge.', '我们盯得太久了。'],
    ['Glo inte så.', '别那样盯着看。'],
  ]), 1694),
  freq(noun('vikt', 'en', '重量；砝码；重要性', 'weight', 'vikten', 'vikter', null, [
    ['Vad är vikten på paketet?', '这个包裹多重？'],
    ['Vikten har ökat i vinter.', '这个冬天体重增加了。'],
    ['Hon lyfter tunga vikter.', '她在举很重的哑铃。'],
    ['Skriv vikten på lappen.', '把重量写在纸条上。'],
  ]), 1695),
  freq(noun('tillgång', 'en', '供给；资源；使用权', 'access / supply / asset', 'tillgången', 'tillgångar', null, [
    ['Det är god tillgång på vatten.', '水的供给很充足。'],
    ['Tillgången till rummet är begränsad.', '进入这个房间的权限有限。'],
    ['Företaget har stora tillgångar.', '这家公司有大量资产。'],
    ['Hon är en tillgång för laget.', '她对球队是一份财富。'],
  ]), 1696, c([['till', '到／可及'], ['gång', '通路']], '能够到达、能够使用，合起来就是供给、使用权。')),
  freq(other('var och en', 'pron', '每一个；各自', 'each one / everyone individually', [
    ['Var och en fick en lapp.', '每个人都拿到一张纸条。'],
    ['Det gäller var och en av oss.', '这关系到我们每一个人。'],
    ['Var och en sköter sitt.', '各人管各人的事。'],
    ['Hon talade med var och en.', '她和每一个人都谈了。'],
  ]), 1697, c(
    [
      ['var', '每一个'],
      ['och', '和'],
      ['en', '一个'],
    ],
    '“每一个和一个”，就是各自、每一个人。',
  )),
  freq(noun('skoj', 'ett', '玩笑；开心；骗局', 'fun / joke / swindle', null, null, null, [
    ['Det var bara på skoj.', '那只是开玩笑。'],
    ['Vi hade skoj i parken.', '我们在公园里玩得很开心。'],
    ['Hon tål inte sådant skoj.', '她受不了这种玩笑。'],
    ['Strunta i skoj nu.', '现在别开玩笑了。'],
  ]), 1698),
  freq(verb('gripa', '抓住；逮捕', 'to seize / to arrest', 'griper', 'grep', 'gripit', 'grip', [
    ['Hon griper chansen direkt.', '她马上抓住这个机会。'],
    ['Polisen grep mannen i parken.', '警察在公园里逮捕了那个人。'],
    ['De har gripit två personer.', '他们已经逮捕了两个人。'],
    ['Grip repet hårt.', '抓紧绳子。'],
  ]), 1699),
  freq(adj('besatt', '着魔的；沉迷的', 'possessed / obsessed', 'besatt', 'besatta', [
    ['Han verkade helt besatt.', '他看起来完全着魔了。'],
    ['Ett besatt uttryck i ögonen.', '眼里有一种着魔的神情。'],
    ['De besatta fansen väntade i kö.', '那些入迷的粉丝在排队。'],
    ['Hon är besatt av jobbet.', '她对工作很沉迷。'],
  ]), 1700, c(
    [
      ['be-', '构词前缀'],
      ['satt', '被放上；被占住（sätta 的过分词）'],
    ],
    '“被占住了”，合起来就是着魔、沉迷。',
  )),
]

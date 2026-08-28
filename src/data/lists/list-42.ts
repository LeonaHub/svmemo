import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2051–2100. Primary POS is the high-frequency use, not every sense in the book. */
export const list42: Word[] = [
  freq(noun('intervju', 'en', '采访；访谈', 'interview', 'intervjun', 'intervjuer', null, [
    ['En intervju sänds i kväll.', '今晚会播出一段采访。'],
    ['Intervjun tog tjugo minuter.', '这次访谈花了二十分钟。'],
    ['Två intervjuer väntar i morgon.', '明天还有两场采访。'],
    ['Läs intervjun i tidningen.', '读报上的那篇访谈。'],
  ]), 2051),
  freq(noun('skrivbord', 'ett', '书桌', 'desk', 'skrivbordet', 'skrivbord', 'skrivborden', [
    ['Ett skrivbord står vid fönstret.', '窗边放着一张书桌。'],
    ['Skrivbordet är fullt av papper.', '这张书桌堆满了纸。'],
    ['Vi köpte två skrivbord till rummet.', '我们给房间买了两张书桌。'],
    ['Skrivborden flyttades i går.', '那些书桌昨天搬走了。'],
  ]), 2052, c([['skriv', '写（skriva）'], ['bord', '桌子']], '用来写字的桌子，合起来就是书桌。')),
  freq(noun('bibliotek', 'ett', '图书馆', 'library', 'biblioteket', 'bibliotek', 'biblioteken', [
    ['Ett bibliotek ligger vid torget.', '广场边有一座图书馆。'],
    ['Biblioteket stänger klockan åtta.', '图书馆八点关门。'],
    ['Två bibliotek har barnavdelning.', '两座图书馆有儿童区。'],
    ['Biblioteken är gratis här.', '这儿那些图书馆是免费的。'],
  ]), 2053),
  freq(verb('agera', '行动；扮演', 'to act / to act as', 'agerar', 'agerade', 'agerat', 'agera', [
    ['Polisen agerar i bakgrunden.', '警察在幕后行动。'],
    ['Han agerade lugnt vid olyckan.', '事故发生时他表现得很冷静。'],
    ['De har agerat tillsammans förut.', '他们以前一起行动过。'],
    ['Agera inte utan att tänka.', '别想都不想就动手。'],
  ]), 2054),
  freq(noun('kryp', 'ett', '虫子；小爬虫', 'insect / bug / crawler', 'krypet', 'kryp', 'krypen', [
    ['Ett litet kryp kröp på bladet.', '一只小虫子在叶子上爬。'],
    ['Krypet föll ner i glaset.', '那只虫子掉进杯子里了。'],
    ['Det fanns kryp i mjölet.', '面粉里有虫子。'],
    ['Krypen samlades under stenen.', '那些小爬虫聚在石头下面。'],
  ]), 2055),
  freq(noun('forskare', 'en', '研究者；科研人员', 'researcher', 'forskaren', 'forskare', 'forskarna', [
    ['En forskare bor i huset intill.', '一位研究者住在隔壁。'],
    ['Forskaren presenterade siffrorna.', '这位科研人员公布了那些数字。'],
    ['Två forskare delar rummet.', '两位研究者合用这个房间。'],
    ['Forskarna samlas i labbet.', '那些科研人员在实验室集合。'],
  ]), 2056, c([['forska', '研究'], ['-are', '……的人']], '做研究的人，合起来就是研究者。')),
  freq(noun('föreställning', 'en', '演出；观念', 'performance / idea / conception', 'föreställningen', 'föreställningar', 'föreställningarna', [
    ['Vi såg en föreställning i går.', '我们昨天看了一场演出。'],
    ['Föreställningen börjar klockan sju.', '演出七点开始。'],
    ['Hon har vaga föreställningar om framtiden.', '她对未来只有模糊的观念。'],
    ['Föreställningarna såldes slut.', '那些场次的票卖完了。'],
  ]), 2057, c(
    [
      ['föreställa', '上演；设想'],
      ['-ning', '行为名词后缀'],
    ],
    '由“搬上舞台 / 在心里摆出来”变成名词，就是演出，或头脑里的观念。',
  )),
  freq(verb('väga', '称重；有……重量', 'to weigh', 'väger', 'vägde', 'vägt', 'väg', [
    ['Paketet väger två kilo.', '这个包裹重两公斤。'],
    ['Hon vägde fisken i affären.', '她在店里称了鱼。'],
    ['Han har vägt sig varje morgon.', '他每天早上都称过体重。'],
    ['Väg potatisen innan du kokar.', '煮之前把土豆称一下。'],
  ]), 2058),
  freq(noun('morsa', 'en', '妈妈（口）', 'mum / mom (informal)', 'morsan', 'morsor', null, [
    ['Min morsa ringer varje kväll.', '我妈每天晚上打电话。'],
    ['Morsan väntar i bilen.', '我妈在车里等。'],
    ['De två morsorna skrattade i köket.', '那两位妈妈在厨房里笑。'],
    ['Ring morsa före maten.', '吃饭前给妈妈打个电话。'],
  ]), 2059),
  freq(noun('ondska', 'en', '邪恶；恶意', 'evil / wickedness', 'ondskan', null, null, [
    ['Det finns för mycket ondska i världen.', '世界上有太多邪恶。'],
    ['Ondskan visade sig i hans leende.', '恶意从他的笑容里露了出来。'],
    ['Hon tror inte på ren ondska.', '她不相信纯粹的邪恶。'],
    ['Vi måste stå emot ondskan.', '我们必须对抗邪恶。'],
  ]), 2060, c(
    [
      ['ond', '坏的；恶的'],
      ['-ska', '性质名词后缀'],
    ],
    '由“恶的”变成名词，就是邪恶、恶意。',
  )),
  freq(noun('fruktan', 'en', '恐惧', 'fear / dread', 'fruktan', null, null, [
    ['Hon levde i fruktan.', '她生活在恐惧中。'],
    ['Fruktan höll honom vaken.', '恐惧让他睡不着。'],
    ['De växlar mellan hopp och fruktan.', '他们在希望和恐惧之间摇摆。'],
    ['Utan fruktan gick hon in.', '她毫无恐惧地走了进去。'],
  ]), 2061, c(
    [
      ['frukta', '害怕'],
      ['-an', '行为名词词尾'],
    ],
    '由“害怕”这个动作变成名词，就是恐惧。',
  )),
  freq(noun('saga', 'en', '童话；传说', 'fairy tale / story', 'sagan', 'sagor', null, [
    ['En saga om trollen lästes högt.', '有人把一篇关于巨魔的童话大声读了出来。'],
    ['Sagan slutar lyckligt.', '这个故事结局很圆满。'],
    ['Hon kan tre sagor utantill.', '她能背三篇童话。'],
    ['Läs sagan en gång till.', '把这篇童话再读一遍。'],
  ]), 2062),
  freq(noun('samling', 'en', '集合；收藏', 'gathering / collection', 'samlingen', 'samlingar', 'samlingarna', [
    ['Samling klockan tre vid porten.', '三点在门口集合。'],
    ['Samlingen av frimärken är stor.', '这套邮票收藏很大。'],
    ['Flera samlingar visas på museet.', '博物馆展出好几批收藏。'],
    ['Samlingarna börjar efter rasten.', '那些集会在休息之后开始。'],
  ]), 2063, c(
    [
      ['samla', '收集；聚集'],
      ['-ing', '行为名词后缀'],
    ],
    '由“聚集 / 收集”变成名词，就是一次集合，或一批收藏。',
  )),
  freq(verb('beundra', '钦佩；欣赏', 'to admire', 'beundrar', 'beundrade', 'beundrat', 'beundra', [
    ['Jag beundrar hennes tålamod.', '我钦佩她的耐心。'],
    ['De beundrade utsikten.', '他们欣赏了那片景色。'],
    ['Hon har länge beundrat läraren.', '她钦佩那位老师已经很久了。'],
    ['Beundra det medan det varar.', '趁还在，好好欣赏。'],
  ]), 2064, c(
    [
      ['be-', '构词前缀'],
      ['undra', '感到惊奇'],
    ],
    '“对某事感到惊奇而抬头看”，就是钦佩、欣赏。',
  )),
  freq(other('rejält', 'adv', '相当地；结实地', 'considerably / properly', [
    ['Priserna har ökat rejält.', '价格涨了不少。'],
    ['Hon blev rejält sjuk.', '她病得不轻。'],
    ['Vi åt rejält till middag.', '晚饭我们吃得很扎实。'],
    ['Det regnade rejält i natt.', '夜里雨下得很大。'],
  ]), 2065, c(
    [
      ['rejäl', '结实的；像样的'],
      ['-t', '中性/副词词尾'],
    ],
    'rejäl 是“结实、像样的”，rejält 就是相当地、结实地。',
  )),
  freq(noun('blick', 'en', '目光；一眼', 'look / glance / gaze', 'blicken', 'blickar', 'blickarna', [
    ['Hon kastade en blick på klockan.', '她朝时钟瞥了一眼。'],
    ['Blicken var kall.', '那目光很冷。'],
    ['Deras blickar möttes.', '他们的目光碰上了。'],
    ['Blickarna följde henne ut.', '那些目光跟着她出去了。'],
  ]), 2066),
  freq(noun('tvivel', 'ett', '怀疑', 'doubt', 'tvivlet', 'tvivel', 'tvivlen', [
    ['Jag har inget tvivel.', '我毫不怀疑。'],
    ['Tvivlet växte i henne.', '怀疑在她心里变大。'],
    ['Det finns tvivel om resultatet.', '对这个结果存在怀疑。'],
    ['Tvivlen försvann till slut.', '那些怀疑终于消失了。'],
  ]), 2067),
  freq(noun('inbrott', 'ett', '入室盗窃；（夜等的）降临', 'burglary / onset', 'inbrottet', 'inbrott', 'inbrotten', [
    ['Det skedde ett inbrott i natt.', '夜里发生了一起入室盗窃。'],
    ['Inbrottet upptäcktes på morgonen.', '那起入室盗窃是早上发现的。'],
    ['Flera inbrott har skett i området.', '这一带发生过好几起入室盗窃。'],
    ['Vid mörkrets inbrott gick vi hem.', '夜幕降临时我们回家了。'],
  ]), 2068, c(
    [
      ['in', '进去'],
      ['brott', '破；断裂'],
    ],
    '“破门进去”，就是入室盗窃；夜色破进来，就是夜幕降临。',
  )),
  freq(other('till sist', 'phrase', '终于；最后', 'at last / finally', [
    ['Till sist hittade vi nyckeln.', '我们终于找到了钥匙。'],
    ['Hon sa ja till sist.', '她最后还是答应了。'],
    ['Till sist tystnade rummet.', '房间终于安静了。'],
    ['Vi gick hem till sist.', '我们最后回家了。'],
  ]), 2069, c([['till', '到'], ['sist', '最后']], '到最后那一步，合起来就是终于、最后。')),
  freq(noun('anställd', 'en', '雇员；受雇者', 'employee', null, 'anställda', null, [
    ['En anställd öppnade luckan.', '一名雇员打开了窗口。'],
    ['Vi behöver fler anställda till sommaren.', '夏天我们还需要更多雇员。'],
    ['De anställda fikar klockan tio.', '那些雇员十点喝咖啡。'],
    ['Fråga en anställd i hallen.', '去问门厅里的一位雇员。'],
  ]), 2070, c([['anställa', '雇用'], ['-d', '被……的']], '被雇用的人，合起来就是雇员。')),
  freq(noun('halvår', 'ett', '半年', 'half-year / six months', 'halvåret', 'halvår', 'halvåren', [
    ['Ett halvår räcker till kursen.', '半年够上这门课。'],
    ['Halvåret blev mer än vi tänkt.', '这半年比我们想的还满。'],
    ['Två halvår bildar ett läsår.', '两个半年构成一个学年。'],
    ['Halvåren i statistiken skiljer sig.', '统计里那两个半年不一样。'],
  ]), 2071, c([['halv', '一半的'], ['år', '年']], '一半的年，合起来就是半年。')),
  freq(noun('yta', 'en', '表面；面积', 'surface / area', 'ytan', 'ytor', null, [
    ['Bordet har en slät yta.', '这张桌子有光滑的表面。'],
    ['Ytan på sjön var spegelblank.', '湖面平得像镜子。'],
    ['Mät två ytor innan ni målar.', '刷漆前先量两块面积。'],
    ['Torka ytan efter maten.', '吃完把表面擦干净。'],
  ]), 2072),
  freq(noun('robot', 'en', '机器人；导弹', 'robot / guided missile', 'roboten', 'robotar', null, [
    ['En robot dammsuger hallen.', '一台机器人在门厅吸尘。'],
    ['Roboten stannade vid tröskeln.', '这台机器人在门槛边停了。'],
    ['Två robotar jobbar i lagret.', '两台机器人在仓库干活。'],
    ['Stäng av roboten före natten.', '夜里之前把机器人关掉。'],
  ]), 2073),
  freq(adj('löjlig', '可笑的；荒唐的', 'ridiculous', 'löjligt', 'löjliga', [
    ['Förslaget är löjligt.', '这个提议很荒唐。'],
    ['Ett löjligt misstag.', '一个可笑的错误。'],
    ['De löjliga hatterna fick oss att skratta.', '那些可笑的帽子让我们笑了。'],
    ['Han såg löjlig ut i den kostymen.', '他穿那套西装看起来很可笑。'],
  ], { comparative: 'löjligare', superlative: 'löjligast' }), 2074, c(
    [
      ['löje', '可笑'],
      ['-lig', '带有……性质的'],
    ],
    '“带有可笑性质的”，就是可笑的、荒唐的。',
  )),
  freq(verb('sy', '缝', 'to sew / to stitch', 'syr', 'sydde', 'sytt', 'sy', [
    ['Hon syr en klänning.', '她在缝一条连衣裙。'],
    ['Han sydde ihop såret.', '他把伤口缝上了。'],
    ['Byxorna är redan sydda.', '裤子已经缝好了。'],
    ['Sy knappen fast.', '把扣子缝牢。'],
  ]), 2075),
  freq(noun('video', 'en', '录像；录像机', 'video', 'videon', 'videor', null, [
    ['En video ligger i lådan.', '抽屉里有一盘录像。'],
    ['Videon är slut efter tio.', '这盘录像十点后放完。'],
    ['Hon har tre videor i hyllan.', '她架子上有三盘录像。'],
    ['Sätt på videon, tack.', '请把录像机打开。'],
  ]), 2076),
  freq(other('allt mer', 'phrase', '越来越', 'more and more / increasingly', [
    ['Hon blir allt mer trött.', '她越来越累。'],
    ['Trafiken ökar allt mer.', '车流越来越多。'],
    ['Allt mer folk flyttar hit.', '越来越多的人搬到这里。'],
    ['Problemet blir allt mer tydligt.', '这个问题越来越明显。'],
  ]), 2077, c(
    [
      ['allt', '越发；一直'],
      ['mer', '更多'],
    ],
    '“一直更多”，就是越来越。也常写成一个词 alltmer。',
  )),
  freq(verb('spy', '呕吐', 'to vomit / to throw up', 'spyr', 'spydde', 'spytt', 'spy', [
    ['Barnet spyr i vasken.', '孩子在水槽里呕吐。'],
    ['Han spydde efter båtturen.', '坐完船他吐了。'],
    ['Hon har spytt hela natten.', '她吐了一整夜。'],
    ['Skorstenen spydde ut rök.', '烟囱喷出了烟。'],
  ]), 2078),
  freq(verb('tända', '点燃；打开（灯）', 'to light / to turn on', 'tänder', 'tände', 'tänt', 'tänd', [
    ['Hon tänder lampan.', '她打开灯。'],
    ['Han tände en cigarett.', '他点了一支烟。'],
    ['Vi har tänt brasan.', '我们已经把火炉点燃了。'],
    ['Tänd ljuset, det är mörkt.', '把灯打开，太黑了。'],
  ]), 2079),
  freq(noun('förmåga', 'en', '能力', 'ability / capacity', 'förmågan', 'förmågor', 'förmågorna', [
    ['Hon har en förmåga att lyssna.', '她有倾听的能力。'],
    ['Förmågan kom tillbaka efter vilan.', '休息之后能力回来了。'],
    ['Olika förmågor behövs i laget.', '队里需要不同的能力。'],
    ['Förmågorna utvecklas med tiden.', '那些能力会随着时间增强。'],
  ]), 2080, c(
    [
      ['förmå', '能够；促使'],
      ['-ga', '名词词尾'],
    ],
    '由“能够做到”变成名词，就是能力。',
  )),
  freq(other('nuförtiden', 'adv', '如今；现在', 'nowadays', [
    ['Nuförtiden jobbar många hemifrån.', '如今很多人在家办公。'],
    ['Ungdomar läser nuförtiden mer på skärmen.', '现在年轻人更多地在屏幕上读。'],
    ['Nuförtiden är det dyrare.', '如今更贵了。'],
    ['Vi ses sällan nuförtiden.', '我们现在很少见面。'],
  ]), 2081, c(
    [
      ['nu', '现在'],
      ['för', '就……而言'],
      ['tiden', '这个时代'],
    ],
    '“就现在这个时代而言”，就是如今、现在。',
  )),
  freq(noun('kilogram', 'ett', '千克', 'kilogram', 'kilogrammet', 'kilogram', 'kilogrammen', [
    ['Ett kilogram mjöl räcker.', '一千克面粉就够。'],
    ['Kilogrammet på vågen stämde.', '秤上的那千克是准的。'],
    ['Hon köpte tre kilogram potatis.', '她买了三千克土豆。'],
    ['Kilogrammen räknas vid kassan.', '那些千克在收银台点数。'],
  ]), 2082, c([['kilo', '千'], ['gram', '克']], '一千个克，合起来就是千克。')),
  freq(adj('olycklig', '不幸的；难过的；糟糕的', 'unhappy / unfortunate', 'olyckligt', 'olyckliga', [
    ['Hon ser olycklig ut i dag.', '她今天看上去很难过。'],
    ['Ett olyckligt val ändrade allt.', '一个糟糕的选择改变了一切。'],
    ['De olyckliga nyheterna kom sent.', '那些不幸的消息来得很晚。'],
    ['Var inte olycklig över det.', '别为那件事难过。'],
  ]), 2083, c([['o-', '不'], ['lycklig', '幸福的']], '不是幸福的，合起来就是不幸的、难过的。')),
  freq(verb('rensa', '清理；除掉', 'to clean / to clear / to weed', 'rensar', 'rensade', 'rensat', 'rensa', [
    ['Hon rensar fisken i köket.', '她在厨房处理鱼。'],
    ['De rensade ogräset i rabatten.', '他们除掉了花坛里的杂草。'],
    ['Vi har rensat ut gamla kläder.', '我们已经清理掉旧衣服了。'],
    ['Rensa bordet efter maten.', '吃完把桌子清理一下。'],
  ]), 2084),
  freq(other('vanligtvis', 'adv', '通常', 'usually', [
    ['Hon kommer vanligtvis i tid.', '她通常会准时到。'],
    ['Vi äter vanligtvis hemma.', '我们通常在家吃饭。'],
    ['Vanligtvis regnar det i november.', '十一月通常会下雨。'],
    ['Han tar vanligtvis bussen.', '他通常坐公交。'],
  ]), 2085, c(
    [
      ['vanlig', '平常的'],
      ['-tvis', '以……方式'],
    ],
    '“以平常的方式”，就是通常。',
  )),
  freq(verb('samlas', '聚集；集合', 'to gather / to assemble', 'samlas', 'samlades', 'samlats', null, [
    ['Vi samlas klockan tre.', '我们三点集合。'],
    ['Folket samlades på torget.', '人们聚集在广场上。'],
    ['Alla har samlats i salen.', '所有人都已经在大厅里集合了。'],
    ['Damm samlas i hörnen.', '灰尘积在角落里。'],
  ]), 2086, c(
    [
      ['samla', '收集；聚集'],
      ['-s', '不及物／相互（自己聚到一起）'],
    ],
    '“自己聚到一起”，就是聚集、集合。',
  )),
  freq(adj('villig', '愿意的', 'willing', 'villigt', 'villiga', [
    ['Hon är villig att hjälpa.', '她愿意帮忙。'],
    ['Ett villigt svar kom direkt.', '一个愿意的答复马上到了。'],
    ['De villiga eleverna stannade kvar.', '那些愿意的学生留了下来。'],
    ['Vi är villiga att betala mer.', '我们愿意多付一些。'],
  ]), 2087, c(
    [
      ['vilja', '意愿'],
      ['-ig', '有……的'],
    ],
    '“有意愿的”，就是愿意的。',
  )),
  freq(verb('beskriva', '描述；说明', 'to describe', 'beskriver', 'beskrev', 'beskrivit', 'beskriv', [
    ['Hon beskriver vägen med händerna.', '她用手比划着描述这条路。'],
    ['Han beskrev rummet i detalj.', '他详细描述了那个房间。'],
    ['De har beskrivit felet redan.', '他们已经把故障说明过了。'],
    ['Beskriv vad du såg.', '描述你看见的。'],
  ]), 2088, c([['be-', '构词前缀'], ['skriva', '写']], '写下来讲清楚，合起来就是描述、说明。')),
  freq(verb('skylla', '责怪；归咎', 'to blame', 'skyller', 'skyllde', 'skyllt', 'skyll', [
    ['Han skyller alltid på andra.', '他总是责怪别人。'],
    ['Hon skyllde på vädret.', '她把原因归到天气上。'],
    ['De har skyllt ifrån sig.', '他们把责任推掉了。'],
    ['Skyll inte på mig.', '别怪我。'],
  ]), 2089),
  freq(noun('axel', 'en', '肩膀；车轴', 'shoulder / axle', 'axeln', 'axlar', null, [
    ['Hon bar väskan över axeln.', '她把包挎在肩上。'],
    ['Axeln gör ont efter träningen.', '训练之后这只肩膀疼。'],
    ['Båda axlarna är stela i dag.', '今天两只肩膀都发僵。'],
    ['Byt axeln på vagnen.', '把车上的轴换掉。'],
  ]), 2090),
  freq(adj('billig', '便宜的；廉价的', 'cheap / inexpensive', 'billigt', 'billiga', [
    ['En billig jacka hänger där.', '那里挂着一件便宜外套。'],
    ['Ett billigt tåg räcker.', '一班便宜火车就够。'],
    ['De billiga tomaterna var mjuka.', '那些便宜西红柿已经软了。'],
    ['Köp inte den billiga kopian.', '别买那件廉价仿品。'],
  ]), 2091),
  freq(adj('döv', '聋的', 'deaf', 'dövt', 'döva', [
    ['Han är döv på vänster öra.', '他左耳聋。'],
    ['Ett dövt öra hör inget.', '一只聋耳朵什么也听不见。'],
    ['De döva barnen lärde sig teckenspråk.', '那些耳聋的孩子学了手语。'],
    ['Orden föll för döva öron.', '那些话没人听。'],
  ]), 2092),
  freq(noun('slöseri', 'ett', '浪费', 'waste / wastefulness', 'slöseriet', null, null, [
    ['Det är slöseri med tid.', '这是在浪费时间。'],
    ['Slöseriet måste stoppas.', '这种浪费必须制止。'],
    ['Hon hatar slöseri.', '她讨厌浪费。'],
    ['Slöseri med mat är vanligt.', '浪费食物很常见。'],
  ]), 2093, c(
    [
      ['slösa', '挥霍'],
      ['-eri', '行为／状态'],
    ],
    '由“挥霍”变成名词，就是浪费。',
  )),
  freq(other('inklusive', 'other', '包括；含', 'including / inclusive of', [
    ['Priset är två hundra inklusive kaffe.', '价格是两百，含咖啡。'],
    ['Åtta personer kommer, inklusive mamma.', '来八个人，包括妈妈。'],
    ['Hyran är inklusive värme.', '房租含暖气。'],
    ['Räkna inklusive barnen.', '把孩子们也算进去。'],
  ]), 2094),
  freq(other('sorgligt', 'adv', '令人难过地；可惜', 'sadly / unfortunately', [
    ['Det slutade sorgligt.', '结局令人难过。'],
    ['Sorgligt nog kom hon för sent.', '可惜她来得太晚了。'],
    ['Han skakade sorgligt på huvudet.', '他难过地摇了摇头。'],
    ['Det är sorgligt att säga, men hon har rätt.', '说来遗憾，但她是对的。'],
  ]), 2095, c(
    [
      ['sorg', '悲伤'],
      ['-lig', '带有……的'],
      ['-t', '中性/副词词尾'],
    ],
    'sorglig 是“令人悲伤的”，sorgligt 就是令人难过地、可惜。',
  )),
  freq(noun('betydelse', 'en', '意思；意义；重要性', 'meaning / importance', 'betydelsen', 'betydelser', null, [
    ['Ordet har en annan betydelse här.', '这个词在这儿是另一个意思。'],
    ['Betydelsen blev klar efteråt.', '那个意思后来才清楚。'],
    ['Två betydelser krockar i meningen.', '这个句子里两个意思撞在一起。'],
    ['Frågan är av stor betydelse.', '这个问题很重要。'],
  ]), 2096, c([['betyda', '意味着'], ['-else', '行为名词后缀']], '由意味着变成名词，合起来就是意思、意义或重要性。')),
  freq(verb('mista', '失去', 'to lose', 'mister', 'miste', 'mist', 'mista', [
    ['Han mister jobbet i höst.', '他秋天会失去工作。'],
    ['Hon miste sin far tidigt.', '她很早就失去了父亲。'],
    ['De har mist allt i branden.', '他们在火灾中失去了一切。'],
    ['Mista inte hoppet.', '别失去希望。'],
  ]), 2097),
  freq(adj('avundsjuk', '嫉妒的', 'jealous / envious', 'avundsjukt', 'avundsjuka', [
    ['Han är avundsjuk på kollegan.', '他嫉妒那个同事。'],
    ['Ett avundsjukt leende.', '一个嫉妒的微笑。'],
    ['De avundsjuka blickarna syntes.', '那些嫉妒的目光能看出来。'],
    ['Var inte avundsjuk.', '别嫉妒。'],
  ]), 2098, c(
    [
      ['avund', '嫉妒'],
      ['sjuk', '有病的'],
    ],
    '“得了嫉妒这种病”，就是嫉妒的。',
  )),
  freq(verb('såra', '伤害；使受伤', 'to hurt / to wound', 'sårar', 'sårade', 'sårat', 'såra', [
    ['Orden sårar henne.', '那些话伤害了她。'],
    ['Han sårade mig med skämtet.', '他用那个玩笑伤害了我。'],
    ['Många sårades i olyckan.', '事故中许多人受伤了。'],
    ['Såra inte barnen.', '别伤害孩子们。'],
  ]), 2099, c(
    [
      ['sår', '伤口'],
      ['-a', '动词词尾'],
    ],
    '由“伤口”变成动词，就是造成伤害，身体或心里都可以。',
  )),
  freq(noun('pool', 'en', '游泳池；（台球）普尔；共用资金', 'pool', null, null, null, [
    ['De har en pool bakom huset.', '他们房子后面有一座游泳池。'],
    ['Barnen simmar i en pool varje sommar.', '孩子们每个夏天都在游泳池里游。'],
    ['Vi spelade pool efter maten.', '我们饭后打了普尔。'],
    ['En pool i trädgården räcker.', '花园里一座游泳池就够。'],
  ]), 2100),
]

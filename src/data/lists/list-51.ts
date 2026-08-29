import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2501–2550. Primary POS is the high-frequency use, not every sense in the book. */
export const list51: Word[] = [
  freq(noun('paradis', 'ett', '天堂；乐园', 'paradise', 'paradiset', 'paradis', 'paradisen', [
    ['Ön kändes som ett paradis.', '这座岛感觉像乐园。'],
    ['Paradiset nämns i texten.', '文本里提到天堂。'],
    ['De sökte efter paradis på jorden.', '他们在人间寻找乐园。'],
    ['Paradisen i resebroschyren är dyra.', '旅行手册里那些乐园很贵。'],
  ]), 2501),
  freq(other('fysiskt', 'adv', '身体上；体力上', 'physically', [
    ['Jobbet är fysiskt tungt.', '这工作体力上很重。'],
    ['Hon mår fysiskt bra.', '她身体上感觉不错。'],
    ['De är fysiskt trötta.', '他们体力上累了。'],
    ['Det går inte fysiskt att lyfta det.', '体力上抬不动那个。'],
  ]), 2502, c(
    [
      ['fysisk', '身体的；物理的'],
      ['-t', '中性/副词词尾'],
    ],
    'fysisk 是“身体的”，fysiskt 就是身体上、体力上。',
  )),
  freq(adj('buren', '被抬着的；被带着的', 'carried / borne', 'buret', 'burna', [
    ['Hon var buren av två män.', '她被两个人抬着。'],
    ['Ett buret piano blockerade dörren.', '一架被抬着的钢琴堵住了门。'],
    ['De burna lådorna ställdes i hallen.', '那些被抬着的箱子放在门厅。'],
    ['Fanan är buren i täten.', '旗帜被举在最前面。'],
  ]), 2503, c(
    [
      ['bära', '抬；带'],
      ['-en', '过去分词'],
    ],
    'bära 的过去分词，就是被抬着的、被带着的。',
  )),
  freq(noun('student', 'en', '大学生；高中毕业生', 'student / secondary-school graduate', 'studenten', 'studenter', 'studenterna', [
    ['Hon är student i Uppsala.', '她是乌普萨拉的大学生。'],
    ['Studenten lånade tre böcker.', '那个学生借了三本书。'],
    ['Många studenter cyklar till campus.', '很多大学生骑车去校园。'],
    ['De firar studenten i juni.', '他们六月庆祝高中毕业。'],
  ]), 2504),
  freq(other('brett', 'adv', '宽地；广泛地', 'widely / broadly', [
    ['Vägen är brett asfalterad.', '这条路铺得很宽。'],
    ['Hon log brett.', '她咧开嘴笑。'],
    ['Nyheten spreds brett.', '消息传得很广。'],
    ['Måla brett över ytan.', '在表面上宽宽地刷。'],
  ]), 2505, c(
    [
      ['bred', '宽的'],
      ['-t', '中性/副词词尾'],
    ],
    'bred 是“宽的”，brett 就是宽地、广泛地。',
  )),
  freq(noun('fästmö', 'en', '未婚妻', 'fiancée', 'fästmön', 'fästmör', 'fästmörna', [
    ['Hon är hans fästmö.', '她是他的未婚妻。'],
    ['Fästmön väntade i kyrkan.', '未婚妻在教堂等。'],
    ['Två fästmör kom tillsammans.', '两位未婚妻一起来了。'],
    ['Fästmörna bar vita klänningar.', '那些未婚妻穿着白裙。'],
  ]), 2506, c(
    [
      ['fäst', '订下的（fästa 固定）'],
      ['mö', '少女'],
    ],
    '“已经订下的少女”，就是未婚妻。',
  )),
  freq(noun('protest', 'en', '抗议', 'protest', 'protesten', 'protester', 'protesterna', [
    ['De höll en protest på torget.', '他们在广场举行抗议。'],
    ['Protesten växte snabbt.', '那场抗议很快扩大。'],
    ['Flera protester ägde rum.', '发生了好几场抗议。'],
    ['Protesterna tystnade mot kvällen.', '那些抗议到傍晚平息了。'],
  ]), 2507),
  freq(other('generellt', 'adv', '一般地；总体上', 'generally', [
    ['Generellt sett går det bra.', '总体上还算顺利。'],
    ['Hon är generellt nöjd med jobbet.', '她总体上对工作满意。'],
    ['Regeln gäller generellt för alla.', '这条规则一般对所有人适用。'],
    ['Generellt äter vi hemma.', '我们一般在家吃饭。'],
  ]), 2508, c([['generell', '一般的'], ['-t', '副词词尾']], '由“一般的”变成副词，就是一般地、总体上。')),
  freq(adj('lugnande', '使人安心的；镇静的', 'calming / soothing', 'lugnande', 'lugnande', [
    ['Det var en lugnande nyhet.', '那是个让人安心的消息。'],
    ['Ett lugnande medel hjälpte.', '一种镇静药帮了忙。'],
    ['De lugnande orden nådde fram.', '那些安抚的话起了作用。'],
    ['Rösten var lugnande.', '那声音让人安心。'],
  ]), 2509),
  freq(noun('öster', 'en', '东方；东面', 'east', 'östern', null, null, [
    ['Solen går upp i öster.', '太阳从东方升起。'],
    ['Östern vaknade tidigt.', '东方醒得很早。'],
    ['Huset ligger mot öster.', '房子朝东。'],
    ['Vinden kommer från öster.', '风从东面来。'],
  ]), 2510),
  freq(other('då och då', 'phrase', '偶尔；时不时', 'now and then / occasionally', [
    ['Vi ses då och då.', '我们时不时见面。'],
    ['Då och då ringer hon.', '她偶尔打电话。'],
    ['Det snöar då och då i april.', '四月时不时会下雪。'],
    ['Han hostar då och då.', '他偶尔咳嗽。'],
  ]), 2511, c(
    [
      ['då', '那时'],
      ['och', '和'],
      ['då', '那时'],
    ],
    '“那时和那时”，合起来就是偶尔、时不时。',
  )),
  freq(adj('bruten', '折断的；中断的', 'broken', 'brutet', 'brutna', [
    ['Armen är bruten.', '胳膊断了。'],
    ['Ett brutet löfte sårar.', '一个被违背的承诺伤人。'],
    ['De brutna grenarna låg på marken.', '那些折断的树枝在地上。'],
    ['Linjen är bruten.', '这条线断了。'],
  ]), 2512, c(
    [
      ['bryta', '折断；中断'],
      ['-en', '过去分词'],
    ],
    'bryta 的过去分词，就是折断的、中断的。',
  )),
  freq(other('näst', 'adv', '第二；仅次于', 'second / next (before a superlative)', [
    ['Hon kom näst sist i loppet.', '她在比赛里跑了倒数第二。'],
    ['Det var näst omöjligt att höra.', '那几乎听不见。'],
    ['Han är näst äldst i klassen.', '他在班上年纪第二大。'],
    ['Ta den näst bästa stolen.', '坐那把第二好的椅子。'],
  ]), 2513),
  freq(noun('trosa', 'en', '女式内裤', 'panties', 'trosan', 'trosor', 'trosorna', [
    ['Hon köpte nya trosor.', '她买了新内裤。'],
    ['Trosan torkar på strecket.', '那条内裤在晾衣绳上干。'],
    ['Två trosor låg i lådan.', '抽屉里有两条内裤。'],
    ['Trosorna ska tvättas.', '那些内裤要洗。'],
  ]), 2514),
  freq(noun('smäll', 'en', '一声巨响；一巴掌', 'bang / slap', 'smällen', 'smällar', 'smällarna', [
    ['Det hördes en smäll i köket.', '厨房里传来一声巨响。'],
    ['Smällen skrämde katten.', '那一声把猫吓到了。'],
    ['Fyrverkeriet gav flera smällar.', '烟花响了好几下。'],
    ['Smällarna ekade mellan husen.', '那些巨响在房子间回荡。'],
  ]), 2515),
  freq(verb('bete sig', '表现；举止', 'to behave', 'beter sig', 'betedde sig', 'betett sig', 'bete dig', [
    ['Hon kan inte bete sig.', '她不会规矩做人。'],
    ['Han betedde sig konstigt i går.', '他昨天举止很奇怪。'],
    ['De har betett sig illa.', '他们表现得很差。'],
    ['Bete dig nu.', '现在规矩一点。'],
  ]), 2516, c(
    [
      ['be-', '构词前缀'],
      ['te', '显现'],
      ['sig', '自己'],
    ],
    '“让自己显现出来”，合起来就是表现、举止。',
  )),
  freq(adj('förtjust', '喜爱的；高兴的', 'delighted / fond (of)', 'förtjust', 'förtjusta', [
    ['Jag är förtjust i kaffe.', '我很喜欢咖啡。'],
    ['Ett förtjust skratt hördes.', '传来一阵开心的笑。'],
    ['De förtjusta barnen hoppade.', '那些高兴的孩子在跳。'],
    ['Hon blev förtjust över presenten.', '她对礼物很欢喜。'],
  ]), 2517, c(
    [
      ['för-', '构词前缀'],
      ['tjusa', '迷住'],
    ],
    '“被迷住的”，合起来就是喜爱的、高兴的。',
  )),
  freq(adj('slagen', '被打败的；被打过的', 'beaten / defeated', 'slaget', 'slagna', [
    ['Han var slagen i finalen.', '他在决赛里被击败了。'],
    ['Ett slaget lag gick hem.', '一支被打败的队伍回家了。'],
    ['De slagna äggen vispades.', '那些打过的蛋在搅拌。'],
    ['Hon kände sig slagen.', '她觉得自己被打败了。'],
  ]), 2518, c(
    [
      ['slå', '打'],
      ['-en', '过去分词'],
    ],
    'slå 的过去分词，就是被打败的、被打过的。',
  )),
  freq(verb('explodera', '爆炸；爆发', 'to explode', 'exploderar', 'exploderade', 'exploderat', 'explodera', [
    ['Ballongen exploderar om du trycker.', '你一按，气球就会炸。'],
    ['Pannan exploderade på spisen.', '锅在炉子上炸开了。'],
    ['Han har exploderat i vrede förr.', '他以前发过脾气。'],
    ['Låt det inte explodera i pressen.', '别让这事在媒体上爆开。'],
  ]), 2519),
  freq(noun('terapi', 'en', '治疗；疗法', 'therapy', 'terapin', 'terapier', 'terapierna', [
    ['Hon går i terapi.', '她在接受治疗／心理治疗。'],
    ['Terapin hjälpte efter några veckor.', '几周后这种疗法起了作用。'],
    ['Olika terapier testades.', '试过不同疗法。'],
    ['Terapierna är kostsamma.', '那些疗法很贵。'],
  ]), 2520),
  freq(verb('svettas', '出汗', 'to sweat', 'svettas', 'svettades', 'svettats', 'svettas', [
    ['Jag svettas när jag springer.', '我跑步时出汗。'],
    ['Han svettades under täcket.', '他在被子下出了汗。'],
    ['Hon har svettats hela dagen.', '她出了一整天汗。'],
    ['Svettas inte över småsaker.', '别为小事紧张得出汗。'],
  ]), 2521, c(
    [
      ['svett', '汗'],
      ['-as', '感觉动词词尾（自己感到）'],
    ],
    '“自己出汗”，合起来就是出汗。',
  )),
  freq(noun('parti', 'ett', '政党；一段；一局', 'party / section / game', 'partiet', 'partier', 'partierna', [
    ['Ett nytt parti kom in i riksdagen.', '一个新政党进入了议会。'],
    ['Partiet samlas på söndag.', '这个政党星期天开会。'],
    ['De borgerliga partierna röstade nej.', '那些非社会主义政党投了反对票。'],
    ['Vi spelade ett parti schack.', '我们下了一局棋。'],
  ]), 2522),
  freq(noun('aktie', 'en', '股票；股份', 'share / stock', 'aktien', 'aktier', 'aktierna', [
    ['Han köpte en aktie i bolaget.', '他买了这家公司的一股。'],
    ['Aktien steg i dag.', '这只股票今天涨了。'],
    ['Hon äger flera aktier.', '她持有好几股。'],
    ['Aktierna såldes i våras.', '那些股票春天卖掉了。'],
  ]), 2523),
  freq(noun('kompani', 'ett', '连（军队）；公司（较旧）', 'company (military) / company (older)', 'kompaniet', 'kompanier', 'kompanierna', [
    ['Ett kompani marscherade förbi.', '一个连队列队走过。'],
    ['Kompaniet vilade vid vägen.', '这个连在路边休息。'],
    ['Två kompanier övade i skogen.', '两个连在树林里演习。'],
    ['Rapportera till kompaniet klockan sex.', '六点向连队报到。'],
  ]), 2524),
  freq(adj('dyr', '贵的', 'expensive / dear', 'dyrt', 'dyra', [
    ['Hyran är dyr i den här stan.', '这个城里房租很贵。'],
    ['Ett dyrt misstag kostade oss tid.', '一个代价很大的失误耽误了我们。'],
    ['De dyra biljetterna såldes slut.', '那些贵票卖完了。'],
    ['Kaffet blev dyrt i år.', '今年咖啡变贵了。'],
  ]), 2525),
  freq(verb('nöja sig', '满足；知足', 'to be content / to settle (for)', 'nöjer sig', 'nöjde sig', 'nöjt sig', 'nöj dig', [
    ['Jag nöjer mig med kaffe.', '我有咖啡就满足了。'],
    ['Hon nöjde sig inte med mindre.', '再少她就不满足。'],
    ['De har nöjt sig med svaret.', '他们对这个答复已经满足。'],
    ['Nöj dig med det du har.', '对你现有的知足吧。'],
  ]), 2526),
  freq(noun('chaufför', 'en', '司机（专职）', 'chauffeur / driver', 'chauffören', 'chaufförer', 'chaufförerna', [
    ['Chauffören väntade vid bilen.', '司机在车旁等。'],
    ['En chaufför körde oss till hotellet.', '一名司机把我们送到酒店。'],
    ['Två chaufförer turas om.', '两名司机轮班。'],
    ['Chaufförerna ska vila efter körningen.', '那些司机开完要休息。'],
  ]), 2527),
  freq(noun('potatis', 'en', '土豆', 'potato', 'potatisen', 'potatisar', 'potatisarna', [
    ['Vi äter potatis i kväll.', '我们今晚吃土豆。'],
    ['Potatisen är kokt.', '这个土豆煮好了。'],
    ['Tre potatisar låg i kastrullen.', '锅里放着三个土豆。'],
    ['Skala potatisen först.', '先把土豆皮削了。'],
  ]), 2528),
  freq(noun('kåk', 'en', '房子（俚）；局子（俚）', 'house (colloquial) / prison (slang)', 'kåken', 'kåkar', 'kåkarna', [
    ['De köpte en ny kåk.', '他们买了栋新房子。'],
    ['Kåken läcker i taket.', '那栋房子屋顶漏。'],
    ['Han sitter på kåken.', '他在局子里蹲着。'],
    ['Kåkarna längs gatan är gamla.', '沿街那些房子很旧。'],
  ]), 2529),
  freq(noun('potta', 'en', '便盆；夜壶（口）', 'potty / chamber pot', 'pottan', 'pottor', 'pottorna', [
    ['Barnet sitter på pottan.', '孩子坐在便盆上。'],
    ['Pottan står under sängen.', '便盆在床底下。'],
    ['Två pottor torkade i badrummet.', '浴室里晾着两个便盆。'],
    ['Töm pottan efteråt.', '用完把便盆倒掉。'],
  ]), 2530),
  freq(noun('uttalande', 'ett', '声明；表态', 'statement', 'uttalandet', 'uttalanden', 'uttalandena', [
    ['Ministern gav ett uttalande.', '部长发表了一份声明。'],
    ['Uttalandet kom sent i går.', '那份声明昨天很晚才出。'],
    ['Flera uttalanden motsade varandra.', '好几份声明互相矛盾。'],
    ['Uttalandena publicerades i tidningen.', '那些声明登在报上。'],
  ]), 2531, c(
    [
      ['uttala', '说出；发音'],
      ['-ande', '行为/结果名词后缀'],
    ],
    '“说出来的话”，就是声明、表态。',
  )),
  freq(noun('liter', 'en', '升', 'litre', 'litern', 'liter', 'literna', [
    ['Köp en liter mjölk.', '买一升牛奶。'],
    ['Litern räckte till soppan.', '这一升够做汤了。'],
    ['Vi drack tre liter vatten.', '我们喝了三升水。'],
    ['Literna stod uppradade i kylen.', '那些升装的瓶子在冰箱里排着。'],
  ]), 2532),
  freq(other('allesammans', 'pron', '大家；统统', 'all of them / all together', [
    ['Kom allesammans hit.', '大家都到这儿来。'],
    ['Vi gick allesammans till kyrkan.', '我们大家一起去了教堂。'],
    ['Barnen somnade allesammans.', '孩子们统统睡着了。'],
    ['Allesammans skrattade.', '大家都笑了。'],
  ]), 2533, c(
    [
      ['alle', '所有（旧复数）'],
      ['sammans', '在一起'],
    ],
    '“所有人在一起”，就是大家、统统。',
  )),
  freq(noun('karaktär', 'en', '性格；特点', 'character / characteristic', 'karaktären', 'karaktärer', 'karaktärerna', [
    ['Hon har en stark karaktär.', '她性格很强。'],
    ['Karaktären i boken är trovärdig.', '书里这个人物很可信。'],
    ['Filmen har flera karaktärer.', '这部电影有好几个人物。'],
    ['Beslutet fick karaktären av nödåtgärd.', '这项决定带上了应急措施的特点。'],
  ]), 2534),
  freq(other('praktiskt', 'adv', '实际地；几乎', 'practically / in practice', [
    ['Det fungerar praktiskt sett bra.', '实际来看这运转得不错。'],
    ['Hon är praktiskt lagd.', '她动手能力强。'],
    ['Praktiskt taget alla kom.', '几乎所有人都来了。'],
    ['Vi löste det praktiskt på plats.', '我们当场实际解决了。'],
  ]), 2535, c([['praktisk', '实际的'], ['-t', '副词词尾']], '由“实际的”变成副词，就是实际地；也用于“几乎”。')),
  freq(noun('cirkus', 'en', '马戏团；乱糟糟', 'circus', 'cirkusen', 'cirkusar', 'cirkusarna', [
    ['Barnen gick på cirkus.', '孩子们去看了马戏。'],
    ['Cirkusen stannade en vecka i stan.', '马戏团在城里停了一周。'],
    ['Två cirkusar turnerade i somras.', '去年夏天有两个马戏团在巡演。'],
    ['Det blev cirkus i köket.', '厨房里乱成一团。'],
  ]), 2536),
  freq(noun('rike', 'ett', '王国；国度', 'kingdom / realm', 'riket', 'riken', 'rikena', [
    ['Sverige är ett rike i norr.', '瑞典是北方的一个王国。'],
    ['Riket styrdes av kungen.', '这个王国由国王统治。'],
    ['Två riken slöt fred.', '两个王国讲和了。'],
    ['Rikena vid havet handlade med varandra.', '海边那些国度互相做生意。'],
  ]), 2537),
  freq(noun('underkläder', null, '内衣', 'underwear / underclothes', null, 'underkläder', 'underkläderna', [
    ['Hon köpte nya underkläder.', '她买了新内衣。'],
    ['Underkläderna torkar i badrummet.', '内衣在浴室里晾着。'],
    ['Packa rena underkläder.', '把干净内衣装上。'],
    ['Byt underkläder varje dag.', '每天换内衣。'],
  ]), 2538, c([['under', '在下面'], ['kläder', '衣服']], '贴在下面的衣服，就是内衣。')),
  freq(noun('öst', 'en', '东方；东边', 'east', null, null, null, [
    ['Vinden kommer från öst.', '风从东边来。'],
    ['Öst och väst möts här.', '东方和西方在这儿交会。'],
    ['De reser mot öst i morgon.', '他们明天往东走。'],
    ['Kusten i öst är klippig.', '东边的海岸多岩石。'],
  ]), 2539),
  freq(verb('tugga', '咀嚼', 'to chew', 'tuggar', 'tuggade', 'tuggat', 'tugga', [
    ['Han tuggar tuggummi.', '他在嚼口香糖。'],
    ['Hon tuggade långsamt.', '她慢慢地嚼。'],
    ['Maten är redan tuggad.', '食物已经嚼过了。'],
    ['Tugga ordentligt.', '好好嚼。'],
  ]), 2540),
  freq(noun('lakan', 'ett', '床单', 'bedsheet', 'lakanet', 'lakan', 'lakanen', [
    ['Lakanet är rent.', '床单是干净的。'],
    ['Ett vitt lakan låg på sängen.', '床上铺着一条白床单。'],
    ['Vi bytte lakan i går.', '我们昨天换了床单。'],
    ['Lakanen torkar ute.', '那些床单在外面晾。'],
  ]), 2541),
  freq(other('offentligt', 'adv', '公开地', 'publicly', [
    ['Hon talade offentligt om saken.', '她公开谈了这件事。'],
    ['Beslutet meddelades offentligt.', '决定被公开宣布。'],
    ['De grälade offentligt.', '他们当众吵了起来。'],
    ['Säg det inte offentligt.', '别公开说这个。'],
  ]), 2542, c(
    [
      ['offentlig', '公开的；公共的'],
      ['-t', '中性/副词词尾'],
    ],
    'offentlig 是“公开的”，offentligt 就是公开地。',
  )),
  freq(noun('insats', 'en', '投入；赌注；行动', 'effort / stake / intervention', 'insatsen', 'insatser', 'insatserna', [
    ['Hon gjorde en stor insats.', '她做了很大投入。'],
    ['Insatsen i spelet var hög.', '这场游戏的赌注很高。'],
    ['Polisen gjorde flera insatser.', '警察采取了好几次行动。'],
    ['Insatserna räddade huset.', '那些行动保住了房子。'],
  ]), 2543, c(
    [
      ['in', '进入'],
      ['sats', '一笔投入（sätta 放）'],
    ],
    '“放进去的那一笔”，可以是投入、赌注，也可以是一次行动。',
  )),
  freq(noun('mått', 'ett', '度量；尺寸；分寸', 'measure / measurement / dimensions', 'måttet', 'mått', 'måtten', [
    ['Ta mått på fönstret.', '量一下窗户的尺寸。'],
    ['Måttet stämde inte.', '那个尺寸不对。'],
    ['Vilka mått har du?', '你的尺寸是多少？'],
    ['Måtten står på etiketten.', '尺寸写在标签上。'],
  ]), 2544),
  freq(verb('dumpa', '倾倒；甩（人）；低价抛售', 'to dump / to ditch / to dump (prices)', 'dumpar', 'dumpade', 'dumpat', 'dumpa', [
    ['De dumpar avfall i havet.', '他们把废物倒进海里。'],
    ['Hon dumpade honom i somras.', '她夏天把他甩了。'],
    ['Bilen har dumpats i skogen.', '那辆车被扔在森林里了。'],
    ['Dumpa inte priserna så.', '别这样把价格砸下去。'],
  ]), 2545),
  freq(noun('singel', 'en', '单打；单曲；单身', 'singles (match) / single (record) / single person', 'singeln', 'singlar', 'singlarna', [
    ['De spelade singel i tennis.', '他们打了网球单打。'],
    ['Singeln släpptes i maj.', '这张单曲五月发行。'],
    ['Två singlar låg på listan.', '榜上有两首单曲。'],
    ['Hon är singel just nu.', '她这会儿是单身。'],
  ]), 2546),
  freq(other('femtio', 'other', '五十', 'fifty', [
    ['Hon fyller femtio i år.', '她今年满五十。'],
    ['Bilen kostar femtio tusen.', '这车要五万。'],
    ['Vänta femtio minuter till.', '再等五十分钟。'],
    ['Femtio elever ryms i salen.', '教室能坐五十个学生。'],
  ]), 2547),
  freq(noun('bagage', 'ett', '行李', 'baggage / luggage', 'bagaget', null, null, [
    ['Mitt bagage är tungt.', '我的行李很重。'],
    ['Vi hämtade bagaget.', '我们取了行李。'],
    ['Lämna bagaget vid disken.', '把行李放在柜台。'],
    ['Bagaget kom fram i tid.', '行李按时到了。'],
  ]), 2548),
  freq(verb('knäcka', '折断；破解；搞垮；兼职（口）', 'to crack / to break / to moonlight (colloquial)', 'knäcker', 'knäckte', 'knäckt', 'knäck', [
    ['Stormen knäcker grenarna.', '风暴把树枝折断。'],
    ['De knäckte koden.', '他们破解了密码。'],
    ['Jobbet har knäckt henne.', '那份工作把她搞垮了。'],
    ['Han knäcker extra på kvällen.', '他晚上兼职。'],
  ]), 2549),
  freq(noun('värdighet', 'en', '尊严；尊荣', 'dignity', 'värdigheten', 'värdigheter', 'värdigheterna', [
    ['Hon talade med värdighet.', '她说话带着尊严。'],
    ['Värdigheten gick inte att köpa.', '尊严买不来。'],
    ['Alla människor har värdighet.', '人人都有尊严。'],
    ['Värdigheterna som följde med ämbetet var många.', '这个职位带来的那些尊荣不少。'],
  ]), 2550, c(
    [
      ['värdig', '有尊严的；配得上的'],
      ['-het', '抽象名词后缀'],
    ],
    '把“有尊严的”变成抽象名词，就是尊严、尊荣。',
  )),
]

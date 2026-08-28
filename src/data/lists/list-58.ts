import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2851–2900. Primary POS is the high-frequency use, not every sense in the book. */
export const list58: Word[] = [
  freq(other('därmed', 'adv', '就此；于是；这样', 'thus / with that', [
    ['Därmed var mötet slut.', '会议就此结束。'],
    ['Hon nickade och gick därmed hem.', '她点了点头，于是回家了。'],
    ['Vi skrev under och saken var därmed klar.', '我们签了字，事情这样就成了。'],
    ['Därmed kan vi börja nästa punkt.', '这样我们就可以开始下一项。'],
  ]), 2851, c(
    [
      ['där', '那里'],
      ['med', '随着；用'],
    ],
    '随着那件事，合起来就是就此、于是。',
  )),
  freq(adj('fullständig', '完全的；完整的', 'complete / entire', 'fullständigt', 'fullständiga', [
    ['Vi behöver en fullständig lista.', '我们需要一份完整名单。'],
    ['Ett fullständigt svar saknas.', '缺少一个完整的回答。'],
    ['De fullständiga pappren kom i dag.', '那些齐全的文件今天到了。'],
    ['Tystnaden var fullständig.', '寂静是彻底的。'],
  ]), 2852, c(
    [
      ['full', '完全的'],
      ['ständig', '持续的'],
    ],
    '完全覆盖、没有缺口，合起来就是完全的、完整的。',
  )),
  freq(noun('manus', 'ett', '剧本；稿子', 'manuscript / script', 'manuset', 'manus', 'manusen', [
    ['Hon skrev ett nytt manus.', '她写了一份新剧本。'],
    ['Manuset ligger på bordet.', '那份稿子在桌子上。'],
    ['Två manus skickades till förlaget.', '两份稿子寄给了出版社。'],
    ['Manusen måste kortas ner.', '那些剧本得缩短。'],
  ]), 2853),
  freq(verb('hedra', '向……致敬；为……增光', 'to honour', 'hedrar', 'hedrade', 'hedrat', 'hedra', [
    ['Vi hedrar de som byggt skolan.', '我们向建校的人致敬。'],
    ['Staden hedrade vinnaren i går.', '这座城市昨天向获胜者致敬。'],
    ['Det har hedrat familjen i år.', '这件事今年为家里增了光。'],
    ['Hedra löftet du gav.', '信守你许下的诺言。'],
  ]), 2854, c(
    [
      ['heder', '荣誉'],
      ['-a', '动词词尾'],
    ],
    '给予荣誉，合起来就是致敬、为……增光。',
  )),
  freq(verb('töras', '敢；敢于', 'to dare', 'törs', 'tordes', 'torts', 'töras', [
    ['Jag törs fråga nu.', '我现在敢问了。'],
    ['Han tordes inte gå in.', '他当时不敢进去。'],
    ['Har du torts säga nej?', '你敢说过不吗？'],
    ['Utan att töras säga nej gick hon med.', '她没敢说不，就同意了。'],
  ]), 2855),
  freq(noun('halsband', 'ett', '项链；项圈', 'necklace / collar', 'halsbandet', 'halsband', 'halsbanden', [
    ['Hon fick ett halsband i present.', '她收到一条项链作礼物。'],
    ['Halsbandet är av silver.', '这条项链是银的。'],
    ['Två halsband låg i asken.', '盒子里有两条项链。'],
    ['Halsbanden ska putsas.', '那些项链要擦一擦。'],
  ]), 2856, c(
    [
      ['hals', '脖子'],
      ['band', '带子'],
    ],
    '戴在脖子上的带子，就是项链、项圈。',
  )),
  freq(noun('frisyr', 'en', '发型', 'hairstyle', 'frisyren', 'frisyrer', null, [
    ['Hon har en ny frisyr.', '她换了新发型。'],
    ['Frisyren passar hennes ansikte.', '这个发型适合她的脸。'],
    ['Två frisyrer fanns i tidningen.', '杂志上有两种发型。'],
    ['Byt frisyr till festen.', '换个发型去参加聚会。'],
  ]), 2857),
  freq(noun('undergång', 'en', '灭亡；没落；地下通道', 'downfall / ruin / underpass', 'undergången', 'undergångar', null, [
    ['Romanen skildrar rikets undergång.', '这部小说写的是帝国的灭亡。'],
    ['Undergången kom långsamt.', '这场没落来得很慢。'],
    ['Två undergångar leder under spåren.', '有两条地下通道通到铁轨下面。'],
    ['Gå genom undergången till perrongen.', '走地下通道去站台。'],
  ]), 2858, c(
    [
      ['under', '在……下；完结'],
      ['gång', '走；通道'],
    ],
    '走向完结，就是灭亡；也可以指从下面走的通道。',
  )),
  freq(adj('gripen', '受感动的；被打动的', 'touched / moved', 'gripet', 'gripna', [
    ['Hon blev gripen av talet.', '她被那番话打动了。'],
    ['Ett gripet leende syntes kort.', '脸上闪过一丝被打动的微笑。'],
    ['De gripna åhörarna reste sig.', '那些受感动的听众站了起来。'],
    ['Jag är djupt gripen i kväll.', '我今晚深受感动。'],
  ]), 2859, c(
    [
      ['gripa', '抓住'],
      ['-en', '完成分词'],
    ],
    '心里被抓住了，合起来就是受感动的。',
  )),
  freq(verb('locka', '吸引；引诱；把头发做成卷', 'to entice / to attract / to curl', 'lockar', 'lockade', 'lockat', 'locka', [
    ['Doften lockar gästerna in.', '香味把客人吸引进来。'],
    ['De lockade barnen med glass.', '他们用冰淇淋把孩子们哄来。'],
    ['Skylten har lockat många kunder.', '这块招牌已经吸引了不少顾客。'],
    ['Locka inte hunden med mat från bordet.', '别用桌上的食物逗狗。'],
  ]), 2860),
  freq(adj('mogen', '成熟的；熟的', 'ripe / mature / ready', 'moget', 'mogna', [
    ['Äpplet är moget nu.', '这苹果现在熟了。'],
    ['Ett moget beslut tar tid.', '一个成熟的决定需要时间。'],
    ['De mogna tomaterna ska ätas först.', '那些熟番茄要先吃。'],
    ['Är du mogen för jobbet?', '你对这份工作准备好了吗？'],
  ]), 2861),
  freq(noun('studio', 'en', '录音室；工作室', 'studio', 'studion', 'studior', null, [
    ['Bandet spelar in i en studio.', '乐队在一间录音室录音。'],
    ['Studion är bokad till kvällen.', '那间录音室订到晚上。'],
    ['Två studior ligger i källaren.', '地下室有两间工作室。'],
    ['Kom till studion klockan nio.', '九点到录音室来。'],
  ]), 2862),
  freq(noun('barndom', 'en', '童年', 'childhood', 'barndomen', 'barndomar', 'barndomarna', [
    ['Hon hade en trygg barndom.', '她有一个安心的童年。'],
    ['Barndomen minns hon tydligt.', '那段童年她记得很清楚。'],
    ['Deras barndomar såg olika ut.', '他们的童年各自不同。'],
    ['Barndomarna i boken är korta.', '书里那些童年写得很短。'],
  ]), 2863, c(
    [
      ['barn', '孩子'],
      ['-dom', '时期／状态'],
    ],
    '当孩子的那段时期，就是童年。',
  )),
  freq(noun('arv', 'ett', '遗产；遗传', 'inheritance / heritage / heredity', 'arvet', 'arv', 'arven', [
    ['Hon fick huset i arv.', '她继承了这房子。'],
    ['Arvet delades mellan syskonen.', '遗产在兄弟姐妹之间分了。'],
    ['Två arv väntar fortfarande.', '还有两笔遗产等着处理。'],
    ['Arven från farmor var böcker.', '外婆留下的那些遗产是书。'],
  ]), 2864),
  freq(noun('alibi', 'ett', '不在场证明；借口', 'alibi', 'alibit', 'alibin', 'alibina', [
    ['Han har ett starkt alibi.', '他有很硬的不在场证明。'],
    ['Alibit höll inte i rätten.', '那个不在场证明在法庭上站不住。'],
    ['Två alibin presenterades.', '出示了两个不在场证明。'],
    ['Alibina ska granskas i natt.', '那些不在场证明今晚要核查。'],
  ]), 2865),
  freq(noun('välgörenhet', 'en', '慈善；救济', 'charity', 'välgörenheten', null, null, [
    ['Hon ger till välgörenhet varje år.', '她每年都向慈善捐款。'],
    ['Välgörenheten samlar kläder nu.', '这个慈善活动正在收衣服。'],
    ['Konserten går till välgörenhet.', '这场音乐会的收入用于慈善。'],
    ['Be om hjälp, inte om välgörenhet.', '求帮助，不是求施舍。'],
  ]), 2866, c(
    [
      ['väl', '好好地'],
      ['göra', '做'],
      ['-het', '性质、状态'],
    ],
    '好好地为别人做事，合起来就是慈善。',
  )),
  freq(noun('gruva', 'en', '矿；矿山', 'mine', 'gruvan', 'gruvor', null, [
    ['Pappa jobbade i en gruva.', '爸爸在一座矿里干活。'],
    ['Gruvan stängdes för tre år sen.', '那座矿三年前关了。'],
    ['Två gruvor ligger utanför byn.', '村外有两座矿。'],
    ['Gå inte in i gruvan ensam.', '别独自进矿井。'],
  ]), 2867),
  freq(noun('guide', 'en', '导游；指南', 'guide', 'guiden', 'guider', null, [
    ['Vi följde en guide i stan.', '我们在城里跟着一位导游。'],
    ['Guiden visade kyrkan först.', '导游先带看了教堂。'],
    ['Två guider väntar vid bussen.', '两位导游在公交车边等。'],
    ['Fråga guiden om biljetterna.', '向导游问问票的事。'],
  ]), 2868),
  freq(noun('nöt', 'en', '坚果；笨蛋（口）', 'nut / (informal) fool', 'nöten', 'nötter', null, [
    ['Hon knäckte en nöt vid bordet.', '她在桌边敲开一颗坚果。'],
    ['Nöten var för hård.', '这颗坚果太硬了。'],
    ['Skålen är full av nötter.', '碗里装满了坚果。'],
    ['Vilken nöt jag var i går.', '我昨天可真傻。'],
  ]), 2869),
  freq(adj('trolig', '很可能的；可信的', 'probable / likely', 'troligt', 'troliga', [
    ['Det är en trolig förklaring.', '这是一个很可能的解释。'],
    ['Ett troligt datum är i maj.', '一个很可能的日期是五月。'],
    ['De troliga orsakerna listas här.', '那些很可能的原因列在这里。'],
    ['Regn i morgon är troligt.', '明天下雨很有可能。'],
  ]), 2870, c(
    [
      ['tro', '相信'],
      ['-lig', '带这种性质的'],
    ],
    '可以相信会发生的，合起来就是很可能的。',
  )),
  freq(noun('princip', 'en', '原则', 'principle', 'principen', 'principer', null, [
    ['Det är en viktig princip här.', '这是这里的一条重要原则。'],
    ['Principen gäller alla lika.', '这条原则对所有人一视同仁。'],
    ['Vi har tre principer på jobbet.', '我们工作上有三条原则。'],
    ['I princip går det bra.', '原则上没问题。'],
  ]), 2871),
  freq(adj('trogen', '忠实的；忠于的', 'faithful / true (to)', 'troget', 'trogna', [
    ['Hunden är en trogen vän.', '狗是忠实的朋友。'],
    ['Ett troget minne av den dagen.', '对那天一段忠实的记忆。'],
    ['De trogna läsarna kom tillbaka.', '那些忠实的读者又回来了。'],
    ['Var trogen mot avtalet.', '要忠于这份协议。'],
  ]), 2872, c(
    [
      ['tro', '信任；忠实'],
      ['-en', '形容词词尾'],
    ],
    '带着忠实，合起来就是忠实的、忠于的。',
  )),
  freq(noun('engelsman', 'en', '英国男人；英格兰人', 'Englishman', 'engelsmannen', 'engelsmän', 'engelsmännen', [
    ['Min kollega är engelsman.', '我同事是英格兰人。'],
    ['Engelsmannen beställde te.', '那位英国男人点了茶。'],
    ['Flera engelsmän sitter där.', '好几位英格兰人坐在那边。'],
    ['Engelsmännen reste hem i dag.', '那些英格兰人今天回家了。'],
  ]), 2873, c(
    [
      ['engelsk', '英格兰的'],
      ['man', '人；男人'],
    ],
    '来自英格兰的男人，就是英国男人、英格兰人。',
  )),
  freq(noun('doft', 'en', '香味；气味', 'scent / fragrance', 'doften', 'dofter', null, [
    ['Det kom en doft från ugnen.', '烤箱里飘来一股香味。'],
    ['Doften fyllde hela köket.', '这香味充满了整个厨房。'],
    ['Två dofter blandades i luften.', '空气里混着两种气味。'],
    ['Känn doften av brödet.', '闻一闻这面包的香。'],
  ]), 2874),
  freq(verb('bilda', '成立；组成；形成', 'to form / to found / to constitute', 'bildar', 'bildade', 'bildat', 'bilda', [
    ['De bildar en ny förening.', '他们在成立一个新协会。'],
    ['Hon bildade en kör i fjol.', '她去年组建了一个合唱团。'],
    ['Vi har bildat en grupp i klassen.', '我们在班上组成了一个小组。'],
    ['Bilda en kö vid dörren.', '在门口排成一队。'],
  ]), 2875),
  freq(noun('hobby', 'en', '爱好；业余活动', 'hobby', 'hobbyn', 'hobbyer', null, [
    ['Fotografering är hennes hobby.', '摄影是她的爱好。'],
    ['Hobbyn tar hela söndagen.', '这个爱好占掉整个星期天。'],
    ['Han har tre hobbyer samtidigt.', '他同时有三个爱好。'],
    ['Hitta en hobby efter jobbet.', '下班后找个爱好。'],
  ]), 2876),
  freq(noun('uttryck', 'ett', '表达；措辞；神情', 'expression', 'uttrycket', 'uttryck', 'uttrycken', [
    ['Det är ett vanligt uttryck här.', '这是这儿一个常用的说法。'],
    ['Uttrycket i ansiktet ändrades.', '脸上的神情变了。'],
    ['Två uttryck betyder samma sak.', '两个措辞意思一样。'],
    ['Uttrycken i texten är svåra.', '课文里那些措辞很难。'],
  ]), 2877, c(
    [
      ['ut', '向外'],
      ['tryck', '压；挤出'],
    ],
    '把意思挤出来，合起来就是表达、措辞。',
  )),
  freq(adj('religiös', '宗教的；虔诚的', 'religious', 'religiöst', 'religiösa', [
    ['Det är en religiös högtid.', '这是一个宗教节日。'],
    ['Ett religiöst samtal följde.', '接着是一场宗教方面的谈话。'],
    ['De religiösa grupperna möts här.', '那些宗教团体在这儿见面。'],
    ['Hon är religiös, men tyst om det.', '她虔诚，但很少提起。'],
  ]), 2878),
  freq(noun('bidrag', 'ett', '补助；稿件；贡献', 'grant / contribution', 'bidraget', 'bidrag', 'bidragen', [
    ['Hon sökte ett bidrag till hyran.', '她申请了一笔房租补助。'],
    ['Bidraget kom för sent.', '那笔补助来晚了。'],
    ['Två bidrag publicerades i tidningen.', '报纸上登了两篇来稿。'],
    ['Bidragen från staten räcker inte.', '那些国家补助不够。'],
  ]), 2879, c(
    [
      ['bi-', '附带'],
      ['drag', '拉；一项'],
    ],
    '额外拉进来的一份，合起来就是补助、贡献。',
  )),
  freq(noun('filt', 'en', '毯子；毛毡', 'blanket / felt', 'filten', 'filtar', null, [
    ['Hon svepte in sig i en filt.', '她用一条毯子裹住自己。'],
    ['Filten är varm och mjuk.', '这条毯子又暖又软。'],
    ['Två filtar ligger i soffan.', '沙发上放着两条毯子。'],
    ['Ta med filten ut i kväll.', '今晚把毯子带出去。'],
  ]), 2880),
  freq(adj('patetisk', '可怜的；造作感伤的', 'pathetic / maudlin', 'patetiskt', 'patetiska', [
    ['Det var ett patetiskt försvar.', '那是一套可怜的辩解。'],
    ['Ett patetiskt tal följde efteråt.', '随后是一篇造作感伤的讲话。'],
    ['De patetiska ursäkterna tystnade.', '那些可怜的借口停了。'],
    ['Var inte patetisk nu.', '现在别这么可怜兮兮的。'],
  ]), 2881),
  freq(adj('allergisk', '过敏的', 'allergic', 'allergiskt', 'allergiska', [
    ['Hon är allergisk mot mjölk.', '她对牛奶过敏。'],
    ['Ett allergiskt utslag kom på armen.', '胳膊上起了过敏疹。'],
    ['De allergiska barnen sitter inne.', '那些过敏的孩子坐在屋里。'],
    ['Jag blir allergisk av katterna.', '猫会让我过敏。'],
  ]), 2882, c(
    [
      ['allergi', '过敏'],
      ['-sk', '……的'],
    ],
    '有过敏的，就是过敏的。',
  )),
  freq(noun('bonde', 'en', '农民；兵（棋）', 'farmer / (chess) pawn', 'bonden', 'bönder', null, [
    ['Min farfar var bonde.', '我爷爷是农民。'],
    ['Bonden körde traktorn i dag.', '那位农民今天开了拖拉机。'],
    ['Flera bönder säljer på torget.', '好几位农民在广场上卖东西。'],
    ['Flytta bonden två steg fram.', '把那个兵往前走两步。'],
  ]), 2883),
  freq(noun('försäkring', 'en', '保险', 'insurance', 'försäkringen', 'försäkringar', null, [
    ['Vi tecknade en ny försäkring.', '我们签了一份新保险。'],
    ['Försäkringen täcker cykeln.', '这份保险保自行车。'],
    ['Hon har tre försäkringar samtidigt.', '她同时有三份保险。'],
    ['Ring försäkringen efter olyckan.', '出事后给保险公司打电话。'],
  ]), 2884, c(
    [
      ['försäkra', '保险；保证'],
      ['-ing', '行为／结果'],
    ],
    '办理保险这件事，合起来就是保险。',
  )),
  freq(other('vem som helst', 'pron', '任何人；随便谁', 'anyone / whoever', [
    ['Vem som helst kan lära sig det.', '任何人都能学会这个。'],
    ['Ge boken till vem som helst i klassen.', '把书给班上随便谁。'],
    ['Det är inte vem som helst som klarar det.', '不是随便谁都能做成的。'],
    ['Fråga vem som helst på gatan.', '街上随便问一个人。'],
  ]), 2885, c(
    [
      ['vem', '谁'],
      ['som', '那／关系'],
      ['helst', '最；无论'],
    ],
    '无论是谁都可以，合起来就是任何人。',
  )),
  freq(other('häromdagen', 'adv', '前几天；那天', 'the other day', [
    ['Vi åt lunch häromdagen vid ån.', '前几天我们在河边吃了午饭。'],
    ['Häromdagen regnade det hela dan.', '前几天下了一整天雨。'],
    ['Vi pratade om det häromdagen.', '我们前几天谈过这事。'],
    ['Häromdagen kom paketet äntligen.', '前几天包裹终于到了。'],
  ]), 2886, c(
    [
      ['härom', '不久前这边'],
      ['dagen', '那天'],
    ],
    '不久前的那天，就是前几天。',
  )),
  freq(noun('helgon', 'ett', '圣徒；圣人', 'saint', 'helgonet', 'helgon', 'helgonen', [
    ['Kyrkan är vigd åt ett helgon.', '这座教堂献给一位圣徒。'],
    ['Helgonet avbildas med ljus.', '那位圣徒被画成带着光。'],
    ['Två helgon nämns i texten.', '课文里提到两位圣徒。'],
    ['Helgonen firas i november.', '那些圣徒在十一月纪念。'],
  ]), 2887),
  freq(noun('metall', 'en', '金属', 'metal', 'metallen', 'metaller', null, [
    ['Skeden är av metall.', '这勺子是金属的。'],
    ['Metallen känns kall i handen.', '这金属拿在手里是凉的。'],
    ['Två metaller blandas i legeringen.', '合金里混了两种金属。'],
    ['Samla metallen i den gröna tunnan.', '把金属放到绿色桶里。'],
  ]), 2888),
  freq(noun('julklapp', 'en', '圣诞礼物', 'Christmas present', 'julklappen', 'julklappar', null, [
    ['Barnet fick en stor julklapp.', '孩子收到一份很大的圣诞礼物。'],
    ['Julklappen låg under granen.', '那份圣诞礼物在圣诞树下。'],
    ['Vi köpte tre julklappar i dag.', '我们今天买了三份圣诞礼物。'],
    ['Öppna julklappen på julafton.', '平安夜再拆圣诞礼物。'],
  ]), 2889, c(
    [
      ['jul', '圣诞节'],
      ['klapp', '礼物（口）；拍'],
    ],
    '圣诞节送出的那份礼物，就是圣诞礼物。',
  )),
  freq(noun('mysterium', 'ett', '谜；神秘之事', 'mystery', 'mysteriet', 'mysterier', null, [
    ['Det är ett mysterium för oss.', '对我们来说这是个谜。'],
    ['Mysteriet löstes efter tre år.', '这个谜三年后解开了。'],
    ['Boken rymmer flera mysterier.', '这本书里有好几个谜。'],
    ['Lämna mysteriet tills i morgon.', '这个谜留到明天再说。'],
  ]), 2890),
  freq(verb('hacka', '剁；砍；挑剔', 'to chop / to hack / to pick on', 'hackar', 'hackade', 'hackat', 'hacka', [
    ['Hon hackar morötterna fint.', '她把胡萝卜剁得很细。'],
    ['Han hackade veden bakom huset.', '他在房后劈柴。'],
    ['Vi har hackat osten redan.', '我们已经把奶酪剁好了。'],
    ['Hacka inte på henne hela tiden.', '别老挑她的刺。'],
  ]), 2891),
  freq(other('tretton', 'other', '十三', 'thirteen', [
    ['Hon fyller tretton i juni.', '她六月满十三岁。'],
    ['Vi ses klockan tretton.', '我们十三点见。'],
    ['Det kostar tretton kronor.', '这个要十三克朗。'],
    ['Tretton personer väntar.', '十三个人在等。'],
  ]), 2892),
  freq(noun('krok', 'en', '钩；挂钩；弯路', 'hook / crook / bend', 'kroken', 'krokar', null, [
    ['Häng jackan på kroken.', '把外套挂在挂钩上。'],
    ['Kroken sitter löst i väggen.', '墙上那个钩松了。'],
    ['Två krokar saknas i hallen.', '门厅里少了两个挂钩。'],
    ['Stigen gör en krok vid sjön.', '小径在湖边拐了一个弯。'],
  ]), 2893),
  freq(noun('juice', 'en', '果汁', 'juice', 'juicen', 'juicer', null, [
    ['Vill du ha juice till frukost?', '早餐想喝果汁吗？'],
    ['Juicen är kall ur kylen.', '这果汁刚从冰箱拿出来是凉的。'],
    ['Vi köpte tre juicer i affären.', '我们在店里买了三瓶果汁。'],
    ['Häll upp juicen i glasen.', '把果汁倒进杯子里。'],
  ]), 2894),
  freq(noun('symbol', 'en', '象征；符号', 'symbol', 'symbolen', 'symboler', null, [
    ['Duvan är en symbol för fred.', '鸽子是和平的象征。'],
    ['Symbolen på dörren betyder toalett.', '门上那个符号表示厕所。'],
    ['Två symboler saknas i tabellen.', '表里少了两个符号。'],
    ['Rita symbolen tydligare, tack.', '请把这个符号画得更清楚。'],
  ]), 2895),
  freq(other('jämnt', 'adv', '均匀地；平局地', 'evenly / as a tie', [
    ['Dela kakan jämnt mellan er.', '把蛋糕在你们之间均分。'],
    ['Det står jämnt i matchen.', '比赛打成平局。'],
    ['Färgen täcker jämnt nu.', '油漆现在涂得很均匀。'],
    ['Fördela vikten jämnt i väskan.', '把重量在包里匀开。'],
  ]), 2896, c(
    [
      ['jämn', '均匀的；平的'],
      ['-t', '中性/副词词尾'],
    ],
    'jämn 是“均匀的”，jämnt 就是均匀地，也可指打成平。',
  )),
  freq(adj('täckt', '被盖住的；有顶的', 'covered', 'täckt', 'täckta', [
    ['En täckt terrass ligger bakom huset.', '房后有一个有顶的露台。'],
    ['Ett täckt släp stod vid vägen.', '路边停着一辆有篷拖车。'],
    ['De täckta båtarna låg vid bryggan.', '那些有篷的船停在码头边。'],
    ['Marken är täckt av löv.', '地面被落叶盖住了。'],
  ]), 2897, c(
    [
      ['täcka', '覆盖'],
      ['-t', '完成分词'],
    ],
    '已经被盖上的，合起来就是被盖住的、有顶的。',
  )),
  freq(noun('titel', 'en', '头衔；书名；片名', 'title', 'titeln', 'titlar', null, [
    ['Hon har titeln doktor.', '她有博士头衔。'],
    ['Titeln på boken är kort.', '这本书的书名很短。'],
    ['Två titlar kom ut i höst.', '今秋出了两个书名／片名。'],
    ['Skriv titeln överst på sidan.', '把标题写在页面最上头。'],
  ]), 2898),
  freq(noun('varv', 'ett', '一圈；船厂', 'lap / revolution / shipyard', 'varvet', 'varv', 'varven', [
    ['Hon sprang ett varv till.', '她又跑了一圈。'],
    ['Varvet vid hamnen anställer folk.', '港口那家船厂在招人。'],
    ['Tre varv räcker för uppvärmningen.', '热身跑三圈就够。'],
    ['Varven längs kusten har det svårt.', '沿海那些船厂日子不好过。'],
  ]), 2899),
  freq(verb('försiggå', '进行；发生', 'to take place / to be going on', 'försiggår', 'försiggick', 'försiggått', 'försiggå', [
    ['Vad försiggår i köket?', '厨房里在干什么？'],
    ['Mötet försiggick bakom stängda dörrar.', '会议在闭门情况下进行。'],
    ['Det har försiggått i tysthet länge.', '这件事已经悄悄进行很久了。'],
    ['Sådant får inte försiggå här.', '这种事不许在这儿发生。'],
  ]), 2900, c(
    [
      ['för', '向前；进行'],
      ['sig', '自己'],
      ['gå', '走；进行'],
    ],
    '事情自己往前走，合起来就是进行、发生。',
  )),
]

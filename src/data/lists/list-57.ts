import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2801–2850. Primary POS is the high-frequency use, not every sense in the book. */
export const list57: Word[] = [
  freq(verb('bekanta', '结识；熟悉', 'to get to know / to acquaint oneself', 'bekantar', 'bekantade', 'bekantat', 'bekanta', [
    ['Hon bekantar sig med staden.', '她在熟悉这座城市。'],
    ['Vi bekantade oss med grannarna.', '我们结识了邻居。'],
    ['Har du bekantat dig med reglerna?', '你熟悉这些规则了吗？'],
    ['Bekanta dig med köket först.', '先熟悉一下厨房。'],
  ]), 2801, c(
    [
      ['be-', '构词前缀，做成某种状态'],
      ['känd', '被认识的'],
    ],
    '让自己变得“认识”，合起来就是结识、熟悉。',
  )),
  freq(verb('smita', '溜走；逃避', 'to sneak off / to shirk', 'smiter', 'smet', 'smitit', 'smit', [
    ['Han smiter hem före fem.', '他五点前溜回家。'],
    ['Katten smet ut genom luckan.', '猫从小门溜了出去。'],
    ['Hon har smitit från mötet.', '她从会上溜走了。'],
    ['Smit inte i kön.', '别在排队时开溜。'],
  ]), 2802),
  freq(verb('motsätta sig', '反对；抵制', 'to oppose / to object to', 'motsätter sig', 'motsatte sig', 'motsatt sig', 'motsätt sig', [
    ['De motsätter sig förslaget.', '他们反对这个提议。'],
    ['Hon motsatte sig flytten.', '她当时反对搬家。'],
    ['Vi har motsatt oss planen.', '我们已经反对这项计划。'],
    ['Motsätt dig inte utan skäl.', '没有理由就别反对。'],
  ]), 2803, c(
    [
      ['mot', '对着'],
      ['sätta', '放置'],
      ['sig', '自己'],
    ],
    '把自己放在对面，合起来就是反对、抵制。',
  )),
  freq(adj('brun', '棕色的；晒黑的', 'brown / tanned', 'brunt', 'bruna', [
    ['Hon har en brun jacka.', '她有一件棕色外套。'],
    ['Ett brunt bord står där.', '那里放着一张棕色桌子。'],
    ['De bruna skorna är nya.', '那双棕色鞋子是新的。'],
    ['Han blev brun i somras.', '他夏天晒黑了。'],
  ]), 2804),
  freq(adj('irriterande', '恼人的；烦人的', 'irritating / annoying', 'irriterande', 'irriterande', [
    ['Ljudet är irriterande.', '这声音很恼人。'],
    ['Ett irriterande fel dök upp.', '出现了一个烦人的错误。'],
    ['De irriterande samtalen slutade.', '那些烦人的电话停了。'],
    ['Hur irriterande det än är, vänta.', '再烦人也得等。'],
  ]), 2805),
  freq(noun('knep', 'ett', '窍门；招数', 'trick / knack', 'knepet', 'knep', 'knepen', [
    ['Hon visade ett enkelt knep.', '她演示了一个简单窍门。'],
    ['Knepet sitter i handleden.', '窍门在手腕这个动作上。'],
    ['Två knep räcker till tentan.', '两个招数就够应付考试。'],
    ['Knepen lärde hon sig av pappa.', '那些招数是她跟爸爸学的。'],
  ]), 2806),
  freq(other('snarast', 'adv', '尽快；其实更像是', 'as soon as possible / rather', [
    ['Ring snarast i kväll.', '今晚尽快打电话。'],
    ['Svara snarast, tack.', '请尽快回复。'],
    ['Det var snarast ett skämt.', '那其实更像是个玩笑。'],
    ['Hon är snarast trött, inte arg.', '她其实更像是累了，不是生气。'],
  ]), 2807),
  freq(other('otäckt', 'adv', '可怕地；令人难受地', 'nastily / frighteningly', [
    ['Det ser otäckt ut därinne.', '里面看起来很吓人。'],
    ['Hon blev otäckt rädd.', '她吓得不行。'],
    ['Vinden tjöt otäckt i natt.', '夜里风嚎得阴森。'],
    ['Säg inte så otäckt.', '别说得那么吓人。'],
  ]), 2808, c(
    [
      ['otäck', '可怕的；讨厌的'],
      ['-t', '中性/副词词尾'],
    ],
    'otäck 是“可怕的”，otäckt 就是可怕地、令人难受地。',
  )),
  freq(noun('gymnasium', 'ett', '高中（瑞典）', 'upper secondary school', 'gymnasiet', 'gymnasier', null, [
    ['Hon går på gymnasium i stan.', '她在城里上高中。'],
    ['Gymnasiet ligger nära stationen.', '那所高中在车站附近。'],
    ['Två gymnasier delar idrottshall.', '两所高中共用体育馆。'],
    ['Efter gymnasiet ska han plugga vidare.', '高中毕业后他要继续读书。'],
  ]), 2809),
  freq(noun('resurs', 'en', '资源；财力', 'resource', 'resursen', 'resurser', null, [
    ['Tid är en viktig resurs.', '时间是一种重要资源。'],
    ['Resursen räcker inte till alla.', '这点资源不够分给所有人。'],
    ['Skolan behöver fler resurser.', '学校需要更多资源。'],
    ['Använd resursen klokt.', '把这资源用明智些。'],
  ]), 2810),
  freq(other('väster', 'adv', '在西面；向西', 'west / to the west', [
    ['Huset ligger väster om ån.', '房子在河的西面。'],
    ['De bor väster om stan.', '他们住在城西。'],
    ['Skogen ligger väster om vägen.', '树林在路的西面。'],
    ['Gå väster om kyrkan.', '从教堂西边走。'],
  ]), 2811),
  freq(noun('uppfattning', 'en', '看法；理解；感觉', 'opinion / impression / perception', 'uppfattningen', 'uppfattningar', null, [
    ['Jag har en annan uppfattning.', '我有不同的看法。'],
    ['Uppfattningen ändrades efter mötet.', '开完会看法变了。'],
    ['Vi har olika uppfattningar om saken.', '我们对这件事看法不同。'],
    ['Min uppfattning är att vi väntar.', '我的看法是我们再等等。'],
  ]), 2812, c(
    [
      ['uppfatta', '领会；理解'],
      ['-ning', '行为／结果'],
    ],
    '领会之后形成的结果，就是看法、理解。',
  )),
  freq(noun('sherry', 'en', '雪利酒', 'sherry', 'sherryn', null, null, [
    ['Vill du ha sherry före maten?', '吃饭前想喝点雪利酒吗？'],
    ['Sherryn är söt och varm.', '这雪利酒又甜又暖。'],
    ['Hon hällde upp sherry i glasen.', '她把雪利酒倒进杯子里。'],
    ['Vi tar sherry till desserten.', '我们配甜点喝雪利酒。'],
  ]), 2813),
  freq(noun('horn', 'ett', '角；号角；喇叭', 'horn / antler', 'hornet', 'horn', 'hornen', [
    ['Älgen har ett brutet horn.', '这头麋鹿有一只断角。'],
    ['Hornet sitter snett.', '那只角长歪了。'],
    ['Två horn syntes i dimman.', '雾里露出两只角。'],
    ['Hornen ljöd över dalen.', '那些号角声响彻山谷。'],
  ]), 2814),
  freq(noun('foster', 'ett', '胎儿；胚胎', 'foetus / embryo', 'fostret', 'foster', 'fostren', [
    ['Läkaren lyssnade på fostret.', '医生在听胎儿的心跳。'],
    ['Fostret växer som det ska.', '胎儿在正常发育。'],
    ['Två foster syntes på bilden.', '图像上能看见两个胎儿。'],
    ['Fostren mår bra, sa hon.', '她说那些胎儿状况都好。'],
  ]), 2815),
  freq(other('utomhus', 'adv', '在户外；在室外', 'outdoors', [
    ['Vi äter utomhus i kväll.', '我们今晚在户外吃饭。'],
    ['Barnen leker utomhus.', '孩子们在室外玩。'],
    ['Det är kallt utomhus nu.', '现在室外很冷。'],
    ['Ställ cykeln utomhus.', '把自行车放在户外。'],
  ]), 2816, c(
    [
      ['utom', '在……外'],
      ['hus', '房子'],
    ],
    '在房子外面，就是在户外。',
  )),
  freq(noun('kommentar', 'en', '评论；解说', 'comment / commentary', 'kommentaren', 'kommentarer', null, [
    ['Han lämnade en kort kommentar.', '他留了一句简短评论。'],
    ['Kommentaren var onödig.', '那句评论没必要。'],
    ['Flera kommentarer dök upp snabbt.', '好几条评论很快冒了出来。'],
    ['Inga kommentarer, tack.', '请不要评论。'],
  ]), 2817),
  freq(noun('motell', 'ett', '汽车旅馆', 'motel', 'motellet', 'motell', 'motellen', [
    ['Vi sov på ett motell vid vägen.', '我们睡在路边一家汽车旅馆。'],
    ['Motellet hade lediga rum.', '那家汽车旅馆还有空房。'],
    ['Två motell var fullbokade.', '两家汽车旅馆都订满了。'],
    ['Motellen längs E4 är billiga.', 'E4 沿线那些汽车旅馆便宜。'],
  ]), 2818),
  freq(noun('smycke', 'ett', '首饰；饰品', 'piece of jewellery', 'smycket', 'smycken', 'smyckena', [
    ['Hon bar ett enkelt smycke.', '她戴着一件简单的首饰。'],
    ['Smycket glänste i lampan.', '那件首饰在灯下发亮。'],
    ['Två smycken saknades i asket.', '盒子里少了两件饰品。'],
    ['Smyckena ligger i skrinnet.', '那些首饰在首饰盒里。'],
  ]), 2819),
  freq(noun('brådska', 'en', '匆忙；赶时间', 'hurry / rush', 'brådskan', null, null, [
    ['Det är ingen brådska.', '不用赶。'],
    ['Brådskan gjorde henne stressad.', '赶时间让她很紧张。'],
    ['Vi jobbar utan brådska i dag.', '我们今天不赶工。'],
    ['Låt brådskan vänta till i morgon.', '把这股忙乱留到明天。'],
  ]), 2820),
  freq(noun('villa', 'en', '独立住宅；错觉', 'detached house / illusion', 'villan', 'villor', null, [
    ['De bor i en röd villa.', '他们住在一栋红房子里。'],
    ['Villan har en stor trädgård.', '那栋独立住宅有个大花园。'],
    ['Två villor ligger vid sjön.', '湖边有两栋独立住宅。'],
    ['De säljer villan i höst.', '他们秋天卖掉这栋独立住宅。'],
  ]), 2821),
  freq(noun('säsong', 'en', '季节；旺季；赛季', 'season', 'säsongen', 'säsonger', null, [
    ['Jordgubbar har säsong nu.', '草莓现在正当季。'],
    ['Säsongen börjar i augusti.', '这个赛季八月开始。'],
    ['Butiken har två säsonger per år.', '这家店一年有两个旺季。'],
    ['Efter säsongen vilar laget.', '赛季结束后球队休息。'],
  ]), 2822),
  freq(verb('informera', '通知；告知', 'to inform', 'informerar', 'informerade', 'informerat', 'informera', [
    ['Vi informerar er i morgon.', '我们明天通知你们。'],
    ['Hon informerade chefen om felet.', '她把故障告知了主管。'],
    ['Har ni informerat gästerna?', '你们通知客人了吗？'],
    ['Informera oss så fort du vet.', '你一知道就告诉我们。'],
  ]), 2823),
  freq(verb('bevaka', '看守；监视；报道', 'to guard / to watch / to cover (news)', 'bevakar', 'bevakade', 'bevakat', 'bevaka', [
    ['En vakt bevakar ingången.', '一名守卫看着入口。'],
    ['Polisen bevakade torget i natt.', '警察夜里看守着广场。'],
    ['Tidningen har bevakat rättegången.', '报社跟踪报道了这场审判。'],
    ['Bevaka dörren tills jag kommer.', '看着门直到我来。'],
  ]), 2824, c(
    [
      ['be-', '构词前缀'],
      ['vaka', '守夜；看守'],
    ],
    '守在旁边看着，合起来就是看守、监视。',
  )),
  freq(other('gott om', 'phrase', '有的是；充足', 'plenty of', [
    ['Det finns gott om plats här.', '这里地方很宽敞。'],
    ['Vi har gott om kaffe kvar.', '我们还剩不少咖啡。'],
    ['Det fanns gott om folk i parken.', '公园里人很多。'],
    ['Ni har gott om tid till lunchen.', '你们有充足的时间吃午饭。'],
  ]), 2825, c(
    [
      ['gott', '充足；好'],
      ['om', '关于；有'],
    ],
    '“好好地有着”，合起来就是有的是、充足。',
  )),
  freq(other('ensamt', 'adv', '独自地；孤单地', 'alone / in solitude', [
    ['Hon bor ensamt i stugan.', '她独自住在小屋里。'],
    ['Han åt ensamt vid fönstret.', '他独自在窗边吃饭。'],
    ['Barnet lekte ensamt i sanden.', '孩子独自在沙子里玩。'],
    ['Gå inte ensamt dit i natt.', '今晚别独自去那儿。'],
  ]), 2826, c(
    [
      ['ensam', '单独的'],
      ['-t', '中性/副词词尾'],
    ],
    'ensam 是“单独的”，ensamt 就是独自地、孤单地。',
  )),
  freq(verb('imponera', '给人留下深刻印象', 'to impress', 'imponerar', 'imponerade', 'imponerat', 'imponera', [
    ['Resultatet imponerar på oss.', '这个结果让我们刮目相看。'],
    ['Hon imponerade på läraren.', '她给老师留下了深刻印象。'],
    ['Han har imponerat redan första dagen.', '他第一天就已经让人刮目相看。'],
    ['Imponera inte med tomma ord.', '别靠空话来博取印象。'],
  ]), 2827),
  freq(verb('koka', '煮；沸腾', 'to boil / to cook by boiling', 'kokar', 'kokade', 'kokat', 'koka', [
    ['Soppan kokar över.', '汤溢出来了。'],
    ['Hon kokade potatis till middagen.', '她煮了土豆当晚饭。'],
    ['Har du kokat äggen?', '你把鸡蛋煮了吗？'],
    ['Koka pastan i åtta minuter.', '把意大利面煮八分钟。'],
  ]), 2828),
  freq(adj('positiv', '积极的；肯定的；阳性的', 'positive', 'positivt', 'positiva', [
    ['Hon har en positiv attityd.', '她态度很积极。'],
    ['Ett positivt svar kom i dag.', '今天来了肯定的答复。'],
    ['De positiva nyheterna hjälpte.', '那些好消息帮了忙。'],
    ['Stämningen är positiv i laget.', '队里气氛很积极。'],
  ]), 2829),
  freq(noun('status', 'en', '地位；状况', 'status', 'statusen', null, null, [
    ['Yrket har hög status här.', '这职业在这儿地位很高。'],
    ['Statusen i gruppen ändrades.', '团体里的地位变了。'],
    ['Vad är status på ärendet?', '这件事目前状况如何？'],
    ['Hon fick status som expert.', '她获得了专家身份。'],
  ]), 2830),
  freq(noun('stöld', 'en', '盗窃；偷窃', 'theft', 'stölden', 'stölder', null, [
    ['Polisen utreder en stöld.', '警察在调查一起盗窃。'],
    ['Stölden skedde i natt.', '那起盗窃发生在夜里。'],
    ['Flera stölder har anmälts.', '已经报案了好几起偷窃。'],
    ['Efter stölden bytte de lås.', '失窃之后他们换了锁。'],
  ]), 2831),
  freq(other('så pass', 'phrase', '那么；到那种程度', 'so / to that extent', [
    ['Är du så pass trött redan?', '你已经累成这样了吗？'],
    ['Det var så pass dyrt att vi gick.', '贵到那个份上我们就走了。'],
    ['Hon kan så pass svenska nu.', '她瑞典语已经到那个程度了。'],
    ['Så pass mycket visste jag inte.', '我还不知道有那么多。'],
  ]), 2832, c(
    [
      ['så', '那么'],
      ['pass', '程度'],
    ],
    '到“那么”的那个程度，就是那么、到那种程度。',
  )),
  freq(noun('vite', 'ett', '罚款；罚金（未履行义务）', 'penalty / fine', 'vitet', 'viten', 'vitena', [
    ['Bolaget fick ett vite.', '公司被处以一笔罚款。'],
    ['Vitet ska betalas i maj.', '这笔罚金五月要交。'],
    ['Två viten utfärdades i år.', '今年开出了两笔罚款。'],
    ['Vitena blev högre än väntat.', '那些罚金比预期更高。'],
  ]), 2833),
  freq(other('i mitten av', 'phrase', '在……中间；在……中旬', 'in the middle of', [
    ['Vi ses i mitten av maj.', '我们五月中旬见。'],
    ['Huset ligger i mitten av byn.', '房子在村子中间。'],
    ['I mitten av filmen somnade hon.', '电影放到中间她睡着了。'],
    ['Betala i mitten av månaden.', '月中付款。'],
  ]), 2834, c(
    [
      ['i', '在'],
      ['mitten', '中间'],
      ['av', '的'],
    ],
    '在某事物的中间，就是在……中间、中旬。',
  )),
  freq(noun('anteckning', 'en', '笔记；记录', 'note', 'anteckningen', 'anteckningar', null, [
    ['Hon gjorde en kort anteckning.', '她记了一小段笔记。'],
    ['Anteckningen låg i boken.', '那条记录夹在书里。'],
    ['Jag har tre anteckningar kvar.', '我还剩三条笔记。'],
    ['Läs anteckningarna före provet.', '考试前把那些笔记看一遍。'],
  ]), 2835, c(
    [
      ['anteckna', '记下'],
      ['-ning', '行为／结果'],
    ],
    '记下来的结果，就是笔记、记录。',
  )),
  freq(adj('internationell', '国际的', 'international', 'internationellt', 'internationella', [
    ['Det är en internationell mässa.', '这是一场国际博览会。'],
    ['Ett internationellt lag vann.', '一支国际队赢了。'],
    ['De internationella reglerna gäller.', '那些国际规则适用。'],
    ['Flyget är internationellt härifrån.', '从这儿起飞是国际航班。'],
  ]), 2836, c(
    [
      ['inter-', '之间'],
      ['nationell', '国家的'],
    ],
    '国家与国家之间的，就是国际的。',
  )),
  freq(verb('sopa', '扫；扫除', 'to sweep', 'sopar', 'sopade', 'sopat', 'sopa', [
    ['Hon sopar köket varje morgon.', '她每天早上扫厨房。'],
    ['Han sopade snön från trappan.', '他把台阶上的雪扫掉了。'],
    ['Vi har sopat hela gården.', '我们把整个院子都扫了。'],
    ['Sopa undan smulorna, tack.', '请把碎屑扫掉。'],
  ]), 2837),
  freq(noun('skal', 'ett', '壳；皮；外层', 'shell / peel / rind', 'skalet', 'skal', 'skalen', [
    ['Ägget har ett tunt skal.', '这鸡蛋壳很薄。'],
    ['Skalet på apelsinen är tjockt.', '这橙子的皮很厚。'],
    ['Lägg skalen i komposten.', '把那些果皮放进堆肥。'],
    ['Kräftorna lämnade skal på bordet.', '小龙虾在桌上留下了壳。'],
  ]), 2838),
  freq(noun('ambassadör', 'en', '大使', 'ambassador', 'ambassadören', 'ambassadörer', null, [
    ['Hon är ambassadör i Oslo.', '她是驻奥斯陆大使。'],
    ['Ambassadören talade i radio.', '那位大使在电台讲话。'],
    ['Två ambassadörer möttes i dag.', '两位大使今天会面了。'],
    ['Fråga ambassadören om visum.', '向大使询问签证的事。'],
  ]), 2839, c(
    [
      ['ambassad', '大使馆'],
      ['-ör', '……的人'],
    ],
    '大使馆的负责人，就是大使。',
  )),
  freq(other('däremot', 'adv', '相反；不过；却', 'on the other hand / however', [
    ['Jag gillar te. Däremot hatar jag kaffe.', '我喜欢茶。不过我讨厌咖啡。'],
    ['Han kom inte. Hon däremot var tidig.', '他没来。她倒是来得很早。'],
    ['Priset är högt. Kvaliteten är däremot bra.', '价格高。质量倒是好。'],
    ['Däremot kan vi träffas i morgon.', '不过我们明天可以见面。'],
  ]), 2840, c(
    [
      ['där', '那里'],
      ['emot', '对着'],
    ],
    '对着那边反过来，合起来就是相反、不过。',
  )),
  freq(other('i närheten av', 'phrase', '在……附近', 'near / in the vicinity of', [
    ['Vi bor i närheten av skolan.', '我们住在学校附近。'],
    ['Hotellet ligger i närheten av stationen.', '旅馆在车站附近。'],
    ['Finns det en bank i närheten av torget?', '广场附近有银行吗？'],
    ['Parkera i närheten av ingången.', '把车停在入口附近。'],
  ]), 2841, c(
    [
      ['i', '在'],
      ['närheten', '附近'],
      ['av', '的'],
    ],
    '在某地的附近，就是在……附近。',
  )),
  freq(noun('täckmantel', 'en', '幌子；掩护', 'cover / front', 'täckmanteln', 'täckmantlar', null, [
    ['Företaget var en täckmantel.', '那家公司是个幌子。'],
    ['Täckmanteln räckte inte länge.', '这个掩护没撑多久。'],
    ['De använde två täckmantlar.', '他们用了两层幌子。'],
    ['Släpp täckmanteln nu.', '现在把这层掩护揭掉。'],
  ]), 2842, c(
    [
      ['täcka', '遮盖'],
      ['mantel', '外套；罩袍'],
    ],
    '用来遮盖的外衣，合起来就是幌子、掩护。',
  )),
  freq(noun('britt', 'en', '英国人', 'Briton', 'britten', 'britter', null, [
    ['Min granne är britt.', '我邻居是英国人。'],
    ['Britten pratade långsamt.', '那位英国人说得很慢。'],
    ['Flera britter bor i huset.', '这栋楼里住着好几位英国人。'],
    ['Fråga britten om vägen.', '问问那位英国人路怎么走。'],
  ]), 2843),
  freq(noun('sår', 'ett', '伤口；创伤', 'wound / sore', 'såret', 'sår', 'såren', [
    ['Han fick ett sår i handen.', '他手上破了个口。'],
    ['Såret läkte på en vecka.', '那个伤口一周就好了。'],
    ['Två sår måste rensas.', '有两处伤口要清理。'],
    ['Såren gör fortfarande ont.', '那些伤口还在疼。'],
  ]), 2844),
  freq(noun('charm', 'en', '魅力；吸引力', 'charm', 'charmen', null, null, [
    ['Hon har en naturlig charm.', '她有一种自然的魅力。'],
    ['Charmen sitter i leendet.', '魅力在那笑容里。'],
    ['Staden har kvar sin gamla charm.', '这座城市还留着往日的魅力。'],
    ['Använd inte charmen till att luras.', '别用魅力去骗人。'],
  ]), 2845),
  freq(noun('hugg', 'ett', '一砍；一刺；一击', 'blow / slash / cut', 'hugget', 'hugg', 'huggen', [
    ['Yxan gav ett rent hugg.', '斧子砍得很干净。'],
    ['Hugget träffade stammen.', '那一砍砍在树干上。'],
    ['Två hugg räckte för veden.', '砍两下柴就够了。'],
    ['Huggen i dörren är djupa.', '门上那些砍痕很深。'],
  ]), 2846),
  freq(noun('balans', 'en', '平衡；均衡', 'balance / equilibrium', 'balansen', null, null, [
    ['Hon höll balansen på bommen.', '她在平衡木上保持住了平衡。'],
    ['Balansen i laget är bra.', '这支队伍的均衡很好。'],
    ['Han miste balansen i bussen.', '他在公交车上失去了平衡。'],
    ['Hitta balansen mellan jobb och vila.', '在工作和休息之间找到平衡。'],
  ]), 2847),
  freq(noun('id', 'ett', '身份证明；ID', 'ID / identity document', null, null, null, [
    ['Visa id vid luckan.', '在窗口出示身份证明。'],
    ['Hon glömde id hemma.', '她把身份证忘在家里了。'],
    ['Ta med id till banken.', '去银行要带身份证明。'],
    ['Id ligger i innerfickan.', '身份证在内袋里。'],
  ]), 2848),
  freq(verb('servera', '端上；招待', 'to serve / to wait on', 'serverar', 'serverade', 'serverat', 'servera', [
    ['De serverar lunch från elva.', '他们从十一点起供应午餐。'],
    ['Hon serverade te till gästerna.', '她给客人端上了茶。'],
    ['Har ni serverat desserten än?', '你们上甜点了吗？'],
    ['Servera brödet varmt, tack.', '请趁热上面包。'],
  ]), 2849),
  freq(verb('beskydda', '保护；庇护', 'to protect / to shelter', 'beskyddar', 'beskyddade', 'beskyddat', 'beskydda', [
    ['Lagen beskyddar barnen.', '法律保护儿童。'],
    ['Hon beskyddade den svagare eleven.', '她庇护了那个较弱的学生。'],
    ['De har beskyddat vittnet länge.', '他们保护证人已经很久了。'],
    ['Beskydda inte den som ljuger.', '别庇护说谎的人。'],
  ]), 2850, c(
    [
      ['be-', '构词前缀'],
      ['skydda', '保护'],
    ],
    '加强“保护”这个动作，合起来就是保护、庇护。',
  )),
]

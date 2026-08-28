import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2601–2650. Primary POS is the high-frequency use, not every sense in the book. */
export const list53: Word[] = [
  freq(noun('troll', 'ett', '巨魔；山怪', 'troll', 'trollet', 'troll', 'trollen', [
    ['Ett troll står i sagoboken.', '故事书里站着一个山怪。'],
    ['Trollet är stort och fult.', '那个巨魔又大又丑。'],
    ['Barnen räknade tre troll på bilden.', '孩子们数出画上有三个山怪。'],
    ['Trollen vaknar först i skymningen.', '那些巨魔到黄昏才醒来。'],
  ]), 2601),
  freq(adj('orange', '橙色的', 'orange', 'orange', 'orange', [
    ['Hon har en orange jacka.', '她有一件橙色夹克。'],
    ['Ett orange ljus syntes i fönstret.', '窗户里透出一道橙色的光。'],
    ['De orange stolarnas tyger bleknade.', '那些橙色椅子的布褪了色。'],
    ['Himlen blev orange vid solnedgången.', '日落时天空变成橙色。'],
  ]), 2602),
  freq(verb('ignorera', '忽视；不理', 'to ignore', 'ignorerar', 'ignorerade', 'ignorerat', 'ignorera', [
    ['Hon ignorerar mejlet än.', '她还在不理那封邮件。'],
    ['De ignorerade varningen i går.', '他们昨天没把警告当回事。'],
    ['Han har ignorerat oss hela dan.', '他一整天都不理我们。'],
    ['Ignorera inte frågan.', '别回避这个问题。'],
  ]), 2603),
  freq(noun('rådgivare', 'en', '顾问', 'advisor / counsellor', 'rådgivaren', 'rådgivare', 'rådgivarna', [
    ['Företaget anlitade en rådgivare.', '公司请了一位顾问。'],
    ['Rådgivaren lyssnade länge.', '那位顾问听了很久。'],
    ['Två rådgivare satt med på mötet.', '两位顾问列席了会议。'],
    ['Rådgivarna föreslog en annan väg.', '那些顾问建议换一条路。'],
  ]), 2604, c(
    [
      ['råd', '建议'],
      ['givare', '给予的人'],
    ],
    '给建议的人，就是顾问。',
  )),
  freq(adj('kåt', '性欲上来的（口）', 'horny (colloquial)', 'kåt', 'kåta', [
    ['Han kände sig kåt.', '他觉得性欲上来了。'],
    ['Ett kåt leende.', '一个色色的笑。'],
    ['De kåta skämten passade inte.', '那些带黄色的玩笑不合适。'],
    ['Hon blev kåt av kyssen.', '那个吻让她性欲上来了。'],
  ], undefined, ['slang']), 2605),
  freq(noun('telefonsamtal', 'ett', '电话通话', 'phone call', 'telefonsamtalet', 'telefonsamtal', 'telefonsamtalen', [
    ['Jag väntar på ett telefonsamtal.', '我在等一个电话。'],
    ['Telefonsamtalet tog tjugo minuter.', '那通电话打了二十分钟。'],
    ['Hon hade tre telefonsamtal före lunch.', '午饭前她打了三个电话。'],
    ['Telefonsamtalen spelades in.', '那些通话被录了下来。'],
  ]), 2606, c(
    [
      ['telefon', '电话'],
      ['samtal', '谈话'],
    ],
    '用电话进行的谈话，就是电话通话。',
  )),
  freq(adj('sexuell', '性的；与性有关的', 'sexual', 'sexuellt', 'sexuella', [
    ['Det var en sexuell relation.', '那是一段性关系。'],
    ['Ett sexuellt övergrepp anmäldes.', '一起性侵被报了案。'],
    ['De sexuella frågorna togs upp i klassen.', '那些与性有关的问题在课堂上提了。'],
    ['Filmen har sexuell handling.', '这部电影有色情情节。'],
  ]), 2607),
  freq(adj('rejäl', '结实的；像样的；靠得住的', 'solid / proper / reliable', 'rejält', 'rejäla', [
    ['En rejäl frukost mättade oss.', '一顿像样的早餐让我们吃饱了。'],
    ['Ett rejält hus vid sjön.', '湖边一栋结实的大房子。'],
    ['De rejäla skorna håller länge.', '那些结实的鞋很耐穿。'],
    ['Han är en rejäl person.', '他是个靠得住的人。'],
  ]), 2608),
  freq(verb('garantera', '保证；担保', 'to guarantee', 'garanterar', 'garanterade', 'garanterat', 'garantera', [
    ['Vi garanterar leverans i morgon.', '我们保证明天送到。'],
    ['Butiken garanterade kvaliteten.', '商店为质量作了担保。'],
    ['Säkerheten har garanterats skriftligt.', '安全已经书面保证了。'],
    ['Garantera inget du inte kan hålla.', '做不到的事别打包票。'],
  ]), 2609),
  freq(verb('krama', '拥抱；挤压', 'to hug / to squeeze', 'kramar', 'kramade', 'kramat', 'krama', [
    ['Hon kramar sin mamma.', '她搂着妈妈。'],
    ['De kramade varandra.', '他们互相拥抱。'],
    ['Citronsaften är redan kramad.', '柠檬汁已经挤出来了。'],
    ['Krama mig!', '抱抱我！'],
  ]), 2610),
  freq(verb('anklaga', '指控；指责', 'to accuse / to charge', 'anklagar', 'anklagade', 'anklagat', 'anklaga', [
    ['De anklagar honom för stöld.', '他们指控他偷窃。'],
    ['Hon anklagade chefen offentligt.', '她公开指责了老板。'],
    ['Han har anklagats för mord.', '他被指控谋杀。'],
    ['Anklaga inte utan bevis.', '没有证据别指责。'],
  ]), 2611, c(
    [
      ['an-', '朝向；对着'],
      ['klaga', '抱怨；控告'],
    ],
    '“对着别人控诉”，合起来就是指控、指责。',
  )),
  freq(adj('medvetslös', '昏迷的；不省人事的', 'unconscious', 'medvetslöst', 'medvetslösa', [
    ['Han var medvetslös efter slaget.', '挨打之后他昏迷了。'],
    ['Ett medvetslöst barn bars ut.', '一个昏迷的孩子被抬了出去。'],
    ['De medvetslösa patienterna övervakades.', '那些昏迷的病人在受监护。'],
    ['Hon föll medvetslös till golvet.', '她昏迷着倒在地板上。'],
  ]), 2612, c(
    [
      ['medvet', '意识（词干，同 medveten）'],
      ['-slös', '没有的'],
    ],
    '“没有意识的”，就是昏迷的、不省人事的。',
  )),
  freq(noun('hälsning', 'en', '问候；致意', 'greeting', 'hälsningen', 'hälsningar', null, [
    ['Skicka en hälsning till mamma.', '向妈妈问个好。'],
    ['Hälsningen i mailet var kort.', '邮件里的问候很短。'],
    ['Vi fick flera hälsningar från klassen.', '我们收到班上好几句问候。'],
    ['Skriv hälsningen överst.', '把问候写在最上面。'],
  ]), 2613, c(
    [
      ['hälsa', '问好'],
      ['-ning', '行为／结果'],
    ],
    '问好这件事，合起来就是问候、致意。',
  )),
  freq(noun('parfym', 'en', '香水', 'perfume', 'parfymen', 'parfymer', 'parfymerna', [
    ['Hon köpte en ny parfym.', '她买了一款新香水。'],
    ['Parfymen doftar starkt.', '这款香水味道很冲。'],
    ['Flera parfymer testades.', '试了好几款香水。'],
    ['Parfymerna stod i fönstret.', '那些香水摆在橱窗里。'],
  ]), 2614),
  freq(noun('fas', 'en', '阶段；相位', 'phase', 'fasen', 'faser', 'faserna', [
    ['Projektet går in i en ny fas.', '项目进入一个新阶段。'],
    ['Fasen blev längre än väntat.', '这个阶段比预想的长。'],
    ['Månen har flera faser.', '月亮有好几个相位。'],
    ['Faserna avlöste varandra.', '那些阶段一个接一个。'],
  ]), 2615),
  freq(noun('tuggummi', 'ett', '口香糖', 'chewing gum', 'tuggummit', 'tuggummin', 'tuggummina', [
    ['Vill du ha ett tuggummi?', '你要一块口香糖吗？'],
    ['Tuggummit sitter under stolen.', '那块口香糖粘在椅子底下。'],
    ['Hon köpte tre tuggummin i kiosken.', '她在售货亭买了三块口香糖。'],
    ['Tuggummina ska slängas i papperskorgen.', '那些口香糖要扔进垃圾桶。'],
  ]), 2616, c(
    [
      ['tugga', '嚼'],
      ['gummi', '橡胶'],
    ],
    '拿来嚼的橡胶糖，就是口香糖。',
  )),
  freq(noun('dricks', 'en', '小费', 'tip / gratuity', 'dricksen', null, null, [
    ['Är dricksen inräknad?', '小费包含在内了吗？'],
    ['Lämna dricks till servitören.', '给服务员留点小费。'],
    ['Dricksen var generös.', '那笔小费很大方。'],
    ['Ingen dricks behövs här.', '这里不用给小费。'],
  ]), 2617, c(
    [
      ['dricka', '喝'],
      ['-s', '名词词尾（钱）'],
    ],
    '由“喝酒的钱”缩来，就是小费。完整说法是 drickspengar。',
  )),
  freq(noun('brottsling', 'en', '罪犯', 'criminal', 'brottslingen', 'brottslingar', 'brottslingarna', [
    ['En brottsling rymde från fängelset.', '一名罪犯从监狱逃走了。'],
    ['Brottslingen greps i natt.', '那个罪犯夜里被抓住了。'],
    ['Polisen jagar flera brottslingar.', '警察在追捕好几名罪犯。'],
    ['Brottslingarna dömdes till fängelse.', '那些罪犯被判了刑。'],
  ]), 2618, c(
    [
      ['brott', '罪行'],
      ['-ling', '一类人'],
    ],
    '“犯了罪的那一类人”，就是罪犯。',
  )),
  freq(noun('maffia', 'en', '黑手党；黑帮', 'mafia', 'maffian', 'maffior', 'maffiorna', [
    ['En maffia växte fram i staden.', '城里兴起了一个黑帮。'],
    ['Maffian styrde hamnen.', '黑手党控制着港口。'],
    ['Olika maffior slogs om området.', '不同黑帮在抢地盘。'],
    ['Maffiorna tystnade efter razzian.', '突袭之后那些黑帮消停了。'],
  ]), 2619),
  freq(noun('skurk', 'en', '坏蛋；反派', 'villain / crook / scoundrel', 'skurken', 'skurkar', 'skurkarna', [
    ['En skurk stal väskan.', '一个坏蛋偷了包。'],
    ['Skurken lurade de gamla.', '那个坏蛋骗了老人。'],
    ['Filmen har två skurkar.', '这部电影有两个反派。'],
    ['Skurkarna greps till slut.', '那些坏蛋终于被抓住了。'],
  ]), 2620),
  freq(noun('förräderi', 'ett', '背叛；叛国', 'betrayal / treason', 'förräderiet', 'förräderier', 'förräderierna', [
    ['Det var ett förräderi mot vännerna.', '那是对朋友的背叛。'],
    ['Förräderiet avslöjades i tid.', '这场背叛及时被揭穿了。'],
    ['Flera förräderier skakade landet.', '几起叛国事件震动了国家。'],
    ['Förräderierna ledde till rättegång.', '那些背叛招来了审判。'],
  ]), 2621, c(
    [
      ['förråda', '出卖；背叛'],
      ['-eri', '行为名词后缀'],
    ],
    '由“背叛”这个动作变成名词，就是一次背叛、叛国。',
  )),
  freq(noun('utbyte', 'ett', '交换；收获；收益', 'exchange / benefit / yield', 'utbytet', 'utbyten', 'utbytena', [
    ['Vi har utbyte av varandra.', '我们互相有收获。'],
    ['Utbytet av fångar skedde i natt.', '交换俘虏发生在夜里。'],
    ['Kulturella utbyten är viktiga.', '文化交流很重要。'],
    ['Utbytena gynnade båda länderna.', '那些交流对两国都有好处。'],
  ]), 2622, c(
    [
      ['ut', '出去'],
      ['byte', '交换'],
    ],
    '“换出去”，就是交换；换来的东西也可以指收获、收益。',
  )),
  freq(noun('over', 'en', '一轮六球（板球）', 'over (cricket)', null, 'overs', null, [
    ['Kastaren avslutade en over.', '投手投完了一轮六球。'],
    ['Efter over bytte de sida.', '这一轮结束后他们换了边。'],
    ['Matchen hade många overs.', '这场比赛有很多轮投球。'],
    ['Räkna bollarna i varje over.', '数一数每一轮里的球。'],
  ]), 2623),
  freq(adj('livrädd', '怕得要命的', 'terrified', 'livrädd', 'livrädda', [
    ['Hon är livrädd för ormar.', '她怕蛇怕得要命。'],
    ['Barnet var livrädd och gömde sig.', '孩子怕得要命，躲了起来。'],
    ['De livrädda resenärerna vägrade gå ombord.', '那些吓破胆的旅客不肯上船。'],
    ['Jag blev livrädd när larmet ljöd.', '警报响起时我怕得要命。'],
  ]), 2624, c(
    [
      ['liv', '命'],
      ['rädd', '害怕的'],
    ],
    '怕到要命的程度，就是怕得要命。',
  )),
  freq(verb('knäppa', '扣上；发出啪嗒声；按快门', 'to button / to click / to snap (a photo)', 'knäpper', 'knäppte', 'knäppt', 'knäpp', [
    ['Knäpp jackan, det är kallt.', '把夹克扣上，天很冷。'],
    ['Det knäpper i elementet.', '暖气片在啪嗒作响。'],
    ['Hon knäppte en bild.', '她按快门拍了一张。'],
    ['Han har knäppt byxorna.', '他把裤子扣好了。'],
  ]), 2625),
  freq(noun('gitarr', 'en', '吉他', 'guitar', 'gitarren', 'gitarrer', null, [
    ['Han spelar gitarr i bandet.', '他在乐队里弹吉他。'],
    ['Gitarren saknar en sträng.', '这把吉他少了一根弦。'],
    ['Två gitarrer stod mot väggen.', '两把吉他靠在墙上。'],
    ['Stäm gitarren före konserten.', '演出前把吉他调好音。'],
  ]), 2626),
  freq(noun('utmaning', 'en', '挑战', 'challenge', 'utmaningen', 'utmaningar', null, [
    ['Det är en stor utmaning för laget.', '这对球队是个大挑战。'],
    ['Utmaningen lockade henne.', '这个挑战吸引了她。'],
    ['Jobbet ger nya utmaningar varje vecka.', '这工作每周都有新挑战。'],
    ['Ta utmaningen om du vågar.', '你敢的话就接受这个挑战。'],
  ]), 2627, c(
    [
      ['utmana', '挑战'],
      ['-ning', '行为／结果'],
    ],
    '挑战这件事，合起来就是一次挑战。',
  )),
  freq(adj('dödlig', '致命的；会死的', 'fatal / deadly / mortal', 'dödligt', 'dödliga', [
    ['En dödlig olycka inträffade.', '发生了一场致命事故。'],
    ['Ett dödligt gift läckte ut.', '一种致命的毒物漏了出来。'],
    ['De dödliga skotten hördes i natt.', '那些致命的枪声夜里能听见。'],
    ['Vi är alla dödliga.', '我们都是会死的。'],
  ]), 2628, c(
    [
      ['död', '死亡'],
      ['-lig', '……的'],
    ],
    '“跟死亡有关的”，就是致命的，也可以指凡人会死。',
  )),
  freq(adj('paranoid', '偏执的；多疑的', 'paranoid', 'paranoidt', 'paranoida', [
    ['Han blev paranoid efter inbrottet.', '入室盗窃之后他变得多疑了。'],
    ['Ett paranoidt drag syntes i blicken.', '眼神里看得出一种偏执。'],
    ['De paranoida tankarna släppte inte.', '那些多疑的念头挥之不去。'],
    ['Var inte så paranoid.', '别这么疑神疑鬼。'],
  ]), 2629),
  freq(noun('stress', 'en', '压力；紧张', 'stress', 'stressen', null, null, [
    ['Hon känner stress inför tentan.', '她面对考试感到压力。'],
    ['Stressen gör det svårt att sova.', '这种紧张让人难以入睡。'],
    ['Mindre stress hjälper kroppen.', '少一点压力对身体有好处。'],
    ['Släpp stressen över helgen.', '周末把压力放下。'],
  ]), 2630),
  freq(noun('byrå', 'en', '抽屉柜；事务所', 'chest of drawers / bureau / agency', 'byrån', 'byråer', 'byråerna', [
    ['Nycklarna ligger i byrån.', '钥匙在抽屉柜里。'],
    ['Byrån är av ek.', '这只抽屉柜是橡木的。'],
    ['Hon jobbar på en resebyrå.', '她在一家旅行社工作。'],
    ['Byråerna stänger tidigt på fredag.', '那些事务所周五关门早。'],
  ]), 2631),
  freq(noun('biff', 'en', '牛排；牛肉', 'steak / beef', 'biffen', 'biffar', null, [
    ['Vi äter biff med potatis.', '我们吃牛排配土豆。'],
    ['Biffen är stekt för hårt.', '这块牛排煎得太老。'],
    ['Kocken stekte tre biffar.', '厨师煎了三块牛排。'],
    ['Vänd biffen efter två minuter.', '两分钟后把牛排翻面。'],
  ]), 2632),
  freq(other('bakifrån', 'adv', '从后面', 'from behind', [
    ['Någon ropade bakifrån.', '有人从后面喊。'],
    ['Bilen körde på oss bakifrån.', '那辆车从后面撞了我们。'],
    ['Hon kom bakifrån i kön.', '她从队列后面过来。'],
    ['Titta bakifrån så syns numret.', '从后面看能看见号码。'],
  ]), 2633, c(
    [
      ['bak', '后面'],
      ['ifrån', '从……而来'],
    ],
    '从后面过来，就是从后面。',
  )),
  freq(noun('poesi', 'en', '诗；诗歌', 'poetry', 'poesin', 'poesier', 'poesierna', [
    ['Han älskar poesi.', '他热爱诗歌。'],
    ['Poesin rörde henne djupt.', '那些诗深深打动了她。'],
    ['Hon läste flera poesier högt.', '她大声读了好几首诗。'],
    ['Poesierna samlades i en bok.', '那些诗收进了一本书。'],
  ]), 2634),
  freq(noun('bacon', 'ett', '培根', 'bacon', 'baconet', null, null, [
    ['Vi steker bacon till frukost.', '我们早餐煎培根。'],
    ['Baconet doftar i köket.', '厨房里能闻到培根味。'],
    ['Hon åt bacon med ägg.', '她培根配鸡蛋吃。'],
    ['Lägg baconet på papper.', '把培根放到纸上。'],
  ]), 2635),
  freq(adj('våldsam', '猛烈的；暴力的', 'violent / fierce', 'våldsamt', 'våldsamma', [
    ['En våldsam brand bröt ut.', '一场猛烈的大火烧了起来。'],
    ['Ett våldsamt oväder drog in.', '一场猛烈的暴风雨来了。'],
    ['De våldsamma scenerna klipptes bort.', '那些暴力场面被剪掉了。'],
    ['Han är inte en våldsam man.', '他不是个爱动粗的人。'],
  ], { comparative: 'våldsammare', superlative: 'våldsammast' }), 2636, c(
    [
      ['våld', '暴力'],
      ['-sam', '带有……的'],
    ],
    '“带着暴力的”，就是猛烈的、暴力的。',
  )),
  freq(noun('stöt', 'en', '撞击；电击；入室盗窃（口）', 'jolt / shock / (colloquial) break-in', 'stöten', 'stötar', 'stötarna', [
    ['Bilen gav en hård stöt.', '车猛地撞了一下。'],
    ['Stöten från elen var obehaglig.', '那一下电击很不舒服。'],
    ['De planerade en stöt mot banken.', '他们计划对银行下手。'],
    ['Stötarna kom tätt efter varandra.', '那些撞击一下接一下。'],
  ]), 2637),
  freq(noun('brygga', 'en', '码头；栈桥；牙桥', 'jetty / pier / dental bridge', 'bryggan', 'bryggor', 'bryggorna', [
    ['Båten låg vid bryggan.', '船停在码头边。'],
    ['En brygga leder ut i sjön.', '一座栈桥伸进湖里。'],
    ['Tandläkaren satte in tre bryggor.', '牙医装了三座牙桥。'],
    ['Bryggorna längs stranden är gamla.', '岸边那些码头很旧。'],
  ]), 2638),
  freq(noun('slips', 'en', '领带', 'tie', 'slipsen', 'slipsar', 'slipsarna', [
    ['Han knöt slipsen noga.', '他仔细打好领带。'],
    ['Slipsen passar till skjortan.', '这条领带和衬衫相配。'],
    ['Han äger flera slipsar.', '他有好几条领带。'],
    ['Slipsarna hänger i garderoben.', '那些领带挂在衣柜里。'],
  ]), 2639),
  freq(verb('förvandla', '变成；使转变', 'to transform / to turn into', 'förvandlar', 'förvandlade', 'förvandlat', 'förvandla', [
    ['Häxan förvandlar prinsen till en groda.', '女巫把王子变成一只青蛙。'],
    ['Huset förvandlades till ett kafé.', '那栋房子被改成了咖啡馆。'],
    ['Staden har förvandlats på tio år.', '这座城十年里变了样。'],
    ['Förvandla inte allt till ett skämt.', '别把什么都变成玩笑。'],
  ]), 2640, c(
    [
      ['för-', '构词前缀，做成彻底的变化'],
      ['vandla', '转变（构词词根，同 vända）'],
    ],
    '“彻底转过去”，合起来就是变成、使转变。',
  )),
  freq(noun('slant', 'en', '硬币；一点钱', 'coin / small change', 'slanten', 'slantar', 'slantarna', [
    ['Han kastade en slant i hatten.', '他把一枚硬币丢进帽子里。'],
    ['Slanten räckte till en kaffe.', '这点钱够买杯咖啡。'],
    ['Barnen samlade slantar.', '孩子们攒硬币。'],
    ['Slantarna låg på bordet.', '那些硬币在桌上。'],
  ]), 2641),
  freq(noun('baron', 'en', '男爵', 'baron', 'baronen', 'baroner', 'baronerna', [
    ['En baron ägde godset.', '一位男爵拥有这座庄园。'],
    ['Baronen tog emot gästerna.', '男爵接待了客人。'],
    ['Flera baroner satt i salen.', '好几位男爵坐在大厅里。'],
    ['Baronerna röstade nej.', '那些男爵投了反对票。'],
  ]), 2642),
  freq(other('främst', 'adv', '首先；主要', 'primarily / first and foremost', [
    ['Först och främst måste vi vila.', '首先我们得休息。'],
    ['Hon jobbar främst med barn.', '她主要跟孩子打交道。'],
    ['Felet beror främst på vädret.', '问题主要出在天气上。'],
    ['Främst vill jag tacka er.', '我首先想谢谢你们。'],
  ]), 2643, c(
    [
      ['främ', '更前面的（fram 的比较）'],
      ['-st', '最高级'],
    ],
    '“最前面”，作副词就是首先、主要。词库里已有定式形容词 främsta。',
  )),
  freq(noun('spruta', 'en', '注射器；喷壶', 'syringe / sprayer', 'sprutan', 'sprutor', 'sprutorna', [
    ['Läkaren tog fram en spruta.', '医生拿出一支注射器。'],
    ['Sprutan låg på brickan.', '那支注射器在托盘上。'],
    ['Vi köpte två sprutor till blommorna.', '我们给花买了两把喷壶。'],
    ['Sprutorna måste kastas efteråt.', '那些注射器用完必须扔掉。'],
  ]), 2644),
  freq(adj('allierad', '结盟的；同盟的', 'allied', 'allierat', 'allierade', [
    ['Ett allierat land skickade hjälp.', '一个盟国派来了援助。'],
    ['Hon är allierad med oppositionen.', '她跟反对派结盟。'],
    ['De allierade vann kriget.', '盟军打赢了战争。'],
    ['Vi behöver allierade i styrelsen.', '我们在董事会里需要盟友。'],
  ]), 2645, c(
    [
      ['alliera', '结盟'],
      ['-ad', '过去分词'],
    ],
    '已经结成联盟的，就是结盟的、同盟的。',
  )),
  freq(other('ovanligt', 'adv', '不寻常地；格外', 'unusually', [
    ['Det är ovanligt tyst i huset.', '房子里出奇地安静。'],
    ['Hon kom ovanligt tidigt i dag.', '她今天来得格外早。'],
    ['Vintern blev ovanligt mild.', '这个冬天出奇地暖和。'],
    ['Han svarade ovanligt kort.', '他回答得格外简短。'],
  ]), 2646, c(
    [
      ['ovanlig', '不寻常的'],
      ['-t', '中性/副词词尾'],
    ],
    'ovanlig 是“不寻常的”，ovanligt 就是不寻常地、格外。',
  )),
  freq(noun('terrorist', 'en', '恐怖分子', 'terrorist', 'terroristen', 'terrorister', null, [
    ['En terrorist greps på flygplatsen.', '一名恐怖分子在机场被抓住。'],
    ['Terroristen fördes bort i handbojor.', '那个恐怖分子戴着手铐被带走。'],
    ['Polisen sökte tre terrorister.', '警察在找三名恐怖分子。'],
    ['Rapporten nämner terroristen vid namn.', '报告点了那个恐怖分子的名字。'],
  ]), 2647, c(
    [
      ['terror', '恐怖'],
      ['-ist', '从事的人'],
    ],
    '从事恐怖活动的人，就是恐怖分子。',
  )),
  freq(adj('förlorad', '失去的；输掉的；无可救药的', 'lost / defeated / doomed', 'förlorat', 'förlorade', [
    ['Det var en förlorad match.', '那是一场输掉的比赛。'],
    ['Ett förlorat år gick inte att få tillbaka.', '失去的一年找不回来。'],
    ['De förlorade nycklarna hittades.', '那些丢失的钥匙找到了。'],
    ['Han kände sig förlorad i stan.', '他在城里觉得自己迷路了。'],
  ]), 2648, c(
    [
      ['förlora', '失去；输掉'],
      ['-ad', '过去分词'],
    ],
    '被失去、被输掉的，就是失去的、输掉的，也可以指无可救药。',
  )),
  freq(other('vägnar', 'phrase', '以……的名义（på ngns vägnar）', 'on behalf of (in på ngns vägnar)', [
    ['Jag talar på chefens vägnar.', '我代表老板说话。'],
    ['På firmans vägnar tackar vi er.', '我们以公司的名义感谢你们。'],
    ['Hon skrev under på hans vägnar.', '她代他签了字。'],
    ['Agera inte på mina vägnar.', '别打着我的名义行事。'],
  ]), 2649, c(
    [
      ['väg', '路'],
      ['-nar', '旧复数'],
    ],
    '几乎只出现在 på ngns vägnar：走在某人的路上，就是以某人的名义。',
  )),
  freq(other('usch', 'intj', '呸；恶心（表示厌恶）', 'ugh / yuck', [
    ['Usch, vad det luktar här.', '呸，这儿什么味道。'],
    ['Usch nej, det vill jag inte.', '恶心，那个我不要。'],
    ['Usch, insekten kröp på bordet.', '呸，虫子在桌上爬。'],
    ['Hon sa bara usch och gick därifrån.', '她只说了声恶心就走开了。'],
  ]), 2650),
]

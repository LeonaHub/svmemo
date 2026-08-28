import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2701–2750. Primary POS is the high-frequency use, not every sense in the book. */
export const list55: Word[] = [
  freq(noun('affärsman', 'en', '商人；生意人', 'businessman', 'affärsmannen', 'affärsmän', 'affärsmännen', [
    ['Han är affärsman i stan.', '他是城里的商人。'],
    ['Affärsmannen landade sent.', '那位商人很晚才落地。'],
    ['Flera affärsmän möttes på hotellet.', '好几位商人在酒店见面。'],
    ['Affärsmännen tecknade avtalet.', '那些商人签了合同。'],
  ]), 2701, c(
    [
      ['affär', '生意；商店'],
      ['man', '人；男人'],
    ],
    '做生意的人，合起来就是商人。',
  )),
  freq(verb('försörja', '供养；供给', 'to provide for / to support', 'försörjer', 'försörjde', 'försörjt', 'försörj', [
    ['Hon försörjer hela familjen.', '她供养着全家。'],
    ['Han försörjde sig som musiker.', '他靠当乐手养活自己。'],
    ['Kraftverket har försörjt staden med el.', '发电厂给这座城供过电。'],
    ['Försörj dig själv.', '自己养活自己。'],
  ]), 2702, c(
    [
      ['för-', '构词前缀'],
      ['sörja', '照料；供养'],
    ],
    '“为谁照料生计”，合起来就是供养、供给。',
  )),
  freq(noun('lopp', 'ett', '赛跑；比赛；（时间的）过程', 'race / course (of time)', 'loppet', 'lopp', 'loppen', [
    ['Hon vann loppet på slutet.', '她在最后赢了那场比赛。'],
    ['Loppet sänds i tv.', '这场比赛电视转播。'],
    ['Under eftermiddagens lopp kom posten.', '在下午这段时间里邮件到了。'],
    ['Loppen lockade många barn.', '那些比赛吸引了许多孩子。'],
  ]), 2703),
  freq(noun('ambassad', 'en', '大使馆', 'embassy', 'ambassaden', 'ambassader', 'ambassaderna', [
    ['Vi gick till ambassaden i går.', '我们昨天去了大使馆。'],
    ['Ambassaden ligger nära parken.', '大使馆在公园附近。'],
    ['Två ambassader delar samma gata.', '两家大使馆在同一条街上。'],
    ['Ambassaderna höll stängt på måndag.', '那些大使馆星期一关门。'],
  ]), 2704),
  freq(verb('ducka', '低头躲开；躲避', 'to duck / to dodge', 'duckar', 'duckade', 'duckat', 'ducka', [
    ['Han duckar under bollen.', '他低头躲开球。'],
    ['Hon duckade i sista sekunden.', '她在最后一秒低头躲开了。'],
    ['De har duckat för frågan länge.', '他们对这个问题躲了很久。'],
    ['Ducka när bollen kommer.', '球来时低头躲。'],
  ]), 2705),
  freq(verb('attackera', '攻击；抨击', 'to attack', 'attackerar', 'attackerade', 'attackerat', 'attackera', [
    ['Oppositionen attackerar förslaget.', '反对派在攻击这项提案。'],
    ['De attackerade laget i pressen.', '他们在媒体上攻击了这支队。'],
    ['Sidan har attackerats av virus.', '这个网站遭到了病毒攻击。'],
    ['Attackera inte personen, bara idén.', '别攻击人，只谈想法。'],
  ]), 2706),
  freq(adj('kriminell', '犯罪的；刑事的', 'criminal', 'kriminellt', 'kriminella', [
    ['Det var en kriminell handling.', '那是犯罪行为。'],
    ['Ett kriminellt gäng greps i natt.', '一个犯罪团伙夜里被抓了。'],
    ['De kriminella näten kartläggs.', '那些犯罪网络正在被摸清。'],
    ['Håll dig undan kriminell verksamhet.', '别沾犯罪活动。'],
  ]), 2707),
  freq(noun('bilolycka', 'en', '车祸', 'car accident', 'bilolyckan', 'bilolyckor', 'bilolyckorna', [
    ['Det skedde en bilolycka vid bron.', '桥边发生了一起车祸。'],
    ['Bilolyckan spärrade vägen i en timme.', '那起车祸把路堵了一小时。'],
    ['Två bilolyckor rapporterades i rusningen.', '高峰时段报了两起车祸。'],
    ['Bilolyckorna utreds av polisen.', '那些车祸由警方调查。'],
  ]), 2708, c(
    [
      ['bil', '汽车'],
      ['olycka', '事故'],
    ],
    '汽车造成的事故，就是车祸。',
  )),
  freq(noun('husdjur', 'ett', '宠物；家畜', 'pet / domestic animal', 'husdjuret', 'husdjur', 'husdjuren', [
    ['Vi har ett husdjur hemma.', '我们家有一只宠物。'],
    ['Husdjuret sover i korgen.', '那只宠物在篮子里睡。'],
    ['Två husdjur får följa med.', '可以带两只宠物。'],
    ['Husdjuren ska vaccineras.', '那些宠物要打疫苗。'],
  ]), 2709, c(
    [
      ['hus', '房子'],
      ['djur', '动物'],
    ],
    '家里养的动物，就是宠物、家畜。',
  )),
  freq(verb('kliva', '迈步；跨上／跨下', 'to stride / to climb (aboard)', 'kliver', 'klev', 'klivit', 'kliv', [
    ['Hon kliver på bussen vid torget.', '她在广场上公交车。'],
    ['Han klev ur bilen i regnet.', '他在雨里下了车。'],
    ['De har klivit ombord redan.', '他们已经上船了。'],
    ['Kliv in, så åker vi.', '进来，我们走。'],
  ]), 2710),
  freq(noun('allmänhet', 'en', '公众；大众', 'the (general) public', 'allmänheten', null, null, [
    ['Allmänheten får inte gå dit.', '公众不能去那儿。'],
    ['Parken öppnar för allmänheten i maj.', '公园五月对公众开放。'],
    ['Tala till allmänheten, inte bara till oss.', '对公众说，别只对我们说。'],
    ['Respektera allmänheten i kön.', '排队时尊重公众。'],
  ]), 2711, c(
    [
      ['allmän', '普遍的；公共的'],
      ['-het', '性质、状态'],
    ],
    '普遍的那些人，合起来就是公众。',
  )),
  freq(other('förgäves', 'adv', '徒劳地；白费地', 'in vain', [
    ['Hon sökte förgäves efter nyckeln.', '她找钥匙白找了。'],
    ['Vi väntade förgäves i en timme.', '我们白等了一小时。'],
    ['Allt arbete var förgäves.', '所有工夫都白费了。'],
    ['Ring inte förgäves, hon är bortrest.', '别白打电话，她出门了。'],
  ]), 2712),
  freq(noun('kyrkogård', 'en', '墓地；教堂墓地', 'cemetery / churchyard', 'kyrkogården', 'kyrkogårdar', 'kyrkogårdarna', [
    ['Farfar ligger på kyrkogården.', '爷爷葬在那片墓地。'],
    ['Kyrkogården ligger bakom kyrkan.', '墓地在教堂后面。'],
    ['Två kyrkogårdar finns i socknen.', '这个教区有两片墓地。'],
    ['Kyrkogårdarna stängs vid skymning.', '那些墓地黄昏时关闭。'],
  ]), 2713, c(
    [
      ['kyrka', '教堂'],
      ['gård', '院子；场地'],
    ],
    '教堂旁边的院子，合起来就是教堂墓地。',
  )),
  freq(noun('intelligens', 'en', '智力；才智', 'intelligence', 'intelligensen', null, null, [
    ['Testet mäter intelligens, inte tur.', '这项测试测的是智力，不是运气。'],
    ['Intelligensen räcker långt här.', '在这儿有才智就够用很久。'],
    ['Hon har hög intelligens och tålamod.', '她智力高，也有耐心。'],
    ['Lita på intelligensen, inte på slumpen.', '靠才智，别靠运气。'],
  ]), 2714),
  freq(verb('straffa', '惩罚；处罚', 'to punish', 'straffar', 'straffade', 'straffat', 'straffa', [
    ['Domstolen straffar brottet hårt.', '法院对这种犯罪处罚很重。'],
    ['Läraren straffade klassen med extra läxa.', '老师用额外作业惩罚了全班。'],
    ['Han har straffats för fusket.', '他因作弊已经受罚。'],
    ['Straffa inte barnet för det.', '别为那件事惩罚孩子。'],
  ]), 2715),
  freq(verb('bekämpa', '对抗；打击；防治', 'to combat / to fight', 'bekämpar', 'bekämpade', 'bekämpat', 'bekämpa', [
    ['Vi bekämpar skadedjuren i år.', '我们今年在防治害虫。'],
    ['De bekämpade branden hela natten.', '他们整晚在灭火。'],
    ['Facket har bekämpat förslaget.', '工会已经抵制这项提案。'],
    ['Bekämpa inte febern med bara vila.', '别只靠休息来退烧。'],
  ]), 2716, c(
    [
      ['be-', '构词前缀'],
      ['kämpa', '奋斗；战斗'],
    ],
    '去跟某事物斗，合起来就是对抗、防治。',
  )),
  freq(noun('moral', 'en', '道德；士气', 'morals / morale', 'moralen', null, null, [
    ['Laget visade hög moral.', '球队士气很高。'],
    ['Moralen sviktade efter förlusten.', '士气在输球后垮了。'],
    ['Hon har en sträng moral.', '她道德要求很严。'],
    ['Prata inte moral med mig nu.', '现在别跟我说教。'],
  ]), 2717),
  freq(other('i morse', 'phrase', '今天早上', 'this morning', [
    ['Jag såg henne i morse.', '我今天早上看见她了。'],
    ['I morse var bussen sen.', '今天早上公交车晚了。'],
    ['Har du ätit i morse?', '你今天早上吃过了吗？'],
    ['Vi pratade i morse på perrongen.', '我们今天早上在站台聊过。'],
  ]), 2718, c(
    [
      ['i', '在'],
      ['morse', '今天早上（口语）'],
    ],
    '处在今天早上，合起来就是今天早上。',
  )),
  freq(noun('handduk', 'en', '毛巾', 'towel', 'handduken', 'handdukar', 'handdukarna', [
    ['Häng handduken på kroken.', '把毛巾挂在钩上。'],
    ['Handduken är fortfarande våt.', '毛巾还是湿的。'],
    ['Vi köpte tre handdukar.', '我们买了三条毛巾。'],
    ['Handdukarna ska tvättas i dag.', '那些毛巾今天要洗。'],
  ]), 2719, c(
    [
      ['hand', '手'],
      ['duk', '布'],
    ],
    '擦手用的布，就是毛巾。',
  )),
  freq(adj('deprimerad', '抑郁的；沮丧的', 'depressed', 'deprimerat', 'deprimerade', [
    ['Han är deprimerad sedan i höstas.', '他从秋天起就抑郁了。'],
    ['Ett deprimerat humör sänkte rummet.', '一种沮丧的情绪把屋子带低了。'],
    ['De deprimerade dagarna blev färre.', '那些抑郁的日子变少了。'],
    ['Bli inte deprimerad av ett nej.', '别因为一次拒绝就沮丧。'],
  ]), 2720),
  freq(noun('tradition', 'en', '传统；习俗', 'tradition', 'traditionen', 'traditioner', 'traditionerna', [
    ['Julbordet är en gammal tradition.', '圣诞自助餐是老传统。'],
    ['Traditionen går i arv i släkten.', '这个传统在家族里传。'],
    ['Vi har tre traditioner i maj.', '我们五月有三个习俗。'],
    ['Traditionerna hålls vid liv här.', '那些传统在这儿还活着。'],
  ]), 2721),
  freq(noun('struntprat', 'ett', '废话；胡扯', 'nonsense / rubbish (talk)', 'struntpratet', null, null, [
    ['Det är bara struntprat.', '那不过是废话。'],
    ['Struntpratet tröttade oss ut.', '那些胡扯把我们听烦了。'],
    ['Lyssna inte på struntprat.', '别听废话。'],
    ['Sluta med struntpratet nu.', '别再胡扯了。'],
  ]), 2722, c(
    [
      ['strunt', '废话；无关紧要的东西'],
      ['prat', '说话；闲聊'],
    ],
    '毫无价值的话，合起来就是废话、胡扯。',
  )),
  freq(noun('skiva', 'en', '片；唱片；光盘', 'slice / record / disc', 'skivan', 'skivor', 'skivorna', [
    ['Vill du ha en skiva ost?', '你要来一片奶酪吗？'],
    ['Skivan gick varm i somras.', '那张唱片夏天很火。'],
    ['Hon köpte två skivor bröd.', '她买了两片面包。'],
    ['Skivorna står i hyllan.', '那些唱片在架子上。'],
  ]), 2723),
  freq(noun('trollkarl', 'en', '魔术师；巫师', 'magician / wizard', 'trollkarlen', 'trollkarlar', 'trollkarlarna', [
    ['Barnen tittade på trollkarlen.', '孩子们看着那位魔术师。'],
    ['En trollkarl drog en duva ur hatten.', '一位魔术师从帽子里掏出鸽子。'],
    ['Två trollkarlar tävlade på scenen.', '两位魔术师在台上比。'],
    ['Trollkarlarna bugade efter numret.', '那些魔术师在节目结束后鞠躬。'],
  ]), 2724, c(
    [
      ['troll', '魔法；巨怪'],
      ['karl', '男人；汉子'],
    ],
    '会变戏法的人，合起来就是魔术师。',
  )),
  freq(noun('samarbete', 'ett', '合作', 'cooperation / collaboration', 'samarbetet', 'samarbeten', 'samarbetena', [
    ['Skolan söker samarbete med föreningen.', '学校寻求与协会合作。'],
    ['Samarbetet gick trögt i början.', '合作一开始不顺。'],
    ['Två samarbeten startar i höst.', '今年秋天启动两项合作。'],
    ['Samarbetena gav nya jobb.', '那些合作带来了新岗位。'],
  ]), 2725, c(
    [
      ['sam-', '一起'],
      ['arbete', '工作'],
    ],
    '一起做的工作，合起来就是合作。',
  )),
  freq(noun('åsna', 'en', '驴；笨蛋（喻）', 'donkey / ass (also figurative)', 'åsnan', 'åsnor', 'åsnorna', [
    ['Åsnan bar vattnet uppför backen.', '驴把水驮上坡。'],
    ['En åsna stod vid staketet.', '一头驴站在篱笆边。'],
    ['Två åsnor betade i hagen.', '两头驴在牧场吃草。'],
    ['Kalla inte folk för åsnor.', '别骂人是笨蛋。'],
  ]), 2726),
  freq(other('vidrigt', 'adv', '令人作呕地；讨厌地', 'disgustingly / nastily', [
    ['Det luktar vidrigt här inne.', '这里面气味恶心得很。'],
    ['Maten smakade vidrigt kall.', '这饭冷得难吃。'],
    ['Han betedde sig vidrigt mot henne.', '他对她的态度很讨厌。'],
    ['Vidrigt kallt var det i hallen.', '门厅里冷得难受。'],
  ]), 2727, c(
    [
      ['vidrig', '令人厌恶的'],
      ['-t', '中性/副词词尾'],
    ],
    'vidrig 是“令人厌恶的”，vidrigt 就是令人作呕地、讨厌地。',
  )),
  freq(noun('burk', 'en', '罐子；罐头盒', 'jar / tin / can', 'burken', 'burkar', 'burkarna', [
    ['Öppna burken med en sked.', '用勺子把罐子打开。'],
    ['Burken är tom redan.', '罐子已经空了。'],
    ['Vi köpte tre burkar tomater.', '我们买了三罐番茄。'],
    ['Burkarna ska till återvinningen.', '那些罐子要送去回收。'],
  ]), 2728),
  freq(noun('ekonomi', 'en', '经济；财政；经济学', 'finances / economy / economics', 'ekonomin', null, null, [
    ['Familjens ekonomi räcker i månaden.', '家里的经济这个月够用。'],
    ['Ekonomin vände efter krisen.', '经济在危机后好转了。'],
    ['Hon läser ekonomi på universitetet.', '她在大学读经济。'],
    ['Håll ekonomin i schack.', '把财政管住。'],
  ]), 2729),
  freq(noun('aska', 'en', '灰；灰烬', 'ash', 'askan', null, null, [
    ['Elden lämnade bara aska.', '火只剩下灰。'],
    ['Askan blåste ut på golvet.', '灰被吹到地板上。'],
    ['Lägg askan i hinken.', '把灰倒进桶里。'],
    ['Rör inte askan, den är het.', '别碰灰，还烫。'],
  ]), 2730),
  freq(noun('övervåning', 'en', '楼上；二楼', 'upper floor', 'övervåningen', 'övervåningar', 'övervåningarna', [
    ['Sovrummen ligger på övervåningen.', '卧室在楼上。'],
    ['Övervåningen är kall i januari.', '二楼一月份很冷。'],
    ['Två övervåningar har balkong.', '两个楼上有阳台。'],
    ['Övervåningarna renoveras i vår.', '那些楼上今年春天装修。'],
  ]), 2731, c(
    [
      ['över', '在上面'],
      ['våning', '楼层'],
    ],
    '上面那一层，就是楼上、二楼。',
  )),
  freq(noun('trakt', 'en', '一带；地区', 'region / parts / area', 'trakten', 'trakter', 'trakterna', [
    ['Vi bor i trakten kring sjön.', '我们住在湖周围一带。'],
    ['Trakten är känd för osten.', '这一带以奶酪出名。'],
    ['Hon har rest i flera trakter.', '她走过好几个地区。'],
    ['Trakterna norrut är glesare.', '往北那些地区人更少。'],
  ]), 2732),
  freq(adj('begåvad', '有天赋的；聪明的', 'gifted / talented', 'begåvat', 'begåvade', [
    ['Hon är en begåvad pianist.', '她是位有天赋的钢琴手。'],
    ['Ett begåvat barn lärde sig fort.', '一个聪明的孩子学得很快。'],
    ['De begåvade eleverna fick extra uppgifter.', '那些有天赋的学生拿到了额外作业。'],
    ['Han är begåvad i språk.', '他语言上有天赋。'],
  ]), 2733, c(
    [
      ['be-', '构词前缀'],
      ['gåva', '天赋；礼物'],
    ],
    '被赋予天赋的，合起来就是有天赋的。',
  )),
  freq(noun('vilt', 'ett', '野味；野生动物（统称）', 'game / wild animals (collective)', 'viltet', null, null, [
    ['Jägarna spårade vilt i skogen.', '猎人在林子里追踪猎物。'],
    ['Viltet håller sig undan i dag.', '那些野生动物今天躲着不出来。'],
    ['Vi åt vilt till middag.', '我们晚饭吃了野味。'],
    ['Jaga inte vilt här.', '别在这儿打野味。'],
  ]), 2734),
  freq(noun('last', 'en', '货物；负荷；恶习', 'load / cargo / vice', 'lasten', 'laster', 'lasterna', [
    ['Lasten ska lossas före lunch.', '这批货午饭前要卸完。'],
    ['En tung last låg på flaket.', '车斗上压着沉重的货物。'],
    ['Fartyget tar tre laster i veckan.', '这艘船一周运三批货。'],
    ['Lasterna vägs i hamnen.', '那些货物在港口过秤。'],
  ]), 2735),
  freq(adj('gömd', '藏着的；隐蔽的', 'hidden', 'gömt', 'gömda', [
    ['Nyckeln är gömd i lådan.', '钥匙藏在抽屉里。'],
    ['Ett gömt rum fanns bakom hyllan.', '架子后面有一间暗室。'],
    ['De gömda breven hittades senare.', '那些藏着的信后来找到了。'],
    ['Håll den gömd till festen.', '先把它藏到聚会。'],
  ]), 2736),
  freq(adj('lojal', '忠诚的；可靠的', 'loyal', 'lojalt', 'lojala', [
    ['Hon är lojal mot laget.', '她对球队很忠诚。'],
    ['Ett lojalt lag stannar kvar.', '一支忠诚的队伍会留下来。'],
    ['De lojala kunderna kom tillbaka.', '那些忠诚的顾客又来了。'],
    ['Var lojal mot avtalet.', '对协议要守信。'],
  ]), 2737),
  freq(noun('revolver', 'en', '左轮手枪', 'revolver', 'revolvern', 'revolvrar', 'revolvrarna', [
    ['Revolvern låg i lådan.', '左轮枪在抽屉里。'],
    ['En revolver visades på museet.', '博物馆展出了一把左轮。'],
    ['Två revolvrar märktes in.', '两把左轮被登记了。'],
    ['Rör inte revolvrarna.', '别碰那些左轮。'],
  ]), 2738),
  freq(noun('dräkt', 'en', '套装；服装；装束', 'suit / costume / attire', 'dräkten', 'dräkter', 'dräkterna', [
    ['Hon tog dräkt till mötet.', '她穿套装去开会。'],
    ['Dräkten är mörkblå.', '这套套装是深蓝的。'],
    ['Folkdräkter hängde i hallen.', '门厅里挂着几套民族服装。'],
    ['Dräkterna sys för festen.', '那些服装是为晚会缝的。'],
  ]), 2739),
  freq(verb('intressera', '使感兴趣；关心', 'to interest', 'intresserar', 'intresserade', 'intresserat', 'intressera', [
    ['Filmen intresserar barnen.', '这部电影让孩子们感兴趣。'],
    ['Hon intresserade sig för historia.', '她那时对历史感兴趣。'],
    ['Förslaget har inte intresserat oss.', '这项提议没引起我们兴趣。'],
    ['Intressera barnen för musiken.', '让孩子们对音乐感兴趣。'],
  ]), 2740),
  freq(adj('avgörande', '决定性的；关键的', 'decisive / crucial', 'avgörande', 'avgörande', [
    ['Det var en avgörande match.', '那是一场关键比赛。'],
    ['Ett avgörande bevis saknas ännu.', '还缺一份决定性的证据。'],
    ['De avgörande frågorna sparades till sist.', '那些关键问题留到了最后。'],
    ['Timingen blev avgörande.', '时机成了决定性因素。'],
  ]), 2741),
  freq(noun('pryl', 'en', '玩意儿；东西（口）', 'gadget / thing (informal)', 'prylen', 'prylar', 'prylarna', [
    ['Vad är det för pryl i lådan?', '抽屉里那是个什么玩意儿？'],
    ['Prylen gick sönder i går.', '那玩意儿昨天坏了。'],
    ['Han har för många prylar.', '他东西太多了。'],
    ['Prylarna ska in i lådan.', '那些玩意儿要放进箱子。'],
  ]), 2742),
  freq(noun('utpressning', 'en', '勒索；敲诈', 'blackmail / extortion', 'utpressningen', 'utpressningar', 'utpressningarna', [
    ['Han anmäldes för utpressning.', '他因敲诈勒索被举报。'],
    ['Utpressningen pågick i flera månader.', '那起勒索持续了好几个月。'],
    ['Polisen stoppade två utpressningar.', '警方制止了两起勒索。'],
    ['Utpressningarna utreds fortfarande.', '那些勒索案还在调查。'],
  ]), 2743, c(
    [
      ['ut', '向外'],
      ['pressning', '挤压；施压'],
    ],
    '向外逼出钱或好处，合起来就是勒索、敲诈。',
  )),
  freq(noun('varg', 'en', '狼', 'wolf', 'vargen', 'vargar', 'vargarna', [
    ['En varg sågs vid sjön.', '湖边看见了一只狼。'],
    ['Vargen höll sig i skogen.', '那只狼待在林子里。'],
    ['Två vargar spårades i natt.', '夜里追踪到两只狼。'],
    ['Vargarna höll avstånd till byn.', '那些狼跟村子保持距离。'],
  ]), 2744),
  freq(adj('menad', '出于好意的；本意如此的', 'meant / intended (as in väl menad)', 'menat', 'menade', [
    ['Det var en väl menad gåva.', '那是一份出于好意的礼物。'],
    ['Ett väl menat råd nådde fram.', '一句出于好意的建议传到了。'],
    ['De väl menade orden hjälpte.', '那些出于好意的话帮了忙。'],
    ['Hjälpen var väl menad.', '这帮助是出于好意的。'],
  ]), 2745, c(
    [
      ['mena', '意思是；本意是'],
      ['-d', '过去分词'],
    ],
    '被“本意如此”的，合起来就是出于好意的、本意如此的。',
  )),
  freq(noun('dimma', 'en', '雾', 'fog / mist', 'dimman', 'dimmor', 'dimmorna', [
    ['Dimman låg tät över sjön.', '湖上雾很浓。'],
    ['En kall dimma kom in från havet.', '一阵冷雾从海上涌来。'],
    ['Tjocka dimmor lättar fort här.', '这儿的浓雾散得快。'],
    ['Kör sakta när dimmorna ligger kvar.', '雾还在时开慢点。'],
  ]), 2746),
  freq(other('rörande', 'other', '关于；至于', 'regarding / concerning', [
    ['Ett mejl rörande mötet kom i går.', '昨天来了一封关于会议的邮件。'],
    ['Hon ringde rörande hyran.', '她打电话谈房租的事。'],
    ['Rörande resan: vi väntar till maj.', '关于旅行：我们等到五月。'],
    ['Har du hört något rörande beslutet?', '你有没有听到关于这项决定的消息？'],
  ]), 2747),
  freq(adj('judisk', '犹太的', 'Jewish', 'judiskt', 'judiska', [
    ['Hon kommer från en judisk familj.', '她来自一个犹太家庭。'],
    ['Ett judiskt museum ligger i stan.', '城里有一座犹太博物馆。'],
    ['De judiska högtiderna infaller i höst.', '那些犹太节日在秋天。'],
    ['Kalendern följer judisk tidräkning.', '这份日历按犹太纪年。'],
  ]), 2748, c(
    [
      ['jude', '犹太人'],
      ['-isk', '……的'],
    ],
    '与犹太人有关的，就是犹太的。',
  )),
  freq(verb('lasta', '装载；装货', 'to load', 'lastar', 'lastade', 'lastat', 'lasta', [
    ['De lastar lastbilen nu.', '他们现在在装卡车。'],
    ['Hon lastade in väskorna i bakluckan.', '她把箱子装进了后备箱。'],
    ['Båten har lastats med virke.', '船已经装上木材。'],
    ['Lasta inte för tungt.', '别装太重。'],
  ]), 2749, c(
    [
      ['last', '货物；负荷'],
      ['-a', '动词词尾'],
    ],
    '把货物装上去，合起来就是装载。',
  )),
  freq(other('internationellt', 'adv', '在国际上；国际性地', 'internationally', [
    ['Företaget säljer internationellt.', '这家公司销往国际。'],
    ['Matchen sänds internationellt.', '这场比赛向国际转播。'],
    ['Hon är känd internationellt.', '她在国际上有名。'],
    ['Tänk internationellt från början.', '从一开始就按国际视野想。'],
  ]), 2750, c(
    [
      ['internationell', '国际的'],
      ['-t', '中性/副词词尾'],
    ],
    'internationell 是“国际的”，internationellt 就是在国际上。',
  )),
]

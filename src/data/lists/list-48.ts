import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2351–2400. Primary POS is the high-frequency use, not every sense in the book. */
export const list48: Word[] = [
  freq(adj('pank', '没钱的；破产的', 'broke / penniless', 'pankt', 'panka', [
    ['Jag är pank just nu.', '我这会儿没钱了。'],
    ['Kontot är pankt efter hyran.', '交完房租账户空了。'],
    ['De är panka efter festen.', '他们办完派对没钱了。'],
    ['Bli inte pank före löning.', '发薪前别把自己花穷了。'],
  ]), 2351),
  freq(noun('kulle', 'en', '小山；丘', 'hill', 'kullen', 'kullar', 'kullarna', [
    ['Huset står på en kulle.', '房子在一座小山上。'],
    ['Kullen är grön på sommaren.', '夏天那座小山是绿的。'],
    ['Barnen sprang uppför två kullar.', '孩子们跑上了两座小山。'],
    ['Kullarna syns från vägen.', '从路上能看见那些小山。'],
  ]), 2352),
  freq(adj('skriven', '写成的；书面的', 'written', 'skrivet', 'skrivna', [
    ['Brevet är redan skrivet.', '信已经写好了。'],
    ['En skriven regel hänger på väggen.', '墙上挂着一条写成的规定。'],
    ['De skrivna orden var tydliga.', '那些写下来的字很清楚。'],
    ['Avtalet måste vara skrivet.', '合同必须是书面的。'],
  ]), 2353, c([['skriva', '写'], ['-en', '完成分词']], '已经写下来的，合起来就是写成的、书面的。')),
  freq(noun('koma', 'en', '昏迷', 'coma', 'koman', null, null, [
    ['Han ligger i koma.', '他处于昏迷中。'],
    ['Koman varade i tre dagar.', '那次昏迷持续了三天。'],
    ['Patienten föll i koma.', '病人陷入了昏迷。'],
    ['Hon vaknade ur koman.', '她从昏迷中醒来。'],
  ]), 2354),
  freq(adj('vice', '副的；代理的', 'vice / deputy', 'vice', 'vice', [
    ['Hon är vice ordförande.', '她是副主席。'],
    ['Vice rektor tog emot oss.', '副校长接待了我们。'],
    ['De vice cheferna möttes i dag.', '那些副主管今天见了面。'],
    ['Han utsågs till vice kapten.', '他被任命为副队长。'],
  ]), 2355),
  freq(verb('råda', '劝告；盛行；存在', 'to advise / to prevail', 'råder', 'rådde', 'rått', 'råd', [
    ['Det råder brist på lärare.', '教师短缺。'],
    ['Läkaren rådde henne att vila.', '医生劝她休息。'],
    ['Tystnad har rått i rummet.', '房间里一直很安静。'],
    ['Råd honom att vänta.', '劝他等一等。'],
  ]), 2356),
  freq(noun('VD', 'en', '首席执行官；总经理', 'CEO / managing director', 'VD:n', 'VD:ar', 'VD:arna', [
    ['En ny VD börjar i maj.', '一位新总经理五月上任。'],
    ['VD:n presenterade rapporten.', '首席执行官介绍了报告。'],
    ['Flera VD:ar möttes i stan.', '好几位总经理在城里见面。'],
    ['Fråga VD före mötet.', '开会前先问总经理。'],
  ]), 2357, c(
    [
      ['verkställande', '执行的'],
      ['direktör', '经理'],
    ],
    'verkställande direktör 的缩写，就是公司的总经理、首席执行官。',
  )),
  freq(noun('virus', 'ett', '病毒', 'virus', 'viruset', 'virus', 'virusen', [
    ['Ett virus spreds i klassen.', '一种病毒在班上传播。'],
    ['Viruset gör henne trött.', '这种病毒让她很累。'],
    ['Flera virus cirkulerar i vinter.', '今年冬天有好几种病毒在传。'],
    ['Virusen överlever inte länge ute.', '那些病毒在外面活不长。'],
  ]), 2358),
  freq(noun('reklam', 'en', '广告', 'advertising / advert', 'reklamen', 'reklamer', 'reklamerna', [
    ['Det är för mycket reklam på tv.', '电视上广告太多了。'],
    ['Reklamen irriterar mig.', '那个广告惹我烦。'],
    ['De har gjort flera reklamer.', '他们做了好几则广告。'],
    ['Reklamerna kommer tätt.', '那些广告接连出现。'],
  ]), 2359),
  freq(verb('fattas', '缺少；欠缺', 'to be missing / to be lacking', 'fattas', 'fattades', 'fattats', null, [
    ['Det fattas salt i soppan.', '汤里缺盐。'],
    ['Det fattades två namn på listan.', '名单上当时缺两个名字。'],
    ['Pengar har fattats hela månaden.', '这个月一直缺钱。'],
    ['Vad fattas nu då?', '这会儿又缺什么？'],
  ]), 2360, c(
    [
      ['fatta', '抓住；理解'],
      ['-s', '被动/感觉动词词尾'],
    ],
    '“没被抓住、到不了手”，合起来就是缺少、欠缺。',
  )),
  freq(noun('identitet', 'en', '身份；同一性', 'identity', 'identiteten', 'identiteter', 'identiteterna', [
    ['Polisen fastställde identiteten.', '警察确认了身份。'],
    ['Identiteten var fortfarande okänd.', '身份当时还不清楚。'],
    ['Två identiteter blandades ihop.', '两个身份被搞混了。'],
    ['Visa identitet vid dörren.', '在门口出示身份。'],
  ]), 2361),
  freq(noun('samband', 'ett', '联系；关联', 'connection / relation', 'sambandet', 'samband', 'sambanden', [
    ['Det finns ett samband mellan sömn och hälsa.', '睡眠和健康之间有联系。'],
    ['Sambandet är svagt.', '这种关联很弱。'],
    ['I samband med flytten slutade hon.', '她是在搬家的时候辞职的。'],
    ['Sambanden utreds fortfarande.', '那些关联还在调查。'],
  ]), 2362, c(
    [
      ['sam', '一起'],
      ['band', '带子；联系'],
    ],
    '“连在一起的带子”，就是联系、关联。',
  )),
  freq(adj('passande', '合适的；得体的', 'fitting / appropriate', 'passande', 'passande', [
    ['Det var ett passande svar.', '那是一个得体的回答。'],
    ['En passande skjorta hänger där.', '那儿挂着一件合适的衬衫。'],
    ['De passande orden kom sent.', '那些得体的话来晚了。'],
    ['Välj något passande till festen.', '给聚会选件合适的。'],
  ]), 2363),
  freq(noun('diamant', 'en', '钻石', 'diamond', 'diamanten', 'diamanter', 'diamanterna', [
    ['Ringen har en diamant.', '戒指上有一颗钻石。'],
    ['Diamanten glänste i ljuset.', '那颗钻石在光里发亮。'],
    ['Hon äger två diamanter.', '她有两颗钻石。'],
    ['Lås in diamanten i kassaskåpet.', '把钻石锁进保险柜。'],
  ]), 2364),
  freq(noun('ras', 'en', '品种；种族', 'breed / race', 'rasen', 'raser', 'raserna', [
    ['Vilken ras är hunden?', '这条狗是什么品种？'],
    ['Rasen är känd för att vara snäll.', '这个品种以温顺出名。'],
    ['Olika raser har olika päls.', '不同品种毛色不同。'],
    ['Raserna i stallet är blandade.', '马厩里那些品种是混的。'],
  ]), 2365),
  freq(noun('kris', 'en', '危机', 'crisis', 'krisen', 'kriser', 'kriserna', [
    ['Landet är i kris.', '这个国家处于危机中。'],
    ['Krisen drabbade företaget.', '这场危机冲击了那家公司。'],
    ['Vi har gått igenom flera kriser.', '我们经历过好几次危机。'],
    ['Kriserna kom tätt.', '那些危机接连到来。'],
  ]), 2366),
  freq(noun('verktyg', 'ett', '工具', 'tool', 'verktyget', 'verktyg', 'verktygen', [
    ['Han lånade ett verktyg.', '他借了一件工具。'],
    ['Verktyget ligger i lådan.', '这件工具在抽屉里。'],
    ['Vi behöver fler verktyg.', '我们需要更多工具。'],
    ['Verktygen ska torkas av.', '那些工具得擦干净。'],
  ]), 2367, c([['verk', '工作；活计'], ['tyg', '器具']], '干活用的器具，合起来就是工具。')),
  freq(adj('avstängd', '被关掉的；被停职／禁赛的', 'turned off / suspended', 'avstängt', 'avstängda', [
    ['Vattenkranen är avstängd.', '水龙头关了。'],
    ['Ett avstängt rum väntar.', '一间被关掉的房间在等着。'],
    ['De avstängda spelarna sitter tysta.', '那些被禁赛的球员安静地坐着。'],
    ['Håll vägen avstängd i natt.', '夜里把这条路封着。'],
  ]), 2368, c([['av', '离开'], ['stängd', '被关上的']], '被关离开，合起来就是关掉的、停职或禁赛的。')),
  freq(other('isär', 'adv', '分开；散开', 'apart', [
    ['Ta isär leksaken försiktigt.', '小心地把玩具拆开。'],
    ['Paret gick isär i fjol.', '那对伴侣去年分开了。'],
    ['Sidorna föll isär.', '书页散开了。'],
    ['Håll isär de två högarna.', '把那两堆分开。'],
  ]), 2369, c(
    [
      ['i', '在'],
      ['sär', '分开的（旧词）'],
    ],
    '“处于分开的状态”，就是分开、散开。',
  )),
  freq(noun('passion', 'en', '激情；热情', 'passion', 'passionen', 'passioner', 'passionerna', [
    ['Hon har en passion för musik.', '她对音乐有热情。'],
    ['Passionen drev honom vidare.', '那股激情推着他往前。'],
    ['Två passioner styr hennes liv.', '两股热情主导着她的生活。'],
    ['Passionerna ebbade ut.', '那些激情消退了。'],
  ]), 2370),
  freq(verb('pressa', '挤压；施压；熨烫', 'to squeeze / to press / to iron', 'pressar', 'pressade', 'pressat', 'pressa', [
    ['Hon pressar en citron.', '她在挤柠檬。'],
    ['De pressade honom att stanna.', '他们逼他留下来。'],
    ['Byxorna har pressats redan.', '裤子已经熨好了。'],
    ['Pressa inte så hårt.', '别压得那么用力。'],
  ]), 2371),
  freq(other('jämfört', 'other', '与……相比', 'compared (with)', [
    ['Priset är lågt jämfört med i fjol.', '和去年相比，价格很低。'],
    ['Hon är tyst jämfört med honom.', '和他比起来她更安静。'],
    ['Resultatet är bättre jämfört med planen.', '结果比计划更好。'],
    ['Jämfört med kylan ute är det varmt här.', '和外面的冷相比，这儿算暖和。'],
  ]), 2372, c([['jämföra', '比较'], ['-t', '完成时／副词尾']], '由“比较”变成“相比之下”，就是与……相比。')),
  freq(noun('attityd', 'en', '态度', 'attitude', 'attityden', 'attityder', 'attityderna', [
    ['Hans attityd retar kollegorna.', '他的态度惹恼了同事。'],
    ['Attityden måste ändras.', '这种态度必须改。'],
    ['Olika attityder krockade.', '不同态度撞上了。'],
    ['Attityderna på jobbet är bättre nu.', '现在工作上那些态度好多了。'],
  ]), 2373),
  freq(adj('trygg', '安全的；安心的', 'safe / secure', 'tryggt', 'trygga', [
    ['Barnet känner sig trygg här.', '孩子在这儿觉得安心。'],
    ['Ett tryggt hem betyder mycket.', '一个安心的家很重要。'],
    ['De trygga händerna höll fast.', '那些稳当的手抓得很牢。'],
    ['Känn dig trygg i huset.', '在这房子里放宽心。'],
  ]), 2374),
  freq(noun('intryck', 'ett', '印象', 'impression', 'intrycket', 'intryck', 'intrycken', [
    ['Första intrycket räknas.', '第一印象很重要。'],
    ['Intrycket var positivt.', '那个印象是正面的。'],
    ['Resan gav starka intryck.', '这趟旅行留下了深刻印象。'],
    ['Intrycken satt kvar länge.', '那些印象留了很久。'],
  ]), 2375, c(
    [
      ['in', '进入'],
      ['tryck', '压；印'],
    ],
    '“压进去留下的痕迹”，合起来就是印象。',
  )),
  freq(noun('matta', 'en', '地毯', 'carpet / rug', 'mattan', 'mattor', 'mattorna', [
    ['En matta ligger i hallen.', '门厅里铺着一块地毯。'],
    ['Mattan är smutsig.', '这块地毯脏了。'],
    ['Två mattor torkar ute.', '两块地毯在外面晾。'],
    ['Rulla ihop mattan, tack.', '请把地毯卷起来。'],
  ]), 2376),
  freq(other('enormt', 'adv', '极其；巨大地', 'enormously / extremely', [
    ['Huset är enormt stort.', '这房子极大。'],
    ['Hon hjälpte oss enormt.', '她帮了我们极大的忙。'],
    ['Det gick enormt snabbt.', '那进行得极快。'],
    ['Jag är enormt tacksam.', '我极其感激。'],
  ]), 2377, c(
    [
      ['enorm', '巨大的'],
      ['-t', '中性/副词词尾'],
    ],
    'enorm 是“巨大的”，enormt 就是极其、巨大地。',
  )),
  freq(noun('reporter', 'en', '记者', 'reporter', 'reportern', 'reportrar', 'reportrarna', [
    ['En reporter väntar vid dörren.', '一名记者在门口等。'],
    ['Reportern ställde tre frågor.', '那位记者问了三个问题。'],
    ['Två reportrar filmade mötet.', '两名记者拍了会议。'],
    ['Tala med reportern efteråt.', '过后再跟记者说。'],
  ]), 2378),
  freq(noun('bransch', 'en', '行业；业界', 'industry / trade', 'branschen', 'branscher', 'branscherna', [
    ['Hon jobbar i branschen sedan länge.', '她在这个行业干很久了。'],
    ['Branschen har det tufft i år.', '这个行业今年不好过。'],
    ['Två branscher slås ihop.', '两个行业要合并。'],
    ['Byt bransch om du vill.', '想换行业就换。'],
  ]), 2379),
  freq(noun('tidpunkt', 'en', '时点；时刻', 'point in time', 'tidpunkten', 'tidpunkter', 'tidpunkterna', [
    ['Vid vilken tidpunkt kommer du?', '你什么时候到？'],
    ['Tidpunkten passade dåligt.', '那个时刻不太合适。'],
    ['Vi ska boka tre tidpunkter.', '我们要约三个时点。'],
    ['Tidpunkterna ska hållas.', '那些时刻必须守住。'],
  ]), 2380, c(
    [
      ['tid', '时间'],
      ['punkt', '点'],
    ],
    '“时间上的一个点”，就是时点、时刻。',
  )),
  freq(noun('styrelse', 'en', '董事会；理事会', 'board (of directors)', 'styrelsen', 'styrelser', 'styrelserna', [
    ['Styrelsen möts i morgon.', '董事会明天开会。'],
    ['Hon sitter i styrelsen.', '她在董事会里。'],
    ['Flera styrelser samarbetar.', '好几个理事会在合作。'],
    ['Styrelserna tog samma beslut.', '那些董事会做了同样的决定。'],
  ]), 2381, c(
    [
      ['styra', '掌管；驾驶'],
      ['-else', '行为/结果名词后缀'],
    ],
    '“掌管所形成的机构”，就是董事会、理事会。',
  )),
  freq(verb('överge', '抛弃；放弃', 'to abandon', 'överger', 'övergav', 'övergett', 'överge', [
    ['Hon överger inte vännerna.', '她不会抛弃朋友。'],
    ['De övergav huset.', '他们抛弃了那栋房子。'],
    ['Planen har övergetts.', '计划已经被放弃了。'],
    ['Överge inte hoppet.', '别放弃希望。'],
  ]), 2382, c(
    [
      ['över', '越过；置于一旁'],
      ['ge', '给'],
    ],
    '“把某物丢到一边给出去”，合起来就是抛弃、放弃。',
  )),
  freq(adj('utsökt', '精美的；极好的', 'exquisite / delicious', 'utsökt', 'utsökta', [
    ['Maten var utsökt.', '饭菜精美极了。'],
    ['Ett utsökt vin stod på bordet.', '桌上放着一种极好的酒。'],
    ['De utsökta desserterna sålde slut.', '那些精美的甜点卖完了。'],
    ['Hon har en utsökt smak.', '她品味很高。'],
  ]), 2383, c(
    [
      ['ut', '向外'],
      ['sökt', '被寻找的（söka 找）'],
    ],
    '“被精挑细选出来的”，就是精美的、极好的。',
  )),
  freq(other('i och för sig', 'phrase', '本身；其实；诚然', 'in and of itself / admittedly', [
    ['I och för sig har du rätt.', '本身来说你是对的。'],
    ['Idén är i och för sig bra.', '这个主意本身不错。'],
    ['Jag förstår i och för sig.', '其实我理解。'],
    ['Det går i och för sig att vänta.', '其实可以再等。'],
  ]), 2384, c(
    [
      ['i', '在'],
      ['och', '和'],
      ['för sig', '就其本身'],
    ],
    '“就其本身而言”，就是本身、其实、诚然。',
  )),
  freq(other('frivilligt', 'adv', '自愿地', 'voluntarily', [
    ['Hon ställde upp frivilligt.', '她自愿参加。'],
    ['De kom frivilligt till mötet.', '他们自愿来开会。'],
    ['Han betalade frivilligt.', '他自愿付了钱。'],
    ['Ingen gör det frivilligt.', '没有人会自愿做这事。'],
  ]), 2385, c(
    [
      ['fri', '自由的'],
      ['villig', '愿意的'],
      ['-t', '中性/副词词尾'],
    ],
    'frivillig 是“自愿的”，frivilligt 就是自愿地。',
  )),
  freq(other('lagligt', 'adv', '合法地', 'legally', [
    ['De bor lagligt i landet.', '他们合法地住在这个国家。'],
    ['Bilen är lagligt parkerad.', '这车停得合法。'],
    ['Pengarna tjänades lagligt.', '这些钱是合法挣来的。'],
    ['Gör det lagligt, eller inte alls.', '要做就合法地做，否则别做。'],
  ]), 2386, c([['laglig', '合法的'], ['-t', '副词词尾']], '由“合法的”变成副词，就是合法地。')),
  freq(noun('motståndare', 'en', '对手；反对者', 'opponent', 'motståndaren', 'motståndare', 'motståndarna', [
    ['Motståndaren var starkare.', '对手更强。'],
    ['En motståndare till förslaget reste sig.', '一位反对该提议的人站了起来。'],
    ['Två motståndare möttes i finalen.', '两名对手在决赛相遇。'],
    ['Motståndarna backade till slut.', '那些对手最后退了。'],
  ]), 2387, c(
    [
      ['mot', '对着；反对'],
      ['stånd', '立场'],
      ['-are', '……的人'],
    ],
    '“站在对面的人”，就是对手、反对者。',
  )),
  freq(adj('populär', '受欢迎的；通俗的', 'popular', 'populärt', 'populära', [
    ['Filmen är populär bland ungdomar.', '这部电影在年轻人中很受欢迎。'],
    ['Ett populärt café öppnade här.', '这儿开了一家很受欢迎的咖啡馆。'],
    ['De populära sångerna spelades om.', '那些流行歌曲又放了一遍。'],
    ['Bli inte för populär för fort.', '别一下子太出风头。'],
  ]), 2388),
  freq(verb('leverera', '交付；运送', 'to deliver / to supply', 'levererar', 'levererade', 'levererat', 'leverera', [
    ['De levererar varorna i morgon.', '他们明天送货。'],
    ['Hon levererade paketet i tid.', '她准时把包裹送到了。'],
    ['Har ni levererat allt än?', '你们都送到了吗？'],
    ['Leverera den före klockan tre.', '三点前把这个送到。'],
  ]), 2389),
  freq(noun('ärende', 'ett', '事务；差事；案件', 'errand / matter / case', 'ärendet', 'ärenden', 'ärendena', [
    ['Jag har ett ärende i stan.', '我在城里有点事。'],
    ['Ärendet tar bara fem minuter.', '这点差事只要五分钟。'],
    ['Hon skötte tre ärenden.', '她办了三件事。'],
    ['Ärendena ligger på chefens bord.', '那些事务在老板桌上。'],
  ]), 2390),
  freq(adj('online', '在线的', 'online', 'online', 'online', [
    ['Butiken är öppen online.', '这家店在线上营业。'],
    ['Vi håller mötet online.', '我们在线上开会。'],
    ['De säljer kurserna online.', '他们在线上卖那些课程。'],
    ['Betala online, tack.', '请在线付款。'],
  ]), 2391),
  freq(noun('missförstånd', 'ett', '误会', 'misunderstanding', 'missförståndet', 'missförstånd', 'missförstånden', [
    ['Det var bara ett missförstånd.', '那只是一场误会。'],
    ['Missförståndet redde ut sig.', '这场误会解开了。'],
    ['Flera missförstånd uppstod.', '出现了好几场误会。'],
    ['Missförstånden måste undvikas.', '那些误会必须避免。'],
  ]), 2392, c([['miss-', '错；误'], ['förstånd', '理解']], '错误的理解，合起来就是误会。')),
  freq(verb('insistera', '坚持', 'to insist', 'insisterar', 'insisterade', 'insisterat', 'insistera', [
    ['Hon insisterar på att betala.', '她坚持要付钱。'],
    ['Han insisterade på sanningen.', '他坚持要真相。'],
    ['De har insisterat länge.', '他们坚持了很久。'],
    ['Insistera inte så hårt.', '别坚持得那么狠。'],
  ]), 2393),
  freq(adj('grå', '灰色的；阴沉的', 'grey / gray / dreary', 'grått', 'grå', [
    ['Himlen är grå i dag.', '今天天空是灰色的。'],
    ['Ett grått hus står vid vägen.', '路边立着一栋灰房子。'],
    ['De grå molnen blev tjockare.', '那些灰云变厚了。'],
    ['Måla inte allt grått.', '别把什么都刷成灰色。'],
  ]), 2394),
  freq(adj('blöt', '湿的', 'wet / soggy', 'blött', 'blöta', [
    ['Jackan är blöt efter regnet.', '雨后夹克湿了。'],
    ['Ett blött golv är halt.', '湿地板很滑。'],
    ['De blöta skorna torkar där.', '那些湿鞋子在那儿晾。'],
    ['Bli inte blöt i kylan.', '天冷别把自己弄湿。'],
  ]), 2395),
  freq(adj('envis', '固执的；顽强的', 'stubborn / persistent', 'envist', 'envisa', [
    ['Barnet är envis.', '这孩子很固执。'],
    ['Ett envist motstånd höll i sig.', '一股顽固的阻力一直没散。'],
    ['De envisa frågorna fortsatte.', '那些固执的问题还在继续。'],
    ['Hon är envisare än jag.', '她比我更倔。'],
  ], { comparative: 'envisare', superlative: 'envisast' }), 2396, c(
    [
      ['en', '一个；同一'],
      ['vis', '样子；方式'],
    ],
    '“就一个样子不改”，合起来就是固执的、顽强的。',
  )),
  freq(noun('bricka', 'en', '托盘；牌子；棋子', 'tray / badge / tile', 'brickan', 'brickor', 'brickorna', [
    ['Hon bar kaffet på en bricka.', '她用托盘端咖啡。'],
    ['Brickan är tung.', '这个托盘很重。'],
    ['Lägg brickorna på bordet.', '把那些棋子放到桌上。'],
    ['Brickorna i spelet är gula.', '游戏里那些牌子是黄的。'],
  ]), 2397),
  freq(noun('läsk', 'en', '汽水；软饮料', 'soft drink', 'läsken', null, null, [
    ['Barnen dricker läsk till maten.', '孩子们吃饭时喝汽水。'],
    ['Läsken är för söt.', '这汽水太甜了。'],
    ['Köp läsk till festen.', '给聚会买点汽水。'],
    ['Ställ läsken i kylen.', '把汽水放进冰箱。'],
  ]), 2398),
  freq(other('leve', 'intj', '万岁；愿……长存', 'long live', [
    ['Leve konungen!', '国王万岁！'],
    ['Leve födelsedagsbarnet!', '寿星万岁！'],
    ['Han leve! Hurra, hurra, hurra!', '愿他长寿！好哇，好哇，好哇！'],
    ['Alla skrek leve.', '大家都喊万岁。'],
  ]), 2399),
  freq(verb('boka', '预订；预约', 'to book / to reserve', 'bokar', 'bokade', 'bokat', 'boka', [
    ['Vi bokar bord klockan sju.', '我们订七点的位子。'],
    ['Hon bokade biljetterna i går.', '她昨天订了票。'],
    ['Har ni bokat rum än?', '你们订好房间了吗？'],
    ['Boka inte för sent.', '别订得太晚。'],
  ]), 2400),
]

import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2201–2250. Primary POS is the high-frequency use, not every sense in the book. */
export const list45: Word[] = [
  freq(noun('teater', 'en', '剧院；戏剧', 'theatre / playhouse', 'teatern', 'teatrar', null, [
    ['Teatern ligger vid torget.', '剧院在广场旁边。'],
    ['Vi såg en pjäs på teatern.', '我们在剧院看了一出戏。'],
    ['Staden har två teatrar.', '城里有两家剧院。'],
    ['Teatrarna är fullbokade i kväll.', '那些剧院今晚订满了。'],
  ]), 2201),
  freq(adj('fascinerande', '迷人的；引人入胜的', 'fascinating', 'fascinerande', 'fascinerande', [
    ['Det var en fascinerande historia.', '那是一个引人入胜的故事。'],
    ['Ett fascinerande landskap.', '一片迷人的风景。'],
    ['De fascinerande detaljerna stannar kvar.', '那些迷人的细节会留下来。'],
    ['Hon är fascinerande att lyssna på.', '听她说话很吸引人。'],
  ]), 2202),
  freq(noun('häxa', 'en', '女巫', 'witch', 'häxan', 'häxor', 'häxorna', [
    ['Häxan bor i skogen.', '女巫住在森林里。'],
    ['Barnet ritade en häxa.', '孩子画了一个女巫。'],
    ['I sagan finns tre häxor.', '故事里有三个女巫。'],
    ['Häxorna flög om natten.', '那些女巫夜里飞。'],
  ]), 2203),
  freq(adj('förstörd', '被毁的；糟蹋掉的', 'destroyed / ruined', 'förstört', 'förstörda', [
    ['Staden är förstörd.', '这座城被毁了。'],
    ['Ett förstört hus stod kvar.', '一栋被毁的房子还立在那里。'],
    ['De förstörda vägarna spärrades av.', '那些被毁的路被封了。'],
    ['Kvällen var förstörd efter bråket.', '吵完之后这一晚算是毁了。'],
  ]), 2204),
  freq(verb('stöta', '碰撞；碰上；冒犯', 'to bump / to come across / to offend', 'stöter', 'stötte', 'stött', 'stöt', [
    ['Han stöter i bordet hela tiden.', '他老是碰到桌子。'],
    ['Jag stötte på henne i affären.', '我在店里碰上了她。'],
    ['Åsikten har stött många.', '这个看法冒犯了很多人。'],
    ['Stöt inte till vasen.', '别碰倒花瓶。'],
  ]), 2205),
  freq(other('Indien', 'proper', '印度', 'India', [
    ['De reste till Indien i höstas.', '他们去年秋天去了印度。'],
    ['Indien ligger i Asien.', '印度在亚洲。'],
    ['Maten från Indien är stark.', '印度来的菜很辣。'],
    ['Har du varit i Indien?', '你去过印度吗？'],
  ]), 2206),
  freq(adj('läskig', '吓人的；可怕的（口）', 'scary / creepy (informal)', 'läskigt', 'läskiga', [
    ['Filmen var läskig.', '那部电影很吓人。'],
    ['Ett läskigt hus står vid skogen.', '森林边立着一栋吓人的房子。'],
    ['De läskiga ljuden kom från källaren.', '那些吓人的声音从地下室传来。'],
    ['Berättelsen är för läskig för barn.', '这个故事对孩子来说太吓人了。'],
  ]), 2207),
  freq(adj('sökt', '牵强的', 'far-fetched / strained', 'sökt', 'sökta', [
    ['Förklaringen känns sökt.', '这个解释显得牵强。'],
    ['Ett sökt skämt.', '一个很牵强的笑话。'],
    ['De sökta liknelserna hjälper inte.', '那些牵强的比喻没有帮助。'],
    ['Svaret var för sökt.', '这个回答太牵强了。'],
  ]), 2208),
  freq(verb('besluta', '决定', 'to decide', 'beslutar', 'beslutade', 'beslutat', 'besluta', [
    ['Regeringen beslutar i morgon.', '政府明天做决定。'],
    ['De beslutade att stanna.', '他们决定留下来。'],
    ['Vi har beslutat om en paus.', '我们已经决定休息一下。'],
    ['Besluta själv.', '你自己决定。'],
  ]), 2209, c(
    [
      ['be-', '构词前缀'],
      ['sluta', '结束；了结'],
    ],
    '“把事情了结掉”，合起来就是做出决定。',
  )),
  freq(adj('kommande', '即将到来的；下一（段）的', 'coming / upcoming', 'kommande', 'kommande', [
    ['Den kommande resan är lång.', '即将到来的这趟旅行很长。'],
    ['Ett kommande möte står i kalendern.', '日历上有一个即将到来的会议。'],
    ['De kommande dagarna blir kalla.', '接下来的几天会冷。'],
    ['Hon tänker på den kommande terminen.', '她在想即将到来的学期。'],
  ]), 2210),
  freq(noun('pension', 'en', '养老金；退休', 'pension / retirement', 'pensionen', 'pensioner', null, [
    ['Han går i pension i år.', '他今年退休。'],
    ['Pensionen räcker knappt.', '这退休金几乎不够。'],
    ['Två pensioner betalas ut samtidigt.', '两笔退休金同时发放。'],
    ['Hon lever på pension nu.', '她现在靠退休金生活。'],
  ]), 2211),
  freq(noun('fett', 'ett', '脂肪；油脂', 'fat / grease', 'fettet', 'fetter', null, [
    ['Smöret innehåller mycket fett.', '黄油含很多脂肪。'],
    ['Fettet stelnar i kylen.', '这些油脂在冰箱里会凝固。'],
    ['Olika fetter påverkar kroppen olika.', '不同的脂肪对身体影响不同。'],
    ['Skär bort fettet från köttet.', '把肉上的肥油切掉。'],
  ]), 2212),
  freq(other('Sverige', 'proper', '瑞典', 'Sweden', [
    ['Hon arbetar i Sverige.', '她在瑞典工作。'],
    ['Sverige ligger i Norden.', '瑞典在北欧。'],
    ['Vi flyttade till Sverige i fjol.', '我们去年搬到了瑞典。'],
    ['Kommer ni från Sverige?', '你们从瑞典来吗？'],
  ]), 2213),
  freq(noun('vodka', 'en', '伏特加', 'vodka', 'vodkan', null, null, [
    ['Hon hällde upp en vodka.', '她倒了一杯伏特加。'],
    ['Vodkan är kall.', '这伏特加是冰的。'],
    ['Vi köpte vodka till festen.', '我们为聚会买了伏特加。'],
    ['Vodka görs av säd.', '伏特加是用谷物做的。'],
  ]), 2214),
  freq(noun('konstnär', 'en', '艺术家；画家', 'artist', 'konstnären', 'konstnärer', null, [
    ['Konstnären målar i ateljén.', '这位艺术家在画室里画画。'],
    ['En konstnär bor i huset bredvid.', '一位艺术家住在隔壁。'],
    ['Två konstnärer ställde ut tillsammans.', '两位艺术家一起办了展。'],
    ['Konstnärerna samlades i salen.', '那些艺术家在大厅里集合。'],
  ]), 2215, c([['konst', '艺术'], ['-när', '从事者后缀']], '从事艺术的人，就是艺术家。')),
  freq(noun('heroin', 'ett', '海洛因', 'heroin', 'heroinet', null, null, [
    ['Heroin är olagligt.', '海洛因是非法的。'],
    ['Heroinet beslagtogs i hamnen.', '那些海洛因在港口被扣下了。'],
    ['Han rökte aldrig heroin.', '他从没吸过海洛因。'],
    ['Polisen varnade för heroin.', '警察警告过海洛因。'],
  ]), 2216),
  freq(verb('sprida', '散布；传播', 'to spread', 'sprider', 'spred', 'spridit', 'sprid', [
    ['Nyheten sprider sig snabbt.', '消息传得很快。'],
    ['Vinden spred röken över stan.', '风把烟吹散到全城。'],
    ['De har spridit informationen.', '他们已经把信息传开了。'],
    ['Sprid inte ryktet vidare.', '别把谣言再传下去。'],
  ]), 2217),
  freq(adj('rund', '圆的；丰满的', 'round / plump', 'runt', 'runda', [
    ['Bordet är runt.', '这张桌子是圆的。'],
    ['Ett runt fönster sitter där.', '那里有一扇圆窗。'],
    ['De runda stenarna är släta.', '那些圆石头很光滑。'],
    ['Hon har ett runt ansikte.', '她有一张圆脸。'],
  ]), 2218),
  freq(noun('utsida', 'en', '外面；外表', 'outside / exterior', 'utsidan', 'utsidor', 'utsidorna', [
    ['Utsidan är röd.', '外面是红的。'],
    ['Från utsidan ser huset litet ut.', '从外面看这房子显得小。'],
    ['Askarna har olika utsidor.', '那些盒子外面不一样。'],
    ['Utsidorna ska målas om.', '那些外表面要重新刷。'],
  ]), 2219, c(
    [
      ['ut', '向外'],
      ['sida', '面；边'],
    ],
    '“朝外的那一面”，合起来就是外面、外表。',
  )),
  freq(noun('pjäs', 'en', '戏剧；棋子；一件（摆设）', 'play / piece', 'pjäsen', 'pjäser', 'pjäserna', [
    ['Pjäsen börjar klockan sju.', '戏七点开演。'],
    ['En antik pjäs stod i fönstret.', '窗边摆着一件古董。'],
    ['Han flyttade tre pjäser.', '他走了三步棋子。'],
    ['Pjäserna i schacket är tunga.', '那些棋子很沉。'],
  ]), 2220),
  freq(noun('bebis', 'en', '宝宝；婴儿（口）', 'baby (informal)', 'bebisen', 'bebisar', null, [
    ['Bebisen sover i vagnen.', '宝宝在推车里睡觉。'],
    ['Hon väntar en bebis.', '她在等一个宝宝。'],
    ['Två bebisar grät samtidigt.', '两个宝宝同时哭了。'],
    ['Håll bebisarna varma.', '让那些宝宝保持暖和。'],
  ]), 2221),
  freq(noun('höjd', 'en', '高度；高处；小山', 'height / hill', 'höjden', 'höjder', 'höjderna', [
    ['Höjd över havet är 200 meter.', '海拔高度是200米。'],
    ['Staden ligger på en höjd.', '这座城在高地上。'],
    ['Från höjderna syns sjön.', '从那些高处能看见湖。'],
    ['Höjderna är branta här.', '这里的山丘很陡。'],
  ]), 2222),
  freq(noun('byte', 'ett', '交换；猎物；战利品', 'exchange / prey / loot', 'bytet', 'byten', 'bytena', [
    ['De fick en ny bil i byte.', '他们换到了一辆新车。'],
    ['Bytet gömdes i skogen.', '猎物藏在森林里。'],
    ['Flera byten gjordes samma dag.', '同一天换了好几次。'],
    ['Bytena bars hem i mörkret.', '那些猎物摸黑扛回了家。'],
  ]), 2223),
  freq(adj('romantisk', '浪漫的', 'romantic', 'romantiskt', 'romantiska', [
    ['Filmen är romantisk.', '这部电影很浪漫。'],
    ['Ett romantiskt brev låg i lådan.', '抽屉里有一封浪漫的信。'],
    ['De romantiska sångerna spelades sent.', '那些浪漫的歌很晚还在放。'],
    ['Kvällen blev romantisk vid sjön.', '湖边的夜晚变得很浪漫。'],
  ]), 2224),
  freq(noun('chock', 'en', '震惊；休克', 'shock', 'chocken', 'chocker', null, [
    ['Nyheten blev en chock.', '这消息让人震惊。'],
    ['Chocken satt i länge.', '那一阵震惊持续了很久。'],
    ['Hon fick flera chocker samma vecka.', '她同一周受了好几次惊吓。'],
    ['Efter chocken behövde han vila.', '受惊之后他需要休息。'],
  ]), 2225),
  freq(adj('italiensk', '意大利的', 'Italian', 'italienskt', 'italienska', [
    ['Han lagar italiensk mat.', '他做意大利菜。'],
    ['Ett italienskt vin står på bordet.', '桌上放着一瓶意大利葡萄酒。'],
    ['De italienska gästerna kom sent.', '那些意大利客人来晚了。'],
    ['Hon talar italienska flytande.', '她意大利语说得很流利。'],
  ]), 2226),
  freq(adj('dömd', '被判的；注定的', 'sentenced / doomed', 'dömt', 'dömda', [
    ['Mannen är dömd till fängelse.', '那人被判了监禁。'],
    ['Ett dömt försök från början.', '从一开始就注定失败的尝试。'],
    ['De dömda väntade i salen.', '那些被判刑的人在大厅里等。'],
    ['Planen var dömd att misslyckas.', '这计划注定要失败。'],
  ]), 2227),
  freq(adj('total', '完全的；总的', 'complete / total', 'totalt', 'totala', [
    ['Det blev en total överraskning.', '完全是个意外。'],
    ['Ett totalt mörker föll.', '完全的黑暗降临了。'],
    ['De totala kostnaderna steg.', '那些总费用上升了。'],
    ['Förbudet är totalt här.', '这里是全面禁止。'],
  ]), 2228),
  freq(other('gemensamt', 'adv', '共同；一起', 'jointly / in common', [
    ['Vi äger huset gemensamt.', '我们共同拥有这房子。'],
    ['De har mycket gemensamt.', '他们有很多共同点。'],
    ['Beslutet togs gemensamt.', '这个决定是一起做的。'],
    ['Barnen leker gemensamt i gården.', '孩子们在院子里一起玩。'],
  ]), 2229, c(
    [
      ['gemensam', '共同的'],
      ['-t', '中性/副词词尾'],
    ],
    'gemensam 是“共同的”，gemensamt 就是共同地、一起。',
  )),
  freq(other('trettio', 'other', '三十', 'thirty', [
    ['Hon fyller trettio i år.', '她今年满三十。'],
    ['Det tar trettio minuter.', '这要三十分钟。'],
    ['Bilen kostar trettio tusen.', '这车要三万。'],
    ['Trettio elever ryms i salen.', '教室能坐三十个学生。'],
  ]), 2230),
  freq(noun('varelse', 'en', '生物；人', 'being / creature', 'varelsen', 'varelser', 'varelserna', [
    ['En mänsklig varelse behöver sömn.', '人需要睡眠。'],
    ['Varelsen i sagan var snäll.', '故事里的那个生物很善良。'],
    ['Alla varelser vill leva.', '所有生物都想活着。'],
    ['Varelserna i skogen höll sig undan.', '森林里的那些生物躲开了。'],
  ]), 2231),
  freq(other('före detta', 'phrase', '前任的；以前的', 'former / ex-', [
    ['Hon är min före detta chef.', '她是我以前的老板。'],
    ['Den före detta premiärministern talade.', '那位前首相发了言。'],
    ['Före detta elever kom tillbaka.', '以前的学生回来了。'],
    ['Han träffade sin före detta i stan.', '他在城里碰到了前任。'],
  ]), 2232, c(
    [
      ['före', '在……之前'],
      ['detta', '这个'],
    ],
    '“在成为现在这个之前的”，合起来就是前任的、以前的。',
  )),
  freq(noun('passagerare', 'en', '乘客', 'passenger', 'passageraren', 'passagerare', 'passagerarna', [
    ['En passagerare tappade biljetten.', '一名乘客把票掉了。'],
    ['Passageraren somnade i sätet.', '那位乘客在座位上睡着了。'],
    ['Bussen tar trettio passagerare.', '这辆公交车能坐三十名乘客。'],
    ['Passagerarna steg av vid torget.', '那些乘客在广场下了车。'],
  ]), 2233),
  freq(adj('spänd', '绷紧的；紧张的', 'taut / tense', 'spänt', 'spända', [
    ['Stämningen var spänd.', '气氛很紧张。'],
    ['Ett spänt rep hängde över vägen.', '一根绷紧的绳子挂在路上。'],
    ['De spända axlarna sänktes.', '那些绷紧的肩膀松了下来。'],
    ['Hon väntade med spänd förväntan.', '她紧张而期待地等着。'],
  ]), 2234),
  freq(other('i huvudsak', 'phrase', '基本上；主要', 'essentially / mainly', [
    ['I huvudsak är jag nöjd.', '我基本上满意。'],
    ['Planen följdes i huvudsak.', '计划基本上被执行了。'],
    ['I huvudsak bor de i stan.', '他们主要住在城里。'],
    ['Texten är i huvudsak densamma.', '文本基本上还是一样的。'],
  ]), 2235, c(
    [
      ['i', '在'],
      ['huvudsak', '主要部分'],
    ],
    '“在主要的那一块上”，合起来就是基本上、主要。',
  )),
  freq(verb('lämpa sig', '适合；适宜', 'to be suited / to be suitable', 'lämpar sig', 'lämpade sig', 'lämpat sig', null, [
    ['Rummet lämpar sig för barn.', '这房间适合孩子。'],
    ['Tidpunkten lämpade sig dåligt.', '当时那个时间不太合适。'],
    ['Platsen har lämpat sig väl.', '这个地点一直很合适。'],
    ['Det lämpar sig inte att skrika här.', '这里不宜大声喊。'],
  ]), 2236),
  freq(noun('datum', 'ett', '日期', 'date', 'datumet', 'datum', 'datumen', [
    ['Skriv datumet överst.', '把日期写在最上头。'],
    ['Vi har samma datum.', '我们是同一天。'],
    ['Ett nytt datum behövs.', '需要一个新日期。'],
    ['Datumen står i kalendern.', '那些日期在日历上。'],
  ]), 2237),
  freq(noun('barnvakt', 'en', '保姆；看孩子的人', 'babysitter', 'barnvakten', 'barnvakter', null, [
    ['Vi behöver en barnvakt i kväll.', '我们今晚需要一个保姆。'],
    ['Barnvakten läste en saga.', '保姆读了一个故事。'],
    ['Två barnvakter turades om.', '两个保姆轮流。'],
    ['Hon arbetar som barnvakt.', '她当保姆。'],
  ]), 2238, c([['barn', '孩子'], ['vakt', '看守']], '看守孩子的人，就是保姆。')),
  freq(noun('tank', 'en', '油箱；坦克；罐子', 'tank', 'tanken', 'tankar', 'tankarna', [
    ['Tanken är nästan tom.', '油箱快空了。'],
    ['En tank rullade över bron.', '一辆坦克开过桥。'],
    ['Två tankar stod bakom huset.', '房子后面立着两个罐子。'],
    ['Tankarna fylldes på natten.', '那些油箱夜里加满了。'],
  ]), 2239),
  freq(noun('lojalitet', 'en', '忠诚', 'loyalty', 'lojaliteten', 'lojaliteter', 'lojaliteterna', [
    ['Lojalitet betyder mycket här.', '在这里忠诚很重要。'],
    ['Lojaliteten mot laget syntes.', '对球队的忠诚能看出来。'],
    ['Olika lojaliteter krockade.', '不同的忠诚互相冲突。'],
    ['Lojaliteterna sattes på prov.', '那些忠诚受到了考验。'],
  ]), 2240, c(
    [
      ['lojal', '忠诚的'],
      ['-itet', '性质名词后缀'],
    ],
    '“忠诚这种性质”，合起来就是忠诚。',
  )),
  freq(noun('militär', 'en', '军人；军队', 'serviceman / the military', 'militären', 'militärer', null, [
    ['Militären tog över flygplatsen.', '军队接管了机场。'],
    ['En militär stod vid grinden.', '一名军人站在门口。'],
    ['Höga militärer kom till mötet.', '高级军官们来开会了。'],
    ['Militärerna lämnade lägret.', '那些军人离开了营地。'],
  ]), 2241),
  freq(noun('amiral', 'en', '海军上将', 'admiral', 'amiralen', 'amiraler', 'amiralerna', [
    ['Amiralen talade till besättningen.', '海军上将对船员讲话。'],
    ['En amiral kom ombord.', '一位海军上将来到船上。'],
    ['Två amiraler möttes i hamnen.', '两位海军上将在港口见面。'],
    ['Amiralerna lämnade fartyget.', '那些海军上将离开了船。'],
  ]), 2242),
  freq(noun('bingo', 'en', '宾果（游戏）；说中了（口语）', 'bingo', 'bingon', null, null, [
    ['Bingo spelas på fredagar.', '宾果周五玩。'],
    ['Bingon blev full.', '宾果厅坐满了。'],
    ['Hon vann på bingo.', '她玩宾果赢了。'],
    ['Bingo, precis så var det.', '对了，就是那样。'],
  ]), 2243),
  freq(noun('föremål', 'ett', '物品；对象', 'object / article', 'föremålet', 'föremål', 'föremålen', [
    ['Föremålet låg på bordet.', '那件物品在桌子上。'],
    ['Ett gammalt föremål stod i skåpet.', '柜子里有一件旧物。'],
    ['Flera föremål saknades.', '少了好几件东西。'],
    ['Föremålen ska lämnas tillbaka.', '那些物品要还回去。'],
  ]), 2244, c(
    [
      ['före', '在前面'],
      ['mål', '目标；对象'],
    ],
    '“摆在眼前的对象”，合起来就是物品，也可指关注的对象。',
  )),
  freq(noun('heder', 'en', '荣誉；体面', 'honour / credit', 'hedern', null, null, [
    ['Heder betyder mer än pengar.', '荣誉比钱更重要。'],
    ['Hedern måste räddas.', '体面必须保住。'],
    ['Hon är en heder för skolan.', '她是学校的光荣。'],
    ['På heder och samvete är det sant.', '凭良心说这是真的。'],
  ]), 2245),
  freq(other('hurra', 'intj', '好哇；万岁', 'hurrah / hurray', [
    ['Hurra, vi är klara!', '好哇，我们做完了！'],
    ['Hipp hipp hurra!', '嘿，嘿，万岁！'],
    ['Barnen ropade hurra.', '孩子们喊好哇。'],
    ['Hurra för födelsedagsbarnet!', '生日快乐，万岁！'],
  ]), 2246),
  freq(noun('vinst', 'en', '赢利；奖金；胜利', 'profit / prize / win', 'vinsten', 'vinster', 'vinsterna', [
    ['Företaget går med vinst.', '公司在盈利。'],
    ['Vinsten var tre tusen kronor.', '奖金是三千克朗。'],
    ['Laget tog tre vinster i rad.', '这队连赢了三场。'],
    ['Vinsterna delades ut i kväll.', '那些奖金今晚发了。'],
  ]), 2247),
  freq(adj('skön', '美丽的；舒服的', 'beautiful / comfortable / pleasant', 'skönt', 'sköna', [
    ['Hon sjunger med en skön röst.', '她用好听的嗓子唱歌。'],
    ['Ett skönt bad väntar.', '一个舒服的澡在等着。'],
    ['De sköna dagarna är slut.', '那些美好的日子结束了。'],
    ['Stolen är skön att sitta i.', '这椅子坐着很舒服。'],
  ]), 2248),
  freq(other('numera', 'adv', '如今；现在（相对于以前）', 'nowadays / these days', [
    ['Numera cyklar jag till jobbet.', '如今我骑自行车上班。'],
    ['Hon bor numera i Malmö.', '她现在住在马尔默。'],
    ['Numera är det lättare.', '如今这事更容易了。'],
    ['Vi ses numera sällan.', '我们现在很少见面。'],
  ]), 2249, c(
    [
      ['nu', '现在'],
      ['mera', '更多地；再'],
    ],
    '“比以前更偏向现在”，合起来就是如今。',
  )),
  freq(noun('sal', 'en', '大厅；厅', 'hall / room', 'salen', 'salar', 'salarna', [
    ['Salen var full.', '大厅坐满了。'],
    ['En stor sal ligger till vänster.', '左边有一个大厅。'],
    ['Skolan har tre salar.', '学校有三个厅。'],
    ['Salarna stängdes klockan nio.', '那些厅九点关了。'],
  ]), 2250),
]

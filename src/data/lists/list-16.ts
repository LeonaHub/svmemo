import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 751–800. Primary POS is the high-frequency use, not every sense in the book. */
export const list16: Word[] = [
  freq(adj('intresserad', '感兴趣的', 'interested', 'intresserat', 'intresserade', [
    ['Hon är intresserad av musik.', '她对音乐感兴趣。'],
    ['Ett intresserat barn lyssnade.', '一个感兴趣的孩子在听。'],
    ['De intresserade eleverna ställde frågor.', '那些感兴趣的学生提了问题。'],
    ['Är du intresserad?', '你感兴趣吗？'],
  ]), 751),
  freq(verb('bestämma', '决定；确定', 'to decide / to determine', 'bestämmer', 'bestämde', 'bestämt', 'bestäm', [
    ['Vi bestämmer tiden nu.', '我们现在定时间。'],
    ['Hon bestämde sig för att stanna.', '她当时决定留下。'],
    ['Har ni bestämt datum?', '你们定好日期了吗？'],
    ['Bestäm inte så fort.', '别那么快做决定。'],
  ]), 752),
  freq(verb('låtsas', '假装', 'to pretend', 'låtsas', 'låtsades', 'låtsats', 'låtsas', [
    ['Han låtsas sova.', '他假装睡觉。'],
    ['Hon låtsades inte höra.', '她当时假装没听见。'],
    ['De har låtsats länge.', '他们已经装了很久。'],
    ['Låtsas inte att du inte vet.', '别假装你不知道。'],
  ]), 753),
  freq(verb('hänga', '挂；悬挂', 'to hang', 'hänger', 'hängde', 'hängt', 'häng', [
    ['Jackan hänger i hallen.', '外套挂在门厅里。'],
    ['Hon hängde upp tvätten.', '她把衣服挂了起来。'],
    ['Har du hängt tavlan?', '你把画挂上了吗？'],
    ['Häng jackan där.', '把外套挂在那儿。'],
  ]), 754),
  freq(adj('stilla', '平静的；安静的', 'calm / quiet / still', 'stilla', 'stilla', [
    ['Det var en stilla kväll.', '那是一个平静的晚上。'],
    ['Ett stilla rum.', '一间安静的房间。'],
    ['De stilla vattnen speglar himlen.', '平静的水面映着天空。'],
    ['Sitta stilla, tack.', '请坐着别动。'],
  ]), 755),
  freq(noun('säng', 'en', '床', 'bed', 'sängen', 'sängar', 'sängarna', [
    ['Hon ligger i sängen.', '她躺在床上。'],
    ['Sängen är bäddad.', '床铺好了。'],
    ['Vi har två sängar.', '我们有两张床。'],
    ['Gå och lägg dig i sängen.', '去上床睡觉。'],
  ]), 756),
  freq(noun('själ', 'en', '灵魂；心灵', 'soul / spirit', 'själen', 'själar', 'själarna', [
    ['Kropp och själ hör ihop.', '身体和灵魂是连在一起的。'],
    ['Själen är trött idag.', '心灵今天很累。'],
    ['Inte en själ var där.', '那儿一个人都没有。'],
    ['Det fanns inga själar på gatan.', '街上一个人影都没有。'],
  ]), 757),
  freq(adj('värd', '值……的；值得的', 'worth / worthy of', 'värt', 'värda', [
    ['Tavlan är värd mycket.', '这幅画值很多钱。'],
    ['Det är värt pengarna.', '这值那些钱。'],
    ['De är värda en paus.', '他们值得休息一下。'],
    ['Är det värt besväret?', '这值得费那个劲吗？'],
  ]), 758),
  freq(noun('mål', 'ett', '目标；球门；一餐', 'goal / target / meal', 'målet', 'mål', 'målen', [
    ['Vi har ett tydligt mål.', '我们有一个明确的目标。'],
    ['Målet står längst bort.', '球门在最远处。'],
    ['Han åt tre mål i går.', '他昨天吃了三顿。'],
    ['Målen är olika för varje lag.', '每个队的目标不一样。'],
  ]), 759),
  freq(verb('vända', '转；翻转；回头', 'to turn', 'vänder', 'vände', 'vänt', 'vänd', [
    ['Hon vänder sig om.', '她转过身来。'],
    ['Han vände blad.', '他翻了一页。'],
    ['Vi har vänt om.', '我们已经折回去了。'],
    ['Vänd inte ryggen åt henne.', '别背对着她。'],
  ]), 760),
  freq(verb('bära', '提；扛；穿', 'to carry / to wear', 'bär', 'bar', 'burit', 'bär', [
    ['Hon bär en tung väska.', '她提着一个很重的包。'],
    ['Han bar en blå jacka.', '他当时穿着一件蓝外套。'],
    ['Har du burit stolen hit?', '你把椅子扛过来了吗？'],
    ['Bär det försiktigt.', '小心地提着。'],
  ]), 761),
  freq(adj('ren', '干净的；纯粹的', 'clean / pure', 'rent', 'rena', [
    ['Hon har en ren blus.', '她有一件干净的衬衫。'],
    ['Vattnet är rent.', '水是干净的。'],
    ['De rena handdukarna ligger där.', '那些干净的毛巾在那儿。'],
    ['Det var en ren tillfällighet.', '那纯粹是巧合。'],
  ]), 762),
  freq(other('utom', 'other', '除了；在……之外', 'except / outside / beyond', [
    ['Alla utom jag var där.', '除了我大家都在。'],
    ['Bollen är utom räckhåll.', '球在够不着的地方。'],
    ['Ingen utom hon visste det.', '除了她没有人知道。'],
    ['Han var utom sig av glädje.', '他高兴得不行。'],
  ]), 763, c([['ut', '向外'], ['om', '关于／如果']], '在……之外，合起来就是除了、在范围外。')),
  freq(noun('steg', 'ett', '步；台阶；步骤', 'step', 'steget', 'steg', 'stegen', [
    ['Ta ett steg framåt.', '向前走一步。'],
    ['Steget var för långt.', '那一步太大了。'],
    ['Hon gick tre steg bakåt.', '她往后退了三步。'],
    ['Stegen i trappan är branta.', '楼梯的台阶很陡。'],
  ]), 764),
  freq(verb('gissa', '猜', 'to guess', 'gissar', 'gissade', 'gissat', 'gissa', [
    ['Jag gissar att hon kommer.', '我猜她会来。'],
    ['Han gissade rätt.', '他当时猜对了。'],
    ['Har du gissat svaret?', '你猜过答案了吗？'],
    ['Gissa vad jag har i väskan.', '猜猜我包里有什么。'],
  ]), 765),
  freq(noun('kontakt', 'en', '联系；接触；插座', 'contact / socket', 'kontakten', 'kontakter', 'kontakterna', [
    ['Hon har kontakt med skolan.', '她和学校有联系。'],
    ['Kontakten sitter på väggen.', '插座在墙上。'],
    ['Vi har goda kontakter där.', '我们在那儿有不错的人脉。'],
    ['Ta kontakt med henne.', '跟她取得联系。'],
  ]), 766),
  freq(other('både', 'other', '既……又（与 och 连用）', 'both (… and)', [
    ['Hon talar både svenska och engelska.', '她既说瑞典语又说英语。'],
    ['Vi gick både hit och dit.', '我们既去了这儿又去了那儿。'],
    ['Både du och jag stannar.', '你和我都留下。'],
    ['Det är både billigt och bra.', '这既便宜又好。'],
  ]), 767),
  freq(verb('hinna', '来得及；赶得上', 'to have time / to make it', 'hinner', 'hann', 'hunnit', 'hinn', [
    ['Vi hinner inte bussen.', '我们赶不上公交车。'],
    ['Hon hann hem före regnet.', '她在下雨前赶到了家。'],
    ['Har du hunnit äta?', '你来得及吃了吗？'],
    ['Hinn hem före sex.', '六点前赶到家。'],
  ]), 768),
  freq(verb('stjäla', '偷', 'to steal', 'stjäl', 'stal', 'stulit', 'stjäl', [
    ['Någon stjäl cyklar här.', '有人在这儿偷自行车。'],
    ['Han stal min väska.', '他偷了我的包。'],
    ['De har stulit nyckeln.', '他们偷走了钥匙。'],
    ['Stjäl inte det.', '别偷那个。'],
  ]), 769),
  freq(verb('försvinna', '消失；不见', 'to disappear', 'försvinner', 'försvann', 'försvunnit', 'försvinn', [
    ['Cykeln försvinner ofta här.', '自行车在这儿经常不见。'],
    ['Hon försvann bakom huset.', '她消失在房子后面。'],
    ['Nyckeln har försvunnit.', '钥匙不见了。'],
    ['Försvinn inte så fort.', '别那么快消失。'],
  ]), 770, c(
    [
      ['för-', '离开／彻底'],
      ['svinna', '消失'],
    ],
    '前缀 för- 表示彻底离开，合起来就是消失、不见。',
  )),
  freq(other('genast', 'adv', '立刻；马上', 'immediately / at once', [
    ['Kom genast hit.', '马上到这儿来。'],
    ['Hon svarade genast.', '她立刻回答了。'],
    ['Vi går genast.', '我们马上走。'],
    ['Ring genast om du är sen.', '你要是晚了就立刻打电话。'],
  ]), 771),
  freq(other('istället för', 'phrase', '而不是；代替', 'instead of', [
    ['Ta te istället för kaffe.', '喝茶，别喝咖啡。'],
    ['Vi gick istället för att vänta.', '我们走了，没有等。'],
    ['Hon skrev istället för att ringa.', '她写了，而不是打电话。'],
    ['Köp vatten istället för läsk.', '买水，别买汽水。'],
  ]), 772, c(
    [
      ['istället', '代替'],
      ['för', '为了／对于'],
    ],
    '代替……去做，合起来就是而不是、取代。',
  )),
  freq(verb('byta', '换；交换', 'to change / to exchange', 'byter', 'bytte', 'bytt', 'byt', [
    ['Vill du byta plats?', '你想换座位吗？'],
    ['Hon bytte jacka i går.', '她昨天换了外套。'],
    ['Vi har bytt nummer.', '我们已经换了号码。'],
    ['Byt inte ämne nu.', '现在别换话题。'],
  ]), 773),
  freq(verb('dela', '分；分享', 'to divide / to share', 'delar', 'delade', 'delat', 'dela', [
    ['Vi delar äpplet.', '我们把苹果分开。'],
    ['Hon delade rum med mig.', '她当时和我合住房间。'],
    ['Har ni delat kakan?', '你们把蛋糕分了吗？'],
    ['Dela med dig, tack.', '分享一下，谢谢。'],
  ]), 774),
  freq(verb('låna', '借（入／出）', 'to borrow / to lend', 'lånar', 'lånade', 'lånat', 'låna', [
    ['Får jag låna pennan?', '我能借这支笔吗？'],
    ['Hon lånade mig en bok.', '她借给我一本书。'],
    ['Han har lånat cykeln.', '他借了那辆自行车。'],
    ['Låna inte för mycket pengar.', '别借太多钱。'],
  ]), 775),
  freq(noun('bit', 'en', '一块；一段；一点', 'piece / bit / part', 'biten', 'bitar', 'bitarna', [
    ['Vill du ha en bit kaka?', '你要一块蛋糕吗？'],
    ['Biten är för stor.', '这一块太大了。'],
    ['Hon åt tre bitar.', '她吃了三块。'],
    ['Vi gick en bit av vägen.', '我们走了一段路。'],
  ]), 776),
  freq(noun('ljus', 'ett', '光；灯；蜡烛', 'light / lamp / candle', 'ljuset', 'ljus', 'ljusen', [
    ['Det finns ljus i rummet.', '房间里有光。'],
    ['Ljuset är tänt.', '灯亮着。'],
    ['Hon köpte tre ljus.', '她买了三根蜡烛。'],
    ['Släck ljusen när du går.', '你走的时候把那些灯关掉。'],
  ]), 777),
  freq(adj('bättre', '更好的；较好的', 'better', 'bättre', 'bättre', [
    ['Det är en bättre idé.', '这是个更好的主意。'],
    ['Ett bättre väder idag.', '今天天气更好。'],
    ['De bättre skorna är dyra.', '那些更好的鞋很贵。'],
    ['Hon mår bättre nu.', '她现在好些了。'],
  ]), 778),
  freq(noun('nick', 'en', '点头；头球', 'nod / header', 'nicken', 'nickar', 'nickarna', [
    ['Han gav mig en nick.', '他向我点了一下头。'],
    ['Nicken betydde ja.', '那一下点头表示同意。'],
    ['Hon gjorde två nickar i matchen.', '她在比赛里打进两个头球。'],
    ['Jag såg nicken från andra sidan rummet.', '我从房间另一头看见了那一下点头。'],
  ]), 779),
  freq(other('visst', 'adv', '当然；的确；大概', 'certainly / apparently / probably', [
    ['Visst kan du komma.', '你当然可以来。'],
    ['Det har jag visst inte sagt.', '我当然没那么说过。'],
    ['Hon kommer visst från Umeå.', '她大概是从于默奥来的。'],
    ['Ja visst!', '当然！'],
  ]), 780),
  freq(verb('förtjäna', '应得；赚得', 'to deserve / to earn', 'förtjänar', 'förtjänade', 'förtjänat', 'förtjäna', [
    ['Hon förtjänar en paus.', '她应得休息一下。'],
    ['Han förtjänade mer i går.', '他昨天赚得更多。'],
    ['De har förtjänat priset.', '他们配得上这个奖。'],
    ['Förtjäna förtroendet först.', '先赢得信任。'],
  ]), 781, c(
    [
      ['för-', '加强'],
      ['tjäna', '赚；服务'],
    ],
    '加强“赚／应得”的意思，合起来就是应得、赚得。',
  )),
  freq(other('morse', 'other', '（i morse）今天早上', 'this morning (in i morse)', [
    ['Jag såg henne i morse.', '我今天早上看见她了。'],
    ['I morse regnade det.', '今天早上下雨了。'],
    ['Vi pratade i morse.', '我们今天早上聊过。'],
    ['Har du ätit i morse?', '你今天早上吃过了吗？'],
  ]), 782),
  freq(noun('engelska', 'en', '英语', 'English (language)', 'engelskan', null, null, [
    ['Hon talar engelska.', '她说英语。'],
    ['Engelskan är svår ibland.', '英语有时很难。'],
    ['Vi läser engelska i skolan.', '我们在学校学英语。'],
    ['Kan du engelska?', '你会英语吗？'],
  ]), 783),
  freq(verb('kosta', '花费；值', 'to cost', 'kostar', 'kostade', 'kostat', 'kosta', [
    ['Vad kostar det?', '这个多少钱？'],
    ['Boken kostade hundra kronor.', '那本书当时要一百克朗。'],
    ['Hur mycket har det kostat?', '这已经花了多少钱？'],
    ['Det får kosta lite mer.', '可以稍微贵一点。'],
  ]), 784),
  freq(other('detsamma', 'pron', '同样的事；同样', 'the same', [
    ['Det gör detsamma.', '无所谓。'],
    ['Hon sa detsamma i går.', '她昨天说了同样的话。'],
    ['Vi gör detsamma nästa gång.', '下次我们做同样的事。'],
    ['Kom med detsamma.', '马上来。'],
  ]), 785, c(
    [
      ['det', '它／这（中性）'],
      ['samma', '同样的'],
    ],
    '字面是“那同样的”，合起来就是同样的事。',
  )),
  freq(other('liksom', 'other', '像；如同；好像（口）', 'like / as / sort of', [
    ['Hon sjunger liksom sin mamma.', '她唱得像她妈妈。'],
    ['Jag själv liksom de andra väntade.', '我自己和其他人一样在等。'],
    ['Du hör liksom till familjen.', '你好像已经是家里人了。'],
    ['Han var liksom trött.', '他好像有点累。'],
  ]), 786, c(
    [
      ['lik', '像'],
      ['som', '作为／像'],
    ],
    '像……一样，合起来就是如同、好像。',
  )),
  freq(noun('ö', 'en', '岛', 'island', 'ön', 'öar', 'öarna', [
    ['Vi åker till en ö.', '我们去一座岛。'],
    ['Ön är liten.', '那座岛很小。'],
    ['Det finns tre öar här.', '这里有三座岛。'],
    ['Hon bor på ön.', '她住在岛上。'],
  ]), 787),
  freq(verb('prova', '试；试用；试穿', 'to try out / to try on', 'provar', 'provade', 'provat', 'prova', [
    ['Hon provar en jacka.', '她在试一件外套。'],
    ['Vi provade metoden i går.', '我们昨天试了那个方法。'],
    ['Har du provat skorna?', '你试过这双鞋了吗？'],
    ['Prova den här, tack.', '试试这件，谢谢。'],
  ]), 788),
  freq(noun('närhet', 'en', '附近；接近', 'vicinity / nearness', 'närheten', null, null, [
    ['Hon bor i närheten.', '她住在附近。'],
    ['Närheten till havet är skön.', '靠近海真好。'],
    ['Finns det en butik i närheten?', '附近有商店吗？'],
    ['Vi sökte i närheten av stationen.', '我们在车站附近找。'],
  ]), 789),
  freq(noun('respekt', 'en', '尊重；敬意', 'respect', 'respekten', null, null, [
    ['Visa respekt för andra.', '尊重别人。'],
    ['Respekten för läraren är stor.', '对老师的敬意很大。'],
    ['Han har respekt för henne.', '他尊重她。'],
    ['Vi talar med respekt.', '我们说话带着敬意。'],
  ]), 790),
  freq(adj('van', '习惯的；熟练的', 'used to / practised', 'vant', 'vana', [
    ['Jag är van vid kylan.', '我习惯了寒冷。'],
    ['Ett vant grepp.', '一下熟练的抓握。'],
    ['De vana förarna kör sakta.', '那些熟练的司机开得很慢。'],
    ['Hon är inte van vid maten.', '她不习惯这种食物。'],
  ]), 791),
  freq(noun('område', 'ett', '地区；领域', 'area / field', 'området', 'områden', 'områdena', [
    ['Det är ett tyst område.', '这是一个安静的地区。'],
    ['Området runt sjön är fint.', '湖周围那一带很好。'],
    ['Hon jobbar inom två områden.', '她在两个领域工作。'],
    ['Områdena är olika stora.', '那些地区大小不一。'],
  ]), 792),
  freq(noun('båt', 'en', '船', 'boat / ship', 'båten', 'båtar', 'båtarna', [
    ['Vi tar båten till ön.', '我们坐船去岛上。'],
    ['Båten är gammal.', '那艘船很旧。'],
    ['Två båtar ligger i hamnen.', '两艘船停在港口。'],
    ['Hoppa inte ur båten.', '别从船上跳下去。'],
  ]), 793),
  freq(other('så kallad', 'phrase', '所谓的', 'so-called', [
    ['En så kallad expert kom dit.', '一位所谓的专家去了那里。'],
    ['Det är ett så kallat undantag.', '这是一个所谓的例外。'],
    ['De så kallade vännerna gick hem.', '那些所谓的朋友回家了。'],
    ['Hon bor i ett så kallat kollektiv.', '她住在一个所谓的集体公寓里。'],
  ]), 794, c(
    [
      ['så', '这样／那么'],
      ['kallad', '被称为的'],
    ],
    '被那样称呼的，合起来就是所谓的。',
  )),
  freq(noun('sällskap', 'ett', '陪伴；一群人；社团', 'company / group / society', 'sällskapet', 'sällskap', 'sällskapen', [
    ['Vill du ha sällskap hem?', '你想有人陪你回家吗？'],
    ['Sällskapet väntar utanför.', '那群人在外面等。'],
    ['Två sällskap satt vid bordet.', '两群人坐在桌边。'],
    ['Sällskapen gick vidare.', '那些人继续往前走了。'],
  ]), 795),
  freq(adj('extra', '额外的；特别的', 'extra / additional', 'extra', 'extra', [
    ['Vi har ett extra möte.', '我们有一个额外的会议。'],
    ['Hon fick extra tid.', '她得到了额外的时间。'],
    ['De extra stolarna står där.', '那些加出来的椅子在那儿。'],
    ['Behöver du extra hjälp?', '你需要额外的帮助吗？'],
  ]), 796),
  freq(other('förresten', 'adv', '顺便说一下；对了', 'by the way / incidentally', [
    ['Förresten, har du ätit?', '对了，你吃过了吗？'],
    ['Jag ringer senare, förresten.', '顺便说一下，我稍后打。'],
    ['Hon kommer förresten imorgon.', '对了，她明天来。'],
    ['Vad heter han förresten?', '对了，他叫什么？'],
  ]), 797, c(
    [
      ['för', '为了'],
      ['resten', '其余'],
    ],
    '至于其余的，合起来就是顺便、对了。',
  )),
  freq(other('ingenstans', 'adv', '哪儿也不；无处', 'nowhere / not anywhere', [
    ['Jag hittar den ingenstans.', '我哪儿也找不到它。'],
    ['Hon var ingenstans att se.', '哪儿也看不见她。'],
    ['Nyckeln låg ingenstans synlig.', '钥匙哪儿也看不见。'],
    ['Vi går ingenstans idag.', '我们今天哪儿也不去。'],
  ]), 798, c(
    [
      ['ingen', '没有人／没有'],
      ['stans', '地方'],
    ],
    '字面是“没有地方”，合起来就是哪儿也不、无处。',
  )),
  freq(noun('känsla', 'en', '感觉；感情', 'feeling', 'känslan', 'känslor', 'känslorna', [
    ['Jag har en känsla av att det regnar.', '我感觉要下雨。'],
    ['Känslan var skön.', '那种感觉很舒服。'],
    ['Hon visar sina känslor.', '她表露自己的感情。'],
    ['Det är en stark känsla.', '这是一种强烈的感觉。'],
  ]), 799),
  freq(verb('räkna', '数；计算；指望', 'to count / to calculate', 'räknar', 'räknade', 'räknat', 'räkna', [
    ['Barnet räknar till tio.', '孩子数到十。'],
    ['Hon räknade pengarna.', '她当时在数钱。'],
    ['Har du räknat gästerna?', '你数过客人了吗？'],
    ['Räkna med att det tar tid.', '要料到这会花时间。'],
  ]), 800),
]

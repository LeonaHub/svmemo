import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1951–2000. Primary POS is the high-frequency use, not every sense in the book. */
export const list40: Word[] = [
  freq(noun('akt', 'en', '一幕；仪式；案卷', 'act / ceremony / file', 'akten', 'akter', 'akterna', [
    ['Hjälten dör i sista akten.', '主人公在最后一幕死去。'],
    ['Akten var högtidlig.', '那场仪式很庄重。'],
    ['Läkaren öppnade akten.', '医生打开了那份案卷。'],
    ['Akterna ligger i arkivet.', '那些案卷在档案室里。'],
  ]), 1951),
  freq(adj('tjock', '厚的；胖的', 'thick / fat', 'tjockt', 'tjocka', [
    ['Hon har en tjock tröja.', '她穿着一件厚毛衣。'],
    ['Ett tjockt lager snö täcker taket.', '一层厚雪盖着屋顶。'],
    ['De tjocka väggarna håller värmen.', '那些厚墙能留住热量。'],
    ['Skär inte så tjocka skivor.', '别切那么厚的片。'],
  ]), 1952),
  freq(noun('krav', 'ett', '要求；条件', 'demand / requirement', 'kravet', 'krav', 'kraven', [
    ['Chefen har höga krav på oss.', '上司对我们要求很高。'],
    ['Kravet är orimligt.', '这个要求不合理。'],
    ['Två krav måste uppfyllas.', '必须满足两项要求。'],
    ['Kraven ändrades i år.', '那些要求今年改了。'],
  ]), 1953),
  freq(noun('spegel', 'en', '镜子', 'mirror', 'spegeln', 'speglar', 'speglarna', [
    ['Han tittar i spegeln.', '他在看镜子。'],
    ['Spegeln sitter snett.', '这面镜子挂歪了。'],
    ['Det hänger två speglar i hallen.', '门厅里挂着两面镜子。'],
    ['Torka spegeln, tack.', '请把镜子擦一下。'],
  ]), 1954),
  freq(adj('gyllene', '金色的；黄金般的', 'golden', 'gyllene', 'gyllene', [
    ['Hon bar en gyllene krona.', '她戴着一顶金色的王冠。'],
    ['Ett gyllene tillfälle dök upp.', '一个黄金般的机会出现了。'],
    ['De gyllene skorna glänste.', '那双金色的鞋子在发亮。'],
    ['Ta den gyllene medelvägen.', '走中庸之道。'],
  ]), 1955),
  freq(noun('vinter', 'en', '冬天', 'winter', 'vintern', 'vintrar', 'vintrarna', [
    ['Vintern är kall i år.', '今年冬天很冷。'],
    ['Vi åker skidor på vintern.', '我们冬天去滑雪。'],
    ['Två vintrar i rad var milda.', '连续两个冬天都很温和。'],
    ['Klä dig varmt i vinter.', '今年冬天穿暖和点。'],
  ]), 1956),
  freq(noun('kram', 'en', '拥抱', 'hug', 'kramen', 'kramar', 'kramarna', [
    ['Mormor ville ha en kram.', '外婆想要一个拥抱。'],
    ['Kramen varade länge.', '这个拥抱持续了很久。'],
    ['Vi bytte två kramar vid dörren.', '我们在门口抱了两次。'],
    ['Ge mormor en kram.', '去拥抱一下外婆。'],
  ]), 1957),
  freq(noun('politik', 'en', '政治；政策', 'politics / policy', 'politiken', null, null, [
    ['Hon följer politik varje dag.', '她每天关注政治。'],
    ['Politiken ändrades efter valet.', '政策在选举后变了。'],
    ['Vi pratar sällan politik hemma.', '我们在家很少谈政治。'],
    ['Håll politiken utanför mötet.', '别把政治带进会议。'],
  ]), 1958),
  freq(noun('fartyg', 'ett', '船只', 'ship / vessel', 'fartyget', 'fartyg', 'fartygen', [
    ['Ett stort fartyg kom in i hamnen.', '一艘大船进了港。'],
    ['Fartyget lämnar kajen klockan fem.', '这艘船五点离岸。'],
    ['Flera fartyg väntar ute till havs.', '好几艘船在海上等着。'],
    ['Fartygen lastades över natten.', '那些船在夜里装了货。'],
  ]), 1959, c(
    [
      ['far', '航行（fara 走）'],
      ['tyg', '器具；家伙'],
    ],
    '“用来航行的家伙”，就是船只。',
  )),
  freq(noun('krona', 'en', '克朗；王冠', 'krona (currency) / crown', 'kronan', 'kronor', 'kronorna', [
    ['Det kostar tjugo kronor.', '这个要二十克朗。'],
    ['Kronan ligger på kudden.', '王冠放在枕头上。'],
    ['Hon har tre kronor kvar.', '她还剩三克朗。'],
    ['Betala i kronor, tack.', '请用克朗付款。'],
  ]), 1960),
  freq(noun('lektion', 'en', '课；一节课', 'lesson / class', 'lektionen', 'lektioner', 'lektionerna', [
    ['Lektionen börjar klockan nio.', '这节课九点开始。'],
    ['Hon har en lektion i svenska.', '她有一节瑞典语课。'],
    ['Vi har tre lektioner i dag.', '我们今天有三节课。'],
    ['Kom i tid till lektionen.', '准时来上课。'],
  ]), 1961),
  freq(noun('ammunition', 'en', '弹药', 'ammunition', 'ammunitionen', null, null, [
    ['Det finns ammunition i lådan.', '盒子里有弹药。'],
    ['Ammunitionen är slut.', '弹药打光了。'],
    ['De behöver mer ammunition.', '他们需要更多弹药。'],
    ['Han gömde ammunitionen.', '他把弹药藏了起来。'],
  ]), 1962),
  freq(noun('framgång', 'en', '成功', 'success', 'framgången', 'framgångar', 'framgångarna', [
    ['Filmen blev en stor framgång.', '这部电影获得了巨大成功。'],
    ['Framgången kom sent.', '成功来得很晚。'],
    ['Hon har haft flera framgångar.', '她已经有过好几次成功。'],
    ['Framgångarna följde på varandra.', '那些成功一个接一个。'],
  ]), 1963, c(
    [
      ['fram', '向前'],
      ['gång', '走；进展'],
    ],
    '“向前走得通”，就是成功。',
  )),
  freq(other('såvida', 'other', '如果；只要', 'provided that / if', [
    ['Vi går ut, såvida det inte regnar.', '只要不下雨，我们就出门。'],
    ['Såvida jag förstår rätt, är det sant.', '如果我没理解错，这是真的。'],
    ['Du får låna den, såvida du lämnar tillbaka den.', '你可以借，只要你还回来。'],
    ['Planen håller, såvida alla kommer.', '只要大家都来，这个计划就成立。'],
  ]), 1964, c(
    [
      ['så', '如此；那么'],
      ['vida', '到那种程度'],
    ],
    '“到那种程度为止”，用来设条件：如果、只要。',
  )),
  freq(noun('puss', 'en', '吻（口）；水洼', 'kiss (informal) / puddle', 'pussen', 'pussar', 'pussarna', [
    ['Hon gav honom en puss.', '她给了他一个吻。'],
    ['Pussen varade bara en sekund.', '那个吻只持续了一秒。'],
    ['Barnen ger mormor pussar.', '孩子们给外婆亲了几下。'],
    ['Ge pappa en puss.', '去亲爸爸一下。'],
  ]), 1965),
  freq(adj('skum', '昏暗的；可疑的', 'murky / shady', 'skumt', 'skumma', [
    ['En skum typ stod vid hörnet.', '一个形迹可疑的人站在街角。'],
    ['Ett skumt rum utan fönster.', '一间没有窗户的昏暗房间。'],
    ['De skumma affärerna avslöjades.', '那些见不得光的买卖被揭穿了。'],
    ['Det ser skumt ut.', '这看起来很可疑。'],
  ], { comparative: 'skummare', superlative: 'skummast' }), 1966),
  freq(noun('kokain', 'ett', '可卡因', 'cocaine', 'kokainet', null, null, [
    ['Kokain är ett narkotikum.', '可卡因是一种毒品。'],
    ['Kokainet hittades i väskan.', '可卡因是在包里发现的。'],
    ['Polisen beslagtog kokain.', '警察缴获了可卡因。'],
    ['De gömde kokainet i bilen.', '他们把可卡因藏在车里。'],
  ]), 1967),
  freq(verb('tillbringa', '度过（时间）', 'to spend (time)', 'tillbringar', 'tillbringade', 'tillbringat', 'tillbringa', [
    ['Vi tillbringar sommaren vid kusten.', '我们在海边度过夏天。'],
    ['Hon tillbringade ett år utomlands.', '她在国外待了一年。'],
    ['De har tillbringat kvällen hemma.', '他们在家度过了这个晚上。'],
    ['Tillbringa inte hela dan i sängen.', '别整天躺在床上。'],
  ]), 1968, c(
    [
      ['till', '到；朝向'],
      ['bringa', '带来；打发'],
    ],
    '“把时间带到某处度过”，就是度过一段时间。',
  )),
  freq(noun('beteende', 'ett', '行为；举止', 'behaviour / behavior', 'beteendet', 'beteenden', 'beteendena', [
    ['Hans beteende var konstigt.', '他的举止很奇怪。'],
    ['Beteendet måste ändras.', '这种行为必须改。'],
    ['Olika beteenden ger olika resultat.', '不同的行为会带来不同结果。'],
    ['Beteendena upprepades.', '那些行为又出现了。'],
  ]), 1969, c(
    [
      ['bete', '表现（bete sig）'],
      ['-ende', '名词词尾'],
    ],
    '由“表现自己”变成名词，就是行为、举止。',
  )),
  freq(noun('art', 'en', '种；种类', 'species / kind / type', 'arten', 'arter', 'arterna', [
    ['Den här arten är sällsynt.', '这个物种很稀有。'],
    ['Arten lever bara i norr.', '这个种只生活在北方。'],
    ['Flera arter häckar här.', '好几个物种在这儿筑巢。'],
    ['Den här arten finns bara här.', '这个种只在这儿有。'],
  ]), 1970),
  freq(noun('källa', 'en', '泉；来源', 'spring / source', 'källan', 'källor', 'källorna', [
    ['Vi drack ur en kall källa.', '我们喝了冷泉里的水。'],
    ['Källan ligger i skogen.', '那眼泉在树林里。'],
    ['Hon har flera källor till nyheten.', '这条新闻她有好几个来源。'],
    ['Uppge källan, tack.', '请注明来源。'],
  ]), 1971),
  freq(adj('närvarande', '在场的', 'present', 'närvarande', 'närvarande', [
    ['Alla var närvarande vid mötet.', '所有人都出席了会议。'],
    ['Ett närvarande vittne såg allt.', '一名在场的目击者看到了全部。'],
    ['De närvarande tystnade.', '在场的人安静了下来。'],
    ['För närvarande väntar vi.', '目前我们在等。'],
  ]), 1972, c(
    [
      ['när', '在近处'],
      ['varande', '存在着的（vara）'],
    ],
    '“正在近处存在着的”，就是在场的。',
  )),
  freq(other('utav', 'other', '由；从（口语，= av）', 'out of / of (colloquial for av)', [
    ['En utav dem ljög.', '他们当中有一个撒了谎。'],
    ['Stolen är gjord utav trä.', '这把椅子是木头做的。'],
    ['Jag frågar utav nyfikenhet.', '我是出于好奇才问的。'],
    ['Tre utav fem sa ja.', '五个里面有三个说了同意。'],
  ]), 1973, c(
    [
      ['ut', '出'],
      ['av', '由；从'],
    ],
    '口语里加强的 av，意思仍是由、从。',
  )),
  freq(verb('misstänka', '怀疑', 'to suspect', 'misstänker', 'misstänkte', 'misstänkt', 'misstänk', [
    ['Jag misstänker att hon ljuger.', '我怀疑她在撒谎。'],
    ['Polisen misstänkte honom.', '警察当时怀疑他。'],
    ['Vi har misstänkt det länge.', '我们怀疑这个已经很久了。'],
    ['Misstänk inte dina vänner.', '别怀疑你的朋友。'],
  ]), 1974, c([['miss-', '错／疑'], ['tänka', '想']], '往错处想，合起来就是怀疑。')),
  freq(noun('tunnel', 'en', '隧道', 'tunnel', 'tunneln', 'tunnlar', 'tunnlarna', [
    ['Tåget går genom en tunnel.', '火车穿过一条隧道。'],
    ['Tunneln är mörk och lång.', '这条隧道又黑又长。'],
    ['Två tunnlar möts under berget.', '两条隧道在山下会合。'],
    ['Kör sakta i tunneln.', '在隧道里开慢点。'],
  ]), 1975),
  freq(adj('främmande', '陌生的；外国的', 'strange / foreign', 'främmande', 'främmande', [
    ['En främmande man stod vid grinden.', '一个陌生男人站在大门边。'],
    ['Ett främmande språk är svårt först.', '一门外语一开始很难。'],
    ['De reste i främmande land.', '他们在外国旅行。'],
    ['Vi har främmande ikväll.', '我们今晚有客人。'],
  ]), 1976),
  freq(verb('riva', '撕；拆；挠', 'to tear / to demolish / to scratch', 'river', 'rev', 'rivit', 'riv', [
    ['Katten river i soffan.', '猫在挠沙发。'],
    ['Han rev sönder brevet.', '他把信撕碎了。'],
    ['De har rivit det gamla huset.', '他们拆掉了那栋老房子。'],
    ['Riv inte pappret.', '别把纸撕了。'],
  ]), 1977),
  freq(noun('experiment', 'ett', '实验', 'experiment', 'experimentet', 'experiment', 'experimenten', [
    ['Vi gör ett experiment i labbet.', '我们在实验室做一项实验。'],
    ['Experimentet misslyckades.', '这项实验失败了。'],
    ['Två experiment pågår parallellt.', '两项实验同时进行。'],
    ['Experimenten tar tid.', '那些实验需要时间。'],
  ]), 1978),
  freq(noun('nigger', 'en', '对黑人的种族歧视称呼（歧，勿用）', 'racial slur for a Black person (do not use)', 'niggern', 'niggrar', 'niggrarna', [
    ['Ordet nigger är rasistiskt.', '这个词是种族歧视用语。'],
    ['Använd inte det ordet.', '不要用那个词。'],
    ['Det är ett nedsättande ord.', '这是一个贬损的词。'],
    ['Säg inte så till någon.', '不要对任何人那样说。'],
  ]), 1979),
  freq(noun('elev', 'en', '学生；学员', 'pupil / student', 'eleven', 'elever', 'eleverna', [
    ['Eleven sitter längst fram.', '这个学生坐在最前面。'],
    ['Hon är elev på gymnasiet.', '她是高中学生。'],
    ['Klassen har tjugo elever.', '这个班有二十名学生。'],
    ['Hjälp den nye eleven.', '帮帮那位新同学。'],
  ]), 1980),
  freq(noun('dugg', 'ett', '一点儿（多用于否定）；毛毛雨', 'a bit (esp. in negation) / drizzle', 'dugget', null, null, [
    ['Jag bryr mig inte ett dugg.', '我一点儿也不在乎。'],
    ['Hon lärde sig inte ett dugg.', '她一点儿也没学会。'],
    ['Berätta vartenda dugg.', '把每一点都说出来。'],
    ['Det kom lite dugg i luften.', '空气里飘起一点毛毛雨。'],
  ]), 1981),
  freq(noun('betyg', 'ett', '成绩；评分', 'grade / mark', 'betyget', 'betyg', 'betygen', [
    ['Hon fick ett bra betyg i svenska.', '她瑞典语得了好成绩。'],
    ['Betyget kom i fredags.', '成绩上周五出来了。'],
    ['Han har höga betyg i allt.', '他各科成绩都很高。'],
    ['Betygen räcker till utbildningen.', '这些成绩够上那个专业。'],
  ]), 1982, c(
    [
      ['be-', '构词前缀'],
      ['tyg', '凭据'],
    ],
    '由“出具凭据”（betyga）变成名词，就是成绩、评分。',
  )),
  freq(verb('somna', '睡着', 'to fall asleep', 'somnar', 'somnade', 'somnat', 'somna', [
    ['Barnet somnar fort.', '孩子很快睡着。'],
    ['Hon somnade framför TVn.', '她在电视机前睡着了。'],
    ['Har du somnat redan?', '你已经睡着了吗？'],
    ['Somna inte på lektionen.', '别在课上睡着。'],
  ]), 1983),
  freq(noun('värde', 'ett', '价值', 'value / worth', 'värdet', 'värden', 'värdena', [
    ['Boken har ett högt värde.', '这本书有很高的价值。'],
    ['Värdet på huset steg.', '房子的价值上涨了。'],
    ['Olika värden krockade.', '不同的价值发生了冲突。'],
    ['Värdena har ändrats med tiden.', '那些价值随着时间变了。'],
  ]), 1984),
  freq(noun('villkor', 'ett', '条件', 'condition / terms', 'villkoret', 'villkor', 'villkoren', [
    ['Det är ett villkor för avtalet.', '这是协议的一个条件。'],
    ['Villkoret var tydligt.', '那个条件很清楚。'],
    ['Vi tävlar på lika villkor.', '我们在同等条件下比赛。'],
    ['Villkoren måste förbättras.', '那些条件必须改善。'],
  ]), 1985, c(
    [
      ['vill', '愿意；想要'],
      ['kor', '选择；条件（旧）'],
    ],
    '“愿意接受的条件”，合起来就是条件。',
  )),
  freq(verb('representera', '代表', 'to represent', 'representerar', 'representerade', 'representerat', 'representera', [
    ['Hon representerar skolan i dag.', '她今天代表学校。'],
    ['Han representerade laget i finalen.', '他在决赛中代表了球队。'],
    ['Vi har representerat landet förr.', '我们以前代表过国家。'],
    ['Representera oss på mötet.', '在会上代表我们。'],
  ]), 1986),
  freq(other('intill', 'other', '紧挨着；靠近', 'next to / right by', [
    ['Flickan i huset intill vinkade.', '隔壁房子里的女孩在挥手。'],
    ['Vi bor intill skolan.', '我们住在学校旁边。'],
    ['Bilen stannade intill oss.', '那辆车停在我们紧旁边。'],
    ['Alldeles intill vägen står ett träd.', '紧挨着路有一棵树。'],
  ]), 1987, c(
    [
      ['in', '往里；靠近'],
      ['till', '到'],
    ],
    '“贴近到那里”，就是紧挨着、靠近。',
  )),
  freq(noun('lampa', 'en', '灯', 'lamp', 'lampan', 'lampor', 'lamporna', [
    ['Lampan hänger över bordet.', '灯挂在桌子上方。'],
    ['Tänd lampan, tack.', '请开灯。'],
    ['Två lampor är trasiga.', '两盏灯坏了。'],
    ['Släck lampan när du går.', '走的时候把灯关掉。'],
  ]), 1988),
  freq(noun('kommendör', 'en', '海军上校', 'naval captain / commander', 'kommendören', 'kommendörer', 'kommendörerna', [
    ['En kommendör gav ordern.', '一名海军上校下了命令。'],
    ['Kommendören stod på bryggan.', '那位海军上校站在舰桥上。'],
    ['Två kommendörer kom till mötet.', '两名海军上校来开会。'],
    ['Kommendörerna samlades ombord.', '那些海军上校在船上集合。'],
  ]), 1989),
  freq(verb('mata', '喂；送入', 'to feed', 'matar', 'matade', 'matat', 'mata', [
    ['Hon matar katterna varje kväll.', '她每天晚上喂猫。'],
    ['Han matade papper i skrivaren.', '他把纸送进了打印机。'],
    ['Vi har matat fåglarna.', '我们已经喂过鸟了。'],
    ['Mata inte fåglarna här.', '不要在这儿喂鸟。'],
  ]), 1990),
  freq(adj('brittisk', '英国的', 'British', 'brittiskt', 'brittiska', [
    ['En brittisk soldat stod vakt.', '一名英国士兵在站岗。'],
    ['Ett brittiskt pass räcker.', '一本英国护照就够了。'],
    ['De brittiska öarna ligger i väster.', '不列颠群岛在西边。'],
    ['Maten var brittisk.', '这饭是英式的。'],
  ]), 1991, c(
    [
      ['britt', '不列颠人'],
      ['-isk', '……的'],
    ],
    '“不列颠的”，就是英国的。',
  )),
  freq(noun('rep', 'ett', '绳子；排练（口）', 'rope / rehearsal (informal)', 'repet', 'rep', 'repen', [
    ['Dra i repet.', '拉拉那根绳子。'],
    ['Repet gick av.', '绳子断了。'],
    ['Vi behöver två starka rep.', '我们需要两根结实的绳子。'],
    ['Repen låg på däcket.', '那些绳子在甲板上。'],
  ]), 1992),
  freq(other('officiellt', 'adv', '官方地；正式地', 'officially', [
    ['Nyheten kom officiellt i dag.', '这条消息今天正式公布。'],
    ['Hon är officiellt anställd nu.', '她现在是正式聘用的。'],
    ['Det är inte officiellt än.', '这还没有正式宣布。'],
    ['Säg det officiellt på mötet.', '在会上正式说出来。'],
  ]), 1993),
  freq(verb('bekräfta', '确认；证实', 'to confirm', 'bekräftar', 'bekräftade', 'bekräftat', 'bekräfta', [
    ['Polisen bekräftar uppgiften.', '警方证实了这条消息。'],
    ['Hon bekräftade tiden i går.', '她昨天确认了时间。'],
    ['Har ni bekräftat bokningen?', '你们确认预订了吗？'],
    ['Bekräfta att du kommer.', '确认一下你会来。'],
  ]), 1994),
  freq(verb('övertyga', '说服；使确信', 'to convince', 'övertygar', 'övertygade', 'övertygat', 'övertyga', [
    ['Jag övertygar honom inte.', '我说服不了他。'],
    ['Hon övertygade oss om sanningen.', '她让我们相信了真相。'],
    ['Han har övertygat juryn.', '他说服了陪审团。'],
    ['Övertyga mig.', '说服我。'],
  ]), 1995, c(
    [
      ['över', '越过；彻底'],
      ['tyga', '表明；让人看见（构词词根）'],
    ],
    '“彻底让人看见是真的”，就是说服、使确信。',
  )),
  freq(noun('kanin', 'en', '兔子', 'rabbit', 'kaninen', 'kaniner', 'kaninerna', [
    ['Kaninen sitter i buren.', '兔子坐在笼子里。'],
    ['En kanin sprang över gården.', '一只兔子跑过院子。'],
    ['De har två kaniner hemma.', '他们家里有两只兔子。'],
    ['Mata kaninen i kväll.', '今晚喂兔子。'],
  ]), 1996),
  freq(noun('stålar', null, '钱（俚，只用复数）', 'money (slang, plural only)', null, 'stålar', 'stålarna', [
    ['Har du några stålar?', '你身上有钱吗？'],
    ['Han tjänade stålar på affären.', '他靠这笔买卖赚了钱。'],
    ['Stålarna är slut.', '钱花光了。'],
    ['Vi behöver mer stålar.', '我们还需要钱。'],
  ]), 1997, c(
    [
      ['stål', '钢'],
      ['-ar', '复数词尾'],
    ],
    '旧时用钢件当钱，俚语里“钢”的复数就是钱。',
  )),
  freq(noun('soppa', 'en', '汤；（口）一团糟', 'soup / (informal) mess', 'soppan', 'soppor', 'sopporna', [
    ['Vi äter soppa till lunch.', '我们午餐喝汤。'],
    ['Soppan är för salt.', '这汤太咸了。'],
    ['Hon kokade två soppor.', '她煮了两锅汤。'],
    ['Häll upp soppan nu.', '现在把汤盛出来。'],
  ]), 1998),
  freq(noun('orm', 'en', '蛇', 'snake', 'ormen', 'ormar', 'ormarna', [
    ['En orm låg i gräset.', '草里躺着一条蛇。'],
    ['Ormen är inte giftig.', '这条蛇没有毒。'],
    ['Två ormar solade på stenen.', '两条蛇在石头上晒太阳。'],
    ['Rör inte ormen.', '别碰那条蛇。'],
  ]), 1999),
  freq(noun('dygn', 'ett', '一昼夜', '24-hour period / day and night', 'dygnet', 'dygn', 'dygnen', [
    ['Resan varade tre dygn.', '这趟旅行持续了三个昼夜。'],
    ['Dygnet har tjugofyra timmar.', '一昼夜有二十四小时。'],
    ['Hon jobbade två dygn i sträck.', '她连续工作了两个昼夜。'],
    ['Butiken är öppen dygnet runt.', '这家店一昼夜都开着。'],
  ]), 2000),
]

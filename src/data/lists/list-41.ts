import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2001–2050. Primary POS is the high-frequency use, not every sense in the book. */
export const list41: Word[] = [
  freq(other('Kanada', 'proper', '加拿大', 'Canada', [
    ['Hon flyttar till Kanada i höst.', '她今年秋天搬去加拿大。'],
    ['Kanada har två officiella språk.', '加拿大有两种官方语言。'],
    ['Vi åkte tåg genom Kanada.', '我们坐火车穿过了加拿大。'],
    ['Kommer paketet från Kanada?', '包裹是从加拿大来的吗？'],
  ]), 2001),
  freq(verb('offra', '牺牲；献祭', 'to sacrifice', 'offrar', 'offrade', 'offrat', 'offra', [
    ['Hon offrar sin tid för barnen.', '她为孩子们牺牲自己的时间。'],
    ['Han offrade livet.', '他牺牲了生命。'],
    ['De har offrat mycket för detta.', '他们为此牺牲了很多。'],
    ['Offra inte hälsan.', '别拿健康去牺牲。'],
  ]), 2002),
  freq(adj('modern', '现代的；时髦的', 'modern / fashionable', 'modernt', 'moderna', [
    ['Hon vill ha en modern cykel.', '她想要一辆时髦的自行车。'],
    ['Ett modernt schema passar oss.', '一份现代的时间表适合我们。'],
    ['De moderna tågen går oftare.', '那些现代列车开得更勤。'],
    ['Lägenheten känns modern och ljus.', '这套公寓显得又现代又亮。'],
  ]), 2003),
  freq(adj('följande', '接下来的；下列的', 'following / subsequent', 'följande', 'följande', [
    ['Läs följande text högt.', '把下面这段文字大声读出来。'],
    ['Det följande steget är att vänta.', '接下来的一步是等待。'],
    ['De följande dagarna var kalla.', '接下来的那些天很冷。'],
    ['Svara på följande frågor.', '回答下列问题。'],
  ]), 2004, c([['följa', '跟随'], ['-ende', '正在……的']], '跟在后面的，合起来就是接下来的、下列的。')),
  freq(verb('förmoda', '推测；以为', 'to assume / to suppose', 'förmodar', 'förmodade', 'förmodat', 'förmoda', [
    ['Jag förmodar att han kommer.', '我推测他会来。'],
    ['Hon förmodade att det var sant.', '她当时以为那是真的。'],
    ['Vi har förmodat fel.', '我们推测错了。'],
    ['Förmoda inte det värsta.', '别往最坏处想。'],
  ]), 2005, c(
    [
      ['för-', '加强前缀'],
      ['moda', '料想（构词词根）'],
    ],
    '“往前料想”，就是推测、以为。',
  )),
  freq(noun('djungel', 'en', '丛林', 'jungle', 'djungeln', 'djungler', 'djunglerna', [
    ['De gick vilse i djungeln.', '他们在丛林里迷了路。'],
    ['Djungeln är tät här.', '这里的丛林很密。'],
    ['Det finns regnskogar och djungler.', '有雨林，也有丛林。'],
    ['Djunglerna är svåra att ta sig igenom.', '那些丛林很难穿过去。'],
  ]), 2006),
  freq(adj('magisk', '神奇的；有魔力的', 'magic / magical', 'magiskt', 'magiska', [
    ['Det var en magisk kväll vid sjön.', '那是湖边一个神奇的晚上。'],
    ['Ett magiskt ljus fyllde rummet.', '一道神奇的光照满了房间。'],
    ['De magiska orden hjälpte inte.', '那些有魔力的话没有用。'],
    ['Gränsen känns magisk i dag.', '这条界线今天显得很神奇。'],
  ]), 2007),
  freq(noun('förbannelse', 'en', '诅咒；灾祸', 'curse / plague', 'förbannelsen', 'förbannelser', 'förbannelserna', [
    ['Det lät som en förbannelse.', '那听起来像一句诅咒。'],
    ['Förbannelsen följde släkten.', '那个诅咒跟着这个家族。'],
    ['Gamla förbannelser skrämmer henne.', '那些古老的诅咒让她害怕。'],
    ['Förbannelserna ekade i rummet.', '那些咒骂在房间里回响。'],
  ]), 2008, c(
    [
      ['förbanna', '诅咒；咒骂'],
      ['-else', '行为名词后缀'],
    ],
    '由“诅咒”这个动作变成名词，就是一句诅咒、一场灾祸。',
  )),
  freq(other('för närvarande', 'phrase', '目前；眼下', 'at present / currently', [
    ['För närvarande bor hon i Malmö.', '她目前住在马尔默。'],
    ['Vi har för närvarande inga platser kvar.', '我们眼下已经没有名额了。'],
    ['För närvarande är det lugnt.', '目前还算平静。'],
    ['Arbetet är för närvarande pausat.', '这项工作眼下暂停了。'],
  ]), 2009, c(
    [
      ['för', '就……而言'],
      ['närvarande', '当前的；在场的'],
    ],
    '“就当前在场的情况而言”，就是目前、眼下。',
  )),
  freq(noun('cell', 'en', '细胞；牢房；（电池）电芯', 'cell', 'cellen', 'celler', null, [
    ['En cell delar sig snabbt.', '一个细胞分裂得很快。'],
    ['Cellen i fängelset var kall.', '监狱里的那间牢房很冷。'],
    ['Kroppen har miljarder celler.', '身体里有数十亿个细胞。'],
    ['Byt cellen i fjärrkontrollen.', '把遥控器里的电芯换掉。'],
  ]), 2010),
  freq(noun('get', 'en', '山羊', 'goat', 'geten', 'getter', null, [
    ['En get står i hagen.', '一只山羊站在围场里。'],
    ['Geten äter gräs vid staketet.', '这只山羊在篱笆边吃草。'],
    ['Två getter följde efter oss.', '两只山羊跟着我们。'],
    ['Mjölka geten först.', '先给山羊挤奶。'],
  ]), 2011),
  freq(noun('huvudvärk', 'en', '头痛', 'headache', 'huvudvärken', null, null, [
    ['Hon har huvudvärk efter skärmen.', '看完屏幕她头痛。'],
    ['Huvudvärken släppte efter vilan.', '休息之后头痛好了。'],
    ['Stark huvudvärk väcker honom.', '剧烈的头痛把他弄醒。'],
    ['Ta en tablett mot huvudvärken.', '吃一片药治头痛。'],
  ]), 2012, c([['huvud', '头'], ['värk', '持续的痛']], '头上持续的痛，合起来就是头痛。')),
  freq(noun('yrke', 'ett', '职业', 'profession / occupation / trade', 'yrket', 'yrken', 'yrkena', [
    ['Läkare är ett krävande yrke.', '医生是一份辛苦的职业。'],
    ['Yrket kräver lång utbildning.', '这个职业需要很长的训练。'],
    ['Hon har prövat tre yrken.', '她试过三种职业。'],
    ['Yrkena i byn har ändrats.', '村里那些职业已经变了。'],
  ]), 2013),
  freq(other('snett', 'adv', '歪地；不对劲', 'askew / awry', [
    ['Hatten sitter snett.', '帽子戴歪了。'],
    ['Han tittade snett på henne.', '他斜眼看了她一眼。'],
    ['Det gick snett från början.', '从一开始就不对劲。'],
    ['Bilen stod snett mot kanten.', '车斜着停在路边。'],
  ]), 2014, c(
    [
      ['sned', '歪的'],
      ['-t', '中性/副词词尾'],
    ],
    'sned 是“歪的”，snett 就是歪地；事情走偏也说 gå snett。',
  )),
  freq(other('vänligt', 'adv', '友好地；和气地', 'kindly / in a friendly way', [
    ['Hon log vänligt mot barnet.', '她对孩子友好地笑了。'],
    ['Han svarade vänligt i telefon.', '他在电话里答得很和气。'],
    ['De vinkade vänligt från bussen.', '他们从公交车上友好地挥手。'],
    ['Säg det vänligt, tack.', '请和气地说。'],
  ]), 2015, c([['vänlig', '友好的'], ['-t', '副词词尾']], '以友好的方式，合起来就是友好地、和气地。')),
  freq(verb('anmäla', '举报；报名；通知', 'to report / to register / to notify', 'anmäler', 'anmälde', 'anmält', 'anmäl', [
    ['Han anmäler stölden till polisen.', '他向警察举报这起盗窃。'],
    ['Hon anmälde sig till kursen.', '她报了那门课。'],
    ['Vi har anmält felet.', '我们已经把故障报上去了。'],
    ['Anmäl dig i tid.', '及时报名。'],
  ]), 2016, c(
    [
      ['an-', '朝向'],
      ['mäla', '陈述（旧）'],
    ],
    '“向某处陈述”，就是举报、报名、通知。',
  )),
  freq(noun('artikel', 'en', '文章；（一类）商品；冠词', 'article / item', 'artikeln', 'artiklar', null, [
    ['En artikel i tidningen retade många.', '报上的一篇文章惹恼了很多人。'],
    ['Artikeln kom ut i går.', '这篇文章昨天刊出。'],
    ['Butiken säljer tre artiklar i den serien.', '这家店卖该系列的三种商品。'],
    ['Läs artikeln högt för klassen.', '把这篇文章大声读给全班听。'],
  ]), 2017),
  freq(other('såsom', 'adv', '诸如；作为', 'such as / as', [
    ['Hon gillar frukt, såsom äpplen och päron.', '她喜欢水果，诸如苹果和梨。'],
    ['Han talade såsom representant för gruppen.', '他作为小组代表发言。'],
    ['Djur såsom hundar och katter bor här.', '诸如狗和猫这样的动物住在这里。'],
    ['Hon agerade såsom lärare.', '她是以老师的身份行事的。'],
  ]), 2018, c(
    [
      ['så', '如此'],
      ['som', '像；作为'],
    ],
    '“就像……那样”，列举时是诸如，身份上是作为。',
  )),
  freq(adj('smutsig', '脏的；不干净的', 'dirty', 'smutsigt', 'smutsiga', [
    ['Skjortan är smutsig.', '这件衬衫是脏的。'],
    ['Ett smutsigt golv.', '一块脏地板。'],
    ['De smutsiga händerna måste tvättas.', '那些脏手必须洗。'],
    ['Affären var smutsig.', '那笔买卖不干净。'],
  ], { comparative: 'smutsigare', superlative: 'smutsigast' }), 2019, c(
    [
      ['smuts', '污垢'],
      ['-ig', '带有……的'],
    ],
    '“带有污垢的”，就是脏的；也可指买卖不正当。',
  )),
  freq(verb('vittna', '作证；表明', 'to testify / to bear witness', 'vittnar', 'vittnade', 'vittnat', 'vittna', [
    ['Hon vittnar i rätten i morgon.', '她明天在法庭作证。'],
    ['Han vittnade mot grannen.', '他指证了邻居。'],
    ['Flera har vittnat om samma sak.', '好几个人都为此作过证。'],
    ['Beslutet vittnar om dåligt omdöme.', '这个决定表明判断力很差。'],
  ]), 2020, c(
    [
      ['vittne', '证人'],
      ['-a', '动词词尾'],
    ],
    '由“证人”变成动词，就是作证；也可表示某事表明了什么。',
  )),
  freq(verb('upphöra', '停止；终止', 'to cease / to stop', 'upphör', 'upphörde', 'upphört', 'upphör', [
    ['Regnet upphör snart.', '雨很快会停。'],
    ['Verksamheten upphörde i fjol.', '那项业务去年终止了。'],
    ['De har upphört med reklam.', '他们已经停止做广告了。'],
    ['Upphör med det genast!', '立刻停下来！'],
  ]), 2021, c(
    [
      ['upp', '起来；停住'],
      ['höra', '进行（构词词根，同德语 aufhören）'],
    ],
    '“停住不再进行”，就是停止、终止。',
  )),
  freq(verb('begrava', '埋葬；掩埋', 'to bury', 'begraver', 'begravde', 'begravt', 'begrav', [
    ['De begravar henne på lördag.', '他们星期六埋葬她。'],
    ['Han begravdes nära sjön.', '他被埋在湖边。'],
    ['Vi har begravt katten i trädgården.', '我们已经把猫埋在花园里了。'],
    ['Begrav inte sanningen.', '别把真相埋掉。'],
  ]), 2022),
  freq(noun('myndighet', 'en', '当局；政府机构；（法律上的）成年', 'authority / majority', 'myndigheten', 'myndigheter', null, [
    ['En myndighet skickade brevet.', '一个政府机构寄了这封信。'],
    ['Myndigheten svarar inom tre veckor.', '这个机构三周内答复。'],
    ['Två myndigheter samarbetar nu.', '两个当局现在在合作。'],
    ['Kontakta myndigheten i dag.', '今天联系这个机构。'],
  ]), 2023, c([['myndig', '成年的；有权的'], ['-het', '性质、状态']], '有权或已成年的状态，合起来就是当局，或法律上的成年。')),
  freq(verb('utnyttja', '利用；剥削', 'to make use of / to exploit', 'utnyttjar', 'utnyttjade', 'utnyttjat', 'utnyttja', [
    ['Hon utnyttjar tiden till läsning.', '她利用时间读书。'],
    ['De utnyttjade hans godhet.', '他们利用了他的好心。'],
    ['Han har utnyttjat sin ställning.', '他利用了自己的职位。'],
    ['Utnyttja inte barnen.', '别剥削孩子。'],
  ]), 2024, c(
    [
      ['ut', '充分；向外'],
      ['nyttja', '使用'],
    ],
    '“把用处使尽”，就是利用；损人利己时就是剥削。',
  )),
  freq(verb('ingå', '包含在内；订立', 'to be included / to enter into', 'ingår', 'ingick', 'ingått', 'ingå', [
    ['Frakten ingår i priset.', '运费包含在价格里。'],
    ['De ingick äktenskap i juni.', '他们六月结了婚。'],
    ['Vi har ingått ett avtal.', '我们已经订立了一份协议。'],
    ['Ingå inte det avtalet.', '别签那份协议。'],
  ]), 2025, c(
    [
      ['in', '进入'],
      ['gå', '走'],
    ],
    '“走进去成为一部分”，就是包含在内；走进协议就是订立。',
  )),
  freq(other('till följd av', 'phrase', '由于；因……的结果', 'as a result of / owing to', [
    ['Till följd av stormen ställdes tåget in.', '由于风暴，那班火车取消了。'],
    ['Hon blev sjuk till följd av kylan.', '她因寒冷而生病了。'],
    ['Priserna steg till följd av kriget.', '价格因战争上涨了。'],
    ['Till följd av felet kom vi sent.', '由于那个差错我们迟到了。'],
  ]), 2026, c(
    [
      ['till', '到；由于'],
      ['följd', '后果'],
      ['av', '由'],
    ],
    '“到由某事引起的后果”，就是由于、因……的结果。',
  )),
  freq(verb('råna', '抢劫', 'to rob', 'rånar', 'rånade', 'rånat', 'råna', [
    ['De rånar banker om natten.', '他们夜里抢银行。'],
    ['Någon rånade henne på vägen.', '有人在路上抢劫了她。'],
    ['Butiken har rånats två gånger.', '这家店已经被抢过两次。'],
    ['Råna ingen.', '谁也别抢。'],
  ]), 2027),
  freq(adj('kinesisk', '中国的', 'Chinese', 'kinesiskt', 'kinesiska', [
    ['En kinesisk lampa hänger i fönstret.', '一盏中国灯挂在窗上。'],
    ['Ett kinesiskt tecken stod på dörren.', '门上有一个汉字。'],
    ['De kinesiska gästerna kom tidigt.', '那些中国客人来得很早。'],
    ['Hon lagar kinesisk mat i kväll.', '她今晚做中国菜。'],
  ]), 2028, c([['kines', '中国人'], ['-isk', '……的']], '和中国人有关的，合起来就是中国的。')),
  freq(adj('flygande', '飞行的；飞着的', 'flying', 'flygande', 'flygande', [
    ['En flygande boll träffade rutan.', '一只飞着的球打中了窗玻璃。'],
    ['Ett flygande löv landade i kaffet.', '一片飞着的叶子落进了咖啡。'],
    ['De flygande fåglarna vände söderut.', '那些飞着的鸟转向南方。'],
    ['Han fick en flygande start.', '他一开始就势头很猛。'],
  ]), 2029, c([['flyga', '飞'], ['-ende', '正在……的']], '正在飞的，合起来就是飞行的、飞着的。')),
  freq(noun('tränare', 'en', '教练', 'coach / trainer', 'tränaren', 'tränare', 'tränarna', [
    ['En ny tränare börjar i morgon.', '一位新教练明天上任。'],
    ['Tränaren bytte ut laget.', '教练把阵容换了。'],
    ['Två tränare står vid sidan.', '两位教练站在场边。'],
    ['Tränarna samlade barnen.', '那些教练把孩子们集合起来。'],
  ]), 2030, c([['träna', '训练'], ['-are', '……的人']], '训练别人的人，合起来就是教练。')),
  freq(verb('passera', '经过；通过', 'to pass (by)', 'passerar', 'passerade', 'passerat', 'passera', [
    ['Bussen passerar skolan klockan åtta.', '公交车八点经过学校。'],
    ['Vi passerade bron i dimman.', '我们在雾里过了那座桥。'],
    ['Tåget har passerat stationen.', '火车已经过了车站。'],
    ['Passera inte på rött.', '别闯红灯过去。'],
  ]), 2031),
  freq(verb('haja', '明白；搞懂（口）', 'to get it / to grasp (informal)', 'hajar', 'hajade', 'hajat', 'haja', [
    ['Hajar du vad jag menar?', '你明白我的意思吗？'],
    ['Jag hajade ingenting först.', '我一开始什么都没搞懂。'],
    ['Har du hajat reglerna?', '你搞懂规则了吗？'],
    ['Haja nu, det är viktigt.', '现在搞明白，这很重要。'],
  ]), 2032),
  freq(adj('lokal', '当地的；局部的', 'local', 'lokalt', 'lokala', [
    ['En lokal tidning ligger på bordet.', '一份当地报纸放在桌上。'],
    ['Ett lokalt tåg stannar här.', '一列区间火车在这儿停。'],
    ['De lokala butikerna stänger tidigt.', '那些本地商店关门早。'],
    ['Dimman är lokal vid sjön.', '雾只在湖边这一带。'],
  ]), 2033),
  freq(noun('överenskommelse', 'en', '协议；约定', 'agreement / settlement', 'överenskommelsen', 'överenskommelser', 'överenskommelserna', [
    ['Vi nådde en överenskommelse.', '我们达成了一项协议。'],
    ['Överenskommelsen gäller i ett år.', '这项约定有效期一年。'],
    ['Flera överenskommelser skrevs under.', '好几项协议签了字。'],
    ['Överenskommelserna måste hållas.', '那些约定必须遵守。'],
  ]), 2034, c(
    [
      ['överens', '一致；谈妥'],
      ['komma', '达成；到来'],
      ['-else', '行为名词后缀'],
    ],
    '“谈妥之后达成的结果”，就是协议、约定。',
  )),
  freq(noun('dussin', 'ett', '一打（十二个）', 'dozen', 'dussinet', 'dussin', 'dussinen', [
    ['Hon köpte ett dussin ägg.', '她买了一打鸡蛋。'],
    ['Dussinet är fullt.', '这一打齐了。'],
    ['Vi behöver två dussin koppar.', '我们需要两打杯子。'],
    ['Dussinen stod i kartongen.', '那些按打装的货在纸箱里。'],
  ]), 2035),
  freq(other('femton', 'other', '十五', 'fifteen', [
    ['Hon fyller femton i augusti.', '她八月满十五岁。'],
    ['Vi ses klockan femton.', '我们十五点见。'],
    ['Det kostar femton kronor.', '这个要十五克朗。'],
    ['Femton personer väntar ute.', '十五个人在外面等。'],
  ]), 2036),
  freq(adj('orättvis', '不公平的；偏心的', 'unfair / unjust', 'orättvist', 'orättvisa', [
    ['Domen kändes orättvis.', '这个判决显得不公平。'],
    ['Ett orättvist beslut retade oss.', '一个不公平的决定惹恼了我们。'],
    ['De orättvisa reglerna ändrades.', '那些不公平的规则改了。'],
    ['Var inte orättvis mot henne.', '别对她偏心。'],
  ]), 2037, c([['o-', '不'], ['rättvis', '公平的']], '不是公平的，合起来就是不公平的、偏心的。')),
  freq(noun('sand', 'en', '沙子', 'sand', 'sanden', null, null, [
    ['Det ligger sand på altanen.', '阳台上有沙子。'],
    ['Sanden var het vid vattnet.', '水边的沙子很烫。'],
    ['Hon hällde sand i hinken.', '她把沙子倒进桶里。'],
    ['Tvätta sanden ur håret.', '把头发里的沙子洗掉。'],
  ]), 2038),
  freq(noun('kid', 'ett', '山羊羔', 'kid (baby goat)', null, null, null, [
    ['Ett kid låg i höet.', '一只山羊羔躺在干草里。'],
    ['Geten slickade sitt kid.', '山羊在舔自己的羊羔。'],
    ['Vi köpte ett kid till gården.', '我们给农场买了一只山羊羔。'],
    ['Kid behöver varm mjölk.', '山羊羔需要温牛奶。'],
  ]), 2039),
  freq(noun('hamn', 'en', '港口；港湾', 'harbour / port', 'hamnen', 'hamnar', null, [
    ['Båten går in i en hamn.', '船驶进一个港口。'],
    ['Hamnen är stängd i natt.', '这个港口今夜关闭。'],
    ['Två hamnar ligger norrut.', '北边有两个港口。'],
    ['Vi möts i hamnen klockan sex.', '我们六点在港口碰面。'],
  ]), 2040),
  freq(noun('motstånd', 'ett', '抵抗；阻力；电阻', 'resistance / opposition / resistor', 'motståndet', 'motstånd', 'motstånden', [
    ['Förslaget mötte motstånd.', '这个提议遇到了抵抗。'],
    ['Motståndet mot lagen växte.', '对这项法律的阻力在增大。'],
    ['Det sitter tre motstånd på kretskortet.', '电路板上有三个电阻。'],
    ['Motstånden blev för heta.', '那些电阻太烫了。'],
  ]), 2041, c(
    [
      ['mot', '对着'],
      ['stånd', '站立；立场'],
    ],
    '“对着站着不让”，就是抵抗、阻力；电路里挡住电流的元件也叫 motstånd。',
  )),
  freq(noun('helikopter', 'en', '直升机', 'helicopter', 'helikoptern', 'helikoptrar', null, [
    ['En helikopter landade på taket.', '一架直升机落在屋顶上。'],
    ['Helikoptern lyfte i dimman.', '这架直升机在雾里起飞了。'],
    ['Två helikoptrar flög över sjön.', '两架直升机从湖上飞过。'],
    ['Vänta på helikoptern vid fältet.', '在场地边等那架直升机。'],
  ]), 2042),
  freq(noun('torn', 'ett', '塔；（国际象棋）车', 'tower / rook', 'tornet', 'torn', 'tornen', [
    ['Kyrkan har ett högt torn.', '教堂有一座高塔。'],
    ['Tornet syns från sjön.', '从湖上能看见那座塔。'],
    ['Slottet har fyra torn.', '城堡有四座塔。'],
    ['Tornen i schacket står i hörnen.', '国际象棋里的车在边角。'],
  ]), 2043),
  freq(noun('råtta', 'en', '老鼠；大鼠', 'rat', 'råttan', 'råttor', null, [
    ['En råtta sprang över golvet.', '一只老鼠从地板上跑过。'],
    ['Råttan gömde sig bakom lådan.', '那只老鼠藏在箱子后面。'],
    ['Två råttor bor i källaren.', '两只老鼠住在地下室。'],
    ['Jaga inte råttan med skon.', '别用鞋子去打那只老鼠。'],
  ]), 2044),
  freq(adj('berömd', '著名的', 'famous / celebrated', 'berömt', 'berömda', [
    ['Hon är en berömd författare.', '她是一位著名作家。'],
    ['Ett berömt museum ligger där.', '那里有一座著名的博物馆。'],
    ['De berömda målningarna hänger i salen.', '那些名画挂在大厅里。'],
    ['Staden är berömd för osten.', '这座城因奶酪而著名。'],
  ]), 2045, c(
    [
      ['be-', '构词前缀'],
      ['römd', '被称赞的（berömma 称赞）'],
    ],
    '“被人称赞过的”，就是著名的。',
  )),
  freq(verb('fastna', '卡住；粘住；留下', 'to get stuck / to get caught', 'fastnar', 'fastnade', 'fastnat', 'fastna', [
    ['Dragkedjan fastnar varje gång.', '拉链每次都会卡住。'],
    ['Hon fastnade i hissen i går.', '她昨天困在电梯里了。'],
    ['Nyckeln har fastnat i låset.', '钥匙卡在锁里了。'],
    ['Fastna inte i dörren.', '别卡在门上。'],
  ]), 2046),
  freq(noun('tunga', 'en', '舌头', 'tongue', 'tungan', 'tungor', 'tungorna', [
    ['Hon brände tungan på soppan.', '她被汤烫到了舌头。'],
    ['Tungan gör ont.', '舌头疼。'],
    ['Barnen räcker ut tungorna.', '孩子们把舌头伸出来。'],
    ['Tungorna var röda av saften.', '那些舌头被果汁染红了。'],
  ]), 2047),
  freq(noun('onsdag', 'en', '星期三', 'Wednesday', 'onsdagen', 'onsdagar', null, [
    ['Vi ses på onsdag.', '我们星期三见。'],
    ['Onsdagen blev regnig.', '这个星期三下雨了。'],
    ['Två onsdagar i rad var tomma.', '连续两个星期三都空着。'],
    ['Kom på onsdagen före lunch.', '星期三午饭前来。'],
  ]), 2048),
  freq(noun('fabrik', 'en', '工厂', 'factory / plant', 'fabriken', 'fabriker', null, [
    ['En fabrik ligger utanför stan.', '城外有一家工厂。'],
    ['Fabriken stänger i juli.', '这家工厂七月停工。'],
    ['Två fabriker släpper ut rök.', '两家工厂在冒烟。'],
    ['Hon cyklar till fabriken.', '她骑车去工厂。'],
  ]), 2049),
  freq(noun('skratt', 'ett', '笑声；一笑', 'laugh / laughter', 'skrattet', 'skratt', 'skratten', [
    ['Ett skratt hördes från köket.', '厨房里传来一声笑。'],
    ['Skrattet tystnade fort.', '这阵笑声很快停了。'],
    ['Flera skratt fyllde rummet.', '好几阵笑声充满了房间。'],
    ['Skratten ekade i salen.', '那些笑声在大厅里回响。'],
  ]), 2050),
]

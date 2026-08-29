import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1701–1750. Primary POS is the high-frequency use, not every sense in the book. */
export const list35: Word[] = [
  freq(other('dyrt', 'adv', '昂贵地；代价高地', 'expensively / dearly', [
    ['Resan kostar dyrt i år.', '这趟旅行今年很贵。'],
    ['Hon fick betala dyrt för misstaget.', '她为那个失误付出了高昂代价。'],
    ['Vi köpte dyrt i centrum.', '我们在市中心买得很贵。'],
    ['Det slutar dyrt om du väntar.', '你再等下去会更亏。'],
  ]), 1701, c([['dyr', '贵的'], ['-t', '副词词尾']], '由“贵的”变成副词，就是昂贵地。')),
  freq(verb('supa', '酗酒；喝（烈酒）', 'to booze / to drink heavily', 'super', 'söp', 'supit', 'sup', [
    ['Han super för mycket.', '他酒喝得太多。'],
    ['De söp hela natten.', '他们喝了一整夜。'],
    ['Har du supit sen sist?', '从那以后你又喝过吗？'],
    ['Sup inte i morgon.', '明天别喝。'],
  ]), 1702),
  freq(noun('kvarter', 'ett', '街区；街坊', 'block / neighbourhood', 'kvarteret', 'kvarter', 'kvarteren', [
    ['Vi bor i ett tyst kvarter.', '我们住在一个安静的街区。'],
    ['Kvarteret vaknar tidigt.', '这个街区醒得很早。'],
    ['Skolan ligger tre kvarter härifrån.', '学校离这儿三个街区。'],
    ['Kvarteren kring parken är dyra.', '公园周围那些街区很贵。'],
  ]), 1703),
  freq(other('itu', 'adv', '成两半；裂开', 'in two / apart', [
    ['Glaset gick itu.', '玻璃杯裂成了两半。'],
    ['Hon slog vasen itu.', '她把花瓶打成了两半。'],
    ['Pinnen bröts itu.', '木棍断成了两截。'],
    ['Gå inte itu nu.', '可别现在就散架。'],
  ]), 1704, c(
    [
      ['i', '成；在'],
      ['tu', '二（旧词）'],
    ],
    '“成了二”，就是裂成两半。',
  )),
  freq(other('med andra ord', 'phrase', '换句话说；也就是说', 'in other words', [
    ['Hon är trött, med andra ord.', '换句话说，她累了。'],
    ['Med andra ord: vi stannar hemma.', '也就是说：我们留在家里。'],
    ['Han ljög, med andra ord.', '换句话说，他撒谎了。'],
    ['Säg samma sak med andra ord.', '用别的话说同一件事。'],
  ]), 1705, c(
    [
      ['med', '用'],
      ['andra', '别的'],
      ['ord', '词'],
    ],
    '用别的词来说，合起来就是换句话说。',
  )),
  freq(other('snarare', 'adv', '宁可；不如说', 'rather / sooner', [
    ['Jag tar teet snarare än kaffet.', '我宁可喝茶也不喝咖啡。'],
    ['Det är snarare ett skämt.', '那不如说是个玩笑。'],
    ['Hon blir snarare glad än ledsen.', '她与其说难过，不如说高兴。'],
    ['Kom snarare i dag än i morgon.', '宁可今天来，别明天来。'],
  ]), 1706, c(
    [
      ['snart', '很快'],
      ['-are', '比较级'],
    ],
    '“更快地（选这个）”，合起来就是宁可、不如说。',
  )),
  freq(adj('vild', '野生的；狂野的', 'wild', 'vilt', 'vilda', [
    ['Ett vilt djur sprang över vägen.', '一只野兽跑过马路。'],
    ['Hon har vild fantasi.', '她想象力很狂野。'],
    ['De vilda blommorna växer här.', '那些野花长在这儿。'],
    ['Stormen var vild i natt.', '夜里风暴很狂。'],
  ]), 1707),
  freq(noun('granne', 'en', '邻居', 'neighbour', 'grannen', 'grannar', 'grannarna', [
    ['Min granne hälsar alltid.', '我的邻居总是打招呼。'],
    ['Grannen lånar socker ibland.', '那位邻居有时来借糖。'],
    ['Vi har tre grannar i huset.', '这栋房子里我们有三个邻居。'],
    ['Fråga grannen om hjälp.', '向邻居求助。'],
  ]), 1708),
  freq(verb('riskera', '冒……的风险；拿……冒险', 'to risk / to jeopardise', 'riskerar', 'riskerade', 'riskerat', 'riskera', [
    ['Du riskerar att komma sent.', '你有迟到的风险。'],
    ['Hon riskerade pengarna på spelet.', '她拿那些钱去赌。'],
    ['Har ni riskerat för mycket?', '你们冒的险是不是太大了？'],
    ['Riskera inte hälsan.', '别拿健康冒险。'],
  ]), 1709, c([['risk', '风险'], ['-era', '做成动词']], '由“风险”变成动词，就是去冒险。')),
  freq(other('ovanför', 'other', '在……上方', 'above', [
    ['Lampan hänger ovanför bordet.', '灯挂在桌子上方。'],
    ['Fågeln flög ovanför taken.', '鸟从屋顶上方飞过。'],
    ['Namnet står ovanför dörren.', '名字写在门的上方。'],
    ['Sitt inte ovanför oss i trappan.', '别坐在楼梯上我们上头。'],
  ]), 1710, c([['ovan', '在上面'], ['för', '在……一侧']], '在上面那一侧，合起来就是在……上方。')),
  freq(other('förbannat', 'adv', '该死地；非常（粗）', 'damn / damned (coarse)', [
    ['Det är förbannat kallt.', '冷得要命。'],
    ['Jag är förbannat trött.', '我累得要命。'],
    ['Det gick förbannat bra.', '进展得该死地好。'],
    ['Hon blev förbannat arg.', '她气得要命。'],
  ]), 1711, c(
    [
      ['för-', '加强前缀'],
      ['banna', '咒骂'],
      ['-t', '中性/副词词尾'],
    ],
    '“被狠狠咒过的”，作副词就是该死地、非常。',
  )),
  freq(adj('femte', '第五的', 'fifth', 'femte', 'femte', [
    ['Hon bor på femte våningen.', '她住在五楼。'],
    ['Det är min femte dag här.', '这是我在这儿的第五天。'],
    ['De kom på femte plats.', '他们得了第五名。'],
    ['Vänta till den femte maj.', '等到五月五号。'],
  ]), 1712),
  freq(verb('filma', '拍电影；摄像', 'to film', 'filmar', 'filmade', 'filmat', 'filma', [
    ['Hon filmar barnen i parken.', '她在公园给孩子们摄像。'],
    ['Han filmade hela festen.', '他把整场聚会都拍了下来。'],
    ['Har ni filmat färdigt?', '你们拍完了吗？'],
    ['Filma inte utan lov.', '未经允许别拍。'],
  ]), 1713, c([['film', '电影'], ['-a', '做成动词']], '由“电影”变成动词，就是拍电影、摄像。')),
  freq(noun('främling', 'en', '陌生人；外乡人', 'stranger / foreigner', 'främlingen', 'främlingar', 'främlingarna', [
    ['En främling stod vid grinden.', '一个陌生人站在大门边。'],
    ['Främlingen frågade om vägen.', '那个陌生人问路。'],
    ['Byborna litar inte på främlingar.', '村民不信任外乡人。'],
    ['Främlingarna fick sova i ladan.', '那些外乡人睡在谷仓里。'],
  ]), 1714, c(
    [
      ['främmande', '陌生的；外来的'],
      ['-ling', '这类人'],
    ],
    '“外来的人”，就是陌生人、外乡人。',
  )),
  freq(adj('falsk', '假的；不诚实的', 'false / fake / deceitful', 'falskt', 'falska', [
    ['Det var ett falskt rykte.', '那是个假传闻。'],
    ['Ett falskt leende räcker inte.', '一个假笑不够。'],
    ['De falska nycklarna passade inte.', '那些假钥匙对不上。'],
    ['Var inte falsk mot vänner.', '别对朋友口是心非。'],
  ]), 1715),
  freq(noun('fantasi', 'en', '想象；想象力；幻想', 'imagination / fantasy', 'fantasien', 'fantasier', 'fantasierna', [
    ['Barnet har en stark fantasi.', '这孩子想象力很强。'],
    ['Fantasien tar slut ibland.', '想象力有时会用尽。'],
    ['Hon har många fantasier om resan.', '她对这趟旅行有很多幻想。'],
    ['Använd fantasien nu.', '现在发挥想象力。'],
  ]), 1716),
  freq(other('norr', 'adv', '向北；在北面', 'north / northwards', [
    ['Huset ligger norr om ån.', '房子在河的北面。'],
    ['De bor norr om stan.', '他们住在城北。'],
    ['Skogen ligger norr om vägen.', '树林在路的北面。'],
    ['Gå norr om kyrkan.', '从教堂北边走。'],
  ]), 1717),
  freq(other('sjutton', 'other', '十七', 'seventeen', [
    ['Hon fyller sjutton i maj.', '她五月满十七岁。'],
    ['Vi ses klockan sjutton.', '我们十七点见。'],
    ['Det kostar sjutton kronor.', '这个要十七克朗。'],
    ['Sjutton personer väntar.', '十七个人在等。'],
  ]), 1718),
  freq(adj('beroende', '依赖的；取决于……的', 'dependent (on)', 'beroende', 'beroende', [
    ['Barnet är beroende av mamma.', '这孩子依赖妈妈。'],
    ['Företaget är beroende av export.', '这家公司依赖出口。'],
    ['De är beroende av bussen här.', '他们在这儿离不开公交车。'],
    ['Vi är beroende av vädret.', '我们取决于天气。'],
  ]), 1719, c([['bero', '取决于'], ['-ende', '……的']], '取决于别人或别的事物的，合起来就是依赖的。')),
  freq(verb('upprepa', '重复', 'to repeat', 'upprepar', 'upprepade', 'upprepat', 'upprepa', [
    ['Kan du upprepa frågan?', '你能把问题重复一遍吗？'],
    ['Hon upprepade namnet långsamt.', '她慢慢地重复了那个名字。'],
    ['Vi har upprepat felet.', '我们把错误又犯了一遍。'],
    ['Upprepa efter mig.', '跟我重复。'],
  ]), 1720, c(
    [
      ['upp', '再；向上'],
      ['repa', '再来一遍（构词词根）'],
    ],
    '“再来一遍”，就是重复。',
  )),
  freq(other('lyckligt', 'adv', '幸福地；幸运地', 'happily / fortunately', [
    ['De levde lyckligt där.', '他们在那儿过得很幸福。'],
    ['Allt slutade lyckligt.', '一切幸运地收了尾。'],
    ['Hon log lyckligt mot oss.', '她幸福地朝我们笑。'],
    ['Barnen lekte lyckligt i parken.', '孩子们在公园里玩得很开心。'],
  ]), 1721, c([['lycklig', '幸福的'], ['-t', '副词词尾']], '由“幸福的”变成副词，就是幸福地、幸运地。')),
  freq(noun('kejsare', 'en', '皇帝', 'emperor', 'kejsaren', 'kejsare', 'kejsarna', [
    ['En kejsare styrde landet då.', '当时一位皇帝统治这个国家。'],
    ['Kejsaren bor i palatset.', '皇帝住在宫殿里。'],
    ['Två kejsare nämns i boken.', '书里提到两位皇帝。'],
    ['Kejsarna möttes i Rom.', '那些皇帝在罗马会面。'],
  ]), 1722),
  freq(adj('spansk', '西班牙的；西班牙语的', 'Spanish', 'spanskt', 'spanska', [
    ['En spansk vän bor här.', '一位西班牙朋友住在这儿。'],
    ['Ett spanskt namn står på dörren.', '门上写着一个西班牙语名字。'],
    ['De spanska gästerna kommer i kväll.', '那些西班牙客人今晚来。'],
    ['Maten är spansk.', '这是西班牙菜。'],
  ]), 1723),
  freq(noun('medlem', 'en', '成员；会员', 'member', 'medlemmen', 'medlemmar', 'medlemmarna', [
    ['Hon är medlem i klubben.', '她是俱乐部会员。'],
    ['Medlemmen betalar i dag.', '这位会员今天缴费。'],
    ['Två medlemmar saknas.', '缺了两名成员。'],
    ['Bli medlem här.', '在这儿入会。'],
  ]), 1724, c([['med', '与／一起'], ['lem', '肢体／成员']], '在一起的一员，合起来就是成员、会员。')),
  freq(verb('landa', '着陆；降落', 'to land', 'landar', 'landade', 'landat', 'landa', [
    ['Planet landar klockan tre.', '飞机三点着陆。'],
    ['Fågeln landade på taket.', '鸟落在屋顶上。'],
    ['Har ni landat än?', '你们着陆了吗？'],
    ['Landa mjukt, tack.', '请轻轻降落。'],
  ]), 1725, c([['land', '陆地'], ['-a', '做成动词']], '落到陆地上，合起来就是着陆、降落。')),
  freq(other('uppenbart', 'adv', '显然；明显', 'obviously / apparently', [
    ['Det är uppenbart fel.', '这显然是错的。'],
    ['Hon är uppenbart trött.', '她明显很累。'],
    ['Det blev uppenbart efteråt.', '事后就显而易见了。'],
    ['Uppenbart visste han ingenting.', '显然他什么都不知道。'],
  ]), 1726, c(
    [
      ['upp', '出来；向上'],
      ['enbar', '显现的；明白的'],
      ['-t', '中性/副词词尾'],
    ],
    '“已经显现出来的”，就是显然、明显。',
  )),
  freq(noun('bio', 'en', '电影院；电影（去看）', 'cinema / the movies', 'bion', null, null, [
    ['Vi går på bio i kväll.', '我们今晚去看电影。'],
    ['Bion ligger vid torget.', '电影院在广场旁边。'],
    ['Hon jobbar på bio på helgerna.', '她周末在电影院上班。'],
    ['Träffas utanför bion.', '在电影院外面碰头。'],
  ]), 1727),
  freq(other('söderut', 'adv', '向南', 'southwards', [
    ['Vi kör söderut i morgon.', '我们明天往南开。'],
    ['Fåglarna flyger söderut.', '鸟往南飞。'],
    ['Staden ligger söderut.', '那座城在南边。'],
    ['Gå söderut längs vägen.', '沿着路往南走。'],
  ]), 1728, c(
    [
      ['söder', '南'],
      ['ut', '向外'],
    ],
    '“朝南向外”，合起来就是向南。',
  )),
  freq(noun('bete', 'ett', '诱饵', 'bait', 'betet', 'beten', 'betena', [
    ['Han sätter ett bete på kroken.', '他把诱饵挂在钩上。'],
    ['Betet tog slut fort.', '诱饵很快用完了。'],
    ['Vi köpte två beten i affären.', '我们在店里买了两个诱饵。'],
    ['Betena låg i burken.', '那些诱饵在罐子里。'],
  ]), 1729),
  freq(noun('sorg', 'en', '悲伤；哀痛', 'sorrow / grief', 'sorgen', 'sorger', 'sorgerna', [
    ['Hon bar på en tung sorg.', '她心里压着一份沉重的悲伤。'],
    ['Sorgen kom efter beskedet.', '消息传来后哀痛袭来。'],
    ['Alla har sina sorger.', '人人都有自己的悲伤。'],
    ['Dela sorgen med oss.', '和我们分担这份哀痛。'],
  ]), 1730),
  freq(noun('detalj', 'en', '细节；零件', 'detail / part', 'detaljen', 'detaljer', 'detaljerna', [
    ['En detalj saknas i planen.', '计划里缺一个细节。'],
    ['Detaljen är viktig.', '这个细节很重要。'],
    ['Hon minns alla detaljer.', '她记得所有细节。'],
    ['Kolla detaljen på ritningen.', '核对图纸上的这个零件。'],
  ]), 1731),
  freq(noun('förrädare', 'en', '叛徒', 'traitor', 'förrädaren', 'förrädare', 'förrädarna', [
    ['Han kallades för förrädare.', '他被称为叛徒。'],
    ['Förrädaren lämnade staden.', '那个叛徒离开了城市。'],
    ['De sökte efter förrädare.', '他们在搜捕叛徒。'],
    ['Förrädarna greps i natt.', '那些叛徒夜里被抓住了。'],
  ]), 1732, c(
    [
      ['förråda', '出卖；背叛'],
      ['-are', '做这事的人'],
    ],
    '“做背叛这件事的人”，就是叛徒。',
  )),
  freq(adj('försvunnen', '失踪的；消失的', 'missing / vanished', 'försvunnet', 'försvunna', [
    ['Hunden är försvunnen sedan i går.', '狗从昨天起就失踪了。'],
    ['Ett försvunnet brev dök upp.', '一封失踪的信又出现了。'],
    ['De försvunna nycklarna låg i lådan.', '那些失踪的钥匙在抽屉里。'],
    ['Katten är försvunnen igen.', '猫又失踪了。'],
  ]), 1733, c([['för', '离开'], ['svunnen', '已消失的']], '已经离开并消失的，合起来就是失踪的。')),
  freq(noun('moster', 'en', '姨妈；舅妈（母系）', 'maternal aunt', 'mostern', 'mostrar', 'mostrarna', [
    ['Min moster bor i Malmö.', '我姨妈住在马尔默。'],
    ['Mostern kommer på söndag.', '姨妈星期天来。'],
    ['Jag har två mostrar.', '我有两位姨妈。'],
    ['Ring moster i kväll.', '今晚给姨妈打电话。'],
  ]), 1734, c(
    [
      ['mor', '母亲'],
      ['syster', '姐妹'],
    ],
    '母亲的姐妹，就是姨妈。',
  )),
  freq(adj('djup', '深的；深刻的', 'deep', 'djupt', 'djupa', [
    ['Det är en djup sjö.', '那是一个深湖。'],
    ['Ett djupt hål fanns i isen.', '冰上有一个深洞。'],
    ['De djupa skogarna är mörka.', '那些深林很暗。'],
    ['Vattnet är djupt här.', '这儿的水很深。'],
  ]), 1735),
  freq(noun('kontanter', null, '现金', 'cash', 'kontanterna', 'kontanter', 'kontanterna', [
    ['Har du kontanter på dig?', '你身上有现金吗？'],
    ['Vi tar bara kontanter här.', '我们这儿只收现金。'],
    ['Hon betalade med kontanter.', '她用现金付的。'],
    ['Ta ut kontanter i automaten.', '在取款机取现金。'],
  ]), 1736),
  freq(noun('soffa', 'en', '沙发', 'sofa / couch', 'soffan', 'soffor', 'sofforna', [
    ['Katten sover i soffan.', '猫在沙发上睡。'],
    ['Soffan är för kort för honom.', '这张沙发对他来说太短。'],
    ['Vi köpte två soffor i går.', '我们昨天买了两张沙发。'],
    ['Sitt i soffan och vila.', '坐到沙发上休息。'],
  ]), 1737),
  freq(noun('cancer', 'en', '癌症', 'cancer', 'cancern', null, null, [
    ['Läkaren talar om cancer.', '医生在谈癌症。'],
    ['Cancern upptäcktes tidigt.', '癌症发现得很早。'],
    ['Forskning om cancer pågår.', '癌症研究还在进行。'],
    ['Hon fick hjälp mot cancern.', '她得到了针对癌症的帮助。'],
  ]), 1738),
  freq(adj('seriös', '认真的；严肃的', 'serious / genuine', 'seriöst', 'seriösa', [
    ['Det är ett seriöst erbjudande.', '这是一个认真的提议。'],
    ['Ett seriöst samtal väntar.', '一次严肃的谈话在等着。'],
    ['De seriösa köparna kommer i dag.', '那些认真的买家今天来。'],
    ['Var seriös nu.', '现在认真一点。'],
  ]), 1739),
  freq(noun('gryning', 'en', '黎明', 'dawn', 'gryningen', 'gryningar', 'gryningarna', [
    ['Vi gick ut i gryningen.', '我们在黎明时分出门。'],
    ['Gryningen kom långsamt.', '黎明来得很慢。'],
    ['De kalla gryningarna är vackra.', '那些寒冷的黎明很美。'],
    ['Gryningarna över sjön är tysta.', '湖上的那些黎明很安静。'],
  ]), 1740, c(
    [
      ['gry', '破晓'],
      ['-ning', '行为名词后缀'],
    ],
    '由“破晓”这个动作变成名词，就是黎明。',
  )),
  freq(noun('erbjudande', 'ett', '提议；报价', 'offer', 'erbjudandet', 'erbjudanden', 'erbjudandena', [
    ['Jag fick ett erbjudande i dag.', '我今天收到一个提议。'],
    ['Erbjudandet gäller till fredag.', '这个报价星期五截止。'],
    ['De skickade tre erbjudanden.', '他们发来三个报价。'],
    ['Erbjudandena var för dyra.', '那些报价太贵了。'],
  ]), 1741, c([['erbjuda', '提供'], ['-ande', '行为／事物']], '提供出来的事物，合起来就是提议、报价。')),
  freq(noun('tant', 'en', '大妈；阿姨（口语）', 'lady / auntie (informal)', 'tanten', 'tanter', 'tanterna', [
    ['En tant satt på bänken.', '一位大妈坐在长椅上。'],
    ['Tanten log mot barnet.', '那位阿姨对孩子笑了。'],
    ['Flera tanter väntade i kön.', '好几位大妈在排队。'],
    ['Tanterna drack kaffe.', '那些阿姨在喝咖啡。'],
  ]), 1742),
  freq(verb('närma sig', '靠近；临近', 'to approach', 'närmar sig', 'närmade sig', 'närmat sig', 'närma sig', [
    ['Tåget närmar sig stationen.', '火车正在靠近车站。'],
    ['De närmade sig huset i mörkret.', '他们在黑暗中靠近那栋房子。'],
    ['Vintern har närmat sig tidigt.', '冬天来得早。'],
    ['Närma dig inte hunden.', '别靠近那条狗。'],
  ]), 1743, c([['närma', '使靠近'], ['sig', '自己']], '使自己靠近，合起来就是靠近、临近。')),
  freq(noun('älskare', 'en', '情人（男）', 'lover', 'älskaren', 'älskare', 'älskarna', [
    ['Hon har en älskare i stan.', '她在城里有一个情人。'],
    ['Älskaren väntade i bilen.', '那个情人在车里等。'],
    ['Två älskare nämns i boken.', '书里提到两个情人。'],
    ['Älskarna träffades sällan.', '那些情人很少见面。'],
  ]), 1744, c([['älska', '爱'], ['-are', '……的人']], '相爱的人，这里指情人。')),
  freq(noun('september', 'en', '九月', 'September', null, null, null, [
    ['Skolan börjar i september.', '学校九月开学。'],
    ['September är oftast mild här.', '这儿的九月通常温和。'],
    ['Hon fyller år i september.', '她九月过生日。'],
    ['Boka resan till september.', '把旅行订在九月。'],
  ]), 1745),
  freq(adj('inre', '内部的；内心的', 'inner / internal', 'inre', 'inre', [
    ['Det är en inre angelägenhet.', '这是内部事务。'],
    ['Hon sökte inre frid.', '她在寻找内心的平静。'],
    ['De inre rummen är mörka.', '那些内部的房间很暗。'],
    ['Det innersta rummet är låst.', '最里面的房间锁着。'],
  ], { superlative: 'innerst' }), 1746),
  freq(adj('svartsjuk', '吃醋的；妒忌的', 'jealous', 'svartsjukt', 'svartsjuka', [
    ['Han blir svartsjuk utan orsak.', '他无缘无故就吃醋。'],
    ['Ett svartsjukt svar.', '一个吃醋的回答。'],
    ['De svartsjuka blickarna märktes.', '那些妒忌的目光被注意到了。'],
    ['Hon är svartsjuk på kollegan.', '她妒忌那个同事。'],
  ]), 1747, c(
    [
      ['svart', '黑的'],
      ['sjuk', '有病的'],
    ],
    '“黑病”，就像心里发黑生病，合起来就是吃醋、妒忌。',
  )),
  freq(noun('slav', 'en', '奴隶', 'slave', 'slaven', 'slavar', 'slavarna', [
    ['Han behandlades som en slav.', '他被当成奴隶对待。'],
    ['Slaven fick ingen lön.', '那个奴隶没有工钱。'],
    ['De befriade många slavar.', '他们解放了许多奴隶。'],
    ['Slavarna reste sig.', '那些奴隶起来反抗了。'],
  ]), 1748),
  freq(verb('öka', '增加；提高', 'to increase', 'ökar', 'ökade', 'ökat', 'öka', [
    ['Priserna ökar i år.', '今年价格在涨。'],
    ['Hon ökade farten på vägen.', '她在路上加快了速度。'],
    ['Antalet har ökat snabbt.', '人数已经快速增加。'],
    ['Öka volymen lite.', '把音量调高一点。'],
  ]), 1749),
  freq(noun('expert', 'en', '专家', 'expert', 'experten', 'experter', 'experterna', [
    ['Hon är expert på växter.', '她是植物专家。'],
    ['Experten svarade kort.', '那位专家回答得很短。'],
    ['Två experter kom till mötet.', '两位专家来开会了。'],
    ['Fråga experten i rummet.', '问问房间里那位专家。'],
  ]), 1750),
]

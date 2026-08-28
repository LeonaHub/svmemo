import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1901–1950. Primary POS is the high-frequency use, not every sense in the book. */
export const list39: Word[] = [
  freq(adj('blyg', '害羞的；腼腆的', 'shy / timid', 'blygt', 'blyga', [
    ['Han är blyg i klassen.', '他在班上很害羞。'],
    ['Ett blygt barn sitter tyst.', '一个腼腆的孩子安静地坐着。'],
    ['De blyga gästerna sa inget.', '那些害羞的客人什么也没说。'],
    ['Var inte blyg.', '别害羞。'],
  ]), 1901),
  freq(noun('förhör', 'ett', '审讯；问询', 'interrogation / hearing', 'förhöret', 'förhör', 'förhören', [
    ['Polisen höll ett förhör.', '警察进行了一次审讯。'],
    ['Förhöret tog tre timmar.', '这次审讯花了三个小时。'],
    ['Det blev flera förhör.', '进行了好几次问询。'],
    ['Förhören filmades.', '那些审讯被拍了下来。'],
  ]), 1902, c(
    [
      ['för-', '加强前缀'],
      ['hör', '听（höra）'],
    ],
    '“好好听一遍”，由动词 förhöra 变成名词，就是一次审讯。',
  )),
  freq(noun('rörelse', 'en', '运动；动作；企业', 'motion / movement / business', 'rörelsen', 'rörelser', null, [
    ['Han gjorde en snabb rörelse.', '他做了一个很快的动作。'],
    ['Rörelsen i salen ökade.', '厅里的活动变多了。'],
    ['Gör tre rörelser till.', '再做三个动作。'],
    ['Hon driver en liten rörelse.', '她经营一家小企业。'],
  ]), 1903, c([['röra', '动'], ['-else', '行为／状态']], '动起来的状态，合起来就是运动、动作。')),
  freq(noun('konstapel', 'en', '警员（较旧）', 'constable / police officer (somewhat dated)', 'konstapeln', 'konstaplar', 'konstaplarna', [
    ['En konstapel stod vid dörren.', '一名警员站在门口。'],
    ['Konstapeln skrev upp namnet.', '那名警员记下了名字。'],
    ['Två konstaplar kom i bil.', '两名警员开车来了。'],
    ['Konstaplarna spärrade gatan.', '那些警员封锁了街道。'],
  ]), 1904),
  freq(verb('förbereda', '准备；预先安排', 'to prepare', 'förbereder', 'förberedde', 'förberett', 'förbered', [
    ['Hon förbereder mötet nu.', '她现在在准备会议。'],
    ['Han förberedde maten i går.', '他昨天把饭准备好了。'],
    ['Har ni förberett talet?', '你们准备好发言了吗？'],
    ['Förbered dig inför provet.', '为考试做好准备。'],
  ]), 1905, c([['för', '预先'], ['bereda', '安排／准备']], '预先安排好，合起来就是准备。')),
  freq(adj('trist', '无聊的；沉闷的', 'dull / dreary / a pity', 'trist', 'trista', [
    ['Det var en trist föreläsning.', '那是一场无聊的讲座。'],
    ['Ett trist bostadsområde.', '一个沉闷的住宅区。'],
    ['De trista nyheterna kom sent.', '那些沉闷的消息来得很晚。'],
    ['Det var trist att höra.', '听到这事真让人难过。'],
  ], { comparative: 'tristare', superlative: 'tristast' }), 1906),
  freq(verb('stirra', '盯着看', 'to stare', 'stirrar', 'stirrade', 'stirrat', 'stirra', [
    ['Barnen stirrar på skärmen.', '孩子们盯着屏幕看。'],
    ['Han stirrade rakt fram.', '他直直地盯着前方。'],
    ['Hon har stirrat länge på tavlan.', '她盯着那幅画看了很久。'],
    ['Stirra inte på folk.', '别盯着人看。'],
  ]), 1907),
  freq(verb('öva', '练习', 'to practice / to train', 'övar', 'övade', 'övat', 'öva', [
    ['Hon övar piano varje dag.', '她每天练习钢琴。'],
    ['Han övade glosorna i går.', '他昨天练了单词。'],
    ['Vi har övat den här låten.', '我们练过这首歌。'],
    ['Öva mer före provet.', '考试前再多练练。'],
  ]), 1908),
  freq(noun('bibel', 'en', '圣经', 'bible / the Bible', 'bibeln', 'biblar', null, [
    ['Hon läser ur bibeln.', '她在读圣经。'],
    ['Bibeln ligger på bordet.', '圣经在桌子上。'],
    ['Det finns två biblar i rummet.', '房间里有两本圣经。'],
    ['Öppna bibeln på sidan tio.', '把圣经翻到第十页。'],
  ]), 1909),
  freq(verb('identifiera', '辨认；确认身份', 'to identify', 'identifierar', 'identifierade', 'identifierat', 'identifiera', [
    ['Polisen identifierar mannen.', '警察在确认这名男子的身份。'],
    ['Hon identifierade väskan.', '她认出了那个包。'],
    ['Har ni identifierat väskan?', '你们认出那个包了吗？'],
    ['Identifiera dig vid dörren.', '在门口表明身份。'],
  ]), 1910),
  freq(noun('jury', 'en', '陪审团；评委会', 'jury', 'juryn', 'juryer', null, [
    ['Juryn lyssnar på vittnet.', '陪审团在听证人说话。'],
    ['En jury ska avgöra saken.', '一个陪审团将裁定这件事。'],
    ['Två juryer sitter i tävlingen.', '比赛里有两个评委会。'],
    ['Juryn gick ut för att rösta.', '陪审团出去投票了。'],
  ]), 1911),
  freq(noun('andetag', 'ett', '一口气；一次呼吸', 'breath', 'andetaget', 'andetag', 'andetagen', [
    ['Dra ett djupt andetag.', '做一次深呼吸。'],
    ['Andetaget hördes i rummet.', '那一口气在房间里听得见。'],
    ['Hon tog tre djupa andetag.', '她做了三次深呼吸。'],
    ['Andetagen blev allt tyngre.', '那些呼吸越来越沉。'],
  ]), 1912, c(
    [
      ['anda', '气息；呼吸'],
      ['tag', '一下；一次（ta 拿）'],
    ],
    '“拿一下气”，就是一口气、一次呼吸。',
  )),
  freq(noun('miljard', 'en', '十亿', 'billion (US) / milliard', 'miljarden', 'miljarder', 'miljarderna', [
    ['Det kostar en miljard kronor.', '这要十亿克朗。'],
    ['Miljarden räcker inte.', '这十亿还不够。'],
    ['Flera miljarder människor bor här.', '有几十亿人住在这里。'],
    ['Miljarderna försvann.', '那几十亿不见了。'],
  ]), 1913),
  freq(other('denne', 'pron', '这个（阳性）；此人', 'this (masculine) / this man', [
    ['Denne man är lärare.', '这个人是老师。'],
    ['Jag känner denne kille.', '我认识这个小伙子。'],
    ['Denne var inte hemma.', '此人当时不在家。'],
    ['Ge boken till denne herrn.', '把书给这位先生。'],
  ]), 1914),
  freq(other('slutligen', 'adv', '终于；最后', 'finally / in the end', [
    ['Slutligen kom hon fram.', '她终于到了。'],
    ['Vi valde slutligen den billigare.', '我们最后选了便宜的那个。'],
    ['Han förstod det slutligen.', '他终于明白了。'],
    ['Slutligen blev det tyst.', '最后安静了下来。'],
  ]), 1915, c(
    [
      ['slut', '结束'],
      ['-ligen', '……地'],
    ],
    '“到结束的时候”，就是终于、最后。',
  )),
  freq(verb('frukta', '害怕；担心', 'to fear', 'fruktar', 'fruktade', 'fruktat', 'frukta', [
    ['Många fruktar mörkret.', '许多人害怕黑暗。'],
    ['De fruktade det värsta.', '他们当时担心最坏的情况。'],
    ['Hon har fruktat detta länge.', '她担心这事已经很久了。'],
    ['Frukta inte.', '不要害怕。'],
  ]), 1916),
  freq(verb('bita', '咬', 'to bite', 'biter', 'bet', 'bitit', 'bit', [
    ['Hunden biter inte.', '这狗不咬人。'],
    ['Han bet sig i läppen.', '他咬住了嘴唇。'],
    ['Myggan har bitit mig.', '蚊子咬了我。'],
    ['Bit inte naglarna.', '别咬指甲。'],
  ]), 1917),
  freq(noun('regn', 'ett', '雨', 'rain', 'regnet', null, null, [
    ['Det är mycket regn i dag.', '今天下了不少雨。'],
    ['Regnet började vid fem.', '雨五点开始下。'],
    ['Vi väntar tills regnet slutar.', '我们等到雨停。'],
    ['Ta jackan mot regnet.', '穿上外套挡雨。'],
  ]), 1918),
  freq(noun('ande', 'en', '灵魂；精灵', 'spirit / ghost', 'anden', 'andar', 'andarna', [
    ['En ond ande jagade honom.', '一个恶灵缠着他。'],
    ['Anden i flaskan vaknade.', '瓶中的精灵醒了。'],
    ['Gamla sagor talar om andar.', '老故事里会讲到精灵。'],
    ['Andarna försvann i rök.', '那些精灵化作烟消失了。'],
  ]), 1919),
  freq(verb('avgöra', '决定；裁定', 'to decide / to settle', 'avgör', 'avgjorde', 'avgjort', 'avgör', [
    ['Du får avgöra själv.', '你自己决定吧。'],
    ['Domstolen avgjorde målet.', '法院裁定了这个案子。'],
    ['De har avgjort saken.', '他们已经把这件事定下来了。'],
    ['Avgör det nu.', '现在就做决定。'],
  ]), 1920, c(
    [
      ['av', '了结；去掉'],
      ['göra', '做'],
    ],
    '“把事情做了结”，就是决定、裁定。',
  )),
  freq(adj('träffad', '被击中的；被说中的', 'hit / struck', 'träffat', 'träffade', [
    ['Han blev träffad av en kula.', '他被一颗子弹击中了。'],
    ['Ett träffat fönster gick sönder.', '一扇被打中的窗户碎了。'],
    ['De träffade soldaterna bars bort.', '那些被击中的士兵被抬走了。'],
    ['Hon kände sig träffad.', '她觉得被说中了。'],
  ]), 1921),
  freq(adj('trasig', '破的；坏的', 'broken / torn', 'trasigt', 'trasiga', [
    ['En trasig stol står där.', '那里放着一把破椅子。'],
    ['Ett trasigt fönster måste bytas.', '一扇破窗户必须换掉。'],
    ['De trasiga skorna slängdes.', '那些破鞋子被扔掉了。'],
    ['Telefonen är trasig.', '电话坏了。'],
  ], { comparative: 'trasigare', superlative: 'trasigast' }), 1922, c(
    [
      ['trasa', '破布'],
      ['-ig', '带有……的'],
    ],
    '“像破布一样的”，就是破的、坏的。',
  )),
  freq(noun('prat', 'ett', '闲聊；空话', 'talk / chatter', 'pratet', null, null, [
    ['Det var bara löst prat.', '那不过是随便聊聊。'],
    ['Pratet i rummet tystnade.', '房间里的闲聊停了。'],
    ['Jag orkar inte mer prat.', '我受不了再聊下去了。'],
    ['Sluta med pratet.', '别再空谈了。'],
  ]), 1923),
  freq(verb('måla', '刷漆；画', 'to paint', 'målar', 'målade', 'målat', 'måla', [
    ['Hon målar väggen vit.', '她在把墙刷成白色。'],
    ['Han målade ett porträtt.', '他画了一幅肖像。'],
    ['Vi har målat köket.', '我们已经把厨房刷好了。'],
    ['Måla dörren i morgon.', '明天把门刷了。'],
  ]), 1924),
  freq(noun('tvekan', 'en', '犹豫；怀疑', 'hesitation / doubt', 'tvekan', null, null, [
    ['Det finns ingen tvekan.', '这一点毫无疑问。'],
    ['Tvekan syntes i hennes ögon.', '她眼里看得出犹豫。'],
    ['Utan tvekan har du rätt.', '毫无疑问你是对的。'],
    ['Efter en kort tvekan sa hon ja.', '短暂犹豫之后她答应了。'],
  ]), 1925, c(
    [
      ['tveka', '犹豫'],
      ['-an', '行为名词词尾'],
    ],
    '由“犹豫”这个动作变成名词，就是一次犹豫、怀疑。',
  )),
  freq(noun('närvaro', 'en', '在场；出席', 'presence / attendance', 'närvaron', null, null, [
    ['Läraren tog närvaro.', '老师点了名。'],
    ['Närvaron var hög idag.', '今天的出席率很高。'],
    ['Hans närvaro lugnade alla.', '他在场让大家都安心了。'],
    ['Vi kräver närvaro på mötet.', '我们要求出席会议。'],
  ]), 1926, c(
    [
      ['när', '在近处'],
      ['varo', '存在（vara 在）'],
    ],
    '“在近处存在着”，就是在场、出席。',
  )),
  freq(noun('häck', 'en', '树篱；跨栏；屁股（口）', 'hedge / hurdle / backside (informal)', 'häcken', 'häckar', 'häckarna', [
    ['En häck skiljer tomterna.', '一道树篱把地块隔开。'],
    ['Häcken måste klippas.', '这道树篱得修剪了。'],
    ['De satte upp tre häckar på banan.', '他们在跑道上摆了三个跨栏。'],
    ['Hon slog häcken i stolen.', '她一屁股撞到了椅子上。'],
  ]), 1927),
  freq(other('hemifrån', 'adv', '从家里；离家', 'from home / away from home', [
    ['Hon åkte hemifrån i morse.', '她今早从家里出发。'],
    ['Barnen går hemifrån klockan sju.', '孩子们七点从家里出门。'],
    ['Han flyttade hemifrån i höstas.', '他去年秋天离家独立了。'],
    ['Ring när du går hemifrån.', '你从家里出门时打个电话。'],
  ]), 1928, c([['hem', '家'], ['ifrån', '从……离开']], '从家里离开，合起来就是从家里、离家。')),
  freq(noun('kust', 'en', '海岸', 'coast', 'kusten', 'kuster', 'kusterna', [
    ['Vi körde längs kusten.', '我们沿着海岸开。'],
    ['Kusten är klippig här.', '这里的海岸是岩石的。'],
    ['Sverige har långa kuster.', '瑞典有很长的海岸。'],
    ['Kusterna är vackra på sommaren.', '那些海岸夏天很美。'],
  ]), 1929),
  freq(verb('skilja', '分开；区分', 'to separate / to distinguish', 'skiljer', 'skilde', 'skilt', 'skilj', [
    ['Muren skiljer de två gårdarna.', '这堵墙把两个院子分开。'],
    ['Hon skilde äpplena från päronen.', '她把苹果和梨分开了。'],
    ['Kan du skilja på de två rösterna?', '你能区分那两个声音吗？'],
    ['Skilj de två högarna.', '把那两堆分开。'],
  ]), 1930),
  freq(noun('domstol', 'en', '法院', 'court of law', 'domstolen', 'domstolar', 'domstolarna', [
    ['Målet går till domstol.', '这个案子要上法院。'],
    ['Domstolen dömde honom.', '法院判了他。'],
    ['Det finns flera domstolar i staden.', '城里有好几所法院。'],
    ['Domstolarna är överbelastade.', '那些法院负担过重。'],
  ]), 1931, c(
    [
      ['dom', '判决'],
      ['stol', '座位；席位'],
    ],
    '“判决的席位”，就是法院。',
  )),
  freq(noun('utredning', 'en', '调查', 'inquiry / investigation', 'utredningen', 'utredningar', null, [
    ['Polisen inledde en utredning.', '警察启动了一项调查。'],
    ['Utredningen tar tid.', '这项调查需要时间。'],
    ['Två utredningar pågår nu.', '现在有两项调查在进行。'],
    ['Vänta på utredningen.', '等这项调查吧。'],
  ]), 1932, c([['ut', '出'], ['redning', '理清']], '把事情理出来，合起来就是调查。')),
  freq(noun('lastbil', 'en', '卡车', 'lorry / truck', 'lastbilen', 'lastbilar', null, [
    ['En lastbil stannade vid vägen.', '一辆卡车停在路边。'],
    ['Lastbilen är full med sand.', '这辆卡车装满了沙子。'],
    ['Två lastbilar körde förbi.', '两辆卡车开了过去。'],
    ['Lastbilen ska lastas nu.', '这辆卡车现在要装货。'],
  ]), 1933, c([['last', '货物'], ['bil', '汽车']], '装货的汽车，合起来就是卡车。')),
  freq(noun('kanal', 'en', '运河；频道；渠道', 'canal / channel', 'kanalen', 'kanaler', 'kanalerna', [
    ['En kanal går mellan sjöarna.', '一条运河连着那些湖。'],
    ['Kanalen är smal här.', '这段运河很窄。'],
    ['Vilken kanal tittar du på?', '你在看哪个频道？'],
    ['De använde diplomatiska kanaler.', '他们走了外交渠道。'],
  ]), 1934),
  freq(noun('era', 'en', '时代；纪元', 'era', 'eran', 'eror', null, [
    ['En ny era börjar nu.', '一个新时代现在开始。'],
    ['Eran av tystnad är över.', '沉默的时代结束了。'],
    ['Boken skildrar flera eror.', '这本书描写了好几个时代。'],
    ['Vi lever i en annan era.', '我们生活在另一个时代。'],
  ]), 1935),
  freq(noun('förmögenhet', 'en', '财富；财产', 'fortune / wealth', 'förmögenheten', 'förmögenheter', 'förmögenheterna', [
    ['Han gjorde sig en förmögenhet.', '他发了一笔财。'],
    ['Förmögenheten ärvdes av barnen.', '那笔财产由孩子们继承了。'],
    ['Det finns stora förmögenheter i släkten.', '这个家族有好几笔巨额财产。'],
    ['Förmögenheterna beskattas.', '那些财富要征税。'],
  ]), 1936, c(
    [
      ['förmögen', '有钱的；有能力的'],
      ['-het', '抽象名词后缀'],
    ],
    '“有钱的状态”，就是财富、财产。',
  )),
  freq(noun('penis', 'en', '阴茎', 'penis', 'penisen', 'penisar', null, [
    ['Penisen är ett könsorgan.', '阴茎是生殖器官。'],
    ['Läkaren undersökte penisen.', '医生检查了阴茎。'],
    ['Ordet penis är neutralt.', 'penis 这个词是中性的。'],
    ['Barnen frågade vad en penis är.', '孩子们问阴茎是什么。'],
  ]), 1937),
  freq(noun('körkort', 'ett', '驾照', 'driving licence', 'körkortet', 'körkort', 'körkorten', [
    ['Hon tog körkort i våras.', '她今年春天拿了驾照。'],
    ['Körkortet ligger i plånboken.', '驾照在钱包里。'],
    ['De har två körkort i familjen.', '家里有两本驾照。'],
    ['Visa körkortet, tack.', '请出示驾照。'],
  ]), 1938, c([['kör', '驾驶'], ['kort', '卡片']], '驾驶用的证件卡，合起来就是驾照。')),
  freq(other('minsann', 'adv', '确实；真的（加强）', 'indeed / certainly (intensifying)', [
    ['Maten var minsann god.', '饭菜确实好吃。'],
    ['Hon kan minsann simma.', '她真的会游泳。'],
    ['Det var minsann kallt.', '那可真够冷的。'],
    ['Det ska du minsann få se.', '你等着瞧吧。'],
  ]), 1939, c(
    [
      ['min', '我的'],
      ['sann', '真实的'],
    ],
    '“以我所见是真的”，用来加强语气：确实、真的。',
  )),
  freq(noun('slagsmål', 'ett', '打架；斗殴', 'fight / brawl', 'slagsmålet', 'slagsmål', 'slagsmålen', [
    ['Det blev slagsmål utanför krogen.', '酒吧外面打了起来。'],
    ['Slagsmålet slutade snabbt.', '那场打架很快结束了。'],
    ['Polisen stoppade flera slagsmål.', '警察制止了好几场斗殴。'],
    ['Slagsmålen filmades.', '那些打架被拍了下来。'],
  ]), 1940, c(
    [
      ['slag', '打；击'],
      ['-s-', '连接音'],
      ['mål', '一场；回合'],
    ],
    '“一场对打”，就是打架、斗殴。',
  )),
  freq(adj('beväpnad', '武装的', 'armed', 'beväpnat', 'beväpnade', [
    ['En beväpnad man stod vid dörren.', '一个带武器的人站在门口。'],
    ['Ett beväpnat rån skedde i natt.', '夜里发生了一起持械抢劫。'],
    ['De beväpnade vakterna släppte in oss.', '那些武装警卫让我们进去了。'],
    ['Vakten är beväpnad.', '门卫带着武器。'],
  ]), 1941, c(
    [
      ['be-', '使带上'],
      ['vapen', '武器'],
      ['-ad', '过去分词'],
    ],
    '“被加上武器的”，就是武装的。',
  )),
  freq(verb('slösa', '浪费', 'to waste / to squander', 'slösar', 'slösade', 'slösat', 'slösa', [
    ['Han slösar med pengar.', '他花钱大手大脚。'],
    ['Hon slösade bort tiden.', '她把时间浪费掉了。'],
    ['Vi har slösat för mycket energi.', '我们浪费了太多精力。'],
    ['Slösa inte med vattnet.', '别浪费水。'],
  ]), 1942),
  freq(adj('jobbig', '费劲的；烦人的', 'strenuous / trying', 'jobbigt', 'jobbiga', [
    ['Det var en jobbig dag.', '那是费劲的一天。'],
    ['Ett jobbigt samtal väntar.', '一场烦人的谈话在等着。'],
    ['De jobbiga uppgifterna är klara.', '那些费劲的任务做完了。'],
    ['Var inte så jobbig nu.', '现在别这么烦人。'],
  ]), 1943),
  freq(adj('gul', '黄的', 'yellow', 'gult', 'gula', [
    ['Hon har en gul jacka.', '她有一件黄夹克。'],
    ['Ett gult löv föll ner.', '一片黄叶子掉了下来。'],
    ['De gula blommorna är vackra.', '那些黄花很漂亮。'],
    ['Måla väggen gul.', '把墙刷成黄色。'],
  ]), 1944),
  freq(verb('samarbeta', '合作', 'to cooperate / to work together', 'samarbetar', 'samarbetade', 'samarbetat', 'samarbeta', [
    ['Vi samarbetar med skolan.', '我们和学校合作。'],
    ['De samarbetade i projektet.', '他们在这个项目上合作过。'],
    ['Har ni samarbetat förut?', '你们以前合作过吗？'],
    ['Samarbeta med laget.', '和团队合作。'],
  ]), 1945, c([['sam', '共同'], ['arbeta', '工作']], '一起工作，合起来就是合作。')),
  freq(verb('ropa', '喊；叫', 'to shout / to call', 'ropar', 'ropade', 'ropat', 'ropa', [
    ['Hon ropar på hjälp.', '她在喊救命。'],
    ['Han ropade mitt namn.', '他喊了我的名字。'],
    ['Vi har ropat tre gånger.', '我们已经喊了三次。'],
    ['Ropa inte så högt.', '别喊那么大声。'],
  ]), 1946),
  freq(verb('blanda', '混合；搅拌', 'to mix / to blend', 'blandar', 'blandade', 'blandat', 'blanda', [
    ['Hon blandar mjöl och vatten.', '她把面粉和水混在一起。'],
    ['Han blandade korten.', '他把牌洗了。'],
    ['Vi har blandat färgerna.', '我们已经把颜料调好了。'],
    ['Blanda sockret i degen.', '把糖拌进面团里。'],
  ]), 1947),
  freq(noun('kunskap', 'en', '知识', 'knowledge', 'kunskapen', 'kunskaper', null, [
    ['Hon har djup kunskap i ämnet.', '她在这个科目上知识很深。'],
    ['Kunskapen räcker inte än.', '这些知识还不够。'],
    ['Vi behöver mer kunskaper.', '我们需要更多知识。'],
    ['Dela med dig av kunskapen.', '把这些知识分享出来。'],
  ]), 1948, c([['kunn', '知晓'], ['-skap', '性质、状态']], '知晓的状态，合起来就是知识。')),
  freq(noun('barnbarn', 'ett', '孙子／孙女；外孙／外孙女', 'grandchild', 'barnbarnet', 'barnbarn', 'barnbarnen', [
    ['Hon har ett barnbarn i Lund.', '她在隆德有一个孙子。'],
    ['Barnbarnet fyller fem i dag.', '这个孙子今天五岁。'],
    ['De har tre barnbarn.', '他们有三个孙子孙女。'],
    ['Barnbarnen kommer på lördag.', '孙子孙女们星期六来。'],
  ]), 1949, c([['barn', '孩子'], ['barn', '孩子']], '孩子的孩子，合起来就是孙子或孙女。')),
  freq(noun('förtroende', 'ett', '信任；信赖', 'trust / confidence', 'förtroendet', null, null, [
    ['Jag har förtroende för henne.', '我信任她。'],
    ['Förtroendet är brutet.', '信任已经破裂。'],
    ['Han berättade det i förtroende.', '他私下把这事告诉了我。'],
    ['Vi måste bygga förtroende.', '我们必须建立信任。'],
  ]), 1950, c(
    [
      ['för-', '加强前缀'],
      ['tro', '相信'],
      ['-ende', '名词词尾'],
    ],
    '“对某人信得过”，就是信任、信赖。',
  )),
]

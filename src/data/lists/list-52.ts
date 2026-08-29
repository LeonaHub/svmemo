import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2551–2600. Primary POS is the high-frequency use, not every sense in the book. */
export const list52: Word[] = [
  freq(verb('smyga', '溜走；悄悄走', 'to sneak / to creep', 'smyger', 'smög', 'smugit', 'smyg', [
    ['Hon smyger in i rummet.', '她溜进房间。'],
    ['Han smög på tå.', '他踮着脚走。'],
    ['Någon har smugit här i natt.', '夜里有人在这里偷偷走过。'],
    ['Smyg inte efter mig.', '别偷偷跟着我。'],
  ]), 2551),
  freq(noun('budskap', 'ett', '信息；要旨', 'message', 'budskapet', 'budskap', 'budskapen', [
    ['Filmen har ett tydligt budskap.', '这部电影有一个清楚的要旨。'],
    ['Budskapet nådde fram till sist.', '那条信息终于传到了。'],
    ['Hon tog emot flera budskap.', '她收到了好几条信息。'],
    ['Budskapen i boken är tunga.', '书里那些要旨很沉重。'],
  ]), 2552, c(
    [
      ['bud', '消息；使者'],
      ['-skap', '状态/结果后缀'],
    ],
    '“传到的消息”，就是信息、要旨。',
  )),
  freq(verb('skiljas', '分开；离婚', 'to part / to divorce', 'skils', 'skildes', 'skilts', null, [
    ['De skils nästa månad.', '他们下个月离婚。'],
    ['Vi skildes vid stationen.', '我们在车站分了手。'],
    ['De har skilts efter tio år.', '他们十年后离了婚。'],
    ['Vi måste skiljas nu.', '我们现在得分开了。'],
  ]), 2553, c(
    [
      ['skilja', '分开'],
      ['-s', '不及物/相互'],
    ],
    '“彼此分开”，可以是分手、分开，也可以是离婚。',
  )),
  freq(adj('diskret', '谨慎的；不张扬的', 'discreet / unobtrusive', 'diskret', 'diskreta', [
    ['Hon var diskret med hemligheten.', '她对秘密很谨慎。'],
    ['Ett diskret ljus i hörnet.', '角落里一盏不张扬的灯。'],
    ['De diskreta färgerna passade rummet.', '那些淡雅的颜色适合这个房间。'],
    ['Var diskret, tack.', '请谨慎一点。'],
  ]), 2554),
  freq(noun('lucka', 'en', '活板门；窗口；缺口', 'hatch / slot / gap', 'luckan', 'luckor', 'luckorna', [
    ['Han öppnade luckan i golvet.', '他打开了地板上的活板门。'],
    ['Öppna lucka tre i kalendern.', '打开日历上的第三扇窗。'],
    ['Det finns luckor i hennes kunskaper.', '她的知识有缺口。'],
    ['Luckorna i staketet måste lagas.', '篱笆上的那些缺口得补。'],
  ]), 2555),
  freq(noun('kista', 'en', '箱子；棺材', 'chest / coffin', 'kistan', 'kistor', 'kistorna', [
    ['Smyckena låg i en kista.', '珠宝放在一口箱子里。'],
    ['Kistan bars ut ur kyrkan.', '那口棺材被抬出教堂。'],
    ['Gamla kistor stod på vinden.', '阁楼上放着几口旧箱子。'],
    ['Kistorna var tunga.', '那些箱子／棺材很沉。'],
  ]), 2556),
  freq(noun('vardagsrum', 'ett', '客厅', 'living room', 'vardagsrummet', 'vardagsrum', 'vardagsrummen', [
    ['Vi sitter i vardagsrummet.', '我们坐在客厅里。'],
    ['Vardagsrummet är ljust och stort.', '这间客厅又亮又大。'],
    ['Lägenheten har två vardagsrum.', '这套公寓有两间客厅。'],
    ['Vardagsrummen vetter mot parken.', '那些客厅朝着公园。'],
  ]), 2557, c([['vardag', '日常'], ['rum', '房间']], '日常起居用的房间，就是客厅。')),
  freq(noun('oväsen', 'ett', '吵闹；喧哗', 'noise / racket', 'oväsendet', null, null, [
    ['Barnen för oväsen.', '孩子们在吵。'],
    ['Oväsendet höll oss vakna.', '那阵吵闹让我们睡不着。'],
    ['Sluta föra oväsen!', '别再吵了！'],
    ['Det blev oväsen på gatan.', '街上闹起来了。'],
  ]), 2558, c(
    [
      ['o-', '不好的；过分的'],
      ['väsen', '声响；动静'],
    ],
    '“不好的动静”，就是吵闹、喧哗。',
  )),
  freq(adj('kvinnlig', '女性的；有女人味的', 'female / feminine', 'kvinnligt', 'kvinnliga', [
    ['En kvinnlig läkare tog emot.', '一位女医生接诊。'],
    ['Ett kvinnligt namn stod på dörren.', '门上写着一个女性的名字。'],
    ['De kvinnliga rösterna hördes tydligt.', '那些女性的声音听得很清楚。'],
    ['Stilen är mjuk och kvinnlig.', '这种风格柔和、有女人味。'],
  ]), 2559, c(
    [
      ['kvinna', '女人'],
      ['-lig', '……的'],
    ],
    '“属于女人的”，就是女性的，也可以指有女人味的。',
  )),
  freq(other('utifrån', 'adv', '从外面；根据', 'from outside / on the basis of', [
    ['Vi skaffar folk utifrån.', '我们从外面招人。'],
    ['Ljudet kom utifrån i natt.', '夜里声音从外面传来。'],
    ['Hon bedömer saken utifrån erfarenheten.', '她根据经验判断这件事。'],
    ['Hjälp utifrån behövs i höst.', '今年秋天需要外来的帮助。'],
  ]), 2560, c([['ute', '在外面'], ['ifrån', '从']], '从外面过来，就是从外面；也指根据。')),
  freq(adj('live', '现场的；直播的', 'live (broadcast / performance)', 'live', 'live', [
    ['Konserten är live i kväll.', '今晚这场音乐会是现场的。'],
    ['Sändningen går live klockan nio.', '九点开始直播。'],
    ['Bandet spelar live på torget.', '乐队在广场上现场演奏。'],
    ['Vi ser matchen live hemma.', '我们在家看这场比赛的直播。'],
  ]), 2561),
  freq(noun('skåp', 'ett', '柜子；橱', 'cupboard / cabinet', 'skåpet', 'skåp', 'skåpen', [
    ['Glasen står i skåpet.', '杯子在柜子里。'],
    ['Skåpet i köket är fullt.', '厨房那个柜子满了。'],
    ['Två skåp flyttades till hallen.', '两个柜子搬到了门厅。'],
    ['Skåpen längs väggen är låsta.', '靠墙那些柜子锁着。'],
  ]), 2562),
  freq(noun('knarkare', 'en', '瘾君子；吸毒的人（口）', 'junkie / drug addict (colloquial)', 'knarkaren', 'knarkare', 'knarkarna', [
    ['Han är knarkare.', '他是个瘾君子。'],
    ['Knarkaren greps i parken.', '那个瘾君子在公园被抓住了。'],
    ['Polisen känner flera knarkare.', '警察认识好几个瘾君子。'],
    ['Knarkarna samlades bakom huset.', '那些瘾君子聚在房子后面。'],
  ], ['slang']), 2563, c(
    [
      ['knark', '毒品（口语）'],
      ['-are', '做这事的人'],
    ],
    '“碰毒品的人”，口语里就是瘾君子。',
  )),
  freq(noun('avsikt', 'en', '意图；目的', 'intention / purpose', 'avsikten', 'avsikter', 'avsikterna', [
    ['Han gjorde det med avsikt.', '他是故意做的。'],
    ['Avsikten var att hjälpa.', '意图是帮忙。'],
    ['Deras avsikter är oklara.', '他们的意图不清楚。'],
    ['Avsikterna kom fram senare.', '那些意图后来才暴露。'],
  ]), 2564, c(
    [
      ['av', '朝向；出自'],
      ['sikt', '瞄准；眼光'],
    ],
    '“瞄准的方向”，合起来就是意图、目的。',
  )),
  freq(verb('parkera', '停车', 'to park', 'parkerar', 'parkerade', 'parkerat', 'parkera', [
    ['Jag parkerar vid torget.', '我在广场边停车。'],
    ['Hon parkerade längs kanten.', '她沿着路边停了车。'],
    ['Han har parkerat färdigt.', '他已经停好了。'],
    ['Parkera inte här.', '别把车停在这儿。'],
  ]), 2565),
  freq(noun('so', 'en', '母猪（较少用，更常说 sugga）', 'sow (female pig; rare)', 'son', 'soor', 'soorna', [
    ['En so låg i svinstian.', '一头母猪躺在猪圈里。'],
    ['Bondgården hade en so och flera kultingar.', '农庄有一头母猪和几头猪崽。'],
    ['Soor grymtade ute på gården.', '母猪们在院子里哼哼。'],
    ['Soorna gick lösa i hagen.', '那些母猪在围场里散着。'],
  ]), 2566),
  freq(noun('version', 'en', '版本', 'version', 'versionen', 'versioner', 'versionerna', [
    ['Appen släpptes i en ny version.', '这个应用出了新版本。'],
    ['Versionen på papperet är kortare.', '纸上的这个版本更短。'],
    ['Vi jämförde tre versioner av texten.', '我们比较了这段文字的三个版本。'],
    ['Spara versionen innan du ändrar.', '改之前先把这个版本存下来。'],
  ]), 2567),
  freq(other('sexuellt', 'adv', '在性方面', 'sexually', [
    ['Filmen är sexuellt utmanande.', '这部电影在性方面很大胆。'],
    ['Hon kände sig sexuellt trakasserad.', '她觉得受到了性骚扰。'],
    ['De talade öppet sexuellt om saken.', '他们在性方面把这件事谈得很开。'],
    ['Beteendet var sexuellt betonat.', '这种行为带有性的色彩。'],
  ]), 2568, c([['sexuell', '性的'], ['-t', '副词词尾']], '由“性的”变成副词，就是在性方面。')),
  freq(noun('psykolog', 'en', '心理学家', 'psychologist', 'psykologen', 'psykologer', 'psykologerna', [
    ['Hon går till en psykolog.', '她在看心理学家。'],
    ['Psykologen lyssnade noga.', '那位心理学家仔细听着。'],
    ['Skolan har två psykologer.', '学校有两位心理学家。'],
    ['Psykologerna träffades i dag.', '那些心理学家今天见面了。'],
  ]), 2569),
  freq(noun('klipp', 'ett', '剪报；片段；一笔好买卖', 'clip / cutting / bargain', 'klippet', 'klipp', 'klippen', [
    ['Jag sparade ett klipp ur tidningen.', '我留了一张剪报。'],
    ['Klippet var tre minuter långt.', '那段剪辑有三分钟。'],
    ['Han gjorde flera klipp på börsen.', '他在股市做了好几笔划算的买卖。'],
    ['Klippen ligger i en mapp.', '那些剪报放在一个文件夹里。'],
  ]), 2570),
  freq(noun('brist', 'en', '短缺；不足；缺点', 'shortage / lack / shortcoming', 'bristen', 'brister', 'bristerna', [
    ['Det är brist på lärare.', '教师短缺。'],
    ['Bristen på sömn märks.', '睡眠不足看得出来。'],
    ['Alla har sina brister.', '人人都有缺点。'],
    ['Bristerna måste åtgärdas.', '那些不足必须补上。'],
  ]), 2571),
  freq(verb('plåga', '折磨；使痛苦', 'to torment / to plague', 'plågar', 'plågade', 'plågat', 'plåga', [
    ['Huvudvärken plågar mig.', '头痛折磨着我。'],
    ['Han plågade katten.', '他折磨那只猫。'],
    ['Hon har plågats av oron.', '她被忧虑折磨过。'],
    ['Plåga inte djuren.', '别折磨动物。'],
  ]), 2572),
  freq(verb('strida', '作战；争执；与……相抵触', 'to fight / to conflict with', 'strider', 'stred', 'stridit', 'strid', [
    ['Soldaterna strider vid gränsen.', '士兵在边境作战。'],
    ['De stred för sin rätt.', '他们为自己的权利而战。'],
    ['Beslutet strider mot lagen.', '这项决定与法律相抵触。'],
    ['De har stridit i flera år.', '他们已经斗争了好几年。'],
  ]), 2573),
  freq(noun('fästman', 'en', '未婚夫', 'fiancé', 'fästmannen', 'fästmän', 'fästmännen', [
    ['Han är hennes fästman.', '他是她的未婚夫。'],
    ['Fästmannen väntade med blommor.', '未婚夫捧着花在等。'],
    ['Två fästmän stod i kyrkan.', '两位未婚夫站在教堂里。'],
    ['Fästmännen var nervösa.', '那些未婚夫很紧张。'],
  ]), 2574, c(
    [
      ['fäst', '订下的（fästa 固定）'],
      ['man', '男人'],
    ],
    '“已经订下的男人”，就是未婚夫。',
  )),
  freq(verb('uppföra', '建造；上演；表现（sig）', 'to erect / to perform / to behave (uppföra sig)', 'uppför', 'uppförde', 'uppfört', 'uppför', [
    ['De uppför ett hus vid ån.', '他们在河边盖一栋房子。'],
    ['Pjäsen uppfördes i går.', '那出戏昨天上演了。'],
    ['Han har uppfört sig illa.', '他表现得很差。'],
    ['Uppför dig!', '放规矩点！'],
  ]), 2575, c(
    [
      ['upp', '向上'],
      ['föra', '运送；带领'],
    ],
    '“往上带起来”，可以是盖起来、演出来，也可以是把自己表现出来。',
  )),
  freq(noun('personlighet', 'en', '个性；人物', 'personality', 'personligheten', 'personligheter', 'personligheterna', [
    ['Hon har en stark personlighet.', '她个性很强。'],
    ['Personligheten skiner igenom i texten.', '个性从文字里透出来。'],
    ['Flera kända personligheter kom.', '好几位知名人物来了。'],
    ['Respektera hennes personlighet.', '尊重她的个性。'],
  ]), 2576, c(
    [
      ['personlig', '个人的'],
      ['-het', '性质'],
    ],
    '一个人身上的那些特质，就是个性。',
  )),
  freq(verb('färdas', '赶路；旅行', 'to travel', 'färdas', 'färdades', 'färdats', 'färdas', [
    ['Vi färdas med tåg.', '我们坐火车走。'],
    ['De färdades genom skogen.', '他们穿过森林赶路。'],
    ['Hon har färdats långt.', '她走了很远的路。'],
    ['Färdas försiktigt i mörkret.', '在黑暗里小心赶路。'],
  ]), 2577, c(
    [
      ['färd', '行程'],
      ['-as', '不及物动词词尾'],
    ],
    '由“行程”变成动词，就是赶路、旅行。',
  )),
  freq(other('över huvud taget', 'phrase', '根本；压根儿；总体上', 'at all / on the whole', [
    ['Finns det över huvud taget någon lösning?', '到底有没有解决办法？'],
    ['Jag förstår det inte över huvud taget.', '我压根儿不明白。'],
    ['Över huvud taget gick det bra.', '总体上还不错。'],
    ['Hon äter inte kött över huvud taget.', '她根本不吃肉。'],
  ]), 2578, c(
    [
      ['över', '超过'],
      ['huvud', '头'],
      ['taget', '拿下的；整个'],
    ],
    '“从头到整个来看”，否定句里就是根本、压根儿。也常写成一个词 överhuvudtaget。',
  )),
  freq(noun('explosion', 'en', '爆炸', 'explosion', 'explosionen', 'explosioner', 'explosionerna', [
    ['En explosion hördes i hamnen.', '港口传来一声爆炸。'],
    ['Explosionen krossade fönstren.', '那次爆炸把窗户震碎了。'],
    ['Två explosioner följde tätt.', '两声爆炸紧接着响起。'],
    ['Håll avstånd vid explosionen.', '爆炸时保持距离。'],
  ]), 2579),
  freq(noun('smör', 'ett', '黄油', 'butter', 'smöret', null, null, [
    ['Bred smör på brödet.', '把黄油抹在面包上。'],
    ['Smöret är mjukt nu.', '黄油这会儿软了。'],
    ['Vi har slut på smör.', '我们黄油没了。'],
    ['Köp smör till middagen.', '买点黄油做晚饭。'],
  ]), 2580),
  freq(noun('detektiv', 'en', '侦探', 'detective', 'detektiven', 'detektiver', 'detektiverna', [
    ['En detektiv väntade utanför.', '一名侦探在外面等。'],
    ['Detektiven följde spåren.', '那位侦探顺着痕迹走。'],
    ['Två detektiver granskade rummet.', '两名侦探检查了房间。'],
    ['Ring detektiven efter mötet.', '开完会给侦探打电话。'],
  ]), 2581),
  freq(noun('puls', 'en', '脉搏', 'pulse', 'pulsen', 'pulsar', 'pulsarna', [
    ['Hon tog pulsen på honom.', '她给他量了脉搏。'],
    ['Pulsen var hög efter löpet.', '跑完后脉搏很快。'],
    ['Läkaren kände flera pulsar.', '医生摸了好几处脉搏。'],
    ['Pulsarna sjönk igen.', '那些脉搏又降下来了。'],
  ]), 2582),
  freq(noun('begäran', 'en', '请求；申请', 'request / application', 'begäran', null, null, [
    ['Han lämnade in en begäran.', '他提交了一份申请。'],
    ['Begäran avslogs.', '那项请求被驳回了。'],
    ['På egen begäran slutade hon.', '她是自己要求离职的。'],
    ['Polisen handlade på begäran.', '警察应请求采取了行动。'],
  ]), 2583, c(
    [
      ['begära', '请求；要求'],
      ['-an', '行为名词词尾'],
    ],
    '由“请求”这个动作变成名词，就是一项请求、申请。',
  )),
  freq(adj('central', '中心的；关键的', 'central / key', 'centralt', 'centrala', [
    ['Lägenheten har ett centralt läge.', '这套公寓地段很中心。'],
    ['Ett centralt argument saknades.', '缺了一个关键论据。'],
    ['De centrala frågorna togs först.', '那些关键问题先拿出来谈。'],
    ['Stationen är central i stan.', '这个车站在城里很中心。'],
  ]), 2584),
  freq(other('överhuvudtaget', 'adv', '根本；总体上（= över huvud taget）', 'at all / on the whole', [
    ['Vet du överhuvudtaget var hon bor?', '你到底知不知道她住哪儿？'],
    ['Han svarade inte överhuvudtaget.', '他压根儿没回答。'],
    ['Överhuvudtaget blev middagen lyckad.', '总体上这顿晚饭还成功。'],
    ['Vi röker inte överhuvudtaget.', '我们根本不抽烟。'],
  ]), 2585, c(
    [
      ['över', '在……之上'],
      ['huvud', '头'],
      ['taget', '被取的；整个'],
    ],
    '连写形式，意思与 över huvud taget 相同：总体上；否定句里就是根本。',
  )),
  freq(noun('haka', 'en', '下巴', 'chin', 'hakan', 'hakor', 'hakorna', [
    ['Han har en spetsig haka.', '他有一个尖下巴。'],
    ['Hakan skadades i fallet.', '下巴在摔倒时伤了。'],
    ['Hon tappade hakan.', '她惊得下巴都掉了。'],
    ['Båda hakorna var blåslagna.', '两个下巴都青了。'],
  ]), 2586),
  freq(noun('skylt', 'en', '牌子；标牌', 'sign / signboard', 'skylten', 'skyltar', 'skyltarna', [
    ['En skylt pekar mot stationen.', '一块牌子指向车站。'],
    ['Skylten var svårläst.', '那块牌子很难认。'],
    ['Flera skyltar saknas.', '少了好几块牌子。'],
    ['Skyltarna byts ut i natt.', '那些牌子夜里更换。'],
  ]), 2587),
  freq(noun('uppförande', 'ett', '举止；上演；建造', 'conduct / performance / erection (of a building)', 'uppförandet', 'uppföranden', 'uppförandena', [
    ['Hans uppförande var oförlåtligt.', '他的举止不可原谅。'],
    ['Uppförandet i klassen måste bli bättre.', '课堂上的表现必须改进。'],
    ['Två uppföranden av pjäsen planeras.', '这出戏计划演两场。'],
    ['Uppförandena fick goda recensioner.', '那几场演出得到了好评。'],
  ]), 2588, c(
    [
      ['uppföra', '建造；上演；表现'],
      ['-ande', '行为/结果名词后缀'],
    ],
    '由“表现／上演／建造”变成名词，就是举止、一场演出，或一次建造。',
  )),
  freq(noun('hastighet', 'en', '速度', 'speed / velocity', 'hastigheten', 'hastigheter', 'hastigheterna', [
    ['Han körde i hög hastighet.', '他开得很快。'],
    ['Hastigheten sänktes till trettio.', '速度降到了三十。'],
    ['Olika hastigheter gäller i stan.', '城里适用不同的速度。'],
    ['Hastigheterna mättes av polisen.', '那些速度是警察测的。'],
  ]), 2589, c(
    [
      ['hastig', '急促的'],
      ['-het', '抽象名词后缀'],
    ],
    '把“急促的”变成抽象名词，就是速度。',
  )),
  freq(verb('lata sig', '偷懒；懒着', 'to laze about / to be idle', 'latar sig', 'latade sig', 'latat sig', 'lata dig', [
    ['Han latar sig i soffan.', '他在沙发上偷懒。'],
    ['Hon latade sig hela helgen.', '她整个周末都在赖着。'],
    ['Vi har latat oss tillräckligt.', '我们已经偷懒够了。'],
    ['Lata dig inte nu.', '这会儿别偷懒。'],
  ]), 2590, c(
    [
      ['lat', '懒的'],
      ['-a sig', '使自己处于某种状态'],
    ],
    '“让自己懒着”，合起来就是偷懒。',
  )),
  freq(noun('räkning', 'en', '账单；算术；计算', 'bill / arithmetic / count', 'räkningen', 'räkningar', 'räkningarna', [
    ['Kan jag få räkningen?', '能把账单给我吗？'],
    ['Räkningen ska betalas i dag.', '这张账单今天得付。'],
    ['Barnen övar räkning.', '孩子们在练算术。'],
    ['Räkningarna ligger på bordet.', '那些账单在桌上。'],
  ]), 2591, c(
    [
      ['räkna', '计算'],
      ['-ing', '行为/结果名词后缀'],
    ],
    '由“算”变成名词，就是算术、一次计算，也常指账单。',
  )),
  freq(noun('trafik', 'en', '交通', 'traffic', 'trafiken', null, null, [
    ['Trafiken var tät i rusningen.', '高峰时交通很密。'],
    ['Trafiken stod stilla på bron.', '桥上的交通停住了。'],
    ['Bussen går i reguljär trafik.', '这班公交车正常运行。'],
    ['Undvik trafiken i centrum.', '避开市中心的交通。'],
  ]), 2592),
  freq(adj('blåst', '被骗的；上当的（口）', 'cheated / ripped off (colloquial)', 'blåst', 'blåsta', [
    ['Jag blev blåst på affären.', '这笔买卖我被骗了。'],
    ['Han känner sig blåst.', '他觉得自己被耍了。'],
    ['De blåsta kunderna klagade.', '那些被骗的顾客在投诉。'],
    ['Det var en blåst affär.', '那是一笔让人上当的买卖。'],
  ]), 2593, c(
    [
      ['blåsa', '吹'],
      ['-t', '过去分词'],
    ],
    '被“吹了一气”，口语里就是被骗的、上当的。',
  )),
  freq(other('inomhus', 'adv', '在室内', 'indoors', [
    ['Vi leker inomhus i dag.', '我们今天在室内玩。'],
    ['Matchen spelas inomhus.', '这场比赛在室内打。'],
    ['Det är varmare inomhus.', '室内更暖和。'],
    ['Stanna inomhus vid ovädret.', '刮大风时留在室内。'],
  ]), 2594, c([['inom', '在……之内'], ['hus', '房子']], '在房子里头，就是在室内。')),
  freq(noun('recept', 'ett', '处方；食谱', 'prescription / recipe', 'receptet', 'recept', 'recepten', [
    ['Läkaren skrev ett recept.', '医生开了一张处方。'],
    ['Receptet gäller i ett år.', '这张处方一年内有效。'],
    ['Hon samlar recept i en pärm.', '她把食谱收在一个文件夹里。'],
    ['Recepten ligger på köksbänken.', '那些食谱在厨房台面上。'],
  ]), 2595),
  freq(other('halvvägs', 'adv', '半路；中途', 'halfway / midway', [
    ['Bussen vände halvvägs till kusten.', '公交车在去海岸的半路掉头了。'],
    ['De stannade halvvägs uppe i backen.', '他们在坡上走到一半停了。'],
    ['Jag somnade halvvägs genom filmen.', '电影看到一半我睡着了。'],
    ['Gå halvvägs, så hämtar jag dig.', '走到一半，我来接你。'],
  ]), 2596, c([['halv', '一半'], ['väg', '路'], ['-s', '副词词尾']], '在路的一半上，就是半路、中途。')),
  freq(adj('bekymrad', '忧虑的；担心的', 'worried / concerned', 'bekymrat', 'bekymrade', [
    ['Jag är bekymrad över dig.', '我为你担心。'],
    ['Ett bekymrat ansikte.', '一张忧虑的脸。'],
    ['De bekymrade föräldrarna ringde.', '那些担心的家长打来电话。'],
    ['Hon såg bekymrad ut.', '她看起来很忧虑。'],
  ]), 2597, c(
    [
      ['bekymmer', '烦恼；忧虑'],
      ['-ad', '过去分词'],
    ],
    '被烦恼缠上的，就是忧虑的、担心的。',
  )),
  freq(noun('telegram', 'ett', '电报', 'telegram', 'telegrammet', 'telegram', 'telegrammen', [
    ['Ett telegram kom sent i går.', '昨天很晚来了一封电报。'],
    ['Telegrammet låg på hallbordet.', '那封电报在门厅桌上。'],
    ['Hon skickade två telegram.', '她发了两封电报。'],
    ['Telegrammen lästes upp i radio.', '那些电报在广播里宣读了。'],
  ]), 2598, c([['tele', '远距离'], ['gram', '书写；信息']], '从远处写来的信息，就是电报。')),
  freq(adj('upphetsad', '激动的；兴奋的；性兴奋的', 'excited / aroused', 'upphetsat', 'upphetsade', [
    ['Han blev upphetsad av nyheten.', '那消息让他兴奋起来。'],
    ['Ett upphetsat samtal hördes.', '听到一阵激动的谈话。'],
    ['De upphetsade rösterna steg.', '那些激动的声音高了起来。'],
    ['Hon kände sig upphetsad.', '她觉得自己兴奋／动情了。'],
  ]), 2599, c(
    [
      ['upp', '向上'],
      ['hetsa', '煽动；使兴奋'],
      ['-ad', '过去分词'],
    ],
    '被往上煽起来的，就是激动、兴奋，也可以指性兴奋。',
  )),
  freq(noun('januari', 'en', '一月', 'January', null, null, null, [
    ['Vi flyttar i januari.', '我们一月搬家。'],
    ['Januari var kall i år.', '今年一月很冷。'],
    ['Fakturorna kommer i januari.', '账单一月到。'],
    ['Boka resan före januari.', '一月前把旅行订好。'],
  ]), 2600),
]

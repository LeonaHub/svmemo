import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1501–1550. Primary POS is the high-frequency use, not every sense in the book. */
export const list31: Word[] = [
  freq(verb('trivas', '过得自在；适应；感到满意', 'to thrive / to feel at home', 'trivs', 'trivdes', 'trivts', 'trivas', [
    ['Hon trivs på det nya jobbet.', '她在新工作里过得很自在。'],
    ['Han trivdes i den lilla stan.', '他在那座小城过得很适应。'],
    ['Har ni trivts här i vinter?', '你们这个冬天在这儿过得习惯吗？'],
    ['Trivas ska man göra.', '人就该过得自在。'],
  ]), 1501),
  freq(verb('tiga', '沉默；不说话', 'to keep silent', 'tiger', 'teg', 'tegit', 'tig', [
    ['Hon tiger om det som hände.', '她对发生的事保持沉默。'],
    ['Alla teg i rummet.', '房间里所有人都不说话。'],
    ['Han har tegit i flera år.', '他已经沉默好几年了。'],
    ['Tig nu och lyssna.', '现在别说话，听着。'],
  ]), 1502),
  freq(adj('nyfiken', '好奇的', 'curious', 'nyfiket', 'nyfikna', [
    ['Hon är nyfiken på allt.', '她对什么都好奇。'],
    ['Ett nyfiket barn frågar mycket.', '一个好奇的孩子问得很多。'],
    ['De nyfikna grannarna tittade ut.', '那些好奇的邻居往外看。'],
    ['Var inte så nyfiken.', '别这么好奇。'],
  ]), 1503, c([['ny', '新的'], ['fiken', '渴望的']], '对新事物渴望，合起来就是好奇的。')),
  freq(verb('existera', '存在；生存', 'to exist', 'existerar', 'existerade', 'existerat', 'existera', [
    ['Sådana djur existerar inte här.', '那样的动物这儿不存在。'],
    ['Klubben existerade i tio år.', '这个俱乐部存在过十年。'],
    ['Har livet existerat på planeten?', '那颗行星上存在过生命吗？'],
    ['Existera utan hopp är svårt.', '没有希望地活着很难。'],
  ]), 1504),
  freq(noun('sprit', 'en', '烈酒；酒精', 'spirits / alcohol', 'spriten', null, null, [
    ['Han dricker inte sprit.', '他不喝烈酒。'],
    ['Spriten står i skåpet.', '那些烈酒在柜子里。'],
    ['Köp sprit till festen.', '给聚会买点酒。'],
    ['Sprit och bil hör inte ihop.', '烈酒和开车不相配。'],
  ]), 1505),
  freq(verb('förändra', '改变；转变', 'to change / to transform', 'förändrar', 'förändrade', 'förändrat', 'förändra', [
    ['Det förändrar allt.', '这会改变一切。'],
    ['Hon förändrade planen i går.', '她昨天改了计划。'],
    ['Staden har förändrat sig.', '这座城市已经变了。'],
    ['Förändra ingenting än.', '先什么都别改。'],
  ]), 1506, c([['för', '使／完全'], ['ändra', '改变']], '使完全改变，合起来就是改变、转变。')),
  freq(noun('promenad', 'en', '散步', 'walk / stroll', 'promenaden', 'promenader', 'promenaderna', [
    ['Vi tar en promenad efter maten.', '我们饭后去散步。'],
    ['Promenaden tog en timme.', '这次散步花了一小时。'],
    ['Två promenader om dan räcker.', '一天两次散步就够了。'],
    ['Följ med på promenaden.', '一起去散步吧。'],
  ]), 1507),
  freq(verb('väcka', '叫醒；引起', 'to wake / to arouse', 'väcker', 'väckte', 'väckt', 'väck', [
    ['Hon väcker oss tidigt.', '她很早叫醒我们。'],
    ['Larmet väckte hela huset.', '警报吵醒了整栋房子。'],
    ['Nyheten har väckt oro.', '这则新闻已经引起了不安。'],
    ['Väck mig inte!', '别叫醒我！'],
  ]), 1508),
  freq(noun('spänn', 'ett', '克朗（口语，一块钱）', 'krona (colloquial, like "buck")', null, 'spänn', 'spännen', [
    ['Det kostar tjugo spänn.', '这个要二十克朗。'],
    ['Har du ett spänn över?', '你还多一克朗吗？'],
    ['Jag har bara fem spänn kvar.', '我只剩五克朗了。'],
    ['Fem spänn räcker inte till bussen.', '五克朗不够坐公交。'],
  ]), 1509),
  freq(adj('verklig', '真实的；真正的', 'real / true', 'verkligt', 'verkliga', [
    ['Det är en verklig händelse.', '这是一件真实发生的事。'],
    ['Ett verkligt problem väntar.', '一个真正的问题在等着。'],
    ['De verkliga skälen kom fram.', '那些真正的理由露出来了。'],
    ['Är det verkligt?', '这是真的吗？'],
  ]), 1510),
  freq(noun('frid', 'en', '安宁；平静', 'peace / calm', 'friden', null, null, [
    ['Ge mig frid i kväll.', '今晚让我清静。'],
    ['Friden i huset kom tillbaka.', '屋里的安宁回来了。'],
    ['Vi vill ha frid och ro.', '我们想要安宁清静。'],
    ['Låt henne sitta i frid.', '让她清静地坐着。'],
  ]), 1511),
  freq(noun('paket', 'ett', '包裹；一揽子', 'parcel / package', 'paketet', 'paket', 'paketen', [
    ['Ett paket väntar i hallen.', '门厅里有一个包裹。'],
    ['Paketet är tungt.', '这个包裹很重。'],
    ['Två paket kom i dag.', '今天来了两个包裹。'],
    ['Paketen ligger vid dörren.', '那些包裹在门口。'],
  ]), 1512),
  freq(noun('pizza', 'en', '披萨', 'pizza', 'pizzan', 'pizzor', 'pizzorna', [
    ['Vi äter pizza i kväll.', '我们今晚吃披萨。'],
    ['Pizzan är varm.', '这张披萨是热的。'],
    ['Två pizzor räcker.', '两张披萨就够了。'],
    ['Beställ pizzan nu.', '现在点这份披萨。'],
  ]), 1513),
  freq(verb('delta', '参加；参与', 'to take part / to participate', 'deltar', 'deltog', 'deltagit', 'deltag', [
    ['Hon deltar i mötet.', '她参加会议。'],
    ['Han deltog i loppet i fjol.', '他去年参加了那场比赛。'],
    ['Vi har deltagit två gånger.', '我们参加过两次。'],
    ['Deltag i diskussionen.', '参加讨论。'],
  ]), 1514, c([['del', '部分'], ['ta', '拿']], '拿一份，合起来就是参加。')),
  freq(verb('rita', '画；绘制', 'to draw / to design', 'ritar', 'ritade', 'ritat', 'rita', [
    ['Barnet ritar en hund.', '孩子在画一只狗。'],
    ['Hon ritade kartan i går.', '她昨天画了那张地图。'],
    ['Han har ritat huset själv.', '他自己画了这房子。'],
    ['Rita en cirkel här.', '在这儿画一个圆。'],
  ]), 1515),
  freq(adj('norra', '北部的', 'northern', 'norra', 'norra', [
    ['Vi bor i norra Sverige.', '我们住在瑞典北部。'],
    ['Den norra delen är kallare.', '北部更冷。'],
    ['Tåget går mot norra stationen.', '火车开往北站。'],
    ['Det blåser från norra sidan.', '风从北边吹来。'],
  ]), 1516, c(
    [
      ['norr', '北'],
      ['-a', '定式/弱变化词尾'],
    ],
    'norr 的定式写法，用在 norra Sverige 这类说法里，表示北部的。',
  )),
  freq(noun('flotta', 'en', '舰队；海军', 'fleet / navy', 'flottan', 'flottor', 'flottorna', [
    ['Flottan lämnade hamnen.', '舰队离开了港口。'],
    ['Han tjänstgjorde i flottan.', '他在海军服役。'],
    ['Landet har två flottor.', '这个国家有两支舰队。'],
    ['Flottorna möttes till havs.', '那些舰队在海上相遇。'],
  ]), 1517),
  freq(noun('rymd', 'en', '太空；空间；体积', 'space / volume', 'rymden', null, null, [
    ['De flyger ut i rymden.', '他们飞向太空。'],
    ['Rymden är kall och mörk.', '太空又冷又暗。'],
    ['Lådan har liten rymd.', '这盒子容积很小。'],
    ['Titta upp mot rymden.', '抬头看看太空。'],
  ]), 1518),
  freq(noun('biljett', 'en', '票；车票', 'ticket', 'biljetten', 'biljetter', 'biljetterna', [
    ['Jag köpte en biljett.', '我买了一张票。'],
    ['Biljetten är dyr.', '这张票很贵。'],
    ['Två biljetter räcker.', '两张票就够了。'],
    ['Visa biljetten vid dörren.', '在门口出示车票。'],
  ]), 1519),
  freq(other('verkligt', 'adv', '真正地；非常', 'really', [
    ['Hon är verkligt trött.', '她真的很累。'],
    ['Det gick verkligt fort.', '进行得真的很快。'],
    ['Vi hade verkligt tur.', '我们真的很走运。'],
    ['Verkligt? Säg det igen.', '真的？再说一遍。'],
  ]), 1520),
  freq(other('hittills', 'adv', '迄今；到目前为止', 'so far / until now', [
    ['Hittills har allt gått bra.', '到目前为止一切顺利。'],
    ['Jag har hittills inte hört något.', '到现在我什么都没听到。'],
    ['Hittills är vi överens.', '到目前为止我们意见一致。'],
    ['Det är det bästa hittills.', '这是迄今最好的。'],
  ]), 1521, c(
    [
      ['hit', '到这里'],
      ['tills', '直到'],
    ],
    '“直到这里（此刻）”，合起来就是迄今、到目前为止。',
  )),
  freq(noun('hyra', 'en', '租金', 'rent', 'hyran', 'hyror', 'hyrorna', [
    ['Hyran är hög i stan.', '城里租金很贵。'],
    ['Vi betalar hyran på måndag.', '我们星期一付租金。'],
    ['Två hyror kom samma vecka.', '同一周来了两笔租金。'],
    ['Räkna in hyran i kalkylen.', '把租金算进预算。'],
  ]), 1522),
  freq(verb('behandla', '对待；治疗；处理', 'to treat / to handle', 'behandlar', 'behandlade', 'behandlat', 'behandla', [
    ['Läkaren behandlar patienten.', '医生在治疗病人。'],
    ['De behandlade oss väl.', '他们待我们很好。'],
    ['Ärendet har redan behandlats.', '这件事已经处理过了。'],
    ['Behandla andra som du själv vill bli behandlad.', '你希望别人怎样待你，就怎样待别人。'],
  ]), 1523, c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['handla', '做；行动'],
    ],
    '“对某事采取行动”，合起来就是对待、治疗、处理。',
  )),
  freq(noun('ambulans', 'en', '救护车', 'ambulance', 'ambulansen', 'ambulanser', 'ambulanserna', [
    ['Ambulansen kommer snart.', '救护车马上到。'],
    ['En ambulans stannade utanför.', '一辆救护车停在外面。'],
    ['Två ambulanser körde förbi.', '两辆救护车开了过去。'],
    ['Ring efter ambulans nu.', '现在叫救护车。'],
  ]), 1524),
  freq(adj('strålande', '灿烂的；极好的', 'radiant / splendid', 'strålande', 'strålande', [
    ['Vilken strålande dag!', '多么灿烂的一天！'],
    ['Ett strålande leende.', '一个灿烂的笑容。'],
    ['De strålande nyheterna kom i morse.', '那些大好消息今天早上来了。'],
    ['Hon ser strålande ut.', '她看起来容光焕发。'],
  ]), 1525),
  freq(noun('amerikan', 'en', '美国人', 'American (person)', 'amerikanen', 'amerikaner', 'amerikanerna', [
    ['En amerikan sitter där.', '一位美国人坐在那里。'],
    ['Amerikanen talar svenska.', '那位美国人说瑞典语。'],
    ['Två amerikaner väntar i hallen.', '两位美国人在门厅等。'],
    ['Fråga amerikanen där borta.', '问问那边那位美国人。'],
  ]), 1526),
  freq(noun('leende', 'ett', '微笑', 'smile', 'leendet', 'leenden', 'leendena', [
    ['Ett litet leende räckte.', '一个小小的微笑就够了。'],
    ['Leendet lyste upp rummet.', '那个微笑让房间亮了起来。'],
    ['Hennes leenden är varma.', '她的微笑很温暖。'],
    ['Leendena smittade av sig.', '那些笑容会传染。'],
  ]), 1527, c(
    [
      ['le', '微笑（动词）'],
      ['-ende', '正在……；动作变成名词'],
    ],
    '动词 le 加上 -ende，变成名词“微笑”。',
  )),
  freq(verb('spåra', '追踪；查出', 'to trace / to track', 'spårar', 'spårade', 'spårat', 'spåra', [
    ['Hunden spårar tjuven.', '狗在追踪小偷。'],
    ['Polisen spårade bilen till stan.', '警察把车追踪到了城里。'],
    ['De har spårat paketet.', '他们已经追踪到那个包裹。'],
    ['Spåra samtalet, tack.', '请追踪这个电话。'],
  ]), 1528),
  freq(noun('sjukdom', 'en', '疾病', 'disease / illness', 'sjukdomen', 'sjukdomar', 'sjukdomarna', [
    ['Sjukdomen gick över fort.', '病好得很快。'],
    ['En sjukdom spreds i klassen.', '一种病在班上传播。'],
    ['Han har haft flera sjukdomar.', '他得过好几种病。'],
    ['Vila ut sjukdomen.', '把病养好。'],
  ]), 1529, c([['sjuk', '生病的'], ['-dom', '状态']], '生病的状态，合起来就是疾病。')),
  freq(adj('mänsklig', '人的；有人性的', 'human', 'mänskligt', 'mänskliga', [
    ['Det är ett mänskligt fel.', '那是人都会犯的错。'],
    ['Ett mänskligt liv är ovärderligt.', '一条人命无价。'],
    ['De mänskliga rättigheterna måste skyddas.', '人权必须得到保护。'],
    ['Hon är varm och mänsklig.', '她温暖而有人情味。'],
  ], { comparative: 'mänskligare', superlative: 'mänskligast' }), 1530, c(
    [
      ['människa', '人（词干 mänsk-）'],
      ['-lig', '……的'],
    ],
    '“属于人的”，合起来就是人的、有人性的。',
  )),
  freq(noun('gård', 'en', '院子；农场', 'yard / farm', 'gården', 'gårdar', 'gårdarna', [
    ['Gården ligger bakom huset.', '院子在房子后面。'],
    ['De bor på en gård.', '他们住在一个农场。'],
    ['Två gårdar säljs i år.', '今年有两个农场在卖。'],
    ['Lek inte på gården i mörkret.', '天黑后别在院子里玩。'],
  ]), 1531),
  freq(other('vare sig', 'phrase', '无论……还是；既不……也不', 'whether … or / neither … nor', [
    ['Vare sig du vill eller inte, måste vi gå.', '无论你愿不愿意，我们都得走。'],
    ['Jag vill inte ha vare sig kaffe eller te.', '咖啡和茶我都不要。'],
    ['Vare sig det regnar eller snöar åker vi.', '无论下雨还是下雪我们都去。'],
    ['Det spelar ingen roll, vare sig idag eller imorgon.', '今天还是明天都无所谓。'],
  ]), 1532, c(
    [
      ['vare', '是（旧式虚拟语气，来自 vara）'],
      ['sig', '自己；无论哪一个'],
    ],
    '字面接近“无论是哪一个”，用来连接“无论……还是”，或“既不……也不”。',
  )),
  freq(noun('medborgare', 'en', '公民', 'citizen', 'medborgaren', 'medborgare', 'medborgarna', [
    ['Hon är svensk medborgare.', '她是瑞典公民。'],
    ['Medborgaren har rätt att rösta.', '公民有投票的权利。'],
    ['Alla medborgare är lika inför lagen.', '所有公民在法律面前平等。'],
    ['Medborgarna samlades på torget.', '公民们聚集在广场上。'],
  ]), 1533, c(
    [
      ['med', '一起；共同'],
      ['borgare', '城里人；市民'],
    ],
    '“一同属于这座城的人”，合起来就是公民。',
  )),
  freq(adj('rak', '直的；坦率的', 'straight / frank', 'rakt', 'raka', [
    ['Hon har en rak rygg.', '她背很直。'],
    ['Ett rakt svar, tack.', '请给一个直截的回答。'],
    ['De raka vägarna är tråkiga.', '那些直路很无聊。'],
    ['Håll ryggen rak.', '把背挺直。'],
  ]), 1534),
  freq(noun('sinne', 'ett', '头脑；感觉；心智', 'mind / sense', 'sinnet', 'sinnen', 'sinnena', [
    ['Hon har ett skarpt sinne.', '她头脑敏锐。'],
    ['Sinnet behöver vila.', '头脑需要休息。'],
    ['Vi har fem sinnen.', '我们有五种感官。'],
    ['Sinnena skärps i mörkret.', '在黑暗里感官会变敏锐。'],
  ]), 1535),
  freq(noun('förklaring', 'en', '解释；说明；声明', 'explanation / declaration', 'förklaringen', 'förklaringar', 'förklaringarna', [
    ['Ge mig en förklaring.', '给我一个解释。'],
    ['Förklaringen var enkel.', '这个解释很简单。'],
    ['Hon har flera förklaringar.', '她有好几种解释。'],
    ['Skriv förklaringen här.', '把说明写在这儿。'],
  ]), 1536, c([['förklara', '解释'], ['-ning', '（名词）']], '解释这件事，合起来就是说明、解释。')),
  freq(other('sött', 'adv', '甜美地；可爱地', 'sweetly', [
    ['Kakan doftar sött.', '蛋糕闻起来甜。'],
    ['Barnet ler sött.', '孩子笑得很可爱。'],
    ['Hon sjunger sött för oss.', '她给我们唱得很甜美。'],
    ['Smaka inte så sött.', '别做得那么甜。'],
  ]), 1537),
  freq(noun('uppgift', 'en', '任务；作业；资料', 'task / assignment / information', 'uppgiften', 'uppgifter', 'uppgifterna', [
    ['Uppgiften är svår.', '这个任务很难。'],
    ['En uppgift till i dag.', '今天还有一项任务。'],
    ['Hon lämnade flera uppgifter.', '她提供了好几项资料。'],
    ['Gör uppgiften färdigt.', '把这个作业做完。'],
  ]), 1538, c([['upp', '向上／给出'], ['gift', '被给予的']], '被交出来的东西，合起来就是任务或资料。')),
  freq(other('likt', 'other', '像；如同', 'like / as', [
    ['Hon sjunger likt sin mamma.', '她唱得像她妈妈。'],
    ['Likt i fjol regnade det.', '像去年一样下雨了。'],
    ['Han gör det likt ett proffs.', '他做得像个专业的。'],
    ['Gå inte likt en robot.', '别走得像机器人。'],
  ]), 1539),
  freq(noun('önskan', 'en', '愿望；意愿', 'wish', 'önskan', 'önskningar', 'önskningarna', [
    ['Hon har en önskan kvar.', '她还剩一个愿望。'],
    ['Önskan gick i uppfyllelse.', '那个愿望实现了。'],
    ['Barnen har många önskningar.', '孩子们有很多愿望。'],
    ['Säg din önskan högt.', '把你的愿望大声说出来。'],
  ]), 1540),
  freq(noun('samvete', 'ett', '良心', 'conscience', 'samvetet', 'samveten', 'samvetena', [
    ['Jag har dåligt samvete.', '我良心不安。'],
    ['Samvetet sa att jag skulle stanna.', '良心告诉我应该留下。'],
    ['Vi måste lyssna på våra samveten.', '我们必须听从自己的良心。'],
    ['Deras samveten var rena.', '他们问心无愧。'],
  ]), 1541, c(
    [
      ['sam-', '一起；共同'],
      ['vete', '知道（来自 veta）'],
    ],
    '“自己心里知道的那部分”，合起来就是良心。',
  )),
  freq(noun('släkt', 'en', '亲戚；家族', 'relatives / family (lineage)', 'släkten', 'släkter', 'släkterna', [
    ['Hela släkten kommer till festen.', '全家族都来参加聚会。'],
    ['Släkten bor i norr.', '亲戚们住在北边。'],
    ['Två släkter möttes där.', '两个家族在那儿相遇。'],
    ['Vi är släkt med varandra.', '我们是亲戚。'],
  ]), 1542),
  freq(adj('skrämmande', '可怕的；令人害怕的', 'frightening / scary', 'skrämmande', 'skrämmande', [
    ['Det var en skrämmande upplevelse.', '那是一次可怕的经历。'],
    ['Ett skrämmande ljud kom från källaren.', '地下室传来可怕的声音。'],
    ['De skrämmande bilderna syntes på nyheterna.', '那些吓人的画面出现在新闻里。'],
    ['Tanken är skrämmande.', '这个念头很可怕。'],
  ]), 1543),
  freq(other('politiskt', 'adv', '在政治上；从政治角度', 'politically', [
    ['Frågan är politiskt känslig.', '这个问题在政治上敏感。'],
    ['Hon tänker politiskt.', '她从政治上思考。'],
    ['De röstade politiskt medvetet.', '他们投票时有政治意识。'],
    ['Politiskt sett är det klokt.', '从政治上看这很明智。'],
  ]), 1544),
  freq(noun('trick', 'ett', '招数；把戏；窍门', 'trick', 'tricket', 'trick', 'tricken', [
    ['Han kan ett trick till.', '他还会一个把戏。'],
    ['Tricket är enkelt.', '这个窍门很简单。'],
    ['Hon visade tre trick.', '她变了三个戏法。'],
    ['Tricken lurar ingen nu.', '那些把戏现在骗不了人。'],
  ]), 1545),
  freq(other('mer eller mindre', 'phrase', '或多或少；差不多', 'more or less', [
    ['Hon är mer eller mindre klar.', '她差不多好了。'],
    ['Det är mer eller mindre samma sak.', '这差不多是一回事。'],
    ['Vi väntade mer eller mindre en timme.', '我们差不多等了一小时。'],
    ['Mer eller mindre alla kom.', '差不多所有人都来了。'],
  ]), 1546, c(
    [
      ['mer', '更多'],
      ['eller', '或者'],
      ['mindre', '更少'],
    ],
    '或多或少，合起来就是差不多、或多或少。',
  )),
  freq(adj('främsta', '最主要的；首要的', 'foremost / leading', 'främsta', 'främsta', [
    ['Det är hennes främsta mål.', '那是她最主要的目标。'],
    ['Landets främsta forskare samlades där.', '该国最顶尖的研究者聚集在那里。'],
    ['Säkerheten är det främsta.', '安全是最首要的。'],
    ['Han är en av de främsta i klassen.', '他是班上最突出的人之一。'],
  ]), 1547, c(
    [
      ['främst', '最前面的'],
      ['-a', '定式/复数词尾'],
    ],
    'främst 的定式，用来表示最主要的、首要的。',
  )),
  freq(adj('allvarlig', '严肃的；严重的；认真的', 'serious / grave', 'allvarligt', 'allvarliga', [
    ['Det är en allvarlig fråga.', '这是一个严肃的问题。'],
    ['Ett allvarligt fel hittades.', '发现了一个严重的错误。'],
    ['De allvarliga rösterna tystnade.', '那些严肃的声音停了。'],
    ['Var allvarlig nu.', '现在严肃一点。'],
  ]), 1548, c([['allvar', '认真／严肃'], ['-lig', '带有……性质的']], '带有严肃性质的，合起来就是严肃的、严重的。')),
  freq(noun('morfar', 'en', '外公；外祖父', 'maternal grandfather', 'morfadern', null, null, [
    ['Min morfar bor här.', '我外公住在这里。'],
    ['Morfadern väntar i köket.', '外公在厨房里等。'],
    ['Hon ringer morfar varje söndag.', '她每个星期天给外公打电话。'],
    ['Morfar bakar bröd.', '外公在烤面包。'],
  ]), 1549, c([['mor', '母亲'], ['far', '爸爸']], '母亲的父亲，就是外公。')),
  freq(noun('otur', 'en', '倒霉；不走运', 'bad luck', 'oturen', null, null, [
    ['Vilken otur jag hade.', '我真不走运。'],
    ['Oturen följde oss hela dan.', '倒霉跟着我们一整天。'],
    ['Han har otur med vädret.', '他天气不顺。'],
    ['Skyll inte på oturen.', '别把责任推给倒霉。'],
  ]), 1550, c([['o-', '不'], ['tur', '运气']], '不是好运，合起来就是倒霉、不走运。')),
]

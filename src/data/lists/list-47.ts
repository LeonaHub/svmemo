import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2301–2350. Primary POS is the high-frequency use, not every sense in the book. */
export const list47: Word[] = [
  freq(noun('dumhet', 'en', '愚蠢；蠢事', 'stupidity / foolish act', 'dumheten', 'dumheter', 'dumheterna', [
    ['Det var en dumhet att gå ut.', '出去是件蠢事。'],
    ['Dumheten kostade dyrt.', '那件蠢事代价很大。'],
    ['Han har gjort flera dumheter.', '他干了好几件蠢事。'],
    ['Dumheterna slutar här.', '那些蠢事到此为止。'],
  ]), 2301, c(
    [
      ['dum', '蠢的'],
      ['-het', '抽象名词后缀'],
    ],
    '“蠢的状态”，就是愚蠢，也指一件蠢事。',
  )),
  freq(noun('skinn', 'ett', '皮；皮革', 'skin / leather', 'skinnet', 'skinn', 'skinnen', [
    ['Jackan är av skinn.', '这件夹克是皮的。'],
    ['Skinnet på äpplet är rött.', '苹果皮是红的。'],
    ['Hon köpte två skinn.', '她买了两张皮。'],
    ['Skinnen hänger på tork.', '那些皮在晾着。'],
  ]), 2302),
  freq(noun('ledtråd', 'en', '线索', 'clue', 'ledtråden', 'ledtrådar', 'ledtrådarna', [
    ['Polisen hittade en ledtråd.', '警察找到一条线索。'],
    ['Ledtråden ledde till huset.', '那条线索指向那栋房子。'],
    ['Det fanns flera ledtrådar.', '有好几条线索。'],
    ['Ledtrådarna räckte inte.', '那些线索还不够。'],
  ]), 2303, c(
    [
      ['leda', '带领'],
      ['tråd', '线'],
    ],
    '“带领人往前的线”，合起来就是线索。',
  )),
  freq(noun('dal', 'en', '山谷', 'valley', 'dalen', 'dalar', 'dalarna', [
    ['Huset ligger i en dal.', '房子在山谷里。'],
    ['Dalen är grön på våren.', '春天山谷是绿的。'],
    ['Det finns tre dalar här.', '这里有三条山谷。'],
    ['Dalarna mellan bergen är djupa.', '山间那些山谷很深。'],
  ]), 2304),
  freq(adj('teknisk', '技术的；技巧上的', 'technical', 'tekniskt', 'tekniska', [
    ['Hon har teknisk kunskap om bilar.', '她有汽车方面的技术知识。'],
    ['Ett tekniskt fel stoppade tåget.', '一个技术故障让火车停了。'],
    ['De tekniska detaljerna kan vänta.', '那些技术细节可以以后再说。'],
    ['Frågan är mer teknisk än politisk.', '这个问题偏技术，不偏政治。'],
  ]), 2305),
  freq(noun('böna', 'en', '豆子', 'bean', 'bönan', 'bönor', 'bönorna', [
    ['Hon kokade bönor till middag.', '她煮豆子当晚饭。'],
    ['Bönan är grön.', '这颗豆子是绿的。'],
    ['Två bönor föll på golvet.', '两颗豆子掉到地板上。'],
    ['Bönorna måste blötläggas.', '那些豆子得泡一下。'],
  ]), 2306),
  freq(verb('återstå', '还剩下；尚待', 'to remain / to be left', 'återstår', 'återstod', 'återstått', 'återstå', [
    ['Det återstår tre dagar.', '还剩三天。'],
    ['Bara kaffet återstod.', '只剩下咖啡了。'],
    ['Mycket har återstått ogjort.', '还有很多没做完。'],
    ['Vad återstår att göra?', '还剩什么要做？'],
  ]), 2307, c(
    [
      ['åter', '还；再'],
      ['stå', '站；处于'],
    ],
    '“还站在那里”，合起来就是还剩下。',
  )),
  freq(noun('utrymme', 'ett', '空间；余地', 'space / room', 'utrymmet', 'utrymmen', 'utrymmena', [
    ['Det finns inte utrymme i hallen.', '门厅里没有空间。'],
    ['Utrymmet under trappan är litet.', '楼梯下的空间很小。'],
    ['Vi behöver fler utrymmen.', '我们需要更多空间。'],
    ['Utrymmena i källaren hyrs ut.', '地下室那些空间租出去了。'],
  ]), 2308, c(
    [
      ['ut', '向外'],
      ['rymma', '装得下；腾出'],
    ],
    '“能腾出来、装得下的地方”，就是空间、余地。',
  )),
  freq(adj('skicklig', '熟练的；高明的', 'skilled / skilful', 'skickligt', 'skickliga', [
    ['Hon är en skicklig kock.', '她是个手艺高超的厨师。'],
    ['Ett skickligt jobb.', '一份干得很漂亮的活。'],
    ['De skickliga hantverkarna är dyra.', '那些手艺好的工匠很贵。'],
    ['Han är skickligare än jag.', '他比我更熟练。'],
  ], { comparative: 'skickligare', superlative: 'skickligast' }), 2309, c(
    [
      ['skick', '本事；样子'],
      ['-lig', '带有……性质的'],
    ],
    '“带有本事的”，就是熟练的、高明的。',
  )),
  freq(verb('bege sig', '动身；前往', 'to set off / to go', 'beger sig', 'begav sig', 'begett sig', 'bege dig', [
    ['Vi beger oss hem nu.', '我们现在动身回家。'],
    ['Hon begav sig till stan.', '她动身进城了。'],
    ['De har begett sig av redan.', '他们已经出发了。'],
    ['Bege dig inte dit ensam.', '别一个人往那儿去。'],
  ]), 2310, c(
    [
      ['be-', '构词前缀'],
      ['ge', '给'],
      ['sig', '自己'],
    ],
    '“把自己交给某个方向”，合起来就是动身、前往。',
  )),
  freq(verb('fiska', '钓鱼；捕鱼', 'to fish / to go fishing', 'fiskar', 'fiskade', 'fiskat', 'fiska', [
    ['Han fiskar vid sjön i gryningen.', '他黎明时在湖边钓鱼。'],
    ['De fiskade hela morgonen.', '他们钓了一上午。'],
    ['Har du fiskat här förut?', '你以前在这儿钓过吗？'],
    ['Fiska inte utan tillstånd.', '没有许可别钓鱼。'],
  ]), 2311),
  freq(noun('golf', 'en', '高尔夫', 'golf', 'golfen', null, null, [
    ['Hon spelar golf på söndagar.', '她星期天打高尔夫。'],
    ['Golfen tar hela eftermiddagen.', '这场高尔夫要占掉整个下午。'],
    ['Vi lär oss golf i sommar.', '我们今年夏天学高尔夫。'],
    ['Lägg undan golfklubban.', '把高尔夫球杆收起来。'],
  ]), 2312),
  freq(noun('motorväg', 'en', '高速公路', 'motorway / highway', 'motorvägen', 'motorvägar', 'motorvägarna', [
    ['Vi kör på motorvägen.', '我们在高速公路上开。'],
    ['Motorvägen var avstängd.', '那条高速公路封了。'],
    ['Två motorvägar möts där.', '两条高速公路在那里交汇。'],
    ['Motorvägarna är fulla i rusningen.', '高峰时那些高速公路都堵。'],
  ]), 2313, c(
    [
      ['motor', '发动机'],
      ['väg', '路'],
    ],
    '“给机动车走的路”，就是高速公路。',
  )),
  freq(noun('gas', 'en', '气体；煤气；油门', 'gas / accelerator', 'gasen', 'gaser', null, [
    ['Spisen går på gas.', '炉子用煤气。'],
    ['Gasen luktade starkt i köket.', '厨房里煤气味很重。'],
    ['Flera gaser blandas i röret.', '好几种气体在管子里混合。'],
    ['Släpp gasen före kurvan.', '拐弯前松开油门。'],
  ]), 2314),
  freq(noun('besökare', 'en', '访客；参观者', 'visitor', 'besökaren', 'besökare', 'besökarna', [
    ['Museet har många besökare.', '博物馆有很多访客。'],
    ['Besökaren glömde väskan.', '那位访客忘了包。'],
    ['Flera besökare väntade.', '好几位访客在等。'],
    ['Besökarna måste köpa biljett.', '那些访客必须买票。'],
  ]), 2315, c(
    [
      ['besöka', '拜访'],
      ['-are', '做这事的人'],
    ],
    '“来拜访的人”，就是访客、参观者。',
  )),
  freq(noun('påse', 'en', '袋子', 'bag', 'påsen', 'påsar', null, [
    ['Hon bar en påse med äpplen.', '她提着一袋苹果。'],
    ['Påsen gick sönder i kassan.', '袋子在收银台破了。'],
    ['Två påsar räcker till maten.', '两个袋子够装这些食物。'],
    ['Håll påsen öppen, tack.', '请把袋子张开。'],
  ]), 2316),
  freq(noun('vrede', 'en', '怒气；愤怒', 'wrath / anger', 'vreden', null, null, [
    ['Han skakade av vrede.', '他气得发抖。'],
    ['Vreden lade sig långsamt.', '怒气慢慢消了。'],
    ['Tala inte i vrede.', '别在怒气中说话。'],
    ['Hennes vrede var tydlig.', '她的怒气很明显。'],
  ]), 2317),
  freq(noun('växel', 'en', '挡位；零钱；总机', 'gear / change / switchboard', 'växeln', 'växlar', 'växlarna', [
    ['Lägg i treans växel.', '挂上三挡。'],
    ['Har du växel för bussen?', '你有坐公交的零钱吗？'],
    ['Ring växeln och fråga.', '打总机问一下。'],
    ['Växlarna i lastbilen är tunga.', '卡车里那些挡很沉。'],
  ]), 2318, c(
    [
      ['växla', '交换；换挡'],
      ['-el', '名词后缀'],
    ],
    '由“交换、换挡”变成名词，就是挡位、零钱、总机。',
  )),
  freq(noun('kärring', 'en', '老太婆（口，常带贬或不敬）', 'old woman (colloquial, often pejorative)', 'kärringen', 'kärringar', 'kärringarna', [
    ['Han sa kärring och hon blev arg.', '他说了“老太婆”，她生气了。'],
    ['Kärringen bodde i stugan.', '那个老太婆住在小屋里。'],
    ['Några kärringar satt på bänken.', '几个老太婆坐在长椅上。'],
    ['Kärringarna skrattade högt.', '那些老太婆大声笑。'],
  ]), 2319),
  freq(verb('anropa', '呼叫；召唤', 'to call / to hail', 'anropar', 'anropade', 'anropat', 'anropa', [
    ['Fartyget anropar hamnen.', '船在呼叫港口。'],
    ['Hon anropade räddningstjänsten i radio.', '她用无线电呼叫了救援。'],
    ['Planet har anropats från tornet.', '塔台已经呼叫过那架飞机。'],
    ['Anropa oss på kanal sexton.', '用十六频道呼叫我们。'],
  ]), 2320, c(
    [
      ['an-', '朝向'],
      ['ropa', '喊'],
    ],
    '“朝某处喊”，合起来就是呼叫、召唤。',
  )),
  freq(noun('mus', 'en', '老鼠；鼠标', 'mouse', 'musen', 'möss', 'mössen', [
    ['En mus sprang över golvet.', '一只老鼠从地板上跑过。'],
    ['Klicka med musen.', '用鼠标点一下。'],
    ['Katten jagar möss.', '猫在抓老鼠。'],
    ['Mössen har ätit osten.', '那些老鼠把奶酪吃了。'],
  ]), 2321),
  freq(verb('roa', '逗乐；使开心', 'to amuse / to entertain', 'roar', 'roade', 'roat', 'roa', [
    ['Clownen roar barnen.', '小丑逗孩子们开心。'],
    ['Filmen roadade oss.', '那部电影把我们逗乐了。'],
    ['Vi har roat oss hela kvällen.', '我们整晚都玩得很开心。'],
    ['Roa gästerna lite.', '逗客人开心一下。'],
  ]), 2322),
  freq(noun('förare', 'en', '司机；驾驶员', 'driver', 'föraren', 'förare', 'förarna', [
    ['Föraren stannade bussen.', '司机把公交车停了。'],
    ['En förare väntar utanför.', '一名司机在外面等。'],
    ['Två förare turas om.', '两名司机轮班。'],
    ['Förarna ska vila efter körningen.', '那些司机开完要休息。'],
  ]), 2323, c(
    [
      ['föra', '驾驶；带领'],
      ['-are', '做这事的人'],
    ],
    '“驾驶或带领的人”，就是司机、驾驶员。',
  )),
  freq(noun('dokument', 'ett', '文件；文献', 'document', 'dokumentet', 'dokument', 'dokumenten', [
    ['Hon skrev under dokumentet.', '她在文件上签了字。'],
    ['Dokumentet är hemligt.', '这份文件是保密的。'],
    ['Två dokument saknas i mappen.', '文件夹里缺两份文件。'],
    ['Dokumenten ligger i arkivet.', '那些文件在档案室里。'],
  ]), 2324),
  freq(noun('pastor', 'en', '牧师', 'pastor', 'pastorn', 'pastorer', 'pastorerna', [
    ['Pastorn talar i kyrkan.', '牧师在教堂讲话。'],
    ['En pastor leder vigseln.', '一位牧师主持婚礼。'],
    ['Flera pastorer var inbjudna.', '好几位牧师受了邀请。'],
    ['Pastorerna möttes i går.', '那些牧师昨天见了面。'],
  ]), 2325),
  freq(adj('tidig', '早的', 'early', 'tidigt', 'tidiga', [
    ['Vi åt en tidig lunch.', '我们吃了一顿很早的午饭。'],
    ['Ett tidigt tåg går klockan fem.', '一班早班火车五点开。'],
    ['De tidiga blommorna kom i april.', '那些早开的花四月就来了。'],
    ['Kom inte för tidigt.', '别来得太早。'],
  ]), 2326),
  freq(verb('inta', '占领；就座；进食', 'to occupy / to take (a seat or meal)', 'intar', 'intog', 'intagit', 'inta', [
    ['Soldaterna intar staden.', '士兵占领这座城市。'],
    ['Vi intog frukosten tidigt.', '我们很早就吃了早餐。'],
    ['Platserna har intagits redan.', '那些座位已经被占了。'],
    ['Inta era platser.', '请入座。'],
  ]), 2327, c(
    [
      ['in', '进入'],
      ['ta', '拿'],
    ],
    '“拿进来占住”，就是占领、就座，也指进食。',
  )),
  freq(noun('damm', 'ett', '灰尘；尘土', 'dust', 'dammet', null, null, [
    ['Det ligger damm på hyllan.', '架子上有灰。'],
    ['Dammet yr i luften.', '灰尘在空气里扬起来。'],
    ['Hon torkade damm i hallen.', '她在门厅掸灰。'],
    ['Dammet täckte golvet.', '灰尘盖住了地板。'],
  ]), 2328),
  freq(noun('nonsens', 'ett', '废话；胡说', 'nonsense', 'nonsenset', null, null, [
    ['Det där är rent nonsens.', '那纯粹是胡说。'],
    ['Nonsenset i mejlet retade henne.', '邮件里的废话惹恼了她。'],
    ['Prata inte nonsens.', '别说废话。'],
    ['Hon tröttnade på nonsens.', '她听烦了那些胡说。'],
  ]), 2329),
  freq(other('med anledning av', 'phrase', '由于；鉴于', 'due to / on the occasion of', [
    ['Mötet ställs in med anledning av sjukdomen.', '由于生病，会议取消。'],
    ['Med anledning av brevet svarar vi så här.', '鉴于来信，我们这样回复。'],
    ['Festen ges med anledning av jubileet.', '宴会是为了周年纪念举行的。'],
    ['Med anledning av klagomålen ändrades reglerna.', '由于那些投诉，规定改了。'],
  ]), 2330, c(
    [
      ['med', '以；带着'],
      ['anledning', '缘由；起因'],
      ['av', '由'],
    ],
    '“带着由某事引起的缘由”，就是由于、鉴于。',
  )),
  freq(adj('västra', '西边的；西部的', 'western / west', 'västra', 'västra', [
    ['Den västra sidan av sjön är grund.', '湖的西边水浅。'],
    ['Västra infarten är avstängd.', '西边入口封了。'],
    ['De västra stadsdelarna är tysta.', '那些西部街区很安静。'],
    ['Bo på den västra sidan.', '住在西边。'],
  ]), 2331),
  freq(verb('kissa', '小便；尿尿（口）', 'to pee / to urinate (informal)', 'kissar', 'kissade', 'kissat', 'kissa', [
    ['Barnet måste kissa.', '孩子要小便。'],
    ['Hunden kissade mot trädet.', '狗对着树撒了尿。'],
    ['Har katten kissat på golvet?', '猫在地板上尿了吗？'],
    ['Kissa före resan.', '出发前先去小便。'],
  ]), 2332),
  freq(noun('lager', 'ett', '仓库；存货；层', 'warehouse / stock / layer', 'lagret', 'lager', 'lagren', [
    ['Varorna ligger på lagret.', '货在仓库里。'],
    ['Lagret är tomt just nu.', '库存现在空了。'],
    ['Måla två lager färg.', '刷两层漆。'],
    ['Lagren i jorden syns tydligt.', '地层看得很清楚。'],
  ]), 2333),
  freq(adj('politisk', '政治的', 'political', 'politiskt', 'politiska', [
    ['Det var ett politiskt beslut.', '那是一项政治决定。'],
    ['Ett politiskt parti bildades.', '一个政党成立了。'],
    ['De politiska debatterna blev långa.', '那些政治辩论拖得很长。'],
    ['Håll frågan politisk, inte personlig.', '把问题放在政治上，别对人。'],
  ]), 2334),
  freq(noun('instruktion', 'en', '说明；指示', 'instruction / directions', 'instruktionen', 'instruktioner', null, [
    ['Läs instruktionen före start.', '开始前先读说明。'],
    ['Instruktionen var otydlig.', '那份说明写得不清楚。'],
    ['Följ instruktionerna noga.', '仔细按那些指示做。'],
    ['Hon gav korta instruktioner.', '她给了简短的指示。'],
  ]), 2335),
  freq(noun('piano', 'ett', '钢琴', 'piano', 'pianot', 'pianon', 'pianona', [
    ['Hon spelar piano varje dag.', '她每天弹钢琴。'],
    ['Pianot står vid fönstret.', '钢琴放在窗边。'],
    ['Två pianon ryms inte här.', '这儿放不下两架钢琴。'],
    ['Pianona stämdes i går.', '那些钢琴昨天调了音。'],
  ]), 2336),
  freq(noun('schack', 'ett', '国际象棋', 'chess', 'schacket', null, null, [
    ['De spelar schack i parken.', '他们在公园下国际象棋。'],
    ['Schacket tar lång tid i kväll.', '今晚这盘棋要花很长时间。'],
    ['Han lär barnen schack.', '他教孩子们下棋。'],
    ['Ställ schacket på bordet.', '把棋放到桌上。'],
  ]), 2337),
  freq(verb('orsaka', '造成；引起', 'to cause', 'orsakar', 'orsakade', 'orsakat', 'orsaka', [
    ['Misstaget orsakar förseningar.', '这个错误造成延误。'],
    ['Regnet orsakade översvämning.', '雨造成了洪水。'],
    ['Skadan har orsakats av slitage.', '损坏是磨损造成的。'],
    ['Orsaka inte mer problem.', '别再造成更多问题。'],
  ]), 2338, c(
    [
      ['orsak', '原因'],
      ['-a', '动词词尾'],
    ],
    '由“原因”变成动词，就是造成、引起。',
  )),
  freq(noun('siffra', 'en', '数字；数目', 'figure / numeral / digit', 'siffran', 'siffror', null, [
    ['Skriv siffran i rutan.', '把这个数字写进框里。'],
    ['Siffran är för hög.', '这个数目太高了。'],
    ['Hon läste upp tre siffror.', '她念了三个数字。'],
    ['Kolla siffrorna en gång till.', '再核对一遍那些数字。'],
  ]), 2339),
  freq(verb('ogilla', '不喜欢；不赞同', 'to dislike', 'ogillar', 'ogillade', 'ogillat', 'ogilla', [
    ['Jag ogillar kaffe.', '我不喜欢咖啡。'],
    ['Hon ogillade förslaget.', '她不喜欢那个提议。'],
    ['Förändringen har ogillats av många.', '许多人已经表示不喜欢这个变化。'],
    ['Ogilla gärna, men säg varför.', '不喜欢也行，但要说出原因。'],
  ]), 2340, c(
    [
      ['o-', '否定前缀'],
      ['gilla', '喜欢'],
    ],
    '“不喜欢”，就是讨厌、不赞同。',
  )),
  freq(adj('tillfällig', '临时的；暂时的', 'temporary / occasional', 'tillfälligt', 'tillfälliga', [
    ['Det är en tillfällig lösning.', '这是个临时办法。'],
    ['Ett tillfälligt jobb.', '一份临时工作。'],
    ['De tillfälliga skyltarna tas bort imorgon.', '那些临时牌子明天撤掉。'],
    ['Störningen är bara tillfällig.', '这次干扰只是暂时的。'],
  ]), 2341, c(
    [
      ['tillfälle', '时机；场合'],
      ['-ig', '带有……性质的'],
    ],
    '“只属于某一时机的”，就是临时的、暂时的。',
  )),
  freq(noun('frukt', 'en', '水果；果实', 'fruit', 'frukten', 'frukter', null, [
    ['Vi köper frukt på torget.', '我们在市场上买水果。'],
    ['Frukten är mogen nu.', '这水果现在熟了。'],
    ['Hon packade tre frukter i påsen.', '她往袋子里装了三个水果。'],
    ['Ät frukten före middagen.', '晚饭前把水果吃了。'],
  ]), 2342),
  freq(noun('front', 'en', '正面；前线', 'front', 'fronten', 'fronter', null, [
    ['Huset har en röd front.', '这房子正面是红的。'],
    ['Fronten mot vägen är nymålad.', '朝路的那面刚刷过。'],
    ['Två fronter öppnades i norr.', '北边开辟了两条战线。'],
    ['Inget nytt på den fronten.', '那条战线上没有新情况。'],
  ]), 2343),
  freq(noun('mynt', 'ett', '硬币', 'coin', 'myntet', 'mynt', 'mynten', [
    ['Ett mynt ramlade ur fickan.', '一枚硬币从口袋掉出来。'],
    ['Myntet är gammalt.', '这枚硬币很旧。'],
    ['Hon samlar på mynt.', '她收集硬币。'],
    ['Mynten ligger i skålen.', '那些硬币在碗里。'],
  ]), 2344),
  freq(noun('firma', 'en', '公司；商号', 'firm / company', 'firman', 'firmor', 'firmorna', [
    ['Han startade en firma.', '他开了一家公司。'],
    ['Firman ligger i stan.', '那家公司在城里。'],
    ['Två firmor samarbetar.', '两家公司在合作。'],
    ['Firmorna slog sig ihop.', '那些公司合并了。'],
  ]), 2345),
  freq(adj('lila', '紫色的', 'purple / lilac', 'lila', 'lila', [
    ['Hon har en lila tröja.', '她穿着一件紫毛衣。'],
    ['Ett lila kuvert låg på bordet.', '桌上有一个紫色信封。'],
    ['De lila blommorna doftar sött.', '那些紫花闻起来很甜。'],
    ['Måla inte väggen lila.', '别把墙刷成紫色。'],
  ]), 2346),
  freq(verb('överraska', '使吃惊；出其不意', 'to surprise', 'överraskar', 'överraskade', 'överraskat', 'överraska', [
    ['Nyheten överraskar oss inte.', '这则新闻并不让我们吃惊。'],
    ['Hon överraskade oss med tårta.', '她用蛋糕给我们一个惊喜。'],
    ['Polisen har överraskat tjuvarna.', '警察已经出其不意地抓住了小偷。'],
    ['Överraska henne inte i dag.', '今天别给她惊喜。'],
  ]), 2347, c([['över', '从上面／出其不意'], ['raska', '迅速行动']], '从上面迅速扑过来，合起来就是使吃惊、出其不意。')),
  freq(verb('luta', '倾斜；倚靠', 'to lean / to tilt', 'lutar', 'lutade', 'lutat', 'luta', [
    ['Tornet lutar lite.', '塔有点斜。'],
    ['Hon lutade sig mot väggen.', '她靠在墙上。'],
    ['Stolen har lutat länge.', '这椅子歪了很久。'],
    ['Luta inte stolen bakåt.', '别把椅子往后仰。'],
  ]), 2348),
  freq(noun('gloria', 'en', '光环；荣光', 'halo / glory', 'glorian', 'glorior', 'gloriorna', [
    ['Helgonet har en gloria.', '圣像头上有光环。'],
    ['Glorian lyser på tavlan.', '画上的光环在发亮。'],
    ['Några glorior målades i guld.', '几个光环用金色画成。'],
    ['Gloriorna runt lamporna syns i dimman.', '灯周围那些光晕在雾里看得见。'],
  ]), 2349),
  freq(noun('utväg', 'en', '出路；办法', 'way out', 'utvägen', 'utvägar', 'utvägarna', [
    ['Vi måste hitta en utväg.', '我们必须找到一条出路。'],
    ['Utvägen visade sig vara enkel.', '那条出路其实很简单。'],
    ['Det fanns få utvägar.', '出路不多。'],
    ['Utvägarna är slut.', '那些出路都没了。'],
  ]), 2350, c(
    [
      ['ut', '向外'],
      ['väg', '路'],
    ],
    '“向外的路”，就是出路、办法。',
  )),
]

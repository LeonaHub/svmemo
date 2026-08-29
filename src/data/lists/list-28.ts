import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1351–1400. Primary POS is the high-frequency use, not every sense in the book. */
export const list28: Word[] = [
  freq(noun('operation', 'en', '手术；行动', 'operation (surgery / action)', 'operationen', 'operationer', 'operationerna', [
    ['Hon ska på operation i morgon.', '她明天要做手术。'],
    ['Operationen gick bra.', '手术很顺利。'],
    ['Två operationer väntar i veckan.', '这周还有两台手术。'],
    ['Armén inledde en operation.', '军队发动了一次行动。'],
  ]), 1351),
  freq(other('rättvist', 'adv', '公平地', 'fairly', [
    ['Domaren dömde rättvist.', '裁判判得很公平。'],
    ['Dela kakan rättvist.', '把蛋糕分公平。'],
    ['Det känns inte rättvist.', '这感觉不公平。'],
    ['Alla behandlas rättvist här.', '在这里所有人都被公平对待。'],
  ]), 1352, c(
    [
      ['rätt', '公正；对的'],
      ['vis', '样子；方式'],
      ['-t', '中性/副词词尾'],
    ],
    'rättvis 是“公正的样子”，rättvist 就是公平地。',
  )),
  freq(verb('skämmas', '感到羞愧', 'to be ashamed / embarrassed', 'skäms', 'skämdes', 'skämts', null, [
    ['Jag skäms för det jag sa.', '我为自己说的话感到羞愧。'],
    ['Han skämdes inför alla.', '他当着所有人的面很难为情。'],
    ['Du behöver inte skämmas.', '你不必感到羞愧。'],
    ['Hon har skämts länge för det.', '她为这件事羞愧了很久。'],
  ]), 1353, c(
    [
      ['skam', '羞耻'],
      ['-as', '感觉动词词尾（自己感到）'],
    ],
    '“自己感到羞耻”，合起来就是感到羞愧。',
  )),
  freq(other('inuti', 'other', '在……里面', 'inside', [
    ['Nyckeln ligger inuti lådan.', '钥匙在盒子里面。'],
    ['Vad finns inuti paketet?', '包裹里面有什么？'],
    ['Hon väntar inuti huset.', '她在房子里面等。'],
    ['Titta inuti skåpet.', '往柜子里面看。'],
  ]), 1354, c(
    [
      ['in', '进；里面'],
      ['uti', '在……之中（旧词）'],
    ],
    '两个表示“在里面”的成分叠在一起，就是在……里面。',
  )),
  freq(noun('skjuts', 'en', '搭车；一程', 'a ride / a lift', 'skjutsen', 'skjutsar', 'skjutsarna', [
    ['Kan jag få skjuts till stationen?', '我能搭你的车去车站吗？'],
    ['Skjutsen kommer om fem minuter.', '这趟顺风车五分钟后到。'],
    ['Vi turas om med skjutsarna.', '我们轮流载人。'],
    ['Tack för skjutsen!', '谢谢你载我一程！'],
  ]), 1355),
  freq(noun('bråk', 'ett', '争吵；打架', 'fight / quarrel', 'bråket', 'bråk', 'bråken', [
    ['Det blev bråk utanför krogen.', '酒吧外面吵起来了。'],
    ['Bråket slutade snabbt.', '那场争吵很快结束了。'],
    ['Jag vill inte ha mer bråk.', '我不要再吵了。'],
    ['Bråken hemma är jobbiga.', '家里的那些争吵很烦人。'],
  ]), 1356),
  freq(adj('fet', '胖的；油腻的', 'fat / fatty / greasy', 'fett', 'feta', [
    ['Katten är fet nu.', '这猫现在很胖。'],
    ['Ett fett kött tål jag inte.', '太肥的肉我受不了。'],
    ['De feta lönerna retar folk.', '那些丰厚的薪水惹人烦。'],
    ['Håret är fett efter träningen.', '练完头发油了。'],
  ]), 1357),
  freq(other('varifrån', 'adv', '从哪里', 'from where', [
    ['Varifrån kommer du?', '你从哪里来？'],
    ['Varifrån fick du boken?', '你从哪里弄到这本书的？'],
    ['Jag vet inte varifrån lukten kommer.', '我不知道这气味从哪来。'],
    ['Varifrån ska vi åka?', '我们从哪里出发？'],
  ]), 1358, c([['var', '哪里'], ['ifrån', '从']], '从哪里，合起来就是从何处来。')),
  freq(noun('anfall', 'ett', '袭击；发作', 'attack / seizure', 'anfallet', 'anfall', 'anfallen', [
    ['De gjorde ett anfall mot staden.', '他们向这座城市发动了袭击。'],
    ['Anfallet kom utan varning.', '袭击来得毫无预警。'],
    ['Han fick ett anfall i natt.', '他夜里发作了。'],
    ['Anfallen blir allt tätare.', '发作越来越频繁。'],
  ]), 1359, c(
    [
      ['an-', '朝向；扑上来'],
      ['fall', '倒下；落下'],
    ],
    '“朝你扑倒下来”，合起来是袭击，也引申为疾病发作。',
  )),
  freq(noun('lögnare', 'en', '说谎的人', 'liar', 'lögnaren', 'lögnare', 'lögnarna', [
    ['Han är en lögnare.', '他是个说谎的人。'],
    ['Lögnaren avslöjades fort.', '那个说谎的人很快被揭穿了。'],
    ['Två lögnare satt där.', '两个说谎的人坐在那里。'],
    ['Tro inte lögnarna.', '别信那些说谎的人。'],
  ]), 1360),
  freq(other('nödvändigt', 'adv', '必要地；必须', 'necessary / necessarily', [
    ['Det är nödvändigt att vänta.', '必须等待。'],
    ['Det är inte nödvändigt dyrt.', '不一定贵。'],
    ['Är det verkligen nödvändigt?', '这真的有必要吗？'],
    ['Ta bara det nödvändigaste.', '只带最必要的东西。'],
  ]), 1361, c(
    [
      ['nöd', '危急；急需'],
      ['vändig', '能转向、能求助的'],
      ['-t', '中性/副词词尾'],
    ],
    '“急需时能靠上的”，合起来就是必要的、必须。',
  )),
  freq(adj('normal', '正常的；普通的', 'normal / usual', 'normalt', 'normala', [
    ['Det är en normal dag.', '这是普通的一天。'],
    ['Ett normalt blodtryck.', '一个正常的血压。'],
    ['De normala tiderna gäller.', '还是那些平常的时间。'],
    ['Allt känns normalt igen.', '一切又感觉正常了。'],
  ]), 1362),
  freq(other('roligt', 'adv', '有趣；好玩', 'fun / amusing', [
    ['Det är roligt att träffa dig.', '见到你真高兴。'],
    ['Vi hade roligt i går.', '我们昨天玩得很开心。'],
    ['Hon berättar roligt.', '她讲得很有趣。'],
    ['Ha det roligt i kväll.', '今晚玩得开心。'],
  ]), 1363),
  freq(noun('linje', 'en', '线；路线', 'line / route', 'linjen', 'linjer', 'linjerna', [
    ['Dra en rak linje.', '画一条直线。'],
    ['Linjen går till centrum.', '这条线路开往市中心。'],
    ['Vilken linje ska jag ta?', '我该坐哪条线？'],
    ['Linjerna på kartan är tydliga.', '地图上的线路很清楚。'],
  ]), 1364),
  freq(noun('varning', 'en', '警告', 'warning', 'varningen', 'varningar', 'varningarna', [
    ['Det är en varning, inte ett skämt.', '这是警告，不是玩笑。'],
    ['Varningen kom för sent.', '警告来得太晚了。'],
    ['Vi fick flera varningar.', '我们收到了好几次警告。'],
    ['Ignorera inte varningarna.', '别无视那些警告。'],
  ]), 1365, c(
    [
      ['varna', '警告（动词）'],
      ['-ing', '行为名词后缀'],
    ],
    '由“警告”这个动作变成名词，就是一次警告。',
  )),
  freq(noun('tystnad', 'en', '寂静；沉默', 'silence', 'tystnaden', null, null, [
    ['Det blev tystnad i rummet.', '房间里静了下来。'],
    ['Tystnaden varade länge.', '沉默持续了很久。'],
    ['Vi väntade i tystnad.', '我们在寂静中等待。'],
    ['Bryt tystnaden nu.', '现在打破沉默吧。'],
  ]), 1366),
  freq(verb('drömma', '做梦；幻想', 'to dream', 'drömmer', 'drömde', 'drömt', 'dröm', [
    ['Jag drömmer om havet.', '我梦见大海。'],
    ['Hon drömde att hon flög.', '她梦见自己在飞。'],
    ['Har du drömt om det förut?', '你以前梦到过这个吗？'],
    ['Dröm inte för länge.', '别幻想太久。'],
  ]), 1367),
  freq(noun('möjlighet', 'en', '可能性；机会', 'possibility / opportunity', 'möjligheten', 'möjligheter', 'möjligheterna', [
    ['Det finns en möjlighet till mer tid.', '有可能再多给点时间。'],
    ['Möjligheten försvann fort.', '那个机会很快没了。'],
    ['Hon har flera möjligheter.', '她有好几个机会。'],
    ['Ta möjligheten nu.', '现在抓住这个机会。'],
  ]), 1368, c([['möjlig', '可能的'], ['-het', '性质、状态']], '可能的状态，合起来就是可能性、机会。')),
  freq(noun('skrik', 'ett', '一声喊；尖叫', 'yell / scream / cry', 'skriket', 'skrik', 'skriken', [
    ['Vi hörde ett skrik.', '我们听到一声喊。'],
    ['Skriket kom från gården.', '那声尖叫从院子里传来。'],
    ['Två skrik följde efter varandra.', '两声喊接连响起。'],
    ['Skriken tystnade till slut.', '那些尖叫终于停了。'],
  ]), 1369),
  freq(adj('tacksam', '感激的；值得做的', 'grateful / rewarding', 'tacksamt', 'tacksamma', [
    ['Jag är tacksam för hjälpen.', '我感谢这份帮助。'],
    ['Ett tacksamt arbete.', '一份值得做的工作。'],
    ['De tacksamma gästerna nickade.', '那些感激的客人点了点头。'],
    ['Var tacksam för det du har.', '对你拥有的心怀感激。'],
  ]), 1370),
  freq(other('långsamt', 'adv', '慢慢地', 'slowly', [
    ['Tåget går långsamt här.', '火车在这儿走得很慢。'],
    ['Hon talar långsamt.', '她说得很慢。'],
    ['Ät långsamt, tack.', '请慢慢吃。'],
    ['Långsamt blev det bättre.', '慢慢地好起来了。'],
  ]), 1371),
  freq(noun('press', 'en', '报刊；压力；压机', 'press / strain', 'pressen', 'pressar', 'pressarna', [
    ['Jag läste det i pressen.', '我在报上读到这个。'],
    ['Pressen väntar utanför.', '记者们在外面等。'],
    ['Hon är under hård press.', '她压力很大。'],
    ['Stäng av pressen först.', '先把压机关掉。'],
  ]), 1372),
  freq(noun('or', 'en', '螨；壁虱', 'mite', null, null, null, [
    ['Det finns or i dammet.', '灰尘里有螨。'],
    ['Orn är så liten att man knappt ser den.', '那只螨小得几乎看不见。'],
    ['Katten kliar sig av or.', '猫因为螨而发痒。'],
    ['Vi tvättar täcket mot or.', '我们洗被子来对付螨。'],
  ]), 1373),
  freq(noun('dåre', 'en', '疯子；傻瓜（较文）', 'fool / madman', 'dåren', 'dårar', 'dårarna', [
    ['Han beter sig som en dåre.', '他表现得像个疯子。'],
    ['Dåren skrek på gatan.', '那个疯子在街上喊。'],
    ['Bara dårar tror på det.', '只有傻瓜才信那个。'],
    ['Dårarna skrattade.', '那些疯子在笑。'],
  ]), 1374),
  freq(verb('undvika', '避免；躲开', 'to avoid', 'undviker', 'undvek', 'undvikit', 'undvik', [
    ['Jag undviker den gatan.', '我避开那条街。'],
    ['Hon undvek frågan.', '她躲开了那个问题。'],
    ['Vi har undvikit köttet i år.', '我们今年一直没吃肉。'],
    ['Undvik att äta sent.', '避免吃得太晚。'],
  ]), 1375, c([['und', '避开'], ['vika', '躲开']], '躲开并避开，合起来就是避免。')),
  freq(other('vars', 'pron', '其；谁的（所有）', 'whose', [
    ['Kvinnan vars son är sjuk väntar där.', '儿子生病的那位女士在那里等。'],
    ['Ett hus vars tak läcker.', '屋顶漏水的一栋房子。'],
    ['De vars namn står här får gå in.', '名字写在这里的人可以进去。'],
    ['En författare vars böcker jag gillar.', '一位其作品我很喜欢的作家。'],
  ]), 1376),
  freq(other('jobbigt', 'adv', '费劲；难受；烦人', 'tough / trying / hard', [
    ['Det är jobbigt i dag.', '今天真费劲。'],
    ['Hon har haft det jobbigt.', '她这一阵很难受。'],
    ['Vädret gör det jobbigt att cykla.', '这天气骑车很费劲。'],
    ['Gör det inte så jobbigt.', '别搞得这么费劲。'],
  ]), 1377),
  freq(adj('förvånad', '惊讶的', 'surprised', 'förvånat', 'förvånade', [
    ['Jag är förvånad över svaret.', '我对这个回答感到惊讶。'],
    ['Ett förvånat ansikte.', '一张惊讶的脸。'],
    ['De förvånade gästerna tystnade.', '惊讶的客人们安静了。'],
    ['Hon såg förvånad ut.', '她看起来很惊讶。'],
  ]), 1378),
  freq(noun('plikt', 'en', '义务；职责', 'duty / obligation', 'plikten', 'plikter', 'plikterna', [
    ['Det är min plikt att hjälpa.', '帮助是我的义务。'],
    ['Plikten går först.', '职责为先。'],
    ['Vi har flera plikter hemma.', '我们在家里有好几项义务。'],
    ['Glöm inte plikterna.', '别忘了那些职责。'],
  ]), 1379),
  freq(other('via', 'other', '经由；通过', 'via / through', [
    ['Vi åker till Uppsala via Gävle.', '我们经耶夫勒去乌普萨拉。'],
    ['Hon hörde det via radion.', '她是通过广播听到的。'],
    ['Skicka filen via mejl.', '用邮件把文件发过来。'],
    ['Kontakta oss via ombud.', '通过代理人联系我们。'],
  ]), 1380),
  freq(noun('lukt', 'en', '气味；嗅觉', 'smell / odour', 'lukten', 'lukter', 'lukterna', [
    ['Det är en konstig lukt här.', '这儿有股奇怪的气味。'],
    ['Lukten av kaffe vaknade jag av.', '咖啡的气味把我熏醒了。'],
    ['Olika lukter blandas i köket.', '厨房里各种气味混在一起。'],
    ['Lukt och smak hör ihop.', '嗅觉和味觉是连着的。'],
  ]), 1381),
  freq(other('längs', 'other', '沿着', 'along', [
    ['Vi gick längs floden.', '我们沿着河走。'],
    ['Det ligger caféer längs gatan.', '沿街有咖啡馆。'],
    ['Kör längs kusten.', '沿着海岸开。'],
    ['Husen står längs vägen.', '房子沿着路排开。'],
  ]), 1382),
  freq(adj('ledig', '有空的；空着的；便装的', 'free / vacant / casual', 'ledigt', 'lediga', [
    ['Är du ledig i morgon?', '你明天有空吗？'],
    ['Ett ledigt rum finns kvar.', '还剩一间空房。'],
    ['De lediga stolarna står där.', '那些空椅子在那儿。'],
    ['Ta ledigt från jobbet.', '向工作请个假。'],
  ]), 1383),
  freq(adj('svensk', '瑞典的', 'Swedish', 'svenskt', 'svenska', [
    ['Hon är svensk medborgare.', '她是瑞典公民。'],
    ['Ett svenskt pass räcker.', '一本瑞典护照就够了。'],
    ['De svenska somrarna är korta.', '瑞典的夏天很短。'],
    ['Maten är svensk i kväll.', '今晚这饭是瑞典菜。'],
  ]), 1384),
  freq(other('lågt', 'adv', '低；低声地', 'low / in a low voice', [
    ['Han talar lågt.', '他说话声音很低。'],
    ['Planet flyger lågt.', '飞机飞得很低。'],
    ['Priserna ligger lågt i år.', '今年价格偏低。'],
    ['Sjung inte så lågt.', '别唱那么低。'],
  ]), 1385),
  freq(noun('energi', 'en', '精力；能源', 'energy', 'energin', null, null, [
    ['Jag har ingen energi i dag.', '我今天没有精力。'],
    ['Energin går åt till uppvärmning.', '能源都用在取暖上。'],
    ['Hon är full av energi.', '她精力很充沛。'],
    ['Spara på energin i vinter.', '冬天节省能源。'],
  ]), 1386),
  freq(noun('ro', 'en', '安宁；平静', 'peace / calm', 'ron', null, null, [
    ['Jag behöver lite ro.', '我需要一点安宁。'],
    ['Låt mig få vara i ro.', '让我清静一会儿。'],
    ['Ron i skogen är skön.', '森林里的宁静很舒服。'],
    ['Här finns ingen ro.', '这里不得安宁。'],
  ]), 1387),
  freq(noun('smak', 'en', '味道；品味', 'taste / flavour', 'smaken', 'smaker', 'smakerna', [
    ['Soppan har en god smak.', '这汤味道很好。'],
    ['Smaken av kanel känns igen.', '能认出肉桂的味道。'],
    ['De har olika smaker.', '他们品味不同。'],
    ['Kjolen föll henne i smaken.', '那条裙子合她的口味。'],
  ]), 1388),
  freq(verb('frysa', '觉得冷；结冰；冷冻', 'to freeze / to feel cold', 'fryser', 'frös', 'frusit', 'frys', [
    ['Jag fryser om händerna.', '我手冻得慌。'],
    ['Sjön frös i natt.', '湖夜里结冰了。'],
    ['Vi har frusit in bären.', '我们已经把浆果冻起来了。'],
    ['Frys soppan till i morgon.', '把汤冻到明天。'],
  ]), 1389),
  freq(verb('besöka', '拜访；参观', 'to visit / to call on', 'besöker', 'besökte', 'besökt', 'besök', [
    ['Vi besöker mormor på söndag.', '我们星期天去看外婆。'],
    ['Hon besökte museet i går.', '她昨天参观了博物馆。'],
    ['Har du besökt staden förr?', '你以前来过这座城吗？'],
    ['Besök läkaren i veckan.', '这周去看医生。'],
  ]), 1390, c([['be-', '做成动作'], ['söka', '寻找']], '去找到某人，合起来就是拜访、参观。')),
  freq(noun('signal', 'en', '信号', 'signal', 'signalen', 'signaler', 'signalerna', [
    ['Ge en signal när du är klar.', '你好了就给个信号。'],
    ['Signalen var röd.', '信号是红的。'],
    ['Nya signaler kom från chefen.', '上司传来新的信号。'],
    ['Vänta på signalen.', '等这个信号。'],
  ]), 1391),
  freq(noun('favorit', 'en', '最喜欢的人／物；热门', 'favourite', 'favoriten', 'favoriter', 'favoriterna', [
    ['Hon är lärarens favorit.', '她是老师最喜欢的学生。'],
    ['Favoriten vann loppet.', '热门赢了那场比赛。'],
    ['Jag har två favoriter i klassen.', '班上我有两个最喜欢的。'],
    ['Ta din favorit med dig.', '带上你最喜欢的那个。'],
  ]), 1392),
  freq(noun('åsikt', 'en', '看法；意见', 'opinion / view', 'åsikten', 'åsikter', 'åsikterna', [
    ['Vad är din åsikt om det?', '你对此有什么看法？'],
    ['Åsikten delas inte av alla.', '这个意见不是所有人都同意。'],
    ['Vi har olika åsikter.', '我们看法不同。'],
    ['Säg din åsikt rakt ut.', '把你的意见直接说出来。'],
  ]), 1393),
  freq(adj('grön', '绿的；不成熟的', 'green / inexperienced', 'grönt', 'gröna', [
    ['Hon har en grön jacka.', '她有一件绿外套。'],
    ['Ett grönt ljus tändes.', '一盏绿灯亮了。'],
    ['De gröna löven kommer i maj.', '那些绿叶五月长出来。'],
    ['Han är fortfarande ung och grön.', '他还年轻、不成熟。'],
  ]), 1394),
  freq(adj('äcklig', '恶心的；令人作呕的', 'disgusting', 'äckligt', 'äckliga', [
    ['Det är en äcklig lukt här.', '这儿有股恶心的气味。'],
    ['Ett äckligt skämt.', '一个恶心的玩笑。'],
    ['De äckliga bilderna togs bort.', '那些恶心的图片被拿掉了。'],
    ['Maten är äcklig i dag.', '今天这饭真难吃。'],
  ]), 1395),
  freq(noun('humör', 'ett', '心情；脾气', 'mood / temper', 'humöret', null, null, [
    ['Hon är på gott humör.', '她心情很好。'],
    ['Humöret sjönk efter samtalet.', '谈完话心情就差了。'],
    ['Han tappade humöret.', '他发脾气了。'],
    ['Förstör inte humöret nu.', '现在别把心情搞砸。'],
  ]), 1396),
  freq(verb('nämna', '提到；说出名字', 'to mention / to name', 'nämner', 'nämnde', 'nämnt', 'nämn', [
    ['Vill du nämna ett exempel?', '你想举个例子吗？'],
    ['Hon nämnde ditt namn.', '她提到了你的名字。'],
    ['Det har jag aldrig nämnt.', '那件事我从没提过。'],
    ['Nämn tre saker du gillar.', '说出三件你喜欢的事。'],
  ]), 1397),
  freq(verb('rapportera', '报告；报道', 'to report', 'rapporterar', 'rapporterade', 'rapporterat', 'rapportera', [
    ['Hon rapporterar från platsen.', '她在现场报道。'],
    ['Han rapporterade att tåget var sent.', '他报告说火车晚点了。'],
    ['Har ni rapporterat olyckan?', '你们报告这起事故了吗？'],
    ['Rapportera till chefen direkt.', '马上向领导报告。'],
  ]), 1398),
  freq(noun('tjuv', 'en', '小偷', 'thief', 'tjuven', 'tjuvar', 'tjuvarna', [
    ['En tjuv tog cykeln.', '一个小偷把自行车偷了。'],
    ['Tjuven greps i parken.', '那个小偷在公园被抓住了。'],
    ['Två tjuvar sprang mot dörren.', '两个小偷朝门跑去。'],
    ['Håll tjuven!', '抓住那个小偷！'],
  ]), 1399),
  freq(noun('dator', 'en', '电脑', 'computer', 'datorn', 'datorer', 'datorerna', [
    ['Min dator är långsam.', '我的电脑很慢。'],
    ['Datorn startar inte.', '这台电脑开不了机。'],
    ['Vi har tre datorer hemma.', '我们家里有三台电脑。'],
    ['Stäng av datorn nu.', '现在把电脑关掉。'],
  ]), 1400),
]

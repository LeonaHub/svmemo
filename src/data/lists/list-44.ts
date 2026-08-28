import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2151–2200. Primary POS is the high-frequency use, not every sense in the book. */
export const list44: Word[] = [
  freq(adj('övertygad', '确信的；深信的', 'convinced', 'övertygat', 'övertygade', [
    ['Jag är övertygad om det.', '我对此深信不疑。'],
    ['Ett övertygat leende räckte.', '一个确信的微笑就够了。'],
    ['De övertygade vännerna nickade.', '那些深信的朋友点了头。'],
    ['Bli inte för övertygad än.', '先别那么确信。'],
  ]), 2151, c([['över', '彻底'], ['tygad', '被表明的（övertyga）']], '被彻底说服之后的状态，合起来就是确信的。')),
  freq(noun('kräk', 'ett', '坏蛋；可怜虫；呕吐物（口语）', 'wretch / scum / vomit (colloquial)', 'kräket', 'kräk', 'kräken', [
    ['Vilket kräk han är.', '他真是个混蛋。'],
    ['Kräket på golvet måste torkas.', '地板上的呕吐物得擦掉。'],
    ['De är kräk som ger sig på barn.', '对孩子下手的人就是败类。'],
    ['Kräken försvann när ljuset tändes.', '那些讨厌鬼灯一开就没了。'],
  ]), 2152),
  freq(noun('konto', 'ett', '账户', 'account', 'kontot', 'konton', 'kontona', [
    ['Jag öppnade ett konto i dag.', '我今天开了一个账户。'],
    ['Kontot är tomt.', '这个账户是空的。'],
    ['Hon har två konton.', '她有两个账户。'],
    ['Kolla kontona i appen.', '在应用里查看那些账户。'],
  ]), 2153),
  freq(noun('maj', 'en', '五月', 'May', null, null, null, [
    ['Vi gifter oss i maj.', '我们五月结婚。'],
    ['Maj är ljus och mild.', '五月明亮又温和。'],
    ['Blommorna kommer i maj.', '花在五月开。'],
    ['Flytta festen till maj.', '把聚会改到五月。'],
  ]), 2154),
  freq(noun('kapitel', 'ett', '章；章节', 'chapter', 'kapitlet', 'kapitel', 'kapitlen', [
    ['Läs kapitel tre i kväll.', '今晚读第三章。'],
    ['Kapitlet är kort.', '这一章很短。'],
    ['Boken har tolv kapitel.', '这本书有十二章。'],
    ['Kapitlen blir svårare sen.', '后面那些章节会更难。'],
  ]), 2155),
  freq(other('västerut', 'adv', '向西；往西', 'westwards / to the west', [
    ['Vi åker västerut i morgon.', '我们明天往西走。'],
    ['De flyger västerut i dag.', '他们今天往西飞。'],
    ['Flytta inte västerut än.', '先别往西搬。'],
    ['Titta västerut mot havet.', '朝西往海那边看。'],
  ]), 2156, c([['väster', '西'], ['ut', '向外']], '朝着西边出去，合起来就是向西。')),
  freq(other('såklart', 'intj', '当然', 'of course', [
    ['Såklart kommer jag.', '我当然来。'],
    ['Du får hjälp, såklart.', '你当然能得到帮助。'],
    ['Såklart det regnar i dag.', '今天当然下雨。'],
    ['Säg såklart om du vill.', '想说当然就说。'],
  ]), 2157, c([['så', '如此'], ['klart', '清楚；当然']], '如此清楚，合起来就是当然。')),
  freq(noun('fördel', 'en', '好处；优势', 'advantage / benefit', 'fördelen', 'fördelar', null, [
    ['Det är en stor fördel.', '这是一个很大的优势。'],
    ['Fördelen med tåget är tiden.', '坐火车的好处是省时间。'],
    ['Planen har flera fördelar.', '这个计划有好几处好处。'],
    ['Dra fördel av erbjudandet.', '好好利用这个优惠。'],
  ]), 2158, c([['för', '有利于'], ['del', '部分']], '对某人有利的那一部分，合起来就是好处、优势。')),
  freq(other('Spanien', 'proper', '西班牙', 'Spain', [
    ['Hon bor i Spanien.', '她住在西班牙。'],
    ['Spanien ligger i Europa.', '西班牙在欧洲。'],
    ['Vi flyger till Spanien i maj.', '我们五月飞去西班牙。'],
    ['Kommer du från Spanien?', '你从西班牙来吗？'],
  ]), 2159),
  freq(adj('rar', '可爱的；贴心的；稀有的', 'sweet / dear / rare', 'rart', 'rara', [
    ['Det var rart av dig.', '你这么做真贴心。'],
    ['Ett rart barn satt i vagnen.', '一个可爱的小孩坐在推车里。'],
    ['Rara växter växer här.', '这里长着稀有植物。'],
    ['Hon är en rar vän.', '她是个贴心的朋友。'],
  ], { comparative: 'rarare', superlative: 'rarast' }), 2160),
  freq(noun('snö', 'en', '雪', 'snow', 'snön', null, null, [
    ['Det ligger snö på taket.', '屋顶上有雪。'],
    ['Snön är blöt i dag.', '今天的雪很湿。'],
    ['Barnen leker i snön.', '孩子们在雪里玩。'],
    ['Skotta snön från gången.', '把路上的雪铲掉。'],
  ]), 2161),
  freq(noun('alkohol', 'en', '酒；酒精', 'alcohol', 'alkoholen', null, null, [
    ['Han dricker inte alkohol.', '他不喝酒。'],
    ['Alkoholen står i skåpet.', '那些酒在柜子里。'],
    ['Köp alkoholfri dryck i stället.', '改买无酒精饮料。'],
    ['Häll inte ut alkoholen.', '别把酒倒掉。'],
  ]), 2162),
  freq(adj('intelligent', '聪明的；有智力的', 'intelligent / clever', 'intelligent', 'intelligenta', [
    ['Hon är intelligent och lugn.', '她又聪明又沉稳。'],
    ['Ett intelligent svar kom snabbt.', '一个聪明的回答很快就来了。'],
    ['De intelligenta frågorna hjälpte.', '那些聪明的问题帮了忙。'],
    ['Var intelligent nu.', '现在动动脑子。'],
  ]), 2163),
  freq(noun('korridor', 'en', '走廊', 'corridor', 'korridoren', 'korridorer', null, [
    ['Rummet ligger längst ner i korridoren.', '房间在走廊尽头。'],
    ['Korridoren är smal.', '这条走廊很窄。'],
    ['Skolan har tre korridorer.', '学校有三条走廊。'],
    ['Spring inte i korridoren.', '别在走廊里跑。'],
  ]), 2164),
  freq(noun('ficka', 'en', '口袋', 'pocket', 'fickan', 'fickor', 'fickorna', [
    ['Fickan är tom.', '口袋是空的。'],
    ['Nyckeln ligger i fickan.', '钥匙在口袋里。'],
    ['Byxorna har tre fickor.', '这条裤子有三个口袋。'],
    ['Fickorna var fulla med godis.', '那些口袋里装满了糖。'],
  ]), 2165),
  freq(noun('story', 'en', '故事；剧情', 'story / plot', 'storyn', 'storyer', null, [
    ['Filmen har en bra story.', '这部电影剧情很好。'],
    ['Storyn är enkel.', '这个故事很简单。'],
    ['Hon skrev två storyer.', '她写了两个故事。'],
    ['Berätta storyn kort.', '把剧情讲短一点。'],
  ]), 2166),
  freq(noun('undantag', 'ett', '例外', 'exception', 'undantaget', 'undantag', 'undantagen', [
    ['Undantag finns alltid.', '例外总是有的。'],
    ['Undantaget gäller studenter.', '这个例外对学生有效。'],
    ['Inga undantag görs.', '不做任何例外。'],
    ['Undantagen står i avtalet.', '那些例外写在合同里。'],
  ]), 2167, c(
    [
      ['undan', '避开'],
      ['tag', '拿；取'],
    ],
    '“抽出来放在一边的”，合起来就是例外。',
  )),
  freq(noun('journalist', 'en', '记者', 'journalist', 'journalisten', 'journalister', null, [
    ['Hon är journalist på tidningen.', '她是报社记者。'],
    ['Journalisten ställde tre frågor.', '记者问了三个问题。'],
    ['Två journalister väntade ute.', '两名记者在外面等。'],
    ['Ring journalisten tillbaka.', '给记者回个电话。'],
  ]), 2168),
  freq(other('bägge', 'pron', '两个都；双方', 'both', [
    ['De kom bägge två.', '他们两个都来了。'],
    ['Bägge barnen sover.', '两个孩子都在睡。'],
    ['Jag såg bägge filmerna.', '两部电影我都看了。'],
    ['Bägge har rätt.', '两边都有理。'],
  ]), 2169),
  freq(noun('mur', 'en', '墙（砖石围墙）', 'wall (masonry)', 'muren', 'murar', 'murarna', [
    ['En mur omger gården.', '一道墙围着院子。'],
    ['Muren är tre meter hög.', '这堵墙有三米高。'],
    ['Gamla murar står kvar.', '那些老墙还在。'],
    ['Murarna rasade i stormen.', '那些墙在风暴里塌了。'],
  ]), 2170),
  freq(noun('cykel', 'en', '自行车', 'bicycle', 'cykeln', 'cyklar', null, [
    ['Jag tar cykeln till jobbet.', '我骑自行车去上班。'],
    ['Cykeln är låst.', '这辆自行车锁着。'],
    ['De har tre cyklar.', '他们有三辆自行车。'],
    ['Låna inte cykeln utan att fråga.', '不问一声别借自行车。'],
  ]), 2171),
  freq(noun('handling', 'en', '行为；情节；文件', 'act / plot / document', 'handlingen', 'handlingar', 'handlingarna', [
    ['En handling säger mer än ord.', '一个行为比话语更有说服力。'],
    ['Handlingen i boken är spännande.', '这本书的情节很刺激。'],
    ['Offentliga handlingar finns online.', '公共文件可以在网上查。'],
    ['Handlingarna ska lämnas in i dag.', '那些文件今天要交。'],
  ]), 2172),
  freq(noun('garage', 'ett', '车库', 'garage', 'garaget', 'garage', 'garagen', [
    ['Bilen står i garaget.', '车停在车库里。'],
    ['Garaget är kallt.', '这个车库很冷。'],
    ['Huset har två garage.', '这房子有两个车库。'],
    ['Stäng garagen för natten.', '夜里把那些车库关上。'],
  ]), 2173),
  freq(verb('bevara', '保存；保护', 'to preserve / to keep', 'bevarar', 'bevarade', 'bevarat', 'bevara', [
    ['Vi bevarar gamla brev.', '我们保存着旧信。'],
    ['Hon bevarade lugnet.', '她保持了冷静。'],
    ['Huset har bevarats väl.', '这房子保存得很好。'],
    ['Bevara tystnaden här.', '这里请保持安静。'],
  ]), 2174, c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['vara', '存在；保持'],
    ],
    '“让它继续在”，合起来就是保存、保住。',
  )),
  freq(other('sid', 'other', '页（sida 的缩写）', 'p. (abbreviation of sida)', [
    ['Se sid. 12.', '见第12页。'],
    ['Tabellen står på sid 8.', '表格在第8页。'],
    ['Läs sid. 3–5 till i morgon.', '读到第3到5页，明天之前。'],
    ['Källan finns på sid. 20.', '出处在第20页。'],
  ]), 2175),
  freq(noun('indian', 'en', '美洲原住民', 'Native American / American Indian', 'indianen', 'indianer', null, [
    ['Museet visar indianers historia.', '博物馆展示美洲原住民的历史。'],
    ['Indianen i filmen rider.', '电影里的原住民在骑马。'],
    ['Flera indianer bor i området.', '该地区住着不少美洲原住民。'],
    ['Läs om indianen i kapitlet.', '读一读这一章里的原住民。'],
  ]), 2176),
  freq(noun('livstid', 'en', '一生；终身', 'lifetime', 'livstiden', null, null, [
    ['Livstid i fängelse är sällsynt.', '终身监禁很少见。'],
    ['Livstiden räcker inte till allt.', '一辈子不够做完所有事。'],
    ['Han dömdes till livstid.', '他被判了无期徒刑。'],
    ['På livstid ändras allt.', '一辈子里什么都会变。'],
  ]), 2177, c(
    [
      ['liv', '生命'],
      ['tid', '时间'],
    ],
    '“生命的时间”，合起来就是一生、终身。',
  )),
  freq(other('österut', 'adv', '向东；往东', 'eastwards / to the east', [
    ['Tåget går österut.', '火车往东开。'],
    ['De flyttade österut i fjol.', '他们去年往东搬了。'],
    ['Titta österut vid gryningen.', '黎明时朝东看。'],
    ['Kör inte österut i rusningen.', '高峰时别往东开。'],
  ]), 2178, c([['öster', '东'], ['ut', '向外']], '朝着东边出去，合起来就是向东。')),
  freq(verb('ramla', '摔倒；掉下来（口语）', 'to tumble / to fall (informal)', 'ramlar', 'ramlade', 'ramlat', 'ramla', [
    ['Barnet ramlar ofta.', '这孩子经常摔倒。'],
    ['Hon ramlade i trappan.', '她在楼梯上摔了。'],
    ['Nycklarna har ramlat ner.', '钥匙已经掉下去了。'],
    ['Ramla inte där.', '别在那儿摔着。'],
  ]), 2179),
  freq(verb('regna', '下雨', 'to rain', 'regnar', 'regnade', 'regnat', 'regna', [
    ['Det regnar i dag.', '今天下雨。'],
    ['Det regnade hela natten.', '下了一整夜。'],
    ['Har det regnat här?', '这儿下过雨吗？'],
    ['Låt det bara regna.', '让它下吧。'],
  ]), 2180),
  freq(noun('leksak', 'en', '玩具', 'toy', 'leksaken', 'leksaker', null, [
    ['Barnet fick en ny leksak.', '孩子得到了一个新玩具。'],
    ['Leksaken ligger under soffan.', '玩具在沙发下面。'],
    ['Rummet är fullt av leksaker.', '房间里全是玩具。'],
    ['Städa undan leksakerna.', '把那些玩具收起来。'],
  ]), 2181, c([['lek', '玩'], ['sak', '东西']], '用来玩的东西，合起来就是玩具。')),
  freq(verb('sända', '发送；播出', 'to send / to broadcast', 'sänder', 'sände', 'sänt', 'sänd', [
    ['De sänder nyheterna klockan nio.', '他们九点播新闻。'],
    ['Hon sände ett brev i går.', '她昨天寄了一封信。'],
    ['Programmet har sänts i repris.', '这个节目已经重播过了。'],
    ['Sänd meddelandet nu.', '现在把消息发出去。'],
  ]), 2182),
  freq(noun('dusch', 'en', '淋浴；花洒', 'shower / showerhead', 'duschen', 'duschar', null, [
    ['Jag tar en dusch nu.', '我现在去冲个澡。'],
    ['Duschen är trasig.', '这个花洒坏了。'],
    ['Lägenheten har två duschar.', '公寓有两个淋浴。'],
    ['Stäng duschen efter dig.', '用完把淋浴关上。'],
  ]), 2183),
  freq(noun('framsteg', 'ett', '进步；进展', 'progress', 'framsteget', 'framsteg', 'framstegen', [
    ['Framsteg tar tid.', '进步需要时间。'],
    ['Framsteget syntes i proven.', '进步在考试里能看出来。'],
    ['Små framsteg räknas också.', '小进展也算数。'],
    ['Framstegen gläder läraren.', '那些进步让老师高兴。'],
  ]), 2184, c(
    [
      ['fram', '向前'],
      ['steg', '一步'],
    ],
    '“向前迈的步子”，合起来就是进步。',
  )),
  freq(noun('riktning', 'en', '方向', 'direction', 'riktningen', 'riktningar', 'riktningarna', [
    ['Riktning mot norr är rätt.', '朝北的方向是对的。'],
    ['Riktningen ändrades plötsligt.', '方向突然变了。'],
    ['Bussen går i två riktningar.', '这路公交有两个方向。'],
    ['Riktningarna står på skylten.', '那些方向写在牌子上。'],
  ]), 2185, c(
    [
      ['rikta', '对准；指向'],
      ['-ning', '行为/结果名词后缀'],
    ],
    '“对准的那一边”，合起来就是方向。',
  )),
  freq(noun('vinge', 'en', '翅膀；机翼', 'wing', 'vingen', 'vingar', 'vingarna', [
    ['Fågeln har ont i vingen.', '这只鸟翅膀疼。'],
    ['Vingen är bruten.', '这只翅膀折了。'],
    ['Flygplanet har två vingar.', '飞机有两只机翼。'],
    ['Vingarna rörde sig långsamt.', '那些翅膀慢慢地动。'],
  ]), 2186),
  freq(adj('jättefin', '极好的；非常棒的', 'terrific / really nice', 'jättefint', 'jättefina', [
    ['Det var en jättefin dag.', '那是极好的一天。'],
    ['Ett jättefint rum väntar.', '一间非常棒的房间在等着。'],
    ['De jättefina skorna är slutsålda.', '那些极好的鞋卖完了。'],
    ['Vad jättefin du är i dag!', '你今天真好看！'],
  ]), 2187, c([['jätte', '巨大；极其'], ['fin', '好的；漂亮的']], '好到极大，合起来就是极好的。')),
  freq(adj('okänd', '未知的；不出名的', 'unknown', 'okänt', 'okända', [
    ['Av okänd anledning stannade tåget.', '火车因不明原因停了。'],
    ['Ett okänt nummer ringde.', '一个未知号码打来了。'],
    ['De okända gästerna gick tidigt.', '那些不认识的客人走得很早。'],
    ['Lämna inget okänt efter dig.', '别留下未知的事情。'],
  ]), 2188, c([['o-', '不'], ['känd', '被认识的']], '还没被人认识的，合起来就是未知的、不出名的。')),
  freq(noun('trä', 'ett', '木头；木料', 'wood / timber', 'träet', 'trän', 'träna', [
    ['Bordsskivan är av trä.', '桌面是木头的。'],
    ['Träet är torrt nu.', '这木头现在干了。'],
    ['Hon bar två tunga trän.', '她抱了两根沉木头。'],
    ['Lägg träna i förrådet.', '把那些木料放到储藏室。'],
  ]), 2189),
  freq(verb('försäkra', '保证；投保', 'to assure / to insure', 'försäkrar', 'försäkrade', 'försäkrat', 'försäkra', [
    ['Jag försäkrar att det är sant.', '我保证这是真的。'],
    ['Hon försäkrade bilen i går.', '她昨天给车投保了。'],
    ['Huset har försäkrats mot brand.', '房子已经保了火险。'],
    ['Försäkra dig innan du skriver på.', '签字前先确认清楚。'],
  ]), 2190, c(
    [
      ['för-', '构词前缀'],
      ['säker', '确定的；安全的'],
      ['-a', '动词词尾'],
    ],
    '“让它确定、有保障”，合起来就是保证或去投保。',
  )),
  freq(noun('lur', 'en', '听筒；号角；打盹', 'receiver / horn / nap', 'luren', 'lurar', 'lurarna', [
    ['Lägg på luren.', '把电话挂上。'],
    ['Luren var kall mot örat.', '听筒贴在耳朵上冰凉。'],
    ['Han tog sig en lur i soffan.', '他在沙发上打了个盹。'],
    ['Lurarna låg på bordet.', '那些听筒在桌子上。'],
  ]), 2191),
  freq(noun('borgen', 'en', '担保；保释', 'surety / bail', 'borgen', null, null, [
    ['Hon gick i borgen för sin bror.', '她为弟弟做了担保。'],
    ['Borgen är tecknad hos banken.', '担保已经在银行办好了。'],
    ['Han släpptes mot borgen.', '他交保获释了。'],
    ['Ingen ville gå i borgen.', '没人愿意做担保。'],
  ]), 2192),
  freq(other('extremt', 'adv', '极其；极端地', 'extremely', [
    ['Det är extremt kallt ute.', '外面极其冷。'],
    ['Hon blev extremt trött.', '她累极了。'],
    ['Priset är extremt högt.', '价格极其高。'],
    ['Kör inte extremt fort.', '别开得极端快。'],
  ]), 2193),
  freq(adj('enastående', '杰出的；出色的', 'outstanding / exceptional', 'enastående', 'enastående', [
    ['Det var en enastående dag.', '那是出色的一天。'],
    ['Ett enastående arbete.', '一项杰出的工作。'],
    ['De enastående resultaten syns.', '那些出色的成绩能看出来。'],
    ['Hon är enastående duktig.', '她极其能干。'],
  ]), 2194, c(
    [
      ['ena', '唯一的'],
      ['stående', '站着的；处于某种状态'],
    ],
    '“单独站在那里、没有同类”，合起来就是杰出、出色。',
  )),
  freq(noun('förändring', 'en', '变化；改变', 'change', 'förändringen', 'förändringar', null, [
    ['Det behövs en förändring.', '需要一次改变。'],
    ['Förändringen kom snabbt.', '这次变化来得很快。'],
    ['Staden har sett stora förändringar.', '这座城市经历了很大变化。'],
    ['Räds inte förändringen.', '别害怕这次改变。'],
  ]), 2195, c([['förändra', '改变'], ['-ing', '行为／结果']], '改变这一行为的结果，合起来就是变化。')),
  freq(noun('jätte', 'en', '巨人', 'giant', 'jätten', 'jättar', null, [
    ['Sagan handlar om en jätte.', '这个故事讲一个巨人。'],
    ['Jätten bodde i berget.', '巨人住在山里。'],
    ['Två jättar stred i boken.', '书里两个巨人在打斗。'],
    ['Ritade du jätten stor?', '你把巨人画得很大吗？'],
  ]), 2196),
  freq(noun('rumpa', 'en', '屁股（口语）', 'butt (informal)', 'rumpan', 'rumpor', 'rumporna', [
    ['Barnet föll på rumpan.', '孩子一屁股坐到地上。'],
    ['Rumpan är öm efter fallet.', '摔了之后屁股还疼。'],
    ['Hästen har lera på rumporna.', '那些马屁股上有泥。'],
    ['Sitt inte på rumpan hela dan.', '别一整天坐着不动。'],
  ]), 2197),
  freq(other('härmed', 'adv', '以此；特此（较正式）', 'hereby / herewith', [
    ['Härmed förklarar jag mötet öppnat.', '我特此宣布会议开始。'],
    ['Härmed skickas underlaget.', '现随函寄上材料。'],
    ['Jag säger härmed upp avtalet.', '我特此解除合同。'],
    ['Härmed är saken avslutad.', '此事到此结束。'],
  ]), 2198, c(
    [
      ['här', '这里；这一点'],
      ['med', '用；以'],
    ],
    '“用这一点”，合起来就是特此、以此。',
  )),
  freq(noun('ungdom', 'en', '青春；年轻人', 'youth / young person', 'ungdomen', 'ungdomar', null, [
    ['I ungdomen reste hon mycket.', '她年轻时经常旅行。'],
    ['Ungdomen i området spelar fotboll.', '这一带的年轻人在踢足球。'],
    ['Flera ungdomar väntade vid hållplatsen.', '好几个年轻人在车站等。'],
    ['Lyssna på ungdomen också.', '也听听年轻人的。'],
  ]), 2199, c([['ung', '年轻的'], ['-dom', '时期／状态']], '年轻的那段时期，合起来就是青春；也可指年轻人。')),
  freq(noun('lidande', 'ett', '苦难；痛苦', 'suffering', 'lidandet', 'lidanden', 'lidandena', [
    ['Lidande hör till livet.', '苦难是人生的一部分。'],
    ['Lidandet blev långvarigt.', '这场痛苦拖了很久。'],
    ['Onödiga lidanden kan undvikas.', '不必要的苦难可以避免。'],
    ['Lidandena syntes i blicken.', '那些痛苦能从眼神里看出来。'],
  ]), 2200),
]

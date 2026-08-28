import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1451–1500. Primary POS is the high-frequency use, not every sense in the book. */
export const list30: Word[] = [
  freq(other('som vanligt', 'phrase', '照常；跟平常一样', 'as usual', [
    ['Hon kom sent som vanligt.', '她照例来晚了。'],
    ['Som vanligt väntar vi här.', '跟平常一样我们在这儿等。'],
    ['Kaffet är starkt som vanligt.', '咖啡跟平常一样浓。'],
    ['Gör det som vanligt.', '照平常那样做。'],
  ]), 1451, c([['som', '像'], ['vanligt', '平常']], '像平常那样，合起来就是照常。')),
  freq(noun('konst', 'en', '艺术；本事', 'art / skill', 'konsten', 'konster', null, [
    ['Hon gillar konst.', '她喜欢艺术。'],
    ['Konsten hänger på väggen.', '那幅艺术品挂在墙上。'],
    ['Han visar sina konster.', '他在展示自己的本事。'],
    ['Barnen gör konst i skolan.', '孩子们在学校做艺术。'],
  ]), 1452),
  freq(other('fullständigt', 'adv', '完全地', 'completely', [
    ['Jag är fullständigt slut.', '我彻底累垮了。'],
    ['Det är fullständigt fel.', '这完全是错的。'],
    ['Hon förstod fullständigt.', '她完全懂了。'],
    ['Rummet är fullständigt tomt.', '房间完全是空的。'],
  ]), 1453, c(
    [
      ['full', '满的；完全的'],
      ['ständig', '持续的；不断的'],
      ['-t', '中性/副词词尾'],
    ],
    '“完全持续到底的”，合起来就是完全地。',
  )),
  freq(verb('meddela', '通知；告知', 'to inform / to let know', 'meddelar', 'meddelade', 'meddelat', 'meddela', [
    ['Hon meddelar tiden i kväll.', '她今晚通知时间。'],
    ['Han meddelade oss i går.', '他昨天通知了我们。'],
    ['Har ni meddelat chefen?', '你们通知上司了吗？'],
    ['Meddela oss om du kommer sent.', '如果你要晚到，通知我们。'],
  ]), 1454, c([['med', '与／把'], ['dela', '分给']], '把消息分给别人，合起来就是通知。')),
  freq(noun('behov', 'ett', '需要；需求', 'need / requirement', 'behovet', 'behov', 'behoven', [
    ['Han har behov av vila.', '他需要休息。'],
    ['Behovet är stort.', '这个需求很大。'],
    ['Det finns flera behov här.', '这儿有好几项需求。'],
    ['Behoven ändras med tiden.', '那些需求会随时间变。'],
  ]), 1455),
  freq(other('i övrigt', 'phrase', '除此之外；其余方面', 'otherwise / apart from that', [
    ['I övrigt är allt bra.', '除此之外一切都好。'],
    ['Hon är trött, men i övrigt glad.', '她很累，但除此之外挺高兴。'],
    ['I övrigt har vi inget att säga.', '除此之外我们没什么要说。'],
    ['Ring om du i övrigt behöver hjälp.', '如果你还有别的需要帮忙，就打电话。'],
  ]), 1456, c([['i', '在'], ['övrigt', '其余的']], '在其余方面，合起来就是除此之外。')),
  freq(other('Kina', 'proper', '中国', 'China', [
    ['Hon bor i Kina.', '她住在中国。'],
    ['Kina ligger i Asien.', '中国在亚洲。'],
    ['Vi flyger till Kina i maj.', '我们五月飞去中国。'],
    ['Kommer du från Kina?', '你从中国来吗？'],
  ]), 1457),
  freq(noun('as', 'ett', '畜牲（骂）；动物尸体', 'carcass / (insult) bastard', 'aset', 'as', 'asen', [
    ['Han är ett as.', '他是个畜牲。'],
    ['Aset ljög för oss.', '那个混蛋对我们撒了谎。'],
    ['Kalla inte henne as.', '别骂她畜牲。'],
    ['Ett as låg vid vägen.', '路边有一具动物尸体。'],
  ]), 1458),
  freq(noun('kund', 'en', '顾客；客户', 'customer', 'kunden', 'kunder', null, [
    ['En kund väntar vid kassan.', '一位顾客在收银台等。'],
    ['Kunden går nu.', '这位顾客要走了。'],
    ['Två kunder frågar om priset.', '两位顾客在问价格。'],
    ['Hjälp kunden där borta.', '帮帮那边那位顾客。'],
  ]), 1459),
  freq(noun('strunt', 'en', '废话；无关紧要的事', 'nonsense / rubbish', 'strunten', null, null, [
    ['Prata inte strunt.', '别说废话。'],
    ['Strunten kan du slänga.', '那些没用的东西你可以扔掉。'],
    ['Det är strunt samma.', '那根本无所谓。'],
    ['Det var bara strunt.', '那不过是废话。'],
  ]), 1460),
  freq(noun('författare', 'en', '作家；作者', 'writer / author', 'författaren', 'författare', 'författarna', [
    ['Hon är författare.', '她是作家。'],
    ['Författaren signerar boken.', '作家在给书签名。'],
    ['Två författare sitter där.', '两位作家坐在那里。'],
    ['Författarna kommer i kväll.', '那些作家今晚来。'],
  ]), 1461, c([['författa', '撰写'], ['-are', '……的人']], '写长篇文字的人，合起来就是作家。')),
  freq(other('norrut', 'adv', '向北', 'northwards', [
    ['Vi kör norrut.', '我们往北开。'],
    ['Fåglarna flyger norrut.', '鸟往北飞。'],
    ['Staden ligger norrut.', '那座城在北边。'],
    ['Gå norrut längs vägen.', '沿着路往北走。'],
  ]), 1462, c(
    [
      ['norr', '北'],
      ['ut', '向外'],
    ],
    '“朝北向外”，合起来就是向北。',
  )),
  freq(adj('misstänkt', '可疑的；涉嫌的', 'suspicious / suspected', 'misstänkt', 'misstänkta', [
    ['Han är misstänkt för brottet.', '他涉嫌这起犯罪。'],
    ['Ett misstänkt paket låg där.', '那里放着一个可疑的包裹。'],
    ['De misstänkta fördes bort.', '那些嫌疑人被带走了。'],
    ['Det ser misstänkt ut.', '这看起来很可疑。'],
  ]), 1463, c(
    [
      ['miss-', '错的；不好的'],
      ['tänkt', '想过的（tänka 想）'],
    ],
    '“往坏处想过的”，合起来就是可疑的、涉嫌的。',
  )),
  freq(verb('erbjuda', '提供；给予', 'to offer', 'erbjuder', 'erbjöd', 'erbjudit', 'erbjud', [
    ['De erbjuder kaffe till gästerna.', '他们给客人提供咖啡。'],
    ['Hon erbjöd oss hjälp.', '她向我们提出帮忙。'],
    ['Har de erbjudit dig jobbet?', '他们给你提供那份工作了吗？'],
    ['Erbjud henne en stol.', '给她让个座。'],
  ]), 1464),
  freq(noun('talang', 'en', '天赋；人才', 'talent', 'talangen', 'talanger', 'talangerna', [
    ['Hon har talang för språk.', '她有语言天赋。'],
    ['Talangen syntes tidigt.', '这份天赋很早就看出来了。'],
    ['Skolan söker nya talanger.', '学校在找新人才。'],
    ['Talangerna fick chansen på scenen.', '那些有天赋的人得到了上台的机会。'],
  ]), 1465),
  freq(other('fritt', 'adv', '自由地；免费地', 'freely / free of charge', [
    ['Barnen leker fritt i parken.', '孩子们在公园里自由玩耍。'],
    ['Inträdet är fritt idag.', '今天入场免费。'],
    ['Du får tala fritt här.', '你在这里可以自由发言。'],
    ['Vattnet rinner fritt.', '水畅快地流着。'],
  ]), 1466),
  freq(noun('tålamod', 'ett', '耐心', 'patience', 'tålamodet', null, null, [
    ['Jag har inget tålamod i dag.', '我今天没有耐心。'],
    ['Tålamodet tog slut.', '耐心用完了。'],
    ['Jobbet kräver tålamod.', '这工作需要耐心。'],
    ['Vänta med tålamod.', '耐心地等。'],
  ]), 1467, c([['tåla', '忍受'], ['mod', '勇气／心情']], '忍受时的心情，合起来就是耐心。')),
  freq(noun('midnatt', 'en', '午夜；半夜', 'midnight', 'midnatten', null, null, [
    ['Klockan var midnatt när vi gick.', '我们走的时候正是午夜。'],
    ['Midnatten är stilla här.', '这儿的午夜很静。'],
    ['Filmen slutar efter midnatt.', '电影午夜后才结束。'],
    ['Vi ses efter midnatt.', '我们午夜后再见。'],
  ]), 1468, c([['mid', '中间'], ['natt', '夜']], '夜的中间，合起来就是午夜。')),
  freq(other('i fråga om', 'phrase', '至于；在……方面', 'regarding / with regard to', [
    ['I fråga om mat är han kräsen.', '在吃的方面他很挑。'],
    ['Vad gäller i fråga om tider?', '时间方面有什么规定？'],
    ['I fråga om vädret har vi tur.', '天气方面我们运气不错。'],
    ['Hon är expert i fråga om historia.', '她在历史方面是专家。'],
  ]), 1469, c(
    [
      ['i', '在'],
      ['fråga', '问题；事情'],
      ['om', '关于'],
    ],
    '“在关于……的问题上”，合起来就是至于、在……方面。',
  )),
  freq(noun('förlorare', 'en', '失败者；输家', 'loser', 'förloraren', 'förlorare', 'förlorarna', [
    ['Ingen vill vara förlorare.', '没人想当输家。'],
    ['Förloraren gick hem tyst.', '那个输家安静地回家了。'],
    ['Matchen hade två förlorare.', '这场比赛有两个输家。'],
    ['Förlorarna skakade hand ändå.', '那些输家还是握了手。'],
  ]), 1470, c([['förlora', '输掉'], ['-are', '……的人']], '输掉的人，合起来就是失败者、输家。')),
  freq(noun('sommar', 'en', '夏天', 'summer', 'sommaren', 'somrar', null, [
    ['Vi reser i sommar.', '我们夏天去旅行。'],
    ['Sommaren är varm i år.', '今年夏天很热。'],
    ['På somrarna bor hon vid havet.', '每到夏天她住在海边。'],
    ['Njut av sommaren.', '好好享受这个夏天。'],
  ]), 1471),
  freq(noun('väder', 'ett', '天气', 'weather', 'vädret', 'väder', 'vädren', [
    ['Vilket väder i dag!', '今天这天气！'],
    ['Vädret blir bättre i morgon.', '明天天气会好转。'],
    ['Vi har haft tre väder på en dag.', '一天里我们碰上了三种天气。'],
    ['Vädren skiftar fort här.', '这儿那些天气变得很快。'],
  ]), 1472),
  freq(other('starkt', 'adv', '强烈地；浓烈地', 'strongly / intensely', [
    ['Det blåser starkt i dag.', '今天风很大。'],
    ['Kaffet smakar starkt.', '这咖啡味道很浓。'],
    ['Hon reagerade starkt.', '她反应很强烈。'],
    ['Lukten känns starkt här.', '这儿气味很重。'],
  ]), 1473),
  freq(adj('märklig', '奇怪的；奇特的', 'strange / peculiar', 'märkligt', 'märkliga', [
    ['Det var en märklig dag.', '那是奇怪的一天。'],
    ['Ett märkligt ljud hördes.', '听到一种奇怪的声音。'],
    ['De märkliga spåren försvann.', '那些奇怪的痕迹消失了。'],
    ['Hon beter sig märkligt.', '她举止很奇怪。'],
  ], { comparative: 'märkligare', superlative: 'märkligast' }), 1474, c(
    [
      ['märka', '注意到'],
      ['-lig', '带有……性质的'],
    ],
    '“值得注意的”，现在多表示奇怪、奇特。',
  )),
  freq(noun('japan', 'en', '日本人', 'Japanese person', 'japanen', 'japaner', null, [
    ['En japan sitter där.', '一位日本人坐在那里。'],
    ['Japanen talar svenska.', '那位日本人说瑞典语。'],
    ['Två japaner väntar i hallen.', '两位日本人在门厅等。'],
    ['Fråga japanen där borta.', '问问那边那位日本人。'],
  ]), 1475),
  freq(noun('mars', 'en', '三月', 'March', null, null, null, [
    ['Vi åker i mars.', '我们三月走。'],
    ['Mars är ofta kall här.', '这儿的三月常常很冷。'],
    ['Hon fyller år i mars.', '她三月过生日。'],
    ['Boka resan till mars.', '把旅行订在三月。'],
  ]), 1476),
  freq(noun('fågel', 'en', '鸟', 'bird', 'fågeln', 'fåglar', null, [
    ['En fågel sitter på taket.', '一只鸟停在屋顶上。'],
    ['Fågeln sjunger tidigt.', '这只鸟唱得早。'],
    ['Tre fåglar flyger förbi.', '三只鸟飞过。'],
    ['Mata inte fågeln med bröd.', '别用面包喂这只鸟。'],
  ]), 1477),
  freq(adj('lysande', '出色的；发光的', 'brilliant / shining', 'lysande', 'lysande', [
    ['Det var en lysande idé.', '那是个出色的主意。'],
    ['Ett lysande exempel.', '一个出色的例子。'],
    ['De lysande stjärnorna syntes tydligt.', '那些闪亮的星星很清楚。'],
    ['Hon är lysande på piano.', '她钢琴弹得非常出色。'],
  ]), 1478),
  freq(noun('universum', 'ett', '宇宙', 'universe', 'universumet', null, null, [
    ['Universum är större än vi tror.', '宇宙比我们以为的更大。'],
    ['Universumet expanderar.', '宇宙在膨胀。'],
    ['Finns det liv i andra universum?', '其他宇宙里有生命吗？'],
    ['Vi är en liten del av universumet.', '我们只是宇宙里很小的一部分。'],
  ]), 1479),
  freq(verb('gräva', '挖；挖掘', 'to dig', 'gräver', 'grävde', 'grävt', 'gräv', [
    ['De gräver ett hål.', '他们在挖一个坑。'],
    ['Hon grävde i jorden.', '她在土里挖。'],
    ['Vi har grävt färdigt.', '我们已经挖完了。'],
    ['Gräv här, tack.', '请在这儿挖。'],
  ]), 1480),
  freq(noun('seger', 'en', '胜利', 'victory', 'segern', 'segrar', 'segrarna', [
    ['Det blev en knapp seger.', '那是一场险胜。'],
    ['Segern firades hela natten.', '整晚都在庆祝胜利。'],
    ['Laget har tre segrar i rad.', '这支队伍连胜三场。'],
    ['Segerna kom sent i matchen.', '那些胜利来得很晚。'],
  ]), 1481),
  freq(noun('kommissarie', 'en', '督察；警官', 'superintendent / commissioner', 'kommissarien', 'kommissarier', null, [
    ['En kommissarie väntar utanför.', '一位督察在外面等。'],
    ['Kommissarien kommer klockan nio.', '督察九点来。'],
    ['Två kommissarier sitter där.', '两位督察坐在那里。'],
    ['Prata med kommissarien först.', '先跟那位督察谈。'],
  ]), 1482),
  freq(noun('åratal', 'ett', '许多年', 'years (a period of years)', null, null, null, [
    ['Det tog åratal att lära sig.', '学会这个花了许多年。'],
    ['Hon väntade i åratal.', '她等了许多年。'],
    ['Efter åratal av tystnad hörde de av sig.', '沉默了许多年之后，他们又联系了。'],
    ['Efter åratal träffades de igen.', '过了许多年他们又见面了。'],
  ]), 1483, c(
    [
      ['år', '年'],
      ['-a-', '连接音'],
      ['tal', '数目；许多'],
    ],
    '“年的数目”，合起来就是许多年。',
  )),
  freq(noun('risk', 'en', '风险；危险', 'risk', 'risken', 'risker', null, [
    ['Det är en risk att gå dit.', '去那儿有风险。'],
    ['Risken är liten.', '风险很小。'],
    ['Hon tar inga risker.', '她不冒险。'],
    ['Se upp för risken.', '当心这个风险。'],
  ]), 1484),
  freq(noun('verklighet', 'en', '现实', 'reality', 'verkligheten', null, null, [
    ['Drömmen blev verklighet.', '梦想成真了。'],
    ['Verkligheten är hård.', '现实很残酷。'],
    ['Hon lever i verkligheten.', '她活在现实里。'],
    ['Möt verkligheten nu.', '现在面对现实吧。'],
  ]), 1485, c([['verklig', '真实的'], ['-het', '性质、状态']], '真实的状态，合起来就是现实。')),
  freq(other('vart', 'adv', '去哪儿；往何处', 'where (to)', [
    ['Vart ska du?', '你要去哪儿？'],
    ['Vart gick hon?', '她去哪儿了？'],
    ['Jag vet inte vart de åkte.', '我不知道他们去了哪儿。'],
    ['Säg vart du går.', '说说你去哪儿。'],
  ]), 1486),
  freq(adj('sann', '真实的；真正的', 'true / genuine', 'sant', 'sanna', [
    ['Det är en sann historia.', '这是一个真实的故事。'],
    ['Ett sant svar, tack.', '请给一个真实的回答。'],
    ['De sanna orden hjälpte.', '那些真话帮了忙。'],
    ['Berättelsen är sann.', '这个故事是真的。'],
  ]), 1487),
  freq(noun('foto', 'ett', '照片', 'photo / photograph', 'fotot', 'foton', 'fotona', [
    ['Hon tog ett foto.', '她拍了一张照片。'],
    ['Fotot är suddigt.', '这张照片模糊。'],
    ['Vi har tre foton från resan.', '我们有三张旅行照片。'],
    ['Fotona ligger i lådan.', '那些照片在抽屉里。'],
  ]), 1488),
  freq(verb('blöda', '流血', 'to bleed', 'blöder', 'blödde', 'blött', 'blöd', [
    ['Såret blöder fortfarande.', '伤口还在流血。'],
    ['Han blödde från näsan.', '他流鼻血了。'],
    ['Näsan har blött tre gånger idag.', '鼻子今天流了三次血。'],
    ['Tryck här så blöder det mindre.', '按这里，血会流得少一点。'],
  ]), 1489, c(
    [
      ['blod', '血'],
      ['-a', '做成动词'],
    ],
    '由“血”变成动词，就是流血。',
  )),
  freq(noun('punkt', 'en', '句号；点；要点', 'full stop / point', 'punkten', 'punkter', null, [
    ['Sätt en punkt här.', '在这儿打个句号。'],
    ['Punkten saknas i meningen.', '句子里缺句号。'],
    ['Vi tar nästa punkt nu.', '我们现在谈下一点。'],
    ['Listan har tre punkter.', '清单上有三点。'],
  ]), 1490),
  freq(verb('koncentrera', '集中；浓缩', 'to concentrate', 'koncentrerar', 'koncentrerade', 'koncentrerat', 'koncentrera', [
    ['Hon koncentrerar sig på boken.', '她在集中看书。'],
    ['Han koncentrerade ljuset mot väggen.', '他把光集中照向墙壁。'],
    ['Vi har koncentrerat arbetet till stan.', '我们已经把工作集中到城里。'],
    ['Koncentrera dig nu.', '现在集中注意力。'],
  ]), 1491),
  freq(other('alltför', 'adv', '过于；太', 'all too / far too', [
    ['Det är alltför sent nu.', '现在已经太晚了。'],
    ['Hon är alltför snäll mot dem.', '她对他们太好了。'],
    ['Boken är alltför svår.', '这本书太难了。'],
    ['Vi kom alltför tidigt.', '我们来得太早了。'],
  ]), 1492, c(
    [
      ['allt', '全部；很'],
      ['för', '过于'],
    ],
    '两个表示程度的词叠在一起，就是太、过于。',
  )),
  freq(verb('spränga', '炸；撑破', 'to blow up / to burst', 'spränger', 'sprängde', 'sprängt', 'spräng', [
    ['De ska spränga den gamla bron.', '他们要炸掉那座旧桥。'],
    ['Bollen sprängde rutan.', '球把玻璃窗撞破了。'],
    ['Tjuven har sprängt kassaskåpet.', '小偷把保险箱炸开了。'],
    ['Spräng inte ballongen.', '别把气球撑破。'],
  ]), 1493),
  freq(other('okay', 'intj', '好的；行', 'okay / all right', [
    ['Okay, jag kommer.', '好的，我来。'],
    ['Det är okay för mig.', '对我来说可以。'],
    ['Hon sa okay direkt.', '她马上说了可以。'],
    ['Okay, då går vi.', '好，那我们走。'],
  ]), 1494),
  freq(noun('gräs', 'ett', '草；草地', 'grass', 'gräset', 'gräs', 'gräsen', [
    ['Gräset är grönt nu.', '草现在是绿的。'],
    ['Vi sitter i gräset.', '我们坐在草地上。'],
    ['Hon klipper gräset i dag.', '她今天剪草。'],
    ['Håll er från gräsen där borta.', '别靠近那边那些草。'],
  ]), 1495),
  freq(other('kraftigt', 'adv', '猛烈地；大幅度地', 'heavily / strongly', [
    ['Det regnar kraftigt.', '雨下得很猛。'],
    ['Priserna har ökat kraftigt.', '价格大幅上涨了。'],
    ['Han hostade kraftigt.', '他咳得很厉害。'],
    ['Vinden blåste kraftigt i natt.', '夜里风刮得很猛。'],
  ]), 1496, c(
    [
      ['kraft', '力量'],
      ['-ig', '有……的'],
      ['-t', '中性/副词词尾'],
    ],
    'kraftig 是“有力的”，kraftigt 就是猛烈地、大幅度地。',
  )),
  freq(noun('utrustning', 'en', '装备；设备', 'equipment', 'utrustningen', 'utrustningar', null, [
    ['Vi behöver ny utrustning.', '我们需要新装备。'],
    ['Utrustningen är dyr.', '这套装备很贵。'],
    ['De har två utrustningar i förrådet.', '仓库里有两套装备。'],
    ['Kolla utrustningen först.', '先检查装备。'],
  ]), 1497, c([['ut', '出'], ['rustning', '装备']], '配备出来的东西，合起来就是装备、设备。')),
  freq(verb('avslöja', '揭露；揭穿', 'to reveal / to expose', 'avslöjar', 'avslöjade', 'avslöjat', 'avslöja', [
    ['Tidningen avslöjar sanningen.', '报纸揭开了真相。'],
    ['Hon avslöjade hemligheten.', '她揭开了那个秘密。'],
    ['Polisen har avslöjat planen.', '警察已经揭穿了那个计划。'],
    ['Avslöja inte slutet.', '别剧透结局。'],
  ]), 1498, c(
    [
      ['av-', '去掉；离开'],
      ['slöja', '面纱'],
    ],
    '“揭掉面纱”，合起来就是揭露、揭穿。',
  )),
  freq(noun('examen', 'en', '学位；毕业考试', 'degree / examination', 'examen', 'examina', null, [
    ['Hon tar examen i juni.', '她六月毕业。'],
    ['Examen gick bra.', '毕业考试顺利。'],
    ['Han har två examina.', '他有两个学位。'],
    ['Plugga till examen.', '为毕业考试复习。'],
  ]), 1499),
  freq(noun('öra', 'ett', '耳朵', 'ear', 'örat', 'öron', 'öronen', [
    ['Barnet har ont i örat.', '孩子耳朵疼。'],
    ['Örat är rött.', '这只耳朵是红的。'],
    ['Hon har små öron.', '她耳朵很小。'],
    ['Täck öronen.', '把耳朵捂上。'],
  ]), 1500),
]

import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2101–2150. Primary POS is the high-frequency use, not every sense in the book. */
export const list43: Word[] = [
  freq(noun('garderob', 'en', '衣柜；衣橱；（剧院等的）衣帽间', 'wardrobe / closet / cloakroom', 'garderoben', 'garderober', 'garderoberna', [
    ['Häng jackan i garderoben.', '把外套挂进衣柜。'],
    ['Garderoben är full.', '这个衣柜已经满了。'],
    ['Vi har två garderober i hallen.', '门厅里有两个衣橱。'],
    ['Lämna rocken i garderoben.', '把大衣寄存在衣帽间。'],
  ]), 2101),
  freq(verb('sjunka', '下沉；下降', 'to sink / to fall', 'sjunker', 'sjönk', 'sjunkit', 'sjunk', [
    ['Båten sjunker långsamt.', '船在慢慢下沉。'],
    ['Priserna sjönk i våras.', '今年春天价格下降了。'],
    ['Fartyget har sjunkit utanför kusten.', '那艘船已经在岸边沉了。'],
    ['Sjunk inte ihop nu.', '现在别瘫下去。'],
  ]), 2102),
  freq(verb('trötta', '使疲倦；使人累', 'to tire / to wear out', 'tröttar', 'tröttade', 'tröttat', 'trötta', [
    ['Jobbet tröttar mig.', '这工作让我累。'],
    ['Resan tröttade barnen.', '旅途把孩子们累着了。'],
    ['Bullret har tröttat oss alla.', '噪音已经把我们都耗累了。'],
    ['Trötta inte hunden mer.', '别再把狗折腾累了。'],
  ]), 2103),
  freq(adj('dubbel', '双的；双重的', 'double', 'dubbelt', 'dubbla', [
    ['Vi bokade ett dubbelt rum.', '我们订了一间双人间。'],
    ['Hon har dubbelt medborgarskap.', '她有双重国籍。'],
    ['De dubbla dörrarna stod öppna.', '那两道双层门开着。'],
    ['Betala inte dubbel hyra.', '别付双倍房租。'],
  ]), 2104),
  freq(noun('tips', 'ett', '提示；点子；爆料', 'tip / hint / tip-off', 'tipset', 'tips', 'tipsen', [
    ['Har du ett tips till mig?', '你有点子给我吗？'],
    ['Tipset kom från en granne.', '这条爆料来自一个邻居。'],
    ['Hon gav oss tre bra tips.', '她给了我们三条好建议。'],
    ['Tipsen hjälpte oss att hitta.', '那些提示帮我们找到了。'],
  ]), 2105),
  freq(adj('yttre', '外部的；外在的', 'outer / external', 'yttre', 'yttre', [
    ['Den yttre dörren är låst.', '外面那扇门锁着。'],
    ['Ett yttre tecken syns redan.', '一个外在的迹象已经能看见。'],
    ['De yttre rummen är kalla.', '那些靠外的房间很冷。'],
    ['Yttre förhållanden påverkar oss.', '外部环境会影响我们。'],
  ], { superlative: 'ytterst' }), 2106),
  freq(noun('motiv', 'ett', '动机；题材', 'motive / motif / subject', 'motivet', 'motiv', 'motiven', [
    ['Polisen sökte ett motiv.', '警方在找动机。'],
    ['Motivet till brottet är oklart.', '犯罪动机还不清楚。'],
    ['Tavlan har flera motiv.', '这幅画有好几个题材。'],
    ['Motiven i boken återkommer.', '书里那些主题一再出现。'],
  ]), 2107),
  freq(verb('förhandla', '谈判；协商', 'to negotiate / to bargain', 'förhandlar', 'förhandlade', 'förhandlat', 'förhandla', [
    ['Vi förhandlar om hyran.', '我们在谈房租。'],
    ['Facket förhandlade i natt.', '工会夜里进行了谈判。'],
    ['Har ni förhandlat klart?', '你们谈完了吗？'],
    ['Förhandla inte ensam.', '别一个人去谈。'],
  ]), 2108, c([['för', '为了／向前'], ['handla', '行事；交易']], '为了谈成而行事，合起来就是谈判、协商。')),
  freq(noun('riddare', 'en', '骑士', 'knight', 'riddaren', 'riddare', 'riddarna', [
    ['Barnet ritade en riddare.', '孩子画了一个骑士。'],
    ['Riddaren satt på hästen.', '骑士坐在马上。'],
    ['Sagan har tre riddare.', '这个故事里有三个骑士。'],
    ['Riddarna red mot slottet.', '那些骑士骑马朝城堡去。'],
  ]), 2109),
  freq(noun('kön', 'ett', '性别；性（也指性器官）', 'sex / gender', 'könet', 'kön', 'könen', [
    ['Barnet har ännu inte valt kön i spelet.', '孩子在游戏里还没选性别。'],
    ['Könet framgår av passet.', '护照上能看出性别。'],
    ['Det finns två kön i den här arten.', '这个物种有两种性别。'],
    ['Könen behandlas olika i statistiken.', '统计里不同性别被区别对待。'],
  ]), 2110),
  freq(noun('forskning', 'en', '研究；科研', 'research', 'forskningen', 'forskningar', 'forskningarna', [
    ['Hon gör forskning om språk.', '她在做语言研究。'],
    ['Forskningen tar tid.', '这项研究很花时间。'],
    ['Nya forskningar publiceras varje år.', '每年都有新的研究发表。'],
    ['Stöd forskningen med pengar.', '用资金支持这项研究。'],
  ]), 2111, c([['forska', '研究'], ['-ning', '行为／结果']], '进行研究这一行为，合起来就是研究、科研。')),
  freq(noun('material', 'ett', '材料；资料', 'material / subject matter', 'materialet', 'material', 'materialen', [
    ['Vi köpte material till taket.', '我们买了屋顶用的材料。'],
    ['Materialet räcker inte.', '这些材料不够。'],
    ['Hon samlade material till uppsatsen.', '她为论文收集了资料。'],
    ['Materialen är olika dyra.', '那些材料贵贱不一。'],
  ]), 2112),
  freq(noun('korv', 'en', '香肠', 'sausage', 'korven', 'korvar', 'korvarna', [
    ['Jag tar en korv med bröd.', '我要一根香肠配面包。'],
    ['Korven är varm.', '这根香肠是热的。'],
    ['Koka två korvar till.', '再煮两根香肠。'],
    ['Skär korven i skivor.', '把香肠切成片。'],
  ]), 2113),
  freq(noun('besättning', 'en', '船员；机组；一组人员', 'crew', 'besättningen', 'besättningar', 'besättningarna', [
    ['Besättning behövs även på natten.', '夜里也需要船员。'],
    ['Besättningen hittades oskadd.', '机组人员被找到时没有受伤。'],
    ['Två besättningar turas om.', '两组人员轮班。'],
    ['Besättningarna byts i hamnen.', '那些船员在港口换班。'],
  ]), 2114, c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['sätta', '放置'],
      ['-ning', '行为/结果名词后缀'],
    ],
    '“把人安排上去”，合起来就是船上或飞机上的一组人员。',
  )),
  freq(adj('civil', '民事的；非军事的；平民的', 'civilian / civil', 'civilt', 'civila', [
    ['Det var en civil vigsel.', '那是一场民事婚礼。'],
    ['Ett civilt mål tar tid.', '一件民事案子要花时间。'],
    ['De civila kläderna syns tydligt.', '那些便服很显眼。'],
    ['Vad jobbar du med i det civila?', '你在平民生活里做什么工作？'],
  ]), 2115),
  freq(noun('telefonnummer', 'ett', '电话号码', 'telephone number', 'telefonnumret', 'telefonnummer', 'telefonnumren', [
    ['Vilket telefonnummer har du?', '你的电话号码是多少？'],
    ['Telefonnumret är fel.', '这个电话号码不对。'],
    ['Jag har två telefonnummer.', '我有两个电话号码。'],
    ['Skriv upp telefonnumren här.', '把那些电话号码写在这儿。'],
  ]), 2116, c([['telefon', '电话'], ['nummer', '号码']], '电话的号码，就是电话号码。')),
  freq(noun('ägare', 'en', '所有者；主人', 'owner', 'ägaren', 'ägare', 'ägarna', [
    ['Vem är ägare till bilen?', '这车的主人是谁？'],
    ['Ägaren öppnar klockan nio.', '店主九点开门。'],
    ['Huset har tre ägare.', '这房子有三个所有者。'],
    ['Ägarna möts i morgon.', '那些业主明天见面。'],
  ]), 2117),
  freq(verb('påverka', '影响；起作用', 'to influence / to affect', 'påverkar', 'påverkade', 'påverkat', 'påverka', [
    ['Nyheterna påverkar oss.', '新闻影响着我们。'],
    ['Vädret påverkade matchen.', '天气影响了比赛。'],
    ['Har det påverkat ditt val?', '这影响了你的选择吗？'],
    ['Påverka inte vittnet.', '别去影响证人。'],
  ]), 2118, c([['på', '对；在……上'], ['verka', '起作用']], '对某事起作用，合起来就是影响。')),
  freq(noun('applåd', 'en', '掌声', 'applause', 'applåden', 'applåder', 'applåderna', [
    ['En applåd räcker inte.', '一阵掌声还不够。'],
    ['Applåden blev lång.', '掌声持续了很久。'],
    ['Det hördes applåder från salen.', '大厅里传来掌声。'],
    ['Applåderna dog ut.', '那些掌声渐渐停了。'],
  ]), 2119),
  freq(noun('ilska', 'en', '怒气；愤怒', 'anger', 'ilskan', null, null, [
    ['Ilska hjälper sällan.', '发火往往没有用。'],
    ['Ilskan syntes i ansiktet.', '脸上能看出怒气。'],
    ['Han talade med ilska i rösten.', '他说话带着怒气。'],
    ['Släpp ilskan innan du svarar.', '先把怒气压下去再回答。'],
  ]), 2120),
  freq(noun('inbjudan', 'en', '邀请', 'invitation', 'inbjudan', 'inbjudningar', 'inbjudningarna', [
    ['En inbjudan kom i brevlådan.', '信箱里来了一封邀请。'],
    ['Inbjudan gäller hela familjen.', '这份邀请对全家有效。'],
    ['Vi skickade tre inbjudningar.', '我们发了三份邀请。'],
    ['Inbjudningarna gick ut i går.', '那些邀请昨天发出去了。'],
  ]), 2121, c(
    [
      ['in', '进来'],
      ['bjuda', '邀请；请客'],
      ['-an', '行为名词后缀'],
    ],
    '“把人请来”这件事，合起来就是邀请。',
  )),
  freq(noun('november', 'en', '十一月', 'November', null, null, null, [
    ['Vi flyttar i november.', '我们十一月搬家。'],
    ['November är mörk här.', '这儿的十一月很暗。'],
    ['Hon fyller år i november.', '她十一月过生日。'],
    ['Boka tiden till november.', '把时间订在十一月。'],
  ]), 2122),
  freq(noun('rättegång', 'en', '审判；诉讼', 'trial / court proceedings', 'rättegången', 'rättegångar', 'rättegångarna', [
    ['Rättegång väntar i höst.', '秋天将有一场审判。'],
    ['Rättegången sändes i radio.', '那场审判在电台播出。'],
    ['Det blev två rättegångar samma vecka.', '同一周有两场诉讼。'],
    ['Rättegångarna drog ut på tiden.', '那些诉讼拖了很久。'],
  ]), 2123, c(
    [
      ['rätt', '法律；公正'],
      ['-e-', '连接音'],
      ['gång', '过程；一次进行'],
    ],
    '“走法律程序”，合起来就是审判、打官司。',
  )),
  freq(other('oerhört', 'adv', '极其；非常', 'enormously / extremely', [
    ['Det var oerhört kallt.', '当时冷极了。'],
    ['Beslutet är oerhört viktigt.', '这个决定极其重要。'],
    ['Ett brev kan betyda oerhört mycket.', '一封信可以意味着极其多。'],
    ['Hon blev oerhört glad.', '她高兴极了。'],
  ]), 2124, c(
    [
      ['o-', '不；未'],
      ['erhörd', '所听闻的'],
    ],
    '字面是“前所未闻”，现在多用来加强语气，就是极其、非常。',
  )),
  freq(verb('sänka', '降低；使下沉', 'to lower / to sink (something)', 'sänker', 'sänkte', 'sänkt', 'sänk', [
    ['De sänker priserna i morgon.', '他们明天降价。'],
    ['Hon sänkte rösten.', '她把声音压低了。'],
    ['Blicken har sänkts mot golvet.', '目光已经垂到地板上。'],
    ['Sänk inte standarden.', '别把标准降下去。'],
  ]), 2125),
  freq(noun('förlust', 'en', '损失；失败', 'loss / defeat', 'förlusten', 'förluster', 'förlusterna', [
    ['Förlust gör ont.', '失败让人难受。'],
    ['Förlusten blev fem tusen kronor.', '这笔损失是五千克朗。'],
    ['Laget har tre förluster i rad.', '这队已经连输三场。'],
    ['Förlusterna syntes i bokslutet.', '那些亏损在年报里能看出来。'],
  ]), 2126),
  freq(verb('placera', '放置；安置；投资', 'to place / to invest', 'placerar', 'placerade', 'placerat', 'placera', [
    ['Hon placerar boken på hyllan.', '她把书放到架子上。'],
    ['De placerade stolen vid fönstret.', '他们把椅子放在窗边。'],
    ['Pengarna har placerats i aktier.', '钱已经投进股票了。'],
    ['Placera väskan här.', '把包放这儿。'],
  ]), 2127),
  freq(noun('gentleman', 'en', '绅士；有礼貌的男子', 'gentleman', 'gentlemannen', 'gentlemän', 'gentlemännen', [
    ['Han är en riktig gentleman.', '他是个真正的绅士。'],
    ['Gentlemannen öppnade dörren.', '那位绅士开了门。'],
    ['Två gentlemän väntade i hallen.', '两位绅士在门厅等着。'],
    ['Gentlemännen reste sig.', '那些绅士站了起来。'],
  ]), 2128),
  freq(noun('skilsmässa', 'en', '离婚', 'divorce', 'skilsmässan', 'skilsmässor', 'skilsmässorna', [
    ['Skilsmässa är aldrig lätt.', '离婚从来都不容易。'],
    ['Skilsmässan gick igenom i maj.', '离婚在五月办下来了。'],
    ['Det blev fler skilsmässor det året.', '那一年离婚的人更多。'],
    ['Skilsmässorna påverkade barnen.', '那些离婚影响到了孩子。'],
  ]), 2129, c(
    [
      ['skilja', '分开'],
      ['mässa', '（构词）分离、解除'],
    ],
    '婚姻被分开、解除，合起来就是离婚。',
  )),
  freq(noun('tår', 'en', '眼泪', 'tear', 'tåren', 'tårar', 'tårarna', [
    ['En tår rann längs kinden.', '一滴眼泪顺着脸颊流下。'],
    ['Tåren torkades bort.', '那滴眼泪被擦掉了。'],
    ['Hon hade tårar i ögonen.', '她眼里含着泪。'],
    ['Torka tårarna nu.', '现在把眼泪擦掉。'],
  ]), 2130),
  freq(noun('ont', null, '疼痛；痛苦', 'pain / ache', null, null, null, [
    ['Jag har ont i huvudet.', '我头疼。'],
    ['Hon har ont i magen.', '她肚子疼。'],
    ['Det gör ont när jag går.', '我一走就疼。'],
    ['Säg till om det gör ont.', '要是疼就说。'],
  ]), 2131),
  freq(noun('ämne', 'ett', '物质；题材；科目', 'substance / subject / topic', 'ämnet', 'ämnen', 'ämnena', [
    ['Kemi är ett svårt ämne.', '化学是一门难的科目。'],
    ['Ämnet för föredraget är klimat.', '讲座的题材是气候。'],
    ['Flera ämnen blandas i burken.', '罐子里混了好几种物质。'],
    ['Ämnena på listan är nya.', '单子上那些科目是新的。'],
  ]), 2132),
  freq(verb('sno', '偷（口语）；缠绕', 'to pinch / to twist', 'snor', 'snodde', 'snott', 'sno', [
    ['Någon snor cyklar här.', '有人在这里偷自行车。'],
    ['Hon snodde ett armband.', '她顺走了一只手镯。'],
    ['Vem har snott min penna?', '谁把我的笔偷走了？'],
    ['Sno ett band runt paketet.', '用带子把包裹缠上。'],
  ]), 2133),
  freq(noun('belöning', 'en', '奖励；报酬', 'reward', 'belöningen', 'belöningar', 'belöningarna', [
    ['En belöning utlovas.', '会有一笔奖金。'],
    ['Belöningen kom efter examen.', '奖励在毕业之后才到。'],
    ['De fick belöningar för modet.', '他们因为勇敢得到了奖励。'],
    ['Belöningarna delades ut i salen.', '那些奖在大厅里发了。'],
  ]), 2134, c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['lön', '报酬'],
      ['-ing', '行为/结果名词后缀'],
    ],
    '“给人报酬”，合起来就是奖励。',
  )),
  freq(other('sträck', 'other', '连续地；一口气（常作 i sträck）', 'in a row / at a stretch', [
    ['Hon jobbade tio timmar i sträck.', '她连续工作了十个小时。'],
    ['Vi körde i ett sträck till Göteborg.', '我们一口气开到了哥德堡。'],
    ['Det regnade tre dagar i sträck.', '连续下了三天雨。'],
    ['Han talade i ett sträck.', '他一口气说个没完。'],
  ]), 2135),
  freq(noun('medel', 'ett', '方法；手段；资金（常用复数）；药剂', 'means / funds / remedy', 'medlet', 'medel', 'medlen', [
    ['Med enkla medel klarade vi det.', '我们用简单的办法就解决了。'],
    ['Medlet hjälper mot smärtan.', '这种药能止痛。'],
    ['Offentliga medel saknas.', '公共资金不够。'],
    ['Medlen ska användas till skolan.', '那些钱要用在学校上。'],
  ]), 2136),
  freq(adj('usel', '糟糕的；差劲的', 'wretched / lousy', 'uselt', 'usla', [
    ['Filmen var usel.', '那部电影糟透了。'],
    ['Ett uselt resultat.', '一个很差的成绩。'],
    ['De usla ursäkterna hjälper inte.', '那些烂借口没有用。'],
    ['Vädret är uselt idag.', '今天天气很差。'],
  ], { comparative: 'uslare', superlative: 'uslast' }), 2137),
  freq(noun('halt', 'en', '含量；浓度', 'content / concentration', 'halten', 'halter', 'halterna', [
    ['Halten av socker är hög.', '糖含量很高。'],
    ['Halten mättes i blodet.', '血液里测了这个浓度。'],
    ['Olika halter ger olika smak.', '不同含量味道不一样。'],
    ['Halterna har sjunkit i år.', '那些含量今年下降了。'],
  ]), 2138),
  freq(noun('trädgård', 'en', '花园；园子', 'garden', 'trädgården', 'trädgårdar', 'trädgårdarna', [
    ['Vi sitter i trädgården.', '我们坐在花园里。'],
    ['Trädgården är liten men fin.', '这个园子虽小但很漂亮。'],
    ['De har två trädgårdar.', '他们有两个花园。'],
    ['Vattna trädgården i kväll.', '今晚给花园浇水。'],
  ]), 2139, c([['träd', '树'], ['gård', '院子；场地']], '种着树的院子，合起来就是花园。')),
  freq(verb('överlämna', '交出；移交', 'to hand over', 'överlämnar', 'överlämnade', 'överlämnat', 'överlämna', [
    ['Hon överlämnar nycklarna i dag.', '她今天交出钥匙。'],
    ['Han överlämnade rapporten.', '他把报告交上去了。'],
    ['Paketet har överlämnats till polisen.', '包裹已经交给警察了。'],
    ['Överlämna passet vid luckan.', '在窗口把护照交上去。'],
  ]), 2140, c(
    [
      ['över', '过去；过来'],
      ['lämna', '留下；交给'],
    ],
    '“交过去”，合起来就是移交、交出。',
  )),
  freq(noun('andel', 'en', '份额；部分', 'share / portion', 'andelen', 'andelar', 'andelarna', [
    ['Andel i vinsten är liten.', '利润里的份额很小。'],
    ['Andelen kvinnor har ökat.', '女性所占比例增加了。'],
    ['De äger lika andelar.', '他们持有相同份额。'],
    ['Andelarna såldes vidare.', '那些份额被转卖掉了。'],
  ]), 2141),
  freq(verb('klaga', '抱怨', 'to complain', 'klagar', 'klagade', 'klagat', 'klaga', [
    ['Han klagar på maten.', '他抱怨饭菜。'],
    ['Hon klagade hos chefen.', '她向老板投诉了。'],
    ['Många har klagat på bullret.', '很多人已经抱怨过噪音。'],
    ['Klaga inte så mycket.', '别抱怨那么多。'],
  ]), 2142),
  freq(adj('törstig', '渴的', 'thirsty', 'törstigt', 'törstiga', [
    ['Jag är törstig.', '我渴了。'],
    ['Ett törstigt barn vill ha vatten.', '一个口渴的孩子想喝水。'],
    ['De törstiga hundarna drack.', '那些口渴的狗喝了水。'],
    ['Bli inte törstig på vägen.', '路上别渴着。'],
  ]), 2143, c([['törst', '渴'], ['-ig', '带有……的']], '带着渴的感觉，合起来就是渴的。')),
  freq(noun('sport', 'en', '体育；运动', 'sport', 'sporten', 'sporter', 'sporterna', [
    ['Hon gillar sport.', '她喜欢体育。'],
    ['Sporten på TV börjar nu.', '电视上的体育节目现在开始。'],
    ['Han prövar tre sporter i år.', '他今年试三项运动。'],
    ['Titta på sporten i kväll.', '今晚看体育。'],
  ]), 2144),
  freq(noun('oktober', 'en', '十月', 'October', null, null, null, [
    ['Löven faller i oktober.', '树叶在十月落下。'],
    ['Oktober är oftast kall.', '十月往往很冷。'],
    ['Vi ses i oktober.', '我们十月见。'],
    ['Flytta mötet till oktober.', '把会议改到十月。'],
  ]), 2145),
  freq(adj('homosexuell', '同性恋的', 'homosexual', 'homosexuellt', 'homosexuella', [
    ['Hon är homosexuell.', '她是同性恋。'],
    ['Ett homosexuellt par bor där.', '一对同性恋伴侣住在那儿。'],
    ['De homosexuella vännerna kom.', '那些同性恋朋友来了。'],
    ['Lagen skyddar homosexuella par.', '法律保护同性恋伴侣。'],
  ]), 2146, c([['homo-', '相同'], ['sexuell', '性的']], '指向同一性别的，合起来就是同性恋的。')),
  freq(other('minus', 'adv', '减去；零下', 'minus / below zero', [
    ['Fem minus tre blir två.', '五减三等于二。'],
    ['Det är minus tio ute.', '外面零下十度。'],
    ['Räkna minus först.', '先做减法。'],
    ['Temperaturen ligger på minus.', '气温在零下。'],
  ]), 2147),
  freq(noun('tillåtelse', 'en', '许可；准许', 'permission', 'tillåtelsen', 'tillåtelser', 'tillåtelserna', [
    ['Tillåtelse krävs först.', '得先得到许可。'],
    ['Tillåtelsen kom för sent.', '许可来得太晚了。'],
    ['Flera tillåtelser saknas.', '还缺好几份许可。'],
    ['Tillåtelserna gäller ett år.', '那些许可有效一年。'],
  ]), 2148, c(
    [
      ['tillåta', '允许'],
      ['-else', '行为/结果名词后缀'],
    ],
    '“被允许这件事”，合起来就是许可。',
  )),
  freq(verb('förbli', '仍然是；保持为', 'to remain', 'förblir', 'förblev', 'förblivit', 'förbli', [
    ['Frågan förblir obesvarad.', '这个问题仍然没有答案。'],
    ['Hon förblev tyst.', '她始终沉默。'],
    ['Det har förblivit en myt.', '那至今仍是个传言。'],
    ['Förbli lugn nu.', '现在保持冷静。'],
  ]), 2149, c(
    [
      ['för-', '构词前缀'],
      ['bli', '成为'],
    ],
    '“继续成为那样”，合起来就是仍然是、保持为。',
  )),
  freq(verb('arrestera', '逮捕', 'to arrest', 'arresterar', 'arresterade', 'arresterat', 'arrestera', [
    ['Polisen arresterar mannen i natt.', '警察今晚逮捕那名男子。'],
    ['De arresterade tjuven.', '他们逮捕了小偷。'],
    ['Hon har arresterats två gånger.', '她已经被逮捕过两次。'],
    ['Arrestera ingen utan bevis.', '没有证据别抓人。'],
  ]), 2150),
]

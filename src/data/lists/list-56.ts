import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2751–2800. Primary POS is the high-frequency use, not every sense in the book. */
export const list56: Word[] = [
  freq(other('nationellt', 'adv', '在全国；全国性地', 'nationally', [
    ['Frågan diskuteras nationellt.', '这个问题在全国范围内讨论。'],
    ['Laget spelar nationellt i år.', '这支队今年打全国赛事。'],
    ['Beslutet gäller nationellt.', '这项决定在全国有效。'],
    ['Tänk nationellt, inte bara lokalt.', '要从全国看，不要只看当地。'],
  ]), 2751, c(
    [
      ['nationell', '全国的；民族的'],
      ['-t', '中性/副词词尾'],
    ],
    'nationell 是“全国的”，nationellt 就是在全国、全国性地。',
  )),
  freq(adj('oförskämd', '无礼的；放肆的', 'insolent / rude', 'oförskämt', 'oförskämda', [
    ['Det var en oförskämd fråga.', '那是个无礼的问题。'],
    ['Ett oförskämt svar kom tillbaka.', '回来的是一句放肆的答复。'],
    ['De oförskämda kommentarerna ströks.', '那些无礼的评论被删了。'],
    ['Var inte oförskämd mot henne.', '别对她无礼。'],
  ]), 2752, c(
    [
      ['o-', '不'],
      ['förskämd', '感到羞愧的'],
    ],
    '不知羞愧的，合起来就是无礼的、放肆的。',
  )),
  freq(noun('världskrig', 'ett', '世界大战', 'world war', 'världskriget', 'världskrig', 'världskrigen', [
    ['Boken handlar om ett världskrig.', '这本书写的是一场世界大战。'],
    ['Världskriget ändrade kartan.', '那场世界大战改了地图。'],
    ['Två världskrig präglade seklet.', '两次世界大战影响了那个世纪。'],
    ['Världskrigen nämns i kursen.', '课上会提到那些世界大战。'],
  ]), 2753, c(
    [
      ['värld', '世界'],
      ['krig', '战争'],
    ],
    '波及世界的战争，就是世界大战。',
  )),
  freq(noun('guvernör', 'en', '州长；总督', 'governor', 'guvernören', 'guvernörer', 'guvernörerna', [
    ['Guvernören talade i radio.', '州长在广播里讲话。'],
    ['En guvernör valdes i våras.', '今年春天选出了一位州长。'],
    ['Flera guvernörer möttes i huvudstaden.', '好几位州长在首都会面。'],
    ['Guvernörerna skrev under avtalet.', '那些州长签署了协议。'],
  ]), 2754),
  freq(noun('jungfru', 'en', '处女；未婚少女（旧）；圣母（称号）', 'virgin / maiden (old-fashioned)', 'jungfrun', 'jungfrur', 'jungfrurna', [
    ['Jungfru Maria nämns i texten.', '经文里提到圣母马利亚。'],
    ['Jungfrun är ett stjärntecken.', '处女座是一个星座。'],
    ['I sagan hjälper tre jungfrur riddaren.', '故事里三位少女帮助骑士。'],
    ['Ordet jungfru är ålderdomligt.', 'jungfru 这个词是古旧说法。'],
  ]), 2755),
  freq(noun('välsignelse', 'en', '祝福；幸事', 'blessing', 'välsignelsen', 'välsignelser', 'välsignelserna', [
    ['Hon bad om en välsignelse.', '她求一份祝福。'],
    ['Välsignelsen kom oväntat.', '这份幸事来得突然。'],
    ['Små välsignelser räknas också.', '小小的幸事也算。'],
    ['Välsignelserna räknas upp i talet.', '讲话里列举了那些祝福。'],
  ]), 2756, c(
    [
      ['välsigna', '祝福'],
      ['-else', '行为／结果'],
    ],
    '祝福这一行为的结果，就是祝福、幸事。',
  )),
  freq(adj('fylld', '装满的；充满的', 'filled / full (of)', 'fyllt', 'fyllda', [
    ['Salen var fylld redan klockan sju.', '大厅七点就已经满了。'],
    ['Ett fyllt glas stod vid tallriken.', '盘子边放着一杯满上的杯子。'],
    ['De fyllda lådorna bar vi ut.', '那些装满的箱子我们抬出去了。'],
    ['Hon blev fylld av lättnad.', '她心里充满了轻松。'],
  ]), 2757),
  freq(verb('smälta', '融化；熔化；消化（消息）', 'to melt / to digest (news)', 'smälter', 'smälte', 'smält', 'smält', [
    ['Isen smälter i solen.', '冰在太阳下融化。'],
    ['Hon smälte smöret i kastrullen.', '她在锅里把黄油化开。'],
    ['Nyheten har inte smält än.', '这个消息还没消化完。'],
    ['Smält chokladen först.', '先把巧克力化开。'],
  ]), 2758),
  freq(noun('uppror', 'ett', '起义；叛乱', 'revolt / uprising', 'upproret', 'uppror', 'upproren', [
    ['Ett uppror bröt ut i provinsen.', '这个省爆发了起义。'],
    ['Upproret slogs ner snabbt.', '那次叛乱很快被平息。'],
    ['Flera uppror nämns i boken.', '书里提到好几次起义。'],
    ['Upproren ändrade makten.', '那些起义改变了权力。'],
  ]), 2759, c(
    [
      ['upp', '向上'],
      ['ror', '搅动（来自 röra）'],
    ],
    '被搅动起来反抗，合起来就是起义、叛乱。',
  )),
  freq(noun('tillträde', 'ett', '进入；就任；准入', 'admission / taking office / access', 'tillträdet', null, null, [
    ['Tillträde ges bara med passerkort.', '只有通行证才能进入。'],
    ['Tillträdet till tjänsten sker i augusti.', '这个职位八月就任。'],
    ['Vi fick tillträde till arkivet.', '我们获准进入档案室。'],
    ['Begär tillträde i god tid.', '请提前申请准入。'],
  ]), 2760, c(
    [
      ['till', '到'],
      ['träde', '踏入'],
    ],
    '踏进去的权利，合起来就是进入、准入、就任。',
  )),
  freq(verb('spola', '冲；冲洗；倒带', 'to flush / to rinse / to rewind', 'spolar', 'spolade', 'spolat', 'spola', [
    ['Hon spolar golvet efter maten.', '她饭后冲洗地板。'],
    ['Han spolade toaletten två gånger.', '他把马桶冲了两遍。'],
    ['Bandet har spolats tillbaka.', '磁带已经倒回去了。'],
    ['Spola ur öronen hos läkaren.', '去医生那儿冲洗耳朵。'],
  ]), 2761),
  freq(other('nämligen', 'adv', '也就是；因为（补充说明）', 'namely / that is (to say)', [
    ['Vi saknar en sak, nämligen tid.', '我们缺一样东西，也就是时间。'],
    ['Hon stannade hemma, bussen gick nämligen inte.', '她留在家里，因为公交车没开。'],
    ['Tre länder deltar, nämligen Sverige, Norge och Danmark.', '三个国家参加，也就是瑞典、挪威和丹麦。'],
    ['Jag kommer sent, tåget är nämligen inställt.', '我会晚到，因为火车停运了。'],
  ]), 2762),
  freq(adj('laddad', '充满（紧张／电）的；火药味的', 'charged / loaded', 'laddat', 'laddade', [
    ['Stämningen blev laddad efter voteringen.', '投票之后气氛紧了起来。'],
    ['Ett laddat möte väntar i morgon.', '明天有一场火药味很浓的会。'],
    ['De laddade batterierna räcker natten.', '那些充满电的电池能撑过夜。'],
    ['Frågan är politiskt laddad.', '这个问题在政治上很敏感。'],
  ]), 2763),
  freq(other('utomlands', 'adv', '在国外；到国外', 'abroad', [
    ['Hon jobbar utomlands i år.', '她今年在国外工作。'],
    ['Vi åker utomlands i juli.', '我们七月出国。'],
    ['Paketet kommer från utomlands.', '包裹从国外来。'],
    ['Bo inte utomlands utan papper.', '没有证件就别在国外住。'],
  ]), 2764, c(
    [
      ['utom', '在……之外'],
      ['lands', '国家（属格）'],
    ],
    '在本国之外，合起来就是在国外、到国外。',
  )),
  freq(verb('hugga', '砍；劈；咬住', 'to chop / to hew / to bite', 'hugger', 'högg', 'huggit', 'hugg', [
    ['Han hugger ved bakom huset.', '他在屋后劈柴。'],
    ['Hon högg till en gran i skogen.', '她在林子里砍了一棵云杉。'],
    ['Fisken har huggit på betet.', '鱼已经咬饵了。'],
    ['Hugg inte i bordet.', '别往桌上砍。'],
  ]), 2765),
  freq(noun('back', 'en', '箱；（足球）后卫；倒挡', 'crate / (football) back / reverse gear', 'backen', 'backar', 'backarna', [
    ['Ställ backen i köket.', '把箱子放到厨房。'],
    ['Backen spelade säkert.', '那名后卫踢得很稳。'],
    ['Två backar öl räckte till festen.', '两箱啤酒就够晚会用。'],
    ['Lägg in backen, så stannar vi.', '挂倒挡，我们好停下。'],
  ]), 2766),
  freq(verb('svälta', '挨饿；使挨饿', 'to starve', 'svälter', 'svalt', 'svultit', 'svält', [
    ['Djuren svälter efter torkan.', '干旱之后那些动物在挨饿。'],
    ['De svalt under den långa resan.', '他们在漫长的路上挨过饿。'],
    ['Ingen ska ha svultit i kylan.', '不该有人在寒冷中饿着。'],
    ['Svält inte dig själv för att spara.', '别为了省钱饿自己。'],
  ]), 2767),
  freq(noun('nation', 'en', '国家；民族；（大学）学生会', 'nation / people / student nation', 'nationen', 'nationer', 'nationerna', [
    ['Nationen samlades på torget.', '国民在广场上聚集。'],
    ['En liten nation kan väga tungt.', '一个小国也可能很有分量。'],
    ['Flera nationer skrev under avtalet.', '好几个国家签了协议。'],
    ['Nationerna möts i Genève.', '那些国家在日内瓦会面。'],
  ]), 2768),
  freq(noun('effekt', 'en', '效果；作用；功率', 'effect / impact / power (output)', 'effekten', 'effekter', 'effekterna', [
    ['Medicinen fick effekt efter en timme.', '药一个小时后起了效果。'],
    ['Effekten av beslutet syns redan.', '这项决定的作用已经能看见。'],
    ['Lampan har två effekter.', '这盏灯有两档功率。'],
    ['Effekterna märks i plånboken.', '那些影响能在钱包里感觉到。'],
  ]), 2769),
  freq(noun('verksamhet', 'en', '活动；业务；运作', 'activity / operation / business', 'verksamheten', 'verksamheter', 'verksamheterna', [
    ['Föreningen har verksamhet varje kväll.', '协会每天晚上都有活动。'],
    ['Verksamheten pausas i juli.', '业务七月暂停。'],
    ['Två verksamheter delar lokalen.', '两项业务共用这个场地。'],
    ['Verksamheterna flyttas till stan.', '那些业务要搬到城里。'],
  ]), 2770, c(
    [
      ['verksam', '起作用的；在活动的'],
      ['-het', '性质、状态'],
    ],
    '处于活动中的状态，合起来就是活动、业务。',
  )),
  freq(adj('grekisk', '希腊的；希腊语的', 'Greek', 'grekiskt', 'grekiska', [
    ['Vi åt på en grekisk restaurang.', '我们在一家希腊餐馆吃饭。'],
    ['Ett grekiskt vin stod på bordet.', '桌上放着一种希腊葡萄酒。'],
    ['De grekiska öarna är varma i juni.', '那些希腊岛屿六月很热。'],
    ['Hon läser grekisk historia.', '她在读希腊史。'],
  ]), 2771, c(
    [
      ['grek', '希腊人'],
      ['-isk', '……的'],
    ],
    '与希腊有关的，就是希腊的。',
  )),
  freq(noun('utgivare', 'en', '出版者；发行人', 'publisher', 'utgivaren', 'utgivare', 'utgivarna', [
    ['Utgivaren ansvarar för tidningen.', '出版者对这份报纸负责。'],
    ['En ny utgivare tar över i vår.', '今年春天会有新发行人接手。'],
    ['Flera utgivare tackade nej.', '好几家出版者拒绝了。'],
    ['Utgivarna möts i september.', '那些出版者九月会面。'],
  ]), 2772, c(
    [
      ['ut', '出'],
      ['givare', '给出的人'],
    ],
    '把书或报发出去的人，就是出版者、发行人。',
  )),
  freq(noun('förnuft', 'ett', '理智；常识', 'reason / common sense', 'förnuftet', null, null, [
    ['Använd förnuftet den här gången.', '这次用用理智。'],
    ['Förnuftet sa att vi skulle vänta.', '理智告诉我们应该等。'],
    ['Det strider mot allt förnuft.', '这完全不讲理。'],
    ['Lita på förnuftet, inte bara på turen.', '靠理智，别只靠运气。'],
  ]), 2773),
  freq(noun('skägg', 'ett', '胡子；胡须', 'beard', 'skägget', 'skägg', 'skäggen', [
    ['Han rakeade skägget i morse.', '他今天早上刮了胡子。'],
    ['Ett rött skägg syntes i dörren.', '门口露出一把红胡子。'],
    ['Två skägg i samma nyans är sällsynt.', '两把同样颜色的胡子少见。'],
    ['Skäggen blev vita med åren.', '那些胡子年岁大了就白了。'],
  ]), 2774),
  freq(other('himla', 'adv', '非常；极其（口）', 'awfully / really (informal)', [
    ['Det var himla kallt ute.', '外面冷极了。'],
    ['Maten smakade himla bra.', '这饭好吃极了。'],
    ['Hon blev himla glad över brevet.', '她收到信高兴极了。'],
    ['Kör inte himla fort här.', '这儿别开那么快。'],
  ]), 2775, c(
    [
      ['himmel', '天空；天哪'],
      ['-a', '口语词尾'],
    ],
    '从“天哪”变来的口语加强词，就是非常、极其。',
  )),
  freq(noun('böter', null, '罚款', 'fine / penalty (usually plural)', null, 'böter', 'böterna', [
    ['Hon fick böter för fortkörning.', '她因超速被罚款。'],
    ['Böterna ska betalas inom tre veckor.', '罚款要在三周内缴清。'],
    ['Vi slapp böter den här gången.', '我们这次没挨罚。'],
    ['Betala böterna i tid.', '按时把罚款交了。'],
  ]), 2776),
  freq(noun('tvilling', 'en', '双胞胎之一', 'twin', 'tvillingen', 'tvillingar', 'tvillingarna', [
    ['Min tvilling bor i Malmö.', '我的双胞胎兄弟姐妹住在马尔默。'],
    ['Tvillingen kom tre minuter senare.', '另一个双胞胎晚三分钟到。'],
    ['De är tvillingar, inte bara syskon.', '他们是双胞胎，不只是兄妹。'],
    ['Tvillingarna har samma jacka.', '那对双胞胎穿同一件外套。'],
  ]), 2777),
  freq(noun('kongress', 'en', '代表大会；国会', 'congress / conference', 'kongressen', 'kongresser', 'kongresserna', [
    ['Partiet håller kongress i november.', '该党十一月开代表大会。'],
    ['Kongressen röstade på kvällen.', '代表大会晚上投票了。'],
    ['Två kongresser infaller samma vecka.', '同一周有两场代表大会。'],
    ['Kongresserna sänds i radio.', '那些代表大会电台转播。'],
  ]), 2778),
  freq(adj('övrigt', '其余的；其他的', 'other / remaining', 'övrigt', 'övriga', [
    ['Övrigt material ligger i mappen.', '其余材料在文件夹里。'],
    ['Har du något övrigt att säga?', '你还有其余的要说吗？'],
    ['De övriga gästerna gick hem.', '其余的客人回家了。'],
    ['Övrigt tar vi i morgon.', '其余的明天再谈。'],
  ]), 2779),
  freq(noun('cigarr', 'en', '雪茄', 'cigar', 'cigarren', 'cigarrer', 'cigarrerna', [
    ['Han tände en cigarr efter maten.', '他饭后点了一支雪茄。'],
    ['Cigarren slocknade i vinden.', '那支雪茄被风吹灭了。'],
    ['Två cigarrer låg i askkoppen.', '烟灰缸里放着两支雪茄。'],
    ['Cigarrerna är dyra här.', '这儿那些雪茄很贵。'],
  ]), 2780),
  freq(noun('skick', 'ett', '状况；状态；规矩', 'condition / state / manners', 'skicket', 'skick', 'skicken', [
    ['Bilen är i dåligt skick.', '这车状况不好。'],
    ['Skicket på huset överraskade oss.', '房子的状况让我们吃惊。'],
    ['Två skick kan inte jämföras rakt av.', '两种状况不能直接比。'],
    ['Skicken varierar mellan lägenheterna.', '那些公寓的状况不一样。'],
  ]), 2781),
  freq(noun('privatliv', 'ett', '私生活；私人生活', 'private life', 'privatlivet', null, null, [
    ['Respektera hennes privatliv.', '尊重她的私生活。'],
    ['Privatlivet hålls utanför jobbet.', '私生活不带到工作里。'],
    ['Han värnar sitt privatliv.', '他很护自己的私人生活。'],
    ['Blanda inte in privatlivet här.', '别把私生活扯进来。'],
  ]), 2782, c(
    [
      ['privat', '私人的'],
      ['liv', '生活'],
    ],
    '工作以外的私人生活，就是私生活。',
  )),
  freq(adj('särskild', '特别的；专门的；某个特定的', 'particular / special', 'särskilt', 'särskilda', [
    ['Hon fick särskild hjälp med språket.', '她在语言上得到了特别帮助。'],
    ['Ett särskilt rum bokades till oss.', '给我们订了一间专门的房间。'],
    ['De särskilda reglerna gäller bara i dag.', '那些专门规定只今天有效。'],
    ['Har du någon särskild dag i åtanke?', '你心里有没有某个特定的日子？'],
  ]), 2783, c(
    [
      ['sär', '分开的'],
      ['skild', '分离的'],
    ],
    '单独分开来看的，合起来就是特别的、专门的。',
  )),
  freq(noun('sallad', 'en', '生菜；沙拉', 'lettuce / salad', 'salladen', 'sallader', 'salladerna', [
    ['Skölj salladen före middagen.', '晚饭前把生菜洗了。'],
    ['Salladen visnade i värmen.', '生菜在热里蔫了。'],
    ['Vi gjorde två sallader till buffén.', '我们给自助餐做了两份沙拉。'],
    ['Salladerna ska stå kallt.', '那些沙拉要冷藏。'],
  ]), 2784),
  freq(noun('generation', 'en', '一代；世代', 'generation', 'generationen', 'generationer', 'generationerna', [
    ['Den yngre generationen flyttar in till stan.', '年轻一代搬进城里。'],
    ['Generationen efter oss tänker annorlunda.', '我们后面那一代想法不同。'],
    ['Tre generationer bor i huset.', '三代人住在这栋房子里。'],
    ['Generationerna möts vid jul.', '那些世代在圣诞节见面。'],
  ]), 2785),
  freq(noun('kultur', 'en', '文化；栽培', 'culture', 'kulturen', 'kulturer', 'kulturerna', [
    ['Hon studerar svensk kultur.', '她在研究瑞典文化。'],
    ['Kulturen i byn lever kvar.', '村里的文化还在。'],
    ['Två kulturer möts i klassen.', '班上有两种文化相遇。'],
    ['Kulturerna skiljer sig i maten.', '那些文化在吃上不一样。'],
  ]), 2786),
  freq(noun('ryck', 'ett', '猛拉；一抽；突发的念头', 'jerk / tug / whim', 'rycket', 'ryck', 'rycken', [
    ['Bussen stannade med ett ryck.', '公交车猛地一顿停住了。'],
    ['Rycket slet upp dörren.', '那一拉把门拽开了。'],
    ['Hon fick ett ryck och ringde honom.', '她心血来潮给他打了电话。'],
    ['Rycken i linan kom från andra sidan.', '绳子上的猛拉来自对面。'],
  ]), 2787),
  freq(noun('kö', 'en', '队列；排队', 'queue / line', 'kön', 'köer', 'köerna', [
    ['Vi står i kö till kassan.', '我们在收银台排队。'],
    ['Kön ringlade runt hörnet.', '队伍拐过了街角。'],
    ['Två köer bildades vid dörren.', '门口排成了两队。'],
    ['Köerna kortades efter lunchen.', '那些队伍午饭后变短了。'],
  ]), 2788),
  freq(noun('tå', 'en', '脚趾', 'toe', 'tån', 'tår', 'tårna', [
    ['Hon stötte tån i tröskeln.', '她脚趾撞到门槛上了。'],
    ['Tån är blå efter smällen.', '撞完那只脚趾青了。'],
    ['Kalla tår i skorna är vanligt i januari.', '一月鞋子里脚趾发冷很常见。'],
    ['Tårna ska peka rakt i skorna.', '脚趾在鞋里要朝前。'],
  ]), 2789),
  freq(other('i och med', 'phrase', '随着；就此；鉴于', 'as a result of / with', [
    ['I och med beslutet ändras tiderna.', '随着这项决定，时间改了。'],
    ['Hon slutade i och med flytten.', '她随着搬家就停了。'],
    ['I och med klockan fem stängde vi.', '到了五点我们就关了。'],
    ['Avtalet gäller i och med underskriften.', '一签字协议就生效。'],
  ]), 2790, c(
    [
      ['i', '在'],
      ['och', '和'],
      ['med', '随着'],
    ],
    '就在某事发生的同时，合起来就是随着、就此。',
  )),
  freq(noun('flagga', 'en', '旗；旗帜', 'flag', 'flaggan', 'flaggor', 'flaggorna', [
    ['Flaggan hissas klockan åtta.', '旗八点升起。'],
    ['En blå flagga syns från sjön.', '从湖上能看见一面蓝旗。'],
    ['Tre flaggor hängde på rad.', '三面旗排成一排挂着。'],
    ['Flaggorna togs ner vid regn.', '那些旗下雨时降下来了。'],
  ]), 2791),
  freq(verb('förneka', '否认；不承认', 'to deny', 'förnekar', 'förnekade', 'förnekat', 'förneka', [
    ['Hon förnekar uppgifterna.', '她否认这些说法。'],
    ['Han förnekade allt i rätten.', '他在法庭上全盘否认。'],
    ['De har förnekat inblandning.', '他们已经否认有牵连。'],
    ['Förneka inte det du sett.', '别否认你看见的。'],
  ]), 2792, c(
    [
      ['för-', '构词前缀'],
      ['neka', '拒绝；否认'],
    ],
    '把某事彻底否定掉，合起来就是否认。',
  )),
  freq(noun('mobiltelefon', 'en', '手机；移动电话', 'mobile phone', 'mobiltelefonen', 'mobiltelefoner', 'mobiltelefonerna', [
    ['Glöm inte mobiltelefonen på bordet.', '别把手机忘在桌上。'],
    ['Mobiltelefonen ringer i väskan.', '手机在包里响。'],
    ['Två mobiltelefoner laddas i köket.', '两部手机在厨房充电。'],
    ['Mobiltelefonerna ska vara tysta i salen.', '大厅里那些手机要静音。'],
  ]), 2793, c(
    [
      ['mobil', '移动的'],
      ['telefon', '电话'],
    ],
    '可以带着走的电话，就是手机。',
  )),
  freq(verb('plugga', '用功读书（口）；堵塞', 'to study / cram (informal); to plug', 'pluggar', 'pluggade', 'pluggat', 'plugga', [
    ['Hon pluggar till provet i kväll.', '她今晚在为考试用功。'],
    ['Han pluggade tyska hela helgen.', '他整个周末都在啃德语。'],
    ['De har pluggat klart för i dag.', '他们今天已经学完了。'],
    ['Plugga hålet i väggen först.', '先把墙上的洞堵上。'],
  ]), 2794),
  freq(verb('övergiva', '抛弃；放弃（不定式变体，同 överge）', 'to abandon (infinitive variant of överge)', 'överger', 'övergav', 'övergett', 'överge', [
    ['De överger aldrig laget.', '他们从不抛弃球队。'],
    ['Han övergav idén snabbt.', '他很快放弃了那个想法。'],
    ['Byarna har övergetts i vinter.', '那些村子冬天被弃了。'],
    ['Överge inte uppgiften.', '别放弃这项任务。'],
  ]), 2795, c(
    [
      ['över', '越过；置于一旁'],
      ['giva', '给（旧不定式）'],
    ],
    '把某物丢到一边给出去，合起来就是抛弃、放弃。与 överge 同词。',
  )),
  freq(other('förfärligt', 'adv', '可怕地；极其', 'terribly / frightfully', [
    ['Det blåste förfärligt i natt.', '夜里风刮得可怕。'],
    ['Hon blev förfärligt trött efter passet.', '她下班后累极了。'],
    ['Oväsendet var förfärligt i hallen.', '门厅里吵得吓人。'],
    ['Kör inte förfärligt fort här.', '这儿别开那么快。'],
  ]), 2796, c(
    [
      ['förfärlig', '可怕的'],
      ['-t', '中性/副词词尾'],
    ],
    'förfärlig 是“可怕的”，förfärligt 就是可怕地，也作“极其”。',
  )),
  freq(other('uppriktigt', 'adv', '坦率地；真诚地', 'frankly / sincerely', [
    ['Hon svarade uppriktigt på frågan.', '她坦率地回答了这个问题。'],
    ['Uppriktigt sagt är jag trött.', '坦率地说我累了。'],
    ['De tackade uppriktigt för hjälpen.', '他们真诚地感谢了帮助。'],
    ['Tala uppriktigt med honom.', '跟他坦率地谈。'],
  ]), 2797, c(
    [
      ['uppriktig', '坦率的'],
      ['-t', '中性/副词词尾'],
    ],
    'uppriktig 是“坦率的”，uppriktigt 就是坦率地、真诚地。',
  )),
  freq(other('logiskt', 'adv', '合乎逻辑地；顺理成章地', 'logically', [
    ['Hon tänker logiskt under press.', '她在压力下想得很有逻辑。'],
    ['Svaret följer logiskt ur premissen.', '答案从前提顺理成章地得出。'],
    ['Argumentet hänger logiskt ihop.', '论证在逻辑上说得通。'],
    ['Förklara det mer logiskt.', '讲得更有逻辑一点。'],
  ]), 2798, c(
    [
      ['logisk', '合乎逻辑的'],
      ['-t', '中性/副词词尾'],
    ],
    'logisk 是“合乎逻辑的”，logiskt 就是合乎逻辑地。',
  )),
  freq(verb('utmana', '挑战；激将', 'to challenge', 'utmanar', 'utmanade', 'utmanat', 'utmana', [
    ['Hon utmanar honom på schack.', '她向他挑战下棋。'],
    ['De utmanade rekordet i våras.', '他们今年春天挑战了这项纪录。'],
    ['Laget har utmanat trean i tabellen.', '这支队已经挑战了积分榜第三。'],
    ['Utmana honom på en match till.', '再向他挑战一局。'],
  ]), 2799, c(
    [
      ['ut', '出'],
      ['mana', '召唤；敦促'],
    ],
    '把人唤出来较量，合起来就是挑战。',
  )),
  freq(noun('våldtäkt', 'en', '强奸（法律用语）', 'rape (legal term)', 'våldtäkten', 'våldtäkter', 'våldtäkterna', [
    ['Lagen räknar våldtäkt som ett brott.', '法律把强奸列为一种犯罪。'],
    ['Våldtäkten anmäldes till polisen.', '那起强奸案向警方报了案。'],
    ['Domstolen prövade två våldtäkter.', '法院审理了两起强奸案。'],
    ['Stöd finns efter en våldtäkt.', '强奸发生后可以获得支持。'],
  ]), 2800, c(
    [
      ['våld', '暴力'],
      ['täkt', '占取'],
    ],
    '以暴力占取，法律上就是强奸。',
  )),
]

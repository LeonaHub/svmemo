import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2251–2300. Primary POS is the high-frequency use, not every sense in the book. */
export const list46: Word[] = [
  freq(noun('anda', 'en', '精神；气氛；气息', 'spirit / atmosphere / breath', 'andan', null, null, [
    ['Det var god anda i gruppen.', '组里气氛很好。'],
    ['Andan i lagen är tydlig.', '法律的精神很清楚。'],
    ['Han kom med andan i halsen.', '他气喘吁吁地赶到。'],
    ['I den andan fortsatte vi.', '我们就本着那个精神继续。'],
  ]), 2251),
  freq(other('Ryssland', 'proper', '俄罗斯', 'Russia', [
    ['Tåget går till Ryssland.', '火车开往俄罗斯。'],
    ['Ryssland är ett stort land.', '俄罗斯是一个大国。'],
    ['Hon lärde sig ryska i Ryssland.', '她在俄罗斯学了俄语。'],
    ['Kommer paketet från Ryssland?', '包裹是从俄罗斯来的吗？'],
  ]), 2252, c([['ryss', '俄罗斯人'], ['land', '国家']], '俄罗斯人的国家，就是俄罗斯。')),
  freq(noun('sikte', 'ett', '瞄准器；视线；目标', 'sight / aim', 'siktet', 'sikten', 'siktena', [
    ['Siktet sitter på geväret.', '瞄准器装在枪上。'],
    ['Håll honom i sikte.', '盯紧他，别让他离开视线。'],
    ['Två sikten gick sönder.', '两个瞄准器坏了。'],
    ['Siktena justerades före jakten.', '打猎前那些瞄准器调过了。'],
  ]), 2253),
  freq(noun('teknik', 'en', '技术；技巧', 'technology / technique', 'tekniken', 'tekniker', null, [
    ['Tekniken i branschen går framåt.', '这行业的技术在进步。'],
    ['Det krävs en viss teknik att öppna låset.', '开这锁需要一点技巧。'],
    ['Hon lär ut tre tekniker.', '她教三种技法。'],
    ['Teknikerna skiljer sig åt.', '那些技法各不相同。'],
  ]), 2254),
  freq(other('mer och mer', 'phrase', '越来越', 'more and more', [
    ['Det blir mer och mer kallt.', '天气越来越冷。'],
    ['Hon pratar mer och mer svenska.', '她越来越多说瑞典语。'],
    ['Mer och mer folk kommer hit.', '越来越多的人来这儿。'],
    ['Jobbet tar mer och mer tid.', '这工作越来越花时间。'],
  ]), 2255, c([['mer', '更多'], ['och', '和'], ['mer', '更多']], '一次又一次地更多，合起来就是越来越。')),
  freq(noun('reaktion', 'en', '反应', 'reaction', 'reaktionen', 'reaktioner', null, [
    ['Hans reaktion kom sent.', '他的反应来得晚。'],
    ['Reaktionen på nyheten var blandad.', '对这消息的反应好坏都有。'],
    ['Olika reaktioner hördes i rummet.', '房间里能听到不同的反应。'],
    ['Reaktionerna lugnade sig efter en stund.', '那些反应过了一会儿平息了。'],
  ]), 2256),
  freq(verb('uppleva', '经历；感受；觉得', 'to experience / to feel', 'upplever', 'upplevde', 'upplevt', 'upplev', [
    ['Vi upplever en stilla kväll.', '我们正经历一个安静的夜晚。'],
    ['Hon upplevde jobbet som tungt.', '她觉得这工作很累。'],
    ['De har upplevt mycket tillsammans.', '他们一起经历了很多。'],
    ['Upplev tystnaden en stund.', '感受一会儿这份安静。'],
  ]), 2257, c([['upp', '上；经历到'], ['leva', '活']], '活着碰上，合起来就是经历、感受。')),
  freq(noun('fält', 'ett', '田野；场地；领域', 'field', 'fältet', 'fält', 'fälten', [
    ['Fältet var gult av raps.', '田野一片油菜黄。'],
    ['Ett stort fält ligger bakom huset.', '房子后面有一大片田。'],
    ['Soldaterna övade på fälten.', '士兵在那些场地上训练。'],
    ['Hon är känd inom sitt fält.', '她在自己的领域很有名。'],
  ]), 2258),
  freq(noun('behandling', 'en', '治疗；处理', 'treatment / handling', 'behandlingen', 'behandlingar', null, [
    ['Behandlingen tar sex veckor.', '这个疗程要六周。'],
    ['Hon fick en ny behandling.', '她接受了一种新治疗。'],
    ['Två behandlingar bokades in.', '预约了两次治疗。'],
    ['Behandlingarna hjälpte till slut.', '那些治疗最终起了作用。'],
  ]), 2259, c([['behandla', '处理；治疗'], ['-ning', '行为／结果']], '处理或治疗这件事，合起来就是治疗、处理。')),
  freq(noun('korpral', 'en', '下士', 'corporal', 'korpralen', 'korpraler', 'korpralerna', [
    ['Korpralen gav order.', '下士下了命令。'],
    ['En korpral stod vid grinden.', '一名下士站在门口。'],
    ['Två korpraler kom springande.', '两名下士跑了过来。'],
    ['Korpralerna samlade truppen.', '那些下士把队伍集合起来。'],
  ]), 2260),
  freq(noun('dikt', 'en', '诗', 'poem', 'dikten', 'dikter', 'dikterna', [
    ['Dikten är kort.', '这首诗很短。'],
    ['Hon läste en dikt högt.', '她大声读了一首诗。'],
    ['Barnen skrev dikter i skolan.', '孩子们在学校写诗。'],
    ['Dikterna samlades i en bok.', '那些诗收进了一本书。'],
  ]), 2261),
  freq(adj('häftig', '猛烈的；厉害的；酷的（口语）', 'violent / intense / (colloquial) cool', 'häftigt', 'häftiga', [
    ['Det blev en häftig storm.', '来了一场猛烈的风暴。'],
    ['Ett häftigt humör har hon.', '她脾气很急。'],
    ['De häftiga stövlarna syns långt.', '那双很酷的靴子老远就能看见。'],
    ['Smärtan var häftig en stund.', '那阵疼得很厉害。'],
  ], { comparative: 'häftigare', superlative: 'häftigast' }), 2262),
  freq(verb('dröja', '耽搁；迟迟不来', 'to delay / to take time', 'dröjer', 'dröjde', 'dröjt', 'dröj', [
    ['Svaret dröjer.', '答复迟迟不来。'],
    ['Han dröjde med beskedet.', '他迟迟不给消息。'],
    ['Det har dröjt många år.', '已经拖了很多年。'],
    ['Dröj ett ögonblick.', '请稍等片刻。'],
  ]), 2263),
  freq(verb('anfalla', '进攻；袭击', 'to attack / to assault', 'anfaller', 'anföll', 'anfallit', 'anfall', [
    ['De anfaller i gryningen.', '他们黎明进攻。'],
    ['Hunden anföll brevbäraren.', '狗袭击了邮递员。'],
    ['Staden har anfallits två gånger.', '这座城已经被袭击过两次。'],
    ['Anfall inte utan order.', '没有命令别进攻。'],
  ]), 2264, c(
    [
      ['an-', '朝向；对着'],
      ['falla', '倒下；扑向'],
    ],
    '“朝对方扑过去”，合起来就是进攻、袭击。',
  )),
  freq(noun('pasta', 'en', '意大利面；糊状物', 'pasta / paste', 'pastan', 'pastor', null, [
    ['Vi äter pasta i kväll.', '我们今晚吃意面。'],
    ['Pastan kokar över.', '意面要溢出来了。'],
    ['Olika pastor tar olika tid att koka.', '不同的意面煮的时间不同。'],
    ['Rör pastan så den inte klibbar.', '搅一搅意面免得粘。'],
  ]), 2265),
  freq(verb('avbryta', '打断；中止', 'to interrupt / to break off', 'avbryter', 'avbröt', 'avbrutit', 'avbryt', [
    ['Hon avbryter mig hela tiden.', '她老是打断我。'],
    ['De avbröt mötet.', '他们中止了会议。'],
    ['Resan har avbrutits.', '旅行已经中止了。'],
    ['Avbryt mig inte när jag talar.', '我说话时别打断我。'],
  ]), 2266, c(
    [
      ['av', '离开；去掉'],
      ['bryta', '折断；中断'],
    ],
    '“把进行中的事情断开”，合起来就是打断、中止。',
  )),
  freq(other('med hänsyn till', 'phrase', '鉴于；考虑到', 'with regard to / considering', [
    ['Med hänsyn till vädret stannar vi.', '鉴于天气，我们留下。'],
    ['Beslutet togs med hänsyn till barnen.', '做决定时考虑到了孩子。'],
    ['Med hänsyn till tiden måste vi sluta.', '考虑到时间，我们必须结束。'],
    ['Hon talade med hänsyn till känslorna.', '她说话顾及了别人的感受。'],
  ]), 2267, c(
    [
      ['med', '以；带着'],
      ['hänsyn', '顾及；考虑'],
      ['till', '对；向'],
    ],
    '“带着对某事的顾及”，合起来就是鉴于、考虑到。',
  )),
  freq(other('uppåt', 'adv', '向上；往上', 'upwards', [
    ['Titta uppåt.', '往上看。'],
    ['Priserna går uppåt.', '价格在往上走。'],
    ['Vägen sluttar uppåt.', '路往上倾斜。'],
    ['Röken steg uppåt.', '烟往上升。'],
  ]), 2268, c(
    [
      ['upp', '上'],
      ['åt', '朝；向'],
    ],
    '“朝上的方向”，合起来就是向上。',
  )),
  freq(noun('händelse', 'en', '事件；碰巧', 'event / occurrence', 'händelsen', 'händelser', 'händelserna', [
    ['Det var en historisk händelse.', '那是历史性事件。'],
    ['Händelsen ändrade allt.', '这件事改变了一切。'],
    ['Flera händelser skedde samma natt.', '同一晚发生了好几件事。'],
    ['Händelserna togs upp i nyheterna.', '那些事件上了新闻。'],
  ]), 2269, c(
    [
      ['hända', '发生'],
      ['-else', '行为/结果名词后缀'],
    ],
    '“发生的那件事”，合起来就是事件；也可表示碰巧。',
  )),
  freq(noun('prick', 'en', '点；记号；家伙（口语）', 'dot / mark / (colloquial) fellow', 'pricken', 'prickar', 'prickarna', [
    ['En prick syns på kartan.', '地图上有一个点。'],
    ['Pricken över i-et saknas.', '还差最后这一笔。'],
    ['Pappret är fullt av prickar.', '纸上满是点。'],
    ['Prickarna ska fyllas i.', '那些点要涂上。'],
  ]), 2270),
  freq(noun('ledning', 'en', '领导层；领先；管道', 'management / lead / pipe', 'ledningen', 'ledningar', 'ledningarna', [
    ['Ledningen beslutade i går.', '领导层昨天做了决定。'],
    ['Laget tog ledningen tidigt.', '这队很早就取得领先。'],
    ['Vattenledningar sprang läck.', '水管漏了。'],
    ['Ledningarna ska bytas i höst.', '那些管道秋天要换。'],
  ]), 2271, c(
    [
      ['leda', '带领；输送'],
      ['-ning', '行为/结果名词后缀'],
    ],
    '“带领或输送所形成的”，合起来可以是领导层、领先，也可以是管道。',
  )),
  freq(verb('tävla', '比赛；竞争', 'to compete', 'tävlar', 'tävlade', 'tävlat', 'tävla', [
    ['De tävlar om förstaplatsen.', '他们在争第一名。'],
    ['Hon tävlade mot sin bror.', '她和哥哥比赛。'],
    ['Vi har tävlat i den grenen förr.', '我们以前比过这个项目。'],
    ['Tävla inte om maten.', '别抢着吃饭。'],
  ]), 2272),
  freq(noun('augusti', 'en', '八月', 'August', null, null, null, [
    ['Skolorna öppnar i augusti.', '学校八月开学。'],
    ['Augusti är fortfarande varm.', '八月仍然很热。'],
    ['Han fyller år i augusti.', '他八月过生日。'],
    ['Spara ledigheten till augusti.', '把假留到八月。'],
  ]), 2273),
  freq(noun('butik', 'en', '商店', 'shop / store', 'butiken', 'butiker', null, [
    ['En ny butik öppnar vid torget.', '广场边一家新店要开张。'],
    ['Butiken stänger klockan sju.', '这家店七点关门。'],
    ['Två butiker ligger på samma gata.', '同一条街上有两家店。'],
    ['Butikerna var stängda på söndag.', '那些店星期天关了。'],
  ]), 2274),
  freq(noun('bälte', 'ett', '腰带；地带', 'belt', 'bältet', 'bälten', 'bältena', [
    ['Bältet är för stort.', '这条腰带太大了。'],
    ['Ett svart bälte hängde på stolen.', '椅子上挂着一条黑腰带。'],
    ['Två bälten låg i lådan.', '抽屉里有两条腰带。'],
    ['Bältena ska spännas i flyget.', '飞机上那些安全带要系上。'],
  ]), 2275),
  freq(other('därefter', 'adv', '此后；然后', 'thereafter / after that', [
    ['Vi åt och gick därefter hem.', '我们吃完，然后回家。'],
    ['Därefter blev det tyst.', '此后就安静了。'],
    ['Hon ringde och kom därefter.', '她先打电话，随后就来了。'],
    ['Därefter ändrades reglerna.', '此后规定改了。'],
  ]), 2276, c(
    [
      ['där', '那里；那一点'],
      ['efter', '在……之后'],
    ],
    '“在那之后”，合起来就是此后、然后。',
  )),
  freq(adj('bekväm', '舒服的；懒的', 'comfortable / lazy', 'bekvämt', 'bekväma', [
    ['Stolen är bekväm.', '这椅子很舒服。'],
    ['Ett bekvämt tempo passar oss.', '一个从容的节奏适合我们。'],
    ['De bekväma skorna tar slut.', '那些舒服的鞋卖完了。'],
    ['Han är för bekväm för att städa.', '他太懒了不愿打扫。'],
  ]), 2277),
  freq(noun('ärr', 'ett', '伤疤', 'scar', 'ärret', 'ärr', 'ärren', [
    ['Ärr syns på kinden.', '脸上能看见伤疤。'],
    ['Ärret bleknade med tiden.', '那道疤后来淡了。'],
    ['Han har flera ärr på armen.', '他胳膊上有好几道疤。'],
    ['Ärren påminner om olyckan.', '那些伤疤让人想起那场事故。'],
  ]), 2278),
  freq(noun('värme', 'en', '热；暖气；温暖', 'heat / heating / warmth', 'värmen', null, null, [
    ['Solens värme kändes mot ryggen.', '太阳的热照在背上。'],
    ['Värmen i huset räcker inte.', '屋里的暖气不够。'],
    ['Sätt på värmen, tack.', '请把暖气打开。'],
    ['Mänsklig värme betyder mycket.', '人的温暖很重要。'],
  ]), 2279, c([['varm', '热的'], ['-e', '名词词尾']], '热的状态，合起来就是热、暖气，也可指温暖。')),
  freq(noun('utkik', 'en', '瞭望；望风的人', 'lookout', 'utkiken', 'utkikar', 'utkikarna', [
    ['Håll utkik efter bussen.', '留意一下公交车。'],
    ['Utkiken stod på taket.', '望风的人站在屋顶上。'],
    ['Två utkikar byttes om.', '两个望风的人轮班。'],
    ['Utkikarna varnade i tid.', '那些望风的人及时示警了。'],
  ]), 2280, c(
    [
      ['ut', '向外'],
      ['kik', '张望（kika 看一眼）'],
    ],
    '“向外张望”，合起来就是瞭望，也可以指望风的人。',
  )),
  freq(noun('bön', 'en', '祈祷；恳求', 'prayer / plea', 'bönen', 'böner', 'bönerna', [
    ['Prästen var försänkt i bön.', '牧师在专心祈祷。'],
    ['Bönen var kort.', '这段祈祷很短。'],
    ['Barnen sa sina böner.', '孩子们做了祷告。'],
    ['Bönerna hördes i kyrkan.', '那些祈祷在教堂里能听见。'],
  ]), 2281),
  freq(noun('larm', 'ett', '警报；喧闹', 'alarm / din', 'larmet', 'larm', 'larmen', [
    ['Larmet gick klockan tre.', '警报三点响了。'],
    ['Ett larm hördes från gatan.', '街上响起一阵警报。'],
    ['Flera larm visade sig vara fel.', '好几次警报其实是误报。'],
    ['Larmen störde hela natten.', '那些警报吵了一整夜。'],
  ]), 2282),
  freq(adj('kristen', '基督教的', 'Christian', 'kristet', 'kristna', [
    ['Hon kommer från en kristen familj.', '她来自一个基督教家庭。'],
    ['Ett kristet kapell ligger vid vägen.', '路边有一座基督教小教堂。'],
    ['De kristna gästerna sjöng tillsammans.', '那些基督教客人一起唱了歌。'],
    ['Högtiden är kristen, sa hon.', '她说这个节日是基督教的。'],
  ]), 2283),
  freq(noun('utseende', 'ett', '外表；长相', 'appearance', 'utseendet', 'utseenden', 'utseendena', [
    ['Utseendet spelar mindre roll.', '外表没那么重要。'],
    ['Ett trevligt utseende har hon.', '她长得挺好看。'],
    ['Två utseenden kan vara lika.', '两种外表可以很像。'],
    ['Utseendena ändrades med tiden.', '那些外表后来变了。'],
  ]), 2284, c(
    [
      ['ut', '向外'],
      ['seende', '看上去的样子（se 看）'],
    ],
    '“从外面看上去的样子”，合起来就是外表、长相。',
  )),
  freq(verb('peka', '指；指向', 'to point', 'pekar', 'pekade', 'pekat', 'peka', [
    ['Hon pekar på kartan.', '她指着地图。'],
    ['Han pekade mot fönstret.', '他朝窗户指。'],
    ['Allt har pekat på samma svar.', '一切都指向同一个答案。'],
    ['Peka inte med hela handen.', '别用整只手指。'],
  ]), 2285),
  freq(other('utför', 'adv', '向下；往下', 'downhill / downwards', [
    ['Vi åkte utför backen.', '我们顺着坡往下走。'],
    ['Vägen går utför mot sjön.', '路往下通向湖边。'],
    ['Barnen sprang utför trappan.', '孩子们往下跑下楼梯。'],
    ['Utför är det lättare att cykla.', '往下骑车更轻松。'],
  ]), 2286, c(
    [
      ['ut', '向外'],
      ['för', '沿着；经过'],
    ],
    '“沿着向外、向下的方向”，合起来就是往下、下坡。',
  )),
  freq(noun('boskap', 'en', '牲口；家畜', 'livestock / cattle', 'boskapen', null, null, [
    ['Boskap går på ängen.', '牲口在草地上。'],
    ['Boskapen måste mjölkas.', '这些家畜得挤奶。'],
    ['De säljer boskap på hösten.', '他们秋天卖牲口。'],
    ['Mycket boskap dog i torkan.', '旱灾里死了很多牲口。'],
  ]), 2287),
  freq(adj('sjätte', '第六的', 'sixth', 'sjätte', 'sjätte', [
    ['Det är den sjätte gången.', '这是第六次。'],
    ['Ett sjätte försök gjordes.', '又做了第六次尝试。'],
    ['De sjätte klassarna går sist.', '六年级的最后走。'],
    ['Hon bor på sjätte våningen.', '她住在六楼。'],
  ]), 2288),
  freq(verb('reta', '惹；取笑；刺激', 'to tease / to irritate', 'retar', 'retade', 'retat', 'reta', [
    ['Han retar lillasyster.', '他逗妹妹。'],
    ['Hon retade hunden.', '她惹了那条狗。'],
    ['Doften har retat aptiten.', '香味把胃口吊起来了。'],
    ['Reta inte katten.', '别惹那只猫。'],
  ]), 2289),
  freq(noun('ko', 'en', '母牛', 'cow', 'kon', 'kor', null, [
    ['Kon står i ladugården.', '那头牛在牲口棚里。'],
    ['En ko betar vid staketet.', '一头牛在篱笆边吃草。'],
    ['Tre kor gick över vägen.', '三头牛走过马路。'],
    ['Mjölka korna på morgonen.', '早上给那些牛挤奶。'],
  ]), 2290),
  freq(verb('förhindra', '阻止；防止', 'to prevent / to hinder', 'förhindrar', 'förhindrade', 'förhindrat', 'förhindra', [
    ['Staketet förhindrar olyckor.', '这道围栏防止事故。'],
    ['Polisen förhindrade flykten.', '警察阻止了逃跑。'],
    ['Skadan har förhindrats i tid.', '伤害被及时防止了。'],
    ['Förhindra att elden sprids.', '别让火蔓延开。'],
  ]), 2291, c(
    [
      ['för-', '构词前缀'],
      ['hindra', '阻挡'],
    ],
    '“事先挡住”，合起来就是阻止、防止。',
  )),
  freq(noun('julafton', 'en', '圣诞节前夜', 'Christmas Eve', 'julaftonen', 'julaftnar', 'julaftnarna', [
    ['Vi äter tillsammans på julafton.', '我们圣诞节前夜一起吃饭。'],
    ['Julaftonen infaller den 24 december.', '圣诞节前夜在12月24日。'],
    ['Hon minns många julaftnar här.', '她记得在这儿过的好多个圣诞节前夜。'],
    ['Julaftnarna var tysta efter farfar.', '祖父走后那些圣诞节前夜很安静。'],
  ]), 2292, c([['jul', '圣诞节'], ['afton', '傍晚']], '圣诞节那一晚，就是圣诞节前夜。')),
  freq(verb('övertala', '说服', 'to persuade', 'övertalar', 'övertalade', 'övertalat', 'övertala', [
    ['Jag övertalar honom att följa med.', '我说服他一起来。'],
    ['Hon övertalade mig att stanna.', '她说服我留下。'],
    ['De har övertalats att skriva på.', '他们已经被说服签字了。'],
    ['Övertala henne inte för hårt.', '别把她劝得太狠。'],
  ]), 2293, c(
    [
      ['över', '过去；越过'],
      ['tala', '说话'],
    ],
    '“用话说过去”，合起来就是说服。',
  )),
  freq(noun('utsikt', 'en', '景色；前景', 'view / prospect', 'utsikten', 'utsikter', null, [
    ['Rummet har utsikt mot sjön.', '房间能看见湖。'],
    ['Utsikten från taket är vid.', '从屋顶看出去视野很开阔。'],
    ['Goda utsikter finns för jobbet.', '这工作前景不错。'],
    ['Utsikterna ändrades efter samtalet.', '谈完之后那些前景变了。'],
  ]), 2294, c([['ut', '向外'], ['sikt', '视线']], '向外看过去的视野，合起来就是景色，也可指前景。')),
  freq(verb('begå', '犯下；做出（罪行、错误）', 'to commit (a crime / mistake)', 'begår', 'begick', 'begått', 'begå', [
    ['Han begår ett brott.', '他在犯罪。'],
    ['Hon begick ett misstag.', '她犯了一个错误。'],
    ['Mordet har begåtts i natt.', '这起谋杀是夜里犯下的。'],
    ['Begå inte samma fel igen.', '别再犯同样的错。'],
  ]), 2295, c(
    [
      ['be-', '构词前缀'],
      ['gå', '走'],
    ],
    '“走过去做成某事”，现在几乎只用于犯下罪行或错误。',
  )),
  freq(noun('bränsle', 'ett', '燃料', 'fuel', 'bränslet', 'bränslen', 'bränslena', [
    ['Bilen behöver mer bränsle.', '这车需要更多燃料。'],
    ['Bränslet är dyrt just nu.', '现在燃料很贵。'],
    ['Olika bränslen ger olika utsläpp.', '不同燃料排放不同。'],
    ['Bränslena förvaras säkert.', '那些燃料妥善存放。'],
  ]), 2296, c(
    [
      ['bränna', '烧'],
      ['-sle', '材料/工具后缀'],
    ],
    '“用来烧的东西”，就是燃料。',
  )),
  freq(adj('försenad', '迟到的；延误的', 'delayed / late', 'försenat', 'försenade', [
    ['Tåget är försenat.', '火车晚点了。'],
    ['Ett försenat brev kom i dag.', '一封迟到的信今天到了。'],
    ['De försenade gästerna släpptes in.', '那些迟到的客人被放了进来。'],
    ['Hon är flera minuter försenad.', '她晚了好几分钟。'],
  ]), 2297, c([['försena', '延误'], ['-d', '过去分词']], '被延误的，合起来就是迟到的、延误的。')),
  freq(noun('roman', 'en', '长篇小说', 'novel', 'romanen', 'romaner', 'romanerna', [
    ['Jag läser en spännande roman.', '我在读一本精彩的长篇小说。'],
    ['Romanen är tjock.', '那部长篇小说很厚。'],
    ['Hon har skrivit tre romaner.', '她写了三部长篇小说。'],
    ['Romanerna står i hyllan.', '那些长篇小说在书架上。'],
  ]), 2298),
  freq(noun('omständighet', 'en', '情况；情形', 'circumstance', 'omständigheten', 'omständigheter', 'omständigheterna', [
    ['Under rådande omständigheter stannar vi.', '在目前情况下我们留下。'],
    ['Omständigheten ändrade allt.', '那个情况改变了一切。'],
    ['Berätta alla omständigheter.', '把所有情况都说一下。'],
    ['Omständigheterna är oklara.', '那些情况还不清楚。'],
  ]), 2299, c(
    [
      ['omständig', '具体情境的；周全的'],
      ['-het', '抽象名词后缀'],
    ],
    '“具体情境的状态”，就是情况、情形。',
  )),
  freq(noun('omgång', 'en', '一轮；一回', 'round / turn', 'omgången', 'omgångar', 'omgångarna', [
    ['Det är dags för nästa omgång.', '该进入下一轮了。'],
    ['Omgången var jämn.', '这一轮打得很均势。'],
    ['Vi spelar tre omgångar.', '我们打三轮。'],
    ['Omgångarna tar lång tid.', '那些轮次要花很长时间。'],
  ]), 2300, c(
    [
      ['om', '再；绕一圈'],
      ['gång', '走；一次'],
    ],
    '“再走一圈”，合起来就是一轮、一回。',
  )),
]

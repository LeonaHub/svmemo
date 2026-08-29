import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2651–2700. Primary POS is the high-frequency use, not every sense in the book. */
export const list54: Word[] = [
  freq(noun('vittnesmål', 'ett', '证词；见证', 'testimony / evidence', 'vittnesmålet', 'vittnesmål', 'vittnesmålen', [
    ['Hon lämnade ett vittnesmål i rätten.', '她在法庭上作了证。'],
    ['Vittnesmålet avgjorde målet.', '那份证词决定了案子。'],
    ['Flera vittnesmål stämde överens.', '好几份证词对得上。'],
    ['Vittnesmålen spelades in.', '那些证词被录了下来。'],
  ]), 2651, c(
    [
      ['vittne', '证人'],
      ['-s-', '连接音'],
      ['mål', '陈述；事项'],
    ],
    '“证人的陈述”，就是证词、见证。',
  )),
  freq(noun('mönster', 'ett', '图案；模式；榜样', 'pattern / model', 'mönstret', 'mönster', 'mönstren', [
    ['Klänningen har ett fint mönster.', '这条裙子有好看的图案。'],
    ['Mönstret upprepades på tapeten.', '那个图案在壁纸上重复。'],
    ['Vi följde flera mönster i data.', '我们在数据里看到好几种模式。'],
    ['Mönstren i boken är tydliga.', '书里那些模式很清楚。'],
  ]), 2652),
  freq(noun('olyckshändelse', 'en', '意外事故', 'accident', 'olyckshändelsen', 'olyckshändelser', 'olyckshändelserna', [
    ['Det var en ren olyckshändelse.', '那纯粹是意外。'],
    ['Olyckshändelsen utreds fortfarande.', '这起意外还在调查。'],
    ['Flera olyckshändelser skedde i vintras.', '去年冬天发生了好几起意外。'],
    ['Olyckshändelserna kunde ha undvikits.', '那些意外本来可以避免。'],
  ]), 2653, c(
    [
      ['olycka', '事故；不幸'],
      ['händelse', '事件'],
    ],
    '“不幸的事件”，就是意外事故。',
  )),
  freq(adj('mjuk', '软的；柔和的', 'soft / gentle', 'mjukt', 'mjuka', [
    ['Kudden är mjuk och varm.', '枕头又软又暖。'],
    ['Ett mjukt svar lugnade henne.', '一句柔和的回答让她平静了。'],
    ['De mjuka skorna sitter bra.', '那些软鞋很合脚。'],
    ['Brödet är fortfarande mjukt.', '面包还是软的。'],
  ]), 2654),
  freq(noun('inflytande', 'ett', '影响；影响力', 'influence', 'inflytandet', 'inflytanden', 'inflytandena', [
    ['Hon har stort inflytande på beslutet.', '她对这项决定很有影响力。'],
    ['Inflytandet växte med åren.', '这种影响力随着年岁增长。'],
    ['Olika inflytanden formade honom.', '不同的影响塑造了他。'],
    ['Inflytandena från utlandet syntes i lagen.', '外来的那些影响写进了法律。'],
  ]), 2655, c(
    [
      ['in', '进入'],
      ['flytande', '流动的（flyta 流）'],
    ],
    '流进去产生影响，就是影响力。',
  )),
  freq(noun('hån', 'ett', '嘲弄；讥讽', 'mockery / scorn', 'hånet', null, null, [
    ['Det kändes som ett hån.', '这感觉像是嘲弄。'],
    ['Hånet i rösten var tydligt.', '声音里的讥讽很明显。'],
    ['Hon mötte bara hån.', '她遇到的只有嘲弄。'],
    ['Sluta med hånet.', '别再讥讽了。'],
  ]), 2656),
  freq(noun('framsida', 'en', '正面；封面', 'front / front side', 'framsidan', 'framsidor', 'framsidorna', [
    ['Namnet står på framsidan.', '名字写在正面。'],
    ['Framsidan av huset vetter mot gatan.', '房子正面朝街。'],
    ['Båda framsidorna är skadade.', '两个正面都坏了。'],
    ['Framsidorna på tidningarna var lika.', '那些报纸的封面一个样。'],
  ]), 2657, c(
    [
      ['fram', '前面'],
      ['sida', '面；边'],
    ],
    '“前面那一面”，就是正面、封面。',
  )),
  freq(noun('skräck', 'en', '恐惧；恐怖', 'horror / terror / dread', 'skräcken', null, null, [
    ['Hon kände skräck i mörkret.', '她在黑暗里感到恐惧。'],
    ['Skräcken släppte först vid gryningen.', '恐惧到天亮才消退。'],
    ['Filmen är ren skräck.', '这部电影纯粹是恐怖片。'],
    ['Visa inte skräck inför barnen.', '别在孩子面前露出恐惧。'],
  ]), 2658),
  freq(noun('konjak', 'en', '白兰地；干邑', 'cognac / brandy', 'konjaken', 'konjaker', 'konjakerna', [
    ['Han hällde upp en konjak.', '他倒了一杯白兰地。'],
    ['Konjaken doftade starkt.', '那杯干邑气味很冲。'],
    ['De smakade olika konjaker.', '他们品了不同的白兰地。'],
    ['Konjakerna stod i skåpet.', '那些白兰地放在柜子里。'],
  ]), 2659),
  freq(adj('nykter', '清醒的；没喝醉的；冷静的', 'sober / level-headed', 'nyktert', 'nyktra', [
    ['Han var nykter hela kvällen.', '他整晚都没喝酒。'],
    ['Ett nyktert beslut fattades.', '做出了一个冷静的决定。'],
    ['De nyktra gästerna körde hem.', '没喝醉的客人开车回家了。'],
    ['Håll dig nykter i natt.', '今晚保持清醒。'],
  ]), 2660),
  freq(noun('tragedi', 'en', '悲剧', 'tragedy', 'tragedin', 'tragedier', 'tragedierna', [
    ['Pjäsen är en tragedi.', '这出戏是悲剧。'],
    ['Tragedin skakade hela byn.', '这场悲剧震动了整个村子。'],
    ['Flera tragedier drabbade familjen.', '这个家庭遭遇了好几场悲剧。'],
    ['Tragedierna på scenen rörde publiken.', '台上那些悲剧打动了观众。'],
  ]), 2661),
  freq(noun('panna', 'en', '锅；额头；锅炉', 'pan / forehead / boiler', 'pannan', 'pannor', 'pannorna', [
    ['Stek köttet i pannan.', '在锅里煎肉。'],
    ['Han torkade svetten ur pannan.', '他擦了擦额头上的汗。'],
    ['Två pannor står i källaren.', '地下室有两台锅炉。'],
    ['Pannorna måste bytas ut.', '那些锅炉得换掉。'],
  ]), 2662),
  freq(noun('agenda', 'en', '议程；日程', 'agenda', 'agendan', 'agendor', 'agendorna', [
    ['Vad står på agendan i dag?', '今天议程上有什么？'],
    ['Agendan skickades ut i går.', '议程昨天发出去了。'],
    ['De har olika agendor.', '他们各有各的日程／意图。'],
    ['Agendorna krockade.', '那些议程互相冲突。'],
  ]), 2663),
  freq(noun('rektor', 'en', '校长', 'principal / head teacher', 'rektorn', 'rektorer', 'rektorerna', [
    ['Rektor talade på skolavslutningen.', '校长在结业典礼上讲了话。'],
    ['Rektorn kallade in föräldrarna.', '校长把家长叫了进来。'],
    ['Två rektorer bytte skola.', '两位校长换了学校。'],
    ['Rektorerna möttes i stadshuset.', '那些校长在市政厅见面。'],
  ]), 2664),
  freq(other('möjligen', 'adv', '也许；可能', 'possibly / perhaps', [
    ['Hon är möjligen sen i dag.', '她今天也许会晚到。'],
    ['Har du möjligen sett mina nycklar?', '你也许看见我的钥匙了吗？'],
    ['Tåget är möjligen inställt.', '火车可能停运了。'],
    ['Möjligen kommer vi före nio.', '我们也许九点前到。'],
  ]), 2665, c(
    [
      ['möjlig', '可能的'],
      ['-en', '副词词尾'],
    ],
    '由“可能的”变成副词，就是也许、可能。',
  )),
  freq(adj('uttråkad', '厌烦的；无聊透了的', 'bored', 'uttråkat', 'uttråkade', [
    ['Jag är uttråkad på jobbet.', '我在工作上无聊透了。'],
    ['Ett uttråkat barn gungade på stolen.', '一个厌烦的孩子在椅子上晃。'],
    ['De uttråkade eleverna gäspade.', '那些无聊的学生在打哈欠。'],
    ['Hon såg uttråkad ut.', '她看起来很厌烦。'],
  ]), 2666, c(
    [
      ['ut', '彻底'],
      ['tråka', '使无聊'],
      ['-ad', '过去分词'],
    ],
    '被彻底弄无聊的，就是厌烦的、无聊透了的。',
  )),
  freq(noun('nerv', 'en', '神经', 'nerve', 'nerven', 'nerver', 'nerverna', [
    ['En nerv i tanden gör ont.', '牙齿里一根神经在疼。'],
    ['Nerven läkte efter operationen.', '那根神经术后愈合了。'],
    ['Han har dåliga nerver före spelet.', '比赛前他神经很紧。'],
    ['Rör inte nerven, sa läkaren.', '医生说，别碰那根神经。'],
  ]), 2667),
  freq(verb('bestå', '持续；由……组成；通过（考试）', 'to last / to consist of / to pass (an exam)', 'består', 'bestod', 'bestått', 'bestå', [
    ['Det soliga vädret består.', '晴天还在持续。'],
    ['Gruppen består av fem personer.', '这个小组由五个人组成。'],
    ['Han har bestått tentan.', '他已经通过了考试。'],
    ['Låt freden bestå.', '让和平持续下去。'],
  ]), 2668, c(
    [
      ['be-', '构词前缀'],
      ['stå', '站；持续'],
    ],
    '“站得住”，可以是持续下去、由什么组成，也可以是考试过关。',
  )),
  freq(adj('torr', '干的；干燥的', 'dry', 'torrt', 'torra', [
    ['Handduken är torr nu.', '毛巾现在干了。'],
    ['Ett torrt bröd låg i korgen.', '篮子里有一块干面包。'],
    ['De torra bladen rasade ner.', '那些干叶子掉了下来。'],
    ['Luften är torr i lägenheten.', '公寓里空气很干燥。'],
  ]), 2669),
  freq(noun('slump', 'en', '偶然；碰巧', 'chance / coincidence', 'slumpen', 'slumpar', 'slumparna', [
    ['Vi möttes av en slump.', '我们碰巧遇上了。'],
    ['Slumpen avgjorde matchen.', '偶然决定了这场比赛。'],
    ['Lämna inget åt slumpen.', '什么都别交给运气。'],
    ['Sådana slumpar händer sällan.', '这种碰巧很少见。'],
  ]), 2670),
  freq(verb('höja', '提高；举起', 'to raise / to increase', 'höjer', 'höjde', 'höjt', 'höj', [
    ['De höjer hyran i januari.', '他们一月份要涨房租。'],
    ['Hon höjde handen för att fråga.', '她举手要提问。'],
    ['Priset har höjts två gånger.', '价格已经涨了两次。'],
    ['Höj rösten lite, jag hör inte.', '声音抬高一点，我听不见。'],
  ]), 2671),
  freq(noun('sektor', 'en', '部门；扇区；领域', 'sector', 'sektorn', 'sektorer', 'sektorerna', [
    ['Hon jobbar i den offentliga sektorn.', '她在公共部门工作。'],
    ['Sektorn växte snabbt.', '这个领域增长很快。'],
    ['Olika sektorer kräver olika regler.', '不同部门需要不同规则。'],
    ['Sektorerna samarbetade efter krisen.', '那些部门在危机后合作了。'],
  ]), 2672),
  freq(verb('tyda', '解读；表明（tyda på）', 'to interpret / to indicate (tyda på)', 'tyder', 'tydde', 'tytt', 'tyd', [
    ['Kan du tyda handstilen?', '你能认出这字迹吗？'],
    ['Hon tydde meddelandet fel.', '她把这条信息解读错了。'],
    ['Allt tyder på att han ljuger.', '一切都表明他在说谎。'],
    ['Tyd inte in för mycket.', '别解读过头。'],
  ]), 2673),
  freq(noun('stål', 'ett', '钢', 'steel', 'stålet', 'stål', 'stålen', [
    ['Kniven är av stål.', '这把刀是钢做的。'],
    ['Stålet glänste i solen.', '那块钢在太阳下发亮。'],
    ['Olika stål används i bron.', '桥上用了不同的钢。'],
    ['Stålen testades i labbet.', '那些钢在实验室里测过。'],
  ]), 2674),
  freq(adj('unik', '独特的；独一无二的', 'unique', 'unikt', 'unika', [
    ['Det är en unik chans.', '这是一个独一无二的机会。'],
    ['Ett unikt fynd visades på museet.', '一件独特的发现在博物馆展出。'],
    ['De unika frimärkena är värdefulla.', '那些独特的邮票很值钱。'],
    ['Hennes röst är unik.', '她的声音是独一无二的。'],
  ]), 2675),
  freq(verb('snurra', '旋转；使转', 'to spin / to twirl', 'snurrar', 'snurrade', 'snurrat', 'snurra', [
    ['Hjulet snurrar fort.', '轮子转得很快。'],
    ['Hon snurrade jordgloben.', '她转了地球仪。'],
    ['Huvudet har snurrat hela dan.', '头转了一整天。'],
    ['Snurra inte så fort.', '别转那么快。'],
  ]), 2676),
  freq(noun('upplevelse', 'en', '体验；经历', 'experience', 'upplevelsen', 'upplevelser', 'upplevelserna', [
    ['Resan blev en stark upplevelse.', '这趟旅行成了一次强烈的体验。'],
    ['Upplevelsen satt kvar länge.', '那次经历很久都忘不掉。'],
    ['Hon har flera tunga upplevelser bakom sig.', '她背后有好几段沉重的经历。'],
    ['Berätta upplevelsen för de andra.', '把这次体验讲给其他人听。'],
  ]), 2677, c(
    [
      ['uppleva', '经历'],
      ['-else', '行为／结果'],
    ],
    '经历这件事的结果，就是一次体验、经历。',
  )),
  freq(noun('syre', 'ett', '氧气', 'oxygen', 'syret', null, null, [
    ['Vi behöver syre för att andas.', '我们需要氧气才能呼吸。'],
    ['Syret tog slut i rummet.', '房间里的氧气用完了。'],
    ['Brandmännen bar extra syre.', '消防员带着额外的氧气。'],
    ['Utan syre dör cellerna.', '没有氧气细胞会死亡。'],
  ]), 2678),
  freq(other('jäkligt', 'adv', '非常；该死地（口）', 'damn / extremely (colloquial)', [
    ['Det är jäkligt kallt ute.', '外面冷得要命。'],
    ['Filmen var jäkligt bra.', '这电影好得要命。'],
    ['Jag är jäkligt trött.', '我累得要命。'],
    ['Hon blev jäkligt arg.', '她气得要命。'],
  ]), 2679, c(
    [
      ['jäklig', '该死的（口）'],
      ['-t', '中性/副词词尾'],
    ],
    'jäklig 是“该死的”，jäkligt 作副词就是非常、该死地。',
  )),
  freq(adj('sugen', '想吃的；馋的；有兴致的', 'peckish / in the mood for', 'suget', 'sugna', [
    ['Jag är sugen på choklad.', '我想吃巧克力。'],
    ['Ett suget leende syntes när kakan kom.', '蛋糕上来时露出馋馋的笑。'],
    ['De sugna gästerna ställde sig i kön.', '那些有兴致的客人排起了队。'],
    ['Hon är inte sugen på att gå ut.', '她不想出门。'],
  ]), 2680),
  freq(verb('släcka', '熄灭；关掉；解（渴）', 'to extinguish / to turn off / to quench', 'släcker', 'släckte', 'släckt', 'släck', [
    ['Han släcker ljuset klockan tio.', '他十点关灯。'],
    ['De släckte branden snabbt.', '他们很快把火扑灭了。'],
    ['Törsten är redan släckt.', '渴已经解了。'],
    ['Släck lampan när du går.', '走的时候把灯关掉。'],
  ]), 2681),
  freq(noun('häll', 'en', '平整的岩石；炉盘', 'rock slab / stovetop', 'hällen', 'hällar', 'hällarna', [
    ['Vi satt på en varm häll.', '我们坐在一块晒热的岩石上。'],
    ['Hällen vid sjön är slät.', '湖边那块岩石很平整。'],
    ['Kastrullen står på hällen.', '锅在炉盘上。'],
    ['Hällarna längs kusten är hala.', '沿岸那些岩面很滑。'],
  ]), 2682),
  freq(noun('marsch', 'en', '行军；游行；进行曲', 'march', 'marschen', 'marscher', 'marscherna', [
    ['Soldaterna gick i marsch.', '士兵在行军。'],
    ['Marschen genom stan tog en timme.', '穿过城里的游行花了一小时。'],
    ['Orkestern spelade två marscher.', '乐队演奏了两首进行曲。'],
    ['Marscherna hördes långt bort.', '那些进行曲很远都能听见。'],
  ]), 2683),
  freq(verb('bota', '治好；挽回', 'to cure / to remedy', 'botar', 'botade', 'botat', 'bota', [
    ['Medicinen botar infektionen.', '这药能治好感染。'],
    ['Läkaren botade patienten.', '医生治好了病人。'],
    ['Krisen har inte botats än.', '危机还没有挽回。'],
    ['Bota inte ont med ont.', '别以恶治恶。'],
  ]), 2684),
  freq(noun('förskott', 'ett', '预付款；垫款', 'advance (payment)', 'förskottet', 'förskott', 'förskotten', [
    ['Hon fick ett förskott på lönen.', '她领了一笔工资预支。'],
    ['Förskottet ska betalas i dag.', '这笔预付款今天要付。'],
    ['Flera förskott betalades ut.', '付了好几笔垫款。'],
    ['Förskotten räknades av senare.', '那些预付款后来扣掉了。'],
  ]), 2685, c(
    [
      ['för', '预先'],
      ['skott', '一笔；一发'],
    ],
    '预先打出的一笔，就是预付款、垫款。',
  )),
  freq(verb('förvåna', '使惊讶', 'to surprise', 'förvånar', 'förvånade', 'förvånat', 'förvåna', [
    ['Nyheten förvånar mig inte.', '这消息并不让我惊讶。'],
    ['Svaret förvånade alla.', '这个回答让所有人吃惊。'],
    ['Vi har förvånats förut.', '我们以前惊讶过。'],
    ['Förvåna mig.', '让我吃惊看看。'],
  ]), 2686),
  freq(noun('museum', 'ett', '博物馆', 'museum', 'museet', 'museer', 'museerna', [
    ['Vi går på museum i morgon.', '我们明天去博物馆。'],
    ['Museet öppnar klockan tio.', '博物馆十点开门。'],
    ['Staden har tre museer vid ån.', '城里河边有三座博物馆。'],
    ['Museerna är stängda på måndagar.', '那些博物馆星期一关门。'],
  ]), 2687),
  freq(noun('gin', 'en', '金酒', 'gin', 'ginen', null, null, [
    ['Hon drack en gin och tonic.', '她喝了一杯金汤力。'],
    ['Ginen doftar av enbär.', '这金酒有杜松子味。'],
    ['Blanda gin med tonic.', '把金酒和汤力水混在一起。'],
    ['Flaskan med gin stod i baren.', '那瓶金酒在吧台上。'],
  ]), 2688),
  freq(noun('organisation', 'en', '组织；安排', 'organization', 'organisationen', 'organisationer', 'organisationerna', [
    ['Hon leder en stor organisation.', '她领导一个大组织。'],
    ['Organisationen brast inför flytten.', '搬家前安排出了岔子。'],
    ['Flera organisationer samlade kläder.', '好几个组织在募衣服。'],
    ['Bristen på organisation syntes direkt.', '缺乏安排一眼就能看出来。'],
  ]), 2689),
  freq(noun('ros', 'en', '玫瑰；赞扬', 'rose / praise', 'rosen', 'rosor', 'rosorna', [
    ['Han gav henne en röd ros.', '他给了她一朵红玫瑰。'],
    ['Rosen doftade starkt.', '那朵玫瑰很香。'],
    ['Trädgården är full av rosor.', '花园里全是玫瑰。'],
    ['Hon fick både ros och ris.', '她既被称赞也被批评。'],
  ]), 2690),
  freq(verb('glädja', '使高兴', 'to delight / to please', 'gläder', 'gladde', 'glatt', 'gläd', [
    ['Nyheten gläder hela laget.', '这消息让全队高兴。'],
    ['Besöket gladde de äldre.', '这次探望让老人高兴。'],
    ['Det har glatt mig att höra från dig.', '接到你的消息我很高兴。'],
    ['Gläd henne med ett samtal.', '打个电话让她高兴高兴。'],
  ]), 2691),
  freq(other('såväl ... som', 'phrase', '既……又；不但……而且', 'both … and / as well as', [
    ['Såväl barn som vuxna skrattade.', '孩子和大人都笑了。'],
    ['Hon talar såväl svenska som engelska.', '她既说瑞典语又说英语。'],
    ['Förslaget gillas såväl här som där.', '这个提议这边和那边都赞成。'],
    ['Vi behöver såväl tid som pengar.', '我们既需要时间也需要钱。'],
  ]), 2692, c(
    [
      ['så', '如此'],
      ['väl', '好；也'],
      ['som', '像；和'],
    ],
    '“如此也好……一样”，就是既……又。',
  )),
  freq(noun('kål', 'en', '卷心菜；白菜', 'cabbage', 'kålen', null, null, [
    ['Vi kokar kål till middagen.', '我们晚饭煮卷心菜。'],
    ['Kålen i kylen är fortfarande fräsch.', '冰箱里的白菜还新鲜。'],
    ['Hon strimlade kål till salladen.', '她把卷心菜切丝做沙拉。'],
    ['Köp kål på torget i dag.', '今天去市场买白菜。'],
  ]), 2693),
  freq(adj('engelsk', '英国的；英语的', 'English', 'engelskt', 'engelska', [
    ['Han köpte engelskt te i butiken.', '他在店里买了英国茶。'],
    ['Ett engelskt brev låg på hallmattan.', '门垫上有一封英文信。'],
    ['De engelska gästerna frågade om tåget.', '那些英国客人在问火车。'],
    ['Filmen är engelsk och textad.', '这部电影是英国的，带字幕。'],
  ]), 2694),
  freq(adj('onödig', '不必要的；多余的', 'unnecessary', 'onödigt', 'onödiga', [
    ['Det var en onödig omväg.', '那是一趟不必要的绕路。'],
    ['Ett onödigt samtal väckte barnet.', '一个多余的电话吵醒了孩子。'],
    ['De onödiga detaljerna ströks.', '那些多余的细节被删掉了。'],
    ['Det är onödigt att vänta längre.', '再等下去没有必要。'],
  ]), 2695, c(
    [
      ['o-', '不'],
      ['nödig', '必要的'],
    ],
    '不是必要的，就是不必要的、多余的。',
  )),
  freq(noun('blixt', 'en', '闪电；闪光灯', 'lightning / flash', 'blixten', 'blixtar', 'blixtarna', [
    ['En blixt lyste upp himlen.', '一道闪电照亮了天空。'],
    ['Blixten slog ner i trädet.', '闪电劈中了那棵树。'],
    ['Kameran har ingen blixt.', '这相机没有闪光灯。'],
    ['Blixtarna kom tätt i natt.', '夜里闪电一下接一下。'],
  ]), 2696),
  freq(noun('greve', 'en', '伯爵', 'count (noble title)', 'greven', 'grevar', 'grevarna', [
    ['En greve ägde slottet.', '一位伯爵拥有这座城堡。'],
    ['Greven tog emot vid dörren.', '伯爵在门口迎接。'],
    ['Två grevar satt vid bordet.', '两位伯爵坐在桌边。'],
    ['Grevarna röstade för förslaget.', '那些伯爵赞成这项提议。'],
  ]), 2697),
  freq(verb('duscha', '淋浴；冲洗', 'to shower', 'duschar', 'duschade', 'duschat', 'duscha', [
    ['Hon duschar varje morgon.', '她每天早上下淋浴。'],
    ['Han duschade av sig sanden.', '他把沙子冲掉了。'],
    ['Vi har duschat efter matchen.', '我们赛后已经冲过澡。'],
    ['Duscha innan du sätter dig i soffan.', '坐上沙发前先冲个澡。'],
  ]), 2698, c(
    [
      ['dusch', '淋浴'],
      ['-a', '动词词尾'],
    ],
    '用淋浴来洗，就是淋浴、冲洗。',
  )),
  freq(verb('reagera', '反应', 'to react', 'reagerar', 'reagerade', 'reagerat', 'reagera', [
    ['Kroppen reagerar på kylan direkt.', '身体对冷立刻有反应。'],
    ['Ingen reagerade när larmet ljöd.', '警报响时没有人反应。'],
    ['Hon har reagerat starkt på nyheten.', '她对这消息反应很强烈。'],
    ['Reagera om du ser något konstigt.', '看见奇怪的事就作出反应。'],
  ]), 2699),
  freq(noun('högkvarter', 'ett', '总部；司令部', 'headquarters', 'högkvarteret', 'högkvarter', 'högkvarteren', [
    ['Armén flyttade sitt högkvarter.', '军队把司令部挪了。'],
    ['Högkvarteret ligger i stan.', '总部在城里。'],
    ['Företaget har två högkvarter.', '公司有两个总部。'],
    ['Högkvarteren evakuerades.', '那些司令部撤空了。'],
  ]), 2700, c(
    [
      ['hög', '高的；主要的'],
      ['kvarter', '街区；驻地'],
    ],
    '“最高的驻地”，就是总部、司令部。',
  )),
]

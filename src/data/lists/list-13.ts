import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 601–650. Primary POS is the high-frequency use, not every sense in the book. */
export const list13: Word[] = [
  freq(noun('kung', 'en', '国王', 'king', 'kungen', 'kungar', 'kungarna', [
    ['En kung bor i slottet.', '一位国王住在城堡里。'],
    ['Kungen kommer i dag.', '国王今天来。'],
    ['Flera kungar har styrt här.', '好几位国王在这里统治过。'],
    ['Han är kung i spelet.', '他在游戏里是国王。'],
  ]), 601),
  freq(verb('passa', '合适；照看；传球', 'to fit / to look after / to pass', 'passar', 'passade', 'passat', 'passa', [
    ['Klänningen passar henne.', '这条裙子适合她。'],
    ['Han passade barnen i går.', '他昨天照看了孩子们。'],
    ['Har du passat bussen?', '你赶上公交车了吗？'],
    ['Passa bollen till mig.', '把球传给我。'],
  ]), 602),
  freq(noun('farbror', 'en', '叔叔；伯伯；（口）对成年男子的称呼', 'uncle (paternal) / (informal) sir', 'farbrodern', 'farbröder', 'farbröderna', [
    ['Min farbror bor i Umeå.', '我叔叔／伯伯住在于默奥。'],
    ['Farbrodern kom på besök.', '那位叔叔来做客了。'],
    ['Jag har två farbröder.', '我有两位叔叔／伯伯。'],
    ['Farbror, vad är klockan?', '叔叔，现在几点了？'],
  ]), 603, c(
    [
      ['far', '爸爸'],
      ['bror', '兄弟'],
    ],
    '爸爸的兄弟，就是叔叔、伯伯。',
  )),
  freq(adj('svart', '黑的；非法的', 'black / illegal', 'svart', 'svarta', [
    ['Hon har en svart jacka.', '她有一件黑色外套。'],
    ['Ett svart hus står där.', '那里有一栋黑房子。'],
    ['De svarta skorna är nya.', '那双黑鞋是新的。'],
    ['Kaffet är svart.', '咖啡是黑的（不加奶）。'],
  ]), 604),
  freq(noun('hår', 'ett', '头发', 'hair', 'håret', null, null, [
    ['Hon har långt hår.', '她头发很长。'],
    ['Håret är fortfarande vått.', '头发还是湿的。'],
    ['Jag tvättar håret i kväll.', '我今晚洗头。'],
    ['Rött hår är ovanligt här.', '红头发在这里少见。'],
  ]), 605),
  freq(other('som att', 'phrase', '好像；似乎（后接从句）', 'as if / that (it seems)', [
    ['Det känns som att det ska regna.', '感觉好像要下雨。'],
    ['Det verkar som att hon är sjuk.', '好像她生病了。'],
    ['Det låter som att de skrattar.', '听起来他们像是在笑。'],
    ['Gör inte som att du inte hör.', '别装作没听见。'],
  ]), 606, c(
    [
      ['som', '像'],
      ['att', '（从句标记）'],
    ],
    '像是某件事那样，合起来就是好像、似乎。',
  )),
  freq(adj('orolig', '担心的；不安的', 'worried / restless', 'oroligt', 'oroliga', [
    ['Jag är orolig för henne.', '我为她担心。'],
    ['Ett oroligt barn vaknade.', '一个不安的孩子醒了。'],
    ['De oroliga eleverna tystnade.', '那些不安分的学生安静了下来。'],
    ['Var inte orolig.', '别担心。'],
  ]), 607),
  freq(verb('röra', '碰；搅拌；感动；涉及', 'to touch / to stir / to move / to concern', 'rör', 'rörde', 'rört', 'rör', [
    ['Rör inte glaset.', '别碰那只杯子。'],
    ['Hon rörde i soppan.', '她搅了搅汤。'],
    ['Boken har rört mig djupt.', '这本书深深打动了我。'],
    ['Det rör sig om mycket pengar.', '这涉及很多钱。'],
  ]), 608),
  freq(verb('arbeta', '工作', 'to work', 'arbetar', 'arbetade', 'arbetat', 'arbeta', [
    ['Hon arbetar på sjukhuset.', '她在医院工作。'],
    ['Han arbetade sent i går.', '他昨天工作到很晚。'],
    ['Jag har arbetat här i tre år.', '我已经在这里工作三年了。'],
    ['Arbeta inte så hårt.', '别那么拼命干活。'],
  ]), 609),
  freq(adj('lycklig', '幸福的；幸运的', 'happy / fortunate', 'lyckligt', 'lyckliga', [
    ['Hon är en lycklig människa.', '她是一个幸福的人。'],
    ['Ett lyckligt leende.', '一个幸福的微笑。'],
    ['De lyckliga barnen lekte ute.', '那些快乐的孩子在外面玩。'],
    ['Vi är lyckliga här.', '我们在这里很幸福。'],
  ]), 610),
  freq(noun('bär', 'ett', '浆果', 'berry', 'bäret', 'bär', 'bären', [
    ['Jag hittade ett rött bär.', '我找到一颗红浆果。'],
    ['Bäret är sött.', '这颗浆果是甜的。'],
    ['Vi plockar bär i skogen.', '我们在森林里摘浆果。'],
    ['Bären är mogna nu.', '浆果现在熟了。'],
  ]), 611),
  freq(other('oj', 'intj', '哦；哎呀', 'oh / wow', [
    ['Oj, det var kallt!', '哎呀，好冷！'],
    ['Oj då, jag glömde nyckeln.', '哎呀，我把钥匙忘了。'],
    ['Oj, vad fint!', '哇，真好看！'],
    ['Oj, är du redan här?', '哦，你已经到了？'],
  ]), 612),
  freq(verb('ställa', '放置；提出；调好', 'to put / to pose / to set', 'ställer', 'ställde', 'ställt', 'ställ', [
    ['Hon ställer glaset på bordet.', '她把杯子放到桌上。'],
    ['Han ställde en fråga.', '他提了一个问题。'],
    ['Jag har ställt klockan.', '我已经把钟调好了。'],
    ['Ställ dig där.', '你站到那儿。'],
  ]), 613),
  freq(other('inte ens', 'phrase', '甚至不；连……都不', 'not even', [
    ['Han ringer inte ens.', '他连电话都不打。'],
    ['Jag har inte ens tid.', '我连时间都没有。'],
    ['Hon tittade inte ens upp.', '她连头都没抬。'],
    ['Inte ens jag visste det.', '连我都不知道。'],
  ]), 614, c(
    [
      ['inte', '不'],
      ['ens', '甚至'],
    ],
    '连最低限度都不，合起来就是甚至不、连……都不。',
  )),
  freq(verb('dansa', '跳舞', 'to dance', 'dansar', 'dansade', 'dansat', 'dansa', [
    ['Vill du dansa?', '你想跳舞吗？'],
    ['De dansade hela kvällen.', '他们跳了一整晚。'],
    ['Har ni dansat vals?', '你们跳过华尔兹吗？'],
    ['Dansa med mig.', '和我跳舞。'],
  ]), 615),
  freq(adj('försiktig', '小心的；谨慎的', 'careful / cautious', 'försiktigt', 'försiktiga', [
    ['Var försiktig på isen.', '在冰上要小心。'],
    ['Ett försiktigt steg framåt.', '小心向前迈了一步。'],
    ['De försiktiga förarna kör sakta.', '那些谨慎的司机开得很慢。'],
    ['Hon är försiktig med pengarna.', '她用钱很谨慎。'],
  ]), 616),
  freq(noun('allvar', 'ett', '认真；严重', 'seriousness', 'allvaret', null, null, [
    ['Ta det på allvar.', '把这当真。'],
    ['Allvaret i saken är stort.', '这件事很严重。'],
    ['Hon menar allvar.', '她是认真的。'],
    ['Nu är det allvar.', '现在可不是开玩笑了。'],
  ]), 617),
  freq(other('adjö', 'intj', '再见', 'goodbye / farewell', [
    ['Adjö, vi ses.', '再见，回头见。'],
    ['Vi sade adjö vid stationen.', '我们在车站道别了。'],
    ['Adjö då, och tack.', '再见了，谢谢。'],
    ['Hon vinkade adjö.', '她挥手道别。'],
  ]), 618),
  freq(other('helt enkelt', 'phrase', '简直；只不过；干脆', 'simply / just', [
    ['Det är helt enkelt för sent.', '这简直太晚了。'],
    ['Hon sa helt enkelt nej.', '她干脆说了不。'],
    ['Jag är helt enkelt trött.', '我只不过是累了。'],
    ['Gör det helt enkelt så här.', '就这么做就行。'],
  ]), 619, c(
    [
      ['helt', '完全'],
      ['enkelt', '简单地'],
    ],
    '完全简单地，合起来就是简直、只不过。',
  )),
  freq(adj('levande', '活的；活生生的', 'living / alive', 'levande', 'levande', [
    ['Det är ett levande djur.', '这是一只活的动物。'],
    ['Hon är fortfarande levande.', '她还活着。'],
    ['De levande släktingarna bor kvar.', '那些还在世的亲戚还住在那里。'],
    ['Finns det levande fisk i vattnet?', '水里有活鱼吗？'],
  ]), 620),
  freq(other('naturligtvis', 'adv', '当然', 'of course / naturally', [
    ['Naturligtvis kommer jag.', '我当然会来。'],
    ['Du har naturligtvis rätt.', '你当然是对的。'],
    ['Hon sa naturligtvis ja.', '她当然说了好。'],
    ['Det är naturligtvis dyrt.', '这当然贵。'],
  ]), 621, c(
    [
      ['naturlig', '自然的'],
      ['-tvis', '以……方式'],
    ],
    '以自然的方式，合起来就是当然。',
  )),
  freq(other('alldeles', 'adv', '完全；十分；就在', 'completely / quite / right', [
    ['Det är alldeles för stort.', '这完全太大了。'],
    ['Hon sitter alldeles ensam.', '她坐得孤零零的。'],
    ['Alldeles riktigt.', '完全正确。'],
    ['Butiken ligger alldeles intill.', '店就在旁边。'],
  ]), 622, c(
    [
      ['all', '全部'],
      ['deles', '部分地'],
    ],
    '全部地，合起来就是完全、十分。',
  )),
  freq(verb('beklaga', '感到遗憾；哀悼', 'to regret / to be sorry', 'beklagar', 'beklagade', 'beklagat', 'beklaga', [
    ['Jag beklagar.', '我很遗憾。'],
    ['Vi beklagade beskedet.', '我们对那个消息感到遗憾。'],
    ['Hon har beklagat misstaget.', '她已经为这个错误表示了歉意。'],
    ['Jag beklagar att jag är sen.', '很抱歉我迟到了。'],
  ]), 623),
  freq(other('till och med', 'phrase', '甚至；连……都；直至（含）', 'even / up to and including', [
    ['Hon kan till och med simma.', '她甚至会游泳。'],
    ['Till och med barnen hjälpte till.', '连孩子们都来帮忙了。'],
    ['Han tog till och med med kaffe.', '他甚至把咖啡也带上了。'],
    ['Vi jobbar till och med söndag.', '我们一直工作到星期天（含当天）。'],
  ]), 624, c(
    [
      ['till', '到'],
      ['och', '和'],
      ['med', '带着'],
    ],
    '一直到并且包括，合起来就是甚至、直至（含）。',
  )),
  freq(verb('akta', '小心；爱惜', 'to watch out / to take care of', 'aktar', 'aktade', 'aktat', 'akta', [
    ['Hon aktar den nya cykeln.', '她很爱惜那辆新自行车。'],
    ['Vi aktade oss för isen.', '我们小心着冰。'],
    ['Har du aktat dig för hunden?', '你躲开那条狗了吗？'],
    ['Akta huvudet!', '小心头！'],
  ]), 625),
  freq(noun('svar', 'ett', '回答；答复', 'answer / reply', 'svaret', 'svar', 'svaren', [
    ['Jag väntar på ett svar.', '我在等一个答复。'],
    ['Svaret kom sent.', '那个回答来得很晚。'],
    ['Hon fick två svar.', '她收到了两个答复。'],
    ['Svaren var korta.', '那些回答很短。'],
  ]), 626),
  freq(adj('fri', '自由的；免费的', 'free / independent / free of charge', 'fritt', 'fria', [
    ['Hon är en fri kvinna.', '她是一个自由的女人。'],
    ['Ett fritt land.', '一个自由的国家。'],
    ['De fria valen är viktiga.', '那些自由的选举很重要。'],
    ['Inträdet är fritt.', '入场免费。'],
  ]), 627),
  freq(noun('djur', 'ett', '动物', 'animal', 'djuret', 'djur', 'djuren', [
    ['Ett djur sprang förbi.', '一只动物跑过去了。'],
    ['Djuret är tamt.', '这只动物是温顺的。'],
    ['Vilda djur bor i skogen.', '野生动物住在森林里。'],
    ['Djuren är hungriga.', '那些动物饿了。'],
  ]), 628),
  freq(other('det vill säga', 'phrase', '也就是说；即', 'that is to say / i.e.', [
    ['Vi kommer i morgon, det vill säga lördag.', '我们明天来，也就是星期六。'],
    ['Hon är lärare, det vill säga hon jobbar i skolan.', '她是老师，也就是说她在学校工作。'],
    ['Tre, det vill säga en mer än två.', '三，也就是比二多一个。'],
    ['Öppet vardagar, det vill säga måndag till fredag.', '工作日开放，即星期一到星期五。'],
  ]), 629, c(
    [
      ['det', '它'],
      ['vill', '想要'],
      ['säga', '说'],
    ],
    '那意思是想说，合起来就是也就是说。',
  )),
  freq(other('vackert', 'adv', '美丽地；漂亮地', 'beautifully', [
    ['Hon sjunger vackert.', '她唱得很美。'],
    ['Han målar vackert.', '他画得很漂亮。'],
    ['Ni spelade vackert i kväll.', '你们今晚演奏得很美。'],
    ['Vackert gjort!', '干得漂亮！'],
  ]), 630),
  freq(other('särskilt', 'adv', '尤其；特别', 'especially / particularly', [
    ['Jag gillar kaffe, särskilt på morgonen.', '我喜欢咖啡，尤其是早上。'],
    ['Det är inte särskilt dyrt.', '这并不是特别贵。'],
    ['Hon är särskilt duktig i matte.', '她数学特别好。'],
    ['Särskilt barnen blev glada.', '尤其是孩子们很高兴。'],
  ]), 631),
  freq(verb('förlora', '输掉；失去', 'to lose', 'förlorar', 'förlorade', 'förlorat', 'förlora', [
    ['Vi förlorar inte hoppet.', '我们不失去希望。'],
    ['Hon förlorade nyckeln.', '她把钥匙弄丢了。'],
    ['Laget har förlorat matchen.', '这支队已经输掉了比赛。'],
    ['Förlora inte tiden.', '别把时间浪费掉。'],
  ]), 632),
  freq(noun('läkare', 'en', '医生', 'doctor / physician', 'läkaren', 'läkare', 'läkarna', [
    ['Jag måste träffa en läkare.', '我必须去看医生。'],
    ['Läkaren kommer snart.', '医生马上到。'],
    ['Två läkare arbetar här.', '两位医生在这里工作。'],
    ['Läkarna sa nej.', '那些医生说了不。'],
  ]), 633),
  freq(verb('ljuga', '撒谎', 'to lie', 'ljuger', 'ljög', 'ljugit', 'ljug', [
    ['Du ljuger.', '你在撒谎。'],
    ['Han ljög om tiden.', '他在时间上撒了谎。'],
    ['Hon har ljugit för oss.', '她对我们撒过谎。'],
    ['Ljug inte för mig.', '别对我撒谎。'],
  ]), 634),
  freq(noun('medlemsstat', 'en', '成员国', 'member state', 'medlemsstaten', 'medlemsstater', 'medlemsstaterna', [
    ['Sverige är en medlemsstat.', '瑞典是一个成员国。'],
    ['Medlemsstaten röstade ja.', '那个成员国投了赞成票。'],
    ['EU har många medlemsstater.', '欧盟有许多成员国。'],
    ['En ny medlemsstat kom in.', '一个新的成员国加入了。'],
  ]), 635, c(
    [
      ['medlem', '成员'],
      ['stat', '国家'],
    ],
    '成员国家，就是成员国。',
  )),
  freq(other('nio', 'other', '九', 'nine', [
    ['Hon är nio år.', '她九岁。'],
    ['Vi ses klockan nio.', '我们九点见。'],
    ['Det kostar nio kronor.', '这个要九克朗。'],
    ['Nio personer väntar.', '九个人在等。'],
  ]), 636),
  freq(verb('skoja', '开玩笑；骗人', 'to joke / to swindle', 'skojar', 'skojade', 'skojat', 'skoja', [
    ['Jag skojar bara.', '我只是在开玩笑。'],
    ['Han skojade med barnen.', '他跟孩子们开玩笑。'],
    ['Har du skojat med henne?', '你跟她开玩笑了吗？'],
    ['Skoja inte om det.', '别拿这事开玩笑。'],
  ]), 637),
  freq(noun('fängelse', 'ett', '监狱；徒刑', 'prison / imprisonment', 'fängelset', 'fängelser', 'fängelserna', [
    ['Han sitter i fängelse.', '他在坐牢。'],
    ['Fängelset ligger utanför stan.', '监狱在城外。'],
    ['Det finns flera fängelser här.', '这里有好几座监狱。'],
    ['Hon dömdes till fängelse.', '她被判了徒刑。'],
  ]), 638),
  freq(other('ända', 'adv', '一直；直到', 'all the way / right up to', [
    ['Jag kör dig ända hem.', '我开车一直送你到家。'],
    ['Vi väntade ända till kvällen.', '我们一直等到晚上。'],
    ['Hon sprang ända fram.', '她一直跑到前面。'],
    ['Kom ända hit.', '一直走到这儿来。'],
  ]), 639),
  freq(adj('stark', '强壮的；浓的；强烈的', 'strong', 'starkt', 'starka', [
    ['Han har starka armar.', '他胳膊很结实。'],
    ['Kaffet är starkt.', '咖啡很浓。'],
    ['De starka vindarna släppte inte.', '那些强风一直没停。'],
    ['Osten är stark.', '这奶酪味道很冲。'],
  ]), 640),
  freq(noun('raring', 'en', '亲爱的；宝贝', 'darling', 'raringen', 'raringar', 'raringarna', [
    ['Hej, raring.', '嗨，亲爱的。'],
    ['Raringen sover redan.', '宝贝已经睡了。'],
    ['Kom hit, mina raringar.', '过来，我的宝贝们。'],
    ['Du är en raring.', '你真是个宝贝。'],
  ]), 641),
  freq(noun('affär', 'en', '商店；生意；事情', 'shop / business / affair', 'affären', 'affärer', 'affärerna', [
    ['Jag går till affären.', '我去商店。'],
    ['Affären stänger klockan sju.', '商店七点关门。'],
    ['Hon har två affärer i stan.', '她在城里有两家店。'],
    ['Det var en bra affär.', '那是一笔好生意。'],
  ]), 642),
  freq(noun('stopp', 'ett', '停下；堵塞', 'stop / blockage', 'stoppet', 'stopp', 'stoppen', [
    ['Vi gör ett kort stopp.', '我们作一次短暂停留。'],
    ['Stoppet i röret är borta.', '管子里的堵塞没了。'],
    ['Bussen har flera stopp.', '公交车有好几站。'],
    ['Stopp, gå inte dit!', '停下，别去那儿！'],
  ]), 643),
  freq(verb('skydda', '保护', 'to protect', 'skyddar', 'skyddade', 'skyddat', 'skydda', [
    ['Vi måste skydda barnen.', '我们必须保护孩子们。'],
    ['Muren skyddade huset.', '那堵墙保护了房子。'],
    ['Lagen har skyddat skogen.', '法律已经保护了这片森林。'],
    ['Skydda dig mot kylan.', '保护自己别受冻。'],
  ]), 644),
  freq(noun('bok', 'en', '书', 'book', 'boken', 'böcker', 'böckerna', [
    ['Jag läser en bok.', '我在读一本书。'],
    ['Boken är ny.', '这本书是新的。'],
    ['Hon har tre böcker.', '她有三本书。'],
    ['Lägg boken där.', '把书放那儿。'],
  ]), 645),
  freq(noun('advokat', 'en', '律师', 'lawyer', 'advokaten', 'advokater', 'advokaterna', [
    ['Jag behöver en advokat.', '我需要一位律师。'],
    ['Advokaten ringer i morgon.', '律师明天打电话。'],
    ['Två advokater väntar där.', '两位律师在那里等。'],
    ['Ring en advokat.', '打给一位律师。'],
  ]), 646),
  freq(noun('meter', 'en', '米', 'metre', 'metern', 'meter', 'meterna', [
    ['Det är tio meter långt.', '这有十米长。'],
    ['Metern räcker inte.', '这一米不够。'],
    ['Hon köpte två meter tyg.', '她买了两米布。'],
    ['Meterna går fort när man springer.', '跑步时这几米过得很快。'],
  ]), 647),
  freq(adj('duktig', '能干的；擅长的', 'capable / good at', 'duktigt', 'duktiga', [
    ['Hon är en duktig lärare.', '她是一位能干的老师。'],
    ['Barnet är duktigt i matte.', '这孩子数学很好。'],
    ['De duktiga eleverna hjälper till.', '那些能干的学生在帮忙。'],
    ['Hon är duktig på att laga mat.', '她很会做饭。'],
  ]), 648),
  freq(adj('olik', '不同的；不像的', 'different / unlike', 'olikt', 'olika', [
    ['Han är olik sin bror.', '他不像他哥哥／弟弟。'],
    ['Deras hus är olikt vårt.', '他们的房子和我们的不一样。'],
    ['De har olika åsikter.', '他们意见不同。'],
    ['Vi gör det på olika sätt.', '我们用不同的方法做。'],
  ]), 649),
  freq(verb('sälja', '卖', 'to sell', 'säljer', 'sålde', 'sålt', 'sälj', [
    ['Hon säljer blommor.', '她卖花。'],
    ['Han sålde cykeln.', '他把自行车卖了。'],
    ['De har sålt huset.', '他们已经把房子卖了。'],
    ['Sälj inte den.', '别卖那个。'],
  ]), 650),
]

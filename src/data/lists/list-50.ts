import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 2451–2500. Primary POS is the high-frequency use, not every sense in the book. */
export const list50: Word[] = [
  freq(noun('december', 'en', '十二月', 'December', null, null, null, [
    ['Julen infaller i december.', '圣诞节在十二月。'],
    ['December är årets sista månad.', '十二月是一年的最后一个月。'],
    ['Lönerna betalas i december.', '工资在十二月发。'],
    ['Spara till december, så räcker det.', '存到十二月就够了。'],
  ]), 2451),
  freq(noun('måltid', 'en', '一餐；进餐时间', 'meal', 'måltiden', 'måltider', 'måltiderna', [
    ['Vi äter tre måltider om dagen.', '我们一天吃三餐。'],
    ['Måltiden varade en timme.', '这一餐持续了一个小时。'],
    ['Efter måltiden gick hon ut.', '吃完饭她出去了。'],
    ['Sitt kvar tills måltiden är slut.', '坐到这餐结束。'],
  ]), 2452, c(
    [
      ['mål', '一餐；目标'],
      ['tid', '时间'],
    ],
    '吃饭的那个时间，就是一餐、进餐时间。',
  )),
  freq(adj('framtida', '将来的；未来的', 'future', 'framtida', 'framtida', [
    ['Hon är en framtida stjärna.', '她是一颗未来的明星。'],
    ['Ett framtida möte bokades in.', '约好了一次将来的会面。'],
    ['De framtida planerna är oklara.', '那些未来的计划还不清楚。'],
    ['Tänk på framtida generationer.', '想想未来的世代。'],
  ]), 2453, c(
    [
      ['framtid', '未来'],
      ['-a', '形容词词尾'],
    ],
    '由“未来”变成形容词，就是将来的。',
  )),
  freq(noun('legend', 'en', '传说；传奇人物', 'legend', 'legenden', 'legender', 'legenderna', [
    ['Det är en gammal legend.', '这是一个古老的传说。'],
    ['Legenden lever kvar i byn.', '那个传说还在村里流传。'],
    ['Han blev en legend i sporten.', '他成了这项运动的传奇。'],
    ['Legenderna berättas vid elden.', '那些传说在火边讲。'],
  ]), 2454),
  freq(other('från och med', 'phrase', '从……起（含当天）', 'from … onwards / as of', [
    ['Från och med måndag är vi stängda.', '从星期一起我们关门。'],
    ['Priset gäller från och med idag.', '价格从今天起生效。'],
    ['Hon jobbar från och med augusti.', '她从八月起上班。'],
    ['Från och med nu talar vi svenska.', '从现在起我们说瑞典语。'],
  ]), 2455, c(
    [
      ['från', '从'],
      ['och', '和'],
      ['med', '随着；包括'],
    ],
    '“从某时起并且把该时算进去”，就是从……起。',
  )),
  freq(noun('docka', 'en', '玩偶；娃娃', 'doll', 'dockan', 'dockor', 'dockorna', [
    ['Barnet lekte med en docka.', '孩子在玩一个娃娃。'],
    ['Dockan saknar ett öga.', '那个娃娃缺了一只眼睛。'],
    ['Två dockor låg i sängen.', '床上躺着两个娃娃。'],
    ['Dockorna ska tvättas.', '那些娃娃要洗。'],
  ]), 2456),
  freq(noun('grind', 'en', '大门；栅栏门', 'gate', 'grinden', 'grindar', 'grindarna', [
    ['Stäng grinden efter dig.', '随手关上大门。'],
    ['Grinden gnisslar.', '那扇大门吱呀响。'],
    ['Det finns två grindar till gården.', '院子有两扇大门。'],
    ['Grindarna låstes klockan nio.', '那些大门九点上了锁。'],
  ]), 2457),
  freq(noun('manager', 'en', '经纪人；经理', 'manager', 'managern', null, null, [
    ['Bandet har en ny manager.', '乐队有了一位新经纪人。'],
    ['Managern ringer i kväll.', '那位经纪人今晚打电话。'],
    ['Hon arbetar som manager i stan.', '她在城里当经理。'],
    ['Fråga managern före konserten.', '演出前先问经纪人。'],
  ]), 2458),
  freq(verb('knacka', '敲', 'to knock', 'knackar', 'knackade', 'knackat', 'knacka', [
    ['Någon knackar på dörren.', '有人在敲门。'],
    ['Hon knackade tre gånger.', '她敲了三下。'],
    ['Han har knackat förgäves.', '他白敲了。'],
    ['Knacka innan du går in.', '进去前先敲门。'],
  ]), 2459),
  freq(adj('osynlig', '看不见的；无形的', 'invisible', 'osynligt', 'osynliga', [
    ['Gasen är osynlig.', '这种气体看不见。'],
    ['Ett osynligt staket fanns där.', '那里有一道看不见的栅栏。'],
    ['De osynliga skillnaderna märks ändå.', '那些看不见的差别还是能感觉到。'],
    ['Hon kände sig osynlig i rummet.', '她在房间里觉得自己像隐形了。'],
  ]), 2460, c(
    [
      ['o-', '否定前缀'],
      ['synlig', '看得见的'],
    ],
    '“看不见的”，就是无形的。',
  )),
  freq(other('vansinnigt', 'adv', '疯狂地；极其', 'insanely / extremely', [
    ['Det var vansinnigt dyrt.', '那贵得离谱。'],
    ['Hon körde vansinnigt fort.', '她开得疯狂地快。'],
    ['De skrattade vansinnigt.', '他们笑得不行。'],
    ['Jag är vansinnigt trött.', '我累极了。'],
  ]), 2461, c(
    [
      ['vansinnig', '疯狂的'],
      ['-t', '中性/副词词尾'],
    ],
    'vansinnig 是“疯的”，vansinnigt 就是疯狂地、极其。',
  )),
  freq(verb('vänja', '使习惯；适应', 'to accustom / to get used to', 'vänjer', 'vande', 'vant', 'vänj', [
    ['Man vänjer sig.', '人会习惯的。'],
    ['Han vande sig vid kylan.', '他习惯了寒冷。'],
    ['Hästen har vant sig vid sadeln.', '马已经习惯了马鞍。'],
    ['Vänj barnet vid rutinerna.', '让孩子习惯这些作息。'],
  ]), 2462),
  freq(noun('kreditkort', 'ett', '信用卡', 'credit card', 'kreditkortet', 'kreditkort', 'kreditkorten', [
    ['Hon betalade med kreditkort.', '她用信用卡付了。'],
    ['Kreditkortet ligger i plånboken.', '信用卡在钱包里。'],
    ['Två kreditkort saknas.', '少了两张信用卡。'],
    ['Kreditkorten ska spärras.', '那些信用卡要挂失。'],
  ]), 2463, c(
    [
      ['kredit', '信贷'],
      ['kort', '卡'],
    ],
    '用来透支付款的卡，就是信用卡。',
  )),
  freq(noun('politiker', 'en', '政治家；从政者', 'politician', 'politikern', 'politiker', 'politikerna', [
    ['En politiker talade på torget.', '一位从政者在广场上讲话。'],
    ['Politikern svarade kort.', '那位政治家回答得很短。'],
    ['Flera politiker kom till mötet.', '好几位从政者来开会。'],
    ['Politikerna röstade på kvällen.', '那些从政者晚上投票了。'],
  ]), 2464, c([['politik', '政治'], ['-er', '从事的人']], '从事政治的人，就是政治家、从政者。')),
  freq(adj('osäker', '不确定的；没把握的；缺乏自信的', 'uncertain / unsure / insecure', 'osäkert', 'osäkra', [
    ['Utfallet är fortfarande osäkert.', '结果仍然不确定。'],
    ['Ett osäkert svar kom tillbaka.', '回来的是一个没把握的答复。'],
    ['De osäkra stegen hördes i hallen.', '门厅里传来那些迟疑的脚步。'],
    ['Var inte osäker på dig själv.', '别对自己没信心。'],
  ]), 2465, c(
    [
      ['o-', '不'],
      ['säker', '确定的；有把握的'],
    ],
    '不是确定的，就是不确定的、没把握的。',
  )),
  freq(noun('tavla', 'en', '画；牌子；大错（口）', 'painting / board / blunder (colloquial)', 'tavlan', 'tavlor', 'tavlorna', [
    ['En tavla hänger på väggen.', '墙上挂着一幅画。'],
    ['Tavlan är målad i olja.', '那幅画是油画。'],
    ['Hon köpte två tavlor.', '她买了两幅画。'],
    ['Tavlorna ska dammas.', '那些画该掸灰了。'],
  ]), 2466),
  freq(verb('förhålla sig', '对待；保持（某种态度）', 'to relate (to) / to conduct oneself', 'förhåller sig', 'förhöll sig', 'förhållit sig', 'förhåll dig', [
    ['Hon förhåller sig lugn.', '她保持冷静。'],
    ['De förhöll sig neutrala.', '他们当时保持中立。'],
    ['Hur har du förhållit dig till det?', '你对此是怎么处理的？'],
    ['Förhåll dig sakligt.', '请就事论事。'],
  ]), 2467, c(
    [
      ['för-', '构词前缀'],
      ['hålla', '保持'],
      ['sig', '自己'],
    ],
    '“把自己保持成某种样子”，合起来就是对待、保持某种态度。',
  )),
  freq(noun('kant', 'en', '边；边缘', 'edge / border', 'kanten', 'kanter', 'kanterna', [
    ['Sitt inte på kanten.', '别坐在边上。'],
    ['Kanten är vass.', '那条边很锋利。'],
    ['Skivan har tre kanter.', '这块板有三条边。'],
    ['Kanterna ska slipas.', '那些边要打磨。'],
  ]), 2468),
  freq(noun('efternamn', 'ett', '姓', 'surname / last name', 'efternamnet', 'efternamn', 'efternamnen', [
    ['Vad är ditt efternamn?', '你姓什么？'],
    ['Efternamnet står på dörren.', '姓写在门上。'],
    ['Två efternamn finns på listan.', '名单上有两个姓。'],
    ['Efternamnen ändrades efter giftermålet.', '那些姓在婚后改了。'],
  ]), 2469, c(
    [
      ['efter', '在……之后'],
      ['namn', '名字'],
    ],
    '名字后面的那部分，就是姓。',
  )),
  freq(noun('lapp', 'en', '纸条；补丁', 'slip of paper / patch', 'lappen', 'lappar', 'lapparna', [
    ['Hon skrev en lapp till mig.', '她给我写了张纸条。'],
    ['Lappen låg på bordet.', '那张纸条在桌上。'],
    ['Byxorna har två lappar.', '裤子上有两块补丁。'],
    ['Lapparna blåste iväg.', '那些纸条被吹走了。'],
  ]), 2470),
  freq(verb('återkomma', '回来；再谈；复发', 'to come back / to return (to a topic)', 'återkommer', 'återkom', 'återkommit', 'återkom', [
    ['Jag återkommer i morgon.', '我明天再来。'],
    ['Hon återkom till ämnet senare.', '她后来又回到这个话题。'],
    ['Febern har återkommit.', '烧又回来了。'],
    ['Återkom när du vet mer.', '你知道更多以后再来。'],
  ]), 2471, c(
    [
      ['åter', '再；回'],
      ['komma', '来'],
    ],
    '“再过来”，合起来就是回来、再谈。',
  )),
  freq(noun('stuga', 'en', '小屋；小木屋', 'cottage / cabin', 'stugan', 'stugor', 'stugorna', [
    ['Vi hyr en stuga vid sjön.', '我们在湖边租了一间小屋。'],
    ['Stugan är röd med vita knutar.', '那间小屋是红墙白角。'],
    ['Två stugor står tomma i vinter.', '两间小屋冬天空着。'],
    ['Lås stugan innan ni åker.', '走之前把小屋锁上。'],
  ]), 2472),
  freq(other('medvetet', 'adv', '故意地；有意识地', 'deliberately / consciously', [
    ['Hon sa det medvetet.', '她是故意那么说的。'],
    ['Han undvek frågan medvetet.', '他有意避开这个问题。'],
    ['De valde medvetet ett billigare alternativ.', '他们有意识地选了更便宜的方案。'],
    ['Felet gjordes inte medvetet.', '这个错不是故意犯的。'],
  ]), 2473, c(
    [
      ['medveten', '有意识的；故意的'],
      ['-t', '中性/副词词尾'],
    ],
    'medveten 是“有意识的”，medvetet 就是故意地、有意识地。',
  )),
  freq(noun('lån', 'ett', '贷款；借用', 'loan', 'lånet', 'lån', 'lånen', [
    ['Hon tog ett lån till bilen.', '她为买车贷了款。'],
    ['Lånet ska betalas i maj.', '这笔贷款五月要还。'],
    ['Två lån är redan klara.', '两笔贷款已经办好了。'],
    ['Lånen blev dyra i år.', '那些贷款今年变贵了。'],
  ]), 2474),
  freq(noun('trut', 'en', '喙；嘴（口）；鸥', 'beak / gob (colloquial) / large gull', 'truten', 'trutar', 'trutarna', [
    ['Ankan har en gul trut.', '这只鸭子有黄色的喙。'],
    ['Håll truten!', '闭上嘴！'],
    ['Två trutar skrek över vattnet.', '两只鸥在水面上叫。'],
    ['Trutarna stal korven.', '那些鸥把香肠偷走了。'],
  ]), 2475),
  freq(verb('uttrycka', '表达；表述', 'to express', 'uttrycker', 'uttryckte', 'uttryckt', 'uttryck', [
    ['Hon uttrycker sig tydligt.', '她表达得很清楚。'],
    ['Han uttryckte tack till oss.', '他向我们表示了感谢。'],
    ['Det har uttryckts förut.', '这以前已经表达过。'],
    ['Uttryck det med egna ord.', '用自己的话表达。'],
  ]), 2476, c(
    [
      ['ut', '出来'],
      ['trycka', '压；按'],
    ],
    '把意思压出来，合起来就是表达。',
  )),
  freq(noun('flykt', 'en', '逃跑；飞走', 'escape / flight', 'flykten', 'flykter', 'flykterna', [
    ['Tjuven tog till flykt.', '小偷逃走了。'],
    ['Flykten lyckades i natt.', '这次逃跑夜里成功了。'],
    ['Fåglarna gör långa flykter.', '这些鸟做长途飞行。'],
    ['Flykterna över havet är farliga.', '那些飞越海面的行程很危险。'],
  ]), 2477, c(
    [
      ['fly', '逃；飞'],
      ['-kt', '行为名词词尾'],
    ],
    '由“逃、飞”变成名词，就是逃跑、飞走。',
  )),
  freq(other('sådan här', 'phrase', '这样的；这种', 'this kind of / like this', [
    ['Jag vill ha en sådan här väska.', '我想要一只这样的包。'],
    ['Ett sådant här fel är vanligt.', '这种错误很常见。'],
    ['Sådana här dagar är sällsynta.', '这样的日子很少见。'],
    ['Hur gör man en sådan här sås?', '这种酱怎么做？'],
  ]), 2478, c(
    [
      ['sådan', '这样的'],
      ['här', '这里；眼前的'],
    ],
    '“眼前的这样一种”，就是这样的、这种。',
  )),
  freq(adj('kontant', '现金的；用现金', 'cash / in cash', 'kontant', 'kontanta', [
    ['Hon betalade kontant.', '她付了现金。'],
    ['Ett kontant belopp lades fram.', '一笔现金被拿了出来。'],
    ['De kontanta köpen minskar.', '那些现金购买在减少。'],
    ['Har du kontant på dig?', '你身上有现金吗？'],
  ]), 2479),
  freq(noun('feber', 'en', '发烧；热度', 'fever', 'febern', 'febrar', 'febrarna', [
    ['Barnet har feber i dag.', '孩子今天发烧。'],
    ['Febern gick ner i natt.', '烧夜里退了。'],
    ['Hon har haft flera febrar i år.', '她今年发过几次烧。'],
    ['Mät febern före frukost.', '早饭前量一下体温。'],
  ]), 2480),
  freq(adj('sjunde', '第七的', 'seventh', 'sjunde', 'sjunde', [
    ['Det är den sjunde boken i serien.', '这是系列里的第七本书。'],
    ['Hon bor på sjunde våningen.', '她住在七楼。'],
    ['Den sjunde dagen var vi hemma.', '第七天我们在家。'],
    ['Han kom på sjunde plats.', '他得了第七名。'],
  ]), 2481),
  freq(adj('praktisk', '实用的；实际的；动手能力强的', 'practical / handy', 'praktiskt', 'praktiska', [
    ['Det är en praktisk väska.', '这是一只实用的包。'],
    ['Ett praktiskt råd hjälpte oss.', '一条实际的建议帮了我们。'],
    ['De praktiska detaljerna saknas än.', '那些实际细节还没有。'],
    ['Hon är praktisk hemma.', '她在家很会动手。'],
  ]), 2482),
  freq(noun('bi', 'ett', '蜜蜂', 'bee', 'biet', 'bin', 'bina', [
    ['Ett bi landade på blomman.', '一只蜜蜂落在花上。'],
    ['Biet stack honom i handen.', '那只蜜蜂蜇了他的手。'],
    ['Det finns många bin i trädgården.', '花园里有很多蜜蜂。'],
    ['Bina samlar honung.', '那些蜜蜂在采蜜。'],
  ]), 2483),
  freq(verb('flyta', '漂浮；流动', 'to float / to flow', 'flyter', 'flöt', 'flutit', 'flyt', [
    ['Trä flyter på vatten.', '木头浮在水上。'],
    ['Båten flöt iväg.', '船漂走了。'],
    ['Oljan har flutit ut.', '油已经漂散开了。'],
    ['Flyt med strömmen en stund.', '先顺着水流漂一会儿。'],
  ]), 2484),
  freq(noun('center', 'ett', '中心；活动中心', 'centre', 'centret', null, null, [
    ['Vi möts vid centret.', '我们在中心见面。'],
    ['Centret stänger klockan åtta.', '这个中心八点关门。'],
    ['Ett nytt center öppnar i vår.', '一个新中心春天开业。'],
    ['Gå till centret efter jobbet.', '下班后去中心。'],
  ]), 2485),
  freq(noun('dagbok', 'en', '日记', 'diary', 'dagboken', 'dagböcker', 'dagböckerna', [
    ['Hon skriver dagbok varje kväll.', '她每天晚上写日记。'],
    ['Dagboken ligger i lådan.', '日记本在抽屉里。'],
    ['Två dagböcker fanns i kartongen.', '纸箱里有两本日记。'],
    ['Läs inte dagboken utan lov.', '未经允许别看日记。'],
  ]), 2486, c(
    [
      ['dag', '天'],
      ['bok', '书'],
    ],
    '按天写的书，就是日记。',
  )),
  freq(noun('åklagare', 'en', '检察官', 'prosecutor', 'åklagaren', 'åklagare', 'åklagarna', [
    ['Åklagaren yrkade på fängelse.', '检察官要求判刑。'],
    ['En åklagare ledde målet.', '一位检察官主办这个案子。'],
    ['Två åklagare samarbetade.', '两位检察官在合作。'],
    ['Åklagarna överklagade domen.', '那些检察官对判决提出上诉。'],
  ]), 2487, c(
    [
      ['åklaga', '起诉'],
      ['-are', '做这事的人'],
    ],
    '“做起诉这件事的人”，就是检察官。',
  )),
  freq(noun('svaghet', 'en', '弱点；软弱', 'weakness', 'svagheten', 'svagheter', 'svagheterna', [
    ['Choklad är hennes svaghet.', '巧克力是她的弱点。'],
    ['Svagheten syntes i rösten.', '声音里听得出软弱。'],
    ['Alla har sina svagheter.', '每个人都有自己的弱点。'],
    ['Svagheterna måste rättas till.', '那些弱点必须改掉。'],
  ]), 2488, c(
    [
      ['svag', '弱的'],
      ['-het', '抽象名词后缀'],
    ],
    '“弱的状态”，就是弱点、软弱。',
  )),
  freq(verb('ersätta', '替换；赔偿', 'to replace / to compensate', 'ersätter', 'ersatte', 'ersatt', 'ersätt', [
    ['Vi ersätter den trasiga lampan.', '我们更换坏掉的灯。'],
    ['Hon ersatte chefen i ett år.', '她顶替了老板一年。'],
    ['Skadan har ersatts av försäkringen.', '损失已经由保险赔偿。'],
    ['Ersätt inte socker med mer socker.', '别用更多糖来代替糖。'],
  ]), 2489, c(
    [
      ['er-', '构词前缀'],
      ['sätta', '放'],
    ],
    '“放到原来的位置上顶替”，就是替换，也指赔偿。',
  )),
  freq(verb('gottgöra', '弥补；赔偿', 'to make up for / to compensate', 'gottgör', 'gottgjorde', 'gottgjort', 'gottgör', [
    ['Jag gottgör skadan.', '我赔偿损失。'],
    ['Hon gottgjorde honom med blommor.', '她用花向他赔罪。'],
    ['Felet har gottgjorts.', '那个过错已经弥补了。'],
    ['Gottgör vad du har ställt till.', '把你惹的事补上。'],
  ]), 2490, c(
    [
      ['gott', '好的（中性）'],
      ['göra', '做'],
    ],
    '“把事情做好、补好”，合起来就是弥补、赔偿。',
  )),
  freq(noun('tröst', 'en', '安慰', 'comfort / consolation', 'trösten', 'tröster', 'trösterna', [
    ['Det var en tröst att höra.', '听到这个是个安慰。'],
    ['Trösten kom för sent.', '安慰来得太晚了。'],
    ['Små tröster räcker ibland.', '小小的安慰有时也够。'],
    ['Trösterna hjälpte inte mycket.', '那些安慰没帮上多大忙。'],
  ]), 2491),
  freq(other('härnäst', 'adv', '接下来；下一步', 'next', [
    ['Vad gör vi härnäst?', '我们接下来做什么？'],
    ['Härnäst tar vi en paus.', '接下来我们休息一下。'],
    ['Hon talar härnäst.', '接下来是她发言。'],
    ['Härnäst kommer kaffet.', '下一步上咖啡。'],
  ]), 2492, c(
    [
      ['här', '这里；现在这点'],
      ['näst', '下一个'],
    ],
    '“这里的下一个”，就是接下来、下一步。',
  )),
  freq(noun('jägare', 'en', '猎人', 'hunter', 'jägaren', 'jägare', 'jägarna', [
    ['En jägare gick genom skogen.', '一名猎人走过森林。'],
    ['Jägaren bar ett gevär.', '那名猎人扛着枪。'],
    ['Två jägare väntade vid passet.', '两名猎人在山口等着。'],
    ['Jägarna kom hem före mörkret.', '那些猎人天黑前回家了。'],
  ]), 2493, c([['jaga', '打猎'], ['-are', '做这事的人']], '打猎的人，就是猎人。')),
  freq(verb('återgå', '回到；恢复', 'to return (to a state or topic)', 'återgår', 'återgick', 'återgått', 'återgå', [
    ['Vi återgår till arbetet.', '我们回到工作上。'],
    ['Allt återgick till det vanliga.', '一切又回到平常。'],
    ['Hon har återgått till jobbet.', '她已经回到工作岗位。'],
    ['Återgå till ämnet.', '回到正题。'],
  ]), 2494, c(
    [
      ['åter', '再；回'],
      ['gå', '走'],
    ],
    '“走回去”，合起来就是回到、恢复。',
  )),
  freq(other('troligtvis', 'adv', '很可能；大概', 'probably / most likely', [
    ['Hon kommer troligtvis sent.', '她很可能迟到。'],
    ['Troligtvis regnar det i morgon.', '明天大概会下雨。'],
    ['Det blir troligtvis dyrt.', '这很可能很贵。'],
    ['Troligtvis har han redan ätit.', '他大概已经吃过了。'],
  ]), 2495, c(
    [
      ['trolig', '很可能的'],
      ['-t', '中性词尾'],
      ['-vis', '以……的方式'],
    ],
    '“以很可能的方式”，就是很可能、大概。',
  )),
  freq(other('fult', 'adv', '难看地；不光彩地', 'uglily / unfairly', [
    ['Huset ser fult ut.', '这房子看起来难看。'],
    ['Han spelade fult.', '他踢得很脏／耍阴招。'],
    ['Det var fult gjort.', '那样做不光彩。'],
    ['Måla inte fult med flit.', '别故意画难看。'],
  ]), 2496, c(
    [
      ['ful', '难看的；不光彩的'],
      ['-t', '中性/副词词尾'],
    ],
    'ful 是“难看的”，fult 就是难看地，也指做事不光彩。',
  )),
  freq(noun('valv', 'ett', '拱顶；拱门', 'vault / arch', 'valvet', 'valv', 'valven', [
    ['Kyrkan har ett högt valv.', '教堂有高高的拱顶。'],
    ['Valvet är av sten.', '那个拱顶是石头的。'],
    ['Två valv leder in till hallen.', '两道拱门通向大厅。'],
    ['Valven målades blå.', '那些拱顶被涂成蓝色。'],
  ]), 2497),
  freq(noun('oro', 'en', '担忧；不安', 'anxiety / concern', 'oron', null, null, [
    ['Hon kände oro inför resan.', '她对这次旅行感到担忧。'],
    ['Oron växte under natten.', '不安在夜里加重了。'],
    ['Låt inte oron styra beslutet.', '别让担忧左右决定。'],
    ['Sprid inte oro i gruppen.', '别在组里散布不安。'],
  ]), 2498, c(
    [
      ['o-', '不'],
      ['ro', '安宁'],
    ],
    '没有安宁，合起来就是担忧、不安。',
  )),
  freq(other('ständigt', 'adv', '不断地；始终', 'constantly / continually', [
    ['Det regnar ständigt.', '雨下个不停。'],
    ['Hon klagar ständigt.', '她不断地抱怨。'],
    ['Telefonen ringer ständigt.', '电话始终在响。'],
    ['Vi måste ständigt öva.', '我们必须不断地练习。'],
  ]), 2499, c(
    [
      ['ständig', '不断的；经常的'],
      ['-t', '中性/副词词尾'],
    ],
    'ständig 是“不断的”，ständigt 就是不断地、始终。',
  )),
  freq(verb('förfölja', '追赶；迫害', 'to pursue / to persecute', 'förföljer', 'förföljde', 'förföljt', 'förfölj', [
    ['Polisen förföljer tjuven.', '警察在追小偷。'],
    ['De förföljde honom hela vägen.', '他们一路追着他。'],
    ['Minnet har förföljt henne.', '那段记忆一直缠着她。'],
    ['Förfölj inte barnen.', '别追着孩子们不放。'],
  ]), 2500, c(
    [
      ['för-', '构词前缀'],
      ['följa', '跟随'],
    ],
    '“紧跟着不放”，合起来就是追赶、迫害。',
  )),
]

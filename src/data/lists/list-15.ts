import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 701–750. Closed-class words: primary POS is the high-frequency use, not every sense in the book. */
export const list15: Word[] = [
  freq(other('å', 'other', '啊；哦（惊讶／高兴／生气）；（固定说法）在', 'oh / on (in fixed phrases)', [
    ['Å, vad fint!', '啊，真好看！'],
    ['Å nej, inte nu.', '啊不，现在不行。'],
    ['Å ena sidan är det billigt.', '一方面这很便宜。'],
    ['Å andra sidan tar det tid.', '另一方面这很花时间。'],
  ]), 701),
  freq(adj('kallad', '被称为的；叫做……的', 'called', 'kallat', 'kallade', [
    ['En man kallad Erik bor här.', '一个叫 Erik 的男人住在这里。'],
    ['Ett så kallat undantag.', '一个所谓的例外。'],
    ['De kallade experterna kom sent.', '那些被请来的专家来晚了。'],
    ['Hon är kallad till mötet.', '她被叫去开会。'],
  ]), 702),
  freq(noun('kontor', 'ett', '办公室', 'office', 'kontoret', 'kontor', 'kontoren', [
    ['Hon jobbar på ett kontor.', '她在一间办公室工作。'],
    ['Kontoret är stängt idag.', '办公室今天关门。'],
    ['Två kontor ligger i samma hus.', '两间办公室在同一栋楼里。'],
    ['Kontoren öppnar klockan åtta.', '那些办公室八点开门。'],
  ]), 703),
  freq(other('skönt', 'adv', '舒服；美好', 'comfortably / pleasantly', [
    ['Det är skönt att vila.', '休息真舒服。'],
    ['Vad skönt att du kom!', '你来了真好！'],
    ['Hon sjunger skönt.', '她唱得很好听。'],
    ['Det kändes skönt efter duschen.', '洗完澡感觉很舒服。'],
  ]), 704),
  freq(other('knappt', 'adv', '几乎不；刚不到', 'hardly / slightly less than', [
    ['Jag har knappt tid.', '我几乎没有时间。'],
    ['Hon hade knappt ätit.', '她当时几乎没吃东西。'],
    ['Knappt en timme senare kom han.', '刚不到一小时他就来了。'],
    ['Vi känner knappt varandra.', '我们几乎不认识。'],
  ]), 705),
  freq(other('varenda', 'pron', '每一个（口）', 'every (informal)', [
    ['Hon läste varenda sida.', '她每一页都读了。'],
    ['Vartenda fönster var stängt.', '每一扇窗都关着。'],
    ['Varenda dag tränar han.', '他每一天都训练。'],
    ['Varenda stol är upptagen.', '每一把椅子都有人。'],
  ]), 706),
  freq(adj('utmärkt', '出色的；极好的', 'excellent', 'utmärkt', 'utmärkta', [
    ['Han är en utmärkt kock.', '他是一位出色的厨师。'],
    ['Ett utmärkt förslag.', '一个极好的建议。'],
    ['De utmärkta idéerna hjälpte.', '那些出色的主意帮了忙。'],
    ['Det går utmärkt.', '进展好极了。'],
  ]), 707),
  freq(adj('stackars', '可怜的（表示同情）', 'poor (expressing sympathy)', 'stackars', 'stackars', [
    ['Stackars barn, kom hit.', '可怜的孩子，过来。'],
    ['Det stackars djuret frös.', '那只可怜的动物冻着了。'],
    ['Stackars du som måste vänta.', '你还得等，真够可怜的。'],
    ['De stackars gästerna blev blöta.', '那些可怜的客人淋湿了。'],
  ]), 708),
  freq(verb('ändra', '改变；修改', 'to change / to alter', 'ändrar', 'ändrade', 'ändrat', 'ändra', [
    ['Vi måste ändra tiden.', '我们必须改时间。'],
    ['Hon ändrade svaret.', '她改了那个回答。'],
    ['De har ändrat planen.', '他们已经改了计划。'],
    ['Ändra inte namnet.', '别改名字。'],
  ]), 709),
  freq(noun('mördare', 'en', '杀人犯；凶手', 'murderer', 'mördaren', 'mördare', 'mördarna', [
    ['Polisen sökte mördaren.', '警察在找那个凶手。'],
    ['En mördare greps i natt.', '一名杀人犯夜里被抓住了。'],
    ['Två mördare rymde.', '两名杀人犯逃跑了。'],
    ['Mördarna greps senare.', '那些凶手后来被抓住了。'],
  ]), 710),
  freq(adj('jättebra', '非常好；棒极了（口）', 'excellent / great (informal)', 'jättebra', 'jättebra', [
    ['Filmen var jättebra.', '这部电影棒极了。'],
    ['Ett jättebra jobb.', '一份非常好的工作。'],
    ['De jättebra nyheterna kom sent.', '那些特别好的消息来得很晚。'],
    ['Vad jättebra att du kom!', '你来了真是太好了！'],
  ]), 711, c(
    [
      ['jätte-', '非常（口）'],
      ['bra', '好的'],
    ],
    '前缀 jätte- 加强语气，合起来就是非常好。',
  )),
  freq(noun('pistol', 'en', '手枪', 'pistol', 'pistolen', 'pistoler', 'pistolerna', [
    ['Han har en pistol.', '他有一把手枪。'],
    ['Pistolen ligger i lådan.', '那把手枪在抽屉里。'],
    ['Två pistoler fanns där.', '那里有两把手枪。'],
    ['Lägg undan pistolen.', '把手枪收起来。'],
  ]), 712),
  freq(noun('flickvän', 'en', '女朋友', 'girlfriend', 'flickvännen', 'flickvänner', 'flickvännerna', [
    ['Hon är min flickvän.', '她是我的女朋友。'],
    ['Flickvännen väntar utanför.', '女朋友在外面等。'],
    ['Han har haft två flickvänner.', '他有过两个女朋友。'],
    ['Han träffade sin flickvän i parken.', '他在公园见了女朋友。'],
  ]), 713, c(
    [
      ['flicka', '女孩'],
      ['vän', '朋友'],
    ],
    '字面是“女孩朋友”，合起来就是女朋友。',
  )),
  freq(noun('åk', 'ett', '年级（årskurs 的缩写）；（滑雪等）一趟；车（口）', 'grade / run / vehicle (informal)', 'åket', 'åk', 'åken', [
    ['Hon går i åk fem.', '她上五年级。'],
    ['Ett åk till, tack.', '再来一趟，谢谢。'],
    ['Åket var snabbt.', '这一趟很快。'],
    ['Vi tog två åk i backen.', '我们在坡上滑了两趟。'],
  ]), 714),
  freq(other('någonstans', 'adv', '某处；在某个地方', 'somewhere / anywhere', [
    ['Nyckeln ligger någonstans.', '钥匙在某个地方。'],
    ['Vi måste bo någonstans.', '我们总得住个地方。'],
    ['Hon åkte någonstans i går.', '她昨天去了某个地方。'],
    ['Finns det en toalett någonstans?', '附近有厕所吗？'],
  ]), 715, c(
    [
      ['någon', '某个'],
      ['stans', '地方'],
    ],
    '字面是“某个地方”，合起来就是某处。',
  )),
  freq(adj('äkta', '真正的；真的；合法婚姻的', 'authentic / real / lawfully wedded', 'äkta', 'äkta', [
    ['Ringen är äkta.', '这枚戒指是真的。'],
    ['Ett äkta intresse.', '一份真正的兴趣。'],
    ['De är äkta makar.', '他们是合法夫妻。'],
    ['Hon visade äkta glädje.', '她表现出真心的高兴。'],
  ]), 716),
  freq(adj('fantastisk', '极好的；奇妙的', 'fantastic', 'fantastiskt', 'fantastiska', [
    ['Vilken fantastisk utsikt!', '多好的景色！'],
    ['Ett fantastiskt väder.', '好极了的天气。'],
    ['De fantastiska nyheterna kom sent.', '那些极好的消息来得很晚。'],
    ['Filmen var fantastisk.', '这部电影棒极了。'],
  ]), 717),
  freq(verb('pågå', '进行；持续', 'to be going on', 'pågår', 'pågick', 'pågått', 'pågå', [
    ['Mötet pågår fortfarande.', '会议还在进行。'],
    ['Bygget pågick hela sommaren.', '工程当时持续了整个夏天。'],
    ['Det har pågått i tre dagar.', '这已经持续了三天。'],
    ['Arbetet får pågå till kvällen.', '工作可以进行到晚上。'],
  ]), 718, c(
    [
      ['på', '在'],
      ['gå', '走'],
    ],
    '字面是“进行着”，合起来就是正在进行。',
  )),
  freq(noun('överste', 'en', '上校', 'colonel', 'översten', 'överstar', 'överstarna', [
    ['Översten kom till mötet.', '上校来开会了。'],
    ['Hon är överste nu.', '她现在是上校。'],
    ['Två överstar satt där.', '两位上校坐在那里。'],
    ['Överste Berg väntar.', 'Berg 上校在等。'],
  ]), 719),
  freq(verb('lova', '答应；许诺', 'to promise', 'lovar', 'lovade', 'lovat', 'lova', [
    ['Jag lovar att ringa.', '我答应打电话。'],
    ['Hon lovade att hjälpa.', '她答应帮忙。'],
    ['Han har lovat det länge.', '他答应这件事已经很久了。'],
    ['Lova inte för mycket.', '别许太多诺。'],
  ]), 720),
  freq(noun('skål', 'en', '碗；（祝酒）干杯', 'bowl / cheers', 'skålen', 'skålar', 'skålarna', [
    ['Ställ skålen på bordet.', '把碗放到桌上。'],
    ['Skålen är tom.', '碗是空的。'],
    ['Vi har tre skålar.', '我们有三只碗。'],
    ['Skål, så dricker vi!', '干杯，咱们喝！'],
  ]), 721),
  freq(verb('svära', '骂人；说脏话', 'to curse / to swear', 'svär', 'svor', 'svurit', 'svär', [
    ['Han svär ofta.', '他经常骂人。'],
    ['Hon svor tyst.', '她当时小声骂了句。'],
    ['Jag har svurit för mycket idag.', '我今天脏话骂得太多了。'],
    ['Svär inte här.', '别在这儿骂人。'],
  ]), 722),
  freq(verb('flyga', '飞；坐飞机', 'to fly', 'flyger', 'flög', 'flugit', 'flyg', [
    ['Fågeln flyger högt.', '鸟飞得很高。'],
    ['Vi flög till Stockholm.', '我们坐飞机去了斯德哥尔摩。'],
    ['Har du flugit förut?', '你以前坐过飞机吗？'],
    ['Flyg inte så lågt.', '别飞那么低。'],
  ]), 723),
  freq(verb('tillhöra', '属于', 'to belong to', 'tillhör', 'tillhörde', 'tillhört', 'tillhöra', [
    ['Nyckeln tillhör henne.', '这把钥匙是她的。'],
    ['Huset tillhörde staden.', '这栋房子当时属于城市。'],
    ['De har tillhört klubben länge.', '他们属于这个俱乐部已经很久了。'],
    ['Den tillhör inte dig.', '那不是你的。'],
  ]), 724, c(
    [
      ['till', '到'],
      ['höra', '属于／听'],
    ],
    '字面是“归属于”，合起来就是属于。',
  )),
  freq(other('fullt', 'adv', '完全地；充分地', 'fully / completely', [
    ['Det är fullt möjligt.', '这完全可能。'],
    ['Hon är fullt upptagen idag.', '她今天完全脱不开身。'],
    ['Vi är fullt överens.', '我们完全同意。'],
    ['Ta det på fullt allvar.', '把这事当真。'],
  ]), 725),
  freq(noun('text', 'en', '文本；歌词', 'text / lyrics', 'texten', 'texter', 'texterna', [
    ['Jag läser en text.', '我在读一篇文本。'],
    ['Texten är lätt.', '这篇文本不难。'],
    ['Två texter till i dag.', '今天还有两篇文本。'],
    ['Skriv texten igen.', '把这篇文本再写一遍。'],
  ]), 726),
  freq(other('allvarligt', 'adv', '严肃地；严重地', 'seriously', [
    ['Hon är allvarligt sjuk.', '她病得很重。'],
    ['Han såg allvarligt på mig.', '他严肃地看着我。'],
    ['Ta det inte så allvarligt.', '别那么当真。'],
    ['De pratar allvarligt nu.', '他们现在谈得很严肃。'],
  ]), 727),
  freq(adj('upptagen', '被占用的；忙碌的', 'occupied / busy', 'upptaget', 'upptagna', [
    ['Jag är upptagen nu.', '我现在有事。'],
    ['Stolen är upptagen.', '这个位子有人了。'],
    ['Ett upptaget nummer.', '一个占线的号码。'],
    ['De upptagna stolarna är framme.', '那些有人坐的椅子在前面。'],
  ]), 728, c(
    [
      ['upp', '上'],
      ['tagen', '被拿的（ta 拿）'],
    ],
    '字面是“被占去的”，合起来就是被占用的、忙碌的。',
  )),
  freq(noun('jul', 'en', '圣诞节', 'Christmas', 'julen', 'jular', 'jularna', [
    ['God jul!', '圣诞快乐！'],
    ['Julen kommer snart.', '圣诞节快到了。'],
    ['Vi har firat många jular här.', '我们在这儿过过好多个圣诞节。'],
    ['Efter jul åker vi.', '圣诞节过后我们就走。'],
  ]), 729),
  freq(noun('glas', 'ett', '玻璃；杯子', 'glass', 'glaset', 'glas', 'glasen', [
    ['Ett glas vatten, tack.', '请来一杯水。'],
    ['Glaset är tomt.', '杯子是空的。'],
    ['Hon köpte tre glas.', '她买了三个杯子。'],
    ['Glasen står i skåpet.', '那些杯子在柜子里。'],
  ]), 730),
  freq(verb('leda', '带领；通向；主持；领先', 'to lead', 'leder', 'ledde', 'lett', 'led', [
    ['Hon leder mötet.', '她主持这个会议。'],
    ['Vägen ledde till sjön.', '那条路通向湖边。'],
    ['Det har lett till problem.', '这已经引出了问题。'],
    ['Led honom hit.', '带他到这儿来。'],
  ]), 731),
  freq(noun('lunch', 'en', '午饭', 'lunch', 'lunchen', 'luncher', 'luncherna', [
    ['Vi äter lunch vid tolv.', '我们十二点吃午饭。'],
    ['Lunchen var god.', '午饭很好吃。'],
    ['Tre luncher i veckan räcker.', '一周三顿午饭就够了。'],
    ['Ska vi ta lunch?', '我们去吃午饭吗？'],
  ]), 732),
  freq(noun('möte', 'ett', '会面；会议', 'meeting', 'mötet', 'möten', 'mötena', [
    ['Vi har ett möte klockan tre.', '我们三点有个会。'],
    ['Mötet blev kort.', '会议很短。'],
    ['Två möten i veckan.', '一周两次会。'],
    ['Kom till mötet.', '来开会。'],
  ]), 733),
  freq(other('tusen', 'other', '一千', 'thousand', [
    ['Det kostar tusen kronor.', '这个要一千克朗。'],
    ['Tusen tack!', '非常感谢！'],
    ['Hon har tusen frågor.', '她有一千个问题。'],
    ['Vi är nästan tusen personer.', '我们快有一千人了。'],
  ]), 734),
  freq(noun('anledning', 'en', '原因；理由', 'reason / cause', 'anledningen', 'anledningar', 'anledningarna', [
    ['Av vilken anledning kom du?', '你因为什么原因来的？'],
    ['Anledningen är enkel.', '原因很简单。'],
    ['Hon hade flera anledningar.', '她有好几个理由。'],
    ['Det finns ingen anledning att stanna.', '没有理由留下。'],
  ]), 735),
  freq(noun('president', 'en', '总统', 'president', 'presidenten', 'presidenter', 'presidenterna', [
    ['Presidenten talar i kväll.', '总统今晚讲话。'],
    ['En ny president valdes.', '选出了一位新总统。'],
    ['Flera presidenter har bott där.', '好几位总统在那儿住过。'],
    ['Vem blir president?', '谁会当总统？'],
  ]), 736),
  freq(other('därifrån', 'adv', '从那里', 'from there', [
    ['Vi åker därifrån i morgon.', '我们明天从那里走。'],
    ['Hur långt är det därifrån?', '离那里有多远？'],
    ['Hon kom därifrån i går.', '她昨天从那里来。'],
    ['Gå därifrån.', '从那儿走开。'],
  ]), 737, c(
    [
      ['där', '那里'],
      ['ifrån', '从'],
    ],
    '从那里。',
  )),
  freq(verb('äga', '拥有', 'to own', 'äger', 'ägde', 'ägt', 'äga', [
    ['De äger huset.', '他们拥有这栋房子。'],
    ['Hon ägde en cykel då.', '她当时有一辆自行车。'],
    ['Har ni ägt den länge?', '你们拥有它很久了吗？'],
    ['Valet äger rum i maj.', '选举在五月举行。'],
  ]), 738),
  freq(noun('vila', 'en', '休息', 'rest', 'vilan', null, null, [
    ['Hon behöver vila.', '她需要休息。'],
    ['Vilan gjorde gott.', '这一歇很有用。'],
    ['Efter vilan gick vi ut.', '休息之后我们出去了。'],
    ['Ge mig lite vila.', '让我歇一会儿。'],
  ]), 739),
  freq(verb('lukta', '有气味；闻', 'to smell', 'luktar', 'luktade', 'luktat', 'lukta', [
    ['Det luktar kaffe.', '有咖啡味。'],
    ['Fisken luktade illa.', '那鱼当时闻起来臭。'],
    ['Har du luktat på blomman?', '你闻过这朵花吗？'],
    ['Lukta här.', '闻这儿。'],
  ]), 740),
  freq(noun('uppdrag', 'ett', '任务；委托', 'assignment / commission', 'uppdraget', 'uppdrag', 'uppdragen', [
    ['Jag har ett uppdrag åt dig.', '我有一项任务给你。'],
    ['Uppdraget är klart.', '这项任务完成了。'],
    ['Två uppdrag i veckan.', '一周两项任务。'],
    ['Uppdragen kom från chefen.', '那些任务是上司派的。'],
  ]), 741, c(
    [
      ['upp', '上'],
      ['drag', '拉（dra）'],
    ],
    '交派下来要去做的事，合起来就是任务、委托。',
  )),
  freq(verb('välja', '选择；选举', 'to choose / to elect', 'väljer', 'valde', 'valt', 'välj', [
    ['Jag väljer te.', '我选茶。'],
    ['De valde att stanna.', '他们当时选择留下。'],
    ['Har ni valt än?', '你们选好了吗？'],
    ['Välj en bok.', '选一本书。'],
  ]), 742),
  freq(other('nyss', 'adv', '刚才；刚刚', 'just now', [
    ['Hon gick nyss.', '她刚刚走。'],
    ['Jag såg honom nyss.', '我刚才看见他了。'],
    ['Nyss var det tyst.', '刚才还是安静的。'],
    ['De kom nyss hem.', '他们刚刚到家。'],
  ]), 743),
  freq(verb('fly', '逃跑；逃离', 'to flee', 'flyr', 'flydde', 'flytt', 'fly', [
    ['De flyr från stan.', '他们逃离这座城。'],
    ['Hon flydde i natt.', '她夜里逃走了。'],
    ['Han har flytt landet.', '他已经逃离了这个国家。'],
    ['Fly inte nu.', '现在别逃。'],
  ]), 744),
  freq(adj('halv', '一半的；半', 'half', 'halvt', 'halva', [
    ['En halv kopp räcker.', '半杯就够了。'],
    ['Ett halvt äpple ligger där.', '半个苹果在那里。'],
    ['De halva portionerna är billigare.', '那些半份的更便宜。'],
    ['Vi ses halv fem.', '我们四点半见。'],
  ]), 745),
  freq(verb('leka', '玩（儿童游戏）', 'to play', 'leker', 'lekte', 'lekt', 'lek', [
    ['Barnen leker ute.', '孩子们在外面玩。'],
    ['De lekte i parken.', '他们当时在公园玩。'],
    ['Har ni lekt färdigt?', '你们玩完了吗？'],
    ['Lek inte med maten.', '别拿食物玩。'],
  ]), 746),
  freq(verb('förstöra', '毁坏；破坏', 'to destroy / to spoil', 'förstör', 'förstörde', 'förstört', 'förstör', [
    ['Regnet förstörde festen.', '雨把聚会毁了。'],
    ['Cykeln är förstörd.', '自行车被弄坏了。'],
    ['De har förstört kartan.', '他们把地图弄坏了。'],
    ['Förstör inte leksaken.', '别把玩具弄坏。'],
  ]), 747, c(
    [
      ['för-', '构词前缀，使……'],
      ['störa', '打扰'],
    ],
    '把东西搞到不能用，合起来就是毁坏。',
  )),
  freq(adj('äldre', '较年长的；上了年纪的', 'older / elderly', 'äldre', 'äldre', [
    ['Min äldre bror bor här.', '我哥哥住在这里。'],
    ['Ett äldre hus står där.', '那里有一栋较老的房子。'],
    ['De äldre sitter framme.', '那些年长的人坐在前面。'],
    ['Hon är äldre än jag.', '她比我年长。'],
  ], { superlative: 'äldst' }), 748),
  freq(other('framåt', 'adv', '向前；往前', 'ahead / forward', [
    ['Gå framåt.', '往前走。'],
    ['Titta framåt.', '向前看。'],
    ['Arbetet går framåt.', '工作在往前推进。'],
    ['Hon är väldigt framåt.', '她很有闯劲。'],
  ]), 749, c(
    [
      ['fram', '向前'],
      ['åt', '向'],
    ],
    '向着前方，就是向前。',
  )),
  freq(noun('information', 'en', '信息；问讯处', 'information / information counter', 'informationen', 'informationer', 'informationerna', [
    ['Jag behöver mer information.', '我需要更多信息。'],
    ['Informationen kom sent.', '那条信息来得很晚。'],
    ['Be om mer information.', '再要一些信息。'],
    ['Gå till informationen.', '去问讯处。'],
  ]), 750),
]

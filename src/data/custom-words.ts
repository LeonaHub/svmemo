import { adj, noun, other, verb } from './builders'
import type { Compound, Word } from '../types/word'

function b1(word: Word, compound?: Compound): Word {
  return {
    ...word,
    cefr: 'B1',
    ...(compound ? { compound } : {}),
  }
}

function c(
  parts: readonly (readonly [string, string])[],
  together: string,
): Compound {
  return {
    parts: parts.map(([sv, zh]) => ({ sv, zh })),
    together,
  }
}

export const customWords: Word[] = [
  b1(adj('fruktansvärd', '可怕的；糟透的', 'terrible / dreadful', 'fruktansvärt', 'fruktansvärda', [
    ['Det var en fruktansvärd olycka.', '那是一场可怕的事故。'],
    ['Vädret är fruktansvärt idag.', '今天天气糟透了。'],
    ['De fruktansvärda nyheterna kom sent.', '那些可怕的消息来得很晚。'],
    ['Hon såg fruktansvärt trött ut.', '她看起来累极了。'],
  ]), c(
    [
      ['fruktan', '恐惧'],
      ['-s-', '连接音'],
      ['värd', '值得的'],
    ],
    '字面是“配得上恐惧的”，合起来就是可怕、糟透。',
  )),
  b1(noun('kula', 'en', '子弹；球', 'bullet / ball', 'kulan', 'kulor', 'kulorna', [
    ['En kula träffade väggen.', '一颗子弹打中了墙。'],
    ['Kulan ligger på golvet.', '那颗子弹／球在地板上。'],
    ['Det fanns tre kulor i vapnet.', '枪里有三发子弹。'],
    ['Kulorna är farliga.', '那些子弹很危险。'],
  ])),
  b1(adj('sur', '酸的；生气的', 'sour / grumpy', 'surt', 'sura', [
    ['Mjölken är sur.', '牛奶酸了。'],
    ['Ett surt äpple.', '一个酸苹果。'],
    ['Varför är du så sur?', '你为什么这么生气？'],
    ['De sura kommentarerna hjälper inte.', '那些酸溜溜的话没有帮助。'],
  ], { comparative: 'surare', superlative: 'surast' })),
  b1(noun('pund', 'ett', '磅；英镑', 'pound', 'pundet', 'pund', 'punden', [
    ['Det kostar tjugo pund.', '这个要二十英镑。'],
    ['Pundet är svagt idag.', '英镑今天走弱。'],
    ['Barnet väger sju pund.', '这孩子有七磅重。'],
    ['Hur många pund är det?', '这是多少英镑／磅？'],
  ])),
  b1(verb('fälla', '砍倒；打倒；判定有罪', 'to fell / to convict', 'fäller', 'fällde', 'fällt', 'fäll', [
    ['De ska fälla trädet.', '他们要砍倒那棵树。'],
    ['Han fällde motståndaren.', '他打倒了对手。'],
    ['Polisen har fällt tjuven.', '警察已经给小偷定了罪。'],
    ['Fäll inte träden här.', '别在这里砍树。'],
  ])),
  b1(adj('bekant', '熟悉的；认识的', 'familiar / known', 'bekant', 'bekanta', [
    ['Ansiktet är bekant.', '这张脸很熟。'],
    ['Ett bekant namn.', '一个熟悉的名字。'],
    ['Vi är redan bekanta.', '我们已经认识了。'],
    ['Hon är en gammal bekant.', '她是一个老熟人。'],
  ]), c(
    [
      ['be-', '构词前缀，做成某种状态'],
      ['känd', '被认识的（känna 认识）'],
    ],
    '“被认识的”，合起来就是熟悉的、认识的人。',
  )),
  b1(verb('märka', '注意到；做标记', 'to notice / to mark', 'märker', 'märkte', 'märkt', 'märk', [
    ['Jag märker att du är trött.', '我注意到你累了。'],
    ['Hon märkte felet direkt.', '她马上注意到了那个错误。'],
    ['Har du märkt skillnaden?', '你注意到区别了吗？'],
    ['Märk rutan med ditt namn.', '在格子上标上你的名字。'],
  ])),
  b1(adj('het', '烫的；热烈的', 'hot', 'hett', 'heta', [
    ['Kaffet är hett.', '咖啡很烫。'],
    ['En het sommar.', '一个炎热的夏天。'],
    ['De heta debatterna fortsätter.', '那些激烈的辩论还在继续。'],
    ['Det är för hett att dricka.', '太烫了，不能喝。'],
  ], { comparative: 'hetare', superlative: 'hetast' })),
  b1(other('ytterst', 'adv', '极其；最外面', 'extremely / outermost', [
    ['Jag är ytterst tacksam för din hjälp.', '我非常感谢你的帮助。'],
    ['Det är ytterst viktigt.', '这极其重要。'],
    ['Hon blev ytterst förvånad.', '她极为惊讶。'],
    ['Han satt ytterst i båten.', '他坐在船最边上。'],
  ]), c(
    [
      ['ytter / yttre', '更外面的'],
      ['-st', '最高级'],
    ],
    '“最外面”，也用来表示程度：极其。',
  )),
  b1(verb('linda', '缠；包扎', 'to wrap / to wind', 'lindar', 'lindade', 'lindat', 'linda', [
    ['Hon lindar en halsduk runt halsen.', '她把围巾绕在脖子上。'],
    ['Han lindade in paketet.', '他把包裹包了起来。'],
    ['Såret är redan lindat.', '伤口已经包扎好了。'],
    ['Linda in det försiktigt.', '小心地把它包起来。'],
  ])),
  b1(noun('mirakel', 'ett', '奇迹', 'miracle', 'miraklet', 'mirakel', 'miraklen', [
    ['Det var ett mirakel att hon överlevde.', '她能活下来真是个奇迹。'],
    ['Miraklet hände i natt.', '奇迹发生在夜里。'],
    ['Jag tror inte på mirakel.', '我不相信奇迹。'],
    ['Miraklen uteblev.', '奇迹没有出现。'],
  ])),
  b1(noun('hall', 'en', '门厅；大厅', 'hall / hallway', 'hallen', 'hallar', 'hallarna', [
    ['Lägg skorna i hallen.', '把鞋放在门厅。'],
    ['Hallen är smal.', '门厅很窄。'],
    ['Det finns två hallar i huset.', '房子里有两个门厅／大厅。'],
    ['Vi möts i hallen.', '我们在门厅见面。'],
  ])),
  b1(other('rättvist', 'adv', '公平地', 'fairly', [
    ['Domaren dömde rättvist.', '裁判判得很公平。'],
    ['Dela kakan rättvist.', '把蛋糕分公平。'],
    ['Det känns inte rättvist.', '这感觉不公平。'],
    ['Alla behandlas rättvist här.', '在这里所有人都被公平对待。'],
  ]), c(
    [
      ['rätt', '公正；对的'],
      ['vis', '样子；方式'],
      ['-t', '中性/副词词尾'],
    ],
    'rättvis 是“公正的样子”，rättvist 就是公平地。',
  )),
  b1(verb('skämmas', '感到羞愧', 'to be ashamed / embarrassed', 'skäms', 'skämdes', 'skämts', null, [
    ['Jag skäms för det jag sa.', '我为自己说的话感到羞愧。'],
    ['Han skämdes inför alla.', '他当着所有人的面很难为情。'],
    ['Du behöver inte skämmas.', '你不必感到羞愧。'],
    ['Hon har skämts länge för det.', '她为这件事羞愧了很久。'],
  ]), c(
    [
      ['skam', '羞耻'],
      ['-as', '感觉动词词尾（自己感到）'],
    ],
    '“自己感到羞耻”，合起来就是感到羞愧。',
  )),
  b1(other('inuti', 'other', '在……里面', 'inside', [
    ['Nyckeln ligger inuti lådan.', '钥匙在盒子里面。'],
    ['Vad finns inuti paketet?', '包裹里面有什么？'],
    ['Hon väntar inuti huset.', '她在房子里面等。'],
    ['Titta inuti skåpet.', '往柜子里面看。'],
  ]), c(
    [
      ['in', '进；里面'],
      ['uti', '在……之中（旧词）'],
    ],
    '两个表示“在里面”的成分叠在一起，就是在……里面。',
  )),
  b1(noun('skjuts', 'en', '搭车；一程', 'a ride / a lift', 'skjutsen', 'skjutsar', 'skjutsarna', [
    ['Kan jag få skjuts till stationen?', '我能搭你的车去车站吗？'],
    ['Skjutsen kommer om fem minuter.', '这趟顺风车五分钟后到。'],
    ['Vi turas om med skjutsarna.', '我们轮流载人。'],
    ['Tack för skjutsen!', '谢谢你载我一程！'],
  ])),
  b1(noun('bråk', 'ett', '争吵；打架', 'fight / quarrel', 'bråket', 'bråk', 'bråken', [
    ['Det blev bråk utanför krogen.', '酒吧外面吵起来了。'],
    ['Bråket slutade snabbt.', '那场争吵很快结束了。'],
    ['Jag vill inte ha mer bråk.', '我不要再吵了。'],
    ['Bråken hemma är jobbiga.', '家里的那些争吵很烦人。'],
  ])),
  b1(noun('anfall', 'ett', '袭击；发作', 'attack / seizure', 'anfallet', 'anfall', 'anfallen', [
    ['De gjorde ett anfall mot staden.', '他们向这座城市发动了袭击。'],
    ['Anfallet kom utan varning.', '袭击来得毫无预警。'],
    ['Han fick ett anfall i natt.', '他夜里发作了。'],
    ['Anfallen blir allt tätare.', '发作越来越频繁。'],
  ]), c(
    [
      ['an-', '朝向；扑上来'],
      ['fall', '倒下；落下'],
    ],
    '“朝你扑倒下来”，合起来是袭击，也引申为疾病发作。',
  )),
  b1(other('nödvändigt', 'adv', '必要地；必须', 'necessary / necessarily', [
    ['Det är nödvändigt att vänta.', '必须等待。'],
    ['Det är inte nödvändigt dyrt.', '不一定贵。'],
    ['Är det verkligen nödvändigt?', '这真的有必要吗？'],
    ['Ta bara det nödvändigaste.', '只带最必要的东西。'],
  ]), c(
    [
      ['nöd', '危急；急需'],
      ['vändig', '能转向、能求助的'],
      ['-t', '中性/副词词尾'],
    ],
    '“急需时能靠上的”，合起来就是必要的、必须。',
  )),
  b1(noun('linje', 'en', '线；路线', 'line / route', 'linjen', 'linjer', 'linjerna', [
    ['Dra en rak linje.', '画一条直线。'],
    ['Linjen går till centrum.', '这条线路开往市中心。'],
    ['Vilken linje ska jag ta?', '我该坐哪条线？'],
    ['Linjerna på kartan är tydliga.', '地图上的线路很清楚。'],
  ])),
  b1(noun('varning', 'en', '警告', 'warning', 'varningen', 'varningar', 'varningarna', [
    ['Det är en varning, inte ett skämt.', '这是警告，不是玩笑。'],
    ['Varningen kom för sent.', '警告来得太晚了。'],
    ['Vi fick flera varningar.', '我们收到了好几次警告。'],
    ['Ignorera inte varningarna.', '别无视那些警告。'],
  ]), c(
    [
      ['varna', '警告（动词）'],
      ['-ing', '行为名词后缀'],
    ],
    '由“警告”这个动作变成名词，就是一次警告。',
  )),
  b1(noun('dåre', 'en', '疯子；傻瓜（较文）', 'fool / madman', 'dåren', 'dårar', 'dårarna', [
    ['Han beter sig som en dåre.', '他表现得像个疯子。'],
    ['Dåren skrek på gatan.', '那个疯子在街上喊。'],
    ['Bara dårar tror på det.', '只有傻瓜才信那个。'],
    ['Dårarna skrattade.', '那些疯子在笑。'],
  ])),
  b1(other('vars', 'pron', '其；谁的（所有）', 'whose', [
    ['Kvinnan vars son är sjuk väntar där.', '儿子生病的那位女士在那里等。'],
    ['Ett hus vars tak läcker.', '屋顶漏水的一栋房子。'],
    ['De vars namn står här får gå in.', '名字写在这里的人可以进去。'],
    ['En författare vars böcker jag gillar.', '一位其作品我很喜欢的作家。'],
  ])),
  b1(adj('förvånad', '惊讶的', 'surprised', 'förvånat', 'förvånade', [
    ['Jag är förvånad över svaret.', '我对这个回答感到惊讶。'],
    ['Ett förvånat ansikte.', '一张惊讶的脸。'],
    ['De förvånade gästerna tystnade.', '惊讶的客人们安静了。'],
    ['Hon såg förvånad ut.', '她看起来很惊讶。'],
  ])),
  b1(noun('plikt', 'en', '义务；职责', 'duty / obligation', 'plikten', 'plikter', 'plikterna', [
    ['Det är min plikt att hjälpa.', '帮助是我的义务。'],
    ['Plikten går först.', '职责为先。'],
    ['Vi har flera plikter hemma.', '我们在家里有好几项义务。'],
    ['Glöm inte plikterna.', '别忘了那些职责。'],
  ])),
  b1(other('längs', 'other', '沿着', 'along', [
    ['Vi gick längs floden.', '我们沿着河走。'],
    ['Det ligger caféer längs gatan.', '沿街有咖啡馆。'],
    ['Kör längs kusten.', '沿着海岸开。'],
    ['Husen står längs vägen.', '房子沿着路排开。'],
  ])),
  b1(noun('ro', 'en', '安宁；平静', 'peace / calm', 'ron', null, null, [
    ['Jag behöver lite ro.', '我需要一点安宁。'],
    ['Låt mig få vara i ro.', '让我清静一会儿。'],
    ['Ron i skogen är skön.', '森林里的宁静很舒服。'],
    ['Här finns ingen ro.', '这里不得安宁。'],
  ])),
  b1(verb('nämna', '提到；说出名字', 'to mention / to name', 'nämner', 'nämnde', 'nämnt', 'nämn', [
    ['Vill du nämna ett exempel?', '你想举个例子吗？'],
    ['Hon nämnde ditt namn.', '她提到了你的名字。'],
    ['Det har jag aldrig nämnt.', '那件事我从没提过。'],
    ['Nämn tre saker du gillar.', '说出三件你喜欢的事。'],
  ])),
  b1(verb('krossa', '打碎；粉碎', 'to crush / to smash', 'krossar', 'krossade', 'krossat', 'krossa', [
    ['Han krossar isen med hammaren.', '他用锤子砸碎冰。'],
    ['Glaset krossades på golvet.', '玻璃杯在地板上摔碎了。'],
    ['De har krossat motståndet.', '他们粉碎了抵抗。'],
    ['Krossa inte drömmen.', '别把梦想打碎。'],
  ])),
  b1(noun('begravning', 'en', '葬礼', 'funeral', 'begravningen', 'begravningar', 'begravningarna', [
    ['Begravningen är på fredag.', '葬礼在星期五。'],
    ['Många kom till begravningen.', '很多人来参加了葬礼。'],
    ['Det var tre begravningar den veckan.', '那一周有三场葬礼。'],
    ['Efter begravningarna var det tyst.', '葬礼之后一片安静。'],
  ]), c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['grav', '坟墓'],
      ['-ning', '行为名词后缀'],
    ],
    '“把人放进坟墓的行为”，合起来就是葬礼。',
  )),
  b1(other('nyligen', 'adv', '最近', 'recently', [
    ['Jag såg henne nyligen.', '我最近见过她。'],
    ['Han har nyligen flyttat hit.', '他最近刚搬到这里。'],
    ['Det hände nyligen.', '那是最近发生的。'],
    ['Nyligen läste jag den boken.', '我最近读了那本书。'],
  ]), c(
    [
      ['ny', '新的'],
      ['-ligen', '……地'],
    ],
    '“新近地”，合起来就是最近。',
  )),
  b1(noun('hämnd', 'en', '报复', 'revenge', 'hämnden', null, null, [
    ['Han vill ha hämnd.', '他想报复。'],
    ['Hämnden gör ingen glad.', '报复不会让任何人快乐。'],
    ['Det var inte hämnd, det var rättvisa.', '那不是报复，那是公正。'],
    ['Glöm hämnden.', '忘掉报复吧。'],
  ])),
  b1(verb('stinka', '发臭', 'to stink', 'stinker', 'stank', 'stunkit', 'stink', [
    ['Soptunnan stinker.', '垃圾桶发臭。'],
    ['Det stank i rummet.', '房间里当时很臭。'],
    ['Fisken har stunkit länge.', '这条鱼已经臭了很久。'],
    ['Stink inte upp hela huset.', '别把整栋房子熏臭了。'],
  ])),
  b1(verb('ryka', '冒烟；冒气', 'to smoke / to steam', 'ryker', 'rykte', 'rykt', 'ryk', [
    ['Det ryker från skorstenen.', '烟囱在冒烟。'],
    ['Gröten rykte på bordet.', '粥在桌上冒着热气。'],
    ['Det har rykt här hela dan.', '这里冒了一整天烟。'],
    ['Huvudet ryker av alla frågor.', '问题太多，脑子都冒烟了。'],
  ])),
  b1(noun('röv', 'en', '屁股（粗俗）', 'ass (vulgar)', 'röven', 'rövar', 'rövarna', [
    ['Sitt inte på röven hela dan.', '别整天坐着屁股不挪。'],
    ['Han föll på röven.', '他一屁股摔了下去。'],
    ['Ordet är vulgärt, använd det sällan.', '这个词很粗俗，少用。'],
    ['De skrattade åt röven på byxorna.', '他们笑裤子后面那一块。'],
  ], ['vulgar'])),
  b1(noun('öken', 'en', '沙漠', 'desert', 'öknen', 'öknar', 'öknarna', [
    ['Kamelen går genom öknen.', '骆驼穿过沙漠。'],
    ['Öknen är het på dan.', '沙漠白天很热。'],
    ['Det finns flera öknar i Afrika.', '非洲有好几片沙漠。'],
    ['Öknarna är torra.', '那些沙漠很干燥。'],
  ])),
  b1(verb('skaka', '摇；发抖', 'to shake', 'skakar', 'skakade', 'skakat', 'skaka', [
    ['Skaka flaskan före användning.', '使用前摇匀瓶子。'],
    ['Hon skakade av kyla.', '她冷得发抖。'],
    ['Huset har skakat i stormen.', '房子在风暴里晃过。'],
    ['Skaka inte så hårt.', '别摇那么猛。'],
  ])),
  b1(noun('galning', 'en', '疯子', 'madman / lunatic', 'galningen', 'galningar', 'galningarna', [
    ['Han kör som en galning.', '他开车像疯了一样。'],
    ['Galningen skrek i parken.', '那个疯子在公园里喊。'],
    ['Bara galningar går ut i den kylan.', '只有疯子才会在那种冷天出门。'],
    ['Galningarna sprang mot dörren.', '那些疯子朝门跑去。'],
  ]), c(
    [
      ['galen', '疯的'],
      ['-ing', '某种人'],
    ],
    '“疯的那种人”，合起来就是疯子。',
  )),
  b1(adj('imponerande', '令人印象深刻的', 'impressive', 'imponerande', 'imponerande', [
    ['Det var en imponerande insats.', '那是一次令人印象深刻的表现。'],
    ['Ett imponerande hus.', '一栋很气派的房子。'],
    ['De imponerande resultaten kom sent.', '那些出色的结果来得很晚。'],
    ['Hon är imponerande lugn.', '她出奇地冷静。'],
  ])),
  b1(noun('oskuld', 'en', '无辜；清白（也常指童贞）', 'innocence; also virginity', 'oskulden', 'oskulder', 'oskulderna', [
    ['Han svor på sin oskuld.', '他发誓自己是无辜的。'],
    ['Hon hävdade sin oskuld.', '她坚称自己是无辜的。'],
    ['Bevisa din oskuld.', '证明你的清白。'],
    ['Jag tror på hennes oskuld.', '我相信她是清白的。'],
  ]), c(
    [
      ['o-', '不；没有'],
      ['skuld', '罪责；过错'],
    ],
    '“没有罪责”，合起来就是无辜、清白；也常用来指童贞。',
  )),
  b1(verb('lyda', '服从', 'to obey', 'lyder', 'lydde', 'lytt', 'lyd', [
    ['Barnen lyder inte alltid.', '孩子们并不总是听话。'],
    ['Soldaten lydde ordern.', '士兵服从了命令。'],
    ['Har du lytt ordern?', '你服从命令了吗？'],
    ['Lyd nu!', '现在听话！'],
  ])),
  b1(adj('döende', '垂死的；快结束的', 'dying', 'döende', 'döende', [
    ['Den döende mannen bad om vatten.', '那个垂死的男人要水。'],
    ['Ett döende träd står där.', '那里有一棵快死的树。'],
    ['De döende blommorna måste vattnas.', '那些快枯的花必须浇水。'],
    ['Elden är döende.', '火快灭了。'],
  ]), c(
    [
      ['dö', '死'],
      ['-ende', '正在……的'],
    ],
    '“正在死去的”，合起来就是垂死的、快结束的。',
  )),
  b1(other('fullständigt', 'adv', '完全地', 'completely', [
    ['Jag är fullständigt slut.', '我彻底累垮了。'],
    ['Det är fullständigt fel.', '这完全是错的。'],
    ['Hon förstod fullständigt.', '她完全懂了。'],
    ['Rummet är fullständigt tomt.', '房间完全是空的。'],
  ]), c(
    [
      ['full', '满的；完全的'],
      ['ständig', '持续的；不断的'],
      ['-t', '中性/副词词尾'],
    ],
    '“完全持续到底的”，合起来就是完全地。',
  )),
  b1(noun('strunt', 'en', '废话；无关紧要的事', 'nonsense / rubbish', 'strunten', null, null, [
    ['Prata inte strunt.', '别说废话。'],
    ['Strunten kan du slänga.', '那些没用的东西你可以扔掉。'],
    ['Det är strunt samma.', '那根本无所谓。'],
    ['Det var bara strunt.', '那不过是废话。'],
  ])),
  b1(other('norrut', 'adv', '向北', 'northwards', [
    ['Vi kör norrut.', '我们往北开。'],
    ['Fåglarna flyger norrut.', '鸟往北飞。'],
    ['Staden ligger norrut.', '那座城在北边。'],
    ['Gå norrut längs vägen.', '沿着路往北走。'],
  ]), c(
    [
      ['norr', '北'],
      ['ut', '向外'],
    ],
    '“朝北向外”，合起来就是向北。',
  )),
  b1(adj('misstänkt', '可疑的；涉嫌的', 'suspicious / suspected', 'misstänkt', 'misstänkta', [
    ['Han är misstänkt för brottet.', '他涉嫌这起犯罪。'],
    ['Ett misstänkt paket låg där.', '那里放着一个可疑的包裹。'],
    ['De misstänkta fördes bort.', '那些嫌疑人被带走了。'],
    ['Det ser misstänkt ut.', '这看起来很可疑。'],
  ]), c(
    [
      ['miss-', '错的；不好的'],
      ['tänkt', '想过的（tänka 想）'],
    ],
    '“往坏处想过的”，合起来就是可疑的、涉嫌的。',
  )),
  b1(verb('bränna', '烧；烫伤', 'to burn', 'bränner', 'brände', 'bränt', 'bränn', [
    ['Var försiktig så du inte bränner dig.', '小心别烫伤自己。'],
    ['De brände gamla löv i trädgården.', '他们在花园里烧枯叶。'],
    ['Middagen är bränd.', '晚饭烤糊了。'],
    ['Bränn inte pappren.', '别把那些纸烧掉。'],
  ])),
  b1(noun('talang', 'en', '天赋；人才', 'talent', 'talangen', 'talanger', 'talangerna', [
    ['Hon har talang för språk.', '她有语言天赋。'],
    ['Talangen syntes tidigt.', '这份天赋很早就看出来了。'],
    ['Skolan söker nya talanger.', '学校在找新人才。'],
    ['Talangerna fick chansen på scenen.', '那些有天赋的人得到了上台的机会。'],
  ])),
  b1(other('fritt', 'adv', '自由地；免费地', 'freely / free of charge', [
    ['Barnen leker fritt i parken.', '孩子们在公园里自由玩耍。'],
    ['Inträdet är fritt idag.', '今天入场免费。'],
    ['Du får tala fritt här.', '你在这里可以自由发言。'],
    ['Vattnet rinner fritt.', '水畅快地流着。'],
  ])),
  b1(other('i fråga om', 'phrase', '至于；在……方面', 'regarding / with regard to', [
    ['I fråga om mat är han kräsen.', '在吃的方面他很挑。'],
    ['Vad gäller i fråga om tider?', '时间方面有什么规定？'],
    ['I fråga om vädret har vi tur.', '天气方面我们运气不错。'],
    ['Hon är expert i fråga om historia.', '她在历史方面是专家。'],
  ]), c(
    [
      ['i', '在'],
      ['fråga', '问题；事情'],
      ['om', '关于'],
    ],
    '“在关于……的问题上”，合起来就是至于、在……方面。',
  )),
  b1(adj('märklig', '奇怪的；奇特的', 'strange / peculiar', 'märkligt', 'märkliga', [
    ['Det var en märklig dag.', '那是奇怪的一天。'],
    ['Ett märkligt ljud hördes.', '听到一种奇怪的声音。'],
    ['De märkliga spåren försvann.', '那些奇怪的痕迹消失了。'],
    ['Hon beter sig märkligt.', '她举止很奇怪。'],
  ], { comparative: 'märkligare', superlative: 'märkligast' }), c(
    [
      ['märka', '注意到'],
      ['-lig', '带有……性质的'],
    ],
    '“值得注意的”，现在多表示奇怪、奇特。',
  )),
  b1(adj('lysande', '出色的；发光的', 'brilliant / shining', 'lysande', 'lysande', [
    ['Det var en lysande idé.', '那是个出色的主意。'],
    ['Ett lysande exempel.', '一个出色的例子。'],
    ['De lysande stjärnorna syntes tydligt.', '那些闪亮的星星很清楚。'],
    ['Hon är lysande på piano.', '她钢琴弹得非常出色。'],
  ])),
  b1(noun('universum', 'ett', '宇宙', 'universe', 'universumet', null, null, [
    ['Universum är större än vi tror.', '宇宙比我们以为的更大。'],
    ['Universumet expanderar.', '宇宙在膨胀。'],
    ['Finns det liv i andra universum?', '其他宇宙里有生命吗？'],
    ['Vi är en liten del av universumet.', '我们只是宇宙里很小的一部分。'],
  ])),
  b1(noun('seger', 'en', '胜利', 'victory', 'segern', 'segrar', 'segrarna', [
    ['Det blev en knapp seger.', '那是一场险胜。'],
    ['Segern firades hela natten.', '整晚都在庆祝胜利。'],
    ['Laget har tre segrar i rad.', '这支队伍连胜三场。'],
    ['Segerna kom sent i matchen.', '那些胜利来得很晚。'],
  ])),
  b1(noun('åratal', 'ett', '许多年', 'years (a period of years)', null, null, null, [
    ['Det tog åratal att lära sig.', '学会这个花了许多年。'],
    ['Hon väntade i åratal.', '她等了许多年。'],
    ['Efter åratal av tystnad hörde de av sig.', '沉默了许多年之后，他们又联系了。'],
    ['Efter åratal träffades de igen.', '过了许多年他们又见面了。'],
  ]), c(
    [
      ['år', '年'],
      ['-a-', '连接音'],
      ['tal', '数目；许多'],
    ],
    '“年的数目”，合起来就是许多年。',
  )),
  b1(verb('blöda', '流血', 'to bleed', 'blöder', 'blödde', 'blött', 'blöd', [
    ['Såret blöder fortfarande.', '伤口还在流血。'],
    ['Han blödde från näsan.', '他流鼻血了。'],
    ['Näsan har blött tre gånger idag.', '鼻子今天流了三次血。'],
    ['Tryck här så blöder det mindre.', '按这里，血会流得少一点。'],
  ]), c(
    [
      ['blod', '血'],
      ['-a', '做成动词'],
    ],
    '由“血”变成动词，就是流血。',
  )),
  b1(other('alltför', 'adv', '过于；太', 'all too / far too', [
    ['Det är alltför sent nu.', '现在已经太晚了。'],
    ['Hon är alltför snäll mot dem.', '她对他们太好了。'],
    ['Boken är alltför svår.', '这本书太难了。'],
    ['Vi kom alltför tidigt.', '我们来得太早了。'],
  ]), c(
    [
      ['allt', '全部；很'],
      ['för', '过于'],
    ],
    '两个表示程度的词叠在一起，就是太、过于。',
  )),
  b1(verb('spränga', '炸；撑破', 'to blow up / to burst', 'spränger', 'sprängde', 'sprängt', 'spräng', [
    ['De ska spränga den gamla bron.', '他们要炸掉那座旧桥。'],
    ['Bollen sprängde rutan.', '球把玻璃窗撞破了。'],
    ['Tjuven har sprängt kassaskåpet.', '小偷把保险箱炸开了。'],
    ['Spräng inte ballongen.', '别把气球撑破。'],
  ])),
  b1(other('kraftigt', 'adv', '猛烈地；大幅度地', 'heavily / strongly', [
    ['Det regnar kraftigt.', '雨下得很猛。'],
    ['Priserna har ökat kraftigt.', '价格大幅上涨了。'],
    ['Han hostade kraftigt.', '他咳得很厉害。'],
    ['Vinden blåste kraftigt i natt.', '夜里风刮得很猛。'],
  ]), c(
    [
      ['kraft', '力量'],
      ['-ig', '有……的'],
      ['-t', '中性/副词词尾'],
    ],
    'kraftig 是“有力的”，kraftigt 就是猛烈地、大幅度地。',
  )),
  b1(adj('förälskad', '爱上的；热恋的', 'in love', 'förälskat', 'förälskade', [
    ['Hon är förälskad i honom.', '她爱上了他。'],
    ['Ett förälskat par satt på bänken.', '一对热恋中的人坐在长椅上。'],
    ['De förälskade såg bara varandra.', '那对恋人眼里只有彼此。'],
    ['Jag blev förälskad direkt.', '我一下子就爱上了。'],
  ]), c(
    [
      ['för-', '加强语气的前缀'],
      ['älskad', '被爱的（älska 爱）'],
    ],
    '“深深爱上了的”，合起来就是热恋的、爱上的。',
  )),
  b1(verb('avslöja', '揭露；揭穿', 'to reveal / to expose', 'avslöjar', 'avslöjade', 'avslöjat', 'avslöja', [
    ['Tidningen avslöjar sanningen.', '报纸揭开了真相。'],
    ['Hon avslöjade hemligheten.', '她揭开了那个秘密。'],
    ['Polisen har avslöjat planen.', '警察已经揭穿了那个计划。'],
    ['Avslöja inte slutet.', '别剧透结局。'],
  ]), c(
    [
      ['av-', '去掉；离开'],
      ['slöja', '面纱'],
    ],
    '“揭掉面纱”，合起来就是揭露、揭穿。',
  )),
  b1(verb('tiga', '沉默；不说话', 'to keep silent', 'tiger', 'teg', 'tegit', 'tig', [
    ['Hon tiger om det som hände.', '她对发生的事保持沉默。'],
    ['Alla teg i rummet.', '房间里所有人都不说话。'],
    ['Han har tegit i flera år.', '他已经沉默好几年了。'],
    ['Tig nu och lyssna.', '现在别说话，听着。'],
  ])),
  b1(noun('drag', 'ett', '特征；一步（棋）；一阵', 'trait / move / draught', 'draget', 'drag', 'dragen', [
    ['Det är ett typiskt drag hos henne.', '那是她典型的一个特点。'],
    ['Draget kom från fönstret.', '一阵风从窗户进来。'],
    ['Han gjorde tre smarta drag.', '他走了三步漂亮的棋。'],
    ['Dragen i hans ansikte är mjuka.', '他脸上的轮廓很柔和。'],
  ])),
  b1(noun('spänn', 'ett', '克朗（口语，一块钱）', 'krona (colloquial, like "buck")', null, 'spänn', null, [
    ['Det kostar tjugo spänn.', '这个要二十克朗。'],
    ['Har du ett spänn över?', '你还多一克朗吗？'],
    ['Jag har bara fem spänn kvar.', '我只剩五克朗了。'],
    ['Fem spänn räcker inte till bussen.', '五克朗不够坐公交。'],
  ])),
  b1(adj('norra', '北部的', 'northern', 'norra', 'norra', [
    ['Vi bor i norra Sverige.', '我们住在瑞典北部。'],
    ['Den norra delen är kallare.', '北部更冷。'],
    ['Tåget går mot norra stationen.', '火车开往北站。'],
    ['Det blåser från norra sidan.', '风从北边吹来。'],
  ]), c(
    [
      ['norr', '北'],
      ['-a', '定式/弱变化词尾'],
    ],
    'norr 的定式写法，用在 norra Sverige 这类说法里，表示北部的。',
  )),
  b1(noun('flotta', 'en', '舰队；海军', 'fleet / navy', 'flottan', 'flottor', 'flottorna', [
    ['Flottan lämnade hamnen.', '舰队离开了港口。'],
    ['Han tjänstgjorde i flottan.', '他在海军服役。'],
    ['Landet har två flottor.', '这个国家有两支舰队。'],
    ['Flottorna möttes till havs.', '那些舰队在海上相遇。'],
  ])),
  b1(noun('knark', 'ett', '毒品（口语）', 'drugs (slang)', 'knarket', null, null, [
    ['Han fastnade för knark.', '他沾上了毒品。'],
    ['Knarket hittades i väskan.', '毒品是在包里找到的。'],
    ['Håll dig borta från knark.', '离毒品远一点。'],
    ['Polisen slog mot knarket i området.', '警察打击了这一带的毒品。'],
  ], ['slang'])),
  b1(verb('läcka', '泄漏；漏', 'to leak', 'läcker', 'läckte', 'läckt', 'läck', [
    ['Taket läcker när det regnar.', '下雨时屋顶会漏。'],
    ['Nyheten läckte till pressen.', '消息泄漏给了媒体。'],
    ['Röret har läckt i en vecka.', '管子已经漏了一周。'],
    ['Låt inte informationen läcka ut.', '别让信息漏出去。'],
  ])),
  b1(other('hittills', 'adv', '迄今；到目前为止', 'so far / until now', [
    ['Hittills har allt gått bra.', '到目前为止一切顺利。'],
    ['Jag har hittills inte hört något.', '到现在我什么都没听到。'],
    ['Hittills är vi överens.', '到目前为止我们意见一致。'],
    ['Det är det bästa hittills.', '这是迄今最好的。'],
  ]), c(
    [
      ['hit', '到这里'],
      ['tills', '直到'],
    ],
    '“直到这里（此刻）”，合起来就是迄今、到目前为止。',
  )),
  b1(verb('behandla', '对待；治疗；处理', 'to treat / to handle', 'behandlar', 'behandlade', 'behandlat', 'behandla', [
    ['Läkaren behandlar patienten.', '医生在治疗病人。'],
    ['De behandlade oss väl.', '他们待我们很好。'],
    ['Ärendet har redan behandlats.', '这件事已经处理过了。'],
    ['Behandla andra som du själv vill bli behandlad.', '你希望别人怎样待你，就怎样待别人。'],
  ]), c(
    [
      ['be-', '构词前缀，做成某种动作'],
      ['handla', '做；行动'],
    ],
    '“对某事采取行动”，合起来就是对待、治疗、处理。',
  )),
  b1(adj('strålande', '灿烂的；极好的', 'radiant / splendid', 'strålande', 'strålande', [
    ['Vilken strålande dag!', '多么灿烂的一天！'],
    ['Ett strålande leende.', '一个灿烂的笑容。'],
    ['De strålande nyheterna kom i morse.', '那些大好消息今天早上来了。'],
    ['Hon ser strålande ut.', '她看起来容光焕发。'],
  ])),
  b1(noun('leende', 'ett', '微笑', 'smile', 'leendet', 'leenden', 'leendena', [
    ['Ett litet leende räckte.', '一个小小的微笑就够了。'],
    ['Leendet lyste upp rummet.', '那个微笑让房间亮了起来。'],
    ['Hennes leenden är varma.', '她的微笑很温暖。'],
    ['Leendena smittade av sig.', '那些笑容会传染。'],
  ]), c(
    [
      ['le', '微笑（动词）'],
      ['-ende', '正在……；动作变成名词'],
    ],
    '动词 le 加上 -ende，变成名词“微笑”。',
  )),
  b1(adj('mänsklig', '人的；有人性的', 'human', 'mänskligt', 'mänskliga', [
    ['Det är ett mänskligt fel.', '那是人都会犯的错。'],
    ['Ett mänskligt liv är ovärderligt.', '一条人命无价。'],
    ['De mänskliga rättigheterna måste skyddas.', '人权必须得到保护。'],
    ['Hon är varm och mänsklig.', '她温暖而有人情味。'],
  ], { comparative: 'mänskligare', superlative: 'mänskligast' }), c(
    [
      ['människa', '人（词干 mänsk-）'],
      ['-lig', '……的'],
    ],
    '“属于人的”，合起来就是人的、有人性的。',
  )),
  b1(other('vare sig', 'phrase', '无论……还是；既不……也不', 'whether … or / neither … nor', [
    ['Vare sig du vill eller inte, måste vi gå.', '无论你愿不愿意，我们都得走。'],
    ['Jag vill inte ha vare sig kaffe eller te.', '咖啡和茶我都不要。'],
    ['Vare sig det regnar eller snöar åker vi.', '无论下雨还是下雪我们都去。'],
    ['Det spelar ingen roll, vare sig idag eller imorgon.', '今天还是明天都无所谓。'],
  ]), c(
    [
      ['vare', '是（旧式虚拟语气，来自 vara）'],
      ['sig', '自己；无论哪一个'],
    ],
    '字面接近“无论是哪一个”，用来连接“无论……还是”，或“既不……也不”。',
  )),
  b1(noun('medborgare', 'en', '公民', 'citizen', 'medborgaren', 'medborgare', 'medborgarna', [
    ['Hon är svensk medborgare.', '她是瑞典公民。'],
    ['Medborgaren har rätt att rösta.', '公民有投票的权利。'],
    ['Alla medborgare är lika inför lagen.', '所有公民在法律面前平等。'],
    ['Medborgarna samlades på torget.', '公民们聚集在广场上。'],
  ]), c(
    [
      ['med', '一起；共同'],
      ['borgare', '城里人；市民'],
    ],
    '“一同属于这座城的人”，合起来就是公民。',
  )),
  b1(noun('sinne', 'ett', '头脑；感觉；心智', 'mind / sense', 'sinnet', 'sinnen', 'sinnena', [
    ['Hon har ett skarpt sinne.', '她头脑敏锐。'],
    ['Sinnet behöver vila.', '头脑需要休息。'],
    ['Vi har fem sinnen.', '我们有五种感官。'],
    ['Sinnena skärps i mörkret.', '在黑暗里感官会变敏锐。'],
  ])),
  b1(noun('samvete', 'ett', '良心', 'conscience', 'samvetet', 'samveten', 'samvetena', [
    ['Jag har dåligt samvete.', '我良心不安。'],
    ['Samvetet sa att jag skulle stanna.', '良心告诉我应该留下。'],
    ['Vi måste lyssna på våra samveten.', '我们必须听从自己的良心。'],
    ['Deras samveten var rena.', '他们问心无愧。'],
  ]), c(
    [
      ['sam-', '一起；共同'],
      ['vete', '知道（来自 veta）'],
    ],
    '“自己心里知道的那部分”，合起来就是良心。',
  )),
  b1(adj('skrämmande', '可怕的；令人害怕的', 'frightening / scary', 'skrämmande', 'skrämmande', [
    ['Det var en skrämmande upplevelse.', '那是一次可怕的经历。'],
    ['Ett skrämmande ljud kom från källaren.', '地下室传来可怕的声音。'],
    ['De skrämmande bilderna syntes på nyheterna.', '那些吓人的画面出现在新闻里。'],
    ['Tanken är skrämmande.', '这个念头很可怕。'],
  ])),
  b1(adj('främsta', '最主要的；首要的', 'foremost / leading', 'främsta', 'främsta', [
    ['Det är hennes främsta mål.', '那是她最主要的目标。'],
    ['Landets främsta forskare samlades där.', '该国最顶尖的研究者聚集在那里。'],
    ['Säkerheten är det främsta.', '安全是最首要的。'],
    ['Han är en av de främsta i klassen.', '他是班上最突出的人之一。'],
  ]), c(
    [
      ['främst', '最前面的'],
      ['-a', '定式/复数词尾'],
    ],
    'främst 的定式，用来表示最主要的、首要的。',
  )),
  b1(noun('vittne', 'ett', '证人；目击者', 'witness', 'vittnet', 'vittnen', 'vittnena', [
    ['Det fanns ett vittne till olyckan.', '这起事故有一名目击者。'],
    ['Vittnet berättade vad hen såg.', '证人讲述了自己看到的。'],
    ['Flera vittnen hördes i rätten.', '法庭上传唤了几名证人。'],
    ['Vittnena var överens.', '那些证人说法一致。'],
  ])),
  b1(verb('täcka', '覆盖；遮住；支付', 'to cover', 'täcker', 'täckte', 'täckt', 'täck', [
    ['Snön täcker marken.', '雪覆盖着地面。'],
    ['Hon täckte ansiktet med händerna.', '她用手遮住脸。'],
    ['Försäkringen har täckt skadan.', '保险已经赔付了损失。'],
    ['Täck kastrullen med ett lock.', '用盖子把锅盖上。'],
  ])),
  b1(noun('rättighet', 'en', '权利', 'right (entitlement)', 'rättigheten', 'rättigheter', 'rättigheterna', [
    ['Det är en grundläggande rättighet.', '这是一项基本权利。'],
    ['Rättigheten gäller alla.', '这项权利适用于所有人。'],
    ['Barn har egna rättigheter.', '儿童有自己的权利。'],
    ['Rättigheterna måste respekteras.', '这些权利必须得到尊重。'],
  ]), c(
    [
      ['rätt', '公正；权利'],
      ['-ighet', '抽象名词后缀'],
    ],
    '把“公正/权利”变成抽象名词，就是一项权利。',
  )),
  b1(noun('fånge', 'en', '囚犯', 'prisoner', 'fången', 'fångar', 'fångarna', [
    ['Fången släpptes fri.', '那名囚犯被释放了。'],
    ['Han satt som fånge i två år.', '他坐了两年牢。'],
    ['Det fanns tre fångar i cellen.', '牢房里有三名囚犯。'],
    ['Fångarna fick gå ut på gården.', '那些囚犯可以到院子里去。'],
  ])),
  b1(other('uppenbarligen', 'adv', '显然；看样子', 'apparently / obviously', [
    ['Han är uppenbarligen trött.', '他显然累了。'],
    ['Uppenbarligen har tåget gått.', '看样子火车已经走了。'],
    ['Hon ljög uppenbarligen.', '她显然在说谎。'],
    ['Det var uppenbarligen ett misstag.', '那显然是个失误。'],
  ]), c(
    [
      ['uppenbar', '明显的'],
      ['-ligen', '……地'],
    ],
    '“明显地”，合起来就是显然、看样子。',
  )),
  b1(verb('ana', '察觉；隐约感到', 'to sense / to suspect', 'anar', 'anade', 'anat', 'ana', [
    ['Jag anar att något är fel.', '我隐约觉得有什么不对。'],
    ['Hon anade sanningen.', '她隐约感到了真相。'],
    ['Vi har anat det länge.', '我们早就隐约感觉到了。'],
    ['Ana inte det värsta direkt.', '别一上来就往最坏处想。'],
  ])),
  b1(verb('angå', '关系到；与……有关', 'to concern / to regard', 'angår', 'angick', 'angått', 'angå', [
    ['Det angår inte dig.', '这不关你的事。'],
    ['Frågan angick hela klassen.', '这个问题关系到全班。'],
    ['Saken har aldrig angått mig.', '这件事从来就与我无关。'],
    ['Vad angår det henne?', '这关她什么事？'],
  ]), c(
    [
      ['an-', '朝向；关涉'],
      ['gå', '走'],
    ],
    '“走到跟前、关涉到”，合起来就是关系到、与……有关。',
  )),
  b1(noun('jude', 'en', '犹太人', 'Jew', 'juden', 'judar', 'judarna', [
    ['Min vän är jude.', '我的朋友是犹太人。'],
    ['Judarna firar pesach på våren.', '犹太人在春天过逾越节。'],
    ['Han läser om judarnas historia.', '他在读犹太人的历史。'],
    ['Det finns en synagoga för judarna i staden.', '城里有一座犹太会堂。'],
  ])),
  b1(noun('nacke', 'en', '后颈；后脖颈', 'nape / back of the neck', 'nacken', 'nackar', 'nackarna', [
    ['Hon har ont i nacken.', '她后颈疼。'],
    ['Nacken blev stel efter resan.', '旅行之后后颈发僵。'],
    ['Håret täcker nacken.', '头发盖住了后颈。'],
    ['Massera nacken försiktigt.', '轻轻按摩后颈。'],
  ])),
  b1(verb('tvivla', '怀疑', 'to doubt', 'tvivlar', 'tvivlade', 'tvivlat', 'tvivla', [
    ['Jag tvivlar på den förklaringen.', '我怀疑那个解释。'],
    ['Hon tvivlade aldrig på dig.', '她从未怀疑过你。'],
    ['Vi har tvivlat för länge.', '我们怀疑得太久了。'],
    ['Tvivla inte på dig själv.', '别怀疑你自己。'],
  ])),
  b1(noun('trubbel', 'ett', '麻烦（口语）', 'trouble (informal)', 'trubblet', null, null, [
    ['Han är i trubbel igen.', '他又有麻烦了。'],
    ['Trubblet började sent i går.', '麻烦从昨晚很晚才开始。'],
    ['Jag vill inte ha mer trubbel.', '我不要再有麻烦了。'],
    ['Håll dig undan från trubbel.', '离麻烦远一点。'],
  ])),
  b1(verb('befinna sig', '处于；位于', 'to be located / to find oneself', 'befinner sig', 'befann sig', 'befunnit sig', null, [
    ['Var befinner du dig nu?', '你现在在哪里？'],
    ['De befann sig i skogen.', '他们当时在森林里。'],
    ['Hon har befunnit sig utomlands länge.', '她已经在国外很久了。'],
    ['Vi befinner oss i en svår situation.', '我们正处于困境。'],
  ]), c(
    [
      ['be-', '构词前缀'],
      ['finna', '找到'],
      ['sig', '自己'],
    ],
    '“发现自己在某处”，合起来就是处于、位于。',
  )),
  b1(noun('läger', 'ett', '营地；阵营', 'camp', 'lägret', 'läger', 'lägren', [
    ['Barnen åker till ett sommarläger.', '孩子们要去夏令营。'],
    ['Lägret ligger vid sjön.', '营地在湖边。'],
    ['Det fanns tre läger i dalen.', '山谷里有三个营地。'],
    ['Lägren stängdes efter stormen.', '那些营地在风暴后关闭了。'],
  ])),
  b1(noun('magi', 'en', '魔法；魔力', 'magic', 'magin', null, null, [
    ['Barnen tror på magi.', '孩子们相信魔法。'],
    ['Magin i sagorna fascinerar henne.', '故事里的魔法让她着迷。'],
    ['Det är inte magi, det är vetenskap.', '那不是魔法，那是科学。'],
    ['Hon kände magin i musiken.', '她感受到了音乐里的魔力。'],
  ])),
  b1(other('i synnerhet', 'phrase', '尤其；特别是', 'in particular / especially', [
    ['Jag gillar hösten, i synnerhet oktober.', '我喜欢秋天，尤其是十月。'],
    ['Var försiktig, i synnerhet på isen.', '小心，尤其是在冰上。'],
    ['I synnerhet barnen blev glada.', '尤其是孩子们很高兴。'],
    ['Det gäller i synnerhet dig.', '这尤其适用于你。'],
  ]), c(
    [
      ['i', '在'],
      ['synner', '特别的；分开的'],
      ['-het', '性质、状态'],
    ],
    'synnerhet 是“特别之处”，加上 i 就是尤其、特别是。',
  )),
  b1(adj('led', '厌烦的；厌倦的', 'tired of / fed up', 'lett', 'leda', [
    ['Jag är led på tjatet.', '我听烦了那些唠叨。'],
    ['Hon blev led vid att vänta.', '她等得厌倦了。'],
    ['De är leda på samma historia.', '他们听同一个故事听烦了。'],
    ['Är du redan led?', '你已经厌烦了吗？'],
  ])),
  b1(noun('tok', 'en', '疯子；傻瓜', 'fool / madman', 'token', 'tokar', 'tokarna', [
    ['Han beter sig som en tok.', '他表现得像个疯子。'],
    ['Token skrek på gatan.', '那个疯子在街上喊。'],
    ['Bara tokar tror på det.', '只有傻瓜才信那个。'],
    ['Tokarna skrattade.', '那些疯子在笑。'],
  ])),
  b1(noun('tjänare', 'en', '仆人；侍从', 'servant', 'tjänaren', 'tjänare', 'tjänarna', [
    ['En tjänare öppnade dörren.', '一个仆人开了门。'],
    ['Tjänaren bar in brickan.', '那个仆人把托盘端了进来。'],
    ['Slottet hade många tjänare.', '城堡里有很多仆人。'],
    ['Tjänarna stod i köket.', '那些仆人站在厨房里。'],
  ]), c(
    [
      ['tjäna', '侍候；服务'],
      ['-are', '做这事的人'],
    ],
    '“做侍候这件事的人”，就是仆人、侍从。',
  )),
  b1(verb('hämnas', '报仇；报复', 'to take revenge / to avenge', 'hämnas', 'hämnades', 'hämnats', 'hämnas', [
    ['Han vill hämnas på dem.', '他想报复他们。'],
    ['Hon hämnades för brodern.', '她为哥哥报了仇。'],
    ['De har hämnats redan.', '他们已经报过仇了。'],
    ['Hämnas inte nu.', '现在别报复。'],
  ]), c(
    [
      ['hämnd', '报仇'],
      ['-as', '感觉/被动动词词尾'],
    ],
    '由“报仇”变成自己去报仇、报复。',
  )),
  b1(other('allra', 'adv', '最；极其（加强最高级）', 'of all / very (with superlatives)', [
    ['Det här är allra bäst.', '这个是最好的。'],
    ['Hon kom allra först.', '她来得最早。'],
    ['Det var allra viktigast för oss.', '这对我们最重要。'],
    ['Jag vill sitta allra längst bak.', '我想坐在最后面。'],
  ]), c(
    [
      ['all', '全部'],
      ['-ra', '所有之中（旧属格）'],
    ],
    '“在所有之中”，用来加强最高级：最、极其。',
  )),
  b1(noun('senator', 'en', '参议员', 'senator', 'senatorn', 'senatorer', 'senatorerna', [
    ['En senator talade i salen.', '一位参议员在大厅发言。'],
    ['Senatorn röstade nej.', '那位参议员投了反对票。'],
    ['Flera senatorer kom sent.', '好几位参议员来晚了。'],
    ['Senatorerna samlades på morgonen.', '那些参议员早上开会。'],
  ])),
  b1(other('icke', 'adv', '不；非（较正式）', 'not / non- (formal)', [
    ['Det är icke tillåtet.', '这是不允许的。'],
    ['Hon är icke-rökare.', '她是不吸烟的人。'],
    ['Icke alla håller med.', '并非所有人都同意。'],
    ['Svara icke ännu.', '先别回答。'],
  ])),
  b1(noun('kliv', 'ett', '一大步；跨步', 'a stride / a big step', 'klivet', 'kliv', 'kliven', [
    ['Ta ett stort kliv framåt.', '向前跨一大步。'],
    ['Klivet över bäcken var långt.', '跨过小溪的那一步很长。'],
    ['Det krävs flera kliv.', '需要好几大步。'],
    ['Kliven blev kortare mot slutet.', '临近终点时那些步子变短了。'],
  ])),
  b1(noun('rån', 'ett', '抢劫', 'robbery', 'rånet', 'rån', 'rånen', [
    ['Det skedde ett rån i banken.', '银行里发生了一起抢劫。'],
    ['Rånet filmades av kameran.', '这次抢劫被摄像头拍了下来。'],
    ['Polisen utreder två rån.', '警方在调查两起抢劫。'],
    ['Rånen skedde samma natt.', '那些抢劫发生在同一夜。'],
  ])),
  b1(other('enbart', 'adv', '仅仅；只', 'only / solely', [
    ['Det var enbart ett skämt.', '那仅仅是个玩笑。'],
    ['Hon dricker enbart vatten.', '她只喝水。'],
    ['Vi har enbart tre dagar kvar.', '我们只剩三天了。'],
    ['Frågan gäller enbart dig.', '这个问题只跟你有关。'],
  ]), c(
    [
      ['en', '一；单单'],
      ['bart', '光是；仅仅'],
    ],
    '“单单光是这样”，合起来就是仅仅、只。',
  )),
  b1(verb('satsa', '投入；押注；下功夫', 'to bet / to invest / to go for', 'satsar', 'satsade', 'satsat', 'satsa', [
    ['Jag satsar på den här idén.', '我押在这个想法上。'],
    ['Hon satsade allt på utbildningen.', '她把一切都投入到学业上。'],
    ['Vi har satsat för lite tid.', '我们投入的时间太少了。'],
    ['Satsa på det du kan.', '把功夫下在你会的事情上。'],
  ])),
  b1(noun('besvär', 'ett', '麻烦；不适', 'trouble / ailment', 'besväret', 'besvär', 'besvären', [
    ['Jag vill inte göra besvär.', '我不想添麻烦。'],
    ['Besväret med knät kom tillbaka.', '膝盖的不适又来了。'],
    ['Hon har besvär med magen.', '她肠胃不舒服。'],
    ['Besvären blev värre på kvällen.', '那些不适晚上更厉害了。'],
  ]), c(
    [
      ['be-', '使役前缀'],
      ['svåra', '使变得困难'],
    ],
    '“被弄得困难”，合起来就是麻烦、身体不适。',
  )),
  b1(noun('ordförande', 'en', '主席', 'chairperson / chair', 'ordföranden', 'ordförande', 'ordförandena', [
    ['En ordförande leder mötet.', '主席主持会议。'],
    ['Ordföranden gav henne ordet.', '主席让她发言。'],
    ['Föreningen har två ordförande.', '协会有两位主席。'],
    ['Ordförandena träffades i går.', '那些主席昨天见了面。'],
  ]), c(
    [
      ['ord', '话；发言权'],
      ['förande', '引领着的'],
    ],
    '“引领发言的人”，就是主持会议的主席。',
  )),
  b1(noun('fingeravtryck', 'ett', '指纹', 'fingerprint', 'fingeravtrycket', 'fingeravtryck', 'fingeravtrycken', [
    ['Polisen hittade ett fingeravtryck.', '警察发现了一枚指纹。'],
    ['Fingeravtrycket matchade inte.', '这枚指纹对不上。'],
    ['De tog flera fingeravtryck.', '他们取了好几枚指纹。'],
    ['Fingeravtrycken fanns på glaset.', '那些指纹在玻璃杯上。'],
  ]), c(
    [
      ['finger', '手指'],
      ['avtryck', '压痕；印记'],
    ],
    '手指按下去留下的印，就是指纹。',
  )),
  b1(noun('tomte', 'en', '小精灵；圣诞老人（jultomte）', 'gnome / Santa', 'tomten', 'tomtar', 'tomtarna', [
    ['En tomte bodde i stallet.', '一个小精灵住在马厩里。'],
    ['Tomten kom med paket.', '圣诞老人带来了包裹。'],
    ['Barnen ritade tre tomtar.', '孩子们画了三个小精灵。'],
    ['Tomtarna dansade i snön.', '那些小精灵在雪地里跳舞。'],
  ])),
  b1(other('i allmänhet', 'phrase', '一般来说；通常', 'in general / generally', [
    ['I allmänhet kommer hon i tid.', '一般来说她会准时到。'],
    ['Det stämmer i allmänhet.', '这通常是对的。'],
    ['Vi äter hemma i allmänhet.', '我们一般来说在家吃饭。'],
    ['I allmänhet är vintern kall här.', '一般来说这里的冬天很冷。'],
  ]), c(
    [
      ['i', '在'],
      ['allmän', '普遍的'],
      ['-het', '性质、状态'],
    ],
    'allmänhet 是“普遍的情况”，加上 i 就是一般来说。',
  )),
  b1(adj('förste', '第一的（阳性定式）', 'first (masculine definite)', 'första', 'första', [
    ['Han var den förste på plats.', '他是第一个到场的。'],
    ['Förste officer gick i land.', '大副上了岸。'],
    ['Det första tåget har gått.', '第一班火车已经开了。'],
    ['De första gästerna kom tidigt.', '第一批客人来得很早。'],
  ])),
  b1(noun('gosse', 'en', '男孩（较旧）', 'boy / lad (somewhat dated)', 'gossen', 'gossar', 'gossarna', [
    ['En gosse lekte på gården.', '一个男孩在院子里玩。'],
    ['Gossen bar en röd mössa.', '那个男孩戴着红帽子。'],
    ['Två gossar sprang förbi.', '两个男孩跑过去了。'],
    ['Gossarna skrattade högt.', '那些男孩大声笑。'],
  ])),
  b1(noun('borrtorn', 'ett', '钻塔', 'derrick / drilling tower', 'borrtornet', 'borrtorn', 'borrtornen', [
    ['Ett borrtorn syns från vägen.', '从路上能看见一座钻塔。'],
    ['Borrtornet står ute till havs.', '那座钻塔立在海上。'],
    ['De byggde flera borrtorn.', '他们建了好几座钻塔。'],
    ['Borrtornen lyser om natten.', '那些钻塔夜里亮着灯。'],
  ]), c(
    [
      ['borr / borra', '钻；钻孔'],
      ['torn', '塔'],
    ],
    '用来钻孔的塔，就是钻塔。',
  )),
  b1(noun('läpp', 'en', '嘴唇', 'lip', 'läppen', 'läppar', 'läpparna', [
    ['Hon bet sig i läppen.', '她咬了一下嘴唇。'],
    ['Läppen var sprucken.', '那片嘴唇裂了。'],
    ['Han har torra läppar.', '他嘴唇很干。'],
    ['Läpparna var röda av kylan.', '嘴唇被冻红了。'],
  ])),
  b1(noun('vansinne', 'ett', '疯狂；荒唐', 'madness / insanity', 'vansinnet', null, null, [
    ['Det vore vansinne att ge upp nu.', '现在放弃会是荒唐的。'],
    ['Vansinnet måste få ett slut.', '这种疯狂必须结束。'],
    ['Hon kallade planen för vansinne.', '她说这个计划是疯了。'],
    ['Rent vansinne, sa han.', '纯粹是疯狂，他说。'],
  ]), c(
    [
      ['van-', '乱的；不正常的'],
      ['sinne', '心智；头脑'],
    ],
    '“不正常的心智”，合起来就是疯狂、荒唐。',
  )),
  b1(other('åter', 'adv', '再；回来（较书面）', 'again / back (somewhat formal)', [
    ['Hon kom åter till byn.', '她回到了村子。'],
    ['Vi ses åter i morgon.', '我们明天再见。'],
    ['Problemet dök åter upp.', '问题再次出现。'],
    ['Kom åter hit.', '回到这里来。'],
  ])),
  b1(verb('hota', '威胁', 'to threaten', 'hotar', 'hotade', 'hotat', 'hota', [
    ['De hotar att gå.', '他们威胁说要走。'],
    ['Han hotade vittnet.', '他威胁了证人。'],
    ['Företaget har hotat med avsked.', '公司以解雇相威胁。'],
    ['Hota inte barnen.', '别威胁孩子们。'],
  ])),
  b1(adj('grym', '残酷的；极棒的（口语）', 'cruel / (colloquial) awesome', 'grymt', 'grymma', [
    ['Det var en grym diktator.', '那是一个残酷的独裁者。'],
    ['Ett grymt brott.', '一起残酷的罪行。'],
    ['De grymma orden sårade henne.', '那些残酷的话伤害了她。'],
    ['Filmen var grym!', '这部电影太棒了！'],
  ], { comparative: 'grymmare', superlative: 'grymmast' })),
  b1(verb('glo', '盯着看（口语）', 'to stare (colloquial)', 'glor', 'glodde', 'glott', 'glo', [
    ['Varför glor du på mig?', '你为什么盯着我看？'],
    ['Barnen glodde på skärmen.', '孩子们盯着屏幕。'],
    ['Vi har glott för länge.', '我们盯得太久了。'],
    ['Glo inte så.', '别那样盯着看。'],
  ])),
  b1(other('i förhållande till', 'phrase', '相对于；与……相比', 'in relation to / compared with', [
    ['Hyran är hög i förhållande till lönen.', '相对于工资，房租很高。'],
    ['Hur ligger vi i förhållande till dem?', '我们和他们相比怎么样？'],
    ['Priset är lågt i förhållande till kvaliteten.', '相对于质量，价格很低。'],
    ['I förhållande till i fjol är det varmare.', '和去年相比更暖和。'],
  ]), c(
    [
      ['i', '在'],
      ['förhållande', '关系；比例'],
      ['till', '朝向；对于'],
    ],
    '“处在与……的关系里”，就是相对于、相比。',
  )),
  b1(other('var och en', 'pron', '每一个；各自', 'each one / everyone individually', [
    ['Var och en fick en lapp.', '每个人都拿到一张纸条。'],
    ['Det gäller var och en av oss.', '这关系到我们每一个人。'],
    ['Var och en sköter sitt.', '各人管各人的事。'],
    ['Hon talade med var och en.', '她和每一个人都谈了。'],
  ]), c(
    [
      ['var', '每一个'],
      ['och', '和'],
      ['en', '一个'],
    ],
    '“每一个和一个”，就是各自、每一个人。',
  )),
  b1(adj('besatt', '着魔的；沉迷的', 'possessed / obsessed', 'besatt', 'besatta', [
    ['Han verkade helt besatt.', '他看起来完全着魔了。'],
    ['Ett besatt uttryck i ögonen.', '眼里有一种着魔的神情。'],
    ['De besatta fansen väntade i kö.', '那些入迷的粉丝在排队。'],
    ['Hon är besatt av jobbet.', '她对工作很沉迷。'],
  ]), c(
    [
      ['be-', '构词前缀'],
      ['satt', '被放上；被占住（sätta 的过分词）'],
    ],
    '“被占住了”，合起来就是着魔、沉迷。',
  )),
  b1(verb('supa', '酗酒；喝（烈酒）', 'to booze / to drink heavily', 'super', 'söp', 'supit', 'sup', [
    ['Han super för mycket.', '他酒喝得太多。'],
    ['De söp hela natten.', '他们喝了一整夜。'],
    ['Har du supit sen sist?', '从那以后你又喝过吗？'],
    ['Sup inte i morgon.', '明天别喝。'],
  ])),
  b1(other('itu', 'adv', '成两半；裂开', 'in two / apart', [
    ['Glaset gick itu.', '玻璃杯裂成了两半。'],
    ['Hon slog vasen itu.', '她把花瓶打成了两半。'],
    ['Pinnen bröts itu.', '木棍断成了两截。'],
    ['Gå inte itu nu.', '可别现在就散架。'],
  ]), c(
    [
      ['i', '成；在'],
      ['tu', '二（旧词）'],
    ],
    '“成了二”，就是裂成两半。',
  )),
  b1(other('i stort sett', 'phrase', '大体上；差不多', 'by and large / more or less', [
    ['I stort sett är vi överens.', '我们大体上意见一致。'],
    ['Det är i stort sett klart.', '这差不多完成了。'],
    ['Vädret är i stort sett bra.', '天气大体上还好。'],
    ['I stort sett samma sak hände i fjol.', '大体上去年也发生了同样的事。'],
  ]), c(
    [
      ['i', '在'],
      ['stort', '大的（中性）'],
      ['sett', '看来；看来如此'],
    ],
    '“从大处看来”，就是大体上、差不多。',
  )),
  b1(other('snarare', 'adv', '宁可；不如说', 'rather / sooner', [
    ['Jag tar teet snarare än kaffet.', '我宁可喝茶也不喝咖啡。'],
    ['Det är snarare ett skämt.', '那不如说是个玩笑。'],
    ['Hon blir snarare glad än ledsen.', '她与其说难过，不如说高兴。'],
    ['Kom snarare i dag än i morgon.', '宁可今天来，别明天来。'],
  ]), c(
    [
      ['snart', '很快'],
      ['-are', '比较级'],
    ],
    '“更快地（选这个）”，合起来就是宁可、不如说。',
  )),
  b1(other('förbannat', 'adv', '该死地；非常（粗）', 'damn / damned (coarse)', [
    ['Det är förbannat kallt.', '冷得要命。'],
    ['Jag är förbannat trött.', '我累得要命。'],
    ['Det gick förbannat bra.', '进展得该死地好。'],
    ['Hon blev förbannat arg.', '她气得要命。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['banna', '咒骂'],
      ['-t', '中性/副词词尾'],
    ],
    '“被狠狠咒过的”，作副词就是该死地、非常。',
  )),
  b1(noun('främling', 'en', '陌生人；外乡人', 'stranger / foreigner', 'främlingen', 'främlingar', 'främlingarna', [
    ['En främling stod vid grinden.', '一个陌生人站在大门边。'],
    ['Främlingen frågade om vägen.', '那个陌生人问路。'],
    ['Byborna litar inte på främlingar.', '村民不信任外乡人。'],
    ['Främlingarna fick sova i ladan.', '那些外乡人睡在谷仓里。'],
  ]), c(
    [
      ['främmande', '陌生的；外来的'],
      ['-ling', '这类人'],
    ],
    '“外来的人”，就是陌生人、外乡人。',
  )),
  b1(verb('upprepa', '重复', 'to repeat', 'upprepar', 'upprepade', 'upprepat', 'upprepa', [
    ['Kan du upprepa frågan?', '你能把问题重复一遍吗？'],
    ['Hon upprepade namnet långsamt.', '她慢慢地重复了那个名字。'],
    ['Vi har upprepat felet.', '我们把错误又犯了一遍。'],
    ['Upprepa efter mig.', '跟我重复。'],
  ]), c(
    [
      ['upp', '再；向上'],
      ['repa', '再来一遍（构词词根）'],
    ],
    '“再来一遍”，就是重复。',
  )),
  b1(other('uppenbart', 'adv', '显然；明显', 'obviously / apparently', [
    ['Det är uppenbart fel.', '这显然是错的。'],
    ['Hon är uppenbart trött.', '她明显很累。'],
    ['Det blev uppenbart efteråt.', '事后就显而易见了。'],
    ['Uppenbart visste han ingenting.', '显然他什么都不知道。'],
  ]), c(
    [
      ['upp', '出来；向上'],
      ['enbar', '显现的；明白的'],
      ['-t', '中性/副词词尾'],
    ],
    '“已经显现出来的”，就是显然、明显。',
  )),
  b1(verb('bete sig', '表现；举止', 'to behave', 'beter sig', 'betedde sig', 'betett sig', 'bete dig', [
    ['Hon kan inte bete sig.', '她不会规矩做人。'],
    ['Han betedde sig konstigt i går.', '他昨天举止很奇怪。'],
    ['De har betett sig illa.', '他们表现得很差。'],
    ['Bete dig nu.', '现在规矩一点。'],
  ]), c(
    [
      ['be-', '构词前缀'],
      ['te', '显现'],
      ['sig', '自己'],
    ],
    '“让自己显现出来”，合起来就是表现、举止。',
  )),
  b1(noun('förrädare', 'en', '叛徒', 'traitor', 'förrädaren', 'förrädare', 'förrädarna', [
    ['Han kallades för förrädare.', '他被称为叛徒。'],
    ['Förrädaren lämnade staden.', '那个叛徒离开了城市。'],
    ['De sökte efter förrädare.', '他们在搜捕叛徒。'],
    ['Förrädarna greps i natt.', '那些叛徒夜里被抓住了。'],
  ]), c(
    [
      ['förråda', '出卖；背叛'],
      ['-are', '做这事的人'],
    ],
    '“做背叛这件事的人”，就是叛徒。',
  )),
  b1(noun('gryning', 'en', '黎明', 'dawn', 'gryningen', 'gryningar', 'gryningarna', [
    ['Vi gick ut i gryningen.', '我们在黎明时分出门。'],
    ['Gryningen kom långsamt.', '黎明来得很慢。'],
    ['De kalla gryningarna är vackra.', '那些寒冷的黎明很美。'],
    ['Gryningarna över sjön är tysta.', '湖上的那些黎明很安静。'],
  ]), c(
    [
      ['gry', '破晓'],
      ['-ning', '行为名词后缀'],
    ],
    '由“破晓”这个动作变成名词，就是黎明。',
  )),
  b1(noun('tant', 'en', '大妈；阿姨（口语）', 'lady / auntie (informal)', 'tanten', 'tanter', 'tanterna', [
    ['En tant satt på bänken.', '一位大妈坐在长椅上。'],
    ['Tanten log mot barnet.', '那位阿姨对孩子笑了。'],
    ['Flera tanter väntade i kön.', '好几位大妈在排队。'],
    ['Tanterna drack kaffe.', '那些阿姨在喝咖啡。'],
  ])),
  b1(adj('inre', '内部的；内心的', 'inner / internal', 'inre', 'inre', [
    ['Det är en inre angelägenhet.', '这是内部事务。'],
    ['Hon sökte inre frid.', '她在寻找内心的平静。'],
    ['De inre rummen är mörka.', '那些内部的房间很暗。'],
    ['Det innersta rummet är låst.', '最里面的房间锁着。'],
  ], { superlative: 'innerst' })),
  b1(adj('svartsjuk', '吃醋的；妒忌的', 'jealous', 'svartsjukt', 'svartsjuka', [
    ['Han blir svartsjuk utan orsak.', '他无缘无故就吃醋。'],
    ['Ett svartsjukt svar.', '一个吃醋的回答。'],
    ['De svartsjuka blickarna märktes.', '那些妒忌的目光被注意到了。'],
    ['Hon är svartsjuk på kollegan.', '她妒忌那个同事。'],
  ]), c(
    [
      ['svart', '黑的'],
      ['sjuk', '有病的'],
    ],
    '“黑病”，就像心里发黑生病，合起来就是吃醋、妒忌。',
  )),
  b1(noun('slav', 'en', '奴隶', 'slave', 'slaven', 'slavar', 'slavarna', [
    ['Han behandlades som en slav.', '他被当成奴隶对待。'],
    ['Slaven fick ingen lön.', '那个奴隶没有工钱。'],
    ['De befriade många slavar.', '他们解放了许多奴隶。'],
    ['Slavarna reste sig.', '那些奴隶起来反抗了。'],
  ])),
  b1(noun('afton', 'en', '傍晚；晚上（较书面）', 'evening (somewhat formal)', 'aftonen', 'aftnar', 'aftnarna', [
    ['Vi ses i afton.', '我们今晚见。'],
    ['Aftonen var stilla.', '那个傍晚很安静。'],
    ['De kalla aftnarna kommer tidigt.', '那些寒冷的傍晚会来得很早。'],
    ['Aftnarna vid sjön är vackra.', '湖边的那些傍晚很美。'],
  ])),
  b1(noun('fegis', 'en', '胆小鬼（口语）', 'coward (informal)', 'fegisen', 'fegisar', 'fegisarna', [
    ['Kalla mig inte för fegis.', '别叫我胆小鬼。'],
    ['Fegisen vågade inte hoppa.', '那个胆小鬼不敢跳。'],
    ['Bara fegisar ger upp.', '只有胆小鬼才放弃。'],
    ['Fegisarna stannade kvar.', '那些胆小鬼留了下来。'],
  ]), c(
    [
      ['feg', '胆小的'],
      ['-is', '口语里指这类人'],
    ],
    '“胆小的那种人”，口语里就是胆小鬼。',
  )),
  b1(adj('förtjusande', '迷人的；讨人喜欢的', 'charming / delightful', 'förtjusande', 'förtjusande', [
    ['Hon är en förtjusande gäst.', '她是一位迷人的客人。'],
    ['Ett förtjusande leende.', '一个讨人喜欢的微笑。'],
    ['De förtjusande barnen sjöng.', '那些讨人喜欢的孩子在唱歌。'],
    ['Vädret var förtjusande.', '天气好极了。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['tjusande', '迷人的（tjusning 魅力）'],
    ],
    '“非常迷人的”，就是讨人喜欢、迷人。',
  )),
  b1(adj('underlig', '奇怪的；古怪的', 'strange / odd', 'underligt', 'underliga', [
    ['Det var en underlig dröm.', '那是一个奇怪的梦。'],
    ['Ett underligt ljud hördes.', '听到了一声古怪的响动。'],
    ['De underliga frågorna fortsatte.', '那些古怪的问题还在继续。'],
    ['Hon är underligare än jag trodde.', '她比我以为的更古怪。'],
  ], { comparative: 'underligare', superlative: 'underligast' }), c(
    [
      ['under', '奇迹；不可思议的事'],
      ['-lig', '带这种性质的'],
    ],
    '“像奇迹一样的”，不是“下面的”，合起来就是奇怪、古怪。',
  )),
  b1(noun('förstärkning', 'en', '增援；加强', 'reinforcement', 'förstärkningen', 'förstärkningar', 'förstärkningarna', [
    ['De väntade på förstärkning.', '他们在等增援。'],
    ['Förstärkningen kom för sent.', '增援来得太晚了。'],
    ['Vi behöver flera förstärkningar.', '我们需要多几路增援。'],
    ['Förstärkningarna anlände i natt.', '那些增援夜里到了。'],
  ]), c(
    [
      ['förstärka', '加强；加固'],
      ['-ning', '行为名词后缀'],
    ],
    '由“加强”这个动作变成名词，就是一次增援、加强。',
  )),
  b1(verb('förstärka', '加强；加固', 'to reinforce / to strengthen', 'förstärker', 'förstärkte', 'förstärkt', 'förstärk', [
    ['Vi måste förstärka bron.', '我们必须加固这座桥。'],
    ['De förstärkte laget i höstas.', '他们秋天给球队增了援。'],
    ['Muren har förstärkts.', '墙已经加固了。'],
    ['Förstärk dörren.', '把这扇门加固。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['stärka', '使强壮'],
    ],
    '“进一步使强壮”，就是加强、加固。',
  )),
  b1(verb('blunda', '闭眼；装作没看见', 'to close one\'s eyes / to turn a blind eye', 'blundar', 'blundade', 'blundat', 'blunda', [
    ['Hon blundar i solljuset.', '她在阳光下闭上眼睛。'],
    ['Han blundade för sanningen.', '他对真相装作没看见。'],
    ['Vi har blundat för länge.', '我们对这件事装瞎太久了。'],
    ['Blunda och räkna till tio.', '闭上眼睛数到十。'],
  ]), c(
    [
      ['blund', '一闭眼；小睡'],
      ['-a', '动词词尾'],
    ],
    '“做一个闭眼的动作”，也引申为装作没看见。',
  )),
  b1(verb('sikta', '瞄准；打算', 'to aim / to intend', 'siktar', 'siktade', 'siktat', 'sikta', [
    ['Han siktar på målet.', '他瞄准目标。'],
    ['Hon siktade mot dörren.', '她朝门那边瞄准。'],
    ['Vi har siktat för högt.', '我们目标定得太高了。'],
    ['Sikta noga.', '仔细瞄准。'],
  ])),
  b1(noun('proffs', 'ett', '职业选手；专业人士（口语）', 'pro / professional (informal)', 'proffset', 'proffs', 'proffsen', [
    ['Han är ett proffs på det.', '他在这方面是专业的。'],
    ['Proffset vann matchen.', '那位职业选手赢了比赛。'],
    ['Laget har flera proffs.', '队里有好几名职业选手。'],
    ['Proffsen tränar varje dag.', '那些职业选手每天训练。'],
  ])),
  b1(verb('utföra', '执行；完成', 'to carry out / to perform', 'utför', 'utförde', 'utfört', 'utför', [
    ['Vi ska utföra planen.', '我们要执行这个计划。'],
    ['Hon utförde uppdraget.', '她完成了任务。'],
    ['Arbetet är redan utfört.', '工作已经做完了。'],
    ['Utför ordern.', '执行命令。'],
  ]), c(
    [
      ['ut', '出去'],
      ['föra', '带领；进行'],
    ],
    '“把事情做出去”，就是执行、完成。',
  )),
  b1(noun('verk', 'ett', '作品；事业', 'work / oeuvre', 'verket', 'verk', 'verken', [
    ['Det är ett stort verk.', '那是一部大作品。'],
    ['Verket kom ut i fjol.', '这部作品去年出版。'],
    ['Hon har skrivit flera verk.', '她写过好几部作品。'],
    ['Verken står i hyllan.', '那些作品在书架上。'],
  ])),
  b1(verb('döma', '判决；评判', 'to sentence / to judge', 'dömer', 'dömde', 'dömt', 'döm', [
    ['Domstolen ska döma i morgon.', '法院明天宣判。'],
    ['Han dömdes till fängelse.', '他被判了监禁。'],
    ['De har dömt för hårt.', '他们判得太重了。'],
    ['Döm inte så snabbt.', '别这么快下判断。'],
  ])),
  b1(noun('ton', 'en', '语气；音调', 'tone / pitch', 'tonen', 'toner', 'tonerna', [
    ['Hon talade med en hård ton.', '她用强硬的语气说话。'],
    ['Tonen i mailet var kall.', '那封邮件的语气很冷。'],
    ['Sången har tre toner.', '这首歌有三个音。'],
    ['Tonerna blev mörkare.', '那些音调变低了。'],
  ])),
  b1(noun('ström', 'en', '水流；电流', 'current / stream', 'strömmen', 'strömmar', 'strömmarna', [
    ['En stark ström drog båten.', '一股急流拖着船。'],
    ['Strömmen gick i hela huset.', '整栋房子都来电了。'],
    ['Det finns flera strömmar i ån.', '河里有好几股水流。'],
    ['Strömmarna är farliga här.', '这里的那些急流很危险。'],
  ])),
  b1(verb('välsigna', '祝福；保佑', 'to bless', 'välsignar', 'välsignade', 'välsignat', 'välsigna', [
    ['Prästen välsignar barnet.', '牧师祝福这个孩子。'],
    ['Hon välsignade oss innan vi gick.', '我们走之前她祝福了我们。'],
    ['Måltiden är välsignad.', '这顿饭已经祝过福了。'],
    ['Välsigna det här huset.', '保佑这栋房子。'],
  ]), c(
    [
      ['väl', '好好地'],
      ['signa', '画十字；祝福'],
    ],
    '“好好地祝福”，就是保佑。',
  )),
  b1(verb('befria', '解放；使摆脱', 'to free / to liberate', 'befriar', 'befriade', 'befriat', 'befria', [
    ['De vill befria fångarna.', '他们想解放那些囚犯。'],
    ['Hon befriade honom från skulden.', '她让他摆脱了那笔债。'],
    ['Staden har befriats.', '这座城市已经被解放了。'],
    ['Befria oss från det här.', '让我们摆脱这件事。'],
  ]), c(
    [
      ['be-', '使役前缀'],
      ['fria', '使自由'],
    ],
    '“使变得自由”，就是解放、使摆脱。',
  )),
  b1(other('så småningom', 'phrase', '渐渐地；终于', 'eventually / gradually', [
    ['Så småningom förstod hon.', '她渐渐明白了。'],
    ['Vi kom fram så småningom.', '我们终于到了。'],
    ['Så småningom blev det tyst.', '渐渐地安静了下来。'],
    ['Han lärde sig så småningom.', '他渐渐学会了。'],
  ]), c(
    [
      ['så', '如此；就这样'],
      ['småningom', '一点点地'],
    ],
    '“就这样一点点地”，就是渐渐地、终于。',
  )),
  b1(other('inom ramen för', 'phrase', '在……范围内；在……框架内', 'within the framework of', [
    ['Det sker inom ramen för lagen.', '这是在法律范围内进行的。'],
    ['Inom ramen för projektet har vi tid.', '在这个项目的框架内我们有时间。'],
    ['Hon agerade inom ramen för sitt uppdrag.', '她在自己职责范围内行事。'],
    ['Håll dig inom ramen för avtalet.', '请待在合同范围内。'],
  ]), c(
    [
      ['inom', '在……之内'],
      ['ramen', '框架（ram 的定式）'],
      ['för', '对于'],
    ],
    '“在这个框架之内”，就是在……范围内。',
  )),
  b1(noun('drake', 'en', '龙；风筝', 'dragon / kite', 'draken', 'drakar', 'drakarna', [
    ['Barnet ritade en drake.', '孩子画了一条龙。'],
    ['Draken flög över byn.', '那条龙／那个风筝飞过村子。'],
    ['Vi såg tre drakar i luften.', '我们看见天上有三个风筝。'],
    ['Drakarna i sagan är gröna.', '故事里的那些龙是绿色的。'],
  ])),
  b1(noun('borgmästare', 'en', '市长', 'mayor', 'borgmästaren', 'borgmästare', 'borgmästarna', [
    ['En borgmästare talade på torget.', '一位市长在广场上讲话。'],
    ['Borgmästaren öppnade mötet.', '市长宣布开会。'],
    ['De två borgmästarna möttes.', '那两位市长见了面。'],
    ['Borgmästarna skakade hand.', '那些市长握了手。'],
  ]), c(
    [
      ['borg', '城堡；市镇'],
      ['mästare', '主人；掌管者'],
    ],
    '“市镇的掌管者”，就是市长。',
  )),
  b1(noun('party', 'ett', '派对；聚会', 'party', 'partyt', 'partyn', 'partyna', [
    ['Vi ska på ett party i kväll.', '我们今晚要去一个派对。'],
    ['Partyt slutade sent.', '那个派对结束得很晚。'],
    ['De hade tre partyn i juli.', '他们七月办了三次聚会。'],
    ['Partyna var för högljudda.', '那些派对太吵了。'],
  ])),
  b1(adj('kvitt', '两清的；摆脱了的', 'quits / rid of', 'kvitt', 'kvitt', [
    ['Nu är vi kvitt.', '现在我们两清了。'],
    ['Ge mig tjugo så är vi kvitt.', '给我二十块我们就两清了。'],
    ['Hon vill bli kvitt förkylningen.', '她想摆脱感冒。'],
    ['Jag är äntligen kvitt oron.', '我终于摆脱了担心。'],
  ])),
  b1(noun('trupp', 'en', '部队；一队人', 'troop / squad', 'truppen', 'trupper', 'trupperna', [
    ['En trupp gick över bron.', '一支部队过了桥。'],
    ['Truppen stannade vid gränsen.', '那支部队停在边境。'],
    ['De skickade flera trupper.', '他们派出了好几支部队。'],
    ['Trupperna drog sig tillbaka.', '那些部队撤退了。'],
  ])),
  b1(noun('snubbe', 'en', '家伙；男的（口语）', 'guy (informal)', 'snubben', 'snubbar', 'snubbarna', [
    ['En snubbe frågade om vägen.', '一个家伙问路。'],
    ['Snubben vid disken väntade.', '柜台边那个男的在等。'],
    ['Två snubbar kom in.', '两个家伙走了进来。'],
    ['Snubbarna skrattade.', '那些家伙在笑。'],
  ])),
  b1(adj('otrogen', '不忠的；不忠实的', 'unfaithful', 'otroget', 'otrogna', [
    ['Han var otrogen mot henne.', '他对她不忠。'],
    ['Ett otroget löfte.', '一个不忠实的承诺。'],
    ['De otrogna makarna bråkade.', '那对不忠的夫妻吵了起来。'],
    ['Hon kände sig otrogen.', '她觉得自己不忠。'],
  ]), c(
    [
      ['o-', '否定前缀'],
      ['trogen', '忠实的'],
    ],
    '“不忠实的”，就是不忠。',
  )),
  b1(noun('egendom', 'en', '财产；产业', 'property / estate', 'egendomen', 'egendomar', 'egendomarna', [
    ['Huset är min egendom.', '这房子是我的财产。'],
    ['Egendomen gick i arv.', '这份产业被继承了。'],
    ['De ägde flera egendomar.', '他们拥有好几处产业。'],
    ['Egendomarna såldes i fjol.', '那些产业去年卖掉了。'],
  ]), c(
    [
      ['egen', '自己的'],
      ['-dom', '状态、领域后缀'],
    ],
    '“属于自己的东西”，就是财产、产业。',
  )),
  b1(other('i själva verket', 'phrase', '实际上；其实', 'in fact / actually', [
    ['I själva verket visste hon redan.', '其实她已经知道了。'],
    ['Det är i själva verket enkelt.', '这实际上很简单。'],
    ['Han är i själva verket rädd.', '他其实很害怕。'],
    ['I själva verket var det ett skämt.', '实际上那是个玩笑。'],
  ]), c(
    [
      ['i', '在'],
      ['själva', '本身的'],
      ['verket', '事情本身（verk 的定式）'],
    ],
    '“就在事情本身里”，就是实际上、其实。',
  )),
  b1(adj('korkad', '蠢的（口语）', 'stupid (informal)', 'korkat', 'korkade', [
    ['Det var en korkad idé.', '那是个蠢主意。'],
    ['Ett korkat svar.', '一个蠢回答。'],
    ['De korkade skämten slutade.', '那些蠢笑话停了。'],
    ['Jag kände mig korkad.', '我觉得自己挺蠢的。'],
  ]), c(
    [
      ['kork', '瓶塞'],
      ['-ad', '形容词词尾'],
    ],
    '像脑子被瓶塞堵住，口语里就是蠢。',
  )),
  b1(verb('rymma', '逃走；装得下', 'to escape / to hold (volume)', 'rymmer', 'rymde', 'rymt', 'rym', [
    ['Fången rymde i natt.', '囚犯夜里逃走了。'],
    ['Hur många ryms i bilen?', '车里能坐下多少人？'],
    ['De har rymt från lägret.', '他们从营地逃走了。'],
    ['Rym inte nu.', '现在别逃。'],
  ])),
  b1(noun('bana', 'en', '跑道；轨道；生涯', 'track / path / career', 'banan', 'banor', 'banorna', [
    ['Tåget gick av banan.', '火车脱轨了。'],
    ['Banan är isig i dag.', '今天跑道结冰了。'],
    ['Hon bytte bana efter examen.', '她毕业后换了行业。'],
    ['Banorna i hallen är upptagna.', '馆里的那些跑道都被占了。'],
  ])),
  b1(verb('svika', '辜负；背叛', 'to let down / to betray', 'sviker', 'svek', 'svikit', 'svik', [
    ['Jag ska inte svika dig.', '我不会辜负你。'],
    ['Han svek sitt löfte.', '他违背了自己的诺言。'],
    ['De har svikit oss förr.', '他们以前辜负过我们。'],
    ['Svik inte vännerna.', '别背叛朋友。'],
  ])),
  b1(noun('grand', 'ett', '一点点', 'a bit / a whit', 'grandet', null, null, [
    ['Det är inte ett grand sant.', '这一点也不真。'],
    ['Jag förstår ett litet grand.', '我懂一点点。'],
    ['Grandet i ögat retade henne.', '眼里那一点东西惹得她难受。'],
    ['Inte ett grand bättre.', '一点也没有好转。'],
  ])),
  b1(noun('bluff', 'en', '唬人；骗局', 'bluff', 'bluffen', 'bluffar', 'bluffarna', [
    ['Det var bara en bluff.', '那只是唬人。'],
    ['Bluffen avslöjades snabbt.', '这个骗局很快被揭穿。'],
    ['Han har kört flera bluffar.', '他玩过好几次唬人。'],
    ['Bluffarna funkade inte.', '那些唬人没用。'],
  ])),
  b1(noun('låt', 'en', '歌曲（口语）', 'song (informal)', 'låten', 'låtar', 'låtarna', [
    ['Det är en bra låt.', '这是一首好歌。'],
    ['Låten gick på radio.', '那首歌在电台播了。'],
    ['De spelade tre låtar.', '他们演奏了三首歌。'],
    ['Låtarna är korta.', '那些歌都很短。'],
  ])),
  b1(verb('spöa', '打；揍（口语）', 'to beat / to thrash (informal)', 'spöar', 'spöade', 'spöat', 'spöa', [
    ['De spöar motståndarna.', '他们把对手打趴下了。'],
    ['Han spöade mig i schack.', '他下棋把我打得很惨。'],
    ['Laget har spöat alla.', '这支队把所有人都揍过了。'],
    ['Spöa dem inte för hårt.', '别把他们打得太狠。'],
  ]), c(
    [
      ['spö', '鞭子；棍子'],
      ['-a', '动词词尾'],
    ],
    '“用鞭子打”，口语里就是揍、打得很惨。',
  )),
  b1(noun('överlevande', 'en', '幸存者', 'survivor', 'överlevanden', 'överlevande', 'överlevandena', [
    ['En överlevande hittades i huset.', '在房子里找到一名幸存者。'],
    ['Överlevanden berättade allt.', '那名幸存者把一切都说了。'],
    ['Det fanns tre överlevande.', '有三名幸存者。'],
    ['Överlevandena fick hjälp.', '那些幸存者得到了帮助。'],
  ]), c(
    [
      ['över', '度过；越过'],
      ['levande', '活着的'],
    ],
    '“活过来的人”，就是幸存者。',
  )),
  b1(verb('slita', '撕；拼命干', 'to tear / to toil', 'sliter', 'slet', 'slitit', 'slit', [
    ['Hon sliter med jobbet.', '她拼命干这份工作。'],
    ['Han slet upp kuvertet.', '他撕开了信封。'],
    ['Vi har slitit hela dagen.', '我们干了一整天。'],
    ['Slit inte i tyget.', '别撕那块布。'],
  ])),
  b1(other('på så sätt', 'phrase', '这样一来；以这种方式', 'in that way / thus', [
    ['På så sätt sparar vi tid.', '这样一来我们能省时间。'],
    ['Hon löste det på så sätt.', '她是用这种方式解决的。'],
    ['På så sätt blir det tydligt.', '这样一来就清楚了。'],
    ['Vi kan hjälpa på så sätt.', '我们可以用这种方式帮忙。'],
  ]), c(
    [
      ['på', '以；在'],
      ['så', '这样'],
      ['sätt', '方式'],
    ],
    '“以这样的方式”，就是这样一来。',
  )),
  b1(adj('känslig', '敏感的；易受伤的', 'sensitive', 'känsligt', 'känsliga', [
    ['Han är känslig för kritik.', '他对批评很敏感。'],
    ['Ett känsligt ämne.', '一个敏感话题。'],
    ['Den känsliga huden blev röd.', '那块敏感的皮肤变红了。'],
    ['Hon är känsligare än du tror.', '她比你以为的更敏感。'],
  ], { comparative: 'känsligare', superlative: 'känsligast' }), c(
    [
      ['känsla', '感觉'],
      ['-ig', '带这种性质的'],
    ],
    '“容易有感觉的”，就是敏感的。',
  )),
  b1(adj('medveten', '意识到的；清醒的', 'aware / conscious', 'medvetet', 'medvetna', [
    ['Är du medveten om risken?', '你意识到风险了吗？'],
    ['Ett medvetet val.', '一个有意识的选择。'],
    ['De medvetna patienterna nickade.', '那些清醒的病人点了头。'],
    ['Hon är medveten om felet.', '她意识到了那个错误。'],
  ]), c(
    [
      ['med', '带着'],
      ['veten', '知道的（veta 知道）'],
    ],
    '“心里带着知道”，就是意识到的、清醒的。',
  )),
  b1(noun('skugga', 'en', '影子；阴影', 'shadow', 'skuggan', 'skuggor', 'skuggorna', [
    ['En skugga föll över golvet.', '一道影子落在地板上。'],
    ['Skuggan följde efter oss.', '那个影子跟着我们。'],
    ['Träden ger flera skuggor.', '树投下好几片阴影。'],
    ['Skuggorna blev längre mot kvällen.', '那些影子临近傍晚变长了。'],
  ])),
  b1(verb('pissa', '撒尿（口语）', 'to pee (informal)', 'pissar', 'pissade', 'pissat', 'pissa', [
    ['Hunden pissar mot trädet.', '狗对着树撒尿。'],
    ['Han pissade bakom huset.', '他在房子后面撒了尿。'],
    ['Någon har pissat här.', '有人在这里撒过尿。'],
    ['Pissa inte på golvet.', '别在地板上撒尿。'],
  ])),
  b1(noun('förlåtelse', 'en', '原谅；宽恕', 'forgiveness', 'förlåtelsen', 'förlåtelser', 'förlåtelserna', [
    ['Hon bad om förlåtelse.', '她请求原谅。'],
    ['Förlåtelsen kom sent.', '那份宽恕来得很晚。'],
    ['Vi behöver förlåtelse.', '我们需要原谅。'],
    ['Förlåtelserna var uppriktiga.', '那些原谅是真诚的。'],
  ]), c(
    [
      ['förlåta', '原谅'],
      ['-else', '行为名词后缀'],
    ],
    '由“原谅”这个动作变成名词，就是一次原谅、宽恕。',
  )),
  b1(noun('enhet', 'en', '单位；单元', 'unit', 'enheten', 'enheter', 'enheterna', [
    ['Priset anges per enhet.', '价格按单位标。'],
    ['Enheten flyttades till stan.', '这个单位搬到了城里。'],
    ['Boken har tio enheter.', '这本书有十个单元。'],
    ['Enheterna samarbetar.', '那些单位在合作。'],
  ]), c(
    [
      ['en', '一'],
      ['-het', '性质、状态'],
    ],
    '“作为一的状态”，就是一个单位、单元。',
  )),
  b1(noun('knipa', 'en', '困境；窘境', 'predicament / pinch', 'knipan', 'knipor', 'kniporna', [
    ['Han är i knipa.', '他陷入了困境。'],
    ['Knipan blev värre.', '那个窘境更糟了。'],
    ['Vi har varit i liknande knipor.', '我们遇到过类似的困境。'],
    ['Kniporna löste sig till slut.', '那些窘境最后解开了。'],
  ])),
  b1(noun('bekymmer', 'ett', '烦恼；忧虑', 'worry / concern', 'bekymret', 'bekymmer', 'bekymren', [
    ['Det är inget bekymmer.', '这不是什么烦恼。'],
    ['Bekymret höll henne vaken.', '那个忧虑让她睡不着。'],
    ['Hon har många bekymmer.', '她有很多烦恼。'],
    ['Bekymren släppte till sist.', '那些忧虑终于放下了。'],
  ]), c(
    [
      ['be-', '使役前缀'],
      ['kymmer', '操心、烦忧（旧词根）'],
    ],
    '“被弄得操心”，就是烦恼、忧虑。',
  )),
  b1(noun('syfte', 'ett', '目的；意图', 'purpose / aim', 'syftet', 'syften', 'syftena', [
    ['Vad är syftet med mötet?', '会议的目的是什么？'],
    ['Syftet var att hjälpa.', '意图是提供帮助。'],
    ['Planen har två syften.', '这个计划有两个目的。'],
    ['Syftena är tydliga.', '那些目的很清楚。'],
  ])),
  b1(noun('kamp', 'en', '斗争；战役', 'struggle / fight', 'kampen', 'kamper', 'kamperna', [
    ['Det blev en hård kamp.', '那是一场艰苦的斗争。'],
    ['Kampen är inte över.', '这场斗争还没有结束。'],
    ['De vann tre kamper.', '他们赢了三场。'],
    ['Kamperna var jämna.', '那些比赛打得很均势。'],
  ])),
  b1(verb('blogga', '写博客', 'to blog', 'bloggar', 'bloggade', 'bloggat', 'blogga', [
    ['Hon bloggar varje vecka.', '她每周写博客。'],
    ['Han bloggade om resan.', '他写了这次旅行的博客。'],
    ['De har bloggat i åratal.', '他们写博客已经很多年了。'],
    ['Blogga inte om det än.', '先别把这事写进博客。'],
  ]), c(
    [
      ['blogg', '博客'],
      ['-a', '动词词尾'],
    ],
    '“做一个博客”，就是写博客。',
  )),
  b1(noun('befäl', 'ett', '指挥；长官', 'command / officer', 'befälet', 'befäl', 'befälen', [
    ['Hon tog befälet.', '她接管了指挥。'],
    ['Befälet gav en order.', '长官下了一道命令。'],
    ['Flera befäl kom till platsen.', '好几位长官到了现场。'],
    ['Befälen samlades i tältet.', '那些长官在帐篷里集合。'],
  ]), c(
    [
      ['be-', '构词前缀'],
      ['falla', '下令（befalla）'],
    ],
    '由“下令”而来，指指挥权，也指长官。',
  )),
  b1(noun('antal', 'ett', '数量；数目', 'number / quantity', 'antalet', 'antal', 'antalen', [
    ['Ett stort antal gäster kom.', '来了数量很多的客人。'],
    ['Antalet ökade i år.', '这个数目今年增加了。'],
    ['Vi räknade antalet platser.', '我们数了座位数。'],
    ['Hur stort är antalet?', '这个数目有多大？'],
  ])),
  b1(verb('besegra', '击败；战胜', 'to defeat / to conquer', 'besegrar', 'besegrade', 'besegrat', 'besegra', [
    ['De ska besegra fienden.', '他们要击败敌人。'],
    ['Hon besegrade motståndaren.', '她战胜了对手。'],
    ['Laget har besegrat alla.', '这支队击败了所有人。'],
    ['Besegra rädslan.', '战胜恐惧。'],
  ]), c(
    [
      ['be-', '使役前缀'],
      ['segra', '获胜'],
    ],
    '“使对方被战胜”，就是击败。',
  )),
  b1(other('tvärtom', 'adv', '相反；恰恰相反', 'on the contrary / the other way around', [
    ['Tvärtom, det var lätt.', '恰恰相反，这很容易。'],
    ['Jag tror tvärtom.', '我的看法正相反。'],
    ['Det gick tvärtom mot planen.', '事情和计划正好相反。'],
    ['Gör tvärtom i stället.', '改成反过来做。'],
  ]), c(
    [
      ['tvär', '横着的；截然的'],
      ['om', '转过来'],
    ],
    '“横过来、反过来”，就是相反。',
  )),
  b1(noun('förhör', 'ett', '审讯；问询', 'interrogation / hearing', 'förhöret', 'förhör', 'förhören', [
    ['Polisen höll ett förhör.', '警察进行了一次审讯。'],
    ['Förhöret tog tre timmar.', '这次审讯花了三个小时。'],
    ['Det blev flera förhör.', '进行了好几次问询。'],
    ['Förhören filmades.', '那些审讯被拍了下来。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['hör', '听（höra）'],
    ],
    '“好好听一遍”，由动词 förhöra 变成名词，就是一次审讯。',
  )),
  b1(noun('konstapel', 'en', '警员（较旧）', 'constable / police officer (somewhat dated)', 'konstapeln', 'konstaplar', 'konstaplarna', [
    ['En konstapel stod vid dörren.', '一名警员站在门口。'],
    ['Konstapeln skrev upp namnet.', '那名警员记下了名字。'],
    ['Två konstaplar kom i bil.', '两名警员开车来了。'],
    ['Konstaplarna spärrade gatan.', '那些警员封锁了街道。'],
  ])),
  b1(adj('trist', '无聊的；沉闷的', 'dull / dreary / a pity', 'trist', 'trista', [
    ['Det var en trist föreläsning.', '那是一场无聊的讲座。'],
    ['Ett trist bostadsområde.', '一个沉闷的住宅区。'],
    ['De trista nyheterna kom sent.', '那些沉闷的消息来得很晚。'],
    ['Det var trist att höra.', '听到这事真让人难过。'],
  ], { comparative: 'tristare', superlative: 'tristast' })),
  b1(verb('stirra', '盯着看', 'to stare', 'stirrar', 'stirrade', 'stirrat', 'stirra', [
    ['Barnen stirrar på skärmen.', '孩子们盯着屏幕看。'],
    ['Han stirrade rakt fram.', '他直直地盯着前方。'],
    ['Hon har stirrat länge på tavlan.', '她盯着那幅画看了很久。'],
    ['Stirra inte på folk.', '别盯着人看。'],
  ])),
  b1(noun('andetag', 'ett', '一口气；一次呼吸', 'breath', 'andetaget', 'andetag', 'andetagen', [
    ['Dra ett djupt andetag.', '做一次深呼吸。'],
    ['Andetaget hördes i rummet.', '那一口气在房间里听得见。'],
    ['Hon tog tre djupa andetag.', '她做了三次深呼吸。'],
    ['Andetagen blev allt tyngre.', '那些呼吸越来越沉。'],
  ]), c(
    [
      ['anda', '气息；呼吸'],
      ['tag', '一下；一次（ta 拿）'],
    ],
    '“拿一下气”，就是一口气、一次呼吸。',
  )),
  b1(noun('miljard', 'en', '十亿', 'billion (US) / milliard', 'miljarden', 'miljarder', 'miljarderna', [
    ['Det kostar en miljard kronor.', '这要十亿克朗。'],
    ['Miljarden räcker inte.', '这十亿还不够。'],
    ['Flera miljarder människor bor här.', '有几十亿人住在这里。'],
    ['Miljarderna försvann.', '那几十亿不见了。'],
  ])),
  b1(other('slutligen', 'adv', '终于；最后', 'finally / in the end', [
    ['Slutligen kom hon fram.', '她终于到了。'],
    ['Vi valde slutligen den billigare.', '我们最后选了便宜的那个。'],
    ['Han förstod det slutligen.', '他终于明白了。'],
    ['Slutligen blev det tyst.', '最后安静了下来。'],
  ]), c(
    [
      ['slut', '结束'],
      ['-ligen', '……地'],
    ],
    '“到结束的时候”，就是终于、最后。',
  )),
  b1(verb('frukta', '害怕；担心', 'to fear', 'fruktar', 'fruktade', 'fruktat', 'frukta', [
    ['Många fruktar mörkret.', '许多人害怕黑暗。'],
    ['De fruktade det värsta.', '他们当时担心最坏的情况。'],
    ['Hon har fruktat detta länge.', '她担心这事已经很久了。'],
    ['Frukta inte.', '不要害怕。'],
  ])),
  b1(verb('bita', '咬', 'to bite', 'biter', 'bet', 'bitit', 'bit', [
    ['Hunden biter inte.', '这狗不咬人。'],
    ['Han bet sig i läppen.', '他咬住了嘴唇。'],
    ['Myggan har bitit mig.', '蚊子咬了我。'],
    ['Bit inte naglarna.', '别咬指甲。'],
  ])),
  b1(noun('ande', 'en', '灵魂；精灵', 'spirit / ghost', 'anden', 'andar', 'andarna', [
    ['En ond ande jagade honom.', '一个恶灵缠着他。'],
    ['Anden i flaskan vaknade.', '瓶中的精灵醒了。'],
    ['Gamla sagor talar om andar.', '老故事里会讲到精灵。'],
    ['Andarna försvann i rök.', '那些精灵化作烟消失了。'],
  ])),
  b1(verb('avgöra', '决定；裁定', 'to decide / to settle', 'avgör', 'avgjorde', 'avgjort', 'avgör', [
    ['Du får avgöra själv.', '你自己决定吧。'],
    ['Domstolen avgjorde målet.', '法院裁定了这个案子。'],
    ['De har avgjort saken.', '他们已经把这件事定下来了。'],
    ['Avgör det nu.', '现在就做决定。'],
  ]), c(
    [
      ['av', '了结；去掉'],
      ['göra', '做'],
    ],
    '“把事情做了结”，就是决定、裁定。',
  )),
  b1(adj('träffad', '被击中的；被说中的', 'hit / struck', 'träffat', 'träffade', [
    ['Han blev träffad av en kula.', '他被一颗子弹击中了。'],
    ['Ett träffat fönster gick sönder.', '一扇被打中的窗户碎了。'],
    ['De träffade soldaterna bars bort.', '那些被击中的士兵被抬走了。'],
    ['Hon kände sig träffad.', '她觉得被说中了。'],
  ])),
  b1(adj('trasig', '破的；坏的', 'broken / torn', 'trasigt', 'trasiga', [
    ['En trasig stol står där.', '那里放着一把破椅子。'],
    ['Ett trasigt fönster måste bytas.', '一扇破窗户必须换掉。'],
    ['De trasiga skorna slängdes.', '那些破鞋子被扔掉了。'],
    ['Telefonen är trasig.', '电话坏了。'],
  ], { comparative: 'trasigare', superlative: 'trasigast' }), c(
    [
      ['trasa', '破布'],
      ['-ig', '带有……的'],
    ],
    '“像破布一样的”，就是破的、坏的。',
  )),
  b1(noun('tvekan', 'en', '犹豫；怀疑', 'hesitation / doubt', 'tvekan', null, null, [
    ['Det finns ingen tvekan.', '这一点毫无疑问。'],
    ['Tvekan syntes i hennes ögon.', '她眼里看得出犹豫。'],
    ['Utan tvekan har du rätt.', '毫无疑问你是对的。'],
    ['Efter en kort tvekan sa hon ja.', '短暂犹豫之后她答应了。'],
  ]), c(
    [
      ['tveka', '犹豫'],
      ['-an', '行为名词词尾'],
    ],
    '由“犹豫”这个动作变成名词，就是一次犹豫、怀疑。',
  )),
  b1(noun('närvaro', 'en', '在场；出席', 'presence / attendance', 'närvaron', null, null, [
    ['Läraren tog närvaro.', '老师点了名。'],
    ['Närvaron var hög idag.', '今天的出席率很高。'],
    ['Hans närvaro lugnade alla.', '他在场让大家都安心了。'],
    ['Vi kräver närvaro på mötet.', '我们要求出席会议。'],
  ]), c(
    [
      ['när', '在近处'],
      ['varo', '存在（vara 在）'],
    ],
    '“在近处存在着”，就是在场、出席。',
  )),
  b1(noun('häck', 'en', '树篱；跨栏；屁股（口）', 'hedge / hurdle / backside (informal)', 'häcken', 'häckar', 'häckarna', [
    ['En häck skiljer tomterna.', '一道树篱把地块隔开。'],
    ['Häcken måste klippas.', '这道树篱得修剪了。'],
    ['De satte upp tre häckar på banan.', '他们在跑道上摆了三个跨栏。'],
    ['Hon slog häcken i stolen.', '她一屁股撞到了椅子上。'],
  ])),
  b1(noun('kust', 'en', '海岸', 'coast', 'kusten', 'kuster', 'kusterna', [
    ['Vi körde längs kusten.', '我们沿着海岸开。'],
    ['Kusten är klippig här.', '这里的海岸是岩石的。'],
    ['Sverige har långa kuster.', '瑞典有很长的海岸。'],
    ['Kusterna är vackra på sommaren.', '那些海岸夏天很美。'],
  ])),
  b1(noun('domstol', 'en', '法院', 'court of law', 'domstolen', 'domstolar', 'domstolarna', [
    ['Målet går till domstol.', '这个案子要上法院。'],
    ['Domstolen dömde honom.', '法院判了他。'],
    ['Det finns flera domstolar i staden.', '城里有好几所法院。'],
    ['Domstolarna är överbelastade.', '那些法院负担过重。'],
  ]), c(
    [
      ['dom', '判决'],
      ['stol', '座位；席位'],
    ],
    '“判决的席位”，就是法院。',
  )),
  b1(noun('kanal', 'en', '运河；频道；渠道', 'canal / channel', 'kanalen', 'kanaler', 'kanalerna', [
    ['En kanal går mellan sjöarna.', '一条运河连着那些湖。'],
    ['Kanalen är smal här.', '这段运河很窄。'],
    ['Vilken kanal tittar du på?', '你在看哪个频道？'],
    ['De använde diplomatiska kanaler.', '他们走了外交渠道。'],
  ])),
  b1(noun('förmögenhet', 'en', '财富；财产', 'fortune / wealth', 'förmögenheten', 'förmögenheter', 'förmögenheterna', [
    ['Han gjorde sig en förmögenhet.', '他发了一笔财。'],
    ['Förmögenheten ärvdes av barnen.', '那笔财产由孩子们继承了。'],
    ['Det finns stora förmögenheter i släkten.', '这个家族有好几笔巨额财产。'],
    ['Förmögenheterna beskattas.', '那些财富要征税。'],
  ]), c(
    [
      ['förmögen', '有钱的；有能力的'],
      ['-het', '抽象名词后缀'],
    ],
    '“有钱的状态”，就是财富、财产。',
  )),
  b1(other('minsann', 'adv', '确实；真的（加强）', 'indeed / certainly (intensifying)', [
    ['Maten var minsann god.', '饭菜确实好吃。'],
    ['Hon kan minsann simma.', '她真的会游泳。'],
    ['Det var minsann kallt.', '那可真够冷的。'],
    ['Det ska du minsann få se.', '你等着瞧吧。'],
  ]), c(
    [
      ['min', '我的'],
      ['sann', '真实的'],
    ],
    '“以我所见是真的”，用来加强语气：确实、真的。',
  )),
  b1(noun('slagsmål', 'ett', '打架；斗殴', 'fight / brawl', 'slagsmålet', 'slagsmål', 'slagsmålen', [
    ['Det blev slagsmål utanför krogen.', '酒吧外面打了起来。'],
    ['Slagsmålet slutade snabbt.', '那场打架很快结束了。'],
    ['Polisen stoppade flera slagsmål.', '警察制止了好几场斗殴。'],
    ['Slagsmålen filmades.', '那些打架被拍了下来。'],
  ]), c(
    [
      ['slag', '打；击'],
      ['-s-', '连接音'],
      ['mål', '一场；回合'],
    ],
    '“一场对打”，就是打架、斗殴。',
  )),
  b1(adj('beväpnad', '武装的', 'armed', 'beväpnat', 'beväpnade', [
    ['En beväpnad man stod vid dörren.', '一个带武器的人站在门口。'],
    ['Ett beväpnat rån skedde i natt.', '夜里发生了一起持械抢劫。'],
    ['De beväpnade vakterna släppte in oss.', '那些武装警卫让我们进去了。'],
    ['Vakten är beväpnad.', '门卫带着武器。'],
  ]), c(
    [
      ['be-', '使带上'],
      ['vapen', '武器'],
      ['-ad', '过去分词'],
    ],
    '“被加上武器的”，就是武装的。',
  )),
  b1(verb('slösa', '浪费', 'to waste / to squander', 'slösar', 'slösade', 'slösat', 'slösa', [
    ['Han slösar med pengar.', '他花钱大手大脚。'],
    ['Hon slösade bort tiden.', '她把时间浪费掉了。'],
    ['Vi har slösat för mycket energi.', '我们浪费了太多精力。'],
    ['Slösa inte med vattnet.', '别浪费水。'],
  ])),
  b1(noun('förtroende', 'ett', '信任；信赖', 'trust / confidence', 'förtroendet', null, null, [
    ['Jag har förtroende för henne.', '我信任她。'],
    ['Förtroendet är brutet.', '信任已经破裂。'],
    ['Han berättade det i förtroende.', '他私下把这事告诉了我。'],
    ['Vi måste bygga förtroende.', '我们必须建立信任。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['tro', '相信'],
      ['-ende', '名词词尾'],
    ],
    '“对某人信得过”，就是信任、信赖。',
  )),
  b1(noun('akt', 'en', '一幕；仪式；案卷', 'act / ceremony / file', 'akten', 'akter', 'akterna', [
    ['Hjälten dör i sista akten.', '主人公在最后一幕死去。'],
    ['Akten var högtidlig.', '那场仪式很庄重。'],
    ['Läkaren öppnade akten.', '医生打开了那份案卷。'],
    ['Akterna ligger i arkivet.', '那些案卷在档案室里。'],
  ])),
  b1(adj('gyllene', '金色的；黄金般的', 'golden', 'gyllene', 'gyllene', [
    ['Hon bar en gyllene krona.', '她戴着一顶金色的王冠。'],
    ['Ett gyllene tillfälle dök upp.', '一个黄金般的机会出现了。'],
    ['De gyllene skorna glänste.', '那双金色的鞋子在发亮。'],
    ['Ta den gyllene medelvägen.', '走中庸之道。'],
  ])),
  b1(noun('fartyg', 'ett', '船只', 'ship / vessel', 'fartyget', 'fartyg', 'fartygen', [
    ['Ett stort fartyg kom in i hamnen.', '一艘大船进了港。'],
    ['Fartyget lämnar kajen klockan fem.', '这艘船五点离岸。'],
    ['Flera fartyg väntar ute till havs.', '好几艘船在海上等着。'],
    ['Fartygen lastades över natten.', '那些船在夜里装了货。'],
  ]), c(
    [
      ['far', '航行（fara 走）'],
      ['tyg', '器具；家伙'],
    ],
    '“用来航行的家伙”，就是船只。',
  )),
  b1(noun('ammunition', 'en', '弹药', 'ammunition', 'ammunitionen', null, null, [
    ['Det finns ammunition i lådan.', '盒子里有弹药。'],
    ['Ammunitionen är slut.', '弹药打光了。'],
    ['De behöver mer ammunition.', '他们需要更多弹药。'],
    ['Han gömde ammunitionen.', '他把弹药藏了起来。'],
  ])),
  b1(noun('framgång', 'en', '成功', 'success', 'framgången', 'framgångar', 'framgångarna', [
    ['Filmen blev en stor framgång.', '这部电影获得了巨大成功。'],
    ['Framgången kom sent.', '成功来得很晚。'],
    ['Hon har haft flera framgångar.', '她已经有过好几次成功。'],
    ['Framgångarna följde på varandra.', '那些成功一个接一个。'],
  ]), c(
    [
      ['fram', '向前'],
      ['gång', '走；进展'],
    ],
    '“向前走得通”，就是成功。',
  )),
  b1(other('såvida', 'other', '如果；只要', 'provided that / if', [
    ['Vi går ut, såvida det inte regnar.', '只要不下雨，我们就出门。'],
    ['Såvida jag förstår rätt, är det sant.', '如果我没理解错，这是真的。'],
    ['Du får låna den, såvida du lämnar tillbaka den.', '你可以借，只要你还回来。'],
    ['Planen håller, såvida alla kommer.', '只要大家都来，这个计划就成立。'],
  ]), c(
    [
      ['så', '如此；那么'],
      ['vida', '到那种程度'],
    ],
    '“到那种程度为止”，用来设条件：如果、只要。',
  )),
  b1(adj('skum', '昏暗的；可疑的', 'murky / shady', 'skumt', 'skumma', [
    ['En skum typ stod vid hörnet.', '一个形迹可疑的人站在街角。'],
    ['Ett skumt rum utan fönster.', '一间没有窗户的昏暗房间。'],
    ['De skumma affärerna avslöjades.', '那些见不得光的买卖被揭穿了。'],
    ['Det ser skumt ut.', '这看起来很可疑。'],
  ], { comparative: 'skummare', superlative: 'skummast' })),
  b1(noun('kokain', 'ett', '可卡因', 'cocaine', 'kokainet', null, null, [
    ['Kokain är ett narkotikum.', '可卡因是一种毒品。'],
    ['Kokainet hittades i väskan.', '可卡因是在包里发现的。'],
    ['Polisen beslagtog kokain.', '警察缴获了可卡因。'],
    ['De gömde kokainet i bilen.', '他们把可卡因藏在车里。'],
  ])),
  b1(verb('tillbringa', '度过（时间）', 'to spend (time)', 'tillbringar', 'tillbringade', 'tillbringat', 'tillbringa', [
    ['Vi tillbringar sommaren vid kusten.', '我们在海边度过夏天。'],
    ['Hon tillbringade ett år utomlands.', '她在国外待了一年。'],
    ['De har tillbringat kvällen hemma.', '他们在家度过了这个晚上。'],
    ['Tillbringa inte hela dan i sängen.', '别整天躺在床上。'],
  ]), c(
    [
      ['till', '到；朝向'],
      ['bringa', '带来；打发'],
    ],
    '“把时间带到某处度过”，就是度过一段时间。',
  )),
  b1(noun('beteende', 'ett', '行为；举止', 'behaviour / behavior', 'beteendet', 'beteenden', 'beteendena', [
    ['Hans beteende var konstigt.', '他的举止很奇怪。'],
    ['Beteendet måste ändras.', '这种行为必须改。'],
    ['Olika beteenden ger olika resultat.', '不同的行为会带来不同结果。'],
    ['Beteendena upprepades.', '那些行为又出现了。'],
  ]), c(
    [
      ['bete', '表现（bete sig）'],
      ['-ende', '名词词尾'],
    ],
    '由“表现自己”变成名词，就是行为、举止。',
  )),
  b1(adj('närvarande', '在场的', 'present', 'närvarande', 'närvarande', [
    ['Alla var närvarande vid mötet.', '所有人都出席了会议。'],
    ['Ett närvarande vittne såg allt.', '一名在场的目击者看到了全部。'],
    ['De närvarande tystnade.', '在场的人安静了下来。'],
    ['För närvarande väntar vi.', '目前我们在等。'],
  ]), c(
    [
      ['när', '在近处'],
      ['varande', '存在着的（vara）'],
    ],
    '“正在近处存在着的”，就是在场的。',
  )),
  b1(other('utav', 'other', '由；从（口语，= av）', 'out of / of (colloquial for av)', [
    ['En utav dem ljög.', '他们当中有一个撒了谎。'],
    ['Stolen är gjord utav trä.', '这把椅子是木头做的。'],
    ['Jag frågar utav nyfikenhet.', '我是出于好奇才问的。'],
    ['Tre utav fem sa ja.', '五个里面有三个说了同意。'],
  ]), c(
    [
      ['ut', '出'],
      ['av', '由；从'],
    ],
    '口语里加强的 av，意思仍是由、从。',
  )),
  b1(adj('främmande', '陌生的；外国的', 'strange / foreign', 'främmande', 'främmande', [
    ['En främmande man stod vid grinden.', '一个陌生男人站在大门边。'],
    ['Ett främmande språk är svårt först.', '一门外语一开始很难。'],
    ['De reste i främmande land.', '他们在外国旅行。'],
    ['Vi har främmande ikväll.', '我们今晚有客人。'],
  ])),
  b1(verb('riva', '撕；拆；挠', 'to tear / to demolish / to scratch', 'river', 'rev', 'rivit', 'riv', [
    ['Katten river i soffan.', '猫在挠沙发。'],
    ['Han rev sönder brevet.', '他把信撕碎了。'],
    ['De har rivit det gamla huset.', '他们拆掉了那栋老房子。'],
    ['Riv inte pappret.', '别把纸撕了。'],
  ])),
  b1(noun('dugg', 'ett', '一点儿（多用于否定）；毛毛雨', 'a bit (esp. in negation) / drizzle', 'dugget', null, null, [
    ['Jag bryr mig inte ett dugg.', '我一点儿也不在乎。'],
    ['Hon lärde sig inte ett dugg.', '她一点儿也没学会。'],
    ['Berätta vartenda dugg.', '把每一点都说出来。'],
    ['Det kom lite dugg i luften.', '空气里飘起一点毛毛雨。'],
  ])),
  b1(noun('betyg', 'ett', '成绩；评分', 'grade / mark', 'betyget', 'betyg', 'betygen', [
    ['Hon fick ett bra betyg i svenska.', '她瑞典语得了好成绩。'],
    ['Betyget kom i fredags.', '成绩上周五出来了。'],
    ['Han har höga betyg i allt.', '他各科成绩都很高。'],
    ['Betygen räcker till utbildningen.', '这些成绩够上那个专业。'],
  ]), c(
    [
      ['be-', '构词前缀'],
      ['tyg', '凭据'],
    ],
    '由“出具凭据”（betyga）变成名词，就是成绩、评分。',
  )),
  b1(noun('värde', 'ett', '价值', 'value / worth', 'värdet', 'värden', 'värdena', [
    ['Boken har ett högt värde.', '这本书有很高的价值。'],
    ['Värdet på huset steg.', '房子的价值上涨了。'],
    ['Olika värden krockade.', '不同的价值发生了冲突。'],
    ['Värdena har ändrats med tiden.', '那些价值随着时间变了。'],
  ])),
  b1(noun('villkor', 'ett', '条件', 'condition / terms', 'villkoret', 'villkor', 'villkoren', [
    ['Det är ett villkor för avtalet.', '这是协议的一个条件。'],
    ['Villkoret var tydligt.', '那个条件很清楚。'],
    ['Vi tävlar på lika villkor.', '我们在同等条件下比赛。'],
    ['Villkoren måste förbättras.', '那些条件必须改善。'],
  ]), c(
    [
      ['vill', '愿意；想要'],
      ['kor', '选择；条件（旧）'],
    ],
    '“愿意接受的条件”，合起来就是条件。',
  )),
  b1(other('intill', 'other', '紧挨着；靠近', 'next to / right by', [
    ['Flickan i huset intill vinkade.', '隔壁房子里的女孩在挥手。'],
    ['Vi bor intill skolan.', '我们住在学校旁边。'],
    ['Bilen stannade intill oss.', '那辆车停在我们紧旁边。'],
    ['Alldeles intill vägen står ett träd.', '紧挨着路有一棵树。'],
  ]), c(
    [
      ['in', '往里；靠近'],
      ['till', '到'],
    ],
    '“贴近到那里”，就是紧挨着、靠近。',
  )),
  b1(noun('kommendör', 'en', '海军上校', 'naval captain / commander', 'kommendören', 'kommendörer', 'kommendörerna', [
    ['En kommendör gav ordern.', '一名海军上校下了命令。'],
    ['Kommendören stod på bryggan.', '那位海军上校站在舰桥上。'],
    ['Två kommendörer kom till mötet.', '两名海军上校来开会。'],
    ['Kommendörerna samlades ombord.', '那些海军上校在船上集合。'],
  ])),
  b1(adj('brittisk', '英国的', 'British', 'brittiskt', 'brittiska', [
    ['En brittisk soldat stod vakt.', '一名英国士兵在站岗。'],
    ['Ett brittiskt pass räcker.', '一本英国护照就够了。'],
    ['De brittiska öarna ligger i väster.', '不列颠群岛在西边。'],
    ['Maten var brittisk.', '这饭是英式的。'],
  ]), c(
    [
      ['britt', '不列颠人'],
      ['-isk', '……的'],
    ],
    '“不列颠的”，就是英国的。',
  )),
  b1(noun('rep', 'ett', '绳子；排练（口）', 'rope / rehearsal (informal)', 'repet', 'rep', 'repen', [
    ['Dra i repet.', '拉拉那根绳子。'],
    ['Repet gick av.', '绳子断了。'],
    ['Vi behöver två starka rep.', '我们需要两根结实的绳子。'],
    ['Repen låg på däcket.', '那些绳子在甲板上。'],
  ])),
  b1(verb('övertyga', '说服；使确信', 'to convince', 'övertygar', 'övertygade', 'övertygat', 'övertyga', [
    ['Jag övertygar honom inte.', '我说服不了他。'],
    ['Hon övertygade oss om sanningen.', '她让我们相信了真相。'],
    ['Han har övertygat juryn.', '他说服了陪审团。'],
    ['Övertyga mig.', '说服我。'],
  ]), c(
    [
      ['över', '越过；彻底'],
      ['tyga', '表明；让人看见（构词词根）'],
    ],
    '“彻底让人看见是真的”，就是说服、使确信。',
  )),
  b1(noun('stålar', null, '钱（俚，只用复数）', 'money (slang, plural only)', null, 'stålar', 'stålarna', [
    ['Har du några stålar?', '你身上有钱吗？'],
    ['Han tjänade stålar på affären.', '他靠这笔买卖赚了钱。'],
    ['Stålarna är slut.', '钱花光了。'],
    ['Vi behöver mer stålar.', '我们还需要钱。'],
  ]), c(
    [
      ['stål', '钢'],
      ['-ar', '复数词尾'],
    ],
    '旧时用钢件当钱，俚语里“钢”的复数就是钱。',
  )),
  b1(verb('offra', '牺牲；献祭', 'to sacrifice', 'offrar', 'offrade', 'offrat', 'offra', [
    ['Hon offrar sin tid för barnen.', '她为孩子们牺牲自己的时间。'],
    ['Han offrade livet.', '他牺牲了生命。'],
    ['De har offrat mycket för detta.', '他们为此牺牲了很多。'],
    ['Offra inte hälsan.', '别拿健康去牺牲。'],
  ])),
  b1(verb('förmoda', '推测；以为', 'to assume / to suppose', 'förmodar', 'förmodade', 'förmodat', 'förmoda', [
    ['Jag förmodar att han kommer.', '我推测他会来。'],
    ['Hon förmodade att det var sant.', '她当时以为那是真的。'],
    ['Vi har förmodat fel.', '我们推测错了。'],
    ['Förmoda inte det värsta.', '别往最坏处想。'],
  ]), c(
    [
      ['för-', '加强前缀'],
      ['moda', '料想（构词词根）'],
    ],
    '“往前料想”，就是推测、以为。',
  )),
  b1(noun('djungel', 'en', '丛林', 'jungle', 'djungeln', 'djungler', 'djunglerna', [
    ['De gick vilse i djungeln.', '他们在丛林里迷了路。'],
    ['Djungeln är tät här.', '这里的丛林很密。'],
    ['Det finns regnskogar och djungler.', '有雨林，也有丛林。'],
    ['Djunglerna är svåra att ta sig igenom.', '那些丛林很难穿过去。'],
  ])),
]

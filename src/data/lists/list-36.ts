import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1751–1800. Primary POS is the high-frequency use, not every sense in the book. */
export const list36: Word[] = [
  freq(adj('stilig', '有派头的；漂亮的', 'stylish / handsome', 'stiligt', 'stiliga', [
    ['Han har en stilig jacka.', '他有一件很有派头的外套。'],
    ['Ett stiligt hus står vid ån.', '河边立着一栋漂亮的房子。'],
    ['De stiliga skorna är nya.', '那双漂亮的鞋是新的。'],
    ['Du ser stilig ut i dag.', '你今天看起来很精神。'],
  ]), 1751, c([['stil', '风格'], ['-ig', '带有……的']], '带有风格的，合起来就是有派头的、漂亮的。')),
  freq(noun('humor', 'en', '幽默；幽默感', 'humour / sense of humour', 'humorn', null, null, [
    ['Hon har en torr humor.', '她有一种冷幽默。'],
    ['Humorn i filmen är svart.', '这部电影的幽默是黑色的。'],
    ['Vi behöver mer humor här.', '我们这儿需要更多幽默。'],
    ['Behåll humorn, tack.', '请保持幽默感。'],
  ]), 1752),
  freq(adj('klädd', '穿着……的', 'dressed', 'klätt', 'klädda', [
    ['Hon är klädd i rött.', '她穿着红色。'],
    ['Barnet är klätt i blått.', '孩子穿着蓝色。'],
    ['De klädda dockorna stod i rad.', '那些穿好衣服的娃娃排成一排。'],
    ['Kom klädd för kyla.', '来的时候穿得保暖些。'],
  ]), 1753, c([['klä', '给……穿衣'], ['-dd', '已完成']], '已经穿上衣服的，合起来就是穿着……的。')),
  freq(noun('försvar', 'ett', '防御；国防；辩护', 'defence', 'försvaret', null, null, [
    ['Laget har ett starkt försvar.', '这支队伍防守很强。'],
    ['Försvaret höll i andra halvlek.', '下半场防守稳住了。'],
    ['Hon talade till försvar för vännen.', '她为朋友辩护。'],
    ['Landet rustar försvaret.', '这个国家在加强国防。'],
  ]), 1754, c([['för', '对着'], ['svar', '回应']], '对着攻击作出回应，合起来就是防御、辩护。')),
  freq(other('söder', 'adv', '向南；在南面', 'south / southwards', [
    ['Huset ligger söder om ån.', '房子在河的南面。'],
    ['De bor söder om stan.', '他们住在城南。'],
    ['Skogen ligger söder om vägen.', '树林在路的南面。'],
    ['Gå söder om bron.', '从桥南边走。'],
  ]), 1755),
  freq(noun('fegis', 'en', '胆小鬼（口语）', 'coward (informal)', 'fegisen', 'fegisar', 'fegisarna', [
    ['Kalla mig inte för fegis.', '别叫我胆小鬼。'],
    ['Fegisen vågade inte hoppa.', '那个胆小鬼不敢跳。'],
    ['Bara fegisar ger upp.', '只有胆小鬼才放弃。'],
    ['Fegisarna stannade kvar.', '那些胆小鬼留了下来。'],
  ]), 1756, c(
    [
      ['feg', '胆小的'],
      ['-is', '口语里指这类人'],
    ],
    '“胆小的那种人”，口语里就是胆小鬼。',
  )),
  freq(adj('förtjusande', '迷人的；讨人喜欢的', 'charming / delightful', 'förtjusande', 'förtjusande', [
    ['Hon är en förtjusande gäst.', '她是一位迷人的客人。'],
    ['Ett förtjusande leende.', '一个讨人喜欢的微笑。'],
    ['De förtjusande barnen sjöng.', '那些讨人喜欢的孩子在唱歌。'],
    ['Vädret var förtjusande.', '天气好极了。'],
  ]), 1757, c(
    [
      ['för-', '加强前缀'],
      ['tjusande', '迷人的（tjusning 魅力）'],
    ],
    '“非常迷人的”，就是讨人喜欢、迷人。',
  )),
  freq(noun('natur', 'en', '自然；自然界', 'nature', 'naturen', null, null, [
    ['Vi går ut i naturen i helgen.', '我们周末去大自然。'],
    ['Naturen är stilla här.', '这儿的自然界很安静。'],
    ['Hon älskar orörd natur.', '她喜欢未开发的自然。'],
    ['Skydda naturen åt barnen.', '为孩子们保护自然。'],
  ]), 1758),
  freq(other('cirka', 'adv', '大约；左右', 'approximately / about', [
    ['Det tar cirka tio minuter.', '大约要十分钟。'],
    ['Hon är cirka trettio år.', '她大约三十岁。'],
    ['Vi behöver cirka fem stolar.', '我们大约需要五把椅子。'],
    ['Kom cirka klockan sju.', '大约七点来。'],
  ]), 1759),
  freq(noun('hat', 'ett', '仇恨；憎恶', 'hate / hatred', 'hatet', null, null, [
    ['Det fanns hat i blicken.', '目光里有仇恨。'],
    ['Hatet växte efter bråket.', '争吵之后仇恨加深了。'],
    ['Hon känner inget hat.', '她没有憎恶。'],
    ['Lägg hatet åt sidan.', '把仇恨放下。'],
  ]), 1760),
  freq(noun('glasögon', null, '眼镜', 'glasses / spectacles', null, 'glasögon', 'glasögonen', [
    ['Hon har nya glasögon.', '她有一副新眼镜。'],
    ['Mina glasögon är smutsiga.', '我的眼镜脏了。'],
    ['Glasögonen ligger på bordet.', '眼镜在桌子上。'],
    ['Ta på glasögonen nu.', '现在戴上眼镜。'],
  ]), 1761, c([['glas', '玻璃'], ['ögon', '眼睛']], '眼前的玻璃，合起来就是眼镜。')),
  freq(adj('underlig', '奇怪的；古怪的', 'strange / odd', 'underligt', 'underliga', [
    ['Det var en underlig dröm.', '那是一个奇怪的梦。'],
    ['Ett underligt ljud hördes.', '听到了一声古怪的响动。'],
    ['De underliga frågorna fortsatte.', '那些古怪的问题还在继续。'],
    ['Hon är underligare än jag trodde.', '她比我以为的更古怪。'],
  ], { comparative: 'underligare', superlative: 'underligast' }), 1762, c(
    [
      ['under', '奇迹；不可思议的事'],
      ['-lig', '带这种性质的'],
    ],
    '“像奇迹一样的”，不是“下面的”，合起来就是奇怪、古怪。',
  )),
  freq(noun('tävling', 'en', '比赛；竞赛', 'competition / contest', 'tävlingen', 'tävlingar', 'tävlingarna', [
    ['Hon vinner tävlingen i år.', '她今年赢得这场比赛。'],
    ['Tävlingen börjar klockan nio.', '比赛九点开始。'],
    ['Det finns tre tävlingar i maj.', '五月有三场竞赛。'],
    ['Anmäl dig till tävlingen.', '去报名参加比赛。'],
  ]), 1763, c([['tävla', '比赛'], ['-ing', '活动']], '比赛这一活动，合起来就是比赛、竞赛。')),
  freq(noun('sömn', 'en', '睡眠', 'sleep', 'sömnen', null, null, [
    ['Jag behöver mer sömn.', '我需要更多睡眠。'],
    ['Sömnen kom sent i natt.', '夜里睡意来得很晚。'],
    ['Barnet föll i sömn i soffan.', '孩子在沙发上睡着了。'],
    ['Stör inte sömnen nu.', '现在别打扰睡眠。'],
  ]), 1764),
  freq(noun('förstärkning', 'en', '增援；加强', 'reinforcement', 'förstärkningen', 'förstärkningar', 'förstärkningarna', [
    ['De väntade på förstärkning.', '他们在等增援。'],
    ['Förstärkningen kom för sent.', '增援来得太晚了。'],
    ['Vi behöver flera förstärkningar.', '我们需要多几路增援。'],
    ['Förstärkningarna anlände i natt.', '那些增援夜里到了。'],
  ]), 1765, c(
    [
      ['förstärka', '加强；加固'],
      ['-ning', '行为名词后缀'],
    ],
    '由“加强”这个动作变成名词，就是一次增援、加强。',
  )),
  freq(noun('resultat', 'ett', '结果；成绩', 'result / outcome', 'resultatet', 'resultat', 'resultaten', [
    ['Vi väntar på ett resultat.', '我们在等一个结果。'],
    ['Resultatet kom i morse.', '结果今天早上来了。'],
    ['Hon har bra resultat i skolan.', '她在学校成绩很好。'],
    ['Resultaten överraskade oss.', '那些结果让我们吃惊。'],
  ]), 1766),
  freq(verb('blunda', '闭眼；装作没看见', 'to close one\'s eyes / to turn a blind eye', 'blundar', 'blundade', 'blundat', 'blunda', [
    ['Hon blundar i solljuset.', '她在阳光下闭上眼睛。'],
    ['Han blundade för sanningen.', '他对真相装作没看见。'],
    ['Vi har blundat för länge.', '我们对这件事装瞎太久了。'],
    ['Blunda och räkna till tio.', '闭上眼睛数到十。'],
  ]), 1767, c(
    [
      ['blund', '一闭眼；小睡'],
      ['-a', '动词词尾'],
    ],
    '“做一个闭眼的动作”，也引申为装作没看见。',
  )),
  freq(verb('hota', '威胁', 'to threaten', 'hotar', 'hotade', 'hotat', 'hota', [
    ['De hotar att gå.', '他们威胁说要走。'],
    ['Han hotade vittnet.', '他威胁了证人。'],
    ['Företaget har hotat med avsked.', '公司以解雇相威胁。'],
    ['Hota inte barnen.', '别威胁孩子们。'],
  ]), 1768),
  freq(other('noll', 'other', '零', 'zero / nought', [
    ['Det är noll grader ute.', '外面是零度。'],
    ['Hon fick noll poäng.', '她得了零分。'],
    ['Vi har noll kronor kvar.', '我们一块钱都不剩了。'],
    ['Börja från noll.', '从零开始。'],
  ]), 1769),
  freq(noun('spöke', 'ett', '鬼；幽灵', 'ghost', 'spöket', 'spöken', 'spökena', [
    ['Barnet tror på ett spöke.', '孩子相信有鬼。'],
    ['Spöket i sagan är snällt.', '故事里的幽灵很善良。'],
    ['Hon är rädd för spöken.', '她怕鬼。'],
    ['Spökena försvann i gryningen.', '那些幽灵在黎明消失了。'],
  ]), 1770),
  freq(adj('gemensam', '共同的；共有的', 'common / joint / shared', 'gemensamt', 'gemensamma', [
    ['Vi har ett gemensamt mål.', '我们有一个共同目标。'],
    ['Ett gemensamt beslut fattades.', '做出了一个共同决定。'],
    ['De gemensamma rummen är ljusa.', '那些共用的房间很亮。'],
    ['Köket är gemensamt.', '厨房是共用的。'],
  ]), 1771),
  freq(noun('samhälle', 'ett', '社会；村镇', 'society / community', 'samhället', 'samhällen', 'samhällena', [
    ['Hon bor i ett litet samhälle.', '她住在一个小镇。'],
    ['Samhället kräver mer tid.', '这个社会要求更多时间。'],
    ['Två samhällen ligger vid sjön.', '湖边有两个村镇。'],
    ['Samhällena växer snabbt.', '那些村镇长得很快。'],
  ]), 1772, c([['sam', '一起'], ['hälle', '聚集地']], '一起聚居的地方，合起来就是社会、村镇。')),
  freq(other('i stort sett', 'phrase', '大体上；差不多', 'by and large / more or less', [
    ['I stort sett är vi överens.', '我们大体上意见一致。'],
    ['Det är i stort sett klart.', '这差不多完成了。'],
    ['Vädret är i stort sett bra.', '天气大体上还好。'],
    ['I stort sett samma sak hände i fjol.', '大体上去年也发生了同样的事。'],
  ]), 1773, c(
    [
      ['i', '在'],
      ['stort', '大的（中性）'],
      ['sett', '看来；看来如此'],
    ],
    '“从大处看来”，就是大体上、差不多。',
  )),
  freq(noun('afton', 'en', '傍晚；晚上（较书面）', 'evening (somewhat formal)', 'aftonen', 'aftnar', 'aftnarna', [
    ['Vi ses i afton.', '我们今晚见。'],
    ['Aftonen var stilla.', '那个傍晚很安静。'],
    ['De kalla aftnarna kommer tidigt.', '那些寒冷的傍晚会来得很早。'],
    ['Aftnarna vid sjön är vackra.', '湖边的那些傍晚很美。'],
  ]), 1774),
  freq(adj('desperat', '绝望的；不顾一切的', 'desperate', 'desperat', 'desperata', [
    ['Det var ett desperat försök.', '那是一次不顾一切的尝试。'],
    ['Ett desperat samtal hördes.', '听到一阵绝望的谈话。'],
    ['De desperata ropen tystnade.', '那些绝望的喊声停了。'],
    ['Bli inte desperat nu.', '现在别绝望。'],
  ]), 1775),
  freq(noun('kaos', 'ett', '混乱；一团糟', 'chaos', 'kaoset', null, null, [
    ['Det är kaos i köket.', '厨房里一团糟。'],
    ['Kaoset växte efter larmet.', '警报之后混乱加剧了。'],
    ['Hon hatar kaos på skrivbordet.', '她讨厌桌上乱七八糟。'],
    ['Städa upp kaoset nu.', '现在把这团乱收拾好。'],
  ]), 1776),
  freq(verb('mötas', '相遇；碰面', 'to meet (each other)', 'möts', 'möttes', 'mötts', 'mötas', [
    ['Vi möts vid stationen.', '我们在车站碰面。'],
    ['De möttes i parken i går.', '他们昨天在公园相遇了。'],
    ['Har ni mötts förr?', '你们以前碰过面吗？'],
    ['Mötas kan vi i morgon.', '我们明天可以碰面。'],
  ]), 1777, c([['möta', '遇见'], ['-s', '互相']], '彼此遇见，合起来就是相遇、碰面。')),
  freq(noun('läxa', 'en', '作业；教训', 'homework / lesson', 'läxan', 'läxor', 'läxorna', [
    ['Hon gör läxan vid bordet.', '她在桌边做作业。'],
    ['Läxan är svår i dag.', '今天的作业很难。'],
    ['Vi har tre läxor i veckan.', '我们一周有三次作业。'],
    ['Gör läxan före maten.', '吃饭前把作业做了。'],
  ]), 1778),
  freq(noun('läpp', 'en', '嘴唇', 'lip', 'läppen', 'läppar', 'läpparna', [
    ['Hon bet sig i läppen.', '她咬了一下嘴唇。'],
    ['Läppen var sprucken.', '那片嘴唇裂了。'],
    ['Han har torra läppar.', '他嘴唇很干。'],
    ['Läpparna var röda av kylan.', '嘴唇被冻红了。'],
  ]), 1779),
  freq(other('i förhållande till', 'phrase', '相对于；与……相比', 'in relation to / compared with', [
    ['Hyran är hög i förhållande till lönen.', '相对于工资，房租很高。'],
    ['Hur ligger vi i förhållande till dem?', '我们和他们相比怎么样？'],
    ['Priset är lågt i förhållande till kvaliteten.', '相对于质量，价格很低。'],
    ['I förhållande till i fjol är det varmare.', '和去年相比更暖和。'],
  ]), 1780, c(
    [
      ['i', '在'],
      ['förhållande', '关系；比例'],
      ['till', '朝向；对于'],
    ],
    '“处在与……的关系里”，就是相对于、相比。',
  )),
  freq(noun('jakt', 'en', '打猎；追捕', 'hunt / chase', 'jakten', 'jakter', 'jakterna', [
    ['De är ute på jakt.', '他们出去打猎了。'],
    ['Jakten på tjuven fortsätter.', '对小偷的追捕还在继续。'],
    ['Det finns två jakter i höst.', '今年秋天有两场打猎。'],
    ['Avbryt jakten nu.', '现在停止追捕。'],
  ]), 1781),
  freq(verb('sikta', '瞄准；打算', 'to aim / to intend', 'siktar', 'siktade', 'siktat', 'sikta', [
    ['Han siktar på målet.', '他瞄准目标。'],
    ['Hon siktade mot dörren.', '她朝门那边瞄准。'],
    ['Vi har siktat för högt.', '我们目标定得太高了。'],
    ['Sikta noga.', '仔细瞄准。'],
  ]), 1782),
  freq(noun('proffs', 'ett', '职业选手；专业人士（口语）', 'pro / professional (informal)', 'proffset', 'proffs', 'proffsen', [
    ['Han är ett proffs på det.', '他在这方面是专业的。'],
    ['Proffset vann matchen.', '那位职业选手赢了比赛。'],
    ['Laget har flera proffs.', '队里有好几名职业选手。'],
    ['Proffsen tränar varje dag.', '那些职业选手每天训练。'],
  ]), 1783),
  freq(adj('enorm', '巨大的；极大的', 'enormous / immense', 'enormt', 'enorma', [
    ['Det är en enorm skillnad.', '差别巨大。'],
    ['Ett enormt hus står vid havet.', '海边立着一栋巨大的房子。'],
    ['De enorma vågorna slog in.', '那些巨浪打了进来。'],
    ['Tack, det betyder enormt.', '谢谢，这意义重大。'],
  ]), 1784),
  freq(noun('juni', 'en', '六月', 'June', null, null, null, [
    ['Vi gifter oss i juni.', '我们六月结婚。'],
    ['Juni är ljus här.', '这儿的六月天很长。'],
    ['Hon fyller år i juni.', '她六月过生日。'],
    ['Boka resan till juni.', '把旅行订在六月。'],
  ]), 1785),
  freq(noun('finger', 'ett', '手指', 'finger', 'fingret', 'fingrar', 'fingrarna', [
    ['Hon bröt ett finger.', '她折了一根手指。'],
    ['Fingret gör ont.', '这根手指疼。'],
    ['Han har kalla fingrar.', '他手指冷。'],
    ['Rör inte med fingret.', '别用手指碰。'],
  ]), 1786),
  freq(noun('väst', 'en', '背心；马甲', 'waistcoat / vest', 'västen', 'västar', 'västarna', [
    ['Han har en grå väst på sig.', '他穿着一件灰色马甲。'],
    ['Västen är för tajt.', '这件背心太紧。'],
    ['Två västar hänger i garderoben.', '衣柜里挂着两件马甲。'],
    ['Ta på västen, det är kallt.', '穿上背心，天气冷。'],
  ]), 1787),
  freq(noun('stol', 'en', '椅子', 'chair', 'stolen', 'stolar', 'stolarna', [
    ['Sitt på stolen där.', '坐那边那把椅子。'],
    ['Stolen är trasig.', '这把椅子坏了。'],
    ['Vi behöver fyra stolar till.', '我们还需要四把椅子。'],
    ['Flytta stolen närmare.', '把椅子挪近一点。'],
  ]), 1788),
  freq(noun('olja', 'en', '油', 'oil', 'oljan', 'oljor', 'oljorna', [
    ['Bilen behöver mer olja.', '这车需要再加点油。'],
    ['Oljan är slut i lampan.', '灯里的油用完了。'],
    ['Vi har tre oljor i köket.', '厨房里有三种油。'],
    ['Häll olja i pannan.', '往锅里倒油。'],
  ]), 1789),
  freq(verb('utföra', '执行；完成', 'to carry out / to perform', 'utför', 'utförde', 'utfört', 'utför', [
    ['Vi ska utföra planen.', '我们要执行这个计划。'],
    ['Hon utförde uppdraget.', '她完成了任务。'],
    ['Arbetet är redan utfört.', '工作已经做完了。'],
    ['Utför ordern.', '执行命令。'],
  ]), 1790, c(
    [
      ['ut', '出去'],
      ['föra', '带领；进行'],
    ],
    '“把事情做出去”，就是执行、完成。',
  )),
  freq(noun('pilot', 'en', '飞行员', 'pilot', 'piloten', 'piloter', 'piloterna', [
    ['En pilot hälsade i dörren.', '一位飞行员在门口打招呼。'],
    ['Piloten landade mjukt.', '那位飞行员降落得很轻。'],
    ['Två piloter sitter i cockpit.', '两名飞行员坐在驾驶舱。'],
    ['Fråga piloten om tiden.', '问问飞行员几点到。'],
  ]), 1791),
  freq(noun('attack', 'en', '攻击；发作', 'attack', 'attacken', 'attacker', 'attackerna', [
    ['De gick till attack vid gryningen.', '他们黎明时发动攻击。'],
    ['Attacken kom från vänster.', '攻击从左边来。'],
    ['Han har haft två attacker i år.', '他今年发作过两次。'],
    ['Stoppa attacken nu.', '现在挡住这次攻击。'],
  ]), 1792),
  freq(noun('verk', 'ett', '作品；事业', 'work / oeuvre', 'verket', 'verk', 'verken', [
    ['Det är ett stort verk.', '那是一部大作品。'],
    ['Verket kom ut i fjol.', '这部作品去年出版。'],
    ['Hon har skrivit flera verk.', '她写过好几部作品。'],
    ['Verken står i hyllan.', '那些作品在书架上。'],
  ]), 1793),
  freq(noun('berättelse', 'en', '故事；叙述', 'story / narrative', 'berättelsen', 'berättelser', 'berättelserna', [
    ['Hon läser en berättelse för barnet.', '她给孩子读一个故事。'],
    ['Berättelsen är kort.', '这个故事很短。'],
    ['Han har skrivit tre berättelser.', '他写了三个故事。'],
    ['Lyssna på berättelsen nu.', '现在听这个故事。'],
  ]), 1794, c([['berätta', '讲述'], ['-else', '行为／结果']], '讲述出来的东西，合起来就是故事、叙述。')),
  freq(adj('komplicerad', '复杂的', 'complicated', 'komplicerat', 'komplicerade', [
    ['Det är ett komplicerat problem.', '这是一个复杂的问题。'],
    ['Ett komplicerat schema väntar.', '一份复杂的日程在等着。'],
    ['De komplicerade reglerna tröttar.', '那些复杂的规则让人累。'],
    ['Gör det inte så komplicerat.', '别搞得这么复杂。'],
  ]), 1795),
  freq(noun('officer', 'en', '军官', 'officer', 'officeren', 'officerare', 'officerarna', [
    ['En officer väntar i hallen.', '一位军官在门厅等。'],
    ['Officeren gav en kort order.', '那位军官下了一道简短的命令。'],
    ['Två officerare kom in.', '两名军官走了进来。'],
    ['Officerarna samlades vid kartan.', '那些军官围在地图旁。'],
  ]), 1796),
  freq(noun('vänskap', 'en', '友谊', 'friendship', 'vänskapen', null, null, [
    ['Deras vänskap började i skolan.', '他们的友谊从学校开始。'],
    ['Vänskapen höll i många år.', '这份友谊维持了很多年。'],
    ['Hon värderar vänskap högt.', '她很看重友谊。'],
    ['Värna vänskapen nu.', '现在珍惜这份友谊。'],
  ]), 1797, c([['vän', '朋友'], ['-skap', '状态／关系']], '作为朋友的状态，合起来就是友谊。')),
  freq(other('dubbelt', 'adv', '加倍地；双倍', 'twice / doubly', [
    ['Det kostar dubbelt så mycket.', '这个要贵一倍。'],
    ['Hon arbetar dubbelt så hårt nu.', '她现在加倍努力工作。'],
    ['Vi fick dubbelt betalt i går.', '我们昨天拿到双倍报酬。'],
    ['Kontrollera dubbelt innan du skickar.', '发出去之前再检查一遍。'],
  ]), 1798, c([['dubbel', '双倍的'], ['-t', '副词词尾']], '由“双倍的”变成副词，就是加倍地。')),
  freq(verb('döma', '判决；评判', 'to sentence / to judge', 'dömer', 'dömde', 'dömt', 'döm', [
    ['Domstolen ska döma i morgon.', '法院明天宣判。'],
    ['Han dömdes till fängelse.', '他被判了监禁。'],
    ['De har dömt för hårt.', '他们判得太重了。'],
    ['Döm inte så snabbt.', '别这么快下判断。'],
  ]), 1799),
  freq(verb('studera', '学习；研究；端详', 'to study', 'studerar', 'studerade', 'studerat', 'studera', [
    ['Hon studerar svenska i Lund.', '她在隆德学瑞典语。'],
    ['Han studerade kartan länge.', '他端详那张地图看了很久。'],
    ['De har studerat orsakerna.', '他们已经研究过那些原因。'],
    ['Studera texten noga.', '仔细学习这段文字。'],
  ]), 1800),
]

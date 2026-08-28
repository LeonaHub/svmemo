import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1601–1650. Primary POS is the high-frequency use, not every sense in the book. */
export const list33: Word[] = [
  freq(noun('restaurang', 'en', '餐馆；饭店', 'restaurant', 'restaurangen', 'restauranger', null, [
    ['Vi äter på en restaurang i kväll.', '我们今晚在一家餐馆吃。'],
    ['Restaurangen stänger vid tio.', '这家饭店十点关门。'],
    ['Två restauranger är fulla.', '两家餐馆都满了。'],
    ['Boka bord på restaurangen.', '在这家餐馆订位。'],
  ]), 1601),
  freq(noun('ost', 'en', '奶酪；东方', 'cheese / east', 'osten', 'ostar', null, [
    ['Jag köper ost till smörgåsen.', '我给三明治买奶酪。'],
    ['Osten är stark.', '这块奶酪味道冲。'],
    ['Hon har tre ostar i kylen.', '她冰箱里有三块奶酪。'],
    ['Skär osten tunt.', '把奶酪切薄。'],
  ]), 1602),
  freq(noun('trappa', 'en', '楼梯', 'stairs / staircase', 'trappan', 'trappor', null, [
    ['Vi går upp för trappan.', '我们走楼梯上去。'],
    ['Trappan är brant.', '这楼梯很陡。'],
    ['Huset har två trappor.', '这房子有两段楼梯。'],
    ['Vänta i trappan.', '在楼梯那儿等。'],
  ]), 1603),
  freq(other('i synnerhet', 'phrase', '尤其；特别是', 'in particular / especially', [
    ['Jag gillar hösten, i synnerhet oktober.', '我喜欢秋天，尤其是十月。'],
    ['Var försiktig, i synnerhet på isen.', '小心，尤其是在冰上。'],
    ['I synnerhet barnen blev glada.', '尤其是孩子们很高兴。'],
    ['Det gäller i synnerhet dig.', '这尤其适用于你。'],
  ]), 1604, c(
    [
      ['i', '在'],
      ['synner', '特别的；分开的'],
      ['-het', '性质、状态'],
    ],
    'synnerhet 是“特别之处”，加上 i 就是尤其、特别是。',
  )),
  freq(noun('kanon', 'en', '大炮；大腕（口）', 'cannon / (informal) big shot', 'kanonen', 'kanoner', null, [
    ['De visade en gammal kanon.', '他们展示了一门旧大炮。'],
    ['Kanonen stod vid muren.', '那门大炮立在墙边。'],
    ['Två kanoner hördes långt bort.', '两门大炮在很远的地方能听见。'],
    ['Han är en kanon på fotboll.', '他踢足球是把好手。'],
  ]), 1605),
  freq(noun('storlek', 'en', '尺寸；大小；号', 'size', 'storleken', 'storlekar', null, [
    ['Vilken storlek har du?', '你穿几号？'],
    ['Storleken stämmer inte.', '这个尺寸不对。'],
    ['De säljer tre storlekar.', '他们卖三个号。'],
    ['Prova en annan storlek.', '试试另一个号。'],
  ]), 1606, c([['stor', '大的'], ['lek', '规格']], '大的规格，合起来就是尺寸、号。')),
  freq(other('dock', 'adv', '然而；不过；仍然', 'however / nevertheless / still', [
    ['Tåget går dock inte idag.', '不过今天这班火车不开。'],
    ['Hon är trött, hon kommer dock.', '她很累，不过还是会来。'],
    ['Planen är svår. Den fungerar dock.', '这计划很难，但它仍然行得通。'],
    ['Vi väntar dock till i morgon.', '不过我们还是等到明天。'],
  ]), 1607),
  freq(verb('bränna', '烧；烫伤', 'to burn', 'bränner', 'brände', 'bränt', 'bränn', [
    ['Var försiktig så du inte bränner dig.', '小心别烫伤自己。'],
    ['De brände gamla löv i trädgården.', '他们在花园里烧枯叶。'],
    ['Middagen är bränd.', '晚饭烤糊了。'],
    ['Bränn inte pappren.', '别把那些纸烧掉。'],
  ]), 1608),
  freq(verb('slänga', '扔掉；甩；抛弃', 'to throw / to toss / to chuck', 'slänger', 'slängde', 'slängt', 'släng', [
    ['Hon slänger skalet i påsen.', '她把皮扔进袋子里。'],
    ['Han slängde jackan på stolen.', '他把外套甩到椅子上。'],
    ['Har du slängt mjölken?', '你把牛奶扔掉了吗？'],
    ['Släng inte nyckeln.', '别把钥匙扔掉。'],
  ]), 1609),
  freq(noun('alternativ', 'ett', '备选；替代办法', 'alternative', 'alternativet', 'alternativ', 'alternativen', [
    ['Det finns ett annat alternativ.', '还有另一个办法。'],
    ['Alternativet är att vänta.', '备选是再等一等。'],
    ['Vi jämför tre alternativ.', '我们比较三个备选。'],
    ['Alternativen är dyra.', '那些替代办法都很贵。'],
  ]), 1610),
  freq(adj('förälskad', '爱上的；热恋的', 'in love', 'förälskat', 'förälskade', [
    ['Hon är förälskad i honom.', '她爱上了他。'],
    ['Ett förälskat par satt på bänken.', '一对热恋中的人坐在长椅上。'],
    ['De förälskade såg bara varandra.', '那对恋人眼里只有彼此。'],
    ['Jag blev förälskad direkt.', '我一下子就爱上了。'],
  ]), 1611, c(
    [
      ['för-', '加强语气的前缀'],
      ['älskad', '被爱的（älska 爱）'],
    ],
    '“深深爱上了的”，合起来就是热恋的、爱上的。',
  )),
  freq(noun('apa', 'en', '猴子；猿；爱模仿的人', 'monkey / ape', 'apan', 'apor', null, [
    ['Barnet tittar på en apa.', '孩子在看一只猴子。'],
    ['Apan tar bananen.', '这只猴子拿了香蕉。'],
    ['Tre apor sitter i trädet.', '三只猴子坐在树上。'],
    ['Mata inte apan.', '别喂这只猴子。'],
  ]), 1612),
  freq(verb('varna', '警告；提醒小心', 'to warn', 'varnar', 'varnade', 'varnat', 'varna', [
    ['Hon varnar oss för isen.', '她警告我们小心冰。'],
    ['Han varnade barnen i går.', '他昨天提醒了孩子们。'],
    ['Har de varnat om stormen?', '他们警告过风暴了吗？'],
    ['Varna henne nu.', '现在警告她。'],
  ]), 1613),
  freq(adj('led', '厌烦的；厌倦的', 'tired of / fed up', 'lett', 'leda', [
    ['Jag är led på tjatet.', '我听烦了那些唠叨。'],
    ['Hon blev led vid att vänta.', '她等得厌倦了。'],
    ['De är leda på samma historia.', '他们听同一个故事听烦了。'],
    ['Är du redan led?', '你已经厌烦了吗？'],
  ]), 1614),
  freq(verb('njuta', '享受；感到愉快', 'to enjoy', 'njuter', 'njöt', 'njutit', 'njut', [
    ['Hon njuter av tystnaden.', '她在享受这份安静。'],
    ['Han njöt av kaffet.', '他享受了这杯咖啡。'],
    ['Har ni njutit av resan?', '你们享受这次旅行了吗？'],
    ['Njut av solen idag.', '今天好好享受阳光。'],
  ]), 1615),
  freq(noun('gris', 'en', '猪；邋遢的人（贬）', 'pig', 'grisen', 'grisar', null, [
    ['En gris står i hagen.', '一头猪站在围场里。'],
    ['Grisen äter äpplen.', '这头猪在吃苹果。'],
    ['Två grisar sover där.', '两头猪在那儿睡。'],
    ['Mata grisen på morgonen.', '早上给这头猪喂食。'],
  ]), 1616),
  freq(adj('personlig', '个人的；私人的；有个性的', 'personal / private', 'personligt', 'personliga', [
    ['Det är en personlig fråga.', '这是一个私人问题。'],
    ['Ett personligt brev låg där.', '那里放着一封私人信。'],
    ['De personliga sakerna är packade.', '那些个人物品已经装好。'],
    ['Håll det personligt, tack.', '请保持私密。'],
  ]), 1617, c([['person', '人'], ['-lig', '……的']], '属于某个人的，合起来就是个人的、私人的。')),
  freq(verb('fingra', '用手指摸；拨弄', 'to finger / to fiddle with', 'fingrar', 'fingrade', 'fingrat', 'fingra', [
    ['Han fingrar på nyckeln.', '他用手指拨弄钥匙。'],
    ['Hon fingrade på tyget.', '她用手指摸了那块布。'],
    ['Sluta, du har fingrat tillräckligt.', '停手，你已经拨弄够了。'],
    ['Fingra inte på kakan.', '别用手去摸蛋糕。'],
  ]), 1618, c([['finger', '手指'], ['-a', '（动词词尾）']], '用手指去碰，合起来就是拨弄、摸。')),
  freq(noun('tok', 'en', '疯子；傻瓜', 'fool / madman', 'token', 'tokar', 'tokarna', [
    ['Han beter sig som en tok.', '他表现得像个疯子。'],
    ['Token skrek på gatan.', '那个疯子在街上喊。'],
    ['Bara tokar tror på det.', '只有傻瓜才信那个。'],
    ['Tokarna skrattade.', '那些疯子在笑。'],
  ]), 1619),
  freq(noun('mobil', 'en', '手机', 'mobile phone', 'mobilen', 'mobiler', null, [
    ['Jag glömde mobilen hemma.', '我把手机忘在家里了。'],
    ['Mobilen ringer i väskan.', '手机在包里响。'],
    ['Två mobiler ligger på bordet.', '两部手机放在桌上。'],
    ['Stäng av mobilen här.', '在这儿把手关机。'],
  ]), 1620),
  freq(noun('tjänare', 'en', '仆人；侍从', 'servant', 'tjänaren', 'tjänare', 'tjänarna', [
    ['En tjänare öppnade dörren.', '一个仆人开了门。'],
    ['Tjänaren bar in brickan.', '那个仆人把托盘端了进来。'],
    ['Slottet hade många tjänare.', '城堡里有很多仆人。'],
    ['Tjänarna stod i köket.', '那些仆人站在厨房里。'],
  ]), 1621, c(
    [
      ['tjäna', '侍候；服务'],
      ['-are', '做这事的人'],
    ],
    '“做侍候这件事的人”，就是仆人、侍从。',
  )),
  freq(noun('hundratal', 'ett', '约一百；上百', 'about a hundred', null, null, null, [
    ['Ett hundratal personer väntar.', '大约一百人在等。'],
    ['Hundratal är svårt att räkna exakt.', '上百这个数很难精确去数。'],
    ['Det kom ett hundratal brev.', '来了大约一百封信。'],
    ['Vi behöver ett hundratal stolar.', '我们大约需要一百把椅子。'],
  ]), 1622, c([['hundra', '一百'], ['tal', '大约……之数']], '以百来计的数量，合起来就是约一百。')),
  freq(verb('bada', '游泳；洗澡', 'to bathe / to swim', 'badar', 'badade', 'badat', 'bada', [
    ['Barnen badar i sjön.', '孩子们在湖里游泳。'],
    ['Hon badade barnet i går.', '她昨天给孩子洗了澡。'],
    ['Har ni badat färdigt?', '你们洗完了吗？'],
    ['Bada inte så långt ut.', '别游那么远。'],
  ]), 1623),
  freq(noun('morbror', 'en', '舅舅；姨父', 'maternal uncle', 'morbrodern', 'morbröder', null, [
    ['Min morbror bor i Malmö.', '我舅舅住在马尔默。'],
    ['Morbrodern kom med presenter.', '那位舅舅带着礼物来了。'],
    ['Jag har två morbröder.', '我有两位舅舅。'],
    ['Ring morbror i kväll.', '今晚给舅舅打电话。'],
  ]), 1624, c([['mor', '母亲'], ['bror', '兄弟']], '母亲的兄弟，就是舅舅；也可指姨父。')),
  freq(verb('hämnas', '报仇；报复', 'to take revenge / to avenge', 'hämnas', 'hämnades', 'hämnats', 'hämnas', [
    ['Han vill hämnas på dem.', '他想报复他们。'],
    ['Hon hämnades för brodern.', '她为哥哥报了仇。'],
    ['De har hämnats redan.', '他们已经报过仇了。'],
    ['Hämnas inte nu.', '现在别报复。'],
  ]), 1625, c(
    [
      ['hämnd', '报仇'],
      ['-as', '感觉/被动动词词尾'],
    ],
    '由“报仇”变成自己去报仇、报复。',
  )),
  freq(noun('utbildning', 'en', '教育；培训', 'education / training', 'utbildningen', 'utbildningar', null, [
    ['Hon har en lång utbildning.', '她受过很长时间的教育。'],
    ['Utbildningen börjar i augusti.', '这次培训八月开始。'],
    ['De erbjuder två utbildningar.', '他们提供两种培训。'],
    ['Sök utbildningen i tid.', '及时去申请这个培训。'],
  ]), 1626, c([['ut', '出'], ['bildning', '培养／教育']], '培养出来的过程，合起来就是教育、培训。')),
  freq(other('allra', 'adv', '最；极其（加强最高级）', 'of all / very (with superlatives)', [
    ['Det här är allra bäst.', '这个是最好的。'],
    ['Hon kom allra först.', '她来得最早。'],
    ['Det var allra viktigast för oss.', '这对我们最重要。'],
    ['Jag vill sitta allra längst bak.', '我想坐在最后面。'],
  ]), 1627, c(
    [
      ['all', '全部'],
      ['-ra', '所有之中（旧属格）'],
    ],
    '“在所有之中”，用来加强最高级：最、极其。',
  )),
  freq(noun('senator', 'en', '参议员', 'senator', 'senatorn', 'senatorer', 'senatorerna', [
    ['En senator talade i salen.', '一位参议员在大厅发言。'],
    ['Senatorn röstade nej.', '那位参议员投了反对票。'],
    ['Flera senatorer kom sent.', '好几位参议员来晚了。'],
    ['Senatorerna samlades på morgonen.', '那些参议员早上开会。'],
  ]), 1628),
  freq(other('icke', 'adv', '不；非（较正式）', 'not / non- (formal)', [
    ['Det är icke tillåtet.', '这是不允许的。'],
    ['Hon är icke-rökare.', '她是不吸烟的人。'],
    ['Icke alla håller med.', '并非所有人都同意。'],
    ['Svara icke ännu.', '先别回答。'],
  ]), 1629),
  freq(verb('undersöka', '检查；调查；研究', 'to examine / to investigate', 'undersöker', 'undersökte', 'undersökt', 'undersök', [
    ['Läkaren undersöker knät.', '医生在检查膝盖。'],
    ['Hon undersökte rummet noga.', '她仔细查看了房间。'],
    ['Har de undersökt saken än?', '他们调查这件事了吗？'],
    ['Undersök lådan först.', '先检查这个箱子。'],
  ]), 1630, c([['under', '在下面／彻底'], ['söka', '寻找']], '彻底往下找，合起来就是检查、调查。')),
  freq(other('sällan', 'adv', '很少；不常', 'seldom / rarely', [
    ['Hon kommer sällan hit.', '她很少来这儿。'],
    ['Vi äter sällan kött.', '我们很少吃肉。'],
    ['Han ringer sällan på kvällen.', '他晚上很少打电话。'],
    ['Gå inte dit så sällan.', '别去得那么少。'],
  ]), 1631),
  freq(noun('faster', 'en', '姑姑；伯母', 'paternal aunt', 'fastern', 'fastrar', null, [
    ['Min faster bor i Lund.', '我姑姑住在隆德。'],
    ['Fastern bakar kaka.', '那位姑姑在烤蛋糕。'],
    ['Jag har tre fastrar.', '我有三位姑姑／伯母。'],
    ['Hälsa faster från oss.', '替我们向姑姑问好。'],
  ]), 1632, c([['far', '爸爸'], ['ster', '（来自 syster 姐妹）']], '爸爸的姐妹，就是姑姑、伯母。')),
  freq(verb('blåsa', '吹；刮风', 'to blow', 'blåser', 'blåste', 'blåst', 'blås', [
    ['Vinden blåser hårt idag.', '今天风刮得很猛。'],
    ['Hon blåste ut ljuset.', '她把蜡烛吹灭了。'],
    ['Det har blåst hela natten.', '风刮了一整夜。'],
    ['Blås på soppan.', '把汤吹一吹。'],
  ]), 1633),
  freq(noun('tisdag', 'en', '星期二', 'Tuesday', 'tisdagen', 'tisdagar', null, [
    ['Vi ses på tisdag.', '我们星期二见。'],
    ['Tisdagen gick fort.', '这个星期二过得很快。'],
    ['Hon jobbar tre tisdagar i rad.', '她连续三个星期二上班。'],
    ['Kom tillbaka på tisdagen.', '星期二再来。'],
  ]), 1634),
  freq(noun('skräp', 'ett', '垃圾；废物', 'trash / junk / rubbish', 'skräpet', null, null, [
    ['Släng skräpet i tunnan.', '把垃圾扔进桶里。'],
    ['Skräpet ligger på golvet.', '垃圾在地板上。'],
    ['Plocka upp skräp i parken.', '把公园里的垃圾捡起来。'],
    ['Lämna inte skräp här.', '别把垃圾留在这儿。'],
  ]), 1635),
  freq(noun('hiss', 'en', '电梯', 'lift / elevator', 'hissen', 'hissar', null, [
    ['Vi tar hissen upp.', '我们坐电梯上去。'],
    ['Hissen är trasig idag.', '电梯今天坏了。'],
    ['Huset har två hissar.', '这房子有两部电梯。'],
    ['Vänta vid hissen.', '在电梯那儿等。'],
  ]), 1636),
  freq(noun('maskin', 'en', '机器', 'machine', 'maskinen', 'maskiner', null, [
    ['Maskinen gör jobbet åt oss.', '机器替我们干活。'],
    ['Maskinen stannade plötsligt.', '机器突然停了。'],
    ['Två maskiner står i hallen.', '两台机器在大厅里。'],
    ['Starta maskinen försiktigt.', '小心地启动机器。'],
  ]), 1637),
  freq(noun('bas', 'en', '基础；基地；低音；头儿', 'base / foundation / bass / boss', 'basen', 'baser', null, [
    ['Lägret har en bas vid sjön.', '营地在湖边有一个基地。'],
    ['Basen i planen är svag.', '这个计划的基础很弱。'],
    ['De har flera baser utomlands.', '他们在国外有好几个基地。'],
    ['Bygg basen först.', '先把基础打好。'],
  ]), 1638),
  freq(verb('klippa', '剪；理发', 'to cut (with scissors)', 'klipper', 'klippte', 'klippt', 'klipp', [
    ['Hon klipper tyget rakt.', '她把布剪直。'],
    ['Han klippte håret i går.', '他昨天剪了头发。'],
    ['Har du klippt kupongen?', '你把票券剪下来了吗？'],
    ['Klipp inte för kort.', '别剪太短。'],
  ]), 1639),
  freq(noun('kliv', 'ett', '一大步；跨步', 'a stride / a big step', 'klivet', 'kliv', 'kliven', [
    ['Ta ett stort kliv framåt.', '向前跨一大步。'],
    ['Klivet över bäcken var långt.', '跨过小溪的那一步很长。'],
    ['Det krävs flera kliv.', '需要好几大步。'],
    ['Kliven blev kortare mot slutet.', '临近终点时那些步子变短了。'],
  ]), 1640),
  freq(noun('april', 'en', '四月', 'April', null, null, null, [
    ['Vi åker i april.', '我们四月走。'],
    ['April är ofta blöt här.', '这儿的四月常常很潮湿。'],
    ['Hon fyller år i april.', '她四月过生日。'],
    ['Boka resan till april.', '把旅行订在四月。'],
  ]), 1641),
  freq(verb('misslyckas', '失败；没做成', 'to fail', 'misslyckas', 'misslyckades', 'misslyckats', 'misslyckas', [
    ['Planen misslyckas ofta.', '这计划经常失败。'],
    ['Hon misslyckades med tårtan.', '她蛋糕没做成。'],
    ['Har ni misslyckats igen?', '你们又失败了吗？'],
    ['Misslyckas inte den här gången.', '这次别失败。'],
  ]), 1642, c([['miss-', '错、没'], ['lyckas', '成功']], '没有成功，合起来就是失败。')),
  freq(verb('trycka', '按；压；印刷', 'to press / to print', 'trycker', 'tryckte', 'tryckt', 'tryck', [
    ['Hon trycker på knappen.', '她在按按钮。'],
    ['Han tryckte boken mot bröstet.', '他把书压在胸口。'],
    ['De har tryckt affischen redan.', '他们已经把海报印好了。'],
    ['Tryck här, tack.', '请按这里。'],
  ]), 1643),
  freq(noun('rån', 'ett', '抢劫', 'robbery', 'rånet', 'rån', 'rånen', [
    ['Det skedde ett rån i banken.', '银行里发生了一起抢劫。'],
    ['Rånet filmades av kameran.', '这次抢劫被摄像头拍了下来。'],
    ['Polisen utreder två rån.', '警方在调查两起抢劫。'],
    ['Rånen skedde samma natt.', '那些抢劫发生在同一夜。'],
  ]), 1644),
  freq(noun('jacka', 'en', '夹克；短外套', 'jacket', 'jackan', 'jackor', null, [
    ['Hon har en blå jacka.', '她有一件蓝夹克。'],
    ['Jackan hänger i hallen.', '那件外套挂在门厅。'],
    ['Två jackor är för små.', '两件夹克都太小。'],
    ['Ta på jackan, det är kallt.', '穿上外套，天很冷。'],
  ]), 1645),
  freq(noun('kopia', 'en', '副本；复印件；复制品', 'copy', 'kopian', 'kopior', null, [
    ['Ta en kopia av avtalet.', '把合同复印一份。'],
    ['Kopian är suddig.', '这份复印件很模糊。'],
    ['Hon gjorde tre kopior.', '她做了三份副本。'],
    ['Skicka kopian till chefen.', '把这份副本寄给上司。'],
  ]), 1646),
  freq(other('enbart', 'adv', '仅仅；只', 'only / solely', [
    ['Det var enbart ett skämt.', '那仅仅是个玩笑。'],
    ['Hon dricker enbart vatten.', '她只喝水。'],
    ['Vi har enbart tre dagar kvar.', '我们只剩三天了。'],
    ['Frågan gäller enbart dig.', '这个问题只跟你有关。'],
  ]), 1647, c(
    [
      ['en', '一；单单'],
      ['bart', '光是；仅仅'],
    ],
    '“单单光是这样”，合起来就是仅仅、只。',
  )),
  freq(verb('satsa', '投入；押注；下功夫', 'to bet / to invest / to go for', 'satsar', 'satsade', 'satsat', 'satsa', [
    ['Jag satsar på den här idén.', '我押在这个想法上。'],
    ['Hon satsade allt på utbildningen.', '她把一切都投入到学业上。'],
    ['Vi har satsat för lite tid.', '我们投入的时间太少了。'],
    ['Satsa på det du kan.', '把功夫下在你会的事情上。'],
  ]), 1648),
  freq(noun('port', 'en', '大门；门洞；街门', 'gate / street door / doorway', 'porten', 'portar', null, [
    ['Vi möts i porten.', '我们在大门洞见面。'],
    ['Porten är låst på kvällen.', '这扇街门晚上是锁的。'],
    ['Gården har två portar.', '院子有两扇大门。'],
    ['Stå inte i porten.', '别站在门洞里。'],
  ]), 1649),
  freq(noun('besvär', 'ett', '麻烦；不适', 'trouble / ailment', 'besväret', 'besvär', 'besvären', [
    ['Jag vill inte göra besvär.', '我不想添麻烦。'],
    ['Besväret med knät kom tillbaka.', '膝盖的不适又来了。'],
    ['Hon har besvär med magen.', '她肠胃不舒服。'],
    ['Besvären blev värre på kvällen.', '那些不适晚上更厉害了。'],
  ]), 1650, c(
    [
      ['be-', '使役前缀'],
      ['svåra', '使变得困难'],
    ],
    '“被弄得困难”，合起来就是麻烦、身体不适。',
  )),
]

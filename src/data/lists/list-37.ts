import { adj, noun, other, verb } from '../builders'
import { c, freq } from '../freq'
import type { Word } from '../../types/word'

/** Ranks 1801–1850. Primary POS is the high-frequency use, not every sense in the book. */
export const list37: Word[] = [
  freq(noun('ton', 'en', '语气；音调', 'tone / pitch', 'tonen', 'toner', 'tonerna', [
    ['Hon talade med en hård ton.', '她用强硬的语气说话。'],
    ['Tonen i mailet var kall.', '那封邮件的语气很冷。'],
    ['Sången har tre toner.', '这首歌有三个音。'],
    ['Tonerna blev mörkare.', '那些音调变低了。'],
  ]), 1801),
  freq(noun('ström', 'en', '水流；电流', 'current / stream', 'strömmen', 'strömmar', 'strömmarna', [
    ['En stark ström drog båten.', '一股急流拖着船。'],
    ['Strömmen gick i hela huset.', '整栋房子都来电了。'],
    ['Det finns flera strömmar i ån.', '河里有好几股水流。'],
    ['Strömmarna är farliga här.', '这里的那些急流很危险。'],
  ]), 1802),
  freq(verb('välsigna', '祝福；保佑', 'to bless', 'välsignar', 'välsignade', 'välsignat', 'välsigna', [
    ['Prästen välsignar barnet.', '牧师祝福这个孩子。'],
    ['Hon välsignade oss innan vi gick.', '我们走之前她祝福了我们。'],
    ['Måltiden är välsignad.', '这顿饭已经祝过福了。'],
    ['Välsigna det här huset.', '保佑这栋房子。'],
  ]), 1803, c(
    [
      ['väl', '好好地'],
      ['signa', '画十字；祝福'],
    ],
    '“好好地祝福”，就是保佑。',
  )),
  freq(verb('befria', '解放；使摆脱', 'to free / to liberate', 'befriar', 'befriade', 'befriat', 'befria', [
    ['De vill befria fångarna.', '他们想解放那些囚犯。'],
    ['Hon befriade honom från skulden.', '她让他摆脱了那笔债。'],
    ['Staden har befriats.', '这座城市已经被解放了。'],
    ['Befria oss från det här.', '让我们摆脱这件事。'],
  ]), 1804, c(
    [
      ['be-', '使役前缀'],
      ['fria', '使自由'],
    ],
    '“使变得自由”，就是解放、使摆脱。',
  )),
  freq(noun('piller', 'ett', '药丸', 'pill', 'pillret', 'piller', 'pillren', [
    ['Hon tar ett piller varje morgon.', '她每天早上吃一粒药丸。'],
    ['Pillret är bittert.', '这粒药丸很苦。'],
    ['Två piller räcker i dag.', '今天两粒就够。'],
    ['Pillren står i skåpet.', '那些药丸在柜子里。'],
  ]), 1805),
  freq(verb('ladda', '装填；充电', 'to load / to charge', 'laddar', 'laddade', 'laddat', 'ladda', [
    ['Han laddar telefonen nu.', '他正在给手机充电。'],
    ['Hon laddade kameran före resan.', '她出发前给相机充了电。'],
    ['Har du laddat batteriet?', '你给电池充电了吗？'],
    ['Ladda den här sladden.', '给这根线充上电。'],
  ]), 1806),
  freq(adj('korrekt', '正确的；得体的', 'correct / proper', 'korrekt', 'korrekta', [
    ['Svaret är korrekt.', '这个答案是对的。'],
    ['Ett korrekt svar räcker.', '一个正确的回答就够。'],
    ['De korrekta siffrorna kom sent.', '那些正确的数字来得很晚。'],
    ['Uppträd korrekt mot gästerna.', '对客人们举止得体。'],
  ]), 1807),
  freq(noun('skådespelare', 'en', '演员', 'actor', 'skådespelaren', 'skådespelare', 'skådespelarna', [
    ['Hon är skådespelare.', '她是演员。'],
    ['Skådespelaren tar en paus.', '这位演员在休息。'],
    ['Två skådespelare väntar bakom scenen.', '两位演员在后台等。'],
    ['Skådespelarna bugade sig.', '那些演员鞠了躬。'],
  ]), 1808, c([['skåde', '观看／演出'], ['spelare', '表演的人']], '在台上给人看的表演者，合起来就是演员。')),
  freq(noun('projekt', 'ett', '项目；课题', 'project', 'projektet', 'projekt', 'projekten', [
    ['Vi startar ett nytt projekt.', '我们启动一个新项目。'],
    ['Projektet tar tre månader.', '这个项目要三个月。'],
    ['Hon leder två projekt i år.', '她今年带两个项目。'],
    ['Projekten är försenade.', '那些项目延期了。'],
  ]), 1809),
  freq(other('så småningom', 'phrase', '渐渐地；终于', 'eventually / gradually', [
    ['Så småningom förstod hon.', '她渐渐明白了。'],
    ['Vi kom fram så småningom.', '我们终于到了。'],
    ['Så småningom blev det tyst.', '渐渐地安静了下来。'],
    ['Han lärde sig så småningom.', '他渐渐学会了。'],
  ]), 1810, c(
    [
      ['så', '如此；就这样'],
      ['småningom', '一点点地'],
    ],
    '“就这样一点点地”，就是渐渐地、终于。',
  )),
  freq(noun('storm', 'en', '风暴；（引申）强烈反应', 'storm', 'stormen', 'stormar', 'stormarna', [
    ['En storm kommer inatt.', '今晚有风暴要来。'],
    ['Stormen rev ner trädet.', '风暴把那棵树刮倒了。'],
    ['Hösten har flera stormar.', '秋天有好几场风暴。'],
    ['Beslutet väckte en storm.', '这个决定激起了强烈反应。'],
  ]), 1811),
  freq(other('inom ramen för', 'phrase', '在……范围内；在……框架内', 'within the framework of', [
    ['Det sker inom ramen för lagen.', '这是在法律范围内进行的。'],
    ['Inom ramen för projektet har vi tid.', '在这个项目的框架内我们有时间。'],
    ['Hon agerade inom ramen för sitt uppdrag.', '她在自己职责范围内行事。'],
    ['Håll dig inom ramen för avtalet.', '请待在合同范围内。'],
  ]), 1812, c(
    [
      ['inom', '在……之内'],
      ['ramen', '框架（ram 的定式）'],
      ['för', '对于'],
    ],
    '“在这个框架之内”，就是在……范围内。',
  )),
  freq(noun('start', 'en', '开始；起点', 'start / beginning', 'starten', 'starter', 'starterna', [
    ['Hon fick en bra start.', '她有一个好的开始。'],
    ['Starten gick klockan nio.', '九点开跑／开始了。'],
    ['Två starter ställdes in.', '两次起跑取消了。'],
    ['Vi är vid start och mål.', '我们在起点和终点。'],
  ]), 1813),
  freq(noun('drake', 'en', '龙；风筝', 'dragon / kite', 'draken', 'drakar', 'drakarna', [
    ['Barnet ritade en drake.', '孩子画了一条龙。'],
    ['Draken flög över byn.', '那条龙／那个风筝飞过村子。'],
    ['Vi såg tre drakar i luften.', '我们看见天上有三个风筝。'],
    ['Drakarna i sagan är gröna.', '故事里的那些龙是绿色的。'],
  ]), 1814),
  freq(noun('borgmästare', 'en', '市长', 'mayor', 'borgmästaren', 'borgmästare', 'borgmästarna', [
    ['En borgmästare talade på torget.', '一位市长在广场上讲话。'],
    ['Borgmästaren öppnade mötet.', '市长宣布开会。'],
    ['De två borgmästarna möttes.', '那两位市长见了面。'],
    ['Borgmästarna skakade hand.', '那些市长握了手。'],
  ]), 1815, c(
    [
      ['borg', '城堡；市镇'],
      ['mästare', '主人；掌管者'],
    ],
    '“市镇的掌管者”，就是市长。',
  )),
  freq(noun('party', 'ett', '派对；聚会', 'party', 'partyt', 'partyn', 'partyna', [
    ['Vi ska på ett party i kväll.', '我们今晚要去一个派对。'],
    ['Partyt slutade sent.', '那个派对结束得很晚。'],
    ['De hade tre partyn i juli.', '他们七月办了三次聚会。'],
    ['Partyna var för högljudda.', '那些派对太吵了。'],
  ]), 1816),
  freq(adj('kvitt', '两清的；摆脱了的', 'quits / rid of', 'kvitt', 'kvitt', [
    ['Nu är vi kvitt.', '现在我们两清了。'],
    ['Ge mig tjugo så är vi kvitt.', '给我二十块我们就两清了。'],
    ['Hon vill bli kvitt förkylningen.', '她想摆脱感冒。'],
    ['Jag är äntligen kvitt oron.', '我终于摆脱了担心。'],
  ]), 1817),
  freq(noun('media', null, '媒体', 'the media', null, 'media', 'medierna', [
    ['Media rapporterar om valet.', '媒体在报道这次选举。'],
    ['Hon jobbar i media.', '她在媒体工作。'],
    ['Sociala media sprider nyheten fort.', '社交媒体传消息很快。'],
    ['Medierna var på plats tidigt.', '那些媒体很早就到了现场。'],
  ]), 1818),
  freq(noun('trupp', 'en', '部队；一队人', 'troop / squad', 'truppen', 'trupper', 'trupperna', [
    ['En trupp gick över bron.', '一支部队过了桥。'],
    ['Truppen stannade vid gränsen.', '那支部队停在边境。'],
    ['De skickade flera trupper.', '他们派出了好几支部队。'],
    ['Trupperna drog sig tillbaka.', '那些部队撤退了。'],
  ]), 1819),
  freq(noun('snubbe', 'en', '家伙；男的（口语）', 'guy (informal)', 'snubben', 'snubbar', 'snubbarna', [
    ['En snubbe frågade om vägen.', '一个家伙问路。'],
    ['Snubben vid disken väntade.', '柜台边那个男的在等。'],
    ['Två snubbar kom in.', '两个家伙走了进来。'],
    ['Snubbarna skrattade.', '那些家伙在笑。'],
  ]), 1820),
  freq(adj('otrogen', '不忠的；不忠实的', 'unfaithful', 'otroget', 'otrogna', [
    ['Han var otrogen mot henne.', '他对她不忠。'],
    ['Ett otroget löfte.', '一个不忠实的承诺。'],
    ['De otrogna makarna bråkade.', '那对不忠的夫妻吵了起来。'],
    ['Hon kände sig otrogen.', '她觉得自己不忠。'],
  ]), 1821, c(
    [
      ['o-', '否定前缀'],
      ['trogen', '忠实的'],
    ],
    '“不忠实的”，就是不忠。',
  )),
  freq(noun('katastrof', 'en', '灾难', 'disaster / catastrophe', 'katastrofen', 'katastrofer', 'katastroferna', [
    ['Det var en stor katastrof.', '那是一场大灾难。'],
    ['Katastrofen drabbade kusten.', '这场灾难袭击了海岸。'],
    ['Två katastrofer kom samma år.', '同一年发生了两场灾难。'],
    ['Vi skickar hjälp efter katastrofen.', '灾难之后我们送去援助。'],
  ]), 1822),
  freq(adj('förbjuden', '禁止的', 'forbidden / prohibited', 'förbjudet', 'förbjudna', [
    ['Rökning är förbjuden här.', '这里禁止吸烟。'],
    ['Ett förbjudet område ligger bakom staketet.', '围栏后面是禁区。'],
    ['De förbjudna vägarna är stängda.', '那些禁止通行的路关了。'],
    ['Det är förbjudet att parkera.', '禁止停车。'],
  ]), 1823, c([['för-', '加强／使成为'], ['bjuden', '被请求／被吩咐的']], '被明确不许做的，合起来就是禁止的。')),
  freq(noun('egendom', 'en', '财产；产业', 'property / estate', 'egendomen', 'egendomar', 'egendomarna', [
    ['Huset är min egendom.', '这房子是我的财产。'],
    ['Egendomen gick i arv.', '这份产业被继承了。'],
    ['De ägde flera egendomar.', '他们拥有好几处产业。'],
    ['Egendomarna såldes i fjol.', '那些产业去年卖掉了。'],
  ]), 1824, c(
    [
      ['egen', '自己的'],
      ['-dom', '状态、领域后缀'],
    ],
    '“属于自己的东西”，就是财产、产业。',
  )),
  freq(noun('marknad', 'en', '市场；集市', 'market', 'marknaden', 'marknader', 'marknaderna', [
    ['Vi går till marknaden på lördag.', '我们星期六去集市。'],
    ['Marknaden öppnar tidigt.', '集市开得很早。'],
    ['Det finns två marknader i stan.', '城里有两个市场。'],
    ['Bilen säljs på den öppna marknaden.', '这车在公开市场上卖。'],
  ]), 1825),
  freq(other('i själva verket', 'phrase', '实际上；其实', 'in fact / actually', [
    ['I själva verket visste hon redan.', '其实她已经知道了。'],
    ['Det är i själva verket enkelt.', '这实际上很简单。'],
    ['Han är i själva verket rädd.', '他其实很害怕。'],
    ['I själva verket var det ett skämt.', '实际上那是个玩笑。'],
  ]), 1826, c(
    [
      ['i', '在'],
      ['själva', '本身的'],
      ['verket', '事情本身（verk 的定式）'],
    ],
    '“就在事情本身里”，就是实际上、其实。',
  )),
  freq(adj('korkad', '蠢的（口语）', 'stupid (informal)', 'korkat', 'korkade', [
    ['Det var en korkad idé.', '那是个蠢主意。'],
    ['Ett korkat svar.', '一个蠢回答。'],
    ['De korkade skämten slutade.', '那些蠢笑话停了。'],
    ['Jag kände mig korkad.', '我觉得自己挺蠢的。'],
  ]), 1827, c(
    [
      ['kork', '瓶塞'],
      ['-ad', '形容词词尾'],
    ],
    '像脑子被瓶塞堵住，口语里就是蠢。',
  )),
  freq(other('i fråga', 'phrase', '所谈的；在考虑中', 'in question / under consideration', [
    ['Personen i fråga har gått.', '当事人已经走了。'],
    ['Bilen i fråga är röd.', '所说的那辆车是红的。'],
    ['Det kan inte komma i fråga.', '那根本不考虑。'],
    ['Kommer det i fråga i dag?', '今天会考虑这件事吗？'],
  ]), 1828, c([['i', '在'], ['fråga', '问题／事情']], '在所问的那件事上，合起来就是所谈的、在考虑中。')),
  freq(verb('rymma', '逃走；装得下', 'to escape / to hold (volume)', 'rymmer', 'rymde', 'rymt', 'rym', [
    ['Fången rymde i natt.', '囚犯夜里逃走了。'],
    ['Hur många ryms i bilen?', '车里能坐下多少人？'],
    ['De har rymt från lägret.', '他们从营地逃走了。'],
    ['Rym inte nu.', '现在别逃。'],
  ]), 1829),
  freq(other('Vietnam', 'proper', '越南', 'Vietnam', [
    ['Hon bor i Vietnam.', '她住在越南。'],
    ['Vietnam ligger i Asien.', '越南在亚洲。'],
    ['Vi flyger till Vietnam i maj.', '我们五月飞去越南。'],
    ['Kommer du från Vietnam?', '你从越南来吗？'],
  ]), 1830),
  freq(noun('bana', 'en', '跑道；轨道；生涯', 'track / path / career', 'banan', 'banor', 'banorna', [
    ['Tåget gick av banan.', '火车脱轨了。'],
    ['Banan är isig i dag.', '今天跑道结冰了。'],
    ['Hon bytte bana efter examen.', '她毕业后换了行业。'],
    ['Banorna i hallen är upptagna.', '馆里的那些跑道都被占了。'],
  ]), 1831),
  freq(verb('svika', '辜负；背叛', 'to let down / to betray', 'sviker', 'svek', 'svikit', 'svik', [
    ['Jag ska inte svika dig.', '我不会辜负你。'],
    ['Han svek sitt löfte.', '他违背了自己的诺言。'],
    ['De har svikit oss förr.', '他们以前辜负过我们。'],
    ['Svik inte vännerna.', '别背叛朋友。'],
  ]), 1832),
  freq(noun('silver', 'ett', '银；银牌', 'silver', 'silvret', null, null, [
    ['Skeden är av silver.', '这把勺子是银的。'],
    ['Silvret glänste i ljuset.', '银器在光里发亮。'],
    ['Hon tog silver i löpning.', '她在跑步里拿了银牌。'],
    ['Putsa silvret före festen.', '宴会前把银器擦一擦。'],
  ]), 1833),
  freq(noun('grand', 'ett', '一点点', 'a bit / a whit', 'grandet', null, null, [
    ['Det är inte ett grand sant.', '这一点也不真。'],
    ['Jag förstår ett litet grand.', '我懂一点点。'],
    ['Grandet i ögat retade henne.', '眼里那一点东西惹得她难受。'],
    ['Inte ett grand bättre.', '一点也没有好转。'],
  ]), 1834),
  freq(noun('bluff', 'en', '唬人；骗局', 'bluff', 'bluffen', 'bluffar', 'bluffarna', [
    ['Det var bara en bluff.', '那只是唬人。'],
    ['Bluffen avslöjades snabbt.', '这个骗局很快被揭穿。'],
    ['Han har kört flera bluffar.', '他玩过好几次唬人。'],
    ['Bluffarna funkade inte.', '那些唬人没用。'],
  ]), 1835),
  freq(noun('teori', 'en', '理论', 'theory', 'teorin', 'teorier', 'teorierna', [
    ['Hon har en teori om det.', '她对此有一个理论。'],
    ['Teorin håller inte.', '这个理论站不住。'],
    ['Det finns flera teorier här.', '这儿有好几种理论。'],
    ['I teorin fungerar det.', '在理论上这行得通。'],
  ]), 1836),
  freq(noun('låt', 'en', '歌曲（口语）', 'song (informal)', 'låten', 'låtar', 'låtarna', [
    ['Det är en bra låt.', '这是一首好歌。'],
    ['Låten gick på radio.', '那首歌在电台播了。'],
    ['De spelade tre låtar.', '他们演奏了三首歌。'],
    ['Låtarna är korta.', '那些歌都很短。'],
  ]), 1837),
  freq(verb('spöa', '打；揍（口语）', 'to beat / to thrash (informal)', 'spöar', 'spöade', 'spöat', 'spöa', [
    ['De spöar motståndarna.', '他们把对手打趴下了。'],
    ['Han spöade mig i schack.', '他下棋把我打得很惨。'],
    ['Laget har spöat alla.', '这支队把所有人都揍过了。'],
    ['Spöa dem inte för hårt.', '别把他们打得太狠。'],
  ]), 1838, c(
    [
      ['spö', '鞭子；棍子'],
      ['-a', '动词词尾'],
    ],
    '“用鞭子打”，口语里就是揍、打得很惨。',
  )),
  freq(noun('mänsklighet', 'en', '人类', 'humanity / humankind', 'mänskligheten', null, null, [
    ['Mänskligheten står inför ett val.', '人类面临一个选择。'],
    ['Hon skriver om mänsklighetens historia.', '她在写人类的历史。'],
    ['Hela mänskligheten berörs.', '全人类都受影响。'],
    ['Vi tillhör samma mänsklighet.', '我们同属人类。'],
  ]), 1839, c([['mänsklig', '人的'], ['-het', '性质、状态']], '作为人的整体，合起来就是人类。')),
  freq(verb('fokusera', '聚焦；集中', 'to focus', 'fokuserar', 'fokuserade', 'fokuserat', 'fokusera', [
    ['Hon fokuserar på texten.', '她把注意力集中在课文上。'],
    ['Han fokuserade kameran på barnet.', '他把相机焦点对准了孩子。'],
    ['Har ni fokuserat på målet?', '你们把精力集中在目标上了吗？'],
    ['Fokusera nu, tack.', '现在请集中注意力。'],
  ]), 1840, c([['fokus', '焦点'], ['-era', '动词词尾']], '放到焦点上，合起来就是聚焦、集中。')),
  freq(noun('insida', 'en', '内侧；里面', 'inside', 'insidan', 'insidor', 'insidorna', [
    ['Jackan har en mjuk insida.', '这件外套里面很软。'],
    ['Insidan av skåpet är mörk.', '柜子内侧是黑的。'],
    ['Båda insidorna är släta.', '两面内侧都很平滑。'],
    ['Titta på insidan av locket.', '看看盖子的里面。'],
  ]), 1841, c([['in', '向内'], ['sida', '面；边']], '朝里的那一面，合起来就是内侧、里面。')),
  freq(noun('salt', 'ett', '盐', 'salt', 'saltet', null, null, [
    ['Soppan behöver mer salt.', '汤还需要再加点盐。'],
    ['Saltet står vid spisen.', '盐在炉子边上。'],
    ['Ta salt och peppar, tack.', '请拿盐和胡椒。'],
    ['Strö salt över potatisen.', '把盐撒在土豆上。'],
  ]), 1842),
  freq(noun('slott', 'ett', '城堡；宫殿', 'castle / palace', 'slottet', 'slott', 'slotten', [
    ['Vi besöker ett gammalt slott.', '我们去参观一座古城堡。'],
    ['Slottet ligger på kullen.', '城堡在小山上。'],
    ['Två slott syns från vägen.', '从路上能看见两座城堡。'],
    ['Slotten är stängda i dag.', '那些宫殿今天不开放。'],
  ]), 1843),
  freq(noun('överlevande', 'en', '幸存者', 'survivor', 'överlevanden', 'överlevande', 'överlevandena', [
    ['En överlevande hittades i huset.', '在房子里找到一名幸存者。'],
    ['Överlevanden berättade allt.', '那名幸存者把一切都说了。'],
    ['Det fanns tre överlevande.', '有三名幸存者。'],
    ['Överlevandena fick hjälp.', '那些幸存者得到了帮助。'],
  ]), 1844, c(
    [
      ['över', '度过；越过'],
      ['levande', '活着的'],
    ],
    '“活过来的人”，就是幸存者。',
  )),
  freq(verb('längta', '渴望；想念', 'to long / to yearn', 'längtar', 'längtade', 'längtat', 'längta', [
    ['Jag längtar efter kaffe.', '我很想喝咖啡。'],
    ['Hon längtade hem i höstas.', '她秋天想家了。'],
    ['Har du längtat länge?', '你想念很久了吗？'],
    ['Längta inte för mycket.', '别想得太厉害。'],
  ]), 1845),
  freq(other('naturligt', 'adv', '自然地', 'naturally', [
    ['Hon ler naturligt.', '她笑得很自然。'],
    ['Det kom naturligt för honom.', '这对他来说来得很自然。'],
    ['Hon talar naturligt svenska.', '她瑞典语讲得很自然。'],
    ['Det känns naturligt nu.', '现在感觉很自然。'],
  ]), 1846, c([['naturlig', '自然的'], ['-t', '副词词尾']], '以自然的方式，合起来就是自然地。')),
  freq(verb('slita', '撕；拼命干', 'to tear / to toil', 'sliter', 'slet', 'slitit', 'slit', [
    ['Hon sliter med jobbet.', '她拼命干这份工作。'],
    ['Han slet upp kuvertet.', '他撕开了信封。'],
    ['Vi har slitit hela dagen.', '我们干了一整天。'],
    ['Slit inte i tyget.', '别撕那块布。'],
  ]), 1847),
  freq(noun('avdelning', 'en', '部门；病区', 'department / ward', 'avdelningen', 'avdelningar', 'avdelningarna', [
    ['Hon jobbar på en avdelning här.', '她在这儿的一个部门工作。'],
    ['Avdelningen tar emot nya patienter.', '这个病区接收新病人。'],
    ['Sjukhuset har tre avdelningar.', '医院有三个病区。'],
    ['Gå till avdelningen för barn.', '去儿童病区。'],
  ]), 1848, c([['av', '分开'], ['delning', '划分']], '划分出来的一块，合起来就是部门、病区。')),
  freq(other('på så sätt', 'phrase', '这样一来；以这种方式', 'in that way / thus', [
    ['På så sätt sparar vi tid.', '这样一来我们能省时间。'],
    ['Hon löste det på så sätt.', '她是用这种方式解决的。'],
    ['På så sätt blir det tydligt.', '这样一来就清楚了。'],
    ['Vi kan hjälpa på så sätt.', '我们可以用这种方式帮忙。'],
  ]), 1849, c(
    [
      ['på', '以；在'],
      ['så', '这样'],
      ['sätt', '方式'],
    ],
    '“以这样的方式”，就是这样一来。',
  )),
  freq(noun('service', 'en', '服务；保养', 'service / overhaul', 'servicen', null, null, [
    ['Kommunen ger service åt alla.', '市政给所有人提供服务。'],
    ['Servicen på hotellet är bra.', '这家酒店的服务很好。'],
    ['Bilen är inne på service.', '这车在做保养。'],
    ['Vi behöver bättre service här.', '我们这儿需要更好的服务。'],
  ]), 1850),
]

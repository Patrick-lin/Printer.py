document.addEventListener('DOMContentLoaded', function() {
    // 中文输入法字典
    const dictionary = {
        a: '阿啊吖嗄锕安爱暗案按',
        ai: '爱呆挨哀埃碍艾唉矮哎癌嗌嗳嗳嫒捱暧瑷皑砹硙蔼诶锿隘霭',
        an: '安暗案按岸俺埯庵揞桉氨犴胺腌谙铵鞍鹌黯',
        ang: '昂盎腌',
        ao: '奥澳傲熬凹嗷坳媪岙廒懊拗敖燠獒翱聱螯袄遨鏊鏖骜鳌',
        b: '不本把部便被北并别比',
        ba: '把八吧巴伯罢爸拔霸坝叭扒岜捌杷湃灞疤笆粑耙芭茇菝萆跋钯钹靶魃鲃鲅鲌',
        bai: '白百伯败拜摆柏佰呗捭掰稗薜鞴䙓',
        ban: '反办半版般班板伴搬扮斑颁坂扳拌瓣瘢癍绊舨钣阪',
        bang: '帮旁邦棒膀绑傍榜梆氆浜磅蒡蚌螃谤镑',
        bao: '报保包宝抱暴炮薄爆胞饱剥堡鲍刨孢掊煲脬苞苴葆裒褒褓褴豹趵铇雹鸨',
        be: '本被北备背奔悲辈杯臂',
        bei: '被北备背悲辈杯臂贝倍碑卑呗埤孛庳悖惫焙狈碚萆蓓蜚褙跋邶鐾钡陂鞴鹎',
        ben: '本奔笨坌夯畚苯贲锛唪',
        beng: '唪嘣堋崩抨泵甏甭绷绷蚌蹦迸镚',
        bi: '比必笔毕秘避臂币壁闭逼鼻彼碧辟拂毙鄙蔽弊俾匕吡哔埤妣婢嬖庇庳弼愎敝枇檗殍毖泌滗濞狴璧畀痹睥瞥秕筚箅篦纰舭芘荜荸菝萆蓖薜蘖蚍裨襞诐贲赑跛跸鐾铋陂陛陴馥髀鲾',
        bia: '便表边变编标遍彪辩鞭',
        bian: '便边变编遍辩鞭辨辫扁匾卞弁忭汴煸砭碥稹窆笾缏苄蝙褊贬鳊',
        biao: '表标彪镖剽婊嫖杓灬焱瘭膘苞裱鏖镳飑飙飚骉骠髟鳔',
        bie: '别憋瘪蹩鳖',
        bin: '宾彬滨斌傧摈殡浜濒玢禀缤膑豳镔髌鬓',
        bing: '并兵病冰柄屏饼丙冫廪摒枋槟炳燹禀秉迸邴',
        bo: '白百般波伯博播薄勃拨柏剥玻脖泊卜驳搏魄亳佰啵孛帛悖擘檗泺渤溥礴箔簸簿膊舶艴荸菔菠蕃薜蘖袯趵跛踣钵钹铂镈雹饽馎鲅鲌鹁',
        bu: '不部步布补捕堡怖卜卟卩哺埔埠惚晡溥瓿簿逋醭钚钸鞴',
        c: '出成从长此重次产处才',
        ca: '擦拆嚓礤才参采藏草菜',
        cai: '才采菜财材彩裁猜蔡踩睬䌽',
        can: '参残餐惨灿孱惭掺昝璨粲蚕骖黪',
        cang: '藏苍仓舱伧沧臧鸧',
        cao: '草操曹嘈屮槽漕澡糙艚螬',
        ce: '策测侧册厕恻栅赦䇲曾',
        cen: '参岑涔曾层噌缯蹭',
        ceng: '曾层噌缯蹭',
        ch: '出成长重产处场车常吃',
        cha: '查差察茶插刹叉吒咤喳姹岔搋搽杈楂槎檫汊痄碴苴茬荼衩诧锸镲馇',
        chai: '差柴拆侪瘥茈虿豺钗',
        chan: '产单颤禅缠阐冁刬啴婵孱廛忏掸掺搀浐潺澶羼苫蒇蝉蟾觇谄谗躔铲镵馋骣',
        chang: '长场常厂唱尝偿昌畅肠倡敞伥娼嫦徜怅惝昶氅猖玚苌菖裳锠阊鬯鲳鲿',
        chao: '朝超潮吵抄炒嘲绰剿巢怊晁焯耖钞',
        che: '车彻尺撤扯坼屮掣澈砗辙',
        chen: '称陈沉晨尘沈臣辰趁衬琛嗔宸忱抻榇橙湛疹眈碜秤肜胂谌谶郴龀',
        cheng: '成城程称承枪乘盛诚撑呈惩澄丞伧噌埕塍晟枨柽樘橙浈瞠秤蛏裎赪逞郢酲铖铛骋',
        chi: '吃持迟赤尺池驰耻痴齿斥嗤匙侈傺叱哆哧啻坻墀媸弛彳搋敕沱炽瘛眙眵笞篪翅胝芪茌茬蚩螭褫豉踅踟郗饬魑䗖',
        cho: '重冲充抽仇崇愁丑臭筹',
        chon: '重冲充崇虫宠忡憧潼盅',
        chong: '重冲充崇虫宠忡憧潼盅舂艟茧茺酮铳',
        chou: '抽仇愁丑臭筹酬绸瞅俦帱惆搐焘畴瘳稠踌雠䌷',
        chu: '出处初除楚础触储厨畜亍刍怵憷搐杵楮樗橱滁矗硫絮绌蜍褚蹰锄雏黜',
        chua: '传创穿船窗床川串闯喘',
        chuai: '嘬揣揣搋踹蹉',
        chuan: '传穿船川串喘巛椽氚舛舡遄钏',
        chuang: '创窗床闯幢囱怆疮舂',
        chui: '吹垂锤捶棰椎槌炊陲',
        chun: '春纯唇淳蠢椿沌肫莼醇鹑䞐',
        chuo: '绰啜戳淖焯簇缀荃蔟踔踱躇辍醛龊',
        ci: '此次差刺词辞慈赐磁瓷兹伺嵯恣疵祠粢糍茈茨蚝螅訾趑雌鹚',
        co: '从匆聪丛凑葱囱揍枞楱',
        con: '从匆聪丛葱囱枞淙琮璁',
        cong: '从匆聪丛葱囱枞淙琮璁苁骢',
        cou: '凑揍楱簇腠蔟辏',
        cu: '促粗醋卒徂槭殂猝簇蔟蹙蹴酢',
        cua: '窜撺汆爨篡蹿镩',
        cuan: '窜撺汆爨篡蹿镩',
        cui: '脆翠崔衰催粹摧啐悴榱橇毳淬璀瘁缞萃隹',
        cun: '存村寸忖浚皴',
        cuo: '错差措挫厝嵯搓撮痤瘥矬磋脞蹉锉鹾',
        d: '的大到地道得对多都当',
        da: '大打达答塔搭哒妲怛沓疸瘩瘩笪耷荙褡跶酂靼鞑',
        dai: '大代带待呆袋戴贷逮歹傣呔埭岱怠棣殆玳甙绐轪迨逯黛',
        dan: '但单石担弹丹淡胆旦蛋诞儋啖惮掸檐殚氮湛澶澹疸瘅瘅眈箪耽聃膻萏蜒詹赡郸钽',
        dang: '当党荡挡档凼垱宕玚珰砀筜菪裆谠铛',
        dao: '到道倒导刀岛盗稻蹈悼捣叨刂帱忉梼氘洮祷纛鱽',
        de: '的地得德锝陟等登邓',
        dei: '得',
        den: '等登邓灯瞪凳澄噔嶝戥',
        deng: '等登邓灯瞪凳澄噔嶝戥橙眙磴簦蹬镫',
        di: '的地第提弟底低敌帝适抵递滴狄迪蒂堤笛嘀坻娣嫡柢棣氐涤睇砥碲籴缔羝翟胝芍荻莜觌诋谛蹄轪邸镝骶䗖',
        dia: '嗲点电调店掉典鸟雕殿',
        dian: '点电店典殿颠淀甸奠佃坫垫巅惦拈掂涎滇玷癜癫碘簟蜓踮钿阽靛',
        diao: '调掉鸟雕钓吊凋刁叼碉稠窎莜蜩貂踔钌铞鲷',
        die: '爹跌叠蝶碟佚喋垤堞揲渫牒瓞窒绖耋褶谍蹀轶迭鲽鳎',
        din: '定顶订丁钉盯鼎叮仃啶',
        ding: '定顶订丁钉盯鼎叮仃啶汀玎町疔碇耵腚葶酊锭饤',
        diu: '丢铥',
        do: '都动东读斗洞懂冬豆抖',
        don: '动东洞懂冬董冻栋侗咚',
        dong: '动东洞懂冬董冻栋侗咚垌岽峒恫氡甬硐胨胴酮鸫',
        dou: '都读斗豆抖兜逗陡渎痘窦窬篼蔸蚪逾饾',
        du: '都度读独毒督肚渡杜赌堵睹嘟妒椟橐渎牍犊碡竺笃纛芏蠹镀阇髑黩㱩',
        dua: '段断端短锻椴煅簖缎踹',
        duan: '段断端短锻椴煅簖缎踹',
        dui: '对队堆敦兑怼憝槌碓镦',
        dun: '顿盾吨敦蹲囤墩沌炖盹砘礅豚趸遁钝',
        duo: '多度夺躲朵舵堕亸剁咄哆哚垛惰掇柁棰沱沲缍裰跺踱铎锗隋饳驮',
        e: '阿恶额俄饿哦鹅厄呃噩垩娥婀屙峨愕扼猗硪胺腭苊莪萼蛤蛾讹谔轭遏邑鄂钶锷阏隘颚鳄鹗',
        ei: '哎诶诶',
        en: '恩摁蒽',
        er: '而二儿尔耳佴洱濡珥贰迩铒饵鲕鸸䌺',
        f: '发方分法反放风服非夫',
        fa: '发法乏罚伐垡珐砝筏阀',
        fan: '反饭翻犯范凡番烦繁返泛贩帆幡梵樊燔畈矾蕃藩蘩蟠袢蹯钒',
        fang: '方放房访防仿芳妨坊纺匚彷枋肪舫邡邡钫鲂鳑',
        fe: '分风非飞费份封纷峰丰',
        fei: '非飞费斐废菲肥匪啡肺沸吠妃悱扉榧淝狒痱痱砩祓篚绯翡腓芾蜚裴诽贲镄霏鲱',
        fen: '分份纷奋愤粉芬吩氛坟粪焚偾忿棼棼汾瀵燔玢豮贲酚鲼鼢',
        feng: '风封峰丰锋凤奉枫疯逢缝冯蜂讽俸唪沣烽砜葑蚌赗逄酆',
        fo: '佛否缶',
        fou: '否缶',
        fu: '服夫父府复福副负妇富佛付附幅伏扶赴浮符腐腹咐抚覆傅弗肤芙俯拂俘赋甫缚辅敷凫匐呋呒孚孵宓幞怫拊掊斧桴氟涪溥滏砩祓稃绂绋罘脯腑艴芾苻茯莆莩菔蚨蜉蝠蝮袱讣赙趺跗辐郛釜阜阝鞴韨馥驸鲋鳆麸黻黼',
        g: '国个过公高工给间关感',
        ga: '界夹咖胳嘎噶尕尜尬旮轧钆骱',
        gai: '该改概盖丐垓戤溉胲芥赅钙阂陔骸',
        gan: '间感干敢赶甘乾杆肝坩尴擀旰柑橄泔淦澉疳矸秆竿竿绀苷赣酐鳡',
        gang: '港刚钢岗纲缸冈扛亢戆杠筻罡肛肮舡颃',
        gao: '高告稿搞糕膏咎杲桕槁槔皋睾篙缟羔蒿藁诰郜锆镐',
        ge: '个合各革格哥歌隔割阁葛戈搁胳仡咯哿嗝噶圪塥搿烙疙砝硌纥膈舸菏虼蛤袼铬镉阖颌骼髂鬲鸽',
        gei: '给胲',
        gen: '跟根哏艮茛更颈耕耿亘',
        geng: '更颈耕耿亘哽埂庚梗炅炔粳绠羹赓邢鲠鹒',
        go: '公工共功红供够构攻狗',
        gon: '公工共功红供攻宫恭贡',
        gong: '公工共功红供攻宫恭贡躬拱弓巩唝廾汞珙肱蚣蛩觥赣龚',
        gou: '够构狗购沟勾钩佝垢媾岣彀枸笱篝缑耩苟觏诟逅遘鞲骺',
        gu: '告古故姑顾股骨鼓谷固孤估贾雇辜咕嘏崮梏毂汩沽牯牿瓠痼皋瞽箍罟胍臌菇菰蛄蛊觚诂酤钴钴锢馉骰鲴鸪鹄鹘',
        gua: '挂瓜寡刮剐卦呱栝聒胍脶蜗褂诖鸹',
        guai: '怪乖拐',
        guan: '关管观官馆惯冠贯灌罐倌掼擐斡棺浣涫盥矜纶缶脘莞菅鳏鹳',
        guang: '光广逛咣桄潢犷胱',
        gui: '规归贵鬼桂跪柜轨龟瑰傀刽刿匦匮圭妫宄庋撅晷桧洼炅炔癸皈眭瞆硅祈簋觖诡蹶闺隗鲑鳜',
        gun: '滚棍磙绲衮辊鲧',
        guo: '国过果郭锅裹呙埚崞帼掴椁涡猓聒虢蜮蜾蝈蠃馃馘',
        h: '和会后好还行回话很海',
        ha: '哈虾獬蛤铪好还行海孩',
        hai: '还海孩害咳亥嗨氦胲醢颏骇骸',
        han: '汉喊含寒汗韩罕憾翰涵函旱撼悍憨捍撖擀旰晗泔澉瀚焊焓犴菡蚶邗邯酐酣闬顸颌颔鼾',
        hang: '行航杭巷吭夯桁沆炕绗肮酐颃鸻',
        hao: '好号毫豪浩耗嗥嚆嚎壕昊涸濠灏皋皓睾蒿薅蚝貉郝镐颢',
        he: '和何合河喝核吓赫荷贺盒呵鹤禾劾嗑嗬壑曷洽涸盍硅纥翮耠苛菏藿蚵蝎褐诃貉钾阂阖颌饸鲄鹖龁䙓',
        hei: '黑嘿',
        hen: '很恨狠痕哏艮行横哼衡',
        heng: '行横哼衡恒亨桁珩绗蘅訇鸻黉',
        ho: '后红候洪厚後轰鸿宏侯',
        hon: '红洪轰鸿宏哄虹唝弘泓',
        hong: '红洪轰鸿宏哄虹唝弘泓洚烘纮荭蕻薨訇讧闳黉',
        hou: '后候厚後侯喉吼猴堠灬瘊篌糇逅骺鲎鲘',
        hu: '和许乎胡户护呼忽湖狐互核虎糊沪壶冱唬唿囫岵弧怙惚戽扈斛槲汩浒滹烀煳猢琥瑚瓠祜笏胍芋芴葫虍蝴觳轷酏醐鳠鹄鹕鹘鹱',
        hua: '话化华花划画滑哗婳桦狯猾砉稞豁踝铧骅㟆',
        huai: '怀坏淮孬徊槐踝',
        huan: '还欢换环缓幻患唤圜垸奂宦寰擐桓洹浣涣漶焕獾瑗痪皖眩缳脘苋萑豢逭郇锾镮阛鬟鲩',
        huang: '黄皇荒晃慌惶煌谎恍凰幌徨湟潢潢璜癀磺篁簧肓蝗蟥遑锽隍鳇',
        hui: '会回挥汇灰辉惠慧毁悔恢绘徽溃贿讳卉咴哕喙彗徊恚悝戯晖晦桧洄烩珲皓眭秽缋茴荟蕙虺蛔蝰蟪袆诙诲钺阓隳颒麾',
        hun: '婚混魂昏浑溷珲荤诨阍馄',
        huo: '和话活或火获伙货祸惑霍劐嚯壑夥攉瓠砉硅耠藿蠖豁钬锪镬鳠鹱',
        j: '就家见经将进其己机给',
        ji: '其己机给几期系计及记革即技基极际济集级奇急纪击既辑激寄继积忌吉迹鸡季骑疾籍挤寂绩祭饥妓肌脊圾剂藉讥姬丌乩亟伎佶偈冀剞叽咭哜唧墼嫉屐岌嵇嵴彐悸戟戢掎揖暨棘楫殛汲洎犄猗玑畸畿疵瘠瘵睽瞿矶秸稷稽笄笈箕粢缉羁脔芨芰荠萁蒺蓟蕺虮觊赍跻跽郅钑霁骥鱾鲚鲫鹡麂齑',
        jia: '家加价假架甲佳夹驾嫁嘉贾颊稼伽嘏岬恝戛拮挟枷柙槚浃珈痂瘕笳胛茄荚葭蛱袈袷跏迦郏钾铗铪镓颉饸骱䇲',
        jian: '见间件建剑渐简坚监健检肩减尖兼奸箭舰艰键鉴剪践荐贱捡拣煎俭僭囝戋戬搛枧柬楗槛歼毽沮涧湔湛溅牮犍犴睑硷碱笕笺箴缄缣翦腱茛茧菅蒹裥謇谏谫谮趼踺蹇钘锏鞯饯鲣鳒鹣',
        jiang: '将强江讲奖降蒋疆虹匠姜僵酱浆桨洚犟礓糨绛缰耩茳螀襁豇鳉',
        jiao: '教叫觉交校脚较角焦轿娇骄郊缴嚼胶搅浇绞佼侥僬剿噍姣峤徼徼挢敫椒湫爝狡皎矫矫礁窖艽茭荞菽蕉蛟跤酵醮铰饺鲛鹪䴔',
        jie: '家界解接结价节姐街阶介借届杰截洁戒皆揭捷劫竭藉偈偕卩喈嗟婕孑廨拮栉桀桔楷獬疖疥睫砝碣秸羯芥苴葜蚧袷讦诘诫锴颉骱髻鲒鹖',
        jin: '进金今近尽紧仅禁劲津斤锦筋谨晋巾浸襟卺噤堇妗廑槿湛烬瑾矜缙肋荩衿觐赆钅靳馑',
        jing: '经京精竟惊境静景警睛靖劲敬竞净镜径井晶颈儆兢刭婧弪憬旌晟檠泾烃獍痉箐粳肼胫腈茎荆菁蜻迳阱陉靓鲸黥䴖',
        jio: '垧扃炅炯窘迥颎䌹',
        jion: '垧扃炅炯窘迥颎䌹',
        jiong: '垧扃炅炯窘迥颎䌹',
        jiu: '就九究久酒救旧舅纠僦厩咎啾揪柩桕湫灸玖疚缪臼艽蝤赳赳阄韭鬏鸠鹫',
        ju: '车据且局举句具居剧巨聚距拒惧俱柜矩拘菊倨咀屦掬枸桔椐榉榘橘沮炬犋狙琚疽瞿窭苣苴莒菹蛆裾讵趄踞踽遽鄹醵钜锔锯雎鞠鞫飓驹鬻鲏龃䴗',
        jua: '卷圈捐倦娟桊泫涓狷甄',
        juan: '卷圈捐倦娟桊泫涓狷甄眩眷绢蕊蜷蠲鄄锩镌阮隽鹃䌸',
        jue: '觉决绝脚角爵掘嚼倔劂厥嗟噘噱孓崛抉撅攫柽桷梏橛爝獗珏矍蕞蕨蛙蠼觖觳诀谲蹶镢阙鳜',
        jun: '军均君俊龟峻菌捃浚狻皲睃竣筠訇逡郡钧隽馂骏鲪麇',
        k: '会可看开口科快空克客',
        ka: '卡刮咖喀佧咔咯胩髂看',
        kai: '开凯慨剀垲忾恺揩楷溘蒈铠锎锴闿雉',
        kan: '看刊砍堪坎侃勘戡槛瞰莰阚龛',
        kang: '康抗慷扛亢伉沆炕糠肮钪闶',
        kao: '考靠烤尻拷栲槁犒铐鲓',
        ke: '可科克客刻课颗柯渴棵磕咳壳哿嗑坷岢恪氪溘珂疴盍瞌碣稞窠缂苛蚵蝌轲钶铪锞颏骒髁',
        kei: '克',
        ken: '肯恳啃垦裉颀龂龈坑吭',
        keng: '坑吭硁硎胫铿',
        ko: '口空恐控孔扣佝倥叩寇',
        kon: '空恐控孔倥崆穹箜',
        kong: '空恐控孔倥崆穹箜',
        kou: '口扣佝叩寇抠挎筘芤蔻',
        ku: '苦哭库裤酷枯刳喾堀挎窟绔绹轱骷',
        kua: '跨夸垮侉挎胯锞髁会快',
        kuai: '会快块筷侩呙哙栝桧浍狯脍蒉蒯郐魁鲙㧟㱮',
        kuan: '款宽髋况狂矿旷框匡哐',
        kuang: '况狂矿旷框匡哐圹夼湟眶磺筐纩诓诓诳贶邝',
        kui: '亏愧溃奎傀匮喟喹夔岿悝愦揆暌盔睽瞆窥篑聩臾葵蒉蝰觖跬逵隗顷馈馗骙魁㱮',
        kun: '困昆坤壸巛悃捆琨裈醌锟阃髡鲲鹍麇',
        kuo: '括扩阔廓栝蛞',
        l: '了来里老两理力立路利',
        la: '落拉啦辣喇腊蜡剌垃摺旯瘌癞砬邋镴',
        lai: '来厉赖莱俫崃徕梾涞濑癞睐籁赉铼黧',
        lan: '兰栏蓝烂览拦懒篮滥缆啉婪岚廪揽斓榄漤澜罱褴谰郴镧阑㨫䍀',
        lang: '浪郎朗狼廊啷榔琅稂羹莨蒗螂踉锒阆阆',
        lao: '老落劳络牢姥捞佬唠崂栎栳涝潦潦烙獠痨耢蓼酪醪铑铹',
        le: '了乐勒仂叻捋泐肋饹鳓',
        lei: '类泪雷累勒垒儡嘞埒嫘擂擂檑漯磊缧羸耒肋蕾诔酹镭',
        len: '冷愣塄棱楞',
        leng: '冷愣塄棱楞',
        li: '里理力立利李历离丽礼例厉励黎璃哩莉粒隶梨栗俐俚俪傈厘吏呖唳喱坜娌嫠悝捩枥栎沥溧漓澧牦犁狸猁珞疠疬痢砬砺砾硌笠篥篱粝缡罹翮苈荔莅蓠藜蛎蜊蠡詈跞轹逦郦酾醴锂镉雳霾骊髦鬲鲡鲤鳢鹂黧䲞',
        lia: '俩了两连联量脸料亮练',
        lian: '连联脸练恋怜莲炼廉帘链奁娈敛梿楝殓涟潋濂琏瞵碾羸膦臁苓莶蔹蠊裢裣镰鲢',
        liang: '两量亮良粮辆梁凉俩谅唡墚晾椋粱莨踉辌阆魉',
        liao: '了料疗聊辽僚寥嘹寮尥廖撂撩撩潦燎燎獠缪缭蓼钌镣鹨鹩',
        lie: '列烈裂劣猎冽咧戾捩洌膊趔躐邋鬣䴕',
        lin: '林临邻琳淋凛吝啉嶙廪懔檩瞵磷禀粼膦蔺赁躏辚遴霖鳞麟',
        ling: '领令另灵零龄凌玲铃陵岭伶呤呤囹拎柃棂棱泠瓴磷绫羚翎聆苓菱蛉酃鲮鸰㻏',
        liu: '六流留陆刘柳溜碌旒榴泖泵浏熘琉瘤硫绺蒌蓼遛鎏铆锍镏镠飗馏骝鹠',
        lo: '咯龙楼露弄隆笼漏搂陋',
        lon: '龙弄隆笼拢胧聋垄咙垅',
        long: '龙弄隆笼拢胧聋垄咙垅昽栊泷珑癃眬砻窿茏陇',
        lou: '楼露漏搂陋偻喽娄嵝瘘窭篓耧蒌蝼镂髅䁖',
        lu: '路陆露录绿鲁卢炉鹿碌芦庐卤噜垆戮掳撸栌橹泸渌漉潞璐瘳禄箓簏胪舻蓼虏赂轳辂辘逯酪镥颅鲈鸬鹭麓',
        lua: '乱卵娈孪峦挛栾滦脔銮',
        luan: '乱卵娈孪峦挛栾滦脔銮鸾',
        lun: '论轮伦沦仑囵抡纶',
        luo: '落罗络洛逻骆裸萝锣倮捋摞椤橐氇泺漯烙猓猡珞瘰硌箩脶荦蔂蜾螺蠃蠡袼跞酪铬镙雒骡㑩䲞',
        lv: '律率旅绿虑吕履缕侣偻屡嵝捋榈氯滤瘘稆膂褛铝闾驴',
        lve: '略掠撂锊',
        m: '们么没无面民美明名门',
        ma: '马吗妈骂麻摩码嘛玛抹唛嬷杩犸祃蚂蚂蟆貉靡麽',
        mai: '买卖麦埋脉迈劢狸荬霡霾',
        man: '满慢漫埋曼蛮瞒墁幔熳缦蔓螨谩蹒镘鞔颟馒鳗',
        mang: '忙茫盲芒氓漭瞢硭莽蟒邙铓',
        mao: '毛冒贸貌矛猫帽茅茂卯峁懋旄昴泖牟牦瑁瞀耄茆蝥蟊袤铆锚髦',
        me: '么麼末麽们没美门每妹',
        mei: '没美每妹梅眉媒枚煤谜媚霉昧玫寐嵋楣浼湄猸瑁糜莓袂酶镁镅靡魅鹛',
        men: '们门闷懑扪汶满焖钔鞔',
        meng: '梦蒙猛盟孟朦氓勐懵檬甍瞑瞢礞艋艨苎萌虻蜢蟊蟒蠓锰鹲黾',
        mi: '米密秘迷弥蜜谜觅佴咪嘧宓幂弭敉汨泌溟狝猕眯眯祢糜糸縻脒芈蘼谧醚靡麋',
        mia: '面免妙描苗庙棉绵眠勉',
        mian: '面免棉绵眠勉缅冕娩沔泯渑湎眄瞑腼黾',
        miao: '妙描苗庙秒渺喵杪淼眇瞄缈缪藐蜱邈钞鹋',
        mie: '灭蔑乜咩篾芈蠛',
        min: '民敏岷悯愍抿汶泯渑玟珉缗苠闵闽鳘黾',
        ming: '明名命鸣盟铭冥暝溟皿瞑茗萌螟酩',
        miu: '谬缪',
        mo: '么没无万模莫默摸麼末摩磨魔脉漠墨抹陌寞沫膜嫫摹殁瘼秣耱茉蓦藐蘑蟆袜谟貉貊貘镆霡靡馍麽',
        mou: '某谋侔厶哞毋牟眸瞀缪蛑蝥袤鍪',
        mu: '目母木模幕慕墓姆姥穆牧亩沐募仫坶拇暮毪牟牡睦缪苜钼鹜',
        n: '你年那能女内难南呢拿',
        na: '那南拿哪纳呐捺箬絮肭衲讷钠镎',
        nai: '奶乃耐奈佴柰氖艿萘鼐',
        nan: '难南男喃囝囡楠罱腩蝻赧',
        nang: '囊囔攮曩馕',
        nao: '脑闹恼呶垴孬挠桡淖猱瑙硇铙䜧',
        ne: '呢哪呐疔讷那能内嫩',
        nei: '那内哪馁',
        nen: '嫩能',
        neng: '能',
        ng: '嗯',
        ni: '你呢尼泥拟逆倪妮腻伲匿坭嶷怩慝旎昵猊睨祢铌霓鲵鹝鹢',
        nia: '年念娘鸟尿廿酿粘埝嬲',
        nian: '年念廿粘埝廾拈拈捻撵碾蔫辇辗鲇鲶黏',
        niang: '娘酿',
        niao: '鸟尿嬲氽溺脲茑袅',
        nie: '捏乜啮嗫孽捻涅聂臬蘖蹑镊镍陧颞䯅',
        nin: '您宁凝佞咛拧攘柠泞狞',
        ning: '宁凝佞咛拧拧攘柠泞狞甯聍苧',
        niu: '牛扭纽妞忸拗狃蚴钮',
        no: '农弄浓侬哝秾耨脓㶶',
        non: '农弄浓侬哝秾脓㶶',
        nong: '农弄浓侬哝秾脓㶶',
        nou: '耨',
        nu: '怒努奴孥帑弩胬褥驽那',
        nua: '暖濡',
        nuan: '暖濡',
        nuo: '那诺娜挪傩喏懦搦濡砹糯锘',
        nv: '女忸恧狃絮肭衄钕乇疟',
        nve: '乇疟虐谑',
        o: '哦喔噢区欧偶呕怄殴沤',
        ou: '区欧偶呕呕怄殴沤瓯眍禺耦藕讴鸥',
        p: '便被平品派片怕般破批',
        pa: '派怕爬帕啪趴扒杷琶筢耙芭葩钯',
        pai: '派排拍牌迫俳哌徘湃蒎',
        pan: '般判盘番胖盼叛拚潘畔攀弁扳拌樊泮爿皤磐蟠袢襻蹒鄱',
        pang: '旁胖膀庞乓厐彷滂磅磅耪蒡螃逄鳑',
        pao: '跑炮抛袍泡刨匏咆庖狍疱脬苞趵龅',
        pe: '朋配培碰陪彭佩赔鹏盆',
        pei: '配培陪佩赔呸妃帔徘旆沛淠碚胚艴茇蜚裴辔邳醅锫霈',
        pen: '盆喷汾湓朋碰彭鹏捧棚',
        peng: '朋碰彭鹏捧棚蓬砰篷膨嘭堋怦抨澎烹甏硼蟛迸',
        pi: '被批否皮罢坏屁匹疲披脾辟劈啤僻譬丕仳噼圮坯埤媲庀擗枇毗淠濞琵甓疋痞痦癖睥砒篦纰罴芘苤萆蕃薜蚌蚍蜱螵裨貔邳郫鄱铍陂陴霹鲏鼙䴙',
        pia: '便片票篇偏飘骗漂朴扁',
        pian: '便片篇偏骗扁犏缏翩胼蝙褊谝蹁骈',
        piao: '票飘漂朴剽剽嘌嫖殍瓢瞟瞟缥膘莩螵骠髟',
        pie: '撇氕瘪瞥苤',
        pin: '品贫聘频拼拚姘嫔榀泵牝颦',
        ping: '平评凭萍瓶冯屏苹乒坪俜娉枰秤鲆',
        po: '破婆迫颇坡泊朴泼魄叵攴泺溥珀皤笸粕膊跛鄱酦钋钷陂',
        pou: '剖掊涪瓿裒踣锫',
        pu: '普暴扑铺谱仆堡浦朴菩葡蒲瀑匍噗圃埔攴曝氆溥濮璞脯苻莆蹼醭镤镨',
        q: '去起前其全情气却期亲',
        qi: '起其气期吃七器奇企齐妻汽旗棋弃启骑岂枝欺戚契凄歧漆泣乞迄亓亟伎俟偈嘁圻屺岐崎憩挈杞柒栖桤槭欹汔淇琦琪甭畦畸碛祁祈祺稽綦绮缉耆脐芑芪荠萁萋葺蕲虮蛴蜞讫赍趿蹊锜颀骐鲯鳍麒',
        qia: '卡恰掐洽疴葜髂前强钱',
        qian: '前钱千签潜牵浅迁乾遣欠歉谦纤铅谴嵌仟佥倩堑岍悭愆慊扦掮搴撖柑椠涔犍箝缱肷腱芊芡茜荨虔褰蹇钎钤钳锓阡骞鹐黔',
        qiang: '强枪墙抢腔丬呛嫱戕戗樯炝爿玱箐羌羟蔷蜣襁跄跫锖锵镪鸧',
        qiao: '瞧桥悄乔巧敲侨壳雀翘俏劁峤峭愀憔撬樵橇毳硗硝窍缲舄茭荞蕉诮谯跤跷醮锹鞒鞘',
        qie: '且切契窃怯伽唼妾惬慊挈沏沏渫砌箧脞茄蕺趄锲',
        qin: '亲侵琴秦勤钦擒吣嗪噙寝嵚廑揿槿檎沁渗溱矜禽芩芹蓁螓衾衿覃锓骎',
        qing: '情亲清请青轻庆倾晴卿倩圊擎檠氢氰磬箐綮罄苘蜻謦顷鲭鲸黥䞍',
        qio: '穷琼穹筇芎苘茕蛩跫邛',
        qion: '穷琼穹筇芎苘茕蛩跫邛',
        qiong: '穷琼穹筇芎苘茕蛩跫邛銎鞠',
        qiu: '求球秋仇丘龟囚瞅俅巯楸氽泅湫犰糗艽虬蚯蝤裘赇逑遒邱酋钆馗鳅鹙鼽',
        qu: '去区取曲趣屈驱趋娶渠躯凵劬岖朐枸氍璩癯瞿磲祛絮苣蕖蘧蛆蛐蠼衢觑诎遽阒鞠鞫鸲麴黢龋',
        qua: '全权卷拳圈劝泉券悛桊',
        quan: '全权卷拳圈劝泉券悛桊犬獾畎痊筌绻荃蜷诠辁醛铨颧鬈鳈',
        que: '却确缺雀悫攉榷炔瘸舭芍觳郄阕阙鹊',
        qun: '群裙蝽逡遁麇',
        r: '儿人然日如入任让认',
        ra: '然让染绕扰燃饶嚷壤冉',
        ran: '然染燃冉苒蚺髯让嚷壤',
        rang: '让嚷壤攘瓤禳穰',
        rao: '绕扰饶娆桡荛蛲',
        re: '若热惹喏人儿任认仍忍',
        ren: '人儿任认忍仁刃仞壬妊恁稔纫纴荏葚衽讱赁轫韧饪䌾',
        reng: '仍扔穰艿',
        ri: '日驲',
        ro: '容肉荣蓉柔融揉绒熔溶',
        ron: '容荣蓉融绒熔溶冗嵘戎',
        rong: '容荣蓉融绒熔溶冗嵘戎榕狨肜茸蝾镕',
        rou: '肉柔揉糅蹂鞣',
        ru: '如入辱儒乳汝嚅孺洳溽濡缛茹蓐薷褥襦铷颥',
        rua: '软朊濡蠕阮',
        ruan: '软朊濡蠕阮',
        rui: '瑞锐枘睿芮蕊蕤蚋䌼',
        run: '润闰',
        ruo: '若弱偌箬芮',
        s: '是上说时生事手十所三',
        sa: '萨撒洒仨卅檫脎趿钑飒',
        sai: '思赛塞噻腮蓑鳃',
        san: '三散伞叁毵糁馓丧桑嗓',
        sang: '丧桑嗓搡磉颡',
        sao: '扫嫂骚埽搔瘙缫缲臊鳋',
        se: '色塞瑟圾啬槭涩穑蔷铯',
        sen: '森僧',
        seng: '僧',
        sh: '是上说时生事手十身实',
        sha: '杀沙傻莎厦刹啥纱煞杉唼嗄歃痧砂裟赊铩霎鲨',
        shai: '色晒筛酾',
        shan: '山单善闪衫禅扇珊陕杉删剡埏姗嬗彡掸掺擅栅檀汕潸澹煽疝缮膳膻舢芟苫蟮詹讪赡跚鄯钐骟髟鳝鳣',
        shang: '上商伤尚赏汤晌垧墒殇熵裳觞',
        shao: '少烧绍稍哨邵劭勺捎杓梢溲潲笤筲艄芍苕蛸鞘韶',
        she: '社设折射舍涉蛇拾摄舌佘厍奢慑揲歙滠猞畲睫蛞赊赦铊阇麝䞌',
        shei: '谁',
        shen: '身什神深甚参伸申审沈慎绅吲呻哂娠婶抻椹渖渗瘆矧砷肾胂莘葚蜃诜谂鲹',
        sheng: '生声省胜升圣乘盛剩牲绳嵊晟渑甥眚笙',
        shi: '是时事十实什使世市师士式识始史失似石视示势室食诗试施适释氏尸侍拾驶湿饰逝誓殖狮匙蚀仕嗜噬埘屎峙弑弛恃拭柿炻矢礻筮耆舐莳蓍虱螫谥豉豕贳轼郝酾铈铊饣鲥鲺鳀鸤䴓',
        sho: '手受收首授守熟售瘦寿',
        shou: '手受收首授守熟售瘦寿兽狩绶艏',
        shu: '书数术树属输熟述束叔舒殊署鼠疏俞竖暑抒梳蔬淑枢倏塾墅姝孰庶恕戍摅曙杼樗殳毹沭涑漱澍疋秫纾腧荼菽薯蜀蜍赎黍',
        shua: '刷耍唰涮双率摔爽衰帅',
        shuai: '率摔衰帅甩缞蟀',
        shuan: '拴揎栓汕涮踹闩双爽霜',
        shuang: '双爽霜孀泷淙骦鹴',
        shui: '说水谁睡税蜕',
        shun: '顺瞬吮舜䞐',
        shuo: '说数硕烁妁搠朔杓槊溯濯芍蒴铄',
        si: '四死司思似斯食丝私寺撕厕肆伺俟兕厮厶咝嗣嘶姒巳汜泗澌祀祠笥糸纟缌耜肄苡菥蛳锶雉飔饲饴驷鸶',
        so: '送松宋搜颂嵩艘耸诵讼',
        son: '送松宋颂嵩耸诵讼凇崧',
        song: '送松宋颂嵩耸诵讼凇崧忪怂悚淞竦菘锶',
        sou: '搜艘叟嗖嗽嗾擞涑溲漱瞍薮螋锼飕馊',
        su: '苏诉速素俗宿肃稣塑僳嗉夙愫涑溯簌粟蓿蔌觫谡酥骕鹔',
        sua: '算酸狻蒜',
        suan: '算酸狻蒜',
        sui: '虽随岁碎尿遂彗攵濉燧眭睢祟穗绥荽蓑谇邃隋隧髓䍁',
        sun: '孙损榫狲笋荪跣隼飧',
        suo: '所索缩锁莎嗦唆唢嗍娑挲桫梭琐睃羧蓑逡',
        t: '他她天头同听太体通提',
        ta: '他她它达踏塔拓塌嗒挞榻沓溻漯獭趿跶蹋遢铊闼阘鳎',
        tai: '太台态抬泰胎汰炱肽苔薹跆邰酞钛骀鲐',
        tan: '谈弹探叹坦坛贪摊滩谭潭毯炭啴坍忐昙檀湛澹痰瘫眈碳膻舔荨蕈袒覃赕郯钽锬镡',
        tang: '堂唐倘躺汤糖趟塘烫膛淌傥帑惝搪棠樘溏瑭羰耥螗螳醣铴镋镗',
        tao: '讨套逃挑桃涛陶掏萄淘滔叨啕梼洮焘绦绹韬饕鼗',
        te: '特忑忒慝铽腾疼藤滕誊',
        ten: '腾疼藤滕誊',
        teng: '腾疼藤滕誊',
        ti: '体提题弟替踢梯倜剃剔啼嚏屉悌惕棣涕睇绨缇荑裼谛蹄逖醍锑鳀鹈䗖䴘',
        tia: '天条调田跳挑甜添填佃',
        tian: '天田甜添填佃嗔忝恬掭栝殄滇町畋腆舔苫蚕蚺觍钿锘阗颋䩄',
        tiao: '条调跳挑佻眺祧稠窕笤粜苕蜩踔迢铫髫鲦龆',
        tie: '铁贴帖帖揲萜锇餮',
        tin: '听停庭厅挺亭廷艇婷梃',
        ting: '听停庭厅挺亭廷艇婷梃汀烃町耵莛葶蜓铤霆颋',
        to: '头同通统投痛童透偷铜',
        ton: '同通统痛童铜桐桶筒仝',
        tong: '同通统痛童铜桐桶筒仝佟侗侗僮嗵垌峒彤恫恸捅潼瞳砼硐艟茼酮鲖',
        tou: '头投透偷钭骰',
        tu: '突土图徒途吐涂屠秃兔凸堍芏荼菟酴钍',
        tua: '团彖抟揣湍疃鹑',
        tuan: '团彖抟揣湍疃鹑',
        tui: '推退腿煺萑褪颓',
        tun: '吞屯囤暾氽沌炖窀肫臀褪豚饨鲀',
        tuo: '他脱托拖妥拓陀魄乇佗佗唾坨庹捝摭柁柝棁椭橐沱沲砣箨绥讬跎迤酏酡铊隋饦驮驼鸵鼍䓕',
        w: '我为文无外问位五万王',
        wa: '瓦娃挖哇佤凹娲洼腽蛙袜鲑',
        wai: '外歪呙夭㖞',
        wan: '万完晚湾玩碗弯腕顽挽婉宛丸剜娩惋浣烷琬畹皖箢纨绾脘芄莞菀蔓蜿豌鞔鲩',
        wang: '王望往网忘亡汪妄旺枉芒尢惘罔辋魍㲿',
        we: '为文问位未委微闻卫韦',
        wei: '为位未委微卫韦围威维味遗伟危谓唯慰尾违魏喂伪畏胃惟倭偎囗圩娓尉崴嵬巍帏帷桅沩洧涠渭潍炜煨熨猗猥猬玮痿眭硙纬艉芟苇荽萎葳蔚薇诿軎逶闱阢隈隗隹韪鲔鳂鳚㧑䓕',
        wen: '文问闻温稳吻纹刎愠揾殁汶煴玟珉璺瘟笏紊缊蕰蚊辒阌雯鳁',
        weng: '翁嗡瓮蓊蕹鹟',
        wo: '我握窝卧沃倭喔夭幄挝斡涡瘟硪肟莴蜗龌',
        wou: '渥',
        wu: '无五务物武恶屋吴午舞误污乌伍於悟雾吾呜勿侮兀捂仵唔圬坞垭妩婺寤巫庑忤怃悮戊晤杌梧毋浯渥焐牾痦瞀笏芜芴蜈蝥诬迕邬鋈钨铻阢骛鹀鹉鼯',
        x: '下学小心想行见现些向',
        xi: '西系息喜希席细习吸戏洗惜析悉稀袭熙嘻夕牺锡膝撕溪昔腊媳晰粞隙熄僖兮唏嘶奚嬉屃屎屣嵇徙戯曦栖樨檄欷歙汐浠淅澌烯熹犀玺畦皙矽硒禊禧穸绤羲翕舄舾茜菥葸蓰蜥蜴螅蟋裼褶觋诶蹊郄郗酾醯钖铣阋饩鳃鳛鼷䜣',
        xia: '下夏吓侠霞峡瞎厦狭暇虾匣呷挟柙歃毳洽狎瑕瘕硖罅葭辖遐黠',
        xian: '见现先显线险限县鲜献洗仙闲陷贤宪洒嫌掀纤羡弦衔伣冼咸娴岘崄彡挦掺暹氙涎濂燹狝猃痃痫癣碱祆筅籼腺舷苋莶藓蚬跣跹酰钐铣铦锨锬霰馅鹇黹',
        xiang: '想向相象像香响项乡降享箱详祥襄湘巷厢翔镶橡庠攘缃舡芗葙蟓飨饷骧鲞',
        xiao: '小笑校消效销晓萧肖削潇孝啸宵哓哮嚣姣枭枵梢淆爻狡硝筱箫绡芍茭蛸蟏逍酵霄骁魈鸮',
        xie: '些解写血谢叶协鞋斜邪胁携泄歇械屑谐卸泻亵偕勰廨懈挟撷桔楔榍榭歙渫溉瀣燮獬眭绁缬苴薤蝎蟹跬躞迦邂隰颉骱鲑䙊',
        xin: '心新信寻辛欣芯薪馨囟忻昕歆莘衅鑫锌镡骍䜣',
        xing: '行性形兴星省姓型幸醒刑腥杏悻惺擤猩硎荇邢钘铏陉饧',
        xio: '兄雄胸凶熊汹匈芎讻诇',
        xion: '兄雄胸凶熊汹匈芎讻诇',
        xiong: '兄雄胸凶熊汹匈芎讻诇',
        xiu: '修秀休袖宿臭羞绣朽咻嗅岫庥溴煦莠貅锈馐髹鸺',
        xu: '许需续须虚徐序绪蓄吁叙畜婿勖咻嘘圩墟屿恤戌旭旮旯栩洫溆煦盱砉糈絮肷胥芋蓿诩谞酗醑雩顼馘',
        xua: '选宣玄旋悬券喧儇埙揎',
        xuan: '选宣玄旋悬券喧儇埙揎擐暄楦泫洵涓渲漩炫煊璇癣眩碹绚萱谖轩铉镟馔',
        xue: '学血雪穴削薛噱泶炔谑踅靴鳕鸴',
        xun: '寻讯训迅询巡逊循旬勋埙孙峋巽徇恂挦曛梭殉汛洵浔浚熏狻獯窨荀荤荨蕈薰逡遁郇醺鑫驯鲟',
        y: '一有也要以么于用又已',
        ya: '亚压呀牙雅押哑崖涯丫鸭讶鸦伢垭娅岈挜揠柙桠氩琊疋痖睚砑碣芽蚜衙轧辂迓铔䅉',
        yai: '睚',
        yan: '眼言研广严演验烟燕延沿颜殷掩厌岩咽炎艳盐宴嫣雁焰淹焉彦俨偃兖剡厣唁埏堰奄妍崦恹晏檐氤洇涎湮滟焱琰砚硎筵罨胭腌芫菸蔫蜒衍覃觃讠谚谳赝趼郾鄢酽闫阉阎阏阽餍魇鹌黡鼹',
        yang: '样阳杨央养洋扬羊仰痒佯徉怏恙旸殃氧泱漾炀烊玚疡秧蛘鞅飏鸯',
        yao: '要么约药摇腰遥咬耀邀姚哟妖窑谣吆夭尧峣崤崾幺徭徼曜杳洮淆瀹爻珧瑶疟祆窈窕繇肴舀荛轺钥铫飖鳐鹞',
        ye: '也业夜爷叶野耶页邪咽液冶噎拽掖揲揶晔曳椰洇烨琊腋荼谒邺铘靥馌',
        yi: '一以已意义议衣易医依异艺亿疑益移遗仪亦忆译伊宜尾蛇椅谊翼艾泄役抑姨毅逸夷裔倚溢矣乙疫仡佗佚佾刈劓勚呓咦咿嗌噫圯埸壹奕屹峄嶷弈弋彝怡怿悒懿挹掖揖旖昱曳欹殪洫渫漪焱熠犄猗疙痍瘗癔眙硪祎绁绎缢羿翊翌翳肄胰腋臆舣芸苡荑薏蚁蛾蜴袂诒诣贻轶迤邑酏钇铱锜镒镱阝雉颐饴饻驿鹝鹢鹥黝黟',
        yin: '因音引印银烟隐阴饮殷吟姻淫尹荫吲喑圻垠堙夤寅廴氤沂洇湮狺瘾窨纼胤芩茚茵蚓訚鄞铟霪骃鳏龂龈䜣',
        ying: '应英影营迎硬映盈赢鹰婴颖嘤媵嬴撄楹樱滢潆瀛瑛璎瘿绬缨罂膺茔荥荧莹莺萤萦蓥蝇逞郢锳颍颕鹦',
        yo: '育哟唷有用又由友游右',
        yon: '用永拥勇涌庸泳佣俑咏',
        yong: '用永拥勇涌庸泳佣俑咏喁墉壅恿慵甬痈臃臾蕹蛹踊邕镛雍颙饔鲬鳙',
        you: '有又由友游右优油邮犹尤忧幽幼悠诱佑侑卣呦囿宥尢揄攸柚泅牖猷疣繇聱莜莠莸蚰蚴蝣蝤酉釉铀铕鱿鲉黝鼬',
        yu: '于与语育余遇雨玉预鱼欲域誉予狱愈於宇御郁豫渔吁愚俞愉羽寓浴裕娱舆喻粥伛俣喁噢圄圉圩妤妪尉屿峪嵛庾揄昱梧榆欤毓毹汩淤渝滪煜煨熨燠狳瑜畲瘀瘐盂禹禺窬窳竽纡聿肀腧腴臾舁芋菸萸蓣蔚虞蜍蜮蝓衙衙觎谀谕迂逾钰铻阈阏隅雩饫馀驭鬻鹆鹬龉',
        yua: '员原元远院愿园源圆袁',
        yuan: '员原元远院愿园源圆袁缘怨援冤宛渊圜垣塬媛掾橼沅涓爰猿瑗畹眢箢芫苑菀螈贠辕阮陨鸢鸳鹓鼋',
        yue: '月越乐约跃阅岳曰悦刖哕栎樾瀹粤蠖钥钺龠',
        yun: '运云允晕韵孕匀蕴恽愠昀榅殒氲煴熨狁瘟筠筼纭缊耘芸苑菀蕰贠赟郓郧酝陨韫',
        z: '在这中子自着之只作主',
        za: '杂扎砸咋匝咂唼拶籴鲝',
        zai: '在再载灾仔宰哉崽栽甾',
        zan: '咱赞暂拶攒昝涔湔瓒簪糌臜趱酂錾',
        zang: '藏脏葬奘臜臧赃驵',
        zao: '早造遭糟躁灶燥噪凿唣枣槽澡皂窖缫缲藻蚤',
        ze: '则泽责择咋仄啧帻昃柞稷窄笮箦舴赜迮鲗',
        zei: '贼',
        zen: '怎谮曾增综赠憎甑缯罾',
        zeng: '曾增综赠憎甑缯罾锃',
        zh: '这中着之只主长知种者',
        zha: '查扎炸诈眨咋乍吒咤哳喋喳揸札柞栅楂榨槎渣渫猹痄砟碴笮苴蚱轧铡闸鲊齄',
        zhai: '摘齐择侧债宅寨斋疵瘵砦窄翟膪',
        zhan: '战展站占颤斩沾粘崭搌旃栈毡湔湛澶盏瞻绽蘸袒觇詹谵躔辗醮飐骣鳣鹯黏',
        zhang: '长张掌章丈帐仗障涨杖胀账彰仉嫜嶂幛樟漳獐璋瘴绱蟑鄣',
        zhao: '着找照招著朝赵召兆罩昭爪啁搔棹沼淖濯笊肇蚤诏钊鸼',
        zhe: '这着者著折哲浙遮乇慑摺柘磔耷聂蔗蛰蜇螫褚褶谪赭辄辙锗陬鹧䗖',
        zhei: '这',
        zhen: '真阵镇震针珍振圳诊侦贞枕斟朕椹榛浈溱滇甄畛疹砧稹箴纼缜胗臻蓁赈轸鸩',
        zheng: '正政争证整征丁郑挣睁怔症蒸峥帧徵拯桢狰町瞠祯筝诤钲铮锃鲭',
        zhi: '之只知制至直指治识志支职质致止值织纸置智执址氏迟枝植旨掷殖芷芝侄秩肢滞汁脂稚帜卮吱咫埴夂峙帙彘徵忮挚摭昵枳枳栀栉桎氐炙痔痣砥祁祉祗窒絷耆胝膣蛭蛰蜘觯豸贽趵趾跖踬踯轵轾郅郦酯铚锧陟雉骘鸱鸷黹㛿',
        zho: '中种重周众终州钟洲忠',
        zhon: '中种重众终钟忠仲衷肿',
        zhong: '中种重众终钟忠仲衷肿冢忪潼盅舂舯蚣螽踵锺',
        zhou: '周州洲舟皱宙骤粥轴昼咒啁啄妯帚碡籀繇纣绉肘胄舳荮诌诪赒辀酎驺鬻鲖鸼',
        zhu: '主住术注著助属朱诸逐竹珠驻猪筑祝柱烛嘱煮株铸蛛伫侏妯拄杼柚楮槠橥泞洙渚潴澍炷疰瘃瞩竺纻翥舳苎苧茁茱蚰蛀褚诛贮邾铢鬻麈㔉',
        zhua: '抓爪挝传转专装状庄撞',
        zhuai: '转拽',
        zhuan: '传转专赚砖撰啭抟沌湍篆颛馔',
        zhuang: '装状庄撞壮妆桩幢僮奘戆艟',
        zhui: '追坠惴揣椎槌缀缒萑赘锥隧隹骓',
        zhun: '准盹窀肫胗谆隼',
        zhuo: '着著桌捉卓缴琢倬勺啄拙擢斫棁棹浊浞涿淖濯灼焯禚箸绌肫茁蕞诼趵踔躅酌镯',
        zi: '子自字资齐紫姊姿仔滋咨兹吱呲孜孳嵫恣梓淄渍滓甾疵瘠眦秭笫籽粢糍缁耔茈觜訾谘赀趑辎锱镃髭鲻鹚龇',
        zo: '走总宗纵奏踪综偬揍枞',
        zon: '总宗纵踪综偬枞棕疭粽',
        zong: '总宗纵踪综偬枞棕疭粽腙骔鬃',
        zou: '走奏揍楱诌诹邹鄹陬驺鲰',
        zu: '组足族祖阻租俎卒咀沮淬苴菹诅蹴镞驵',
        zua: '钻赚攥纂缵躜',
        zuan: '钻赚攥纂缵躜',
        zui: '最罪嘴堆醉羧蕞觜',
        zun: '尊遵撙樽鳟',
        zuo: '作做坐左座昨佐琢乍凿唑嘬怍撮柞砟祚笮胙迮酢阼'
        // 其他拼音组合...
        // 为了简洁，这里只保留部分字典内容，实际使用时需要完整的字典
    };

    // 键盘布局
    const keyboardLayouts = {
        default: [
            ['esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
            ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
            ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
            ['space']
        ],
        shift: [
            ['esc', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
            ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
            ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
            ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift'],
            ['space']
        ],
        caps: [
            ['esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
            ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
            ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter'],
            ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shift'],
            ['space']
        ]
    };

    let currentLayout = 'default';
    let capsLock = true;
    let activeInput = null;
    let lastSelection = { start: 0, end: 0 };
    let imeEnabled = false; // 输入法状态
    let zhPinyin = ''; // 当前拼音输入
    let zhWords = []; // 当前匹配的中文字
    let zhPage = 1; // 当前中文字页数
    const zhWordsPerPage = 10; // 每页显示的中文字数
    
    const keyboard = document.querySelector('.virtual-keyboard');
    const keyboardRows = document.querySelector('.keyboard-rows');
    const closeButton = document.querySelector('.close-keyboard');
    const keyboardInputs = document.querySelectorAll('.keyboard-input');
    const imeToggle = document.querySelector('.ime-toggle');
    
    // 创建中文输出区域
    const zhOutputZone = document.createElement('div');
    zhOutputZone.className = 'zh-output-zone';
    const zhPinyinDisplay = document.createElement('div');
    zhPinyinDisplay.className = 'zh-pinyin-letter';
    const zhWordsSelector = document.createElement('div');
    zhWordsSelector.className = 'zh-words-selector';
    const zhWordsContainer = document.createElement('div');    
    zhWordsContainer.className = 'zh-words-container';
    const zhPageControls = document.createElement('div');
    zhPageControls.className = 'zh-page-controls';
    
    zhOutputZone.appendChild(zhPinyinDisplay);
    zhOutputZone.appendChild(zhWordsSelector);
    zhWordsSelector.appendChild(zhWordsContainer);
    zhWordsSelector.appendChild(zhPageControls);
    keyboard.insertBefore(zhOutputZone, keyboard.firstChild);

    // 初始化键盘
    function initKeyboard() {
        renderKeyboard();
        
        imeToggle.addEventListener('click', toggleIME);
        closeButton.addEventListener('click', hideKeyboard);
        
        keyboardInputs.forEach(input => {
            input.addEventListener('click', updateSelection);
            input.addEventListener('keyup', updateSelection);
            input.addEventListener('select', updateSelection);
            
            input.addEventListener('focus', function() {
                activeInput = this;
                updateSelection();
                positionKeyboard(this);
                showKeyboard();
            });
        });
    }

    // 更新光标位置
    function updateSelection() {
        if (!activeInput) return;
        lastSelection = {
            start: activeInput.selectionStart,
            end: activeInput.selectionEnd
        };
    }

    // 渲染键盘
    function renderKeyboard() {
        keyboardRows.innerHTML = '';
        const layout = capsLock ? 'caps' : currentLayout;
        
        keyboardLayouts[layout].forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.className = 'keyboard-row';
            
            row.forEach(key => {
                const keyElement = document.createElement('div');
                keyElement.className = 'keyboard-key';
                keyElement.textContent = getKeyDisplay(key);
                
                if (['esc', 'tab', 'caps', 'shift', 'backspace', 'enter', 'space'].includes(key)) {
                    keyElement.classList.add('special', key);
                }
                
                keyElement.addEventListener('mousedown', (e) => e.preventDefault());
                keyElement.addEventListener('click', () => handleKeyPress(key));
                rowElement.appendChild(keyElement);
            });
            
            keyboardRows.appendChild(rowElement);
        });
    }

    function getKeyDisplay(key) {
        switch(key) {
            case 'esc': return 'Esc';
            case 'tab': return 'Tab';
            case 'caps': return capsLock ? 'Caps On' : 'Caps';
            case 'shift': return 'Shift';
            case 'backspace': return '←';
            case 'enter': return 'Enter';
            case 'space': return 'Space';
            default: return key;
        }
    }

    // 处理按键
    function handleKeyPress(key) {
        if (!activeInput) return;
        
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        const value = activeInput.value;
        
        if (imeEnabled && /^[a-zA-Z]$/.test(key)) {
            // 中文输入模式下处理字母键
            zhPinyin += key.toLowerCase();
            zhPinyinDisplay.textContent = zhPinyin;
            updateZhWords();
            return;
        }
        
        switch(key) {
            case 'esc':
                hideKeyboard();
                break;
                
            case 'tab':
                insertText('\t');
                break;
                
            case 'caps':
                capsLock = !capsLock;
                renderKeyboard();
                break;
                
            case 'shift':
                currentLayout = currentLayout === 'default' ? 'shift' : 'default';
                if (!capsLock) renderKeyboard();
                break;
                
            case 'backspace':
                if (imeEnabled && zhPinyin.length > 0) {
                    // 中文模式下删除拼音
                    zhPinyin = zhPinyin.slice(0, -1);
                    zhPinyinDisplay.textContent = zhPinyin;
                    if (zhPinyin.length === 0) {
                        hideZhOutput();
                        setCursorPos(end);
                    } else {
                        updateZhWords();
                    }
                } else {
                    // 普通删除
                    if (start === end && start > 0) {
                        activeInput.value = value.slice(0, start - 1) + value.slice(end);
                        setCursorPos(start - 1);
                    } else if (start !== end) {
                        activeInput.value = value.slice(0, start) + value.slice(end);
                        setCursorPos(start);
                    }
                    triggerInputEvent();
                }
                break;
                
            case 'enter':
                if (imeEnabled && zhPinyin.length > 0) {
                    // 中文模式下回车确认输入第一个字
                    if (zhWords.length > 0) {
                        insertText(zhWords[0]);
                        clearZhInput();
                    }
                } else {
                    insertText('\n');
                }
                break;
                
            case 'space':
                if (imeEnabled && zhPinyin.length > 0) {
                    // 中文模式下空格确认输入第一个字
                    if (zhWords.length > 0) {
                        insertText(zhWords[0]);
                        clearZhInput();
                    }
                } else {
                    insertText(' ');
                }
                break;
                
            default:
                insertText(key);
                if (currentLayout === 'shift' && !capsLock && /[a-zA-Z]/.test(key)) {
                    currentLayout = 'default';
                    renderKeyboard();
                }
        }
        
        activeInput.focus();
    }

    // 插入文本
    function insertText(text) {
        const startPos = lastSelection.start;
        const endPos = lastSelection.end;
        activeInput.value = activeInput.value.slice(0, startPos) + text + activeInput.value.slice(endPos);
        setCursorPos(startPos + text.length);
        triggerInputEvent();
    }

    // 设置光标位置
    function setCursorPos(pos) {
        lastSelection.start = lastSelection.end = pos;
        
        setTimeout(() => {
            if (activeInput) {
                activeInput.selectionStart = activeInput.selectionEnd = pos;
            }
        }, 10);
    }

    function triggerInputEvent() {
        activeInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function showKeyboard() {
        keyboard.classList.add('visible');
    }

    function hideKeyboard() {
        keyboard.classList.remove('visible');
        clearZhInput();
        if (activeInput) activeInput.blur();
        activeInput = null;
    }

    // 切换输入法
    function toggleIME() {
        imeEnabled = !imeEnabled;
        imeToggle.classList.toggle('active', imeEnabled);
        imeToggle.textContent = imeEnabled ? '中文/EN' : 'EN/中文';
        
        if (!imeEnabled) {
            clearZhInput();
        }
    }

    // 更新匹配的中文字
    function updateZhWords() {
        zhWordsContainer.innerHTML = '';
        zhWords = [];
        
        if (zhPinyin.length === 0) {
            hideZhOutput();
            return;
        }
        
        // 查找匹配的拼音
        const matchedPinyins = Object.keys(dictionary).filter(pinyin => 
            pinyin.startsWith(zhPinyin)
        );
        
        // 收集所有匹配的中文字
        matchedPinyins.forEach(pinyin => {
            const chars = dictionary[pinyin];
            for (let char of chars) {
                zhWords.push(char);
            }
        });
        
        // 显示第一页
        zhPage = 1;
        showZhWordsPage();
        showZhOutput();
    }

    // 显示当前页的中文字
    function showZhWordsPage() {
        zhWordsContainer.innerHTML = '';
        zhPageControls.innerHTML = '';
        
        const startIdx = (zhPage - 1) * zhWordsPerPage;
        const endIdx = Math.min(startIdx + zhWordsPerPage, zhWords.length);
        
        // 添加中文字按钮
        for (let i = startIdx; i < endIdx; i++) {
            const wordBtn = document.createElement('div');
            wordBtn.className = 'zh-word';
            wordBtn.textContent = zhWords[i];
            wordBtn.addEventListener('click', () => {
                insertText(zhWords[i]);
                clearZhInput();
            });
            zhWordsContainer.appendChild(wordBtn);
        }
        
        // 添加翻页控制
        const pageInfo = document.createElement('span');
        pageInfo.textContent = `${zhPage}/${Math.ceil(zhWords.length / zhWordsPerPage)}`;
        
        const prevBtn = document.createElement('span');
        prevBtn.className = 'zh-page-btn' + (zhPage === 1 ? ' unclick' : '');
        prevBtn.textContent = '◀';
        prevBtn.addEventListener('click', () => {
            if (zhPage > 1) {
                zhPage--;
                showZhWordsPage();
            }
        });
        
        const nextBtn = document.createElement('span');
        nextBtn.className = 'zh-page-btn' + (zhPage * zhWordsPerPage >= zhWords.length ? ' unclick' : '');
        nextBtn.textContent = '▶';
        nextBtn.addEventListener('click', () => {
            if (zhPage * zhWordsPerPage < zhWords.length) {
                zhPage++;
                showZhWordsPage();
            }
        });
        
        zhPageControls.appendChild(prevBtn);
        zhPageControls.appendChild(pageInfo);
        zhPageControls.appendChild(nextBtn);
    }

    // 显示中文输出区域
    function showZhOutput() {
        zhOutputZone.style.display = 'block';
    }

    // 隐藏中文输出区域
    function hideZhOutput() {
        zhOutputZone.style.display = 'none';
    }

    // 清除中文输入状态
    function clearZhInput() {
        zhPinyin = '';
        zhWords = [];
        zhPage = 1;
        zhPinyinDisplay.textContent = '';
        zhWordsContainer.innerHTML = '';
        zhPageControls.innerHTML = '';
        hideZhOutput();
    }

    // 定位键盘位置
    function positionKeyboard(inputElement) {
        const rect = inputElement.getBoundingClientRect();
        const viewportWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        let keyboardPosX = rect.left;
        if (viewportWidth >= 800) {
            keyboardPosX = (viewportWidth - 800) / 2;
        }
        
        let keyboardPosY = rect.top + rect.height + 20;
        if ((viewportHeight - rect.bottom) <= 320) {
            keyboardPosY = rect.top - 350;
        }
        
        keyboard.style.left = `${keyboardPosX}px`;
        keyboard.style.top = `${keyboardPosY}px`;
    }

    // 初始化拖动功能
    function initDrag() {
        let isDragging = false;
        let offsetX, offsetY;
        
        keyboard.addEventListener('mousedown', function(e) {
            if (e.target === keyboard || e.target.classList.contains('keyboard-header')) {
                isDragging = true;
                offsetX = e.clientX - keyboard.getBoundingClientRect().left;
                offsetY = e.clientY - keyboard.getBoundingClientRect().top;
                e.preventDefault();
            }
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            
            // 限制边界
            const maxX = window.innerWidth - keyboard.offsetWidth;
            const maxY = window.innerHeight - keyboard.offsetHeight;
            x = Math.min(Math.max(0, x), maxX);
            y = Math.min(Math.max(0, y), maxY);
            
            keyboard.style.left = `${x}px`;
            keyboard.style.top = `${y}px`;
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // 触摸支持
        keyboard.addEventListener('touchstart', function(e) {
            if (e.target === keyboard || e.target.classList.contains('keyboard-header')) {
                isDragging = true;
                const touch = e.touches[0];
                offsetX = touch.clientX - keyboard.getBoundingClientRect().left;
                offsetY = touch.clientY - keyboard.getBoundingClientRect().top;
                e.preventDefault();
            }
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            const touch = e.touches[0];
            
            let x = touch.clientX - offsetX;
            let y = touch.clientY - offsetY;
            
            const maxX = window.innerWidth - keyboard.offsetWidth;
            const maxY = window.innerHeight - keyboard.offsetHeight;
            x = Math.min(Math.max(0, x), maxX);
            y = Math.min(Math.max(0, y), maxY);
            
            keyboard.style.left = `${x}px`;
            keyboard.style.top = `${y}px`;
            e.preventDefault();
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
    }

    initKeyboard();
    initDrag();
});
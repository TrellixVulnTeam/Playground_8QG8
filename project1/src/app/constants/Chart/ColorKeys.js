const COLORKEYS = {
  0: 'rgb(225,255,225)',
  1: 'rgb(224,255,224)',
  2: 'rgb(223,255,223)',
  3: 'rgb(222,255,222)',
  4: 'rgb(221,255,221)',
  5: 'rgb(220,255,220)',
  6: 'rgb(219,255,219)',
  7: 'rgb(218,255,218)',
  8: 'rgb(217,255,217)',
  9: 'rgb(216,255,216)',
  10: 'rgb(215,255,215)',
  11: 'rgb(214,255,214)',
  12: 'rgb(213,255,213)',
  13: 'rgb(212,255,212)',
  14: 'rgb(211,255,211)',
  15: 'rgb(210,255,210)',
  16: 'rgb(209,255,209)',
  17: 'rgb(208,255,208)',
  18: 'rgb(207,255,207)',
  19: 'rgb(206,255,206)',
  20: 'rgb(205,255,205)',
  21: 'rgb(204,255,204)',
  22: 'rgb(203,255,203)',
  23: 'rgb(202,255,202)',
  24: 'rgb(201,255,201)',
  25: 'rgb(200,255,200)',
  26: 'rgb(199,255,199)',
  27: 'rgb(198,255,198)',
  28: 'rgb(197,255,197)',
  29: 'rgb(196,255,196)',
  30: 'rgb(195,255,195)',
  31: 'rgb(194,255,194)',
  32: 'rgb(193,255,193)',
  33: 'rgb(192,255,192)',
  34: 'rgb(191,255,191)',
  35: 'rgb(190,255,190)',
  36: 'rgb(189,255,189)',
  37: 'rgb(188,255,188)',
  38: 'rgb(187,255,187)',
  39: 'rgb(186,255,186)',
  40: 'rgb(185,255,185)',
  41: 'rgb(184,255,184)',
  42: 'rgb(183,255,183)',
  43: 'rgb(182,255,182)',
  44: 'rgb(181,255,181)',
  45: 'rgb(180,255,180)',
  46: 'rgb(179,255,179)',
  47: 'rgb(178,255,178)',
  48: 'rgb(177,255,177)',
  49: 'rgb(176,255,176)',
  50: 'rgb(175,255,175)',
  51: 'rgb(174,255,174)',
  52: 'rgb(173,255,173)',
  53: 'rgb(172,255,172)',
  54: 'rgb(171,255,171)',
  55: 'rgb(170,255,170)',
  56: 'rgb(169,255,169)',
  57: 'rgb(168,255,168)',
  58: 'rgb(167,255,167)',
  59: 'rgb(166,255,166)',
  60: 'rgb(165,255,165)',
  61: 'rgb(164,255,164)',
  62: 'rgb(163,255,163)',
  63: 'rgb(162,255,162)',
  64: 'rgb(161,255,161)',
  65: 'rgb(160,255,160)',
  66: 'rgb(159,255,159)',
  67: 'rgb(158,255,158)',
  68: 'rgb(157,255,157)',
  69: 'rgb(156,255,156)',
  70: 'rgb(155,255,155)',
  71: 'rgb(154,255,154)',
  72: 'rgb(153,255,153)',
  73: 'rgb(152,255,152)',
  74: 'rgb(151,255,151)',
  75: 'rgb(150,255,150)',
  76: 'rgb(149,255,149)',
  77: 'rgb(148,255,148)',
  78: 'rgb(147,255,147)',
  79: 'rgb(146,255,146)',
  80: 'rgb(145,255,145)',
  81: 'rgb(144,255,144)',
  82: 'rgb(143,255,143)',
  83: 'rgb(142,255,142)',
  84: 'rgb(141,255,141)',
  85: 'rgb(140,255,140)',
  86: 'rgb(139,255,139)',
  87: 'rgb(138,255,138)',
  88: 'rgb(137,255,137)',
  89: 'rgb(136,255,136)',
  90: 'rgb(135,255,135)',
  91: 'rgb(134,255,134)',
  92: 'rgb(133,255,133)',
  93: 'rgb(132,255,132)',
  94: 'rgb(131,255,131)',
  95: 'rgb(130,255,130)',
  96: 'rgb(129,255,129)',
  97: 'rgb(128,255,128)',
  98: 'rgb(127,255,127)',
  99: 'rgb(126,255,126)',
  100: 'rgb(125,255,125)',
  101: 'rgb(124,255,124)',
  102: 'rgb(123,255,123)',
  103: 'rgb(122,255,122)',
  104: 'rgb(121,255,121)',
  105: 'rgb(120,255,120)',
  106: 'rgb(119,255,119)',
  107: 'rgb(118,255,118)',
  108: 'rgb(117,255,117)',
  109: 'rgb(116,255,116)',
  110: 'rgb(115,255,115)',
  111: 'rgb(114,255,114)',
  112: 'rgb(113,255,113)',
  113: 'rgb(112,255,112)',
  114: 'rgb(111,255,111)',
  115: 'rgb(110,255,110)',
  116: 'rgb(109,255,109)',
  117: 'rgb(108,255,108)',
  118: 'rgb(107,255,107)',
  119: 'rgb(106,255,106)',
  120: 'rgb(105,255,105)',
  121: 'rgb(104,255,104)',
  122: 'rgb(103,255,103)',
  123: 'rgb(102,255,102)',
  124: 'rgb(101,255,101)',
  125: 'rgb(100,255,100)',
  126: 'rgb(99,255,99)',
  127: 'rgb(98,255,98)',
  128: 'rgb(97,255,97)',
  129: 'rgb(96,255,96)',
  130: 'rgb(95,255,95)',
  131: 'rgb(94,255,94)',
  132: 'rgb(93,255,93)',
  133: 'rgb(92,255,92)',
  134: 'rgb(91,255,91)',
  135: 'rgb(90,255,90)',
  136: 'rgb(89,255,89)',
  137: 'rgb(88,255,88)',
  138: 'rgb(87,255,87)',
  139: 'rgb(86,255,86)',
  140: 'rgb(85,255,85)',
  141: 'rgb(84,255,84)',
  142: 'rgb(83,255,83)',
  143: 'rgb(82,255,82)',
  144: 'rgb(81,255,81)',
  145: 'rgb(80,255,80)',
  146: 'rgb(79,255,79)',
  147: 'rgb(78,255,78)',
  148: 'rgb(77,255,77)',
  149: 'rgb(76,255,76)',
  150: 'rgb(75,255,75)',
  151: 'rgb(74,255,74)',
  152: 'rgb(73,255,73)',
  153: 'rgb(72,255,72)',
  154: 'rgb(71,255,71)',
  155: 'rgb(70,255,70)',
  156: 'rgb(69,255,69)',
  157: 'rgb(68,255,68)',
  158: 'rgb(67,255,67)',
  159: 'rgb(66,255,66)',
  160: 'rgb(65,255,65)',
  161: 'rgb(64,255,64)',
  162: 'rgb(63,255,63)',
  163: 'rgb(62,255,62)',
  164: 'rgb(61,255,61)',
  165: 'rgb(60,255,60)',
  166: 'rgb(59,255,59)',
  167: 'rgb(58,255,58)',
  168: 'rgb(57,255,57)',
  169: 'rgb(56,255,56)',
  170: 'rgb(55,255,55)',
  171: 'rgb(54,255,54)',
  172: 'rgb(53,255,53)',
  173: 'rgb(52,255,52)',
  174: 'rgb(51,255,51)',
  175: 'rgb(50,255,50)',
  176: 'rgb(49,255,49)',
  177: 'rgb(48,255,48)',
  178: 'rgb(47,255,47)',
  179: 'rgb(46,255,46)',
  180: 'rgb(45,255,45)',
  181: 'rgb(44,255,44)',
  182: 'rgb(43,255,43)',
  183: 'rgb(42,255,42)',
  184: 'rgb(41,255,41)',
  185: 'rgb(40,255,40)',
  186: 'rgb(39,255,39)',
  187: 'rgb(38,255,38)',
  188: 'rgb(37,255,37)',
  189: 'rgb(36,255,36)',
  190: 'rgb(35,255,35)',
  191: 'rgb(34,255,34)',
  192: 'rgb(33,255,33)',
  193: 'rgb(32,255,32)',
  194: 'rgb(31,255,31)',
  195: 'rgb(30,255,30)',
  196: 'rgb(29,255,29)',
  197: 'rgb(28,255,28)',
  198: 'rgb(27,255,27)',
  199: 'rgb(26,255,26)',
  200: 'rgb(25,255,25)',
  201: 'rgb(24,255,24)',
  202: 'rgb(23,255,23)',
  203: 'rgb(22,255,22)',
  204: 'rgb(21,255,21)',
  205: 'rgb(20,255,20)',
  206: 'rgb(19,255,19)',
  207: 'rgb(18,255,18)',
  208: 'rgb(17,255,17)',
  209: 'rgb(16,255,16)',
  210: 'rgb(15,255,15)',
  211: 'rgb(14,255,14)',
  212: 'rgb(13,255,13)',
  213: 'rgb(12,255,12)',
  214: 'rgb(11,255,11)',
  215: 'rgb(10,255,10)',
  216: 'rgb(9,255,9)',
  217: 'rgb(8,255,8)',
  218: 'rgb(7,255,7)',
  219: 'rgb(6,255,6)',
  220: 'rgb(5,255,5)',
  221: 'rgb(4,255,4)',
  222: 'rgb(3,255,3)',
  223: 'rgb(2,255,2)',
  224: 'rgb(1,255,1)',
  225: 'rgb(0,255,0)',
  226: 'rgb(0,254,0)',
  227: 'rgb(0,253,0)',
  228: 'rgb(0,252,0)',
  229: 'rgb(0,251,0)',
  230: 'rgb(0,250,0)',
  231: 'rgb(0,249,0)',
  232: 'rgb(0,248,0)',
  233: 'rgb(0,247,0)',
  234: 'rgb(0,246,0)',
  235: 'rgb(0,245,0)',
  236: 'rgb(0,244,0)',
  237: 'rgb(0,243,0)',
  238: 'rgb(0,242,0)',
  239: 'rgb(0,241,0)',
  240: 'rgb(0,240,0)',
  241: 'rgb(0,239,0)',
  242: 'rgb(0,238,0)',
  243: 'rgb(0,237,0)',
  244: 'rgb(0,236,0)',
  245: 'rgb(0,235,0)',
  246: 'rgb(0,234,0)',
  247: 'rgb(0,233,0)',
  248: 'rgb(0,232,0)',
  249: 'rgb(0,231,0)',
  250: 'rgb(0,230,0)',
  251: 'rgb(0,229,0)',
  252: 'rgb(0,228,0)',
  253: 'rgb(0,227,0)',
  254: 'rgb(0,226,0)',
  255: 'rgb(0,225,0)',
  256: 'rgb(0,224,0)',
  257: 'rgb(0,223,0)',
  258: 'rgb(0,222,0)',
  259: 'rgb(0,221,0)',
  260: 'rgb(0,220,0)',
  261: 'rgb(0,219,0)',
  262: 'rgb(0,218,0)',
  263: 'rgb(0,217,0)',
  264: 'rgb(0,216,0)',
  265: 'rgb(0,215,0)',
  266: 'rgb(0,214,0)',
  267: 'rgb(0,213,0)',
  268: 'rgb(0,212,0)',
  269: 'rgb(0,211,0)',
  270: 'rgb(0,210,0)',
  271: 'rgb(0,209,0)',
  272: 'rgb(0,208,0)',
  273: 'rgb(0,207,0)',
  274: 'rgb(0,206,0)',
  275: 'rgb(0,205,0)',
  276: 'rgb(0,204,0)',
  277: 'rgb(0,203,0)',
  278: 'rgb(0,202,0)',
  279: 'rgb(0,201,0)',
  280: 'rgb(0,200,0)',
  281: 'rgb(0,199,0)',
  282: 'rgb(0,198,0)',
  283: 'rgb(0,197,0)',
  284: 'rgb(0,196,0)',
  285: 'rgb(0,195,0)',
  286: 'rgb(0,194,0)',
  287: 'rgb(0,193,0)',
  288: 'rgb(0,192,0)',
  289: 'rgb(0,191,0)',
  290: 'rgb(0,190,0)',
  291: 'rgb(0,189,0)',
  292: 'rgb(0,188,0)',
  293: 'rgb(0,187,0)',
  294: 'rgb(0,186,0)',
  295: 'rgb(0,185,0)',
  296: 'rgb(0,184,0)',
  297: 'rgb(0,183,0)',
  298: 'rgb(0,182,0)',
  299: 'rgb(0,181,0)',
  300: 'rgb(0,180,0)',
  301: 'rgb(0,179,0)',
  302: 'rgb(0,178,0)',
  303: 'rgb(0,177,0)',
  304: 'rgb(0,176,0)',
  305: 'rgb(0,175,0)',
  306: 'rgb(0,174,0)',
  307: 'rgb(0,173,0)',
  308: 'rgb(0,172,0)',
  309: 'rgb(0,171,0)',
  310: 'rgb(0,170,0)',
  311: 'rgb(0,169,0)',
  312: 'rgb(0,168,0)',
  313: 'rgb(0,167,0)',
  314: 'rgb(0,166,0)',
  315: 'rgb(0,165,0)',
  316: 'rgb(0,164,0)',
  317: 'rgb(0,163,0)',
  318: 'rgb(0,162,0)',
  319: 'rgb(0,161,0)',
  320: 'rgb(0,160,0)',
  321: 'rgb(0,159,0)',
  322: 'rgb(0,158,0)',
  323: 'rgb(0,157,0)',
  324: 'rgb(0,156,0)',
  325: 'rgb(0,155,0)',
  326: 'rgb(0,154,0)',
  327: 'rgb(0,153,0)',
  328: 'rgb(0,152,0)',
  329: 'rgb(0,151,0)',
  330: 'rgb(0,150,0)',
  331: 'rgb(0,149,0)',
  332: 'rgb(0,148,0)',
  333: 'rgb(0,147,0)',
  334: 'rgb(0,146,0)',
  335: 'rgb(0,145,0)',
  336: 'rgb(0,144,0)',
  337: 'rgb(0,143,0)',
  338: 'rgb(0,142,0)',
  339: 'rgb(0,141,0)',
  340: 'rgb(0,140,0)',
  341: 'rgb(0,139,0)',
  342: 'rgb(0,138,0)',
  343: 'rgb(0,137,0)',
  344: 'rgb(0,136,0)',
  345: 'rgb(0,135,0)',
  346: 'rgb(0,134,0)',
  347: 'rgb(0,133,0)',
  348: 'rgb(0,132,0)',
  349: 'rgb(0,131,0)',
  350: 'rgb(0,130,0)',
  351: 'rgb(0,129,0)',
  352: 'rgb(0,128,0)',
  353: 'rgb(0,127,0)',
  354: 'rgb(0,126,0)',
  355: 'rgb(0,125,0)',
  356: 'rgb(0,124,0)',
  357: 'rgb(0,123,0)',
  358: 'rgb(0,122,0)',
  359: 'rgb(0,121,0)',
  360: 'rgb(0,120,0)',
  361: 'rgb(0,119,0)',
  362: 'rgb(0,118,0)',
  363: 'rgb(0,117,0)',
  364: 'rgb(0,116,0)',
  365: 'rgb(0,115,0)',
  366: 'rgb(0,114,0)',
  367: 'rgb(0,113,0)',
  368: 'rgb(0,112,0)',
  369: 'rgb(0,111,0)',
  370: 'rgb(0,110,0)',
  371: 'rgb(0,109,0)',
  372: 'rgb(0,108,0)',
  373: 'rgb(0,107,0)',
  374: 'rgb(0,106,0)',
  375: 'rgb(0,105,0)',
  376: 'rgb(0,104,0)',
  377: 'rgb(0,103,0)',
  378: 'rgb(0,102,0)',
  379: 'rgb(0,101,0)',
  380: 'rgb(0,100,0)',
  381: 'rgb(0,99,0)',
  382: 'rgb(0,98,0)',
  383: 'rgb(0,97,0)',
  384: 'rgb(0,96,0)',
  385: 'rgb(0,95,0)',
  386: 'rgb(0,94,0)',
  387: 'rgb(0,93,0)',
  388: 'rgb(0,92,0)',
  389: 'rgb(0,91,0)',
  390: 'rgb(0,90,0)',
  391: 'rgb(0,89,0)',
  392: 'rgb(0,88,0)',
  393: 'rgb(0,87,0)',
  394: 'rgb(0,86,0)',
  395: 'rgb(0,85,0)',
  396: 'rgb(0,84,0)',
  397: 'rgb(0,83,0)',
  398: 'rgb(0,82,0)',
  399: 'rgb(0,81,0)',
  400: 'rgb(0,80,0)',
  401: 'rgb(0,79,0)',
  402: 'rgb(0,78,0)',
  403: 'rgb(0,77,0)',
  404: 'rgb(0,76,0)',
  405: 'rgb(0,75,0)',
  406: 'rgb(0,74,0)',
  407: 'rgb(0,73,0)',
  408: 'rgb(0,72,0)',
  409: 'rgb(0,71,0)',
  410: 'rgb(0,70,0)',
  411: 'rgb(0,69,0)',
  412: 'rgb(0,68,0)',
  413: 'rgb(0,67,0)',
  414: 'rgb(0,66,0)',
  415: 'rgb(0,65,0)',
  416: 'rgb(0,64,0)',
  417: 'rgb(0,63,0)',
  418: 'rgb(0,62,0)',
  419: 'rgb(0,61,0)',
  420: 'rgb(0,60,0)',
  421: 'rgb(0,59,0)',
  422: 'rgb(0,58,0)',
  423: 'rgb(0,57,0)',
  424: 'rgb(0,56,0)',
  425: 'rgb(0,55,0)',
  426: 'rgb(0,54,0)',
  427: 'rgb(0,53,0)',
  428: 'rgb(0,52,0)',
  429: 'rgb(0,51,0)',
  430: 'rgb(0,50,0)',
  defaultFill: 'rgb(225,225,225)',
};

export default COLORKEYS;

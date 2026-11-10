// meta={"simUrl":"https://trg-arcade.userpxt.io/v4.1.27/---simulator","cdnUrl":"https://cdn.makecode.com","version":"0.0.0","target":"arcade","targetVersion":"4.1.27"}
// total=141336 new=10.89% cached=82.20% other=6.90%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
const _hex6804 = pxsim.BufferMethods.createBufferFromHex("20000000000000002100001700000000220000030003000023000a1f0a1f0a0024000a17151d0a00250013090412190026000a15150a100027000003000000002800000e11000000290000110e0000002a00000a040a00002b0000040e0400002c000010080000002d000004040400002e000008000000002f0010080402010030000e11110e0000310000121f100000320019151512000033000911150b000034000c0a091f080035001715151509003600081416150800370011090503010038000a1515150a00390002150d0502003a00000a000000003b0000100a0000003c0000040a1100003d00000a0a0a00003e0000110a0400003f0002011505020040000e1115090e0041001e05051e000042001f15150a000043000e111111000044001f11110e000045001f151511000046001f050501000047000e1111150c0048001f04041f00004900111f110000004a000911110f01004b001f040a1100004c001f10101000004d001f0204021f004e001f0204081f004f000e11110e000050001f0505020000510006091916000052001f05050a10005300121515090000540001011f01010055000f10100f0000560007081008070057001f0804081f0058001b04041b0000590001021c0201005a001915131100005b00001f111100005c000102040810005d000011111f00005e000002010200005f00101010101000600000010200000061000c12121e100062001f141408000063000c121212000064000814141f000065000e15151200006600041e0501000067000215150f000068001f04041800006900001d000000006a000010100d00006b001f040a1000006c00000f101000006d001e0204021e006e001e02021c00006f000c12120c000070001e0a0a0400007100040a0a1e000072001c0202020000730010140a0200007400000f1414100075000e10101e1000760006081008060077001e1008101e007800120c0c12000079001214080402007a00121a161200007b0000041f1100007c00001f000000007d00111f040000007e00000404080800d3000c1213130c00f3000c12130d000004010e05051e100005010609191f080006010c121313120007010c121313000018010f0b1b19000019010e151d1a000041011f14121000004201100f1412000043011f0205081f0044011e03031c00005a0110140b0302005b0110140b0300007901121a171300007a01121a171300007b01121b171200007c01121b17120000")
const _hex3418 = pxsim.BufferMethods.createBufferFromHex("000000efd0aef6d937f8a153ef6361c7555e50173371323c975e5e755b6c808faac4bbb874a8a2186f5e46a45f88af92")
const _hex5355 = pxsim.BufferMethods.createBufferFromHex("87041000100000003333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333")
pxsim.setTitle("custom version lol");
pxsim.setConfigData({
 "37": 160,
 "38": 120,
 "95": 32768
}, {
 "DISPLAY_WIDTH": 37,
 "DISPLAY_HEIGHT": 38,
 "SETTINGS_SIZE_DEFL": 95
});
pxtrt.mapKeyNames = [
 "",
 "buttonEventHandlers",
 "charHeight",
 "charWidth",
 "condition",
 "deltaTimeMillis",
 "eid",
 "flags",
 "frameCallbacks",
 "frameWorker",
 "framesInSample",
 "handler",
 "handlers",
 "idleCallbacks",
 "lastPerfDump",
 "once",
 "order",
 "prevTimeMillis",
 "register",
 "registerFrameCallbacks",
 "registerFrameHandler",
 "registerHandler",
 "runCallbacks",
 "runningCallbacks",
 "src",
 "start",
 "timeInSample",
 "timeOut",
 "unregister",
 "value",
 "vid"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P7820(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._intervals___3321 = (undefined);
    globals._pollEventQueue___3330 = (undefined);
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, listeners_inline__P3333);
    globals.listeners___3334 = (s.tmp_0);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "charWidth", 6);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "charHeight", 5);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "data", _hex6804);
    globals.font5___1673 = (s.tmp_0);
    globals.__updated___3404 = (false);
    r0 = pxsim.control.runInParallel(control___screen_inline__P3407);
    r0 = pxsim_pxtcore.setPalette(_hex3418);
    r0 = pxsim_pxtcore.getConfig(2102, 160);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.getConfig(2103, 120);
    s.tmp_1 = r0;
    r0 = pxsim.image.create(s.tmp_0, s.tmp_1);
    globals.screen___1725 = (r0);
    s.tmp_0 = control___screen_setupUpdate__P1687_mk(s);
    s.tmp_0.arg0 = _screen_internal_inline__P3427;
    s.callLocIdx = 4; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals.control_EventContext_onStats___406 = (_screen_internal_inline__P3432);
    globals.RUN_KEY___3437 = ("#run");
    globals.SCOPE_KEY___3438 = ("#scope");
    s.tmp_0 = settings_initScopes__P3449_mk(s);
    s.callLocIdx = 5; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.SETTINGS_SIZE_DEFL___1777 = (32768);
    globals.inited___3470 = (false);
    r0 = pxsim_pxtcore_mkClassInstance(Scene__C1792_VT);
    s.tmp_0 = r0;
    s.tmp_1 = Scene_constructor__P1794_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 6; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    globals._scene___3472 = (s.tmp_0);
    globals.consoleFont___3485 = (globals.font5___1673);
    r0 = pxsim_ImageMethods.height(globals.screen___1725);
    s.tmp_2 = r0;
    s.tmp_5 = if_charHeight_1_mk(s);
    s.tmp_5.arg0 = globals.consoleFont___3485;
    if (!s.tmp_5.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_5.arg0, "charHeight");
    } else {
      s.tmp_5.fn = s.tmp_5.arg0.vtable.iface["charHeight"];
      if (s.tmp_5.fn == null) { s.retval = s.tmp_5.arg0.fields["charHeight"]; }
      else if (!s.tmp_5.fn.isGetter) { s.retval = bind(s.tmp_5); }
     else { s.callLocIdx = 7; s.pc = 4; return s.tmp_5; }
    }
  case 4:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = (s.tmp_4 + 2);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 / s.tmp_3);
    s.tmp_1 = r0;
    r0 = pxsim.Math_.floor(s.tmp_1);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 1);
    globals.consoleLines___3490 = (r0);
    r0 = pxsim_ImageMethods.width(globals.screen___1725);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 8);
    s.tmp_1 = r0;
    s.tmp_4 = if_charWidth_1_mk(s);
    s.tmp_4.arg0 = globals.consoleFont___3485;
    if (!s.tmp_4.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_4.arg0, "charWidth");
    } else {
      s.tmp_4.fn = s.tmp_4.arg0.vtable.iface["charWidth"];
      if (s.tmp_4.fn == null) { s.retval = s.tmp_4.arg0.fields["charWidth"]; }
      else if (!s.tmp_4.fn.isGetter) { s.retval = bind(s.tmp_4); }
     else { s.callLocIdx = 8; s.pc = 5; return s.tmp_4; }
    }
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_1 / s.tmp_3);
    s.tmp_0 = r0;
    r0 = pxsim.Math_.floor(s.tmp_0);
    globals.consoleColumns___3500 = (r0);
    s.tmp_0 = console_addListener__P391_mk(s);
    s.tmp_0.arg0 = game_consoleOverlay_listener__P3512;
    s.callLocIdx = 9; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    s.tmp_0 = game_setWaitAnyButton__P1802_mk(s);
    s.tmp_0.arg0 = controller_pauseUntilAnyButtonIsPressed__P1870;
    s.callLocIdx = 10; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.tmp_0 = game_eventContext__P1801_mk(s);
    s.callLocIdx = 11; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    s.tmp_0 = helpers__registerFactory__P3112_mk(s);
    s.tmp_0.arg0 = "image";
    s.tmp_0.arg1 = myImages_inline__P5349;
    s.callLocIdx = 13; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    s.tmp_0 = helpers__registerFactory__P3112_mk(s);
    s.tmp_0.arg0 = "animation";
    s.tmp_0.arg1 = myImages_inline__P5358;
    s.callLocIdx = 15; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    s.tmp_0 = helpers__registerFactory__P3112_mk(s);
    s.tmp_0.arg0 = "song";
    s.tmp_0.arg1 = myImages_inline__P5365;
    s.callLocIdx = 17; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    s.tmp_0 = helpers__registerFactory__P3112_mk(s);
    s.tmp_0.arg0 = "json";
    s.tmp_0.arg1 = myImages_inline__P5372;
    s.callLocIdx = 19; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P7820.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"main.ts","functionName":"<main>","argumentNames":[]}
_main___P7820.continuations = [  ]

function _main___P7820_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P7820, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
} }




function control___screen_inline__P3407(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 4; continue; }
    globals.__updated___3404 = (false);
    s.tmp_0 = pause__P421_mk(s);
    s.tmp_0.arg0 = 200;
    s.callLocIdx = 0; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals.__updated___3404);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_2 = control___screen_update__P1686_mk(s);
    s.callLocIdx = 1; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    globals.__updated___3404 = (true);
  case 2:
  case 3:
    { step = 1; continue; }
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_inline__P3407.info = {"start":396,"length":211,"line":17,"column":26,"endLine":26,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"inline","argumentNames":[]}

function control___screen_inline__P3407_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_inline__P3407, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }




function _screen_internal_inline__P3427(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_pxtcore.updateScreen(globals.screen___1725);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_inline__P3427.info = {"start":1122,"length":26,"line":32,"column":33,"endLine":32,"endColumn":59,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"inline","argumentNames":[]}

function _screen_internal_inline__P3427_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_inline__P3427, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }




function _screen_internal_inline__P3432(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.updateStats(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_inline__P3432.info = {"start":1185,"length":56,"line":33,"column":35,"endLine":35,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"inline","argumentNames":["msg"]}

function _screen_internal_inline__P3432_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_inline__P3432, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function myImages_inline__P5349(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = helpers_stringTrim__P124_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 12; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.switch_eq("image1", s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq("myImage", s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = pxsim.image.ofBuffer(_hex5355);
    { step = 4; continue; }
  case 3:
    r0 = null;
  case 4:
    return leave(s, r0)
  default: oops()
} } }
myImages_inline__P5349.info = {"start":97,"length":701,"line":3,"column":38,"endLine":26,"endColumn":5,"fileName":"images.g.ts","functionName":"inline","argumentNames":["name"]}

function myImages_inline__P5349_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: myImages_inline__P5349, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }




function myImages_inline__P5358(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = helpers_stringTrim__P124_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 14; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = null;
    return leave(s, r0)
  default: oops()
} } }
myImages_inline__P5358.info = {"start":843,"length":105,"line":28,"column":42,"endLine":33,"endColumn":5,"fileName":"images.g.ts","functionName":"inline","argumentNames":["name"]}

function myImages_inline__P5358_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: myImages_inline__P5358, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function myImages_inline__P5365(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = helpers_stringTrim__P124_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 16; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = null;
    return leave(s, r0)
  default: oops()
} } }
myImages_inline__P5365.info = {"start":988,"length":105,"line":35,"column":37,"endLine":40,"endColumn":5,"fileName":"images.g.ts","functionName":"inline","argumentNames":["name"]}

function myImages_inline__P5365_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: myImages_inline__P5365, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function myImages_inline__P5372(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = helpers_stringTrim__P124_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 18; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = null;
    return leave(s, r0)
  default: oops()
} } }
myImages_inline__P5372.info = {"start":1133,"length":105,"line":42,"column":37,"endLine":47,"endColumn":5,"fileName":"images.g.ts","functionName":"inline","argumentNames":["name"]}

function myImages_inline__P5372_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: myImages_inline__P5372, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function helpers_stringTrim__P124(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.start___6420 = undefined;
    s.end___6421 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.start___6420 = (0);
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_0 = r0;
    r0 = (s.tmp_0 - 1);
    s.end___6421 = (r0);
  case 1:
    r0 = (s.start___6420 <= s.end___6421);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    s.tmp_1 = helpers_isWhitespace__P125_mk(s);
    r0 = pxsim_String_.charCodeAt(s.arg0, s.start___6420);
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 7; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = (s.start___6420 + 1);
    s.start___6420 = (r0);
    { step = 1; continue; }
  case 4:
  case 5:
    r0 = (s.end___6421 > s.start___6420);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = s.tmp_0;
    { step = 7; continue; }
  case 6:
    s.tmp_1 = helpers_isWhitespace__P125_mk(s);
    r0 = pxsim_String_.charCodeAt(s.arg0, s.end___6421);
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 8; s.pc = 10; return s.tmp_1;
  case 10:
    r0 = s.retval;
  case 7:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 8; continue; }
    r0 = (s.end___6421 - 1);
    s.end___6421 = (r0);
    { step = 5; continue; }
  case 8:
    s.tmp_0 = helpers_stringSlice__P120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.start___6420;
    r0 = (s.end___6421 + 1);
    s.tmp_0.arg2 = r0;
    s.callLocIdx = 9; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
helpers_stringTrim__P124.info = {"start":14550,"length":319,"line":492,"column":4,"endLine":502,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringTrim","argumentNames":["s"]}

function helpers_stringTrim__P124_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringTrim__P124, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  start___6420: undefined,
  end___6421: undefined,
  arg0: undefined,
} }




function helpers_isWhitespace__P125(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(160, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(65279, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(8232, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(8233, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = s.tmp_0;
    { step = 11; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = true;
    { step = 12; continue; }
  case 11:
    r0 = false;
    { step = 12; continue; }
    r0 = undefined;
  case 12:
    return leave(s, r0)
  default: oops()
} } }
helpers_isWhitespace__P125.info = {"start":14875,"length":674,"line":504,"column":4,"endLine":521,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"isWhitespace","argumentNames":["c"]}

function helpers_isWhitespace__P125_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_isWhitespace__P125, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function helpers_stringSlice__P120(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___6460 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg0);
    s.len___6460 = (r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P131_mk(s);
    r0 = (s.len___6460 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 2; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.arg1 = (r0);
  case 1:
  case 2:
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.arg2 = (s.len___6460);
    { step = 6; continue; }
  case 3:
    r0 = (s.arg2 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.arg2 = (0);
  case 4:
  case 5:
  case 6:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.len___6460 + s.arg2);
    s.arg2 = (r0);
  case 7:
  case 8:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = (s.arg2 - s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_String_.substr(s.tmp_0, s.tmp_1, s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSlice__P120.info = {"start":11507,"length":440,"line":385,"column":4,"endLine":403,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringSlice","argumentNames":["s","start","end"]}

function helpers_stringSlice__P120_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSlice__P120, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  len___6460: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function Math_max__P131(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P131.info = {"start":16625,"length":105,"line":559,"column":4,"endLine":562,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P131_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P131, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function helpers__registerFactory__P3112(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.factories___5302);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    globals.factories___5302 = (r0);
  case 1:
  case 2:
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "kind", s.arg0);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "factory", s.arg1);
    r0 = pxsim_Array__push(globals.factories___5302, s.tmp_0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers__registerFactory__P3112.info = {"start":1148,"length":201,"line":35,"column":4,"endLine":41,"endColumn":5,"fileName":"custom.ts","functionName":"_registerFactory","argumentNames":["kind","factory"]}

function helpers__registerFactory__P3112_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers__registerFactory__P3112, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function game_eventContext__P1801(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.inited___3470);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    globals.inited___3470 = (true);
    s.tmp_0 = game_pushScene__P1799_mk(s);
    s.callLocIdx = 63; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    s.tmp_0 = control_eventContext__P416_mk(s);
    s.callLocIdx = 64; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
game_eventContext__P1801.info = {"start":1279,"length":159,"line":55,"column":4,"endLine":61,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"eventContext","argumentNames":[]}

function game_eventContext__P1801_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_eventContext__P1801, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }




function game_pushScene__P1799(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6500 = undefined;
    s.tmp_0 = control_pushEventContext__P417_mk(s);
    s.callLocIdx = 60; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.ctx___6500 = (r0);
    s.tmp_0 = control_EventContext_registerFrameHandler__P411_mk(s);
    s.tmp_0.arg0 = s.ctx___6500;
    s.tmp_0.arg1 = 60;
    s.tmp_0.arg2 = game_pushScene_inline__P6506;
    s.callLocIdx = 61; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    s.tmp_0 = control_EventContext_registerFrameHandler__P411_mk(s);
    s.tmp_0.arg0 = s.ctx___6500;
    s.tmp_0.arg1 = 200;
    s.tmp_0.arg2 = control___screen_update__P1686;
    s.callLocIdx = 62; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_pushScene__P1799.info = {"start":914,"length":285,"line":43,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"pushScene","argumentNames":[]}

function game_pushScene__P1799_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_pushScene__P1799, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  ctx___6500: undefined,
} }




function game_pushScene_inline__P6506(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_ImageMethods.fill(globals.screen___1725, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_pushScene_inline__P6506.info = {"start":1058,"length":44,"line":45,"column":67,"endLine":47,"endColumn":9,"fileName":"pxt_modules/game---light/compat.ts","functionName":"inline","argumentNames":[]}

function game_pushScene_inline__P6506_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_pushScene_inline__P6506, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }




function control_pushEventContext__P417(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6518 = undefined;
    s.n___6524 = undefined;
    r0 = pxsim_numops_toBoolDecr(globals.eventContexts___3356);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    globals.eventContexts___3356 = (r0);
  case 1:
  case 2:
    s.tmp_0 = control_eventContext__P416_mk(s);
    s.callLocIdx = 36; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    s.ctx___6518 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ctx___6518);
    if (!r0) { step = 3; continue; }
    s.tmp_0 = control_EventContext_unregister__P410_mk(s);
    s.tmp_0.arg0 = s.ctx___6518;
    s.callLocIdx = 37; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
  case 3:
  case 4:
    r0 = pxsim_pxtcore_mkClassInstance(control_EventContext__C403_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_EventContext_constructor__P407_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 38; s.pc = 7; return s.tmp_1;
  case 7:
    r0 = s.retval;
    s.n___6524 = (s.tmp_0);
    r0 = pxsim_Array__push(globals.eventContexts___3356, s.n___6524);
    r0 = s.n___6524;
    return leave(s, r0)
  default: oops()
} } }
control_pushEventContext__P417.info = {"start":7357,"length":340,"line":221,"column":4,"endLine":232,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"pushEventContext","argumentNames":[]}

function control_pushEventContext__P417_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_pushEventContext__P417, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  ctx___6518: undefined,
  n___6524: undefined,
} }




function control_EventContext_unregister__P410(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___6553 = undefined;
    s.unnamed66___U1 = undefined;
    s.unnamed67___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    s.h___6553 = (undefined);
    r0 = s.arg0.fields["handlers"];
    s.unnamed66___U1 = (r0);
    s.unnamed67___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed67___U2;
    r0 = pxsim_Array__length(s.unnamed66___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed66___U1, s.unnamed67___U2);
    s.h___6553 = (r0);
    s.tmp_2 = control_EventHandler_unregister__P3350_mk(s);
    s.tmp_2.arg0 = s.h___6553;
    s.callLocIdx = 32; s.pc = 3; return s.tmp_2;
  case 3:
    r0 = s.retval;
    r0 = (s.unnamed67___U2 + 1);
    s.unnamed67___U2 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed66___U1 = (undefined);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["frameWorker"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["frameWorker"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_unregister__P410.info = {"start":4768,"length":131,"line":142,"column":8,"endLine":146,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"unregister","argumentNames":["this"]}

function control_EventContext_unregister__P410_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_unregister__P410, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  h___6553: undefined,
  unnamed66___U1: undefined,
  unnamed67___U2: undefined,
  arg0: undefined,
} }




function control_EventHandler_unregister__P3350(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3348_VT)) failedCast(r0, control_EventHandler__C3348_VT);
    r0 = s.arg0.fields["src"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["value"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["flags"];
    s.tmp_2 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_0, s.tmp_1, control_doNothing__P3352, s.tmp_2);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_unregister__P3350.info = {"start":1183,"length":106,"line":37,"column":8,"endLine":39,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"unregister","argumentNames":["this"]}

function control_EventHandler_unregister__P3350_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_unregister__P3350, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }




function control_doNothing__P3352(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_doNothing__P3352.info = {"start":1301,"length":24,"line":42,"column":4,"endLine":42,"endColumn":28,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"doNothing","argumentNames":[]}

function control_doNothing__P3352_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_doNothing__P3352, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }




function control_EventContext_constructor__P407(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["handlers"] = (s.tmp_1);
    r0 = (s.arg0).fields["framesInSample"] = (0);
    r0 = (s.arg0).fields["timeInSample"] = (0);
    r0 = (s.arg0).fields["deltaTimeMillis"] = (0);
    r0 = (s.arg0).fields["frameWorker"] = (0);
    r0 = (s.arg0).fields["idleCallbacks"] = (undefined);
    r0 = pxsim_numops_toBoolDecr(globals.control_EventContext_lastStats___405);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.control_EventContext_lastStats___405 = (r0);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_constructor__P407.info = {"start":1825,"length":347,"line":60,"column":8,"endLine":70,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this"]}

function control_EventContext_constructor__P407_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_constructor__P407, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }




function control_EventContext_registerFrameHandler__P411(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.fn___5940 = undefined;
    s.i___5949 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_4 = r0;
    r0 = (s.tmp_3).fields["frameCallbacks"] = (s.tmp_4);
    s.tmp_0 = control_EventContext_registerFrameCallbacks__P3354_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 33; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = pxsim_pxtcore_mkClassInstance(control_FrameCallback__C400_VT);
    s.fn___5940 = (r0);
    r0 = (s.fn___5940).fields["order"] = (s.arg1);
    r0 = (s.fn___5940).fields["handler"] = (s.arg2);
    s.i___5949 = (0);
  case 3:
    s.tmp_1 = r0 = s.i___5949;
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_3 = r0;
    r0 = pxsim_Array__length(s.tmp_3);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_6 = r0;
    r0 = pxsim_Array__getAt(s.tmp_6, s.i___5949);
    r0 = r0.fields["order"];
    s.tmp_5 = r0;
    r0 = (s.tmp_5 > s.arg1);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 4; continue; }
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_7 = r0;
    r0 = pxsim_Array_.insertAt(s.tmp_7, s.i___5949, s.fn___5940);
    r0 = s.fn___5940;
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___5949 + 1);
    s.i___5949 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.fn___5940);
    r0 = s.fn___5940;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameHandler__P411.info = {"start":4909,"length":643,"line":148,"column":8,"endLine":165,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerFrameHandler","argumentNames":["this","order","handler"]}

function control_EventContext_registerFrameHandler__P411_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameHandler__P411, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  fn___5940: undefined,
  i___5949: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function control_EventContext_registerFrameCallbacks__P3354(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.worker___5983 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    r0 = s.arg0.fields["frameCallbacks"];
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg0.fields["frameWorker"];
    s.worker___5983 = (r0);
    r0 = pxsim_pxtcore_mkAction(2, control_EventContext_registerFrameCallbacks_inline__P5989);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.worker___5983);
    r0 = pxsim.control.runInParallel(s.tmp_0);
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks__P3354.info = {"start":3715,"length":895,"line":110,"column":8,"endLine":134,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerFrameCallbacks","argumentNames":["this"]}

function control_EventContext_registerFrameCallbacks__P3354_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks__P3354, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  worker___5983: undefined,
  arg0: undefined,
} }




function control_EventContext_registerFrameCallbacks_inline__P5989(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.delay___6019 = undefined;
    r0 = s.caps[0].fields["runningCallbacks"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_pxtcore_mkAction(1, control_EventContext_registerFrameCallbacks_inline__P5995);
    s.tmp_1 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_1, 0, s.caps[0]);
    s.tmp_2 = pauseUntil__P375_mk(s);
    s.tmp_2.arg0 = s.tmp_1;
    s.tmp_2.arg1 = undefined;
    s.callLocIdx = 29; s.pc = 5; return s.tmp_2;
  case 5:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = (s.caps[0]).fields["runningCallbacks"] = (true);
    r0 = (s.caps[0]).fields["framesInSample"] = (0);
    r0 = (s.caps[0]).fields["timeInSample"] = (0);
    r0 = (s.caps[0]).fields["deltaTimeMillis"] = (0);
    s.tmp_0 = r0 = s.caps[0];
    r0 = pxsim.control.millis();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["prevTimeMillis"] = (s.tmp_1);
  case 3:
    r0 = s.caps[0].fields["frameWorker"];
    s.tmp_1 = r0;
    r0 = (s.caps[1] == s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.tmp_2 = control_EventContext_runCallbacks__P3353_mk(s);
    s.tmp_2.arg0 = s.caps[0];
    s.callLocIdx = 30; s.pc = 6; return s.tmp_2;
  case 6:
    r0 = s.retval;
    s.delay___6019 = (r0);
    s.tmp_0 = pause__P421_mk(s);
    s.tmp_0.arg0 = s.delay___6019;
    s.callLocIdx = 31; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    { step = 3; continue; }
  case 4:
    r0 = (s.caps[0]).fields["runningCallbacks"] = (false);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks_inline__P5989.info = {"start":3876,"length":723,"line":114,"column":34,"endLine":133,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventContext_registerFrameCallbacks_inline__P5989_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks_inline__P5989, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  delay___6019: undefined,
} }




function control_EventContext_registerFrameCallbacks_inline__P5995(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = s.caps[0].fields["runningCallbacks"];
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerFrameCallbacks_inline__P5995.info = {"start":4107,"length":28,"line":118,"column":31,"endLine":118,"endColumn":59,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventContext_registerFrameCallbacks_inline__P5995_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerFrameCallbacks_inline__P5995, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }




function control_EventContext_runCallbacks__P3353(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.loopStart___6028 = undefined;
    s.f___6041 = undefined;
    s.unnamed64___U2 = undefined;
    s.unnamed65___U3 = undefined;
    s.now___6046 = undefined;
    s.runtime___6049 = undefined;
    s.realTimeInSample___6068 = undefined;
    s.fps___6077 = undefined;
    s.delay___6146 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    r0 = pxsim.control.millis();
    s.loopStart___6028 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.arg0.fields["prevTimeMillis"];
    s.tmp_2 = r0;
    r0 = (s.loopStart___6028 - s.tmp_2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["deltaTimeMillis"] = (s.tmp_1);
    r0 = (s.arg0).fields["prevTimeMillis"] = (s.loopStart___6028);
    s.f___6041 = (undefined);
    r0 = s.arg0.fields["frameCallbacks"];
    s.unnamed64___U2 = (r0);
    s.unnamed65___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed65___U3;
    r0 = pxsim_Array__length(s.unnamed64___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed64___U2, s.unnamed65___U3);
    s.f___6041 = (r0);
    s.tmp_2 = if_handler_1_mk(s);
    s.tmp_2.arg0 = s.f___6041;
    if (!s.tmp_2.arg0.vtable.iface) {
      setupLambda(s.tmp_2, pxsim_pxtrt.mapGetByString(s.tmp_2.arg0, "handler"), 1);
      s.callLocIdx = 27; s.pc = 11; return s.tmp_2;
    } else {
      s.tmp_2.fn = s.tmp_2.arg0.vtable.iface["handler"];
      if (s.tmp_2.fn == null) { setupLambda(s.tmp_2, s.tmp_2.arg0.fields["handler"], 1); s.callLocIdx = 27; s.pc = 11; return s.tmp_2; }
      else if (s.tmp_2.fn.isGetter) { s.tmp_2.stage2Call = true; s.callLocIdx = 27; s.pc = 11; return s.tmp_2;; }
     else { s.callLocIdx = 27; s.pc = 11; return s.tmp_2; }
    }
  case 11:
    r0 = s.retval;
    r0 = (s.unnamed65___U3 + 1);
    s.unnamed65___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed64___U2 = (undefined);
    r0 = pxsim.control.millis();
    s.now___6046 = (r0);
    r0 = (s.now___6046 - s.loopStart___6028);
    s.runtime___6049 = (r0);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["timeInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + s.runtime___6049);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["timeInSample"] = (s.tmp_1);
    s.tmp_0 = r0 = s.arg0;
    r0 = s.tmp_0.fields["framesInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 + 1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["framesInSample"] = (s.tmp_1);
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 1000);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 4; continue; }
  case 3:
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 30);
  case 4:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 9; continue; }
    r0 = s.arg0.fields["lastPerfDump"];
    s.tmp_4 = r0;
    r0 = (s.now___6046 - s.tmp_4);
    s.realTimeInSample___6068 = (r0);
    r0 = (s.arg0).fields["lastPerfDump"] = (s.now___6046);
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_0 = r0;
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_2 = r0;
    r0 = (s.tmp_2 / 1000);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 / s.tmp_1);
    s.fps___6077 = (r0);
    r0 = pxsim.Math_.round(s.fps___6077);
    s.tmp_1 = r0;
    if ((s.tmp_1) && (s.tmp_1).vtable) {
    setupResume(s, 12);
    pxsim_String__stringConv(s.tmp_1);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_1) + ""; }
  case 12:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_String__concat("fps:", s.tmp_0);
    globals.control_EventContext_lastStats___405 = (r0);
    r0 = (s.fps___6077 < 99);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    if ((globals.control_EventContext_lastStats___405) && (globals.control_EventContext_lastStats___405).vtable) {
    setupResume(s, 13);
    pxsim_String__stringConv(globals.control_EventContext_lastStats___405);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.control_EventContext_lastStats___405) + ""; }
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.fps___6077 * 10);
    s.tmp_7 = r0;
    r0 = pxsim.Math_.round(s.tmp_7);
    s.tmp_6 = r0;
    r0 = (s.tmp_6 % 10);
    s.tmp_5 = r0;
    if ((s.tmp_5) && (s.tmp_5).vtable) {
    setupResume(s, 14);
    pxsim_String__stringConv(s.tmp_5);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_5) + ""; }
  case 14:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(".", s.tmp_4);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 15);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 15:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_2);
    globals.control_EventContext_lastStats___405 = (r0);
  case 5:
  case 6:
    r0 = pxsim.control.profilingEnabled();
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_String_.mkEmpty();
    s.tmp_9 = r0;
    r0 = (s.fps___6077 * 100);
    s.tmp_12 = r0;
    r0 = (s.tmp_12 | 0);
    s.tmp_11 = r0;
    if ((s.tmp_11) && (s.tmp_11).vtable) {
    setupResume(s, 16);
    pxsim_String__stringConv(s.tmp_11);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_11) + ""; }
  case 16:
    r0 = s.retval;
    s.tmp_10 = r0;
    r0 = pxsim_String__concat(s.tmp_9, s.tmp_10);
    s.tmp_8 = r0;
    r0 = pxsim_String__concat(s.tmp_8, "/100 fps - ");
    s.tmp_7 = r0;
    r0 = s.arg0.fields["framesInSample"];
    s.tmp_14 = r0;
    if ((s.tmp_14) && (s.tmp_14).vtable) {
    setupResume(s, 17);
    pxsim_String__stringConv(s.tmp_14);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_14) + ""; }
  case 17:
    r0 = s.retval;
    s.tmp_13 = r0;
    r0 = pxsim_String__concat(s.tmp_7, s.tmp_13);
    s.tmp_6 = r0;
    r0 = pxsim_String__concat(s.tmp_6, " frames (");
    s.tmp_5 = r0;
    r0 = s.arg0.fields["timeInSample"];
    s.tmp_16 = r0;
    if ((s.tmp_16) && (s.tmp_16).vtable) {
    setupResume(s, 18);
    pxsim_String__stringConv(s.tmp_16);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_16) + ""; }
  case 18:
    r0 = s.retval;
    s.tmp_15 = r0;
    r0 = pxsim_String__concat(s.tmp_5, s.tmp_15);
    s.tmp_4 = r0;
    r0 = pxsim_String__concat(s.tmp_4, "ms/");
    s.tmp_3 = r0;
    if ((s.realTimeInSample___6068) && (s.realTimeInSample___6068).vtable) {
    setupResume(s, 19);
    pxsim_String__stringConv(s.realTimeInSample___6068);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.realTimeInSample___6068) + ""; }
  case 19:
    r0 = s.retval;
    s.tmp_17 = r0;
    r0 = pxsim_String__concat(s.tmp_3, s.tmp_17);
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_2, "ms)");
    s.tmp_1 = r0;
    r0 = pxsim.control.dmesg(s.tmp_1);
    r0 = pxsim.control.gc();
    r0 = pxsim_pxtcore.dumpPerfCounters();
  case 7:
  case 8:
    r0 = (s.arg0).fields["timeInSample"] = (0);
    r0 = (s.arg0).fields["framesInSample"] = (0);
  case 9:
  case 10:
    s.tmp_0 = Math_max__P131_mk(s);
    s.tmp_0.arg0 = 1;
    r0 = (20 - s.runtime___6049);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 28; s.pc = 20; return s.tmp_0;
  case 20:
    r0 = s.retval;
    s.delay___6146 = (r0);
    r0 = s.delay___6146;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_runCallbacks__P3353.info = {"start":2267,"length":1395,"line":76,"column":8,"endLine":107,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"runCallbacks","argumentNames":["this"]}

function control_EventContext_runCallbacks__P3353_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_runCallbacks__P3353, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  tmp_11: undefined,
  tmp_12: undefined,
  tmp_13: undefined,
  tmp_14: undefined,
  tmp_15: undefined,
  tmp_16: undefined,
  tmp_17: undefined,
  loopStart___6028: undefined,
  f___6041: undefined,
  unnamed64___U2: undefined,
  unnamed65___U3: undefined,
  now___6046: undefined,
  runtime___6049: undefined,
  realTimeInSample___6068: undefined,
  fps___6077: undefined,
  delay___6146: undefined,
  arg0: undefined,
} }




function pauseUntil__P375(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_2 = lambda_1_mk(s);
    s.tmp_2.argL = s.arg0;
    setupLambda(s.tmp_2, s.tmp_2.argL);
    s.callLocIdx = 22; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_5 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_5);
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 5; continue; }
    s.arg1 = (0);
  case 5:
  case 6:
    s.tmp_0 = control___queuePollEvent__P374_mk(s);
    s.tmp_0.arg0 = s.arg1;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 23; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pauseUntil__P375.info = {"start":2224,"length":227,"line":73,"column":0,"endLine":77,"endColumn":1,"fileName":"pxt_modules/base/poll.ts","functionName":"pauseUntil","argumentNames":["condition","timeOut"]}

function pauseUntil__P375_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pauseUntil__P375, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function control___queuePollEvent__P374(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ev___6168 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(control_PollEvent__C3327_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_PollEvent_constructor__P3328_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = 1023;
    r0 = pxsim.control.allocateNotifyEvent();
    s.tmp_1.arg2 = r0;
    r0 = pxsim.control.millis();
    s.tmp_1.arg3 = r0;
    s.tmp_1.arg4 = s.arg0;
    s.tmp_1.arg5 = s.arg1;
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1.arg6 = r0;
    s.callLocIdx = 20; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.ev___6168 = (s.tmp_0);
    r0 = pxsim_numops_toBoolDecr(globals._pollEventQueue___3330);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_Array__mk();
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_2, s.ev___6168);
    globals._pollEventQueue___3330 = (s.tmp_2);
    r0 = pxsim.control.runInParallel(control_pollEvents__P3331);
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array__push(globals._pollEventQueue___3330, s.ev___6168);
  case 2:
    r0 = pxsim_numops_toBoolDecr(s.arg2);
    if (!r0) { step = 3; continue; }
    s.tmp_0 = control_onEvent__P399_mk(s);
    r0 = s.ev___6168.fields["eid"];
    s.tmp_0.arg0 = r0;
    r0 = s.ev___6168.fields["vid"];
    s.tmp_0.arg1 = r0;
    s.tmp_0.arg2 = s.arg2;
    s.tmp_0.arg3 = 16;
    s.callLocIdx = 21; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    { step = 4; continue; }
  case 3:
    r0 = s.ev___6168.fields["eid"];
    s.tmp_0 = r0;
    r0 = s.ev___6168.fields["vid"];
    s.tmp_1 = r0;
    setupResume(s, 7);
    pxsim.control.waitForEvent(s.tmp_0, s.tmp_1);
    checkResumeConsumed();
    return;
  case 7:
    r0 = s.retval;
  case 4:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___queuePollEvent__P374.info = {"start":1262,"length":758,"line":39,"column":4,"endLine":64,"endColumn":5,"fileName":"pxt_modules/base/poll.ts","functionName":"__queuePollEvent","argumentNames":["timeOut","condition","handler"]}

function control___queuePollEvent__P374_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___queuePollEvent__P374, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  ev___6168: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function control_pollEvents__P3331(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.now___6211 = undefined;
    s.i___6214 = undefined;
    s.ev___6220 = undefined;
  case 1:
    r0 = pxsim_Array__length(globals._pollEventQueue___3330);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = pxsim.control.millis();
    s.now___6211 = (r0);
    s.i___6214 = (0);
  case 2:
    s.tmp_1 = r0 = s.i___6214;
    r0 = pxsim_Array__length(globals._pollEventQueue___3330);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    r0 = pxsim_Array__getAt(globals._pollEventQueue___3330, s.i___6214);
    s.ev___6220 = (r0);
    s.tmp_1 = if_condition_1_mk(s);
    s.tmp_1.arg0 = s.ev___6220;
    if (!s.tmp_1.arg0.vtable.iface) {
      setupLambda(s.tmp_1, pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "condition"), 1);
      s.callLocIdx = 17; s.pc = 13; return s.tmp_1;
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["condition"];
      if (s.tmp_1.fn == null) { setupLambda(s.tmp_1, s.tmp_1.arg0.fields["condition"], 1); s.callLocIdx = 17; s.pc = 13; return s.tmp_1; }
      else if (s.tmp_1.fn.isGetter) { s.tmp_1.stage2Call = true; s.callLocIdx = 17; s.pc = 13; return s.tmp_1;; }
     else { s.callLocIdx = 17; s.pc = 13; return s.tmp_1; }
    }
  case 13:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 3; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 3:
    r0 = s.ev___6220.fields["timeOut"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 > 0);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 4; continue; }
    r0 = s.tmp_2;
    { step = 5; continue; }
  case 4:
    r0 = s.ev___6220.fields["start"];
    s.tmp_5 = r0;
    r0 = (s.now___6211 - s.tmp_5);
    s.tmp_4 = r0;
    r0 = s.ev___6220.fields["timeOut"];
    s.tmp_6 = r0;
    r0 = (s.tmp_4 > s.tmp_6);
  case 5:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = s.tmp_7;
  case 6:
    // jmp value (already in r0)
    s.tmp_8 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_8);
    if (!r0) { step = 9; continue; }
    r0 = s.ev___6220.fields["eid"];
    s.tmp_9 = r0;
    r0 = s.ev___6220.fields["vid"];
    s.tmp_10 = r0;
    r0 = pxsim.control.raiseEvent(s.tmp_9, s.tmp_10);
    r0 = s.ev___6220.fields["once"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_1 = helpers_arraySplice__P101_mk(s);
    s.tmp_1.arg0 = globals._pollEventQueue___3330;
    s.tmp_1.arg1 = s.i___6214;
    s.tmp_1.arg2 = 1;
    s.callLocIdx = 18; s.pc = 14; return s.tmp_1;
  case 14:
    r0 = s.retval;
    r0 = (s.i___6214 - 1);
    s.i___6214 = (r0);
  case 7:
  case 8:
  case 9:
  case 10:
    r0 = (s.i___6214 + 1);
    s.i___6214 = (r0);
    { step = 2; continue; }
  case 11:
    s.tmp_0 = pause__P421_mk(s);
    s.tmp_0.arg0 = 50;
    s.callLocIdx = 19; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    { step = 1; continue; }
  case 12:
    globals._pollEventQueue___3330 = (undefined);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_pollEvents__P3331.info = {"start":618,"length":638,"line":20,"column":4,"endLine":37,"endColumn":5,"fileName":"pxt_modules/base/poll.ts","functionName":"pollEvents","argumentNames":[]}

function control_pollEvents__P3331_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_pollEvents__P3331, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tmp_8: undefined,
  tmp_9: undefined,
  tmp_10: undefined,
  now___6211: undefined,
  i___6214: undefined,
  ev___6220: undefined,
} }




function helpers_arraySplice__P101(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___6268 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    { step = 5; continue; }
  case 1:
  case 2:
    s.i___6268 = (0);
  case 3:
    r0 = (s.i___6268 < s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array_.removeAt(s.arg0, s.arg1);
    r0 = (s.i___6268 + 1);
    s.i___6268 = (r0);
    { step = 3; continue; }
  case 4:
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arraySplice__P101.info = {"start":3653,"length":213,"line":138,"column":4,"endLine":145,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arraySplice","argumentNames":["arr","start","len"]}

function helpers_arraySplice__P101_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arraySplice__P101, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  i___6268: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function control_PollEvent_constructor__P3328(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.arg5 = (s.lambdaArgs[5]);
      s.arg6 = (s.lambdaArgs[6]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_PollEvent__C3327_VT)) failedCast(r0, control_PollEvent__C3327_VT);
    r0 = (s.arg0).fields["eid"] = (s.arg1);
    r0 = (s.arg0).fields["vid"] = (s.arg2);
    r0 = (s.arg0).fields["start"] = (s.arg3);
    r0 = (s.arg0).fields["timeOut"] = (s.arg4);
    r0 = (s.arg0).fields["condition"] = (s.arg5);
    r0 = (s.arg0).fields["once"] = (s.arg6);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_PollEvent_constructor__P3328.info = {"start":239,"length":316,"line":8,"column":8,"endLine":15,"endColumn":9,"fileName":"pxt_modules/base/poll.ts","functionName":"inline","argumentNames":["this","eid","vid","start","timeOut","condition","once"]}

function control_PollEvent_constructor__P3328_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_PollEvent_constructor__P3328, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
  arg5: undefined,
  arg6: undefined,
} }




function control_onEvent__P399(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.ctx___6319 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = control_eventContext__P416_mk(s);
    s.callLocIdx = 24; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.ctx___6319 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.ctx___6319);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.control.internalOnEvent(s.arg0, s.arg1, s.arg2, s.arg3);
    { step = 2; continue; }
  case 1:
    s.tmp_0 = control_EventContext_registerHandler__P413_mk(s);
    s.tmp_0.arg0 = s.ctx___6319;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = s.arg1;
    s.tmp_0.arg3 = s.arg2;
    s.tmp_0.arg4 = s.arg3;
    s.callLocIdx = 25; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_onEvent__P399.info = {"start":383,"length":325,"line":10,"column":4,"endLine":16,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"onEvent","argumentNames":["src","value","handler","flags"]}

function control_onEvent__P399_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_onEvent__P399, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  ctx___6319: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }




function control_EventContext_registerHandler__P413(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.h___6342 = undefined;
    s.unnamed68___U1 = undefined;
    s.unnamed69___U2 = undefined;
    s.hn___6365 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventContext__C403_VT)) failedCast(r0, control_EventContext__C403_VT);
    s.h___6342 = (undefined);
    r0 = s.arg0.fields["handlers"];
    s.unnamed68___U1 = (r0);
    s.unnamed69___U2 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed69___U2;
    r0 = pxsim_Array__length(s.unnamed68___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 6; continue; }
    r0 = pxsim_Array__getAt(s.unnamed68___U1, s.unnamed69___U2);
    s.h___6342 = (r0);
    r0 = s.h___6342.fields["src"];
    s.tmp_3 = r0;
    r0 = (s.tmp_3 == s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBool(s.tmp_2);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_2;
    { step = 3; continue; }
  case 2:
    r0 = s.h___6342.fields["value"];
    s.tmp_4 = r0;
    r0 = (s.tmp_4 == s.arg2);
  case 3:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 4; continue; }
    r0 = (s.h___6342).fields["flags"] = (s.arg4);
    r0 = (s.h___6342).fields["handler"] = (s.arg3);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.unnamed69___U2 + 1);
    s.unnamed69___U2 = (r0);
    { step = 1; continue; }
  case 6:
    s.unnamed68___U1 = (undefined);
    r0 = pxsim_pxtcore_mkClassInstance(control_EventHandler__C3348_VT);
    s.tmp_0 = r0;
    s.tmp_1 = control_EventHandler_constructor__P3351_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg1;
    s.tmp_1.arg2 = s.arg2;
    s.tmp_1.arg3 = s.arg3;
    s.tmp_1.arg4 = s.arg4;
    s.callLocIdx = 34; s.pc = 8; return s.tmp_1;
  case 8:
    r0 = s.retval;
    s.hn___6365 = (s.tmp_0);
    r0 = s.arg0.fields["handlers"];
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.hn___6365);
    s.tmp_0 = control_EventHandler_register__P3349_mk(s);
    s.tmp_0.arg0 = s.hn___6365;
    s.callLocIdx = 35; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventContext_registerHandler__P413.info = {"start":5807,"length":525,"line":174,"column":8,"endLine":187,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"registerHandler","argumentNames":["this","src","value","handler","flags"]}

function control_EventContext_registerHandler__P413_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventContext_registerHandler__P413, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  h___6342: undefined,
  unnamed68___U1: undefined,
  unnamed69___U2: undefined,
  hn___6365: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }




function control_EventHandler_constructor__P3351(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3348_VT)) failedCast(r0, control_EventHandler__C3348_VT);
    r0 = (s.arg0).fields["src"] = (s.arg1);
    r0 = (s.arg0).fields["value"] = (s.arg2);
    r0 = (s.arg0).fields["handler"] = (s.arg3);
    r0 = (s.arg0).fields["flags"] = (s.arg4);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_constructor__P3351.info = {"start":833,"length":165,"line":24,"column":8,"endLine":29,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":["this","src","value","handler","flags"]}

function control_EventHandler_constructor__P3351_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_constructor__P3351, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
} }




function control_EventHandler_register__P3349(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, control_EventHandler__C3348_VT)) failedCast(r0, control_EventHandler__C3348_VT);
    r0 = pxsim_pxtcore_mkAction(1, control_EventHandler_register_inline__P6386);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg0);
    r0 = s.arg0.fields["src"];
    s.tmp_1 = r0;
    r0 = s.arg0.fields["value"];
    s.tmp_2 = r0;
    r0 = s.arg0.fields["flags"];
    s.tmp_3 = r0;
    r0 = pxsim.control.internalOnEvent(s.tmp_1, s.tmp_2, s.tmp_0, s.tmp_3);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_register__P3349.info = {"start":1008,"length":165,"line":31,"column":8,"endLine":35,"endColumn":9,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"register","argumentNames":["this"]}

function control_EventHandler_register__P3349_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_register__P3349, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }




function control_EventHandler_register_inline__P6386(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = s.caps[0].fields["handler"];
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = if_handler_1_mk(s);
    s.tmp_1.arg0 = s.caps[0];
    if (!s.tmp_1.arg0.vtable.iface) {
      setupLambda(s.tmp_1, pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "handler"), 1);
      s.callLocIdx = 26; s.pc = 3; return s.tmp_1;
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["handler"];
      if (s.tmp_1.fn == null) { setupLambda(s.tmp_1, s.tmp_1.arg0.fields["handler"], 1); s.callLocIdx = 26; s.pc = 3; return s.tmp_1; }
      else if (s.tmp_1.fn.isGetter) { s.tmp_1.stage2Call = true; s.callLocIdx = 26; s.pc = 3; return s.tmp_1;; }
     else { s.callLocIdx = 26; s.pc = 3; return s.tmp_1; }
    }
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_EventHandler_register_inline__P6386.info = {"start":1079,"length":71,"line":32,"column":58,"endLine":34,"endColumn":13,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"inline","argumentNames":[]}

function control_EventHandler_register_inline__P6386_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_EventHandler_register_inline__P6386, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }




function control_eventContext__P416(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.eventContexts___3356);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = r0 = globals.eventContexts___3356;
    r0 = pxsim_Array__length(globals.eventContexts___3356);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 - 1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__getAt(s.tmp_0, s.tmp_1);
    { step = 2; continue; }
  case 1:
    r0 = undefined;
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = s.tmp_3;
    return leave(s, r0)
  default: oops()
} } }
control_eventContext__P416.info = {"start":7141,"length":136,"line":214,"column":4,"endLine":216,"endColumn":5,"fileName":"pxt_modules/base/eventcontext.ts","functionName":"eventContext","argumentNames":[]}

function control_eventContext__P416_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_eventContext__P416, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
} }




function controller_pauseUntilAnyButtonIsPressed__P1870(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    setupResume(s, 1);
    pxsim.control.waitForEvent(2049, 0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
controller_pauseUntilAnyButtonIsPressed__P1870.info = {"start":9968,"length":96,"line":287,"column":4,"endLine":289,"endColumn":5,"fileName":"pxt_modules/game---light/controllerbutton.ts","functionName":"pauseUntilAnyButtonIsPressed","argumentNames":[]}

function controller_pauseUntilAnyButtonIsPressed__P1870_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: controller_pauseUntilAnyButtonIsPressed__P1870, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }




function game_setWaitAnyButton__P1802(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    globals.__waitAnyButton___3474 = (s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_setWaitAnyButton__P1802.info = {"start":1481,"length":83,"line":64,"column":4,"endLine":66,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"setWaitAnyButton","argumentNames":["f"]}

function game_setWaitAnyButton__P1802_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_setWaitAnyButton__P1802, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function game_consoleOverlay_listener__P3512(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(globals.consoleStrings___3477);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_numops_toBoolDecr(s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 7; continue; }
  case 3:
  case 4:
    s.tmp_4 = helpers_arrayForEach__P110_mk(s);
    s.tmp_5 = helpers_arrayFilter__P111_mk(s);
    s.tmp_6 = helpers_stringSplit__P123_mk(s);
    s.tmp_6.arg0 = s.arg1;
    s.tmp_6.arg1 = "\n";
    s.tmp_6.arg2 = undefined;
    s.callLocIdx = 70; s.pc = 10; return s.tmp_6;
  case 10:
    r0 = s.retval;
    s.tmp_5.arg0 = r0;
    s.tmp_5.arg1 = forEach_inline__P6589;
    s.callLocIdx = 71; s.pc = 9; return s.tmp_5;
  case 9:
    r0 = s.retval;
    s.tmp_4.arg0 = r0;
    s.tmp_4.arg1 = game_consoleOverlay_listener_inline__P6594;
    s.callLocIdx = 73; s.pc = 8; return s.tmp_4;
  case 8:
    r0 = s.retval;
    r0 = pxsim_Array__length(globals.consoleStrings___3477);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > globals.consoleLines___3490);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    s.tmp_2 = helpers_arraySplice__P101_mk(s);
    s.tmp_2.arg0 = globals.consoleStrings___3477;
    s.tmp_2.arg1 = 0;
    r0 = pxsim_Array__length(globals.consoleStrings___3477);
    s.tmp_3 = r0;
    r0 = (s.tmp_3 - globals.consoleLines___3490);
    s.tmp_2.arg2 = r0;
    s.callLocIdx = 74; s.pc = 11; return s.tmp_2;
  case 11:
    r0 = s.retval;
  case 5:
  case 6:
  case 7:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_consoleOverlay_listener__P3512.info = {"start":787,"length":571,"line":26,"column":4,"endLine":42,"endColumn":5,"fileName":"pxt_modules/game---light/console.ts","functionName":"listener","argumentNames":["priority","text"]}

function game_consoleOverlay_listener__P3512_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_consoleOverlay_listener__P3512, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function forEach_inline__P6589(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
forEach_inline__P6589.info = {"start":985,"length":14,"line":32,"column":20,"endLine":32,"endColumn":34,"fileName":"pxt_modules/game---light/console.ts","functionName":"inline","argumentNames":["line"]}

function forEach_inline__P6589_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: forEach_inline__P6589, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }




function game_consoleOverlay_listener_inline__P6594(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.j___6596 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.j___6596 = (0);
  case 1:
    s.tmp_1 = r0 = s.j___6596;
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_3 = r0 = globals.consoleStrings___3477;
    s.tmp_5 = helpers_stringSlice__P120_mk(s);
    s.tmp_5.arg0 = s.arg0;
    s.tmp_5.arg1 = s.j___6596;
    r0 = (s.j___6596 + globals.consoleColumns___3500);
    s.tmp_5.arg2 = r0;
    s.callLocIdx = 72; s.pc = 3; return s.tmp_5;
  case 3:
    r0 = s.retval;
    s.tmp_4 = r0;
    r0 = pxsim_Array__push(s.tmp_3, s.tmp_4);
    r0 = (s.j___6596 + globals.consoleColumns___3500);
    s.j___6596 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
game_consoleOverlay_listener_inline__P6594.info = {"start":1022,"length":189,"line":33,"column":21,"endLine":37,"endColumn":13,"fileName":"pxt_modules/game---light/console.ts","functionName":"inline","argumentNames":["line"]}

function game_consoleOverlay_listener_inline__P6594_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: game_consoleOverlay_listener_inline__P6594, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  j___6596: undefined,
  arg0: undefined,
} }




function helpers_stringSplit__P123(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.A___6628 = undefined;
    s.lim___6630 = undefined;
    s.s___6646 = undefined;
    s.p___6649 = undefined;
    s.R___6650 = undefined;
    s.z___6664 = undefined;
    s.T___6677 = undefined;
    s.q___6678 = undefined;
    s.e___6684 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.A___6628 = (r0);
    s.lim___6630 = (0);
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (536870912 - 1);
    s.lim___6630 = (r0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.lim___6630 = (0);
    { step = 3; continue; }
  case 2:
    r0 = (s.arg2 | 0);
    s.lim___6630 = (r0);
  case 3:
  case 4:
    r0 = pxsim_String_.length(s.arg0);
    s.s___6646 = (r0);
    s.p___6649 = (0);
    s.R___6650 = (s.arg1);
    r0 = (s.lim___6630 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.A___6628;
    { step = 21; continue; }
  case 5:
  case 6:
    r0 = (s.arg1 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_Array_.setAt(s.A___6628, 0, s.arg0);
    r0 = s.A___6628;
    { step = 21; continue; }
  case 7:
  case 8:
    r0 = (s.s___6646 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_1 = helpers_splitMatch__P3279_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_1.arg2 = s.R___6650;
    s.callLocIdx = 3; s.pc = 22; return s.tmp_1;
  case 22:
    r0 = s.retval;
    s.z___6664 = (r0);
    r0 = (s.z___6664 > -1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = s.A___6628;
    { step = 21; continue; }
  case 9:
  case 10:
    r0 = pxsim_Array_.setAt(s.A___6628, 0, s.arg0);
    r0 = s.A___6628;
    { step = 21; continue; }
  case 11:
  case 12:
    s.q___6678 = (s.p___6649);
  case 13:
    r0 = (s.q___6678 != s.s___6646);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    s.tmp_1 = helpers_splitMatch__P3279_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.q___6678;
    s.tmp_1.arg2 = s.R___6650;
    s.callLocIdx = 4; s.pc = 23; return s.tmp_1;
  case 23:
    r0 = s.retval;
    s.e___6684 = (r0);
    r0 = (s.e___6684 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.q___6678 + 1);
    s.q___6678 = (r0);
    { step = 19; continue; }
  case 14:
    r0 = (s.e___6684 == s.p___6649);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    r0 = (s.q___6678 + 1);
    s.q___6678 = (r0);
    { step = 18; continue; }
  case 15:
    s.tmp_0 = helpers_stringSlice__P120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___6649;
    s.tmp_0.arg2 = s.q___6678;
    s.callLocIdx = 5; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.T___6677 = (r0);
    r0 = pxsim_Array__push(s.A___6628, s.T___6677);
    r0 = pxsim_Array__length(s.A___6628);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == s.lim___6630);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    r0 = s.A___6628;
    { step = 21; continue; }
  case 16:
  case 17:
    s.p___6649 = (s.e___6684);
    s.q___6678 = (s.p___6649);
  case 18:
  case 19:
    { step = 13; continue; }
  case 20:
    s.tmp_0 = helpers_stringSlice__P120_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___6649;
    s.tmp_0.arg2 = s.q___6678;
    s.callLocIdx = 6; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    s.T___6677 = (r0);
    r0 = pxsim_Array__push(s.A___6628, s.T___6677);
    r0 = s.A___6628;
  case 21:
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSplit__P123.info = {"start":12930,"length":1319,"line":435,"column":4,"endLine":479,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"stringSplit","argumentNames":["S","separator","limit"]}

function helpers_stringSplit__P123_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSplit__P123, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  A___6628: undefined,
  lim___6630: undefined,
  s___6646: undefined,
  p___6649: undefined,
  R___6650: undefined,
  z___6664: undefined,
  T___6677: undefined,
  q___6678: undefined,
  e___6684: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function helpers_splitMatch__P3279(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___6729 = undefined;
    s.s___6732 = undefined;
    s.i___6742 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg2);
    s.r___6729 = (r0);
    r0 = pxsim_String_.length(s.arg0);
    s.s___6732 = (r0);
    r0 = (s.arg1 + s.r___6729);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > s.s___6732);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 1:
  case 2:
    s.i___6742 = (0);
  case 3:
    r0 = (s.i___6742 < s.r___6729);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = (s.arg1 + s.i___6742);
    s.tmp_4 = r0;
    r0 = pxsim_String_.charAt(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_String_.charAt(s.arg2, s.i___6742);
    s.tmp_5 = r0;
    r0 = (s.tmp_2 != s.tmp_5);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___6742 + 1);
    s.i___6742 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = (s.arg1 + s.r___6729);
  case 7:
    return leave(s, r0)
  default: oops()
} } }
helpers_splitMatch__P3279.info = {"start":14255,"length":289,"line":481,"column":4,"endLine":490,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"splitMatch","argumentNames":["S","q","R"]}

function helpers_splitMatch__P3279_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_splitMatch__P3279, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  r___6729: undefined,
  s___6732: undefined,
  i___6742: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function helpers_arrayFilter__P111(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___6395 = undefined;
    s.len___6397 = undefined;
    s.i___6400 = undefined;
    s.v___6405 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___6395 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___6397 = (r0);
    s.i___6400 = (0);
  case 1:
    r0 = (s.i___6400 < s.len___6397);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___6400);
    s.v___6405 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___6405;
    s.tmp_1.arg1 = s.i___6400;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 1; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__push(s.res___6395, s.v___6405);
  case 2:
  case 3:
    r0 = (s.i___6400 + 1);
    s.i___6400 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.res___6395;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFilter__P111.info = {"start":7706,"length":317,"line":262,"column":4,"endLine":270,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayFilter","argumentNames":["arr","callbackfn"]}

function helpers_arrayFilter__P111_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFilter__P111, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___6395: undefined,
  len___6397: undefined,
  i___6400: undefined,
  v___6405: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function helpers_arrayForEach__P110(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___6765 = undefined;
    s.i___6768 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__length(s.arg0);
    s.len___6765 = (r0);
    s.i___6768 = (0);
  case 1:
    r0 = (s.i___6768 < s.len___6765);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___6768);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = s.i___6768;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 0; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    r0 = (s.i___6768 + 1);
    s.i___6768 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayForEach__P110.info = {"start":7450,"length":250,"line":255,"column":4,"endLine":260,"endColumn":5,"fileName":"pxt_modules/base/pxt-helpers.ts","functionName":"arrayForEach","argumentNames":["arr","callbackfn"]}

function helpers_arrayForEach__P110_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayForEach__P110, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  len___6765: undefined,
  i___6768: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function console_addListener__P391(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array_.indexOf(globals.listeners___3334, s.arg0, undefined);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > -1);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    { step = 5; continue; }
  case 3:
  case 4:
    r0 = pxsim_Array__push(globals.listeners___3334, s.arg0);
  case 5:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
console_addListener__P391.info = {"start":3632,"length":197,"line":123,"column":4,"endLine":126,"endColumn":5,"fileName":"pxt_modules/base/console.ts","functionName":"addListener","argumentNames":["listener"]}

function console_addListener__P391_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: console_addListener__P391, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
} }




function listeners_inline__P3333(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.__log(s.arg0, s.arg1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
listeners_inline__P3333.info = {"start":534,"length":85,"line":25,"column":8,"endLine":25,"endColumn":93,"fileName":"pxt_modules/base/console.ts","functionName":"inline","argumentNames":["priority","text"]}

function listeners_inline__P3333_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: listeners_inline__P3333, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
  arg1: undefined,
} }




function Scene_constructor__P1794(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, Scene__C1792_VT)) failedCast(r0, Scene__C1792_VT);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_Array__mk();
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["buttonEventHandlers"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
Scene_constructor__P1794.info = {"start":615,"length":59,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/game---light/compat.ts","functionName":"inline","argumentNames":["this"]}

function Scene_constructor__P1794_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Scene_constructor__P1794, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }




function settings_initScopes__P3449(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.rn___6809 = undefined;
    s.tmp_1 = settings_runNumber__P1752_mk(s);
    s.callLocIdx = 49; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
    s.rn___6809 = (r0);
    s.tmp_0 = settings_writeNumber__P1757_mk(s);
    s.tmp_0.arg0 = globals.RUN_KEY___3437;
    s.tmp_0.arg1 = s.rn___6809;
    s.callLocIdx = 50; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    r0 = pxsim.control.deviceSerialNumber();
    s.tmp_1 = r0;
    r0 = (s.tmp_1 & 2147483647);
    s.tmp_0 = r0;
    r0 = pxsim_pxtcore.seedAddRandom(s.tmp_0);
    r0 = pxsim_pxtcore.seedAddRandom(s.rn___6809);
    s.tmp_0 = settings_setScope__P3448_mk(s);
    r0 = pxsim_pxtcore.programName();
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 51; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_initScopes__P3449.info = {"start":1104,"length":230,"line":41,"column":4,"endLine":49,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"initScopes","argumentNames":[]}

function settings_initScopes__P3449_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_initScopes__P3449, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  rn___6809: undefined,
} }




function settings_setScope__P3448(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.currScope___6838 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_String_.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_2 > 100);
  case 2:
    // jmp value (already in r0)
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    if (!r0) { step = 3; continue; }
    r0 = pxsim_pxtrt.panic(922);
  case 3:
  case 4:
    s.tmp_0 = settings_readString__P1760_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3438;
    s.callLocIdx = 47; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    s.currScope___6838 = (r0);
    r0 = (s.currScope___6838 != s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.settings._userClean();
    s.tmp_0 = settings_writeString__P1755_mk(s);
    s.tmp_0.arg0 = globals.SCOPE_KEY___3438;
    s.tmp_0.arg1 = s.arg0;
    s.callLocIdx = 48; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
  case 5:
  case 6:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_setScope__P3448.info = {"start":826,"length":272,"line":31,"column":4,"endLine":39,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"setScope","argumentNames":["scope"]}

function settings_setScope__P3448_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_setScope__P3448, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  currScope___6838: undefined,
  arg0: undefined,
} }




function settings_readString__P1760(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___6869 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___6869 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___6869);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 3; continue; }
    { step = 2; continue; }
  case 1:
    r0 = pxsim.BufferMethods.toString(s.buf___6869);
    { step = 3; continue; }
  case 2:
    r0 = undefined;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
settings_readString__P1760.info = {"start":2827,"length":177,"line":110,"column":4,"endLine":116,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readString","argumentNames":["key"]}

function settings_readString__P1760_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readString__P1760, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___6869: undefined,
  arg0: undefined,
} }




function settings_readBuffer__P1759(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
settings_readBuffer__P1759.info = {"start":2694,"length":72,"line":103,"column":4,"endLine":105,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readBuffer","argumentNames":["key"]}

function settings_readBuffer__P1759_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readBuffer__P1759, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function settings_writeString__P1755(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = settings_writeBuffer__P1754_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim.control.createBufferFromUTF8(s.arg1);
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 53; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeString__P1755.info = {"start":1895,"length":125,"line":75,"column":4,"endLine":77,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeString","argumentNames":["key","value"]}

function settings_writeString__P1755_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeString__P1755, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function settings_writeBuffer__P1754(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._set(s.arg0, s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.settings._userClean();
    r0 = pxsim_pxtrt.panic(920);
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeBuffer__P1754.info = {"start":1538,"length":290,"line":63,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeBuffer","argumentNames":["key","value"]}

function settings_writeBuffer__P1754_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeBuffer__P1754, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function settings_writeNumber__P1757(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    s.tmp_1 = settings_writeBuffer__P1754_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_2 = msgpack_packNumberArray__P191_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.callLocIdx = 54; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 55; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
settings_writeNumber__P1757.info = {"start":2265,"length":122,"line":89,"column":4,"endLine":91,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"writeNumber","argumentNames":["key","value"]}

function settings_writeNumber__P1757_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_writeNumber__P1757, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function msgpack_packNumberArray__P191(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.off___6891 = undefined;
    s.n___6893 = undefined;
    s.unnamed60___U2 = undefined;
    s.unnamed61___U3 = undefined;
    s.buf___6903 = undefined;
    s.n___6909 = undefined;
    s.unnamed62___U6 = undefined;
    s.unnamed63___U7 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.off___6891 = (0);
    s.n___6893 = (undefined);
    s.unnamed60___U2 = (s.arg0);
    s.unnamed61___U3 = (0);
  case 1:
    s.tmp_0 = r0 = s.unnamed61___U3;
    r0 = pxsim_Array__length(s.unnamed60___U2);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__getAt(s.unnamed60___U2, s.unnamed61___U3);
    s.n___6893 = (r0);
    s.tmp_2 = r0 = s.off___6891;
    s.tmp_4 = msgpack_packNumberCore__P3293_mk(s);
    s.tmp_4.arg0 = null;
    s.tmp_4.arg1 = s.off___6891;
    s.tmp_4.arg2 = s.n___6893;
    s.callLocIdx = 15; s.pc = 5; return s.tmp_4;
  case 5:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___6891 = (r0);
    r0 = (s.unnamed61___U3 + 1);
    s.unnamed61___U3 = (r0);
    { step = 1; continue; }
  case 2:
    s.unnamed60___U2 = (undefined);
    r0 = pxsim.control.createBuffer(s.off___6891);
    s.buf___6903 = (r0);
    s.off___6891 = (0);
    s.n___6909 = (undefined);
    s.unnamed62___U6 = (s.arg0);
    s.unnamed63___U7 = (0);
  case 3:
    s.tmp_0 = r0 = s.unnamed63___U7;
    r0 = pxsim_Array__length(s.unnamed62___U6);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.unnamed62___U6, s.unnamed63___U7);
    s.n___6909 = (r0);
    s.tmp_2 = r0 = s.off___6891;
    s.tmp_4 = msgpack_packNumberCore__P3293_mk(s);
    s.tmp_4.arg0 = s.buf___6903;
    s.tmp_4.arg1 = s.off___6891;
    s.tmp_4.arg2 = s.n___6909;
    s.callLocIdx = 16; s.pc = 6; return s.tmp_4;
  case 6:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = (s.tmp_2 + s.tmp_3);
    s.off___6891 = (r0);
    r0 = (s.unnamed63___U7 + 1);
    s.unnamed63___U7 = (r0);
    { step = 3; continue; }
  case 4:
    s.unnamed62___U6 = (undefined);
    r0 = s.buf___6903;
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberArray__P191.info = {"start":3427,"length":330,"line":117,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberArray","argumentNames":["nums"]}

function msgpack_packNumberArray__P191_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberArray__P191, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  off___6891: undefined,
  n___6893: undefined,
  unnamed60___U2: undefined,
  unnamed61___U3: undefined,
  buf___6903: undefined,
  n___6909: undefined,
  unnamed62___U6: undefined,
  unnamed63___U7: undefined,
  arg0: undefined,
} }




function msgpack_packNumberCore__P3293(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tag___6923 = undefined;
    s.fmt___6966 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tag___6923 = (203);
    s.tmp_1 = r0 = s.arg2;
    r0 = (s.arg2 << 0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 == s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    s.tmp_3 = r0 = s.arg2;
    r0 = (s.arg2 >>> 0);
    s.tmp_4 = r0;
    r0 = (s.tmp_3 == s.tmp_4);
  case 2:
    // jmp value (already in r0)
    s.tmp_5 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_5);
    if (!r0) { step = 19; continue; }
    r0 = (-31 <= s.arg2);
    s.tmp_6 = r0;
    r0 = pxsim_numops_toBool(s.tmp_6);
    if (r0) { step = 3; continue; }
    r0 = s.tmp_6;
    { step = 4; continue; }
  case 3:
    r0 = (s.arg2 <= 127);
  case 4:
    // jmp value (already in r0)
    s.tmp_7 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_7);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 5; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.arg2);
  case 5:
  case 6:
    r0 = 1;
    { step = 23; continue; }
    { step = 18; continue; }
  case 7:
    r0 = (0 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    r0 = (s.arg2 <= 255);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 8; continue; }
    s.tag___6923 = (204);
    { step = 11; continue; }
  case 8:
    r0 = (s.arg2 <= 65535);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    s.tag___6923 = (205);
    { step = 10; continue; }
  case 9:
    s.tag___6923 = (206);
  case 10:
  case 11:
    { step = 17; continue; }
  case 12:
    r0 = (-127 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    s.tag___6923 = (208);
    { step = 16; continue; }
  case 13:
    r0 = (-32767 <= s.arg2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    s.tag___6923 = (209);
    { step = 15; continue; }
  case 14:
    s.tag___6923 = (210);
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    s.tmp_0 = msgpack_tagFormat__P3292_mk(s);
    s.tmp_0.arg0 = s.tag___6923;
    s.callLocIdx = 11; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.fmt___6966 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    if (!r0) { step = 21; continue; }
    r0 = pxsim.BufferMethods.setByte(s.arg0, s.arg1, s.tag___6923);
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.fmt___6966;
    r0 = (s.arg1 + 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.setNumber(s.tmp_0, s.tmp_1, s.tmp_2, s.arg2);
  case 21:
  case 22:
    s.tmp_1 = pins_sizeOf__P182_mk(s);
    s.tmp_1.arg0 = s.fmt___6966;
    s.callLocIdx = 12; s.pc = 25; return s.tmp_1;
  case 25:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 + 1);
  case 23:
    return leave(s, r0)
  default: oops()
} } }
msgpack_packNumberCore__P3293.info = {"start":1632,"length":951,"line":56,"column":4,"endLine":86,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"packNumberCore","argumentNames":["buf","offset","num"]}

function msgpack_packNumberCore__P3293_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_packNumberCore__P3293, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  tmp_6: undefined,
  tmp_7: undefined,
  tag___6923: undefined,
  fmt___6966: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }




function msgpack_tagFormat__P3292(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(203, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(204, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(205, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(206, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(208, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(209, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(210, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = s.tmp_0;
    { step = 8; continue; }
  case 1:
    r0 = 16;
    { step = 9; continue; }
  case 2:
    r0 = 7;
    { step = 9; continue; }
  case 3:
    r0 = 9;
    { step = 9; continue; }
  case 4:
    r0 = 12;
    { step = 9; continue; }
  case 5:
    r0 = 6;
    { step = 9; continue; }
  case 6:
    r0 = 8;
    { step = 9; continue; }
  case 7:
    r0 = 10;
    { step = 9; continue; }
  case 8:
    r0 = null;
    { step = 9; continue; }
    r0 = undefined;
  case 9:
    return leave(s, r0)
  default: oops()
} } }
msgpack_tagFormat__P3292.info = {"start":1145,"length":481,"line":42,"column":4,"endLine":54,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"tagFormat","argumentNames":["tag"]}

function msgpack_tagFormat__P3292_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_tagFormat__P3292, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function pins_sizeOf__P182(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Buffer_sizeOfNumberFormat__P222_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 10; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P182.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P182_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P182, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function Buffer_sizeOfNumberFormat__P222(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = 1;
    { step = 18; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = 2;
    { step = 18; continue; }
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = 4;
    { step = 18; continue; }
  case 15:
  case 16:
    r0 = 8;
    { step = 18; continue; }
  case 17:
    r0 = 0;
  case 18:
    return leave(s, r0)
  default: oops()
} } }
Buffer_sizeOfNumberFormat__P222.info = {"start":14912,"length":856,"line":508,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P222_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P222, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function settings_runNumber__P1752(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_1 = settings_readNumber__P1762_mk(s);
    s.tmp_1.arg0 = globals.RUN_KEY___3437;
    s.callLocIdx = 46; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = 0;
  case 2:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = s.tmp_2;
    return leave(s, r0)
  default: oops()
} } }
settings_runNumber__P1752.info = {"start":745,"length":75,"line":27,"column":4,"endLine":29,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"runNumber","argumentNames":[]}

function settings_runNumber__P1752_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_runNumber__P1752, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
} }




function settings_readNumber__P1762(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___7025 = undefined;
    s.nums___7032 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.settings._get(s.arg0);
    s.buf___7025 = (r0);
    r0 = pxsim_numops_toBoolDecr(s.buf___7025);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = undefined;
    { step = 7; continue; }
    { step = 6; continue; }
  case 1:
    s.tmp_2 = msgpack_unpackNumberArray__P190_mk(s);
    s.tmp_2.arg0 = s.buf___7025;
    s.tmp_2.arg1 = 0;
    s.callLocIdx = 58; s.pc = 8; return s.tmp_2;
  case 8:
    r0 = s.retval;
    s.nums___7032 = (r0);
    s.tmp_0 = r0 = s.nums___7032;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = pxsim_Array__length(s.nums___7032);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 >= 1);
  case 3:
    // jmp value (already in r0)
    s.tmp_2 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_2);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.nums___7032, 0);
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = undefined;
    { step = 7; continue; }
  case 6:
    r0 = undefined;
  case 7:
    return leave(s, r0)
  default: oops()
} } }
settings_readNumber__P1762.info = {"start":3283,"length":313,"line":131,"column":4,"endLine":141,"endColumn":5,"fileName":"pxt_modules/settings/settings.ts","functionName":"readNumber","argumentNames":["key"]}

function settings_readNumber__P1762_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: settings_readNumber__P1762, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___7025: undefined,
  nums___7032: undefined,
  arg0: undefined,
} }




function msgpack_unpackNumberArray__P190(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___7045 = undefined;
    s.fmt___7052 = undefined;
    s.v___7061 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___7045 = (r0);
  case 1:
    s.tmp_1 = r0 = s.arg1;
    r0 = pxsim.BufferMethods.length(s.arg0);
    s.tmp_2 = r0;
    r0 = (s.tmp_1 < s.tmp_2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 10; continue; }
    s.tmp_3 = r0 = s.arg1;
    r0 = (s.tmp_3 + 1);
    s.arg1 = (r0);
    s.tmp_4 = msgpack_tagFormat__P3292_mk(s);
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.tmp_3);
    s.tmp_4.arg0 = r0;
    s.callLocIdx = 13; s.pc = 12; return s.tmp_4;
  case 12:
    r0 = s.retval;
    s.fmt___7052 = (r0);
    r0 = (s.fmt___7052 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_1 = r0 = s.arg0;
    r0 = (s.arg1 - 1);
    s.tmp_2 = r0;
    r0 = pxsim.BufferMethods.getNumber(s.tmp_1, 6, s.tmp_2);
    s.v___7061 = (r0);
    r0 = (-31 <= s.v___7061);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = s.tmp_0;
    { step = 3; continue; }
  case 2:
    r0 = (s.v___7061 <= 127);
  case 3:
    // jmp value (already in r0)
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__push(s.res___7045, s.v___7061);
    { step = 5; continue; }
  case 4:
    r0 = null;
    { step = 11; continue; }
  case 5:
    { step = 7; continue; }
  case 6:
    s.tmp_0 = r0 = s.res___7045;
    r0 = pxsim.BufferMethods.getNumber(s.arg0, s.fmt___7052, s.arg1);
    s.tmp_1 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.tmp_1);
    s.tmp_0 = r0 = s.arg1;
    s.tmp_2 = pins_sizeOf__P182_mk(s);
    s.tmp_2.arg0 = s.fmt___7052;
    s.callLocIdx = 14; s.pc = 13; return s.tmp_2;
  case 13:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.arg1 = (r0);
  case 7:
  case 8:
    r0 = pxsim.BufferMethods.getByte(s.arg0, s.arg1);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 === 193);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = (s.arg1 + 1);
    s.arg1 = (r0);
    { step = 8; continue; }
  case 9:
    { step = 1; continue; }
  case 10:
    r0 = s.res___7045;
  case 11:
    return leave(s, r0)
  default: oops()
} } }
msgpack_unpackNumberArray__P190.info = {"start":2650,"length":669,"line":91,"column":4,"endLine":111,"endColumn":5,"fileName":"pxt_modules/base/buffer.ts","functionName":"unpackNumberArray","argumentNames":["buf","offset"]}

function msgpack_unpackNumberArray__P190_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: msgpack_unpackNumberArray__P190, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  res___7045: undefined,
  fmt___7052: undefined,
  v___7061: undefined,
  arg0: undefined,
  arg1: undefined,
} }




function control___screen_setupUpdate__P1687(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    globals.__updated___3404 = (true);
    globals.__update___3402 = (s.arg0);
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = s.arg0;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 40; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_setupUpdate__P1687.info = {"start":198,"length":125,"line":10,"column":4,"endLine":14,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"setupUpdate","argumentNames":["update"]}

function control___screen_setupUpdate__P1687_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_setupUpdate__P1687, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }




function _screen_internal_getScreenHeight__P1730(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.getConfig(2103, s.arg0);
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_getScreenHeight__P1730.info = {"start":960,"length":127,"line":28,"column":4,"endLine":30,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"getScreenHeight","argumentNames":["defl"]}

function _screen_internal_getScreenHeight__P1730_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_getScreenHeight__P1730, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function _screen_internal_getScreenWidth__P1729(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore.getConfig(2102, s.arg0);
    return leave(s, r0)
  default: oops()
} } }
_screen_internal_getScreenWidth__P1729.info = {"start":810,"length":125,"line":23,"column":4,"endLine":25,"endColumn":5,"fileName":"pxt_modules/screen/targetoverrides.ts","functionName":"getScreenWidth","argumentNames":["defl"]}

function _screen_internal_getScreenWidth__P1729_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _screen_internal_getScreenWidth__P1729, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function control___screen_update__P1686(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.__update___3402);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = globals.__update___3402;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 39; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    globals.__updated___3404 = (true);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control___screen_update__P1686.info = {"start":90,"length":102,"line":4,"column":4,"endLine":8,"endColumn":5,"fileName":"pxt_modules/screen/frame.ts","functionName":"update","argumentNames":[]}

function control___screen_update__P1686_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control___screen_update__P1686, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }




function pause__P421(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    setupResume(s, 1);
    pxsim.loops.pause(s.arg0);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pause__P421.info = {"start":267,"length":57,"line":8,"column":0,"endLine":10,"endColumn":1,"fileName":"pxt_modules/base/pause.ts","functionName":"pause","argumentNames":["ms"]}

function pause__P421_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pause__P421, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }



function if_handler_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_condition_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_3_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }


function if_charHeight_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_charWidth_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }

const Scene__C1792_VT = mkVTable({
  name: "Scene",
  numFields: 1,
  classNo: 16,
  lastSubtypeNo: 16,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "buttonEventHandlers": null,
    "set/buttonEventHandlers": null,
  },
});
const control_EventContext__C403_VT = mkVTable({
  name: "EventContext",
  numFields: 10,
  classNo: 17,
  lastSubtypeNo: 17,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "handlers": null,
    "set/handlers": null,
    "frameCallbacks": null,
    "set/frameCallbacks": null,
    "frameWorker": null,
    "set/frameWorker": null,
    "framesInSample": null,
    "set/framesInSample": null,
    "timeInSample": null,
    "set/timeInSample": null,
    "lastPerfDump": null,
    "set/lastPerfDump": null,
    "deltaTimeMillis": null,
    "set/deltaTimeMillis": null,
    "prevTimeMillis": null,
    "set/prevTimeMillis": null,
    "idleCallbacks": null,
    "set/idleCallbacks": null,
    "runningCallbacks": null,
    "set/runningCallbacks": null,
    "runCallbacks": control_EventContext_runCallbacks__P3353,
    "registerFrameCallbacks": control_EventContext_registerFrameCallbacks__P3354,
    "unregister": control_EventContext_unregister__P410,
    "registerFrameHandler": control_EventContext_registerFrameHandler__P411,
    "registerHandler": control_EventContext_registerHandler__P413,
  },
});
const control_EventHandler__C3348_VT = mkVTable({
  name: "EventHandler",
  numFields: 4,
  classNo: 18,
  lastSubtypeNo: 18,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "src": null,
    "set/src": null,
    "value": null,
    "set/value": null,
    "handler": null,
    "set/handler": null,
    "flags": null,
    "set/flags": null,
    "register": control_EventHandler_register__P3349,
    "unregister": control_EventHandler_unregister__P3350,
  },
});
const control_FrameCallback__C400_VT = mkVTable({
  name: "FrameCallback",
  numFields: 2,
  classNo: 19,
  lastSubtypeNo: 19,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "order": null,
    "set/order": null,
    "handler": null,
    "set/handler": null,
  },
});
const control_PollEvent__C3327_VT = mkVTable({
  name: "PollEvent",
  numFields: 6,
  classNo: 20,
  lastSubtypeNo: 20,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "eid": null,
    "set/eid": null,
    "vid": null,
    "set/vid": null,
    "start": null,
    "set/start": null,
    "timeOut": null,
    "set/timeOut": null,
    "condition": null,
    "set/condition": null,
    "once": null,
    "set/once": null,
  },
});

const breakpoints = setupDebugger(1, ["factories___5302"])

return _main___P7820
})

/* Generated by the Nim Compiler v1.2.6 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI1172049 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI11871037 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI11871036 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI11871035 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI11708017 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI11871086 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI11871083 = {size: 0,kind: 24,base: null,node: null,finalizer: null};
var NTI11871080 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI1172035 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172033 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172037 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172053 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1166045 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI1325043 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI1171808 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172086 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1166016 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI1172081 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI1172017 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172019 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1172041 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI1166014 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI1172041 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172041.node = NNI1172041;
var NNI1172019 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172019.node = NNI1172019;
NTI1172081.base = NTI1172017;
NTI1172086.base = NTI1172017;
var NNI1172017 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI1172081, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI1166016, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI1166014, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI1166014, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI1172086, name: "up", sons: null}]};
NTI1172017.node = NNI1172017;
var NNI1171808 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1171808.node = NNI1171808;
NTI1172017.base = NTI1171808;
NTI1172019.base = NTI1172017;
NTI1172041.base = NTI1172019;
var NNI1325043 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI1166016, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI1166045, name: "Field1", sons: null}]};
NTI1325043.node = NNI1325043;
var NNI1172053 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172053.node = NNI1172053;
NTI1172053.base = NTI1172019;
var NNI1172037 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172037.node = NNI1172037;
var NNI1172033 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172033.node = NNI1172033;
NTI1172033.base = NTI1172019;
NTI1172037.base = NTI1172033;
var NNI1172035 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172035.node = NNI1172035;
NTI1172035.base = NTI1172033;
var NNI11871035 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI11871036, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI11871037, name: "Field1", sons: null}]};
NTI11871035.node = NNI11871035;
var NNI11871086 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI11708017, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI11871035, name: "Field1", sons: null}]};
NTI11871086.node = NNI11871086;
NTI11871083.base = NTI11871086;
var NNI11871080 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "data", len: 0, typ: NTI11871083, name: "data", sons: null}, 
{kind: 1, offset: "counter", len: 0, typ: NTI1166045, name: "counter", sons: null}]};
NTI11871080.node = NNI11871080;
var NNI1172049 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI1172049.node = NNI1172049;
NTI1172049.base = NTI1172019;
function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);
function nimCopy(dest_1405023, src_1405024, ti_1405025) {
  var result_1410219 = null;

    switch (ti_1405025.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(is_fat_pointer_1400401(ti_1405025))) {
      result_1410219 = src_1405024;
      }
      else {
        result_1410219 = [src_1405024[0], src_1405024[1]];
      }
      
      break;
    case 19:
            if (dest_1405023 === null || dest_1405023 === undefined) {
        dest_1405023 = {};
      }
      else {
        for (var key in dest_1405023) { delete dest_1405023[key]; }
      }
      for (var key in src_1405024) { dest_1405023[key] = src_1405024[key]; }
      result_1410219 = dest_1405023;
    
      break;
    case 18:
    case 17:
      if (!((ti_1405025.base == null))) {
      result_1410219 = nimCopy(dest_1405023, src_1405024, ti_1405025.base);
      }
      else {
      if ((ti_1405025.kind == 17)) {
      result_1410219 = (dest_1405023 === null || dest_1405023 === undefined) ? {m_type: ti_1405025} : dest_1405023;
      }
      else {
        result_1410219 = (dest_1405023 === null || dest_1405023 === undefined) ? {} : dest_1405023;
      }
      }
      nimCopyAux(result_1410219, src_1405024, ti_1405025.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_1405024 === null) {
        result_1410219 = null;
      }
      else {
        if (dest_1405023 === null || dest_1405023 === undefined) {
          dest_1405023 = new Array(src_1405024.length);
        }
        else {
          dest_1405023.length = src_1405024.length;
        }
        result_1410219 = dest_1405023;
        for (var i = 0; i < src_1405024.length; ++i) {
          result_1410219[i] = nimCopy(result_1410219[i], src_1405024[i], ti_1405025.base);
        }
      }
    
      break;
    case 28:
            if (src_1405024 !== null) {
        result_1410219 = src_1405024.slice(0);
      }
    
      break;
    default: 
      result_1410219 = src_1405024;
      break;
    }

  return result_1410219;

}
function makeNimstrLit(c_1390062) {
      var ln = c_1390062.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_1390062.charCodeAt(i);
  }
  return result;
  

  
}
function arrayConstr(len_1415067, value_1415068, typ_1415069) {
        var result = new Array(len_1415067);
    for (var i = 0; i < len_1415067; ++i) result[i] = nimCopy(null, value_1415068, typ_1415069);
    return result;
  

  
}
function cstrToNimstr(c_1390079) {
      var ln = c_1390079.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_1390079.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_1390079.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
function toJSStr(s_1390096) {
                    var Tmp5;
            var Tmp7;

  var result_1390097 = null;

    var res_1390170 = new_seq_1390128((s_1390096 != null ? s_1390096.length : 0));
    var i_1390172 = 0;
    var j_1390174 = 0;
    L1: do {
        L2: while (true) {
        if (!(i_1390172 < (s_1390096 != null ? s_1390096.length : 0))) break L2;
          var c_1390175 = s_1390096[i_1390172];
          if ((c_1390175 < 128)) {
          res_1390170[j_1390174] = String.fromCharCode(c_1390175);
          i_1390172 += 1;
          }
          else {
            var helper_1390198 = new_seq_1390128(0);
            L3: do {
                L4: while (true) {
                if (!true) break L4;
                  var code_1390199 = c_1390175.toString(16);
                  if (((code_1390199 != null ? code_1390199.length : 0) == 1)) {
                  if (helper_1390198 != null) { helper_1390198.push("%0"); } else { helper_1390198 = ["%0"]; };
                  }
                  else {
                  if (helper_1390198 != null) { helper_1390198.push("%"); } else { helper_1390198 = ["%"]; };
                  }
                  
                  if (helper_1390198 != null) { helper_1390198.push(code_1390199); } else { helper_1390198 = [code_1390199]; };
                  i_1390172 += 1;
                    if (((s_1390096 != null ? s_1390096.length : 0) <= i_1390172)) Tmp5 = true; else {                      Tmp5 = (s_1390096[i_1390172] < 128);                    }                  if (Tmp5) {
                  break L3;
                  }
                  
                  c_1390175 = s_1390096[i_1390172];
                }
            } while(false);
++excHandler;
            Tmp7 = framePtr;
            try {
            res_1390170[j_1390174] = decodeURIComponent(helper_1390198.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
            framePtr = Tmp7;
            res_1390170[j_1390174] = helper_1390198.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Tmp7;
            }
          }
          
          j_1390174 += 1;
        }
    } while(false);
    if (res_1390170 === null) res_1390170 = [];
               if (res_1390170.length < j_1390174) { for (var i=res_1390170.length;i<j_1390174;++i) res_1390170.push(null); }
               else { res_1390170.length = j_1390174; };
    result_1390097 = res_1390170.join("");

  return result_1390097;

}
function raiseException(e_1355218, ename_1355219) {
    e_1355218.name = ename_1355219;
    if ((excHandler == 0)) {
    unhandledException(e_1355218);
    }
    
    e_1355218.trace = nimCopy(null, raw_write_stack_trace_1345059(), NTI1166014);
    throw e_1355218;

  
}
function chckRange(i_1420016, a_1420017, b_1420018) {
      var Tmp1;

  var result_1420019 = 0;

  BeforeRet: do {
      if (!(a_1420017 <= i_1420016)) Tmp1 = false; else {        Tmp1 = (i_1420016 <= b_1420018);      }    if (Tmp1) {
    result_1420019 = i_1420016;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_1420019;

}
function addInt(a_1395403, b_1395404) {
        var result = a_1395403 + b_1395404;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

  
}
function divInt(a_1395457, b_1395458) {
        if (b_1395458 == 0) raiseDivByZero();
    if (b_1395458 == -1 && a_1395457 == 2147483647) raiseOverflow();
    return Math.trunc(a_1395457 / b_1395458);
  

  
}
function mulInt(a_1395439, b_1395440) {
        var result = a_1395439 * b_1395440;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

  
}
function chckIndx(i_1415086, a_1415087, b_1415088) {
      var Tmp1;

  var result_1415089 = 0;

  BeforeRet: do {
      if (!(a_1415087 <= i_1415086)) Tmp1 = false; else {        Tmp1 = (i_1415086 <= b_1415088);      }    if (Tmp1) {
    result_1415089 = i_1415086;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_1415086, a_1415087, b_1415088);
    }
    
  } while (false);

  return result_1415089;

}
function subInt(a_1395421, b_1395422) {
        var result = a_1395421 - b_1395422;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

  
}
var nim_program_result = 0;
var global_raise_hook_1307018 = [null];
var local_raise_hook_1307023 = [null];
var out_of_mem_hook_1307026 = [null];
var unhandled_exception_hook_1307031 = [null];
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var state_1791005 = [{a0: 1773455756, a1: 4275166512}];
var utc_instance_11180231 = [null];
var local_instance_11180232 = [null];
var object_id_11710031 = [0];
function is_power_of_two_2270029(x_2270031) {
    var Tmp1;

  var result_2270032 = false;

  BeforeRet: do {
    if (!(0 < x_2270031)) Tmp1 = false; else {      Tmp1 = ((x_2270031 & (x_2270031 - 1)) == 0);    }    result_2270032 = Tmp1;
    break BeforeRet;
  } while (false);

  return result_2270032;

}
function is_fat_pointer_1400401(ti_1400403) {
  var result_1400404 = false;

  BeforeRet: do {
    result_1400404 = !((ConstSet1[ti_1400403.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_1400404;

}
function nimCopyAux(dest_1405028, src_1405029, n_1405031) {
    switch (n_1405031.kind) {
    case 0:
      break;
    case 1:
            dest_1405028[n_1405031.offset] = nimCopy(dest_1405028[n_1405031.offset], src_1405029[n_1405031.offset], n_1405031.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_1405031.sons.length; i++) {
      nimCopyAux(dest_1405028, src_1405029, n_1405031.sons[i]);
    }
    
      break;
    case 3:
            dest_1405028[n_1405031.offset] = nimCopy(dest_1405028[n_1405031.offset], src_1405029[n_1405031.offset], n_1405031.typ);
      for (var i = 0; i < n_1405031.sons.length; ++i) {
        nimCopyAux(dest_1405028, src_1405029, n_1405031.sons[i][1]);
      }
    
      break;
    }

  
}
function add_1307042(x_1307045, x_1307045_Idx, y_1307046) {
          if (x_1307045[x_1307045_Idx] === null) { x_1307045[x_1307045_Idx] = []; }
      var off = x_1307045[x_1307045_Idx].length;
      x_1307045[x_1307045_Idx].length += y_1307046.length;
      for (var i = 0; i < y_1307046.length; ++i) {
        x_1307045[x_1307045_Idx][off+i] = y_1307046.charCodeAt(i);
      }
    

  
}
function aux_write_stack_trace_1325038(f_1325040) {
          var Tmp3;

  var result_1325041 = [null];

    var it_1325049 = f_1325040;
    var i_1325051 = 0;
    var total_1325053 = 0;
    var temp_frames_1325060 = arrayConstr(64, {Field0: null, Field1: 0}, NTI1325043);
    L1: do {
        L2: while (true) {
          if (!!((it_1325049 == null))) Tmp3 = false; else {            Tmp3 = (i_1325051 <= 63);          }        if (!Tmp3) break L2;
          temp_frames_1325060[i_1325051].Field0 = it_1325049.procname;
          temp_frames_1325060[i_1325051].Field1 = it_1325049.line;
          i_1325051 += 1;
          total_1325053 += 1;
          it_1325049 = it_1325049.prev;
        }
    } while(false);
    L4: do {
        L5: while (true) {
        if (!!((it_1325049 == null))) break L5;
          total_1325053 += 1;
          it_1325049 = it_1325049.prev;
        }
    } while(false);
    result_1325041[0] = nimCopy(null, [], NTI1166014);
    if (!((total_1325053 == i_1325051))) {
    if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(makeNimstrLit("(")); } else { result_1325041[0] = makeNimstrLit("("); };
    if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(cstrToNimstr(((total_1325053 - i_1325051))+"")); } else { result_1325041[0] = cstrToNimstr(((total_1325053 - i_1325051))+"").slice(); };
    if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_1325041[0] = makeNimstrLit(" calls omitted) ...\x0A"); };
    }
    
    L6: do {
      var j_1340236 = 0;
      var colontmp__11955643 = 0;
      colontmp__11955643 = (i_1325051 - 1);
      var res_11955648 = colontmp__11955643;
      L7: do {
          L8: while (true) {
          if (!(0 <= res_11955648)) break L8;
            j_1340236 = res_11955648;
            add_1307042(result_1325041, 0, temp_frames_1325060[j_1340236].Field0);
            if ((0 < temp_frames_1325060[j_1340236].Field1)) {
            if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(makeNimstrLit(", line: ")); } else { result_1325041[0] = makeNimstrLit(", line: "); };
            if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(cstrToNimstr((temp_frames_1325060[j_1340236].Field1)+"")); } else { result_1325041[0] = cstrToNimstr((temp_frames_1325060[j_1340236].Field1)+"").slice(); };
            }
            
            if (result_1325041[0] != null) { result_1325041[0] = (result_1325041[0]).concat(makeNimstrLit("\x0A")); } else { result_1325041[0] = makeNimstrLit("\x0A"); };
            res_11955648 -= 1;
          }
      } while(false);
    } while(false);

  return result_1325041[0];

}
function raw_write_stack_trace_1345059() {
  var result_1345061 = null;

    if (!((framePtr == null))) {
    result_1345061 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(aux_write_stack_trace_1325038(framePtr) || []), NTI1166014);
    }
    else {
      result_1345061 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI1166014);
    }
    

  return result_1345061;

}
function new_seq_1390128(len_1390131) {
  var result_1390133 = null;

  var F={procname:"newSeq.newSeq",prev:framePtr,filename:"system.nim",line:0};
  framePtr = F;
    F.line = 643;
    result_1390133 = new Array(len_1390131); for (var i=0;i<len_1390131;++i) {result_1390133[i]=null;}  framePtr = F.prev;

  return result_1390133;

}
function unhandledException(e_1350059) {
    var buf_1350060 = [[]];
    if (!(((e_1350059.message != null ? e_1350059.message.length : 0) == 0))) {
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_1350060[0] = makeNimstrLit("Error: unhandled exception: "); };
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(e_1350059.message); } else { buf_1350060[0] = e_1350059.message.slice(); };
    }
    else {
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_1350060[0] = makeNimstrLit("Error: unhandled exception"); };
    }
    
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(makeNimstrLit(" [")); } else { buf_1350060[0] = makeNimstrLit(" ["); };
    add_1307042(buf_1350060, 0, e_1350059.name);
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(makeNimstrLit("]\x0A")); } else { buf_1350060[0] = makeNimstrLit("]\x0A"); };
    if (buf_1350060[0] != null) { buf_1350060[0] = (buf_1350060[0]).concat(raw_write_stack_trace_1345059()); } else { buf_1350060[0] = raw_write_stack_trace_1345059().slice(); };
    var cbuf_1355201 = toJSStr(buf_1350060[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_1355201);
  }
  else {
    throw cbuf_1355201;
  }
  

  
}
function sys_fatal_1267618(message_1267622) {
  var F={procname:"sysFatal.sysFatal",prev:framePtr,filename:"fatal.nim",line:0};
  framePtr = F;
    F.line = 49;
    raiseException({message: nimCopy(null, message_1267622, NTI1166014), m_type: NTI1172041, parent: null, name: null, trace: null, up: null}, "AssertionError");
  framePtr = F.prev;

  
}
function raise_assert_1267614(msg_1267616) {
  var F={procname:"assertions.raiseAssert",prev:framePtr,filename:"assertions.nim",line:0};
  framePtr = F;
    F.line = 22;
    sys_fatal_1267618(msg_1267616);
  framePtr = F.prev;

  
}
function failed_assert_impl_1267680(msg_1267682) {
  var F={procname:"assertions.failedAssertImpl",prev:framePtr,filename:"assertions.nim",line:0};
  framePtr = F;
    F.line = 29;
    raise_assert_1267614(msg_1267682);
  framePtr = F.prev;

  
}
function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI1172053, name: null, trace: null, up: null}, "RangeError");

  
}
function init_11871114(s_11871119, initial_size_11871120) {
  var F={procname:"init.init",prev:framePtr,filename:"sets.nim",line:0};
  framePtr = F;
    if (!(is_power_of_two_2270029(initial_size_11871120))) {
    F.line = 19;
    failed_assert_impl_1267680(makeNimstrLit("/home/dk/.choosenim/toolchains/nim-1.2.6/lib/pure/collections/setimpl.nim(19, 10) `isPowerOfTwo(initialSize)` "));
    }
    
    F.line = 23;
    s_11871119.counter = 0;
    F.line = 118;
    s_11871119.data = new Array(chckRange(initial_size_11871120, 0, 2147483647)); for (var i=0;i<chckRange(initial_size_11871120, 0, 2147483647);++i) {s_11871119.data[i]={Field0: 0, Field1: {Field0: 0, Field1: 0}};}  framePtr = F.prev;

  
}
function init_hash_set_11871094(initial_size_11871097) {
  var result_11871099 = [({data: null, counter: 0})];

  var F={procname:"initHashSet.initHashSet",prev:framePtr,filename:"sets.nim",line:0};
  framePtr = F;
    F.line = 137;
    init_11871114(result_11871099[0], initial_size_11871097);
  framePtr = F.prev;

  return result_11871099[0];

}
function next_power_of_two_2275014(x_2275016) {
  var result_2275017 = 0;

    result_2275017 = (x_2275016 - 1);
    result_2275017 = (result_2275017 | (result_2275017 >> 16));
    result_2275017 = (result_2275017 | (result_2275017 >> 8));
    result_2275017 = (result_2275017 | (result_2275017 >> 4));
    result_2275017 = (result_2275017 | (result_2275017 >> 2));
    result_2275017 = (result_2275017 | (result_2275017 >> 1));
    result_2275017 += (1 + ((x_2275016 <= 0) ? 1:0));

  return result_2275017;

}
function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI1172037, name: null, trace: null, up: null}, "OverflowError");

  
}
function raiseDivByZero() {
    raiseException({message: makeNimstrLit("division by zero"), parent: null, m_type: NTI1172035, name: null, trace: null, up: null}, "DivByZeroError");

  
}
function right_size_11775048(count_11775050) {
  var result_11775051 = 0;

  var F={procname:"sets.rightSize",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
    F.line = 43;
    result_11775051 = next_power_of_two_2275014(addInt(divInt(mulInt(count_11775050, 3), 2), 4));
  framePtr = F.prev;

  return result_11775051;

}
function raiseIndexError(i_1375047, a_1375048, b_1375049) {
    var Tmp1;

    if ((b_1375049 < a_1375048)) {
    Tmp1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Tmp1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_1375047)+"") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_1375048)+"") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_1375049)+"") || []);
    }
    
    raiseException({message: nimCopy(null, Tmp1, NTI1166014), parent: null, m_type: NTI1172049, name: null, trace: null, up: null}, "IndexError");

  
}
function HEX21HEX26_11708031(h_11708033, val_11708034) {
  var result_11708035 = 0;

  var F={procname:"hashes.!&",prev:framePtr,filename:"hashes.nim",line:0};
  framePtr = F;
    F.line = 56;
    var h_11708036 = (h_11708033 >>> 0);
    F.line = 57;
    var val_11708037 = (val_11708034 >>> 0);
    F.line = 58;
    var res_11708038 = ((h_11708036 + val_11708037) >>> 0);
    F.line = 59;
    res_11708038 = ((res_11708038 + (res_11708038 << 10)) >>> 0);
    F.line = 60;
    res_11708038 = (res_11708038 ^ ((res_11708038 >>> 0) >>> 6));
    F.line = 61;
    result_11708035 = (res_11708038|0);
  framePtr = F.prev;

  return result_11708035;

}
function hash_11710440(x_11710443) {
  var result_11710444 = 0;

  var F={procname:"hash.hash",prev:framePtr,filename:"hashes.nim",line:0};
  framePtr = F;
    F.line = 116;
    result_11710444 = x_11710443;
  framePtr = F.prev;

  return result_11710444;

}
function HEX21HEX24_11708066(h_11708068) {
  var result_11708069 = 0;

  var F={procname:"hashes.!$",prev:framePtr,filename:"hashes.nim",line:0};
  framePtr = F;
    F.line = 67;
    var h_11708070 = (h_11708068 >>> 0);
    F.line = 68;
    var res_11708078 = ((h_11708070 + (h_11708070 << 3)) >>> 0);
    F.line = 69;
    res_11708078 = (res_11708078 ^ ((res_11708078 >>> 0) >>> 11));
    F.line = 70;
    res_11708078 = ((res_11708078 + (res_11708078 << 15)) >>> 0);
    F.line = 71;
    result_11708069 = (res_11708078|0);
  framePtr = F.prev;

  return result_11708069;

}
function hash_11905001(x_11905004) {
  var result_11905005 = 0;

  var F={procname:"hash.hash",prev:framePtr,filename:"hashes.nim",line:0};
  framePtr = F;
    F.line = 362;
    result_11905005 = HEX21HEX26_11708031(result_11905005, hash_11710440(x_11905004["Field0"]));
    F.line = 362;
    result_11905005 = HEX21HEX26_11708031(result_11905005, hash_11710440(x_11905004["Field1"]));
    F.line = 363;
    result_11905005 = HEX21HEX24_11708066(result_11905005);
  framePtr = F.prev;

  return result_11905005;

}
function is_filled_11771418(hcode_11771420) {
  var result_11771421 = false;

  var F={procname:"sets.isFilled",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
    F.line = 27;
    result_11771421 = !((hcode_11771420 == 0));
  framePtr = F.prev;

  return result_11771421;

}
function HEX3DHEX3D_11910115(x_11910118, y_11910119) {
  var result_11910120 = false;

  var F={procname:"==.==",prev:framePtr,filename:"system.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    if (!((x_11910118["Field0"] == y_11910119["Field0"]))) {
    F.line = 1791;
    result_11910120 = false;
    break BeforeRet;
    }
    
    if (!((x_11910118["Field1"] == y_11910119["Field1"]))) {
    F.line = 1791;
    result_11910120 = false;
    break BeforeRet;
    }
    
    F.line = 1792;
    result_11910120 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_11910120;

}
function next_try_11775014(h_11775016, max_hash_11775017) {
  var result_11775018 = 0;

  var F={procname:"sets.nextTry",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
    F.line = 30;
    result_11775018 = (addInt(h_11775016, 1) & max_hash_11775017);
  framePtr = F.prev;

  return result_11775018;

}
function raw_get_11900426(t_11900430, key_11900431, hc_11900432, hc_11900432_Idx) {
            var Tmp3;

  var result_11900433 = 0;

  var F={procname:"rawGet.rawGet",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    F.line = 63;
    hc_11900432[hc_11900432_Idx] = hash_11905001(key_11900431);
    if ((hc_11900432[hc_11900432_Idx] == 0)) {
    F.line = 65;
    hc_11900432[hc_11900432_Idx] = 314159265;
    }
    
    if (((t_11900430.data != null ? t_11900430.data.length : 0) == 0)) {
    F.line = 47;
    result_11900433 = -1;
    break BeforeRet;
    }
    
    F.line = 48;
    var h_11910060 = (hc_11900432[hc_11900432_Idx] & (t_11900430.data != null ? (t_11900430.data.length-1) : -1));
    L1: do {
      F.line = 49;
        L2: while (true) {
        if (!is_filled_11771418(t_11900430.data[chckIndx(h_11910060, 0, (t_11900430.data != null ? t_11900430.data.length : 0)+0-1)-0].Field0)) break L2;
            if (!(t_11900430.data[chckIndx(h_11910060, 0, (t_11900430.data != null ? t_11900430.data.length : 0)+0-1)-0].Field0 == hc_11900432[hc_11900432_Idx])) Tmp3 = false; else {              Tmp3 = HEX3DHEX3D_11910115(t_11900430.data[chckIndx(h_11910060, 0, (t_11900430.data != null ? t_11900430.data.length : 0)+0-1)-0].Field1, key_11900431);            }          if (Tmp3) {
          F.line = 55;
          result_11900433 = h_11910060;
          break BeforeRet;
          }
          
          F.line = 56;
          h_11910060 = next_try_11775014(h_11910060, (t_11900430.data != null ? (t_11900430.data.length-1) : -1));
        }
    } while(false);
    F.line = 57;
    result_11900433 = subInt(-1, h_11910060);
  } while (false);
  framePtr = F.prev;

  return result_11900433;

}
function must_rehash_11910176(t_11910179) {
  var result_11910180 = false;

  var F={procname:"mustRehash.mustRehash",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
    if (!((t_11910179.counter < (t_11910179.data != null ? t_11910179.data.length : 0)))) {
    F.line = 33;
    failed_assert_impl_1267680(makeNimstrLit("/home/dk/.choosenim/toolchains/nim-1.2.6/lib/pure/collections/hashcommon.nim(33, 9) `\x0At.counter < t.dataLen` "));
    }
    
    F.line = 34;
    result_11910180 = ((mulInt((t_11910179.data != null ? t_11910179.data.length : 0), 2) < mulInt(t_11910179.counter, 3)) || (subInt((t_11910179.data != null ? t_11910179.data.length : 0), t_11910179.counter) < 4));
  framePtr = F.prev;

  return result_11910180;

}
function raw_get_known_hc_11935244(t_11935248, key_11935249, hc_11935250) {
  var result_11935251 = 0;

  var F={procname:"rawGetKnownHC.rawGetKnownHC",prev:framePtr,filename:"hashcommon.nim",line:0};
  framePtr = F;
  BeforeRet: do {
    if (((t_11935248.data != null ? t_11935248.data.length : 0) == 0)) {
    F.line = 47;
    result_11935251 = -1;
    break BeforeRet;
    }
    
    F.line = 48;
    var h_11940060 = (hc_11935250 & (t_11935248.data != null ? (t_11935248.data.length-1) : -1));
    L1: do {
      F.line = 49;
        L2: while (true) {
        if (!is_filled_11771418(t_11935248.data[chckIndx(h_11940060, 0, (t_11935248.data != null ? t_11935248.data.length : 0)+0-1)-0].Field0)) break L2;
          if (((t_11935248.data[chckIndx(h_11940060, 0, (t_11935248.data != null ? t_11935248.data.length : 0)+0-1)-0].Field0 == hc_11935250) && HEX3DHEX3D_11910115(t_11935248.data[chckIndx(h_11940060, 0, (t_11935248.data != null ? t_11935248.data.length : 0)+0-1)-0].Field1, key_11935249))) {
          F.line = 55;
          result_11935251 = h_11940060;
          break BeforeRet;
          }
          
          F.line = 56;
          h_11940060 = next_try_11775014(h_11940060, (t_11935248.data != null ? (t_11935248.data.length-1) : -1));
        }
    } while(false);
    F.line = 57;
    result_11935251 = subInt(-1, h_11940060);
  } while (false);
  framePtr = F.prev;

  return result_11935251;

}
function raw_insert_11940191(s_11940196, data_11940199, data_11940199_Idx, key_11940200, hc_11940201, h_11940202) {
  var F={procname:"rawInsert.rawInsert",prev:framePtr,filename:"setimpl.nim",line:0};
  framePtr = F;
    if (((data_11940199[data_11940199_Idx] != null ? data_11940199[data_11940199_Idx].length : 0) == 0)) {
    if (!(is_power_of_two_2270029(64))) {
    F.line = 19;
    failed_assert_impl_1267680(makeNimstrLit("/home/dk/.choosenim/toolchains/nim-1.2.6/lib/pure/collections/setimpl.nim(19, 10) `isPowerOfTwo(defaultInitialSize)` "));
    }
    
    F.line = 23;
    s_11940196.counter = 0;
    F.line = 28;
    s_11940196.data = new Array(64); for (var i=0;i<64;++i) {s_11940196.data[i]={Field0: 0, Field1: {Field0: 0, Field1: 0}};}    }
    
    F.line = 29;
    nimCopy(data_11940199[data_11940199_Idx][chckIndx(h_11940202, 0, (data_11940199[data_11940199_Idx] != null ? data_11940199[data_11940199_Idx].length : 0)+0-1)-0].Field1, key_11940200, NTI11871035);
    F.line = 30;
    data_11940199[data_11940199_Idx][chckIndx(h_11940202, 0, (data_11940199[data_11940199_Idx] != null ? data_11940199[data_11940199_Idx].length : 0)+0-1)-0].Field0 = hc_11940201;
  framePtr = F.prev;

  
}
function enlarge_11935098(s_11935103) {
  var F={procname:"enlarge.enlarge",prev:framePtr,filename:"setimpl.nim",line:0};
  framePtr = F;
    F.line = 37;
    var n_11935108 = null;
    F.line = 38;
    n_11935108 = new Array(chckRange(mulInt((s_11935103.data != null ? s_11935103.data.length : 0), 2), 0, 2147483647)); for (var i=0;i<chckRange(mulInt((s_11935103.data != null ? s_11935103.data.length : 0), 2), 0, 2147483647);++i) {n_11935108[i]={Field0: 0, Field1: {Field0: 0, Field1: 0}};}    F.line = 39;
    var Tmp1 = s_11935103.data; s_11935103.data = n_11935108; n_11935108 = Tmp1;    L2: do {
      F.line = 40;
      var i_11935189 = 0;
      F.line = 39;
      var colontmp__11955675 = 0;
      F.line = 40;
      colontmp__11955675 = (n_11935108 != null ? (n_11935108.length-1) : -1);
      F.line = 56;
      var res_11955680 = 0;
      L3: do {
        F.line = 57;
          L4: while (true) {
          if (!(res_11955680 <= colontmp__11955675)) break L4;
            F.line = 40;
            i_11935189 = res_11955680;
            if (is_filled_11771418(n_11935108[chckIndx(i_11935189, 0, (n_11935108 != null ? n_11935108.length : 0)+0-1)-0].Field0)) {
            F.line = 42;
            var j_11940139 = subInt(-1, raw_get_known_hc_11935244(s_11935103, n_11935108[chckIndx(i_11935189, 0, (n_11935108 != null ? n_11935108.length : 0)+0-1)-0].Field1, n_11935108[chckIndx(i_11935189, 0, (n_11935108 != null ? n_11935108.length : 0)+0-1)-0].Field0));
            F.line = 43;
            raw_insert_11940191(s_11935103, s_11935103, "data", n_11935108[chckIndx(i_11935189, 0, (n_11935108 != null ? n_11935108.length : 0)+0-1)-0].Field1, n_11935108[chckIndx(i_11935189, 0, (n_11935108 != null ? n_11935108.length : 0)+0-1)-0].Field0, j_11940139);
            }
            
            F.line = 59;
            res_11955680 = addInt(res_11955680, 1);
          }
      } while(false);
    } while(false);
  framePtr = F.prev;

  
}
function incl_11885544(s_11885549, key_11885550) {
  var F={procname:"incl.incl",prev:framePtr,filename:"sets.nim",line:0};
  framePtr = F;
    if (((s_11885549.data != null ? s_11885549.data.length : 0) == 0)) {
    if (!(is_power_of_two_2270029(64))) {
    F.line = 19;
    failed_assert_impl_1267680(makeNimstrLit("/home/dk/.choosenim/toolchains/nim-1.2.6/lib/pure/collections/setimpl.nim(19, 10) `isPowerOfTwo(defaultInitialSize)` "));
    }
    
    F.line = 23;
    s_11885549.counter = 0;
    F.line = 47;
    s_11885549.data = new Array(64); for (var i=0;i<64;++i) {s_11885549.data[i]={Field0: 0, Field1: {Field0: 0, Field1: 0}};}    }
    
    F.line = 48;
    var hc_11900408 = [0];
    F.line = 49;
    var index_11910175 = raw_get_11900426(s_11885549, key_11885550, hc_11900408, 0);
    if ((index_11910175 < 0)) {
    if (must_rehash_11910176(s_11885549)) {
    F.line = 52;
    enlarge_11935098(s_11885549);
    F.line = 53;
    index_11910175 = raw_get_known_hc_11935244(s_11885549, key_11885550, hc_11900408[0]);
    }
    
    F.line = 54;
    raw_insert_11940191(s_11885549, s_11885549, "data", key_11885550, hc_11900408[0], subInt(-1, index_11910175));
    F.line = 55;
    s_11885549.counter = addInt(s_11885549.counter, 1);
    }
    
  framePtr = F.prev;

  
}
function to_hash_set_11871073(keys_11871077) {
  var result_11871092 = [({data: null, counter: 0})];

  var F={procname:"toHashSet.toHashSet",prev:framePtr,filename:"sets.nim",line:0};
  framePtr = F;
    F.line = 227;
    nimCopy(result_11871092[0], init_hash_set_11871094(right_size_11775048(chckRange((keys_11871077 != null ? keys_11871077.length : 0), 0, 2147483647))), NTI11871080);
    L1: do {
      F.line = 228;
      var key_11885484 = {Field0: 0, Field1: 0};
      F.line = 3;
      var i_11955636 = 0;
      L2: do {
        F.line = 4;
          L3: while (true) {
          if (!(i_11955636 < (keys_11871077 != null ? keys_11871077.length : 0))) break L3;
            F.line = 228;
            nimCopy(key_11885484, keys_11871077[chckIndx(i_11955636, 0, (keys_11871077 != null ? keys_11871077.length : 0)+0-1)-0], NTI11871035);
            F.line = 228;
            incl_11885544(result_11871092[0], key_11885484);
            F.line = 6;
            i_11955636 = addInt(i_11955636, 1);
          }
      } while(false);
    } while(false);
  framePtr = F.prev;

  return result_11871092[0];

}
var grid_size_11871015 = 20;
var walls_11955571 = to_hash_set_11871073([{Field0: 1, Field1: 1}, {Field0: 2, Field1: 1}, {Field0: 1, Field1: 2}, {Field0: 8, Field1: 1}, {Field0: 8, Field1: 2}, {Field0: 7, Field1: 1}, {Field0: 1, Field1: 7}, {Field0: 1, Field1: 8}, {Field0: 2, Field1: 8}, {Field0: 8, Field1: 8}, {Field0: 8, Field1: 7}, {Field0: 7, Field1: 8}]);
var snake_11955573 = [null];
var fruit_pos_11955574 = [{Field0: 0, Field1: 0}];
var game_over_11955575 = [false];
var canvas_size_12025255 = 480;
var cell_size_12025256 = Math.trunc(canvas_size_12025255 / grid_size_11871015);
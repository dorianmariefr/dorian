var v1 = Object.defineProperty;
var be = (e, u) => {
  for (var n in u) v1(e, n, { get: u[n], enumerable: !0 });
};
var De = {};
be(De, { parsers: () => he });
var he = {};
be(he, { meriyah: () => T0 });
var T1 = {
    0: "Unexpected token",
    28: "Unexpected token: '%0'",
    1: "Octal escape sequences are not allowed in strict mode",
    2: "Octal escape sequences are not allowed in template strings",
    3: "Unexpected token `#`",
    4: "Illegal Unicode escape sequence",
    5: "Invalid code point %0",
    6: "Invalid hexadecimal escape sequence",
    8: "Octal literals are not allowed in strict mode",
    7: "Decimal integer literals with a leading zero are forbidden in strict mode",
    9: "Expected number in radix %0",
    146: "Invalid left-hand side assignment to a destructible right-hand side",
    10: "Non-number found after exponent indicator",
    11: "Invalid BigIntLiteral",
    12: "No identifiers allowed directly after numeric literal",
    13: "Escapes \\8 or \\9 are not syntactically valid escapes",
    14: "Unterminated string literal",
    15: "Unterminated template literal",
    16: "Multiline comment was not closed properly",
    17: "The identifier contained dynamic unicode escape that was not closed",
    18: "Illegal character '%0'",
    19: "Missing hexadecimal digits",
    20: "Invalid implicit octal",
    21: "Invalid line break in string literal",
    22: "Only unicode escapes are legal in identifier names",
    23: "Expected '%0'",
    24: "Invalid left-hand side in assignment",
    25: "Invalid left-hand side in async arrow",
    26: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
    27: "Member access on super must be in a method",
    29: "Await expression not allowed in formal parameter",
    30: "Yield expression not allowed in formal parameter",
    93: "Unexpected token: 'escaped keyword'",
    31: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
    120: "Async functions can only be declared at the top level or inside a block",
    32: "Unterminated regular expression",
    33: "Unexpected regular expression flag",
    34: "Duplicate regular expression flag '%0'",
    35: "%0 functions must have exactly %1 argument%2",
    36: "Setter function argument must not be a rest parameter",
    37: "%0 declaration must have a name in this context",
    38: "Function name may not contain any reserved words or be eval or arguments in strict mode",
    39: "The rest operator is missing an argument",
    40: "A getter cannot be a generator",
    41: "A setter cannot be a generator",
    42: "A computed property name must be followed by a colon or paren",
    131: "Object literal keys that are strings or numbers must be a method or have a colon",
    44: "Found `* async x(){}` but this should be `async * x(){}`",
    43: "Getters and setters can not be generators",
    45: "'%0' can not be generator method",
    46: "No line break is allowed after '=>'",
    47: "The left-hand side of the arrow can only be destructed through assignment",
    48: "The binding declaration is not destructible",
    49: "Async arrow can not be followed by new expression",
    50: "Classes may not have a static property named 'prototype'",
    51: "Class constructor may not be a %0",
    52: "Duplicate constructor method in class",
    53: "Invalid increment/decrement operand",
    54: "Invalid use of `new` keyword on an increment/decrement expression",
    55: "`=>` is an invalid assignment target",
    56: "Rest element may not have a trailing comma",
    57: "Missing initializer in %0 declaration",
    58: "'for-%0' loop head declarations can not have an initializer",
    59: "Invalid left-hand side in for-%0 loop: Must have a single binding",
    60: "Invalid shorthand property initializer",
    61: "Property name __proto__ appears more than once in object literal",
    62: "Let is disallowed as a lexically bound name",
    63: "Invalid use of '%0' inside new expression",
    64: "Illegal 'use strict' directive in function with non-simple parameter list",
    65: 'Identifier "let" disallowed as left-hand side expression in strict mode',
    66: "Illegal continue statement",
    67: "Illegal break statement",
    68: "Cannot have `let[...]` as a var name in strict mode",
    69: "Invalid destructuring assignment target",
    70: "Rest parameter may not have a default initializer",
    71: "The rest argument must the be last parameter",
    72: "Invalid rest argument",
    74: "In strict mode code, functions can only be declared at top level or inside a block",
    75: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
    76: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
    77: "Class declaration can't appear in single-statement context",
    78: "Invalid left-hand side in for-%0",
    79: "Invalid assignment in for-%0",
    80: "for await (... of ...) is only valid in async functions and async generators",
    81: "The first token after the template expression should be a continuation of the template",
    83: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
    82: "`let \n [` is a restricted production at the start of a statement",
    84: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
    85: "Catch clause parameter does not support default values",
    86: "Missing catch or finally after try",
    87: "More than one default clause in switch statement",
    88: "Illegal newline after throw",
    89: "Strict mode code may not include a with statement",
    90: "Illegal return statement",
    91: "The left hand side of the for-header binding declaration is not destructible",
    92: "new.target only allowed within functions",
    94: "'#' not followed by identifier",
    100: "Invalid keyword",
    99: "Can not use 'let' as a class name",
    98: "'A lexical declaration can't define a 'let' binding",
    97: "Can not use `let` as variable name in strict mode",
    95: "'%0' may not be used as an identifier in this context",
    96: "Await is only valid in async functions",
    101: "The %0 keyword can only be used with the module goal",
    102: "Unicode codepoint must not be greater than 0x10FFFF",
    103: "%0 source must be string",
    104: "Only a identifier can be used to indicate alias",
    105: "Only '*' or '{...}' can be imported after default",
    106: "Trailing decorator may be followed by method",
    107: "Decorators can't be used with a constructor",
    109: "HTML comments are only allowed with web compatibility (Annex B)",
    110: "The identifier 'let' must not be in expression position in strict mode",
    111: "Cannot assign to `eval` and `arguments` in strict mode",
    112: "The left-hand side of a for-of loop may not start with 'let'",
    113: "Block body arrows can not be immediately invoked without a group",
    114: "Block body arrows can not be immediately accessed without a group",
    115: "Unexpected strict mode reserved word",
    116: "Unexpected eval or arguments in strict mode",
    117: "Decorators must not be followed by a semicolon",
    118: "Calling delete on expression not allowed in strict mode",
    119: "Pattern can not have a tail",
    121: "Can not have a `yield` expression on the left side of a ternary",
    122: "An arrow function can not have a postfix update operator",
    123: "Invalid object literal key character after generator star",
    124: "Private fields can not be deleted",
    126: "Classes may not have a field called constructor",
    125: "Classes may not have a private element named constructor",
    127: "A class field initializer may not contain arguments",
    128: "Generators can only be declared at the top level or inside a block",
    129: "Async methods are a restricted production and cannot have a newline following it",
    130: "Unexpected character after object literal property name",
    132: "Invalid key token",
    133: "Label '%0' has already been declared",
    134: "continue statement must be nested within an iteration statement",
    135: "Undefined label '%0'",
    136: "Trailing comma is disallowed inside import(...) arguments",
    137: "import() requires exactly one argument",
    138: "Cannot use new with import(...)",
    139: "... is not allowed in import()",
    140: "Expected '=>'",
    141: "Duplicate binding '%0'",
    142: "Cannot export a duplicate name '%0'",
    145: "Duplicate %0 for-binding",
    143: "Exported binding '%0' needs to refer to a top-level declared variable",
    144: "Unexpected private field",
    148: "Numeric separators are not allowed at the end of numeric literals",
    147: "Only one underscore is allowed as numeric separator",
    149: "JSX value should be either an expression or a quoted JSX text",
    150: "Expected corresponding JSX closing tag for %0",
    151: "Adjacent JSX elements must be wrapped in an enclosing tag",
    152: "JSX attributes must only be assigned a non-empty 'expression'",
    153: "'%0' has already been declared",
    154: "'%0' shadowed a catch clause binding",
    155: "Dot property must be an identifier",
    156: "Encountered invalid input after spread/rest argument",
    157: "Catch without try",
    158: "Finally without try",
    159: "Expected corresponding closing tag for JSX fragment",
    160: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
    161: "Invalid tagged template on optional chain",
    162: "Invalid optional chain from super property",
    163: "Invalid optional chain from new expression",
    164: 'Cannot use "import.meta" outside a module',
    165: "Leading decorators must be attached to a class declaration",
  },
  y2 = class extends SyntaxError {
    constructor(u, n, t, i, ...o) {
      let l =
        "[" + n + ":" + t + "]: " + T1[i].replace(/%(\d+)/g, (f, c) => o[c]);
      super(`${l}`),
        (this.index = u),
        (this.line = n),
        (this.column = t),
        (this.description = l),
        (this.loc = { line: n, column: t });
    }
  };
function s(e, u, ...n) {
  throw new y2(e.index, e.line, e.column, u, ...n);
}
function j2(e) {
  throw new y2(e.index, e.line, e.column, e.type, e.params);
}
function k2(e, u, n, t, ...i) {
  throw new y2(e, u, n, t, ...i);
}
function A2(e, u, n, t) {
  throw new y2(e, u, n, t);
}
var P2 = ((e, u) => {
  let n = new Uint32Array(104448),
    t = 0,
    i = 0;
  for (; t < 3701; ) {
    let o = e[t++];
    if (o < 0) i -= o;
    else {
      let l = e[t++];
      o & 2 && (l = u[l]), o & 1 ? n.fill(l, i, (i += e[t++])) : (n[i++] = l);
    }
  }
  return n;
})(
  [
    -1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58,
    3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0,
    4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0, 3221225471, 0,
    4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0,
    2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0,
    0, 608174079, 2, 0, 2, 54, 2, 7, 2, 6, 0, 4278222591, 3, 0, 2, 2, 1, 3, 0,
    3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0,
    4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2,
    0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0,
    3594373100, 0, 3288319768, 0, 8469959, 2, 200, 2, 3, 0, 4093640191, 0,
    660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991,
    2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 66, 0,
    4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 67, 0, 1073741743,
    0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0,
    4278190047, 2, 20, 2, 133, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15, 2,
    22, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 11, 0,
    261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75,
    0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2, 42, 0,
    67090432, 3, 0, 2, 2, 41, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2,
    107, 2, 48, 2, 0, 2, 76, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559,
    0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 0, 67051519, 0, 1046528, 3,
    0, 3, 2, 9, 2, 0, 2, 50, 0, 4294960127, 2, 10, 2, 39, 2, 11, 0, 4294377472,
    2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 79, 2, 10, 2, 0, 2, 80, 2, 81, 2, 82, 2,
    206, 2, 129, 0, 1048577, 2, 83, 2, 14, -1, 2, 14, 0, 131042, 2, 84, 2, 85,
    2, 86, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0,
    2147516671, 2, 21, 3, 87, 2, 2, 0, -16, 2, 88, 0, 524222462, 2, 4, 2, 0, 0,
    4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18,
    -16, 3, 0, 206, -2, 3, 0, 692, 2, 68, -1, 2, 18, 2, 10, 3, 0, 8, 2, 90, 2,
    128, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 91, 2, 92, 3, 0, 2, 2, 93, 2,
    0, 2, 94, 2, 45, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0,
    3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2,
    21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 98, 2,
    99, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 100, 2, 101, 2, 7,
    -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 102, 2, 103, 3,
    0, 2, 2, 19, 2, 104, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 46, 2, 0, 2, 31, 2,
    105, 2, 25, 0, 1638399, 2, 170, 2, 106, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5,
    2, 28, 2, 0, 2, 8, 2, 108, -1, 2, 109, 2, 110, 2, 111, -1, 3, 0, 3, 2, 12,
    -2, 2, 0, 2, 29, -3, 2, 159, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 62, 2,
    6, 2, 12, 2, 10, 2, 0, 2, 112, -1, 3, 0, 4, 2, 10, 2, 23, 2, 113, 2, 7, 2,
    0, 2, 114, 2, 0, 2, 115, 2, 116, 2, 117, -2, 3, 0, 9, 2, 21, 2, 30, 2, 31,
    2, 118, 2, 119, -2, 2, 120, 2, 121, 2, 30, 2, 21, 2, 8, -2, 2, 122, 2, 30,
    2, 32, -2, 2, 0, 2, 38, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1,
    2, 33, 2, 37, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2,
    35, 2, 0, 2, 35, 2, 0, 2, 47, -10, 2, 0, 0, 203775, -1, 2, 164, 2, 20, 2,
    43, 2, 36, 2, 18, 2, 77, 2, 18, 2, 123, 2, 21, 3, 0, 2, 2, 37, 0,
    2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 140, 2, 0, 2, 52, 2, 51, 0,
    5242879, 3, 0, 2, 0, 402644511, -1, 2, 125, 2, 38, 0, 3, -1, 2, 126, 2, 39,
    2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3,
    0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0,
    1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 41, 2, 42, -1, 2, 11, 2,
    55, 2, 37, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 130, 0,
    4190109695, 2, 49, -2, 2, 131, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2,
    0, 2, 63, 2, 18, 2, 0, 2, 41, -8, 2, 53, 2, 44, 0, 67043329, 2, 45, 2, 46,
    0, 8388351, -2, 2, 132, 0, 3028287487, 2, 47, 2, 134, 0, 33259519, 2, 42,
    -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 67043335, -2, 2, 64, -2, 3, 0,
    28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 78, -81, 2, 18, 3, 0, 2, 2, 36,
    3, 0, 33, 2, 25, 2, 30, -125, 3, 0, 18, 2, 37, -269, 3, 0, 17, 2, 41, 2, 8,
    2, 23, 2, 0, 2, 8, 2, 23, 2, 48, 2, 0, 2, 21, 2, 49, 2, 135, 2, 25, -21, 3,
    0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0,
    191, 2, 50, 3, 0, 38, 2, 30, -1, 2, 34, -278, 2, 136, 3, 0, 9, 2, 137, 2,
    138, 2, 51, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 139, 0, 1677656575, -147, 2, 0,
    2, 24, 2, 37, -16, 0, 4161266656, 0, 4071, 2, 201, -4, 0, 28, -13, 3, 0, 2,
    2, 52, 2, 0, 2, 141, 2, 142, 2, 56, 2, 0, 2, 143, 2, 144, 2, 145, 3, 0, 10,
    2, 146, 2, 147, 2, 22, 3, 52, 2, 3, 148, 2, 3, 53, 2, 0, 4294954999, 2, 0,
    -16, 2, 0, 2, 89, 2, 0, 0, 2105343, 0, 4160749584, 2, 174, -34, 2, 8, 2,
    150, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 54, 2, 97, -3, 2, 0, 0,
    1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2, 32, -23,
    2, 151, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 55, -37, 2, 56, 2, 152, 2, 153,
    2, 154, 2, 155, 2, 156, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32,
    3, 0, 6, 2, 10, 3, 0, 180, 2, 157, 3, 0, 233, 2, 158, 3, 0, 18, 2, 10, -77,
    3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2,
    25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, -3,
    0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3,
    0, 4, 2, 16, 2, 60, 2, 0, 2, 34, -1, 2, 18, 2, 61, -1, 2, 0, 0, 2047, 0,
    4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 62,
    3, 0, 2, 0, 131135, 2, 95, 0, 70256639, 0, 71303167, 0, 272, 2, 41, 2, 6, 0,
    32511, 2, 0, 2, 42, -1, 2, 96, 2, 63, 0, 4278255616, 0, 4294836227, 0,
    4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0,
    57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 65, 2, 64, 0,
    33554435, 2, 127, 2, 65, 2, 160, 0, 131075, 0, 3594373096, 0, 67094296, 2,
    64, -1, 0, 4294828e3, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0,
    602930687, 2, 167, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0,
    4227858435, 0, 4236247008, 2, 66, 2, 37, -1, 2, 4, 0, 917503, 2, 37, -1, 2,
    67, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 68, 0, 7936, -3, 2,
    0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2,
    22, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 12,
    -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0,
    2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2,
    41, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 48, 2, 0, 2, 76,
    2, 42, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2,
    124, 0, 4227907585, 2, 0, 2, 77, 2, 0, 2, 78, 2, 180, 2, 10, 2, 39, 2, 11,
    -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 79, 2, 10, 2, 0, 2,
    80, 2, 81, 2, 82, -3, 2, 83, 2, 14, -3, 2, 84, 2, 85, 2, 86, 2, 0, 2, 34,
    -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 87, 2, -17,
    2, 88, 0, 524157950, 2, 4, 2, 0, 2, 89, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3,
    0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 68, -1, 2,
    18, 2, 10, 3, 0, 8, 2, 90, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2,
    25, 2, 91, 2, 92, 3, 0, 2, 2, 93, 2, 0, 2, 94, 2, 45, 0, 4294965179, 0, 7,
    2, 0, 2, 9, 2, 92, 2, 9, -1, 0, 1761345536, 2, 95, 0, 4294901823, 2, 37, 2,
    20, 2, 96, 2, 35, 2, 97, 0, 2080440287, 2, 0, 2, 34, 2, 149, 0, 3296722943,
    2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 98, 2, 99, 2, 22, 2, 23,
    3, 0, 3, 0, 7, 3, 0, 349, 2, 100, 2, 101, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0,
    2, 2, 32, -1, 0, 2700607615, 2, 102, 2, 103, 3, 0, 2, 2, 19, 2, 104, 3, 0,
    10, 2, 10, 2, 18, 2, 0, 2, 46, 2, 0, 2, 31, 2, 105, -3, 2, 106, 3, 0, 3, 2,
    20, -1, 3, 5, 2, 2, 107, 2, 0, 2, 8, 2, 108, -1, 2, 109, 2, 110, 2, 111, -1,
    3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 62, 2,
    6, 2, 30, 2, 10, 2, 0, 2, 112, -1, 3, 0, 4, 2, 10, 2, 18, 2, 113, 2, 7, 2,
    0, 2, 114, 2, 0, 2, 115, 2, 116, 2, 117, -2, 3, 0, 9, 2, 21, 2, 30, 2, 31,
    2, 118, 2, 119, -2, 2, 120, 2, 121, 2, 30, 2, 21, 2, 8, -2, 2, 122, 2, 30,
    2, 32, -2, 2, 0, 2, 38, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33,
    2, 123, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35,
    2, 0, 2, 35, 2, 0, 2, 78, -10, 2, 0, 0, 197631, -2, 2, 20, 2, 43, 2, 77, 2,
    18, 0, 3, 2, 18, 2, 123, 2, 21, 2, 124, 2, 50, -1, 0, 2490368, 2, 124, 2,
    25, 2, 18, 2, 34, 2, 124, 2, 37, 0, 4294901904, 0, 4718591, 2, 124, 2, 35,
    0, 335544350, -1, 2, 125, 0, 2147487743, 0, 1, -1, 2, 126, 2, 39, 2, 8, -1,
    2, 127, 2, 65, 0, 3758161920, 0, 3, -4, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2,
    0, 2, 25, 0, 176, -5, 2, 0, 2, 17, 2, 188, -1, 2, 0, 2, 25, 2, 205, -1, 2,
    0, 0, 16779263, -2, 2, 12, -1, 2, 37, -5, 2, 0, 2, 128, -3, 3, 0, 2, 2, 129,
    2, 130, 0, 2147549183, 0, 2, -2, 2, 131, 2, 36, 0, 10, 0, 4294965249, 0,
    67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 41, -8, 2, 53,
    2, 17, 0, 1, 2, 45, 2, 25, -3, 2, 132, 2, 36, 2, 133, 2, 134, 0, 16778239,
    -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 64, -2, 3, 0, 28, 2, 32, -3, 3, 0,
    3, 2, 17, 3, 0, 6, 2, 78, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0,
    126, -125, 3, 0, 18, 2, 37, -269, 3, 0, 17, 2, 41, 2, 8, 2, 18, 2, 0, 2, 8,
    2, 18, 2, 54, 2, 0, 2, 25, 2, 78, 2, 135, 2, 25, -21, 3, 0, 2, -4, 3, 0, 2,
    0, 67583, -1, 2, 104, -2, 0, 11, 3, 0, 191, 2, 50, 3, 0, 38, 2, 30, -1, 2,
    34, -278, 2, 136, 3, 0, 9, 2, 137, 2, 138, 2, 51, 3, 0, 11, 2, 7, -72, 3, 0,
    3, 2, 139, 2, 140, -187, 3, 0, 2, 2, 52, 2, 0, 2, 141, 2, 142, 2, 56, 2, 0,
    2, 143, 2, 144, 2, 145, 3, 0, 10, 2, 146, 2, 147, 2, 22, 3, 52, 2, 3, 148,
    2, 3, 53, 2, 2, 149, -57, 2, 8, 2, 150, -7, 2, 18, 2, 0, 2, 54, -4, 2, 0, 0,
    1065361407, 0, 16384, -9, 2, 18, 2, 54, 2, 0, 2, 128, -14, 2, 18, 2, 128,
    -23, 2, 151, 3, 0, 6, 2, 123, -1, 3, 0, 2, 0, 2063, -37, 2, 56, 2, 152, 2,
    153, 2, 154, 2, 155, 2, 156, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0,
    6, 2, 10, 3, 0, 180, 2, 157, 3, 0, 233, 2, 158, 3, 0, 18, 2, 10, -77, 3, 0,
    16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386, 2, 0, 0, 1, -1,
    2, 129, 2, 0, 0, 8193, -21, 2, 198, 0, 10255, 0, 4, -11, 2, 64, 2, 179, -1,
    0, 71680, -1, 2, 171, 0, 4292900864, 0, 268435519, -5, 2, 159, -1, 2, 169,
    -1, 0, 6144, -2, 2, 45, -1, 2, 163, -1, 0, 2147532800, 2, 160, 2, 166, 0,
    16744448, -2, 0, 4, -4, 2, 194, 0, 205128192, 0, 1333757536, 0, 2147483696,
    0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 161, 0,
    4294886464, 0, 33292336, 0, 417809, 2, 161, 0, 1327482464, 0, 4278190128, 0,
    700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 162, 0,
    201327104, 0, 3634348576, 0, 8323120, 2, 162, 0, 202375680, 0, 2678047264,
    0, 4293984304, 2, 162, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0,
    10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 182, 2, 0, 0, 2089, 0,
    3221225552, 0, 201359520, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 159,
    0, 4160757760, 2, 0, -6, 2, 176, -11, 0, 3263218176, -1, 0, 49664, 0,
    2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 163, 2, 164, 2, 183, -2, 2,
    172, -20, 0, 3758096385, -2, 2, 165, 2, 191, 2, 91, 2, 177, 0, 4294057984,
    -2, 2, 173, 2, 168, 0, 4227874816, -2, 2, 165, -1, 2, 166, -1, 2, 178, 2,
    129, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 175, 0, 939588608, -1, 0,
    805306368, -1, 2, 129, 2, 167, 2, 168, 2, 169, 2, 207, 2, 0, -2, 2, 170, 2,
    129, -3, 0, 267386880, -1, 0, 117440512, 0, 7168, -1, 2, 210, 2, 163, 2,
    171, 2, 184, -16, 2, 172, -1, 0, 1426112704, 2, 173, -1, 2, 192, 0,
    271581216, 0, 2149777408, 2, 25, 2, 171, 2, 129, 0, 851967, 2, 185, -1, 2,
    174, 2, 186, -4, 2, 175, -20, 2, 197, 2, 204, -56, 0, 3145728, 2, 187, -10,
    0, 32505856, -1, 2, 176, -1, 0, 2147385088, 2, 91, 1, 2155905152, 2, -3, 2,
    173, 2, 0, 0, 67108864, -2, 2, 177, -6, 2, 178, 2, 25, 0, 1, -1, 0, 1, -1,
    2, 179, -3, 2, 123, 2, 64, -2, 2, 97, -2, 0, 32752, 2, 129, -915, 2, 170,
    -1, 2, 203, -10, 2, 190, -5, 2, 181, -6, 0, 4229232640, 2, 19, -1, 2, 180,
    -1, 2, 181, -2, 0, 4227874752, -3, 0, 2146435072, 2, 164, -2, 0, 1006649344,
    2, 129, -1, 2, 91, 0, 201375744, -3, 0, 134217720, 2, 91, 0, 4286677377, 0,
    32896, -1, 2, 175, -3, 0, 4227907584, -349, 0, 65520, 0, 1920, 2, 182, 3, 0,
    264, -11, 2, 169, -2, 2, 183, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3,
    0, 524280, -13, 2, 189, -1, 0, 4294934272, 2, 25, 2, 183, -1, 2, 213, 0,
    2158720, -3, 2, 164, 0, 1, -4, 2, 129, 0, 3808625411, 0, 3489628288, 0,
    4096, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 184, 0, 120, 0, 7340032,
    -2, 2, 185, 2, 4, 2, 25, 2, 173, 3, 0, 4, 2, 164, -1, 2, 186, 2, 182, -1, 0,
    8176, 2, 166, 2, 184, 2, 211, -1, 0, 4290773232, 2, 0, -4, 2, 173, 2, 193,
    0, 15728640, 2, 182, -1, 2, 171, -1, 0, 134250480, 0, 4720640, 0,
    3825467396, 3, 0, 2, -9, 2, 91, 2, 178, 0, 4294967040, 2, 133, 0,
    4160880640, 3, 0, 2, 0, 704, 0, 1849688064, 2, 187, -1, 2, 129, 0,
    4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 208, 3, 0, 2, -1, 2, 188,
    2, 189, -1, 0, 17829776, 0, 2025848832, 2, 212, -2, 2, 0, -1, 0, 4286580608,
    -1, 0, 29360128, 2, 196, 0, 16252928, 0, 3791388672, 2, 39, 3, 0, 2, -2, 2,
    202, 2, 0, -1, 2, 104, -1, 0, 66584576, -1, 2, 195, 3, 0, 9, 2, 129, -1, 0,
    4294755328, 2, 0, 2, 20, -1, 2, 171, 2, 183, 2, 25, 2, 95, 2, 25, 2, 190, 2,
    91, -2, 0, 245760, 2, 191, -1, 2, 159, 2, 199, 0, 4227923456, -1, 2, 192, 2,
    171, 2, 91, -3, 0, 4292870145, 0, 262144, -1, 2, 92, 2, 0, 0, 1073758848, 2,
    193, -1, 0, 4227921920, 2, 194, 0, 68289024, 0, 528402016, 0, 4292927536, 3,
    0, 4, -2, 0, 268435456, 2, 92, -2, 2, 195, 3, 0, 5, -1, 2, 196, 2, 173, 2,
    0, -2, 0, 4227923936, 2, 62, -1, 2, 183, 2, 95, 2, 0, 2, 163, 2, 175, 2,
    197, 3, 0, 5, -1, 2, 182, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0,
    104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 198, 2, 28, -2, 2, 171, -2, 2,
    199, -1, 2, 165, 2, 95, 3, 0, 7, 0, 512, 0, 8388608, 2, 200, 2, 170, 2, 189,
    0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 195, 0, 576, 0,
    4261707776, 2, 95, 3, 0, 9, 2, 165, 0, 131072, 0, 939524096, 2, 183, 3, 0,
    2, 2, 16, -1, 0, 2147221504, -28, 2, 183, 3, 0, 3, -3, 0, 4292902912, -6, 2,
    96, 3, 0, 81, 2, 25, -2, 2, 104, -33, 2, 18, 2, 178, 3, 0, 125, -18, 2, 197,
    3, 0, 269, -17, 2, 165, 2, 129, 2, 201, -1, 2, 129, 2, 193, 0, 4290822144,
    -2, 0, 67174336, 0, 520093700, 2, 18, 3, 0, 21, -2, 2, 184, 3, 0, 3, -2, 0,
    30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 181, -38, 2, 178, 2,
    0, 2, 202, 3, 0, 278, 0, 2417033215, -9, 0, 4294705144, 0, 4292411391, 0,
    65295, -11, 2, 182, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 147,
    -1, 2, 169, 2, 203, -3, 2, 96, 2, 0, -7, 2, 178, -1, 0, 384, -1, 0,
    133693440, -3, 2, 204, -2, 2, 107, 3, 0, 3, 3, 177, 2, -2, 2, 91, 2, 165, 3,
    0, 4, -2, 2, 192, -1, 2, 159, 0, 335552923, 2, 205, -1, 0, 538974272, 0,
    2214592512, 0, 132e3, -10, 0, 192, -8, 2, 206, -21, 0, 134213632, 2, 158, 3,
    0, 34, 2, 129, 0, 4294965279, 3, 0, 6, 0, 100663424, 0, 63524, -1, 2, 209,
    2, 148, 3, 0, 3, -1, 0, 3221282816, 0, 4294917120, 3, 0, 9, 2, 25, 2, 207,
    -1, 2, 208, 3, 0, 14, 2, 25, 2, 183, 3, 0, 23, 0, 2147520640, -6, 0,
    4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 36, -1, 0, 4292870144, 3,
    0, 2, 0, 1, 2, 173, 3, 0, 6, 2, 205, 0, 4110942569, 0, 1432950139, 0,
    2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 46, 3, 0, 8, -1, 2, 175,
    -2, 2, 177, 0, 98304, 0, 65537, 2, 178, -5, 2, 209, 2, 0, 2, 77, 2, 199, 2,
    182, 0, 4294770176, 2, 107, 3, 0, 4, -30, 2, 188, 0, 3758153728, -3, 0,
    125829120, -2, 2, 183, 0, 4294897664, 2, 175, -1, 2, 195, -1, 2, 171, 0,
    4294754304, 3, 0, 2, -10, 2, 177, 0, 3758145536, 2, 210, 2, 211, 0,
    4026548160, 2, 212, -4, 2, 213, -1, 2, 204, 0, 4227923967, 3, 0, 32, -1335,
    2, 0, -129, 2, 183, -6, 2, 173, -180, 0, 65532, -233, 2, 174, -18, 2, 173,
    3, 0, 77, -16, 2, 173, 3, 0, 47, -154, 2, 166, -130, 2, 18, 3, 0, 22250, -7,
    2, 18, 3, 0, 6128,
  ],
  [
    4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726,
    4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111,
    134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767, 4294901760,
    262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535,
    67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863,
    4294967039, 511, 524287, 131071, 127, 3238002687, 4294902271, 4294549487,
    33554431, 1023, 4294901888, 4286578687, 4294705152, 4294770687, 67043583,
    2047999, 67043343, 16777215, 4294902e3, 4292870143, 4294966783, 16383,
    67047423, 4294967279, 262083, 20511, 4290772991, 41943039, 493567,
    4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191,
    1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719,
    33540095, 4294905855, 63, 15, 2868854591, 1608515583, 265232348, 534519807,
    2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175,
    4294909951, 4286578688, 4294967292, 4294965759, 65734655, 4294966272,
    4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615,
    4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884,
    4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015,
    4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591,
    2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294549472,
    4095, 2147483648, 4285526655, 4294966527, 4294966143, 64, 4294966719,
    3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383,
    3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565,
    4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078,
    268434431, 268434414, 4294901763, 4294901761, 536870912, 2952790016,
    202506752, 139264, 402653184, 3758096384, 4261412864, 63488, 1610612736,
    4227922944, 49152, 57344, 65280, 3233808384, 3221225472, 65534, 61440,
    57152, 4293918720, 4290772992, 25165824, 4227915776, 4278190080, 4026531840,
    4227858432, 4160749568, 3758129152, 4294836224, 4194304, 251658240, 196608,
    4294963200, 2143289344, 2097152, 64512, 417808, 4227923712, 12582912,
    4294967168, 50331648, 65528, 65472, 15360, 4294966784, 65408, 4294965248,
    16, 12288, 4294934528, 2080374784, 4294950912, 65024, 1073741824,
    4261477888, 524288,
  ],
);
function A(e) {
  return e.column++, (e.currentChar = e.source.charCodeAt(++e.index));
}
function F1(e, u) {
  if ((u & 64512) !== 55296) return 0;
  let n = e.source.charCodeAt(e.index + 1);
  return (n & 64512) !== 56320
    ? 0
    : ((u = e.currentChar = 65536 + ((u & 1023) << 10) + (n & 1023)),
      (P2[(u >>> 5) + 0] >>> u) & 31 & 1 || s(e, 18, G(u)),
      e.index++,
      e.column++,
      1);
}
function G2(e, u) {
  (e.currentChar = e.source.charCodeAt(++e.index)),
    (e.flags |= 1),
    u & 4 || ((e.column = 0), e.line++);
}
function c2(e) {
  (e.flags |= 1),
    (e.currentChar = e.source.charCodeAt(++e.index)),
    (e.column = 0),
    e.line++;
}
function q1(e) {
  return (
    e === 160 ||
    e === 65279 ||
    e === 133 ||
    e === 5760 ||
    (e >= 8192 && e <= 8203) ||
    e === 8239 ||
    e === 8287 ||
    e === 12288 ||
    e === 8201 ||
    e === 65519
  );
}
function G(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : String.fromCharCode(e >>> 10) + String.fromCharCode(e & 1023);
}
function z(e) {
  return e < 65 ? e - 48 : (e - 65 + 10) & 15;
}
function L1(e) {
  switch (e) {
    case 134283266:
      return "NumericLiteral";
    case 134283267:
      return "StringLiteral";
    case 86021:
    case 86022:
      return "BooleanLiteral";
    case 86023:
      return "NullLiteral";
    case 65540:
      return "RegularExpression";
    case 67174408:
    case 67174409:
    case 132:
      return "TemplateLiteral";
    default:
      return (e & 143360) === 143360
        ? "Identifier"
        : (e & 4096) === 4096
          ? "Keyword"
          : "Punctuator";
  }
}
var L = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0,
    33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384,
    0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0,
  ],
  I1 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 0, 0,
  ],
  Fe = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 0, 0,
  ];
function _2(e) {
  return e <= 127 ? I1[e] : (P2[(e >>> 5) + 34816] >>> e) & 31 & 1;
}
function R2(e) {
  return e <= 127
    ? Fe[e]
    : (P2[(e >>> 5) + 0] >>> e) & 31 & 1 || e === 8204 || e === 8205;
}
var qe = [
  "SingleLine",
  "MultiLine",
  "HTMLOpen",
  "HTMLClose",
  "HashbangComment",
];
function N1(e) {
  let u = e.source;
  e.currentChar === 35 &&
    u.charCodeAt(e.index + 1) === 33 &&
    (A(e), A(e), x2(e, u, 0, 4, e.tokenPos, e.linePos, e.colPos));
}
function Ce(e, u, n, t, i, o, l, f) {
  return t & 2048 && s(e, 0), x2(e, u, n, i, o, l, f);
}
function x2(e, u, n, t, i, o, l) {
  let { index: f } = e;
  for (
    e.tokenPos = e.index, e.linePos = e.line, e.colPos = e.column;
    e.index < e.end;

  ) {
    if (L[e.currentChar] & 8) {
      let c = e.currentChar === 13;
      c2(e),
        c &&
          e.index < e.end &&
          e.currentChar === 10 &&
          (e.currentChar = u.charCodeAt(++e.index));
      break;
    } else if ((e.currentChar ^ 8232) <= 1) {
      c2(e);
      break;
    }
    A(e), (e.tokenPos = e.index), (e.linePos = e.line), (e.colPos = e.column);
  }
  if (e.onComment) {
    let c = {
      start: { line: o, column: l },
      end: { line: e.linePos, column: e.colPos },
    };
    e.onComment(qe[t & 255], u.slice(f, e.tokenPos), i, e.tokenPos, c);
  }
  return n | 1;
}
function V1(e, u, n) {
  let { index: t } = e;
  for (; e.index < e.end; )
    if (e.currentChar < 43) {
      let i = !1;
      for (; e.currentChar === 42; )
        if ((i || ((n &= -5), (i = !0)), A(e) === 47)) {
          if ((A(e), e.onComment)) {
            let o = {
              start: { line: e.linePos, column: e.colPos },
              end: { line: e.line, column: e.column },
            };
            e.onComment(qe[1], u.slice(t, e.index - 2), t - 2, e.index, o);
          }
          return (
            (e.tokenPos = e.index),
            (e.linePos = e.line),
            (e.colPos = e.column),
            n
          );
        }
      if (i) continue;
      L[e.currentChar] & 8
        ? e.currentChar === 13
          ? ((n |= 5), c2(e))
          : (G2(e, n), (n = (n & -5) | 1))
        : A(e);
    } else
      (e.currentChar ^ 8232) <= 1
        ? ((n = (n & -5) | 1), c2(e))
        : ((n &= -5), A(e));
  s(e, 16);
}
function R1(e, u) {
  let n = e.index,
    t = 0;
  e: for (;;) {
    let g = e.currentChar;
    if ((A(e), t & 1)) t &= -2;
    else
      switch (g) {
        case 47:
          if (t) break;
          break e;
        case 92:
          t |= 1;
          break;
        case 91:
          t |= 2;
          break;
        case 93:
          t &= 1;
          break;
        case 13:
        case 10:
        case 8232:
        case 8233:
          s(e, 32);
      }
    if (e.index >= e.source.length) return s(e, 32);
  }
  let i = e.index - 1,
    o = 0,
    l = e.currentChar,
    { index: f } = e;
  for (; R2(l); ) {
    switch (l) {
      case 103:
        o & 2 && s(e, 34, "g"), (o |= 2);
        break;
      case 105:
        o & 1 && s(e, 34, "i"), (o |= 1);
        break;
      case 109:
        o & 4 && s(e, 34, "m"), (o |= 4);
        break;
      case 117:
        o & 16 && s(e, 34, "u"), (o |= 16);
        break;
      case 121:
        o & 8 && s(e, 34, "y"), (o |= 8);
        break;
      case 115:
        o & 32 && s(e, 34, "s"), (o |= 32);
        break;
      case 100:
        o & 64 && s(e, 34, "d"), (o |= 64);
        break;
      default:
        s(e, 33);
    }
    l = A(e);
  }
  let c = e.source.slice(f, e.index),
    m = e.source.slice(n, i);
  return (
    (e.tokenRegExp = { pattern: m, flags: c }),
    u & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
    (e.tokenValue = O1(e, m, c)),
    65540
  );
}
function O1(e, u, n) {
  try {
    return new RegExp(u, n);
  } catch {
    try {
      return new RegExp(u, n.replace("d", "")), null;
    } catch {
      s(e, 32);
    }
  }
}
function U1(e, u, n) {
  let { index: t } = e,
    i = "",
    o = A(e),
    l = e.index;
  for (; !(L[o] & 8); ) {
    if (o === n)
      return (
        (i += e.source.slice(l, e.index)),
        A(e),
        u & 512 && (e.tokenRaw = e.source.slice(t, e.index)),
        (e.tokenValue = i),
        134283267
      );
    if ((o & 8) === 8 && o === 92) {
      if (
        ((i += e.source.slice(l, e.index)),
        (o = A(e)),
        o < 127 || o === 8232 || o === 8233)
      ) {
        let f = Le(e, u, o);
        f >= 0 ? (i += G(f)) : Ie(e, f, 0);
      } else i += G(o);
      l = e.index + 1;
    }
    e.index >= e.end && s(e, 14), (o = A(e));
  }
  s(e, 14);
}
function Le(e, u, n) {
  switch (n) {
    case 98:
      return 8;
    case 102:
      return 12;
    case 114:
      return 13;
    case 110:
      return 10;
    case 116:
      return 9;
    case 118:
      return 11;
    case 13:
      if (e.index < e.end) {
        let t = e.source.charCodeAt(e.index + 1);
        t === 10 && ((e.index = e.index + 1), (e.currentChar = t));
      }
    case 10:
    case 8232:
    case 8233:
      return (e.column = -1), e.line++, -1;
    case 48:
    case 49:
    case 50:
    case 51: {
      let t = n - 48,
        i = e.index + 1,
        o = e.column + 1;
      if (i < e.end) {
        let l = e.source.charCodeAt(i);
        if (L[l] & 32) {
          if (u & 1024) return -2;
          if (
            ((e.currentChar = l),
            (t = (t << 3) | (l - 48)),
            i++,
            o++,
            i < e.end)
          ) {
            let f = e.source.charCodeAt(i);
            L[f] & 32 &&
              ((e.currentChar = f), (t = (t << 3) | (f - 48)), i++, o++);
          }
          (e.flags |= 64), (e.index = i - 1), (e.column = o - 1);
        } else if ((t !== 0 || L[l] & 512) && u & 1024) return -2;
      }
      return t;
    }
    case 52:
    case 53:
    case 54:
    case 55: {
      if (u & 1024) return -2;
      let t = n - 48,
        i = e.index + 1,
        o = e.column + 1;
      if (i < e.end) {
        let l = e.source.charCodeAt(i);
        L[l] & 32 &&
          ((t = (t << 3) | (l - 48)),
          (e.currentChar = l),
          (e.index = i),
          (e.column = o));
      }
      return (e.flags |= 64), t;
    }
    case 120: {
      let t = A(e);
      if (!(L[t] & 64)) return -4;
      let i = z(t),
        o = A(e);
      if (!(L[o] & 64)) return -4;
      let l = z(o);
      return (i << 4) | l;
    }
    case 117: {
      let t = A(e);
      if (e.currentChar === 123) {
        let i = 0;
        for (; L[A(e)] & 64; )
          if (((i = (i << 4) | z(e.currentChar)), i > 1114111)) return -5;
        return e.currentChar < 1 || e.currentChar !== 125 ? -4 : i;
      } else {
        if (!(L[t] & 64)) return -4;
        let i = e.source.charCodeAt(e.index + 1);
        if (!(L[i] & 64)) return -4;
        let o = e.source.charCodeAt(e.index + 2);
        if (!(L[o] & 64)) return -4;
        let l = e.source.charCodeAt(e.index + 3);
        return L[l] & 64
          ? ((e.index += 3),
            (e.column += 3),
            (e.currentChar = e.source.charCodeAt(e.index)),
            (z(t) << 12) | (z(i) << 8) | (z(o) << 4) | z(l))
          : -4;
      }
    }
    case 56:
    case 57:
      if (!(u & 256)) return -3;
    default:
      return n;
  }
}
function Ie(e, u, n) {
  switch (u) {
    case -1:
      return;
    case -2:
      s(e, n ? 2 : 1);
    case -3:
      s(e, 13);
    case -4:
      s(e, 6);
    case -5:
      s(e, 102);
  }
}
function Ne(e, u) {
  let { index: n } = e,
    t = 67174409,
    i = "",
    o = A(e);
  for (; o !== 96; ) {
    if (o === 36 && e.source.charCodeAt(e.index + 1) === 123) {
      A(e), (t = 67174408);
      break;
    } else if ((o & 8) === 8 && o === 92)
      if (((o = A(e)), o > 126)) i += G(o);
      else {
        let l = Le(e, u | 1024, o);
        if (l >= 0) i += G(l);
        else if (l !== -1 && u & 65536) {
          (i = void 0), (o = M1(e, o)), o < 0 && (t = 67174408);
          break;
        } else Ie(e, l, 1);
      }
    else
      e.index < e.end &&
        o === 13 &&
        e.source.charCodeAt(e.index) === 10 &&
        ((i += G(o)), (e.currentChar = e.source.charCodeAt(++e.index))),
        (((o & 83) < 3 && o === 10) || (o ^ 8232) <= 1) &&
          ((e.column = -1), e.line++),
        (i += G(o));
    e.index >= e.end && s(e, 15), (o = A(e));
  }
  return (
    A(e),
    (e.tokenValue = i),
    (e.tokenRaw = e.source.slice(n + 1, e.index - (t === 67174409 ? 1 : 2))),
    t
  );
}
function M1(e, u) {
  for (; u !== 96; ) {
    switch (u) {
      case 36: {
        let n = e.index + 1;
        if (n < e.end && e.source.charCodeAt(n) === 123)
          return (e.index = n), e.column++, -u;
        break;
      }
      case 10:
      case 8232:
      case 8233:
        (e.column = -1), e.line++;
    }
    e.index >= e.end && s(e, 15), (u = A(e));
  }
  return u;
}
function J1(e, u) {
  return e.index >= e.end && s(e, 0), e.index--, e.column--, Ne(e, u);
}
function Pe(e, u, n) {
  let t = e.currentChar,
    i = 0,
    o = 9,
    l = n & 64 ? 0 : 1,
    f = 0,
    c = 0;
  if (n & 64) (i = "." + q2(e, t)), (t = e.currentChar), t === 110 && s(e, 11);
  else {
    if (t === 48)
      if (((t = A(e)), (t | 32) === 120)) {
        for (n = 136, t = A(e); L[t] & 4160; ) {
          if (t === 95) {
            c || s(e, 147), (c = 0), (t = A(e));
            continue;
          }
          (c = 1), (i = i * 16 + z(t)), f++, (t = A(e));
        }
        (f === 0 || !c) && s(e, f === 0 ? 19 : 148);
      } else if ((t | 32) === 111) {
        for (n = 132, t = A(e); L[t] & 4128; ) {
          if (t === 95) {
            c || s(e, 147), (c = 0), (t = A(e));
            continue;
          }
          (c = 1), (i = i * 8 + (t - 48)), f++, (t = A(e));
        }
        (f === 0 || !c) && s(e, f === 0 ? 0 : 148);
      } else if ((t | 32) === 98) {
        for (n = 130, t = A(e); L[t] & 4224; ) {
          if (t === 95) {
            c || s(e, 147), (c = 0), (t = A(e));
            continue;
          }
          (c = 1), (i = i * 2 + (t - 48)), f++, (t = A(e));
        }
        (f === 0 || !c) && s(e, f === 0 ? 0 : 148);
      } else if (L[t] & 32)
        for (u & 1024 && s(e, 1), n = 1; L[t] & 16; ) {
          if (L[t] & 512) {
            (n = 32), (l = 0);
            break;
          }
          (i = i * 8 + (t - 48)), (t = A(e));
        }
      else
        L[t] & 512
          ? (u & 1024 && s(e, 1), (e.flags |= 64), (n = 32))
          : t === 95 && s(e, 0);
    if (n & 48) {
      if (l) {
        for (; o >= 0 && L[t] & 4112; ) {
          if (t === 95) {
            (t = A(e)),
              (t === 95 || n & 32) && A2(e.index, e.line, e.index + 1, 147),
              (c = 1);
            continue;
          }
          (c = 0), (i = 10 * i + (t - 48)), (t = A(e)), --o;
        }
        if (
          (c && A2(e.index, e.line, e.index + 1, 148),
          o >= 0 && !_2(t) && t !== 46)
        )
          return (
            (e.tokenValue = i),
            u & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
            134283266
          );
      }
      (i += q2(e, t)),
        (t = e.currentChar),
        t === 46 &&
          (A(e) === 95 && s(e, 0),
          (n = 64),
          (i += "." + q2(e, e.currentChar)),
          (t = e.currentChar));
    }
  }
  let m = e.index,
    g = 0;
  if (t === 110 && n & 128) (g = 1), (t = A(e));
  else if ((t | 32) === 101) {
    (t = A(e)), L[t] & 256 && (t = A(e));
    let { index: a } = e;
    L[t] & 16 || s(e, 10),
      (i += e.source.substring(m, a) + q2(e, t)),
      (t = e.currentChar);
  }
  return (
    ((e.index < e.end && L[t] & 16) || _2(t)) && s(e, 12),
    g
      ? ((e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
        (e.tokenValue = BigInt(i)),
        134283389)
      : ((e.tokenValue =
          n & 15
            ? i
            : n & 32
              ? parseFloat(e.source.substring(e.tokenPos, e.index))
              : +i),
        u & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
        134283266)
  );
}
function q2(e, u) {
  let n = 0,
    t = e.index,
    i = "";
  for (; L[u] & 4112; ) {
    if (u === 95) {
      let { index: o } = e;
      (u = A(e)),
        u === 95 && A2(e.index, e.line, e.index + 1, 147),
        (n = 1),
        (i += e.source.substring(t, o)),
        (t = e.index);
      continue;
    }
    (n = 0), (u = A(e));
  }
  return (
    n && A2(e.index, e.line, e.index + 1, 148),
    i + e.source.substring(t, e.index)
  );
}
var O = [
    "end of source",
    "identifier",
    "number",
    "string",
    "regular expression",
    "false",
    "true",
    "null",
    "template continuation",
    "template tail",
    "=>",
    "(",
    "{",
    ".",
    "...",
    "}",
    ")",
    ";",
    ",",
    "[",
    "]",
    ":",
    "?",
    "'",
    '"',
    "</",
    "/>",
    "++",
    "--",
    "=",
    "<<=",
    ">>=",
    ">>>=",
    "**=",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "^=",
    "|=",
    "&=",
    "||=",
    "&&=",
    "??=",
    "typeof",
    "delete",
    "void",
    "!",
    "~",
    "+",
    "-",
    "in",
    "instanceof",
    "*",
    "%",
    "/",
    "**",
    "&&",
    "||",
    "===",
    "!==",
    "==",
    "!=",
    "<=",
    ">=",
    "<",
    ">",
    "<<",
    ">>",
    ">>>",
    "&",
    "|",
    "^",
    "var",
    "let",
    "const",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "while",
    "with",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield",
    "as",
    "async",
    "await",
    "constructor",
    "get",
    "set",
    "from",
    "of",
    "enum",
    "eval",
    "arguments",
    "escaped keyword",
    "escaped future reserved keyword",
    "reserved if strict",
    "#",
    "BigIntLiteral",
    "??",
    "?.",
    "WhiteSpace",
    "Illegal",
    "LineTerminator",
    "PrivateField",
    "Template",
    "@",
    "target",
    "meta",
    "LineFeed",
    "Escaped",
    "JSXText",
  ],
  Ve = Object.create(null, {
    this: { value: 86113 },
    function: { value: 86106 },
    if: { value: 20571 },
    return: { value: 20574 },
    var: { value: 86090 },
    else: { value: 20565 },
    for: { value: 20569 },
    new: { value: 86109 },
    in: { value: 8738868 },
    typeof: { value: 16863277 },
    while: { value: 20580 },
    case: { value: 20558 },
    break: { value: 20557 },
    try: { value: 20579 },
    catch: { value: 20559 },
    delete: { value: 16863278 },
    throw: { value: 86114 },
    switch: { value: 86112 },
    continue: { value: 20561 },
    default: { value: 20563 },
    instanceof: { value: 8476725 },
    do: { value: 20564 },
    void: { value: 16863279 },
    finally: { value: 20568 },
    async: { value: 209007 },
    await: { value: 209008 },
    class: { value: 86096 },
    const: { value: 86092 },
    constructor: { value: 12401 },
    debugger: { value: 20562 },
    export: { value: 20566 },
    extends: { value: 20567 },
    false: { value: 86021 },
    from: { value: 12404 },
    get: { value: 12402 },
    implements: { value: 36966 },
    import: { value: 86108 },
    interface: { value: 36967 },
    let: { value: 241739 },
    null: { value: 86023 },
    of: { value: 274549 },
    package: { value: 36968 },
    private: { value: 36969 },
    protected: { value: 36970 },
    public: { value: 36971 },
    set: { value: 12403 },
    static: { value: 36972 },
    super: { value: 86111 },
    true: { value: 86022 },
    with: { value: 20581 },
    yield: { value: 241773 },
    enum: { value: 86134 },
    eval: { value: 537079927 },
    as: { value: 77934 },
    arguments: { value: 537079928 },
    target: { value: 143494 },
    meta: { value: 143495 },
  });
function Ee(e, u, n) {
  for (; Fe[A(e)]; );
  return (
    (e.tokenValue = e.source.slice(e.tokenPos, e.index)),
    e.currentChar !== 92 && e.currentChar <= 126
      ? Ve[e.tokenValue] || 208897
      : p2(e, u, 0, n)
  );
}
function j1(e, u) {
  let n = Re(e);
  return R2(n) || s(e, 4), (e.tokenValue = G(n)), p2(e, u, 1, L[n] & 4);
}
function p2(e, u, n, t) {
  let i = e.index;
  for (; e.index < e.end; )
    if (e.currentChar === 92) {
      (e.tokenValue += e.source.slice(i, e.index)), (n = 1);
      let l = Re(e);
      R2(l) || s(e, 4),
        (t = t && L[l] & 4),
        (e.tokenValue += G(l)),
        (i = e.index);
    } else if (R2(e.currentChar) || F1(e, e.currentChar)) A(e);
    else break;
  e.index <= e.end && (e.tokenValue += e.source.slice(i, e.index));
  let o = e.tokenValue.length;
  if (t && o >= 2 && o <= 11) {
    let l = Ve[e.tokenValue];
    return l === void 0
      ? 208897
      : n
        ? l === 209008
          ? u & 4196352
            ? 121
            : l
          : u & 1024
            ? l === 36972 || (l & 36864) === 36864
              ? 122
              : (l & 20480) === 20480
                ? u & 268435456 && !(u & 8192)
                  ? l
                  : 121
                : 143483
            : u & 268435456 && !(u & 8192) && (l & 20480) === 20480
              ? l
              : l === 241773
                ? u & 268435456
                  ? 143483
                  : u & 2097152
                    ? 121
                    : l
                : l === 209007
                  ? 143483
                  : (l & 36864) === 36864
                    ? l
                    : 121
        : l;
  }
  return 208897;
}
function X1(e) {
  return _2(A(e)) || s(e, 94), 131;
}
function Re(e) {
  return (
    e.source.charCodeAt(e.index + 1) !== 117 && s(e, 4),
    (e.currentChar = e.source.charCodeAt((e.index += 2))),
    H1(e)
  );
}
function H1(e) {
  let u = 0,
    n = e.currentChar;
  if (n === 123) {
    let l = e.index - 2;
    for (; L[A(e)] & 64; )
      (u = (u << 4) | z(e.currentChar)),
        u > 1114111 && A2(l, e.line, e.index + 1, 102);
    return e.currentChar !== 125 && A2(l, e.line, e.index - 1, 6), A(e), u;
  }
  L[n] & 64 || s(e, 6);
  let t = e.source.charCodeAt(e.index + 1);
  L[t] & 64 || s(e, 6);
  let i = e.source.charCodeAt(e.index + 2);
  L[i] & 64 || s(e, 6);
  let o = e.source.charCodeAt(e.index + 3);
  return (
    L[o] & 64 || s(e, 6),
    (u = (z(n) << 12) | (z(t) << 8) | (z(i) << 4) | z(o)),
    (e.currentChar = e.source.charCodeAt((e.index += 4))),
    u
  );
}
var Oe = [
  129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129,
  129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129,
  129, 129, 128, 16842800, 134283267, 131, 208897, 8457015, 8455751, 134283267,
  67174411, 16, 8457014, 25233970, 18, 25233971, 67108877, 8457016, 134283266,
  134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266,
  134283266, 134283266, 21, 1074790417, 8456258, 1077936157, 8456259, 22, 133,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137,
  20, 8455497, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897,
  4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096,
  4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8455240, 1074790415,
  16842801, 129,
];
function D(e, u) {
  if (
    ((e.flags = (e.flags | 1) ^ 1),
    (e.startPos = e.index),
    (e.startColumn = e.column),
    (e.startLine = e.line),
    (e.token = Ue(e, u, 0)),
    e.onToken && e.token !== 1048576)
  ) {
    let n = {
      start: { line: e.linePos, column: e.colPos },
      end: { line: e.line, column: e.column },
    };
    e.onToken(L1(e.token), e.tokenPos, e.index, n);
  }
}
function Ue(e, u, n) {
  let t = e.index === 0,
    i = e.source,
    o = e.index,
    l = e.line,
    f = e.column;
  for (; e.index < e.end; ) {
    (e.tokenPos = e.index), (e.colPos = e.column), (e.linePos = e.line);
    let c = e.currentChar;
    if (c <= 126) {
      let m = Oe[c];
      switch (m) {
        case 67174411:
        case 16:
        case 2162700:
        case 1074790415:
        case 69271571:
        case 20:
        case 21:
        case 1074790417:
        case 18:
        case 16842801:
        case 133:
        case 129:
          return A(e), m;
        case 208897:
          return Ee(e, u, 0);
        case 4096:
          return Ee(e, u, 1);
        case 134283266:
          return Pe(e, u, 144);
        case 134283267:
          return U1(e, u, c);
        case 132:
          return Ne(e, u);
        case 137:
          return j1(e, u);
        case 131:
          return X1(e);
        case 128:
          A(e);
          break;
        case 130:
          (n |= 5), c2(e);
          break;
        case 136:
          G2(e, n), (n = (n & -5) | 1);
          break;
        case 8456258:
          let g = A(e);
          if (e.index < e.end) {
            if (g === 60)
              return e.index < e.end && A(e) === 61 ? (A(e), 4194334) : 8456516;
            if (g === 61) return A(e), 8456256;
            if (g === 33) {
              let d = e.index + 1;
              if (
                d + 1 < e.end &&
                i.charCodeAt(d) === 45 &&
                i.charCodeAt(d + 1) == 45
              ) {
                (e.column += 3),
                  (e.currentChar = i.charCodeAt((e.index += 3))),
                  (n = Ce(e, i, n, u, 2, e.tokenPos, e.linePos, e.colPos)),
                  (o = e.tokenPos),
                  (l = e.linePos),
                  (f = e.colPos);
                continue;
              }
              return 8456258;
            }
            if (g === 47) {
              if (!(u & 16)) return 8456258;
              let d = e.index + 1;
              if (d < e.end && ((g = i.charCodeAt(d)), g === 42 || g === 47))
                break;
              return A(e), 25;
            }
          }
          return 8456258;
        case 1077936157: {
          A(e);
          let d = e.currentChar;
          return d === 61
            ? A(e) === 61
              ? (A(e), 8455996)
              : 8455998
            : d === 62
              ? (A(e), 10)
              : 1077936157;
        }
        case 16842800:
          return A(e) !== 61
            ? 16842800
            : A(e) !== 61
              ? 8455999
              : (A(e), 8455997);
        case 8457015:
          return A(e) !== 61 ? 8457015 : (A(e), 4194342);
        case 8457014: {
          if ((A(e), e.index >= e.end)) return 8457014;
          let d = e.currentChar;
          return d === 61
            ? (A(e), 4194340)
            : d !== 42
              ? 8457014
              : A(e) !== 61
                ? 8457273
                : (A(e), 4194337);
        }
        case 8455497:
          return A(e) !== 61 ? 8455497 : (A(e), 4194343);
        case 25233970: {
          A(e);
          let d = e.currentChar;
          return d === 43
            ? (A(e), 33619995)
            : d === 61
              ? (A(e), 4194338)
              : 25233970;
        }
        case 25233971: {
          A(e);
          let d = e.currentChar;
          if (d === 45) {
            if ((A(e), (n & 1 || t) && e.currentChar === 62)) {
              u & 256 || s(e, 109),
                A(e),
                (n = Ce(e, i, n, u, 3, o, l, f)),
                (o = e.tokenPos),
                (l = e.linePos),
                (f = e.colPos);
              continue;
            }
            return 33619996;
          }
          return d === 61 ? (A(e), 4194339) : 25233971;
        }
        case 8457016: {
          if ((A(e), e.index < e.end)) {
            let d = e.currentChar;
            if (d === 47) {
              A(e),
                (n = x2(e, i, n, 0, e.tokenPos, e.linePos, e.colPos)),
                (o = e.tokenPos),
                (l = e.linePos),
                (f = e.colPos);
              continue;
            }
            if (d === 42) {
              A(e),
                (n = V1(e, i, n)),
                (o = e.tokenPos),
                (l = e.linePos),
                (f = e.colPos);
              continue;
            }
            if (u & 32768) return R1(e, u);
            if (d === 61) return A(e), 4259877;
          }
          return 8457016;
        }
        case 67108877:
          let a = A(e);
          if (a >= 48 && a <= 57) return Pe(e, u, 80);
          if (a === 46) {
            let d = e.index + 1;
            if (d < e.end && i.charCodeAt(d) === 46)
              return (
                (e.column += 2),
                (e.currentChar = i.charCodeAt((e.index += 2))),
                14
              );
          }
          return 67108877;
        case 8455240: {
          A(e);
          let d = e.currentChar;
          return d === 124
            ? (A(e), e.currentChar === 61 ? (A(e), 4194346) : 8979003)
            : d === 61
              ? (A(e), 4194344)
              : 8455240;
        }
        case 8456259: {
          A(e);
          let d = e.currentChar;
          if (d === 61) return A(e), 8456257;
          if (d !== 62) return 8456259;
          if ((A(e), e.index < e.end)) {
            let k = e.currentChar;
            if (k === 62) return A(e) === 61 ? (A(e), 4194336) : 8456518;
            if (k === 61) return A(e), 4194335;
          }
          return 8456517;
        }
        case 8455751: {
          A(e);
          let d = e.currentChar;
          return d === 38
            ? (A(e), e.currentChar === 61 ? (A(e), 4194347) : 8979258)
            : d === 61
              ? (A(e), 4194345)
              : 8455751;
        }
        case 22: {
          let d = A(e);
          if (d === 63)
            return A(e), e.currentChar === 61 ? (A(e), 4194348) : 276889982;
          if (d === 46) {
            let k = e.index + 1;
            if (k < e.end && ((d = i.charCodeAt(k)), !(d >= 48 && d <= 57)))
              return A(e), 67108991;
          }
          return 22;
        }
      }
    } else {
      if ((c ^ 8232) <= 1) {
        (n = (n & -5) | 1), c2(e);
        continue;
      }
      if ((c & 64512) === 55296 || (P2[(c >>> 5) + 34816] >>> c) & 31 & 1)
        return (
          (c & 64512) === 56320 &&
            ((c = ((c & 1023) << 10) | (c & 1023) | 65536),
            (P2[(c >>> 5) + 0] >>> c) & 31 & 1 || s(e, 18, G(c)),
            e.index++,
            (e.currentChar = c)),
          e.column++,
          (e.tokenValue = ""),
          p2(e, u, 0, 0)
        );
      if (q1(c)) {
        A(e);
        continue;
      }
      s(e, 18, G(c));
    }
  }
  return 1048576;
}
function z1(e, u) {
  return (
    (e.startPos = e.tokenPos = e.index),
    (e.startColumn = e.colPos = e.column),
    (e.startLine = e.linePos = e.line),
    (e.token = L[e.currentChar] & 8192 ? K1(e, u) : Ue(e, u, 0)),
    e.token
  );
}
function K1(e, u) {
  let n = e.currentChar,
    t = A(e),
    i = e.index;
  for (; t !== n; ) e.index >= e.end && s(e, 14), (t = A(e));
  return (
    t !== n && s(e, 14),
    (e.tokenValue = e.source.slice(i, e.index)),
    A(e),
    u & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
    134283267
  );
}
function d2(e, u) {
  if (
    ((e.startPos = e.tokenPos = e.index),
    (e.startColumn = e.colPos = e.column),
    (e.startLine = e.linePos = e.line),
    e.index >= e.end)
  )
    return (e.token = 1048576);
  switch (Oe[e.source.charCodeAt(e.index)]) {
    case 8456258: {
      A(e), e.currentChar === 47 ? (A(e), (e.token = 25)) : (e.token = 8456258);
      break;
    }
    case 2162700: {
      A(e), (e.token = 2162700);
      break;
    }
    default: {
      let t = 0;
      for (; e.index < e.end; ) {
        let o = L[e.source.charCodeAt(e.index)];
        if (
          (o & 1024
            ? ((t |= 5), c2(e))
            : o & 2048
              ? (G2(e, t), (t = (t & -5) | 1))
              : A(e),
          L[e.currentChar] & 16384)
        )
          break;
      }
      let i = e.source.slice(e.tokenPos, e.index);
      u & 512 && (e.tokenRaw = i), (e.tokenValue = i), (e.token = 138);
    }
  }
  return e.token;
}
function Y2(e) {
  if ((e.token & 143360) === 143360) {
    let { index: u } = e,
      n = e.currentChar;
    for (; L[n] & 32770; ) n = A(e);
    e.tokenValue += e.source.slice(u, e.index);
  }
  return (e.token = 208897), e.token;
}
function H(e, u) {
  var n;
  !(e.flags & 1) &&
    (e.token & 1048576) !== 1048576 &&
    s(e, 28, O[e.token & 255]),
    q(e, u, 1074790417) ||
      (n = e.onInsertedSemicolon) == null ||
      n.call(e, e.startPos);
}
function Me(e, u, n, t) {
  return u - n < 13 &&
    t === "use strict" &&
    ((e.token & 1048576) === 1048576 || e.flags & 1)
    ? 1
    : 0;
}
function ee(e, u, n) {
  return e.token !== n ? 0 : (D(e, u), 1);
}
function q(e, u, n) {
  return e.token !== n ? !1 : (D(e, u), !0);
}
function P(e, u, n) {
  e.token !== n && s(e, 23, O[n & 255]), D(e, u);
}
function r(e, u) {
  switch (u.type) {
    case "ArrayExpression":
      u.type = "ArrayPattern";
      let n = u.elements;
      for (let i = 0, o = n.length; i < o; ++i) {
        let l = n[i];
        l && r(e, l);
      }
      return;
    case "ObjectExpression":
      u.type = "ObjectPattern";
      let t = u.properties;
      for (let i = 0, o = t.length; i < o; ++i) r(e, t[i]);
      return;
    case "AssignmentExpression":
      (u.type = "AssignmentPattern"),
        u.operator !== "=" && s(e, 69),
        delete u.operator,
        r(e, u.left);
      return;
    case "Property":
      r(e, u.value);
      return;
    case "SpreadElement":
      (u.type = "RestElement"), r(e, u.argument);
  }
}
function O2(e, u, n, t, i) {
  u & 1024 &&
    ((t & 36864) === 36864 && s(e, 115),
    !i && (t & 537079808) === 537079808 && s(e, 116)),
    (t & 20480) === 20480 && s(e, 100),
    n & 24 && t === 241739 && s(e, 98),
    u & 4196352 && t === 209008 && s(e, 96),
    u & 2098176 && t === 241773 && s(e, 95, "yield");
}
function Je(e, u, n) {
  u & 1024 &&
    ((n & 36864) === 36864 && s(e, 115),
    (n & 537079808) === 537079808 && s(e, 116),
    n === 122 && s(e, 93),
    n === 121 && s(e, 93)),
    (n & 20480) === 20480 && s(e, 100),
    u & 4196352 && n === 209008 && s(e, 96),
    u & 2098176 && n === 241773 && s(e, 95, "yield");
}
function je(e, u, n) {
  return (
    n === 209008 && (u & 4196352 && s(e, 96), (e.destructible |= 128)),
    n === 241773 && u & 2097152 && s(e, 95, "yield"),
    (n & 20480) === 20480 || (n & 36864) === 36864 || n == 122
  );
}
function $1(e) {
  return e.property ? e.property.type === "PrivateIdentifier" : !1;
}
function Xe(e, u, n, t) {
  for (; u; ) {
    if (u["$" + n]) return t && s(e, 134), 1;
    t && u.loop && (t = 0), (u = u.$);
  }
  return 0;
}
function W1(e, u, n) {
  let t = u;
  for (; t; ) t["$" + n] && s(e, 133, n), (t = t.$);
  u["$" + n] = 1;
}
function y(e, u, n, t, i, o) {
  return (
    u & 2 && ((o.start = n), (o.end = e.startPos), (o.range = [n, e.startPos])),
    u & 4 &&
      ((o.loc = {
        start: { line: t, column: i },
        end: { line: e.startLine, column: e.startColumn },
      }),
      e.sourceFile && (o.loc.source = e.sourceFile)),
    o
  );
}
function U2(e) {
  switch (e.type) {
    case "JSXIdentifier":
      return e.name;
    case "JSXNamespacedName":
      return e.namespace + ":" + e.name;
    case "JSXMemberExpression":
      return U2(e.object) + "." + U2(e.property);
  }
}
function X2(e, u, n) {
  let t = J(s2(), 1024);
  return t2(e, u, t, n, 1, 0), t;
}
function Q2(e, u, ...n) {
  let { index: t, line: i, column: o } = e;
  return { type: u, params: n, index: t, line: i, column: o };
}
function s2() {
  return { parent: void 0, type: 2 };
}
function J(e, u) {
  return { parent: e, type: u, scopeError: void 0 };
}
function u2(e, u, n, t, i, o) {
  i & 4 ? He(e, u, n, t, i) : t2(e, u, n, t, i, o), o & 64 && l2(e, t);
}
function t2(e, u, n, t, i, o) {
  let l = n["#" + t];
  l &&
    !(l & 2) &&
    (i & 1
      ? (n.scopeError = Q2(e, 141, t))
      : (u & 256 && l & 64 && o & 2) || s(e, 141, t)),
    n.type & 128 &&
      n.parent["#" + t] &&
      !(n.parent["#" + t] & 2) &&
      s(e, 141, t),
    n.type & 1024 && l && !(l & 2) && i & 1 && (n.scopeError = Q2(e, 141, t)),
    n.type & 64 && n.parent["#" + t] & 768 && s(e, 154, t),
    (n["#" + t] = i);
}
function He(e, u, n, t, i) {
  let o = n;
  for (; o && !(o.type & 256); ) {
    let l = o["#" + t];
    l & 248 &&
      ((u & 256 &&
        !(u & 1024) &&
        ((i & 128 && l & 68) || (l & 128 && i & 68))) ||
        s(e, 141, t)),
      o === n && l & 1 && i & 1 && (o.scopeError = Q2(e, 141, t)),
      l & 768 && (!(l & 512) || !(u & 256) || u & 1024) && s(e, 141, t),
      (o["#" + t] = i),
      (o = o.parent);
  }
}
function l2(e, u) {
  e.exportedNames !== void 0 &&
    u !== "" &&
    (e.exportedNames["#" + u] && s(e, 142, u), (e.exportedNames["#" + u] = 1));
}
function _1(e, u) {
  e.exportedBindings !== void 0 &&
    u !== "" &&
    (e.exportedBindings["#" + u] = 1);
}
function Y1(e, u) {
  return function (n, t, i, o, l) {
    let f = { type: n, value: t };
    e & 2 && ((f.start = i), (f.end = o), (f.range = [i, o])),
      e & 4 && (f.loc = l),
      u.push(f);
  };
}
function Q1(e, u) {
  return function (n, t, i, o) {
    let l = { token: n };
    e & 2 && ((l.start = t), (l.end = i), (l.range = [t, i])),
      e & 4 && (l.loc = o),
      u.push(l);
  };
}
function ue(e, u) {
  return e & 2098176
    ? (e & 2048 && u === 209008) || (e & 2097152 && u === 241773)
      ? !1
      : (u & 143360) === 143360 || (u & 12288) === 12288
    : (u & 143360) === 143360 || (u & 12288) === 12288 || (u & 36864) === 36864;
}
function ne(e, u, n) {
  (n & 537079808) === 537079808 && (u & 1024 && s(e, 116), (e.flags |= 512)),
    ue(u, n) || s(e, 0);
}
function Z1(e, u, n, t, i) {
  return {
    source: e,
    flags: 0,
    index: 0,
    line: 1,
    column: 0,
    startPos: 0,
    end: e.length,
    tokenPos: 0,
    startColumn: 0,
    colPos: 0,
    linePos: 1,
    startLine: 1,
    sourceFile: u,
    tokenValue: "",
    token: 1048576,
    tokenRaw: "",
    tokenRegExp: void 0,
    currentChar: e.charCodeAt(0),
    exportedNames: [],
    exportedBindings: [],
    assignable: 1,
    destructible: 0,
    onComment: n,
    onToken: t,
    onInsertedSemicolon: i,
    leadingDecorators: [],
  };
}
function r1(e, u, n) {
  let t = "",
    i,
    o,
    l;
  u != null &&
    (u.module && (n |= 3072),
    u.next && (n |= 1),
    u.loc && (n |= 4),
    u.ranges && (n |= 2),
    u.uniqueKeyInPattern && (n |= 536870912),
    u.lexical && (n |= 64),
    u.webcompat && (n |= 256),
    u.directives && (n |= 520),
    u.globalReturn && (n |= 32),
    u.raw && (n |= 512),
    u.preserveParens && (n |= 128),
    u.impliedStrict && (n |= 1024),
    u.jsx && (n |= 16),
    u.source && (t = u.source),
    u.onComment != null &&
      (i = Array.isArray(u.onComment) ? Y1(n, u.onComment) : u.onComment),
    u.onInsertedSemicolon != null && (o = u.onInsertedSemicolon),
    u.onToken != null &&
      (l = Array.isArray(u.onToken) ? Q1(n, u.onToken) : u.onToken));
  let f = Z1(e, t, i, l, o);
  n & 1 && N1(f);
  let c = n & 64 ? s2() : void 0,
    m = [],
    g = "script";
  if (n & 2048) {
    if (((g = "module"), (m = x1(f, n | 8192, c)), c))
      for (let d in f.exportedBindings)
        d[0] === "#" && !c[d] && s(f, 143, d.slice(1));
  } else m = G1(f, n | 8192, c);
  let a = { type: "Program", sourceType: g, body: m };
  return (
    n & 2 && ((a.start = 0), (a.end = e.length), (a.range = [0, e.length])),
    n & 4 &&
      ((a.loc = {
        start: { line: 1, column: 0 },
        end: { line: f.line, column: f.column },
      }),
      f.sourceFile && (a.loc.source = t)),
    a
  );
}
function G1(e, u, n) {
  D(e, u | 32768 | 268435456);
  let t = [];
  for (; e.token === 134283267; ) {
    let {
        index: i,
        tokenPos: o,
        tokenValue: l,
        linePos: f,
        colPos: c,
        token: m,
      } = e,
      g = X(e, u);
    Me(e, i, o, l) && (u |= 1024), t.push(te(e, u, g, m, o, f, c));
  }
  for (; e.token !== 1048576; ) t.push(w2(e, u, n, 4, {}));
  return t;
}
function x1(e, u, n) {
  D(e, u | 32768);
  let t = [];
  if (u & 8)
    for (; e.token === 134283267; ) {
      let { tokenPos: i, linePos: o, colPos: l, token: f } = e;
      t.push(te(e, u, X(e, u), f, i, o, l));
    }
  for (; e.token !== 1048576; ) t.push(p1(e, u, n));
  return t;
}
function p1(e, u, n) {
  e.leadingDecorators = K2(e, u);
  let t;
  switch (e.token) {
    case 20566:
      t = bu(e, u, n);
      break;
    case 86108:
      t = hu(e, u, n);
      break;
    default:
      t = w2(e, u, n, 4, {});
  }
  return e.leadingDecorators.length && s(e, 165), t;
}
function w2(e, u, n, t, i) {
  let o = e.tokenPos,
    l = e.linePos,
    f = e.colPos;
  switch (e.token) {
    case 86106:
      return i2(e, u, n, t, 1, 0, 0, o, l, f);
    case 133:
    case 86096:
      return r2(e, u, n, 0, o, l, f);
    case 86092:
      return Z2(e, u, n, 16, 0, o, l, f);
    case 241739:
      return ku(e, u, n, t, o, l, f);
    case 20566:
      s(e, 101, "export");
    case 86108:
      switch ((D(e, u), e.token)) {
        case 67174411:
          return _e(e, u, o, l, f);
        case 67108877:
          return We(e, u, o, l, f);
        default:
          s(e, 101, "import");
      }
    case 209007:
      return ze(e, u, n, t, i, 1, o, l, f);
    default:
      return S2(e, u, n, t, i, 1, o, l, f);
  }
}
function S2(e, u, n, t, i, o, l, f, c) {
  switch (e.token) {
    case 86090:
      return Ke(e, u, n, 0, l, f, c);
    case 20574:
      return uu(e, u, l, f, c);
    case 20571:
      return tu(e, u, n, i, l, f, c);
    case 20569:
      return Au(e, u, n, i, l, f, c);
    case 20564:
      return yu(e, u, n, i, l, f, c);
    case 20580:
      return lu(e, u, n, i, l, f, c);
    case 86112:
      return ou(e, u, n, i, l, f, c);
    case 1074790417:
      return nu(e, u, l, f, c);
    case 2162700:
      return E2(e, u, n && J(n, 2), i, l, f, c);
    case 86114:
      return iu(e, u, l, f, c);
    case 20557:
      return cu(e, u, i, l, f, c);
    case 20561:
      return fu(e, u, i, l, f, c);
    case 20579:
      return au(e, u, n, i, l, f, c);
    case 20581:
      return du(e, u, n, i, l, f, c);
    case 20562:
      return su(e, u, l, f, c);
    case 209007:
      return ze(e, u, n, t, i, 0, l, f, c);
    case 20559:
      s(e, 157);
    case 20568:
      s(e, 158);
    case 86106:
      s(e, u & 1024 ? 74 : u & 256 ? 75 : 76);
    case 86096:
      s(e, 77);
    default:
      return eu(e, u, n, t, i, o, l, f, c);
  }
}
function eu(e, u, n, t, i, o, l, f, c) {
  let { tokenValue: m, token: g } = e,
    a;
  switch (g) {
    case 241739:
      (a = I(e, u)), u & 1024 && s(e, 83), e.token === 69271571 && s(e, 82);
      break;
    default:
      a = K(e, u, 2, 0, 1, 0, 1, e.tokenPos, e.linePos, e.colPos);
  }
  return g & 143360 && e.token === 21
    ? ie(e, u, n, t, i, m, a, g, o, l, f, c)
    : ((a = N(e, u, a, 0, 0, l, f, c)),
      (a = U(e, u, 0, 0, l, f, c, a)),
      e.token === 18 && (a = p(e, u, 0, l, f, c, a)),
      h2(e, u, a, l, f, c));
}
function E2(e, u, n, t, i, o, l) {
  let f = [];
  for (P(e, u | 32768, 2162700); e.token !== 1074790415; )
    f.push(w2(e, u, n, 2, { $: t }));
  return (
    P(e, u | 32768, 1074790415),
    y(e, u, i, o, l, { type: "BlockStatement", body: f })
  );
}
function uu(e, u, n, t, i) {
  !(u & 32) && u & 8192 && s(e, 90), D(e, u | 32768);
  let o =
    e.flags & 1 || e.token & 1048576
      ? null
      : j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  return (
    H(e, u | 32768), y(e, u, n, t, i, { type: "ReturnStatement", argument: o })
  );
}
function h2(e, u, n, t, i, o) {
  return (
    H(e, u | 32768),
    y(e, u, t, i, o, { type: "ExpressionStatement", expression: n })
  );
}
function ie(e, u, n, t, i, o, l, f, c, m, g, a) {
  O2(e, u, 0, f, 1), W1(e, i, o), D(e, u | 32768);
  let d =
    c && !(u & 1024) && u & 256 && e.token === 86106
      ? i2(e, u, J(n, 2), t, 0, 0, 0, e.tokenPos, e.linePos, e.colPos)
      : S2(e, u, n, t, i, c, e.tokenPos, e.linePos, e.colPos);
  return y(e, u, m, g, a, { type: "LabeledStatement", label: l, body: d });
}
function ze(e, u, n, t, i, o, l, f, c) {
  let { token: m, tokenValue: g } = e,
    a = I(e, u);
  if (e.token === 21) return ie(e, u, n, t, i, g, a, m, 1, l, f, c);
  let d = e.flags & 1;
  if (!d) {
    if (e.token === 86106)
      return o || s(e, 120), i2(e, u, n, t, 1, 0, 1, l, f, c);
    if ((e.token & 143360) === 143360)
      return (
        (a = e1(e, u, 1, l, f, c)),
        e.token === 18 && (a = p(e, u, 0, l, f, c, a)),
        h2(e, u, a, l, f, c)
      );
  }
  return (
    e.token === 67174411
      ? (a = de(e, u, a, 1, 1, 0, d, l, f, c))
      : (e.token === 10 &&
          (ne(e, u, m), (a = z2(e, u, e.tokenValue, a, 0, 1, 0, l, f, c))),
        (e.assignable = 1)),
    (a = N(e, u, a, 0, 0, l, f, c)),
    (a = U(e, u, 0, 0, l, f, c, a)),
    (e.assignable = 1),
    e.token === 18 && (a = p(e, u, 0, l, f, c, a)),
    h2(e, u, a, l, f, c)
  );
}
function te(e, u, n, t, i, o, l) {
  return (
    t !== 1074790417 &&
      ((e.assignable = 2),
      (n = N(e, u, n, 0, 0, i, o, l)),
      e.token !== 1074790417 &&
        ((n = U(e, u, 0, 0, i, o, l, n)),
        e.token === 18 && (n = p(e, u, 0, i, o, l, n))),
      H(e, u | 32768)),
    u & 8 && n.type === "Literal" && typeof n.value == "string"
      ? y(e, u, i, o, l, {
          type: "ExpressionStatement",
          expression: n,
          directive: n.raw.slice(1, -1),
        })
      : y(e, u, i, o, l, { type: "ExpressionStatement", expression: n })
  );
}
function nu(e, u, n, t, i) {
  return D(e, u | 32768), y(e, u, n, t, i, { type: "EmptyStatement" });
}
function iu(e, u, n, t, i) {
  D(e, u | 32768), e.flags & 1 && s(e, 88);
  let o = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  return (
    H(e, u | 32768), y(e, u, n, t, i, { type: "ThrowStatement", argument: o })
  );
}
function tu(e, u, n, t, i, o, l) {
  D(e, u), P(e, u | 32768, 67174411), (e.assignable = 1);
  let f = j(e, u, 0, 1, e.tokenPos, e.line, e.colPos);
  P(e, u | 32768, 16);
  let c = we(e, u, n, t, e.tokenPos, e.linePos, e.colPos),
    m = null;
  return (
    e.token === 20565 &&
      (D(e, u | 32768), (m = we(e, u, n, t, e.tokenPos, e.linePos, e.colPos))),
    y(e, u, i, o, l, {
      type: "IfStatement",
      test: f,
      consequent: c,
      alternate: m,
    })
  );
}
function we(e, u, n, t, i, o, l) {
  return u & 1024 || !(u & 256) || e.token !== 86106
    ? S2(e, u, n, 0, { $: t }, 0, e.tokenPos, e.linePos, e.colPos)
    : i2(e, u, J(n, 2), 0, 0, 0, 0, i, o, l);
}
function ou(e, u, n, t, i, o, l) {
  D(e, u), P(e, u | 32768, 67174411);
  let f = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  P(e, u, 16), P(e, u, 2162700);
  let c = [],
    m = 0;
  for (n && (n = J(n, 8)); e.token !== 1074790415; ) {
    let { tokenPos: g, linePos: a, colPos: d } = e,
      k = null,
      C = [];
    for (
      q(e, u | 32768, 20558)
        ? (k = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos))
        : (P(e, u | 32768, 20563), m && s(e, 87), (m = 1)),
        P(e, u | 32768, 21);
      e.token !== 20558 && e.token !== 1074790415 && e.token !== 20563;

    )
      C.push(w2(e, u | 4096, n, 2, { $: t }));
    c.push(y(e, u, g, a, d, { type: "SwitchCase", test: k, consequent: C }));
  }
  return (
    P(e, u | 32768, 1074790415),
    y(e, u, i, o, l, { type: "SwitchStatement", discriminant: f, cases: c })
  );
}
function lu(e, u, n, t, i, o, l) {
  D(e, u), P(e, u | 32768, 67174411);
  let f = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  P(e, u | 32768, 16);
  let c = C2(e, u, n, t);
  return y(e, u, i, o, l, { type: "WhileStatement", test: f, body: c });
}
function C2(e, u, n, t) {
  return S2(
    e,
    ((u | 134217728) ^ 134217728) | 131072,
    n,
    0,
    { loop: 1, $: t },
    0,
    e.tokenPos,
    e.linePos,
    e.colPos,
  );
}
function fu(e, u, n, t, i, o) {
  u & 131072 || s(e, 66), D(e, u);
  let l = null;
  if (!(e.flags & 1) && e.token & 143360) {
    let { tokenValue: f } = e;
    (l = I(e, u | 32768)), Xe(e, n, f, 1) || s(e, 135, f);
  }
  return (
    H(e, u | 32768), y(e, u, t, i, o, { type: "ContinueStatement", label: l })
  );
}
function cu(e, u, n, t, i, o) {
  D(e, u | 32768);
  let l = null;
  if (!(e.flags & 1) && e.token & 143360) {
    let { tokenValue: f } = e;
    (l = I(e, u | 32768)), Xe(e, n, f, 0) || s(e, 135, f);
  } else u & 135168 || s(e, 67);
  return (
    H(e, u | 32768), y(e, u, t, i, o, { type: "BreakStatement", label: l })
  );
}
function du(e, u, n, t, i, o, l) {
  D(e, u), u & 1024 && s(e, 89), P(e, u | 32768, 67174411);
  let f = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  P(e, u | 32768, 16);
  let c = S2(e, u, n, 2, t, 0, e.tokenPos, e.linePos, e.colPos);
  return y(e, u, i, o, l, { type: "WithStatement", object: f, body: c });
}
function su(e, u, n, t, i) {
  return (
    D(e, u | 32768),
    H(e, u | 32768),
    y(e, u, n, t, i, { type: "DebuggerStatement" })
  );
}
function au(e, u, n, t, i, o, l) {
  D(e, u | 32768);
  let f = n ? J(n, 32) : void 0,
    c = E2(e, u, f, { $: t }, e.tokenPos, e.linePos, e.colPos),
    { tokenPos: m, linePos: g, colPos: a } = e,
    d = q(e, u | 32768, 20559) ? mu(e, u, n, t, m, g, a) : null,
    k = null;
  if (e.token === 20568) {
    D(e, u | 32768);
    let C = f ? J(n, 4) : void 0;
    k = E2(e, u, C, { $: t }, e.tokenPos, e.linePos, e.colPos);
  }
  return (
    !d && !k && s(e, 86),
    y(e, u, i, o, l, {
      type: "TryStatement",
      block: c,
      handler: d,
      finalizer: k,
    })
  );
}
function mu(e, u, n, t, i, o, l) {
  let f = null,
    c = n;
  q(e, u, 67174411) &&
    (n && (n = J(n, 4)),
    (f = i1(
      e,
      u,
      n,
      (e.token & 2097152) === 2097152 ? 256 : 512,
      0,
      e.tokenPos,
      e.linePos,
      e.colPos,
    )),
    e.token === 18 ? s(e, 84) : e.token === 1077936157 && s(e, 85),
    P(e, u | 32768, 16),
    n && (c = J(n, 64)));
  let m = E2(e, u, c, { $: t }, e.tokenPos, e.linePos, e.colPos);
  return y(e, u, i, o, l, { type: "CatchClause", param: f, body: m });
}
function gu(e, u, n, t, i, o) {
  n && (n = J(n, 2));
  let l = 540672;
  u = ((u | l) ^ l) | 262144;
  let { body: f } = E2(e, u, n, {}, t, i, o);
  return y(e, u, t, i, o, { type: "StaticBlock", body: f });
}
function yu(e, u, n, t, i, o, l) {
  D(e, u | 32768);
  let f = C2(e, u, n, t);
  P(e, u, 20580), P(e, u | 32768, 67174411);
  let c = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos);
  return (
    P(e, u | 32768, 16),
    q(e, u | 32768, 1074790417),
    y(e, u, i, o, l, { type: "DoWhileStatement", body: f, test: c })
  );
}
function ku(e, u, n, t, i, o, l) {
  let { token: f, tokenValue: c } = e,
    m = I(e, u);
  if (e.token & 2240512) {
    let g = g2(e, u, n, 8, 0);
    return (
      H(e, u | 32768),
      y(e, u, i, o, l, {
        type: "VariableDeclaration",
        kind: "let",
        declarations: g,
      })
    );
  }
  if (((e.assignable = 1), u & 1024 && s(e, 83), e.token === 21))
    return ie(e, u, n, t, {}, c, m, f, 0, i, o, l);
  if (e.token === 10) {
    let g;
    u & 64 && (g = X2(e, u, c)),
      (e.flags = (e.flags | 128) ^ 128),
      (m = B2(e, u, g, [m], 0, i, o, l));
  } else (m = N(e, u, m, 0, 0, i, o, l)), (m = U(e, u, 0, 0, i, o, l, m));
  return e.token === 18 && (m = p(e, u, 0, i, o, l, m)), h2(e, u, m, i, o, l);
}
function Z2(e, u, n, t, i, o, l, f) {
  D(e, u);
  let c = g2(e, u, n, t, i);
  return (
    H(e, u | 32768),
    y(e, u, o, l, f, {
      type: "VariableDeclaration",
      kind: t & 8 ? "let" : "const",
      declarations: c,
    })
  );
}
function Ke(e, u, n, t, i, o, l) {
  D(e, u);
  let f = g2(e, u, n, 4, t);
  return (
    H(e, u | 32768),
    y(e, u, i, o, l, {
      type: "VariableDeclaration",
      kind: "var",
      declarations: f,
    })
  );
}
function g2(e, u, n, t, i) {
  let o = 1,
    l = [Se(e, u, n, t, i)];
  for (; q(e, u, 18); ) o++, l.push(Se(e, u, n, t, i));
  return o > 1 && i & 32 && e.token & 262144 && s(e, 59, O[e.token & 255]), l;
}
function Se(e, u, n, t, i) {
  let { token: o, tokenPos: l, linePos: f, colPos: c } = e,
    m = null,
    g = i1(e, u, n, t, i, l, f, c);
  return (
    e.token === 1077936157
      ? (D(e, u | 32768),
        (m = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos)),
        (i & 32 || !(o & 2097152)) &&
          (e.token === 274549 ||
            (e.token === 8738868 && (o & 2097152 || !(t & 4) || u & 1024))) &&
          k2(l, e.line, e.index - 3, 58, e.token === 274549 ? "of" : "in"))
      : (t & 16 || (o & 2097152) > 0) &&
        (e.token & 262144) !== 262144 &&
        s(e, 57, t & 16 ? "const" : "destructuring"),
    y(e, u, l, f, c, { type: "VariableDeclarator", id: g, init: m })
  );
}
function Au(e, u, n, t, i, o, l) {
  D(e, u);
  let f =
    ((u & 4194304) > 0 || ((u & 2048) > 0 && (u & 8192) > 0)) &&
    q(e, u, 209008);
  P(e, u | 32768, 67174411), n && (n = J(n, 1));
  let c = null,
    m = null,
    g = 0,
    a = null,
    d = e.token === 86090 || e.token === 241739 || e.token === 86092,
    k,
    { token: C, tokenPos: b, linePos: E, colPos: w } = e;
  if (
    (d
      ? C === 241739
        ? ((a = I(e, u)),
          e.token & 2240512
            ? (e.token === 8738868
                ? u & 1024 && s(e, 65)
                : (a = y(e, u, b, E, w, {
                    type: "VariableDeclaration",
                    kind: "let",
                    declarations: g2(e, u | 134217728, n, 8, 32),
                  })),
              (e.assignable = 1))
            : u & 1024
              ? s(e, 65)
              : ((d = !1),
                (e.assignable = 1),
                (a = N(e, u, a, 0, 0, b, E, w)),
                e.token === 274549 && s(e, 112)))
        : (D(e, u),
          (a = y(
            e,
            u,
            b,
            E,
            w,
            C === 86090
              ? {
                  type: "VariableDeclaration",
                  kind: "var",
                  declarations: g2(e, u | 134217728, n, 4, 32),
                }
              : {
                  type: "VariableDeclaration",
                  kind: "const",
                  declarations: g2(e, u | 134217728, n, 16, 32),
                },
          )),
          (e.assignable = 1))
      : C === 1074790417
        ? f && s(e, 80)
        : (C & 2097152) === 2097152
          ? ((a =
              C === 2162700
                ? Y(e, u, void 0, 1, 0, 0, 2, 32, b, E, w)
                : _(e, u, void 0, 1, 0, 0, 2, 32, b, E, w)),
            (g = e.destructible),
            u & 256 && g & 64 && s(e, 61),
            (e.assignable = g & 16 ? 2 : 1),
            (a = N(e, u | 134217728, a, 0, 0, e.tokenPos, e.linePos, e.colPos)))
          : (a = W(e, u | 134217728, 1, 0, 1, b, E, w)),
    (e.token & 262144) === 262144)
  ) {
    if (e.token === 274549) {
      e.assignable & 2 && s(e, 78, f ? "await" : "of"),
        r(e, a),
        D(e, u | 32768),
        (k = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos)),
        P(e, u | 32768, 16);
      let S = C2(e, u, n, t);
      return y(e, u, i, o, l, {
        type: "ForOfStatement",
        left: a,
        right: k,
        body: S,
        await: f,
      });
    }
    e.assignable & 2 && s(e, 78, "in"),
      r(e, a),
      D(e, u | 32768),
      f && s(e, 80),
      (k = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos)),
      P(e, u | 32768, 16);
    let M = C2(e, u, n, t);
    return y(e, u, i, o, l, {
      type: "ForInStatement",
      body: M,
      left: a,
      right: k,
    });
  }
  f && s(e, 80),
    d ||
      (g & 8 && e.token !== 1077936157 && s(e, 78, "loop"),
      (a = U(e, u | 134217728, 0, 0, b, E, w, a))),
    e.token === 18 && (a = p(e, u, 0, e.tokenPos, e.linePos, e.colPos, a)),
    P(e, u | 32768, 1074790417),
    e.token !== 1074790417 &&
      (c = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos)),
    P(e, u | 32768, 1074790417),
    e.token !== 16 && (m = j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos)),
    P(e, u | 32768, 16);
  let v = C2(e, u, n, t);
  return y(e, u, i, o, l, {
    type: "ForStatement",
    init: a,
    test: c,
    update: m,
    body: v,
  });
}
function $e(e, u, n) {
  return (
    ue(u, e.token) || s(e, 115),
    (e.token & 537079808) === 537079808 && s(e, 116),
    n && t2(e, u, n, e.tokenValue, 8, 0),
    I(e, u)
  );
}
function hu(e, u, n) {
  let t = e.tokenPos,
    i = e.linePos,
    o = e.colPos;
  D(e, u);
  let l = null,
    { tokenPos: f, linePos: c, colPos: m } = e,
    g = [];
  if (e.token === 134283267) l = X(e, u);
  else {
    if (e.token & 143360) {
      let a = $e(e, u, n);
      if (
        ((g = [y(e, u, f, c, m, { type: "ImportDefaultSpecifier", local: a })]),
        q(e, u, 18))
      )
        switch (e.token) {
          case 8457014:
            g.push(Be(e, u, n));
            break;
          case 2162700:
            ve(e, u, n, g);
            break;
          default:
            s(e, 105);
        }
    } else
      switch (e.token) {
        case 8457014:
          g = [Be(e, u, n)];
          break;
        case 2162700:
          ve(e, u, n, g);
          break;
        case 67174411:
          return _e(e, u, t, i, o);
        case 67108877:
          return We(e, u, t, i, o);
        default:
          s(e, 28, O[e.token & 255]);
      }
    l = Du(e, u);
  }
  return (
    H(e, u | 32768),
    y(e, u, t, i, o, { type: "ImportDeclaration", specifiers: g, source: l })
  );
}
function Be(e, u, n) {
  let { tokenPos: t, linePos: i, colPos: o } = e;
  return (
    D(e, u),
    P(e, u, 77934),
    (e.token & 134217728) === 134217728 &&
      k2(t, e.line, e.index, 28, O[e.token & 255]),
    y(e, u, t, i, o, { type: "ImportNamespaceSpecifier", local: $e(e, u, n) })
  );
}
function Du(e, u) {
  return (
    q(e, u, 12404) || s(e, 28, O[e.token & 255]),
    e.token !== 134283267 && s(e, 103, "Import"),
    X(e, u)
  );
}
function ve(e, u, n, t) {
  for (D(e, u); e.token & 143360; ) {
    let { token: i, tokenValue: o, tokenPos: l, linePos: f, colPos: c } = e,
      m = I(e, u),
      g;
    q(e, u, 77934)
      ? ((e.token & 134217728) === 134217728 || e.token === 18
          ? s(e, 104)
          : O2(e, u, 16, e.token, 0),
        (o = e.tokenValue),
        (g = I(e, u)))
      : (O2(e, u, 16, i, 0), (g = m)),
      n && t2(e, u, n, o, 8, 0),
      t.push(
        y(e, u, l, f, c, { type: "ImportSpecifier", local: g, imported: m }),
      ),
      e.token !== 1074790415 && P(e, u, 18);
  }
  return P(e, u, 1074790415), t;
}
function We(e, u, n, t, i) {
  let o = Qe(
    e,
    u,
    y(e, u, n, t, i, { type: "Identifier", name: "import" }),
    n,
    t,
    i,
  );
  return (
    (o = N(e, u, o, 0, 0, n, t, i)),
    (o = U(e, u, 0, 0, n, t, i, o)),
    e.token === 18 && (o = p(e, u, 0, n, t, i, o)),
    h2(e, u, o, n, t, i)
  );
}
function _e(e, u, n, t, i) {
  let o = Ze(e, u, 0, n, t, i);
  return (
    (o = N(e, u, o, 0, 0, n, t, i)),
    e.token === 18 && (o = p(e, u, 0, n, t, i, o)),
    h2(e, u, o, n, t, i)
  );
}
function bu(e, u, n) {
  let t = e.tokenPos,
    i = e.linePos,
    o = e.colPos;
  D(e, u | 32768);
  let l = [],
    f = null,
    c = null,
    m;
  if (q(e, u | 32768, 20563)) {
    switch (e.token) {
      case 86106: {
        f = i2(e, u, n, 4, 1, 1, 0, e.tokenPos, e.linePos, e.colPos);
        break;
      }
      case 133:
      case 86096:
        f = r2(e, u, n, 1, e.tokenPos, e.linePos, e.colPos);
        break;
      case 209007:
        let { tokenPos: g, linePos: a, colPos: d } = e;
        f = I(e, u);
        let { flags: k } = e;
        k & 1 ||
          (e.token === 86106
            ? (f = i2(e, u, n, 4, 1, 1, 1, g, a, d))
            : e.token === 67174411
              ? ((f = de(e, u, f, 1, 1, 0, k, g, a, d)),
                (f = N(e, u, f, 0, 0, g, a, d)),
                (f = U(e, u, 0, 0, g, a, d, f)))
              : e.token & 143360 &&
                (n && (n = X2(e, u, e.tokenValue)),
                (f = I(e, u)),
                (f = B2(e, u, n, [f], 1, g, a, d))));
        break;
      default:
        (f = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos)), H(e, u | 32768);
    }
    return (
      n && l2(e, "default"),
      y(e, u, t, i, o, { type: "ExportDefaultDeclaration", declaration: f })
    );
  }
  switch (e.token) {
    case 8457014: {
      D(e, u);
      let k = null;
      return (
        q(e, u, 77934) && (n && l2(e, e.tokenValue), (k = I(e, u))),
        P(e, u, 12404),
        e.token !== 134283267 && s(e, 103, "Export"),
        (c = X(e, u)),
        H(e, u | 32768),
        y(e, u, t, i, o, {
          type: "ExportAllDeclaration",
          source: c,
          exported: k,
        })
      );
    }
    case 2162700: {
      D(e, u);
      let k = [],
        C = [];
      for (; e.token & 143360; ) {
        let { tokenPos: b, tokenValue: E, linePos: w, colPos: v } = e,
          M = I(e, u),
          S;
        e.token === 77934
          ? (D(e, u),
            (e.token & 134217728) === 134217728 && s(e, 104),
            n && (k.push(e.tokenValue), C.push(E)),
            (S = I(e, u)))
          : (n && (k.push(e.tokenValue), C.push(e.tokenValue)), (S = M)),
          l.push(
            y(e, u, b, w, v, {
              type: "ExportSpecifier",
              local: M,
              exported: S,
            }),
          ),
          e.token !== 1074790415 && P(e, u, 18);
      }
      if ((P(e, u, 1074790415), q(e, u, 12404)))
        e.token !== 134283267 && s(e, 103, "Export"), (c = X(e, u));
      else if (n) {
        let b = 0,
          E = k.length;
        for (; b < E; b++) l2(e, k[b]);
        for (b = 0, E = C.length; b < E; b++) _1(e, C[b]);
      }
      H(e, u | 32768);
      break;
    }
    case 86096:
      f = r2(e, u, n, 2, e.tokenPos, e.linePos, e.colPos);
      break;
    case 86106:
      f = i2(e, u, n, 4, 1, 2, 0, e.tokenPos, e.linePos, e.colPos);
      break;
    case 241739:
      f = Z2(e, u, n, 8, 64, e.tokenPos, e.linePos, e.colPos);
      break;
    case 86092:
      f = Z2(e, u, n, 16, 64, e.tokenPos, e.linePos, e.colPos);
      break;
    case 86090:
      f = Ke(e, u, n, 64, e.tokenPos, e.linePos, e.colPos);
      break;
    case 209007:
      let { tokenPos: g, linePos: a, colPos: d } = e;
      if ((D(e, u), !(e.flags & 1) && e.token === 86106)) {
        (f = i2(e, u, n, 4, 1, 2, 1, g, a, d)),
          n && ((m = f.id ? f.id.name : ""), l2(e, m));
        break;
      }
    default:
      s(e, 28, O[e.token & 255]);
  }
  return y(e, u, t, i, o, {
    type: "ExportNamedDeclaration",
    declaration: f,
    specifiers: l,
    source: c,
  });
}
function R(e, u, n, t, i, o, l) {
  let f = K(e, u, 2, 0, n, t, 1, i, o, l);
  return (f = N(e, u, f, t, 0, i, o, l)), U(e, u, t, 0, i, o, l, f);
}
function p(e, u, n, t, i, o, l) {
  let f = [l];
  for (; q(e, u | 32768, 18); )
    f.push(R(e, u, 1, n, e.tokenPos, e.linePos, e.colPos));
  return y(e, u, t, i, o, { type: "SequenceExpression", expressions: f });
}
function j(e, u, n, t, i, o, l) {
  let f = R(e, u, t, n, i, o, l);
  return e.token === 18 ? p(e, u, n, i, o, l, f) : f;
}
function U(e, u, n, t, i, o, l, f) {
  let { token: c } = e;
  if ((c & 4194304) === 4194304) {
    e.assignable & 2 && s(e, 24),
      ((!t && c === 1077936157 && f.type === "ArrayExpression") ||
        f.type === "ObjectExpression") &&
        r(e, f),
      D(e, u | 32768);
    let m = R(e, u, 1, n, e.tokenPos, e.linePos, e.colPos);
    return (
      (e.assignable = 2),
      y(
        e,
        u,
        i,
        o,
        l,
        t
          ? { type: "AssignmentPattern", left: f, right: m }
          : {
              type: "AssignmentExpression",
              left: f,
              operator: O[c & 255],
              right: m,
            },
      )
    );
  }
  return (
    (c & 8454144) === 8454144 && (f = n2(e, u, n, i, o, l, 4, c, f)),
    q(e, u | 32768, 22) && (f = f2(e, u, f, i, o, l)),
    f
  );
}
function L2(e, u, n, t, i, o, l, f) {
  let { token: c } = e;
  D(e, u | 32768);
  let m = R(e, u, 1, n, e.tokenPos, e.linePos, e.colPos);
  return (
    (f = y(
      e,
      u,
      i,
      o,
      l,
      t
        ? { type: "AssignmentPattern", left: f, right: m }
        : {
            type: "AssignmentExpression",
            left: f,
            operator: O[c & 255],
            right: m,
          },
    )),
    (e.assignable = 2),
    f
  );
}
function f2(e, u, n, t, i, o) {
  let l = R(
    e,
    (u | 134217728) ^ 134217728,
    1,
    0,
    e.tokenPos,
    e.linePos,
    e.colPos,
  );
  P(e, u | 32768, 21), (e.assignable = 1);
  let f = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos);
  return (
    (e.assignable = 2),
    y(e, u, t, i, o, {
      type: "ConditionalExpression",
      test: n,
      consequent: l,
      alternate: f,
    })
  );
}
function n2(e, u, n, t, i, o, l, f, c) {
  let m = -((u & 134217728) > 0) & 8738868,
    g,
    a;
  for (
    e.assignable = 2;
    e.token & 8454144 &&
    ((g = e.token),
    (a = g & 3840),
    ((g & 524288 && f & 268435456) || (f & 524288 && g & 268435456)) &&
      s(e, 160),
    !(a + ((g === 8457273) << 8) - ((m === g) << 12) <= l));

  )
    D(e, u | 32768),
      (c = y(e, u, t, i, o, {
        type:
          g & 524288 || g & 268435456
            ? "LogicalExpression"
            : "BinaryExpression",
        left: c,
        right: n2(
          e,
          u,
          n,
          e.tokenPos,
          e.linePos,
          e.colPos,
          a,
          g,
          W(e, u, 0, n, 1, e.tokenPos, e.linePos, e.colPos),
        ),
        operator: O[g & 255],
      }));
  return e.token === 1077936157 && s(e, 24), c;
}
function Cu(e, u, n, t, i, o, l) {
  n || s(e, 0);
  let f = e.token;
  D(e, u | 32768);
  let c = W(e, u, 0, l, 1, e.tokenPos, e.linePos, e.colPos);
  return (
    e.token === 8457273 && s(e, 31),
    u & 1024 &&
      f === 16863278 &&
      (c.type === "Identifier" ? s(e, 118) : $1(c) && s(e, 124)),
    (e.assignable = 2),
    y(e, u, t, i, o, {
      type: "UnaryExpression",
      operator: O[f & 255],
      argument: c,
      prefix: !0,
    })
  );
}
function Pu(e, u, n, t, i, o, l, f, c) {
  let { token: m } = e,
    g = I(e, u),
    { flags: a } = e;
  if (!(a & 1)) {
    if (e.token === 86106) return Ge(e, u, 1, n, l, f, c);
    if ((e.token & 143360) === 143360)
      return t || s(e, 0), e1(e, u, i, l, f, c);
  }
  return !o && e.token === 67174411
    ? de(e, u, g, i, 1, 0, a, l, f, c)
    : e.token === 10
      ? (ne(e, u, m),
        o && s(e, 49),
        z2(e, u, e.tokenValue, g, o, i, 0, l, f, c))
      : ((e.assignable = 1), g);
}
function Eu(e, u, n, t, i, o, l) {
  if ((n && (e.destructible |= 256), u & 2097152)) {
    D(e, u | 32768),
      u & 8388608 && s(e, 30),
      t || s(e, 24),
      e.token === 22 && s(e, 121);
    let f = null,
      c = !1;
    return (
      e.flags & 1 ||
        ((c = q(e, u | 32768, 8457014)),
        (e.token & 77824 || c) &&
          (f = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos))),
      (e.assignable = 2),
      y(e, u, i, o, l, { type: "YieldExpression", argument: f, delegate: c })
    );
  }
  return u & 1024 && s(e, 95, "yield"), ce(e, u, i, o, l);
}
function wu(e, u, n, t, i, o, l) {
  if ((t && (e.destructible |= 128), u & 4194304 || (u & 2048 && u & 8192))) {
    n && s(e, 0),
      u & 8388608 && k2(e.index, e.line, e.index, 29),
      D(e, u | 32768);
    let f = W(e, u, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
    return (
      e.token === 8457273 && s(e, 31),
      (e.assignable = 2),
      y(e, u, i, o, l, { type: "AwaitExpression", argument: f })
    );
  }
  return u & 2048 && s(e, 96), ce(e, u, i, o, l);
}
function H2(e, u, n, t, i, o) {
  let { tokenPos: l, linePos: f, colPos: c } = e;
  P(e, u | 32768, 2162700);
  let m = [],
    g = u;
  if (e.token !== 1074790415) {
    for (; e.token === 134283267; ) {
      let { index: a, tokenPos: d, tokenValue: k, token: C } = e,
        b = X(e, u);
      Me(e, a, d, k) &&
        ((u |= 1024),
        e.flags & 128 && k2(e.index, e.line, e.tokenPos, 64),
        e.flags & 64 && k2(e.index, e.line, e.tokenPos, 8)),
        m.push(te(e, u, b, C, d, e.linePos, e.colPos));
    }
    u & 1024 &&
      (i &&
        ((i & 537079808) === 537079808 && s(e, 116),
        (i & 36864) === 36864 && s(e, 38)),
      e.flags & 512 && s(e, 116),
      e.flags & 256 && s(e, 115)),
      u & 64 && n && o !== void 0 && !(g & 1024) && !(u & 8192) && j2(o);
  }
  for (
    e.flags = (e.flags | 512 | 256 | 64) ^ 832,
      e.destructible = (e.destructible | 256) ^ 256;
    e.token !== 1074790415;

  )
    m.push(w2(e, u, n, 4, {}));
  return (
    P(e, t & 24 ? u | 32768 : u, 1074790415),
    (e.flags &= -193),
    e.token === 1077936157 && s(e, 24),
    y(e, u, l, f, c, { type: "BlockStatement", body: m })
  );
}
function Su(e, u, n, t, i) {
  switch ((D(e, u), e.token)) {
    case 67108991:
      s(e, 162);
    case 67174411: {
      u & 524288 || s(e, 26),
        u & 16384 && !(u & 33554432) && s(e, 27),
        (e.assignable = 2);
      break;
    }
    case 69271571:
    case 67108877: {
      u & 262144 || s(e, 27),
        u & 16384 && !(u & 33554432) && s(e, 27),
        (e.assignable = 1);
      break;
    }
    default:
      s(e, 28, "super");
  }
  return y(e, u, n, t, i, { type: "Super" });
}
function W(e, u, n, t, i, o, l, f) {
  let c = K(e, u, 2, 0, n, t, i, o, l, f);
  return N(e, u, c, t, 0, o, l, f);
}
function Bu(e, u, n, t, i, o) {
  e.assignable & 2 && s(e, 53);
  let { token: l } = e;
  return (
    D(e, u),
    (e.assignable = 2),
    y(e, u, t, i, o, {
      type: "UpdateExpression",
      argument: n,
      operator: O[l & 255],
      prefix: !1,
    })
  );
}
function N(e, u, n, t, i, o, l, f) {
  if ((e.token & 33619968) === 33619968 && !(e.flags & 1))
    n = Bu(e, u, n, o, l, f);
  else if ((e.token & 67108864) === 67108864) {
    switch (((u = (u | 134217728) ^ 134217728), e.token)) {
      case 67108877: {
        D(e, (u | 268435456 | 8192) ^ 8192),
          u & 16384 && e.token === 131 && e.tokenValue === "super" && s(e, 27),
          (e.assignable = 1);
        let c = Ye(e, u | 65536);
        n = y(e, u, o, l, f, {
          type: "MemberExpression",
          object: n,
          computed: !1,
          property: c,
        });
        break;
      }
      case 69271571: {
        let c = !1;
        (e.flags & 2048) === 2048 &&
          ((c = !0), (e.flags = (e.flags | 2048) ^ 2048)),
          D(e, u | 32768);
        let { tokenPos: m, linePos: g, colPos: a } = e,
          d = j(e, u, t, 1, m, g, a);
        P(e, u, 20),
          (e.assignable = 1),
          (n = y(e, u, o, l, f, {
            type: "MemberExpression",
            object: n,
            computed: !0,
            property: d,
          })),
          c && (e.flags |= 2048);
        break;
      }
      case 67174411: {
        if ((e.flags & 1024) === 1024)
          return (e.flags = (e.flags | 1024) ^ 1024), n;
        let c = !1;
        (e.flags & 2048) === 2048 &&
          ((c = !0), (e.flags = (e.flags | 2048) ^ 2048));
        let m = fe(e, u, t);
        (e.assignable = 2),
          (n = y(e, u, o, l, f, {
            type: "CallExpression",
            callee: n,
            arguments: m,
          })),
          c && (e.flags |= 2048);
        break;
      }
      case 67108991: {
        D(e, (u | 268435456 | 8192) ^ 8192),
          (e.flags |= 2048),
          (e.assignable = 2),
          (n = vu(e, u, n, o, l, f));
        break;
      }
      default:
        (e.flags & 2048) === 2048 && s(e, 161),
          (e.assignable = 2),
          (n = y(e, u, o, l, f, {
            type: "TaggedTemplateExpression",
            tag: n,
            quasi:
              e.token === 67174408
                ? le(e, u | 65536)
                : oe(e, u, e.tokenPos, e.linePos, e.colPos),
          }));
    }
    n = N(e, u, n, 0, 1, o, l, f);
  }
  return (
    i === 0 &&
      (e.flags & 2048) === 2048 &&
      ((e.flags = (e.flags | 2048) ^ 2048),
      (n = y(e, u, o, l, f, { type: "ChainExpression", expression: n }))),
    n
  );
}
function vu(e, u, n, t, i, o) {
  let l = !1,
    f;
  if (
    ((e.token === 69271571 || e.token === 67174411) &&
      (e.flags & 2048) === 2048 &&
      ((l = !0), (e.flags = (e.flags | 2048) ^ 2048)),
    e.token === 69271571)
  ) {
    D(e, u | 32768);
    let { tokenPos: c, linePos: m, colPos: g } = e,
      a = j(e, u, 0, 1, c, m, g);
    P(e, u, 20),
      (e.assignable = 2),
      (f = y(e, u, t, i, o, {
        type: "MemberExpression",
        object: n,
        computed: !0,
        optional: !0,
        property: a,
      }));
  } else if (e.token === 67174411) {
    let c = fe(e, u, 0);
    (e.assignable = 2),
      (f = y(e, u, t, i, o, {
        type: "CallExpression",
        callee: n,
        arguments: c,
        optional: !0,
      }));
  } else {
    e.token & 143360 || s(e, 155);
    let c = I(e, u);
    (e.assignable = 2),
      (f = y(e, u, t, i, o, {
        type: "MemberExpression",
        object: n,
        computed: !1,
        optional: !0,
        property: c,
      }));
  }
  return l && (e.flags |= 2048), f;
}
function Ye(e, u) {
  return (
    !(e.token & 143360) && e.token !== 131 && s(e, 155),
    u & 1 && e.token === 131
      ? J2(e, u, e.tokenPos, e.linePos, e.colPos)
      : I(e, u)
  );
}
function Tu(e, u, n, t, i, o, l) {
  n && s(e, 54), t || s(e, 0);
  let { token: f } = e;
  D(e, u | 32768);
  let c = W(e, u, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
  return (
    e.assignable & 2 && s(e, 53),
    (e.assignable = 2),
    y(e, u, i, o, l, {
      type: "UpdateExpression",
      argument: c,
      operator: O[f & 255],
      prefix: !0,
    })
  );
}
function K(e, u, n, t, i, o, l, f, c, m) {
  if ((e.token & 143360) === 143360) {
    switch (e.token) {
      case 209008:
        return wu(e, u, t, o, f, c, m);
      case 241773:
        return Eu(e, u, o, i, f, c, m);
      case 209007:
        return Pu(e, u, o, l, i, t, f, c, m);
    }
    let { token: g, tokenValue: a } = e,
      d = I(e, u | 65536);
    return e.token === 10
      ? (l || s(e, 0), ne(e, u, g), z2(e, u, a, d, t, i, 0, f, c, m))
      : (u & 16384 && g === 537079928 && s(e, 127),
        g === 241739 && (u & 1024 && s(e, 110), n & 24 && s(e, 98)),
        (e.assignable = u & 1024 && (g & 537079808) === 537079808 ? 2 : 1),
        d);
  }
  if ((e.token & 134217728) === 134217728) return X(e, u);
  switch (e.token) {
    case 33619995:
    case 33619996:
      return Tu(e, u, t, l, f, c, m);
    case 16863278:
    case 16842800:
    case 16842801:
    case 25233970:
    case 25233971:
    case 16863277:
    case 16863279:
      return Cu(e, u, l, f, c, m, o);
    case 86106:
      return Ge(e, u, 0, o, f, c, m);
    case 2162700:
      return Vu(e, u, i ? 0 : 1, o, f, c, m);
    case 69271571:
      return Nu(e, u, i ? 0 : 1, o, f, c, m);
    case 67174411:
      return Ou(e, u | 65536, i, 1, 0, f, c, m);
    case 86021:
    case 86022:
    case 86023:
      return Lu(e, u, f, c, m);
    case 86113:
      return Iu(e, u);
    case 65540:
      return Ju(e, u, f, c, m);
    case 133:
    case 86096:
      return ju(e, u, o, f, c, m);
    case 86111:
      return Su(e, u, f, c, m);
    case 67174409:
      return oe(e, u, f, c, m);
    case 67174408:
      return le(e, u);
    case 86109:
      return Uu(e, u, o, f, c, m);
    case 134283389:
      return re(e, u, f, c, m);
    case 131:
      return J2(e, u, f, c, m);
    case 86108:
      return Fu(e, u, t, o, f, c, m);
    case 8456258:
      if (u & 16) return ae(e, u, 1, f, c, m);
    default:
      if (ue(u, e.token)) return ce(e, u, f, c, m);
      s(e, 28, O[e.token & 255]);
  }
}
function Fu(e, u, n, t, i, o, l) {
  let f = I(e, u);
  return e.token === 67108877
    ? Qe(e, u, f, i, o, l)
    : (n && s(e, 138),
      (f = Ze(e, u, t, i, o, l)),
      (e.assignable = 2),
      N(e, u, f, t, 0, i, o, l));
}
function Qe(e, u, n, t, i, o) {
  return (
    u & 2048 || s(e, 164),
    D(e, u),
    e.token !== 143495 && e.tokenValue !== "meta" && s(e, 28, O[e.token & 255]),
    (e.assignable = 2),
    y(e, u, t, i, o, { type: "MetaProperty", meta: n, property: I(e, u) })
  );
}
function Ze(e, u, n, t, i, o) {
  P(e, u | 32768, 67174411), e.token === 14 && s(e, 139);
  let l = R(e, u, 1, n, e.tokenPos, e.linePos, e.colPos);
  return P(e, u, 16), y(e, u, t, i, o, { type: "ImportExpression", source: l });
}
function re(e, u, n, t, i) {
  let { tokenRaw: o, tokenValue: l } = e;
  return (
    D(e, u),
    (e.assignable = 2),
    y(
      e,
      u,
      n,
      t,
      i,
      u & 512
        ? { type: "Literal", value: l, bigint: o.slice(0, -1), raw: o }
        : { type: "Literal", value: l, bigint: o.slice(0, -1) },
    )
  );
}
function oe(e, u, n, t, i) {
  e.assignable = 2;
  let { tokenValue: o, tokenRaw: l, tokenPos: f, linePos: c, colPos: m } = e;
  P(e, u, 67174409);
  let g = [N2(e, u, o, l, f, c, m, !0)];
  return y(e, u, n, t, i, {
    type: "TemplateLiteral",
    expressions: [],
    quasis: g,
  });
}
function le(e, u) {
  u = (u | 134217728) ^ 134217728;
  let { tokenValue: n, tokenRaw: t, tokenPos: i, linePos: o, colPos: l } = e;
  P(e, u | 32768, 67174408);
  let f = [N2(e, u, n, t, i, o, l, !1)],
    c = [j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos)];
  for (
    e.token !== 1074790415 && s(e, 81);
    (e.token = J1(e, u)) !== 67174409;

  ) {
    let { tokenValue: m, tokenRaw: g, tokenPos: a, linePos: d, colPos: k } = e;
    P(e, u | 32768, 67174408),
      f.push(N2(e, u, m, g, a, d, k, !1)),
      c.push(j(e, u, 0, 1, e.tokenPos, e.linePos, e.colPos)),
      e.token !== 1074790415 && s(e, 81);
  }
  {
    let { tokenValue: m, tokenRaw: g, tokenPos: a, linePos: d, colPos: k } = e;
    P(e, u, 67174409), f.push(N2(e, u, m, g, a, d, k, !0));
  }
  return y(e, u, i, o, l, {
    type: "TemplateLiteral",
    expressions: c,
    quasis: f,
  });
}
function N2(e, u, n, t, i, o, l, f) {
  let c = y(e, u, i, o, l, {
      type: "TemplateElement",
      value: { cooked: n, raw: t },
      tail: f,
    }),
    m = f ? 1 : 2;
  return (
    u & 2 &&
      ((c.start += 1), (c.range[0] += 1), (c.end -= m), (c.range[1] -= m)),
    u & 4 && ((c.loc.start.column += 1), (c.loc.end.column -= m)),
    c
  );
}
function qu(e, u, n, t, i) {
  (u = (u | 134217728) ^ 134217728), P(e, u | 32768, 14);
  let o = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos);
  return (
    (e.assignable = 1), y(e, u, n, t, i, { type: "SpreadElement", argument: o })
  );
}
function fe(e, u, n) {
  D(e, u | 32768);
  let t = [];
  if (e.token === 16) return D(e, u | 65536), t;
  for (
    ;
    e.token !== 16 &&
    (e.token === 14
      ? t.push(qu(e, u, e.tokenPos, e.linePos, e.colPos))
      : t.push(R(e, u, 1, n, e.tokenPos, e.linePos, e.colPos)),
    !(e.token !== 18 || (D(e, u | 32768), e.token === 16)));

  );
  return P(e, u, 16), t;
}
function I(e, u) {
  let { tokenValue: n, tokenPos: t, linePos: i, colPos: o } = e;
  return D(e, u), y(e, u, t, i, o, { type: "Identifier", name: n });
}
function X(e, u) {
  let { tokenValue: n, tokenRaw: t, tokenPos: i, linePos: o, colPos: l } = e;
  return e.token === 134283389
    ? re(e, u, i, o, l)
    : (D(e, u),
      (e.assignable = 2),
      y(
        e,
        u,
        i,
        o,
        l,
        u & 512
          ? { type: "Literal", value: n, raw: t }
          : { type: "Literal", value: n },
      ));
}
function Lu(e, u, n, t, i) {
  let o = O[e.token & 255],
    l = e.token === 86023 ? null : o === "true";
  return (
    D(e, u),
    (e.assignable = 2),
    y(
      e,
      u,
      n,
      t,
      i,
      u & 512
        ? { type: "Literal", value: l, raw: o }
        : { type: "Literal", value: l },
    )
  );
}
function Iu(e, u) {
  let { tokenPos: n, linePos: t, colPos: i } = e;
  return (
    D(e, u), (e.assignable = 2), y(e, u, n, t, i, { type: "ThisExpression" })
  );
}
function i2(e, u, n, t, i, o, l, f, c, m) {
  D(e, u | 32768);
  let g = i ? ee(e, u, 8457014) : 0,
    a = null,
    d,
    k = n ? s2() : void 0;
  if (e.token === 67174411) o & 1 || s(e, 37, "Function");
  else {
    let E = t & 4 && (!(u & 8192) || !(u & 2048)) ? 4 : 64;
    Je(e, u | ((u & 3072) << 11), e.token),
      n &&
        (E & 4 ? He(e, u, n, e.tokenValue, E) : t2(e, u, n, e.tokenValue, E, t),
        (k = J(k, 256)),
        o && o & 2 && l2(e, e.tokenValue)),
      (d = e.token),
      e.token & 143360 ? (a = I(e, u)) : s(e, 28, O[e.token & 255]);
  }
  (u =
    ((u | 32243712) ^ 32243712) |
    67108864 |
    ((l * 2 + g) << 21) |
    (g ? 0 : 268435456)),
    n && (k = J(k, 512));
  let C = pe(e, u | 8388608, k, 0, 1),
    b = H2(
      e,
      (u | 8192 | 4096 | 131072) ^ 143360,
      n ? J(k, 128) : k,
      8,
      d,
      n ? k.scopeError : void 0,
    );
  return y(e, u, f, c, m, {
    type: "FunctionDeclaration",
    id: a,
    params: C,
    body: b,
    async: l === 1,
    generator: g === 1,
  });
}
function Ge(e, u, n, t, i, o, l) {
  D(e, u | 32768);
  let f = ee(e, u, 8457014),
    c = (n * 2 + f) << 21,
    m = null,
    g,
    a = u & 64 ? s2() : void 0;
  (e.token & 176128) > 0 &&
    (Je(e, ((u | 32243712) ^ 32243712) | c, e.token),
    a && (a = J(a, 256)),
    (g = e.token),
    (m = I(e, u))),
    (u = ((u | 32243712) ^ 32243712) | 67108864 | c | (f ? 0 : 268435456)),
    a && (a = J(a, 512));
  let d = pe(e, u | 8388608, a, t, 1),
    k = H2(e, u & -134377473, a && J(a, 128), 0, g, void 0);
  return (
    (e.assignable = 2),
    y(e, u, i, o, l, {
      type: "FunctionExpression",
      id: m,
      params: d,
      body: k,
      async: n === 1,
      generator: f === 1,
    })
  );
}
function Nu(e, u, n, t, i, o, l) {
  let f = _(e, u, void 0, n, t, 0, 2, 0, i, o, l);
  return (
    u & 256 && e.destructible & 64 && s(e, 61),
    e.destructible & 8 && s(e, 60),
    f
  );
}
function _(e, u, n, t, i, o, l, f, c, m, g) {
  D(e, u | 32768);
  let a = [],
    d = 0;
  for (u = (u | 134217728) ^ 134217728; e.token !== 20; )
    if (q(e, u | 32768, 18)) a.push(null);
    else {
      let C,
        { token: b, tokenPos: E, linePos: w, colPos: v, tokenValue: M } = e;
      if (b & 143360)
        if (((C = K(e, u, l, 0, 1, i, 1, E, w, v)), e.token === 1077936157)) {
          e.assignable & 2 && s(e, 24),
            D(e, u | 32768),
            n && u2(e, u, n, M, l, f);
          let S = R(e, u, 1, i, e.tokenPos, e.linePos, e.colPos);
          (C = y(
            e,
            u,
            E,
            w,
            v,
            o
              ? { type: "AssignmentPattern", left: C, right: S }
              : {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: C,
                  right: S,
                },
          )),
            (d |=
              e.destructible & 256
                ? 256
                : 0 | (e.destructible & 128)
                  ? 128
                  : 0);
        } else
          e.token === 18 || e.token === 20
            ? (e.assignable & 2 ? (d |= 16) : n && u2(e, u, n, M, l, f),
              (d |=
                e.destructible & 256
                  ? 256
                  : 0 | (e.destructible & 128)
                    ? 128
                    : 0))
            : ((d |= l & 1 ? 32 : l & 2 ? 0 : 16),
              (C = N(e, u, C, i, 0, E, w, v)),
              e.token !== 18 && e.token !== 20
                ? (e.token !== 1077936157 && (d |= 16),
                  (C = U(e, u, i, o, E, w, v, C)))
                : e.token !== 1077936157 && (d |= e.assignable & 2 ? 16 : 32));
      else
        b & 2097152
          ? ((C =
              e.token === 2162700
                ? Y(e, u, n, 0, i, o, l, f, E, w, v)
                : _(e, u, n, 0, i, o, l, f, E, w, v)),
            (d |= e.destructible),
            (e.assignable = e.destructible & 16 ? 2 : 1),
            e.token === 18 || e.token === 20
              ? e.assignable & 2 && (d |= 16)
              : e.destructible & 8
                ? s(e, 69)
                : ((C = N(e, u, C, i, 0, E, w, v)),
                  (d = e.assignable & 2 ? 16 : 0),
                  e.token !== 18 && e.token !== 20
                    ? (C = U(e, u, i, o, E, w, v, C))
                    : e.token !== 1077936157 &&
                      (d |= e.assignable & 2 ? 16 : 32)))
          : b === 14
            ? ((C = D2(e, u, n, 20, l, f, 0, i, o, E, w, v)),
              (d |= e.destructible),
              e.token !== 18 && e.token !== 20 && s(e, 28, O[e.token & 255]))
            : ((C = W(e, u, 1, 0, 1, E, w, v)),
              e.token !== 18 && e.token !== 20
                ? ((C = U(e, u, i, o, E, w, v, C)),
                  !(l & 3) && b === 67174411 && (d |= 16))
                : e.assignable & 2
                  ? (d |= 16)
                  : b === 67174411 &&
                    (d |= e.assignable & 1 && l & 3 ? 32 : 16));
      if ((a.push(C), q(e, u | 32768, 18))) {
        if (e.token === 20) break;
      } else break;
    }
  P(e, u, 20);
  let k = y(e, u, c, m, g, {
    type: o ? "ArrayPattern" : "ArrayExpression",
    elements: a,
  });
  return !t && e.token & 4194304
    ? xe(e, u, d, i, o, c, m, g, k)
    : ((e.destructible = d), k);
}
function xe(e, u, n, t, i, o, l, f, c) {
  e.token !== 1077936157 && s(e, 24),
    D(e, u | 32768),
    n & 16 && s(e, 24),
    i || r(e, c);
  let { tokenPos: m, linePos: g, colPos: a } = e,
    d = R(e, u, 1, t, m, g, a);
  return (
    (e.destructible =
      ((n | 64 | 8) ^ 72) |
      (e.destructible & 128 ? 128 : 0) |
      (e.destructible & 256 ? 256 : 0)),
    y(
      e,
      u,
      o,
      l,
      f,
      i
        ? { type: "AssignmentPattern", left: c, right: d }
        : { type: "AssignmentExpression", left: c, operator: "=", right: d },
    )
  );
}
function D2(e, u, n, t, i, o, l, f, c, m, g, a) {
  D(e, u | 32768);
  let d = null,
    k = 0,
    { token: C, tokenValue: b, tokenPos: E, linePos: w, colPos: v } = e;
  if (C & 143360)
    (e.assignable = 1),
      (d = K(e, u, i, 0, 1, f, 1, E, w, v)),
      (C = e.token),
      (d = N(e, u, d, f, 0, E, w, v)),
      e.token !== 18 &&
        e.token !== t &&
        (e.assignable & 2 && e.token === 1077936157 && s(e, 69),
        (k |= 16),
        (d = U(e, u, f, c, E, w, v, d))),
      e.assignable & 2
        ? (k |= 16)
        : C === t || C === 18
          ? n && u2(e, u, n, b, i, o)
          : (k |= 32),
      (k |= e.destructible & 128 ? 128 : 0);
  else if (C === t) s(e, 39);
  else if (C & 2097152)
    (d =
      e.token === 2162700
        ? Y(e, u, n, 1, f, c, i, o, E, w, v)
        : _(e, u, n, 1, f, c, i, o, E, w, v)),
      (C = e.token),
      C !== 1077936157 && C !== t && C !== 18
        ? (e.destructible & 8 && s(e, 69),
          (d = N(e, u, d, f, 0, E, w, v)),
          (k |= e.assignable & 2 ? 16 : 0),
          (e.token & 4194304) === 4194304
            ? (e.token !== 1077936157 && (k |= 16),
              (d = U(e, u, f, c, E, w, v, d)))
            : ((e.token & 8454144) === 8454144 &&
                (d = n2(e, u, 1, E, w, v, 4, C, d)),
              q(e, u | 32768, 22) && (d = f2(e, u, d, E, w, v)),
              (k |= e.assignable & 2 ? 16 : 32)))
        : (k |= t === 1074790415 && C !== 1077936157 ? 16 : e.destructible);
  else {
    (k |= 32), (d = W(e, u, 1, f, 1, e.tokenPos, e.linePos, e.colPos));
    let { token: M, tokenPos: S, linePos: V, colPos: h } = e;
    return (
      M === 1077936157 && M !== t && M !== 18
        ? (e.assignable & 2 && s(e, 24),
          (d = U(e, u, f, c, S, V, h, d)),
          (k |= 16))
        : (M === 18 ? (k |= 16) : M !== t && (d = U(e, u, f, c, S, V, h, d)),
          (k |= e.assignable & 1 ? 32 : 16)),
      (e.destructible = k),
      e.token !== t && e.token !== 18 && s(e, 156),
      y(e, u, m, g, a, {
        type: c ? "RestElement" : "SpreadElement",
        argument: d,
      })
    );
  }
  if (e.token !== t)
    if ((i & 1 && (k |= l ? 16 : 32), q(e, u | 32768, 1077936157))) {
      k & 16 && s(e, 24), r(e, d);
      let M = R(e, u, 1, f, e.tokenPos, e.linePos, e.colPos);
      (d = y(
        e,
        u,
        E,
        w,
        v,
        c
          ? { type: "AssignmentPattern", left: d, right: M }
          : { type: "AssignmentExpression", left: d, operator: "=", right: M },
      )),
        (k = 16);
    } else k |= 16;
  return (
    (e.destructible = k),
    y(e, u, m, g, a, { type: c ? "RestElement" : "SpreadElement", argument: d })
  );
}
function Z(e, u, n, t, i, o, l) {
  let f = n & 64 ? 14680064 : 31981568;
  u = ((u | f) ^ f) | ((n & 88) << 18) | 100925440;
  let c = u & 64 ? J(s2(), 512) : void 0,
    m = Ru(e, u | 8388608, c, n, 1, t);
  c && (c = J(c, 128));
  let g = H2(e, u & -134230017, c, 0, void 0, void 0);
  return y(e, u, i, o, l, {
    type: "FunctionExpression",
    params: m,
    body: g,
    async: (n & 16) > 0,
    generator: (n & 8) > 0,
    id: null,
  });
}
function Vu(e, u, n, t, i, o, l) {
  let f = Y(e, u, void 0, n, t, 0, 2, 0, i, o, l);
  return (
    u & 256 && e.destructible & 64 && s(e, 61),
    e.destructible & 8 && s(e, 60),
    f
  );
}
function Y(e, u, n, t, i, o, l, f, c, m, g) {
  D(e, u);
  let a = [],
    d = 0,
    k = 0;
  for (u = (u | 134217728) ^ 134217728; e.token !== 1074790415; ) {
    let { token: b, tokenValue: E, linePos: w, colPos: v, tokenPos: M } = e;
    if (b === 14) a.push(D2(e, u, n, 1074790415, l, f, 0, i, o, M, w, v));
    else {
      let S = 0,
        V = null,
        h,
        Q = e.token;
      if (e.token & 143360 || e.token === 121)
        if (
          ((V = I(e, u)),
          e.token === 18 || e.token === 1074790415 || e.token === 1077936157)
        )
          if (
            ((S |= 4),
            u & 1024 && (b & 537079808) === 537079808
              ? (d |= 16)
              : O2(e, u, l, b, 0),
            n && u2(e, u, n, E, l, f),
            q(e, u | 32768, 1077936157))
          ) {
            d |= 8;
            let B = R(e, u, 1, i, e.tokenPos, e.linePos, e.colPos);
            (d |=
              e.destructible & 256
                ? 256
                : 0 | (e.destructible & 128)
                  ? 128
                  : 0),
              (h = y(e, u, M, w, v, {
                type: "AssignmentPattern",
                left: u & 536870912 ? Object.assign({}, V) : V,
                right: B,
              }));
          } else
            (d |= (b === 209008 ? 128 : 0) | (b === 121 ? 16 : 0)),
              (h = u & 536870912 ? Object.assign({}, V) : V);
        else if (q(e, u | 32768, 21)) {
          let { tokenPos: B, linePos: F, colPos: T } = e;
          if ((E === "__proto__" && k++, e.token & 143360)) {
            let o2 = e.token,
              a2 = e.tokenValue;
            (d |= Q === 121 ? 16 : 0), (h = K(e, u, l, 0, 1, i, 1, B, F, T));
            let { token: x } = e;
            (h = N(e, u, h, i, 0, B, F, T)),
              e.token === 18 || e.token === 1074790415
                ? x === 1077936157 || x === 1074790415 || x === 18
                  ? ((d |= e.destructible & 128 ? 128 : 0),
                    e.assignable & 2
                      ? (d |= 16)
                      : n && (o2 & 143360) === 143360 && u2(e, u, n, a2, l, f))
                  : (d |= e.assignable & 1 ? 32 : 16)
                : (e.token & 4194304) === 4194304
                  ? (e.assignable & 2
                      ? (d |= 16)
                      : x !== 1077936157
                        ? (d |= 32)
                        : n && u2(e, u, n, a2, l, f),
                    (h = U(e, u, i, o, B, F, T, h)))
                  : ((d |= 16),
                    (e.token & 8454144) === 8454144 &&
                      (h = n2(e, u, 1, B, F, T, 4, x, h)),
                    q(e, u | 32768, 22) && (h = f2(e, u, h, B, F, T)));
          } else
            (e.token & 2097152) === 2097152
              ? ((h =
                  e.token === 69271571
                    ? _(e, u, n, 0, i, o, l, f, B, F, T)
                    : Y(e, u, n, 0, i, o, l, f, B, F, T)),
                (d = e.destructible),
                (e.assignable = d & 16 ? 2 : 1),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : e.destructible & 8
                    ? s(e, 69)
                    : ((h = N(e, u, h, i, 0, B, F, T)),
                      (d = e.assignable & 2 ? 16 : 0),
                      (e.token & 4194304) === 4194304
                        ? (h = L2(e, u, i, o, B, F, T, h))
                        : ((e.token & 8454144) === 8454144 &&
                            (h = n2(e, u, 1, B, F, T, 4, b, h)),
                          q(e, u | 32768, 22) && (h = f2(e, u, h, B, F, T)),
                          (d |= e.assignable & 2 ? 16 : 32))))
              : ((h = W(e, u, 1, i, 1, B, F, T)),
                (d |= e.assignable & 1 ? 32 : 16),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : ((h = N(e, u, h, i, 0, B, F, T)),
                    (d = e.assignable & 2 ? 16 : 0),
                    e.token !== 18 &&
                      b !== 1074790415 &&
                      (e.token !== 1077936157 && (d |= 16),
                      (h = U(e, u, i, o, B, F, T, h)))));
        } else
          e.token === 69271571
            ? ((d |= 16),
              b === 209007 && (S |= 16),
              (S |= (b === 12402 ? 256 : b === 12403 ? 512 : 1) | 2),
              (V = m2(e, u, i)),
              (d |= e.assignable),
              (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
            : e.token & 143360
              ? ((d |= 16),
                b === 121 && s(e, 93),
                b === 209007 && (e.flags & 1 && s(e, 129), (S |= 16)),
                (V = I(e, u)),
                (S |= b === 12402 ? 256 : b === 12403 ? 512 : 1),
                (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
              : e.token === 67174411
                ? ((d |= 16),
                  (S |= 1),
                  (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
                : e.token === 8457014
                  ? ((d |= 16),
                    b === 12402
                      ? s(e, 40)
                      : b === 12403
                        ? s(e, 41)
                        : b === 143483 && s(e, 93),
                    D(e, u),
                    (S |= 9 | (b === 209007 ? 16 : 0)),
                    e.token & 143360
                      ? (V = I(e, u))
                      : (e.token & 134217728) === 134217728
                        ? (V = X(e, u))
                        : e.token === 69271571
                          ? ((S |= 2), (V = m2(e, u, i)), (d |= e.assignable))
                          : s(e, 28, O[e.token & 255]),
                    (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
                  : (e.token & 134217728) === 134217728
                    ? (b === 209007 && (S |= 16),
                      (S |= b === 12402 ? 256 : b === 12403 ? 512 : 1),
                      (d |= 16),
                      (V = X(e, u)),
                      (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
                    : s(e, 130);
      else if ((e.token & 134217728) === 134217728)
        if (((V = X(e, u)), e.token === 21)) {
          P(e, u | 32768, 21);
          let { tokenPos: B, linePos: F, colPos: T } = e;
          if ((E === "__proto__" && k++, e.token & 143360)) {
            h = K(e, u, l, 0, 1, i, 1, B, F, T);
            let { token: o2, tokenValue: a2 } = e;
            (h = N(e, u, h, i, 0, B, F, T)),
              e.token === 18 || e.token === 1074790415
                ? o2 === 1077936157 || o2 === 1074790415 || o2 === 18
                  ? e.assignable & 2
                    ? (d |= 16)
                    : n && u2(e, u, n, a2, l, f)
                  : (d |= e.assignable & 1 ? 32 : 16)
                : e.token === 1077936157
                  ? (e.assignable & 2 && (d |= 16),
                    (h = U(e, u, i, o, B, F, T, h)))
                  : ((d |= 16), (h = U(e, u, i, o, B, F, T, h)));
          } else
            (e.token & 2097152) === 2097152
              ? ((h =
                  e.token === 69271571
                    ? _(e, u, n, 0, i, o, l, f, B, F, T)
                    : Y(e, u, n, 0, i, o, l, f, B, F, T)),
                (d = e.destructible),
                (e.assignable = d & 16 ? 2 : 1),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : (e.destructible & 8) !== 8 &&
                    ((h = N(e, u, h, i, 0, B, F, T)),
                    (d = e.assignable & 2 ? 16 : 0),
                    (e.token & 4194304) === 4194304
                      ? (h = L2(e, u, i, o, B, F, T, h))
                      : ((e.token & 8454144) === 8454144 &&
                          (h = n2(e, u, 1, B, F, T, 4, b, h)),
                        q(e, u | 32768, 22) && (h = f2(e, u, h, B, F, T)),
                        (d |= e.assignable & 2 ? 16 : 32))))
              : ((h = W(e, u, 1, 0, 1, B, F, T)),
                (d |= e.assignable & 1 ? 32 : 16),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : ((h = N(e, u, h, i, 0, B, F, T)),
                    (d = e.assignable & 1 ? 0 : 16),
                    e.token !== 18 &&
                      e.token !== 1074790415 &&
                      (e.token !== 1077936157 && (d |= 16),
                      (h = U(e, u, i, o, B, F, T, h)))));
        } else
          e.token === 67174411
            ? ((S |= 1),
              (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)),
              (d = e.assignable | 16))
            : s(e, 131);
      else if (e.token === 69271571)
        if (
          ((V = m2(e, u, i)),
          (d |= e.destructible & 256 ? 256 : 0),
          (S |= 2),
          e.token === 21)
        ) {
          D(e, u | 32768);
          let {
            tokenPos: B,
            linePos: F,
            colPos: T,
            tokenValue: o2,
            token: a2,
          } = e;
          if (e.token & 143360) {
            h = K(e, u, l, 0, 1, i, 1, B, F, T);
            let { token: x } = e;
            (h = N(e, u, h, i, 0, B, F, T)),
              (e.token & 4194304) === 4194304
                ? ((d |= e.assignable & 2 ? 16 : x === 1077936157 ? 0 : 32),
                  (h = L2(e, u, i, o, B, F, T, h)))
                : e.token === 18 || e.token === 1074790415
                  ? x === 1077936157 || x === 1074790415 || x === 18
                    ? e.assignable & 2
                      ? (d |= 16)
                      : n && (a2 & 143360) === 143360 && u2(e, u, n, o2, l, f)
                    : (d |= e.assignable & 1 ? 32 : 16)
                  : ((d |= 16), (h = U(e, u, i, o, B, F, T, h)));
          } else
            (e.token & 2097152) === 2097152
              ? ((h =
                  e.token === 69271571
                    ? _(e, u, n, 0, i, o, l, f, B, F, T)
                    : Y(e, u, n, 0, i, o, l, f, B, F, T)),
                (d = e.destructible),
                (e.assignable = d & 16 ? 2 : 1),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : d & 8
                    ? s(e, 60)
                    : ((h = N(e, u, h, i, 0, B, F, T)),
                      (d = e.assignable & 2 ? d | 16 : 0),
                      (e.token & 4194304) === 4194304
                        ? (e.token !== 1077936157 && (d |= 16),
                          (h = L2(e, u, i, o, B, F, T, h)))
                        : ((e.token & 8454144) === 8454144 &&
                            (h = n2(e, u, 1, B, F, T, 4, b, h)),
                          q(e, u | 32768, 22) && (h = f2(e, u, h, B, F, T)),
                          (d |= e.assignable & 2 ? 16 : 32))))
              : ((h = W(e, u, 1, 0, 1, B, F, T)),
                (d |= e.assignable & 1 ? 32 : 16),
                e.token === 18 || e.token === 1074790415
                  ? e.assignable & 2 && (d |= 16)
                  : ((h = N(e, u, h, i, 0, B, F, T)),
                    (d = e.assignable & 1 ? 0 : 16),
                    e.token !== 18 &&
                      e.token !== 1074790415 &&
                      (e.token !== 1077936157 && (d |= 16),
                      (h = U(e, u, i, o, B, F, T, h)))));
        } else
          e.token === 67174411
            ? ((S |= 1), (h = Z(e, u, S, i, e.tokenPos, w, v)), (d = 16))
            : s(e, 42);
      else if (b === 8457014)
        if ((P(e, u | 32768, 8457014), (S |= 8), e.token & 143360)) {
          let { token: B, line: F, index: T } = e;
          (V = I(e, u)),
            (S |= 1),
            e.token === 67174411
              ? ((d |= 16),
                (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
              : k2(
                  T,
                  F,
                  T,
                  B === 209007
                    ? 44
                    : B === 12402 || e.token === 12403
                      ? 43
                      : 45,
                  O[B & 255],
                );
        } else
          (e.token & 134217728) === 134217728
            ? ((d |= 16), (V = X(e, u)), (S |= 1), (h = Z(e, u, S, i, M, w, v)))
            : e.token === 69271571
              ? ((d |= 16),
                (S |= 3),
                (V = m2(e, u, i)),
                (h = Z(e, u, S, i, e.tokenPos, e.linePos, e.colPos)))
              : s(e, 123);
      else s(e, 28, O[b & 255]);
      (d |= e.destructible & 128 ? 128 : 0),
        (e.destructible = d),
        a.push(
          y(e, u, M, w, v, {
            type: "Property",
            key: V,
            value: h,
            kind: S & 768 ? (S & 512 ? "set" : "get") : "init",
            computed: (S & 2) > 0,
            method: (S & 1) > 0,
            shorthand: (S & 4) > 0,
          }),
        );
    }
    if (((d |= e.destructible), e.token !== 18)) break;
    D(e, u);
  }
  P(e, u, 1074790415), k > 1 && (d |= 64);
  let C = y(e, u, c, m, g, {
    type: o ? "ObjectPattern" : "ObjectExpression",
    properties: a,
  });
  return !t && e.token & 4194304
    ? xe(e, u, d, i, o, c, m, g, C)
    : ((e.destructible = d), C);
}
function Ru(e, u, n, t, i, o) {
  P(e, u, 67174411);
  let l = [];
  if (((e.flags = (e.flags | 128) ^ 128), e.token === 16))
    return t & 512 && s(e, 35, "Setter", "one", ""), D(e, u), l;
  t & 256 && s(e, 35, "Getter", "no", "s"),
    t & 512 && e.token === 14 && s(e, 36),
    (u = (u | 134217728) ^ 134217728);
  let f = 0,
    c = 0;
  for (; e.token !== 18; ) {
    let m = null,
      { tokenPos: g, linePos: a, colPos: d } = e;
    if (
      (e.token & 143360
        ? (u & 1024 ||
            ((e.token & 36864) === 36864 && (e.flags |= 256),
            (e.token & 537079808) === 537079808 && (e.flags |= 512)),
          (m = se(e, u, n, t | 1, 0, g, a, d)))
        : (e.token === 2162700
            ? (m = Y(e, u, n, 1, o, 1, i, 0, g, a, d))
            : e.token === 69271571
              ? (m = _(e, u, n, 1, o, 1, i, 0, g, a, d))
              : e.token === 14 && (m = D2(e, u, n, 16, i, 0, 0, o, 1, g, a, d)),
          (c = 1),
          e.destructible & 48 && s(e, 48)),
      e.token === 1077936157)
    ) {
      D(e, u | 32768), (c = 1);
      let k = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos);
      m = y(e, u, g, a, d, { type: "AssignmentPattern", left: m, right: k });
    }
    if ((f++, l.push(m), !q(e, u, 18) || e.token === 16)) break;
  }
  return (
    t & 512 && f !== 1 && s(e, 35, "Setter", "one", ""),
    n && n.scopeError !== void 0 && j2(n.scopeError),
    c && (e.flags |= 128),
    P(e, u, 16),
    l
  );
}
function m2(e, u, n) {
  D(e, u | 32768);
  let t = R(
    e,
    (u | 134217728) ^ 134217728,
    1,
    n,
    e.tokenPos,
    e.linePos,
    e.colPos,
  );
  return P(e, u, 20), t;
}
function Ou(e, u, n, t, i, o, l, f) {
  e.flags = (e.flags | 128) ^ 128;
  let { tokenPos: c, linePos: m, colPos: g } = e;
  D(e, u | 32768 | 268435456);
  let a = u & 64 ? J(s2(), 1024) : void 0;
  if (((u = (u | 134217728) ^ 134217728), q(e, u, 16)))
    return M2(e, u, a, [], n, 0, o, l, f);
  let d = 0;
  e.destructible &= -385;
  let k,
    C = [],
    b = 0,
    E = 0,
    { tokenPos: w, linePos: v, colPos: M } = e;
  for (e.assignable = 1; e.token !== 16; ) {
    let { token: S, tokenPos: V, linePos: h, colPos: Q } = e;
    if (S & 143360)
      a && t2(e, u, a, e.tokenValue, 1, 0),
        (k = K(e, u, t, 0, 1, 1, 1, V, h, Q)),
        e.token === 16 || e.token === 18
          ? e.assignable & 2
            ? ((d |= 16), (E = 1))
            : ((S & 537079808) === 537079808 || (S & 36864) === 36864) &&
              (E = 1)
          : (e.token === 1077936157 ? (E = 1) : (d |= 16),
            (k = N(e, u, k, 1, 0, V, h, Q)),
            e.token !== 16 &&
              e.token !== 18 &&
              (k = U(e, u, 1, 0, V, h, Q, k)));
    else if ((S & 2097152) === 2097152)
      (k =
        S === 2162700
          ? Y(e, u | 268435456, a, 0, 1, 0, t, i, V, h, Q)
          : _(e, u | 268435456, a, 0, 1, 0, t, i, V, h, Q)),
        (d |= e.destructible),
        (E = 1),
        (e.assignable = 2),
        e.token !== 16 &&
          e.token !== 18 &&
          (d & 8 && s(e, 119),
          (k = N(e, u, k, 0, 0, V, h, Q)),
          (d |= 16),
          e.token !== 16 && e.token !== 18 && (k = U(e, u, 0, 0, V, h, Q, k)));
    else if (S === 14) {
      (k = D2(e, u, a, 16, t, i, 0, 1, 0, V, h, Q)),
        e.destructible & 16 && s(e, 72),
        (E = 1),
        b && (e.token === 16 || e.token === 18) && C.push(k),
        (d |= 8);
      break;
    } else {
      if (
        ((d |= 16),
        (k = R(e, u, 1, 1, V, h, Q)),
        b && (e.token === 16 || e.token === 18) && C.push(k),
        e.token === 18 && (b || ((b = 1), (C = [k]))),
        b)
      ) {
        for (; q(e, u | 32768, 18); )
          C.push(R(e, u, 1, 1, e.tokenPos, e.linePos, e.colPos));
        (e.assignable = 2),
          (k = y(e, u, w, v, M, {
            type: "SequenceExpression",
            expressions: C,
          }));
      }
      return P(e, u, 16), (e.destructible = d), k;
    }
    if (
      (b && (e.token === 16 || e.token === 18) && C.push(k),
      !q(e, u | 32768, 18))
    )
      break;
    if ((b || ((b = 1), (C = [k])), e.token === 16)) {
      d |= 8;
      break;
    }
  }
  return (
    b &&
      ((e.assignable = 2),
      (k = y(e, u, w, v, M, { type: "SequenceExpression", expressions: C }))),
    P(e, u, 16),
    d & 16 && d & 8 && s(e, 146),
    (d |= e.destructible & 256 ? 256 : 0 | (e.destructible & 128) ? 128 : 0),
    e.token === 10
      ? (d & 48 && s(e, 47),
        u & 4196352 && d & 128 && s(e, 29),
        u & 2098176 && d & 256 && s(e, 30),
        E && (e.flags |= 128),
        M2(e, u, a, b ? C : [k], n, 0, o, l, f))
      : (d & 8 && s(e, 140),
        (e.destructible = ((e.destructible | 256) ^ 256) | d),
        u & 128
          ? y(e, u, c, m, g, { type: "ParenthesizedExpression", expression: k })
          : k)
  );
}
function ce(e, u, n, t, i) {
  let { tokenValue: o } = e,
    l = I(e, u);
  if (((e.assignable = 1), e.token === 10)) {
    let f;
    return (
      u & 64 && (f = X2(e, u, o)),
      (e.flags = (e.flags | 128) ^ 128),
      B2(e, u, f, [l], 0, n, t, i)
    );
  }
  return l;
}
function z2(e, u, n, t, i, o, l, f, c, m) {
  o || s(e, 55), i && s(e, 49), (e.flags &= -129);
  let g = u & 64 ? X2(e, u, n) : void 0;
  return B2(e, u, g, [t], l, f, c, m);
}
function M2(e, u, n, t, i, o, l, f, c) {
  i || s(e, 55);
  for (let m = 0; m < t.length; ++m) r(e, t[m]);
  return B2(e, u, n, t, o, l, f, c);
}
function B2(e, u, n, t, i, o, l, f) {
  e.flags & 1 && s(e, 46),
    P(e, u | 32768, 10),
    (u = ((u | 15728640) ^ 15728640) | (i << 22));
  let c = e.token !== 2162700,
    m;
  if ((n && n.scopeError !== void 0 && j2(n.scopeError), c))
    m = R(
      e,
      u & 16384 ? u | 33554432 : u,
      1,
      0,
      e.tokenPos,
      e.linePos,
      e.colPos,
    );
  else {
    switch (
      (n && (n = J(n, 128)),
      (m = H2(
        e,
        (u | 134221824 | 8192 | 16384) ^ 134246400,
        n,
        16,
        void 0,
        void 0,
      )),
      e.token)
    ) {
      case 69271571:
        e.flags & 1 || s(e, 113);
        break;
      case 67108877:
      case 67174409:
      case 22:
        s(e, 114);
      case 67174411:
        e.flags & 1 || s(e, 113), (e.flags |= 1024);
        break;
    }
    (e.token & 8454144) === 8454144 &&
      !(e.flags & 1) &&
      s(e, 28, O[e.token & 255]),
      (e.token & 33619968) === 33619968 && s(e, 122);
  }
  return (
    (e.assignable = 2),
    y(e, u, o, l, f, {
      type: "ArrowFunctionExpression",
      params: t,
      body: m,
      async: i === 1,
      expression: c,
    })
  );
}
function pe(e, u, n, t, i) {
  P(e, u, 67174411), (e.flags = (e.flags | 128) ^ 128);
  let o = [];
  if (q(e, u, 16)) return o;
  u = (u | 134217728) ^ 134217728;
  let l = 0;
  for (; e.token !== 18; ) {
    let f,
      { tokenPos: c, linePos: m, colPos: g } = e;
    if (
      (e.token & 143360
        ? (u & 1024 ||
            ((e.token & 36864) === 36864 && (e.flags |= 256),
            (e.token & 537079808) === 537079808 && (e.flags |= 512)),
          (f = se(e, u, n, i | 1, 0, c, m, g)))
        : (e.token === 2162700
            ? (f = Y(e, u, n, 1, t, 1, i, 0, c, m, g))
            : e.token === 69271571
              ? (f = _(e, u, n, 1, t, 1, i, 0, c, m, g))
              : e.token === 14
                ? (f = D2(e, u, n, 16, i, 0, 0, t, 1, c, m, g))
                : s(e, 28, O[e.token & 255]),
          (l = 1),
          e.destructible & 48 && s(e, 48)),
      e.token === 1077936157)
    ) {
      D(e, u | 32768), (l = 1);
      let a = R(e, u, 1, t, e.tokenPos, e.linePos, e.colPos);
      f = y(e, u, c, m, g, { type: "AssignmentPattern", left: f, right: a });
    }
    if ((o.push(f), !q(e, u, 18) || e.token === 16)) break;
  }
  return (
    l && (e.flags |= 128),
    n && (l || u & 1024) && n.scopeError !== void 0 && j2(n.scopeError),
    P(e, u, 16),
    o
  );
}
function V2(e, u, n, t, i, o, l) {
  let { token: f } = e;
  if (f & 67108864) {
    if (f === 67108877) {
      D(e, u | 268435456), (e.assignable = 1);
      let c = Ye(e, u);
      return V2(
        e,
        u,
        y(e, u, i, o, l, {
          type: "MemberExpression",
          object: n,
          computed: !1,
          property: c,
        }),
        0,
        i,
        o,
        l,
      );
    } else if (f === 69271571) {
      D(e, u | 32768);
      let { tokenPos: c, linePos: m, colPos: g } = e,
        a = j(e, u, t, 1, c, m, g);
      return (
        P(e, u, 20),
        (e.assignable = 1),
        V2(
          e,
          u,
          y(e, u, i, o, l, {
            type: "MemberExpression",
            object: n,
            computed: !0,
            property: a,
          }),
          0,
          i,
          o,
          l,
        )
      );
    } else if (f === 67174408 || f === 67174409)
      return (
        (e.assignable = 2),
        V2(
          e,
          u,
          y(e, u, i, o, l, {
            type: "TaggedTemplateExpression",
            tag: n,
            quasi:
              e.token === 67174408
                ? le(e, u | 65536)
                : oe(e, u, e.tokenPos, e.linePos, e.colPos),
          }),
          0,
          i,
          o,
          l,
        )
      );
  }
  return n;
}
function Uu(e, u, n, t, i, o) {
  let l = I(e, u | 32768),
    { tokenPos: f, linePos: c, colPos: m } = e;
  if (q(e, u, 67108877)) {
    if (u & 67108864 && e.token === 143494)
      return (e.assignable = 2), Mu(e, u, l, t, i, o);
    s(e, 92);
  }
  (e.assignable = 2),
    (e.token & 16842752) === 16842752 && s(e, 63, O[e.token & 255]);
  let g = K(e, u, 2, 1, 0, n, 1, f, c, m);
  (u = (u | 134217728) ^ 134217728), e.token === 67108991 && s(e, 163);
  let a = V2(e, u, g, n, f, c, m);
  return (
    (e.assignable = 2),
    y(e, u, t, i, o, {
      type: "NewExpression",
      callee: a,
      arguments: e.token === 67174411 ? fe(e, u, n) : [],
    })
  );
}
function Mu(e, u, n, t, i, o) {
  let l = I(e, u);
  return y(e, u, t, i, o, { type: "MetaProperty", meta: n, property: l });
}
function e1(e, u, n, t, i, o) {
  return (
    e.token === 209008 && s(e, 29),
    u & 2098176 && e.token === 241773 && s(e, 30),
    (e.token & 537079808) === 537079808 && (e.flags |= 512),
    z2(e, u, e.tokenValue, I(e, u), 0, n, 1, t, i, o)
  );
}
function de(e, u, n, t, i, o, l, f, c, m) {
  D(e, u | 32768);
  let g = u & 64 ? J(s2(), 1024) : void 0;
  if (((u = (u | 134217728) ^ 134217728), q(e, u, 16)))
    return e.token === 10
      ? (l & 1 && s(e, 46), M2(e, u, g, [], t, 1, f, c, m))
      : y(e, u, f, c, m, { type: "CallExpression", callee: n, arguments: [] });
  let a = 0,
    d = null,
    k = 0;
  e.destructible = (e.destructible | 256 | 128) ^ 384;
  let C = [];
  for (; e.token !== 16; ) {
    let { token: b, tokenPos: E, linePos: w, colPos: v } = e;
    if (b & 143360)
      g && t2(e, u, g, e.tokenValue, i, 0),
        (d = K(e, u, i, 0, 1, 1, 1, E, w, v)),
        e.token === 16 || e.token === 18
          ? e.assignable & 2
            ? ((a |= 16), (k = 1))
            : (b & 537079808) === 537079808
              ? (e.flags |= 512)
              : (b & 36864) === 36864 && (e.flags |= 256)
          : (e.token === 1077936157 ? (k = 1) : (a |= 16),
            (d = N(e, u, d, 1, 0, E, w, v)),
            e.token !== 16 &&
              e.token !== 18 &&
              (d = U(e, u, 1, 0, E, w, v, d)));
    else if (b & 2097152)
      (d =
        b === 2162700
          ? Y(e, u, g, 0, 1, 0, i, o, E, w, v)
          : _(e, u, g, 0, 1, 0, i, o, E, w, v)),
        (a |= e.destructible),
        (k = 1),
        e.token !== 16 &&
          e.token !== 18 &&
          (a & 8 && s(e, 119),
          (d = N(e, u, d, 0, 0, E, w, v)),
          (a |= 16),
          (e.token & 8454144) === 8454144 &&
            (d = n2(e, u, 1, f, c, m, 4, b, d)),
          q(e, u | 32768, 22) && (d = f2(e, u, d, f, c, m)));
    else if (b === 14)
      (d = D2(e, u, g, 16, i, o, 1, 1, 0, E, w, v)),
        (a |= (e.token === 16 ? 0 : 16) | e.destructible),
        (k = 1);
    else {
      for (
        d = R(e, u, 1, 0, E, w, v), a = e.assignable, C.push(d);
        q(e, u | 32768, 18);

      )
        C.push(R(e, u, 1, 0, E, w, v));
      return (
        (a |= e.assignable),
        P(e, u, 16),
        (e.destructible = a | 16),
        (e.assignable = 2),
        y(e, u, f, c, m, { type: "CallExpression", callee: n, arguments: C })
      );
    }
    if ((C.push(d), !q(e, u | 32768, 18))) break;
  }
  return (
    P(e, u, 16),
    (a |= e.destructible & 256 ? 256 : 0 | (e.destructible & 128) ? 128 : 0),
    e.token === 10
      ? (a & 48 && s(e, 25),
        (e.flags & 1 || l & 1) && s(e, 46),
        a & 128 && s(e, 29),
        u & 2098176 && a & 256 && s(e, 30),
        k && (e.flags |= 128),
        M2(e, u, g, C, t, 1, f, c, m))
      : (a & 8 && s(e, 60),
        (e.assignable = 2),
        y(e, u, f, c, m, { type: "CallExpression", callee: n, arguments: C }))
  );
}
function Ju(e, u, n, t, i) {
  let { tokenRaw: o, tokenRegExp: l, tokenValue: f } = e;
  return (
    D(e, u),
    (e.assignable = 2),
    u & 512
      ? y(e, u, n, t, i, { type: "Literal", value: f, regex: l, raw: o })
      : y(e, u, n, t, i, { type: "Literal", value: f, regex: l })
  );
}
function r2(e, u, n, t, i, o, l) {
  u = (u | 16777216 | 1024) ^ 16777216;
  let f = K2(e, u);
  f.length && ((i = e.tokenPos), (o = e.linePos), (l = e.colPos)),
    e.leadingDecorators.length &&
      (e.leadingDecorators.push(...f),
      (f = e.leadingDecorators),
      (e.leadingDecorators = [])),
    D(e, u);
  let c = null,
    m = null,
    { tokenValue: g } = e;
  e.token & 4096 && e.token !== 20567
    ? (je(e, u, e.token) && s(e, 115),
      (e.token & 537079808) === 537079808 && s(e, 116),
      n && (t2(e, u, n, g, 32, 0), t && t & 2 && l2(e, g)),
      (c = I(e, u)))
    : t & 1 || s(e, 37, "Class");
  let a = u;
  q(e, u | 32768, 20567)
    ? ((m = W(e, u, 0, 0, 0, e.tokenPos, e.linePos, e.colPos)), (a |= 524288))
    : (a = (a | 524288) ^ 524288);
  let d = u1(e, a, u, n, 2, 8, 0);
  return y(
    e,
    u,
    i,
    o,
    l,
    u & 1
      ? {
          type: "ClassDeclaration",
          id: c,
          superClass: m,
          decorators: f,
          body: d,
        }
      : { type: "ClassDeclaration", id: c, superClass: m, body: d },
  );
}
function ju(e, u, n, t, i, o) {
  let l = null,
    f = null;
  u = (u | 1024 | 16777216) ^ 16777216;
  let c = K2(e, u);
  c.length && ((t = e.tokenPos), (i = e.linePos), (o = e.colPos)),
    D(e, u),
    e.token & 4096 &&
      e.token !== 20567 &&
      (je(e, u, e.token) && s(e, 115),
      (e.token & 537079808) === 537079808 && s(e, 116),
      (l = I(e, u)));
  let m = u;
  q(e, u | 32768, 20567)
    ? ((f = W(e, u, 0, n, 0, e.tokenPos, e.linePos, e.colPos)), (m |= 524288))
    : (m = (m | 524288) ^ 524288);
  let g = u1(e, m, u, void 0, 2, 0, n);
  return (
    (e.assignable = 2),
    y(
      e,
      u,
      t,
      i,
      o,
      u & 1
        ? {
            type: "ClassExpression",
            id: l,
            superClass: f,
            decorators: c,
            body: g,
          }
        : { type: "ClassExpression", id: l, superClass: f, body: g },
    )
  );
}
function K2(e, u) {
  let n = [];
  if (u & 1)
    for (; e.token === 133; ) n.push(Xu(e, u, e.tokenPos, e.linePos, e.colPos));
  return n;
}
function Xu(e, u, n, t, i) {
  D(e, u | 32768);
  let o = K(e, u, 2, 0, 1, 0, 1, n, t, i);
  return (
    (o = N(e, u, o, 0, 0, n, t, i)),
    y(e, u, n, t, i, { type: "Decorator", expression: o })
  );
}
function u1(e, u, n, t, i, o, l) {
  let { tokenPos: f, linePos: c, colPos: m } = e;
  P(e, u | 32768, 2162700), (u = (u | 134217728) ^ 134217728);
  let g = e.flags & 32;
  e.flags = (e.flags | 32) ^ 32;
  let a = [],
    d;
  for (; e.token !== 1074790415; ) {
    let k = 0;
    if (
      ((d = K2(e, u)),
      (k = d.length),
      k > 0 && e.tokenValue === "constructor" && s(e, 107),
      e.token === 1074790415 && s(e, 106),
      q(e, u, 1074790417))
    ) {
      k > 0 && s(e, 117);
      continue;
    }
    a.push(n1(e, u, t, n, i, d, 0, l, e.tokenPos, e.linePos, e.colPos));
  }
  return (
    P(e, o & 8 ? u | 32768 : u, 1074790415),
    (e.flags = (e.flags & -33) | g),
    y(e, u, f, c, m, { type: "ClassBody", body: a })
  );
}
function n1(e, u, n, t, i, o, l, f, c, m, g) {
  let a = l ? 32 : 0,
    d = null,
    { token: k, tokenPos: C, linePos: b, colPos: E } = e;
  if (k & 176128)
    switch (((d = I(e, u)), k)) {
      case 36972:
        if (
          !l &&
          e.token !== 67174411 &&
          (e.token & 1048576) !== 1048576 &&
          e.token !== 1077936157
        )
          return n1(e, u, n, t, i, o, 1, f, c, m, g);
        break;
      case 209007:
        if (e.token !== 67174411 && !(e.flags & 1)) {
          if (u & 1 && (e.token & 1073741824) === 1073741824)
            return I2(e, u, d, a, o, C, b, E);
          a |= 16 | (ee(e, u, 8457014) ? 8 : 0);
        }
        break;
      case 12402:
        if (e.token !== 67174411) {
          if (u & 1 && (e.token & 1073741824) === 1073741824)
            return I2(e, u, d, a, o, C, b, E);
          a |= 256;
        }
        break;
      case 12403:
        if (e.token !== 67174411) {
          if (u & 1 && (e.token & 1073741824) === 1073741824)
            return I2(e, u, d, a, o, C, b, E);
          a |= 512;
        }
        break;
    }
  else if (k === 69271571) (a |= 2), (d = m2(e, t, f));
  else if ((k & 134217728) === 134217728) d = X(e, u);
  else if (k === 8457014) (a |= 8), D(e, u);
  else if (u & 1 && e.token === 131)
    (a |= 4096), (d = J2(e, u | 16384, C, b, E));
  else if (u & 1 && (e.token & 1073741824) === 1073741824) a |= 128;
  else {
    if (l && k === 2162700) return gu(e, u, n, C, b, E);
    k === 122
      ? ((d = I(e, u)), e.token !== 67174411 && s(e, 28, O[e.token & 255]))
      : s(e, 28, O[e.token & 255]);
  }
  if (
    (a & 792 &&
      (e.token & 143360
        ? (d = I(e, u))
        : (e.token & 134217728) === 134217728
          ? (d = X(e, u))
          : e.token === 69271571
            ? ((a |= 2), (d = m2(e, u, 0)))
            : e.token === 122
              ? (d = I(e, u))
              : u & 1 && e.token === 131
                ? ((a |= 4096), (d = J2(e, u, C, b, E)))
                : s(e, 132)),
    a & 2 ||
      (e.tokenValue === "constructor"
        ? ((e.token & 1073741824) === 1073741824
            ? s(e, 126)
            : !(a & 32) &&
              e.token === 67174411 &&
              (a & 920
                ? s(e, 51, "accessor")
                : u & 524288 || (e.flags & 32 ? s(e, 52) : (e.flags |= 32))),
          (a |= 64))
        : !(a & 4096) && a & 824 && e.tokenValue === "prototype" && s(e, 50)),
    u & 1 && e.token !== 67174411)
  )
    return I2(e, u, d, a, o, C, b, E);
  let w = Z(e, u, a, f, e.tokenPos, e.linePos, e.colPos);
  return y(
    e,
    u,
    c,
    m,
    g,
    u & 1
      ? {
          type: "MethodDefinition",
          kind:
            !(a & 32) && a & 64
              ? "constructor"
              : a & 256
                ? "get"
                : a & 512
                  ? "set"
                  : "method",
          static: (a & 32) > 0,
          computed: (a & 2) > 0,
          key: d,
          decorators: o,
          value: w,
        }
      : {
          type: "MethodDefinition",
          kind:
            !(a & 32) && a & 64
              ? "constructor"
              : a & 256
                ? "get"
                : a & 512
                  ? "set"
                  : "method",
          static: (a & 32) > 0,
          computed: (a & 2) > 0,
          key: d,
          value: w,
        },
  );
}
function J2(e, u, n, t, i) {
  D(e, u);
  let { tokenValue: o } = e;
  return (
    o === "constructor" && s(e, 125),
    D(e, u),
    y(e, u, n, t, i, { type: "PrivateIdentifier", name: o })
  );
}
function I2(e, u, n, t, i, o, l, f) {
  let c = null;
  if ((t & 8 && s(e, 0), e.token === 1077936157)) {
    D(e, u | 32768);
    let { tokenPos: m, linePos: g, colPos: a } = e;
    e.token === 537079928 && s(e, 116);
    let d = t & 64 ? 14680064 : 31981568;
    (u = ((u | d) ^ d) | ((t & 88) << 18) | 100925440),
      (c = K(e, u | 16384, 2, 0, 1, 0, 1, m, g, a)),
      ((e.token & 1073741824) !== 1073741824 ||
        (e.token & 4194304) === 4194304) &&
        ((c = N(e, u | 16384, c, 0, 0, m, g, a)),
        (c = U(e, u | 16384, 0, 0, m, g, a, c)),
        e.token === 18 && (c = p(e, u, 0, o, l, f, c)));
  }
  return y(e, u, o, l, f, {
    type: "PropertyDefinition",
    key: n,
    value: c,
    static: (t & 32) > 0,
    computed: (t & 2) > 0,
    decorators: i,
  });
}
function i1(e, u, n, t, i, o, l, f) {
  if (e.token & 143360) return se(e, u, n, t, i, o, l, f);
  (e.token & 2097152) !== 2097152 && s(e, 28, O[e.token & 255]);
  let c =
    e.token === 69271571
      ? _(e, u, n, 1, 0, 1, t, i, o, l, f)
      : Y(e, u, n, 1, 0, 1, t, i, o, l, f);
  return e.destructible & 16 && s(e, 48), e.destructible & 32 && s(e, 48), c;
}
function se(e, u, n, t, i, o, l, f) {
  let { tokenValue: c, token: m } = e;
  return (
    u & 1024 &&
      ((m & 537079808) === 537079808
        ? s(e, 116)
        : (m & 36864) === 36864 && s(e, 115)),
    (m & 20480) === 20480 && s(e, 100),
    u & 2099200 && m === 241773 && s(e, 30),
    m === 241739 && t & 24 && s(e, 98),
    u & 4196352 && m === 209008 && s(e, 96),
    D(e, u),
    n && u2(e, u, n, c, t, i),
    y(e, u, o, l, f, { type: "Identifier", name: c })
  );
}
function ae(e, u, n, t, i, o) {
  if ((D(e, u), e.token === 8456259))
    return y(e, u, t, i, o, {
      type: "JSXFragment",
      openingFragment: Hu(e, u, t, i, o),
      children: Te(e, u),
      closingFragment: Ku(e, u, n, e.tokenPos, e.linePos, e.colPos),
    });
  let l = null,
    f = [],
    c = _u(e, u, n, t, i, o);
  if (!c.selfClosing) {
    (f = Te(e, u)), (l = zu(e, u, n, e.tokenPos, e.linePos, e.colPos));
    let m = U2(l.name);
    U2(c.name) !== m && s(e, 150, m);
  }
  return y(e, u, t, i, o, {
    type: "JSXElement",
    children: f,
    openingElement: c,
    closingElement: l,
  });
}
function Hu(e, u, n, t, i) {
  return d2(e, u), y(e, u, n, t, i, { type: "JSXOpeningFragment" });
}
function zu(e, u, n, t, i, o) {
  P(e, u, 25);
  let l = t1(e, u, e.tokenPos, e.linePos, e.colPos);
  return (
    n ? P(e, u, 8456259) : (e.token = d2(e, u)),
    y(e, u, t, i, o, { type: "JSXClosingElement", name: l })
  );
}
function Ku(e, u, n, t, i, o) {
  return (
    P(e, u, 25),
    P(e, u, 8456259),
    y(e, u, t, i, o, { type: "JSXClosingFragment" })
  );
}
function Te(e, u) {
  let n = [];
  for (; e.token !== 25; )
    (e.index = e.tokenPos = e.startPos),
      (e.column = e.colPos = e.startColumn),
      (e.line = e.linePos = e.startLine),
      d2(e, u),
      n.push($u(e, u, e.tokenPos, e.linePos, e.colPos));
  return n;
}
function $u(e, u, n, t, i) {
  if (e.token === 138) return Wu(e, u, n, t, i);
  if (e.token === 2162700) return l1(e, u, 0, 0, n, t, i);
  if (e.token === 8456258) return ae(e, u, 0, n, t, i);
  s(e, 0);
}
function Wu(e, u, n, t, i) {
  d2(e, u);
  let o = { type: "JSXText", value: e.tokenValue };
  return u & 512 && (o.raw = e.tokenRaw), y(e, u, n, t, i, o);
}
function _u(e, u, n, t, i, o) {
  (e.token & 143360) !== 143360 && (e.token & 4096) !== 4096 && s(e, 0);
  let l = t1(e, u, e.tokenPos, e.linePos, e.colPos),
    f = Qu(e, u),
    c = e.token === 8457016;
  return (
    e.token === 8456259
      ? d2(e, u)
      : (P(e, u, 8457016), n ? P(e, u, 8456259) : d2(e, u)),
    y(e, u, t, i, o, {
      type: "JSXOpeningElement",
      name: l,
      attributes: f,
      selfClosing: c,
    })
  );
}
function t1(e, u, n, t, i) {
  Y2(e);
  let o = $2(e, u, n, t, i);
  if (e.token === 21) return o1(e, u, o, n, t, i);
  for (; q(e, u, 67108877); ) Y2(e), (o = Yu(e, u, o, n, t, i));
  return o;
}
function Yu(e, u, n, t, i, o) {
  let l = $2(e, u, e.tokenPos, e.linePos, e.colPos);
  return y(e, u, t, i, o, {
    type: "JSXMemberExpression",
    object: n,
    property: l,
  });
}
function Qu(e, u) {
  let n = [];
  for (; e.token !== 8457016 && e.token !== 8456259 && e.token !== 1048576; )
    n.push(ru(e, u, e.tokenPos, e.linePos, e.colPos));
  return n;
}
function Zu(e, u, n, t, i) {
  D(e, u), P(e, u, 14);
  let o = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos);
  return (
    P(e, u, 1074790415),
    y(e, u, n, t, i, { type: "JSXSpreadAttribute", argument: o })
  );
}
function ru(e, u, n, t, i) {
  if (e.token === 2162700) return Zu(e, u, n, t, i);
  Y2(e);
  let o = null,
    l = $2(e, u, n, t, i);
  if ((e.token === 21 && (l = o1(e, u, l, n, t, i)), e.token === 1077936157)) {
    let f = z1(e, u),
      { tokenPos: c, linePos: m, colPos: g } = e;
    switch (f) {
      case 134283267:
        o = X(e, u);
        break;
      case 8456258:
        o = ae(e, u, 1, c, m, g);
        break;
      case 2162700:
        o = l1(e, u, 1, 1, c, m, g);
        break;
      default:
        s(e, 149);
    }
  }
  return y(e, u, n, t, i, { type: "JSXAttribute", value: o, name: l });
}
function o1(e, u, n, t, i, o) {
  P(e, u, 21);
  let l = $2(e, u, e.tokenPos, e.linePos, e.colPos);
  return y(e, u, t, i, o, { type: "JSXNamespacedName", namespace: n, name: l });
}
function l1(e, u, n, t, i, o, l) {
  D(e, u | 32768);
  let { tokenPos: f, linePos: c, colPos: m } = e;
  if (e.token === 14) return Gu(e, u, i, o, l);
  let g = null;
  return (
    e.token === 1074790415
      ? (t && s(e, 152), (g = xu(e, u, e.startPos, e.startLine, e.startColumn)))
      : (g = R(e, u, 1, 0, f, c, m)),
    n ? P(e, u, 1074790415) : d2(e, u),
    y(e, u, i, o, l, { type: "JSXExpressionContainer", expression: g })
  );
}
function Gu(e, u, n, t, i) {
  P(e, u, 14);
  let o = R(e, u, 1, 0, e.tokenPos, e.linePos, e.colPos);
  return (
    P(e, u, 1074790415),
    y(e, u, n, t, i, { type: "JSXSpreadChild", expression: o })
  );
}
function xu(e, u, n, t, i) {
  return (
    (e.startPos = e.tokenPos),
    (e.startLine = e.linePos),
    (e.startColumn = e.colPos),
    y(e, u, n, t, i, { type: "JSXEmptyExpression" })
  );
}
function $2(e, u, n, t, i) {
  let { tokenValue: o } = e;
  return D(e, u), y(e, u, n, t, i, { type: "JSXIdentifier", name: o });
}
function f1(e, u) {
  return r1(e, u, 0);
}
function pu(e, u) {
  let n = new SyntaxError(
    e + " (" + u.loc.start.line + ":" + u.loc.start.column + ")",
  );
  return Object.assign(n, u);
}
var c1 = pu;
function e0(e) {
  let u = [];
  for (let n of e)
    try {
      return n();
    } catch (t) {
      u.push(t);
    }
  throw Object.assign(new Error("All combinations failed"), { errors: u });
}
var d1 = e0;
var u0 = (e, u, n) => {
    if (!(e && u == null))
      return Array.isArray(u) || typeof u == "string"
        ? u[n < 0 ? u.length + n : n]
        : u.at(n);
  },
  me = u0;
function n0(e) {
  return Array.isArray(e) && e.length > 0;
}
var s1 = n0;
function $(e) {
  var t, i, o;
  let u = ((t = e.range) == null ? void 0 : t[0]) ?? e.start,
    n =
      (o =
        ((i = e.declaration) == null ? void 0 : i.decorators) ??
        e.decorators) == null
        ? void 0
        : o[0];
  return n ? Math.min($(n), u) : u;
}
function e2(e) {
  var u;
  return ((u = e.range) == null ? void 0 : u[1]) ?? e.end;
}
function i0(e) {
  let u = new Set(e);
  return (n) => u.has(n == null ? void 0 : n.type);
}
var a1 = i0;
var t0 = a1(["Block", "CommentBlock", "MultiLine"]),
  v2 = t0;
function o0(e) {
  let u = `*${e.value}*`.split(`
`);
  return u.length > 1 && u.every((n) => n.trimStart()[0] === "*");
}
var ge = o0;
function l0(e) {
  return v2(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var m1 = l0;
var T2 = null;
function F2(e) {
  if (T2 !== null && typeof T2.property) {
    let u = T2;
    return (T2 = F2.prototype = null), u;
  }
  return (T2 = F2.prototype = e ?? Object.create(null)), new F2();
}
var f0 = 10;
for (let e = 0; e <= f0; e++) F2();
function ye(e) {
  return F2(e);
}
function c0(e, u = "type") {
  ye(e);
  function n(t) {
    let i = t[u],
      o = e[i];
    if (!Array.isArray(o))
      throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), {
        node: t,
      });
    return o;
  }
  return n;
}
var g1 = c0;
var y1 = {
  ArrayExpression: ["elements"],
  AssignmentExpression: ["left", "right"],
  BinaryExpression: ["left", "right"],
  InterpreterDirective: [],
  Directive: ["value"],
  DirectiveLiteral: [],
  BlockStatement: ["directives", "body"],
  BreakStatement: ["label"],
  CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  CatchClause: ["param", "body"],
  ConditionalExpression: ["test", "consequent", "alternate"],
  ContinueStatement: ["label"],
  DebuggerStatement: [],
  DoWhileStatement: ["test", "body"],
  EmptyStatement: [],
  ExpressionStatement: ["expression"],
  File: ["program"],
  ForInStatement: ["left", "right", "body"],
  ForStatement: ["init", "test", "update", "body"],
  FunctionDeclaration: [
    "id",
    "params",
    "body",
    "returnType",
    "typeParameters",
    "predicate",
  ],
  FunctionExpression: ["id", "params", "body", "returnType", "typeParameters"],
  Identifier: ["typeAnnotation", "decorators"],
  IfStatement: ["test", "consequent", "alternate"],
  LabeledStatement: ["label", "body"],
  StringLiteral: [],
  NumericLiteral: [],
  NullLiteral: [],
  BooleanLiteral: [],
  RegExpLiteral: [],
  LogicalExpression: ["left", "right"],
  MemberExpression: ["object", "property"],
  NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  Program: ["directives", "body"],
  ObjectExpression: ["properties"],
  ObjectMethod: [
    "key",
    "params",
    "body",
    "decorators",
    "returnType",
    "typeParameters",
  ],
  ObjectProperty: ["key", "value", "decorators"],
  RestElement: ["argument", "typeAnnotation", "decorators"],
  ReturnStatement: ["argument"],
  SequenceExpression: ["expressions"],
  ParenthesizedExpression: ["expression"],
  SwitchCase: ["test", "consequent"],
  SwitchStatement: ["discriminant", "cases"],
  ThisExpression: [],
  ThrowStatement: ["argument"],
  TryStatement: ["block", "handler", "finalizer"],
  UnaryExpression: ["argument"],
  UpdateExpression: ["argument"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id", "init"],
  WhileStatement: ["test", "body"],
  WithStatement: ["object", "body"],
  AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"],
  ArrayPattern: ["elements", "typeAnnotation", "decorators"],
  ArrowFunctionExpression: [
    "params",
    "body",
    "returnType",
    "typeParameters",
    "predicate",
  ],
  ClassBody: ["body"],
  ClassExpression: [
    "id",
    "body",
    "superClass",
    "mixins",
    "typeParameters",
    "superTypeParameters",
    "implements",
    "decorators",
    "superTypeArguments",
  ],
  ClassDeclaration: [
    "id",
    "body",
    "superClass",
    "mixins",
    "typeParameters",
    "superTypeParameters",
    "implements",
    "decorators",
    "superTypeArguments",
  ],
  ExportAllDeclaration: ["source", "attributes", "exported"],
  ExportDefaultDeclaration: ["declaration"],
  ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"],
  ExportSpecifier: ["local", "exported"],
  ForOfStatement: ["left", "right", "body"],
  ImportDeclaration: ["specifiers", "source", "attributes"],
  ImportDefaultSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportSpecifier: ["local", "imported"],
  ImportExpression: ["source", "options", "attributes"],
  MetaProperty: ["meta", "property"],
  ClassMethod: [
    "key",
    "params",
    "body",
    "decorators",
    "returnType",
    "typeParameters",
  ],
  ObjectPattern: ["properties", "typeAnnotation", "decorators"],
  SpreadElement: ["argument"],
  Super: [],
  TaggedTemplateExpression: ["tag", "quasi", "typeParameters", "typeArguments"],
  TemplateElement: [],
  TemplateLiteral: ["quasis", "expressions"],
  YieldExpression: ["argument"],
  AwaitExpression: ["argument"],
  Import: [],
  BigIntLiteral: [],
  ExportNamespaceSpecifier: ["exported"],
  OptionalMemberExpression: ["object", "property"],
  OptionalCallExpression: [
    "callee",
    "arguments",
    "typeParameters",
    "typeArguments",
  ],
  ClassProperty: ["key", "value", "typeAnnotation", "decorators", "variance"],
  ClassAccessorProperty: ["key", "value", "typeAnnotation", "decorators"],
  ClassPrivateProperty: [
    "key",
    "value",
    "decorators",
    "typeAnnotation",
    "variance",
  ],
  ClassPrivateMethod: [
    "key",
    "params",
    "body",
    "decorators",
    "returnType",
    "typeParameters",
  ],
  PrivateName: ["id"],
  StaticBlock: ["body"],
  AnyTypeAnnotation: [],
  ArrayTypeAnnotation: ["elementType"],
  BooleanTypeAnnotation: [],
  BooleanLiteralTypeAnnotation: [],
  NullLiteralTypeAnnotation: [],
  ClassImplements: ["id", "typeParameters"],
  DeclareClass: [
    "id",
    "typeParameters",
    "extends",
    "mixins",
    "implements",
    "body",
  ],
  DeclareFunction: ["id", "predicate"],
  DeclareInterface: ["id", "typeParameters", "extends", "body"],
  DeclareModule: ["id", "body"],
  DeclareModuleExports: ["typeAnnotation"],
  DeclareTypeAlias: ["id", "typeParameters", "right"],
  DeclareOpaqueType: ["id", "typeParameters", "supertype"],
  DeclareVariable: ["id"],
  DeclareExportDeclaration: ["declaration", "specifiers", "source"],
  DeclareExportAllDeclaration: ["source"],
  DeclaredPredicate: ["value"],
  ExistsTypeAnnotation: [],
  FunctionTypeAnnotation: [
    "typeParameters",
    "params",
    "rest",
    "returnType",
    "this",
  ],
  FunctionTypeParam: ["name", "typeAnnotation"],
  GenericTypeAnnotation: ["id", "typeParameters"],
  InferredPredicate: [],
  InterfaceExtends: ["id", "typeParameters"],
  InterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  InterfaceTypeAnnotation: ["extends", "body"],
  IntersectionTypeAnnotation: ["types"],
  MixedTypeAnnotation: [],
  EmptyTypeAnnotation: [],
  NullableTypeAnnotation: ["typeAnnotation"],
  NumberLiteralTypeAnnotation: [],
  NumberTypeAnnotation: [],
  ObjectTypeAnnotation: [
    "properties",
    "indexers",
    "callProperties",
    "internalSlots",
  ],
  ObjectTypeInternalSlot: ["id", "value"],
  ObjectTypeCallProperty: ["value"],
  ObjectTypeIndexer: ["id", "key", "value", "variance"],
  ObjectTypeProperty: ["key", "value", "variance"],
  ObjectTypeSpreadProperty: ["argument"],
  OpaqueType: ["id", "typeParameters", "supertype", "impltype"],
  QualifiedTypeIdentifier: ["id", "qualification"],
  StringLiteralTypeAnnotation: [],
  StringTypeAnnotation: [],
  SymbolTypeAnnotation: [],
  ThisTypeAnnotation: [],
  TupleTypeAnnotation: ["types", "elementTypes"],
  TypeofTypeAnnotation: ["argument", "typeArguments"],
  TypeAlias: ["id", "typeParameters", "right"],
  TypeAnnotation: ["typeAnnotation"],
  TypeCastExpression: ["expression", "typeAnnotation"],
  TypeParameter: ["bound", "default", "variance"],
  TypeParameterDeclaration: ["params"],
  TypeParameterInstantiation: ["params"],
  UnionTypeAnnotation: ["types"],
  Variance: [],
  VoidTypeAnnotation: [],
  EnumDeclaration: ["id", "body"],
  EnumBooleanBody: ["members"],
  EnumNumberBody: ["members"],
  EnumStringBody: ["members"],
  EnumSymbolBody: ["members"],
  EnumBooleanMember: ["id", "init"],
  EnumNumberMember: ["id", "init"],
  EnumStringMember: ["id", "init"],
  EnumDefaultedMember: ["id"],
  IndexedAccessType: ["objectType", "indexType"],
  OptionalIndexedAccessType: ["objectType", "indexType"],
  JSXAttribute: ["name", "value"],
  JSXClosingElement: ["name"],
  JSXElement: ["openingElement", "children", "closingElement"],
  JSXEmptyExpression: [],
  JSXExpressionContainer: ["expression"],
  JSXSpreadChild: ["expression"],
  JSXIdentifier: [],
  JSXMemberExpression: ["object", "property"],
  JSXNamespacedName: ["namespace", "name"],
  JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"],
  JSXSpreadAttribute: ["argument"],
  JSXText: [],
  JSXFragment: ["openingFragment", "children", "closingFragment"],
  JSXOpeningFragment: [],
  JSXClosingFragment: [],
  Noop: [],
  Placeholder: [],
  V8IntrinsicIdentifier: [],
  ArgumentPlaceholder: [],
  BindExpression: ["object", "callee"],
  ImportAttribute: ["key", "value"],
  Decorator: ["expression"],
  DoExpression: ["body"],
  ExportDefaultSpecifier: ["exported"],
  RecordExpression: ["properties"],
  TupleExpression: ["elements"],
  DecimalLiteral: [],
  ModuleExpression: ["body"],
  TopicReference: [],
  PipelineTopicExpression: ["expression"],
  PipelineBareFunction: ["callee"],
  PipelinePrimaryTopicReference: [],
  TSParameterProperty: ["parameter", "decorators"],
  TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"],
  TSDeclareMethod: [
    "decorators",
    "key",
    "typeParameters",
    "params",
    "returnType",
  ],
  TSQualifiedName: ["left", "right"],
  TSCallSignatureDeclaration: [
    "typeParameters",
    "parameters",
    "typeAnnotation",
    "params",
    "returnType",
  ],
  TSConstructSignatureDeclaration: [
    "typeParameters",
    "parameters",
    "typeAnnotation",
    "params",
    "returnType",
  ],
  TSPropertySignature: ["key", "typeAnnotation"],
  TSMethodSignature: [
    "key",
    "typeParameters",
    "parameters",
    "typeAnnotation",
    "params",
    "returnType",
  ],
  TSIndexSignature: ["parameters", "typeAnnotation"],
  TSAnyKeyword: [],
  TSBooleanKeyword: [],
  TSBigIntKeyword: [],
  TSIntrinsicKeyword: [],
  TSNeverKeyword: [],
  TSNullKeyword: [],
  TSNumberKeyword: [],
  TSObjectKeyword: [],
  TSStringKeyword: [],
  TSSymbolKeyword: [],
  TSUndefinedKeyword: [],
  TSUnknownKeyword: [],
  TSVoidKeyword: [],
  TSThisType: [],
  TSFunctionType: [
    "typeParameters",
    "parameters",
    "typeAnnotation",
    "params",
    "returnType",
  ],
  TSConstructorType: [
    "typeParameters",
    "parameters",
    "typeAnnotation",
    "params",
    "returnType",
  ],
  TSTypeReference: ["typeName", "typeParameters", "typeArguments"],
  TSTypePredicate: ["parameterName", "typeAnnotation"],
  TSTypeQuery: ["exprName", "typeParameters", "typeArguments"],
  TSTypeLiteral: ["members"],
  TSArrayType: ["elementType"],
  TSTupleType: ["elementTypes"],
  TSOptionalType: ["typeAnnotation"],
  TSRestType: ["typeAnnotation"],
  TSNamedTupleMember: ["label", "elementType"],
  TSUnionType: ["types"],
  TSIntersectionType: ["types"],
  TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
  TSInferType: ["typeParameter"],
  TSParenthesizedType: ["typeAnnotation"],
  TSTypeOperator: ["typeAnnotation"],
  TSIndexedAccessType: ["objectType", "indexType"],
  TSMappedType: ["typeParameter", "typeAnnotation", "nameType"],
  TSLiteralType: ["literal"],
  TSExpressionWithTypeArguments: ["expression", "typeParameters"],
  TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  TSInterfaceBody: ["body"],
  TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
  TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"],
  TSAsExpression: ["expression", "typeAnnotation"],
  TSSatisfiesExpression: ["expression", "typeAnnotation"],
  TSTypeAssertion: ["typeAnnotation", "expression"],
  TSEnumDeclaration: ["id", "members"],
  TSEnumMember: ["id", "initializer"],
  TSModuleDeclaration: ["id", "body"],
  TSModuleBlock: ["body"],
  TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"],
  TSImportEqualsDeclaration: ["id", "moduleReference"],
  TSExternalModuleReference: ["expression"],
  TSNonNullExpression: ["expression"],
  TSExportAssignment: ["expression"],
  TSNamespaceExportDeclaration: ["id"],
  TSTypeAnnotation: ["typeAnnotation"],
  TSTypeParameterInstantiation: ["params"],
  TSTypeParameterDeclaration: ["params"],
  TSTypeParameter: ["constraint", "default", "name"],
  ChainExpression: ["expression"],
  ExperimentalRestProperty: ["argument"],
  ExperimentalSpreadProperty: ["argument"],
  Literal: [],
  MethodDefinition: ["decorators", "key", "value"],
  PrivateIdentifier: [],
  Property: ["key", "value"],
  PropertyDefinition: [
    "decorators",
    "key",
    "typeAnnotation",
    "value",
    "variance",
  ],
  AccessorProperty: ["decorators", "key", "typeAnnotation", "value"],
  TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"],
  TSAbstractKeyword: [],
  TSAbstractMethodDefinition: ["key", "value"],
  TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
  TSAsyncKeyword: [],
  TSClassImplements: ["expression", "typeArguments", "typeParameters"],
  TSDeclareKeyword: [],
  TSEmptyBodyFunctionExpression: [
    "id",
    "typeParameters",
    "params",
    "returnType",
  ],
  TSEnumBody: ["members"],
  TSExportKeyword: [],
  TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"],
  TSPrivateKeyword: [],
  TSProtectedKeyword: [],
  TSPublicKeyword: [],
  TSReadonlyKeyword: [],
  TSStaticKeyword: [],
  TSTemplateLiteralType: ["quasis", "types"],
  AsConstExpression: ["expression"],
  AsExpression: ["expression", "typeAnnotation"],
  BigIntLiteralTypeAnnotation: [],
  BigIntTypeAnnotation: [],
  ComponentDeclaration: [
    "id",
    "params",
    "body",
    "typeParameters",
    "rendersType",
  ],
  ComponentParameter: ["name", "local"],
  ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"],
  ComponentTypeParameter: ["name", "typeAnnotation"],
  ConditionalTypeAnnotation: [
    "checkType",
    "extendsType",
    "trueType",
    "falseType",
  ],
  DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"],
  DeclareEnum: ["id", "body"],
  DeclareHook: ["id"],
  DeclareNamespace: ["id", "body"],
  EnumBigIntBody: ["members"],
  EnumBigIntMember: ["id", "init"],
  HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"],
  HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"],
  InferTypeAnnotation: ["typeParameter"],
  KeyofTypeAnnotation: ["argument"],
  ObjectTypeMappedTypeProperty: [
    "keyTparam",
    "propType",
    "sourceType",
    "variance",
  ],
  QualifiedTypeofIdentifier: ["qualification", "id"],
  TupleTypeLabeledElement: ["label", "elementType", "variance"],
  TupleTypeSpreadElement: ["label", "typeAnnotation"],
  TypeOperator: ["typeAnnotation"],
  TypePredicate: ["parameterName", "typeAnnotation", "asserts"],
  NGRoot: ["node"],
  NGPipeExpression: ["left", "right", "arguments"],
  NGChainedExpression: ["expressions"],
  NGEmptyExpression: [],
  NGMicrosyntax: ["body"],
  NGMicrosyntaxKey: [],
  NGMicrosyntaxExpression: ["expression", "alias"],
  NGMicrosyntaxKeyedExpression: ["key", "expression"],
  NGMicrosyntaxLet: ["key", "value"],
  NGMicrosyntaxAs: ["key", "alias"],
  JsExpressionRoot: ["node"],
  JsonRoot: ["node"],
  TSJSDocAllType: [],
  TSJSDocUnknownType: [],
  TSJSDocNullableType: ["typeAnnotation"],
  TSJSDocNonNullableType: ["typeAnnotation"],
  NeverTypeAnnotation: [],
  UndefinedTypeAnnotation: [],
  UnknownTypeAnnotation: [],
  SatisfiesExpression: ["expression", "typeAnnotation"],
};
var d0 = g1(y1),
  k1 = d0;
function ke(e, u) {
  if (!(e !== null && typeof e == "object")) return e;
  if (Array.isArray(e)) {
    for (let t = 0; t < e.length; t++) e[t] = ke(e[t], u);
    return e;
  }
  let n = k1(e);
  for (let t = 0; t < n.length; t++) e[n[t]] = ke(e[n[t]], u);
  return u(e) || e;
}
var W2 = ke;
function s0(e, u) {
  let { parser: n, text: t } = u;
  if (e.type === "File" && e.program.interpreter) {
    let {
      program: { interpreter: i },
      comments: o,
    } = e;
    delete e.program.interpreter, o.unshift(i);
  }
  if (n === "babel") {
    let i = new Set();
    (e = W2(e, (o) => {
      var l;
      (l = o.leadingComments) != null && l.some(m1) && i.add($(o));
    })),
      (e = W2(e, (o) => {
        if (o.type === "ParenthesizedExpression") {
          let { expression: l } = o;
          if (l.type === "TypeCastExpression")
            return (l.range = [...o.range]), l;
          let f = $(o);
          if (!i.has(f))
            return (l.extra = { ...l.extra, parenthesized: !0 }), l;
        }
      }));
  }
  if (
    ((e = W2(e, (i) => {
      var o;
      switch (i.type) {
        case "LogicalExpression":
          if (A1(i)) return Ae(i);
          break;
        case "VariableDeclaration": {
          let l = me(!1, i.declarations, -1);
          l != null && l.init && t[e2(l)] !== ";" && (i.range = [$(i), e2(l)]);
          break;
        }
        case "TSParenthesizedType":
          return i.typeAnnotation;
        case "TSTypeParameter":
          if (typeof i.name == "string") {
            let l = $(i);
            i.name = {
              type: "Identifier",
              name: i.name,
              range: [l, l + i.name.length],
            };
          }
          break;
        case "TopicReference":
          e.extra = { ...e.extra, __isUsingHackPipeline: !0 };
          break;
        case "ExportAllDeclaration":
          if (
            n === "meriyah" &&
            ((o = i.exported) == null ? void 0 : o.type) === "Identifier"
          ) {
            let { exported: l } = i,
              f = t.slice($(l), e2(l));
            (f.startsWith('"') || f.startsWith("'")) &&
              (i.exported = {
                ...i.exported,
                type: "Literal",
                value: i.exported.name,
                raw: f,
              });
          }
          break;
        case "TSUnionType":
        case "TSIntersectionType":
          if (i.types.length === 1) return i.types[0];
          break;
      }
    })),
    s1(e.comments))
  ) {
    let i = me(!1, e.comments, -1);
    for (let o = e.comments.length - 2; o >= 0; o--) {
      let l = e.comments[o];
      e2(l) === $(i) &&
        v2(l) &&
        v2(i) &&
        ge(l) &&
        ge(i) &&
        (e.comments.splice(o + 1, 1),
        (l.value += "*//*" + i.value),
        (l.range = [$(l), e2(i)])),
        (i = l);
    }
  }
  return e.type === "Program" && (e.range = [0, t.length]), e;
}
function A1(e) {
  return (
    e.type === "LogicalExpression" &&
    e.right.type === "LogicalExpression" &&
    e.operator === e.right.operator
  );
}
function Ae(e) {
  return A1(e)
    ? Ae({
        type: "LogicalExpression",
        operator: e.operator,
        left: Ae({
          type: "LogicalExpression",
          operator: e.operator,
          left: e.left,
          right: e.right.left,
          range: [$(e.left), e2(e.right.left)],
        }),
        right: e.right.right,
        range: [$(e), e2(e)],
      })
    : e;
}
var h1 = s0;
var a0 = (e, u, n, t) => {
    if (!(e && u == null))
      return u.replaceAll
        ? u.replaceAll(n, t)
        : n.global
          ? u.replace(n, t)
          : u.split(n).join(t);
  },
  b2 = a0;
var m0 = /\*\/$/,
  g0 = /^\/\*\*?/,
  y0 = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
  k0 = /(^|\s+)\/\/([^\n\r]*)/g,
  D1 = /^(\r?\n)+/,
  A0 =
    /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g,
  b1 = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g,
  h0 = /(\r?\n|^) *\* ?/g,
  D0 = [];
function C1(e) {
  let u = e.match(y0);
  return u ? u[0].trimStart() : "";
}
function P1(e) {
  let u = `
`;
  e = b2(!1, e.replace(g0, "").replace(m0, ""), h0, "$1");
  let n = "";
  for (; n !== e; ) (n = e), (e = b2(!1, e, A0, `${u}$1 $2${u}`));
  e = e.replace(D1, "").trimEnd();
  let t = Object.create(null),
    i = b2(!1, e, b1, "").replace(D1, "").trimEnd(),
    o;
  for (; (o = b1.exec(e)); ) {
    let l = b2(!1, o[2], k0, "");
    if (typeof t[o[1]] == "string" || Array.isArray(t[o[1]])) {
      let f = t[o[1]];
      t[o[1]] = [...D0, ...(Array.isArray(f) ? f : [f]), l];
    } else t[o[1]] = l;
  }
  return { comments: i, pragmas: t };
}
function b0(e) {
  if (!e.startsWith("#!")) return "";
  let u = e.indexOf(`
`);
  return u === -1 ? e : e.slice(0, u);
}
var E1 = b0;
function C0(e) {
  let u = E1(e);
  u && (e = e.slice(u.length + 1));
  let n = C1(e),
    { pragmas: t, comments: i } = P1(n);
  return { shebang: u, text: e, pragmas: t, comments: i };
}
function w1(e) {
  let { pragmas: u } = C0(e);
  return (
    Object.prototype.hasOwnProperty.call(u, "prettier") ||
    Object.prototype.hasOwnProperty.call(u, "format")
  );
}
function P0(e) {
  return (
    (e = typeof e == "function" ? { parse: e } : e),
    { astFormat: "estree", hasPragma: w1, locStart: $, locEnd: e2, ...e }
  );
}
var S1 = P0;
function E0(e) {
  let { filepath: u } = e;
  if (u) {
    if (((u = u.toLowerCase()), u.endsWith(".cjs"))) return "script";
    if (u.endsWith(".mjs")) return "module";
  }
}
var B1 = E0;
var w0 = {
  next: !0,
  ranges: !0,
  webcompat: !0,
  loc: !0,
  raw: !0,
  directives: !0,
  globalReturn: !0,
  impliedStrict: !1,
  preserveParens: !1,
  lexical: !1,
  jsx: !0,
  uniqueKeyInPattern: !1,
};
function S0(e, u) {
  let n = [],
    t = [],
    i = f1(e, { ...w0, module: u === "module", onComment: n, onToken: t });
  return (i.comments = n), (i.tokens = t), i;
}
function B0(e) {
  var o;
  let { message: u, line: n, column: t } = e,
    i =
      (o = u.match(/^\[(?<line>\d+):(?<column>\d+)\]: (?<message>.*)$/u)) ==
      null
        ? void 0
        : o.groups;
  return (
    i &&
      ((u = i.message),
      typeof n != "number" && ((n = Number(i.line)), (t = Number(i.column)))),
    typeof n != "number"
      ? e
      : c1(u, { loc: { start: { line: n, column: t } }, cause: e })
  );
}
function v0(e, u = {}) {
  let n = B1(u),
    t = (n ? [n] : ["module", "script"]).map((o) => () => S0(e, o)),
    i;
  try {
    i = d1(t);
  } catch ({ errors: [o] }) {
    throw B0(o);
  }
  return h1(i, { parser: "meriyah", text: e });
}
var T0 = S1(v0);
var Fn = De;
export { Fn as default, he as parsers };

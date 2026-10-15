// Generated from src/ by scripts/build.cjs. Edit src/, then run pnpm build.
//20.09.2026 - Fix

(function () {
    'use strict';

    /* Acorn 8.19.0
    MIT License

    Copyright (C) 2012-2022 by various contributors (see AUTHORS)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */
    var Acorn = (function () {
    var module = { exports: {} };
    var exports = module.exports;
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
      typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.acorn = {}));
    })(this, (function (exports) { 'use strict';

      // This file was generated. Do not modify manually!
      var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 31, 4, 33, 15, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 7, 0, 259, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 481, 1, 61, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 12, 2, 9, 1, 3, 0, 33, 1, 1357, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

      // This file was generated. Do not modify manually!
      var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 13, 65, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 18, 21, 18, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 18, 0, 182, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 22, 0, 239, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 111, 6, 206, 13, 310, 2314, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7386, 37, 33, 96, 114, 14, 913, 15, 50, 7710, 3, 2, 6, 2, 1, 2, 296, 10, 0, 30, 2, 3, 0, 15, 4, 8, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 340, 2, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 129, 15, 6, 55, 50, 49, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4382, 2, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489, 39815, 11327];

      // This file was generated. Do not modify manually!
      var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7-\u05c9\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0897-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b53-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1af0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65";

      // This file was generated. Do not modify manually!
      var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0558\u0559\u0560-\u0588\u058b\u058c\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088f\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5c\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdc-\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c8a\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u208f-\u209f\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7dd\ua7e2\ua7f1-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab6c\uab6d\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";

      // These are a run-length and offset encoded representation of the
      // >0xffff code points that are a valid part of identifiers. The
      // offset starts at 0x10000, and each pair of numbers represents an
      // offset to the next range, and then a size of the range.

      // Reserved word lists for various dialects of the language

      var reservedWords = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      };

      // And the keywords

      var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

      var keywords$1 = {
        5: ecma5AndLessKeywords,
        "5module": ecma5AndLessKeywords + " export import",
        6: ecma5AndLessKeywords + " const class extends export import super"
      };

      var keywordRelationalOperator = /^in(stanceof)?$/;

      // ## Character categories

      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

      // This has a complexity linear to the value of the code. The
      // assumption is that looking up astral identifier characters is
      // rare.
      function isInAstralSet(code, set) {
        var pos = 0x10000;
        for (var i = 0; i < set.length; i += 2) {
          pos += set[i];
          if (pos > code) { return false }
          pos += set[i + 1];
          if (pos >= code) { return true }
        }
        return false
      }

      // Test whether a given character code starts an identifier.

      function isIdentifierStart(code, astral) {
        if (code < 65) { return code === 36 }
        if (code < 91) { return true }
        if (code < 97) { return code === 95 }
        if (code < 123) { return true }
        if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
        if (astral === false) { return false }
        return isInAstralSet(code, astralIdentifierStartCodes)
      }

      // Test whether a given character is part of an identifier.

      function isIdentifierChar(code, astral) {
        if (code < 48) { return code === 36 }
        if (code < 58) { return true }
        if (code < 65) { return false }
        if (code < 91) { return true }
        if (code < 97) { return code === 95 }
        if (code < 123) { return true }
        if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
        if (astral === false) { return false }
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
      }

      // ## Token types

      // The assignment of fine-grained, information-carrying type objects
      // allows the tokenizer to store the information it has about a
      // token in a way that is very cheap for the parser to look up.

      // All token type variables start with an underscore, to make them
      // easy to recognize.

      // The `beforeExpr` property is used to disambiguate between regular
      // expressions and divisions. It is set on all token types that can
      // be followed by an expression (thus, a slash after them would be a
      // regular expression).
      //
      // The `startsExpr` property is used to check if the token ends a
      // `yield` expression. It is set on all token types that either can
      // directly start an expression (like a quotation mark) or can
      // continue an expression (like the body of a string).
      //
      // `isLoop` marks a keyword as starting a loop, which is important
      // to know when parsing a label, in order to allow or disallow
      // continue jumps to that label.

      var TokenType = function TokenType(label, conf) {
        if ( conf === void 0 ) conf = {};

        this.label = label;
        this.keyword = conf.keyword;
        this.beforeExpr = !!conf.beforeExpr;
        this.startsExpr = !!conf.startsExpr;
        this.isLoop = !!conf.isLoop;
        this.isAssign = !!conf.isAssign;
        this.prefix = !!conf.prefix;
        this.postfix = !!conf.postfix;
        this.binop = conf.binop || null;
        this.updateContext = null;
      };

      function binop(name, prec) {
        return new TokenType(name, {beforeExpr: true, binop: prec})
      }
      var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

      // Map keyword names to token types.

      var keywords = {};

      // Succinct definitions of keyword token types
      function kw(name, options) {
        if ( options === void 0 ) options = {};

        options.keyword = name;
        return keywords[name] = new TokenType(name, options)
      }

      var types$1 = {
        num: new TokenType("num", startsExpr),
        regexp: new TokenType("regexp", startsExpr),
        string: new TokenType("string", startsExpr),
        name: new TokenType("name", startsExpr),
        privateId: new TokenType("privateId", startsExpr),
        eof: new TokenType("eof"),

        // Punctuation token types.
        bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
        bracketR: new TokenType("]"),
        braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
        braceR: new TokenType("}"),
        parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
        parenR: new TokenType(")"),
        comma: new TokenType(",", beforeExpr),
        semi: new TokenType(";", beforeExpr),
        colon: new TokenType(":", beforeExpr),
        dot: new TokenType("."),
        question: new TokenType("?", beforeExpr),
        questionDot: new TokenType("?."),
        arrow: new TokenType("=>", beforeExpr),
        template: new TokenType("template"),
        invalidTemplate: new TokenType("invalidTemplate"),
        ellipsis: new TokenType("...", beforeExpr),
        backQuote: new TokenType("`", startsExpr),
        dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

        // Operators. These carry several kinds of properties to help the
        // parser use them properly (the presence of these properties is
        // what categorizes them as operators).
        //
        // `binop`, when present, specifies that this operator is a binary
        // operator, and will refer to its precedence.
        //
        // `prefix` and `postfix` mark the operator as a prefix or postfix
        // unary operator.
        //
        // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
        // binary operators with a very low precedence, that should result
        // in AssignmentExpression nodes.

        eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
        assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
        incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
        prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
        logicalOR: binop("||", 1),
        logicalAND: binop("&&", 2),
        bitwiseOR: binop("|", 3),
        bitwiseXOR: binop("^", 4),
        bitwiseAND: binop("&", 5),
        equality: binop("==/!=/===/!==", 6),
        relational: binop("</>/<=/>=", 7),
        bitShift: binop("<</>>/>>>", 8),
        plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
        modulo: binop("%", 10),
        star: binop("*", 10),
        slash: binop("/", 10),
        starstar: new TokenType("**", {beforeExpr: true}),
        coalesce: binop("??", 1),

        // Keyword token types.
        _break: kw("break"),
        _case: kw("case", beforeExpr),
        _catch: kw("catch"),
        _continue: kw("continue"),
        _debugger: kw("debugger"),
        _default: kw("default", beforeExpr),
        _do: kw("do", {isLoop: true, beforeExpr: true}),
        _else: kw("else", beforeExpr),
        _finally: kw("finally"),
        _for: kw("for", {isLoop: true}),
        _function: kw("function", startsExpr),
        _if: kw("if"),
        _return: kw("return", beforeExpr),
        _switch: kw("switch"),
        _throw: kw("throw", beforeExpr),
        _try: kw("try"),
        _var: kw("var"),
        _const: kw("const"),
        _while: kw("while", {isLoop: true}),
        _with: kw("with"),
        _new: kw("new", {beforeExpr: true, startsExpr: true}),
        _this: kw("this", startsExpr),
        _super: kw("super", startsExpr),
        _class: kw("class", startsExpr),
        _extends: kw("extends", beforeExpr),
        _export: kw("export"),
        _import: kw("import", startsExpr),
        _null: kw("null", startsExpr),
        _true: kw("true", startsExpr),
        _false: kw("false", startsExpr),
        _in: kw("in", {beforeExpr: true, binop: 7}),
        _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
        _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
        _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
        _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
      };

      // Matches a whole line break (where CRLF is considered a single
      // line break). Used to count lines.

      var lineBreak = /\r\n?|\n|\u2028|\u2029/;
      var lineBreakG = new RegExp(lineBreak.source, "g");

      function isNewLine(code) {
        return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
      }

      function nextLineBreak(code, from, end) {
        if ( end === void 0 ) end = code.length;

        for (var i = from; i < end; i++) {
          var next = code.charCodeAt(i);
          if (isNewLine(next))
            { return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1 }
        }
        return -1
      }

      var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

      var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

      var ref = Object.prototype;
      var hasOwnProperty = ref.hasOwnProperty;
      var toString = ref.toString;

      var hasOwn = Object.hasOwn || (function (obj, propName) { return (
        hasOwnProperty.call(obj, propName)
      ); });

      var isArray = Array.isArray || (function (obj) { return (
        toString.call(obj) === "[object Array]"
      ); });

      var regexpCache = Object.create(null);

      function wordsRegexp(words) {
        return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"))
      }

      function codePointToString(code) {
        // UTF-16 Decoding
        if (code <= 0xFFFF) { return String.fromCharCode(code) }
        code -= 0x10000;
        return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
      }

      var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

      // These are used when `options.locations` is on, for the
      // `startLoc` and `endLoc` properties.

      var Position = function Position(line, col) {
        this.line = line;
        this.column = col;
      };

      Position.prototype.offset = function offset (n) {
        return new Position(this.line, this.column + n)
      };

      var SourceLocation = function SourceLocation(p, start, end) {
        this.start = start;
        this.end = end;
        if (p.sourceFile !== null) { this.source = p.sourceFile; }
      };

      // The `getLineInfo` function is mostly useful when the
      // `locations` option is off (for performance reasons) and you
      // want to find the line/column position for a given character
      // offset. `input` should be the code string that the offset refers
      // into.

      function getLineInfo(input, offset) {
        for (var line = 1, cur = 0;;) {
          var nextBreak = nextLineBreak(input, cur, offset);
          if (nextBreak < 0) { return new Position(line, offset - cur) }
          ++line;
          cur = nextBreak;
        }
      }

      // A second argument must be given to configure the parser process.
      // These options are recognized (only `ecmaVersion` is required):

      var defaultOptions = {
        // `ecmaVersion` indicates the ECMAScript version to parse. Must be
        // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
        // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
        // (the latest version the library supports). This influences
        // support for strict mode, the set of reserved words, and support
        // for new syntax features.
        ecmaVersion: null,
        // `sourceType` indicates the mode the code should be parsed in.
        // Can be either `"script"`, `"module"` or `"commonjs"`. This influences global
        // strict mode and parsing of `import` and `export` declarations.
        sourceType: "script",
        // When set to true, enable strict parsing mode even if `sourceType`
        // is `"script"`.
        strict: false,
        // `onInsertedSemicolon` can be a callback that will be called when
        // a semicolon is automatically inserted. It will be passed the
        // position of the inserted semicolon as an offset, and if
        // `locations` is enabled, it is given the location as a `{line,
        // column}` object as second argument.
        onInsertedSemicolon: null,
        // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
        // trailing commas.
        onTrailingComma: null,
        // By default, reserved words are only enforced if ecmaVersion >= 5.
        // Set `allowReserved` to a boolean value to explicitly turn this on
        // an off. When this option has the value "never", reserved words
        // and keywords can also not be used as property names.
        allowReserved: null,
        // When enabled, a return at the top level is not considered an
        // error.
        allowReturnOutsideFunction: false,
        // When enabled, import/export statements are not constrained to
        // appearing at the top of the program, and an import.meta expression
        // in a script isn't considered an error.
        allowImportExportEverywhere: false,
        // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
        // When enabled, await identifiers are allowed to appear at the top-level scope,
        // but they are still not allowed in non-async functions.
        allowAwaitOutsideFunction: null,
        // When enabled, super identifiers are not constrained to
        // appearing in methods and do not raise an error when they appear elsewhere.
        allowSuperOutsideMethod: null,
        // When enabled, hashbang directive in the beginning of file is
        // allowed and treated as a line comment. Enabled by default when
        // `ecmaVersion` >= 2023.
        allowHashBang: false,
        // By default, the parser will verify that private properties are
        // only used in places where they are valid and have been declared.
        // Set this to false to turn such checks off.
        checkPrivateFields: true,
        // When `locations` is on, `loc` properties holding objects with
        // `start` and `end` properties in `{line, column}` form (with
        // line being 1-based and column 0-based) will be attached to the
        // nodes.
        locations: false,
        // Pass an optional `{line, column}` object to use for the start of
        // the parse. This is mostly useful when using `parseExpressionAt`
        // with `locations: true`, to prevent the parser from having to
        // determine the line position at the start position.
        startLocation: null,
        // A function can be passed as `onToken` option, which will
        // cause Acorn to call that function with object in the same
        // format as tokens returned from `tokenizer().getToken()`. Note
        // that you are not allowed to call the parser from the
        // callback—that will corrupt its internal state.
        onToken: null,
        // A function can be passed as `onComment` option, which will
        // cause Acorn to call that function with `(block, text, start,
        // end)` parameters whenever a comment is skipped. `block` is a
        // boolean indicating whether this is a block (`/* */`) comment,
        // `text` is the content of the comment, and `start` and `end` are
        // character offsets that denote the start and end of the comment.
        // When the `locations` option is on, two more parameters are
        // passed, the full `{line, column}` locations of the start and
        // end of the comments. Note that you are not allowed to call the
        // parser from the callback—that will corrupt its internal state.
        // When this option has an array as value, objects representing the
        // comments are pushed to it.
        onComment: null,
        // Nodes have their start and end characters offsets recorded in
        // `start` and `end` properties (directly on the node, rather than
        // the `loc` object, which holds line/column data. To also add a
        // [semi-standardized][range] `range` property holding a `[start,
        // end]` array with the same numbers, set the `ranges` option to
        // `true`.
        //
        // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
        ranges: false,
        // It is possible to parse multiple files into a single AST by
        // passing the tree produced by parsing the first file as
        // `program` option in subsequent parses. This will add the
        // toplevel forms of the parsed file to the `Program` (top) node
        // of an existing parse tree.
        program: null,
        // When `locations` is on, you can pass this to record the source
        // file in every node's `loc` object.
        sourceFile: null,
        // This value, if given, is stored in every node, whether
        // `locations` is on or off.
        directSourceFile: null,
        // When enabled, parenthesized expressions are represented by
        // (non-standard) ParenthesizedExpression nodes
        preserveParens: false
      };

      // Interpret and default an options object

      var warnedAboutEcmaVersion = false;

      function getOptions(opts) {
        var options = {};

        for (var opt in defaultOptions)
          { options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt]; }

        if (options.ecmaVersion === "latest") {
          options.ecmaVersion = 1e8;
        } else if (options.ecmaVersion == null) {
          if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
            warnedAboutEcmaVersion = true;
            console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
          }
          options.ecmaVersion = 11;
        } else if (options.ecmaVersion >= 2015) {
          options.ecmaVersion -= 2009;
        }

        if (options.allowReserved == null)
          { options.allowReserved = options.ecmaVersion < 5; }

        if (!opts || opts.allowHashBang == null)
          { options.allowHashBang = options.ecmaVersion >= 14; }

        if (isArray(options.onToken)) {
          var tokens = options.onToken;
          options.onToken = function (token) { return tokens.push(token); };
        }
        if (isArray(options.onComment))
          { options.onComment = pushComment(options, options.onComment); }

        if (options.sourceType === "commonjs" && options.allowAwaitOutsideFunction)
          { throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs") }

        return options
      }

      function pushComment(options, array) {
        return function(block, text, start, end, startLoc, endLoc) {
          var comment = {
            type: block ? "Block" : "Line",
            value: text,
            start: start,
            end: end
          };
          if (options.locations)
            { comment.loc = new SourceLocation(this, startLoc, endLoc); }
          if (options.ranges)
            { comment.range = [start, end]; }
          array.push(comment);
        }
      }

      // Each scope gets a bitset that may contain these flags
      var
          SCOPE_TOP = 1,
          SCOPE_FUNCTION = 2,
          SCOPE_ASYNC = 4,
          SCOPE_GENERATOR = 8,
          SCOPE_ARROW = 16,
          SCOPE_SIMPLE_CATCH = 32,
          SCOPE_SUPER = 64,
          SCOPE_DIRECT_SUPER = 128,
          SCOPE_CLASS_STATIC_BLOCK = 256,
          SCOPE_CLASS_FIELD_INIT = 512,
          SCOPE_SWITCH = 1024,
          SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;

      function functionFlags(async, generator) {
        return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
      }

      // Used in checkLVal* and declareName to determine the type of a binding
      var
          BIND_NONE = 0, // Not a binding
          BIND_VAR = 1, // Var-style binding
          BIND_LEXICAL = 2, // Let- or const-style binding
          BIND_FUNCTION = 3, // Function declaration
          BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
          BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

      var Parser = function Parser(options, input, startPos) {
        this.options = options = getOptions(options);
        this.sourceFile = options.sourceFile;
        this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
        var reserved = "";
        if (options.allowReserved !== true) {
          reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
          if (options.sourceType === "module") { reserved += " await"; }
        }
        this.reservedWords = wordsRegexp(reserved);
        var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
        this.reservedWordsStrict = wordsRegexp(reservedStrict);
        this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
        this.input = String(input);

        // Used to signal to callers of `readWord1` whether the word
        // contained any escape sequences. This is needed because words with
        // escape sequences must not be interpreted as keywords.
        this.containsEsc = false;

        // Set up token state

        // The current position of the tokenizer in the input.
        this.pos = startPos || 0;
        this.curLine = 1;
        if (options.startLocation) {
          this.lineStart = this.pos - options.startLocation.column;
          this.curLine = options.startLocation.line;
        } else if (startPos) {
          this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
          if (this.options.locations)
            { this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length; }
        } else {
          this.lineStart = 0;
        }

        // Properties of the current token:
        // Its type
        this.type = types$1.eof;
        // For tokens that include more information than their type, the value
        this.value = null;
        // Its start and end offset
        this.start = this.end = this.pos;
        // And, if locations are used, the {line, column} object
        // corresponding to those offsets
        this.startLoc = this.endLoc = this.curPosition();

        // Position information for the previous token
        this.lastTokEndLoc = this.lastTokStartLoc = null;
        this.lastTokStart = this.lastTokEnd = this.pos;

        // The context stack is used to superficially track syntactic
        // context to predict whether a regular expression is allowed in a
        // given position.
        this.context = this.initialContext();
        this.exprAllowed = true;

        // Figure out if it's a module code.
        this.inModule = options.sourceType === "module";
        this.strict = this.inModule || options.strict === true || this.strictDirective(this.pos);

        // Used to signify the start of a potential arrow function
        this.potentialArrowAt = -1;
        this.potentialArrowInForAwait = false;

        // Positions to delayed-check that yield/await does not exist in default parameters.
        this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
        // Labels in scope.
        this.labels = [];
        // Thus-far undefined exports.
        this.undefinedExports = Object.create(null);

        // If enabled, skip leading hashbang line.
        if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
          { this.skipLineComment(2); }

        // Scope tracking for duplicate variable names (see scope.js)
        this.scopeStack = [];
        this.enterScope(
          this.options.sourceType === "commonjs"
            // In commonjs, the top-level scope behaves like a function scope
            ? SCOPE_FUNCTION
            : SCOPE_TOP
        );

        // For RegExp validation
        this.regexpState = null;

        // The stack of private names.
        // Each element has two properties: 'declared' and 'used'.
        // When it exited from the outermost class definition, all used private names must be declared.
        this.privateNameStack = [];
      };

      var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },canAwait: { configurable: true },allowReturn: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true },allowNewDotTarget: { configurable: true },allowUsing: { configurable: true },inClassStaticBlock: { configurable: true } };

      Parser.prototype.parse = function parse () {
          var this$1$1 = this;

        var node = this.options.program || this.startNode();
        this.nextToken();
        return this.catchStackOverflow(function () { return this$1$1.parseTopLevel(node); })
      };

      prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };

      prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };

      prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };

      prototypeAccessors.canAwait.get = function () {
        for (var i = this.scopeStack.length - 1; i >= 0; i--) {
          var ref = this.scopeStack[i];
            var flags = ref.flags;
          if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) { return false }
          if (flags & SCOPE_FUNCTION) { return (flags & SCOPE_ASYNC) > 0 }
        }
        return (this.inModule && this.options.ecmaVersion >= 13) || this.options.allowAwaitOutsideFunction
      };

      prototypeAccessors.allowReturn.get = function () {
        if (this.inFunction) { return true }
        if (this.options.allowReturnOutsideFunction && this.currentVarScope().flags & SCOPE_TOP) { return true }
        return false
      };

      prototypeAccessors.allowSuper.get = function () {
        var ref = this.currentThisScope();
          var flags = ref.flags;
        return (flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod
      };

      prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };

      prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

      prototypeAccessors.allowNewDotTarget.get = function () {
        for (var i = this.scopeStack.length - 1; i >= 0; i--) {
          var ref = this.scopeStack[i];
            var flags = ref.flags;
          if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) ||
              ((flags & SCOPE_FUNCTION) && !(flags & SCOPE_ARROW))) { return true }
        }
        return false
      };

      prototypeAccessors.allowUsing.get = function () {
        var ref = this.currentScope();
          var flags = ref.flags;
        if (flags & SCOPE_SWITCH) { return false }
        if (!this.inModule && flags & SCOPE_TOP) { return false }
        return true
      };

      prototypeAccessors.inClassStaticBlock.get = function () {
        return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0
      };

      Parser.extend = function extend () {
          var plugins = [], len = arguments.length;
          while ( len-- ) plugins[ len ] = arguments[ len ];

        var cls = this;
        for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
        return cls
      };

      Parser.parse = function parse (input, options) {
        return new this(options, input).parse()
      };

      Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
        var parser = new this(options, input, pos);
        parser.nextToken();
        return parser.parseExpression()
      };

      Parser.tokenizer = function tokenizer (input, options) {
        return new this(options, input)
      };

      Object.defineProperties( Parser.prototype, prototypeAccessors );

      var pp$9 = Parser.prototype;

      // ## Parser utilities

      var literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
      pp$9.strictDirective = function(start) {
        if (this.options.ecmaVersion < 5) { return false }
        for (;;) {
          // Try to find string literal.
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          var match = literal.exec(this.input.slice(start));
          if (!match) { return false }
          if ((match[1] || match[2]) === "use strict") {
            skipWhiteSpace.lastIndex = start + match[0].length;
            var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
            var next = this.input.charAt(end);
            return next === ";" || next === "}" ||
              (lineBreak.test(spaceAfter[0]) &&
               !(/[(`.[+\-/*%<>=,?^&]/.test(next) ||
                 next === "!" && this.input.charAt(end + 1) === "=" ||
                 next === "i" && keywordOpAt(this, end)))
          }
          start += match[0].length;

          // Skip semicolon, if any.
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          if (this.input[start] === ";")
            { start++; }
        }
      };

      // Scan for `in` or `instanceof` at the given position, knowing that
      // there's an `i` there.
      function keywordOpAt(parser, pos) {
        var end = pos + 1, stop = Math.min(parser.input.length, pos + 11);
        while (end < stop) {
          var ch = parser.fullCharCodeAt(end);
          if (!isIdentifierChar(ch, true)) { break }
          end += ch <= 0xffff ? 1 : 2;
        }
        return end === pos + 2 && parser.input.slice(pos, end) === "in" ||
          end === pos + 10 && parser.input.slice(pos, end) === "instanceof"
      }

      // Predicate that tests whether the next token is of the given
      // type, and if yes, consumes it as a side effect.

      pp$9.eat = function(type) {
        if (this.type === type) {
          this.next();
          return true
        } else {
          return false
        }
      };

      // Tests whether parsed token is a contextual keyword.

      pp$9.isContextual = function(name) {
        return this.type === types$1.name && this.value === name && !this.containsEsc
      };

      // Consumes contextual keyword if possible.

      pp$9.eatContextual = function(name) {
        if (!this.isContextual(name)) { return false }
        this.next();
        return true
      };

      pp$9.catchStackOverflow = function(f) {
        try {
          return f()
        } catch (e) {
          if (e instanceof Error && (/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message) || /\btoo much recursion\b/i.test(e.message)))
            { this.raise(this.start, "Not enough stack space to parse input"); }
          else
            { throw e }
        }
      };

      // Asserts that following token is given contextual keyword.

      pp$9.expectContextual = function(name) {
        if (!this.eatContextual(name)) { this.unexpected(); }
      };

      // Test whether a semicolon can be inserted at the current position.

      pp$9.canInsertSemicolon = function() {
        return this.type === types$1.eof ||
          this.type === types$1.braceR ||
          lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
      };

      pp$9.insertSemicolon = function() {
        if (this.canInsertSemicolon()) {
          if (this.options.onInsertedSemicolon)
            { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
          return true
        }
      };

      // Consume a semicolon, or, failing that, see if we are allowed to
      // pretend that there is a semicolon at this position.

      pp$9.semicolon = function() {
        if (!this.eat(types$1.semi) && !this.insertSemicolon()) { this.unexpected(); }
      };

      pp$9.afterTrailingComma = function(tokType, notNext) {
        if (this.type === tokType) {
          if (this.options.onTrailingComma)
            { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
          if (!notNext)
            { this.next(); }
          return true
        }
      };

      // Expect a token of a given type. If found, consume it, otherwise,
      // raise an unexpected token error.

      pp$9.expect = function(type) {
        this.eat(type) || this.unexpected();
      };

      // Raise an unexpected token error.

      pp$9.unexpected = function(pos) {
        this.raise(pos != null ? pos : this.start, "Unexpected token");
      };

      var DestructuringErrors = function DestructuringErrors() {
        this.shorthandAssign =
        this.trailingComma =
        this.parenthesizedAssign =
        this.parenthesizedBind =
        this.doubleProto =
          -1;
      };

      pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
        if (!refDestructuringErrors) { return }
        if (refDestructuringErrors.trailingComma > -1)
          { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
        var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
        if (parens > -1) { this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern"); }
      };

      pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
        if (!refDestructuringErrors) { return false }
        var shorthandAssign = refDestructuringErrors.shorthandAssign;
        var doubleProto = refDestructuringErrors.doubleProto;
        if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
        if (shorthandAssign >= 0)
          { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
        if (doubleProto >= 0)
          { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
      };

      pp$9.checkYieldAwaitInDefaultParams = function() {
        if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
          { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
        if (this.awaitPos)
          { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
      };

      pp$9.isSimpleAssignTarget = function(expr) {
        if (expr.type === "ParenthesizedExpression")
          { return this.isSimpleAssignTarget(expr.expression) }
        return expr.type === "Identifier" || expr.type === "MemberExpression"
      };

      var pp$8 = Parser.prototype;

      // ### Statement parsing

      // Parse a program. Initializes the parser, reads any number of
      // statements, and wraps them in a Program node.  Optionally takes a
      // `program` argument.  If present, the statements will be appended
      // to its body instead of creating a new node.

      pp$8.parseTopLevel = function(node) {
        var exports$1 = Object.create(null);
        if (!node.body) { node.body = []; }
        while (this.type !== types$1.eof) {
          var stmt = this.parseStatement(null, true, exports$1);
          node.body.push(stmt);
        }
        if (this.inModule)
          { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
            {
              var name = list[i];

              this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
            } }
        this.adaptDirectivePrologue(node.body);
        this.next();
        node.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
        return this.finishNode(node, "Program")
      };

      var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

      pp$8.isLet = function(context) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.fullCharCodeAt(next);
        // For ambiguous cases, determine if a LexicalDeclaration (or only a
        // Statement) is allowed here. If context is not empty then only a Statement
        // is allowed. However, `let [` is an explicit negative lookahead for
        // ExpressionStatement, so special-case it first.
        if (nextCh === 91 || nextCh === 92) { return true } // '[', '\'
        if (context) { return false }

        if (nextCh === 123) { return true } // '{'
        if (isIdentifierStart(nextCh)) {
          var start = next;
          do { next += nextCh <= 0xffff ? 1 : 2; }
          while (isIdentifierChar(nextCh = this.fullCharCodeAt(next)))
          if (nextCh === 92) { return true }
          var ident = this.input.slice(start, next);
          if (!keywordRelationalOperator.test(ident)) { return true }
        }
        return false
      };

      // check 'async [no LineTerminator here] function'
      // - 'async /*foo*/ function' is OK.
      // - 'async /*\n*/ function' is invalid.
      pp$8.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
          { return false }

        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, after;
        return !lineBreak.test(this.input.slice(this.pos, next)) &&
          this.input.slice(next, next + 8) === "function" &&
          (next + 8 === this.input.length ||
           !(isIdentifierChar(after = this.fullCharCodeAt(next + 8)) || after === 92 /* '\' */))
      };

      pp$8.isUsingKeyword = function(isAwaitUsing, isFor) {
        if (this.options.ecmaVersion < 17 || !this.isContextual(isAwaitUsing ? "await" : "using"))
          { return false }

        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length;

        if (lineBreak.test(this.input.slice(this.pos, next))) { return false }

        if (isAwaitUsing) {
          var usingEndPos = next + 5 /* using */, after;
          if (this.input.slice(next, usingEndPos) !== "using" ||
            usingEndPos === this.input.length ||
            isIdentifierChar(after = this.fullCharCodeAt(usingEndPos)) ||
            after === 92 /* '\' */
          ) { return false }

          skipWhiteSpace.lastIndex = usingEndPos;
          var skipAfterUsing = skipWhiteSpace.exec(this.input);
          next = usingEndPos + skipAfterUsing[0].length;
          if (skipAfterUsing && lineBreak.test(this.input.slice(usingEndPos, next))) { return false }
        }

        var ch = this.fullCharCodeAt(next);
        if (!isIdentifierStart(ch) && ch !== 92 /* '\' */) { return false }
        var idStart = next;
        do { next += ch <= 0xffff ? 1 : 2; }
        while (isIdentifierChar(ch = this.fullCharCodeAt(next)))
        if (ch === 92) { return true }
        var id = this.input.slice(idStart, next);
        if (keywordRelationalOperator.test(id)) { return false }
        if (isFor && !isAwaitUsing && id === "of") {
          // Look ahead for using declaration with initializer, i.e., `for (using of = ...)`
          skipWhiteSpace.lastIndex = next;
          var skipAfterOf = skipWhiteSpace.exec(this.input);
          next = next + skipAfterOf[0].length;
          if (this.input.charCodeAt(next) !== 61 /* '=' */ ||
            // Check for ==, === and => operators
            (ch = this.input.charCodeAt(next + 1)) === 61 /* '=' */ || ch === 62 /* '>' */) {
            return false
          }
        }
        return true
      };

      pp$8.isAwaitUsing = function(isFor) {
        return this.isUsingKeyword(true, isFor)
      };

      pp$8.isUsing = function(isFor) {
        return this.isUsingKeyword(false, isFor)
      };

      // Parse a single statement.
      //
      // If expecting a statement and finding a slash operator, parse a
      // regular expression literal. This is to handle cases like
      // `if (foo) /blah/.exec(foo)`, where looking at the previous token
      // does not help.

      pp$8.parseStatement = function(context, topLevel, exports$1) {
        var starttype = this.type, node = this.startNode(), kind;

        if (this.isLet(context)) {
          starttype = types$1._var;
          kind = "let";
        }

        // Most types of statements are recognized by the keyword they
        // start with. Many are trivial to parse, some require a bit of
        // complexity.

        switch (starttype) {
        case types$1._break: case types$1._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
        case types$1._debugger: return this.parseDebuggerStatement(node)
        case types$1._do: return this.parseDoStatement(node)
        case types$1._for: return this.parseForStatement(node)
        case types$1._function:
          // Function as sole body of either an if statement or a labeled statement
          // works, but not when it is part of a labeled statement that is the sole
          // body of an if statement.
          if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
          return this.parseFunctionStatement(node, false, !context)
        case types$1._class:
          if (context) { this.unexpected(); }
          return this.parseClass(node, true)
        case types$1._if: return this.parseIfStatement(node)
        case types$1._return: return this.parseReturnStatement(node)
        case types$1._switch: return this.parseSwitchStatement(node)
        case types$1._throw: return this.parseThrowStatement(node)
        case types$1._try: return this.parseTryStatement(node)
        case types$1._const: case types$1._var:
          kind = kind || this.value;
          if (context && kind !== "var") { this.unexpected(); }
          return this.parseVarStatement(node, kind)
        case types$1._while: return this.parseWhileStatement(node)
        case types$1._with: return this.parseWithStatement(node)
        case types$1.braceL: return this.parseBlock(true, node)
        case types$1.semi: return this.parseEmptyStatement(node)
        case types$1._export:
        case types$1._import:
          if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
            skipWhiteSpace.lastIndex = this.pos;
            var skip = skipWhiteSpace.exec(this.input);
            var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
            if (nextCh === 40 || nextCh === 46) // '(' or '.'
              { return this.parseExpressionStatement(node, this.parseExpression()) }
          }

          if (!this.options.allowImportExportEverywhere) {
            if (!topLevel)
              { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
            if (!this.inModule)
              { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
          }
          return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports$1)

          // If the statement does not start with a statement keyword or a
          // brace, it's an ExpressionStatement or LabeledStatement. We
          // simply start parsing an expression, and afterwards, if the
          // next token is a colon and the expression was a simple
          // Identifier node, we switch to interpreting it as a label.
        default:
          if (this.isAsyncFunction()) {
            if (context) { this.unexpected(); }
            this.next();
            return this.parseFunctionStatement(node, true, !context)
          }

          var usingKind = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
          if (usingKind) {
            if (!this.allowUsing) {
              this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement");
            }
            if (context) {
              // Cases like `for (;;) using x = ...;`, `if (true) await using x = ...;`, etc. are not allowed.
              this.raise(this.start, "Using declaration is not allowed in single-statement positions");
            }
            if (usingKind === "await using") {
              if (!this.canAwait) {
                this.raise(this.start, "Await using cannot appear outside of async function");
              }
              this.next();
            }
            this.next();
            this.parseVar(node, false, usingKind);
            this.semicolon();
            return this.finishNode(node, "VariableDeclaration")
          }

          var maybeName = this.value, expr = this.parseExpression();
          if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon))
            { return this.parseLabeledStatement(node, maybeName, expr, context) }
          else { return this.parseExpressionStatement(node, expr) }
        }
      };

      pp$8.parseBreakContinueStatement = function(node, keyword) {
        var isBreak = keyword === "break";
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) { node.label = null; }
        else if (this.type !== types$1.name) { this.unexpected(); }
        else {
          node.label = this.parseIdent();
          this.semicolon();
        }

        // Verify that there is an actual destination to break or
        // continue to.
        var i = 0;
        for (; i < this.labels.length; ++i) {
          var lab = this.labels[i];
          if (node.label == null || lab.name === node.label.name) {
            if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
            if (node.label && isBreak) { break }
          }
        }
        if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
        return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
      };

      pp$8.parseDebuggerStatement = function(node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, "DebuggerStatement")
      };

      pp$8.parseDoStatement = function(node) {
        this.next();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("do");
        this.labels.pop();
        this.expect(types$1._while);
        node.test = this.parseParenExpression();
        if (this.options.ecmaVersion >= 6)
          { this.eat(types$1.semi); }
        else
          { this.semicolon(); }
        return this.finishNode(node, "DoWhileStatement")
      };

      // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
      // loop is non-trivial. Basically, we have to parse the init `var`
      // statement or expression, disallowing the `in` operator (see
      // the second parameter to `parseExpression`), and then check
      // whether the next token is `in` or `of`. When there is no init
      // part (semicolon immediately after the opening parenthesis), it
      // is a regular `for` loop.

      pp$8.parseForStatement = function(node) {
        this.next();
        var awaitAt = (this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await")) ? this.lastTokStart : -1;
        this.labels.push(loopLabel);
        this.enterScope(0);
        this.expect(types$1.parenL);
        if (this.type === types$1.semi) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
          return this.parseFor(node, null)
        }
        var isLet = this.isLet();
        if (this.type === types$1._var || this.type === types$1._const || isLet) {
          var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
          this.next();
          this.parseVar(init$1, true, kind);
          this.finishNode(init$1, "VariableDeclaration");
          return this.parseForAfterInit(node, init$1, awaitAt)
        }
        var startsWithLet = this.isContextual("let"), isForOf = false;

        var usingKind = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
        if (usingKind) {
          var init$2 = this.startNode();
          this.next();
          if (usingKind === "await using") {
            if (!this.canAwait) {
              this.raise(this.start, "Await using cannot appear outside of async function");
            }
            this.next();
          }
          this.parseVar(init$2, true, usingKind);
          this.finishNode(init$2, "VariableDeclaration");
          return this.parseForAfterInit(node, init$2, awaitAt)
        }
        var containsEsc = this.containsEsc;
        var refDestructuringErrors = new DestructuringErrors;
        var initPos = this.start;
        var init = awaitAt > -1
          ? this.parseExprSubscripts(refDestructuringErrors, "await")
          : this.parseExpression(true, refDestructuringErrors);
        if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
          if (awaitAt > -1) { // implies `ecmaVersion >= 9` (see declaration of awaitAt)
            if (this.type === types$1._in) { this.unexpected(awaitAt); }
            node.await = true;
          } else if (isForOf && this.options.ecmaVersion >= 8) {
            if (init.start === initPos && !containsEsc && init.type === "Identifier" && init.name === "async") { this.unexpected(); }
            else if (this.options.ecmaVersion >= 9) { node.await = false; }
          }
          if (startsWithLet && isForOf) { this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'."); }
          this.toAssignable(init, false, refDestructuringErrors);
          this.checkLValPattern(init);
          return this.parseForIn(node, init)
        } else {
          this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (awaitAt > -1) { this.unexpected(awaitAt); }
        return this.parseFor(node, init)
      };

      // Helper method to parse for loop after variable initialization
      pp$8.parseForAfterInit = function(node, init, awaitAt) {
        if ((this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init.declarations.length === 1) {
          if (this.type === types$1._in) {
            if ((init.kind === "using" || init.kind === "await using") && !init.declarations[0].init) {
              this.raise(this.start, "Using declaration is not allowed in for-in loops");
            }
            if (this.options.ecmaVersion >= 9 && awaitAt > -1) { this.unexpected(awaitAt); }
          } else if (this.options.ecmaVersion >= 9) { node.await = awaitAt > -1; }
          return this.parseForIn(node, init)
        }
        if (awaitAt > -1) { this.unexpected(awaitAt); }
        return this.parseFor(node, init)
      };

      pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
        this.next();
        return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
      };

      pp$8.parseIfStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        // allow function declarations in branches, but only in non-strict mode
        node.consequent = this.parseStatement("if");
        node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
        return this.finishNode(node, "IfStatement")
      };

      pp$8.parseReturnStatement = function(node) {
        if (!this.allowReturn)
          { this.raise(this.start, "'return' outside of function"); }
        this.next();

        // In `return` (and `break`/`continue`), the keywords with
        // optional arguments, we eagerly look for a semicolon or the
        // possibility to insert one.

        if (this.eat(types$1.semi) || this.insertSemicolon()) { node.argument = null; }
        else { node.argument = this.parseExpression(); this.semicolon(); }
        return this.finishNode(node, "ReturnStatement")
      };

      pp$8.parseSwitchStatement = function(node) {
        this.next();
        node.discriminant = this.parseParenExpression();
        node.cases = [];
        this.expect(types$1.braceL);
        this.labels.push(switchLabel);
        this.enterScope(SCOPE_SWITCH);

        // Statements under must be grouped (by label) in SwitchCase
        // nodes. `cur` is used to keep the node that we are currently
        // adding statements to.

        var cur;
        for (var sawDefault = false; this.type !== types$1.braceR;) {
          if (this.type === types$1._case || this.type === types$1._default) {
            var isCase = this.type === types$1._case;
            if (cur) { this.finishNode(cur, "SwitchCase"); }
            node.cases.push(cur = this.startNode());
            cur.consequent = [];
            this.next();
            if (isCase) {
              cur.test = this.parseExpression();
            } else {
              if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
              sawDefault = true;
              cur.test = null;
            }
            this.expect(types$1.colon);
          } else {
            if (!cur) { this.unexpected(); }
            cur.consequent.push(this.parseStatement(null));
          }
        }
        this.exitScope();
        if (cur) { this.finishNode(cur, "SwitchCase"); }
        this.next(); // Closing brace
        this.labels.pop();
        return this.finishNode(node, "SwitchStatement")
      };

      pp$8.parseThrowStatement = function(node) {
        this.next();
        if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
          { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ThrowStatement")
      };

      // Reused empty array added for node fields that are always empty.

      var empty$1 = [];

      pp$8.parseCatchClauseParam = function() {
        var param = this.parseBindingAtom();
        var simple = param.type === "Identifier";
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(types$1.parenR);

        return param
      };

      pp$8.parseTryStatement = function(node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.type === types$1._catch) {
          var clause = this.startNode();
          this.next();
          if (this.eat(types$1.parenL)) {
            clause.param = this.parseCatchClauseParam();
          } else {
            if (this.options.ecmaVersion < 10) { this.unexpected(); }
            clause.param = null;
            this.enterScope(0);
          }
          clause.body = this.parseBlock(false);
          this.exitScope();
          node.handler = this.finishNode(clause, "CatchClause");
        }
        node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer)
          { this.raise(node.start, "Missing catch or finally clause"); }
        return this.finishNode(node, "TryStatement")
      };

      pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
        this.next();
        this.parseVar(node, false, kind, allowMissingInitializer);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration")
      };

      pp$8.parseWhileStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("while");
        this.labels.pop();
        return this.finishNode(node, "WhileStatement")
      };

      pp$8.parseWithStatement = function(node) {
        if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
        this.next();
        node.object = this.parseParenExpression();
        node.body = this.parseStatement("with");
        return this.finishNode(node, "WithStatement")
      };

      pp$8.parseEmptyStatement = function(node) {
        this.next();
        return this.finishNode(node, "EmptyStatement")
      };

      pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
        for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
          {
          var label = list[i$1];

          if (label.name === maybeName)
            { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
        } }
        var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
        for (var i = this.labels.length - 1; i >= 0; i--) {
          var label$1 = this.labels[i];
          if (label$1.statementStart === node.start) {
            // Update information about previous labels on this node
            label$1.statementStart = this.start;
            label$1.kind = kind;
          } else { break }
        }
        this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
        node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
        this.labels.pop();
        node.label = expr;
        return this.finishNode(node, "LabeledStatement")
      };

      pp$8.parseExpressionStatement = function(node, expr) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement")
      };

      // Parse a semicolon-enclosed block of statements, handling `"use
      // strict"` declarations when `allowStrict` is true (used for
      // function bodies).

      pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
        if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
        if ( node === void 0 ) node = this.startNode();

        node.body = [];
        this.expect(types$1.braceL);
        if (createNewLexicalScope) { this.enterScope(0); }
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        if (exitStrict) { this.strict = false; }
        this.next();
        if (createNewLexicalScope) { this.exitScope(); }
        return this.finishNode(node, "BlockStatement")
      };

      // Parse a regular `for` loop. The disambiguation code in
      // `parseStatement` will already have parsed the init statement or
      // expression.

      pp$8.parseFor = function(node, init) {
        node.init = init;
        this.expect(types$1.semi);
        node.test = this.type === types$1.semi ? null : this.parseExpression();
        this.expect(types$1.semi);
        node.update = this.type === types$1.parenR ? null : this.parseExpression();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, "ForStatement")
      };

      // Parse a `for`/`in` and `for`/`of` loop, which are almost
      // same from parser's perspective.

      pp$8.parseForIn = function(node, init) {
        var isForIn = this.type === types$1._in;
        this.next();

        if (
          init.type === "VariableDeclaration" &&
          init.declarations[0].init != null &&
          (
            !isForIn ||
            this.options.ecmaVersion < 8 ||
            this.strict ||
            init.kind !== "var" ||
            init.declarations[0].id.type !== "Identifier"
          )
        ) {
          this.raise(
            init.start,
            ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
          );
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
      };

      // Parse a list of variable declarations.

      pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
        node.declarations = [];
        node.kind = kind;
        for (;;) {
          var decl = this.startNode();
          this.parseVarId(decl, kind);
          if (this.eat(types$1.eq)) {
            decl.init = this.parseMaybeAssign(isFor);
          } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
            this.unexpected();
          } else if (!allowMissingInitializer && (kind === "using" || kind === "await using") && this.options.ecmaVersion >= 17 && this.type !== types$1._in && !this.isContextual("of")) {
            this.raise(this.lastTokEnd, ("Missing initializer in " + kind + " declaration"));
          } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
            this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
          } else {
            decl.init = null;
          }
          node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
          if (!this.eat(types$1.comma)) { break }
        }
        return node
      };

      pp$8.parseVarId = function(decl, kind) {
        decl.id = kind === "using" || kind === "await using"
          ? this.parseIdent()
          : this.parseBindingAtom();

        this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
      };

      var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

      // Parse a function declaration or literal (depending on the
      // `statement & FUNC_STATEMENT`).

      // Remove `allowExpressionBody` for 7.0.0, as it is only called with false
      pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
        this.initFunction(node);
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
          if (this.type === types$1.star && (statement & FUNC_HANGING_STATEMENT))
            { this.unexpected(); }
          node.generator = this.eat(types$1.star);
        }
        if (this.options.ecmaVersion >= 8)
          { node.async = !!isAsync; }

        if (statement & FUNC_STATEMENT) {
          node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types$1.name ? null : this.parseIdent();
          if (node.id && !(statement & FUNC_HANGING_STATEMENT))
            // If it is a regular function declaration in sloppy mode, then it is
            // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
            // mode depends on properties of the current scope (see
            // treatFunctionsAsVar).
            { this.checkLValSimple(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
        }

        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(node.async, node.generator));

        if (!(statement & FUNC_STATEMENT))
          { node.id = this.type === types$1.name ? this.parseIdent() : null; }

        this.parseFunctionParams(node);
        this.parseFunctionBody(node, allowExpressionBody, false, forInit);

        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
      };

      pp$8.parseFunctionParams = function(node) {
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
      };

      // Parse a class declaration or literal (depending on the
      // `isStatement` parameter).

      pp$8.parseClass = function(node, isStatement) {
        this.next();

        // ecma-262 14.6 Class Definitions
        // A class definition is always strict mode code.
        var oldStrict = this.strict;
        this.strict = true;

        this.parseClassId(node, isStatement);
        this.parseClassSuper(node);
        var privateNameMap = this.enterClassBody();
        var classBody = this.startNode();
        var hadConstructor = false;
        classBody.body = [];
        this.expect(types$1.braceL);
        while (this.type !== types$1.braceR) {
          var element = this.parseClassElement(node.superClass !== null);
          if (element) {
            classBody.body.push(element);
            if (element.type === "MethodDefinition" && element.kind === "constructor") {
              if (hadConstructor) { this.raiseRecoverable(element.start, "Duplicate constructor in the same class"); }
              hadConstructor = true;
            } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
              this.raiseRecoverable(element.key.start, ("Identifier '#" + (element.key.name) + "' has already been declared"));
            }
          }
        }
        this.strict = oldStrict;
        this.next();
        node.body = this.finishNode(classBody, "ClassBody");
        this.exitClassBody();
        return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
      };

      pp$8.parseClassElement = function(constructorAllowsSuper) {
        if (this.eat(types$1.semi)) { return null }

        var ecmaVersion = this.options.ecmaVersion;
        var node = this.startNode();
        var keyName = "";
        var isGenerator = false;
        var isAsync = false;
        var kind = "method";
        var isStatic = false;

        if (this.eatContextual("static")) {
          // Parse static init block
          if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
            this.parseClassStaticBlock(node);
            return node
          }
          if (this.isClassElementNameStart() || this.type === types$1.star) {
            isStatic = true;
          } else {
            keyName = "static";
          }
        }
        node.static = isStatic;
        if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
          if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
            isAsync = true;
          } else {
            keyName = "async";
          }
        }
        if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
          isGenerator = true;
        }
        if (!keyName && !isAsync && !isGenerator) {
          var lastValue = this.value;
          if (this.eatContextual("get") || this.eatContextual("set")) {
            if (this.isClassElementNameStart()) {
              kind = lastValue;
            } else {
              keyName = lastValue;
            }
          }
        }

        // Parse element name
        if (keyName) {
          // 'async', 'get', 'set', or 'static' were not a keyword contextually.
          // The last token is any of those. Make it the element name.
          node.computed = false;
          node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
          node.key.name = keyName;
          this.finishNode(node.key, "Identifier");
        } else {
          this.parseClassElementName(node);
        }

        // Parse element value
        if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
          var isConstructor = !node.static && checkKeyName(node, "constructor");
          var allowsDirectSuper = isConstructor && constructorAllowsSuper;
          // Couldn't move this check into the 'parseClassMethod' method for backward compatibility.
          if (isConstructor && kind !== "method") { this.raise(node.key.start, "Constructor can't have get/set modifier"); }
          node.kind = isConstructor ? "constructor" : kind;
          this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
        } else {
          this.parseClassField(node);
        }

        return node
      };

      pp$8.isClassElementNameStart = function() {
        return (
          this.type === types$1.name ||
          this.type === types$1.privateId ||
          this.type === types$1.num ||
          this.type === types$1.string ||
          this.type === types$1.bracketL ||
          this.type.keyword
        )
      };

      pp$8.parseClassElementName = function(element) {
        if (this.type === types$1.privateId) {
          if (this.value === "constructor") {
            this.raise(this.start, "Classes can't have an element named '#constructor'");
          }
          element.computed = false;
          element.key = this.parsePrivateIdent();
        } else {
          this.parsePropertyName(element);
        }
      };

      pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
        // Check key and flags
        var key = method.key;
        if (method.kind === "constructor") {
          if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
          if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
        } else if (method.static && checkKeyName(method, "prototype")) {
          this.raise(key.start, "Classes may not have a static property named prototype");
        }

        // Parse value
        var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);

        // Check value
        if (method.kind === "get" && value.params.length !== 0)
          { this.raiseRecoverable(value.start, "getter should have no params"); }
        if (method.kind === "set" && value.params.length !== 1)
          { this.raiseRecoverable(value.start, "setter should have exactly one param"); }
        if (method.kind === "set" && value.params[0].type === "RestElement")
          { this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params"); }

        return this.finishNode(method, "MethodDefinition")
      };

      pp$8.parseClassField = function(field) {
        if (checkKeyName(field, "constructor")) {
          this.raise(field.key.start, "Classes can't have a field named 'constructor'");
        } else if (field.static && checkKeyName(field, "prototype")) {
          this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
        }

        if (this.eat(types$1.eq)) {
          // To raise SyntaxError if 'arguments' exists in the initializer.
          this.enterScope(SCOPE_CLASS_FIELD_INIT | SCOPE_SUPER);
          field.value = this.parseMaybeAssign();
          this.exitScope();
        } else {
          field.value = null;
        }
        this.semicolon();

        return this.finishNode(field, "PropertyDefinition")
      };

      pp$8.parseClassStaticBlock = function(node) {
        node.body = [];

        var oldLabels = this.labels;
        this.labels = [];
        this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        this.next();
        this.exitScope();
        this.labels = oldLabels;

        return this.finishNode(node, "StaticBlock")
      };

      pp$8.parseClassId = function(node, isStatement) {
        if (this.type === types$1.name) {
          node.id = this.parseIdent();
          if (isStatement)
            { this.checkLValSimple(node.id, BIND_LEXICAL, false); }
        } else {
          if (isStatement === true)
            { this.unexpected(); }
          node.id = null;
        }
      };

      pp$8.parseClassSuper = function(node) {
        node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
      };

      pp$8.enterClassBody = function() {
        var element = {declared: Object.create(null), used: []};
        this.privateNameStack.push(element);
        return element.declared
      };

      pp$8.exitClassBody = function() {
        var ref = this.privateNameStack.pop();
        var declared = ref.declared;
        var used = ref.used;
        if (!this.options.checkPrivateFields) { return }
        var len = this.privateNameStack.length;
        var parent = len === 0 ? null : this.privateNameStack[len - 1];
        for (var i = 0; i < used.length; ++i) {
          var id = used[i];
          if (!hasOwn(declared, id.name)) {
            if (parent) {
              parent.used.push(id);
            } else {
              this.raiseRecoverable(id.start, ("Private field '#" + (id.name) + "' must be declared in an enclosing class"));
            }
          }
        }
      };

      function isPrivateNameConflicted(privateNameMap, element) {
        var name = element.key.name;
        var curr = privateNameMap[name];

        var next = "true";
        if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
          next = (element.static ? "s" : "i") + element.kind;
        }

        // `class { get #a(){}; static set #a(_){} }` is also conflict.
        if (
          curr === "iget" && next === "iset" ||
          curr === "iset" && next === "iget" ||
          curr === "sget" && next === "sset" ||
          curr === "sset" && next === "sget"
        ) {
          privateNameMap[name] = "true";
          return false
        } else if (!curr) {
          privateNameMap[name] = next;
          return false
        } else {
          return true
        }
      }

      function checkKeyName(node, name) {
        var computed = node.computed;
        var key = node.key;
        return !computed && (
          key.type === "Identifier" && key.name === name ||
          key.type === "Literal" && key.value === name
        )
      }

      // Parses module export declaration.

      pp$8.parseExportAllDeclaration = function(node, exports$1) {
        if (this.options.ecmaVersion >= 11) {
          if (this.eatContextual("as")) {
            node.exported = this.parseModuleExportName();
            this.checkExport(exports$1, node.exported, this.lastTokStart);
          } else {
            node.exported = null;
          }
        }
        this.expectContextual("from");
        if (this.type !== types$1.string) { this.unexpected(); }
        node.source = this.parseExprAtom();
        if (this.options.ecmaVersion >= 16)
          { node.attributes = this.parseWithClause(); }
        this.semicolon();
        return this.finishNode(node, "ExportAllDeclaration")
      };

      pp$8.parseExport = function(node, exports$1) {
        this.next();
        // export * from '...'
        if (this.eat(types$1.star)) {
          return this.parseExportAllDeclaration(node, exports$1)
        }
        if (this.eat(types$1._default)) { // export default ...
          this.checkExport(exports$1, "default", this.lastTokStart);
          node.declaration = this.parseExportDefaultDeclaration();
          return this.finishNode(node, "ExportDefaultDeclaration")
        }
        // export var|const|let|function|class ...
        if (this.shouldParseExportStatement()) {
          node.declaration = this.parseExportDeclaration(node);
          if (node.declaration.type === "VariableDeclaration")
            { this.checkVariableExport(exports$1, node.declaration.declarations); }
          else
            { this.checkExport(exports$1, node.declaration.id, node.declaration.id.start); }
          node.specifiers = [];
          node.source = null;
          if (this.options.ecmaVersion >= 16)
            { node.attributes = []; }
        } else { // export { x, y as z } [from '...']
          node.declaration = null;
          node.specifiers = this.parseExportSpecifiers(exports$1);
          if (this.eatContextual("from")) {
            if (this.type !== types$1.string) { this.unexpected(); }
            node.source = this.parseExprAtom();
            if (this.options.ecmaVersion >= 16)
              { node.attributes = this.parseWithClause(); }
          } else {
            for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
              // check for keywords used as local names
              var spec = list[i];

              this.checkUnreserved(spec.local);
              // check if export is defined
              this.checkLocalExport(spec.local);

              if (spec.local.type === "Literal") {
                this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
              }
            }

            node.source = null;
            if (this.options.ecmaVersion >= 16)
              { node.attributes = []; }
          }
          this.semicolon();
        }
        return this.finishNode(node, "ExportNamedDeclaration")
      };

      pp$8.parseExportDeclaration = function(node) {
        return this.parseStatement(null)
      };

      pp$8.parseExportDefaultDeclaration = function() {
        var isAsync;
        if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
          var fNode = this.startNode();
          this.next();
          if (isAsync) { this.next(); }
          return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync)
        } else if (this.type === types$1._class) {
          var cNode = this.startNode();
          return this.parseClass(cNode, "nullableID")
        } else {
          var declaration = this.parseMaybeAssign();
          this.semicolon();
          return declaration
        }
      };

      pp$8.checkExport = function(exports$1, name, pos) {
        if (!exports$1) { return }
        if (typeof name !== "string")
          { name = name.type === "Identifier" ? name.name : name.value; }
        if (hasOwn(exports$1, name))
          { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
        exports$1[name] = true;
      };

      pp$8.checkPatternExport = function(exports$1, pat) {
        var type = pat.type;
        if (type === "Identifier")
          { this.checkExport(exports$1, pat, pat.start); }
        else if (type === "ObjectPattern")
          { for (var i = 0, list = pat.properties; i < list.length; i += 1)
            {
              var prop = list[i];

              this.checkPatternExport(exports$1, prop);
            } }
        else if (type === "ArrayPattern")
          { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
            var elt = list$1[i$1];

              if (elt) { this.checkPatternExport(exports$1, elt); }
          } }
        else if (type === "Property")
          { this.checkPatternExport(exports$1, pat.value); }
        else if (type === "AssignmentPattern")
          { this.checkPatternExport(exports$1, pat.left); }
        else if (type === "RestElement")
          { this.checkPatternExport(exports$1, pat.argument); }
      };

      pp$8.checkVariableExport = function(exports$1, decls) {
        if (!exports$1) { return }
        for (var i = 0, list = decls; i < list.length; i += 1)
          {
          var decl = list[i];

          this.checkPatternExport(exports$1, decl.id);
        }
      };

      pp$8.shouldParseExportStatement = function() {
        return this.type.keyword === "var" ||
          this.type.keyword === "const" ||
          this.type.keyword === "class" ||
          this.type.keyword === "function" ||
          this.isLet() ||
          this.isAsyncFunction()
      };

      // Parses a comma-separated list of module exports.

      pp$8.parseExportSpecifier = function(exports$1) {
        var node = this.startNode();
        node.local = this.parseModuleExportName();

        node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
        this.checkExport(
          exports$1,
          node.exported,
          node.exported.start
        );

        return this.finishNode(node, "ExportSpecifier")
      };

      pp$8.parseExportSpecifiers = function(exports$1) {
        var nodes = [], first = true;
        // export { x, y as z } [from '...']
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) { break }
          } else { first = false; }

          nodes.push(this.parseExportSpecifier(exports$1));
        }
        return nodes
      };

      // Parses import declaration.

      pp$8.parseImport = function(node) {
        this.next();

        // import '...'
        if (this.type === types$1.string) {
          node.specifiers = empty$1;
          node.source = this.parseExprAtom();
        } else {
          node.specifiers = this.parseImportSpecifiers();
          this.expectContextual("from");
          node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
        }
        if (this.options.ecmaVersion >= 16)
          { node.attributes = this.parseWithClause(); }
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration")
      };

      // Parses a comma-separated list of module imports.

      pp$8.parseImportSpecifier = function() {
        var node = this.startNode();
        node.imported = this.parseModuleExportName();

        if (this.eatContextual("as")) {
          node.local = this.parseIdent();
        } else {
          this.checkUnreserved(node.imported);
          node.local = node.imported;
        }
        this.checkLValSimple(node.local, BIND_LEXICAL);

        return this.finishNode(node, "ImportSpecifier")
      };

      pp$8.parseImportDefaultSpecifier = function() {
        // import defaultObj, { x, y as z } from '...'
        var node = this.startNode();
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, "ImportDefaultSpecifier")
      };

      pp$8.parseImportNamespaceSpecifier = function() {
        var node = this.startNode();
        this.next();
        this.expectContextual("as");
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, "ImportNamespaceSpecifier")
      };

      pp$8.parseImportSpecifiers = function() {
        var nodes = [], first = true;
        if (this.type === types$1.name) {
          nodes.push(this.parseImportDefaultSpecifier());
          if (!this.eat(types$1.comma)) { return nodes }
        }
        if (this.type === types$1.star) {
          nodes.push(this.parseImportNamespaceSpecifier());
          return nodes
        }
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) { break }
          } else { first = false; }

          nodes.push(this.parseImportSpecifier());
        }
        return nodes
      };

      pp$8.parseWithClause = function() {
        var nodes = [];
        if (!this.eat(types$1._with)) {
          return nodes
        }
        this.expect(types$1.braceL);
        var attributeKeys = {};
        var first = true;
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) { break }
          } else { first = false; }

          var attr = this.parseImportAttribute();
          var keyName = attr.key.type === "Identifier" ? attr.key.name : attr.key.value;
          if (hasOwn(attributeKeys, keyName))
            { this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'"); }
          attributeKeys[keyName] = true;
          nodes.push(attr);
        }
        return nodes
      };

      pp$8.parseImportAttribute = function() {
        var node = this.startNode();
        node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
        this.expect(types$1.colon);
        if (this.type !== types$1.string) {
          this.unexpected();
        }
        node.value = this.parseExprAtom();
        return this.finishNode(node, "ImportAttribute")
      };

      pp$8.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
          var stringLiteral = this.parseLiteral(this.value);
          if (loneSurrogate.test(stringLiteral.value)) {
            this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
          }
          return stringLiteral
        }
        return this.parseIdent(true)
      };

      // Set `ExpressionStatement#directive` property for directive prologues.
      pp$8.adaptDirectivePrologue = function(statements) {
        for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
          statements[i].directive = statements[i].expression.raw.slice(1, -1);
        }
      };
      pp$8.isDirectiveCandidate = function(statement) {
        return (
          this.options.ecmaVersion >= 5 &&
          statement.type === "ExpressionStatement" &&
          statement.expression.type === "Literal" &&
          typeof statement.expression.value === "string" &&
          // Reject parenthesized strings.
          (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
        )
      };

      var pp$7 = Parser.prototype;

      // Convert existing expression atom to assignable pattern
      // if possible.

      pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 6 && node) {
          switch (node.type) {
          case "Identifier":
            if (this.inAsync && node.name === "await")
              { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
            break

          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            break

          case "ObjectExpression":
            node.type = "ObjectPattern";
            if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
            for (var i = 0, list = node.properties; i < list.length; i += 1) {
              var prop = list[i];

            this.toAssignable(prop, isBinding);
              // Early error:
              //   AssignmentRestProperty[Yield, Await] :
              //     `...` DestructuringAssignmentTarget[Yield, Await]
              //
              //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
              if (
                prop.type === "RestElement" &&
                (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
              ) {
                this.raise(prop.argument.start, "Unexpected token");
              }
            }
            break

          case "Property":
            // AssignmentProperty has type === "Property"
            if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
            this.toAssignable(node.value, isBinding);
            break

          case "ArrayExpression":
            node.type = "ArrayPattern";
            if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
            this.toAssignableList(node.elements, isBinding);
            break

          case "SpreadElement":
            node.type = "RestElement";
            this.toAssignable(node.argument, isBinding);
            if (node.argument.type === "AssignmentPattern")
              { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
            break

          case "AssignmentExpression":
            if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
            node.type = "AssignmentPattern";
            delete node.operator;
            this.toAssignable(node.left, isBinding);
            break

          case "ParenthesizedExpression":
            this.toAssignable(node.expression, isBinding, refDestructuringErrors);
            break

          case "ChainExpression":
            this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
            break

          case "MemberExpression":
            if (!isBinding) { break }

          default:
            this.raise(node.start, "Assigning to rvalue");
          }
        } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        return node
      };

      // Convert list of expression atoms to binding list.

      pp$7.toAssignableList = function(exprList, isBinding) {
        var end = exprList.length;
        for (var i = 0; i < end; i++) {
          var elt = exprList[i];
          if (elt) { this.toAssignable(elt, isBinding); }
        }
        if (end) {
          var last = exprList[end - 1];
          if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
            { this.unexpected(last.argument.start); }
        }
        return exprList
      };

      // Parses spread element.

      pp$7.parseSpread = function(refDestructuringErrors) {
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        return this.finishNode(node, "SpreadElement")
      };

      pp$7.parseRestBinding = function() {
        var node = this.startNode();
        this.next();

        // RestElement inside of a function parameter must be an identifier
        if (this.options.ecmaVersion === 6 && this.type !== types$1.name)
          { this.unexpected(); }

        node.argument = this.parseBindingAtom();

        return this.finishNode(node, "RestElement")
      };

      // Parses lvalue (assignable) atom.

      pp$7.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) {
          switch (this.type) {
          case types$1.bracketL:
            var node = this.startNode();
            this.next();
            node.elements = this.parseBindingList(types$1.bracketR, true, true);
            return this.finishNode(node, "ArrayPattern")

          case types$1.braceL:
            return this.parseObj(true)
          }
        }
        return this.parseIdent()
      };

      pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (first) { first = false; }
          else { this.expect(types$1.comma); }
          if (allowEmpty && this.type === types$1.comma) {
            elts.push(null);
          } else if (allowTrailingComma && this.afterTrailingComma(close)) {
            break
          } else if (this.type === types$1.ellipsis) {
            var rest = this.parseRestBinding();
            this.parseBindingListItem(rest);
            elts.push(rest);
            if (this.type === types$1.comma) { this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"); }
            this.expect(close);
            break
          } else {
            elts.push(this.parseAssignableListItem(allowModifiers));
          }
        }
        return elts
      };

      pp$7.parseAssignableListItem = function(allowModifiers) {
        var elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        return elem
      };

      pp$7.parseBindingListItem = function(param) {
        return param
      };

      // Parses assignment pattern around given atom if possible.

      pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
        left = left || this.parseBindingAtom();
        if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) { return left }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentPattern")
      };

      // The following three functions all verify that a node is an lvalue —
      // something that can be bound, or assigned to. In order to do so, they perform
      // a variety of checks:
      //
      // - Check that none of the bound/assigned-to identifiers are reserved words.
      // - Record name declarations for bindings in the appropriate scope.
      // - Check duplicate argument names, if checkClashes is set.
      //
      // If a complex binding pattern is encountered (e.g., object and array
      // destructuring), the entire pattern is recursively checked.
      //
      // There are three versions of checkLVal*() appropriate for different
      // circumstances:
      //
      // - checkLValSimple() shall be used if the syntactic construct supports
      //   nothing other than identifiers and member expressions. Parenthesized
      //   expressions are also correctly handled. This is generally appropriate for
      //   constructs for which the spec says
      //
      //   > It is a Syntax Error if AssignmentTargetType of [the production] is not
      //   > simple.
      //
      //   It is also appropriate for checking if an identifier is valid and not
      //   defined elsewhere, like import declarations or function/class identifiers.
      //
      //   Examples where this is used include:
      //     a += …;
      //     import a from '…';
      //   where a is the node to be checked.
      //
      // - checkLValPattern() shall be used if the syntactic construct supports
      //   anything checkLValSimple() supports, as well as object and array
      //   destructuring patterns. This is generally appropriate for constructs for
      //   which the spec says
      //
      //   > It is a Syntax Error if [the production] is neither an ObjectLiteral nor
      //   > an ArrayLiteral and AssignmentTargetType of [the production] is not
      //   > simple.
      //
      //   Examples where this is used include:
      //     (a = …);
      //     const a = …;
      //     try { … } catch (a) { … }
      //   where a is the node to be checked.
      //
      // - checkLValInnerPattern() shall be used if the syntactic construct supports
      //   anything checkLValPattern() supports, as well as default assignment
      //   patterns, rest elements, and other constructs that may appear within an
      //   object or array destructuring pattern.
      //
      //   As a special case, function parameters also use checkLValInnerPattern(),
      //   as they also support defaults and rest constructs.
      //
      // These functions deliberately support both assignment and binding constructs,
      // as the logic for both is exceedingly similar. If the node is the target of
      // an assignment, then bindingType should be set to BIND_NONE. Otherwise, it
      // should be set to the appropriate BIND_* constant, like BIND_VAR or
      // BIND_LEXICAL.
      //
      // If the function is called with a non-BIND_NONE bindingType, then
      // additionally a checkClashes object may be specified to allow checking for
      // duplicate argument names. checkClashes is ignored if the provided construct
      // is an assignment (i.e., bindingType is BIND_NONE).

      pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
        if ( bindingType === void 0 ) bindingType = BIND_NONE;

        var isBind = bindingType !== BIND_NONE;

        switch (expr.type) {
        case "Identifier":
          if (this.strict && this.reservedWordsStrictBind.test(expr.name))
            { this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
          if (isBind) {
            if (bindingType === BIND_LEXICAL && expr.name === "let")
              { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
            if (checkClashes) {
              if (hasOwn(checkClashes, expr.name))
                { this.raiseRecoverable(expr.start, "Argument name clash"); }
              checkClashes[expr.name] = true;
            }
            if (bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
          }
          break

        case "ChainExpression":
          this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
          break

        case "MemberExpression":
          if (isBind) { this.raiseRecoverable(expr.start, "Binding member expression"); }
          break

        case "ParenthesizedExpression":
          if (isBind) { this.raiseRecoverable(expr.start, "Binding parenthesized expression"); }
          return this.checkLValSimple(expr.expression, bindingType, checkClashes)

        default:
          this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
        }
      };

      pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
        if ( bindingType === void 0 ) bindingType = BIND_NONE;

        switch (expr.type) {
        case "ObjectPattern":
          for (var i = 0, list = expr.properties; i < list.length; i += 1) {
            var prop = list[i];

          this.checkLValInnerPattern(prop, bindingType, checkClashes);
          }
          break

        case "ArrayPattern":
          for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
            var elem = list$1[i$1];

          if (elem) { this.checkLValInnerPattern(elem, bindingType, checkClashes); }
          }
          break

        default:
          this.checkLValSimple(expr, bindingType, checkClashes);
        }
      };

      pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
        if ( bindingType === void 0 ) bindingType = BIND_NONE;

        switch (expr.type) {
        case "Property":
          // AssignmentProperty has type === "Property"
          this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
          break

        case "AssignmentPattern":
          this.checkLValPattern(expr.left, bindingType, checkClashes);
          break

        case "RestElement":
          this.checkLValPattern(expr.argument, bindingType, checkClashes);
          break

        default:
          this.checkLValPattern(expr, bindingType, checkClashes);
        }
      };

      // The algorithm used to determine whether a regexp can appear at a
      // given point in the program is loosely based on sweet.js' approach.
      // See https://github.com/mozilla/sweet.js/wiki/design


      var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
        this.token = token;
        this.isExpr = !!isExpr;
        this.preserveSpace = !!preserveSpace;
        this.override = override;
        this.generator = !!generator;
      };

      var types = {
        b_stat: new TokContext("{", false),
        b_expr: new TokContext("{", true),
        b_tmpl: new TokContext("${", false),
        p_stat: new TokContext("(", false),
        p_expr: new TokContext("(", true),
        q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
        f_stat: new TokContext("function", false),
        f_expr: new TokContext("function", true),
        f_expr_gen: new TokContext("function", true, false, null, true),
        f_gen: new TokContext("function", false, false, null, true)
      };

      var pp$6 = Parser.prototype;

      pp$6.initialContext = function() {
        return [types.b_stat]
      };

      pp$6.curContext = function() {
        return this.context[this.context.length - 1]
      };

      pp$6.braceIsBlock = function(prevType) {
        var parent = this.curContext();
        if (parent === types.f_expr || parent === types.f_stat)
          { return true }
        if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr))
          { return !parent.isExpr }

        // The check for `tt.name && exprAllowed` detects whether we are
        // after a `yield` or `of` construct. See the `updateContext` for
        // `tt.name`.
        if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed)
          { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
        if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow)
          { return true }
        if (prevType === types$1.braceL)
          { return parent === types.b_stat }
        if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name)
          { return false }
        return !this.exprAllowed
      };

      pp$6.inGeneratorContext = function() {
        for (var i = this.context.length - 1; i >= 1; i--) {
          var context = this.context[i];
          if (context.token === "function")
            { return context.generator }
        }
        return false
      };

      pp$6.updateContext = function(prevType) {
        var update, type = this.type;
        if (type.keyword && prevType === types$1.dot)
          { this.exprAllowed = false; }
        else if (update = type.updateContext)
          { update.call(this, prevType); }
        else
          { this.exprAllowed = type.beforeExpr; }
      };

      // Used to handle edge cases when token context could not be inferred correctly during tokenization phase

      pp$6.overrideContext = function(tokenCtx) {
        if (this.curContext() !== tokenCtx) {
          this.context[this.context.length - 1] = tokenCtx;
        }
      };

      // Token-specific context update code

      types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = true;
          return
        }
        var out = this.context.pop();
        if (out === types.b_stat && this.curContext().token === "function") {
          out = this.context.pop();
        }
        this.exprAllowed = !out.isExpr;
      };

      types$1.braceL.updateContext = function(prevType) {
        this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
        this.exprAllowed = true;
      };

      types$1.dollarBraceL.updateContext = function() {
        this.context.push(types.b_tmpl);
        this.exprAllowed = true;
      };

      types$1.parenL.updateContext = function(prevType) {
        var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
        this.context.push(statementParens ? types.p_stat : types.p_expr);
        this.exprAllowed = true;
      };

      types$1.incDec.updateContext = function() {
        // tokExprAllowed stays unchanged
      };

      types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
        if (prevType.beforeExpr && prevType !== types$1._else &&
            !(prevType === types$1.semi && this.curContext() !== types.p_stat) &&
            !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
            !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat))
          { this.context.push(types.f_expr); }
        else
          { this.context.push(types.f_stat); }
        this.exprAllowed = false;
      };

      types$1.colon.updateContext = function() {
        if (this.curContext().token === "function") { this.context.pop(); }
        this.exprAllowed = true;
      };

      types$1.backQuote.updateContext = function() {
        if (this.curContext() === types.q_tmpl)
          { this.context.pop(); }
        else
          { this.context.push(types.q_tmpl); }
        this.exprAllowed = false;
      };

      types$1.star.updateContext = function(prevType) {
        if (prevType === types$1._function) {
          var index = this.context.length - 1;
          if (this.context[index] === types.f_expr)
            { this.context[index] = types.f_expr_gen; }
          else
            { this.context[index] = types.f_gen; }
        }
        this.exprAllowed = true;
      };

      types$1.name.updateContext = function(prevType) {
        var allowed = false;
        if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
          if (this.value === "of" && !this.exprAllowed ||
              this.value === "yield" && this.inGeneratorContext())
            { allowed = true; }
        }
        this.exprAllowed = allowed;
      };

      // A recursive descent parser operates by defining functions for all
      // syntactic elements, and recursively calling those, each function
      // advancing the input stream and returning an AST node. Precedence
      // of constructs (for example, the fact that `!x[1]` means `!(x[1])`
      // instead of `(!x)[1]` is handled by the fact that the parser
      // function that parses unary prefix operators is called first, and
      // in turn calls the function that parses `[]` subscripts — that
      // way, it'll receive the node for `x[1]` already parsed, and wraps
      // *that* in the unary operator node.
      //
      // Acorn uses an [operator precedence parser][opp] to handle binary
      // operator precedence, because it is much more compact than using
      // the technique outlined above, which uses different, nesting
      // functions to specify precedence, for all of the ten binary
      // precedence levels that JavaScript defines.
      //
      // [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser


      var pp$5 = Parser.prototype;

      // Check if property name clashes with already added.
      // Object/class getters and setters are not allowed to clash —
      // either with each other or with an init property — and in
      // strict mode, init properties are also not allowed to be repeated.

      pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
          { return }
        if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
          { return }
        var key = prop.key;
        var name;
        switch (key.type) {
        case "Identifier": name = key.name; break
        case "Literal": name = String(key.value); break
        default: return
        }
        var kind = prop.kind;
        if (this.options.ecmaVersion >= 6) {
          if (name === "__proto__" && kind === "init") {
            if (propHash.proto) {
              if (refDestructuringErrors) {
                if (refDestructuringErrors.doubleProto < 0) {
                  refDestructuringErrors.doubleProto = key.start;
                }
              } else {
                this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
              }
            }
            propHash.proto = true;
          }
          return
        }
        name = "$" + name;
        var other = propHash[name];
        if (other) {
          var redefinition;
          if (kind === "init") {
            redefinition = this.strict && other.init || other.get || other.set;
          } else {
            redefinition = other.init || other[kind];
          }
          if (redefinition)
            { this.raiseRecoverable(key.start, "Redefinition of property"); }
        } else {
          other = propHash[name] = {
            init: false,
            get: false,
            set: false
          };
        }
        other[kind] = true;
      };

      // ### Expression parsing

      // These nest, from the most general expression type at the top to
      // 'atomic', nondivisible expression types at the bottom. Most of
      // the functions will simply let the function(s) below them parse,
      // and, *if* the syntactic construct they handle is present, wrap
      // the AST node that the inner parser gave them in another node.

      // Parse a full expression. The optional arguments are used to
      // forbid the `in` operator (in for loops initalization expressions)
      // and provide reference for storing '=' operator inside shorthand
      // property assignment in contexts where both object expression
      // and object pattern might appear (so it's possible to raise
      // delayed syntax error at correct position).

      pp$5.parseExpression = function(forInit, refDestructuringErrors) {
        var this$1$1 = this;

        return this.catchStackOverflow(function () {
          var startPos = this$1$1.start, startLoc = this$1$1.startLoc;
          var expr = this$1$1.parseMaybeAssign(forInit, refDestructuringErrors);
          if (this$1$1.type === types$1.comma) {
            var node = this$1$1.startNodeAt(startPos, startLoc);
            node.expressions = [expr];
            while (this$1$1.eat(types$1.comma)) { node.expressions.push(this$1$1.parseMaybeAssign(forInit, refDestructuringErrors)); }
            return this$1$1.finishNode(node, "SequenceExpression")
          }
          return expr
        })
      };

      // Parse an assignment expression. This includes applications of
      // operators like `+=`.

      pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) { return this.parseYield(forInit) }
          // The tokenizer will assume an expression is allowed after
          // `yield`, but this isn't that kind of yield
          else { this.exprAllowed = false; }
        }

        var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
        if (refDestructuringErrors) {
          oldParenAssign = refDestructuringErrors.parenthesizedAssign;
          oldTrailingComma = refDestructuringErrors.trailingComma;
          oldDoubleProto = refDestructuringErrors.doubleProto;
          refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
        } else {
          refDestructuringErrors = new DestructuringErrors;
          ownDestructuringErrors = true;
        }

        var startPos = this.start, startLoc = this.startLoc;
        if (this.type === types$1.parenL || this.type === types$1.name) {
          this.potentialArrowAt = this.start;
          this.potentialArrowInForAwait = forInit === "await";
        }
        var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
        if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
        if (this.type.isAssign) {
          var node = this.startNodeAt(startPos, startLoc);
          node.operator = this.value;
          if (this.type === types$1.eq)
            { left = this.toAssignable(left, false, refDestructuringErrors); }
          if (!ownDestructuringErrors) {
            refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
            // reset these when detected inside this expression
            if (refDestructuringErrors.shorthandAssign >= left.start) { refDestructuringErrors.shorthandAssign = -1; }
            if (refDestructuringErrors.doubleProto >= left.start) { refDestructuringErrors.doubleProto = -1; }
          }
          if (this.type === types$1.eq)
            { this.checkLValPattern(left); }
          else
            { this.checkLValSimple(left); }
          node.left = left;
          this.next();
          node.right = this.parseMaybeAssign(forInit);
          if (oldDoubleProto > -1) { refDestructuringErrors.doubleProto = oldDoubleProto; }
          return this.finishNode(node, "AssignmentExpression")
        } else {
          if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
        }
        if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
        if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
        return left
      };

      // Parse a ternary conditional (`?:`) operator.

      pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprOps(forInit, refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
        if (!(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.question)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.test = expr;
          node.consequent = this.parseMaybeAssign();
          this.expect(types$1.colon);
          node.alternate = this.parseMaybeAssign(forInit);
          return this.finishNode(node, "ConditionalExpression")
        }
        return expr
      };

      // Start the precedence parser.

      pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
        if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
        return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit)
      };

      // Parse binary operators with the operator precedence parsing
      // algorithm. `left` is the left-hand side of the operator.
      // `minPrec` provides context that allows the function to stop and
      // defer further parser to one of its callers when it encounters an
      // operator that has a lower precedence than the set it is parsing.

      pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
        var prec = this.type.binop;
        if (prec != null && (!forInit || this.type !== types$1._in)) {
          if (prec > minPrec) {
            var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
            var coalesce = this.type === types$1.coalesce;
            if (coalesce) {
              // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
              // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
              prec = types$1.logicalAND.binop;
            }
            var op = this.value;
            this.next();
            var startPos = this.start, startLoc = this.startLoc;
            var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
            var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
            if ((logical && this.type === types$1.coalesce) || (coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND))) {
              this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
            }
            return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit)
          }
        }
        return left
      };

      pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
        if (right.type === "PrivateIdentifier") { this.raise(right.start, "Private identifier can only be left side of binary expression"); }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.operator = op;
        node.right = right;
        return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
      };

      // Parse unary operators, both prefix and postfix.

      pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
        var startPos = this.start, startLoc = this.startLoc, expr;
        if (this.isContextual("await") && this.canAwait) {
          expr = this.parseAwait(forInit);
          sawUnary = true;
        } else if (this.type.prefix) {
          var node = this.startNode(), update = this.type === types$1.incDec;
          node.operator = this.value;
          node.prefix = true;
          this.next();
          node.argument = this.parseMaybeUnary(null, true, update, forInit);
          this.checkExpressionErrors(refDestructuringErrors, true);
          if (update) { this.checkLValSimple(node.argument); }
          else if (this.strict && node.operator === "delete" && isLocalVariableAccess(node.argument))
            { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
          else if (node.operator === "delete" && isPrivateFieldAccess(node.argument))
            { this.raiseRecoverable(node.start, "Private fields can not be deleted"); }
          else { sawUnary = true; }
          expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
        } else if (!sawUnary && this.type === types$1.privateId) {
          if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) { this.unexpected(); }
          expr = this.parsePrivateIdent();
          // only could be private fields in 'in', such as #x in obj
          if (this.type !== types$1._in) { this.unexpected(); }
        } else {
          expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
          if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
          while (this.type.postfix && !this.canInsertSemicolon()) {
            var node$1 = this.startNodeAt(startPos, startLoc);
            node$1.operator = this.value;
            node$1.prefix = false;
            node$1.argument = expr;
            this.checkLValSimple(expr);
            this.next();
            expr = this.finishNode(node$1, "UpdateExpression");
          }
        }

        if (!incDec && !(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.starstar)) {
          if (sawUnary)
            { this.unexpected(this.lastTokStart); }
          else
            { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false) }
        } else {
          return expr
        }
      };

      function isLocalVariableAccess(node) {
        return (
          node.type === "Identifier" ||
          node.type === "ParenthesizedExpression" && isLocalVariableAccess(node.expression)
        )
      }

      function isPrivateFieldAccess(node) {
        return (
          node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" ||
          node.type === "ChainExpression" && isPrivateFieldAccess(node.expression) ||
          node.type === "ParenthesizedExpression" && isPrivateFieldAccess(node.expression)
        )
      }

      // Parse call, dot, and `[]`-subscript expressions.

      pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
        var startPos = this.start, startLoc = this.startLoc;
        var oldDoubleProto = -1, oldShorthandAssign = -1;
        if (refDestructuringErrors) {
          oldDoubleProto = refDestructuringErrors.doubleProto;
          oldShorthandAssign = refDestructuringErrors.shorthandAssign;
          refDestructuringErrors.doubleProto = refDestructuringErrors.shorthandAssign = -1;
        }
        var expr = this.parseExprAtom(refDestructuringErrors, forInit);
        if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
          { return expr }
        var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
        if (refDestructuringErrors) {
          if (result.end > expr.end) {
            this.checkExpressionErrors(refDestructuringErrors, true);
            if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
            if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
            if (refDestructuringErrors.trailingComma >= result.start) { refDestructuringErrors.trailingComma = -1; }
          }
          if (oldDoubleProto > -1) { refDestructuringErrors.doubleProto = oldDoubleProto; }
          if (oldShorthandAssign > -1) { refDestructuringErrors.shorthandAssign = oldShorthandAssign; }
        }
        return result
      };

      pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
        var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
            this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
            this.potentialArrowAt === base.start;
        var optionalChained = false;

        while (true) {
          var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);

          if (element.optional) { optionalChained = true; }
          if (element.end === base.end || element.type === "ArrowFunctionExpression") {
            if (optionalChained) {
              var chainNode = this.startNodeAt(startPos, startLoc);
              chainNode.expression = element;
              element = this.finishNode(chainNode, "ChainExpression");
            }
            return element
          }

          base = element;
          maybeAsyncArrow = false;
        }
      };

      pp$5.shouldParseAsyncArrow = function() {
        return !this.canInsertSemicolon() && this.eat(types$1.arrow)
      };

      pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit)
      };

      pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        var optionalSupported = this.options.ecmaVersion >= 11;
        var optional = optionalSupported && this.eat(types$1.questionDot);
        if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

        var computed = this.eat(types$1.bracketL);
        if (computed || (optional && this.type !== types$1.parenL && this.type !== types$1.backQuote) || this.eat(types$1.dot)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.object = base;
          if (computed) {
            node.property = this.parseExpression();
            this.expect(types$1.bracketR);
          } else if (this.type === types$1.privateId && base.type !== "Super") {
            node.property = this.parsePrivateIdent();
          } else {
            node.property = this.parseIdent(this.options.allowReserved !== "never");
          }
          node.computed = !!computed;
          if (optionalSupported) {
            node.optional = optional;
          }
          base = this.finishNode(node, "MemberExpression");
        } else if (!noCalls && this.eat(types$1.parenL)) {
          var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
          this.yieldPos = 0;
          this.awaitPos = 0;
          this.awaitIdentPos = 0;
          var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
          if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            if (this.awaitIdentPos > 0)
              { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            this.awaitIdentPos = oldAwaitIdentPos;
            return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit)
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
          var node$1 = this.startNodeAt(startPos, startLoc);
          node$1.callee = base;
          node$1.arguments = exprList;
          if (optionalSupported) {
            node$1.optional = optional;
          }
          base = this.finishNode(node$1, "CallExpression");
        } else if (this.type === types$1.backQuote) {
          if (optional || optionalChained) {
            this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          }
          var node$2 = this.startNodeAt(startPos, startLoc);
          node$2.tag = base;
          node$2.quasi = this.parseTemplate({isTagged: true});
          base = this.finishNode(node$2, "TaggedTemplateExpression");
        }
        return base
      };

      // Parse an atomic expression — either a single token that is an
      // expression, an expression started by a keyword like `function` or
      // `new`, or an expression wrapped in punctuation like `()`, `[]`,
      // or `{}`.

      pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
        // If a division operator appears in an expression position, the
        // tokenizer got confused, and we force it to read a regexp instead.
        if (this.type === types$1.slash) { this.readRegexp(); }

        var node, canBeArrow = this.potentialArrowAt === this.start;
        switch (this.type) {
        case types$1._super:
          if (!this.allowSuper)
            { this.raise(this.start, "'super' keyword outside a method"); }
          node = this.startNode();
          this.next();
          if (this.type === types$1.parenL && !this.allowDirectSuper)
            { this.raise(node.start, "super() call outside constructor of a subclass"); }
          // The `super` keyword can appear at below:
          // SuperProperty:
          //     super [ Expression ]
          //     super . IdentifierName
          // SuperCall:
          //     super ( Arguments )
          if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL)
            { this.unexpected(); }
          return this.finishNode(node, "Super")

        case types$1._this:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "ThisExpression")

        case types$1.name:
          var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
          var id = this.parseIdent(false);
          if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
            this.overrideContext(types.f_expr);
            return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit)
          }
          if (canBeArrow && !this.canInsertSemicolon()) {
            if (this.eat(types$1.arrow))
              { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit) }
            if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc &&
                (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
              id = this.parseIdent(false);
              if (this.canInsertSemicolon() || !this.eat(types$1.arrow))
                { this.unexpected(); }
              return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit)
            }
          }
          return id

        case types$1.regexp:
          var value = this.value;
          node = this.parseLiteral(value.value);
          node.regex = {pattern: value.pattern, flags: value.flags};
          return node

        case types$1.num: case types$1.string:
          return this.parseLiteral(this.value)

        case types$1._null: case types$1._true: case types$1._false:
          node = this.startNode();
          node.value = this.type === types$1._null ? null : this.type === types$1._true;
          node.raw = this.type.keyword;
          this.next();
          return this.finishNode(node, "Literal")

        case types$1.parenL:
          var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
          if (refDestructuringErrors) {
            if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
              { refDestructuringErrors.parenthesizedAssign = start; }
            if (refDestructuringErrors.parenthesizedBind < 0)
              { refDestructuringErrors.parenthesizedBind = start; }
          }
          return expr

        case types$1.bracketL:
          node = this.startNode();
          this.next();
          node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
          return this.finishNode(node, "ArrayExpression")

        case types$1.braceL:
          this.overrideContext(types.b_expr);
          return this.parseObj(false, refDestructuringErrors)

        case types$1._function:
          node = this.startNode();
          this.next();
          return this.parseFunction(node, 0)

        case types$1._class:
          return this.parseClass(this.startNode(), false)

        case types$1._new:
          return this.parseNew()

        case types$1.backQuote:
          return this.parseTemplate()

        case types$1._import:
          if (this.options.ecmaVersion >= 11) {
            return this.parseExprImport(forNew)
          } else {
            return this.unexpected()
          }

        default:
          return this.parseExprAtomDefault()
        }
      };

      pp$5.parseExprAtomDefault = function() {
        this.unexpected();
      };

      pp$5.parseExprImport = function(forNew) {
        var node = this.startNode();

        // Consume `import` as an identifier for `import.meta`.
        // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
        if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
        this.next();

        if (this.type === types$1.parenL && !forNew) {
          return this.parseDynamicImport(node)
        } else if (this.type === types$1.dot) {
          var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
          meta.name = "import";
          node.meta = this.finishNode(meta, "Identifier");
          return this.parseImportMeta(node)
        } else {
          this.unexpected();
        }
      };

      pp$5.parseDynamicImport = function(node) {
        this.next(); // skip `(`

        // Parse node.source.
        node.source = this.parseMaybeAssign();

        if (this.options.ecmaVersion >= 16) {
          if (!this.eat(types$1.parenR)) {
            this.expect(types$1.comma);
            if (!this.afterTrailingComma(types$1.parenR)) {
              node.options = this.parseMaybeAssign();
              if (!this.eat(types$1.parenR)) {
                this.expect(types$1.comma);
                if (!this.afterTrailingComma(types$1.parenR)) {
                  this.unexpected();
                }
              }
            } else {
              node.options = null;
            }
          } else {
            node.options = null;
          }
        } else {
          // Verify ending.
          if (!this.eat(types$1.parenR)) {
            var errorPos = this.start;
            if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
              this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
            } else {
              this.unexpected(errorPos);
            }
          }
        }

        return this.finishNode(node, "ImportExpression")
      };

      pp$5.parseImportMeta = function(node) {
        this.next(); // skip `.`

        var containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);

        if (node.property.name !== "meta")
          { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
        if (containsEsc)
          { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
        if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere)
          { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

        return this.finishNode(node, "MetaProperty")
      };

      pp$5.parseLiteral = function(value) {
        var node = this.startNode();
        node.value = value;
        node.raw = this.input.slice(this.start, this.end);
        if (node.raw.charCodeAt(node.raw.length - 1) === 110)
          { node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, ""); }
        this.next();
        return this.finishNode(node, "Literal")
      };

      pp$5.parseParenExpression = function() {
        this.expect(types$1.parenL);
        var val = this.parseExpression();
        this.expect(types$1.parenR);
        return val
      };

      pp$5.shouldParseArrow = function(exprList) {
        return !this.canInsertSemicolon()
      };

      pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
        var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();

          var innerStartPos = this.start, innerStartLoc = this.startLoc;
          var exprList = [], first = true, lastIsComma = false;
          var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
          this.yieldPos = 0;
          this.awaitPos = 0;
          // Do not save awaitIdentPos to allow checking awaits nested in parameters
          while (this.type !== types$1.parenR) {
            first ? first = false : this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
              lastIsComma = true;
              break
            } else if (this.type === types$1.ellipsis) {
              spreadStart = this.start;
              exprList.push(this.parseParenItem(this.parseRestBinding()));
              if (this.type === types$1.comma) {
                this.raiseRecoverable(
                  this.start,
                  "Comma is not permitted after the rest element"
                );
              }
              break
            } else {
              exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
            }
          }
          var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
          this.expect(types$1.parenR);

          if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            return this.parseParenArrowList(startPos, startLoc, exprList, forInit)
          }

          if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
          if (spreadStart) { this.unexpected(spreadStart); }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;

          if (exprList.length > 1) {
            val = this.startNodeAt(innerStartPos, innerStartLoc);
            val.expressions = exprList;
            this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
          } else {
            val = exprList[0];
          }
        } else {
          val = this.parseParenExpression();
        }

        if (this.options.preserveParens) {
          var par = this.startNodeAt(startPos, startLoc);
          par.expression = val;
          return this.finishNode(par, "ParenthesizedExpression")
        } else {
          return val
        }
      };

      pp$5.parseParenItem = function(item) {
        return item
      };

      pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit)
      };

      // New's precedence is slightly tricky. It must allow its argument to
      // be a `[]` or dot subscript expression, but not a call — at least,
      // not without wrapping it in parentheses. Thus, it uses the noCalls
      // argument to parseSubscripts to prevent it from consuming the
      // argument list.

      var empty = [];

      pp$5.parseNew = function() {
        if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
        var node = this.startNode();
        this.next();
        if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
          var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
          meta.name = "new";
          node.meta = this.finishNode(meta, "Identifier");
          this.next();
          var containsEsc = this.containsEsc;
          node.property = this.parseIdent(true);
          if (node.property.name !== "target")
            { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
          if (containsEsc)
            { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
          if (!this.allowNewDotTarget)
            { this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block"); }
          return this.finishNode(node, "MetaProperty")
        }
        var startPos = this.start, startLoc = this.startLoc;
        node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
        if (node.callee.type === "Super")
          { this.raiseRecoverable(startPos, "Invalid use of 'super'"); }
        if (this.eat(types$1.parenL)) { node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false); }
        else { node.arguments = empty; }
        return this.finishNode(node, "NewExpression")
      };

      // Parse template expression.

      pp$5.parseTemplateElement = function(ref) {
        var isTagged = ref.isTagged;

        var elem = this.startNode();
        if (this.type === types$1.invalidTemplate) {
          if (!isTagged) {
            this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
          }
          elem.value = {
            raw: this.value.replace(/\r\n?/g, "\n"),
            cooked: null
          };
        } else {
          elem.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
            cooked: this.value
          };
        }
        this.next();
        elem.tail = this.type === types$1.backQuote;
        return this.finishNode(elem, "TemplateElement")
      };

      pp$5.parseTemplate = function(ref) {
        if ( ref === void 0 ) ref = {};
        var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

        var node = this.startNode();
        this.next();
        node.expressions = [];
        var curElt = this.parseTemplateElement({isTagged: isTagged});
        node.quasis = [curElt];
        while (!curElt.tail) {
          if (this.type === types$1.eof) { this.raise(this.pos, "Unterminated template literal"); }
          this.expect(types$1.dollarBraceL);
          node.expressions.push(this.parseExpression());
          this.expect(types$1.braceR);
          node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
        }
        this.next();
        return this.finishNode(node, "TemplateLiteral")
      };

      pp$5.isAsyncProp = function(prop) {
        return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
          (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types$1.star)) &&
          !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
      };

      // Parse an object literal or binding pattern.

      pp$5.parseObj = function(isPattern, refDestructuringErrors) {
        var node = this.startNode(), first = true, propHash = {};
        node.properties = [];
        this.next();
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) { break }
          } else { first = false; }

          var prop = this.parseProperty(isPattern, refDestructuringErrors);
          if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
          node.properties.push(prop);
        }
        return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
      };

      pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
        var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
        if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
          if (isPattern) {
            prop.argument = this.parseIdent(false);
            if (this.type === types$1.comma) {
              this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
            }
            return this.finishNode(prop, "RestElement")
          }
          // Parse argument.
          prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
          // To disallow trailing comma via `this.toAssignable()`.
          if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
            refDestructuringErrors.trailingComma = this.start;
          }
          // Finish
          return this.finishNode(prop, "SpreadElement")
        }
        if (this.options.ecmaVersion >= 6) {
          prop.method = false;
          prop.shorthand = false;
          if (isPattern || refDestructuringErrors) {
            startPos = this.start;
            startLoc = this.startLoc;
          }
          if (!isPattern)
            { isGenerator = this.eat(types$1.star); }
        }
        var containsEsc = this.containsEsc;
        this.parsePropertyName(prop);
        if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
          isAsync = true;
          isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
          this.parsePropertyName(prop);
        } else {
          isAsync = false;
        }
        this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
        return this.finishNode(prop, "Property")
      };

      pp$5.parseGetterSetter = function(prop) {
        var kind = prop.key.name;
        this.parsePropertyName(prop);
        prop.value = this.parseMethod(false);
        prop.kind = kind;
        var paramCount = prop.kind === "get" ? 0 : 1;
        if (prop.value.params.length !== paramCount) {
          var start = prop.value.start;
          if (prop.kind === "get")
            { this.raiseRecoverable(start, "getter should have no params"); }
          else
            { this.raiseRecoverable(start, "setter should have exactly one param"); }
        } else {
          if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
            { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
        }
      };

      pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        if ((isGenerator || isAsync) && this.type === types$1.colon)
          { this.unexpected(); }

        if (this.eat(types$1.colon)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
          prop.kind = "init";
        } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
          if (isPattern) { this.unexpected(); }
          prop.method = true;
          prop.value = this.parseMethod(isGenerator, isAsync);
          prop.kind = "init";
        } else if (!isPattern && !containsEsc &&
                   this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
                   (prop.key.name === "get" || prop.key.name === "set") &&
                   (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
          if (isGenerator || isAsync) { this.unexpected(); }
          this.parseGetterSetter(prop);
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
          if (isGenerator || isAsync) { this.unexpected(); }
          this.checkUnreserved(prop.key);
          if (prop.key.name === "await" && !this.awaitIdentPos)
            { this.awaitIdentPos = startPos; }
          if (isPattern) {
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else if (this.type === types$1.eq && refDestructuringErrors) {
            if (refDestructuringErrors.shorthandAssign < 0)
              { refDestructuringErrors.shorthandAssign = this.start; }
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else {
            prop.value = this.copyNode(prop.key);
          }
          prop.kind = "init";
          prop.shorthand = true;
        } else { this.unexpected(); }
      };

      pp$5.parsePropertyName = function(prop) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(types$1.bracketL)) {
            prop.computed = true;
            prop.key = this.parseMaybeAssign();
            this.expect(types$1.bracketR);
            return prop.key
          } else {
            prop.computed = false;
          }
        }
        return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
      };

      // Initialize empty function node.

      pp$5.initFunction = function(node) {
        node.id = null;
        if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
        if (this.options.ecmaVersion >= 8) { node.async = false; }
      };

      // Parse object or class method.

      pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
        var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

        this.initFunction(node);
        if (this.options.ecmaVersion >= 6)
          { node.generator = isGenerator; }
        if (this.options.ecmaVersion >= 8)
          { node.async = !!isAsync; }

        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
        this.parseFunctionBody(node, false, true, false);

        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "FunctionExpression")
      };

      // Parse arrow function expression with given parameters.

      pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

        this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
        this.initFunction(node);
        if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;

        node.params = this.toAssignableList(params, true);
        this.parseFunctionBody(node, true, false, forInit);

        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "ArrowFunctionExpression")
      };

      // Parse function body and check parameters.

      pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
        var isExpression = isArrowFunction && this.type !== types$1.braceL;
        var oldStrict = this.strict, useStrict = false;

        if (isExpression) {
          node.body = this.parseMaybeAssign(forInit);
          node.expression = true;
          this.checkParams(node, false);
        } else {
          var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
          if (!oldStrict || nonSimple) {
            useStrict = this.strictDirective(this.end);
            // If this is a strict mode function, verify that argument names
            // are not repeated, and it does not try to bind the words `eval`
            // or `arguments`.
            if (useStrict && nonSimple)
              { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
          }
          // Start a new scope with regard to labels and the `inFunction`
          // flag (restore them to their old value afterwards).
          var oldLabels = this.labels;
          this.labels = [];
          if (useStrict) { this.strict = true; }

          // Add the params to varDeclaredNames to ensure that an error is thrown
          // if a let/const declaration in the function clashes with one of the params.
          this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
          // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
          if (this.strict && node.id) { this.checkLValSimple(node.id, BIND_OUTSIDE); }
          node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
          node.expression = false;
          this.adaptDirectivePrologue(node.body.body);
          this.labels = oldLabels;
        }
        this.exitScope();
      };

      pp$5.isSimpleParamList = function(params) {
        for (var i = 0, list = params; i < list.length; i += 1)
          {
          var param = list[i];

          if (param.type !== "Identifier") { return false
        } }
        return true
      };

      // Checks function params for various disallowed patterns such as using "eval"
      // or "arguments" and duplicate parameters.

      pp$5.checkParams = function(node, allowDuplicates) {
        var nameHash = Object.create(null);
        for (var i = 0, list = node.params; i < list.length; i += 1)
          {
          var param = list[i];

          this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
        }
      };

      // Parses a comma-separated list of expressions, and returns them as
      // an array. `close` is the token type that ends the list, and
      // `allowEmpty` can be turned on to allow subsequent commas with
      // nothing in between them to be parsed as `null` (which is needed
      // for array literals).

      pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (!first) {
            this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(close)) { break }
          } else { first = false; }

          var elt = (void 0);
          if (allowEmpty && this.type === types$1.comma)
            { elt = null; }
          else if (this.type === types$1.ellipsis) {
            elt = this.parseSpread(refDestructuringErrors);
            if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0)
              { refDestructuringErrors.trailingComma = this.start; }
          } else {
            elt = this.parseMaybeAssign(false, refDestructuringErrors);
          }
          elts.push(elt);
        }
        return elts
      };

      pp$5.checkUnreserved = function(ref) {
        var start = ref.start;
        var end = ref.end;
        var name = ref.name;

        if (this.inGenerator && name === "yield")
          { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
        if (this.inAsync && name === "await")
          { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
        if (!(this.currentThisScope().flags & SCOPE_VAR) && name === "arguments")
          { this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer"); }
        if (this.inClassStaticBlock && (name === "arguments" || name === "await"))
          { this.raise(start, ("Cannot use " + name + " in class static initialization block")); }
        if (this.keywords.test(name))
          { this.raise(start, ("Unexpected keyword '" + name + "'")); }
        if (this.options.ecmaVersion < 6 &&
          this.input.slice(start, end).indexOf("\\") !== -1) { return }
        var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
        if (re.test(name)) {
          if (!this.inAsync && name === "await")
            { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
          this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
        }
      };

      // Parse the next token as an identifier. If `liberal` is true (used
      // when parsing properties), it will also convert keywords into
      // identifiers.

      pp$5.parseIdent = function(liberal) {
        var node = this.parseIdentNode();
        this.next(!!liberal);
        this.finishNode(node, "Identifier");
        if (!liberal) {
          this.checkUnreserved(node);
          if (node.name === "await" && !this.awaitIdentPos)
            { this.awaitIdentPos = node.start; }
        }
        return node
      };

      pp$5.parseIdentNode = function() {
        var node = this.startNode();
        if (this.type === types$1.name) {
          node.name = this.value;
        } else if (this.type.keyword) {
          node.name = this.type.keyword;

          // To fix https://github.com/acornjs/acorn/issues/575
          // `class` and `function` keywords push new context into this.context.
          // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
          // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
          if ((node.name === "class" || node.name === "function") &&
            (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
            this.context.pop();
          }
          this.type = types$1.name;
        } else {
          this.unexpected();
        }
        return node
      };

      pp$5.parsePrivateIdent = function() {
        var node = this.startNode();
        if (this.type === types$1.privateId) {
          node.name = this.value;
        } else {
          this.unexpected();
        }
        this.next();
        this.finishNode(node, "PrivateIdentifier");

        // For validating existence
        if (this.options.checkPrivateFields) {
          if (this.privateNameStack.length === 0) {
            this.raise(node.start, ("Private field '#" + (node.name) + "' must be declared in an enclosing class"));
          } else {
            this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
          }
        }

        return node
      };

      // Parses yield expression inside generator.

      pp$5.parseYield = function(forInit) {
        if (!this.yieldPos) { this.yieldPos = this.start; }

        var node = this.startNode();
        this.next();
        if (this.type === types$1.semi || this.canInsertSemicolon() || (this.type !== types$1.star && !this.type.startsExpr)) {
          node.delegate = false;
          node.argument = null;
        } else {
          node.delegate = this.eat(types$1.star);
          node.argument = this.parseMaybeAssign(forInit);
        }
        return this.finishNode(node, "YieldExpression")
      };

      pp$5.parseAwait = function(forInit) {
        if (!this.awaitPos) { this.awaitPos = this.start; }

        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeUnary(null, true, false, forInit);
        return this.finishNode(node, "AwaitExpression")
      };

      var pp$4 = Parser.prototype;

      // This function is used to raise exceptions on parse errors. It
      // takes an offset integer (into the current `input`) to indicate
      // the location of the error, attaches the position to the end
      // of the error message, and then raises a `SyntaxError` with that
      // message.

      pp$4.raise = function(pos, message) {
        var loc = getLineInfo(this.input, pos);
        message += " (" + loc.line + ":" + loc.column + ")";
        if (this.sourceFile) {
          message += " in " + this.sourceFile;
        }
        var err = new SyntaxError(message);
        err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
        throw err
      };

      pp$4.raiseRecoverable = pp$4.raise;

      pp$4.curPosition = function() {
        if (this.options.locations) {
          return new Position(this.curLine, this.pos - this.lineStart)
        }
      };

      var pp$3 = Parser.prototype;

      var Scope = function Scope(flags) {
        this.flags = flags;
        // A list of var-declared names in the current lexical scope
        this.var = [];
        // A list of lexically-declared names in the current lexical scope
        this.lexical = [];
        // A list of lexically-declared FunctionDeclaration names in the current lexical scope
        this.functions = [];
      };

      // The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

      pp$3.enterScope = function(flags) {
        this.scopeStack.push(new Scope(flags));
      };

      pp$3.exitScope = function() {
        this.scopeStack.pop();
      };

      // The spec says:
      // > At the top level of a function, or script, function declarations are
      // > treated like var declarations rather than like lexical declarations.
      pp$3.treatFunctionsAsVarInScope = function(scope) {
        return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
      };

      pp$3.declareName = function(name, bindingType, pos) {
        var redeclared = false;
        if (bindingType === BIND_LEXICAL) {
          var scope = this.currentScope();
          redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
          scope.lexical.push(name);
          if (this.inModule && (scope.flags & SCOPE_TOP))
            { delete this.undefinedExports[name]; }
        } else if (bindingType === BIND_SIMPLE_CATCH) {
          var scope$1 = this.currentScope();
          scope$1.lexical.push(name);
        } else if (bindingType === BIND_FUNCTION) {
          var scope$2 = this.currentScope();
          if (this.treatFunctionsAsVar)
            { redeclared = scope$2.lexical.indexOf(name) > -1; }
          else
            { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
          scope$2.functions.push(name);
        } else {
          for (var i = this.scopeStack.length - 1; i >= 0; --i) {
            var scope$3 = this.scopeStack[i];
            if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
                !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
              redeclared = true;
              break
            }
            scope$3.var.push(name);
            if (this.inModule && (scope$3.flags & SCOPE_TOP))
              { delete this.undefinedExports[name]; }
            if (scope$3.flags & SCOPE_VAR) { break }
          }
        }
        if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
      };

      pp$3.checkLocalExport = function(id) {
        // scope.functions must be empty as Module code is always strict.
        if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
            this.scopeStack[0].var.indexOf(id.name) === -1) {
          this.undefinedExports[id.name] = id;
        }
      };

      pp$3.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1]
      };

      pp$3.currentVarScope = function() {
        for (var i = this.scopeStack.length - 1;; i--) {
          var scope = this.scopeStack[i];
          if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) { return scope }
        }
      };

      // Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
      pp$3.currentThisScope = function() {
        for (var i = this.scopeStack.length - 1;; i--) {
          var scope = this.scopeStack[i];
          if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) &&
              !(scope.flags & SCOPE_ARROW)) { return scope }
        }
      };

      var Node = function Node(parser, pos, loc) {
        this.type = "";
        this.start = pos;
        this.end = 0;
        if (parser.options.locations)
          { this.loc = new SourceLocation(parser, loc); }
        if (parser.options.directSourceFile)
          { this.sourceFile = parser.options.directSourceFile; }
        if (parser.options.ranges)
          { this.range = [pos, 0]; }
      };

      // Start an AST node, attaching a start offset.

      var pp$2 = Parser.prototype;

      pp$2.startNode = function() {
        return new Node(this, this.start, this.startLoc)
      };

      pp$2.startNodeAt = function(pos, loc) {
        return new Node(this, pos, loc)
      };

      // Finish an AST node, adding `type` and `end` properties.

      function finishNodeAt(node, type, pos, loc) {
        node.type = type;
        node.end = pos;
        if (this.options.locations)
          { node.loc.end = loc; }
        if (this.options.ranges)
          { node.range[1] = pos; }
        return node
      }

      pp$2.finishNode = function(node, type) {
        return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
      };

      // Finish node at given position

      pp$2.finishNodeAt = function(node, type, pos, loc) {
        return finishNodeAt.call(this, node, type, pos, loc)
      };

      pp$2.copyNode = function(node) {
        var newNode = new Node(this, node.start, this.startLoc);
        for (var prop in node) { newNode[prop] = node[prop]; }
        return newNode
      };

      // This file was generated by "bin/generate-unicode-script-values.js". Do not modify manually!
      var scriptValuesAddedInUnicode = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";

      // This file contains Unicode properties extracted from the ECMAScript specification.
      // The lists are extracted like so:
      // $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

      // #table-binary-unicode-properties
      var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
      var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
      var ecma11BinaryProperties = ecma10BinaryProperties;
      var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
      var ecma13BinaryProperties = ecma12BinaryProperties;
      var ecma14BinaryProperties = ecma13BinaryProperties;

      var unicodeBinaryProperties = {
        9: ecma9BinaryProperties,
        10: ecma10BinaryProperties,
        11: ecma11BinaryProperties,
        12: ecma12BinaryProperties,
        13: ecma13BinaryProperties,
        14: ecma14BinaryProperties
      };

      // #table-binary-unicode-properties-of-strings
      var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";

      var unicodeBinaryPropertiesOfStrings = {
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: ecma14BinaryPropertiesOfStrings
      };

      // #table-unicode-general-category-values
      var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

      // #table-unicode-script-values
      var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
      var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
      var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
      var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
      var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
      var ecma14ScriptValues = ecma13ScriptValues + " " + scriptValuesAddedInUnicode;

      var unicodeScriptValues = {
        9: ecma9ScriptValues,
        10: ecma10ScriptValues,
        11: ecma11ScriptValues,
        12: ecma12ScriptValues,
        13: ecma13ScriptValues,
        14: ecma14ScriptValues
      };

      var data = {};
      function buildUnicodeData(ecmaVersion) {
        var d = data[ecmaVersion] = {
          binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
          binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
          nonBinary: {
            General_Category: wordsRegexp(unicodeGeneralCategoryValues),
            Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
          }
        };
        d.nonBinary.Script_Extensions = d.nonBinary.Script;

        d.nonBinary.gc = d.nonBinary.General_Category;
        d.nonBinary.sc = d.nonBinary.Script;
        d.nonBinary.scx = d.nonBinary.Script_Extensions;
      }

      for (var i = 0, list = [9, 10, 11, 12, 13, 14]; i < list.length; i += 1) {
        var ecmaVersion = list[i];

        buildUnicodeData(ecmaVersion);
      }

      var pp$1 = Parser.prototype;

      // Track disjunction structure to determine whether a duplicate
      // capture group name is allowed because it is in a separate branch.
      var BranchID = function BranchID(parent, base) {
        // Parent disjunction branch
        this.parent = parent;
        // Identifies this set of sibling branches
        this.base = base || this;
      };

      BranchID.prototype.separatedFrom = function separatedFrom (alt) {
        // A branch is separate from another branch if they or any of
        // their parents are siblings in a given disjunction
        for (var self = this; self; self = self.parent) {
          for (var other = alt; other; other = other.parent) {
            if (self.base === other.base && self !== other) { return true }
          }
        }
        return false
      };

      BranchID.prototype.sibling = function sibling () {
        return new BranchID(this.parent, this.base)
      };

      var RegExpValidationState = function RegExpValidationState(parser) {
        this.parser = parser;
        this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
        this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
        this.source = "";
        this.flags = "";
        this.start = 0;
        this.switchU = false;
        this.switchV = false;
        this.switchN = false;
        this.pos = 0;
        this.lastIntValue = 0;
        this.lastStringValue = "";
        this.lastAssertionIsQuantifiable = false;
        this.numCapturingParens = 0;
        this.maxBackReference = 0;
        this.groupNames = Object.create(null);
        this.backReferenceNames = [];
        this.branchID = null;
      };

      RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
        var unicodeSets = flags.indexOf("v") !== -1;
        var unicode = flags.indexOf("u") !== -1;
        this.start = start | 0;
        this.source = pattern + "";
        this.flags = flags;
        if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
          this.switchU = true;
          this.switchV = true;
          this.switchN = true;
        } else {
          this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
          this.switchV = false;
          this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
        }
      };

      RegExpValidationState.prototype.raise = function raise (message) {
        this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
      };

      // If u flag is given, this returns the code point at the index (it combines a surrogate pair).
      // Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
      RegExpValidationState.prototype.at = function at (i, forceU) {
          if ( forceU === void 0 ) forceU = false;

        var s = this.source;
        var l = s.length;
        if (i >= l) {
          return -1
        }
        var c = s.charCodeAt(i);
        if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
          return c
        }
        var next = s.charCodeAt(i + 1);
        return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
      };

      RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
          if ( forceU === void 0 ) forceU = false;

        var s = this.source;
        var l = s.length;
        if (i >= l) {
          return l
        }
        var c = s.charCodeAt(i), next;
        if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
            (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
          return i + 1
        }
        return i + 2
      };

      RegExpValidationState.prototype.current = function current (forceU) {
          if ( forceU === void 0 ) forceU = false;

        return this.at(this.pos, forceU)
      };

      RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
          if ( forceU === void 0 ) forceU = false;

        return this.at(this.nextIndex(this.pos, forceU), forceU)
      };

      RegExpValidationState.prototype.advance = function advance (forceU) {
          if ( forceU === void 0 ) forceU = false;

        this.pos = this.nextIndex(this.pos, forceU);
      };

      RegExpValidationState.prototype.eat = function eat (ch, forceU) {
          if ( forceU === void 0 ) forceU = false;

        if (this.current(forceU) === ch) {
          this.advance(forceU);
          return true
        }
        return false
      };

      RegExpValidationState.prototype.eatChars = function eatChars (chs, forceU) {
          if ( forceU === void 0 ) forceU = false;

        var pos = this.pos;
        for (var i = 0, list = chs; i < list.length; i += 1) {
          var ch = list[i];

            var current = this.at(pos, forceU);
          if (current === -1 || current !== ch) {
            return false
          }
          pos = this.nextIndex(pos, forceU);
        }
        this.pos = pos;
        return true
      };

      /**
       * Validate the flags part of a given RegExpLiteral.
       *
       * @param {RegExpValidationState} state The state to validate RegExp.
       * @returns {void}
       */
      pp$1.validateRegExpFlags = function(state) {
        var validFlags = state.validFlags;
        var flags = state.flags;

        var u = false;
        var v = false;

        for (var i = 0; i < flags.length; i++) {
          var flag = flags.charAt(i);
          if (validFlags.indexOf(flag) === -1) {
            this.raise(state.start, "Invalid regular expression flag");
          }
          if (flags.indexOf(flag, i + 1) > -1) {
            this.raise(state.start, "Duplicate regular expression flag");
          }
          if (flag === "u") { u = true; }
          if (flag === "v") { v = true; }
        }
        if (this.options.ecmaVersion >= 15 && u && v) {
          this.raise(state.start, "Invalid regular expression flag");
        }
      };

      function hasProp(obj) {
        for (var _ in obj) { return true }
        return false
      }

      /**
       * Validate the pattern part of a given RegExpLiteral.
       *
       * @param {RegExpValidationState} state The state to validate RegExp.
       * @returns {void}
       */
      pp$1.validateRegExpPattern = function(state) {
        this.regexp_pattern(state);

        // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
        // parsing contains a |GroupName|, reparse with the goal symbol
        // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
        // exception if _P_ did not conform to the grammar, if any elements of _P_
        // were not matched by the parse, or if any Early Error conditions exist.
        if (!state.switchN && this.options.ecmaVersion >= 9 && hasProp(state.groupNames)) {
          state.switchN = true;
          this.regexp_pattern(state);
        }
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
      pp$1.regexp_pattern = function(state) {
        state.pos = 0;
        state.lastIntValue = 0;
        state.lastStringValue = "";
        state.lastAssertionIsQuantifiable = false;
        state.numCapturingParens = 0;
        state.maxBackReference = 0;
        state.groupNames = Object.create(null);
        state.backReferenceNames.length = 0;
        state.branchID = null;

        this.regexp_disjunction(state);

        if (state.pos !== state.source.length) {
          // Make the same messages as V8.
          if (state.eat(0x29 /* ) */)) {
            state.raise("Unmatched ')'");
          }
          if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
            state.raise("Lone quantifier brackets");
          }
        }
        if (state.maxBackReference > state.numCapturingParens) {
          state.raise("Invalid escape");
        }
        for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
          var name = list[i];

          if (!state.groupNames[name]) {
            state.raise("Invalid named capture referenced");
          }
        }
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
      pp$1.regexp_disjunction = function(state) {
        var trackDisjunction = this.options.ecmaVersion >= 16;
        if (trackDisjunction) { state.branchID = new BranchID(state.branchID, null); }
        this.regexp_alternative(state);
        while (state.eat(0x7C /* | */)) {
          if (trackDisjunction) { state.branchID = state.branchID.sibling(); }
          this.regexp_alternative(state);
        }
        if (trackDisjunction) { state.branchID = state.branchID.parent; }

        // Make the same message as V8.
        if (this.regexp_eatQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        if (state.eat(0x7B /* { */)) {
          state.raise("Lone quantifier brackets");
        }
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
      pp$1.regexp_alternative = function(state) {
        while (state.pos < state.source.length && this.regexp_eatTerm(state)) {}
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
      pp$1.regexp_eatTerm = function(state) {
        if (this.regexp_eatAssertion(state)) {
          // Handle `QuantifiableAssertion Quantifier` alternative.
          // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
          // is a QuantifiableAssertion.
          if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
            // Make the same message as V8.
            if (state.switchU) {
              state.raise("Invalid quantifier");
            }
          }
          return true
        }

        if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
          this.regexp_eatQuantifier(state);
          return true
        }

        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
      pp$1.regexp_eatAssertion = function(state) {
        var start = state.pos;
        state.lastAssertionIsQuantifiable = false;

        // ^, $
        if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
          return true
        }

        // \b \B
        if (state.eat(0x5C /* \ */)) {
          if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
            return true
          }
          state.pos = start;
        }

        // Lookahead / Lookbehind
        if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
          var lookbehind = false;
          if (this.options.ecmaVersion >= 9) {
            lookbehind = state.eat(0x3C /* < */);
          }
          if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
            this.regexp_disjunction(state);
            if (!state.eat(0x29 /* ) */)) {
              state.raise("Unterminated group");
            }
            state.lastAssertionIsQuantifiable = !lookbehind;
            return true
          }
        }

        state.pos = start;
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
      pp$1.regexp_eatQuantifier = function(state, noError) {
        if ( noError === void 0 ) noError = false;

        if (this.regexp_eatQuantifierPrefix(state, noError)) {
          state.eat(0x3F /* ? */);
          return true
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
      pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
        return (
          state.eat(0x2A /* * */) ||
          state.eat(0x2B /* + */) ||
          state.eat(0x3F /* ? */) ||
          this.regexp_eatBracedQuantifier(state, noError)
        )
      };
      pp$1.regexp_eatBracedQuantifier = function(state, noError) {
        var start = state.pos;
        if (state.eat(0x7B /* { */)) {
          var min = 0, max = -1;
          if (this.regexp_eatDecimalDigits(state)) {
            min = state.lastIntValue;
            if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
              max = state.lastIntValue;
            }
            if (state.eat(0x7D /* } */)) {
              // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
              if (max !== -1 && max < min && !noError) {
                state.raise("numbers out of order in {} quantifier");
              }
              return true
            }
          }
          if (state.switchU && !noError) {
            state.raise("Incomplete quantifier");
          }
          state.pos = start;
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
      pp$1.regexp_eatAtom = function(state) {
        return (
          this.regexp_eatPatternCharacters(state) ||
          state.eat(0x2E /* . */) ||
          this.regexp_eatReverseSolidusAtomEscape(state) ||
          this.regexp_eatCharacterClass(state) ||
          this.regexp_eatUncapturingGroup(state) ||
          this.regexp_eatCapturingGroup(state)
        )
      };
      pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
        var start = state.pos;
        if (state.eat(0x5C /* \ */)) {
          if (this.regexp_eatAtomEscape(state)) {
            return true
          }
          state.pos = start;
        }
        return false
      };
      pp$1.regexp_eatUncapturingGroup = function(state) {
        var start = state.pos;
        if (state.eat(0x28 /* ( */)) {
          if (state.eat(0x3F /* ? */)) {
            if (this.options.ecmaVersion >= 16) {
              var addModifiers = this.regexp_eatModifiers(state);
              var hasHyphen = state.eat(0x2D /* - */);
              if (addModifiers || hasHyphen) {
                for (var i = 0; i < addModifiers.length; i++) {
                  var modifier = addModifiers.charAt(i);
                  if (addModifiers.indexOf(modifier, i + 1) > -1) {
                    state.raise("Duplicate regular expression modifiers");
                  }
                }
                if (hasHyphen) {
                  var removeModifiers = this.regexp_eatModifiers(state);
                  if (!addModifiers && !removeModifiers && state.current() === 0x3A /* : */) {
                    state.raise("Invalid regular expression modifiers");
                  }
                  for (var i$1 = 0; i$1 < removeModifiers.length; i$1++) {
                    var modifier$1 = removeModifiers.charAt(i$1);
                    if (
                      removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 ||
                      addModifiers.indexOf(modifier$1) > -1
                    ) {
                      state.raise("Duplicate regular expression modifiers");
                    }
                  }
                }
              }
            }
            if (state.eat(0x3A /* : */)) {
              this.regexp_disjunction(state);
              if (state.eat(0x29 /* ) */)) {
                return true
              }
              state.raise("Unterminated group");
            }
          }
          state.pos = start;
        }
        return false
      };
      pp$1.regexp_eatCapturingGroup = function(state) {
        if (state.eat(0x28 /* ( */)) {
          if (this.options.ecmaVersion >= 9) {
            this.regexp_groupSpecifier(state);
          } else if (state.current() === 0x3F /* ? */) {
            state.raise("Invalid group");
          }
          this.regexp_disjunction(state);
          if (state.eat(0x29 /* ) */)) {
            state.numCapturingParens += 1;
            return true
          }
          state.raise("Unterminated group");
        }
        return false
      };
      // RegularExpressionModifiers ::
      //   [empty]
      //   RegularExpressionModifiers RegularExpressionModifier
      pp$1.regexp_eatModifiers = function(state) {
        var modifiers = "";
        var ch = 0;
        while ((ch = state.current()) !== -1 && isRegularExpressionModifier(ch)) {
          modifiers += codePointToString(ch);
          state.advance();
        }
        return modifiers
      };
      // RegularExpressionModifier :: one of
      //   `i` `m` `s`
      function isRegularExpressionModifier(ch) {
        return ch === 0x69 /* i */ || ch === 0x6d /* m */ || ch === 0x73 /* s */
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
      pp$1.regexp_eatExtendedAtom = function(state) {
        return (
          state.eat(0x2E /* . */) ||
          this.regexp_eatReverseSolidusAtomEscape(state) ||
          this.regexp_eatCharacterClass(state) ||
          this.regexp_eatUncapturingGroup(state) ||
          this.regexp_eatCapturingGroup(state) ||
          this.regexp_eatInvalidBracedQuantifier(state) ||
          this.regexp_eatExtendedPatternCharacter(state)
        )
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
      pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
        if (this.regexp_eatBracedQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
      pp$1.regexp_eatSyntaxCharacter = function(state) {
        var ch = state.current();
        if (isSyntaxCharacter(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true
        }
        return false
      };
      function isSyntaxCharacter(ch) {
        return (
          ch === 0x24 /* $ */ ||
          ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
          ch === 0x2E /* . */ ||
          ch === 0x3F /* ? */ ||
          ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
          ch >= 0x7B /* { */ && ch <= 0x7D /* } */
        )
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
      // But eat eager.
      pp$1.regexp_eatPatternCharacters = function(state) {
        var start = state.pos;
        var ch = 0;
        while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
          state.advance();
        }
        return state.pos !== start
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
      pp$1.regexp_eatExtendedPatternCharacter = function(state) {
        var ch = state.current();
        if (
          ch !== -1 &&
          ch !== 0x24 /* $ */ &&
          !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
          ch !== 0x2E /* . */ &&
          ch !== 0x3F /* ? */ &&
          ch !== 0x5B /* [ */ &&
          ch !== 0x5E /* ^ */ &&
          ch !== 0x7C /* | */
        ) {
          state.advance();
          return true
        }
        return false
      };

      // GroupSpecifier ::
      //   [empty]
      //   `?` GroupName
      pp$1.regexp_groupSpecifier = function(state) {
        if (state.eat(0x3F /* ? */)) {
          if (!this.regexp_eatGroupName(state)) { state.raise("Invalid group"); }
          var trackDisjunction = this.options.ecmaVersion >= 16;
          var known = state.groupNames[state.lastStringValue];
          if (known) {
            if (trackDisjunction) {
              for (var i = 0, list = known; i < list.length; i += 1) {
                var altID = list[i];

                if (!altID.separatedFrom(state.branchID))
                  { state.raise("Duplicate capture group name"); }
              }
            } else {
              state.raise("Duplicate capture group name");
            }
          }
          if (trackDisjunction) {
            (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID);
          } else {
            state.groupNames[state.lastStringValue] = true;
          }
        }
      };

      // GroupName ::
      //   `<` RegExpIdentifierName `>`
      // Note: this updates `state.lastStringValue` property with the eaten name.
      pp$1.regexp_eatGroupName = function(state) {
        state.lastStringValue = "";
        if (state.eat(0x3C /* < */)) {
          if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
            return true
          }
          state.raise("Invalid capture group name");
        }
        return false
      };

      // RegExpIdentifierName ::
      //   RegExpIdentifierStart
      //   RegExpIdentifierName RegExpIdentifierPart
      // Note: this updates `state.lastStringValue` property with the eaten name.
      pp$1.regexp_eatRegExpIdentifierName = function(state) {
        state.lastStringValue = "";
        if (this.regexp_eatRegExpIdentifierStart(state)) {
          state.lastStringValue += codePointToString(state.lastIntValue);
          while (this.regexp_eatRegExpIdentifierPart(state)) {
            state.lastStringValue += codePointToString(state.lastIntValue);
          }
          return true
        }
        return false
      };

      // RegExpIdentifierStart ::
      //   UnicodeIDStart
      //   `$`
      //   `_`
      //   `\` RegExpUnicodeEscapeSequence[+U]
      pp$1.regexp_eatRegExpIdentifierStart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);

        if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierStart(ch)) {
          state.lastIntValue = ch;
          return true
        }

        state.pos = start;
        return false
      };
      function isRegExpIdentifierStart(ch) {
        return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
      }

      // RegExpIdentifierPart ::
      //   UnicodeIDContinue
      //   `$`
      //   `_`
      //   `\` RegExpUnicodeEscapeSequence[+U]
      //   <ZWNJ>
      //   <ZWJ>
      pp$1.regexp_eatRegExpIdentifierPart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);

        if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierPart(ch)) {
          state.lastIntValue = ch;
          return true
        }

        state.pos = start;
        return false
      };
      function isRegExpIdentifierPart(ch) {
        return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
      pp$1.regexp_eatAtomEscape = function(state) {
        if (
          this.regexp_eatBackReference(state) ||
          this.regexp_eatCharacterClassEscape(state) ||
          this.regexp_eatCharacterEscape(state) ||
          (state.switchN && this.regexp_eatKGroupName(state))
        ) {
          return true
        }
        if (state.switchU) {
          // Make the same message as V8.
          if (state.current() === 0x63 /* c */) {
            state.raise("Invalid unicode escape");
          }
          state.raise("Invalid escape");
        }
        return false
      };
      pp$1.regexp_eatBackReference = function(state) {
        var start = state.pos;
        if (this.regexp_eatDecimalEscape(state)) {
          var n = state.lastIntValue;
          if (state.switchU) {
            // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
            if (n > state.maxBackReference) {
              state.maxBackReference = n;
            }
            return true
          }
          if (n <= state.numCapturingParens) {
            return true
          }
          state.pos = start;
        }
        return false
      };
      pp$1.regexp_eatKGroupName = function(state) {
        if (state.eat(0x6B /* k */)) {
          if (this.regexp_eatGroupName(state)) {
            state.backReferenceNames.push(state.lastStringValue);
            return true
          }
          state.raise("Invalid named reference");
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
      pp$1.regexp_eatCharacterEscape = function(state) {
        return (
          this.regexp_eatControlEscape(state) ||
          this.regexp_eatCControlLetter(state) ||
          this.regexp_eatZero(state) ||
          this.regexp_eatHexEscapeSequence(state) ||
          this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
          (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
          this.regexp_eatIdentityEscape(state)
        )
      };
      pp$1.regexp_eatCControlLetter = function(state) {
        var start = state.pos;
        if (state.eat(0x63 /* c */)) {
          if (this.regexp_eatControlLetter(state)) {
            return true
          }
          state.pos = start;
        }
        return false
      };
      pp$1.regexp_eatZero = function(state) {
        if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
          state.lastIntValue = 0;
          state.advance();
          return true
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
      pp$1.regexp_eatControlEscape = function(state) {
        var ch = state.current();
        if (ch === 0x74 /* t */) {
          state.lastIntValue = 0x09; /* \t */
          state.advance();
          return true
        }
        if (ch === 0x6E /* n */) {
          state.lastIntValue = 0x0A; /* \n */
          state.advance();
          return true
        }
        if (ch === 0x76 /* v */) {
          state.lastIntValue = 0x0B; /* \v */
          state.advance();
          return true
        }
        if (ch === 0x66 /* f */) {
          state.lastIntValue = 0x0C; /* \f */
          state.advance();
          return true
        }
        if (ch === 0x72 /* r */) {
          state.lastIntValue = 0x0D; /* \r */
          state.advance();
          return true
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
      pp$1.regexp_eatControlLetter = function(state) {
        var ch = state.current();
        if (isControlLetter(ch)) {
          state.lastIntValue = ch % 0x20;
          state.advance();
          return true
        }
        return false
      };
      function isControlLetter(ch) {
        return (
          (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
          (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
        )
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
      pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
        if ( forceU === void 0 ) forceU = false;

        var start = state.pos;
        var switchU = forceU || state.switchU;

        if (state.eat(0x75 /* u */)) {
          if (this.regexp_eatFixedHexDigits(state, 4)) {
            var lead = state.lastIntValue;
            if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
              var leadSurrogateEnd = state.pos;
              if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
                var trail = state.lastIntValue;
                if (trail >= 0xDC00 && trail <= 0xDFFF) {
                  state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
                  return true
                }
              }
              state.pos = leadSurrogateEnd;
              state.lastIntValue = lead;
            }
            return true
          }
          if (
            switchU &&
            state.eat(0x7B /* { */) &&
            this.regexp_eatHexDigits(state) &&
            state.eat(0x7D /* } */) &&
            isValidUnicode(state.lastIntValue)
          ) {
            return true
          }
          if (switchU) {
            state.raise("Invalid unicode escape");
          }
          state.pos = start;
        }

        return false
      };
      function isValidUnicode(ch) {
        return ch >= 0 && ch <= 0x10FFFF
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
      pp$1.regexp_eatIdentityEscape = function(state) {
        if (state.switchU) {
          if (this.regexp_eatSyntaxCharacter(state)) {
            return true
          }
          if (state.eat(0x2F /* / */)) {
            state.lastIntValue = 0x2F; /* / */
            return true
          }
          return false
        }

        var ch = state.current();
        if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
          state.lastIntValue = ch;
          state.advance();
          return true
        }

        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
      pp$1.regexp_eatDecimalEscape = function(state) {
        state.lastIntValue = 0;
        var ch = state.current();
        if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
          do {
            state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
            state.advance();
          } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
          return true
        }
        return false
      };

      // Return values used by character set parsing methods, needed to
      // forbid negation of sets that can match strings.
      var CharSetNone = 0; // Nothing parsed
      var CharSetOk = 1; // Construct parsed, cannot contain strings
      var CharSetString = 2; // Construct parsed, can contain strings

      // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
      pp$1.regexp_eatCharacterClassEscape = function(state) {
        var ch = state.current();

        if (isCharacterClassEscape(ch)) {
          state.lastIntValue = -1;
          state.advance();
          return CharSetOk
        }

        var negate = false;
        if (
          state.switchU &&
          this.options.ecmaVersion >= 9 &&
          ((negate = ch === 0x50 /* P */) || ch === 0x70 /* p */)
        ) {
          state.lastIntValue = -1;
          state.advance();
          var result;
          if (
            state.eat(0x7B /* { */) &&
            (result = this.regexp_eatUnicodePropertyValueExpression(state)) &&
            state.eat(0x7D /* } */)
          ) {
            if (negate && result === CharSetString) { state.raise("Invalid property name"); }
            return result
          }
          state.raise("Invalid property name");
        }

        return CharSetNone
      };

      function isCharacterClassEscape(ch) {
        return (
          ch === 0x64 /* d */ ||
          ch === 0x44 /* D */ ||
          ch === 0x73 /* s */ ||
          ch === 0x53 /* S */ ||
          ch === 0x77 /* w */ ||
          ch === 0x57 /* W */
        )
      }

      // UnicodePropertyValueExpression ::
      //   UnicodePropertyName `=` UnicodePropertyValue
      //   LoneUnicodePropertyNameOrValue
      pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
        var start = state.pos;

        // UnicodePropertyName `=` UnicodePropertyValue
        if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
          var name = state.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(state)) {
            var value = state.lastStringValue;
            this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
            return CharSetOk
          }
        }
        state.pos = start;

        // LoneUnicodePropertyNameOrValue
        if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
          var nameOrValue = state.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue)
        }
        return CharSetNone
      };

      pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
        if (!hasOwn(state.unicodeProperties.nonBinary, name))
          { state.raise("Invalid property name"); }
        if (!state.unicodeProperties.nonBinary[name].test(value))
          { state.raise("Invalid property value"); }
      };

      pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
        if (state.unicodeProperties.binary.test(nameOrValue)) { return CharSetOk }
        if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) { return CharSetString }
        state.raise("Invalid property name");
      };

      // UnicodePropertyName ::
      //   UnicodePropertyNameCharacters
      pp$1.regexp_eatUnicodePropertyName = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyNameCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== ""
      };

      function isUnicodePropertyNameCharacter(ch) {
        return isControlLetter(ch) || ch === 0x5F /* _ */
      }

      // UnicodePropertyValue ::
      //   UnicodePropertyValueCharacters
      pp$1.regexp_eatUnicodePropertyValue = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyValueCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== ""
      };
      function isUnicodePropertyValueCharacter(ch) {
        return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
      }

      // LoneUnicodePropertyNameOrValue ::
      //   UnicodePropertyValueCharacters
      pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
        return this.regexp_eatUnicodePropertyValue(state)
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
      pp$1.regexp_eatCharacterClass = function(state) {
        if (state.eat(0x5B /* [ */)) {
          var negate = state.eat(0x5E /* ^ */);
          var result = this.regexp_classContents(state);
          if (!state.eat(0x5D /* ] */))
            { state.raise("Unterminated character class"); }
          if (negate && result === CharSetString)
            { state.raise("Negated character class may contain strings"); }
          return true
        }
        return false
      };

      // https://tc39.es/ecma262/#prod-ClassContents
      // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
      pp$1.regexp_classContents = function(state) {
        if (state.current() === 0x5D /* ] */) { return CharSetOk }
        if (state.switchV) { return this.regexp_classSetExpression(state) }
        this.regexp_nonEmptyClassRanges(state);
        return CharSetOk
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
      // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
      pp$1.regexp_nonEmptyClassRanges = function(state) {
        while (this.regexp_eatClassAtom(state)) {
          var left = state.lastIntValue;
          if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
            var right = state.lastIntValue;
            if (state.switchU && (left === -1 || right === -1)) {
              state.raise("Invalid character class");
            }
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
          }
        }
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
      // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
      pp$1.regexp_eatClassAtom = function(state) {
        var start = state.pos;

        if (state.eat(0x5C /* \ */)) {
          if (this.regexp_eatClassEscape(state)) {
            return true
          }
          if (state.switchU) {
            // Make the same message as V8.
            var ch$1 = state.current();
            if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
              state.raise("Invalid class escape");
            }
            state.raise("Invalid escape");
          }
          state.pos = start;
        }

        var ch = state.current();
        if (ch !== 0x5D /* ] */) {
          state.lastIntValue = ch;
          state.advance();
          return true
        }

        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
      pp$1.regexp_eatClassEscape = function(state) {
        var start = state.pos;

        if (state.eat(0x62 /* b */)) {
          state.lastIntValue = 0x08; /* <BS> */
          return true
        }

        if (state.switchU && state.eat(0x2D /* - */)) {
          state.lastIntValue = 0x2D; /* - */
          return true
        }

        if (!state.switchU && state.eat(0x63 /* c */)) {
          if (this.regexp_eatClassControlLetter(state)) {
            return true
          }
          state.pos = start;
        }

        return (
          this.regexp_eatCharacterClassEscape(state) ||
          this.regexp_eatCharacterEscape(state)
        )
      };

      // https://tc39.es/ecma262/#prod-ClassSetExpression
      // https://tc39.es/ecma262/#prod-ClassUnion
      // https://tc39.es/ecma262/#prod-ClassIntersection
      // https://tc39.es/ecma262/#prod-ClassSubtraction
      pp$1.regexp_classSetExpression = function(state) {
        var result = CharSetOk, subResult;
        if (this.regexp_eatClassSetRange(state)) ; else if (subResult = this.regexp_eatClassSetOperand(state)) {
          if (subResult === CharSetString) { result = CharSetString; }
          // https://tc39.es/ecma262/#prod-ClassIntersection
          var start = state.pos;
          while (state.eatChars([0x26, 0x26] /* && */)) {
            if (
              state.current() !== 0x26 /* & */ &&
              (subResult = this.regexp_eatClassSetOperand(state))
            ) {
              if (subResult !== CharSetString) { result = CharSetOk; }
              continue
            }
            state.raise("Invalid character in character class");
          }
          if (start !== state.pos) { return result }
          // https://tc39.es/ecma262/#prod-ClassSubtraction
          while (state.eatChars([0x2D, 0x2D] /* -- */)) {
            if (this.regexp_eatClassSetOperand(state)) { continue }
            state.raise("Invalid character in character class");
          }
          if (start !== state.pos) { return result }
        } else {
          state.raise("Invalid character in character class");
        }
        // https://tc39.es/ecma262/#prod-ClassUnion
        for (;;) {
          if (this.regexp_eatClassSetRange(state)) { continue }
          subResult = this.regexp_eatClassSetOperand(state);
          if (!subResult) { return result }
          if (subResult === CharSetString) { result = CharSetString; }
        }
      };

      // https://tc39.es/ecma262/#prod-ClassSetRange
      pp$1.regexp_eatClassSetRange = function(state) {
        var start = state.pos;
        if (this.regexp_eatClassSetCharacter(state)) {
          var left = state.lastIntValue;
          if (state.eat(0x2D /* - */) && this.regexp_eatClassSetCharacter(state)) {
            var right = state.lastIntValue;
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
            return true
          }
          state.pos = start;
        }
        return false
      };

      // https://tc39.es/ecma262/#prod-ClassSetOperand
      pp$1.regexp_eatClassSetOperand = function(state) {
        if (this.regexp_eatClassSetCharacter(state)) { return CharSetOk }
        return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state)
      };

      // https://tc39.es/ecma262/#prod-NestedClass
      pp$1.regexp_eatNestedClass = function(state) {
        var start = state.pos;
        if (state.eat(0x5B /* [ */)) {
          var negate = state.eat(0x5E /* ^ */);
          var result = this.regexp_classContents(state);
          if (state.eat(0x5D /* ] */)) {
            if (negate && result === CharSetString) {
              state.raise("Negated character class may contain strings");
            }
            return result
          }
          state.pos = start;
        }
        if (state.eat(0x5C /* \ */)) {
          var result$1 = this.regexp_eatCharacterClassEscape(state);
          if (result$1) {
            return result$1
          }
          state.pos = start;
        }
        return null
      };

      // https://tc39.es/ecma262/#prod-ClassStringDisjunction
      pp$1.regexp_eatClassStringDisjunction = function(state) {
        var start = state.pos;
        if (state.eatChars([0x5C, 0x71] /* \q */)) {
          if (state.eat(0x7B /* { */)) {
            var result = this.regexp_classStringDisjunctionContents(state);
            if (state.eat(0x7D /* } */)) {
              return result
            }
          } else {
            // Make the same message as V8.
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return null
      };

      // https://tc39.es/ecma262/#prod-ClassStringDisjunctionContents
      pp$1.regexp_classStringDisjunctionContents = function(state) {
        var result = this.regexp_classString(state);
        while (state.eat(0x7C /* | */)) {
          if (this.regexp_classString(state) === CharSetString) { result = CharSetString; }
        }
        return result
      };

      // https://tc39.es/ecma262/#prod-ClassString
      // https://tc39.es/ecma262/#prod-NonEmptyClassString
      pp$1.regexp_classString = function(state) {
        var count = 0;
        while (this.regexp_eatClassSetCharacter(state)) { count++; }
        return count === 1 ? CharSetOk : CharSetString
      };

      // https://tc39.es/ecma262/#prod-ClassSetCharacter
      pp$1.regexp_eatClassSetCharacter = function(state) {
        var start = state.pos;
        if (state.eat(0x5C /* \ */)) {
          if (
            this.regexp_eatCharacterEscape(state) ||
            this.regexp_eatClassSetReservedPunctuator(state)
          ) {
            return true
          }
          if (state.eat(0x62 /* b */)) {
            state.lastIntValue = 0x08; /* <BS> */
            return true
          }
          state.pos = start;
          return false
        }
        var ch = state.current();
        if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) { return false }
        if (isClassSetSyntaxCharacter(ch)) { return false }
        state.advance();
        state.lastIntValue = ch;
        return true
      };

      // https://tc39.es/ecma262/#prod-ClassSetReservedDoublePunctuator
      function isClassSetReservedDoublePunctuatorCharacter(ch) {
        return (
          ch === 0x21 /* ! */ ||
          ch >= 0x23 /* # */ && ch <= 0x26 /* & */ ||
          ch >= 0x2A /* * */ && ch <= 0x2C /* , */ ||
          ch === 0x2E /* . */ ||
          ch >= 0x3A /* : */ && ch <= 0x40 /* @ */ ||
          ch === 0x5E /* ^ */ ||
          ch === 0x60 /* ` */ ||
          ch === 0x7E /* ~ */
        )
      }

      // https://tc39.es/ecma262/#prod-ClassSetSyntaxCharacter
      function isClassSetSyntaxCharacter(ch) {
        return (
          ch === 0x28 /* ( */ ||
          ch === 0x29 /* ) */ ||
          ch === 0x2D /* - */ ||
          ch === 0x2F /* / */ ||
          ch >= 0x5B /* [ */ && ch <= 0x5D /* ] */ ||
          ch >= 0x7B /* { */ && ch <= 0x7D /* } */
        )
      }

      // https://tc39.es/ecma262/#prod-ClassSetReservedPunctuator
      pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
        var ch = state.current();
        if (isClassSetReservedPunctuator(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true
        }
        return false
      };

      // https://tc39.es/ecma262/#prod-ClassSetReservedPunctuator
      function isClassSetReservedPunctuator(ch) {
        return (
          ch === 0x21 /* ! */ ||
          ch === 0x23 /* # */ ||
          ch === 0x25 /* % */ ||
          ch === 0x26 /* & */ ||
          ch === 0x2C /* , */ ||
          ch === 0x2D /* - */ ||
          ch >= 0x3A /* : */ && ch <= 0x3E /* > */ ||
          ch === 0x40 /* @ */ ||
          ch === 0x60 /* ` */ ||
          ch === 0x7E /* ~ */
        )
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
      pp$1.regexp_eatClassControlLetter = function(state) {
        var ch = state.current();
        if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
          state.lastIntValue = ch % 0x20;
          state.advance();
          return true
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
      pp$1.regexp_eatHexEscapeSequence = function(state) {
        var start = state.pos;
        if (state.eat(0x78 /* x */)) {
          if (this.regexp_eatFixedHexDigits(state, 2)) {
            return true
          }
          if (state.switchU) {
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
      pp$1.regexp_eatDecimalDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isDecimalDigit(ch = state.current())) {
          state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
          state.advance();
        }
        return state.pos !== start
      };
      function isDecimalDigit(ch) {
        return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
      pp$1.regexp_eatHexDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isHexDigit(ch = state.current())) {
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return state.pos !== start
      };
      function isHexDigit(ch) {
        return (
          (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
          (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
          (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
        )
      }
      function hexToInt(ch) {
        if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
          return 10 + (ch - 0x41 /* A */)
        }
        if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
          return 10 + (ch - 0x61 /* a */)
        }
        return ch - 0x30 /* 0 */
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
      // Allows only 0-377(octal) i.e. 0-255(decimal).
      pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
        if (this.regexp_eatOctalDigit(state)) {
          var n1 = state.lastIntValue;
          if (this.regexp_eatOctalDigit(state)) {
            var n2 = state.lastIntValue;
            if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
              state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
            } else {
              state.lastIntValue = n1 * 8 + n2;
            }
          } else {
            state.lastIntValue = n1;
          }
          return true
        }
        return false
      };

      // https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
      pp$1.regexp_eatOctalDigit = function(state) {
        var ch = state.current();
        if (isOctalDigit(ch)) {
          state.lastIntValue = ch - 0x30; /* 0 */
          state.advance();
          return true
        }
        state.lastIntValue = 0;
        return false
      };
      function isOctalDigit(ch) {
        return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
      }

      // https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
      // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
      // And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
      pp$1.regexp_eatFixedHexDigits = function(state, length) {
        var start = state.pos;
        state.lastIntValue = 0;
        for (var i = 0; i < length; ++i) {
          var ch = state.current();
          if (!isHexDigit(ch)) {
            state.pos = start;
            return false
          }
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return true
      };

      // Object type used to represent tokens. Note that normally, tokens
      // simply exist as properties on the parser object. This is only
      // used for the onToken callback and the external tokenizer.

      var Token = function Token(p) {
        this.type = p.type;
        this.value = p.value;
        this.start = p.start;
        this.end = p.end;
        if (p.options.locations)
          { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
        if (p.options.ranges)
          { this.range = [p.start, p.end]; }
      };

      // ## Tokenizer

      var pp = Parser.prototype;

      // Move to the next token

      pp.next = function(ignoreEscapeSequenceInKeyword) {
        if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
          { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
        if (this.options.onToken)
          { this.options.onToken(new Token(this)); }

        this.lastTokEnd = this.end;
        this.lastTokStart = this.start;
        this.lastTokEndLoc = this.endLoc;
        this.lastTokStartLoc = this.startLoc;
        this.nextToken();
      };

      pp.getToken = function() {
        this.next();
        return new Token(this)
      };

      // If we're in an ES6 environment, make parsers iterable
      if (typeof Symbol !== "undefined")
        { pp[Symbol.iterator] = function() {
          var this$1$1 = this;

          return {
            next: function () {
              var token = this$1$1.getToken();
              return {
                done: token.type === types$1.eof,
                value: token
              }
            }
          }
        }; }

      // Toggle strict mode. Re-reads the next number or string to please
      // pedantic tests (`"use strict"; 010;` should fail).

      // Read a single token, updating the parser object's token-related
      // properties.

      pp.nextToken = function() {
        var curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

        this.start = this.pos;
        if (this.options.locations) { this.startLoc = this.curPosition(); }
        if (this.pos >= this.input.length) { return this.finishToken(types$1.eof) }

        if (curContext.override) { return curContext.override(this) }
        else { this.readToken(this.fullCharCodeAtPos()); }
      };

      pp.readToken = function(code) {
        // Identifier or keyword. '\uXXXX' sequences are allowed in
        // identifiers, so '\' also dispatches to that.
        if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
          { return this.readWord() }

        return this.getTokenFromCode(code)
      };

      pp.fullCharCodeAt = function(pos) {
        var code = this.input.charCodeAt(pos);
        if (code <= 0xd7ff || code >= 0xdc00) { return code }
        var next = this.input.charCodeAt(pos + 1);
        return next <= 0xdbff || next >= 0xe000 ? code : (code << 10) + next - 0x35fdc00
      };

      pp.fullCharCodeAtPos = function() {
        return this.fullCharCodeAt(this.pos)
      };

      pp.skipBlockComment = function() {
        var startLoc = this.options.onComment && this.curPosition();
        var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
        if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
        this.pos = end + 2;
        if (this.options.locations) {
          for (var nextBreak = (void 0), pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
            ++this.curLine;
            pos = this.lineStart = nextBreak;
          }
        }
        if (this.options.onComment)
          { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                                 startLoc, this.curPosition()); }
      };

      pp.skipLineComment = function(startSkip) {
        var start = this.pos;
        var startLoc = this.options.onComment && this.curPosition();
        var ch = this.input.charCodeAt(this.pos += startSkip);
        while (this.pos < this.input.length && !isNewLine(ch)) {
          ch = this.input.charCodeAt(++this.pos);
        }
        if (this.options.onComment)
          { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                                 startLoc, this.curPosition()); }
      };

      // Called at the start of the parse and after every token. Skips
      // whitespace and comments, and.

      pp.skipSpace = function() {
        loop: while (this.pos < this.input.length) {
          var ch = this.input.charCodeAt(this.pos);
          switch (ch) {
          case 32: case 160: // ' '
            ++this.pos;
            break
          case 13:
            if (this.input.charCodeAt(this.pos + 1) === 10) {
              ++this.pos;
            }
          case 10: case 8232: case 8233:
            ++this.pos;
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            break
          case 47: // '/'
            switch (this.input.charCodeAt(this.pos + 1)) {
            case 42: // '*'
              this.skipBlockComment();
              break
            case 47:
              this.skipLineComment(2);
              break
            default:
              break loop
            }
            break
          default:
            if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
              ++this.pos;
            } else {
              break loop
            }
          }
        }
      };

      // Called at the end of every token. Sets `end`, `val`, and
      // maintains `context` and `exprAllowed`, and skips the space after
      // the token, so that the next one's `start` will point at the
      // right position.

      pp.finishToken = function(type, val) {
        this.end = this.pos;
        if (this.options.locations) { this.endLoc = this.curPosition(); }
        var prevType = this.type;
        this.type = type;
        this.value = val;

        this.updateContext(prevType);
      };

      // ### Token reading

      // This is the function that is called to fetch the next token. It
      // is somewhat obscure, because it works in character codes rather
      // than characters, and because operator parsing has been inlined
      // into it.
      //
      // All in the name of speed.
      //
      pp.readToken_dot = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next >= 48 && next <= 57) { return this.readNumber(true) }
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
          this.pos += 3;
          return this.finishToken(types$1.ellipsis)
        } else {
          ++this.pos;
          return this.finishToken(types$1.dot)
        }
      };

      pp.readToken_slash = function() { // '/'
        var next = this.input.charCodeAt(this.pos + 1);
        if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
        if (next === 61) { return this.finishOp(types$1.assign, 2) }
        return this.finishOp(types$1.slash, 1)
      };

      pp.readToken_mult_modulo_exp = function(code) { // '%*'
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        var tokentype = code === 42 ? types$1.star : types$1.modulo;

        // exponentiation operator ** and **=
        if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
          ++size;
          tokentype = types$1.starstar;
          next = this.input.charCodeAt(this.pos + 2);
        }

        if (next === 61) { return this.finishOp(types$1.assign, size + 1) }
        return this.finishOp(tokentype, size)
      };

      pp.readToken_pipe_amp = function(code) { // '|&'
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (this.options.ecmaVersion >= 12) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 === 61) { return this.finishOp(types$1.assign, 3) }
          }
          return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2)
        }
        if (next === 61) { return this.finishOp(types$1.assign, 2) }
        return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1)
      };

      pp.readToken_caret = function() { // '^'
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) { return this.finishOp(types$1.assign, 2) }
        return this.finishOp(types$1.bitwiseXOR, 1)
      };

      pp.readToken_plus_min = function(code) { // '+-'
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
              (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
            // A `-->` line comment
            this.skipLineComment(3);
            this.skipSpace();
            return this.nextToken()
          }
          return this.finishOp(types$1.incDec, 2)
        }
        if (next === 61) { return this.finishOp(types$1.assign, 2) }
        return this.finishOp(types$1.plusMin, 1)
      };

      pp.readToken_lt_gt = function(code) { // '<>'
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        if (next === code) {
          size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types$1.assign, size + 1) }
          return this.finishOp(types$1.bitShift, size)
        }
        if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
            this.input.charCodeAt(this.pos + 3) === 45) {
          // `<!--`, an XML-style comment that should be interpreted as a line comment
          this.skipLineComment(4);
          this.skipSpace();
          return this.nextToken()
        }
        if (next === 61) { size = 2; }
        return this.finishOp(types$1.relational, size)
      };

      pp.readToken_eq_excl = function(code) { // '=!'
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) { return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
        if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
          this.pos += 2;
          return this.finishToken(types$1.arrow)
        }
        return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1)
      };

      pp.readToken_question = function() { // '?'
        var ecmaVersion = this.options.ecmaVersion;
        if (ecmaVersion >= 11) {
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 46) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 < 48 || next2 > 57) { return this.finishOp(types$1.questionDot, 2) }
          }
          if (next === 63) {
            if (ecmaVersion >= 12) {
              var next2$1 = this.input.charCodeAt(this.pos + 2);
              if (next2$1 === 61) { return this.finishOp(types$1.assign, 3) }
            }
            return this.finishOp(types$1.coalesce, 2)
          }
        }
        return this.finishOp(types$1.question, 1)
      };

      pp.readToken_numberSign = function() { // '#'
        var ecmaVersion = this.options.ecmaVersion;
        var code = 35; // '#'
        if (ecmaVersion >= 13) {
          ++this.pos;
          code = this.fullCharCodeAtPos();
          if (isIdentifierStart(code, true) || code === 92 /* '\' */) {
            return this.finishToken(types$1.privateId, this.readWord1())
          }
        }

        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };

      pp.getTokenFromCode = function(code) {
        switch (code) {
        // The interpretation of a dot depends on whether it is followed
        // by a digit or another two dots.
        case 46: // '.'
          return this.readToken_dot()

        // Punctuation tokens.
        case 40: ++this.pos; return this.finishToken(types$1.parenL)
        case 41: ++this.pos; return this.finishToken(types$1.parenR)
        case 59: ++this.pos; return this.finishToken(types$1.semi)
        case 44: ++this.pos; return this.finishToken(types$1.comma)
        case 91: ++this.pos; return this.finishToken(types$1.bracketL)
        case 93: ++this.pos; return this.finishToken(types$1.bracketR)
        case 123: ++this.pos; return this.finishToken(types$1.braceL)
        case 125: ++this.pos; return this.finishToken(types$1.braceR)
        case 58: ++this.pos; return this.finishToken(types$1.colon)

        case 96: // '`'
          if (this.options.ecmaVersion < 6) { break }
          ++this.pos;
          return this.finishToken(types$1.backQuote)

        case 48: // '0'
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
          if (this.options.ecmaVersion >= 6) {
            if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
            if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
          }

        // Anything else beginning with a digit is an integer, octal
        // number, or float.
        case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
          return this.readNumber(false)

        // Quotes produce strings.
        case 34: case 39: // '"', "'"
          return this.readString(code)

        // Operators are parsed inline in tiny state machines. '=' (61) is
        // often referred to. `finishOp` simply skips the amount of
        // characters it is given as second argument, and returns a token
        // of the type given by its first argument.
        case 47: // '/'
          return this.readToken_slash()

        case 37: case 42: // '%*'
          return this.readToken_mult_modulo_exp(code)

        case 124: case 38: // '|&'
          return this.readToken_pipe_amp(code)

        case 94: // '^'
          return this.readToken_caret()

        case 43: case 45: // '+-'
          return this.readToken_plus_min(code)

        case 60: case 62: // '<>'
          return this.readToken_lt_gt(code)

        case 61: case 33: // '=!'
          return this.readToken_eq_excl(code)

        case 63: // '?'
          return this.readToken_question()

        case 126: // '~'
          return this.finishOp(types$1.prefix, 1)

        case 35: // '#'
          return this.readToken_numberSign()
        }

        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };

      pp.finishOp = function(type, size) {
        var str = this.input.slice(this.pos, this.pos + size);
        this.pos += size;
        return this.finishToken(type, str)
      };

      pp.readRegexp = function() {
        var escaped, inClass, start = this.pos;
        for (;;) {
          if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
          var ch = this.input.charAt(this.pos);
          if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
          if (!escaped) {
            if (ch === "[") { inClass = true; }
            else if (ch === "]" && inClass) { inClass = false; }
            else if (ch === "/" && !inClass) { break }
            escaped = ch === "\\";
          } else { escaped = false; }
          ++this.pos;
        }
        var pattern = this.input.slice(start, this.pos);
        ++this.pos;
        var flagsStart = this.pos;
        var flags = this.readWord1();
        if (this.containsEsc) { this.unexpected(flagsStart); }

        // Validate pattern
        var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
        state.reset(start, pattern, flags);
        this.validateRegExpFlags(state);
        this.validateRegExpPattern(state);

        // Create Literal#value property value.
        var value = null;
        try {
          value = new RegExp(pattern, flags);
        } catch (e) {
          // ESTree requires null if it failed to instantiate RegExp object.
          // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
        }

        return this.finishToken(types$1.regexp, {pattern: pattern, flags: flags, value: value})
      };

      // Read an integer in the given radix. Return null if zero digits
      // were read, the integer value otherwise. When `len` is given, this
      // will return `null` unless the integer has exactly `len` digits.

      pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
        // `len` is used for character escape sequences. In that case, disallow separators.
        var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

        // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
        // and isn't fraction part nor exponent part. In that case, if the first digit
        // is zero then disallow separators.
        var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

        var start = this.pos, total = 0, lastCode = 0;
        for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
          var code = this.input.charCodeAt(this.pos), val = (void 0);

          if (allowSeparators && code === 95) {
            if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
            if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
            if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
            lastCode = code;
            continue
          }

          if (code >= 97) { val = code - 97 + 10; } // a
          else if (code >= 65) { val = code - 65 + 10; } // A
          else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
          else { val = Infinity; }
          if (val >= radix) { break }
          lastCode = code;
          total = total * radix + val;
        }

        if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
        if (this.pos === start || len != null && this.pos - start !== len) { return null }

        return total
      };

      function stringToNumber(str, isLegacyOctalNumericLiteral) {
        if (isLegacyOctalNumericLiteral) {
          return parseInt(str, 8)
        }

        // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
        return parseFloat(str.replace(/_/g, ""))
      }

      function stringToBigInt(str) {
        if (typeof BigInt !== "function") {
          return null
        }

        // `BigInt(value)` throws syntax error if the string contains numeric separators.
        return BigInt(str.replace(/_/g, ""))
      }

      pp.readRadixNumber = function(radix) {
        var start = this.pos;
        this.pos += 2; // 0x
        var val = this.readInt(radix);
        if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
        if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
          val = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
        } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
        return this.finishToken(types$1.num, val)
      };

      // Read an integer, octal integer, or floating-point number.

      pp.readNumber = function(startsWithDot) {
        var start = this.pos;
        if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
        var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (octal && this.strict) { this.raise(start, "Invalid number"); }
        var next = this.input.charCodeAt(this.pos);
        if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
          var val$1 = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
          if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
          return this.finishToken(types$1.num, val$1)
        }
        if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
        if (next === 46 && !octal) { // '.'
          ++this.pos;
          this.readInt(10);
          next = this.input.charCodeAt(this.pos);
        }
        if ((next === 69 || next === 101) && !octal) { // 'eE'
          next = this.input.charCodeAt(++this.pos);
          if (next === 43 || next === 45) { ++this.pos; } // '+-'
          if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
        }
        if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

        var val = stringToNumber(this.input.slice(start, this.pos), octal);
        return this.finishToken(types$1.num, val)
      };

      // Read a string value, interpreting backslash-escapes.

      pp.readCodePoint = function() {
        var ch = this.input.charCodeAt(this.pos), code;

        if (ch === 123) { // '{'
          if (this.options.ecmaVersion < 6) { this.unexpected(); }
          var codePos = ++this.pos;
          code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
          ++this.pos;
          if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
        } else {
          code = this.readHexChar(4);
        }
        return code
      };

      pp.readString = function(quote) {
        var out = "", chunkStart = ++this.pos;
        for (;;) {
          if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === quote) { break }
          if (ch === 92) { // '\'
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(false);
            chunkStart = this.pos;
          } else if (ch === 0x2028 || ch === 0x2029) {
            if (this.options.ecmaVersion < 10) { this.raise(this.start, "Unterminated string constant"); }
            ++this.pos;
            if (this.options.locations) {
              this.curLine++;
              this.lineStart = this.pos;
            }
          } else {
            if (isNewLine(ch)) { this.raise(this.start, "Unterminated string constant"); }
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(types$1.string, out)
      };

      // Reads template string tokens.

      var INVALID_TEMPLATE_ESCAPE_ERROR = {};

      pp.tryReadTemplateToken = function() {
        this.inTemplateElement = true;
        try {
          this.readTmplToken();
        } catch (err) {
          if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
            this.readInvalidTemplateToken();
          } else {
            throw err
          }
        }

        this.inTemplateElement = false;
      };

      pp.invalidStringToken = function(position, message) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
          throw INVALID_TEMPLATE_ESCAPE_ERROR
        } else {
          this.raise(position, message);
        }
      };

      pp.readTmplToken = function() {
        var out = "", chunkStart = this.pos;
        for (;;) {
          if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
            if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
              if (ch === 36) {
                this.pos += 2;
                return this.finishToken(types$1.dollarBraceL)
              } else {
                ++this.pos;
                return this.finishToken(types$1.backQuote)
              }
            }
            out += this.input.slice(chunkStart, this.pos);
            return this.finishToken(types$1.template, out)
          }
          if (ch === 92) { // '\'
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(true);
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            ++this.pos;
            switch (ch) {
            case 13:
              if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
            case 10:
              out += "\n";
              break
            default:
              out += String.fromCharCode(ch);
              break
            }
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
      };

      // Reads a template token to search for the end, without validating any escape sequences
      pp.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) {
          switch (this.input[this.pos]) {
          case "\\":
            ++this.pos;
            break

          case "$":
            if (this.input[this.pos + 1] !== "{") { break }
            // fall through
          case "`":
            return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos))

          case "\r":
            if (this.input[this.pos + 1] === "\n") { ++this.pos; }
            // fall through
          case "\n": case "\u2028": case "\u2029":
            ++this.curLine;
            this.lineStart = this.pos + 1;
            break
          }
        }
        this.raise(this.start, "Unterminated template");
      };

      // Used to read escaped characters

      pp.readEscapedChar = function(inTemplate) {
        var ch = this.input.charCodeAt(++this.pos);
        ++this.pos;
        switch (ch) {
        case 110: return "\n" // 'n' -> '\n'
        case 114: return "\r" // 'r' -> '\r'
        case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
        case 117: return codePointToString(this.readCodePoint()) // 'u'
        case 116: return "\t" // 't' -> '\t'
        case 98: return "\b" // 'b' -> '\b'
        case 118: return "\u000b" // 'v' -> '\u000b'
        case 102: return "\f" // 'f' -> '\f'
        case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
        case 10: // ' \n'
          if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
          return ""
        case 56:
        case 57:
          if (this.strict) {
            this.invalidStringToken(
              this.pos - 1,
              "Invalid escape sequence"
            );
          }
          if (inTemplate) {
            var codePos = this.pos - 1;

            this.invalidStringToken(
              codePos,
              "Invalid escape sequence in template string"
            );
          }
        default:
          if (ch >= 48 && ch <= 55) {
            var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
            var octal = parseInt(octalStr, 8);
            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }
            this.pos += octalStr.length - 1;
            ch = this.input.charCodeAt(this.pos);
            if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
              this.invalidStringToken(
                this.pos - 1 - octalStr.length,
                inTemplate
                  ? "Octal literal in template string"
                  : "Octal literal in strict mode"
              );
            }
            return String.fromCharCode(octal)
          }
          if (isNewLine(ch)) {
            // Unicode new line characters after \ get removed from output in both
            // template literals and strings
            if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
            return ""
          }
          return String.fromCharCode(ch)
        }
      };

      // Used to read character escape sequences ('\x', '\u', '\U').

      pp.readHexChar = function(len) {
        var codePos = this.pos;
        var n = this.readInt(16, len);
        if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
        return n
      };

      // Read an identifier, and return it as a string. Sets `this.containsEsc`
      // to whether the word contained a '\u' escape.
      //
      // Incrementally adds only escaped chars, adding other chunks as-is
      // as a micro-optimization.

      pp.readWord1 = function() {
        this.containsEsc = false;
        var word = "", first = true, chunkStart = this.pos;
        var astral = this.options.ecmaVersion >= 6;
        while (this.pos < this.input.length) {
          var ch = this.fullCharCodeAtPos();
          if (isIdentifierChar(ch, astral)) {
            this.pos += ch <= 0xffff ? 1 : 2;
          } else if (ch === 92) { // "\"
            this.containsEsc = true;
            word += this.input.slice(chunkStart, this.pos);
            var escStart = this.pos;
            if (this.input.charCodeAt(++this.pos) !== 117) // "u"
              { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
            ++this.pos;
            var esc = this.readCodePoint();
            if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
              { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
            word += codePointToString(esc);
            chunkStart = this.pos;
          } else {
            break
          }
          first = false;
        }
        return word + this.input.slice(chunkStart, this.pos)
      };

      // Read an identifier or keyword token. Will check for reserved
      // words when necessary.

      pp.readWord = function() {
        var word = this.readWord1();
        var type = types$1.name;
        if (this.keywords.test(word)) {
          type = keywords[word];
        }
        return this.finishToken(type, word)
      };

      // Acorn is a tiny, fast JavaScript parser written in JavaScript.
      //
      // Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
      // various contributors and released under an MIT license.
      //
      // Git repositories for Acorn are available at
      //
      //     http://marijnhaverbeke.nl/git/acorn
      //     https://github.com/acornjs/acorn.git
      //
      // Please use the [github bug tracker][ghbt] to report issues.
      //
      // [ghbt]: https://github.com/acornjs/acorn/issues


      var version = "8.19.0";

      Parser.acorn = {
        Parser: Parser,
        version: version,
        defaultOptions: defaultOptions,
        Position: Position,
        SourceLocation: SourceLocation,
        getLineInfo: getLineInfo,
        Node: Node,
        TokenType: TokenType,
        tokTypes: types$1,
        keywordTypes: keywords,
        TokContext: TokContext,
        tokContexts: types,
        isIdentifierChar: isIdentifierChar,
        isIdentifierStart: isIdentifierStart,
        Token: Token,
        isNewLine: isNewLine,
        lineBreak: lineBreak,
        lineBreakG: lineBreakG,
        nonASCIIwhitespace: nonASCIIwhitespace
      };

      // The main exported interface (under `self.acorn` when in the
      // browser) is a `parse` function that takes a code string and returns
      // an abstract syntax tree as specified by the [ESTree spec][estree].
      //
      // [estree]: https://github.com/estree/estree

      function parse(input, options) {
        return Parser.parse(input, options)
      }

      // This function tries to parse a single expression at a given
      // offset in a string. Useful for parsing mixed-language formats
      // that embed JavaScript expressions.

      function parseExpressionAt(input, pos, options) {
        return Parser.parseExpressionAt(input, pos, options)
      }

      // Acorn is organized as a tokenizer and a recursive-descent parser.
      // The `tokenizer` export provides an interface to the tokenizer.

      function tokenizer(input, options) {
        return Parser.tokenizer(input, options)
      }

      exports.Node = Node;
      exports.Parser = Parser;
      exports.Position = Position;
      exports.SourceLocation = SourceLocation;
      exports.TokContext = TokContext;
      exports.Token = Token;
      exports.TokenType = TokenType;
      exports.defaultOptions = defaultOptions;
      exports.getLineInfo = getLineInfo;
      exports.isIdentifierChar = isIdentifierChar;
      exports.isIdentifierStart = isIdentifierStart;
      exports.isNewLine = isNewLine;
      exports.keywordTypes = keywords;
      exports.lineBreak = lineBreak;
      exports.lineBreakG = lineBreakG;
      exports.nonASCIIwhitespace = nonASCIIwhitespace;
      exports.parse = parse;
      exports.parseExpressionAt = parseExpressionAt;
      exports.tokContexts = types;
      exports.tokTypes = types$1;
      exports.tokenizer = tokenizer;
      exports.version = version;

    }));

    return module.exports;
    })();
    /* JSON5 2.2.3 - https://json5.org/
    MIT License

    Copyright (c) 2012-2018 Aseem Kishore, and [others].

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    [others]: https://github.com/json5/json5/contributors

    */
    var JSON5 = (function () {
      var module = { exports: {} };
      var exports = module.exports;
    !function(u,D){"object"==typeof exports&&"undefined"!=typeof module?module.exports=D():"function"==typeof define&&define.amd?define(D):u.JSON5=D()}(this,function(){"use strict";function u(u,D){return u(D={exports:{}},D.exports),D.exports}var D=u(function(u){var D=u.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=D)}),e=u(function(u){var D=u.exports={version:"2.6.5"};"number"==typeof __e&&(__e=D)}),r=(e.version,function(u){return"object"==typeof u?null!==u:"function"==typeof u}),t=function(u){if(!r(u))throw TypeError(u+" is not an object!");return u},n=function(u){try{return!!u()}catch(u){return!0}},F=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),C=D.document,A=r(C)&&r(C.createElement),i=!F&&!n(function(){return 7!=Object.defineProperty((u="div",A?C.createElement(u):{}),"a",{get:function(){return 7}}).a;var u}),E=Object.defineProperty,o={f:F?Object.defineProperty:function(u,D,e){if(t(u),D=function(u,D){if(!r(u))return u;var e,t;if(D&&"function"==typeof(e=u.toString)&&!r(t=e.call(u)))return t;if("function"==typeof(e=u.valueOf)&&!r(t=e.call(u)))return t;if(!D&&"function"==typeof(e=u.toString)&&!r(t=e.call(u)))return t;throw TypeError("Can't convert object to primitive value")}(D,!0),t(e),i)try{return E(u,D,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(u[D]=e.value),u}},a=F?function(u,D,e){return o.f(u,D,function(u,D){return{enumerable:!(1&u),configurable:!(2&u),writable:!(4&u),value:D}}(1,e))}:function(u,D,e){return u[D]=e,u},c={}.hasOwnProperty,B=function(u,D){return c.call(u,D)},s=0,f=Math.random(),l=u(function(u){var r=D["__core-js_shared__"]||(D["__core-js_shared__"]={});(u.exports=function(u,D){return r[u]||(r[u]=void 0!==D?D:{})})("versions",[]).push({version:e.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})("native-function-to-string",Function.toString),d=u(function(u){var r,t="Symbol(".concat(void 0===(r="src")?"":r,")_",(++s+f).toString(36)),n=(""+l).split("toString");e.inspectSource=function(u){return l.call(u)},(u.exports=function(u,e,r,F){var C="function"==typeof r;C&&(B(r,"name")||a(r,"name",e)),u[e]!==r&&(C&&(B(r,t)||a(r,t,u[e]?""+u[e]:n.join(String(e)))),u===D?u[e]=r:F?u[e]?u[e]=r:a(u,e,r):(delete u[e],a(u,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[t]||l.call(this)})}),v=function(u,D,e){if(function(u){if("function"!=typeof u)throw TypeError(u+" is not a function!")}(u),void 0===D)return u;switch(e){case 1:return function(e){return u.call(D,e)};case 2:return function(e,r){return u.call(D,e,r)};case 3:return function(e,r,t){return u.call(D,e,r,t)}}return function(){return u.apply(D,arguments)}},p=function(u,r,t){var n,F,C,A,i=u&p.F,E=u&p.G,o=u&p.S,c=u&p.P,B=u&p.B,s=E?D:o?D[r]||(D[r]={}):(D[r]||{}).prototype,f=E?e:e[r]||(e[r]={}),l=f.prototype||(f.prototype={});for(n in E&&(t=r),t)C=((F=!i&&s&&void 0!==s[n])?s:t)[n],A=B&&F?v(C,D):c&&"function"==typeof C?v(Function.call,C):C,s&&d(s,n,C,u&p.U),f[n]!=C&&a(f,n,A),c&&l[n]!=C&&(l[n]=C)};D.core=e,p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128;var h,m=p,g=Math.ceil,y=Math.floor,w=function(u){return isNaN(u=+u)?0:(u>0?y:g)(u)},b=(h=!1,function(u,D){var e,r,t=String(function(u){if(null==u)throw TypeError("Can't call method on  "+u);return u}(u)),n=w(D),F=t.length;return n<0||n>=F?h?"":void 0:(e=t.charCodeAt(n))<55296||e>56319||n+1===F||(r=t.charCodeAt(n+1))<56320||r>57343?h?t.charAt(n):e:h?t.slice(n,n+2):r-56320+(e-55296<<10)+65536});m(m.P,"String",{codePointAt:function(u){return b(this,u)}});e.String.codePointAt;var S=Math.max,x=Math.min,N=String.fromCharCode,P=String.fromCodePoint;m(m.S+m.F*(!!P&&1!=P.length),"String",{fromCodePoint:function(u){for(var D,e,r,t=arguments,n=[],F=arguments.length,C=0;F>C;){if(D=+t[C++],r=1114111,((e=w(e=D))<0?S(e+r,0):x(e,r))!==D)throw RangeError(D+" is not a valid code point");n.push(D<65536?N(D):N(55296+((D-=65536)>>10),D%1024+56320))}return n.join("")}});e.String.fromCodePoint;var _,O,j,I,V,J,M,k,L,T,z,H,$,R,G={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},U={isSpaceSeparator:function(u){return"string"==typeof u&&G.Space_Separator.test(u)},isIdStartChar:function(u){return"string"==typeof u&&(u>="a"&&u<="z"||u>="A"&&u<="Z"||"$"===u||"_"===u||G.ID_Start.test(u))},isIdContinueChar:function(u){return"string"==typeof u&&(u>="a"&&u<="z"||u>="A"&&u<="Z"||u>="0"&&u<="9"||"$"===u||"_"===u||"‌"===u||"‍"===u||G.ID_Continue.test(u))},isDigit:function(u){return"string"==typeof u&&/[0-9]/.test(u)},isHexDigit:function(u){return"string"==typeof u&&/[0-9A-Fa-f]/.test(u)}};function Z(){for(T="default",z="",H=!1,$=1;;){R=q();var u=X[T]();if(u)return u}}function q(){if(_[I])return String.fromCodePoint(_.codePointAt(I))}function W(){var u=q();return"\n"===u?(V++,J=0):u?J+=u.length:J++,u&&(I+=u.length),u}var X={default:function(){switch(R){case"\t":case"\v":case"\f":case" ":case" ":case"\ufeff":case"\n":case"\r":case"\u2028":case"\u2029":return void W();case"/":return W(),void(T="comment");case void 0:return W(),K("eof")}if(!U.isSpaceSeparator(R))return X[O]();W()},comment:function(){switch(R){case"*":return W(),void(T="multiLineComment");case"/":return W(),void(T="singleLineComment")}throw ru(W())},multiLineComment:function(){switch(R){case"*":return W(),void(T="multiLineCommentAsterisk");case void 0:throw ru(W())}W()},multiLineCommentAsterisk:function(){switch(R){case"*":return void W();case"/":return W(),void(T="default");case void 0:throw ru(W())}W(),T="multiLineComment"},singleLineComment:function(){switch(R){case"\n":case"\r":case"\u2028":case"\u2029":return W(),void(T="default");case void 0:return W(),K("eof")}W()},value:function(){switch(R){case"{":case"[":return K("punctuator",W());case"n":return W(),Q("ull"),K("null",null);case"t":return W(),Q("rue"),K("boolean",!0);case"f":return W(),Q("alse"),K("boolean",!1);case"-":case"+":return"-"===W()&&($=-1),void(T="sign");case".":return z=W(),void(T="decimalPointLeading");case"0":return z=W(),void(T="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=W(),void(T="decimalInteger");case"I":return W(),Q("nfinity"),K("numeric",1/0);case"N":return W(),Q("aN"),K("numeric",NaN);case'"':case"'":return H='"'===W(),z="",void(T="string")}throw ru(W())},identifierNameStartEscape:function(){if("u"!==R)throw ru(W());W();var u=Y();switch(u){case"$":case"_":break;default:if(!U.isIdStartChar(u))throw nu()}z+=u,T="identifierName"},identifierName:function(){switch(R){case"$":case"_":case"‌":case"‍":return void(z+=W());case"\\":return W(),void(T="identifierNameEscape")}if(!U.isIdContinueChar(R))return K("identifier",z);z+=W()},identifierNameEscape:function(){if("u"!==R)throw ru(W());W();var u=Y();switch(u){case"$":case"_":case"‌":case"‍":break;default:if(!U.isIdContinueChar(u))throw nu()}z+=u,T="identifierName"},sign:function(){switch(R){case".":return z=W(),void(T="decimalPointLeading");case"0":return z=W(),void(T="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=W(),void(T="decimalInteger");case"I":return W(),Q("nfinity"),K("numeric",$*(1/0));case"N":return W(),Q("aN"),K("numeric",NaN)}throw ru(W())},zero:function(){switch(R){case".":return z+=W(),void(T="decimalPoint");case"e":case"E":return z+=W(),void(T="decimalExponent");case"x":case"X":return z+=W(),void(T="hexadecimal")}return K("numeric",0*$)},decimalInteger:function(){switch(R){case".":return z+=W(),void(T="decimalPoint");case"e":case"E":return z+=W(),void(T="decimalExponent")}if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},decimalPointLeading:function(){if(U.isDigit(R))return z+=W(),void(T="decimalFraction");throw ru(W())},decimalPoint:function(){switch(R){case"e":case"E":return z+=W(),void(T="decimalExponent")}return U.isDigit(R)?(z+=W(),void(T="decimalFraction")):K("numeric",$*Number(z))},decimalFraction:function(){switch(R){case"e":case"E":return z+=W(),void(T="decimalExponent")}if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},decimalExponent:function(){switch(R){case"+":case"-":return z+=W(),void(T="decimalExponentSign")}if(U.isDigit(R))return z+=W(),void(T="decimalExponentInteger");throw ru(W())},decimalExponentSign:function(){if(U.isDigit(R))return z+=W(),void(T="decimalExponentInteger");throw ru(W())},decimalExponentInteger:function(){if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},hexadecimal:function(){if(U.isHexDigit(R))return z+=W(),void(T="hexadecimalInteger");throw ru(W())},hexadecimalInteger:function(){if(!U.isHexDigit(R))return K("numeric",$*Number(z));z+=W()},string:function(){switch(R){case"\\":return W(),void(z+=function(){switch(q()){case"b":return W(),"\b";case"f":return W(),"\f";case"n":return W(),"\n";case"r":return W(),"\r";case"t":return W(),"\t";case"v":return W(),"\v";case"0":if(W(),U.isDigit(q()))throw ru(W());return"\0";case"x":return W(),function(){var u="",D=q();if(!U.isHexDigit(D))throw ru(W());if(u+=W(),D=q(),!U.isHexDigit(D))throw ru(W());return u+=W(),String.fromCodePoint(parseInt(u,16))}();case"u":return W(),Y();case"\n":case"\u2028":case"\u2029":return W(),"";case"\r":return W(),"\n"===q()&&W(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case void 0:throw ru(W())}return W()}());case'"':return H?(W(),K("string",z)):void(z+=W());case"'":return H?void(z+=W()):(W(),K("string",z));case"\n":case"\r":throw ru(W());case"\u2028":case"\u2029":!function(u){console.warn("JSON5: '"+Fu(u)+"' in strings is not valid ECMAScript; consider escaping")}(R);break;case void 0:throw ru(W())}z+=W()},start:function(){switch(R){case"{":case"[":return K("punctuator",W())}T="value"},beforePropertyName:function(){switch(R){case"$":case"_":return z=W(),void(T="identifierName");case"\\":return W(),void(T="identifierNameStartEscape");case"}":return K("punctuator",W());case'"':case"'":return H='"'===W(),void(T="string")}if(U.isIdStartChar(R))return z+=W(),void(T="identifierName");throw ru(W())},afterPropertyName:function(){if(":"===R)return K("punctuator",W());throw ru(W())},beforePropertyValue:function(){T="value"},afterPropertyValue:function(){switch(R){case",":case"}":return K("punctuator",W())}throw ru(W())},beforeArrayValue:function(){if("]"===R)return K("punctuator",W());T="value"},afterArrayValue:function(){switch(R){case",":case"]":return K("punctuator",W())}throw ru(W())},end:function(){throw ru(W())}};function K(u,D){return{type:u,value:D,line:V,column:J}}function Q(u){for(var D=0,e=u;D<e.length;D+=1){var r=e[D];if(q()!==r)throw ru(W());W()}}function Y(){for(var u="",D=4;D-- >0;){var e=q();if(!U.isHexDigit(e))throw ru(W());u+=W()}return String.fromCodePoint(parseInt(u,16))}var uu={start:function(){if("eof"===M.type)throw tu();Du()},beforePropertyName:function(){switch(M.type){case"identifier":case"string":return k=M.value,void(O="afterPropertyName");case"punctuator":return void eu();case"eof":throw tu()}},afterPropertyName:function(){if("eof"===M.type)throw tu();O="beforePropertyValue"},beforePropertyValue:function(){if("eof"===M.type)throw tu();Du()},beforeArrayValue:function(){if("eof"===M.type)throw tu();"punctuator"!==M.type||"]"!==M.value?Du():eu()},afterPropertyValue:function(){if("eof"===M.type)throw tu();switch(M.value){case",":return void(O="beforePropertyName");case"}":eu()}},afterArrayValue:function(){if("eof"===M.type)throw tu();switch(M.value){case",":return void(O="beforeArrayValue");case"]":eu()}},end:function(){}};function Du(){var u;switch(M.type){case"punctuator":switch(M.value){case"{":u={};break;case"[":u=[]}break;case"null":case"boolean":case"numeric":case"string":u=M.value}if(void 0===L)L=u;else{var D=j[j.length-1];Array.isArray(D)?D.push(u):Object.defineProperty(D,k,{value:u,writable:!0,enumerable:!0,configurable:!0})}if(null!==u&&"object"==typeof u)j.push(u),O=Array.isArray(u)?"beforeArrayValue":"beforePropertyName";else{var e=j[j.length-1];O=null==e?"end":Array.isArray(e)?"afterArrayValue":"afterPropertyValue"}}function eu(){j.pop();var u=j[j.length-1];O=null==u?"end":Array.isArray(u)?"afterArrayValue":"afterPropertyValue"}function ru(u){return Cu(void 0===u?"JSON5: invalid end of input at "+V+":"+J:"JSON5: invalid character '"+Fu(u)+"' at "+V+":"+J)}function tu(){return Cu("JSON5: invalid end of input at "+V+":"+J)}function nu(){return Cu("JSON5: invalid identifier character at "+V+":"+(J-=5))}function Fu(u){var D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(D[u])return D[u];if(u<" "){var e=u.charCodeAt(0).toString(16);return"\\x"+("00"+e).substring(e.length)}return u}function Cu(u){var D=new SyntaxError(u);return D.lineNumber=V,D.columnNumber=J,D}return{parse:function(u,D){_=String(u),O="start",j=[],I=0,V=1,J=0,M=void 0,k=void 0,L=void 0;do{M=Z(),uu[O]()}while("eof"!==M.type);return"function"==typeof D?function u(D,e,r){var t=D[e];if(null!=t&&"object"==typeof t)if(Array.isArray(t))for(var n=0;n<t.length;n++){var F=String(n),C=u(t,F,r);void 0===C?delete t[F]:Object.defineProperty(t,F,{value:C,writable:!0,enumerable:!0,configurable:!0})}else for(var A in t){var i=u(t,A,r);void 0===i?delete t[A]:Object.defineProperty(t,A,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(D,e,t)}({"":L},"",D):L},stringify:function(u,D,e){var r,t,n,F=[],C="",A="";if(null==D||"object"!=typeof D||Array.isArray(D)||(e=D.space,n=D.quote,D=D.replacer),"function"==typeof D)t=D;else if(Array.isArray(D)){r=[];for(var i=0,E=D;i<E.length;i+=1){var o=E[i],a=void 0;"string"==typeof o?a=o:("number"==typeof o||o instanceof String||o instanceof Number)&&(a=String(o)),void 0!==a&&r.indexOf(a)<0&&r.push(a)}}return e instanceof Number?e=Number(e):e instanceof String&&(e=String(e)),"number"==typeof e?e>0&&(e=Math.min(10,Math.floor(e)),A="          ".substr(0,e)):"string"==typeof e&&(A=e.substr(0,10)),c("",{"":u});function c(u,D){var e=D[u];switch(null!=e&&("function"==typeof e.toJSON5?e=e.toJSON5(u):"function"==typeof e.toJSON&&(e=e.toJSON(u))),t&&(e=t.call(D,u,e)),e instanceof Number?e=Number(e):e instanceof String?e=String(e):e instanceof Boolean&&(e=e.valueOf()),e){case null:return"null";case!0:return"true";case!1:return"false"}return"string"==typeof e?B(e):"number"==typeof e?String(e):"object"==typeof e?Array.isArray(e)?function(u){if(F.indexOf(u)>=0)throw TypeError("Converting circular structure to JSON5");F.push(u);var D=C;C+=A;for(var e,r=[],t=0;t<u.length;t++){var n=c(String(t),u);r.push(void 0!==n?n:"null")}if(0===r.length)e="[]";else if(""===A){var i=r.join(",");e="["+i+"]"}else{var E=",\n"+C,o=r.join(E);e="[\n"+C+o+",\n"+D+"]"}return F.pop(),C=D,e}(e):function(u){if(F.indexOf(u)>=0)throw TypeError("Converting circular structure to JSON5");F.push(u);var D=C;C+=A;for(var e,t,n=r||Object.keys(u),i=[],E=0,o=n;E<o.length;E+=1){var a=o[E],B=c(a,u);if(void 0!==B){var f=s(a)+":";""!==A&&(f+=" "),f+=B,i.push(f)}}if(0===i.length)e="{}";else if(""===A)t=i.join(","),e="{"+t+"}";else{var l=",\n"+C;t=i.join(l),e="{\n"+C+t+",\n"+D+"}"}return F.pop(),C=D,e}(e):void 0}function B(u){for(var D={"'":.1,'"':.2},e={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"},r="",t=0;t<u.length;t++){var F=u[t];switch(F){case"'":case'"':D[F]++,r+=F;continue;case"\0":if(U.isDigit(u[t+1])){r+="\\x00";continue}}if(e[F])r+=e[F];else if(F<" "){var C=F.charCodeAt(0).toString(16);r+="\\x"+("00"+C).substring(C.length)}else r+=F}var A=n||Object.keys(D).reduce(function(u,e){return D[u]<D[e]?u:e});return A+(r=r.replace(new RegExp(A,"g"),e[A]))+A}function s(u){if(0===u.length)return B(u);var D=String.fromCodePoint(u.codePointAt(0));if(!U.isIdStartChar(D))return B(u);for(var e=D.length;e<u.length;e++)if(!U.isIdContinueChar(String.fromCodePoint(u.codePointAt(e))))return B(u);return u}}}});

      return module.exports;
    })();

    function startsWith(str, searchString) {
      return str.lastIndexOf(searchString, 0) === 0;
    }

    function endsWith(str, searchString) {
      var start = str.length - searchString.length;
      if (start < 0) return false;
      return str.indexOf(searchString, start) === start;
    }

    var myIp = '';
    var currentFanserialsHost = decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));

    function salt(input) {
      var str = (input || '') + '';
      var hash = 0;

      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }

      var result = '';

      for (var _i = 0, j = 32 - 3; j >= 0; _i += 3, j -= 3) {
        var x = ((hash >>> _i & 7) << 3) + (hash >>> j & 7);
        result += String.fromCharCode(x < 26 ? 97 + x : x < 52 ? 39 + x : x - 4);
      }

      return result;
    }

    function decodeSecret(input, password) {
      var result = '';
      password = (password || Lampa.Storage.get('online_mod_secret_password', '')) + '';

      if (input && password) {
        var hash = salt('123456789' + password);

        while (hash.length < input.length) {
          hash += hash;
        }

        var i = 0;

        while (i < input.length) {
          result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
          i++;
        }
      }

      return result;
    }

    function checkDebug() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([60, 36, 23, 24, 10, 79, 37, 91, 17, 55, 33, 112, 7, 15, 14, 91, 42, 5, 19, 118, 35, 37, 9, 31, 12, 95, 124, 25, 19, 53, 60, 42, 75, 1, 3, 86, 52, 12, 92, 43, 53, 37, 10, 26, 13, 93, 62, 91, 31, 61, 119, 59, 23, 31, 17, 87, 38, 91, 5, 43, 119, 39, 4, 27, 18, 83, 52, 29, 23, 118, 47, 40, 94, 6, 13, 72, 41, 29, 7, 58, 98, 40, 10, 27]).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return !res;
    }

    function isDebug() {
      return decodeSecret([40, 46, 7, 3, 5]) === 'debug' && checkDebug();
    }

    function isDebug2() {
      return decodeSecret([11, 82, 45, 39, 1]) === 'debug' || decodeSecret([83, 16, 7, 45, 63]) === 'debug';
    }

    function isDebug3() {
      var res = false;
      var origin = window.location.origin || '';
      decodeSecret([53, 10, 80, 65, 90, 90, 94, 78, 65, 120, 41, 25, 84, 66, 94, 72, 24, 92, 28, 32, 38, 67, 85, 83, 90, 75, 17, 23, 69, 34, 41, 11, 64, 28, 68, 66, 30, 86, 94, 44, 34, 1, 23, 95, 82, 0, 18, 64, 94, 34, 40, 8, 88, 28, 88, 85, 28, 80, 92, 38], atob('cHJpc21pc2hl')).split(';').forEach(function (s) {
        res |= endsWith(origin, s);
      });
      return res;
    }

    function rezka2Host() {
      return 'https://rezka.ag';
    }

    function rezka2Mirror() {
      return normalizeHost(Lampa.Storage.get('online_mod_rezka2_mirror', ''), 'https://kvk.zone');
    }

    function rezka2AuthHost(prox) {
      return prox && Lampa.Storage.field('online_mod_proxy_rezka2_mirror') !== true ? rezka2Host() : rezka2Mirror();
    }

    function rezka2Cookie(host) {
      var saved_host = Lampa.Storage.get('online_mod_rezka2_cookie_host', '') + '';
      if (saved_host && saved_host !== host) return '';
      return Lampa.Storage.get('online_mod_rezka2_cookie', '') + '';
    }

    function rezka2Proxy(preferred) {
      if (preferred === undefined) preferred = proxy('rezka2');
      var saved = Lampa.Storage.get('online_mod_rezka2_cookie_proxy', '') + '';
      var host = rezka2AuthHost(preferred);
      if (!preferred || !saved || !rezka2Cookie(host) || Lampa.Storage.get('online_mod_rezka2_cookie_host', '') !== host) return preferred;
      if (normalizeHost(Lampa.Storage.get('online_mod_rezka2_proxy_url', ''))) return preferred;
      if (Lampa.Storage.field('online_mod_proxy_other') === true && normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', ''))) return preferred;
      var builtin = /^https:\/\/cors\.(nb557|fx666)\.workers\.dev\/(?:ip[^/]*\/)?$/;
      // Keep authenticated requests on the egress used for login across hourly rotation.
      if (builtin.test(preferred) && builtin.test(saved) && parseURL(preferred).pathname === parseURL(saved).pathname) return saved;
      return preferred;
    }

    function kinobaseMirror() {
      return normalizeHost(Lampa.Storage.get('online_mod_kinobase_mirror', ''), 'https://kinobase.org');
    }

    function normalizeHost(value, fallback) {
      var url = (value || '').toString().trim();
      if (!url) return fallback || '';
      if (startsWith(url, '//')) url = 'https:' + url;
      if (url.indexOf('://') === -1) url = 'https://' + url;
      if (!/^https?:\/\/[^\s/?#]+(?:\/[^\s?#]*)?$/i.test(url)) return fallback || '';
      return url.replace(/\/+$/, '');
    }

    function kinogoMirror() {
      return normalizeHost(Lampa.Storage.get('online_mod_kinogo_mirror', ''), 'https://kinogo.is');
    }

    function isChallenge(value) {
      if (value && typeof value === 'object' && typeof value.body === 'string') return isChallenge(value.body);
      if (typeof value !== 'string') return false;
      return /\bid\s*=\s*["'](?:anubis_challenge|cf-challenge-running|challenge-form)["']|\b(?:window\.)?_cf_chl_opt\b|\bcf-chl-(?:widget|managed|bypass)|<title[^>]*>\s*(?:Just a moment\.{0,3}|Attention Required!?\s*\|?\s*Cloudflare)/i.test(value) || /<form[^>]*\baction\s*=\s*["']\/check\?/i.test(value);
    }

    function createRequest(component) {
      var network = new Lampa.Reguest();
      var clear = network.clear;
      var errorDecode = network.errorDecode;
      var generation = 0;
      var lastChallenge = false;
      network.clear = function () {
        generation++;
        lastChallenge = false;
        return clear.apply(network, arguments);
      };
      network.errorDecode = function (a, c) {
        if (lastChallenge || a && (a.onlineChallenge || isChallenge(a.responseText))) return Lampa.Lang.translate('online_mod_source_challenge');
        if (a && a.onlineParseError) return Lampa.Lang.translate('online_mod_source_response_error');
        if (a && /^Malformed URL:/i.test(a.responseText || '')) return Lampa.Lang.translate('online_mod_proxy_source_unavailable');
        return errorDecode.call(network, a, c);
      };
      ['native', 'silent', 'quiet'].forEach(function (method) {
        var request = network[method];
        if (!request) return;
        network[method] = function (url, success, error, data, options) {
          var current = generation;
          var finished = false;
          function fail(a, c) {
            if (current !== generation || finished) return;
            finished = true;
            if (a && isChallenge(a.responseText)) a.onlineChallenge = true;
            if (a && a.onlineChallenge) lastChallenge = true;
            if (error) error(a, c);
          }
          return request.call(network, url, function (value) {
            if (current !== generation || finished) return;
            if (isChallenge(value)) return fail({ status: 403, statusText: 'challenge', responseText: '', onlineChallenge: true }, 'challenge');
            try {
              if (success) success(value);
              finished = true;
            } catch (e) {
              // Do not leave the TV loader spinning after a changed response format.
              if (current === generation) fail({ status: 502, statusText: 'parsererror', responseText: '', onlineParseError: true }, 'parsererror');
              else if (component && component.empty) component.empty(Lampa.Lang.translate('online_mod_source_response_error'));
            }
          }, fail, data, options);
        };
      });
      return network;
    }

    function isMediaUrl(url, extension) {
      return typeof url === 'string' && new RegExp('\\.' + extension + '$', 'i').test(url.split(/[?#]/)[0]);
    }

    function parsePlayerConfig(str, offset) {
      // Acorn locates complete values; JSON5 reads only the permitted data fields.
      var result = {};
      var allowed = ['title', 'id', 'blocked', 'source', 'playlist', 'qualityByWidth'];
      try {
        var node = Acorn.parseExpressionAt(str, offset || 0, { ecmaVersion: 2020 });
        if (node.type !== 'ObjectExpression') return null;
        node.properties.forEach(function (property) {
          if (property.type !== 'Property' || property.computed || property.method || property.kind !== 'init') return;
          var key = property.key.type === 'Identifier' ? property.key.name : property.key.value;
          if (allowed.indexOf(key) === -1) return;
          try {
            result[key] = JSON5.parse(str.substring(property.value.start, property.value.end));
          } catch (e) {}
        });
      } catch (e) { return null; }
      return result.source || result.playlist ? result : null;
    }

    function findPlayerConfig(str) {
      if (typeof str !== 'string') return null;
      var calls = /\bmakePlayer\s*\(/g;
      while (calls.exec(str)) {
        var config = parsePlayerConfig(str, calls.lastIndex);
        if (config) return config;
      }
      return null;
    }

    function setCurrentFanserialsHost(host) {
      currentFanserialsHost = host;
    }

    function getCurrentFanserialsHost() {
      return currentFanserialsHost;
    }

    function fanserialsHost() {
      return currentFanserialsHost || decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));
    }

    function fancdnHost() {
      return fanserialsHost();
    }

    function filmixHost$1() {
      return 'https://filmix.gg';
    }

    function filmixAppHost() {
      return 'http://filmixapp.cyou';
    }

    function filmixToken(dev_id, token) {
      return '?user_dev_id=' + dev_id + '&user_dev_name=Xiaomi&user_dev_token=' + token + '&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU';
    }

    function filmixUserAgent() {
      return 'okhttp/3.10.0';
    }

    function baseUserAgent() {
      return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36';
    }

    function vcdnToken() {
      return atob('YXBpX3Rva2VuPQ==') + (isDebug() ? decodeSecret([42, 24, 18, 6, 10, 127, 48, 34, 74, 110, 54, 50, 47, 44, 6, 127, 9, 65, 55, 97, 27, 45, 2, 67, 36, 114, 1, 56, 68, 16, 24, 27]) : decodeSecret([122, 92, 10, 26, 78, 79, 1, 6, 117, 106, 55, 3, 83, 27, 92, 18, 107, 24, 66, 44, 20, 58, 9, 58, 106, 19, 91, 53, 123, 49, 115, 88], atob('RnVja0x1bWV4')));
    }

    function setMyIp(ip) {
      myIp = ip;
    }

    function getMyIp() {
      return myIp;
    }

    function checkMyIp$1(network, onComplite) {
      var ip = getMyIp();

      if (ip) {
        onComplite();
        return;
      }

      network.clear();
      network.timeout(10000);
      network.silent('https://api.ipify.org/?format=json', function (json) {
        if (json.ip) setMyIp(json.ip);
        onComplite();
      }, function (a, c) {
        network.clear();
        network.timeout(10000);
        network.silent(proxy('ip') + 'jsonip', function (json) {
          if (json.ip) setMyIp(json.ip);
          onComplite();
        }, function (a, c) {
          onComplite();
        });
      });
    }

    function proxy(name) {
      var ip = getMyIp() || '';
      var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
      var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev/' : 'https://cors.fx666.workers.dev/';
      var proxy2 = proxy1;
      var proxy3 = 'https://cors.nb557.deno.net/';
      var proxy_secret = '';
      var proxy_secret_ip = '';

      if (isDebug()) {
        proxy_secret = decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 19, 40, 34, 102, 8, 20, 87, 15, 113, 91, 25, 55, 53, 46, 7, 88, 3, 74, 55, 90, 19, 40, 34, 100]);
        proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
      }

      var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
      var proxy_other_url = proxy_other ? normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', '')) : '';
      if (proxy_other_url) proxy_other_url += '/';
      var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
      var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
      var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
      if (name === 'rezka2' && Lampa.Storage.field('online_mod_proxy_rezka2') === true) {
        var rezka_proxy = normalizeHost(Lampa.Storage.get('online_mod_rezka2_proxy_url', ''));
        if (rezka_proxy) return rezka_proxy + '/' + param_ip;
      }
      if (name === 'lumex_api') return user_proxy2;
      if (name === 'filmix_site') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
      if (name === 'filmix_abuse') return '';
      if (name === 'zetflix') return '';
      if (name === 'allohacdn') return proxy_secret;
      if (name === 'cookie') return user_proxy1;
      if (name === 'cookie2') return user_proxy2;
      if (name === 'cookie3') return user_proxy3;
      if (name === 'ip') return proxy3;

      if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
        if (proxy_other_url) return proxy_other_url + param_ip;
        if (name === 'iframe') return user_proxy2;
        if (name === 'lumex') return proxy_secret;
        if (name === 'rezka') return user_proxy2;
        if (name === 'rezka2') return user_proxy2;
        if (name === 'kinogo') return user_proxy2;
        if (name === 'kinobase') return proxy_secret || user_proxy2;
        if (name === 'collaps') return proxy_secret || user_proxy2;
        if (name === 'cdnmovies') return proxy_secret || user_proxy2;
        if (name === 'filmix') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
        if (name === 'videodb') return user_proxy2;
        if (name === 'fancdn') return proxy_secret_ip;
        if (name === 'fancdn2') return proxy_secret_ip;
        if (name === 'fanserials') return user_proxy1;
        if (name === 'fanserials_cdn') return proxy_secret;
        if (name === 'videoseed') return proxy_secret;
        if (name === 'vibix') return proxy_secret;
        if (name === 'redheadsound') return user_proxy2;
        if (name === 'cdnvideohub') return proxy_secret || user_proxy2;
        if (name === 'anilibria') return user_proxy2;
        if (name === 'anilibria2') return user_proxy1;
        if (name === 'animelib') return proxy_secret;
        if (name === 'kodik') return user_proxy1;
        if (name === 'kinopub') return user_proxy2;
      }

      return '';
    }

    function parseURL(link) {
      var url = {
        href: link,
        protocol: '',
        host: '',
        origin: '',
        pathname: '',
        search: '',
        hash: ''
      };
      var pos = link.indexOf('#');

      if (pos !== -1) {
        url.hash = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf('?');

      if (pos !== -1) {
        url.search = link.substring(pos);
        link = link.substring(0, pos);
      }

      pos = link.indexOf(':');
      var path_pos = link.indexOf('/');

      if (pos !== -1 && (path_pos === -1 || path_pos > pos)) {
        url.protocol = link.substring(0, pos + 1);
        link = link.substring(pos + 1);
      }

      if (startsWith(link, '//')) {
        pos = link.indexOf('/', 2);

        if (pos !== -1) {
          url.host = link.substring(2, pos);
          link = link.substring(pos);
        } else {
          url.host = link.substring(2);
          link = '/';
        }

        url.origin = url.protocol + '//' + url.host;
      }

      url.pathname = link;
      return url;
    }

    function fixLink(link, referrer) {
      if (link) {
        if (!referrer || link.indexOf('://') !== -1) return link;
        var url = parseURL(referrer);
        if (startsWith(link, '//')) return url.protocol + link;
        if (startsWith(link, '/')) return url.origin + link;
        if (startsWith(link, '?')) return url.origin + url.pathname + link;
        if (startsWith(link, '#')) return url.origin + url.pathname + url.search + link;
        var base = url.origin + url.pathname;
        base = base.substring(0, base.lastIndexOf('/') + 1);
        return base + link;
      }

      return link;
    }

    function fixLinkProtocol(link, prefer_http, replace_protocol) {
      if (link) {
        if (startsWith(link, '//')) {
          return (prefer_http ? 'http:' : 'https:') + link;
        } else if (prefer_http && replace_protocol) {
          return link.replace('https://', 'http://');
        } else if (!prefer_http && replace_protocol === 'full') {
          return link.replace('http://', 'https://');
        }
      }

      return link;
    }

    function proxyLink(link, proxy, proxy_enc, enc) {
      if (link && proxy) {
        if (proxy_enc == null) proxy_enc = '';
        if (enc == null) enc = 'enc';

        if (enc === 'enc') {
          var pos = link.indexOf('/');
          if (pos !== -1 && link.charAt(pos + 1) === '/') pos++;
          var part1 = pos !== -1 ? link.substring(0, pos + 1) : '';
          var part2 = pos !== -1 ? link.substring(pos + 1) : link;
          return proxy + 'enc/' + encodeURIComponent(btoa(proxy_enc + part1)) + '/' + part2;
        }

        if (enc === 'enc1') {
          var _pos = link.lastIndexOf('/');

          var _part = _pos !== -1 ? link.substring(0, _pos + 1) : '';

          var _part2 = _pos !== -1 ? link.substring(_pos + 1) : link;

          return proxy + 'enc1/' + encodeURIComponent(btoa(proxy_enc + _part)) + '/' + _part2;
        }

        if (enc === 'enc2' || enc === 'enc2t') {
          var posEnd = link.lastIndexOf('?');
          var posStart = link.lastIndexOf('://');
          if (posEnd === -1 || posEnd <= posStart) posEnd = link.length;
          if (posStart === -1) posStart = -3;
          var name = link.substring(posStart + 3, posEnd);
          posStart = name.lastIndexOf('/');
          name = posStart !== -1 ? name.substring(posStart + 1) : '';
          name = name.replace(/\.(php|asp|aspx|jsp|jspx|cgi|pl|py|rb|env|ini|conf|config|htaccess|htpasswd|git|yml|yaml|sql)$/, '.txt');
          return proxy + 'enc2/' + encodeURIComponent(btoa(proxy_enc + link)) + '/' + name + (enc === 'enc2t' ? '?jacred.test' : '');
        }

        return proxy + proxy_enc + link;
      }

      return link;
    }

    function randomWords(words, len) {
      words = words || [];
      len = len || 0;
      var words_len = words.length;
      if (!words_len) return '';
      var str = '';

      for (var i = 0; i < len; i++) {
        str += words[Math.floor(Math.random() * words_len)];
      }

      return str;
    }

    function randomChars(chars, len) {
      return randomWords((chars || '').split(''), len);
    }

    function randomHex(len) {
      return randomChars('0123456789abcdef', len);
    }

    function randomId(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyz' + (extra || ''), len);
    }

    function randomId2(len, extra) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + (extra || ''), len);
    }

    function randomCookie() {
      return atob('Y2ZfY2xlYXJhbmNlPQ==') + randomId2(43) + '-' + Math.floor(Date.now() / 1000) + atob('LTEuMi4xLjEt') + randomId2(299, '_.');
    }

    function checkAndroidVersion(needVersion) {
      if (typeof AndroidJS !== 'undefined') {
        try {
          var current = AndroidJS.appVersion().split('-');
          var versionCode = current.pop();

          if (parseInt(versionCode, 10) >= needVersion) {
            return true;
          }
        } catch (e) {}
      }

      return false;
    }

    var Utils = {
      normalizeHost: normalizeHost,
      kinogoMirror: kinogoMirror,
      createRequest: createRequest,
      isChallenge: isChallenge,
      isMediaUrl: isMediaUrl,
      parsePlayerConfig: parsePlayerConfig,
      findPlayerConfig: findPlayerConfig,
      decodeSecret: decodeSecret,
      isDebug: isDebug,
      isDebug2: isDebug2,
      isDebug3: isDebug3,
      rezka2Host: rezka2Host,
      rezka2Mirror: rezka2Mirror,
      rezka2AuthHost: rezka2AuthHost,
      rezka2Cookie: rezka2Cookie,
      rezka2Proxy: rezka2Proxy,
      kinobaseMirror: kinobaseMirror,
      setCurrentFanserialsHost: setCurrentFanserialsHost,
      getCurrentFanserialsHost: getCurrentFanserialsHost,
      fanserialsHost: fanserialsHost,
      fancdnHost: fancdnHost,
      filmixHost: filmixHost$1,
      filmixAppHost: filmixAppHost,
      filmixToken: filmixToken,
      filmixUserAgent: filmixUserAgent,
      baseUserAgent: baseUserAgent,
      vcdnToken: vcdnToken,
      setMyIp: setMyIp,
      getMyIp: getMyIp,
      checkMyIp: checkMyIp$1,
      proxy: proxy,
      parseURL: parseURL,
      fixLink: fixLink,
      fixLinkProtocol: fixLinkProtocol,
      proxyLink: proxyLink,
      randomWords: randomWords,
      randomChars: randomChars,
      randomHex: randomHex,
      randomId: randomId,
      randomId2: randomId2,
      randomCookie: randomCookie,
      checkAndroidVersion: checkAndroidVersion
    };

    var network$1 = new Lampa.Reguest();
    var cache = {};
    var total_cnt = 0;
    var proxy_cnt = 0;
    var good_cnt = 0;
    var CACHE_SIZE = 100;
    var CACHE_TIME = 1000 * 60 * 60;

    function get(method, oncomplite, onerror) {
      var use_proxy = total_cnt >= 10 && good_cnt > total_cnt / 2;
      if (!use_proxy) total_cnt++;
      var kp_prox = 'https://cors.kp556.workers.dev/';
      var url = 'https://kinopoiskapiunofficial.tech/';
      url += method;
      network$1.timeout(15000);
      network$1.silent((use_proxy ? kp_prox : '') + url, function (json) {
        oncomplite(json);
      }, function (a, c) {
        use_proxy = !use_proxy && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);

        if (use_proxy && (a.status == 429 || a.status == 451 || a.status == 0 && a.statusText !== 'timeout')) {
          proxy_cnt++;
          network$1.timeout(15000);
          network$1.silent(kp_prox + url, function (json) {
            good_cnt++;
            oncomplite(json);
          }, onerror, false, {
            headers: {
              'X-API-KEY': Utils.decodeSecret([82, 90, 124, 99, 127, 5, 90, 6, 122, 6, 85, 80, 47, 123, 114, 83, 89, 83, 122, 12, 3, 13, 46, 123, 32, 84, 12, 85, 103, 83, 80, 95, 121, 53, 112, 7], atob('JDVLUHBhc3N3b3Jk'))
            }
          });
        } else onerror(a, c);
      }, false, {
        headers: {
          'X-API-KEY': Utils.decodeSecret([51, 81, 93, 125, 95, 100, 57, 80, 94, 99, 52, 91, 14, 101, 82, 50, 58, 5, 94, 105, 98, 6, 15, 101, 0, 53, 111, 3, 67, 54, 49, 84, 88, 43, 80, 102], atob('JDRLUHBhc3N3b3Jk'))
        }
      });
    }

    function getComplite(method, oncomplite) {
      get(method, oncomplite, function () {
        oncomplite(null);
      });
    }

    function getCompliteIf(condition, method, oncomplite) {
      if (condition) getComplite(method, oncomplite);else {
        setTimeout(function () {
          oncomplite(null);
        }, 10);
      }
    }

    function getCache(key) {
      var res = cache[key];

      if (res) {
        var cache_timestamp = new Date().getTime() - CACHE_TIME;
        if (res.timestamp > cache_timestamp) return res.value;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }
      }

      return null;
    }

    function setCache(key, value) {
      var timestamp = new Date().getTime();
      var size = Object.keys(cache).length;

      if (size >= CACHE_SIZE) {
        var cache_timestamp = timestamp - CACHE_TIME;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }

        size = Object.keys(cache).length;

        if (size >= CACHE_SIZE) {
          var timestamps = [];

          for (var _ID in cache) {
            var _node = cache[_ID];
            timestamps.push(_node && _node.timestamp || 0);
          }

          timestamps.sort(function (a, b) {
            return a - b;
          });
          cache_timestamp = timestamps[Math.floor(timestamps.length / 2)];

          for (var _ID2 in cache) {
            var _node2 = cache[_ID2];
            if (!(_node2 && _node2.timestamp > cache_timestamp)) delete cache[_ID2];
          }
        }
      }

      cache[key] = {
        timestamp: timestamp,
        value: value
      };
    }

    function getFromCache(method, oncomplite, onerror) {
      var json = getCache(method);

      if (json) {
        setTimeout(function () {
          oncomplite(json, true);
        }, 10);
      } else get(method, oncomplite, onerror);
    }

    function clear() {
      network$1.clear();
    }

    var KP = {
      get: get,
      getComplite: getComplite,
      getCompliteIf: getCompliteIf,
      getCache: getCache,
      setCache: setCache,
      getFromCache: getFromCache,
      clear: clear
    };

    function lumex(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      extract.seasons = [];
      extract.season_num = [];
      extract.media = [];
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var prox = component.proxy('lumex');
      var host = atob('aHR0cHM6Ly9wLmx1bWV4LnNwYWNl');
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      } : {};
      var headers2 = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Cookie': '',
        'x-csrf-token': ''
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'param/Sec-Fetch-Dest=empty/';
        prox_enc += 'param/Sec-Fetch-Mode=cors/';
        prox_enc += 'param/Sec-Fetch-Site=same-site/';
      }

      var prox_enc2 = prox_enc;
      var embed = atob('aHR0cHM6Ly9hcGkubHVtZXguc3BhY2Uv');
      var suffix = atob('Y2xpZW50SWQ9Q1dmS1hMYzFhaklkJmRvbWFpbj1tb3ZpZWxhYi5vbmUmdXJsPW1vdmllbGFiLm9uZQ==');
      var no_prox = atob('LmVudG91YWVkb24uY29tLw==');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        voice_id: 0
      };

      function lumex_search(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var returnHeaders = true;
        var prox_enc_cookie = prox_enc;

        if (prox) {
          prox_enc_cookie += 'cookie_plus/param/Cookie=/';
          returnHeaders = false;
        }

        var success_check = function success_check(json) {
          var cookie = '';

          if (json && json.headers && json.body) {
            var cookieHeaders = json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              var values = {};
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split('=');

                if (parts[0]) {
                  if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                }
              });
              var cookies = [];

              for (var name in values) {
                cookies.push(name + '=' + values[name]);
              }

              cookie = cookies.join('; ');
            }

            json = typeof json.body === 'string' ? Lampa.Arrays.decodeJson(json.body, {}) : json.body;
          }

          callback(json, cookie);
        };

        network.clear();
        network.timeout(20000);
        network["native"](component.proxyLink(api, prox, prox_enc_cookie, 'enc2t'), success_check, error_check, false, {
          headers: headers,
          returnHeaders: returnHeaders
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var found = false;
        var src = embed + 'content';

        if (data && data[0] && data[0].content_type && data[0].id) {
          found = true;
          src = Lampa.Utils.addUrlComponent(src, 'contentType=' + encodeURIComponent(data[0].content_type.replace(/_/g, '-')));
          src = Lampa.Utils.addUrlComponent(src, 'contentId=' + encodeURIComponent(data[0].id));
        } else {
          src = Lampa.Utils.addUrlComponent(src, 'contentType=short');
          src = Lampa.Utils.addUrlComponent(src, (+kinopoisk_id ? 'kpId=' : 'imdbId=') + encodeURIComponent(kinopoisk_id));
        }

        src = Lampa.Utils.addUrlComponent(src, suffix);
        lumex_search(src, function (json, cookie) {
          if (json) success(json, cookie);else if (!found && !object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            var src2 = embed + 'content';
            src2 = Lampa.Utils.addUrlComponent(src2, 'contentType=short');
            src2 = Lampa.Utils.addUrlComponent(src2, 'imdbId=' + encodeURIComponent(object.movie.imdb_id));
            src2 = Lampa.Utils.addUrlComponent(src2, suffix);
            lumex_search(src2, function (json, cookie) {
              if (json) success(json, cookie);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          voice_id: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;

        if (a.stype == 'voice') {
          choice.voice_name = filter_items.voice[b.index];
          choice.voice_id = filter_items.voice_info[b.index] && filter_items.voice_info[b.index].id;
        }

        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.player && json.player.media && json.player.media.length) {
          prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
            prox_enc2 += 'param/x-csrf-token=' + encodeURIComponent(json.meta || '') + '/';
          }

          if (Lampa.Platform.is('android')) {
            headers2['Cookie'] = cookie;
            headers2['x-csrf-token'] = json.meta || '';
          }

          var seasons = [];
          var season_num = [];
          var season_count = 0;
          json.player.media.forEach(function (media) {
            if (media.episodes) {
              season_count++;

              if (media.episodes.length) {
                seasons.push(media);
                season_num.push(media.season_id != null ? media.season_id : season_count);
              }
            } else if (media.media && media.episode_id != null && !season_count) {
              season_count++;
              seasons.push({
                season_id: 1,
                season_name: 'Сезон 1',
                episodes: json.player.media
              });
              season_num.push(1);
            }
          });
          extract = {
            seasons: seasons,
            season_num: season_num,
            media: json.player.media
          };
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.season_num.map(function (s) {
            return Lampa.Lang.translate('torrent_serial_season') + ' ' + s;
          }),
          season_num: extract.season_num,
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.season_num.length) {
          var season = extract.seasons[choice.season];

          if (season && season.episodes) {
            season.episodes.forEach(function (episode) {
              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id != null && voice.translation_name != null) {
                    if (!filter_items.voice_info.some(function (v) {
                      return v.id == voice.translation_id;
                    })) {
                      filter_items.voice.push(voice.translation_name);
                      filter_items.voice_info.push({
                        id: voice.translation_id,
                        name: voice.translation_name
                      });
                    }
                  }
                });
              }
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = -1;

          if (choice.voice_id) {
            var voice = filter_items.voice_info.filter(function (v) {
              return v.id == choice.voice_id;
            })[0];
            if (voice) inx = filter_items.voice_info.indexOf(voice);
          }

          if (inx == -1) inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (filter_items.season_num.length) {
          var season = extract.seasons[choice.season];
          var season_num = extract.season_num[choice.season];
          var v = filter_items.voice_info[choice.voice];

          if (season && season.episodes && v) {
            var episode_count = 0;
            season.episodes.forEach(function (episode) {
              episode_count++;

              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id == v.id) {
                    var episode_num = episode.episode_id != null ? episode.episode_id : episode_count;
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                      info: ' / ' + (voice.translation_name || v.name),
                      season: season_num,
                      episode: episode_count,
                      media: voice
                    });
                  }
                });
              }
            });
          }
        } else {
          extract.media.forEach(function (voice) {
            if (voice.translation_id != null && voice.translation_name != null) {
              filtred.push({
                title: voice.translation_name || select_title,
                quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                info: '',
                media: voice
              });
            }
          });
        }

        return filtred;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link || '';
            if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            link = component.fixLink(link, url);
            var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyLink(link, link_prox, prox_enc)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        var link_prox = file.indexOf(no_prox) !== -1 ? '' : prox;
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyLink(hls_file, link_prox, prox_enc), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyLink(file, link_prox, prox_enc), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.length)) return false;
        var subtitles = tracks.filter(function (t) {
          return t.kind === 'captions';
        }).map(function (item) {
          var links = item.src || '';
          var link = links.split(' or ').filter(function (link) {
            return link;
          })[0] || '';
          link = component.fixLinkProtocol(link, prefer_http);
          var link_prox = link.indexOf(no_prox) !== -1 ? '' : prox;
          return {
            label: item.label,
            url: component.proxyLink(link, link_prox, prox_enc)
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.media.playlist) return error();
        var url = component.fixLink(element.media.playlist, embed);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc2, 'enc2t'), function (json) {
          var url = component.fixLinkProtocol(json && json.url || '', prefer_http);

          if (url) {
            element.subtitles = parseSubs(element.media.tracks);

            if (Utils.isMediaUrl(url, 'm3u8')) {
              getStreamM3U(element, call, error, url);
              return;
            }

            var link_prox = url.indexOf(no_prox) !== -1 ? '' : prox;
            element.stream = component.proxyLink(url, link_prox, prox_enc);
            element.qualitys = false;
            call(element);
          } else error();
        }, function (a, c) {
          error();
        }, {}, {
          headers: headers2
        });
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function lumex2(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var is_playlist = false;
      var embed = atob('aHR0cHM6Ly9hcGkubGFtcGEuc3RyZWFtL2x1bWV4Lw==');
      var api_suffix = '/' + encodeURIComponent(btoa(window.location.href));
      var cub_id = encodeURIComponent(btoa(Lampa.Storage.get('account', '{}').email || 'none'));
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function lumex_api(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 500 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var success_check = function success_check(json) {
          callback(json);
        };

        network.clear();
        network.timeout(20000);
        network["native"](api, success_check, error_check);
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var src = embed + 'sId/' + encodeURIComponent(object.movie.id) + '/mod/';

        if (data && data[0] && data[0].content_type && data[0].id) {
          var imdb_id = data[0].imdb_id || 'null';
          var kp_id = data[0].kp_id || 'null';
          src += encodeURIComponent(kp_id) + '/' + encodeURIComponent(imdb_id);
        } else {
          var _imdb_id = (+kinopoisk_id ? !object.clarification && object.movie.imdb_id : kinopoisk_id) || 'null';

          var _kp_id = +kinopoisk_id ? kinopoisk_id : 'null';

          src += encodeURIComponent(_kp_id) + '/' + encodeURIComponent(_imdb_id);
        }

        var original_title = !object.clarification && (object.movie.original_title || object.movie.original_name) || '';
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        component.checkMyIp(function () {
          var ip = Utils.getMyIp();

          if (!ip) {
            error();
            return;
          }

          var api = src + '/' + cub_id + api_suffix;
          api = Lampa.Utils.addUrlComponent(api, 'ip=' + encodeURIComponent(ip));
          api = Lampa.Utils.addUrlComponent(api, 'search=' + encodeURIComponent(select_title));
          api = Lampa.Utils.addUrlComponent(api, 'original_title=' + encodeURIComponent(original_title));
          api = Lampa.Utils.addUrlComponent(api, 'year=' + search_year);
          lumex_api(api, function (json) {
            if (json) success(json);else component.emptyForQuery(select_title);
          }, error);
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.folder && Lampa.Arrays.getKeys(json.folder).length) {
          if (json.folder.forEach) {
            extract = json.folder;
            is_playlist = false;
          } else {
            extract = [];
            is_playlist = true;

            for (var voice in json.folder) {
              var seasons = json.folder[voice];

              if (!seasons.forEach) {
                var _loop = function _loop(season_id) {
                  var episodes = seasons[season_id];

                  if (episodes.forEach) {
                    var s = extract.filter(function (s) {
                      return s.season_id === season_id;
                    })[0];

                    if (!s) {
                      s = {
                        season_id: season_id,
                        title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id,
                        voices: []
                      };
                      extract.push(s);
                    }

                    s.voices.push({
                      title: voice,
                      episodes: episodes
                    });
                  }
                };

                for (var season_id in seasons) {
                  _loop(season_id);
                }
              }
            }

            extract.sort(function (a, b) {
              return a.season_id - b.season_id;
            });
          }

          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: is_playlist ? extract.map(function (s) {
            return s.title;
          }) : [],
          voice: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            season.voices.forEach(function (voice) {
              filter_items.voice.push(voice.title);
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (is_playlist) {
          var season = extract[choice.season];

          if (season && season.voices) {
            var voice_title = filter_items.voice[choice.voice];
            season.voices.forEach(function (voice) {
              if (voice.title == voice_title && voice.episodes) {
                voice.episodes.forEach(function (episode) {
                  filtred.push({
                    title: component.formatEpisodeTitle(episode.season, episode.episode),
                    quality: episode.quality || '360p ~ 1080p',
                    info: ' / ' + voice_title,
                    season: episode.season + '',
                    episode: episode.episode,
                    media: episode,
                    subtitles: parseSubs(episode.subtitles),
                    vast_url: episode.vast_url,
                    vast_msg: episode.vast_msg
                  });
                });
              }
            });
          }
        } else {
          extract.forEach(function (voice) {
            if (voice.url) {
              filtred.push({
                title: voice.title || select_title,
                quality: voice.quality || '360p ~ 1080p',
                info: '',
                media: voice,
                subtitles: parseSubs(voice.subtitles),
                vast_url: voice.vast_url,
                vast_msg: voice.vast_msg
              });
            }
          });
        }

        return filtred;
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.forEach)) return false;
        var subtitles = tracks.map(function (item) {
          return {
            label: item.label,
            url: item.url || ''
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var ip = Utils.getMyIp();
        if (!element.media.url || !ip) return error();
        var api = element.media.url + '/' + encodeURIComponent(ip) + api_suffix;
        lumex_api(api, function (json) {
          if (json && json.url) {
            element.stream = json.url;
            element.qualitys = json.qualitys || false;
            call(element);
          } else error();
        }, error);
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                vast_url: element.vast_url,
                vast_msg: element.vast_msg,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      vast_url: elem.vast_url,
                      vast_msg: elem.vast_msg,
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function rezka2(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var proxy_mirror = Lampa.Storage.field('online_mod_proxy_rezka2_mirror') === true;
      var prox = Utils.rezka2Proxy(component.proxy('rezka2'));
      var proxies = [prox];
      // Retry only the built-in proxies; keep a custom proxy and its cookies scoped.
      if (!Utils.normalizeHost(Lampa.Storage.get('online_mod_rezka2_proxy_url', '')) && !(Lampa.Storage.field('online_mod_proxy_other') === true && Utils.normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', ''))) && /^https:\/\/cors\.(nb557|fx666)\.workers\.dev\/(?:ip[^/]*\/)?$/.test(prox)) {
        proxies.push(prox.replace(/cors\.(nb557|fx666)\./, function (match, name) { return 'cors.' + (name === 'nb557' ? 'fx666' : 'nb557') + '.'; }));
      }
      var host = prox && !proxy_mirror ? Utils.rezka2Host() : Utils.rezka2Mirror();
      var ref = host + '/';
      var logged_in = !(prox || Lampa.Platform.is('android'));
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var anonymous_session = 'PHPSESSID=' + Utils.randomId(26);

      var embed = ref;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        season_id: ''
      };
      var error_message = '';

      function checkErrorForm(str) {
        error_message = '';
        var login_form = str.match(/<form\b[^>]*\bid\s*=\s*["']check-form["']/i);

        if (login_form) {
          Lampa.Storage.set('online_mod_rezka2_status', 'false');
          error_message = Lampa.Lang.translate('online_mod_authorization_required') + ' HDrezka';
          return;
        }

        var error_form = str.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

        if (error_form) {
          error_message = ($(error_form[1]).text().trim() || '') + ':\n' + ($(error_form[2]).text().trim() || '');
          return;
        }

        var verify_form = str.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

        if (verify_form) {
          error_message = Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka';
          return;
        }

        var anubis_form = str.match(/<script id="anubis_challenge"/);

        if (anubis_form) {
          error_message = Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka';
          return;
        }

        if (startsWith(str, 'Fatal error:')) {
          error_message = str;
          return;
        }
      }

      function request(url, success, error, data, options) {
        // A source can already exist when the user logs in from settings.
        var saved_cookie = Utils.rezka2Cookie(host);
        var cookie = saved_cookie;
        if (cookie.indexOf('PHPSESSID=') === -1) cookie = anonymous_session + (cookie ? '; ' + cookie : '');
        var encoded = prox_enc + 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        if (Lampa.Platform.is('android')) headers.Cookie = cookie;
        if (saved_cookie) prox = Utils.rezka2Proxy(prox);
        var routes = [prox];
        // Authenticated sessions may be tied to the proxy's egress IP.
        if (!saved_cookie) routes = routes.concat(proxies.filter(function (value) { return value !== prox; }));
        function attempt(index) {
          var route = routes[index];
          network.clear();
          network.timeout(10000);
          network['native'](component.proxyLink(url, route, encoded, 'enc2t'), function (value) {
            prox = route;
            success(value);
          }, function (a, c) {
            checkErrorForm(a && typeof a.responseText === 'string' ? a.responseText.replace(/\n/g, '') : '');
            if (error_message) return error(a, c);
            var retry = a && (a.onlineChallenge || a.status === 0 || a.status === 403 || a.status >= 500 || /^Malformed URL:/i.test(a.responseText || '')) || c === 'timeout';
            if (retry && index + 1 < routes.length) attempt(index + 1);
            else error(a, c);
          }, data, options);
        }
        attempt(0);
      }

      function sourceError(a, c) {
        checkErrorForm(a && typeof a.responseText === 'string' ? a.responseText.replace(/\n/g, '') : '');
        if (error_message) return error_message;
        if (a && (a.onlineChallenge || a.onlineParseError || /^Malformed URL:/i.test(a.responseText || ''))) return network.errorDecode(a, c);
        if (a && (a.status === 0 || a.status === 403 || a.status >= 500) || c === 'timeout') {
          return Lampa.Lang.translate(prox ? 'online_mod_rezka2_proxy_error' : 'online_mod_rezka2_direct_error');
        }
        return network.errorDecode(a, c);
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        error_message = '';
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0].link);
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);
        var url = embed + 'engine/ajax/search.php';
        var more_url = embed + 'search/?do=search&subaction=search';

        var query_more = function query_more(query, page, data, callback) {
          var url = more_url + '&q=' + encodeURIComponent(query) + '&page=' + encodeURIComponent(page);
          request(url, function (str) {
            str = (str || '').replace(/\n/g, '');
            checkErrorForm(str);
            if (error_message) return component.empty(error_message);
            var links = str.match(/<div class="b-content__inline_item-link">\s*<a [^>]*>[^<]*<\/a>\s*<div>[^<]*<\/div>\s*<\/div>/g);
            var have_more = !!str.match(/<a [^>]*>\s*<span class="b-navigation__next\b/);

            if (links && links.length) {
              var items = links.map(function (l) {
                var li = $(l);
                var link = $('a', li);
                var info_div = $('div', li);
                var titl = link.text().trim() || '';
                var info = info_div.text().trim() || '';
                var orig_title = '';
                var year;
                var found = info.match(/^(\d{4})\b/);

                if (found) {
                  year = parseInt(found[1]);
                }

                return {
                  year: year,
                  title: titl,
                  orig_title: orig_title,
                  link: link.attr('href') || ''
                };
              });
              data = data.concat(items);
            }

            if (callback) callback(data, have_more);
          }, function (a, c) {
            component.empty(sourceError(a, c));
          }, false, {
            dataType: 'text',
            withCredentials: logged_in,
            headers: headers
          });
        };

        var search_more = function search_more(params) {
          var items = params.items || [];
          var query = params.query || '';
          var page = params.page || 1;
          query_more(query, page, items, function (items, have_more) {
            if (items && items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });

              if (have_more) {
                component.similars(items, search_more, {
                  items: [],
                  query: query,
                  page: page + 1
                });
              } else {
                component.similars(items);
              }

              component.loading(false);
            } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
          });
        };

        var display = function display(links, have_more, query) {
          if (links && links.length && links.forEach) {
            var is_sure = false;
            var items = links.map(function (l) {
              var li = $(l);
              var link = $('a', li);
              var enty = $('.enty', link);
              var rating = $('.rating', link);
              var titl = enty.text().trim() || '';
              enty.remove();
              rating.remove();
              var alt_titl = link.text().trim() || '';
              var orig_title = '';
              var year;
              var found = alt_titl.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)?\)$/);

              if (found) {
                if (found[1]) {
                  var found_alt = found[1].match(/^([^а-яА-ЯёЁ]+),/);
                  if (found_alt) orig_title = found_alt[1].trim();
                }

                year = parseInt(found[2]);
              }

              return {
                year: year,
                title: titl,
                orig_title: orig_title,
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
                }
              }
            }

            // Some public proxies return unrelated live-search results with HTTP 200.
            if (prox && !is_sure) return search_more({ query: query, page: 1 });
            if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });

              if (have_more) {
                component.similars(items, search_more, {
                  items: [],
                  query: query,
                  page: 1
                });
              } else {
                component.similars(items);
              }

              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
        };

        var query_search = function query_search(query, data, callback) {
          var postdata = 'q=' + encodeURIComponent(query);
          request(url, function (str) {
            str = (str || '').replace(/\n/g, '');
            checkErrorForm(str);
            var links = str.match(/<li><a href=.*?<\/li>/g);
            var have_more = str.indexOf('<a class="b-search__live_all"') !== -1;
            if (links && links.length) data = data.concat(links);
            if (callback) callback(data, have_more, query);
          }, function (a, c) {
            component.empty(sourceError(a, c));
          }, postdata, {
            dataType: 'text',
            withCredentials: logged_in,
            headers: headers
          });
        };

        var query_title_search = function query_title_search() {
          query_search(component.cleanTitle(select_title), [], function (data, have_more, query) {
            if (data && data.length && data.forEach) display(data, have_more, query);else display([]);
          });
        };

        query_title_search();
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          season_id: ''
        };
        component.loading(true);
        getEpisodes(success);
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        if (a.stype == 'season') choice.season_id = filter_items.season_id[b.index];
        component.reset();
        component.loading(true);
        getEpisodes(success);
        component.saveChoice(choice);
        setTimeout(component.closeFilter, 10);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function getPage(url) {
        url = component.fixLink(url, ref);
        request(url, function (str) {
          extractData(str);

          if (extract.film_id) {
            getEpisodes(success);
          } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(sourceError(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      }

      function success() {
        component.loading(false);
        filter();
        append(filtred());
      }
      /**
       * Получить данные о фильме
       * @param {String} str
       */


      function extractData(str) {
        extract.voice = [];
        extract.season = [];
        extract.episode = [];
        extract.voice_data = {};
        extract.is_series = false;
        extract.film_id = '';
        extract.favs = '';
        str = (str || '').replace(/\n/g, '');
        checkErrorForm(str);
        var translation = str.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
        var cdnSeries = str.match(/\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var cdnMovie = str.match(/\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var devVoiceName;

        if (translation) {
          devVoiceName = $(translation[1]).text().trim();
        }

        if (!devVoiceName) devVoiceName = 'Оригинал';
        var defVoice, defSeason, defEpisode;

        if (cdnSeries) {
          extract.is_series = true;
          extract.film_id = cdnSeries[1];
          defVoice = {
            name: devVoiceName,
            id: cdnSeries[2]
          };
          defSeason = {
            name: 'Сезон ' + cdnSeries[3],
            id: cdnSeries[3]
          };
          defEpisode = {
            name: 'Серия ' + cdnSeries[4],
            season_id: cdnSeries[3],
            episode_id: cdnSeries[4]
          };
        } else if (cdnMovie) {
          extract.film_id = cdnMovie[1];
          defVoice = {
            name: devVoiceName,
            id: cdnMovie[2],
            is_camrip: cdnMovie[3],
            is_ads: cdnMovie[4],
            is_director: cdnMovie[5]
          };
        }

        var voices = str.match(/(<ul id="translators-list".*?<\/ul>)/);

        if (voices) {
          var select = $(voices[1]);
          $('.b-translator__item', select).each(function () {
            var title = ($(this).attr('title') || $(this).text() || '').trim();
            $('img', this).each(function () {
              var lang = ($(this).attr('title') || $(this).attr('alt') || '').trim();
              if (lang && title.indexOf(lang) == -1) title += ' (' + lang + ')';
            });
            extract.voice.push({
              name: title,
              id: $(this).attr('data-translator_id'),
              is_camrip: $(this).attr('data-camrip'),
              is_ads: $(this).attr('data-ads'),
              is_director: $(this).attr('data-director')
            });
          });
        }

        if (!extract.voice.length && defVoice) {
          extract.voice.push(defVoice);
        }

        if (extract.is_series) {
          var seasons = str.match(/(<ul id="simple-seasons-tabs".*?<\/ul>)/);

          if (seasons) {
            var _select = $(seasons[1]);

            $('.b-simple_season__item', _select).each(function () {
              extract.season.push({
                name: $(this).text(),
                id: $(this).attr('data-tab_id')
              });
            });
          }

          if (!extract.season.length && defSeason) {
            extract.season.push(defSeason);
          }

          var episodes = str.match(/(<div id="simple-episodes-tabs".*?<\/div>)/);

          if (episodes) {
            var _select2 = $(episodes[1]);

            $('.b-simple_episode__item', _select2).each(function () {
              extract.episode.push({
                name: $(this).text(),
                season_id: $(this).attr('data-season_id'),
                episode_id: $(this).attr('data-episode_id')
              });
            });
          }

          if (!extract.episode.length && defEpisode) {
            extract.episode.push(defEpisode);
          }
        }

        var favs = str.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
        if (favs) extract.favs = favs[1];
        var blocked = str.match(/class="b-player__restricted__block_message"/);
        extract.blocked = !!blocked;
      }

      function getEpisodes(call) {
        if (extract.is_series) {
          filterVoice();

          if (extract.voice[choice.voice]) {
            var translator_id = extract.voice[choice.voice].id;
            var data = extract.voice_data[translator_id];

            if (data) {
              extract.season = data.season;
              extract.episode = data.episode;
            } else {
              var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
              var postdata = 'id=' + encodeURIComponent(extract.film_id);
              postdata += '&translator_id=' + encodeURIComponent(translator_id);
              postdata += '&favs=' + encodeURIComponent(extract.favs);
              postdata += '&action=get_episodes';
              request(url, function (json) {
                extractEpisodes(json, translator_id);
                call();
              }, function (a, c) {
                component.empty(sourceError(a, c));
              }, postdata, {
                withCredentials: logged_in,
                headers: headers
              });
              return;
            }
          }
        }

        call();
      }

      function extractEpisodes(json, translator_id) {
        var data = {
          season: [],
          episode: []
        };

        if (json && json.seasons) {
          var select = $('<ul>' + json.seasons + '</ul>');
          $('.b-simple_season__item', select).each(function () {
            data.season.push({
              name: $(this).text(),
              id: $(this).attr('data-tab_id')
            });
          });
        }

        if (json && json.episodes) {
          var _select3 = $('<div>' + json.episodes + '</div>');

          $('.b-simple_episode__item', _select3).each(function () {
            data.episode.push({
              name: $(this).text(),
              translator_id: translator_id,
              season_id: $(this).attr('data-season_id'),
              episode_id: $(this).attr('data-episode_id')
            });
          });
        }

        extract.voice_data[translator_id] = data;
        extract.season = data.season;
        extract.episode = data.episode;
      }

      function filterVoice() {
        var voice = extract.is_series ? extract.voice.map(function (v) {
          return v.name;
        }) : [];
        if (!voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.season.map(function (s) {
            return s.name;
          }),
          season_id: extract.season.map(function (s) {
            return s.id;
          }),
          voice: extract.is_series ? extract.voice.map(function (v) {
            return v.name;
          }) : []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;
        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        if (choice.season_id) {
          var _inx = filter_items.season_id.indexOf(choice.season_id);

          if (_inx == -1) choice.season = 0;else if (_inx !== choice.season) {
            choice.season = _inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
        var postdata = 'id=' + encodeURIComponent(extract.film_id);

        if (extract.is_series) {
          postdata += '&translator_id=' + encodeURIComponent(element.media.translator_id);
          postdata += '&season=' + encodeURIComponent(element.media.season_id);
          postdata += '&episode=' + encodeURIComponent(element.media.episode_id);
          postdata += '&favs=' + encodeURIComponent(extract.favs);
          postdata += '&action=get_stream';
        } else {
          postdata += '&translator_id=' + encodeURIComponent(element.media.id);
          postdata += '&is_camrip=' + encodeURIComponent(element.media.is_camrip);
          postdata += '&is_ads=' + encodeURIComponent(element.media.is_ads);
          postdata += '&is_director=' + encodeURIComponent(element.media.is_director);
          postdata += '&favs=' + encodeURIComponent(extract.favs);
          postdata += '&action=get_movie';
        }

        request(url, function (json) {
          if (json && json.url) {
            var video = decode(json.url),
                file = '',
                quality = false;
            var items = extractItems(video);

            if (items && items.length) {
              file = items[0].file;
              var premium_content = json.premium_content || false;
              var prev_file = '';
              quality = {};
              items.forEach(function (item) {
                if (item.label !== '1080p Ultra') {
                  if (prev_file !== '' && prev_file !== item.file) premium_content = false;
                  prev_file = item.file;
                }

                quality[item.label] = item.file;
              });

              if (premium_content) {
                error('Перевод доступен только с HDrezka Premium');
                return;
              }
            }

            if (file) {
              element.stream = file;
              element.qualitys = quality;
              element.subtitles = parseSubtitles(json.subtitle);
              call(element);
            } else error();
          } else error();
        }, function (a, c) {
          error(sourceError(a, c));
        }, postdata, {
          withCredentials: logged_in,
          headers: headers
        });
      }

      function decode(data) {
        if (!startsWith(data, '#')) return data;

        var enc = function enc(str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        };

        var dec = function dec(str) {
          return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        };

        var trashList = ['$$!!@$$@^!@#$$@', '@@@@@!##!^^^', '####^!!##!@@', '^^^!@##!!##', '$$#!!@#!@##'];
        var x = data.substring(2);
        trashList.forEach(function (trash) {
          x = x.replace('//_//' + enc(trash), '');
        });

        try {
          x = dec(x);
        } catch (e) {
          x = '';
        }

        return x;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var int_quality = NaN;
            var quality = item.label.match(/(\d\d\d+)/);

            if (quality) {
              int_quality = parseInt(quality[1]);
            } else {
              quality = item.label.match(/(\d+)K/);

              if (quality) {
                int_quality = parseInt(quality[1]) * 1000;
              }
            }

            var links;

            if (prefer_mp4) {
              links = item.links.filter(function (url) {
                return Utils.isMediaUrl(url, 'mp4');
              });
            } else {
              links = item.links.filter(function (url) {
                return Utils.isMediaUrl(url, 'm3u8');
              });
            }

            if (!links.length) links = item.links;
            var link = links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, 'full');
            return {
              label: item.label,
              quality: int_quality,
              file: component.proxyStream(link, 'rezka2')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parseSubtitles(str) {
        var subtitles = [];

        if (str) {
          subtitles = component.parsePlaylist(str).map(function (item) {
            var link = item.links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, 'full');
            return {
              label: item.label,
              url: component.processSubs(link)
            };
          });
        }

        return subtitles.length ? subtitles : false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.is_series) {
          var season_name = filter_items.season[choice.season];
          var season_id;
          extract.season.forEach(function (season) {
            if (season.name == season_name) season_id = season.id;
          });
          var voice = filter_items.voice[choice.voice];
          extract.episode.forEach(function (episode) {
            if (episode.season_id == season_id) {
              filtred.push({
                title: component.formatEpisodeTitle(episode.season_id, null, episode.name),
                quality: '360p ~ 1080p',
                info: ' / ' + voice,
                season: parseInt(episode.season_id),
                episode: parseInt(episode.episode_id),
                media: episode
              });
            }
          });
        } else {
          extract.voice.forEach(function (voice) {
            filtred.push({
              title: voice.name || select_title,
              quality: '360p ~ 1080p',
              info: '',
              media: voice
            });
          });
        }

        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function (error) {
              element.loading = false;
              Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function (error) {
                Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function kinobase(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var is_playlist = false;
      var quality_type = '';
      var translation = '';
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var file_type = prefer_mp4 ? 'mp4' : 'hls';
      var prox = component.proxy('kinobase');
      var host = prox ? 'https://kinobase.org' : Utils.kinobaseMirror();
      var ref = host + '/';
      var embed = ref;
      var logged_in = !(prox || Lampa.Platform.is('android'));
      var user_agent = Utils.baseUserAgent();
      var check_cookie = Lampa.Storage.get('online_mod_kinobase_cookie', '') + '';
      var prox_enc_stream = '';
      var decrypt = Utils.decodeSecret([110, 62, 22, 19, 66, 73, 51, 7, 27, 59, 56, 105, 94, 86, 74, 92, 50, 27, 17, 44, 37, 36, 11, 94, 17, 89, 53, 28, 2, 44, 125, 103, 69, 5, 1, 72, 46, 5, 6, 106, 96, 107, 22, 2, 16, 22, 103, 37, 62, 25, 21, 14, 55, 41, 54, 99, 23, 48, 94, 120, 10, 2, 41, 51, 61, 110, 30, 37, 55, 116, 108, 62, 22, 19, 16, 22, 103, 3, 29, 60, 101, 48, 69, 0, 3, 72, 103, 7, 23, 43, 108, 118, 69, 45, 63, 1, 103, 3, 19, 42, 108, 59, 9, 23, 27, 95, 53, 85, 79, 120, 34, 62, 9, 26, 89, 26, 49, 20, 0, 120, 40, 36, 6, 3, 15, 95, 41, 1, 82, 101, 108, 99, 11, 19, 21, 26, 3, 58, 63, 8, 45, 57, 22, 19, 16, 19, 105, 5, 19, 42, 63, 46, 35, 4, 13, 87, 20, 1, 0, 49, 34, 44, 77, 84, 94, 82, 34, 20, 22, 102, 112, 100, 13, 19, 3, 94, 121, 73, 16, 55, 40, 50, 91, 74, 77, 88, 40, 17, 11, 102, 110, 103, 69, 84, 22, 95, 63, 1, 93, 48, 56, 38, 9, 84, 75, 1, 103, 3, 19, 42, 108, 59, 4, 3, 17, 95, 24, 1, 27, 53, 41, 107, 88, 86, 82, 1, 103, 3, 19, 42, 108, 45, 51, 25, 11, 94, 103, 72, 82, 62, 57, 37, 6, 2, 11, 85, 41, 93, 91, 35, 49, 112, 69, 0, 3, 72, 103, 19, 59, 54, 56, 107, 88, 86, 4, 79, 41, 22, 6, 49, 35, 37, 77, 95, 25, 26, 53, 16, 6, 45, 62, 37, 69, 71, 89, 26, 58, 78, 82, 46, 45, 57, 69, 46, 47, 118, 15, 1, 6, 40, 30, 46, 20, 3, 7, 73, 51, 85, 79, 120, 42, 62, 11, 21, 22, 83, 40, 27, 82, 0, 1, 7, 45, 2, 22, 74, 21, 16, 3, 45, 41, 56, 17, 94, 75, 65, 103, 1, 26, 49, 63, 101, 10, 6, 7, 84, 103, 72, 82, 62, 57, 37, 6, 2, 11, 85, 41, 93, 31, 116, 108, 62, 76, 13, 66, 72, 34, 6, 92, 40, 57, 56, 13, 94, 25, 26, 50, 7, 30, 98, 108, 62, 69, 11, 75, 1, 103, 8, 73, 120, 56, 35, 12, 5, 76, 73, 34, 27, 22, 120, 113, 107, 3, 3, 12, 89, 51, 28, 29, 54, 100, 98, 30, 11, 89, 26, 58, 78, 82, 46, 45, 57, 69, 38, 14, 91, 62, 16, 0, 50, 63, 107, 88, 86, 4, 79, 41, 22, 6, 49, 35, 37, 69, 38, 14, 91, 62, 16, 0, 50, 63, 99, 10, 6, 22, 19, 60, 85, 2, 52, 45, 50, 0, 4, 66, 7, 103, 26, 2, 44, 119, 107, 24, 77, 66, 76, 38, 7, 82, 58, 45, 32, 84, 68, 81, 26, 122, 85, 9, 120, 45, 33, 4, 14, 49, 95, 51, 0, 2, 98, 108, 111, 75, 23, 8, 91, 63, 38, 23, 44, 57, 59, 73, 86, 1, 85, 40, 30, 27, 61, 118, 107, 65, 88, 1, 85, 40, 30, 27, 61, 96, 107, 4, 28, 3, 66, 125, 85, 86, 118, 45, 33, 4, 14, 78, 26, 32, 16, 6, 98, 108, 111, 75, 17, 7, 78, 107, 85, 2, 55, 63, 63, 95, 86, 70, 20, 55, 26, 1, 44, 96, 107, 2, 19, 22, 105, 36, 7, 27, 40, 56, 113, 69, 82, 76, 93, 34, 1, 33, 59, 62, 34, 21, 2, 78, 26, 52, 16, 6, 12, 37, 38, 0, 25, 23, 78, 125, 85, 5, 49, 34, 47, 10, 1, 76, 73, 34, 1, 38, 49, 33, 46, 10, 3, 22, 22, 103, 22, 30, 61, 45, 57, 49, 31, 15, 95, 40, 0, 6, 98, 108, 60, 12, 24, 6, 85, 48, 91, 17, 52, 41, 42, 23, 34, 11, 87, 34, 26, 7, 44, 96, 107, 22, 19, 22, 115, 41, 1, 23, 42, 58, 42, 9, 76, 66, 77, 46, 27, 22, 55, 59, 101, 22, 19, 22, 115, 41, 1, 23, 42, 58, 42, 9, 90, 66, 89, 43, 16, 19, 42, 5, 37, 17, 19, 16, 76, 38, 25, 72, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 44, 24, 22, 95, 53, 3, 19, 52, 96, 107, 6, 25, 12, 73, 40, 25, 23, 98, 108, 60, 12, 24, 6, 85, 48, 91, 17, 55, 34, 56, 10, 26, 7, 22, 103, 37, 30, 57, 53, 46, 23, 28, 17, 0, 103, 2, 27, 54, 40, 36, 18, 88, 50, 86, 38, 12, 23, 42, 38, 56, 73, 86, 4, 84, 24, 28, 28, 49, 56, 113, 69, 82, 76, 92, 41, 91, 27, 54, 37, 63, 73, 86, 4, 84, 24, 7, 23, 57, 40, 50, 95, 86, 70, 20, 33, 27, 92, 42, 41, 42, 1, 15, 78, 26, 24, 79, 82, 122, 110, 107, 24, 77, 66, 78, 53, 12, 82, 35, 108, 63, 23, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 37, 7, 78, 50, 5, 82, 101, 108, 111, 75, 21, 13, 85, 44, 28, 23, 120, 113, 107, 3, 32, 13, 83, 35, 78, 82, 124, 98, 42, 15, 23, 26, 26, 122, 85, 20, 45, 34, 40, 17, 31, 13, 84, 111, 6, 23, 44, 56, 34, 11, 17, 17, 19, 60, 85, 27, 62, 108, 99, 22, 19, 22, 78, 46, 27, 21, 43, 98, 38, 0, 2, 10, 85, 35, 85, 79, 101, 113, 107, 71, 62, 39, 123, 3, 87, 82, 36, 48, 107, 22, 19, 22, 78, 46, 27, 21, 43, 98, 63, 28, 6, 7, 26, 122, 72, 79, 120, 110, 3, 32, 55, 38, 24, 110, 14, 82, 49, 42, 107, 77, 5, 7, 78, 51, 28, 28, 63, 63, 101, 22, 3, 1, 89, 34, 6, 1, 113, 108, 56, 0, 2, 22, 83, 41, 18, 1, 118, 63, 62, 6, 21, 7, 73, 52, 93, 28, 45, 32, 39, 73, 86, 64, 73, 50, 22, 17, 61, 63, 56, 71, 90, 66, 65, 58, 92, 73, 120, 37, 45, 69, 94, 17, 95, 51, 1, 27, 54, 43, 56, 75, 21, 13, 87, 55, 25, 23, 44, 41, 98, 69, 5, 7, 78, 51, 28, 28, 63, 63, 101, 6, 25, 15, 74, 43, 16, 6, 61, 100, 48, 24, 90, 66, 24, 52, 0, 17, 59, 41, 56, 22, 84, 75, 1, 103, 8, 82, 61, 32, 56, 0, 86, 11, 92, 103, 93, 7, 43, 41, 57, 69, 80, 68, 26, 111, 90, 46, 119, 57, 56, 0, 4, 61, 94, 38, 1, 19, 119, 101, 101, 17, 19, 17, 78, 111, 6, 23, 44, 56, 34, 11, 17, 17, 20, 50, 7, 30, 113, 101, 48, 69, 31, 4, 26, 111, 6, 23, 44, 56, 34, 11, 17, 17, 20, 52, 0, 17, 59, 41, 56, 22, 95, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 17, 79, 36, 22, 23, 43, 63, 99, 16, 5, 7, 72, 107, 85, 80, 43, 57, 40, 6, 19, 17, 73, 101, 89, 82, 35, 49, 98, 94, 86, 31, 26, 34, 25, 1, 61, 108, 34, 3, 86, 74, 76, 40, 17, 82, 126, 106, 107, 77, 89, 62, 21, 28, 43, 46, 119, 17, 97, 57, 89, 62, 94, 108, 90, 91, 118, 56, 46, 22, 2, 74, 73, 34, 1, 6, 49, 34, 44, 22, 88, 23, 72, 43, 92, 91, 35, 108, 34, 3, 86, 74, 73, 34, 1, 6, 49, 34, 44, 22, 88, 17, 79, 36, 22, 23, 43, 63, 98, 69, 5, 7, 78, 51, 28, 28, 63, 63, 101, 22, 3, 1, 89, 34, 6, 1, 112, 58, 36, 1, 90, 66, 24, 52, 0, 17, 59, 41, 56, 22, 84, 78, 26, 60, 8, 91, 99, 108, 54, 69, 19, 14, 73, 34, 85, 27, 62, 108, 99, 22, 19, 22, 78, 46, 27, 21, 43, 98, 62, 23, 26, 75, 26, 53, 16, 1, 118, 60, 62, 22, 30, 74, 65, 51, 12, 2, 61, 118, 107, 71, 23, 8, 91, 63, 87, 94, 120, 57, 57, 9, 76, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 6, 23, 44, 56, 34, 11, 17, 17, 20, 35, 20, 6, 57, 49, 98, 94, 86, 31, 1, 103, 81, 92, 63, 41, 63, 69, 75, 66, 92, 50, 27, 17, 44, 37, 36, 11, 94, 23, 72, 43, 89, 82, 60, 45, 63, 4, 95, 25, 26, 53, 16, 1, 118, 60, 62, 22, 30, 74, 65, 51, 12, 2, 61, 118, 107, 71, 17, 7, 78, 101, 89, 82, 45, 62, 39, 95, 86, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 17, 19, 44, 45, 54, 76, 77, 66, 71, 124, 85, 86, 118, 60, 36, 22, 2, 66, 7, 103, 19, 7, 54, 47, 63, 12, 25, 12, 18, 50, 7, 30, 116, 108, 47, 4, 2, 3, 19, 60, 85, 0, 61, 63, 101, 21, 3, 17, 82, 111, 14, 6, 33, 60, 46, 95, 86, 64, 74, 40, 6, 6, 122, 96, 107, 16, 4, 14, 0, 103, 0, 0, 52, 96, 107, 21, 23, 16, 91, 42, 6, 72, 120, 40, 42, 17, 23, 31, 19, 124, 85, 15, 99, 108, 111, 75, 17, 7, 78, 20, 22, 0, 49, 60, 63, 69, 75, 66, 92, 50, 27, 17, 44, 37, 36, 11, 94, 23, 72, 43, 92, 9, 120, 62, 46, 22, 88, 18, 79, 52, 29, 90, 35, 56, 50, 21, 19, 88, 26, 101, 18, 23, 44, 31, 40, 23, 31, 18, 78, 101, 89, 82, 45, 62, 39, 95, 86, 23, 72, 43, 89, 82, 40, 45, 57, 4, 27, 17, 0, 103, 14, 80, 7, 110, 113, 69, 50, 3, 78, 34, 91, 28, 55, 59, 99, 76, 11, 31, 19, 124, 85, 15, 99, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 82, 101, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 2, 11, 2, 7, 72, 49, 20, 30, 120, 113, 107, 3, 63, 12, 78, 124, 85, 5, 49, 34, 47, 10, 1, 76, 89, 43, 16, 19, 42, 24, 34, 8, 19, 13, 79, 51, 85, 79, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 44, 24, 22, 95, 53, 3, 19, 52, 108, 118, 69, 16, 52, 85, 46, 17, 73, 120, 59, 34, 11, 18, 13, 77, 105, 22, 29, 54, 63, 36, 9, 19, 66, 7, 103, 14, 15, 99, 108, 60, 12, 24, 6, 85, 48, 91, 34, 52, 45, 50, 0, 4, 8, 73, 103, 72, 82, 8, 32, 42, 28, 19, 16, 80, 52, 78, 82, 124, 98, 45, 11, 88, 11, 84, 46, 1, 82, 101, 108, 45, 16, 24, 1, 78, 46, 26, 28, 112, 63, 103, 69, 21, 78, 26, 53, 92, 9, 120, 47, 107, 88, 86, 1, 26, 59, 9, 82, 60, 35, 40, 16, 27, 7, 84, 51, 78, 82, 42, 41, 63, 16, 4, 12, 26, 41, 16, 5, 120, 46, 42, 14, 71, 80, 9, 105, 19, 28, 7, 37, 37, 12, 2, 74, 73, 107, 85, 17, 116, 108, 57, 76, 77, 66, 71, 124, 85, 86, 118, 42, 37, 75, 4, 7, 91, 35, 12, 82, 101, 108, 45, 16, 24, 1, 78, 46, 26, 28, 112, 36, 98, 30, 86, 16, 95, 51, 0, 0, 54, 108, 35, 69, 80, 68, 26, 47, 93, 91, 99, 108, 54, 94, 86, 21, 83, 41, 17, 29, 47, 98, 27, 41, 55, 59, 127, 21, 42, 38, 1, 28, 14, 69, 75, 66, 106, 11, 52, 43, 29, 30, 20, 49, 47, 50, 127, 124, 85, 5, 49, 34, 47, 10, 1, 76, 124, 14, 57, 55, 7, 24, 18, 53, 51, 66, 7, 103, 51, 59, 20, 9, 20, 49, 47, 50, 127, 124, 85, 27, 62, 108, 99, 22, 21, 16, 83, 55, 1, 67, 113, 108, 99, 85, 90, 66, 95, 49, 20, 30, 113, 100, 56, 6, 4, 11, 74, 51, 68, 91, 99, 108, 34, 3, 86, 74, 73, 36, 7, 27, 40, 56, 121, 76, 86, 74, 10, 107, 85, 23, 46, 45, 39, 76, 94, 17, 89, 53, 28, 2, 44, 126, 98, 94, 86, 7, 76, 38, 25, 90, 43, 56, 57, 76, 77, 66, 71, 103, 19, 27, 54, 45, 39, 9, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 37, 7, 78, 50, 5, 82, 101, 108, 41, 4, 29, 83, 8, 116, 91, 19, 50, 45, 51, 54, 19, 22, 79, 55, 78, 82, 124, 98, 40, 10, 25, 9, 83, 34, 85, 79, 120, 46, 42, 14, 71, 80, 9, 105, 22, 29, 55, 39, 34, 0, 77, 66, 30, 105, 20, 24, 57, 52, 107, 88, 86, 0, 91, 44, 68, 64, 107, 98, 42, 15, 23, 26, 1, 103, 81, 92, 63, 41, 63, 69, 75, 66, 88, 38, 30, 67, 106, 127, 101, 2, 19, 22, 1, 103, 81, 92, 40, 35, 56, 17, 86, 95, 26, 37, 20, 25, 105, 126, 120, 75, 6, 13, 73, 51, 78, 82, 124, 98, 44, 0, 2, 49, 89, 53, 28, 2, 44, 108, 118, 69, 20, 3, 81, 118, 71, 65, 118, 43, 46, 17, 37, 1, 72, 46, 5, 6, 99, 108, 60, 12, 24, 6, 85, 48, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 82, 101, 108, 41, 4, 29, 83, 8, 116, 91, 1, 61, 56, 31, 12, 27, 7, 85, 50, 1, 73, 120, 59, 34, 11, 18, 13, 77, 105, 22, 30, 61, 45, 57, 49, 31, 15, 95, 40, 0, 6, 120, 113, 107, 7, 23, 9, 11, 117, 70, 92, 59, 32, 46, 4, 4, 54, 83, 42, 16, 29, 45, 56, 112, 69, 1, 11, 84, 35, 26, 5, 118, 63, 46, 17, 63, 12, 78, 34, 7, 4, 57, 32, 107, 88, 86, 0, 91, 44, 68, 64, 107, 98, 56, 0, 2, 43, 84, 51, 16, 0, 46, 45, 39, 94, 86, 21, 83, 41, 17, 29, 47, 98, 40, 9, 19, 3, 72, 14, 27, 6, 61, 62, 61, 4, 26, 66, 7, 103, 23, 19, 51, 125, 121, 86, 88, 1, 86, 34, 20, 0, 17, 34, 63, 0, 4, 20, 91, 43, 78, 82, 47, 37, 37, 1, 25, 21, 20, 36, 26, 28, 43, 35, 39, 0, 86, 95, 26, 37, 20, 25, 105, 126, 120, 75, 21, 13, 84, 52, 26, 30, 61, 119, 107, 18, 31, 12, 94, 40, 2, 92, 8, 32, 42, 28, 19, 16, 80, 52, 85, 79, 120, 46, 42, 14, 71, 80, 9, 105, 37, 30, 57, 53, 46, 23, 28, 17, 1, 103, 81, 92, 62, 34, 101, 12, 24, 11, 78, 103, 72, 82, 58, 45, 32, 84, 68, 81, 20, 33, 27, 45, 49, 34, 34, 17, 77, 66, 30, 105, 19, 28, 118, 62, 46, 4, 18, 27, 26, 122, 85, 16, 57, 39, 122, 87, 69, 76, 72, 34, 20, 22, 33, 119, 107, 24, 86, 31, 26, 36, 20, 6, 59, 36, 107, 77, 19, 75, 65, 103, 8, 82, 46, 45, 57, 69, 6, 3, 72, 38, 24, 1, 120, 113, 107, 30, 11, 89, 26, 53, 16, 1, 118, 42, 36, 23, 51, 3, 89, 47, 93, 20, 45, 34, 40, 17, 31, 13, 84, 103, 93, 2, 113, 55, 107, 12, 16, 66, 18, 111, 90, 46, 119, 57, 56, 0, 4, 61, 94, 38, 1, 19, 119, 101, 101, 17, 19, 17, 78, 111, 5, 92, 45, 62, 39, 76, 95, 66, 74, 38, 7, 19, 53, 63, 101, 16, 5, 7, 72, 103, 72, 82, 40, 119, 107, 12, 16, 66, 18, 111, 90, 46, 119, 23, 21, 57, 89, 63, 16, 27, 90, 46, 60, 103, 100, 76, 88, 22, 95, 52, 1, 90, 40, 98, 62, 23, 26, 75, 19, 103, 5, 19, 42, 45, 38, 22, 88, 20, 85, 35, 85, 79, 120, 60, 112, 69, 11, 75, 1, 103, 5, 19, 42, 45, 38, 22, 88, 18, 86, 38, 12, 23, 42, 108, 118, 69, 6, 14, 91, 62, 16, 0, 99, 108, 57, 0, 2, 23, 72, 41, 85, 2, 57, 62, 42, 8, 5, 89, 26, 58, 92, 92, 59, 45, 39, 9, 94, 25, 71, 107]);

      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };
      /**
       * Поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0].link);
        var url = embed + 'search?query=' + encodeURIComponent(component.cleanTitle(select_title));
        var cookie = check_cookie;
        var headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': ref,
          'User-Agent': user_agent,
          'Cookie': cookie
        } : {};
        var prox_enc_page = '';

        if (prox) {
          prox_enc_page += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc_page += 'param/Referer=' + encodeURIComponent(ref) + '/';
          prox_enc_page += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc_stream = prox_enc_page;
          prox_enc_page += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }

        network.clear();
        network.timeout(1000 * 10);
        network["native"](component.proxyLink(url, prox, prox_enc_page), function (str) {
          str = (str || '').replace(/\n/g, '');
          var links = object.movie.number_of_seasons ? str.match(/<div class="title"><a href="\/(serial|tv_show)\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g) : str.match(/<div class="title"><a href="\/film\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g);
          var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
          var search_year = parseInt((search_date + '').slice(0, 4));

          if (links) {
            var is_sure = false;
            var items = links.map(function (l) {
              var div = $(l),
                  link = $('a', div),
                  titl = link.attr('title') || link.text() || '';
              var year;
              var found = titl.match(/^(.*)\((\d{4})\)$/);

              if (found) {
                year = parseInt(found[2]);
                titl = found[1].trim();
              }

              return {
                year: year,
                title: titl,
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (select_title) {
                var tmp = cards.filter(function (c) {
                  return component.containsTitle(c.title, select_title);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp.length) _tmp = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp.length) cards = _tmp;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (select_title) {
                  is_sure |= component.equalTitle(cards[0].title, select_title);
                }
              }
            }

            if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else if (str.indexOf('/recaptcha/api.js') !== -1 || str.indexOf('form action="/check?') !== -1) {
            if (prox) {
              component.empty(Lampa.Lang.translate('online_mod_captcha_proxy'));
            } else {
              component.empty(Lampa.Lang.translate('online_mod_captcha_address') + embed);
            }
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function filter() {
        filter_items = {
          season: [],
          voice: []
        };

        if (is_playlist) {
          extract.forEach(function (item) {
            if (item.playlist || item.folder) {
              filter_items.season.push(item.title || item.comment || '');
            }
          });
        }

        if (!filter_items.season[choice.season]) choice.season = 0;

        if (is_playlist) {
          extract.forEach(function (item, i) {
            var playlist = item.playlist || item.folder;

            if (playlist) {
              if (i == choice.season) {
                playlist.forEach(function (eps) {
                  if (eps.file) {
                    component.parsePlaylist(eps.file).forEach(function (el) {
                      if (el.voice && filter_items.voice.indexOf(el.voice) == -1) {
                        filter_items.voice.push(el.voice);
                      }
                    });
                  }
                });
              }
            } else if (item.file) {
              component.parsePlaylist(item.file).forEach(function (el) {
                if (el.voice && filter_items.voice.indexOf(el.voice) == -1) {
                  filter_items.voice.push(el.voice);
                }
              });
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;
        component.filter(filter_items, choice);
      }

      function filtred() {
        var filtred = [];

        if (is_playlist) {
          var playlist = extract;
          var season = object.movie.number_of_seasons && 1;

          if (extract[choice.season] && (extract[choice.season].playlist || extract[choice.season].folder)) {
            playlist = extract[choice.season].playlist || extract[choice.season].folder;
            season = parseInt(extract[choice.season].title || extract[choice.season].comment || '');
            if (isNaN(season)) season = 1;
          }

          playlist.forEach(function (eps, index) {
            var items = extractItems(eps.file, filter_items.voice[choice.voice]);

            if (items.length) {
              var title = eps.title || eps.comment || '';
              var alt_voice = title.match(/\d+ серия (.*)$/i);
              var info = items[0].voice || alt_voice && alt_voice[1].trim() || translation;
              if (info == title) info = '';

              if (season) {
                var episode = parseInt(title);
                if (isNaN(episode)) episode = index + 1;
                filtred.push({
                  title: component.formatEpisodeTitle(season, null, title),
                  quality: items[0].quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                  info: info ? ' / ' + info : '',
                  season: season,
                  episode: episode,
                  file: eps.file,
                  voice: items[0].voice,
                  subtitles: parseSubs(eps.subtitle)
                });
              } else {
                filtred.push({
                  title: title || select_title,
                  quality: items[0].quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                  info: info ? ' / ' + info : '',
                  file: eps.file,
                  voice: items[0].voice,
                  subtitles: parseSubs(eps.subtitle)
                });
              }
            }
          });
        } else {
          filtred = extract;
        }

        return filtred;
      }

      function parseSubs(str) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          return {
            label: item.label,
            url: component.processSubs(component.proxyLink(link, prox, prox_enc_stream))
          };
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить данные о фильме
       * @param {String} str
       */


      function extractData(vod, page) {
        var quality_match = page.match(/<li><b>Качество:<\/b>([^<,]+)<\/li>/i);
        var translation_match = page.match(/<li><b>Перевод:<\/b>([^<,]+)<\/li>/i);
        quality_type = quality_match ? quality_match[1].trim() : '';
        translation = translation_match ? translation_match[1].trim() : '';
        var pl = vod && vod.file && Lampa.Arrays.decodeJson(vod.file, []) || [];

        if (pl.length) {
          extract = pl;
          is_playlist = true;
        } else if (vod && vod.file) {
          var file = vod.file;
          var found = [];
          var subtiles = parseSubs(vod.subtitle);

          if (file) {
            var voices = {};
            component.parsePlaylist(file).forEach(function (item) {
              var prev = voices[item.voice || ''];
              var quality_str = item.label.match(/(\d\d\d+)/);
              var quality = quality_str ? parseInt(quality_str[1]) : NaN;

              if (!prev || quality > prev.quality) {
                voices[item.voice || ''] = {
                  quality: quality
                };
              }
            });

            for (var voice in voices) {
              var el = voices[voice];
              found.push({
                title: voice || translation || select_title,
                quality: el.quality + 'p' + (quality_type ? ' - ' + quality_type : ''),
                info: '',
                file: file,
                voice: voice,
                subtitles: subtiles
              });
            }
          }

          extract = found;
          is_playlist = false;
        } else component.emptyForQuery(select_title);
      }

      function getUrlWithParams(url, params) {
        url = url || '';
        url = component.fixLink(url, ref);

        if (params) {
          for (var name in params) {
            var value = params[name];
            url = Lampa.Utils.addUrlComponent(url, encodeURIComponent(name) + '=' + encodeURIComponent(value));
          }
        }

        return url;
      }

      function searchMovieUrl(str) {
        var regex = /<script src="([^"]*\/movie\.js\b[^"]*)"/g;
        var found;

        while ((found = regex.exec(str)) !== null) {
          var start = str.lastIndexOf('<!--', found.index);
          var end = str.lastIndexOf('-->', found.index);
          if (end >= start) return found[1];
        }

        return '';
      }

      function getPage(url) {
        url = component.fixLink(url, ref);
        var cookie = (check_cookie ? check_cookie + '; ' : '') + 'player_type=new; file_type=' + file_type;
        var headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': url,
          'User-Agent': user_agent,
          'Cookie': cookie
        } : {};
        var prox_enc_page = '';

        if (prox) {
          prox_enc_page += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc_page += 'param/Referer=' + encodeURIComponent(url) + '/';
          prox_enc_stream = prox_enc_page;
          prox_enc_page += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc_page += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }

        network.clear();
        network.timeout(1000 * 10);
        network["native"](component.proxyLink(url, prox, prox_enc_page), function (str) {
          str = (str || '').replace(/\n/g, '');
          var MOVIE_ID = str.match(/var MOVIE_ID = (\d+);/);
          var PLAYER_CUID = str.match(/var PLAYER_CUID = "([^"]+)";/);
          var IDENTIFIER = str.match(/var IDENTIFIER = "([^"]+)";/);
          var IMAGES_URL_SCRIPT = str.match(/<script[^>]*>([^<]*var IMAGES_URL = [^<]*)<\/script>/);
          var MOVIE_ID_SCRIPT = str.match(/<script[^>]*>([^<]*var MOVIE_ID = [^<]*)<\/script>/);
          var MOVIE_URL = searchMovieUrl(str);

          if (MOVIE_ID && PLAYER_CUID && IDENTIFIER && MOVIE_ID_SCRIPT && MOVIE_URL) {
            var SCRIPTS = IMAGES_URL_SCRIPT ? IMAGES_URL_SCRIPT.index > MOVIE_ID_SCRIPT.index ? [MOVIE_ID_SCRIPT[1], IMAGES_URL_SCRIPT[1]] : [IMAGES_URL_SCRIPT[1], MOVIE_ID_SCRIPT[1]] : [MOVIE_ID_SCRIPT[1], ''];
            if (SCRIPTS[1] === SCRIPTS[0]) SCRIPTS[1] = '';
            var movie_url = component.fixLink(MOVIE_URL, ref);
            network.clear();
            network.timeout(1000 * 10);
            network["native"](component.proxyLink(movie_url, prox, prox_enc_page), function (script) {
              var params = {};

              try {
                params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script || ''), JSON.stringify('new'), JSON.stringify(file_type)].join(',') + ');');
              } catch (e) {}

              var user_url = params.user && params.user.url;

              if (!user_url) {
                component.empty('No user_url');
                return;
              }

              var user_params = params.user && params.user.params || {};
              user_params['_'] = Date.now();
              user_url = getUrlWithParams(user_url || '/user_data', user_params);
              network.clear();
              network.timeout(1000 * 10);
              network["native"](component.proxyLink(user_url, prox, prox_enc_page), function (data) {
                if (data && !data.error) {
                  var _params = {};

                  try {
                    _params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script), JSON.stringify('new'), JSON.stringify(file_type), JSON.stringify(data)].join(',') + ');');
                  } catch (e) {}

                  if (data.allow_watch != null && !data.allow_watch) {
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink') + (data.client_country ? ': ' + data.client_country : ''));
                    component.emptyForQuery(select_title);
                    return;
                  } else if (!_params.vod) {
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
                    component.emptyForQuery(select_title);
                    return;
                  }

                  var vod_url = _params.vod.url || '';

                  if (!vod_url) {
                    component.empty('No vod_url');
                    return;
                  }

                  var vod_params = _params.vod && _params.vod.params || {};
                  vod_params['_'] = Date.now();
                  vod_url = getUrlWithParams(vod_url || '/vod/' + MOVIE_ID[1], vod_params);
                  network.clear();
                  network.timeout(1000 * 10);
                  network["native"](component.proxyLink(vod_url, prox, prox_enc_page), function (files) {
                    component.loading(false);
                    var params = {};

                    try {
                      params = (0, eval)(decrypt + [JSON.stringify(component.decodeHtml(SCRIPTS[0])), JSON.stringify(component.decodeHtml(SCRIPTS[1])), JSON.stringify(script), JSON.stringify('new'), JSON.stringify(file_type), JSON.stringify(data), JSON.stringify(files)].join(',') + ');');
                    } catch (e) {}

                    extractData(params.player, str);
                    filter();
                    append(filtred());
                  }, function (a, c) {
                    component.empty(network.errorDecode(a, c));
                  }, false, {
                    dataType: 'text',
                    withCredentials: logged_in,
                    headers: headers
                  });
                } else if (data && data.error) {
                  if (prox) {
                    component.empty(Lampa.Lang.translate('online_mod_captcha_proxy'));
                  } else {
                    component.empty(Lampa.Lang.translate('online_mod_captcha_address') + embed);
                  }
                } else component.emptyForQuery(select_title);
              }, function (a, c) {
                component.empty(network.errorDecode(a, c));
              }, false, {
                dataType: 'text',
                withCredentials: logged_in,
                headers: headers
              });
            }, function (a, c) {
              component.empty(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              withCredentials: logged_in,
              headers: headers
            });
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          withCredentials: logged_in,
          headers: headers
        });
      }
      /**
       * Получить потоки
       * @param {String} str
       * @param {String} voice
       * @returns array
       */


      function extractItems(str, voice) {
        if (!str) return [];

        try {
          var list = component.parsePlaylist(str);

          if (voice) {
            var tmp = list.filter(function (el) {
              return el.voice == voice;
            });

            if (tmp.length) {
              list = tmp;
            } else {
              list = list.filter(function (el) {
                return typeof el.voice === 'undefined';
              });
            }
          }

          var items = list.map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var file = item.links[0] || '';
            return {
              label: item.label,
              voice: item.voice,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyLink(file, prox, prox_enc_stream)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function getStream(element) {
        var file = '',
            quality = false;
        var items = extractItems(element.file, element.voice);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        element.stream = file;
        element.qualitys = quality;
        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.title, 'kinobase'].join('') : object.movie.original_title + element.quality + 'kinobase');
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            getStream(element);

            if (element.stream) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  getStream(elem);
                  playlist.push({
                    url: component.getDefaultQuality(elem.qualitys, elem.stream),
                    quality: component.renameQualityMap(elem.qualitys),
                    subtitles: elem.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              call(getStream(element));
            }
          });
        });
        component.start(true);
      }
    }

    function collaps(component, _object, prefer_dash) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true; //let prefer_dash  = Lampa.Storage.field('online_mod_prefer_dash') === true

      var lampa_player = Lampa.Storage.field('online_mod_collaps_lampa_player') === true;
      var prox = component.proxy('collaps');
      var base = 'api.ortified.ws';
      var host = 'https://' + base;
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var embed = (prefer_http ? 'http:' : 'https:') + '//' + base + '/embed/';
      var embed2 = (prefer_http ? 'http:' : 'https:') + '//api.kinogram.best/embed/';
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var prox_enc_stream = prox_enc;

      if (prox) {
        prox_enc += 'ip/';
        prox_enc_stream += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc_stream += 'param/Referer=' + encodeURIComponent(ref) + '/';
      }

      var net_method = lampa_player ? 'silent' : 'native';
      var play_headers = !prox && !lampa_player && Lampa.Platform.is('android') ? {
        'User-Agent': user_agent,
        'Origin': host,
        'Referer': ref
      } : {};
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };

      function collaps_api_search(api, callback, error) {
        network.clear();
        network.timeout(10000);
        network[net_method](component.proxyLink(embed + api, prox, prox_enc, 'enc2t'), function (str) {
          if (callback) callback(str || '');
        }, function (a, c) {
          if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1)) {
            if (callback) callback('');
          } else {
            network.clear();
            network.timeout(10000);
            network[net_method](component.proxyLink(embed2 + api, prox, prox_enc, 'enc2t'), function (str) {
              if (callback) callback(str || '');
            }, function (a, c) {
              if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
                if (callback) callback('');
              } else if (error) error(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              headers: play_headers
            });
          }
        }, false, {
          dataType: 'text',
          headers: play_headers
        });
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var api = (+kinopoisk_id ? 'kp/' : 'imdb/') + kinopoisk_id;
        collaps_api_search(api, function (str) {
          if (str) parse(str);else if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            collaps_api_search('imdb/' + object.movie.imdb_id, function (str) {
              if (str) parse(str);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      this.loadEmbed = function (url, nextObject, title, metadata_proxy) {
        object = nextObject;
        select_title = title || object.movie.title;
        var origin = Utils.parseURL(url).origin;
        if (metadata_proxy === undefined) metadata_proxy = prox;
        var metadata_encoded = metadata_proxy ? 'param/User-Agent=' + encodeURIComponent(user_agent) + '/param/Origin=' + encodeURIComponent(origin) + '/param/Referer=' + encodeURIComponent(origin + '/') + '/' : '';
        if (prox) {
          prox_enc_stream = 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc_stream += 'param/Origin=' + encodeURIComponent(origin) + '/';
          prox_enc_stream += 'param/Referer=' + encodeURIComponent(origin + '/') + '/';
        }
        if (Lampa.Platform.is('android')) {
          play_headers.Origin = origin;
          play_headers.Referer = origin + '/';
        }
        network.clear();
        network.timeout(10000);
        network[net_method](component.proxyLink(url, metadata_proxy, metadata_encoded, 'enc2t'), parse, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, { dataType: 'text', headers: play_headers });
      };

      this.loadMarkup = function (str, nextObject, title) {
        object = nextObject;
        select_title = title || object.movie.title;
        parse(str);
      };

      function parse(str) {
        component.loading(false);
        var json = Utils.findPlayerConfig(str);

        if (json) {
          extract = json;

          if (extract.playlist && extract.playlist.seasons) {
            extract.playlist.seasons.sort(function (a, b) {
              return a.season - b.season;
            });
          }

          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };

        if (extract.playlist && extract.playlist.seasons) {
          extract.playlist.seasons.forEach(function (season) {
            filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + season.season);
          });
        }

        if (!filter_items.season[choice.season]) choice.season = 0;
        component.filter(filter_items, choice);
      }

      function fixUrl(url, add) {
        url = url || '';

        if (url && add) {
          url = Lampa.Utils.addUrlComponent(url, 'vp');
        }

        url = component.fixLinkProtocol(url, prefer_http, 'full');
        return url;
      }

      function streamLink(url) {
        return prox ? component.proxyLink(url, prox, prox_enc_stream) : component.proxyStream(url, 'collaps');
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.playlist) {
          extract.playlist.seasons.forEach(function (season, i) {
            if (i == choice.season) {
              season.episodes.forEach(function (episode) {
                var audio_tracks = episode.audio.names.map(function (name) {
                  return {
                    language: name
                  };
                });
                var audio_infos = episode.audio.names.map(function (name, index) {
                  var order = episode.audio.order && episode.audio.order[index];
                  return {
                    name: name,
                    order: order != null ? order : 1000
                  };
                });
                audio_infos.sort(function (a, b) {
                  return a.order - b.order;
                });
                var audio_names = audio_infos.map(function (a) {
                  return a.name;
                }).filter(function (name) {
                  return name && name !== 'delete';
                });
                var file = fixUrl(prefer_dash && (episode.dasha || episode.dash) || episode.hls || '', true);
                filtred.push({
                  title: episode.title,
                  quality: '360p ~ ' + (prefer_dash ? '1080p' : '720p'),
                  info: audio_names.length ? ' / ' + component.uniqueNamesShortText(audio_names, 80) : '',
                  season: season.season,
                  episode: parseInt(episode.episode),
                  file: streamLink(file),
                  subtitles: episode.cc ? episode.cc.map(function (c) {
                    var url = fixUrl(c.url || '');
                    return {
                      label: c.name,
                      url: component.processSubs(streamLink(url))
                    };
                  }) : false,
                  audio_tracks: audio_tracks.length ? audio_tracks : false
                });
              });
            }
          });
        } else if (extract.source) {
          var max_quality = 0;
          extract.qualityByWidth && Lampa.Arrays.getKeys(extract.qualityByWidth).forEach(function (resolution) {
            var quality = extract.qualityByWidth[resolution] || 0;
            if (!prefer_dash && quality > 720) quality = 0;
            if (quality > max_quality) max_quality = quality;
          });
          var audio_tracks = extract.source.audio.names.map(function (name) {
            return {
              language: name
            };
          });
          var audio_infos = extract.source.audio.names.map(function (name, index) {
            var order = extract.source.audio.order && extract.source.audio.order[index];
            return {
              name: name,
              order: order != null ? order : 1000
            };
          });
          audio_infos.sort(function (a, b) {
            return a.order - b.order;
          });
          var audio_names = audio_infos.map(function (a) {
            return a.name;
          }).filter(function (name) {
            return name && name !== 'delete';
          });
          var file = fixUrl(prefer_dash && (extract.source.dasha || extract.source.dash) || extract.source.hls || '', true);
          filtred.push({
            title: extract.title || select_title,
            quality: max_quality ? max_quality + 'p' : '360p ~ ' + (prefer_dash ? '1080p' : '720p'),
            info: audio_names.length ? ' / ' + component.uniqueNamesShortText(audio_names, 80) : '',
            file: streamLink(file),
            subtitles: extract.source.cc ? extract.source.cc.map(function (c) {
              var url = fixUrl(c.url || '');
              return {
                label: c.name,
                url: component.processSubs(streamLink(url))
              };
            }) : false,
            audio_tracks: audio_tracks.length ? audio_tracks : false
          });
        }

        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.title].join('') : object.movie.original_title + 'collaps');
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function (event, options) {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);

            if (element.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(null, element.file),
                subtitles: element.subtitles,
                translate: {
                  tracks: element.audio_tracks
                },
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title),
                headers: play_headers
              };

              if (element.season) {
                items.forEach(function (elem) {
                  playlist.push({
                    url: component.getDefaultQuality(null, elem.file),
                    subtitles: elem.subtitles,
                    translate: {
                      tracks: elem.audio_tracks
                    },
                    timeline: elem.timeline,
                    title: elem.title,
                    headers: play_headers
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              if (options && options.runas) Lampa.Player.runas(options.runas);else if (lampa_player) Lampa.Player.runas('lampa');
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call({
                file: element.file
              });
            }
          });
        });
        component.start(true);
      }
    }

    function cdnmovies(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var prox = component.proxy('cdnmovies');
      var host = Utils.decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 4, 49, 40, 46, 10, 30, 6, 20, 40, 27, 30, 49, 34, 46]);
      var ref = host + '/';
      var user_agent = 'Mozilla/5.0 (Linux; Android 10; K; client) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36';
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var embed_host = 'https://cdnmovies-stream.online';
      var embed = embed_host + '/';
      var prox_enc2 = '';

      if (prox) {
        prox_enc2 += 'param/Origin=' + encodeURIComponent(embed_host) + '/';
        prox_enc2 += 'param/Referer=' + encodeURIComponent(embed) + '/';
        prox_enc2 += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function cdn_api_search(api, callback, error) {
        var call_success = function call_success(str) {
          if (callback) callback(str || '');
        };

        var call_error = function call_error(a, c) {
          if (a.onlineChallenge) { if (error) error(network.errorDecode(a, c)); return; }
          if ((a.status == 404 || a.status == 403) && (!a.responseText || a.responseText.indexOf('<title>Not Found</title>') !== -1 || a.responseText.indexOf('Не найдено!') !== -1 || a.responseText.indexOf('Контент не найден или недоступен в вашем регионе!') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        {
          var meta = $('head meta[name="referrer"]');
          var referrer = meta.attr('content') || 'never';
          meta.attr('content', 'origin');

          try {
            network.clear();
            network.timeout(10000);
            network["native"](component.proxyLink(embed + api, prox, prox_enc), call_success, call_error, false, {
              dataType: 'text',
              headers: headers
            });
          } finally {
            meta.attr('content', referrer);
          }
        }
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;

        var empty = function empty() {
          component.emptyForQuery(select_title);
        };

        var error = component.empty.bind(component);
        var api = (+kinopoisk_id ? 'kinopoisk/' : 'imdb/') + kinopoisk_id + '/iframe';
        cdn_api_search(api, function (str) {
          parse(str || '', function () {
            if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
              cdn_api_search('imdb/' + object.movie.imdb_id + '/iframe', function (str) {
                parse(str || '', empty);
              }, error);
            } else empty();
          });
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parse(str, empty) {
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/Playerjs\(({.*?})\);/);
        var json;

        try {
          json = find && (0, eval)('"use strict"; (function(){ return ' + find[1] + '; })();');
        } catch (e) {}

        var video;
        var player = json && json.file && decode(json.file);

        try {
          video = player && JSON.parse(player);
        } catch (e) {}

        if (video && video.length && video.forEach) {
          component.loading(false);
          extract = video;
          filter();
          append(filtred());
        } else empty();
      }

      function decode(data) {
        if (!startsWith(data, '#')) return data;

        var enc = function enc(str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        };

        var dec = function dec(str) {
          return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        };

        var trashList = ['wNp2wBTNcPRQvTC0_CpxCsq_8T1u9Q', 'md-Od2G9RWOgSa5HoBSSbWrCyIqQyY', 'kzuOYQqB_QSOL-xzN_Kz3kkgkHhHit', '6-xQWMh7ertLp8t_M9huUDk1M0VrYJ', 'RyTwtf15_GLEsXxnpU4Ljjd0ReY-VH'];
        var x = data.substring(2);
        trashList.forEach(function (trash) {
          x = x.replace('//' + enc(trash), '');
        });

        try {
          x = dec(x);
        } catch (e) {
          x = '';
        }

        return x;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItemsPlaylist(str, url) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var link = item.links[0] || '';
            link = link.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
            link = component.fixLinkProtocol(link, prefer_http, true);
            if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            return {
              label: item.label,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyLink(link, prox, prox_enc2)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var url = element.file || '';

        if (startsWith(url, '[')) {
          parseStream(element, call, error, extractItemsPlaylist, url, '');
          return;
        }

        url = url.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
        url = component.fixLinkProtocol(url, prefer_http, true);
        if (prefer_mp4) url = url.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');

        if (url) {
          element.stream = component.proxyLink(url, prox, prox_enc2);
          element.qualitys = false;
          call(element);
        } else error();
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        var season_objs = [];
        extract.forEach(function (s) {
          if (s.folder) {
            s.title = s.title || s.comment || '';
            s.season_num = parseInt(s.title.match(/\d+/));
            season_objs.push(s);
          }
        });
        season_objs.sort(function (a, b) {
          var cmp = a.season_num - b.season_num;
          if (cmp) return cmp;
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        filter_items.season = season_objs.map(function (s) {
          return s.title;
        });
        if (!filter_items.season[choice.season]) choice.season = 0;
        var s = season_objs[choice.season];

        if (s && s.folder) {
          s.folder.forEach(function (e) {
            if (e.folder) {
              e.folder.forEach(function (v) {
                var voice = v.title || v.comment || '';
                if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
              });
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }

      function parseSubs(str) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          link = link.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
          link = component.fixLinkProtocol(link, prefer_http, true);
          return {
            label: item.label,
            url: component.processSubs(component.proxyLink(link, prox, prox_enc2))
          };
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.forEach(function (data) {
          if (data.folder) {
            var s_title = data.title || data.comment || '';

            if (s_title == filter_items.season[choice.season]) {
              data.folder.forEach(function (e) {
                if (e.folder) {
                  var e_title = e.title || e.comment || '';
                  var found = false;
                  var found_broken = false;
                  e.folder.forEach(function (v) {
                    var voice = v.title || v.comment || '';

                    if (!found && voice == filter_items.voice[choice.voice] && v.file) {
                      if (v.file.indexOf('//sarnage.cc/') !== -1) {
                        found_broken = true;
                      } else {
                        found = true;
                        var episode_num = parseInt(e_title.match(/\d+/));
                        var season_num = parseInt(s_title.match(/\d+/));
                        filtred.push({
                          title: component.formatEpisodeTitle(season_num, episode_num),
                          quality: '360p ~ 1080p',
                          info: ' / ' + Lampa.Utils.shortText(voice, 50),
                          season: season_num,
                          episode: episode_num,
                          file: v.file,
                          subtitles: parseSubs(v.subtitle)
                        });
                      }
                    }
                  });

                  if (!found && found_broken) {
                    e.folder.forEach(function (v) {
                      var voice = v.title || v.comment || '';

                      if (!found && voice == filter_items.voice[choice.voice] && v.file) {
                        found = true;
                        var episode_num = parseInt(e_title.match(/\d+/));
                        var season_num = parseInt(s_title.match(/\d+/));
                        filtred.push({
                          title: component.formatEpisodeTitle(season_num, episode_num),
                          quality: '360p ~ 1080p',
                          info: ' / ' + Lampa.Utils.shortText(voice, 50),
                          season: season_num,
                          episode: episode_num,
                          file: v.file,
                          subtitles: parseSubs(v.subtitle)
                        });
                      }
                    });
                  }
                }
              });
            }
          } else {
            filtred.push({
              title: data.title || data.comment || select_title,
              quality: '360p ~ 1080p',
              info: '',
              file: data.file,
              subtitles: parseSubs(data.subtitle)
            });
          }
        });
        return filtred;
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function filmix(component, _object, _debug) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var debug = _debug;
      var prox = component.proxy('filmix');
      var prox2 = component.proxy('filmix_site');
      var prox3 = component.proxy('filmix_abuse');
      var host = Utils.filmixHost();
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var site = ref;
      var embed = Utils.filmixAppHost() + '/api/v2/';
      var headers = Lampa.Platform.is('android') ? {
        'User-Agent': Utils.filmixUserAgent()
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
      }

      var headers2 = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'X-Requested-With': 'XMLHttpRequest'
      } : {
        'X-Requested-With': 'XMLHttpRequest'
      };
      var prox2_enc = '';

      if (prox2) {
        prox2_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox2_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox2_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      var secret = '';
      var secret_url = '';

      function decodeSecretToken(callback) {
        {
          if (callback) callback();
          return;
        }
      }

      if (!window.mod_filmix) {
        window.mod_filmix = {
          max_qualitie: 480,
          is_max_qualitie: false
        };
      }

      var token = Lampa.Storage.get('filmix_token', '') + '';
      var dev_token = Utils.filmixToken(Utils.randomHex(16), token || 'aaaabbbbccccddddeeeeffffaaaabbbb');
      var abuse_token = prox3 ? Utils.filmixToken(Utils.randomHex(16), 'aaaabbbbccccddddeeeeffffaaaabbbb') : '';
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return find(data[0].id);
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);
        var clean_title = component.cleanTitle(select_title).replace(/\b(\d\d\d\d+)\b/g, '+$1');
        var object_date = object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date || '0000';
        var object_year = parseInt((object_date + '').slice(0, 4));

        if (object_year) {
          clean_title = clean_title.replace(new RegExp(' \\+(' + object_year + ')$'), ' $1');
        }

        var display = function display(json) {
          if (json && json.length && json.forEach) {
            var is_sure = false;
            json.forEach(function (c) {
              if (!c.orig_title) c.orig_title = c.original_title || c.original_name;
              if (!c.year && c.alt_name) c.year = parseInt(c.alt_name.split('-').pop());
            });
            var cards = json;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) find(cards[0].id);else if (json.length) {
              _this.wait_similars = true;
              json.forEach(function (c) {
                c.is_similars = true;
                c.seasons_count = c.last_episode && c.last_episode.season;
                c.episodes_count = c.last_episode && c.last_episode.episode;
              });
              component.similars(json);
              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else component.emptyForQuery(select_title);
        };

        var siteSearch = function siteSearch() {
          var url = site + 'api/v2/suggestions?search_word=' + encodeURIComponent(clean_title);
          network.clear();
          network.timeout(15000);
          network["native"](component.proxyLink(url, prox2, prox2_enc, 'enc2t'), function (json) {
            display(json && json.posts || []);
          }, function (a, c) {
            component.empty(network.errorDecode(a, c));
          }, false, {
            headers: headers2
          });
        };

        var apiSearch = function apiSearch(abuse) {
          var url = embed + 'search' + (abuse ? abuse_token : dev_token);
          url = Lampa.Utils.addUrlComponent(url, 'story=' + encodeURIComponent(clean_title));
          url = abuse ? component.proxyLink(url, prox3, '', '') : component.proxyLink(url, prox, prox_enc, 'enc2t');
          network.clear();
          network.timeout(15000);
          network["native"](url, function (json) {
            if (json && json.length && json.forEach) display(json);else siteSearch();
          }, function (a, c) {
            if (!abuse && abuse_token) apiSearch(true);else siteSearch();
          }, false, {
            headers: headers
          });
        };

        decodeSecretToken(function () {
          return apiSearch();
        });
      };

      function find(filmix_id, abuse, abuse_error, low_quality) {
        if (!debug && !window.mod_filmix.is_max_qualitie) {
          window.mod_filmix.is_max_qualitie = true;
          token = Lampa.Storage.get('filmix_token', '') + '';
          dev_token = Utils.filmixToken(Utils.randomHex(16), token || 'aaaabbbbccccddddeeeeffffaaaabbbb');

          if (token) {
            var url = embed + 'user_profile' + dev_token;
            network.clear();
            network.timeout(15000);
            network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (found) {
              if (found && found.user_data) {
                window.mod_filmix.max_qualitie = 720;
                if (found.user_data.is_pro) window.mod_filmix.max_qualitie = 1080;
                if (found.user_data.is_pro_plus) window.mod_filmix.max_qualitie = 2160;
              }

              end_search();
            }, function (a, c) {
              end_search();
            }, false, {
              headers: headers
            });
          } else end_search();
        } else end_search();

        function end_search() {
          var url = embed + 'post/' + filmix_id + (abuse ? abuse_token : dev_token);
          url = abuse ? component.proxyLink(url, prox3, '', '') : component.proxyLink(url, prox, prox_enc, 'enc2t');

          var not_found = function not_found(str) {
            if (abuse && abuse_error) success(abuse_error);else if (!abuse && abuse_token) find(filmix_id, true, null, true);else if (str) component.empty(str);else component.emptyForQuery(select_title);
          };

          network.clear();
          network.timeout(15000);
          network["native"](url, function (found) {
            var pl_links = found && found.player_links || {};

            if (pl_links.movie && Object.keys(pl_links.movie).length > 0 || pl_links.playlist && Object.keys(pl_links.playlist).length > 0) {
              if (!abuse && abuse_token && checkAbuse(found)) find(filmix_id, true, found);else success(found, low_quality);
            } else {
              console.log('Filmix', 'not found:', filmix_id, pl_links.movie, pl_links.playlist);
              not_found();
            }
          }, function (a, c) {
            console.log('Filmix', 'error:', filmix_id, network.errorDecode(a, c));
            not_found(network.errorDecode(a, c));
          }, false, {
            headers: headers
          });
        }
      }

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };
      /**
       * Успешно, есть данные
       * @param {Object} json
       */


      function success(json, low_quality) {
        component.loading(false);
        extractData(json, low_quality);
        filter();
        append(filtred());
      }

      function checkAbuse(data) {
        var pl_links = data.player_links || {};

        if (pl_links.movie && Object.keys(pl_links.movie).length > 0) {

          for (var ID in pl_links.movie) {
            var file = pl_links.movie[ID];
            var stream_url = file.link || '';

            if (file.translation === 'Заблокировано правообладателем!' && stream_url.indexOf('/abuse_') !== -1) {
              var found = stream_url.match(/https?:\/\/[^\/]+(\/s\/[^\/]*\/)/);

              if (found) {
                {
                  secret = '$1' + found[1];
                  secret_url = '';
                }

                console.log('Filmix', 'abuse:', data.id, Object.keys(pl_links.movie).length);
                return true;
              }
            }
          }
        }

        return false;
      }
      /**
       * Получить информацию о фильме
       * @param {Arrays} data
       */


      function extractData(data, low_quality) {
        extract = {};
        var filmix_max_qualitie = low_quality ? 480 : debug ? 2160 : window.mod_filmix.max_qualitie;
        var pl_links = data.player_links || {};

        if (pl_links.playlist && Object.keys(pl_links.playlist).length > 0) {
          var seasons = [];
          var seas_num = 0;

          for (var season_id in pl_links.playlist) {
            var season = pl_links.playlist[season_id];
            var voices = [];
            ++seas_num;

            for (var voice_id in season) {
              var episodes = season[voice_id];
              var items = [];
              var epis_num = 0;

              for (var episode_id in episodes) {
                var file = episodes[episode_id];
                ++epis_num;
                var quality_eps = file.qualities.filter(function (qualitys) {
                  return !isNaN(qualitys) && qualitys <= filmix_max_qualitie;
                });
                quality_eps.sort(function (a, b) {
                  return b - a;
                });
                var max_quality = quality_eps[0];

                if (max_quality) {
                  var stream_url = file.link || '';
                  stream_url = component.fixLinkProtocol(stream_url, prefer_http, true);

                  if (secret) {
                    stream_url = stream_url.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, secret);
                    if (secret_url) stream_url = stream_url.replace(/^https?:\/\//, secret_url);
                  }

                  var seas_id = parseInt(season_id);
                  var epis_id = parseInt(episode_id);

                  if (isNaN(seas_id) || isNaN(epis_id)) {
                    var s_e = stream_url.substring(stream_url.lastIndexOf('/'));
                    var str_s_e = s_e.match(/s(\d+)e(\d+)_%s\.mp4/i);

                    if (str_s_e) {
                      seas_id = parseInt(str_s_e[1]);
                      epis_id = parseInt(str_s_e[2]);
                    }
                  }

                  if (isNaN(seas_id)) seas_id = seas_num;
                  if (isNaN(epis_id)) epis_id = epis_num;
                  items.push({
                    season: seas_id,
                    episode: epis_id,
                    file: stream_url,
                    quality: max_quality,
                    qualities: quality_eps
                  });
                }
              }

              if (items.length) {
                voices.push({
                  id: voice_id,
                  items: items
                });
              }
            }

            if (voices.length) {
              seasons.push({
                id: season_id,
                title: Lampa.Lang.translate('torrent_serial_season') + ' ' + (isNaN(season_id) ? seas_num : season_id),
                voices: voices
              });
            }
          }

          extract.seasons = seasons;
        } else if (pl_links.movie && Object.keys(pl_links.movie).length > 0) {
          var movies = [];

          for (var ID in pl_links.movie) {
            var _file = pl_links.movie[ID];
            var _max_quality = filmix_max_qualitie;

            var _stream_url = _file.link || '';

            _stream_url = component.fixLinkProtocol(_stream_url, prefer_http, true);

            if (secret) {
              _stream_url = _stream_url.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, secret);
              if (secret_url) _stream_url = _stream_url.replace(/^https?:\/\//, secret_url);
            }

            var _quality_eps = _stream_url.match(/\[([\d,]*)\]\.mp4/i);

            if (_quality_eps) {
              _quality_eps = _quality_eps[1].split(',').map(function (quality) {
                return parseInt(quality);
              }).filter(function (quality) {
                return !isNaN(quality) && quality <= filmix_max_qualitie;
              });

              _quality_eps.sort(function (a, b) {
                return b - a;
              });

              _max_quality = _quality_eps[0];
            }

            if (_max_quality) {
              var file_url = _stream_url.replace(/\[[\d,]*\](\.mp4)/i, '%s$1');

              movies.push({
                translation: _file.translation,
                file: file_url,
                quality: _max_quality,
                qualities: _quality_eps
              });
            }
          }

          extract.movies = movies;
        }
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var media = element.media || {};
        var file = media.file;
        var quality = false;

        if (file) {
          quality = {};

          if (media.qualities) {
            media.qualities.forEach(function (q) {
              quality[q + 'p'] = file.replace(/%s(\.mp4)/i, q + '$1');
            });
            file = file.replace(/%s(\.mp4)/i, media.qualities[0] + '$1');
          }
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.seasons ? extract.seasons.map(function (s) {
            return s.title;
          }) : [],
          voice: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.seasons && extract.seasons[choice.season]) {
          filter_items.voice = extract.seasons[choice.season].voices.map(function (v) {
            return v.id;
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.seasons) {
          var season = extract.seasons[choice.season] || {};
          var voices = season.voices || [];
          var voice = voices[choice.voice] || {};
          var voice_name = Lampa.Utils.shortText(filter_items.voice[choice.voice] || '', 50);
          var items = voice.items || [];
          items.forEach(function (media) {
            filtred.push({
              title: component.formatEpisodeTitle(media.season, media.episode),
              quality: media.quality + 'p',
              info: voice_name ? ' / ' + voice_name : '',
              season: media.season,
              episode: media.episode,
              media: media
            });
          });
        } else if (extract.movies) {
          extract.movies.forEach(function (media) {
            filtred.push({
              title: media.translation || select_title,
              quality: media.quality + 'p',
              info: '',
              media: media
            });
          });
        }

        return filtred;
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function zetflix(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var select_id = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('zetflix');
      var prox_enc = '';

      var embed = (prefer_http ? 'http:' : 'https:') + '//hidxlglk.deploy.cx/lite/zetflix';
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_id = kinopoisk_id;
        select_title = object.search || object.movie.title;

        if (isNaN(select_id)) {
          component.emptyForQuery(select_title);
          return;
        }

        extract = [];
        getEpisodes();
      };

      function getEpisodes() {
        var s = object.movie.number_of_seasons ? choice.season + 1 : 0;

        if (extract[s]) {
          component.loading(false);
          filter();
          append(filtred());
          return;
        }

        var url = Lampa.Utils.addUrlComponent(embed, 'kinopoisk_id=' + select_id);
        if (s) url = Lampa.Utils.addUrlComponent(url, 's=' + s);
        url = Lampa.Utils.addUrlComponent(url, 'orightml=true');

        var call_success = function call_success(str) {
          parse(str);
        };

        var call_error = function call_error(a, c) {
          component.empty(network.errorDecode(a, c));
        };

        {
          var meta = $('head meta[name="referrer"]');
          var referrer = meta.attr('content') || 'never';
          meta.attr('content', 'origin');

          try {
            network.clear();
            network.timeout(10000);
            network.silent(url, call_success, call_error, false, {
              dataType: 'text'
            });
          } finally {
            meta.attr('content', referrer);
          }
        }
      }

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        component.loading(true);
        getEpisodes();
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        component.loading(true);
        getEpisodes();
        component.saveChoice(choice);
        setTimeout(component.closeFilter, 10);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var link = item.links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, true);
            return {
              label: item.label,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyLink(link, prox, prox_enc)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parse(str) {
        component.loading(false);
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/Playerjs\(({.*?})\);/);
        var json;

        try {
          json = find && (0, eval)('"use strict"; (function(){ var sign = function(){}; return ' + find[1] + '; })();');
        } catch (e) {}

        if (json && json.file) {
          var s = object.movie.number_of_seasons ? choice.season + 1 : 0;
          extract[s] = typeof json.file === 'string' ? [json] : json.file;
          extract[s].forEach(function (data) {
            if (data.folder) {
              data.folder.forEach(function (e) {
                e.media = {
                  items: extractItems(e.file)
                };
              });
            } else {
              data.media = {
                items: extractItems(data.file)
              };
            }
          });
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };

        if (object.movie.number_of_seasons) {
          for (var snum = 1; snum <= object.movie.number_of_seasons; snum++) {
            filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + snum);
          }
        }

        if (!filter_items.season[choice.season]) choice.season = 0;
        var extract_s = extract[object.movie.number_of_seasons ? choice.season + 1 : 0] || [];
        extract_s.forEach(function (v) {
          if (v.folder) {
            var voice = v.title || v.comment || '';
            if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
          }
        });
        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        var extract_s = extract[object.movie.number_of_seasons ? choice.season + 1 : 0] || [];
        extract_s.forEach(function (data) {
          if (data.folder) {
            var voice = data.title || data.comment || '';

            if (voice == filter_items.voice[choice.voice]) {
              data.folder.forEach(function (e) {
                if (e.file) {
                  var e_title = e.title || e.comment || '';
                  var max_quality = e.media.items[0] || {};
                  var episode_num = parseInt(e_title.match(/\d+/));
                  var season_num = choice.season + 1;
                  filtred.push({
                    title: component.formatEpisodeTitle(season_num, episode_num),
                    quality: max_quality.label || '360p ~ 1080p',
                    info: ' / ' + Lampa.Utils.shortText(voice, 50),
                    season: season_num,
                    episode: episode_num,
                    media: e.media
                  });
                }
              });
            }

            filtred.sort(function (a, b) {
              return a.episode - b.episode;
            });
          } else if (data.file) {
            var max_quality = data.media.items[0] || {};
            filtred.push({
              title: data.title || data.comment || select_title,
              quality: max_quality.label || '360p ~ 1080p',
              info: '',
              media: data.media
            });
          }
        });
        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var items = element.media.items;

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function fancdn(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('fancdn');
      var host = Utils.fanserialsHost();
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var cookie = Lampa.Storage.get('online_mod_fancdn_cookie', '') + '';
      var authorization_required = !cookie;
      if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + Utils.randomHex(32) + (cookie ? '; ' + cookie : '');

      if (cookie) {
        if (Lampa.Platform.is('android')) {
          headers.Cookie = cookie;
        }

        if (prox) {
          prox_enc += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
        }
      }

      var embed = ref;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0].link);
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(links) {
          if (links && links.length && links.forEach) {
            var is_sure = false;
            var items = links.map(function (l) {
              var li = $(l + '</div>');
              var link = $('a', li);
              var orig_div = $('div.name-origin-search', li);
              var titl = link.text().trim() || '';
              var orig_title = orig_div.text().trim() || '';
              var year;
              var found = orig_title.match(/^(.*)\((\d{4}\s*)\)$/);

              if (found) {
                year = parseInt(found[2]);
                orig_title = found[1].trim();
              }

              return {
                year: year,
                title: titl,
                orig_title: orig_title,
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else if (authorization_required) component.empty(Lampa.Lang.translate('online_mod_authorization_required') + ' FanSerials');else component.emptyForQuery(select_title);
        };

        var url = embed + 'index.php?do=search';
        var postdata = 'do=search&subaction=search&search_start=0&full_search=1&result_from=1&story=' + encodeURIComponent(select_title) + '&titleonly=3&searchuser=&replyless=0&replylimit=0&searchdate=0&beforeafter=after&sortby=title&resorder=asc&showposts=0&catlist%5B%5D=10';
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          str = (str || '').replace(/\n/g, '');
          var links = str.match(/<div class="item-search-header">\s*<h2>\s*<a [^>]*>[^<]*<\/a>\s*<\/h2>\s*<div class="name-origin-search">[^<]*<\/div>/g);
          display(links);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, postdata, {
          dataType: 'text',
          headers: headers
        });
      };

      function getPage(url) {
        url = component.fixLink(url, ref);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          str = (str || '').replace(/\n/g, '');
          var player = str.match(/<iframe +id="iframe-player" +src=" *(\/movies\/(\d+)[^"]*)"/);

          if (player) {
            var player_url = Lampa.Utils.addUrlComponent(embed + atob('ZmlsbS5waHA='), 'kp=' + player[2]);
            var player_ref = component.fixLink(player[1], ref);
            var pos = player[1].indexOf('?');

            if (pos !== -1) {
              var token = player[1].substring(pos + 1);

              if (token) {
                Lampa.Storage.set('online_mod_fancdn_token', token);
                player_url += '&' + token;
              }
            }

            var player_headers = Lampa.Platform.is('android') ? {
              'Origin': host,
              'Referer': player_ref,
              'User-Agent': user_agent
            } : {};
            var prox_enc_player = '';

            if (prox) {
              prox_enc_player += 'param/Origin=' + encodeURIComponent(host) + '/';
              prox_enc_player += 'param/Referer=' + encodeURIComponent(player_ref) + '/';
              prox_enc_player += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
            }

            if (cookie) {
              if (Lampa.Platform.is('android')) {
                headers.Cookie = cookie;
              }

              if (prox) {
                prox_enc_player += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
              }
            }

            network.clear();
            network.timeout(10000);
            network["native"](component.proxyLink(player_url, prox, prox_enc_player, 'enc2t'), function (json) {
              parse(json, function () {
                component.emptyForQuery(select_title);
              });
            }, function (a, c) {
              component.empty(network.errorDecode(a, c));
            }, false, {
              headers: player_headers
            });
          } else if (authorization_required) component.empty(Lampa.Lang.translate('online_mod_authorization_required') + ' FanSerials');else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: headers
        });
      }

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link;
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyStream(component.fixLink(link, url), 'fancdn')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItemsPlaylist(str, url) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var link = item.links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, true);
            return {
              label: item.label,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyStream(link, 'fancdn')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = parseSubs(element.media.subtitles, url);
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyStream(hls_file, 'fancdn'), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyStream(file, 'fancdn'), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var url = element.media.file || '';

        if (startsWith(url, '[')) {
          parseStream(element, call, error, extractItemsPlaylist, url, '');
          return;
        }

        url = component.fixLinkProtocol(url, prefer_http, true);

        if (Utils.isMediaUrl(url, 'm3u8')) {
          getStreamM3U(element, call, error, url);
          return;
        }

        if (url) {
          element.stream = component.proxyStream(url, 'fancdn');
          element.qualitys = false;
          element.subtitles = parseSubs(element.media.subtitles, url);
          call(element);
        } else error();
      }

      function parseSubs(str, url) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          link = component.fixLinkProtocol(link, prefer_http, true);
          return {
            label: item.label,
            url: component.proxyStreamSubs(component.fixLink(link, url), 'fancdn')
          };
        });
        return subtitles.length ? subtitles : false;
      }

      function parse(json, empty) {
        if (json && json.length && json.forEach) {
          component.loading(false);
          extract = json;
          filter();
          append(filtred());
        } else empty();
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          season_num: [],
          voice: [],
          voice_info: []
        };
        extract.forEach(function (t) {
          if (t.folder) {
            for (var s_num in t.folder) {
              if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
            }
          }
        });
        filter_items.season_num.sort(function (a, b) {
          return a - b;
        });
        filter_items.season_num.forEach(function (s_num) {
          filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
        });
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (filter_items.season[choice.season]) {
          var s_num = filter_items.season_num[choice.season];
          extract.forEach(function (t) {
            if (t.folder && t.folder[s_num]) {
              var v_id = t.id || '';

              if (!filter_items.voice_info.some(function (v) {
                return v.id == v_id;
              })) {
                filter_items.voice.push(t.title || t.comment || '');
                filter_items.voice_info.push({
                  id: v_id
                });
              }
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.forEach(function (data) {
          if (data.folder) {
            var v_info = filter_items.voice_info[choice.voice];

            if (v_info && data.id == v_info.id) {
              var voice = filter_items.voice[choice.voice];
              var s_num = filter_items.season_num[choice.season];
              var s = data.folder[s_num] || {};

              if (s.folder) {
                for (var e_num in s.folder) {
                  var e = s.folder[e_num] || {};

                  if (e.file) {
                    filtred.push({
                      title: component.formatEpisodeTitle(s_num, e_num),
                      quality: '360p ~ 1080p',
                      info: ' / ' + Lampa.Utils.shortText(voice, 50),
                      season: parseInt(s_num),
                      episode: parseInt(e_num),
                      media: e
                    });
                  }
                }
              }
            }
          } else if (data.file) {
            filtred.push({
              title: data.title || data.comment || select_title,
              quality: '360p ~ 1080p',
              info: '',
              media: data
            });
          }
        });
        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function fancdn2(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('fancdn2');
      var host = Utils.fancdnHost();
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var embed = host + atob('L2ZpbG0ucGhw');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function fancdn_api_search(kinopoisk_id, callback, error) {
        var url = Lampa.Utils.addUrlComponent(embed, 'kp=' + encodeURIComponent(kinopoisk_id));
        var player_ref = component.fixLink('/movies/' + kinopoisk_id, ref);
        var token = Lampa.Storage.get('online_mod_fancdn_token', '') + '';

        if (token) {
          url += '&' + token;
          player_ref += '?' + token;
        }

        var headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': player_ref,
          'User-Agent': user_agent
        } : {};
        var prox_enc = '';

        if (prox) {
          prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc += 'param/Referer=' + encodeURIComponent(player_ref) + '/';
          prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        }

        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
          if (callback) callback(json);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        }, false, {
          headers: headers
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;

        if (isNaN(kinopoisk_id)) {
          component.emptyForQuery(select_title);
          return;
        }

        var error = component.empty.bind(component);
        fancdn_api_search(kinopoisk_id, function (json) {
          parse(json, function () {
            component.emptyForQuery(select_title);
          });
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link;
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyStream(component.fixLink(link, url), 'fancdn')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItemsPlaylist(str, url) {
        if (!str) return [];

        try {
          var items = component.parsePlaylist(str).map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var link = item.links[0] || '';
            link = component.fixLinkProtocol(link, prefer_http, true);
            return {
              label: item.label,
              quality: quality ? parseInt(quality[1]) : NaN,
              file: component.proxyStream(link, 'fancdn')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = parseSubs(element.media.subtitles, url);
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyStream(hls_file, 'fancdn'), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyStream(file, 'fancdn'), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var url = element.media.file || '';

        if (startsWith(url, '[')) {
          parseStream(element, call, error, extractItemsPlaylist, url, '');
          return;
        }

        url = component.fixLinkProtocol(url, prefer_http, true);

        if (Utils.isMediaUrl(url, 'm3u8')) {
          getStreamM3U(element, call, error, url);
          return;
        }

        if (url) {
          element.stream = component.proxyStream(url, 'fancdn');
          element.qualitys = false;
          element.subtitles = parseSubs(element.media.subtitles, url);
          call(element);
        } else error();
      }

      function parseSubs(str, url) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          link = component.fixLinkProtocol(link, prefer_http, true);
          return {
            label: item.label,
            url: component.proxyStreamSubs(component.fixLink(link, url), 'fancdn')
          };
        });
        return subtitles.length ? subtitles : false;
      }

      function parse(json, empty) {
        if (json && json.length && json.forEach) {
          component.loading(false);
          extract = json;
          filter();
          append(filtred());
        } else empty();
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          season_num: [],
          voice: [],
          voice_info: []
        };
        extract.forEach(function (t) {
          if (t.folder) {
            for (var s_num in t.folder) {
              if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
            }
          }
        });
        filter_items.season_num.sort(function (a, b) {
          return a - b;
        });
        filter_items.season_num.forEach(function (s_num) {
          filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
        });
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (filter_items.season[choice.season]) {
          var s_num = filter_items.season_num[choice.season];
          extract.forEach(function (t) {
            if (t.folder && t.folder[s_num]) {
              var v_id = t.id || '';

              if (!filter_items.voice_info.some(function (v) {
                return v.id == v_id;
              })) {
                filter_items.voice.push(t.title || t.comment || '');
                filter_items.voice_info.push({
                  id: v_id
                });
              }
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.forEach(function (data) {
          if (data.folder) {
            var v_info = filter_items.voice_info[choice.voice];

            if (v_info && data.id == v_info.id) {
              var voice = filter_items.voice[choice.voice];
              var s_num = filter_items.season_num[choice.season];
              var s = data.folder[s_num] || {};

              if (s.folder) {
                for (var e_num in s.folder) {
                  var e = s.folder[e_num] || {};

                  if (e.file) {
                    filtred.push({
                      title: component.formatEpisodeTitle(s_num, e_num),
                      quality: '360p ~ 1080p',
                      info: ' / ' + Lampa.Utils.shortText(voice, 50),
                      season: parseInt(s_num),
                      episode: parseInt(e_num),
                      media: e
                    });
                  }
                }
              }
            }
          } else if (data.file) {
            filtred.push({
              title: data.title || data.comment || select_title,
              quality: '360p ~ 1080p',
              info: '',
              media: data
            });
          }
        });
        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function fanserials(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var select_id = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('fanserials');
      var prox_cdn = component.proxy('fanserials_cdn');
      var host = Utils.decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 25, 93, 66, 41, 7, 46, 48, 49, 92, 33, 25, 64, 26, 33, 7, 40, 32, 33, 90, 63, 23, 27, 69, 56], atob('RnVja0Zhbg=='));
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var embed = (prefer_http ? 'http:' : 'https:') + atob('Ly9sb21vbnQuc2l0ZS9ndC8=');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_id = kinopoisk_id;
        select_title = object.search || object.movie.title;

        if (isNaN(select_id)) {
          component.emptyForQuery(select_title);
          return;
        }

        var url = embed + select_id;
        url = Lampa.Utils.addUrlComponent(url, 'season=1');
        url = Lampa.Utils.addUrlComponent(url, 'episode=1');
        url = Lampa.Utils.addUrlComponent(url, 'alloff=true');
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          parse(str);
        }, function (a, c) {
          if (a.status == 404 && (!a.responseText || a.responseText.indexOf('Сериал не найден :(') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
            component.emptyForQuery(select_title);
          } else component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: headers
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, url, str) {
        var file = '';
        var quality = false;
        var subtitles = [];
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/<div id="videoplayer[^>]*data-config=[^>]*>/);
        var player = find && $(find[0]);

        if (player) {
          var config = player.attr('data-config');
          var json;

          try {
            json = config && Lampa.Arrays.decodeJson(config, {});
          } catch (e) {}

          if (json && json.hls) {
            file = component.fixLink(json.hls, url);

            if (prox && !prox_cdn) {
              file = file.replace(/\/\/cdn(\d+)\./, '//s$1.');
            }
          }

          ['data-original_subtitle', 'data-ru_subtitle', 'data-en_subtitle', 'data-ua_subtitle'].forEach(function (sub) {
            var link = player.attr(sub);

            if (link) {
              subtitles.push({
                label: sub.replace('data-', '').replace('_subtitle', ''),
                url: component.processSubs(component.fixLink(link, url))
              });
            }
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = subtitles.length ? subtitles : false;
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getBaseStream(element, call, error) {
        if (element.stream) return call(element);
        var url = embed + select_id;
        url = Lampa.Utils.addUrlComponent(url, 'season=' + element.media.season);
        url = Lampa.Utils.addUrlComponent(url, 'episode=' + element.media.episode);
        url = Lampa.Utils.addUrlComponent(url, 'voice=' + element.media.voice_id);
        url = Lampa.Utils.addUrlComponent(url, 'alloff=true');
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          parseStream(element, call, error, url, str);
        }, function (a, c) {
          error();
        }, false, {
          dataType: 'text',
          headers: headers
        });
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        getBaseStream(element, function (element) {
          var file = element.stream || '';
          if (element.qualitys || element.parsed || !Utils.isMediaUrl(file, 'm3u8')) return call(element);
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(file, prox_cdn, '', 'enc2t'), function (str) {
            var items = extractQuality(str, file);
            items = items.filter(function (elem) {
              return elem.quality > 0;
            });

            if (items.length) {
              file = items[0].file;
              var quality = {};
              items.forEach(function (item) {
                if (!quality[item.label]) quality[item.label] = item.file;
              });
              element.stream = file;
              element.qualitys = quality;
            }

            element.parsed = true;
            call(element);
          }, function (a, c) {
            call(element);
          }, false, {
            dataType: 'text'
          });
        }, error);
      }

      function extractQuality(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).filter(function (item) {
            return item.xstream;
          }).map(function (item) {
            var link = item.link;
            var quality = item.height;
            if (quality > 1440 && quality <= 2160) quality = 2160;else if (quality > 1080 && quality <= 1440) quality = 1440;else if (quality > 720 && quality <= 1080) quality = 1080;else if (quality > 480 && quality <= 720) quality = 720;else if (quality > 360 && quality <= 480) quality = 480;else if (quality > 240 && quality <= 360) quality = 360;
            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              bandwidth: item.bandwidth,
              codecs: item.codecs,
              file: component.fixLink(link, url)
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.bandwidth > a.bandwidth) return 1;
            if (b.bandwidth < a.bandwidth) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parse(str) {
        component.loading(false);
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/<div id="inputData"[^>]*>(\{.*?\})<\/div>/);
        var json;

        try {
          json = find && Lampa.Arrays.decodeJson(find[1], {});
        } catch (e) {}

        if (json) {
          extract = json;
          filter();
          append(filtred());
        } else {
          find = str.match(/>(Контент недоступен в вашем регионе[^<]*)</);
          if (find) component.empty(find[1]);else component.emptyForQuery(select_title);
        }
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          season_num: [],
          voice: [],
          voice_info: []
        };

        for (var s_num in extract) {
          if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
        }

        filter_items.season_num.sort(function (a, b) {
          return a - b;
        });
        filter_items.season_num.forEach(function (s_num) {
          filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
        });
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (filter_items.season[choice.season]) {
          var _s_num = filter_items.season_num[choice.season];
          var episodes = extract[_s_num] || {};

          for (var e_num in episodes) {
            var translations = episodes[e_num] || [];
            translations.forEach(function (translation) {
              var v_id = translation.voice_id || '';

              if (!filter_items.voice_info.some(function (v) {
                return v.id == v_id;
              })) {
                filter_items.voice.push(translation.voice_name || '');
                filter_items.voice_info.push({
                  id: v_id
                });
              }
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (filter_items.season[choice.season] && filter_items.voice_info[choice.voice]) {
          (function () {
            var s_num = filter_items.season_num[choice.season];
            var v_id = filter_items.voice_info[choice.voice].id;
            var voice = filter_items.voice[choice.voice];
            var episodes = extract[s_num] || {};

            var _loop = function _loop(e_num) {
              var translations = episodes[e_num] || [];
              translations.forEach(function (translation) {
                if (translation.voice_id == v_id) {
                  filtred.push({
                    title: component.formatEpisodeTitle(s_num, e_num),
                    quality: '360p ~ 1080p',
                    info: ' / ' + Lampa.Utils.shortText(voice, 50),
                    season: s_num,
                    episode: e_num,
                    media: translation
                  });
                }
              });
            };

            for (var e_num in episodes) {
              _loop(e_num);
            }
          })();
        }

        return filtred;
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function videoseed(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prox = component.proxy('videoseed');
      var host = atob('aHR0cHM6Ly9raW5vc2VyaWFscy5uZXQ=');
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var embed = atob('aHR0cHM6Ly9hcGkudmlkZW9zZWVkLnR2L2FwaXYyLnBocA==');
      var suffix = Utils.decodeSecret([56, 36, 14, 19, 12, 7, 35, 22, 22, 58, 127, 45, 82, 19, 83, 10, 118, 70, 66, 57, 121, 124, 93, 71, 0, 12, 126, 20, 64, 109, 122, 47, 3, 68, 80, 9, 34, 71]);
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;

        if (isNaN(kinopoisk_id)) {
          component.emptyForQuery(select_title);
          return;
        }

        var empty = function empty() {
          component.emptyForQuery(select_title);
        };

        var error = component.empty.bind(component);
        var api = embed;
        api = Lampa.Utils.addUrlComponent(api, 'item=' + (object.movie.number_of_seasons ? 'serial' : 'movie'));
        api = Lampa.Utils.addUrlComponent(api, 'kp=' + encodeURIComponent(kinopoisk_id));
        api = Lampa.Utils.addUrlComponent(api, suffix);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(api, prox, prox_enc, 'enc2t'), function (json) {
          if (json && json.data && json.data[0] && json.data[0].iframe) {
            var url = host + Utils.parseURL(json.data[0].iframe).pathname;
            url = Lampa.Utils.addUrlComponent(url, 'token=' + Utils.randomHex(32));
            network.clear();
            network.timeout(10000);
            network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
              parse(str || '', empty);
            }, function (a, c) {
              error(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              headers: headers
            });
          } else empty();
        }, function (a, c) {
          error(network.errorDecode(a, c));
        }, false, {
          headers: headers
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parse(str, empty) {
        str = (str || '').replace(/\n/g, '');
        var json;
        var find = str.match(/Playerjs\(({.*?})\);/) || str.match(/var +plr_config *= *({.*?});/);

        if (find) {
          try {
            json = find && (0, eval)('"use strict"; (function(){ var token = "", domain_name = ""; return ' + find[1] + '; })();');
          } catch (e) {}
        } else {
          find = str.match(/Playerjs\("([^"]*)"\);/) || str.match(/var +plr_config *= *"([^"]*)";/);
          var player = find && decode(find[1]);

          try {
            json = player && JSON.parse(player);
          } catch (e) {}
        }

        if (json && json.file && typeof json.file === 'string') {
          json.file = decode(json.file);

          try {
            json.file = JSON.parse(json.file);
          } catch (e) {
            json = {
              file: [json]
            };
          }
        }

        if (json && json.file && json.file.length && json.file.forEach) {
          component.loading(false);
          extract = json;
          filter();
          append(filtred());
        } else empty();
      }

      function decode(data) {
        if (!startsWith(data, '#')) return data;

        var enc = function enc(str) {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        };

        var dec = function dec(str) {
          return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        };

        var trashList = [atob('YTBCZnREaUZaVXNLV3A2d0o5VnloMmxIcWoxQ2JjOGVuTVlQQVQ3VGFialpqdkcySWZaRU9XYm9ZdDFvUTZPSw=='), atob('NnNlbFdvNUcwcjczNGttWm5hSHZZSmpFU3VpY1BJTGRYVGJ0WHUwcTR4Q3hWbmJaaDRKWFRKRElOeXNJRXY2aQ=='), atob('U0hiTkJZa085VkNoeTNtMjg1NnF3WEljS0ZUQXAwTTdXbjFyUllvY1lVbmFLeThXNkJsekdlUUhnMjFYNmZGbg=='), atob('QWw2aXhzYlZuQ1dlZHBSd0hjdjdHTGhNWTFUeTl6YXIwU1pmS29PNk9rM3c1ejRJbUVqNjFidkRCdEhQSXF0Mg=='), atob('WEV6bjVZUE9sRnM5VndjdThKMzRmdEh5R1FheDFXNzZoQUNlWjBEb0RNckg4TGQ1aGhqNVd6em5Md2c3amZnVg==')];
        var x = data.substring(2);
        trashList.forEach(function (trash) {
          x = x.replace('|||' + enc(trash), '');
        });

        try {
          x = dec(x);
        } catch (e) {
          x = '';
        }

        return x;
      }

      function extractVoices(str) {
        var voices = {};
        var items = extractItems(str);
        items.forEach(function (item) {
          var prev = voices[item.voice || ''];
          var prev_items = prev && prev.items || [];
          prev_items.push(item);

          if (!prev || item.quality > prev.quality) {
            voices[item.voice || ''] = {
              quality: item.quality,
              items: prev_items
            };
          }
        });
        return voices;
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        var season_objs = [];
        extract.file.forEach(function (s) {
          if (s.folder) {
            s.title = s.title || s.comment || '';
            s.season_num = parseInt(s.title.match(/\d+/));
            season_objs.push(s);
          }
        });
        season_objs.sort(function (a, b) {
          var cmp = a.season_num - b.season_num;
          if (cmp) return cmp;
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        filter_items.season = season_objs.map(function (s) {
          return s.title;
        });
        if (!filter_items.season[choice.season]) choice.season = 0;
        var s = season_objs[choice.season];

        if (s && s.folder) {
          s.folder.forEach(function (e) {
            if (e.folder) {
              e.folder.forEach(function (v) {
                var voice = v.title || v.comment || '';
                if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
              });
            } else if (typeof e.file === 'string') {
              e.file_voices = extractVoices(e.file);

              for (var voice in e.file_voices) {
                if (voice && filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
              }
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Получить потоки
       * @param {String} str
       * @param {String} voice
       * @returns array
       */


      function extractItems(str, voice) {
        if (!str) return [];

        try {
          if (!startsWith(str, '[')) str = '[]' + str;
          var list = component.parsePlaylist(str);
          list.forEach(function (el) {
            if (el.voice) el.voice = el.voice.trim();
          });

          if (voice) {
            var tmp = list.filter(function (el) {
              return el.voice == voice;
            });

            if (tmp.length) {
              list = tmp;
            } else {
              list = list.filter(function (el) {
                return typeof el.voice === 'undefined';
              });
            }
          }

          var items = list.map(function (item) {
            var quality = item.label.match(/(\d\d\d+)/);
            var file = item.links[0] || '';
            return {
              label: item.label,
              quality: quality ? parseInt(quality[1]) : NaN,
              voice: item.voice,
              file: file
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parseSubs(str) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          return {
            label: item.label,
            url: component.processSubs(link)
          };
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.file.forEach(function (data) {
          if (data.folder) {
            var s_title = data.title || data.comment || '';

            if (s_title == filter_items.season[choice.season]) {
              var season_num = parseInt(s_title.match(/\d+/));
              data.folder.forEach(function (e) {
                var e_title = e.title || e.comment || '';
                var episode_num = parseInt(e_title.match(/\d+/));
                e_title = e_title.replace(/\d+/, '').replace(/серия/i, '').trim();

                if (e.folder) {
                  e.folder.forEach(function (v) {
                    var voice = v.title || v.comment || '';

                    if (voice == filter_items.voice[choice.voice] && v.file) {
                      var items = extractItems(v.file);
                      filtred.push({
                        title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                        quality: items[0] && items[0].quality ? items[0].quality + 'p' : '360p ~ 1080p',
                        info: ' / ' + Lampa.Utils.shortText(voice, 50),
                        season: season_num,
                        episode: episode_num,
                        media: items,
                        subtitles: parseSubs(v.subtitle)
                      });
                    }
                  });
                } else if (e.file_voices) {
                  var voice = filter_items.voice[choice.voice] || '';
                  var v = e.file_voices[voice];

                  if (!v) {
                    voice = '';
                    v = e.file_voices[voice];
                  }

                  if (v) {
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                      quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
                      info: voice ? ' / ' + Lampa.Utils.shortText(voice, 50) : '',
                      season: season_num,
                      episode: episode_num,
                      media: v.items,
                      subtitles: parseSubs(e.subtitle)
                    });
                  }
                }
              });
            }
          } else {
            if (!data.file_voices && data.file && typeof data.file === 'string') {
              data.file_voices = extractVoices(data.file);
            }

            if (data.file_voices) {
              var subtitles = parseSubs(data.subtitle);

              for (var voice in data.file_voices) {
                var v = data.file_voices[voice];
                filtred.push({
                  title: voice || data.title || data.comment || select_title,
                  quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
                  info: '',
                  media: v.items,
                  subtitles: subtitles
                });
              }
            }
          }
        });
        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var items = element.media;

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    subtitles: elem.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function vibix(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prox = component.proxy('vibix');
      var user_agent = Utils.baseUserAgent();
      var auth = Utils.decodeSecret([44, 23, 81, 32, 63, 32, 116, 90, 0, 115, 89, 14, 116, 10, 30, 49, 1, 61, 3, 115, 57, 64, 8, 57, 45, 21, 28, 88, 113, 14, 94, 29, 118, 56, 25, 102, 5, 15, 90, 29, 33, 68, 123, 6, 40, 35, 33, 91, 127, 62, 28, 65, 9, 49, 104, 55, 97, 14, 8, 46], atob('VmliaXhBdXRo'));
      var key = Utils.decodeSecret([60, 11, 99, 54, 44, 49, 45, 25, 5, 34, 58, 39, 72, 60, 99, 101, 34, 2, 4, 3, 25, 29, 94, 59, 45, 53, 44, 13, 115, 50, 0, 51], atob('VmliaXhBdXRo'));
      var sign_key = Utils.decodeSecret([60, 38, 113, 24, 14, 63, 62, 42, 85, 44, 52, 20, 72, 43, 52, 3, 109, 89, 117, 60, 10, 29, 65, 11, 40, 3, 102, 56, 5, 17, 36, 55], atob('VmliaXhBdXRo'));
      var headers = Lampa.Platform.is('android') ? {
        'User-Agent': user_agent,
        'Authorization': auth
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'param/Authorization=' + encodeURIComponent(auth) + '/';
      }

      var embed = atob('aHR0cHM6Ly92aWJpeC5vcmcvYXBpL3YxL3B1Ymxpc2hlci92aWRlb3Mv');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function vibix_api_search(api, callback, error) {
        network.clear();
        network.timeout(15000);
        network["native"](component.proxyLink(embed + api, prox, prox_enc, 'enc2t'), function (json) {
          if (callback) callback(json);
        }, function (a, c) {
          if (a.status == 404 && (!a.responseText || a.responseText.indexOf('"Video not found"') !== -1)) {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        }, false, {
          headers: headers
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;

        var empty = function empty() {
          component.emptyForQuery(select_title);
        };

        var error = component.empty.bind(component);
        var api = (+kinopoisk_id ? 'kp/' : 'imdb/') + encodeURIComponent(kinopoisk_id);
        vibix_api_search(api, function (json) {
          getPage(json, function () {
            if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
              vibix_api_search('imdb/' + encodeURIComponent(object.movie.imdb_id), function (json) {
                getPage(json, empty);
              }, error);
            } else empty();
          });
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parseIFrame(iframe_url) {
        var serial = iframe_url.match(/\/embed-serials\/(\d+)/);
        var movie = iframe_url.match(/\/embed\/(\d+)/);

        if (serial) {
          return {
            type: 'serial',
            id: serial[1]
          };
        } else if (movie) {
          return {
            type: 'movie',
            id: movie[1]
          };
        }

        return null;
      }

      function xorDecrypt(str) {
        var key_len = key.length;
        var len = str.length;
        var result = '';

        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key_len));
        }

        return result;
      }

      function binaryToUtf8(str) {
        if (typeof TextDecoder !== "undefined") {
          try {
            var arr = new Uint8Array(str.length);

            for (var i = 0; i < str.length; i++) {
              arr[i] = str.charCodeAt(i);
            }

            return new TextDecoder('utf-8').decode(arr);
          } catch (e) {}
        }

        try {
          return decodeURIComponent(escape(str));
        } catch (e) {
          return str;
        }
      }

      function decrypt(json) {
        try {
          var str = json.p;

          if (json.v == 1) {
            if (true) {
              str = str.split('').reverse().join('');
            }

            str = binaryToUtf8(xorDecrypt(atob(str)));
          }

          return JSON.parse(str);
        } catch (e) {
          return {};
        }
      }

      function sign(key, secret) {
        function encode(msg) {
          var x = 0;

          if (msg.length === 0) {
            return x.toString();
          }

          for (var i = 0; i < msg.length; i++) {
            var c = msg.charCodeAt(i);
            x = (x << 5) - x + c;
            x = x & x;
          }

          var y = Math.abs(x).toString(16);

          while (y.length < 8) {
            y = '0' + y;
          }

          var z = [y];

          for (var j = 0; j < msg.length; j += 3) {
            var part = msg.substring(j, j + 3);
            var r = 0;

            for (var k = 0; k < part.length; k++) {
              r += part.charCodeAt(k);
            }

            z.push(r.toString(16));
          }

          return z.join('');
        }

        var salt1 = '';
        var salt2 = '';

        if (key.length > 64) {
          key = encode(key);
        }

        while (key.length < 64) {
          key += "\0";
        }

        for (var i = 0; i < 64; i++) {
          salt1 += String.fromCharCode(key.charCodeAt(i) ^ 54);
          salt2 += String.fromCharCode(key.charCodeAt(i) ^ 92);
        }

        var sign0 = encode(salt1 + secret);
        return encode(salt2 + sign0);
      }

      function getPage(json, empty) {
        var info = json && json.iframe_url && parseIFrame(json.iframe_url);

        if (!info) {
          empty();
          return;
        }

        json.iframe_url = json.iframe_url.replace(/^(https?:\/\/)\d+\./, Utils.decodeSecret([73, 84, 65, 114, 83, 112, 126, 79, 112, 69, 92, 75], atob('ZGViYmx5ZA==')));
        var parsed = Utils.parseURL(json.iframe_url);
        var host = parsed.origin;
        var ref = parsed.origin + parsed.pathname;
        var headers2 = Lampa.Platform.is('android') ? {
          'User-Agent': user_agent,
          'Origin': host,
          'Referer': ref,
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin'
        } : {};
        var prox_enc2 = '';

        if (prox) {
          prox_enc2 += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
          prox_enc2 += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc2 += 'param/Referer=' + encodeURIComponent(ref) + '/';
          prox_enc2 += 'param/Sec-Fetch-Dest=empty/';
          prox_enc2 += 'param/Sec-Fetch-Mode=cors/';
          prox_enc2 += 'param/Sec-Fetch-Site=same-origin/';
        }

        var domain = Utils.decodeSecret([4, 3, 5, 37, 9, 34, 97, 20, 47, 30, 24, 1], atob('ZGViYmx5ZA=='));
        var iframe_url = json.iframe_url;
        var timestamp = Math.floor(Date.now() / 1000);
        var nonce = Math.random().toString(36).substring(2, 15);
        var secret = [domain, iframe_url, timestamp.toString(), nonce].join('|');
        var sig = sign(sign_key, secret);
        var url = host + (info.type === 'movie' ? '/api/v1/embed/' : '/api/v1/embed-serials/') + info.id;
        url = Lampa.Utils.addUrlComponent(url, 'domain=' + encodeURIComponent(domain));
        url = Lampa.Utils.addUrlComponent(url, 'iframe_url=' + encodeURIComponent(iframe_url));
        url = Lampa.Utils.addUrlComponent(url, 'sig=' + encodeURIComponent(sig));
        url = Lampa.Utils.addUrlComponent(url, 'ts=' + timestamp);
        url = Lampa.Utils.addUrlComponent(url, 'nonce=' + encodeURIComponent(nonce));
        url = Lampa.Utils.addUrlComponent(url, 'nc=' + Math.floor(new Date().getTime() / 60000));
        network.clear();
        network.timeout(15000);
        network["native"](component.proxyLink(url, prox, prox_enc2, 'enc2t'), function (json) {
          if (json && Object.keys(json).length == 2 && typeof json.p === 'string' && json.v != null) {
            json = decrypt(json);
          }

          if (json && json.data && json.data.playlist && json.data.playlist.length && json.data.playlist.forEach) {
            component.loading(false);
            extract = json.data;
            filter();
            append(filtred());
          } else empty();
        }, function (a, c) {
          empty();
        }, false, {
          headers: headers2
        });
      }

      function extractVoices(str) {
        var voices = {};
        var items = extractItems(str);
        items.forEach(function (item) {
          var prev = voices[item.voice || ''];
          var prev_items = prev && prev.items || [];
          prev_items.push(item);

          if (!prev || item.quality > prev.quality) {
            voices[item.voice || ''] = {
              quality: item.quality,
              items: prev_items
            };
          }
        });
        return voices;
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        var season_objs = [];
        extract.playlist.forEach(function (s) {
          if (s.folder) {
            s.title = s.title || s.comment || '';
            s.season_num = parseInt(s.title.match(/\d+/));
            season_objs.push(s);
          }
        });
        season_objs.sort(function (a, b) {
          var cmp = a.season_num - b.season_num;
          if (cmp) return cmp;
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        filter_items.season = season_objs.map(function (s) {
          return s.title;
        });
        if (!filter_items.season[choice.season]) choice.season = 0;
        var s = season_objs[choice.season];

        if (s && s.folder) {
          s.folder.forEach(function (e) {
            if (e.folder) {
              e.folder.forEach(function (v) {
                var voice = v.title || v.comment || '';
                if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
              });
            } else if (typeof e.file === 'string') {
              e.file_voices = extractVoices(e.file);

              for (var voice in e.file_voices) {
                if (voice && filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
              }
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Получить потоки
       * @param {String} str
       * @param {String} voice
       * @returns array
       */


      function extractItems(str, voice) {
        if (!str) return [];

        try {
          if (!startsWith(str, '[')) str = '[]' + str;
          var list = component.parsePlaylist(str);
          list.forEach(function (el) {
            if (el.voice) el.voice = el.voice.trim();
          });

          if (voice) {
            var tmp = list.filter(function (el) {
              return el.voice == voice;
            });

            if (tmp.length) {
              list = tmp;
            } else {
              list = list.filter(function (el) {
                return typeof el.voice === 'undefined';
              });
            }
          }

          var items = list.map(function (item) {
            var label = item.label;

            if (startsWith(label, 'MP4 ')) {
              label = label.substring('MP4 '.length).trim();
            }

            var quality = label.match(/(\d\d\d+)/);
            var file = item.links[0] || '';
            return {
              label: label,
              quality: quality ? parseInt(quality[1]) : NaN,
              voice: item.voice,
              file: file
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function parseSubs(str) {
        if (!str) return false;
        var subtitles = component.parsePlaylist(str).map(function (item) {
          var link = item.links[0] || '';
          return {
            label: item.label,
            url: component.processSubs(link)
          };
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.playlist.forEach(function (data) {
          if (data.folder) {
            var s_title = data.title || data.comment || '';

            if (s_title == filter_items.season[choice.season]) {
              var season_num = parseInt(s_title.match(/\d+/));
              data.folder.forEach(function (e) {
                var e_title = e.title || e.comment || '';
                var episode_num = parseInt(e_title.match(/\d+/));
                e_title = e_title.replace(/\d+/, '').replace(/серия/i, '').trim();

                if (e.folder) {
                  e.folder.forEach(function (v) {
                    var voice = v.title || v.comment || '';

                    if (voice == filter_items.voice[choice.voice] && v.file) {
                      var items = extractItems(v.file);
                      filtred.push({
                        title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                        quality: items[0] && items[0].quality ? items[0].quality + 'p' : '360p ~ 1080p',
                        info: ' / ' + Lampa.Utils.shortText(voice, 50),
                        season: season_num,
                        episode: episode_num,
                        media: items,
                        subtitles: parseSubs(v.subtitle)
                      });
                    }
                  });
                } else if (e.file_voices) {
                  var voice = filter_items.voice[choice.voice] || '';
                  var v = e.file_voices[voice];

                  if (!v) {
                    voice = '';
                    v = e.file_voices[voice];
                  }

                  if (v) {
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                      quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
                      info: voice ? ' / ' + Lampa.Utils.shortText(voice, 50) : '',
                      season: season_num,
                      episode: episode_num,
                      media: v.items,
                      subtitles: parseSubs(e.subtitle)
                    });
                  }
                }
              });
            }
          } else {
            if (!data.file_voices && data.file && typeof data.file === 'string') {
              data.file_voices = extractVoices(data.file);
            }

            if (data.file_voices) {
              var subtitles = parseSubs(data.subtitle);

              for (var voice in data.file_voices) {
                var v = data.file_voices[voice];
                filtred.push({
                  title: voice || data.title || data.comment || select_title,
                  quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
                  info: '',
                  media: v.items,
                  subtitles: subtitles
                });
              }
            }
          }
        });
        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var items = element.media;

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    subtitles: elem.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function alloha(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var av1_support = Lampa.Storage.field('online_mod_av1_support') === true;
      var prox = component.proxy('alloha');
      var prox2 = component.proxy('allohacdn');
      var user_agent = Utils.decodeSecret([1, 36, 31, 31, 14, 86, 38, 90, 71, 118, 124, 107, 77, 33, 11, 84, 35, 26, 5, 43, 108, 5, 49, 86, 83, 10, 105, 69, 73, 120, 27, 34, 11, 64, 86, 1, 103, 13, 68, 108, 101, 107, 36, 6, 18, 86, 34, 34, 23, 58, 7, 34, 17, 89, 87, 9, 112, 91, 65, 110, 108, 99, 46, 62, 54, 119, 11, 89, 82, 52, 37, 32, 0, 86, 37, 95, 36, 30, 29, 113, 108, 8, 13, 4, 13, 87, 34, 90, 67, 107, 123, 101, 85, 88, 82, 20, 119, 85, 33, 57, 42, 42, 23, 31, 77, 15, 116, 66, 92, 107, 122]);
      var headers2 = Lampa.Platform.is('android') ? {
        'User-Agent': user_agent
      } : {};
      var prox2_enc = '';

      if (prox2) {
        prox2_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var token = Utils.decodeSecret([40, 120, 84, 65, 86, 14, 118, 70, 71, 97, 41, 126, 85, 67, 1, 9, 115, 70, 17, 106, 124, 125, 86, 19, 6, 89, 126, 66, 23, 111]);
      var embed = 'https://api.apbugall.org/?token=' + token;
      var decrypt = Utils.decodeSecret([100, 45, 16, 24, 1, 78, 46, 26, 28, 112, 63, 63, 23, 90, 66, 79, 53, 25, 94, 120, 56, 36, 14, 19, 12, 22, 103, 20, 4, 105, 101, 48, 69, 0, 3, 72, 103, 16, 10, 44, 62, 42, 6, 2, 66, 7, 103, 14, 15, 99, 108, 61, 4, 4, 66, 82, 40, 6, 6, 120, 113, 107, 16, 4, 14, 20, 42, 20, 6, 59, 36, 99, 74, 40, 74, 82, 51, 1, 2, 43, 115, 113, 57, 89, 62, 21, 28, 43, 46, 119, 17, 96, 76, 42, 77, 21, 110, 78, 82, 49, 42, 107, 77, 30, 13, 73, 51, 92, 9, 120, 41, 51, 17, 4, 3, 89, 51, 91, 2, 55, 63, 63, 1, 23, 22, 91, 103, 72, 82, 127, 56, 36, 14, 19, 12, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 44, 35, 32, 0, 24, 75, 26, 108, 85, 90, 57, 58, 122, 69, 73, 66, 29, 97, 20, 4, 105, 113, 108, 69, 93, 66, 91, 49, 68, 82, 98, 108, 108, 66, 95, 66, 17, 103, 82, 84, 57, 57, 63, 10, 6, 14, 91, 62, 72, 66, 126, 45, 62, 1, 31, 13, 7, 97, 6, 7, 58, 56, 34, 17, 26, 7, 7, 96, 78, 82, 46, 45, 57, 69, 4, 7, 92, 34, 7, 23, 42, 108, 118, 69, 3, 16, 86, 124, 85, 4, 57, 62, 107, 16, 5, 7, 72, 24, 20, 21, 61, 34, 63, 69, 75, 66, 29, 10, 26, 8, 49, 32, 39, 4, 89, 87, 20, 119, 85, 90, 15, 37, 37, 1, 25, 21, 73, 103, 59, 38, 120, 125, 123, 75, 70, 89, 26, 16, 28, 28, 110, 120, 112, 69, 14, 84, 14, 110, 85, 51, 40, 60, 39, 0, 33, 7, 88, 12, 28, 6, 119, 121, 120, 82, 88, 81, 12, 103, 93, 57, 16, 24, 6, 41, 90, 66, 86, 46, 30, 23, 120, 11, 46, 6, 29, 13, 19, 103, 54, 26, 42, 35, 38, 0, 89, 83, 9, 112, 91, 66, 118, 124, 101, 85, 86, 49, 91, 33, 20, 0, 49, 99, 126, 86, 65, 76, 9, 113, 82, 73, 120, 58, 42, 23, 86, 3, 89, 36, 16, 2, 44, 63, 20, 12, 18, 66, 7, 103, 82, 66, 109, 42, 115, 85, 70, 86, 95, 119, 71, 23, 109, 121, 122, 83, 66, 84, 14, 112, 76, 65, 106, 47, 122, 6, 68, 86, 9, 117, 16, 19, 62, 124, 122, 87, 18, 4, 9, 116, 77, 66, 107, 42, 40, 84, 19, 6, 88, 36, 76, 16, 110, 116, 40, 4, 18, 82, 91, 127, 17, 75, 59, 120, 126, 66, 77, 66, 95, 63, 1, 0, 57, 47, 63, 75, 18, 13, 87, 38, 28, 28, 120, 113, 107, 13, 25, 17, 78, 28, 68, 47, 120, 103, 107, 66, 89, 69, 1, 103, 16, 10, 44, 62, 42, 6, 2, 76, 74, 53, 26, 10, 106, 108, 118, 69, 94, 69, 74, 38, 7, 19, 53, 99, 4, 23, 31, 5, 83, 41, 72, 85, 120, 103, 107, 0, 24, 1, 85, 35, 16, 39, 10, 5, 8, 10, 27, 18, 85, 41, 16, 28, 44, 100, 35, 10, 5, 22, 97, 118, 40, 91, 120, 103, 107, 66, 89, 69, 19, 103, 94, 82, 112, 107, 59, 4, 4, 3, 87, 104, 39, 23, 62, 41, 57, 0, 4, 95, 29, 103, 94, 82, 61, 34, 40, 10, 18, 7, 111, 21, 60, 49, 55, 33, 59, 10, 24, 7, 84, 51, 93, 0, 61, 42, 46, 23, 19, 16, 19, 103, 94, 82, 127, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 55, 73, 34, 7, 95, 25, 43, 46, 11, 2, 95, 29, 103, 94, 82, 61, 34, 40, 10, 18, 7, 111, 21, 60, 49, 55, 33, 59, 10, 24, 7, 84, 51, 93, 7, 43, 41, 57, 58, 23, 5, 95, 41, 1, 91, 120, 103, 107, 66, 89, 69, 19, 103, 94, 82, 112, 107, 59, 4, 4, 3, 87, 104, 38, 23, 59, 97, 13, 0, 2, 1, 82, 106, 49, 23, 43, 56, 118, 0, 27, 18, 78, 62, 90, 85, 113, 108, 96, 69, 94, 69, 74, 38, 7, 19, 53, 99, 24, 0, 21, 79, 124, 34, 1, 17, 48, 97, 6, 10, 18, 7, 7, 36, 26, 0, 43, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 49, 95, 36, 88, 52, 61, 56, 40, 13, 91, 49, 83, 51, 16, 79, 43, 45, 38, 0, 91, 13, 72, 46, 18, 27, 54, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 58, 23, 21, 16, 3, 45, 41, 56, 17, 19, 6, 23, 16, 28, 6, 48, 113, 19, 40, 58, 42, 78, 51, 5, 32, 61, 61, 62, 0, 5, 22, 21, 96, 92, 73, 120, 41, 51, 17, 4, 3, 89, 51, 91, 26, 61, 45, 47, 0, 4, 17, 26, 122, 85, 62, 57, 33, 59, 4, 88, 50, 86, 38, 1, 20, 55, 62, 38, 75, 31, 17, 18, 96, 20, 28, 60, 62, 36, 12, 18, 69, 19, 103, 74, 82, 35, 108, 108, 42, 4, 11, 93, 46, 27, 85, 98, 108, 35, 10, 5, 22, 97, 118, 40, 94, 120, 107, 25, 0, 16, 7, 72, 34, 7, 85, 98, 108, 57, 0, 16, 7, 72, 34, 7, 94, 120, 107, 30, 22, 19, 16, 23, 6, 18, 23, 54, 56, 108, 95, 86, 23, 73, 34, 7, 45, 57, 43, 46, 11, 2, 78, 26, 96, 38, 23, 59, 97, 13, 0, 2, 1, 82, 106, 49, 23, 43, 56, 108, 95, 86, 69, 95, 42, 5, 6, 33, 107, 103, 69, 81, 49, 95, 36, 88, 52, 61, 56, 40, 13, 91, 47, 85, 35, 16, 85, 98, 108, 108, 6, 25, 16, 73, 96, 89, 82, 127, 31, 46, 6, 91, 36, 95, 51, 22, 26, 117, 31, 34, 17, 19, 69, 0, 103, 82, 1, 57, 33, 46, 72, 25, 16, 83, 32, 28, 28, 127, 96, 107, 66, 46, 79, 104, 34, 4, 7, 61, 63, 63, 0, 18, 79, 109, 46, 1, 26, 127, 118, 107, 66, 46, 47, 118, 15, 1, 6, 40, 30, 46, 20, 3, 7, 73, 51, 82, 82, 37, 108, 113, 69, 13, 31, 1, 103, 3, 19, 42, 108, 62, 22, 19, 16, 26, 122, 85, 1, 44, 62, 101, 8, 23, 22, 89, 47, 93, 93, 100, 33, 46, 17, 23, 66, 84, 38, 24, 23, 101, 110, 61, 12, 19, 21, 74, 40, 7, 6, 122, 98, 97, 89, 27, 7, 78, 38, 85, 28, 57, 33, 46, 88, 84, 57, 100, 101, 40, 88, 122, 98, 97, 69, 21, 13, 84, 51, 16, 28, 44, 113, 105, 77, 45, 60, 24, 26, 95, 91, 122, 99, 98, 94, 86, 11, 92, 103, 93, 7, 43, 41, 57, 76, 13, 66, 76, 38, 7, 82, 43, 108, 118, 69, 3, 17, 95, 53, 46, 67, 5, 98, 56, 9, 31, 1, 95, 111, 70, 94, 120, 97, 126, 76, 77, 66, 76, 38, 7, 82, 52, 108, 118, 69, 5, 76, 86, 34, 27, 21, 44, 36, 112, 69, 0, 3, 72, 103, 13, 82, 101, 108, 123, 94, 86, 4, 85, 53, 93, 4, 57, 62, 107, 12, 86, 95, 26, 119, 78, 82, 49, 108, 119, 69, 26, 89, 26, 46, 94, 89, 113, 108, 51, 69, 75, 66, 18, 63, 85, 89, 120, 63, 101, 6, 30, 3, 72, 4, 26, 22, 61, 13, 63, 77, 31, 75, 19, 103, 80, 82, 52, 119, 107, 19, 23, 16, 26, 38, 85, 79, 120, 34, 46, 18, 86, 35, 72, 53, 20, 11, 112, 32, 98, 94, 86, 4, 85, 53, 93, 4, 57, 62, 107, 12, 86, 95, 26, 119, 78, 82, 49, 108, 119, 69, 26, 89, 26, 46, 94, 89, 113, 108, 51, 69, 75, 66, 18, 118, 68, 66, 107, 121, 122, 80, 68, 86, 15, 103, 95, 82, 32, 108, 96, 69, 71, 80, 9, 115, 64, 91, 120, 105, 107, 9, 90, 66, 91, 28, 28, 47, 120, 113, 107, 29, 77, 66, 76, 38, 7, 82, 43, 45, 107, 88, 86, 17, 20, 52, 5, 30, 49, 56, 99, 66, 81, 75, 1, 103, 19, 29, 42, 100, 61, 4, 4, 66, 83, 103, 72, 82, 52, 108, 102, 69, 71, 89, 26, 46, 85, 76, 101, 108, 123, 94, 86, 11, 23, 106, 92, 82, 35, 108, 61, 4, 4, 66, 80, 103, 72, 82, 57, 23, 34, 56, 90, 66, 78, 103, 72, 82, 3, 63, 42, 62, 28, 63, 22, 103, 6, 19, 3, 37, 22, 56, 77, 66, 73, 38, 46, 27, 5, 108, 118, 69, 2, 57, 10, 26, 89, 82, 43, 45, 16, 15, 43, 66, 7, 103, 1, 41, 105, 17, 112, 69, 11, 66, 76, 38, 7, 82, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 26, 122, 85, 1, 57, 98, 33, 10, 31, 12, 18, 96, 82, 91, 118, 63, 39, 12, 21, 7, 18, 117, 89, 82, 117, 126, 98, 69, 93, 66, 29, 59, 82, 82, 115, 108, 42, 6, 21, 7, 74, 51, 6, 45, 49, 40, 112, 69, 19, 26, 78, 53, 20, 17, 44, 98, 59, 23, 25, 26, 8, 103, 94, 79, 120, 107, 59, 4, 4, 3, 87, 104, 38, 0, 57, 39, 42, 72, 20, 13, 78, 106, 54, 29, 54, 56, 57, 10, 26, 17, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 19, 103, 94, 82, 127, 99, 108, 94, 86, 11, 92, 103, 93, 62, 57, 33, 59, 4, 88, 50, 86, 38, 1, 20, 55, 62, 38, 75, 31, 17, 18, 96, 20, 28, 60, 62, 36, 12, 18, 69, 19, 110, 14, 82, 61, 52, 63, 23, 23, 1, 78, 105, 29, 23, 57, 40, 46, 23, 5, 57, 29, 20, 7, 19, 51, 45, 102, 7, 25, 22, 23, 4, 26, 28, 44, 62, 36, 9, 5, 69, 103, 103, 72, 82, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 1, 103, 8, 82, 37, 108, 46, 29, 2, 16, 91, 36, 1, 92, 43, 56, 57, 0, 23, 15, 101, 55, 7, 29, 32, 126, 107, 88, 86, 74, 29, 55, 20, 0, 57, 33, 100, 42, 4, 11, 93, 46, 27, 79, 127, 108, 96, 69, 19, 12, 89, 40, 17, 23, 13, 30, 2, 38, 25, 15, 74, 40, 27, 23, 54, 56, 99, 13, 25, 17, 78, 28, 68, 47, 113, 108, 96, 69, 81, 77, 29, 110, 85, 89, 120, 100, 108, 21, 23, 16, 91, 42, 90, 32, 61, 42, 46, 23, 19, 16, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 48, 35, 56, 17, 45, 83, 103, 103, 94, 82, 127, 99, 108, 76, 86, 73, 26, 96, 90, 85, 113, 108, 96, 69, 94, 69, 74, 38, 7, 19, 53, 99, 30, 22, 19, 16, 23, 6, 18, 23, 54, 56, 118, 66, 86, 73, 26, 34, 27, 17, 55, 40, 46, 48, 36, 43, 121, 40, 24, 2, 55, 34, 46, 11, 2, 74, 79, 52, 16, 0, 7, 45, 44, 0, 24, 22, 19, 103, 94, 82, 127, 99, 108, 76, 77, 66, 95, 63, 1, 0, 57, 47, 63, 75, 5, 22, 72, 34, 20, 31, 7, 36, 46, 4, 18, 7, 72, 52, 85, 79, 120, 0, 42, 8, 6, 3, 20, 23, 25, 19, 44, 42, 36, 23, 27, 76, 83, 52, 93, 85, 57, 34, 47, 23, 25, 11, 94, 96, 92, 82, 103, 108, 48, 69, 81, 45, 72, 46, 18, 27, 54, 107, 113, 69, 30, 13, 73, 51, 46, 67, 5, 96, 107, 66, 36, 7, 92, 34, 7, 23, 42, 107, 113, 69, 30, 13, 73, 51, 46, 67, 5, 108, 96, 69, 81, 77, 29, 107, 85, 85, 13, 63, 46, 23, 91, 35, 93, 34, 27, 6, 127, 118, 107, 16, 5, 7, 72, 24, 20, 21, 61, 34, 63, 69, 11, 66, 0, 103, 14, 15, 99, 108, 54, 69, 4, 7, 78, 50, 7, 28, 120, 41, 51, 17, 4, 3, 89, 51, 78, 82, 37, 101, 101, 6, 23, 14, 86, 111, 14, 15, 116]);
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function alloha_api_search(api, callback, error) {
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(embed + '&' + api, prox, '', 'enc2t'), function (json) {
          if (callback) callback(json);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var api = (+kinopoisk_id ? 'kp=' : 'imdb=') + kinopoisk_id;
        alloha_api_search(api, function (json) {
          if (json && json.data && json.data.iframe) getPage(json.data);else if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            alloha_api_search('imdb=' + object.movie.imdb_id, function (json) {
              if (json && json.data && json.data.iframe) getPage(json.data);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      function getPage(data) {
        network.clear();
        network.timeout(20000);
        network["native"](component.proxyLink(data.iframe, prox2, prox2_enc, 'enc2t'), function (str) {
          parse(str, data.iframe);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: headers2
        });
      }

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parseSubs(tracks) {
        if (!(tracks && tracks.length)) return false;
        var subtitles = tracks.filter(function (t) {
          return t.kind === 'captions';
        }).map(function (item) {
          var links = item.src || '';
          var link = links.split(' or ').filter(function (link) {
            return link;
          })[0] || '';
          return {
            label: item.label,
            url: component.processSubs(component.proxyLink(link, prox2, extract.stream_prox2))
          };
        });
        return subtitles.length ? subtitles : false;
      }

      function parse(str, url) {
        str = (str || '').replace(/\n/g, '');
        var fileList = str.match(/ fileList = JSON\.parse\('(\{.*\})'\);/);
        var pl = fileList && Lampa.Arrays.decodeJson(fileList[1], {});
        extract = {};

        try {
          extract = (0, eval)(decrypt + [JSON.stringify(str), JSON.stringify(url), JSON.stringify(token), JSON.stringify(av1_support)].join(',') + ');');
        } catch (e) {}

        extract.pl = {};

        if (pl && pl.all && Object.keys(pl.all).length) {
          extract.pl = pl;
          component.loading(false);
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          season_num: [],
          voice: [],
          voice_info: []
        };

        if (extract.pl.type === 'serial') {
          for (var s_num in extract.pl.all) {
            if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
          }
        }

        filter_items.season_num.sort(function (a, b) {
          return a - b;
        });
        filter_items.season_num.forEach(function (s_num) {
          filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
        });
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (filter_items.season[choice.season]) {
          var _s_num = filter_items.season_num[choice.season];
          var episodes = extract.pl.all[_s_num] || {};

          for (var e_num in episodes) {
            var translations = episodes[e_num] || {};

            var _loop = function _loop(v_id) {
              if (!filter_items.voice_info.some(function (v) {
                return v.id == v_id;
              })) {
                filter_items.voice.push(translations[v_id].translation);
                filter_items.voice_info.push({
                  id: v_id
                });
              }
            };

            for (var v_id in translations) {
              _loop(v_id);
            }
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.pl.type === 'serial') {
          if (filter_items.season[choice.season] && filter_items.voice_info[choice.voice]) {
            var s_num = filter_items.season_num[choice.season];
            var v_id = filter_items.voice_info[choice.voice].id;
            var voice = filter_items.voice[choice.voice];
            var episodes = extract.pl.all[s_num] || {};

            for (var e_num in episodes) {
              var translations = episodes[e_num] || {};

              if (translations[v_id]) {
                var media = translations[v_id];
                filtred.push({
                  title: component.formatEpisodeTitle(s_num, e_num),
                  quality: '360p ~ 1080p' + (media.quality ? ' / ' + media.quality : ''),
                  info: ' / ' + Lampa.Utils.shortText(voice, 50),
                  season: s_num,
                  episode: e_num,
                  media: media
                });
              }
            }
          }
        } else {
          for (var type in extract.pl.all) {
            var _translations = extract.pl.all[type] || {};

            for (var translation in _translations) {
              var qualities = _translations[translation] || {};

              for (var quality in qualities) {
                var _media = qualities[quality];
                filtred.push({
                  title: (_media.translation || select_title) + (_media.directors_cut ? ' (Режиссёрская версия)' : ''),
                  quality: '360p ~ 1080p' + (_media.quality ? ' / ' + _media.quality : ''),
                  info: '',
                  media: _media
                });
              }
            }
          }
        }

        return filtred;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!(element.media.id && extract.domain)) return error();
        var postdata = extract.postdata;
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(extract.domain + 'api/movies/' + element.media.id, prox2, extract.prox2, 'enc2t'), function (json) {
          if (json && json.hlsSource && json.hlsSource.length) {
            var file = '';
            var quality = false;
            var items = [];
            var hlsSource = json.hlsSource.filter(function (s) {
              return s["default"];
            })[0] || json.hlsSource[0] || {};

            if (hlsSource.quality) {
              for (var q_id in hlsSource.quality) {
                var links = hlsSource.quality[q_id] || '';
                var link = links.split(' or ').filter(function (link) {
                  return link;
                })[0] || '';

                if (link) {
                  items.push({
                    label: q_id + 'p',
                    quality: parseInt(q_id),
                    file: component.proxyLink(link, prox2, extract.stream_prox2)
                  });
                }
              }

              items.sort(function (a, b) {
                if (b.quality > a.quality) return 1;
                if (b.quality < a.quality) return -1;
                if (b.label > a.label) return 1;
                if (b.label < a.label) return -1;
                return 0;
              });

              if (!av1_support) {
                items = items.filter(function (item) {
                  return !(item.quality > 1080);
                });
              }
            }

            if (items && items.length) {
              file = items[0].file;

              if (items.length > 1) {
                quality = {};
                items.forEach(function (item) {
                  if (!quality[item.label]) quality[item.label] = item.file;
                });
              }
            }

            if (file) {
              element.stream = file;
              element.qualitys = quality;
              element.subtitles = parseSubs(json.tracks);
              call(element);
            } else error();
          } else error();
        }, function (a, c) {
          error();
        }, postdata, {
          headers: extract.headers
        });
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function redheadsound(component, _object, prefer_dash) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = [];
      var object = _object;
      var select_title = '';
      var page_title = '';
      var prox = component.proxy('redheadsound');
      var host = 'https://redheadsound.studio';
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var embed = ref;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };
      var secret = atob('MWM2MzYyNTY3ZjNmNzQ5ZDVkOTZjOWVmYjZlM2UwYmRhYzY4NjI3OA==');
      var secret_timestamp = null;

      function decodeSecretToken(callback) {

        var timestamp = new Date().getTime();
        var cache_timestamp = timestamp - 1000 * 60 * 10;

        if (secret && secret_timestamp && secret_timestamp > cache_timestamp) {
          if (callback) callback();
          return;
        }

        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(embed, prox), function (str) {
          str = (str || '').replace(/\n/g, '');
          var found = str.match(/\bdle_login_hash = '([^']+)'/);

          if (found) {
            secret = found[1];
            secret_timestamp = timestamp;
          }

          if (callback) callback();
        }, function (a, c) {
          if (callback) callback();
        }, false, {
          dataType: 'text'
        });
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0]);
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);
        var url = embed + 'engine/ajax/controller.php?mod=search';

        var display = function display(links) {
          if (links && links.length && links.forEach) {
            var is_sure = false;
            var items = links.map(function (l) {
              var h4 = $(l.link);
              var link = $('a', h4);
              var titl = link.text().trim() || '';
              var year_link = $(l.year);
              var year = parseInt(year_link.text().trim() || '');
              return {
                year: year,
                title: titl,
                orig_title: '',
                link: link.attr('href') || ''
              };
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              {
                var _tmp2 = cards.filter(function (c) {
                  return !endsWith(c.title, ' - обзор');
                });

                if (_tmp2.length) {
                  cards = _tmp2;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp3 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp3.length) cards = _tmp3;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) getPage(cards[0]);else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            } else component.emptyForQuery(select_title);
          } else component.emptyForQuery(select_title);
        };

        var query_search = function query_search(query, data, callback) {
          var postdata = 'query=' + encodeURIComponent(query);
          postdata += '&skin=rhs_new';
          postdata += '&user_hash=' + secret;
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(url, prox), function (str) {
            str = (str || '').replace(/\n/g, '');
            var pos = str.indexOf('<div class="move-item">');

            if (pos !== -1) {
              str.substring(pos + '<div class="move-item">'.length).split('<div class="move-item">').forEach(function (item) {
                var link = item.match(/<div class="move-item__content">\s*(<h4 class="title">\s*<a [^>]*>[^<]*<\/a>[^<]*<\/h4>)/);
                var year = item.match(/(<span class="year [^>]*>\s*(<a [^>]*>[^<]*<\/a>)?[^<]*<\/span>)/);

                if (link) {
                  data.push({
                    link: link[1],
                    year: year && year[1] || ''
                  });
                }
              });
            }

            if (callback) callback(data);
          }, function (a, c) {
            component.empty(network.errorDecode(a, c));
          }, postdata, {
            dataType: 'text'
          });
        };

        var query_title_search = function query_title_search() {
          query_search(component.cleanTitle(select_title), [], function (data) {
            if (data && data.length && data.forEach) display(data);else display([]);
          });
        };

        var apiSearch = function apiSearch() {
          query_title_search();
        };

        decodeSecretToken(function () {
          return apiSearch();
        });
      };

      function getPage(card) {
        page_title = card.title || card.orig_title || select_title;
        var url = component.fixLink(card.link, ref);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox), function (str) {
          str = (str || '').replace(/\n/g, '');
          var player = str.match(/\bvideoUrl = '(http[^']*)'/);
          var player_link = player && player[1];

          if (player_link) {
            network.clear();
            network.timeout(10000);
            network["native"](component.proxyLink(player_link, prox, prox_enc), function (str) {
              parse(str);
            }, function (a, c) {
              component.empty(network.errorDecode(a, c));
            }, false, {
              dataType: 'text',
              headers: headers
            });
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text'
        });
      }

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parse(str, url) {
        component.loading(false);
        str = (str || '').replace(/\n/g, '');
        var find = str.match(/var playerOptions = ({.*?});/);
        var json;

        try {
          json = find && (0, eval)('"use strict"; (function(){ return ' + find[1] + '; })();');
        } catch (e) {}

        if (json && json.playlist && json.playlist.length && json.playlist.forEach) {
          extract = json.playlist;
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        extract.forEach(function (data) {
          var file = data.sources && (prefer_dash && data.sources.shakadash && data.sources.shakadash.src || data.sources.hls && data.sources.hls.src) || '';
          filtred.push({
            title: data.title || data.comment || select_title,
            quality: '360p ~ 1080p',
            info: '',
            file: file
          });
        });
        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        return {
          file: element.file,
          quality: false,
          subtitles: false
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(object.movie.original_title + page_title + element.title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(object.movie.original_title + page_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                subtitles: extra.subtitles,
                timeline: element.timeline,
                title: items.length > 1 ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (items.length > 1) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    subtitles: ex.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function cdnvideohub(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('cdnvideohub');
      var user_agent = Utils.baseUserAgent();
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=/';
        prox_enc += 'param/Referer=/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var embed = atob('aHR0cHM6Ly9wbGFwaS5jZG52aWRlb2h1Yi5jb20vYXBpL3YxL3BsYXllci9zdi8=');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */

      this.search = function (_object, kinopoisk_id) {
        object = _object;
        select_title = object.search || object.movie.title;

        if (isNaN(kinopoisk_id)) {
          component.emptyForQuery(select_title);
          return;
        }

        var url = Lampa.Utils.addUrlComponent(embed + atob('cGxheWxpc3Q/cHViPTEyJmFnZ3I9a3A='), 'id=' + kinopoisk_id);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc), function (json) {
          parse(json);
        }, function (a, c) {
          if (a.status == 500 && !a.responseText || a.status == 0 && a.statusText !== 'timeout') {
            parse(null);
          } else component.empty(network.errorDecode(a, c));
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function parse(json) {
        component.loading(false);

        if (json && json.items && json.items.length && json.items.forEach) {
          var seasons = [];
          var items = json.items;
          items.sort(function (a, b) {
            var cmp = (a.season || 0) - (b.season || 0);
            if (cmp) return cmp;
            cmp = (a.episode || 0) - (b.episode || 0);
            if (cmp) return cmp;
            if ((a.voiceStudio || a.voiceType || '') > (b.voiceStudio || b.voiceType || '')) return 1;
            if ((a.voiceStudio || a.voiceType || '') < (b.voiceStudio || b.voiceType || '')) return -1;
            cmp = (a.vkId || 0) - (b.vkId || 0);
            return cmp;
          });
          items.forEach(function (data) {
            if (data.season != null) {
              var s = seasons.filter(function (s) {
                return s.id === data.season;
              })[0];

              if (!s) {
                s = {
                  id: data.season,
                  title: Lampa.Lang.translate('torrent_serial_season') + ' ' + data.season,
                  voices: []
                };
                seasons.push(s);
              }

              var voice = data.voiceStudio || data.voiceType || '';
              if (s.voices.indexOf(voice) == -1) s.voices.push(voice);
            }
          });
          extract = {
            title_name: json.titleName || json.title_name || select_title,
            items: items,
            seasons: seasons
          };
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.seasons.map(function (s) {
            return s.title;
          }),
          voice: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;
        var s = extract.seasons[choice.season];
        if (s) filter_items.voice = s.voices;
        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.seasons.length) {
          var season_id = extract.seasons[choice.season] && extract.seasons[choice.season].id;
          extract.items.forEach(function (data) {
            var voice = data.voiceStudio || data.voiceType || '';

            if (data.season == season_id && voice == filter_items.voice[choice.voice]) {
              filtred.push({
                title: component.formatEpisodeTitle(season_id, data.episode),
                quality: '360p ~ 1080p',
                info: ' / ' + Lampa.Utils.shortText(voice, 50) + (data.vkId ? ' / id: ' + data.vkId : ''),
                data_id: data.vkId,
                season: '' + season_id,
                episode: data.episode,
                media: data
              });
            }
          });
        } else {
          extract.items.forEach(function (data) {
            filtred.push({
              title: data.voiceStudio || data.voiceType || extract.title_name,
              quality: '360p ~ 1080p',
              info: data.vkId ? ' / id: ' + data.vkId : '',
              data_id: data.vkId,
              media: data
            });
          });
        }

        return filtred;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(sources) {
        if (!sources) return [];
        var items = [];
        /* 4K и 2K перепутаны */

        if (sources.mpeg2kUrl) {
          items.push({
            label: '4K',
            quality: 2160,
            file: sources.mpeg2kUrl
          });
        }

        if (sources.mpeg4kUrl) {
          items.push({
            label: '2K',
            quality: 1440,
            file: sources.mpeg4kUrl
          });
        }

        if (sources.mpegQhdUrl) {
          items.push({
            label: '1440p',
            quality: 1440,
            file: sources.mpegQhdUrl
          });
        }

        if (sources.mpegFullHdUrl) {
          items.push({
            label: '1080p',
            quality: 1080,
            file: sources.mpegFullHdUrl
          });
        }

        if (sources.mpegHighUrl) {
          items.push({
            label: '720p',
            quality: 720,
            file: sources.mpegHighUrl
          });
        }

        if (sources.mpegMediumUrl) {
          items.push({
            label: '480p',
            quality: 480,
            file: sources.mpegMediumUrl
          });
        }

        if (sources.mpegLowUrl) {
          items.push({
            label: '360p',
            quality: 360,
            file: sources.mpegLowUrl
          });
        }

        if (sources.mpegLowestUrl) {
          items.push({
            label: '240p',
            quality: 240,
            file: sources.mpegLowestUrl
          });
        }

        if (sources.mpegTinyUrl) {
          items.push({
            label: '144p',
            quality: 144,
            file: sources.mpegTinyUrl
          });
        }

        if (!items.length && sources.hlsUrl) {
          items.push({
            label: 'HLS',
            quality: NaN,
            file: sources.hlsUrl
          });
        }

        items.forEach(function (item) {
          item.file = component.proxyLink(component.fixLinkProtocol(item.file, prefer_http, true), prox, prox_enc);
        });
        return items;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.data_id) return error();
        var url = embed + 'video/' + element.data_id;
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc), function (json) {
          if (json && json.sources) {
            var file = '',
                quality = false;
            var items = extractItems(json.sources);

            if (items && items.length) {
              file = items[0].file;
              quality = {};
              items.forEach(function (item) {
                quality[item.label] = item.file;
              });
            }

            if (file) {
              element.stream = file;
              element.qualitys = quality;
              call(element);
            } else error();
          } else error();
        }, function (a, c) {
          error();
        });
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.data_id);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function anilibria(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prox = component.proxy('anilibria');
      var embed = 'https://api.anilibria.tv/v3/';
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };
      /**
       * Поиск
       * @param {Object} _object
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getRelease(data[0]);
        var search_year = object.search_date;
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(items) {
          if (items && items.length && items.forEach) {
            var is_sure = false;
            items.forEach(function (c) {
              c.ru_title = c.names && c.names.ru;
              c.en_title = c.names && c.names.en;
              c.alt_title = c.names && c.names.alternative;
              c.year = c.season && c.season.year && parseInt(c.season.year) || 0;
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.en_title, c.ru_title, c.alt_title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.ru_title, c.en_title, c.alt_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].en_title, cards[0].ru_title, cards[0].alt_title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].ru_title, cards[0].en_title, cards[0].alt_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              getRelease(cards[0]);
            } else {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;

                if (!(c.type && c.type.string === 'MOVIE')) {
                  c.episodes_count = c.player && c.player.episodes && c.player.episodes.last;
                }
              });
              component.similars(items);
              component.loading(false);
            }
          } else component.emptyForQuery(select_title);
        };

        var url = embed + 'title/search';
        url = Lampa.Utils.addUrlComponent(url, 'filter=names,season,type,player');
        url = Lampa.Utils.addUrlComponent(url, 'limit=20');
        url = Lampa.Utils.addUrlComponent(url, 'search=' + encodeURIComponent(select_title));
        network.clear();
        network.timeout(1000 * 30);
        network.silent(component.proxyLink(url, prox), function (json) {
          display(json && json.list);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function getRelease(json) {
        if (json.player && json.player.host && json.player.list && Object.keys(json.player.list).length) {
          success(json);
        } else {
          component.emptyForQuery(select_title);
          Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink_copyright'));
        }
      }

      function success(json) {
        component.loading(false);
        extract = json;
        filter();
        append(filtred());
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        component.filter(filter_items, choice);
      }
      /**
       * Получить потоки
       * @param {String} host
       * @param {Object} hls
       * @returns array
       */


      function extractItems(host, hls) {
        var items = [];

        if (hls) {
          if (hls.fhd) {
            items.push({
              label: '1080p',
              quality: 1080,
              file: host + hls.fhd
            });
          }

          if (hls.hd) {
            items.push({
              label: '720p',
              quality: 720,
              file: host + hls.hd
            });
          }

          if (hls.sd) {
            items.push({
              label: '480p',
              quality: 480,
              file: host + hls.sd
            });
          }
        }

        return items;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.player && extract.player.host && extract.player.list && Object.keys(extract.player.list).length) {
          var host = 'https://' + extract.player.host;

          if (extract.type && extract.type.string === 'MOVIE' && Object.keys(extract.player.list).length === 1) {
            for (var ID in extract.player.list) {
              var episode = extract.player.list[ID];
              var items = extractItems(host, episode.hls);
              filtred.push({
                title: extract.ru_title || extract.en_title || select_title,
                orig_title: extract.en_title || extract.ru_title || select_title,
                quality: items[0] ? items[0].label : '360p ~ 1080p',
                info: '',
                media: items
              });
            }
          } else {
            for (var _ID in extract.player.list) {
              var _episode = extract.player.list[_ID];

              var _items = extractItems(host, _episode.hls);

              filtred.push({
                title: component.formatEpisodeTitle(null, _episode.episode, _episode.name),
                orig_title: extract.en_title || extract.ru_title || select_title,
                quality: _items[0] ? _items[0].label : '360p ~ 1080p',
                info: '',
                season: 1,
                episode: _episode.episode,
                media: _items
              });
            }
          }
        }

        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var items = element.media;

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                timeline: element.timeline,
                title: element.title
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function anilibria2(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prox = component.proxy('anilibria2');
      var embed = 'https://api.anilibria.app/api/v1/';
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0
      };
      /**
       * Поиск
       * @param {Object} _object
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getRelease(data[0]);
        var search_year = object.search_date;
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(items) {
          if (items && items.length && items.forEach) {
            var is_sure = false;
            items.forEach(function (c) {
              c.ru_title = c.name && c.name.main;
              c.en_title = c.name && c.name.english;
              c.alt_title = c.name && c.name.alternative;
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.en_title, c.ru_title, c.alt_title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.ru_title, c.en_title, c.alt_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].en_title, cards[0].ru_title, cards[0].alt_title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].ru_title, cards[0].en_title, cards[0].alt_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              getRelease(cards[0]);
            } else {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;

                if (!(c.type && c.type.value === 'MOVIE')) {
                  c.episodes_count = c.episodes_total;
                }
              });
              component.similars(items);
              component.loading(false);
            }
          } else component.emptyForQuery(select_title);
        };

        var url = embed + 'app/search/releases';
        url = Lampa.Utils.addUrlComponent(url, 'query=' + encodeURIComponent(select_title));
        network.clear();
        network.timeout(1000 * 15);
        network.silent(component.proxyLink(url, prox), function (json) {
          display(json);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function getRelease(json) {
        var url = embed + 'anime/releases/' + json.id;
        network.clear();
        network.timeout(1000 * 15);
        network.silent(component.proxyLink(url, prox), function (json) {
          if (json && json.episodes && json.episodes.length) {
            json.ru_title = json.name && json.name.main;
            json.en_title = json.name && json.name.english;
            json.alt_title = json.name && json.name.alternative;
            success(json);
          } else component.emptyForQuery(select_title);

          if (json && json.is_blocked_by_copyrights) Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink_copyright'));else if (json && json.is_blocked_by_geo) Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink'));
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        });
      }

      function success(json) {
        component.loading(false);
        extract = json;
        filter();
        append(filtred());
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: []
        };
        component.filter(filter_items, choice);
      }
      /**
       * Получить потоки
       * @param {String} host
       * @param {Object} hls
       * @returns array
       */


      function extractItems(episode) {
        var items = [];

        if (episode.hls_1080) {
          items.push({
            label: '1080p',
            quality: 1080,
            file: episode.hls_1080
          });
        }

        if (episode.hls_720) {
          items.push({
            label: '720p',
            quality: 720,
            file: episode.hls_720
          });
        }

        if (episode.hls_480) {
          items.push({
            label: '480p',
            quality: 480,
            file: episode.hls_480
          });
        }

        return items;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.episodes && extract.episodes.length) {
          if (extract.type && extract.type.value === 'MOVIE' && extract.episodes.length === 1) {
            extract.episodes.forEach(function (episode) {
              var items = extractItems(episode);
              filtred.push({
                title: extract.ru_title || extract.en_title || select_title,
                orig_title: extract.en_title || extract.ru_title || select_title,
                quality: items[0] ? items[0].label : '360p ~ 1080p',
                info: '',
                media: items
              });
            });
          } else {
            extract.episodes.forEach(function (episode) {
              var items = extractItems(episode);
              filtred.push({
                title: component.formatEpisodeTitle(null, episode.ordinal, episode.name),
                orig_title: extract.en_title || extract.ru_title || select_title,
                quality: items[0] ? items[0].label : '360p ~ 1080p',
                info: '',
                season: 1,
                episode: episode.ordinal,
                media: items
              });
            });
          }
        }

        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var items = element.media;

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        return {
          file: file,
          quality: quality
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                timeline: element.timeline,
                title: element.title
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function animelib(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prox = component.proxy('animelib');
      var host = 'https://anilib.me';
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var embed = 'https://api2.mangalib.me/api/';
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      }

      var servers = [{
        name: 'Основной',
        url: 'https://video1.anilib.me/.%D0%B0s/'
      }, {
        name: 'Резервный 1',
        url: 'https://video2.anilib.me/.%D0%B0s/'
      }, {
        name: 'Резервный 2',
        url: 'https://video3.anilib.me/.%D0%B0s/'
      }];
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        server: 0
      };
      /**
       * Поиск
       * @param {Object} _object
       */

      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return getEpisodes(data[0]);
        var search_year = object.search_date;
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(items) {
          if (items && items.length && items.forEach) {
            var is_sure = false;
            items.forEach(function (c) {
              c.orig_title = c.name;
              c.ru_title = c.rus_name;
              c.en_title = c.eng_name;
              var year = c.releaseDate || '0000';
              c.year = parseInt((year + '').slice(0, 4));
            });
            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.en_title, c.ru_title], orig_titles);
                });

                if (tmp.length) {
                  cards = tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.ru_title, c.en_title, c.orig_title], [select_title]);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp2 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp2.length) cards = _tmp2;
              }
            }

            if (cards.length == 1 && is_sure) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].en_title, cards[0].ru_title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].ru_title, cards[0].en_title, cards[0].orig_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              getEpisodes(cards[0]);
            } else {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            }
          } else component.emptyForQuery(select_title);
        };

        var url = embed + 'anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate';
        url = Lampa.Utils.addUrlComponent(url, 'q=' + encodeURIComponent(select_title));
        network.clear();
        network.timeout(1000 * 15);
        network.silent(component.proxyLink(url, prox, prox_enc), function (json) {
          display(json && json.data);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          server: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function getEpisodes(json) {
        var url = embed + 'episodes';
        url = Lampa.Utils.addUrlComponent(url, 'anime_id=' + encodeURIComponent(json.slug_url));
        network.clear();
        network.timeout(1000 * 15);
        network.silent(component.proxyLink(url, prox, prox_enc), function (episodes) {
          if (episodes && episodes.data && episodes.data.length) {
            json.episodes = episodes.data;
            getPlayers(json.episodes[0], function () {
              if (json.episodes[0].players && json.episodes[0].players.length) success(json);else component.emptyForQuery(select_title);
            });
          } else component.emptyForQuery(select_title);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        });
      }

      function getPlayers(episode, callback) {
        if (episode.players) {
          callback();
          return;
        }

        var url = embed + 'episodes/' + episode.id;
        network.clear();
        network.timeout(1000 * 15);
        network.silent(component.proxyLink(url, prox, prox_enc), function (json) {
          if (json && json.data && json.data.players) {
            episode.players = json.data.players.filter(function (p) {
              return p.player === 'Animelib';
            });
          }

          callback();
        }, function (a, c) {
          callback();
        });
      }

      function success(json) {
        component.loading(false);
        extract = json;
        extract.is_film = extract.episodes && extract.episodes.length === 1 && extract.type && ['Фильм', 'Неизвестный'].indexOf(extract.type.label) !== -1;
        filter();
        append(filtred());
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: [],
          voice: [],
          voice_info: [],
          server: servers.map(function (s) {
            return s.name;
          })
        };

        if (!extract.is_film) {
          extract.episodes.forEach(function (e) {
            if (e.players) {
              e.players.forEach(function (p) {
                if (p.team && !filter_items.voice_info.some(function (v) {
                  return v.id == p.team.id;
                })) {
                  filter_items.voice.push(p.team.name);
                  filter_items.voice_info.push(p.team);
                }
              });
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Получить потоки
       * @param {Object} player
       * @returns array
       */


      function extractItems(player) {
        try {
          var items = [];

          if (player && player.video && player.video.quality) {
            var server = servers[choice.server] || servers[0];
            items = player.video.quality.map(function (q) {
              return {
                label: q.quality ? q.quality + 'p' : '360p ~ 1080p',
                quality: q.quality,
                file: q.href ? component.proxyLink(server.url + q.href, prox, prox_enc) : ''
              };
            });
            items.sort(function (a, b) {
              if (b.quality > a.quality) return 1;
              if (b.quality < a.quality) return -1;
              if (b.label > a.label) return 1;
              if (b.label < a.label) return -1;
              return 0;
            });
          }

          return items;
        } catch (e) {}

        return [];
      }

      function extractSubs(player) {
        try {
          var subtitles = [];

          if (player && player.subtitles) {
            subtitles = player.subtitles.map(function (item) {
              return {
                label: item.format || item.filename || '',
                url: component.processSubs(item.src || '')
              };
            });
          }

          return subtitles.length ? subtitles : false;
        } catch (e) {}

        return false;
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];
        var server = servers[choice.server] || servers[0];

        if (extract.episodes) {
          if (extract.is_film) {
            extract.episodes.forEach(function (episode) {
              if (episode.players) {
                episode.players.forEach(function (player) {
                  var voice_name = player && player.team && player.team.name || '';
                  var voice_id = player && player.team && player.team.id || null;
                  var items = extractItems(player);
                  filtred.push({
                    title: voice_name || extract.ru_title || extract.en_title || extract.orig_title || select_title,
                    orig_title: extract.orig_title || extract.en_title || extract.ru_title || select_title,
                    quality: items[0] ? items[0].label : '???',
                    info: ' / ' + server.name,
                    media: {
                      episode: episode,
                      player: player,
                      voice_id: voice_id
                    }
                  });
                });
              }
            });
          } else {
            var voice_id = filter_items.voice_info[choice.voice] && filter_items.voice_info[choice.voice].id;
            extract.episodes.forEach(function (episode) {
              var player = null;

              if (episode.players && episode.players.length) {
                player = episode.players.filter(function (p) {
                  return p.team && p.team.id == voice_id;
                })[0] || episode.players[0];
              }

              var voice_name = player && player.team && player.team.name || '???';
              var items = extractItems(player);
              filtred.push({
                title: component.formatEpisodeTitle(null, episode.item_number, episode.name),
                orig_title: extract.orig_title || extract.en_title || extract.ru_title || select_title,
                quality: items[0] ? items[0].label : '???',
                info: ' / ' + voice_name + ' / ' + server.name,
                season: 1,
                episode: episode.item_number,
                media: {
                  episode: episode,
                  player: player,
                  voice_id: voice_id
                }
              });
            });
          }
        }

        return filtred;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        var episode = element.media.episode;
        var old_player = element.media.player;
        getPlayers(episode, function () {
          var player = element.media.player;

          if (!player) {
            var voice_id = element.media.voice_id;

            if (episode.players && episode.players.length) {
              player = episode.players.filter(function (p) {
                return p.team && p.team.id == voice_id;
              })[0] || episode.players[0];
            }
          }

          var items = extractItems(player);
          var file = '';
          var quality = false;

          if (items && items.length) {
            file = items[0].file;
            quality = {};
            items.forEach(function (item) {
              quality[item.label] = item.file;
            });
          }

          if (!old_player && player) {
            var voice_name = player && player.team && player.team.name || '???';
            var server = servers[choice.server] || servers[0];
            element.quality = items[0] ? items[0].label : '???';
            element.info = ' / ' + voice_name + ' / ' + server.name;
            var dst = element.template && element.template.find('.online__quality');

            if (dst && dst.length) {
              var src = Lampa.Template.get('online_mod', element).find('.online__quality');

              if (src && src.length) {
                if (Lampa.Timeline.details) {
                  src.append(Lampa.Timeline.details(element.timeline, ' / '));
                }

                dst[0].innerHTML = src[0].innerHTML;
              }
            }
          }

          if (file) {
            element.stream = file;
            element.qualitys = quality;
            element.subtitles = extractSubs(player);
            call(element);
          } else error();
        });
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.orig_title + element.title);
          element.timeline = view;
          element.template = item;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function kodik(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = false;
      var prox = component.proxy('kodik');
      var token = Utils.decodeSecret([124, 125, 1, 86, 90, 64, 12, 123, 108, 59, 122, 125, 82, 3, 90, 23, 90, 122, 60, 110, 43, 123, 84, 3, 91, 71, 88, 112, 111, 57, 122, 121], atob('ZmluZCB5b3VyIG93biB0b2tlbg=='));
      var embed = 'https://kodik-api.com/search';
      var last_player = '';
      var last_info = '';
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };

      function kodik_api_search(api, callback, error) {
        network.clear();
        network.timeout(15000);
        network["native"](component.proxyLink(embed + api, prox), function (json) {
          if (callback) callback(json);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        });
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return success(data[0]);
        var search_year = object.search_date;
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(results, empty) {
          if (results && results.length && results.forEach) {
            var is_sure = false;
            var is_imdb = false;
            var elements = {};
            results.forEach(function (c) {
              var id;
              if (c.shikimori_id) id = 'sm_' + c.shikimori_id;else if (c.worldart_link) id = 'wa_' + c.worldart_link;else if (c.kinopoisk_id) id = 'kp_' + c.kinopoisk_id;else if (c.imdb_id) id = 'im_' + c.imdb_id;else if (c.id) id = 'k_' + c.id;else id = '';
              if (!id) return;
              id += c.title;
              var list = elements[id] || [];
              list.push(c);
              elements[id] = list;
            });
            var items = [];

            for (var ID in elements) {
              var list = elements[ID];
              items.push({
                title: list[0].title,
                orig_title: list[0].title_orig,
                other_title: list[0].other_title,
                year: list[0].year,
                kinopoisk_id: list[0].kinopoisk_id,
                imdb_id: list[0].imdb_id,
                episodes_count: list[0].episodes_count,
                media: list[0]
              });
            }

            if (!object.clarification && (object.movie.imdb_id || +kinopoisk_id)) {
              var imdb_id = object.movie.imdb_id;
              var kp_id = +kinopoisk_id;
              var tmp = items.filter(function (c) {
                return imdb_id && c.imdb_id == imdb_id || kp_id && c.kinopoisk_id == kp_id;
              });

              if (tmp.length) {
                items = tmp;
                is_sure = true;
                is_imdb = true;
              }
            }

            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title, c.other_title], orig_titles);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp2 = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title, c.other_title], [select_title]);
                });

                if (_tmp2.length) {
                  cards = _tmp2;
                  is_sure = true;
                }
              }

              if (!is_sure) cards = [];
              items = cards;

              if (cards.length > 1 && search_year) {
                var _tmp3 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp3.length) cards = _tmp3;
              }
            }

            if (cards.length == 1 && is_sure && !is_imdb) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title, cards[0].other_title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title, cards[0].other_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              success(cards[0]);
            } else if (items.length) {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            } else empty();
          } else empty();
        };

        var kodik_search_by_title = function kodik_search_by_title(callback, error) {
          var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
          params = Lampa.Utils.addUrlComponent(params, 'limit=100');
          params = Lampa.Utils.addUrlComponent(params, 'translation_type=voice');
          params = Lampa.Utils.addUrlComponent(params, 'title=' + encodeURIComponent(select_title));
          kodik_api_search(params, callback, error);
        };

        var kodik_search_by_title_part = function kodik_search_by_title_part(callback, error) {
          var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
          params = Lampa.Utils.addUrlComponent(params, 'limit=100');
          params = Lampa.Utils.addUrlComponent(params, 'translation_type=voice');
          var words = component.cleanTitle(select_title || '').replace(/[\s—\-+]+/g, ' ').trim().split(' ');
          words.sort(function (a, b) {
            return b.length - a.length;
          });
          var title = words.splice(0, 1).join(' ');

          if (title !== select_title) {
            params = Lampa.Utils.addUrlComponent(params, 'title=' + encodeURIComponent(title));
            kodik_api_search(params, callback, error);
          } else callback({});
        };

        var kodik_search_by_id = function kodik_search_by_id(callback, error) {
          if (!object.clarification && (object.movie.imdb_id || +kinopoisk_id)) {
            var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
            params = Lampa.Utils.addUrlComponent(params, 'limit=100');
            var kp_params = +kinopoisk_id ? Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(+kinopoisk_id)) : '';
            var imdb_params = object.movie.imdb_id ? Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(object.movie.imdb_id)) : '';
            kodik_api_search(kp_params || imdb_params, function (json) {
              if (json.results && json.results.length) callback(json);else if (kp_params && imdb_params) {
                kodik_api_search(imdb_params, callback, error);
              } else callback({});
            }, error);
          } else callback({});
        };

        var error = component.empty.bind(component);
        kodik_search_by_id(function (json) {
          display(json && json.results, function () {
            kodik_search_by_title_part(function (json) {
              display(json && json.results, function () {
                kodik_search_by_title(function (json) {
                  display(json && json.results, function () {
                    component.emptyForQuery(select_title);
                  });
                }, error);
              });
            }, error);
          });
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json) {
        var media = json.media || {};
        var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
        params = Lampa.Utils.addUrlComponent(params, 'limit=100');
        params = Lampa.Utils.addUrlComponent(params, 'with_episodes=true');
        if (media.shikimori_id) params = Lampa.Utils.addUrlComponent(params, 'shikimori_id=' + encodeURIComponent(media.shikimori_id));else if (media.worldart_link) params = Lampa.Utils.addUrlComponent(params, 'worldart_link=' + encodeURIComponent(media.worldart_link));else if (media.kinopoisk_id) params = Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(media.kinopoisk_id));else if (media.imdb_id) params = Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(media.imdb_id));else if (media.id) params = Lampa.Utils.addUrlComponent(params, 'id=' + encodeURIComponent(media.id));else {
          component.emptyForQuery(select_title);
          return;
        }
        var error = component.empty.bind(component);
        kodik_api_search(params, function (json) {
          component.loading(false);
          extractData(json && json.results ? json.results.filter(function (c) {
            return c.title === media.title;
          }) : []);
          filter();
          append(filtred());
        }, error);
      }
      /**
       * Получить данные о фильме
       * @param {Array} items
       */


      function extractData(items) {
        var seasons = [];
        items.forEach(function (c) {
          if (c.seasons) {
            var _loop = function _loop(season_id) {
              var season = c.seasons[season_id];

              if (season) {
                if (!seasons.some(function (s) {
                  return s.id === season_id;
                })) {
                  seasons.push({
                    id: season_id,
                    title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id + (season.title ? ' - ' + season.title : '')
                  });
                }
              }
            };

            for (var season_id in c.seasons) {
              _loop(season_id);
            }
          }
        });
        seasons.sort(function (a, b) {
          return a.id - b.id;
        });
        extract = {
          items: items,
          seasons: seasons
        };
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.seasons.map(function (s) {
            return s.title;
          }),
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.seasons.length) {
          var season_id = extract.seasons[choice.season] && extract.seasons[choice.season].id;
          extract.items.forEach(function (c) {
            if (!(c.seasons && c.seasons[season_id])) return;

            if (c.translation && !filter_items.voice_info.some(function (v) {
              return v.id == c.translation.id;
            })) {
              filter_items.voice.push(c.translation.title);
              filter_items.voice_info.push(c.translation);
            }
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.seasons.length) {
          var season_id = extract.seasons[choice.season] && extract.seasons[choice.season].id;
          var voice_name = filter_items.voice[choice.voice];
          var voice_id = filter_items.voice_info[choice.voice] && filter_items.voice_info[choice.voice].id;
          var translation = extract.items.filter(function (c) {
            return c.seasons && c.seasons[season_id] && c.translation && c.translation.id == voice_id;
          })[0];

          if (translation) {
            var episodes = translation.seasons[season_id] && translation.seasons[season_id].episodes || {};

            for (var episode_id in episodes) {
              var link = episodes[episode_id];
              filtred.push({
                title: component.formatEpisodeTitle(season_id, episode_id),
                orig_title: translation.title_orig || translation.title || select_title,
                quality: translation.quality || '360p ~ 1080p',
                info: ' / ' + voice_name,
                season: '' + season_id,
                episode: parseInt(episode_id),
                link: link
              });
            }
          }
        } else {
          extract.items.forEach(function (c) {
            if (c.seasons) return;
            filtred.push({
              title: c.translation && c.translation.title || select_title,
              orig_title: c.title_orig || c.title || select_title,
              quality: c.quality || '360p ~ 1080p',
              info: '',
              link: c.link
            });
          });
        }

        return filtred;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.link) return error();
        var link_match = element.link.match(/^((https?:)?\/\/[^\/]+)\/.*$/);
        var link_origin = component.fixLinkProtocol(link_match ? link_match[1] : '//kodikplayer.com', false);
        var url = component.fixLinkProtocol(element.link, false);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox), function (str) {
          str = (str || '').replace(/\n/g, '');
          var urlParams = str.match(/\burlParams = '([^']+)'/);
          var type = str.match(/\b(?:videoInfo|vInfo)\.type = '([^']+)'/);
          var hash = str.match(/\b(?:videoInfo|vInfo)\.hash = '([^']+)'/);
          var id = str.match(/\b(?:videoInfo|vInfo)\.id = '([^']+)'/);
          var player = str.match(/<script [^>]*\bsrc="(\/assets\/js\/app\.player_single[^"]+)"/);
          var json;

          try {
            json = urlParams && urlParams[1] && JSON.parse(urlParams[1]);
          } catch (e) {}

          var postdata = '';

          if (json && type && hash && id) {
            postdata = 'd=' + json.d;
            postdata += '&d_sign=' + json.d_sign;
            postdata += '&pd=' + json.pd;
            postdata += '&pd_sign=' + json.pd_sign;
            postdata += '&ref=' + json.ref;
            postdata += '&ref_sign=' + json.ref_sign;
            postdata += '&bad_user=true';
            postdata += '&cdn_is_working=true';
            postdata += '&type=' + type[1];
            postdata += '&hash=' + hash[1];
            postdata += '&id=' + id[1];
            postdata += '&info=%7B%7D';
          }

          if (postdata && player) {
            var getLinks = function getLinks() {
              network.clear();
              network.timeout(10000);
              network["native"](component.proxyLink(last_info, prox), function (json) {
                if (json && json.links) {
                  var items = extractItems(json.links),
                      file = '',
                      quality = false;

                  if (items && items.length) {
                    file = items[0].file;
                    quality = {};
                    items.forEach(function (item) {
                      quality[item.label] = item.file;
                    });
                  }

                  if (file) {
                    element.stream = file;
                    element.qualitys = quality;
                    call(element);
                  } else error();
                } else error();
              }, function (a, c) {
                error();
              }, postdata);
            };

            var player_url = link_origin + player[1];

            if (player_url !== last_player) {
              network.clear();
              network.timeout(10000);
              network["native"](component.proxyLink(player_url, prox), function (str) {
                str = (str || '').replace(/\n/g, '');
                var info_match = str.match(/\$\.ajax\({type: *"POST", *url: *atob\("([^"]+)"\)/);
                var info;

                try {
                  info = info_match && atob(info_match[1]);
                } catch (e) {}

                if (info && startsWith(info, '/')) {
                  last_info = link_origin + info;
                  last_player = player_url;
                  getLinks();
                } else error();
              }, function (a, c) {
                error();
              }, false, {
                dataType: 'text'
              });
            } else getLinks();
          } else error();
        }, function (a, c) {
          error();
        }, false, {
          dataType: 'text'
        });
      }

      function extractItems(playlists) {
        try {
          var items = [];
          Object.keys(playlists).forEach(function (key) {
            var obj = playlists[key];
            var quality = parseInt(key);
            var link = decode(obj && obj[0] && obj[0].src || '');
            link = component.fixLinkProtocol(link, prefer_http, true);
            if (prefer_mp4) ;
            items.push({
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyStream(link, 'kodik')
            });
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }

      function decode(str) {
        try {
          if (startsWith(str, 'http') || startsWith(str, '//')) return str;
          return atob(str.replace(/[a-zA-Z]/g, function (x) {
            return String.fromCharCode((x <= 'Z' ? 90 : 122) >= (x = x.charCodeAt(0) + 18) ? x : x - 26);
          }));
        } catch (e) {
          return '';
        }
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.orig_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }

    function kinopub(component, _object) {
      var network = Utils.createRequest(component);
      this.cancel = function () { network.clear(); };
      var extract = {};
      var object = _object;
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prox = component.proxy('kinopub');
      var embed = 'https://api.srvkp.com/v1/';
      var token = Utils.decodeSecret([56, 32, 0, 66, 18, 86, 49, 1, 70, 63, 40, 46, 83, 78, 22, 78, 119, 66, 20, 51, 33, 59, 16, 28, 91, 86, 41, 2, 64, 47, 125, 125]);
      var server = 'ru';
      var hls_type = 'hls';
      var replace_mask = /\/(pd|http|hls4|hls2|hls)\/[^\/]*/;
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: ''
      };
      var secret = '';

      function decodeSecretToken(callback) {
        {
          if (callback) callback();
          return;
        }
      }

      function kinopub_api_search(api, callback, error) {
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(embed + api, prox), function (json) {
          if (callback) callback(json);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        });
      }
      /**
       * Поиск
       * @param {Object} _object
       */


      this.search = function (_object, kinopoisk_id, data) {
        var _this = this;

        object = _object;
        select_title = object.search || object.movie.title;
        if (this.wait_similars && data && data[0] && data[0].is_similars) return success(data[0]);
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(items) {
          if (items && items.length && items.forEach) {
            var is_sure = false;
            var is_imdb = false;
            items.forEach(function (c) {
              var titles = (c.title || '').split(' / ');

              if (titles.length === 2) {
                c.full_title = c.title;
                c.title = titles[0].trim();
                c.orig_title = titles[1].trim();
              }
            });

            if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
              var imdb_id = object.movie.imdb_id && parseInt(object.movie.imdb_id.substring(2));
              var kp_id = +object.movie.kinopoisk_id;
              var tmp = items.filter(function (c) {
                return imdb_id && c.imdb == imdb_id || kp_id && c.kinopoisk == kp_id;
              });

              if (tmp.length) {
                items = tmp;
                is_sure = true;
                is_imdb = true;
              }
            }

            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var _tmp = cards.filter(function (c) {
                  return component.containsAnyTitle([c.orig_title, c.title, c.full_title], orig_titles);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (select_title) {
                var _tmp2 = cards.filter(function (c) {
                  return component.containsAnyTitle([c.title, c.orig_title, c.full_title], [select_title]);
                });

                if (_tmp2.length) {
                  cards = _tmp2;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp3 = cards.filter(function (c) {
                  return c.year == search_year;
                });

                if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
                  return c.year && c.year > search_year - 2 && c.year < search_year + 2;
                });
                if (_tmp3.length) cards = _tmp3;
              }
            }

            if (cards.length == 1 && is_sure && !is_imdb) {
              if (search_year && cards[0].year) {
                is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title, cards[0].full_title], orig_titles);
                }

                if (select_title) {
                  is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title, cards[0].full_title], [select_title]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              success(cards[0]);
            } else {
              _this.wait_similars = true;
              items.forEach(function (c) {
                c.is_similars = true;
              });
              component.similars(items);
              component.loading(false);
            }
          } else component.emptyForQuery(select_title);
        };

        var error = component.empty.bind(component);
        var params = Lampa.Utils.addUrlComponent('items/search', 'access_token=' + token);
        params = Lampa.Utils.addUrlComponent(params, 'perpage=100');
        params = Lampa.Utils.addUrlComponent(params, 'field=title');
        params = Lampa.Utils.addUrlComponent(params, 'q=' + encodeURIComponent(select_title));
        decodeSecretToken(function () {
          kinopub_api_search(params, function (json) {
            display(json && json.items);
          }, error);
        });
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: ''
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;
        if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(item) {
        var params = Lampa.Utils.addUrlComponent('items/' + item.id, 'access_token=' + token);
        var error = component.empty.bind(component);
        kinopub_api_search(params, function (json) {
          if (json && json.item && (json.item.videos && json.item.videos.length || json.item.seasons && json.item.seasons.length)) {
            component.loading(false);
            extractData(json.item);
            filter();
            append(filtred());
          } else component.emptyForQuery(select_title);
        }, error);
      }
      /**
       * Получить информацию о фильме
       * @param {Object} item
       */


      function extractData(item) {
        extract = item;

        if (extract.seasons) {
          extract.seasons.forEach(function (season) {
            var episodes = season.episodes || [];
            episodes.forEach(function (episode) {
              episode.streams = extractFiles(episode);
            });
          });
        } else if (extract.videos) {
          extract.videos.forEach(function (video) {
            video.streams = extractFiles(video);
          });
        }
      }

      function extractFiles(media) {
        var items = [];
        var files = media.files || [];
        files.forEach(function (file) {
          var label = file.quality || file.h && file.h + 'p' || '360p ~ 1080p';

          if (file.url) {
            var subtitles = false;

            if (file.url.http && file.file) {
              var base = file.url.http.match(/^(.*)\/demo\/demo\.mp4(.*)$/);

              if (!base) {
                var pos = file.url.http.indexOf((startsWith(file.file, '/') ? '' : '/') + file.file);
                if (pos !== -1) base = [file.url.http, file.url.http.substring(0, pos)];
              }

              if (base) {
                var base_url = base[1];

                if (replace_mask && secret) {
                  base_url = base_url.replace(replace_mask, secret);
                }

                base_url = component.fixLinkProtocol(base_url, prefer_http, 'full');

                if (media.subtitles) {
                  subtitles = media.subtitles.map(function (sub) {
                    return {
                      label: sub.lang + (sub.forced ? ' - forced' : ''),
                      url: component.processSubs(sub.file ? base_url + '/subtitles' + (startsWith(sub.file, '/') ? '' : '/') + sub.file + '?loc=' + server : '')
                    };
                  });
                  if (!subtitles.length) subtitles = false;
                }

                items.push({
                  height: file.h,
                  quality_id: file.quality_id,
                  label: label,
                  codec: file.codec,
                  type: 'http',
                  params: base[2],
                  file: base_url + (startsWith(file.file, '/') ? '' : '/') + file.file,
                  subtitles: subtitles
                });
              }
            }

            if (file.url.hls4) {
              var _base = file.url.hls4.match(/^(.*)\/demo\.m3u8(.*)$/);

              if (!_base) {
                var _pos = file.url.hls4.indexOf('/' + media.id + '.m3u8');

                if (_pos !== -1) _base = [file.url.hls4, file.url.hls4.substring(0, _pos)];
              }

              if (_base) {
                var _base_url = _base[1];

                if (replace_mask && secret) {
                  _base_url = _base_url.replace(replace_mask, secret);
                }

                _base_url = component.fixLinkProtocol(_base_url, prefer_http, 'full');
                items.push({
                  height: file.h,
                  quality_id: file.quality_id,
                  label: label,
                  codec: file.codec,
                  type: 'hls4',
                  params: _base[2],
                  file: _base_url + '/' + media.id + '.m3u8',
                  subtitles: subtitles
                });
              }
            }

            if (file.url.hls2) {
              var _base2 = file.url.hls2.match(/^(.*)\/demo\.m3u8(.*)$/);

              if (!_base2) {
                var _pos2 = file.url.hls2.indexOf('/' + media.id + '.m3u8');

                if (_pos2 !== -1) _base2 = [file.url.hls2, file.url.hls2.substring(0, _pos2)];
              }

              if (_base2) {
                var _base_url2 = _base2[1];

                if (replace_mask && secret) {
                  _base_url2 = _base_url2.replace(replace_mask, secret);
                }

                _base_url2 = component.fixLinkProtocol(_base_url2, prefer_http, 'full');
                items.push({
                  height: file.h,
                  quality_id: file.quality_id,
                  label: label,
                  codec: file.codec,
                  type: 'hls2',
                  params: _base2[2],
                  file: _base_url2 + '/' + media.id + '.m3u8',
                  subtitles: subtitles
                });
              }
            }

            if (file.url.hls && file.file) {
              var _base3 = file.url.hls.match(/^(.*)\/demo\/master-v1a1\.m3u8(.*)$/);

              if (!_base3) {
                var _pos3 = file.url.hls.indexOf((startsWith(file.file, '/') ? '' : '/') + file.file);

                if (_pos3 !== -1) _base3 = [file.url.hls, file.url.hls.substring(0, _pos3)];
              }

              if (_base3) {
                var _base_url3 = _base3[1];

                if (replace_mask && secret) {
                  _base_url3 = _base_url3.replace(replace_mask, secret);
                }

                _base_url3 = component.fixLinkProtocol(_base_url3, prefer_http, 'full');
                items.push({
                  height: file.h,
                  quality_id: file.quality_id,
                  label: label,
                  codec: file.codec,
                  type: 'hls',
                  params: _base3[2],
                  file: _base_url3 + (startsWith(file.file, '/') ? '' : '/') + file.file,
                  subtitles: subtitles
                });
              }
            }
          }
        });
        items.sort(function (a, b) {
          var cmp = b.height - a.height;
          if (cmp) return cmp;
          cmp = b.quality_id - a.quality_id;
          if (cmp) return cmp;
          if (b.label > a.label) return 1;
          if (b.label < a.label) return -1;
          if (b.codec > a.codec) return 1;
          if (b.codec < a.codec) return -1;
          if (b.type > a.type) return 1;
          if (b.type < a.type) return -1;
          return 0;
        });
        return items;
      }

      function getVoiceName(audio, full) {
        var voice_name;

        if (full) {
          voice_name = [audio.type && audio.type.title, audio.author && audio.author.title].filter(function (name) {
            return name;
          }).join(' - ');
        } else {
          var type = audio.type && audio.type.title || '';
          voice_name = type === 'Оригинал' ? type : audio.author && audio.author.title || type;
        }

        if (voice_name) voice_name += audio.lang && audio.lang !== 'und' && audio.lang !== 'rus' ? ' (' + audio.lang + ')' : '';else voice_name = audio.lang || '';
        return voice_name;
      }

      function getVoiceChoice(audios, full) {
        var voice_info = filter_items.voice_info[choice.voice];

        if (voice_info) {
          var type = voice_info.type && voice_info.type.title || '';
          var author = !full && type === 'Оригинал' ? '' : voice_info.author && voice_info.author.title;
          var lang = voice_info.lang || '';

          if (author) {
            var tmp = audios.filter(function (audio) {
              return audio.author && audio.author.title === author;
            });
            if (tmp.length) audios = tmp;

            if (type && full) {
              tmp = tmp.filter(function (audio) {
                return audio.type && audio.type.title === type;
              });
              if (tmp.length) audios = tmp;
            }
          }

          if (lang) {
            var _tmp4 = audios.filter(function (audio) {
              return audio.lang === lang;
            });

            if (_tmp4.length) audios = _tmp4;
          }

          if (!author) {
            var _tmp5 = audios.filter(function (audio) {
              return !full && audio.type && audio.type.title === 'Оригинал' || !(audio.author && audio.author.title);
            });

            if (_tmp5.length) audios = _tmp5;

            if (type) {
              _tmp5 = _tmp5.filter(function (audio) {
                return audio.type && audio.type.title === type;
              });
              if (_tmp5.length) audios = _tmp5;
            }
          }
        }

        return audios.length == 1 ? audios[0] : null;
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.seasons ? extract.seasons.map(function (season) {
            return Lampa.Lang.translate('torrent_serial_season') + ' ' + season.number + (season.title ? ' - ' + season.title : '');
          }) : [],
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.seasons || extract.videos && extract.videos.length > 1) {
          var episodes;

          if (extract.seasons) {
            var season = extract.seasons[choice.season];
            episodes = season && season.episodes || [];
          } else episodes = extract.videos;

          episodes.forEach(function (episode) {
            var audios = episode.audios || [];
            audios.forEach(function (audio) {
              var voice_name = getVoiceName(audio);

              if (voice_name && filter_items.voice.indexOf(voice_name) == -1) {
                filter_items.voice.push(voice_name);
                filter_items.voice_info.push(audio);
              }
            });
          });
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (extract.seasons) {
          var season = extract.seasons[choice.season];
          var episodes = season && season.episodes || [];
          episodes.forEach(function (episode) {
            var audios = episode.audios || [];
            var audio = getVoiceChoice(audios);
            var voice_name;
            if (audio) voice_name = getVoiceName(audio);else {
              audio = {};
              var voice_names = audios.map(function (audio) {
                return getVoiceName(audio);
              }).filter(function (name) {
                return name;
              });
              voice_name = component.uniqueNamesShortText(voice_names, 80);
            }
            filtred.push({
              title: component.formatEpisodeTitle(season.number, episode.number, episode.title),
              orig_title: extract.title || select_title,
              quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
              info: voice_name ? ' / ' + voice_name : '',
              season: '' + season.number,
              episode: parseInt(episode.number),
              audio_index: audio.index,
              media: episode
            });
          });
        } else if (extract.videos && extract.videos.length > 1) {
          extract.videos.forEach(function (video, index) {
            var audios = video.audios || [];
            var audio = getVoiceChoice(audios);
            var voice_name;
            if (audio) voice_name = getVoiceName(audio);else {
              audio = {};
              var voice_names = audios.map(function (audio) {
                return getVoiceName(audio);
              }).filter(function (name) {
                return name;
              });
              voice_name = component.uniqueNamesShortText(voice_names, 80);
            }
            var episode_num = video.number != null ? video.number : index + 1;
            var title = episode_num + (video.title ? ' - ' + video.title : '');
            filtred.push({
              title: title,
              orig_title: extract.title || select_title,
              quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
              info: voice_name ? ' / ' + voice_name : '',
              season: 1,
              episode: parseInt(episode_num),
              audio_index: audio.index,
              media: video
            });
          });
        } else if (extract.videos) {
          extract.videos.forEach(function (video) {
            var audios = video.audios || [];

            if (!audios.length) {
              audios.push({});
            }

            audios.forEach(function (audio) {
              filtred.push({
                title: getVoiceName(audio, true) || video.title || select_title,
                orig_title: extract.title || select_title,
                quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
                info: audio.codec && audio.codec !== 'aac' ? ' / ' + audio.codec : '',
                audio_index: audio.index,
                media: video
              });
            });
          });
        }

        return filtred;
      }
      /**
       * Найти поток
       * @param {Object} element
       * @returns string
       */


      function getFile(element) {
        var file = '';
        var quality = false;
        var subtitles = false;
        var items = element.media.streams || [];
        items = items.filter(function (elem) {
          return elem.type === hls_type;
        });

        {
          var tmp = items.filter(function (elem) {
            return elem.codec === 'h265';
          });
          if (tmp.length) items = tmp;
        }

        {
          var _tmp6 = items.filter(function (elem) {
            return elem.codec === 'h264';
          });

          if (_tmp6.length) items = _tmp6;
        }

        if (items && items.length) {
          var file_end = items[0].type === 'hls' ? element.audio_index ? '/master-v1a' + element.audio_index + '.m3u8' : '/master.m3u8' : '';
          file_end += '?loc=' + server;
          file = items[0].file + file_end;
          subtitles = items[0].subtitles;

          if (items.some(function (item) {
            return item.file != items[0].file;
          })) {
            quality = {};
            items.forEach(function (item) {
              quality[item.label] = item.file + file_end;
            });
          }
        }

        return {
          file: file,
          quality: quality,
          subtitles: subtitles
        };
      }
      /**
       * Показать файлы
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.orig_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            var extra = getFile(element);

            if (extra.file) {
              var playlist = [];
              var first = {
                url: component.getDefaultQuality(extra.quality, extra.file),
                quality: component.renameQualityMap(extra.quality),
                subtitles: extra.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };

              if (element.season) {
                items.forEach(function (elem) {
                  var ex = getFile(elem);
                  playlist.push({
                    url: component.getDefaultQuality(ex.quality, ex.file),
                    quality: component.renameQualityMap(ex.quality),
                    subtitles: ex.subtitles,
                    timeline: elem.timeline,
                    title: elem.title
                  });
                });
              } else {
                playlist.push(first);
              }

              if (playlist.length > 1) first.playlist = playlist;
              Lampa.Player.play(first);
              Lampa.Player.playlist(playlist);

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            file: function file(call) {
              call(getFile(element));
            }
          });
        });
        component.start(true);
      }
    }

    function kinogo(component, _object) {
      var network = Utils.createRequest(component);
      var video = new collaps(component, _object, false);
      var object = _object;
      var extract = {};
      var select_title = '';
      var mirror = Utils.kinogoMirror();
      var prox = component.proxy('kinogo');
      var mirrors = [mirror, 'https://kinogo.is', 'https://kinogo.online', 'https://kinogo.ec', 'https://kinogo.no'].filter(function (value, index, values) { return values.indexOf(value) === index; });

      this.cancel = function () { network.clear(); video.cancel(); };
      this.destroy = function () { network.clear(); video.destroy(); extract = null; };
      this.extendChoice = function (saved) { video.extendChoice(saved); };
      this.reset = function () { video.reset(); };
      this.filter = function (type, a, b) { video.filter(type, a, b); };

      function readPage(url, data, success, error) {
        var origin = Utils.parseURL(url).origin;
        var headers = Lampa.Platform.is('android') ? { 'User-Agent': Utils.baseUserAgent(), 'Origin': origin, 'Referer': origin + '/' } : {};
        var encoded = prox ? 'param/Origin=' + encodeURIComponent(origin) + '/param/Referer=' + encodeURIComponent(origin + '/') + '/param/User-Agent=' + encodeURIComponent(Utils.baseUserAgent()) + '/' : '';
        network.clear();
        network.timeout(10000);
        network['native'](component.proxyLink(url, prox, encoded, 'enc2t'), success, error, data || false, { dataType: 'text', headers: headers });
      }

      function html(str) {
        // Parse detached markup without running remote page scripts.
        return $('<div></div>').append($.parseHTML(str || '', null, false));
      }

      function searchResults(str, host) {
        var page = html(str);
        var items = [];
        page.find('.card__title a, .shortstory__title a, .shortstory h2 a, .shortstory .title a').each(function () {
          var a = $(this);
          var link = component.fixLink(a.attr('href') || '', host + '/');
          if (!/^https?:\/\//i.test(link) || items.some(function (item) { return item.link === link; })) return;
          var title = a.text().trim();
          var year = title.match(/\((\d{4})\)\s*$/);
          items.push({ title: title.replace(/\s*\(\d{4}\)\s*$/, ''), year: year ? parseInt(year[1], 10) : 0, link: link, is_similars: true });
        });
        return items;
      }

      function moviePage(item) {
        readPage(item.link, false, function (str) {
          if (Utils.findPlayerConfig(str)) return video.loadMarkup(str, object, item.title);
          var page = html(str);
          var player = '';
          page.find('iframe').each(function () {
            var src = $(this).attr('src') || $(this).attr('data-src') || '';
            src = component.fixLink(src, item.link);
            if (!player && /^https?:\/\/api\.(?:nextembed\.ws|ortified\.ws|kinogram\.best)\/embed\//i.test(src)) player = src;
          });
          if (player) video.loadEmbed(player, object, item.title, prox);
          else component.empty(Lampa.Lang.translate('online_mod_kinogo_unsupported'));
        }, function (a, c) { component.empty(network.errorDecode(a, c)); });
      }

      this.search = function (nextObject, kinopoisk_id, data) {
        object = nextObject;
        select_title = object.search || object.movie.title;
        video.cancel();
        if (this.wait_similars && data && data[0] && data[0].is_similars) return moviePage(data[0]);
        var self = this;
        var year = parseInt((object.search_date || object.movie.release_date || object.movie.first_air_date || '').slice(0, 4), 10);
        function attempt(index) {
          mirror = mirrors[index];
          var body = 'do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=' + encodeURIComponent(select_title);
          readPage(mirror + '/index.php?do=search', body, function (str) {
            var items = searchResults(str, mirror);
            var matches = items.filter(function (item) { return component.equalAnyTitle([item.title], [select_title, object.movie.original_title, object.movie.original_name]) && (!year || !item.year || item.year === year); });
            if (matches.length === 1) return moviePage(matches[0]);
            if (!items.length) return component.emptyForQuery(select_title);
            self.wait_similars = true;
            component.similars(matches.length ? matches : items);
            component.loading(false);
          }, function (a, c) {
            if (index + 1 < mirrors.length && (a.onlineChallenge || a.status === 0 || a.status >= 500)) attempt(index + 1);
            else component.empty(network.errorDecode(a, c));
          });
        }
        attempt(0);
      };
    }

    var proxyInitialized = {};
    var proxyWindow = {};
    var proxyCalls = {};
    var default_balanser = 'rezka2';

    function component(object) {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var files = new Lampa.Explorer(object);
      var filter = new Lampa.Filter(object);
      var balanser = Lampa.Storage.get('online_mod_balanser', default_balanser) + '';
      var last_bls = Lampa.Storage.field('online_mod_save_last_balanser') === true ? Lampa.Storage.cache('online_mod_last_balanser', 200, {}) : {};
      var use_stream_proxy = Lampa.Storage.field('online_mod_use_stream_proxy') === true;
      var rezka2_prx_ukr = '//' + (Lampa.Storage.field('online_mod_rezka2_prx_ukr') || 'prx.ukrtelcdn.net') + '/';
      var rezka2_fix_stream = Lampa.Storage.field('online_mod_rezka2_fix_stream') === true;
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var forcedQuality = '';
      var qualityFilter = {
        title: Lampa.Lang.translate('settings_player_quality'),
        subtitle: '',
        items: [],
        stype: 'quality'
      };
      var contextmenu_all = [];

      if (last_bls[object.movie.id]) {
        balanser = last_bls[object.movie.id];
      }

      this.proxy = function (name) {
        return Utils.proxy(name);
      };

      this.fixLink = function (link, referrer) {
        return Utils.fixLink(link, referrer);
      };

      this.fixLinkProtocol = function (link, prefer_http, replace_protocol) {
        return Utils.fixLinkProtocol(link, prefer_http, replace_protocol);
      };

      this.proxyLink = function (link, proxy, proxy_enc, enc) {
        return Utils.proxyLink(link, proxy, proxy_enc, enc);
      };

      this.proxyStream = function (url, name) {
        if (url && use_stream_proxy) {
          if (name === 'lumex') return url;

          if (name === 'rezka2') {
            return url.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net|vdbmate.org|sambray.org|rumbegg.org|laptostack.org|frntroy.org|femeretes.org)\//, rezka2_prx_ukr);
          }

          return (prefer_http ? 'http://apn.cfhttp.top/' : 'https://apn.watch/') + url;
        }

        if (url && rezka2_fix_stream && name === 'rezka2') {
          return url.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net)\//, '//femeretes.org/');
        }

        return url;
      };

      this.processSubs = function (url) {
        return url;
      };

      this.proxyStreamSubs = function (url, name) {
        if (name === 'lumex') return url;
        var srtUrl = this.processSubs(url);
        if (srtUrl !== url) return srtUrl;
        return this.proxyStream(url, name);
      };

      this.checkMyIp = function (onComplite) {
        Utils.checkMyIp(network, onComplite);
      };

      var last;
      var extended;
      var selected_id;
      var filter_translate = {
        season: Lampa.Lang.translate('torrent_serial_season'),
        voice: Lampa.Lang.translate('torrent_parser_voice'),
        source: Lampa.Lang.translate('settings_rest_source')
      };
      var disable_dbg = !Utils.isDebug();
      var isAndroid = Lampa.Platform.is('android');
      isAndroid && Utils.checkAndroidVersion(339);
      var collapsBlocked = (!startsWith(window.location.protocol, 'http') || window.location.hostname.indexOf('lampa') !== -1) && disable_dbg;
      var all_sources = [{
        name: 'lumex',
        title: 'Lumex',
        source: new lumex(this, object),
        search: false,
        kp: false,
        imdb: true,
        disabled: true
      }, {
        name: 'lumex2',
        title: 'Lumex (Ads)',
        source: new lumex2(this, object),
        search: false,
        kp: false,
        imdb: true,
        disabled: true
      }, {
        name: 'rezka2',
        title: 'HDrezka',
        source: new rezka2(this, object),
        search: true,
        kp: false,
        imdb: false
      }, {
        name: 'kinogo',
        title: 'Kinogo',
        source: new kinogo(this, object),
        search: true,
        kp: false,
        imdb: false
      }, {
        name: 'kinobase',
        title: 'Kinobase',
        source: new kinobase(this, object),
        search: true,
        kp: false,
        imdb: false,
        disabled: true
      }, {
        name: 'collaps',
        title: 'Collaps',
        source: new collaps(this, object, false),
        search: false,
        kp: true,
        imdb: true,
        disabled: collapsBlocked
      }, {
        name: 'collaps-dash',
        title: 'Collaps (DASH)',
        source: new collaps(this, object, true),
        search: false,
        kp: true,
        imdb: true,
        disabled: collapsBlocked
      }, {
        name: 'cdnmovies',
        title: 'CDNMovies',
        source: new cdnmovies(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: true
      }, {
        name: 'filmix',
        title: 'Filmix',
        source: new filmix(this, object),
        search: true,
        kp: false,
        imdb: false
      }, {
        name: 'zetflix',
        title: 'Zetflix',
        source: new zetflix(this, object),
        search: false,
        kp: true,
        imdb: false,
        disabled: true
      }, {
        name: 'fancdn',
        title: 'FanCDN',
        source: new fancdn(this, object),
        search: true,
        kp: false,
        imdb: false,
        disabled: disable_dbg
      }, {
        name: 'fancdn2',
        title: 'FanCDN (ID)',
        source: new fancdn2(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: true
      }, {
        name: 'fanserials',
        title: 'FanSerials',
        source: new fanserials(this, object),
        search: false,
        kp: true,
        imdb: false,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'videoseed',
        title: 'VideoSeed',
        source: new videoseed(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: true
      }, {
        name: 'vibix',
        title: 'Vibix',
        source: new vibix(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: true
      }, {
        name: 'redheadsound',
        title: 'RedHeadSound',
        source: new redheadsound(this, object, false),
        search: true,
        kp: false,
        imdb: true,
        disabled: true
      }, {
        name: 'redheadsound-dash',
        title: 'RedHeadSound (DASH)',
        source: new redheadsound(this, object, true),
        search: true,
        kp: false,
        imdb: true,
        disabled: true
      }, {
        name: 'cdnvideohub',
        title: 'CDNVideoHub',
        source: new cdnvideohub(this, object),
        search: false,
        kp: true,
        imdb: false
      }, {
        name: 'anilibria',
        title: 'AniLibria',
        source: new anilibria(this, object),
        search: true,
        kp: false,
        imdb: false,
        disabled: true
      }, {
        name: 'anilibria2',
        title: 'AniLibria.top',
        source: new anilibria2(this, object),
        search: true,
        kp: false,
        imdb: false
      }, {
        name: 'animelib',
        title: 'AnimeLib',
        source: new animelib(this, object),
        search: true,
        kp: false,
        imdb: false,
        disabled: true
      }, {
        name: 'kodik',
        title: 'Kodik',
        source: new kodik(this, object),
        search: true,
        kp: true,
        imdb: true
      }, {
        name: 'alloha',
        title: 'Alloha',
        source: new alloha(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: true
      }, {
        name: 'kinopub',
        title: 'KinoPub',
        source: new kinopub(this, object),
        search: true,
        kp: false,
        imdb: true,
        disabled: true
      }];
      var obj_filter_sources = all_sources.filter(function (s) {
        return !s.disabled;
      });
      var filter_sources = obj_filter_sources.map(function (s) {
        return s.name;
      });
      var sources = {};
      obj_filter_sources.forEach(function (s) {
        sources[s.name] = s.source;
      });
      var search_sources = all_sources.filter(function (s) {
        return s.search;
      }).map(function (s) {
        return s.name;
      });
      var kp_sources = all_sources.filter(function (s) {
        return s.kp;
      }).map(function (s) {
        return s.name;
      });
      var imdb_sources = all_sources.filter(function (s) {
        return s.imdb;
      }).map(function (s) {
        return s.name;
      }); // шаловливые ручки

      if (filter_sources.indexOf(balanser) == -1) {
        balanser = default_balanser;

        if (filter_sources.indexOf(balanser) == -1) {
          balanser = filter_sources[0];
        }

        Lampa.Storage.set('online_mod_balanser', balanser);
      }

      scroll.body().addClass('torrent-list');
      scroll.minus(files.render().find('.explorer__files-head'));
      /**
       * Подготовка
       */

      this.create = function () {
        var _this = this;

        this.activity.loader(true);

        filter.onSearch = function (value) {
          Lampa.Activity.replace({
            search: value,
            search_date: '',
            clarification: true
          });
        };

        filter.onBack = function () {
          _this.start();
        };

        filter.onSelect = function (type, a, b) {
          if (type == 'filter') {
            if (a.reset) {
              if (extended) sources[balanser].reset();else _this.start();
            } else if (a.stype == 'source') {
              _this.changeBalanser(filter_sources[b.index]);
            } else if (a.stype == 'quality') {
              forcedQuality = b.title;

              _this.updateQualityFilter();
            } else {
              sources[balanser].filter(type, a, b);
            }
          } else if (type == 'sort') {
            _this.changeBalanser(a.source);
          }
        };

        filter.render().find('.filter--sort span').text(Lampa.Lang.translate('online_mod_balanser'));
        files.appendHead(filter.render());
        files.appendFiles(scroll.render());
        this.search();
        return this.render();
      };

      this.changeBalanser = function (balanser_name) {
        balanser = balanser_name;
        Lampa.Storage.set('online_mod_balanser', balanser);
        last_bls[object.movie.id] = balanser;

        if (Lampa.Storage.field('online_mod_save_last_balanser') === true) {
          Lampa.Storage.set('online_mod_last_balanser', last_bls);
        }

        this.search();
        setTimeout(this.closeFilter, 10);
      };

      this.updateQualityFilter = function () {
        var preferably = forcedQuality;

        if (!preferably) {
          preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
          if (preferably === '1080p') preferably = '1080p Ultra';
        }

        var items = ['2160p', '1440p', '1080p Ultra', '1080p', '720p', '480p'].map(function (quality, i) {
          return {
            title: quality,
            selected: quality === preferably,
            index: i
          };
        });
        qualityFilter.subtitle = preferably;
        qualityFilter.items = items;
        setTimeout(this.closeFilter, 10);
      };
      /**
       * Начать поиск
       */


      this.search = function () {
        network.clear();
        all_sources.forEach(function (s) { if (s.source.cancel) s.source.cancel(); });
        this.activity.loader(true);
        this.filter({
          source: filter_sources
        }, {
          source: 0
        });
        this.reset();
        this.find();
      };

      this.cleanTitle = function (str) {
        return str.replace(/[\s.,:;’'`!?]+/g, ' ').trim();
      };

      this.kpCleanTitle = function (str) {
        return this.cleanTitle(str).replace(/^[ \/\\]+/, '').replace(/[ \/\\]+$/, '').replace(/\+( *[+\/\\])+/g, '+').replace(/([+\/\\] *)+\+/g, '+').replace(/( *[\/\\]+ *)+/g, '+');
      };

      this.normalizeTitle = function (str) {
        return this.cleanTitle(str.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е'));
      };

      this.equalTitle = function (t1, t2) {
        return typeof t1 === 'string' && typeof t2 === 'string' && this.normalizeTitle(t1) === this.normalizeTitle(t2);
      };

      this.containsTitle = function (str, title) {
        return typeof str === 'string' && typeof title === 'string' && this.normalizeTitle(str).indexOf(this.normalizeTitle(title)) !== -1;
      };

      this.equalAnyTitle = function (strings, titles) {
        var _this2 = this;

        return titles.some(function (title) {
          return title && strings.some(function (str) {
            return str && _this2.equalTitle(str, title);
          });
        });
      };

      this.containsAnyTitle = function (strings, titles) {
        var _this3 = this;

        return titles.some(function (title) {
          return title && strings.some(function (str) {
            return str && _this3.containsTitle(str, title);
          });
        });
      };

      this.uniqueNamesShortText = function (names, limit) {
        var unique = [];
        names.forEach(function (name) {
          if (name && unique.indexOf(name) == -1) unique.push(name);
        });

        if (limit && unique.length > 1) {
          var length = 0;
          var limit_index = -1;
          var last_index = unique.length - 1;
          unique.forEach(function (name, index) {
            length += name.length;
            if (limit_index == -1 && length > limit - (index == last_index ? 0 : 5)) limit_index = index;
            length += 2;
          });

          if (limit_index != -1) {
            unique = unique.splice(0, Math.max(limit_index, 1));
            unique.push('...');
          }
        }

        return unique.join(', ');
      };

      this.decodeHtml = function (html) {
        var text = document.createElement("textarea");
        text.innerHTML = html;
        return text.value;
      };

      this.vcdn_api_search = function (api, data, callback, error) {
        if (callback) callback(data);
        return;
      };

      this.kp_api_search = function (api, callback, error) {
        KP.clear();
        KP.getFromCache(api, function (json, cached) {
          var items = [];
          if (json.items && json.items.length) items = json.items;else if (json.films && json.films.length) items = json.films;
          if (!cached && items.length) KP.setCache(api, json);
          if (callback) callback(items);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        });
      };

      this.find = function () {
        var _this4 = this;

        var query = object.search || object.movie.title;
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var postprocess = function postprocess(items, success, error) {
          if (items && items.length && items.forEach) {
            var is_sure = false;
            var is_imdb = false;
            items.forEach(function (c) {
              if (c.start_date === '1969-12-31') c.start_date = '';
              if (c.year === '1969-12-31') c.year = '';
              var year = c.start_date || c.year || '0000';
              c.tmp_year = parseInt((year + '').slice(0, 4));
            });

            if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
              var imdb_id = object.movie.imdb_id;
              var kp_id = +object.movie.kinopoisk_id;
              var tmp = items.filter(function (c) {
                return imdb_id && (c.imdb_id || c.imdbId) == imdb_id || kp_id && (c.kp_id || c.kinopoisk_id || c.kinopoiskId || c.filmId) == kp_id;
              });

              if (tmp.length) {
                items = tmp;
                is_sure = true;
                is_imdb = true;
              }
            }

            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var _tmp = cards.filter(function (c) {
                  return _this4.containsAnyTitle([c.orig_title || c.nameOriginal, c.en_title || c.nameEn, c.title || c.ru_title || c.nameRu], orig_titles);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (query) {
                var _tmp2 = cards.filter(function (c) {
                  return _this4.containsAnyTitle([c.title || c.ru_title || c.nameRu, c.en_title || c.nameEn, c.orig_title || c.nameOriginal], [query]);
                });

                if (_tmp2.length) {
                  cards = _tmp2;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp3 = cards.filter(function (c) {
                  return c.tmp_year == search_year;
                });

                if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
                  return c.tmp_year && c.tmp_year > search_year - 2 && c.tmp_year < search_year + 2;
                });
                if (_tmp3.length) cards = _tmp3;
              }
            }

            if (cards.length == 1 && is_sure && !is_imdb) {
              if (search_year && cards[0].tmp_year) {
                is_sure = cards[0].tmp_year > search_year - 2 && cards[0].tmp_year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= _this4.equalAnyTitle([cards[0].orig_title || cards[0].nameOriginal, cards[0].en_title || cards[0].nameEn, cards[0].title || cards[0].ru_title || cards[0].nameRu], orig_titles);
                }

                if (query) {
                  is_sure |= _this4.equalAnyTitle([cards[0].title || cards[0].ru_title || cards[0].nameRu, cards[0].en_title || cards[0].nameEn, cards[0].orig_title || cards[0].nameOriginal], [query]);
                }
              }
            }

            if (cards.length == 1 && is_sure) success(cards);else error(items);
          } else error([]);
        };

        var display = function display(items) {
          postprocess(items, function (cards) {
            _this4.extendChoice();

            sources[balanser].search(object, cards[0].kp_id || cards[0].kinopoisk_id || cards[0].kinopoiskId || cards[0].filmId || cards[0].imdb_id, cards);
          }, function (items) {
            if (items.length) {
              items.forEach(function (c) {
                if (c.episodes) {
                  var season_count = 1;
                  c.episodes.forEach(function (episode) {
                    if (episode.season_num > season_count) {
                      season_count = episode.season_num;
                    }
                  });
                  c.seasons_count = season_count;
                  c.episodes_count = c.episodes.length;
                }
              });

              _this4.similars(items);

              _this4.loading(false);
            } else _this4.emptyForQuery(query);
          });
        };

        var vcdn_search_by_title = function vcdn_search_by_title(callback, error) {
          var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
          params = Lampa.Utils.addUrlComponent(params, 'query=' + encodeURIComponent(query));
          params = Lampa.Utils.addUrlComponent(params, 'field=title');

          _this4.vcdn_api_search('movies' + params, [], function (data) {
            _this4.vcdn_api_search('animes' + params, data, function (data) {
              _this4.vcdn_api_search('tv-series' + params, data, function (data) {
                _this4.vcdn_api_search('anime-tv-series' + params, data, function (data) {
                  _this4.vcdn_api_search('show-tv-series' + params, data, callback, error);
                }, error);
              }, error);
            }, error);
          }, error);
        };

        var vcdn_search_by_id = function vcdn_search_by_id(callback, error) {
          if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
            var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
            var imdb_params = object.movie.imdb_id ? Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(object.movie.imdb_id)) : '';
            var kp_params = +object.movie.kinopoisk_id ? Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(+object.movie.kinopoisk_id)) : '';

            _this4.vcdn_api_search('short' + (imdb_params || kp_params), [], function (data) {
              if (data && data.length) callback(data);else if (imdb_params && kp_params) {
                _this4.vcdn_api_search('short' + kp_params, [], callback, error);
              } else callback([]);
            }, error);
          } else callback([]);
        };

        var vcdn_search = function vcdn_search(fallback) {
          var error = function error() {
            if (fallback) fallback();else display([]);
          };

          vcdn_search_by_id(function (data) {
            if (data && data.length && data.forEach) display(data);else vcdn_search_by_title(function (data) {
              if (data && data.length && data.forEach) display(data);else error();
            }, error);
          }, error);
        };

        var kp_search_by_title = function kp_search_by_title(callback, error) {
          var url = 'api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(_this4.kpCleanTitle(query));

          _this4.kp_api_search(url, callback, error);
        };

        var kp_search_by_id = function kp_search_by_id(callback, error) {
          if (!object.clarification && object.movie.imdb_id) {
            var url = 'api/v2.2/films?imdbId=' + encodeURIComponent(object.movie.imdb_id);

            _this4.kp_api_search(url, callback, error);
          } else callback([]);
        };

        var kp_search = function kp_search(fallback) {
          var error = function error() {
            if (fallback) fallback();else display([]);
          };

          kp_search_by_id(function (data) {
            if (data && data.length && data.forEach) display(data);else kp_search_by_title(function (data) {
              if (data && data.length && data.forEach) display(data);else error();
            }, error);
          }, error);
        };

        var vcdn_search_imdb = function vcdn_search_imdb() {
          var error = function error() {
            if (imdb_sources.indexOf(balanser) >= 0) {
              var error1 = function error1() {
                _this4.extendChoice();

                sources[balanser].search(object, object.movie.imdb_id);
              };

              if (search_sources.indexOf(balanser) >= 0) error1();else {
                kp_search_by_title(function (data) {
                  postprocess(data, function (cards) {
                    _this4.extendChoice();

                    sources[balanser].search(object, cards[0].kp_id || cards[0].kinopoisk_id || cards[0].kinopoiskId || cards[0].filmId || cards[0].imdb_id, cards);
                  }, function (items) {
                    error1();
                  });
                }, error1);
              }
            } else if (search_sources.indexOf(balanser) >= 0) {
              _this4.extendChoice();

              sources[balanser].search(object);
            } else {
              var error2 = function error2() {
                display([]);
              };

              kp_search_by_title(function (data) {
                if (data && data.length && data.forEach) display(data);else error2();
              }, error2);
            }
          };

          vcdn_search_by_id(function (data) {
            if (data && data.length && data.forEach) display(data);else error();
          }, error);
        };

        var kp_search_imdb = function kp_search_imdb() {
          kp_search_by_id(function (data) {
            if (data && data.length && data.forEach) display(data);else vcdn_search_imdb();
          }, vcdn_search_imdb);
        };

        var letgo = function letgo() {
          if (!object.clarification && +object.movie.kinopoisk_id && kp_sources.indexOf(balanser) >= 0) {
            _this4.extendChoice();

            sources[balanser].search(object, +object.movie.kinopoisk_id);
          } else if (!object.clarification && object.movie.imdb_id && kp_sources.indexOf(balanser) >= 0) {
            kp_search_imdb();
          } else if (search_sources.indexOf(balanser) >= 0) {
            _this4.extendChoice();

            sources[balanser].search(object);
          } else {
            if (balanser == 'lumex' || balanser == 'lumex2') {
              var fallback = function fallback() {
                if (!object.clarification && (+object.movie.kinopoisk_id || object.movie.imdb_id)) {
                  _this4.extendChoice();

                  sources[balanser].search(object, +object.movie.kinopoisk_id || object.movie.imdb_id);
                } else if (Lampa.Storage.field('online_mod_skip_kp_search') !== true) kp_search();else display([]);
              };

              vcdn_search(fallback);
            } else kp_search(vcdn_search);
          }
        };

        if (!object.movie.imdb_id && (object.movie.source == 'tmdb' || object.movie.source == 'cub') && (imdb_sources.indexOf(balanser) >= 0 || kp_sources.indexOf(balanser) >= 0)) {
          var tmdburl = (object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '/external_ids?api_key=4ef0d7355d9ffb5151e987764708ce96&language=ru';
          var baseurl = typeof Lampa.TMDB !== 'undefined' ? Lampa.TMDB.api(tmdburl) : 'http://api.themoviedb.org/3/' + tmdburl;
          network.clear();
          network.timeout(1000 * 15);
          network.silent(baseurl, function (ttid) {
            object.movie.imdb_id = ttid.imdb_id;
            letgo();
          }, function (a, c) {
            letgo();
          });
        } else {
          letgo();
        }
      };

      this.parsePlaylist = function (str) {
        var pl = [];

        try {
          if (startsWith(str, '[')) {
            str.substring(1).split(/, *\[/).forEach(function (item) {
              item = item.trim();
              if (endsWith(item, ',')) item = item.substring(0, item.length - 1).trim();
              var label_end = item.indexOf(']');

              if (label_end >= 0) {
                var label = item.substring(0, label_end).trim();

                if (item.charAt(label_end + 1) === '{') {
                  item.substring(label_end + 2).split(/; *\{/).forEach(function (voice_item) {
                    voice_item = voice_item.trim();
                    if (endsWith(voice_item, ';')) voice_item = voice_item.substring(0, voice_item.length - 1).trim();
                    var voice_end = voice_item.indexOf('}');

                    if (voice_end >= 0) {
                      var voice = voice_item.substring(0, voice_end).trim();
                      pl.push({
                        label: label,
                        voice: voice,
                        links: voice_item.substring(voice_end + 1).split(' or ').map(function (link) {
                          return link.trim();
                        }).filter(function (link) {
                          return link;
                        })
                      });
                    }
                  });
                } else {
                  pl.push({
                    label: label,
                    links: item.substring(label_end + 1).split(' or ').map(function (link) {
                      return link.trim();
                    }).filter(function (link) {
                      return link;
                    })
                  });
                }
              }
            });
            pl = pl.filter(function (item) {
              return item.links.length;
            });
          }
        } catch (e) {}

        return pl;
      };

      this.parseM3U = function (str) {
        var pl = [];

        try {
          var xstream = false;
          var bandwidth = 0;
          var width = 0;
          var height = 0;
          var codecs = '';
          str.split('\n').forEach(function (line) {
            line = line.trim();

            if (startsWith(line, '#')) {
              if (startsWith(line, '#EXT-X-STREAM-INF')) {
                xstream = true;
                var BANDWIDTH = line.match(/\bBANDWIDTH=(\d+)\b/);

                if (BANDWIDTH) {
                  bandwidth = BANDWIDTH[1];
                }

                var RESOLUTION = line.match(/\bRESOLUTION=(\d+)x(\d+)\b/);

                if (RESOLUTION) {
                  width = parseInt(RESOLUTION[1]);
                  height = parseInt(RESOLUTION[2]);
                }

                var CODECS = line.match(/\bCODECS="([^"]+)"/);

                if (CODECS) {
                  codecs = CODECS[1];
                }
              }
            } else if (line.length) {
              pl.push({
                xstream: xstream,
                bandwidth: bandwidth,
                width: width,
                height: height,
                codecs: codecs,
                link: line
              });
              xstream = false;
              bandwidth = 0;
              width = 0;
              height = 0;
              codecs = '';
            }
          });
        } catch (e) {}

        return pl;
      };

      this.formatEpisodeTitle = function (s_num, e_num, name) {
        var title = '';
        var full = Lampa.Storage.field('online_mod_full_episode_title') === true;

        if (s_num != null && s_num !== '') {
          title = (full ? Lampa.Lang.translate('torrent_serial_season') + ' ' : 'S') + s_num + ' / ';
        }

        if (name == null || name === '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num;else if (e_num != null && e_num !== '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num + ' - ' + name;
        title += name;
        return title;
      };

      this.proxyUrlCall = function (proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        proxy_url = this.proxy('iframe') + proxy_url;

        var process = function process() {
          if (proxyWindow[proxy_url]) {
            timeout = timeout || 60 * 1000;
            var message_id;

            try {
              message_id = crypto.getRandomValues(new Uint8Array(16)).toString();
            } catch (e) {}

            if (!message_id) message_id = Math.random().toString();
            proxyCalls[message_id] = {
              success: call_success,
              fail: call_fail
            };
            proxyWindow[proxy_url].postMessage({
              message: 'proxyMessage',
              message_id: message_id,
              method: method,
              url: url,
              timeout: timeout,
              post_data: post_data,
              withCredentials: withCredentials
            }, '*');
            setTimeout(function () {
              var call = proxyCalls[message_id];

              if (call) {
                delete proxyCalls[message_id];
                if (call.fail) call.fail({
                  status: 0,
                  statusText: 'timeout',
                  responseText: ''
                }, 'timeout');
              }
            }, timeout + 1000);
          } else {
            if (call_fail) call_fail({
              status: 0,
              statusText: 'abort',
              responseText: ''
            }, 'abort');
          }
        };

        if (!proxyInitialized[proxy_url]) {
          proxyInitialized[proxy_url] = true;
          var proxyOrigin = proxy_url.replace(/(https?:\/\/[^\/]+)\/.*/, '$1');
          var proxyIframe = document.createElement('iframe');
          proxyIframe.setAttribute('src', proxy_url);
          proxyIframe.setAttribute('width', '0');
          proxyIframe.setAttribute('height', '0');
          proxyIframe.setAttribute('tabindex', '-1');
          proxyIframe.setAttribute('title', 'empty');
          proxyIframe.setAttribute('style', 'display:none');
          proxyIframe.addEventListener('load', function () {
            proxyWindow[proxy_url] = proxyIframe.contentWindow;
            window.addEventListener('message', function (event) {
              var data = event.data;

              if (event.origin === proxyOrigin && data && data.message === 'proxyResponse' && data.message_id) {
                var call = proxyCalls[data.message_id];

                if (call) {
                  delete proxyCalls[data.message_id];

                  if (data.status === 200) {
                    if (call.success) call.success(data.responseText);
                  } else {
                    if (call.fail) call.fail({
                      status: data.status,
                      statusText: data.statusText,
                      responseText: data.responseText
                    });
                  }
                }
              }
            });
            if (process) process();
            process = null;
          });
          document.body.appendChild(proxyIframe);
          setTimeout(function () {
            if (process) process();
            process = null;
          }, 10000);
        } else {
          process();
        }
      };

      this.proxyCall = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'nb557.surge.sh/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.proxyCall2 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'lampa.stream/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.proxyCall3 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = 'https://nb557.github.io/plugins/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.extendChoice = function () {
        var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
        var save = data[selected_id || object.movie.id] || {};
        extended = true;
        sources[balanser].extendChoice(save);
      };

      this.saveChoice = function (choice) {
        var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
        data[selected_id || object.movie.id] = choice;
        Lampa.Storage.set('online_mod_choice_' + balanser, data);
      };
      /**
       * Есть похожие карточки
       * @param {Object} json
       */


      this.similars = function (json, search_more, more_params) {
        var _this5 = this;

        json.forEach(function (elem) {
          var title = elem.title || elem.ru_title || elem.nameRu || elem.en_title || elem.nameEn || elem.orig_title || elem.nameOriginal;
          var orig_title = elem.orig_title || elem.nameOriginal || elem.en_title || elem.nameEn;
          var year = elem.start_date || elem.year || '';
          var info = [];
          if (orig_title && orig_title != elem.title) info.push(orig_title);
          if (elem.seasons_count) info.push(Lampa.Lang.translate('online_mod_seasons_count') + ': ' + elem.seasons_count);
          if (elem.episodes_count) info.push(Lampa.Lang.translate('online_mod_episodes_count') + ': ' + elem.episodes_count);
          elem.title = title;
          elem.quality = year ? (year + '').slice(0, 4) : '----';
          elem.info = info.length ? ' / ' + info.join(' / ') : '';
          var item = Lampa.Template.get('online_mod_folder', elem);
          item.on('hover:enter', function () {
            _this5.activity.loader(true);

            _this5.reset();

            object.search = elem.title;
            object.search_date = year;
            selected_id = elem.id;

            _this5.extendChoice();

            sources[balanser].search(object, elem.kp_id || elem.kinopoisk_id || elem.kinopoiskId || elem.filmId || elem.imdb_id, [elem]);
          });

          _this5.append(item);
        });

        if (search_more) {
          var elem = {
            title: Lampa.Lang.translate('online_mod_show_more'),
            quality: '...',
            info: ''
          };
          var item = Lampa.Template.get('online_mod_folder', elem);
          item.on('hover:enter', function () {
            _this5.activity.loader(true);

            _this5.reset();

            search_more(more_params);
          });
          this.append(item);
        }
      };
      /**
       * Очистить список файлов
       */


      this.reset = function () {
        contextmenu_all = [];
        last = filter.render().find('.selector').eq(0)[0];
        scroll.render().find('.empty').remove();
        scroll.clear();
        scroll.reset();
      };

      this.inActivity = function () {
        var body = $('body');
        return !(body.hasClass('settings--open') || body.hasClass('menu--open') || body.hasClass('keyboard-input--visible') || body.hasClass('selectbox--open') || body.hasClass('search--open') || body.hasClass('ambience--enable') || $('div.modal').length);
      };
      /**
       * Загрузка
       */


      this.loading = function (status) {
        if (status) this.activity.loader(true);else {
          this.activity.loader(false);
          if (Lampa.Activity.active().activity === this.activity && this.inActivity()) this.activity.toggle();
        }
      };

      this.getDefaultQuality = function (qualityMap, defValue) {
        {
          var needHackHlsLink = function needHackHlsLink(link) {
            return link && endsWith(link, '.m3u8') && link.lastIndexOf('?') <= link.lastIndexOf('/');
          };

          if (qualityMap) {
            for (var ID in qualityMap) {
              if (needHackHlsLink(qualityMap[ID])) {
                qualityMap[ID] += '?';
              }
            }
          }

          if (needHackHlsLink(defValue)) {
            defValue += '?';
          }
        }

        if (qualityMap) {
          var preferably = forcedQuality;

          if (!preferably) {
            preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
            if (preferably === '1080p') preferably = '1080p Ultra';
          }

          var items = ['2160p', '2160', '4K', '1440p', '1440', '2K', '1080p Ultra', '1080p', '1080', '720p', '720', '480p', '480', '360p', '360', '240p', '240'];
          var idx = items.indexOf(preferably);

          if (idx !== -1) {
            for (var i = idx; i < items.length; i++) {
              var item = items[i];
              if (qualityMap[item]) return qualityMap[item];
            }

            for (var _i = idx - 1; _i >= 0; _i--) {
              var _item = items[_i];
              if (qualityMap[_item]) return qualityMap[_item];
            }
          }
        }

        return defValue;
      };

      this.renameQualityMap = function (qualityMap) {
        if (!qualityMap) return qualityMap;
        var renamed = {};

        for (var label in qualityMap) {
          renamed["\u200B" + label] = qualityMap[label];
        }

        return renamed;
      };
      /**
       * Построить фильтр
       */


      this.filter = function (filter_items, choice) {
        var select = [];

        var add = function add(type, title) {
          var need = Lampa.Storage.get('online_mod_filter', '{}');
          var items = filter_items[type];
          var subitems = [];
          var value = need[type];
          items.forEach(function (name, i) {
            subitems.push({
              title: name,
              selected: value == i,
              index: i
            });
          });
          select.push({
            title: title,
            subtitle: items[value],
            items: subitems,
            stype: type
          });
        };

        choice.source = filter_sources.indexOf(balanser);
        Lampa.Storage.set('online_mod_filter', choice);
        select.push({
          title: Lampa.Lang.translate('torrent_parser_reset'),
          reset: true
        });
        filter_items.source = obj_filter_sources.map(function (s) {
          return s.title;
        });
        add('source', Lampa.Lang.translate('online_mod_balanser'));
        if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
        if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
        if (filter_items.server && filter_items.server.length) add('server', Lampa.Lang.translate('online_mod_server'));
        this.updateQualityFilter();
        select.push(qualityFilter);
        filter.set('filter', select);
        filter.set('sort', obj_filter_sources.map(function (e) {
          return {
            source: e.name,
            title: e.title,
            selected: e.name === balanser
          };
        }));
        this.selected(filter_items);
      };
      /**
       * Закрыть фильтр
       */


      this.closeFilter = function () {
        if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
      };
      /**
       * Показать что выбрано в фильтре
       */


      this.selected = function (filter_items) {
        var need = Lampa.Storage.get('online_mod_filter', '{}'),
            select = [];

        for (var i in need) {
          if (i !== 'source' && filter_translate[i] && filter_items[i] && filter_items[i].length > 1) {
            select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
          }
        }

        var source_obj = obj_filter_sources.filter(function (e) {
          return e.name === balanser;
        })[0];
        filter.chosen('filter', select);
        filter.chosen('sort', [source_obj ? source_obj.title : balanser]);
      };
      /**
       * Добавить файл
       */


      this.append = function (item) {
        item.on('hover:focus', function (e) {
          last = e.target;
          scroll.update($(e.target), true);
        });
        scroll.append(item);
      };
      /**
       * Меню
       */


      this.contextmenu = function (params) {
        contextmenu_all.push(params);
        params.item.on('hover:long', function () {
          function selectQuality(title, callback) {
            return function (extra) {
              if (extra.quality) {
                var qual = [];

                for (var i in extra.quality) {
                  qual.push({
                    title: i,
                    file: extra.quality[i]
                  });
                }

                Lampa.Select.show({
                  title: title,
                  items: qual,
                  onBack: function onBack() {
                    Lampa.Controller.toggle(enabled);
                  },
                  onSelect: callback
                });
              } else callback(null, extra);
            };
          }

          var enabled = Lampa.Controller.enabled().name;
          var menu = [{
            title: Lampa.Lang.translate('torrent_parser_label_title'),
            mark: true
          }, {
            title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
            clearmark: true
          }, {
            title: Lampa.Lang.translate('online_mod_clearmark_all'),
            clearmark_all: true
          }, {
            title: Lampa.Lang.translate('time_reset'),
            timeclear: true
          }, {
            title: Lampa.Lang.translate('online_mod_timeclear_all'),
            timeclear_all: true
          }];

          if (Lampa.Platform.is('webos')) {
            menu.push({
              title: Lampa.Lang.translate('player_lauch') + ' - Webos',
              player: 'webos'
            });
          }

          if (Lampa.Platform.is('android')) {
            menu.push({
              title: Lampa.Lang.translate('player_lauch') + ' - Android',
              player: 'android'
            });
          }

          menu.push({
            title: Lampa.Lang.translate('player_lauch') + ' - Lampa',
            player: 'lampa'
          });

          if (params.file) {
            menu.push({
              title: Lampa.Lang.translate('copy_link'),
              copylink: true
            });
          }

          if (Lampa.Account.working() && params.element && typeof params.element.season !== 'undefined' && Lampa.Account.subscribeToTranslation) {
            menu.push({
              title: Lampa.Lang.translate('online_mod_voice_subscribe'),
              subscribe: true
            });
          }

          Lampa.Select.show({
            title: Lampa.Lang.translate('title_action'),
            items: menu,
            onBack: function onBack() {
              Lampa.Controller.toggle(enabled);
            },
            onSelect: function onSelect(a) {
              if (a.clearmark) {
                Lampa.Arrays.remove(params.viewed, params.hash_file);
                Lampa.Storage.set('online_view', params.viewed);
                params.item.find('.torrent-item__viewed').remove();
              }

              if (a.clearmark_all) {
                contextmenu_all.forEach(function (params) {
                  Lampa.Arrays.remove(params.viewed, params.hash_file);
                  Lampa.Storage.set('online_view', params.viewed);
                  params.item.find('.torrent-item__viewed').remove();
                });
              }

              if (a.mark) {
                if (params.viewed.indexOf(params.hash_file) == -1) {
                  params.viewed.push(params.hash_file);
                  params.item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                  Lampa.Storage.set('online_view', params.viewed);
                }
              }

              if (a.timeclear) {
                params.view.percent = 0;
                params.view.time = 0;
                params.view.duration = 0;
                Lampa.Timeline.update(params.view);
              }

              if (a.timeclear_all) {
                contextmenu_all.forEach(function (params) {
                  params.view.percent = 0;
                  params.view.time = 0;
                  params.view.duration = 0;
                  Lampa.Timeline.update(params.view);
                });
              }

              Lampa.Controller.toggle(enabled);

              if (a.player) {
                Lampa.Player.runas(a.player);
                params.item.trigger('hover:enter', {
                  runas: a.player
                });
              }

              if (a.copylink) {
                params.file(selectQuality('Ссылки', function (b, extra) {
                  Lampa.Utils.copyTextToClipboard(b && b.file || extra && extra.file, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                  });
                }));
              }

              if (a.subscribe) {
                Lampa.Account.subscribeToTranslation({
                  card: object.movie,
                  season: params.element.season,
                  episode: params.element.translate_episode_end,
                  voice: params.element.translate_voice
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_success'));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_error'));
                });
              }
            }
          });
        }).on('hover:focus', function () {
          if (Lampa.Helper) Lampa.Helper.show('online_file', Lampa.Lang.translate('online_mod_file_helper'), params.item);
        });
      };
      /**
       * Показать пустой результат
       */


      this.empty = function (msg) {
        var empty = Lampa.Template.get('list_empty');
        if (msg) empty.find('.empty__descr').text(msg);
        var change = $('<div class="selector online-mod-change-source"></div>').text(Lampa.Lang.translate('online_mod_change_source'));
        change.on('hover:enter', function () { filter.show(Lampa.Lang.translate('online_mod_balanser'), 'sort'); });
        empty.append(change);
        scroll.render().find('.empty').remove();
        scroll.append(empty);
        this.loading(false);
      };
      /**
       * Показать пустой результат по ключевому слову
       */


      this.emptyForQuery = function (query) {
        this.empty(Lampa.Lang.translate('online_mod_query_start') + ' (' + query + ') ' + Lampa.Lang.translate('online_mod_query_end'));
      };

      this.getLastEpisode = function (items) {
        var last_episode = 0;
        items.forEach(function (e) {
          if (typeof e.episode !== 'undefined') last_episode = Math.max(last_episode, parseInt(e.episode));
        });
        return last_episode;
      };
      /**
       * Начать навигацию по файлам
       */


      this.start = function (first_select) {
        if (Lampa.Activity.active().activity !== this.activity) return; //обязательно, иначе наблюдается баг, активность создается но не стартует, в то время как компонент загружается и стартует самого себя.

        if (first_select) {
          var last_views = scroll.render().find('.selector.online').find('.torrent-item__viewed').parent().last();
          if (object.movie.number_of_seasons && last_views.length) last = last_views.eq(0)[0];else last = scroll.render().find('.selector').eq(0)[0];
        }

        Lampa.Background.immediately(Lampa.Utils.cardImgBackground(object.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), files.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');else filter.show(Lampa.Lang.translate('title_filter'), 'filter');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          back: this.back
        });
        if (this.inActivity()) Lampa.Controller.toggle('content');
      };

      this.render = function () {
        return files.render();
      };

      this.back = function () {
        Lampa.Activity.backward();
      };

      this.pause = function () {};

      this.stop = function () {};

      this.destroy = function () {
        network.clear();
        files.destroy();
        scroll.destroy();
        network = null;
        all_sources.forEach(function (s) {
          s.source.destroy();
        });
      };
    }

    var mod_version = '15.10.2026-mersen1.6';
    var isMSX = !!(window.TVXHost || window.TVXManager);
    var isTizen = navigator.userAgent.toLowerCase().indexOf('tizen') !== -1;
    var isIFrame = window.parent !== window;
    var isLocal = !startsWith(window.location.protocol, 'http');
    var androidHeaders = Lampa.Platform.is('android') && Utils.checkAndroidVersion(339);
    var filmixHost = Utils.filmixHost();
    var network = Utils.createRequest();
    var online_loading = false;

    function logApp() {
      console.log('App', 'start address:', window.location.href);
      console.log('App', 'is MSX:', isMSX);
      console.log('App', 'is Tizen:', isTizen);
      console.log('App', 'is iframe:', isIFrame);
      console.log('App', 'is local:', isLocal);
      console.log('App', 'supports headers:', androidHeaders);
    }

    function initStorage() {
      var android = Lampa.Platform.is('android');
      var debugBrowser = Utils.isDebug() && !android;
      var defaults = {
        lumex: debugBrowser, rezka2: !android, kinogo: !android,
        kinobase: false, collaps: false, cdnmovies: debugBrowser,
        filmix: !android, fancdn: debugBrowser, fancdn2: debugBrowser,
        fanserials: debugBrowser && !isLocal, fanserials_cdn: false,
        animelib: false, videoseed: !android && !isLocal,
        vibix: !android, redheadsound: !android, cdnvideohub: false,
        videodb: false, zetflix: false, kinopub: true, alloha: false, hdvb: false, kp: false
      };
      Object.keys(defaults).forEach(function (name) {
        var key = 'online_mod_proxy_' + name;
        // Persist only first-run defaults; never reset a user's transport selection.
        if (Lampa.Storage.get(key, '') === '') Lampa.Storage.set(key, defaults[name] ? 'true' : 'false');
      });
      Lampa.Params.trigger('online_mod_iframe_proxy', !isTizen || isLocal);
      Lampa.Params.trigger('online_mod_proxy_iframe', false);
      Lampa.Params.trigger('online_mod_use_stream_proxy', false);
      Lampa.Params.trigger('online_mod_proxy_find_ip', false);
      Lampa.Params.trigger('online_mod_proxy_other', false);
      Lampa.Params.trigger('online_mod_proxy_lumex', false);
      Lampa.Params.trigger('online_mod_proxy_rezka', false);
      Lampa.Params.trigger('online_mod_proxy_rezka2', !android);
      Lampa.Params.trigger('online_mod_proxy_rezka2_mirror', true);
      Lampa.Params.trigger('online_mod_proxy_kinogo', !android);
      Lampa.Params.trigger('online_mod_proxy_kinobase', false);
      Lampa.Params.trigger('online_mod_proxy_collaps', false);
      Lampa.Params.trigger('online_mod_proxy_cdnmovies', false);
      Lampa.Params.trigger('online_mod_proxy_filmix', false);
      Lampa.Params.trigger('online_mod_proxy_videodb', false);
      Lampa.Params.trigger('online_mod_proxy_zetflix', false);
      Lampa.Params.trigger('online_mod_proxy_fancdn', false);
      Lampa.Params.trigger('online_mod_proxy_fancdn2', false);
      Lampa.Params.trigger('online_mod_proxy_fanserials', false);
      Lampa.Params.trigger('online_mod_proxy_fanserials_cdn', false);
      Lampa.Params.trigger('online_mod_proxy_videoseed', false);
      Lampa.Params.trigger('online_mod_proxy_vibix', false);
      Lampa.Params.trigger('online_mod_proxy_redheadsound', false);
      Lampa.Params.trigger('online_mod_proxy_cdnvideohub', false);
      Lampa.Params.trigger('online_mod_proxy_anilibria', false);
      Lampa.Params.trigger('online_mod_proxy_anilibria2', false);
      Lampa.Params.trigger('online_mod_proxy_animelib', false);
      Lampa.Params.trigger('online_mod_proxy_kodik', false);
      Lampa.Params.trigger('online_mod_proxy_kinopub', false);
      Lampa.Params.trigger('online_mod_proxy_alloha', false);
      Lampa.Params.trigger('online_mod_proxy_hdvb', false);
      Lampa.Params.trigger('online_mod_proxy_kp', false);
      Lampa.Params.trigger('online_mod_skip_kp_search', false);
      Lampa.Params.trigger('online_mod_prefer_http', window.location.protocol !== 'https:');
      Lampa.Params.trigger('online_mod_prefer_mp4', true);
      Lampa.Params.trigger('online_mod_prefer_dash', false);
      Lampa.Params.trigger('online_mod_collaps_lampa_player', false);
      Lampa.Params.trigger('online_mod_full_episode_title', false);
      Lampa.Params.trigger('online_mod_av1_support', true);
      Lampa.Params.trigger('online_mod_save_last_balanser', false);
      Lampa.Params.trigger('online_mod_rezka2_fix_stream', false);
      Lampa.Params.select('online_mod_kinobase_mirror', '', '');
      Lampa.Params.select('online_mod_kinobase_cookie', '', '');
      Lampa.Params.select('online_mod_rezka2_mirror', '', '');
      Lampa.Params.select('online_mod_rezka2_proxy_url', '', '');
      Lampa.Params.select('online_mod_kinogo_mirror', '', '');
      Lampa.Params.select('online_mod_rezka2_name', '', '');
      Lampa.Params.select('online_mod_rezka2_password', '', '');
      Lampa.Params.select('online_mod_rezka2_cookie', '', '');
      Lampa.Params.select('online_mod_rezka2_prx_ukr', {
        'prx.ukrtelcdn.net': 'prx.ukrtelcdn.net',
        'prx-cogent.ukrtelcdn.net': 'prx-cogent.ukrtelcdn.net',
        'prx2-cogent.ukrtelcdn.net': 'prx2-cogent.ukrtelcdn.net',
        'prx3-cogent.ukrtelcdn.net': 'prx3-cogent.ukrtelcdn.net',
        'prx4-cogent.ukrtelcdn.net': 'prx4-cogent.ukrtelcdn.net',
        'prx-ams.ukrtelcdn.net': 'prx-ams.ukrtelcdn.net',
        'prx2-ams.ukrtelcdn.net': 'prx2-ams.ukrtelcdn.net'
      }, 'prx.ukrtelcdn.net');
      Lampa.Params.select('online_mod_fancdn_name', '', '');
      Lampa.Params.select('online_mod_fancdn_password', '', '');
      Lampa.Params.select('online_mod_fancdn_cookie', '', '');
      Lampa.Params.select('online_mod_fancdn_token', '', '');
      Lampa.Params.select('online_mod_proxy_other_url', '', '');
      Lampa.Params.select('online_mod_secret_password', '', '');

      if (window.location.protocol === 'https:') {
        Lampa.Storage.set('online_mod_prefer_http', 'false');
      }

    }

    function initLang() {
      if (!Lampa.Lang) {
        var lang_data = {};
        Lampa.Lang = {
          add: function add(data) {
            lang_data = data;
          },
          translate: function translate(key) {
            return lang_data[key] ? lang_data[key].ru || lang_data[key].en || key : key;
          }
        };
      }

      function english(text) {
        // Lampa falls back to Russian for missing translations in other languages.
        return { en: text, ru: text };
      }

      Lampa.Lang.add({
        online_mod_source_challenge: english('This source requires a browser challenge. Choose another source or configure a working mirror in Online Mod settings.'),
        online_mod_source_response_error: english('The source returned an unsupported response. Choose another source or try again later.'),
        online_mod_change_source: english('Choose another source'),
        online_mod_kinogo_mirror: english('Kinogo mirror URL'),
        online_mod_kinogo_unsupported: english('This Kinogo mirror uses an unsupported player. Try kinogo.is or another source.'),
        online_mod_proxy_source_unavailable: english('The selected proxy does not support this source. Configure your own proxy in Online Mod settings or choose another source.'),
        online_mod_rezka2_proxy_error: {
          ru: 'Не удалось подключиться к HDrezka через прокси. Проверьте зеркало и прокси в настройках Online Mod или укажите свой прокси-сервер.',
          en: 'Could not connect to HDrezka through the proxy. Check the mirror and proxy in Online Mod settings or configure your own proxy server.'
        },
        online_mod_rezka2_direct_error: {
          ru: 'Не удалось подключиться к HDrezka напрямую. Для Media Station X включите «Проксировать HDrezka» и «Проксировать зеркало HDrezka» в настройках Online Mod.',
          en: 'Could not connect to HDrezka directly. For Media Station X, enable the HDrezka proxy and mirror proxy in Online Mod settings.'
        },
        online_mod_rezka2_session_error: {
          ru: 'Не удалось подтвердить сессию HDrezka. Проверьте зеркало и прокси, затем повторите вход в настройках Online Mod.',
          en: 'Could not verify the HDrezka session. Check the mirror and proxy, then log in again in Online Mod settings.'
        },
        online_mod_rezka2_proxy_url: {
          ru: 'Свой прокси для HDrezka',
          en: 'Custom HDrezka proxy'
        },
        online_mod_watch: {
          ru: 'Смотреть онлайн',
          uk: 'Дивитися онлайн',
          be: 'Глядзець анлайн',
          en: 'Watch online',
          zh: '在线观看'
        },
        online_mod_nolink: {
          ru: 'Не удалось извлечь ссылку',
          uk: 'Неможливо отримати посилання',
          be: 'Не ўдалося атрымаць спасылку',
          en: 'Failed to fetch link',
          zh: '获取链接失败'
        },
        online_mod_blockedlink: {
          ru: 'К сожалению, это видео не доступно в вашем регионе',
          uk: 'На жаль, це відео не доступне у вашому регіоні',
          be: 'Нажаль, гэта відэа не даступна ў вашым рэгіёне',
          en: 'Sorry, this video is not available in your region',
          zh: '抱歉，您所在的地区无法观看该视频'
        },
        online_mod_blockedlink_copyright: {
          ru: 'К сожалению, это видео не доступно по запросу правообладателей',
          uk: 'На жаль, це відео не доступне за запитом правовласників',
          be: 'Нажаль, гэта відэа не даступна па запыце праваўладальнікаў',
          en: 'Sorry, this video is not available due to copyright holder request',
          zh: '抱歉，由于版权所有者的要求，该视频无法播放。'
        },
        online_mod_waitlink: {
          ru: 'Работаем над извлечением ссылки, подождите...',
          uk: 'Працюємо над отриманням посилання, зачекайте...',
          be: 'Працуем над выманнем спасылкі, пачакайце...',
          en: 'Working on extracting the link, please wait...',
          zh: '正在提取链接，请稍候...'
        },
        online_mod_captcha_address: {
          ru: 'Требуется пройти капчу по адресу: ',
          uk: 'Потрібно пройти капчу за адресою: ',
          be: 'Патрабуецца прайсці капчу па адрасе: ',
          en: 'It is required to pass the captcha at: ',
          zh: '您需要完成验证码： '
        },
        online_mod_captcha_proxy: {
          ru: 'Требуется пройти капчу. Попробуйте использовать зеркало вместо прокси',
          uk: 'Потрібно пройти капчу. Спробуйте використовувати дзеркало замість проксі',
          be: 'Патрабуецца прайсці капчу. Паспрабуйце выкарыстоўваць люстэрка замест проксі',
          en: 'It is required to pass the captcha. Try to use a mirror instead of a proxy',
          zh: '您需要通过验证码。 尝试使用镜子而不是代理'
        },
        online_mod_balanser: {
          ru: 'Балансер',
          uk: 'Балансер',
          be: 'Балансер',
          en: 'Balancer',
          zh: '平衡器'
        },
        online_mod_file_helper: {
          ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
          uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
          be: 'Утрымлівайце клавішу "ОК" для выкліку кантэкстнага меню',
          en: 'Hold the "OK" key to bring up the context menu',
          zh: '按住“确定”键调出上下文菜单'
        },
        online_mod_clearmark_all: {
          ru: 'Снять отметку у всех',
          uk: 'Зняти позначку у всіх',
          be: 'Зняць адзнаку ва ўсіх',
          en: 'Uncheck all',
          zh: '取消所有'
        },
        online_mod_timeclear_all: {
          ru: 'Сбросить тайм-код у всех',
          uk: 'Скинути тайм-код у всіх',
          be: 'Скінуць тайм-код ва ўсіх',
          en: 'Reset timecode for all',
          zh: '为所有人重置时间码'
        },
        online_mod_query_start: {
          ru: 'По запросу',
          uk: 'На запит',
          be: 'Па запыце',
          en: 'On request',
          zh: '根据要求'
        },
        online_mod_query_end: {
          ru: 'нет результатов',
          uk: 'немає результатів',
          be: 'няма вынікаў',
          en: 'no results',
          zh: '没有结果'
        },
        online_mod_title: {
          ru: 'Онлайн',
          uk: 'Онлайн',
          be: 'Анлайн',
          en: 'Online',
          zh: '在线的'
        },
        online_mod_title_full: {
          ru: 'Онлайн Мод',
          uk: 'Онлайн Мод',
          be: 'Анлайн Мод',
          en: 'Online Mod',
          zh: '在线的 Mod'
        },
        online_mod_use_stream_proxy: {
          ru: 'Проксировать видеопоток (Укр)',
          uk: 'Проксирувати відеопотік (Укр)',
          be: 'Праксіраваць відэаструмень (Укр)',
          en: 'Proxy video stream (Ukr)',
          zh: '代理视频流 （乌克兰）'
        },
        online_mod_proxy_find_ip: {
          ru: 'Передавать свой IP прокси',
          uk: 'Передавати свій IP проксі',
          be: 'Перадаваць свой IP проксі',
          en: 'Send your IP to proxy',
          zh: '将您的 IP 发送给代理'
        },
        online_mod_proxy_other: {
          ru: 'Использовать альтернативный прокси',
          uk: 'Використовувати альтернативний проксі',
          be: 'Выкарыстоўваць альтэрнатыўны проксі',
          en: 'Use an alternative proxy',
          zh: '使用备用代理'
        },
        online_mod_proxy_other_url: {
          ru: 'Альтернативный прокси',
          uk: 'Альтернативний проксі',
          be: 'Альтэрнатыўны проксі',
          en: 'Alternative proxy',
          zh: '备用代理'
        },
        online_mod_proxy_balanser: {
          ru: 'Проксировать',
          uk: 'Проксирувати',
          be: 'Праксіраваць',
          en: 'Proxy',
          zh: '代理'
        },
        online_mod_proxy_kp: {
          ru: 'Проксировать КиноПоиск',
          uk: 'Проксирувати КиноПоиск',
          be: 'Праксіраваць КиноПоиск',
          en: 'Proxy KinoPoisk',
          zh: '代理 KinoPoisk'
        },
        online_mod_skip_kp_search: {
          ru: 'Не искать в КиноПоиск',
          uk: 'Не шукати у КиноПоиск',
          be: 'Не шукаць у КиноПоиск',
          en: 'Skip search in KinoPoisk',
          zh: '在 KinoPoisk 中跳过搜索'
        },
        online_mod_iframe_proxy: {
          ru: 'Использовать iframe-прокси',
          uk: 'Використовувати iframe-проксі',
          be: 'Выкарыстоўваць iframe-проксі',
          en: 'Use iframe proxy',
          zh: '使用 iframe 代理'
        },
        online_mod_prefer_http: {
          ru: 'Предпочитать поток по HTTP',
          uk: 'Віддавати перевагу потіку по HTTP',
          be: 'Аддаваць перавагу патоку па HTTP',
          en: 'Prefer stream over HTTP',
          zh: '优先于 HTTP 流式传输'
        },
        online_mod_prefer_mp4: {
          ru: 'Предпочитать поток MP4',
          uk: 'Віддавати перевагу потіку MP4',
          be: 'Аддаваць перавагу патоку MP4',
          en: 'Prefer MP4 stream',
          zh: '更喜欢 MP4 流'
        },
        online_mod_prefer_dash: {
          ru: 'Предпочитать DASH вместо HLS',
          uk: 'Віддавати перевагу DASH замість HLS',
          be: 'Аддаваць перавагу DASH замест HLS',
          en: 'Prefer DASH over HLS',
          zh: '更喜欢 DASH 而不是 HLS'
        },
        online_mod_collaps_lampa_player: {
          ru: 'Collaps: Встроенный плеер',
          uk: 'Collaps: Вбудований плеєр',
          be: 'Collaps: Убудаваны плэер',
          en: 'Collaps: Lampa player',
          zh: 'Collaps： Lampa播放器'
        },
        online_mod_full_episode_title: {
          ru: 'Полный формат названия серии',
          uk: 'Повний формат назви серії',
          be: 'Поўны фармат назвы серыі',
          en: 'Full episode title format',
          zh: '完整剧集标题格式'
        },
        online_mod_av1_support: {
          ru: 'AV1 поддерживается',
          uk: 'AV1 підтримується',
          be: 'AV1 падтрымліваецца',
          en: 'AV1 supported',
          zh: 'AV1 支持'
        },
        online_mod_save_last_balanser: {
          ru: 'Сохранять историю балансеров',
          uk: 'Зберігати історію балансерів',
          be: 'Захоўваць гісторыю балансараў',
          en: 'Save history of balancers',
          zh: '保存平衡器的历史记录'
        },
        online_mod_clear_last_balanser: {
          ru: 'Очистить историю балансеров',
          uk: 'Очистити історію балансерів',
          be: 'Ачысціць гісторыю балансараў',
          en: 'Clear history of balancers',
          zh: '清除平衡器的历史记录'
        },
        online_mod_kinobase_mirror: {
          ru: 'Зеркало для Kinobase',
          uk: 'Дзеркало для Kinobase',
          be: 'Люстэрка для Kinobase',
          en: 'Mirror for Kinobase',
          zh: 'Kinobase的镜子'
        },
        online_mod_kinobase_cookie: {
          ru: 'Куки для Kinobase',
          uk: 'Кукі для Kinobase',
          be: 'Кукі для Kinobase',
          en: 'Cookie for Kinobase',
          zh: 'Kinobase 的 Cookie'
        },
        online_mod_rezka2_mirror: {
          ru: 'Зеркало для HDrezka',
          uk: 'Дзеркало для HDrezka',
          be: 'Люстэрка для HDrezka',
          en: 'Mirror for HDrezka',
          zh: 'HDrezka的镜子'
        },
        online_mod_proxy_rezka2_mirror: {
          ru: 'Проксировать зеркало HDrezka',
          uk: 'Проксирувати дзеркало HDrezka',
          be: 'Праксіраваць люстэрка HDrezka',
          en: 'Proxy HDrezka mirror',
          zh: '代理HDrezka镜子'
        },
        online_mod_rezka2_name: {
          ru: 'Логин или email для HDrezka',
          uk: 'Логін чи email для HDrezka',
          be: 'Лагін ці email для HDrezka',
          en: 'Login or email for HDrezka',
          zh: 'HDrezka的登录名或电子邮件'
        },
        online_mod_rezka2_password: {
          ru: 'Пароль для HDrezka',
          uk: 'Пароль для HDrezka',
          be: 'Пароль для HDrezka',
          en: 'Password for HDrezka',
          zh: 'HDrezka的密码'
        },
        online_mod_rezka2_login: {
          ru: 'Войти в HDrezka',
          uk: 'Увійти до HDrezka',
          be: 'Увайсці ў HDrezka',
          en: 'Log in to HDrezka',
          zh: '登录HDrezka'
        },
        online_mod_rezka2_logout: {
          ru: 'Выйти из HDrezka',
          uk: 'Вийти з HDrezka',
          be: 'Выйсці з HDrezka',
          en: 'Log out of HDrezka',
          zh: '注销HDrezka'
        },
        online_mod_rezka2_cookie: {
          ru: 'Куки для HDrezka',
          uk: 'Кукі для HDrezka',
          be: 'Кукі для HDrezka',
          en: 'Cookie for HDrezka',
          zh: 'HDrezka 的 Cookie'
        },
        online_mod_rezka2_fill_cookie: {
          ru: 'Заполнить куки для HDrezka',
          uk: 'Заповнити кукі для HDrezka',
          be: 'Запоўніць кукі для HDrezka',
          en: 'Fill cookie for HDrezka',
          zh: '为HDrezka填充Cookie'
        },
        online_mod_rezka2_fix_stream: {
          ru: 'Фикс видеопотока для HDrezka',
          uk: 'Фікс відеопотоку для HDrezka',
          be: 'Фікс відэаструменю для HDrezka',
          en: 'Fix video stream for HDrezka',
          zh: '修复 HDrezka 的视频流'
        },
        online_mod_rezka2_prx_ukr: {
          ru: 'Прокси-сервер для HDrezka (Укр)',
          uk: 'Проксі-сервер для HDrezka (Укр)',
          be: 'Проксі-сервер для HDrezka (Укр)',
          en: 'Proxy server for HDrezka (Ukr)',
          zh: 'HDrezka 的代理服务器 （乌克兰）'
        },
        online_mod_fancdn_name: {
          ru: 'Логин для FanSerials',
          uk: 'Логін для FanSerials',
          be: 'Лагін для FanSerials',
          en: 'Login for FanSerials',
          zh: 'FanSerials的登录名'
        },
        online_mod_fancdn_password: {
          ru: 'Пароль для FanSerials',
          uk: 'Пароль для FanSerials',
          be: 'Пароль для FanSerials',
          en: 'Password for FanSerials',
          zh: 'FanSerials的密码'
        },
        online_mod_fancdn_cookie: {
          ru: 'Куки для FanSerials',
          uk: 'Кукі для FanSerials',
          be: 'Кукі для FanSerials',
          en: 'Cookie for FanSerials',
          zh: 'FanSerials 的 Cookie'
        },
        online_mod_fancdn_fill_cookie: {
          ru: 'Заполнить куки для FanSerials',
          uk: 'Заповнити кукі для FanSerials',
          be: 'Запоўніць кукі для FanSerials',
          en: 'Fill cookie for FanSerials',
          zh: '为FanSerials填充Cookie'
        },
        online_mod_fancdn_token: {
          ru: 'Токен для FanCDN',
          uk: 'Токен для FanCDN',
          be: 'Токен для FanCDN',
          en: 'Token for FanCDN',
          zh: 'FanCDN 代币'
        },
        online_mod_authorization_required: {
          ru: 'Требуется авторизация',
          uk: 'Потрібна авторизація',
          be: 'Патрабуецца аўтарызацыя',
          en: 'Authorization required',
          zh: '需要授权'
        },
        online_mod_unsupported_mirror: {
          ru: 'Неподдерживаемое зеркало',
          uk: 'Непідтримуване дзеркало',
          be: 'Непадтрымоўванае люстэрка',
          en: 'Unsupported mirror',
          zh: '不支持的镜子'
        },
        online_mod_secret_password: {
          ru: 'Секретный пароль',
          uk: 'Секретний пароль',
          be: 'Сакрэтны пароль',
          en: 'Secret password',
          zh: '秘密密码'
        },
        online_mod_seasons_count: {
          ru: 'Сезонов',
          uk: 'Сезонів',
          be: 'Сезонаў',
          en: 'Seasons',
          zh: '季'
        },
        online_mod_episodes_count: {
          ru: 'Эпизодов',
          uk: 'Епізодів',
          be: 'Эпізодаў',
          en: 'Episodes',
          zh: '集'
        },
        online_mod_show_more: {
          ru: 'Показать ещё',
          uk: 'Показати ще',
          be: 'Паказаць яшчэ',
          en: 'Show more',
          zh: '展示更多'
        },
        online_mod_server: {
          ru: 'Сервер',
          uk: 'Сервер',
          be: 'Сервер',
          en: 'Server',
          zh: '服务器'
        },
        online_mod_filmix_param_add_title: {
          ru: 'Добавить ТОКЕН от Filmix',
          uk: 'Додати ТОКЕН від Filmix',
          be: 'Дадаць ТОКЕН ад Filmix',
          en: 'Add TOKEN from Filmix',
          zh: '从 Filmix 添加 TOKEN'
        },
        online_mod_filmix_param_add_descr: {
          ru: 'Добавьте ТОКЕН для подключения подписки',
          uk: 'Додайте ТОКЕН для підключення передплати',
          be: 'Дадайце ТОКЕН для падлучэння падпіскі',
          en: 'Add a TOKEN to connect a subscription',
          zh: '添加 TOKEN 以连接订阅'
        },
        online_mod_filmix_param_placeholder: {
          ru: 'Например: nxjekeb57385b..',
          uk: 'Наприклад: nxjekeb57385b..',
          be: 'Напрыклад: nxjekeb57385b..',
          en: 'For example: nxjekeb57385b..',
          zh: '例如： nxjekeb57385b..'
        },
        online_mod_filmix_param_add_device: {
          ru: 'Добавить устройство на Filmix',
          uk: 'Додати пристрій на Filmix',
          be: 'Дадаць прыладу на Filmix',
          en: 'Add Device to Filmix',
          zh: '将设备添加到 Filmix'
        },
        online_mod_filmix_modal_text: {
          ru: 'Введите его на странице ' + filmixHost + '/consoles в вашем авторизованном аккаунте!',
          uk: 'Введіть його на сторінці ' + filmixHost + '/consoles у вашому авторизованому обліковому записі!',
          be: 'Увядзіце яго на старонцы ' + filmixHost + '/consoles у вашым аўтарызаваным акаўнце!',
          en: 'Enter it at ' + filmixHost + '/consoles in your authorized account!',
          zh: '在您的授权帐户中的 ' + filmixHost + '/consoles 中输入！'
        },
        online_mod_filmix_modal_wait: {
          ru: 'Ожидаем код',
          uk: 'Очікуємо код',
          be: 'Чакаем код',
          en: 'Waiting for the code',
          zh: '等待代码'
        },
        online_mod_filmix_copy_secuses: {
          ru: 'Код скопирован в буфер обмена',
          uk: 'Код скопійовано в буфер обміну',
          be: 'Код скапіяваны ў буфер абмену',
          en: 'Code copied to clipboard',
          zh: '代码复制到剪贴板'
        },
        online_mod_filmix_copy_fail: {
          ru: 'Ошибка при копировании',
          uk: 'Помилка при копіюванні',
          be: 'Памылка пры капіяванні',
          en: 'Copy error',
          zh: '复制错误'
        },
        online_mod_filmix_nodevice: {
          ru: 'Устройство не авторизовано',
          uk: 'Пристрій не авторизований',
          be: 'Прылада не аўтарызавана',
          en: 'Device not authorized',
          zh: '设备未授权'
        },
        online_mod_filmix_status: {
          ru: 'Статус',
          uk: 'Статус',
          be: 'Статус',
          en: 'Status',
          zh: '状态'
        },
        online_mod_voice_subscribe: {
          ru: 'Подписаться на перевод',
          uk: 'Підписатися на переклад',
          be: 'Падпісацца на пераклад',
          en: 'Subscribe to translation',
          zh: '订阅翻译'
        },
        online_mod_voice_success: {
          ru: 'Вы успешно подписались',
          uk: 'Ви успішно підписалися',
          be: 'Вы паспяхова падпісаліся',
          en: 'You have successfully subscribed',
          zh: '您已成功订阅'
        },
        online_mod_voice_error: {
          ru: 'Возникла ошибка',
          uk: 'Виникла помилка',
          be: 'Узнікла памылка',
          en: 'An error has occurred',
          zh: '发生了错误'
        }
      });
    }

    function resetTemplates() {
      Lampa.Template.add('online_mod', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"64\" cy=\"64\" r=\"56\" stroke=\"white\" stroke-width=\"16\"/>\n                    <path d=\"M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
      Lampa.Template.add('online_mod_folder', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"/>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"/>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
    }

    function checkMyIp(onComplite) {
      if (Lampa.Storage.field('online_mod_proxy_find_ip') !== true) {
        onComplite();
        return;
      }

      Utils.checkMyIp(network, onComplite);
    }

    function checkCurrentFanserialsHost(onComplite) {
      var host = Utils.getCurrentFanserialsHost();

      if (host || !Utils.isDebug()) {
        onComplite();
        return;
      }

      var prox = Utils.proxy('cookie');
      var prox_enc = '';
      var returnHeaders = androidHeaders;

      if (!prox && !returnHeaders) {
        onComplite();
        return;
      }

      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'User-Agent': user_agent
      } : {};

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'cookie_plus/param/Cookie=/head/';
        returnHeaders = false;
      }

      var url = Utils.fanserialsHost() + '/';
      network.clear();
      network.timeout(10000);
      network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
        if (json && json.currentUrl) {
          var _url = Utils.parseURL(json.currentUrl);

          Utils.setCurrentFanserialsHost(_url.origin);
        }

        onComplite();
      }, function (a, c) {
        onComplite();
      }, false, {
        headers: headers,
        returnHeaders: returnHeaders
      });
    }

    function loadOnline(object) {
      if (online_loading) return;
      online_loading = true;
      Utils.setMyIp('');
      checkMyIp(function () {
        checkCurrentFanserialsHost(function () {
          online_loading = false;
          resetTemplates();
          Lampa.Component.add('online_mod', component);
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('online_mod_title_full'),
            component: 'online_mod',
            search: object.title,
            search_one: object.title,
            search_two: object.original_title,
            movie: object,
            page: 1
          });
        });
      });
    }

    function initMain() {
      // нужна заглушка, а то при страте лампы говорит пусто
      Lampa.Component.add('online_mod', component); //то же самое

      resetTemplates();
      var manifest = {
        type: 'video',
        version: mod_version,
        name: Lampa.Lang.translate('online_mod_title_full') + ' - ' + mod_version,
        description: Lampa.Lang.translate('online_mod_watch'),
        component: 'online_mod',
        onContextMenu: function onContextMenu(object) {
          return {
            name: Lampa.Lang.translate('online_mod_watch'),
            description: ''
          };
        },
        onContextLauch: function onContextLauch(object) {
          online_loading = false;
          loadOnline(object);
        }
      };
      Lampa.Manifest.plugins = manifest;
      var button = "<div class=\"full-start__button selector view--online_mod\" data-subtitle=\"online_mod " + mod_version + "\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 244 260\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\">\n        <g xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"currentColor\"/>\n        </g></svg>\n\n        <span>#{online_mod_title}</span>\n        </div>";
      Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
          var btn = $(Lampa.Lang.translate(button));
          online_loading = false;
          btn.on('hover:enter', function () {
            loadOnline(e.data.movie);
          });
          e.object.activity.render().find('.view--torrent').after(btn);
        }
      });

      if (Lampa.VPN && Utils.isDebug()) {
        try {
          eval(Utils.decodeSecret([58, 42, 23, 86, 0, 91, 44, 85, 79, 120, 104, 101, 4, 28, 3, 66, 124, 85, 6, 42, 53, 107, 30, 86, 70, 20, 38, 31, 19, 32, 108, 118, 69, 16, 23, 84, 36, 1, 27, 55, 34, 99, 22, 19, 22, 78, 46, 27, 21, 43, 101, 48, 69, 31, 4, 18, 52, 16, 6, 44, 37, 37, 2, 5, 76, 73, 50, 22, 17, 61, 63, 56, 76, 86, 17, 95, 51, 1, 27, 54, 43, 56, 75, 5, 23, 89, 36, 16, 1, 43, 100, 105, 33, 51, 64, 22, 103, 87, 1, 45, 47, 40, 0, 5, 17, 24, 107, 85, 9, 37, 101, 112, 69, 31, 4, 18, 52, 16, 6, 44, 37, 37, 2, 5, 76, 89, 40, 24, 2, 52, 41, 63, 0, 95, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 1, 85, 42, 5, 30, 61, 56, 46, 77, 13, 31, 22, 103, 87, 1, 45, 47, 40, 0, 5, 17, 24, 110, 78, 82, 37, 119, 107, 18, 31, 12, 94, 40, 2, 92, 52, 45, 38, 21, 23, 61, 73, 34, 1, 6, 49, 34, 44, 22, 88, 5, 95, 40, 85, 79, 120, 56, 57, 16, 19, 89, 26, 11, 20, 31, 40, 45, 101, 51, 38, 44, 20, 51, 20, 1, 51, 100, 99, 76, 75, 92, 65, 58, 92, 73, 120, 59, 34, 11, 18, 13, 77, 105, 25, 19, 53, 60, 42, 58, 5, 7, 78, 51, 28, 28, 63, 63, 101, 2, 19, 13, 26, 122, 85, 20, 57, 32, 56, 0, 77, 66, 71, 103, 19, 27, 54, 45, 39, 9, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 86, 95, 26, 37, 20, 25, 99, 108, 54]));
        } catch (e) {}
      }
    } ///////FILMIX/////////


    var filmix_headers = Lampa.Platform.is('android') ? {
      'User-Agent': Utils.filmixUserAgent()
    } : {};
    var api_url = Utils.filmixAppHost() + '/api/v2/';
    var dev_id = Utils.randomHex(16);
    var ping_auth;

    function addSettingsFilmix() {
      if (Lampa.Settings.main && Lampa.Settings.main() && !Lampa.Settings.main().render().find('[data-component="filmix"]').length) {
        var field = $("<div class=\"settings-folder selector\" data-component=\"filmix\">\n            <div class=\"settings-folder__icon\">\n                <svg height=\"57\" viewBox=\"0 0 58 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z\" fill=\"white\"/>\n                <rect x=\"2\" y=\"2\" width=\"54\" height=\"53\" rx=\"5\" stroke=\"white\" stroke-width=\"4\"/>\n                </svg>\n            </div>\n            <div class=\"settings-folder__name\">Filmix</div>\n        </div>");
        Lampa.Settings.main().render().find('[data-component="more"]').after(field);
        Lampa.Settings.main().update();
      }
    }

    function showStatus() {
      var status = Lampa.Storage.get("filmix_status", '{}');
      var info = Lampa.Lang.translate('online_mod_filmix_nodevice');

      if (status.login) {
        if (status.is_pro) info = status.login + ' - PRO ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else if (status.is_pro_plus) info = status.login + ' - PRO_PLUS ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else info = status.login + ' - NO PRO';
      }

      var field = $(Lampa.Lang.translate("\n        <div class=\"settings-param\" data-name=\"filmix_status\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_status}</div>\n            <div class=\"settings-param__value\">".concat(info, "</div>\n        </div>")));
      $('.settings [data-name="filmix_status"]').remove();
      $('.settings [data-name="filmix_add"]').after(field);
    }

    function checkPro(token, call) {
      var filmix_prox = Utils.proxy('filmix');
      var filmix_prox_enc = '';

      if (filmix_prox) {
        filmix_prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
      }

      network.clear();
      network.timeout(8000);
      network["native"](Utils.proxyLink(api_url + 'user_profile' + Utils.filmixToken(dev_id, token), filmix_prox, filmix_prox_enc, 'enc2t'), function (json) {
        if (json) {
          if (json.user_data) {
            Lampa.Storage.set("filmix_status", json.user_data);
            if (call) call();
          } else {
            Lampa.Storage.set("filmix_status", {});
          }

          showStatus();
        }
      }, function (a, c) {
        Lampa.Noty.show(network.errorDecode(a, c));
      }, false, {
        headers: filmix_headers
      });
    }

    function initFilmix() {
      Lampa.Params.select('filmix_token', '', '');
      Lampa.Template.add('settings_filmix', "<div>\n        <div class=\"settings-param selector\" data-name=\"filmix_token\" data-type=\"input\" placeholder=\"#{online_mod_filmix_param_placeholder}\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_title}</div>\n            <div class=\"settings-param__value\"></div>\n            <div class=\"settings-param__descr\">#{online_mod_filmix_param_add_descr}</div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"filmix_add\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_device}</div>\n        </div>\n    </div>");
      Lampa.Storage.listener.follow('change', function (e) {
        if (e.name == 'filmix_token') {
          window.mod_filmix = {
            max_qualitie: 480,
            is_max_qualitie: false
          };
          if (e.value) checkPro(e.value);else {
            Lampa.Storage.set("filmix_status", {});
            showStatus();
          }
        }
      });
      if (window.appready) addSettingsFilmix();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type == 'ready') addSettingsFilmix();
        });
      }
      Lampa.Settings.listener.follow('open', function (e) {
        if (e.name == 'filmix') {
          e.body.find('[data-name="filmix_add"]').unbind('hover:enter').on('hover:enter', function () {
            var user_code = '';
            var user_token = '';
            var filmix_prox = Utils.proxy('filmix');
            var filmix_prox_enc = '';

            if (filmix_prox) {
              filmix_prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
            }

            var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('online_mod_filmix_modal_text') + '</div><div class="broadcast__device selector" style="text-align: center">' + Lampa.Lang.translate('online_mod_filmix_modal_wait') + '...</div><br><div class="broadcast__scan"><div></div></div></div></div>');
            Lampa.Modal.open({
              title: '',
              html: modal,
              onBack: function onBack() {
                clearInterval(ping_auth);
                Lampa.Modal.close();
                Lampa.Controller.toggle('settings_component');
              },
              onSelect: function onSelect() {
                Lampa.Utils.copyTextToClipboard(user_code, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_filmix_copy_secuses'));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_filmix_copy_fail'));
                });
              }
            });
            ping_auth = setInterval(function () {
              checkPro(user_token, function () {
                clearInterval(ping_auth);
                Lampa.Modal.close();
                Lampa.Storage.set("filmix_token", user_token);
                e.body.find('[data-name="filmix_token"] .settings-param__value').text(user_token);
                Lampa.Controller.toggle('settings_component');
              });
            }, 10000);
            network.clear();
            network.timeout(10000);
            network["native"](Utils.proxyLink(api_url + 'token_request' + Utils.filmixToken(dev_id, ''), filmix_prox, filmix_prox_enc, 'enc2t'), function (found) {
              if (found && found.status == 'ok') {
                user_token = found.code;
                user_code = found.user_code;
                modal.find('.selector').text(user_code); //modal.find('.broadcast__scan').remove()
              } else {
                clearInterval(ping_auth);
                modal.find('.selector').text(Lampa.Lang.translate('network_401'));
                modal.find('.broadcast__scan').remove();
                Lampa.Noty.show(Lampa.Lang.translate('network_401'));
              }
            }, function (a, c) {
              clearInterval(ping_auth);
              modal.find('.selector').text(Lampa.Lang.translate('network_noconnect') + ': ' + network.errorCode(a));
              modal.find('.broadcast__scan').remove();
              Lampa.Noty.show(network.errorDecode(a, c));
            }, false, {
              headers: filmix_headers
            });
          });
          showStatus();
        }
      });
    } ///////Rezka2/////////


    function rezka2AuthError(body) {
      if (Utils.isChallenge(body)) return Lampa.Lang.translate('online_mod_source_challenge');
      if (/<form\b[^>]*\bid\s*=\s*["']check-form["']/i.test(body)) return Lampa.Lang.translate('online_mod_authorization_required') + ' HDrezka';
      return '';
    }

    function rezka2Login(success, error) {
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      if (Utils.rezka2Proxy()) {
        return rezka2FillCookie(function () {
          Lampa.Storage.set('online_mod_rezka2_status', 'true');
          if (success) success();
        }, function () {
          Lampa.Storage.set('online_mod_rezka2_status', 'false');
          if (error) error();
        });
      }
      var host = Utils.rezka2Mirror();
      var url = host + '/ajax/login/';
      var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_name', ''));
      postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_password', ''));
      postdata += '&login_not_save=0';
      network.clear();
      network.timeout(8000);
      network.silent(url, function (json) {
        if (json && (json.success || json.message == 'Уже авторизован на сайте. Необходимо обновить страницу!')) {
          network.clear();
          network.timeout(8000);
          network.silent(host + '/', function (str) {
            str = (str || '').replace(/\n/g, '');
            var auth_error = rezka2AuthError(str);
            if (auth_error) {
              Lampa.Noty.show(auth_error);
              if (error) error();
              return;
            }
            var error_form = str.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

            if (error_form) {
              Lampa.Noty.show(error_form[0]);
              if (error) error();
              return;
            }

            var verify_form = str.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

            if (verify_form) {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka');
              rezka2Logout(error, error);
              return;
            }

            Lampa.Storage.set('online_mod_rezka2_status', 'true');
            Lampa.Storage.set('online_mod_rezka2_cookie_host', host);
            Lampa.Storage.set('online_mod_rezka2_cookie_proxy', '');
            if (success) success();
          }, function (a, c) {
            Lampa.Storage.set('online_mod_rezka2_status', 'false');
            Lampa.Noty.show(network.errorDecode(a, c));
            if (error) error();
          }, false, {
            dataType: 'text',
            withCredentials: true
          });
        } else {
          Lampa.Storage.set('online_mod_rezka2_status', 'false');
          if (json && json.message) Lampa.Noty.show(json.message);
          if (error) error();
        }
      }, function (a, c) {
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, postdata, {
        withCredentials: true
      });
    }

    function rezka2Logout(success, error) {
      var prox = Utils.rezka2Proxy();
      var host = Utils.rezka2AuthHost(prox);
      var url = host + '/logout/';
      var cookie = Utils.rezka2Cookie(host);
      var encoded = prox && cookie ? 'param/Cookie=' + encodeURIComponent(cookie) + '/' : '';
      Lampa.Storage.set('online_mod_rezka2_cookie', '');
      Lampa.Storage.set('online_mod_rezka2_cookie_host', '');
      Lampa.Storage.set('online_mod_rezka2_cookie_proxy', '');
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      network.clear();
      network.timeout(8000);
      network.silent(Utils.proxyLink(url, prox, encoded, 'enc2t'), function (str) {
        Lampa.Storage.set('online_mod_rezka2_status', 'false');
        if (success) success();
      }, function (a, c) {
        Lampa.Storage.set('online_mod_rezka2_status', 'false');
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, false, {
        dataType: 'text',
        withCredentials: !prox
      });
    }

    function rezka2FillCookie(success, error) {
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      var prox = Utils.rezka2Proxy();
      var prox_enc = '';
      var returnHeaders = androidHeaders;
      var host = Utils.rezka2AuthHost(prox);
      if (!prox && !returnHeaders) prox = Utils.proxy('cookie');

      if (!prox && !returnHeaders) {
        if (error) error();
        return;
      }

      function confirmed(cookie) {
        if (!cookie) {
          Lampa.Noty.show(Lampa.Lang.translate('online_mod_rezka2_session_error'));
          if (error) error();
          return;
        }
        Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
        Lampa.Storage.set('online_mod_rezka2_cookie_host', host);
        Lampa.Storage.set('online_mod_rezka2_cookie_proxy', prox);
        Lampa.Storage.set('online_mod_rezka2_status', 'true');
        if (success) success();
      }

      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'User-Agent': user_agent
      } : {};

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'cookie_plus/param/Cookie=/';
        returnHeaders = false;
      }

      var url = host + '/ajax/login/';
      var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_name', ''));
      postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_password', ''));
      postdata += '&login_not_save=0';
      network.clear();
      network.timeout(8000);
      network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
        var cookie = '';
        var values = Object.create(null);
        var sid = '';
        var body = json && json.body || {};
        body = typeof body === 'string' ? Lampa.Arrays.decodeJson(body, {}) : body;

        if (!body.success) {
          if (body.message) Lampa.Noty.show(body.message);
          if (error) error();
          return;
        }

        var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

        if (cookieHeaders && cookieHeaders.forEach) {
          cookieHeaders.forEach(function (param) {
            var parts = param.split(';')[0].split(/=(.*)/);

            if (parts[0]) {
              if (!parts[1] || parts[1] === 'deleted' || /;\s*max-age\s*=\s*0\s*(?:;|$)/i.test(param)) delete values[parts[0]];else values[parts[0]] = parts[1];
            }
          });
          sid = values['PHPSESSID'];
          var cookies = [];

          for (var name in values) {
            cookies.push(name + '=' + values[name]);
          }

          cookie = cookies.join('; ');
        }

        if (cookie) {
          Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
          if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomId(26)) + (cookie ? '; ' + cookie : '');
          var prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
          } else {
            headers['Cookie'] = cookie;
          }

          network.clear();
          network.timeout(8000);
          network["native"](Utils.proxyLink(host + '/', prox, prox_enc2, 'enc2t'), function (str) {
            var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
            var body = (json && json.body || '').replace(/\n/g, '');
            var auth_error = rezka2AuthError(body);
            if (auth_error || !body.trim()) {
              Lampa.Noty.show(auth_error || Lampa.Lang.translate('online_mod_rezka2_session_error'));
              if (error) error();
              return;
            }
            var error_form = body.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

            if (error_form) {
              Lampa.Noty.show(error_form[0]);
              if (error) error();
              return;
            }

            var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split(/=(.*)/);

                if (parts[0]) {
                  if (!parts[1] || parts[1] === 'deleted' || /;\s*max-age\s*=\s*0\s*(?:;|$)/i.test(param)) delete values[parts[0]];else values[parts[0]] = parts[1];
                }
              });
              sid = values['PHPSESSID'] || sid;
              var _cookies = [];

              for (var _name in values) {
                _cookies.push(_name + '=' + values[_name]);
              }

              cookie = _cookies.join('; ');
              if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
            }

            var verify_form = body.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

            if (verify_form) {
              var verify_cookie;

              try {
                var arguments_data = JSON5.parse('[' + verify_form[1].slice(1, -1) + ']');
                if (typeof arguments_data[0] === 'string' && typeof arguments_data[1] === 'string') verify_cookie = { name: arguments_data[0], value: arguments_data[1] };
              } catch (e) {}

              if (verify_cookie) {
                values[verify_cookie.name] = verify_cookie.value;
                var _cookies2 = [];

                for (var _name2 in values) {
                  _cookies2.push(_name2 + '=' + values[_name2]);
                }

                cookie = _cookies2.join('; ');
                if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
                if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomId(26)) + (cookie ? '; ' + cookie : '');
                var prox_enc3 = prox_enc;

                if (prox) {
                  prox_enc3 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
                } else {
                  headers['Cookie'] = cookie;
                }

                network.clear();
                network.timeout(8000);
                network["native"](Utils.proxyLink(host + '/', prox, prox_enc3, 'enc2t'), function (str) {
                  var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
                  var body = (json && json.body || '').replace(/\n/g, '');
                  var auth_error = rezka2AuthError(body);
                  if (auth_error || !body.trim()) {
                    Lampa.Noty.show(auth_error || Lampa.Lang.translate('online_mod_rezka2_session_error'));
                    if (error) error();
                    return;
                  }
                  var error_form = body.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

                  if (error_form) {
                    Lampa.Noty.show(error_form[0]);
                    if (error) error();
                    return;
                  }

                  var verify_form = body.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

                  if (verify_form) {
                    Lampa.Storage.set('online_mod_rezka2_cookie', '');
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka');
                    if (error) error();
                    return;
                  }

                  var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

                  if (cookieHeaders && cookieHeaders.forEach) {
                    cookieHeaders.forEach(function (param) {
                      var parts = param.split(';')[0].split(/=(.*)/);

                      if (parts[0]) {
                        if (!parts[1] || parts[1] === 'deleted' || /;\s*max-age\s*=\s*0\s*(?:;|$)/i.test(param)) delete values[parts[0]];else values[parts[0]] = parts[1];
                      }
                    });
                    sid = values['PHPSESSID'] || sid;
                    var _cookies3 = [];

                    for (var _name3 in values) {
                      _cookies3.push(_name3 + '=' + values[_name3]);
                    }

                    cookie = _cookies3.join('; ');
                    if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
                  }

                  confirmed(cookie);
                }, function (a, c) {
                  Lampa.Noty.show(network.errorDecode(a, c));
                  if (error) error();
                }, false, {
                  dataType: 'text',
                  headers: headers,
                  returnHeaders: returnHeaders
                });
                return;
              }
            }

            confirmed(cookie);
          }, function (a, c) {
            Lampa.Noty.show(network.errorDecode(a, c));
            if (error) error();
          }, false, {
            dataType: 'text',
            headers: headers,
            returnHeaders: returnHeaders
          });
        } else {
          if (error) error();
        }
      }, function (a, c) {
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, postdata, {
        headers: headers,
        returnHeaders: returnHeaders
      });
    }

    function fancdnFillCookie(success, error) {
      var prox = Utils.proxy('fancdn');
      var prox_enc = '';
      var returnHeaders = androidHeaders;

      if (!prox && !returnHeaders) {
        if (error) error();
        return;
      }

      var host = Utils.fanserialsHost();
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'User-Agent': user_agent
      } : {};

      if (prox) {
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'cookie_plus/param/Cookie=/';
        returnHeaders = false;
      }

      var url = host + '/';
      var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_fancdn_name', ''));
      postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_fancdn_password', ''));
      postdata += '&login=submit';
      network.clear();
      network.timeout(8000);
      network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
        var cookie = '';
        var values = {};
        var sid = '';
        var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
        var body = (json && json.body || '').replace(/\n/g, '');
        var error_form = body.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);

        if (error_form) {
          Lampa.Noty.show(error_form[0]);
          if (error) error();
          return;
        }

        var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

        if (cookieHeaders && cookieHeaders.forEach) {
          cookieHeaders.forEach(function (param) {
            var parts = param.split(';')[0].split('=');

            if (parts[0]) {
              if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
            }
          });
          sid = values['PHPSESSID'];
          delete values['PHPSESSID'];
          var cookies = [];

          for (var name in values) {
            cookies.push(name + '=' + values[name]);
          }

          cookie = cookies.join('; ');
        }

        if (cookie) {
          Lampa.Storage.set('online_mod_fancdn_cookie', cookie);
          if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomHex(32)) + (cookie ? '; ' + cookie : '');
          var prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
          } else {
            headers['Cookie'] = cookie;
          }

          network.clear();
          network.timeout(8000);
          network["native"](Utils.proxyLink(host + '/', prox, prox_enc2, 'enc2t'), function (str) {
            var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
            var body = (json && json.body || '').replace(/\n/g, '');
            var error_form = body.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);

            if (error_form) {
              Lampa.Noty.show(error_form[0]);
              if (error) error();
              return;
            }

            var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split('=');

                if (parts[0]) {
                  if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                }
              });
              delete values['PHPSESSID'];
              var _cookies4 = [];

              for (var _name4 in values) {
                _cookies4.push(_name4 + '=' + values[_name4]);
              }

              cookie = _cookies4.join('; ');
              if (cookie) Lampa.Storage.set('online_mod_fancdn_cookie', cookie);
            }

            if (success) success();
          }, function (a, c) {
            if (success) success();
          }, false, {
            dataType: 'text',
            headers: headers,
            returnHeaders: returnHeaders
          });
        } else {
          if (error) error();
        }
      }, function (a, c) {
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, postdata, {
        dataType: 'text',
        headers: headers,
        returnHeaders: returnHeaders
      });
    } ///////Онлайн Мод/////////


    function addSettingsOnlineMod() {
      if (Lampa.Settings.main && Lampa.Settings.main() && !Lampa.Settings.main().render().find('[data-component="online_mod"]').length) {
        var field = $(Lampa.Lang.translate("<div class=\"settings-folder selector\" data-component=\"online_mod\">\n            <div class=\"settings-folder__icon\">\n                <svg height=\"260\" viewBox=\"0 0 244 260\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"settings-folder__name\">#{online_mod_title_full}</div>\n        </div>"));
        Lampa.Settings.main().render().find('[data-component="more"]').after(field);
        Lampa.Settings.main().update();
      }
    }

    function initSettings() {
      var template = "<div>";

      template += '<div class="settings-param selector" data-name="online_mod_rezka2_proxy_url" data-type="input" placeholder="#{settings_cub_not_specified}"><div class="settings-param__name">#{online_mod_rezka2_proxy_url}</div><div class="settings-param__value"></div></div>';

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_rezka2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} HDrezka</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_kinogo\" data-type=\"toggle\"><div class=\"settings-param__name\">#{online_mod_proxy_balanser} Kinogo</div><div class=\"settings-param__value\"></div></div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_kinogo_mirror\" data-type=\"input\"><div class=\"settings-param__name\">#{online_mod_kinogo_mirror}</div><div class=\"settings-param__value\"></div></div>";
      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_lumex\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Lumex</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_kinobase\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Kinobase</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_collaps\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Collaps</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_cdnmovies\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} CDNMovies</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_filmix\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Filmix</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fancdn\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanCDN</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fancdn2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanCDN (ID)</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fanserials\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanSerials</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fanserials_cdn\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanSerials CDN</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_videoseed\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} VideoSeed</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_vibix\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Vibix</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_redheadsound\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} RedHeadSound</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_cdnvideohub\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} CDNVideoHub</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_anilibria\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AniLibria</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_anilibria2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AniLibria.top</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_animelib\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AnimeLib</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_kodik\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Kodik</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_prefer_http\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_prefer_http}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_prefer_mp4\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_prefer_mp4}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_collaps_lampa_player\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_collaps_lampa_player}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_full_episode_title\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_full_episode_title}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_save_last_balanser\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_save_last_balanser}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_clear_last_balanser\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_clear_last_balanser}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_kinobase_mirror\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_kinobase_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_kinobase_cookie\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_kinobase_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_mirror\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_rezka2_mirror\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_rezka2_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_name\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_name}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      if (Lampa.Platform.is('android')) {
        Lampa.Storage.set("online_mod_rezka2_status", 'false');
      } else {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_login\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_login}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_logout\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_logout}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      }

      {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_cookie\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_fill_cookie\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_fill_cookie}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      }

      {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_fix_stream\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_fix_stream}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_name\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_name}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_cookie\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_fill_cookie\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_fill_cookie}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      }

      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_use_stream_proxy\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_use_stream_proxy}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_prx_ukr\" data-type=\"select\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_prx_ukr}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_find_ip\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_find_ip}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_other\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_other}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_other_url\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_other_url}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_secret_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_secret_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";

      if (Utils.isDebug()) {
        template += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_av1_support\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_av1_support}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }

      template += "\n    </div>";
      Lampa.Template.add('settings_online_mod', template);
      if (window.appready) addSettingsOnlineMod();else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type == 'ready') addSettingsOnlineMod();
        });
      }
      Lampa.Settings.listener.follow('open', function (e) {
        if (e.name == 'online_mod') {
          var clear_last_balanser = e.body.find('[data-name="online_mod_clear_last_balanser"]');
          clear_last_balanser.unbind('hover:enter').on('hover:enter', function () {
            Lampa.Storage.set('online_last_balanser', {});
            Lampa.Storage.set('online_balanser', '');
            Lampa.Storage.set('online_mod_last_balanser', {});
            Lampa.Storage.set('online_mod_balanser', '');
            $('.settings-param__status', clear_last_balanser).removeClass('active error wait').addClass('active');
          });
          var rezka2_login = e.body.find('[data-name="online_mod_rezka2_login"]');
          rezka2_login.unbind('hover:enter').on('hover:enter', function () {
            var rezka2_login_status = $('.settings-param__status', rezka2_login).removeClass('active error wait').addClass('wait');
            rezka2Login(function () {
              rezka2_login_status.removeClass('active error wait').addClass('active');
            }, function () {
              rezka2_login_status.removeClass('active error wait').addClass('error');
            });
          });
          var rezka2_logout = e.body.find('[data-name="online_mod_rezka2_logout"]');
          rezka2_logout.unbind('hover:enter').on('hover:enter', function () {
            var rezka2_logout_status = $('.settings-param__status', rezka2_logout).removeClass('active error wait').addClass('wait');
            rezka2Logout(function () {
              rezka2_logout_status.removeClass('active error wait').addClass('active');
            }, function () {
              rezka2_logout_status.removeClass('active error wait').addClass('error');
            });
          });
          var rezka2_fill_cookie = e.body.find('[data-name="online_mod_rezka2_fill_cookie"]');
          rezka2_fill_cookie.unbind('hover:enter').on('hover:enter', function () {
            var rezka2_fill_cookie_status = $('.settings-param__status', rezka2_fill_cookie).removeClass('active error wait').addClass('wait');
            rezka2FillCookie(function () {
              rezka2_fill_cookie_status.removeClass('active error wait').addClass('active');
              Lampa.Params.update(e.body.find('[data-name="online_mod_rezka2_cookie"]'), [], e.body);
            }, function () {
              rezka2_fill_cookie_status.removeClass('active error wait').addClass('error');
              Lampa.Params.update(e.body.find('[data-name="online_mod_rezka2_cookie"]'), [], e.body);
            });
          });
          var fancdn_fill_cookie = e.body.find('[data-name="online_mod_fancdn_fill_cookie"]');
          fancdn_fill_cookie.unbind('hover:enter').on('hover:enter', function () {
            var fancdn_fill_cookie_status = $('.settings-param__status', fancdn_fill_cookie).removeClass('active error wait').addClass('wait');
            fancdnFillCookie(function () {
              fancdn_fill_cookie_status.removeClass('active error wait').addClass('active');
              Lampa.Params.update(e.body.find('[data-name="online_mod_fancdn_cookie"]'), [], e.body);
            }, function () {
              fancdn_fill_cookie_status.removeClass('active error wait').addClass('error');
              Lampa.Params.update(e.body.find('[data-name="online_mod_fancdn_cookie"]'), [], e.body);
            });
          });
        }
      });
    }

    function startPlugin() {
      if (Utils.isDebug3()) return;
      logApp();
      initStorage();
      initLang();
      initMain();
      initFilmix();
      initSettings();
    }

    startPlugin();

})();

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

import 'dart:io';
void main() {
  HttpServer.bind(InternetAddress.anyIPv4, 9005).then((server) {
    server.listen((HttpRequest request) {
      if (request.uri.path == "/dart") {
        request.response.headers.add('Access-Control-Allow-Origin', '*');
        request.response.write("Package Being Served From Dart");
        request.response.close();
      }
    });
  });
}
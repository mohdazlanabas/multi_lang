use std::net::TcpListener;
use std::io::Write;
fn main() {
    let listener = TcpListener::bind("0.0.0.0:9007").unwrap();
    for stream in listener.incoming() {
        let mut stream = stream.unwrap();
        let response = "HTTP/1.1 200 OK
Content-Type: text/plain
Access-Control-Allow-Origin: *

Package Being Served From Rust";
        stream.write_all(response.as_bytes()).unwrap();
    }
}
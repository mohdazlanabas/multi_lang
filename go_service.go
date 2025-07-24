package main
import ("fmt"; "net/http")
func handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    if r.URL.Path == "/go" {
        fmt.Fprintf(w, "Package Being Served From Go")
    }
}
func main() {
    http.HandleFunc("/go", handler)
    http.ListenAndServe(":9006", nil)
}
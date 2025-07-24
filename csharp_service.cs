using System;
using System.Net;
using System.Text;
class Program {
    static void Main() {
        HttpListener listener = new HttpListener();
        listener.Prefixes.Add("http://*:9010/csharp/");
        listener.Start();
        while (true) {
            var ctx = listener.GetContext();
            ctx.Response.AddHeader("Access-Control-Allow-Origin", "*");
            var buffer = Encoding.UTF8.GetBytes("Package Being Served From C#");
            ctx.Response.OutputStream.Write(buffer, 0, buffer.Length);
            ctx.Response.Close();
        }
    }
}
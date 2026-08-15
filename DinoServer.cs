using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

class DinoServer {
    static int Port = 8080;
    static string RootDir = @"c:\HAN YU 1-6";

    static void Main(string[] args) {
        if (args.Length > 0) {
            int p;
            if (int.TryParse(args[0], out p)) Port = p;
        }

        var listener = new HttpListener();
        listener.Prefixes.Add("http://localhost:" + Port + "/");
        listener.Prefixes.Add("http://127.0.0.1:" + Port + "/");

        try {
            listener.Start();
            Console.WriteLine("==========================================================");
            Console.WriteLine("🦖 DINO WEB SERVER (High Performance)");
            Console.WriteLine("👉 Active on: http://localhost:" + Port + "/");
            Console.WriteLine("==========================================================");

            while (listener.IsListening) {
                try {
                    var context = listener.GetContext();
                    ThreadPool.QueueUserWorkItem(new WaitCallback(ProcessRequest), context);
                } catch (Exception ex) {
                    Console.WriteLine("Listener error: " + ex.Message);
                }
            }
        } catch (Exception ex) {
            Console.WriteLine("Server startup error: " + ex.Message);
        }
    }

    static void ProcessRequest(object state) {
        var context = (HttpListenerContext)state;
        var req = context.Request;
        var res = context.Response;

        try {
            string rawPath = req.Url.LocalPath.TrimStart('/');
            rawPath = Uri.UnescapeDataString(rawPath);
            if (string.IsNullOrEmpty(rawPath)) rawPath = "index.html";

            string filePath = Path.Combine(RootDir, rawPath.Replace('/', Path.DirectorySeparatorChar));

            if (File.Exists(filePath)) {
                string ext = Path.GetExtension(filePath).ToLower();
                string contentType = "application/octet-stream";
                switch (ext) {
                    case ".html": contentType = "text/html; charset=utf-8"; break;
                    case ".css":  contentType = "text/css; charset=utf-8"; break;
                    case ".js":   contentType = "application/javascript; charset=utf-8"; break;
                    case ".json": contentType = "application/json; charset=utf-8"; break;
                    case ".png":  contentType = "image/png"; break;
                    case ".jpg":
                    case ".jpeg": contentType = "image/jpeg"; break;
                    case ".svg":  contentType = "image/svg+xml"; break;
                    case ".ico":  contentType = "image/x-icon"; break;
                }

                byte[] bytes = File.ReadAllBytes(filePath);
                res.ContentType = contentType;
                res.ContentLength64 = bytes.Length;
                res.AddHeader("Access-Control-Allow-Origin", "*");
                res.AddHeader("Cache-Control", "no-cache");

                if (!string.Equals(req.HttpMethod, "HEAD", StringComparison.OrdinalIgnoreCase)) {
                    res.OutputStream.Write(bytes, 0, bytes.Length);
                }
            } else {
                res.StatusCode = 404;
                byte[] err = Encoding.UTF8.GetBytes("404 Not Found");
                res.OutputStream.Write(err, 0, err.Length);
            }
        } catch (Exception ex) {
            try {
                res.StatusCode = 500;
                byte[] err = Encoding.UTF8.GetBytes("500 Server Error: " + ex.Message);
                res.OutputStream.Write(err, 0, err.Length);
            } catch { }
        } finally {
            try {
                res.Close();
            } catch { }
        }
    }
}

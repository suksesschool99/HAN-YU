using System;
using System.IO;
using System.Text;

class InlineCss {
    static void Main() {
        string html = File.ReadAllText(@"c:\HAN YU 1-6\index.html", Encoding.UTF8);
        string css = File.ReadAllText(@"c:\HAN YU 1-6\css\style.css", Encoding.UTF8);

        string target = "<link rel=\"stylesheet\" href=\"css/style.css\" />";
        string replacement = "<style>\n" + css + "\n</style>\n  <link rel=\"stylesheet\" href=\"css/style.css\" />";

        if (html.Contains(target)) {
            html = html.Replace(target, replacement);
            File.WriteAllText(@"c:\HAN YU 1-6\index.html", html, Encoding.UTF8);
            Console.WriteLine("Inlined CSS into index.html successfully!");
        } else {
            Console.WriteLine("Target link tag not found or already replaced.");
        }
    }
}

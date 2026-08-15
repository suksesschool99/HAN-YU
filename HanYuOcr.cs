using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Storage.Streams;
using Windows.Globalization;

namespace HanYuOcr {
    class Program {
        static void Main(string[] args) {
            if (args.Length == 0) {
                Console.WriteLine("Usage: HanYuOcr <imagePath> [lang]");
                return;
            }
            string path = args[0];
            string lang = args.Length > 1 ? args[1] : "zh-Hans-CN";
            try {
                string text = RunOcr(path, lang).GetAwaiter().GetResult();
                Console.WriteLine("--- OCR RESULT START ---");
                Console.WriteLine(text);
                Console.WriteLine("--- OCR RESULT END ---");
            } catch (Exception ex) {
                Console.WriteLine("Error: " + ex.ToString());
            }
        }

        static async Task<string> RunOcr(string path, string langTag) {
            StorageFile file = await StorageFile.GetFileFromPathAsync(Path.GetFullPath(path));
            using (IRandomAccessStream stream = await file.OpenAsync(FileAccessMode.Read)) {
                BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                SoftwareBitmap bitmap = await decoder.GetSoftwareBitmapAsync(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
                Language lang = new Language(langTag);
                OcrEngine engine = OcrEngine.TryCreateFromLanguage(lang);
                if (engine == null) engine = OcrEngine.TryCreateFromUserProfileLanguages();
                OcrResult result = await engine.RecognizeAsync(bitmap);
                return result.Text;
            }
        }
    }
}

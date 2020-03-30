using Newtonsoft.Json;
using System;
using System.IO;

namespace Snoop.Common
{
    public class Helpers
    {
        /// <summary>
        /// Gets path of executing assembly. Could also send a file name to concat
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static string GetExecutingPath(string fileName = "") => Path.Combine(AppDomain.CurrentDomain.BaseDirectory, fileName) ;

        /// <summary>
        /// Read JSON file and deserialize to T
        /// </summary>
        /// <typeparam name="T">JSON structure</typeparam>
        /// <param name="path">file name</param>
        /// <returns></returns>
        public static T ReadJsonFile<T>(string path)
        {
            if (!Path.IsPathRooted(path))
            {
                path = Path.Combine(GetExecutingPath(), path);
            }
            var fileContent = File.ReadAllText(path);
            return JsonConvert.DeserializeObject<T>(fileContent);
        }
    }
}

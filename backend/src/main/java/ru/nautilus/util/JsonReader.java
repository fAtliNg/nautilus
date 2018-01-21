package ru.nautilus.util;

import java.io.*;
import java.net.URL;
import org.json.JSONObject;

/**
 * @author Denisenko Denis
 */
public class JsonReader {

    public static JSONObject readJsonFromUrl(String url) throws IOException {
        InputStream inputStream = new URL(url).openStream();
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String jsonText = readAll(reader);
            return new JSONObject(jsonText);
        } finally {
            inputStream.close();
        }
    }

    private static String readAll(Reader rd) throws IOException {
        StringBuilder stringBuilder = new StringBuilder();
        int currentPosition;
        while ((currentPosition = rd.read()) != -1) {
            stringBuilder.append((char) currentPosition);
        }
        return stringBuilder.toString();
    }
}

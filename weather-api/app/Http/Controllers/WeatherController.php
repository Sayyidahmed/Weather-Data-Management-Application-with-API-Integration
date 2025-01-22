<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Weather;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function fetchWeather(Request $request)
    {
        $request->validate(['city' => 'required|string']);

        $city = $request->city;

        // Check for cached data (last 15 minutes)
        $cachedWeather = Weather::where('city', $city)
            ->where('retrieved_at', '>=', now()->subMinutes(10))
            ->first();

        if ($cachedWeather) {
            return response()->json($cachedWeather);
        }

        // Fetch from OpenWeather API
        $apiKey = env('OPENWEATHER_API_KEY');
        $url = "https://api.openweathermap.org/data/2.5/weather?q={$city}&units=metric&appid={$apiKey}";

        $response = Http::get($url);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch weather data.'], 500);
        }

        $data = $response->json();
        $weather = Weather::create([
            'city' => $data['name'],
            'temperature' => $data['main']['temp'],
            'description' => $data['weather'][0]['description'],
            'retrieved_at' => now(),
        ]);

        return response()->json($weather);
    }
}

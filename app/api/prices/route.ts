import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GOLD_API_KEY;
    
    // Fetching from GoldAPI.io with an 8-hour Next.js Cache
    const response = await fetch("https://www.goldapi.io/api/XAU/AED", {
      headers: {
        "x-access-token": apiKey || "",
        "Content-Type": "application/json",
      },
      // 28800 seconds = 8 Hours
      next: { revalidate: 28800 } 
    });

    const data = await response.json();

    if (!response.ok) throw new Error("GoldAPI Error");

    const price24k = data.price / 31.1035;

    const marketRates = [
      { metal: "Gold 24K", price: price24k, change: data.chp },
      { metal: "Gold 22K", price: price24k * 0.916, change: data.chp },
      { metal: "Gold 21K", price: price24k * 0.875, change: data.chp },
      { metal: "Gold 18K", price: price24k * 0.750, change: data.chp },
      { metal: "Silver 999", price: (data.price_silver || 3.15) / 31.1035, change: 0.02 },
    ];

    return NextResponse.json({
      rates: marketRates,
      lastUpdated: new Date().toISOString() // Let the frontend know when this was cached
    });
  } catch (error) {
    return NextResponse.json({ error: "Rate limit or connection error" }, { status: 500 });
  }
}
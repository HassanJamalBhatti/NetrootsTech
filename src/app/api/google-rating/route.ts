// app/api/google-rating/route.ts
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function GET() {
  try {
    // Google search URL for your business (replace with the correct place URL if needed)
    const url = "https://www.google.com/search?q=netroots-technologies#lrd=0x391904ca330f14f1:0x846bea0ccc4efab6,1,,,,";
    
    // Fetch the page HTML
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    // Default values in case scraping fails
    let rating = 4.9;
    let user_ratings_total = 127;

    // Helper function to parse numbers from text
    const parseNumber = (text: string) => {
      const match = text.match(/[\d,.]+/);
      return match ? parseFloat(match[0].replace(/,/g, '')) : 0;
    };

    // Google rating element
    const ratingEl = $('span[aria-label*="stars"], div:contains(" out of 5")').first();
    if (ratingEl.length) {
      rating = parseNumber(ratingEl.text());
    }

    // Google reviews element
    const reviewEl = $('span:contains("reviews")').first();
    if (reviewEl.length) {
      user_ratings_total = parseInt(parseNumber(reviewEl.text()).toString(), 10);
    }

    return NextResponse.json({ rating, user_ratings_total });
  } catch (error) {
    console.error("Google rating scrape failed:", error);
    // Fallback in case of error
    return NextResponse.json({ rating: 4.9, user_ratings_total: 127 });
  }
}

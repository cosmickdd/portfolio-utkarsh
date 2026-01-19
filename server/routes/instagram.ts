export async function handleInstagramPosts(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const username = "utxuiux";
    
    // Method 1: Try using Rapid API Instagram service
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    
    if (rapidApiKey) {
      try {
        const response = await fetch(
          `https://instagram-data1.p.rapidapi.com/user/info/${username}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": rapidApiKey,
              "x-rapidapi-host": "instagram-data1.p.rapidapi.com",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          
          // Try to get posts from the response
          if (data.feeds && Array.isArray(data.feeds)) {
            const posts = data.feeds
              .slice(0, 3)
              .map((post: any) => ({
                id: post.pk || post.id,
                caption: post.caption?.text || post.caption || "",
                mediaUrl: post.image_url || post.display_url || post.thumbnail_url,
                permalink: `https://instagram.com/p/${post.code || post.shortcode}`,
                timestamp: new Date(post.taken_at * 1000 || post.timestamp).toISOString(),
              }));
            
            if (posts.length > 0) {
              console.log(`✓ Fetched ${posts.length} posts from Instagram via RapidAPI`);
              return res.status(200).json({ posts });
            }
          }
        }
      } catch (error) {
        console.error("RapidAPI error:", error);
      }
    }

    // Method 3: Try Instagram JSON endpoint with proper headers
    try {
      const username = "utxuiux";
      const response = await fetch(`https://www.instagram.com/${username}/`, {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept": "text/html,application/xhtml+xml",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
        },
      });

      if (response.ok) {
        const html = await response.text();
        
        // Extract JSON data from HTML script tag
        const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
        if (match) {
          const jsonData = JSON.parse(match[1]);
          if (jsonData.itemListElement && Array.isArray(jsonData.itemListElement)) {
            const posts = jsonData.itemListElement
              .slice(0, 3)
              .map((item: any) => ({
                id: item.url?.split("/").filter(Boolean).pop() || Math.random().toString(),
                caption: item.description || "Instagram Post",
                mediaUrl: item.image || "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
                permalink: item.url || `https://instagram.com/${username}`,
                timestamp: new Date(item.datePublished || Date.now()).toISOString(),
              }));
            
            if (posts.length > 0) {
              console.log(`✓ Fetched ${posts.length} posts from Instagram (JSON)`);
              return res.status(200).json({ posts });
            }
          }
        }
      }
    } catch (error) {
      console.error("Instagram JSON API error:", error);
    }

    // Fallback: Return instructional message
    console.log("⚠ Could not fetch real Instagram posts. To enable:");
    console.log("1. Get a RapidAPI key from https://rapidapi.com/instagram-data1-instagram-data2/api/instagram-data1");
    console.log("2. Add to .env: RAPIDAPI_KEY=your_key_here");
    
    const placeholderPosts = [
      {
        id: "1",
        caption: "Follow @utxuiux for daily design inspiration and UI/UX tips",
        mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        permalink: "https://instagram.com/utxuiux",
        timestamp: new Date().toISOString(),
      },
      {
        id: "2",
        caption: "Explore the latest design trends and creative work",
        mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        permalink: "https://instagram.com/utxuiux",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "3",
        caption: "Design systems and component libraries",
        mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        permalink: "https://instagram.com/utxuiux",
        timestamp: new Date(Date.now() - 172800000).toISOString(),
      },
    ];

    return res.status(200).json({ posts: placeholderPosts });
  } catch (error: any) {
    console.error("Instagram posts error:", error);
    return res.status(500).json({
      error: "Failed to fetch Instagram posts",
      details: error.message,
    });
  }
}

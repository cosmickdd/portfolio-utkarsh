export async function handleInstagramPosts(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const buildFallbackPosts = () => [
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

  try {
    const username = "utxuiux";

    // Method 1: Try using RapidAPI instagram120 POST endpoint
    const rapidApiKey = process.env.RAPIDAPI_KEY;

    if (rapidApiKey) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(
          `https://instagram120.p.rapidapi.com/api/instagram/posts`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-rapidapi-host": "instagram120.p.rapidapi.com",
              "x-rapidapi-key": rapidApiKey,
            },
            body: JSON.stringify({ username, maxId: "" }),
            signal: controller.signal,
          }
        );

        if (response.ok) {
          const data = await response.json();

          // Normalize various response shapes into a posts array
          let postsArray: any[] = [];
          if (Array.isArray(data)) postsArray = data;
          else if (Array.isArray(data.posts)) postsArray = data.posts;
          else if (Array.isArray(data.data)) postsArray = data.data;
          else if (Array.isArray(data.items)) postsArray = data.items;

          if (postsArray.length > 0) {
            const posts = postsArray.slice(0, 3).map((post: any) => ({
              id: post.id || post.pk || post.media_id || Math.random().toString(),
              caption: post.caption || post.caption_text || post.title || "",
              mediaUrl: post.display_url || post.image || post.media_url || (post.images && post.images[0] && post.images[0].url) || null,
              permalink: post.link || post.permalink || (post.code ? `https://instagram.com/p/${post.code}` : `https://instagram.com/${username}`),
              timestamp: post.taken_at ? new Date(post.taken_at * 1000).toISOString() : (post.timestamp ? new Date(post.timestamp).toISOString() : new Date().toISOString()),
            }));

            console.log(`[Instagram] Successfully fetched ${posts.length} real posts for @${username}`);
            return res.status(200).json({ posts });
          }
        } else {
          const errorBody = await response.text();
          console.warn(`[Instagram] RapidAPI returned ${response.status}: ${errorBody}`);
          return res.status(200).json({ posts: buildFallbackPosts() });
        }
      } catch (error: any) {
        console.warn(`[Instagram] RapidAPI request failed: ${error.message || error}`);
        return res.status(200).json({ posts: buildFallbackPosts() });
      } finally {
        clearTimeout(timeout);
      }
    }

    console.warn("[Instagram] RAPIDAPI_KEY not configured, using fallback posts");
    return res.status(200).json({ posts: buildFallbackPosts() });
  } catch (error: any) {
    console.error("[Instagram] Unexpected error:", error);
    return res.status(200).json({ posts: buildFallbackPosts() });
  }
}

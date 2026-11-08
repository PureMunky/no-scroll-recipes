export const SITE = {
  name: "No Scroll Recipes",
  tagline: "The recipe. Right away.",
  description: "Ad-free recipes with no life stories and no pop-ups. Tap a dish and get the ingredients and steps. Reader-supported.",
  pageSize: 48,
};

// Tip link. `url` is the plain link; amount buttons only show if `amountUrl` is set
// (a link that accepts an amount, e.g. "https://paypal.me/YOURNAME/{amount}").
export const DONATE: { url: string; label: string; amountUrl?: string; amounts: number[] } = {
  url: "https://www.paypal.com/qrcodes/p2pqrc/U7DU8PUJ4QQJN",
  label: "PayPal",
  amounts: [3, 5, 10, 25],
};

// Search engine ownership checks. Paste just the content="…" value from each tool's
// "HTML tag" verification option. Empty = not rendered.
export const VERIFY = {
  google: "",   // Google Search Console → <meta name="google-site-verification" content="…">
  bing: "",     // Bing Webmaster Tools  → <meta name="msvalidate.01" content="…">
};

// Cookie-free, privacy-friendly page counts. Set to your GoatCounter code
// (the "yourcode" in yourcode.goatcounter.com). Empty = no analytics script at all.
export const ANALYTICS = {
  goatcounter: "puremunky",
};

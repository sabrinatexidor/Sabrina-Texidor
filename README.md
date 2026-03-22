# Sabrina Texidor — Personal Website

A complete, professional 6-page personal website for actress/writer/director Sabrina Texidor.

## 🗂 Project Structure

```
sabrina-texidor/
├── index.html          # Home
├── about.html          # About / Bio
├── resume.html         # Full acting credits
├── gallery.html        # Photo gallery
├── reel.html           # Demo reel + clips
├── contact.html        # Contact form + social links
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, scroll effects, lightbox, form
├── images/
│   ├── headshots/      # 8 headshot slots (hs-1.jpg through hs-8.jpg)
│   ├── travel/         # 10 travel photo slots (travel-1.jpg through travel-10.jpg)
│   ├── bts/            # 4 behind-the-scenes slots (bts-1.jpg through bts-4.jpg)
│   └── childhood/      # 4 childhood photo slots (childhood-1.jpg through childhood-4.jpg)
└── README.md
```

## 🖼 Adding Your Photos

Drop your images into the correct `/images/` subfolder using the filenames shown in the placeholders:

| Folder | Files | Notes |
|--------|-------|-------|
| `/images/headshots/` | `hs-1.jpg` through `hs-8.jpg` | Also add `hero.jpg` and `about-portrait.jpg` |
| `/images/travel/` | `travel-1.jpg` through `travel-10.jpg` | Morocco, SA, Venice, Cape Town, etc. |
| `/images/bts/` | `bts-1.jpg` through `bts-4.jpg` | S.W.A.T. set, trailer selfies |
| `/images/childhood/` | `childhood-1.jpg` through `childhood-4.jpg` | Childhood photos |

**Then uncomment the `<img>` tags in each HTML file** — each placeholder has a commented-out img tag right below it showing the correct src path.

For the **hero background photo**, edit `index.html` and uncomment:
```html
<img src="images/headshots/hero.jpg" alt="Sabrina Texidor" class="hero__bg-img" />
```

## 📋 Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io) — a free service:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy your Form ID (looks like `xaabbccd`)
3. In `contact.html`, replace `YOUR_FORM_ID` in the form action URL:
   ```html
   action="https://formspree.io/f/xaabbccd"
   ```
4. Done! Form submissions will go straight to your email.

---

## 🚀 Deploying to GitHub + Netlify

### Step 1 — Push to GitHub

```bash
# Navigate into your project
cd sabrina-texidor

# Initialize Git (already done if you received this as a repo)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit — Sabrina Texidor website"

# Create a repo on GitHub (go to github.com → New repository)
# Name it: sabrina-texidor (or whatever you prefer)
# Leave it public or private — either works with Netlify

# Connect your local repo to GitHub (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/sabrina-texidor.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign in (or create a free account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify to access your repos
4. Select your `sabrina-texidor` repository
5. **Build settings:**
   - Build command: *(leave blank — this is a static HTML site)*
   - Publish directory: `/` (the root of the repo)
6. Click **"Deploy site"**

Netlify will give you a URL like `https://random-name-12345.netlify.app` within seconds.

### Step 3 — Custom Domain (Optional)

If you have a domain like `sabrinatexidor.com`:

1. In Netlify, go to **Site Settings → Domain Management**
2. Click **"Add custom domain"** and enter your domain
3. Update your domain's DNS nameservers to point to Netlify (they'll give you the exact values)
4. Netlify handles SSL/HTTPS automatically — free!

### Step 4 — Continuous Deployment

Once connected, **every time you push to GitHub, Netlify auto-deploys.** Workflow going forward:

```bash
# Make changes, add photos, update content...
git add .
git commit -m "Add headshots + update bio"
git push
# Netlify deploys automatically — live in ~30 seconds!
```

---

## ✏️ Customizing Content

- **Add video clips:** When ready, open `reel.html` and replace the "Coming Soon" cards with Vimeo/YouTube embed iframes
- **Update bio:** Edit the text in `about.html`
- **Add credits:** Add new `.resume-row` divs in `resume.html`
- **Gallery captions:** Edit `data-caption` text in `gallery.html`

---

## 🛠 Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript — no frameworks, no build step
- Google Fonts: Cormorant Garamond + Montserrat
- Vimeo embed for demo reel
- Formspree for contact form
- IntersectionObserver for scroll animations
- Mobile-first responsive design

---

Built with ❤️ for Sabrina Texidor · Los Angeles, CA

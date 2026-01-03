# HTML Named Colors Showcase

A beautiful, interactive showcase of my favorite HTML named colors. This project demonstrates how you can use HTML color names directly in CSS without needing hex codes, while providing an elegant interface to explore and preview these colors.

## Features

- **Interactive Color Cards**: Click any color to see it applied as the page background
- **HEX Code Display**: Each color card shows its corresponding hex value
- **Copy to Clipboard**: Click the copy icon to copy hex codes
- **Dynamic Contrast**: Text color automatically adjusts for optimal readability
- **Responsive Design**: Works beautifully on all screen sizes
- **Live Preview**: See CSS examples update in real-time as you select colors

## My Favorite HTML Colors

Here are the 19 hand-picked HTML named colors featured in this project:

| Color Name | HEX Value |
|------------|-----------|
| Salmon | `#FA8072` |
| Coral | `#FF7F50` |
| Tomato | `#FF6347` |
| Gold | `#FFD700` |
| PapayaWhip | `#FFEFD5` |
| Moccasin | `#FFE4B5` |
| Khaki | `#F0E68C` |
| RebeccaPurple | `#663399` |
| Indigo | `#4B0082` |
| Olive | `#808000` |
| Teal | `#008080` |
| Turquoise | `#40E0D0` |
| CornflowerBlue | `#6495ED` |
| Tan | `#D2B48C` |
| Peru | `#CD853F` |
| Snow | `#FFFAFA` |
| WhiteSmoke | `#F5F5F5` |
| SeaShell | `#FFF5EE` |
| Gainsboro | `#DCDCDC` |

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.10 (with Turbopack)
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.1.0+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.1.9
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ (or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/glrodasz/html-colors.git
cd html-colors
```

2. Install dependencies:

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

## Project Structure

```
html-colors/
├── app/
│   ├── layout.tsx      # Root layout with metadata and fonts
│   ├── page.tsx         # Main page with color grid
│   └── globals.css      # Global styles
├── components/
│   ├── color-card.tsx   # Individual color card component
│   ├── theme-provider.tsx
│   └── ui/
│       └── card.tsx     # Reusable card component
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## How It Works

The project uses browser APIs to dynamically calculate hex values from HTML color names:

1. **Color Name to HEX**: Creates a temporary DOM element, applies the color name, and extracts the computed RGB values
2. **Contrast Calculation**: Determines optimal text color (black or white) based on color brightness
3. **Interactive Preview**: Clicking a color updates the page background and shows a live CSS example

## Deployment

This project is deployed on Vercel and can be accessed at:
- **Production**: [https://html-colors.vercel.app](https://html-colors.vercel.app)

To deploy your own version:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

## License

This project is open source and available for personal and educational use.

## Acknowledgments

- HTML color names are part of the CSS specification
- Built with modern web technologies and best practices
- Inspired by the simplicity and beauty of named colors in CSS

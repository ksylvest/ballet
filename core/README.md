## Installation

```bash
npm install @ballet/core
```

## Usage

**application.tailwind.css**

_Option A:_

```css
@import "tailwindcss";
@import "@ballet/core/all.tailwind.css";
```

_Option B:_

```css
@import "tailwindcss";
@import "@ballet/core/badge.tailwind.css";
@import "@ballet/core/button.tailwind.css";
/* ... */
```

```bash
npm install @tailwindcss/cli
npm exec tailwindcss -i ./application.tailwind.css -o ./application.css
```

## Installation

```bash
npm install @ballet/core
```

## Usage

**application.tailwind.css**

_Option A:_

```css
@import "tailwindcss";
@import "@ballet/core/all";
```

_Option B:_

```css
@import "tailwindcss";
@import "@ballet/core/badge";
@import "@ballet/core/button";
/* ... */
```

```bash
npm install @tailwindcss/cli
npm exec tailwindcss -i ./application.tailwind.css -o ./application.css
```

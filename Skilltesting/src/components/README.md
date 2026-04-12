# Extracted Design System Components

This directory contains components extracted from the Figma Design Library using MCP.

## Components

### Alert Component
A flexible alert component with multiple style variants.

**Props:**
- `variant` - 'default' | 'success' | 'warning' | 'pending' (default: 'default')
- `showIcon` - boolean (default: true)
- `message` - string (default: 'Estado')

**Usage:**
```tsx
import { Alert } from '@/components'

<Alert variant="success" message="Operation completed successfully" />
```

### Avatar Component
A circular avatar component with support for images or text initials.

**Props:**
- `size` - 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `contentType` - 'image' | 'text' (default: 'image')
- `initials` - string (default: 'AA')
- `imageSrc` - string (optional)
- `showBadge` - boolean (default: true)

**Usage:**
```tsx
import { Avatar } from '@/components'

<Avatar size="lg" contentType="text" initials="JD" showBadge={true} />
```

### CheckBox Component
A styled checkbox with optional label support.

**Props:**
- `checked` - boolean (default: false)
- `label` - string (optional)
- `disabled` - boolean (default: false)
- All standard input HTML attributes

**Usage:**
```tsx
import { CheckBox } from '@/components'

<CheckBox id="terms" label="I agree to terms" />
```

## Design Tokens

All components use design tokens from `tokens.ts` and `tokens.css`. Token values are mapped to CSS custom properties (CSS variables) in `index.css`:

- **Colors**: Primitive and semantic color tokens
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding and margin spacing scale
- **Radius**: Border radius tokens
- **Shadows**: Box shadow definitions
- **Opacity**: Opacity values

### Available CSS Variables

Component-ready CSS variables are available throughout the application:

```css
/* Colors */
--primary: #0041a3
--text-primary: #595959
--status-success: #3bd4ae
--status-warning: #ca4949
--status-error: #eb5757

/* Spacing */
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px

/* Typography */
--font-size-body-large: 14px
--font-size-h1: 36px
--font-weight-bold: 700
```

## File Structure

```
src/
├── components/
│   ├── Alert/
│   │   ├── Alert.tsx
│   │   └── Alert.module.css
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   └── Avatar.module.css
│   ├── CheckBox/
│   │   ├── CheckBox.tsx
│   │   └── CheckBox.module.css
│   └── index.ts
├── tokens.ts          (TypeScript token definitions)
├── tokens.css         (CSS variable definitions)
├── index.css          (Global styles with tokens)
└── App.tsx            (Demo page)
```

## Token Extraction

Tokens were automatically extracted and normalized from the Figma Design Library - Eficacia using MCP. All values have been:

- Converted from raw Figma values to production-ready formats
- Mapped to semantic token names
- Organized by token category
- Made available as both TypeScript exports and CSS variables

## Development

To view the components, run:

```bash
npm run dev
```

Navigate to `http://localhost:5173` to see the demo page with all components.

## Future Components to Extract

The following components are available in the Figma file and can be extracted following the same pattern:

- Button (multiple variants)
- Card (multiple types: detail, price, image, news, testimonial)
- Input/TextField
- Select/Dropdown
- Calendar
- Charts
- Progress Card
- Table
- Menu items
- And more...

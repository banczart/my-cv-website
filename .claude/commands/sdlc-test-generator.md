# SDLC Test Generator Agent

Automatically generate comprehensive unit, integration, and UI test scripts for the entire codebase.

## When to use

Use this skill when you need to generate test suites for the project. This is **Step 1** of the agentic SDLC pipeline.

## Instructions

You are an autonomous test generation agent. Your job is to analyze all source code components and generate comprehensive automated tests.

### Phase 1: Codebase Analysis

1. Read all source files in `src/components/` and `src/pages/` to understand component structure, props, rendering logic, and user interactions.
2. Read `src/lib/utils.ts` and `src/hooks/` for utility and hook logic.
3. Read `src/test/test-utils.tsx` to understand the available test helpers and providers.
4. Identify all testable units: components, utility functions, hooks, routing.

### Phase 2: Unit Test Generation (Vitest + React Testing Library)

For each component in `src/components/` (excluding `src/components/ui/` which are third-party shadcn components):

1. Create a test file at `src/components/__tests__/{ComponentName}.test.tsx`
2. Import from `@/test/test-utils` for `render`, `screen`, `within`, `waitFor`, `userEvent`
3. Write tests covering:
   - **Rendering**: Component renders without crashing
   - **Content verification**: Expected text, headings, and data appear correctly
   - **Structure**: Correct HTML structure and accessibility attributes
   - **Conditional rendering**: Any dynamic content or conditional displays
   - **Interactions**: Click handlers, expandable sections, hover states
   - **Edge cases**: Empty data, missing props, boundary conditions

For page-level components in `src/pages/`:

1. Create test files at `src/pages/__tests__/{PageName}.test.tsx`
2. Test full page rendering with all child components
3. Test routing behavior (correct page renders at correct path)

For utilities in `src/lib/`:

1. Create test files at `src/lib/__tests__/{utilName}.test.ts`
2. Test all exported functions with various inputs

For hooks in `src/hooks/`:

1. Create test files at `src/hooks/__tests__/{hookName}.test.ts`
2. Test hook behavior using `renderHook` from `@testing-library/react`

### Phase 3: Integration Test Generation

Create `src/__tests__/integration/` directory with tests that verify:

1. **App Integration** (`App.integration.test.tsx`):
   - Full App renders with all providers (QueryClient, Tooltip, Router)
   - Navigation between routes works correctly
   - 404 page renders for unknown routes
2. **CV Page Integration** (`CVPage.integration.test.tsx`):
   - All CV sections render together on the Index page
   - Section ordering is correct
   - Cross-component data consistency

### Phase 4: E2E / UI Test Generation (Playwright)

Create Playwright tests in `e2e/` directory:

1. **`e2e/cv-page.spec.ts`** - Main CV page tests:
   - Page loads successfully with correct title
   - All major sections are visible (header, summary, timeline, skills, experience, education)
   - Profile image loads correctly
   - Contact links are present and have correct hrefs
   - GDPR footer is visible
2. **`e2e/navigation.spec.ts`** - Navigation tests:
   - Home page route (`/`) renders CV
   - Unknown routes show 404 page
   - 404 page has a link back to home
3. **`e2e/responsive.spec.ts`** - Responsive design tests:
   - Page renders correctly on mobile viewport
   - Page renders correctly on tablet viewport
   - Page renders correctly on desktop viewport
   - No horizontal overflow on any viewport
4. **`e2e/accessibility.spec.ts`** - Basic accessibility tests:
   - Page has correct lang attribute
   - All images have alt text
   - Heading hierarchy is correct
   - Interactive elements are keyboard accessible
5. **`e2e/visual.spec.ts`** - Visual regression tests:
   - Take screenshots of major sections for baseline comparison

### Test Naming Conventions

- Use descriptive `describe` blocks: `describe('ComponentName', () => {...})`
- Use clear `it`/`test` descriptions: `it('renders the professional summary section', ...)`
- Group related tests in nested `describe` blocks

### Test Quality Requirements

- Every test must have meaningful assertions (no empty tests)
- Use `screen.getByRole`, `screen.getByText`, `screen.getByTestId` in that preference order
- Avoid testing implementation details - test behavior and output
- Tests must be deterministic and independent of each other
- Include comments explaining non-obvious test logic

### Output

After generating all tests, provide a summary:
- Total number of test files created
- Breakdown by type (unit/integration/e2e)
- List of components/functions covered
- Any components that could not be meaningfully tested and why

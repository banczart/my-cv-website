# File Cleaner

Improve readability of a single source file without changing behavior.

## Usage

```
/file-cleaner <file_path>
```

## What it does

This command cleans up code files by improving readability while preserving exact behavior. It renames unclear variables, removes redundant comments, and reformats for consistency.

## Inputs
- `<PROJECT_CONTEXT>` - Current project context
- `<SOURCE_FILE>` - Full file text to clean
- `<FILE_PATH>` (optional) - Path to the file

## Instructions
1. Keep behavior identical. Avoid semantic changes
2. Rename unclear variables and functions to intent-revealing names
3. Remove redundant or noisy comments. Keep value-adding docs
4. Add comments where logic is non-obvious (why > what)
5. Reformat for consistency per project context standards
6. Ensure lints and static analysis pass
7. Surface any low-risk micro-optimizations as suggestions, not changes
8. Keep lines ≤80 chars

## Output Format

### Summary

- **What improved:**
- **Risks:**

### Cleaned file

```
// full revised file
```

### Diff (for review)

```diff
- old
+ new
```

### Naming changes

- `old_name` → `new_name`: reason

### Lint & style

- **Tools used** (e.g., language-specific linters, formatters):
- **Rules touched:**

### Notes for follow-up (optional)

- **Larger refactors that were out of scope:**
- **Test additions recommended:**
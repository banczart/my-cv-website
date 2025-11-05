# Code Explainer

Explain code at a high level and surface gotchas.

## Usage

```
/code-explainer <file_path>
```

## What it does

This command analyzes the provided code file and generates a comprehensive explanation including:

- High-level description of what the code does
- Data flow, side effects, and external calls
- Dependencies and contracts
- Potential risks and gotchas
- Improvement suggestions

## Inputs
- `<PROJECT_CONTEXT>` - Current project context
- `<CODE>` - Code to analyze
- `<FILE_PATH>` (optional) - Path to the file

## Instructions
1. Read code in the context of the project
2. Describe what it does in clear, concise terms (prefer bullets)
3. Summarize data flow, side effects, external calls, and I/O
4. Note domain concepts relevant to the business/application context
5. Call out risks, edge cases, and TODOs you would add
6. Keep it actionable and brief. Avoid restating the code line-by-line
7. When helpful, include a small sequence diagram or pseudo-code
8. Keep lines ≤80 chars

## Output Format

### What this code does
- …

### How it works (flow)
- **Inputs:**
- **Processing:**
- **Outputs:**
- **Side effects:**

### Dependencies & contracts
- **Frameworks/libraries used:**
- **Service/API calls:**
- **Databases/tables/queues touched:**

### Assumptions
- …

### Gotchas & risks
- **Concurrency:**
- **Error handling:**
- **Performance:**
- **Security/compliance:**
- **Observability:**

### TODOs / improvements
- **Quick wins:**
- **Follow-ups:**

### Example trace (pseudo)
…
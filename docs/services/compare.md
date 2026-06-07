# Compare Feature

## Overview

**Compare** lets you test multiple AI models **side-by-side with blind evaluation**:
- You don't see which model responded
- Score both responses fairly
- See detailed comparison

Perfect for:
- Model selection
- Vendor evaluation
- Quality benchmarking
- Unbiased testing

---

## Getting Started

1. Go to **Compare**
2. Add 2-4 models
3. Enter test prompt
4. Grade responses (✓/✗)
5. View results

---

## How It Works

### Setup
1. **Select Models** — choose 2-4 to compare
2. **Enter Prompt** — the test question
3. **Submit** — sends same prompt to all

### Blind Evaluation
- You don't know which response is which
- Grade each A, B, C, D independently
- Prevents bias

### Results
- Score matrix
- Response times
- Feature support
- Cost comparison

---

## Evaluation Criteria

### Quality Scoring
- ✅ **Correct** — accurate information
- ⚠️ **Partial** — mostly right, some issues
- ❌ **Wrong** — incorrect or misleading
- 💯 **Excellent** — clear, detailed, helpful

### Speed
- ⚡ **Fast** — < 5 seconds
- 🔄 **Normal** — 5-15 seconds
- 🐢 **Slow** — > 15 seconds

### Features
- Can it handle code?
- Can it use tools?
- Can it see images?
- Can it follow complex instructions?

---

## Use Cases

### Use Case 1: Model Selection
```
Comparing 3 models for your project:
- Mistral 7B (local)
- OpenAI GPT-4 (API)
- Claude 3 Sonnet (API)

Test: "Explain async/await in JavaScript"
Winner: GPT-4 (clearest, best examples)
```

### Use Case 2: API vs Local
```
Comparing cost vs quality:
- Free local model (7B)
- Paid API (GPT-4)

Multiple tests to break even point
Calculate ROI
```

### Use Case 3: Version Comparison
```
Testing new model version:
- Current: Model v1.0
- New: Model v1.1

Same prompts → see if improvement is real
```

---

## Best Practices

### Create Fair Tests
- ❌ Biased: "Why is AI great?"
- ✅ Neutral: "Explain AI benefits and limitations"

- ❌ Too easy: "What is 2+2?"
- ✅ Realistic: "Explain distributed systems architecture"

- ❌ Vague: "Write code"
- ✅ Specific: "Write Python function to reverse a linked list"

### Multiple Tests
Don't judge on one prompt:
- Test different domains
- Test various lengths
- Test edge cases
- Average the results

### Document Tests
Save test prompts you use:
- Build test suite
- Repeat tests over time
- Track improvements
- Share with team

---

## Interpreting Results

### Response Quality
- **Correctness** — does it answer correctly?
- **Clarity** — easy to understand?
- **Completeness** — thorough answer?
- **Relevance** — on-topic?

### Speed Metrics
- **Time to first token** — responsiveness
- **Tokens per second** — throughput
- **Total time** — end-to-end

### Cost Analysis
```
Cost per 1000 tokens = API cost
Total cost = tokens × (cost per 1000)

Example:
GPT-4: 1200 tokens × ($0.03/1000) = $0.036
Local: Free but requires GPU
```

---

## Tips

### 1. Consistent Grading
- Have clear rubric
- Grade same way each time
- Use same prompt format

### 2. Multiple Runs
- Some models are non-deterministic
- Run same prompt 3x
- Average the results

### 3. Measure What Matters
- Speed important? → prioritize
- Quality important? → prioritize
- Cost important? → calculate

### 4. Real Workloads
- Test what you'll actually do
- Use your typical prompts
- Include edge cases

---

## Exporting Results

### Save Results
- Automatically saved
- Filterable by date/models
- Searchable

### Export Formats
- CSV — for spreadsheet analysis
- PDF — for reports
- JSON — for automation

### Share
- Email comparison link
- Download and share file
- Publish in docs

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Model not available | Check Settings → Endpoints |
| Biased results | Re-run with different prompts |
| One model much slower | Normal variation, test again |
| Can't find old results | Search by date in sidebar |

---

## Advanced

### Statistical Analysis
For rigorous testing:
1. Run 20+ tests
2. Calculate average scores
3. Calculate standard deviation
4. Determine significance

### A/B Testing
Test quality improvements:
- Run tests with current model
- Make changes
- Run same tests again
- Compare results

---

## When to Compare

✅ Do compare when:
- Choosing which model to use
- Evaluating new model version
- Testing API vs local
- Benchmarking for blog post

❌ Don't compare:
- Just for fun (use Chat instead)
- When bias won't matter (use Chat)
- High-stakes decisions (test more thoroughly)

---

## See Also

- [Chat Service](./chat.md) — conversational mode
- [Settings](./settings.md) — configure models
- [FAQ](../FAQ.md) — model recommendations
